---
id: installation-2-nodes
title: Installation d'un cluster à 2 nœuds
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prérequis

### Compréhension

Avant de suivre cette procédure, il est recommandé d'avoir un niveau de connaissance satisfaisant du système d'exploitation Linux, de Centreon et des outils de clustering Pacemaker-Corosync pour bien comprendre ce qui va être fait et savoir résoudre un éventuel incident.

> **AVERTISSEMENT :** Toute personne mettant en application cette procédure doit être consciente qu'elle prend ses responsabilités en cas de dysfonctionnement. En aucun cas la société Centreon ne saurait être tenue pour responsable d'une quelconque détérioration ou perte de données.

### Flux réseaux

En plus des flux réseaux nécessaires décrits dans le chapitre [prérequis](../architectures.md#Tableaux_des_flux_réseau)
Il sera nécessaire d'ouvrir les flux supplémentaires suivants :

| Source                      | Destination                 | Protocole | Port     | Commentaires                                                                                                 |
| :-------------------------- | :-------------------------- | :-------- | :------- | :----------------------------------------------------------------------------------------------------------- |
| Nœud actif                  | Nœud passif                 | SSH       | TCP 22   | Synchronisation des fichiers de configuration (Le flux doit être aussi ouvert dans le sens passif --> actif) |
| Nœud actif                  | Nœud passif                 | BDDO      | TCP 5670 | Synchronisation des RRDs (Le flux doit être aussi ouvert dans le sens passif --> actif)                      |
| Nœud actif                  | Nœud passif                 | MySQL     | TCP 3306 | Synchronisation MySQL (Le flux doit être aussi ouvert dans le sens passif --> actif)                         |
| Serveurs Centraux + QDevice | Serveurs Centraux + QDevice | Corosync  | UDP 5404 | Communication au sein du cluster (Multicast)                                                                 |
| Serveurs Centraux + QDevice | Serveurs Centraux + QDevice | Corosync  | UDP 5405 | Communication au sein du cluster (Unicast)                                                                   |
| Serveurs Centraux + QDevice | Serveurs Centraux + QDevice | PCS       | TCP 2224 | Communication au sein du cluster                                                                             |
| Serveurs Centraux + QDevice | Serveurs Centraux + QDevice | Corosync  | TCP 5403 | Communication avec le QDevice                                                                                |

### Installation de Centreon

L'installation d'un cluster Centreon-HA ne peut se faire que sur la base d'une installation fonctionnelle de Centreon. Avant de suivre cette procédure, il est donc impératif d'avoir appliqué **[cette procédure d'installation](../introduction.md)** jusqu'au bout **en réservant environ 5GB de libre** sur le *volume group* qui contient  les données MariaDB (point de montage `/var/lib/mysql` par défaut).

La commande `vgs` doit retourner un affichage de la forme ci-dessous (en particulier la valeur sous `VFree`) :

```text
  VG                    #PV #LV #SN Attr   VSize   VFree 
  centos_centreon-c1      1   5   0 wz--n- <31,00g <5,00g
```

* Les fichiers MariaDB `ibdata*` et `ib_logfile*` doivent être dans le répertoire "datadir" ou dans un sous-répertoire (les scripts `centreondb-smooth-backup.sh` et `mysql-sync-bigdb.sh` ne sont pas compatibles avec cette opération) ;
* Les fichiers MariaDB `log-bin*` et `relay-log*` peuvent être situés dans un répertoire (ou un sous-répertoire) différent de "datadir". Ils peuvent également se trouver sur un volume logique (`lvm`) différent de "datadir". Cependant, le volume logique doit être situé dans le groupe de volume où "datadir" est stocké.

> **AVERTISSEMENT :** Si ces prérequis spécifiques ne sont pas respectés, la méthode de synchronisation des bases de données décrite ci-dessous ne fonctionnera pas.

### Quorum Device

Pour le bon fonctionnement du cluster, en particulier pour éviter les cas de split-brain, il est nécessaire d'avoir un serveur tiers pour tenir le rôle d'arbitre. Il est possible d'utiliser un collecteur pour remplir ce rôle.

> **AVERTISSEMENT:** Assurez-vous que Selinux et Firewalld sont désactivés.

### Définition des noms et adresses IP des serveurs

Dans cette procédure, nous ferons référence à des paramètres variant d'une installation à une autre (noms et adresses IP des nœuds par exemple) par l'intermédiaire des macros suivantes :

* `@CENTRAL_MASTER_IPADDR@` : adresse IP du serveur principal
* `@CENTRAL_MASTER_NAME@` : nom du serveur principal (doit être identique au résultat de `hostname -s`)
* `@CENTRAL_SLAVE_IPADDR@` : adresse IP du serveur secondaire
* `@CENTRAL_SLAVE_NAME@` : nom du serveur secondaire (doit être identique au résultat de `hostname -s`)
* `@QDEVICE_IPADDR@` : adresse IP du serveur supportant le *quorum device*
* `@QDEVICE_NAME@` : nom du serveur supportant le *quorum device* (doit être identique au résultat de `hostname -s`)
* `@MARIADB_REPL_USER@` : nom du compte MariaDB de réplication (suggéré : centreon-repl)
* `@MARIADB_REPL_PASSWD@` : mot de passe de ce compte
* `@MARIADB_CENTREON_USER@` : nom du compte MariaDB de Centreon (suggéré : centreon)
* `@MARIADB_CENTREON_PASSWD@` : mot de passe de ce compte
* `@VIP_IPADDR@` : adresse IP virtuelle du cluster
* `@VIP_IFNAME@` : nom de l'interface qui portera la VIP
* `@VIP_CIDR_NETMASK@` : masque de sous-réseau exprimé en nombre de bits sans le '/' (exemple : 24)
* `@VIP_BROADCAST_IPADDR@` : adresse de broadcast
* `@CENTREON_CLUSTER_PASSWD@` : mot de passe du compte `hacluster`

### Configuration de centreon-broker

#### Liaison au service cbd

Dans une installation standard de Centreon, le service `cbd` pilote deux instances de `centreon-broker-daemon` :

* `central-broker-master` : que l'on appelle aussi "broker central" ou encore "broker SQL", qui redirige toutes les entrées-sorties en provenance des collecteurs, vers les bases de données, vers le broker RRD, etc.
* `central-rrd-master` : le broker RRD qui reçoit son flux du broker SQL, et dont la seule fonction est d'écrire les fichiers RRD utilisés pour afficher les graphes.

Dans un cluster Centreon-HA, les deux processus broker vont être gérés chacun via un service distinct qui sera pilotés par le cluster :

* `central-broker-master` en tant que la ressource `cbd_central_broker`, liée au service *systemd* `cbd-sql`
* `central-rrd-master` en tant que la ressource clone `cbd_rrd`, liée au service *systemd* `cbd` standard de Centreon.

Pour que tout se mette bien en place dans la suite, il faut dès à présent défaire la liaison entre central-broker-master et le service `cbd` **en cochant "non" pour le paramètre "Lié au service cbd"** dans *Configuration* > *Pollers* > *Broker configuration* > *central-broker-master* dans l'onglet *General*.

#### Double flux RRD

Plutôt que de mettre en place une réplication en temps réel des fichiers de données RRD, le choix technique qui a été fait pour permettre d'afficher les graphes sur n'importe quel nœud dès qu'il devient `master` a été de dupliquer le flux de sortie (`output`) de `central-broker-master` vers `central-rrd-master`. Cela se configure dans le même menu qu'au paragraphe précédent, mais cette fois dans l'onglet *Output* de *Configuration  >  Collecteurs  >  Configuration de Centreon Broker*.

* Modifier la sortie "IPv4" en remplaçant "localhost" par `@CENTRAL_MASTER_IPADDR@`

| Output IPv4                                                   |                            |
| ------------------------------------------------------------- | -------------------------- |
| Nom                                                           | centreon-broker-master-rrd |
| Port de connexion                                             | 5670                       |
| Hôte distant                                                  | `@CENTRAL_MASTER_IPADDR@`  |
* Ajouter une nouvelle sortie IPv4, similaire à la première et nommée par exemple "centreon-broker-slave-rrd" pointant cette fois vers `@CENTRAL_SLAVE_IPADDR@`.

| Output IPv4                                                   |                           |
| ------------------------------------------------------------- | ------------------------- |
| Nom                                                           | centreon-broker-slave-rrd |
| Port de connexion                                             | 5670                      |
| Hôte distant                                                  | `@CENTRAL_SLAVE_IPADDR@`  |

#### Exporter la configuration

Une fois que les actions des deux précédents paragraphes ont été réalisées, il faut exporter la configuration (3 premières cases pour l'export du collecteur "Central") pour que celle-ci soit effective.

Ces actions doivent être réalisées soit sur les deux nœuds, soit uniquement sur `@CENTRAL_MASTER_NAME@` puis les fichiers de configuration de broker doivent être copiés vers `@CENTRAL_SLAVE_NAME@`.

```bash
rsync -a /etc/centreon-broker/*json @CENTRAL_SLAVE_IPADDR@:/etc/centreon-broker/
```

### Modification de la commande de rechargement de `cbd`

Cela n'est pas forcément connu de tous les utilisateurs de Centreon, mais chaque fois qu'un rechargement de la configuration du collecteur central est effectué via l'interface, le service broker (`cbd`) est rechargé (pas seulement centengine), d'où le paramètre "Centreon Broker reload command" dans *Configuration > Pollers > Central*.

Ainsi que cela a été expliqué plus haut, les processus broker sont répartis entre deux services : `cbd` pour le broker RRD, `cbd-sql` pour le broker central. Dans le cadre d'un cluster centreon-ha, service que l'on doit recharger lors de l'export de configuration est `cbd-sql` et non plus `cbd`. Il faut donc appliquer la valeur `service cbd-sql reload` au paramètre "Centreon Broker reload command".

## Préparation du système

Avant d'en arriver au paramétrage du cluster à proprement parler, quelques étapes préparatoires sont nécessaires au niveau de l'OS.

**Remarque :** sauf mention contraire, chacune des étapes suivantes est à réaliser **sur les deux nœuds centraux**.

### Tuning de la configuration réseau

Afin d'améliorer la fiabilité du cluster et étant donné que *Centreon HA* ne fonctionne qu'en IP v4, il est recommandé d'appliquer le tuning suivant sur tous les serveurs de la plateforme Centreon :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
cat >> /etc/sysctl.conf <<EOF
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv4.tcp_retries2 = 3
net.ipv4.tcp_keepalive_time = 200
net.ipv4.tcp_keepalive_probes = 2
net.ipv4.tcp_keepalive_intvl = 2
EOF
systemctl restart NetworkManager
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
cat >> /etc/sysctl.conf <<EOF
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv4.tcp_retries2 = 3
net.ipv4.tcp_keepalive_time = 200
net.ipv4.tcp_keepalive_probes = 2
net.ipv4.tcp_keepalive_intvl = 2
EOF
systemctl restart NetworkManager
```

</TabItem>

<TabItem value="Debian 11" label="Debian 11">

```bash
cat >> /etc/sysctl.conf <<EOF
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv4.tcp_retries2 = 3
net.ipv4.tcp_keepalive_time = 200
net.ipv4.tcp_keepalive_probes = 2
net.ipv4.tcp_keepalive_intvl = 2
EOF
reboot
```

</TabItem>
</Tabs>

### Résolution de noms

Pour sécuriser le bon fonctionnement du cluster même en cas de panne du service de résolution de noms, il est impératif que les nœuds se connaissent *via* le fichier `/etc/hosts`.

```bash
cat >/etc/hosts <<"EOF"
127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4
@CENTRAL_MASTER_IPADDR@ @CENTRAL_MASTER_NAME@
@CENTRAL_SLAVE_IPADDR@ @CENTRAL_SLAVE_NAME@
@QDEVICE_IPADDR@ @QDEVICE_NAME@
EOF
```

Dans la suite de ce document, on parlera de nœud principal pour le premier et de nœud secondaire pour le second. Cette distinction est purement arbitraire, les rôles pourront bien sûr être échangés une fois l'installation terminée.

### Installation des paquets

Centreon propose les paquets `centreon-ha-common` et `centreon-ha-web`, qui fournit tous les scripts et les dépendances nécessaires au fonctionnement d'un cluster Centreon. Ces paquets sont à installer sur les deux nœuds centraux :

<Tabs groupId="sync">
<TabItem value="Alma Linux 8" label="Alma Linux 8">

```bash
dnf config-manager --enable ha
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="RHEL 8" label="RHEL 8">

```bash
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable rhel-8-for-x86_64-highavailability-rpms
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

```bash
dnf config-manager --enable ol8_addons
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Alma 9" label="Alma 9">

```bash
dnf config-manager --enable highavailability
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

```bash
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
subscription-manager repos --enable rhel-9-for-x86_64-highavailability-rpms
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Oracle Linux 9" label="Oracle Linux 9">

```bash
dnf config-manager --enable ol9_addons
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>

<TabItem value="Debian 11" label="Debian 11">

```bash
apt update && apt install centreon-ha-web pcs pacemaker corosync corosync-qdevice 
```

</TabItem>
</Tabs>

### Échanges de clefs SSH

Afin de permettre aux deux serveurs centraux d'échanger des fichiers et des commandes, il faut mettre en place la possibilité de se connecter *via* SSH d'un serveur à l'autre pour les utilisateurs :

* `mysql`
* `centreon`

Il existe 2 façons d'échanger des clefs SSH :

* En utilisant `ssh-copy-id` : l'utilisation de cette commande nécessite de pouvoir valider l'authentification au moyen d'un mot de passe. Or, il n'est pas souhaitable, pour les comptes de service dont il est question ici, de définir de mot de passe. Si cette méthode est retenue malgré tout, il est recommandé de supprimer le mot de passe après l'échange, avec les commandes `passwd -d centreon` et `passwd -d mysql`
* En copiant manuellement la clef publique dans `~/.ssh/authorized_keys`. Cette méthode est à privilégier, mais demande, pour fonctionner correctement, que seul le propriétaire du fichier soit capable d'accéder en lecture à celui-ci.

C'est la seconde méthode qui sera proposée plus bas.

#### Compte `centreon`

Cette procédure est à appliquer sur les deux nœuds centraux. Pour commencer passer dans l'environnement `bash` de `centreon` :

```bash
su - centreon
```

Puis lancer ces commandes sur les deux nœuds centraux :

```bash
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub
```

Après avoir lancé ces commandes sur les deux nœuds, copier le contenu du fichier qui s'est affiché sous la commande `cat` et le coller dans le fichier (à créer) `~/.ssh/authorized_keys`, puis appliquer les bons droits sur le fichier (toujours en tant que `centreon`) :

```bash
chmod 600 ~/.ssh/authorized_keys
```

L'échange de clefs doit ensuite être validé par une première connexion qui permettra d'accepter la signature du serveur SSH (toujours en tant que `centreon`) :

```bash
ssh <nom de l'autre nœud>
```

Puis sortir de la session de `centreon` avec `exit` ou `Ctrl-D`.

#### Compte `mysql`

Pour le compte `mysql` la procédure diffère quelque peu, car cet utilisateur n'a normalement pas de *home directory* ni la possibilité d'ouvrir une session Shell. Cette procédure est également à appliquer sur les deux nœuds centraux.

```bash
systemctl stop mariadb
mkdir /home/mysql
chown mysql: /home/mysql
usermod -d /home/mysql mysql
usermod -s /bin/bash mysql
systemctl start mariadb
su - mysql
```

Une fois dans l'environnement `bash` de `mysql`, lancer ces commandes sur les deux nœuds centraux :

```bash
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub
```

Après avoir lancé ces commandes sur les deux nœuds, copier le contenu du fichier et le coller dans `~/.ssh/authorized_keys`, puis appliquer les bons droits sur le fichier (toujours en tant que `mysql`) :

```bash
chmod 600 ~/.ssh/authorized_keys
```

L'échange de clefs doit ensuite être validé par une première connexion qui permettra d'accepter la signature du serveur SSH (toujours en tant que `mysql`) :

```bash
ssh <nom de l'autre nœud>
```

Puis sortir de la session de `mysql` avec `exit` ou `Ctrl-D`.

## Mise en place de la réplication MariaDB

Afin que les deux nœuds soient interchangeables à tout moment, il faut que les deux bases de données soient répliquées en continu. Pour cela, nous allons mettre en place une réplication Master-Slave.

**Remarque :** sauf mention contraire, chacune des étapes suivantes est à réaliser **sur les deux nœuds centraux**.

### Configuration de MariaDB

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Pour commencer, il faut améliorer la configuration de MariaDB, qui sera concentrée dans le seul fichier `/etc/my.cnf.d/server.cnf`.  Par défaut, la section `[server]` de ce fichier est vide, c'est là que doit être collées les lignes suivantes :

```ini
[server]
server-id=1 # SET TO 1 FOR MASTER AND 2 FOR SLAVE
#read_only
log-bin=mysql-bin
binlog-do-db=centreon
binlog-do-db=centreon_storage
innodb_flush_log_at_trx_commit=1
sync_binlog=1
binlog_format=MIXED
slave_compressed_protocol=1
slave_parallel_mode=conservative
datadir=/var/lib/mysql
pid-file=/var/lib/mysql/mysql.pid
skip-slave-start
log-slave-updates
gtid_strict_mode=ON
expire_logs_days=7
ignore-db-dir=lost+found

# Tuning standard Centreon
innodb_file_per_table=1
open_files_limit=32000
key_buffer_size=256M
sort_buffer_size=32M
join_buffer_size=4M
thread_cache_size=64
read_buffer_size=512K
read_rnd_buffer_size=256K
max_allowed_packet=64M
# Uncomment for 4 Go Ram
#innodb_buffer_pool_size=512M
# Uncomment for 8 Go Ram
#innodb_buffer_pool_size=1G
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Pour commencer, il faut améliorer la configuration de MariaDB, qui sera concentrée dans le seul fichier `/etc/my.cnf.d/mariadb-server.cnf`.  Par défaut, la section `[server]` de ce fichier est vide, c'est là que doivent être collées les lignes suivantes :

```ini
[server]
server-id=1 # SET TO 1 FOR MASTER AND 2 FOR SLAVE
#read_only
log-bin=mysql-bin
binlog-do-db=centreon
binlog-do-db=centreon_storage
innodb_flush_log_at_trx_commit=1
sync_binlog=1
binlog_format=MIXED
slave_compressed_protocol=1
slave_parallel_mode=conservative
datadir=/var/lib/mysql
pid-file=/var/lib/mysql/mysql.pid
skip-slave-start
log-slave-updates
gtid_strict_mode=ON
expire_logs_days=7
ignore-db-dir=lost+found

# Tuning standard Centreon
innodb_file_per_table=1
open_files_limit=32000
key_buffer_size=256M
sort_buffer_size=32M
join_buffer_size=4M
thread_cache_size=64
read_buffer_size=512K
read_rnd_buffer_size=256K
max_allowed_packet=128M
# Uncomment for 4 Go Ram
#innodb_buffer_pool_size=512M
# Uncomment for 8 Go Ram
#innodb_buffer_pool_size=1G
```

De plus, remplacer la section [mysqld] :

```
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
log-error=/var/log/mariadb/mariadb.log
pid-file=/var/lib/mysql/mysql.pid
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Pour commencer, il faut améliorer la configuration de MariaDB, qui sera concentrée dans le seul fichier `/etc/mysql/mariadb.conf.d/50-server.cnf`. Par défaut, la section `[server]` de ce fichier est vide, c'est là que doit être collées les lignes suivantes :

```ini
[server]
server-id=1 # SET TO 1 FOR MASTER AND 2 FOR SLAVE
#read_only
log-bin=mysql-bin
binlog-do-db=centreon
binlog-do-db=centreon_storage
innodb_flush_log_at_trx_commit=1
sync_binlog=1
binlog_format=MIXED
slave_compressed_protocol=1
slave_parallel_mode=conservative
datadir=/var/lib/mysql
pid-file=/run/mysqld/mysql.pid
skip-slave-start
log-slave-updates
gtid_strict_mode=ON
expire_logs_days=7
ignore-db-dir=lost+found

# Tuning standard Centreon
innodb_file_per_table=1
open_files_limit=32000
key_buffer_size=256M
sort_buffer_size=32M
join_buffer_size=4M
thread_cache_size=64
read_buffer_size=512K
read_rnd_buffer_size=256K
max_allowed_packet=64M
# Uncomment for 4 Go Ram
#innodb_buffer_pool_size=512M
# Uncomment for 8 Go Ram
#innodb_buffer_pool_size=1G
```

De plus, commentez la ligne :

```
#bind-address            = 127.0.0.1
```

</TabItem>
</Tabs>

> **Important :** la valeur de `server-id` doit être différente d'un serveur à l'autre, pour qu'ils puissent s'identifier correctement. Les valeurs 1 => Master et 2 => Slave ne sont pas obligatoires, mais sont recommandées.

**NB :** Ne pas oublier de décommenter (supprimer le '#' en début de ligne) le paramètre `innodb_buffer_pool_size` qui correspond à votre plateforme.

Pour que ces modifications soient bien prises en compte, il faut redémarrer le serveur de base de données :

```bash
systemctl restart mariadb
```

Bien s'assurer que le redémarrage s'est bien déroulé avec la commande suivante :

```bash
systemctl status mariadb
```

> **Avertissement :** Le fichier `centreon.cnf` ne sera plus pris en compte, si des paramètres y ont été personnalisés, il faut les reporter dans `server.cnf`.

> **Avertissement:** N'oubliez pas de changer le paramètre `Chemin d'accès au fichier de configuration MySQL` dans **Administration > Paramètres > Backup**

### Sécurisation de la base de données

L'accès aux bases de données doit être limité de la façon la plus stricte possible. La commande `mysql_secure_installation` permet de supprimer les accès non protégés par des mots de passe et la base de données de test. Lancer cette commande et se laisser guider par les choix par défaut. Attention à choisir un mot de passe n'appartenant à aucun dictionnaire.

```bash
mysql_secure_installation
```

### Création du compte centreon

Pour pouvoir administrer les utilisateurs MariaDB, il faut d'abord se connecter en tant que root (avec le mot de passe saisi au paragraphe précédent) :

```
mysql -p
```

Coller alors dans le prompt MariaDB les commandes ci-dessous en modifiant les adresses IP ainsi que les mots de passe.

```sql
CREATE USER '@MARIADB_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MARIADB_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MARIADB_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@';

CREATE USER '@MARIADB_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MARIADB_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MARIADB_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@';
```

Lorsque la solution centreon-ha est ajoutée à une plateforme Centreon existante ou déployée via une VM OVA, le mot de passe de l'utilisateur `'@MARIADB_CENTREON_USER@'@'localhost'` doit être mis à jour:

```sql
ALTER USER '@MARIADB_CENTREON_USER@'@'localhost' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@'; 
```

### Création du compte de réplication

Toujours dans le prompt MariaDB (cf paragraphe précédent) créer l'utilisateur `@MARIADB_REPL_USER@`, dédié à la réplication, à l'aide des commandes suivantes :

```sql
GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'localhost' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'@CENTRAL_SLAVE_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'@CENTRAL_MASTER_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';
```

### Configuration des variables d'environnement des scripts MariaDB

Le fichier `/etc/centreon-ha/mysql-resources.sh` contient des variables d'environnement qu'il faut adapter à l'installation courante en remplaçant les macros par la valeur qui convient.

```bash
#!/bin/bash

###############################
# Database access credentials #
###############################

DBHOSTNAMEMASTER='@CENTRAL_MASTER_NAME@'
DBHOSTNAMESLAVE='@CENTRAL_SLAVE_NAME@'
DBREPLUSER='@MARIADB_REPL_USER@'
DBREPLPASSWORD='@MARIADB_REPL_PASSWD@'
DBROOTUSER='@MARIADB_REPL_USER@'
DBROOTPASSWORD='@MARIADB_REPL_PASSWD@'
CENTREON_DB='centreon'
CENTREON_STORAGE_DB='centreon_storage'

###############################
```

Pour s'assurer que les dernières étapes ont été effectuées correctement, et que les bons noms, logins et mots de passe ont bien été saisis dans le fichier de configuration, il faut lancer la commande :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Le résultat attendu est :

```text
Connection MASTER Status '@CENTRAL_MASTER_NAME@' [OK]
Connection SLAVE Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [KO]
Error reports:
    No slave (maybe because we cannot check a server).
Position Status [SKIP]
!Error reports:
    Skip because we can't identify a unique slave.
```

Ce qu'il est important de vérifier est que les deux premiers tests de connexion sont `OK`.

### Passage en read-only

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Maintenant, que tout est bien configuré, il faut activer le mode `read_only` sur les deux serveurs en décommentant (*ie.* retirer le `#` en début de ligne) cette instruction dans le fichier `/etc/my.cnf.d/server.cnf` :

* Nœud principal

```ini
[server]
server-id=1
read_only
log-bin=mysql-bin
```

* Nœud secondaire

```ini
[server]
server-id=2
read_only
log-bin=mysql-bin
```

Appliquer ensuite ce changement par un redémarrage de MariaDB sur les deux nœuds :

```bash
systemctl restart mariadb
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Maintenant que tout est bien configuré, activez le mode `read_only` sur les deux serveurs en décommentant (c'est-à-dire en retirant le `#` en début de ligne) cette instruction dans le fichier `/etc/my.cnf.d/mariadb-server.cnf` :

* Nœud principal

```ini
[server]
server-id=1
read_only
log-bin=mysql-bin
```

* Nœud secondaire

```ini
[server]
server-id=2
read_only
log-bin=mysql-bin
```

Appliquez ensuite ce changement par un redémarrage de MariaDB sur les deux nœuds :

```bash
systemctl restart mariadb
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Maintenant, que tout est bien configuré, il faut activer le mode `read_only` sur les deux serveurs en décommentant (*ie.* retirer le `#` en début de ligne) cette instruction dans le fichier `/etc/mysql/mariadb.conf.d/50-server.cnf` :

* Nœud principal

```ini
[server]
server-id=1
read_only
log-bin=mysql-bin
```

* Nœud secondaire

```ini
[server]
server-id=2
read_only
log-bin=mysql-bin
```

Appliquer ensuite ce changement par un redémarrage de MariaDB sur les deux nœuds :

```bash
systemctl restart mariadb
```

</TabItem>
</Tabs>

### Synchroniser les bases et lancer la réplication MariaDB

Pour synchroniser les bases, arrêter le service `mysql` sur le nœud secondaire pour écraser ses données avec celles du serveur principal.

Il faut donc lancer la commande suivante **sur le nœud secondaire** :

```bash
systemctl stop mariadb
```

Dans certains cas, il se peut que systemd ne parvienne pas à arrêter le service `mysql`, pour s'en assurer, vérifier que la commande suivante ne retourne aucune ligne :

```bash
ps -ef | grep mariadb[d]
```

Si un processus `mysqld` est toujours en activité, alors il faut lancer la commande suivante pour l'arrêter (et fournir le mot de passe du compte root de mysql quand il est demandé) :

```bash
mysqladmin -p shutdown
```

Une fois que le service est bien arrêté sur le nœud **secondaire**, lancer le script de synchronisation **depuis le nœud principal** :

```bash
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

Ce script effectue les opérations suivantes :

* vérifier que mysql est arrêté sur le nœud secondaire
* arrêter mysql sur le nœud principal
* monter un snapshot LVM sur le *volume group* qui supporte la partition /var/lib/mysql
* démarrer mysql sur le nœud principal
* mémoriser la position courante dans les logs binaires
* désactiver la variable globale MariaDB `read_only` sur le nœud principal (*ie.* le nœud principal est maintenant autorisé à écrire dans sa base)
* synchroniser tous les fichiers de données (hors base système `mysql`) en écrasant les fichiers du nœud secondaire
* démonter le snapshot LVM
* créer le thread de réplication qui va maintenir les données à jour sur le nœud secondaire

Ce script est très verbeux, et tout ce qui est, s'affiche, n'est pas forcément compréhensible, mais pour s'assurer qu'il s'est bien déroulé jusqu'au bout, il suffit de s'assurer que la fin ressemble bien à :

```text
Umount and Delete LVM snapshot
  Logical volume "dbbackupdatadir" successfully removed
Start MySQL Slave
Start Replication
Id User Host db Command Time State Info Progress
[nombre variable de lignes]
```

Ce qu'il est important de vérifier est que les lignes `Start MySQL Slave` et `Start Replication` ne soient suivies d'aucune erreur.

Si tout s'est bien passé, alors la commande `mysql-check-status.sh` doit renvoyer un résultat sans erreurs :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Résultat attendu :

```text
Connection MASTER Status '@CENTRAL_MASTER_NAME@' [OK]
Connection SLAVE Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

## Mise en place du cluster Centreon

**Remarque :** sauf mention contraire, chacune des étapes suivantes est à réaliser **sur les deux nœuds centraux**.

### Configuration du service de synchronisation

Le service de synchronisation `centreon-central-sync` nécessite que l'on définisse pour chaque nœud dans `/etc/centreon-ha/centreon_central_sync.pm` l'adresse IP de son correspondant :

Ainsi pour le serveur `@CENTRAL_MASTER_NAME@` on doit avoir :

```perl
our %centreon_central_sync_config = (
    peer_addr => "@CENTRAL_SLAVE_IPADDR@"
);
1;
```

Et pour le serveur `@CENTRAL_SLAVE_NAME@` on doit avoir :

```perl
our %centreon_central_sync_config = (
    peer_addr => "@CENTRAL_MASTER_IPADDR@"
);
1;
```

### Suppression des crons

Les tâches planifiées de type **cron** sont exécutées directement par le processus gorgone dans les architectures hautement disponible. Cela permet de garantir la non-concurrence de leur exécution sur les nœuds centraux. Il est donc nécessaire de les supprimer manuellement :

```bash
rm -f /etc/cron.d/centreon
rm -f /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-auto-disco
rm -f /etc/cron.d/centreon-ha-mysql
```

### Modification des droits

Les répertoires /var/log/centreon-engine et /tmp/centreon-autodisco sont partagés entre plusieurs processus. Il est nécessaire
de modifier les droits des répertoires et fichiers pour garantir le bon fonctionnement de la réplication de fichiers et de la
découverte automatique des services:

* Réplication des fichiers

```bash
chmod 775 /var/log/centreon-engine/
mkdir /var/log/centreon-engine/archives
chown centreon-engine: /var/log/centreon-engine/archives
chmod 775 /var/log/centreon-engine/archives/
find /var/log/centreon-engine/ -type f -exec chmod 664 {} \;
find /usr/share/centreon/www/img/media -type d -exec chmod 775 {} \;
find /usr/share/centreon/www/img/media -type f \( ! -iname ".keep" ! -iname ".htaccess" \) -exec chmod 664 {} \;
```

* Découverte des services

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
mkdir /tmp/centreon-autodisco/
chown apache: /tmp/centreon-autodisco/
chmod 775 /tmp/centreon-autodisco/
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
mkdir /tmp/centreon-autodisco/
chown apache: /tmp/centreon-autodisco/
chmod 775 /tmp/centreon-autodisco/
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
mkdir /tmp/centreon-autodisco/
chown www-data: /tmp/centreon-autodisco/
chmod 775 /tmp/centreon-autodisco/
```

</TabItem>
</Tabs>

### Arrêt et désactivation des services

Les services applicatifs de Centreon ne seront plus lancés au démarrage du serveur comme c'est le cas pour une installation standard, ce sont les services de clustering qui s'en chargeront. Il faut donc arrêter et désactiver ces services.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon mysql
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon mysql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon mariadb
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon mariadb
```

</TabItem>
<TabItem value="Debian 11 " label="Debian 11">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd apache2 php8.1-fpm centreon mariadb
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd apache2 php8.1-fpm centreon mariadb
```

</TabItem>
</Tabs>

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Le service MariaDB étant sur un mode mixte entre SysV init et systemd, pour bien s'assurer qu'il ne soit plus lancé au démarrage, il faut également lancer la commande :

```bash
chkconfig mysql off
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
chkconfig mysql off
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Le service MariaDB étant sur un mode mixte entre SysV init et systemd, pour bien s'assurer qu'il ne soit plus lancé au démarrage, il faut également lancer la commande :

```bash
update-rc.d -f mariadb remove
```

</TabItem>
</Tabs>

### Création du cluster

#### Activation des services de clustering

Pour commencer, démarrer le service pcsd sur les deux nœuds centraux :

```bash
systemctl start pcsd
```

#### Préparation du serveur qui jouera le rôle de *Quorum Device*

Vous pouvez utiliser un de vos pollers pour jouer ce rôle. Il doit être préparé avec les commandes suivantes:

<Tabs groupId="sync">
<TabItem value="Alma Linux 8" label="Alma Linux 8">

```bash
dnf config-manager --enable ha
dnf install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="RHEL 8" label="RHEL 8">

```bash
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable rhel-8-for-x86_64-highavailability-rpms
dnf install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

```bash
dnf config-manager --enable ol8_addons
dnf install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="Alma Linux 9" label="Alma Linux 9">

```bash
dnf config-manager --enable ha
dnf install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

```bash
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
subscription-manager repos --enable rhel-9-for-x86_64-highavailability-rpms
dnf install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="Oracle Linux 9" label="Oracle Linux 9">

```bash
dnf config-manager --enable ol9_addons
dnf install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
</Tabs>

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Modifier le paramètre `COROSYNC_QNETD_OPTIONS` du fichier de configuration `/etc/sysconfig/corosync-qnetd` du Quorum afin de restreindre les connexions entrant à IPv4.

```bash
COROSYNC_QNETD_OPTIONS="-4"
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
COROSYNC_QNETD_OPTIONS="-4"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Modifier le paramètre `COROSYNC_QNETD_OPTIONS` du fichier de configuration `/etc/default/corosync-qnetd` du Quorum afin de restreindre les connexions entrant à IPv4.

```bash
COROSYNC_QNETD_OPTIONS="-4"
```

</TabItem>
</Tabs>

#### Authentification auprès des membres du cluster

Par mesure de simplicité, nous allons définir le même mot de passe pour le compte `hacluster` sur les deux nœuds **et sur `@QDEVICE_NAME@`** :

```bash
passwd hacluster
```

Une fois ce mot de passe commun défini, il est possible pour un nœud de s'authentifier sur les autres. **La commande suivante ainsi que toutes les commandes agissant sur le cluster doivent être lancée sur un seul nœud.**

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs host auth \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@'
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs host auth \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@'
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Sur Debian, le cluster est autoconfiguré avec des valeurs par défaut. Afin d'installer notre cluster, nous devons détruire se préparamétrage avec cette commande :

```bash
pcs cluster destroy
```

Puis vous pouvez lancer l'authentification du cluster :

```bash
pcs host auth \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@'
```

</TabItem>
</Tabs>

#### Création du cluster

Cette commande doit être lancée sur un des deux nœuds :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs cluster setup \
    centreon_cluster \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    --force
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs cluster setup \
    centreon_cluster \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    --force
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs cluster setup \
    centreon_cluster \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    --force
```

</TabItem>
</Tabs>

Démarrer ensuite `pacemaker` sur les deux nœuds :

```bash
systemctl enable pacemaker pcsd corosync
systemctl start pacemaker
```

Puis définir les propriétés par défaut sur un des deux nœuds :

```bash
pcs property set symmetric-cluster="true"
pcs property set stonith-enabled="false"
pcs resource defaults resource-stickiness="100"
```

L'état du cluster peut être suivi en temps réel avec la commande `crm_mon -f`, qui vous permettra de voir apparaître les nouvelles ressources au fur et à mesure.

#### Ajout du *Quorum Device*

Cette commande doit être lancée depuis l'un des deux nœuds :

```bash
pcs quorum device add model net \
    host="@QDEVICE_NAME@" \
    algorithm="ffsplit"
```

### Création des ressources MariaDB

Cette commande ne doit être lancée **uniquement sur un des deux nœuds centraux**:

> **ATTENTION :** la commande suivante varie suivant la distribution Linux utilisée.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mariadb-centreon \
    config="/etc/my.cnf.d/server.cnf" \
    pid="/var/lib/mysql/mysql.pid" \
    datadir="/var/lib/mysql" \
    socket="/var/lib/mysql/mysql.sock" \
    binary="/usr/bin/mysqld_safe" \
    node_list="@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd="@MARIADB_REPL_PASSWD@" \
    test_table='centreon.host'
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mariadb-centreon \
    config="/etc/my.cnf.d/mariadb-server.cnf" \
    pid="/var/lib/mysql/mysql.pid" \
    datadir="/var/lib/mysql" \
    socket="/var/lib/mysql/mysql.sock" \
    binary="/usr/bin/mysqld_safe" \
    node_list="@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@" \
    replication_user="centreon-repl" \
    replication_passwd='centreon-repl' \
    test_user="centreon-repl" \
    test_passwd='centreon-repl' \
    test_table='centreon.host'
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mariadb-centreon \
    config="/etc/mysql/mariadb.conf.d/50-server.cnf" \
    pid="/run/mysqld/mysqld.pid" \
    datadir="/var/lib/mysql" \
    socket="/run/mysqld/mysqld.sock" \
    binary="/usr/bin/mysqld_safe" \
    node_list="@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd="@MARIADB_REPL_PASSWD@" \
    test_table='centreon.host'
```

</TabItem>
</Tabs>

> **ATTENTION :** la commande suivante varie suivant la distribution Linux utilisée.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs resource promotable ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs resource promotable ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs resource promotable ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

</TabItem>
</Tabs>

### Création des ressources clones

Certaines ressources ne doivent être démarrées que sur un seul nœud, mais pour d'autres, il n'est pas gênant, voire souhaitable de les démarrer sur les deux nœuds. Pour ces dernières, nous déclarerons des ressources *clones*.

> **Avertissement :** Toutes les commandes qui suivent ne doivent être lancées que sur un seul des deux nœuds centraux.

##### PHP8

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs resource create "php" \
    systemd:php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs resource create "php" \
    systemd:php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs resource create "php" \
    systemd:php8.1-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
```

</TabItem>
</Tabs>

##### Broker RRD

```bash
pcs resource create "cbd_rrd" \
    systemd:cbd \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="20s" timeout="30s" \
    clone
```

### Création du groupe de ressources Centreon

##### Adresse VIP

```bash
pcs resource create vip \
    ocf:heartbeat:IPaddr2 \
    ip="@VIP_IPADDR@" \
    nic="@VIP_IFNAME@" \
    cidr_netmask="@VIP_CIDR_NETMASK@" \
    broadcast="@VIP_BROADCAST_IPADDR@" \
    flush_routes="true" \
    meta target-role="started" \
    op start interval="0s" timeout="20s" \
    stop interval="0s" timeout="20s" \
    monitor interval="10s" timeout="20s" \
    --group centreon
```

##### Service httpd

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs resource create http \
    systemd:httpd \
    meta target-role="started" \
    op start interval="0s" timeout="40s" \
    stop interval="0s" timeout="40s" \
    monitor interval="5s" timeout="20s" \
    --group centreon \
    --force
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs resource create http \
    systemd:httpd \
    meta target-role="started" \
    op start interval="0s" timeout="40s" \
    stop interval="0s" timeout="40s" \
    monitor interval="5s" timeout="20s" \
    --group centreon \
    --force
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs resource create http \
    systemd:apache2 \
    meta target-role="started" \
    op start interval="0s" timeout="40s" \
    stop interval="0s" timeout="40s" \
    monitor interval="5s" timeout="20s" \
    --group centreon \
    --force
```

</TabItem>
</Tabs>

##### Service Gorgone

```bash
pcs resource create gorgone \
    systemd:gorgoned \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

##### Service centreon-central-sync

Ce service est spécifique à *Centreon HA*. Sa fonction est de répliquer les changements de configuration, l'ajout d'images via l'interface, etc.

```bash
pcs resource create centreon_central_sync \
    systemd:centreon-central-sync \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

##### Broker SQL

```bash
pcs resource create cbd_central_broker \
    systemd:cbd-sql \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="30s" \
    --group centreon
```

##### Service centengine

```bash
pcs resource create centengine \
    systemd:centengine \
    meta multiple-active="stop_start" target-role="started" \
    op start interval="0s" timeout="90s" stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="30s" \
    --group centreon
```

##### Service centreontrapd

```bash
pcs resource create centreontrapd \
    systemd:centreontrapd \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

##### Service snmptrapd

```bash
pcs resource create snmptrapd \
    systemd:snmptrapd \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

#### Contraintes de colocation

Pour indiquer au cluster que les ressources Centreon doivent être démarrées sur le nœud portant le rôle *master* MariaDB, nous créons ces deux contraintes :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs constraint colocation add master "centreon" with "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "centreon"
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs constraint colocation add master "centreon" with "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "centreon"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs constraint colocation add master "centreon" with "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "centreon"
```

</TabItem>
</Tabs>

Après cette étape, toutes les ressources doivent être actives au même endroit, et la plateforme fonctionnelle et redondée. Dans le cas contraire, se référer au guide de troubleshooting du paragraphe suivant.

### Activation des ressources

```bash
pcs resource enable php-clone	
pcs resource enable cbd_rrd-clone
pcs resource meta vip target-role="started"
pcs resource meta centreontrapd target-role="started"
pcs resource meta snmptrapd target-role="started"
pcs resource meta centengine target-role="started"
pcs resource meta cbd_central_broker target-role="started"
pcs resource meta gorgone target-role="started"
pcs resource meta centreon_central_sync target-role="started"
pcs resource meta http target-role="started"
```

### Contrôle de l'état du cluster

#### Contrôle de l'état des ressources

Il est possible de suivre l'état du cluster en temps réel via la commande `crm_mon -fr` :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_MASTER_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_MASTER_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_MASTER_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_MASTER_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_MASTER_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_MASTER_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_MASTER_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_MASTER_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_MASTER_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_MASTER_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_MASTER_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_MASTER_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_MASTER_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_MASTER_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_MASTER_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_MASTER_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_MASTER_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_MASTER_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@
```

</TabItem>
</Tabs>

Si la ressource **centreon_central_sync** ne veut pas démarrer, vérifiez si le dossier `/usr/share/centreon-broker/lua` existe.

Si non, vous pouvez le créer avec cette commande `mkdir -p /usr/share/centreon-broker/lua`. Puis, lancez un cleanup avec cette commande `pcs resource cleanup`.

#### Ressources désactivées

Lorsque vous faites un `crm_mon -fr` et que vous avez une ressource qui est désactivée :

```text
...
 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
ms_mysql       (ocf::heartbeat:IPaddr2):       Stopped (disabled)
...
```

Vous devez activer la ressource avec la commande suivante :

```bash
pcs resource enable @RESSOURCE_NAME@
```

Dans notre cas :

```bash
pcs resource enable ms_mysql
```

#### Contrôler la synchronisation des bases

L'état de la réplication MariaDB peut être vérifié à n'importe quel moment grâce à la commande `mysql-check-status.sh` :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Résultat attendu :

```bash
Connection MASTER Status '@CENTRAL_MASTER_NAME@' [OK]
Connection SLAVE Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

Il est possible qu'immédiatement après l'installation, le thread de réplication ne soit pas actif. Un redémarrage de la ressource `ms_mysql` doit permettre d'y remédier.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs resource restart ms_mysql-clone
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs resource restart ms_mysql-clone
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs resource restart ms_mysql-clone
```

</TabItem>
</Tabs>

#### Contrôle de l'absence de contraintes

En temps normal, seules les contraintes de colocation doivent être actives sur le cluster. La commande `pcs constraint` doit retourner :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
</Tabs>

## Intégrer des collecteurs

Il ne reste maintenant plus qu'à [intégrer les collecteurs](./integrating-pollers.md) et commencer à superviser !
