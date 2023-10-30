---
id: installation-4-nodes
title: Installation d'un cluster à 4 nœuds
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prérequis

### Compréhension

Avant de suivre cette procédure, il est recommandé d'avoir un niveau de connaissance satisfaisant du système d'exploitation Linux, de Centreon
et des outils de clustering Pacemaker-Corosync pour bien comprendre ce qui va être fait et pour pouvoir se sortir d'un éventuel faux pas.

### Flux réseaux

En plus des flux réseaux nécessaires décrits dans le chapitre [prérequis](../architectures.md#tableaux-des-flux-réseau)
Il sera nécessaire d'ouvrir les flux supplémentaires suivants :

| Source                            | Destination                       | Protocole | Port     | Commentaires                                                                                                 |
| :-------------------------------- | :-------------------------------- | :-------- | :------- | :----------------------------------------------------------------------------------------------------------- |
| Nœud Central actif                | Nœud Central passif               | SSH       | TCP 22   | Synchronisation des fichiers de configuration (Le flux doit être aussi ouvert dans le sens passif --> actif) |
| Nœud Central actif                | Nœud Central passif               | BDDO      | TCP 5670 | Synchronisation des RRDs (Le flux doit être aussi ouvert dans le sens passif --> actif)                      |
| Nœud BDD actif                    | Nœud BDD passif                   | MySQL     | TCP 3306 | Synchronisation MySQL (Le flux doit être aussi ouvert dans le sens passif --> actif)                         |
| Nœud BDD actif                    | Nœud BDD passif                   | SSH       | TCP 22   | Synchronisation MySQL (Le flux doit être aussi ouvert dans le sens passif --> actif)                         |
| Serveurs Centraux + BDD + QDevice | Serveurs Centraux + BDD + QDevice | Corosync  | UDP 5404 | Communication au sein du cluster (Multicast)                                                                 |
| Serveurs Centraux + BDD + QDevice | Serveurs Centraux + BDD + QDevice | Corosync  | UDP 5405 | Communication au sein du cluster (Unicast)                                                                   |
| Serveurs Centraux + BDD + QDevice | Serveurs Centraux + BDD + QDevice | PCS       | TCP 2224 | Communication au sein du cluster                                                                             |
| Serveurs Centraux + BDD + QDevice | Serveurs Centraux + BDD + QDevice | Corosync  | TCP 5403 | Communication avec le QDevice                                                                                |

### Installation de Centreon

L'installation d'un cluster Centreon-HA ne peut se faire que sur la base d'une installation fonctionnelle de Centreon. Avant de suivre cette procédure, il est donc impératif d'avoir appliqué **[cette procédure d'installation](../../installation/introduction.md)** jusqu'au bout **en réservant environ 5GB de libre** sur le *volume group* qui contient  les données MariaDB (point de montage `/var/lib/mysql` par défaut).

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

Afin de respecter les meilleures pratiques et de bénéficier d'une infrastructure aussi résiliente que possible, le placement du serveur
Quorum doit être sur un site différent des deux nœuds principaux, avec des attachements réseaux indépendants.

> **AVERTISSEMENT:** Assurez-vous que SELinux et Firewalld sont désactivés.

### Définition des noms et adresses IP des serveurs

Dans cette procédure, nous ferons référence à des paramètres variant d'une installation à une autre (noms et adresses IP des nœuds par exemple) par l'intermédiaire des macros suivantes :

* `@CENTRAL_MASTER_IPADDR@` : adresse IP du serveur Centreon-Web principal
* `@CENTRAL_MASTER_NAME@` : nom du serveur Centreon-Web principal (doit être identique au résultat de `hostname -s`)
* `@CENTRAL_SLAVE_IPADDR@` : adresse IP du serveur Centreon-Web secondaire
* `@CENTRAL_SLAVE_NAME@` : nom du serveur Centreon-Web secondaire (doit être identique au résultat de `hostname -s`)
* `@DATABASE_MASTER_IPADDR@` : adresse IP du serveur de base de données principal
* `@DATABASE_MASTER_NAME@` : nom du serveur de base de données principal (doit être identique au résultat de `hostname -s`)
* `@DATABASE_SLAVE_IPADDR@` : adresse IP du serveur de base de données secondaire
* `@DATABASE_SLAVE_NAME@` : nom du serveur de base de données secondaire (doit être identique au résultat de `hostname -s`)
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
* `@VIP_SQL_IPADDR@` : adresse IP virtuelle du cluster
* `@VIP_SQL_IFNAME@` : nom de l'interface qui portera la VIP
* `@VIP_SQL_CIDR_NETMASK@` : masque de sous-réseau exprimé en nombre de bits sans le '/' (exemple : 24)
* `@VIP_SQL_BROADCAST_IPADDR@` : adresse de broadcast
* `@CENTREON_CLUSTER_PASSWD@` : mot de passe du compte `hacluster`

### Configuration de centreon-broker

#### Liaison au service cbd

Dans une installation standard de Centreon, le service `cbd` pilote deux instances de `centreon-broker-daemon` :

* `central-broker-master` : que l'on appelle aussi "broker central" ou encore "broker SQL", qui redirige toutes les entrées-sorties en provenance des pollers, vers les bases de données, vers le broker RRD, etc.
* `central-rrd-master` : le broker RRD qui reçoit son flux du broker SQL, et dont la seule fonction est d'écrire les fichiers RRD utilisés pour afficher les graphes.

Dans un cluster Centreon-HA, les deux processus broker vont être gérés chacun via un service distinct qui sera piloté par le cluster :

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
| Temps avant activation du processus de basculement (failover) | 0                          |
| Intervalle entre 2 tentatives                                 | 60                         |

* Ajouter une nouvelle sortie IPv4, similaire à la première et nommée par exemple "centreon-broker-slave-rrd" pointant cette fois vers `@CENTRAL_SLAVE_IPADDR@`.

| Output IPv4                                                   |                           |
| ------------------------------------------------------------- | ------------------------- |
| Nom                                                           | centreon-broker-slave-rrd |
| Port de connexion                                             | 5670                      |
| Hôte distant                                                  | `@CENTRAL_SLAVE_IPADDR@`  |
| Temps avant activation du processus de basculement (failover) | 0                         |
| Intervalle entre 2 tentatives                                 | 60                        |

#### Exporter la configuration

Une fois que les actions des deux précédents paragraphes ont été réalisées, il faut exporter la configuration (3 premières cases pour l'export du collecteur "Central") pour que celle-ci soit effective.

Ces actions doivent être réalisées soit sur les deux nœuds, soit uniquement sur `@CENTRAL_MASTER_NAME@` puis les fichiers de configuration de broker doivent être copiés vers `@CENTRAL_SLAVE_NAME@`.

```bash
rsync -a /etc/centreon-broker/*json @CENTRAL_SLAVE_IPADDR@:/etc/centreon-broker/
```

### Modification de la commande de rechargement de `cbd`

Cela n'est pas forcément connu de tous les utilisateurs de Centreon, mais chaque fois qu'un rechargement de la configuration du collecteur central est effectué via l'interface, le service broker (`cbd`) est rechargé (pas seulement centengine), d'où le paramètre "Centreon Broker reload command" dans *Configuration > Collecteurs > Central*.

Ainsi que cela a été expliqué plus haut, les processus broker sont répartis entre deux services : `cbd` pour le broker RRD, `cbd-sql` pour le broker central. Dans le cadre d'un cluster centreon-ha, service que l'on doit recharger lors de l'export de configuration est `cbd-sql` et non plus `cbd`. Il faut donc appliquer la valeur `service cbd-sql reload` au paramètre "Centreon Broker reload command".

## Préparation du système

Avant d'en arriver au paramétrage du cluster à proprement parler, quelques étapes préparatoires sont nécessaires au niveau de l'OS.

### Optimisation de la configuration réseau

Afin d'améliorer la fiabilité du cluster et étant donné que *Centreon HA* ne fonctionne qu'en IP v4, il est recommandé d'appliquer le tuning suivant sur tous les serveurs de la plateforme Centreon :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

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
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
cat >> /etc/sysctl.conf <<EOF
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv4.tcp_retries2 = 3
net.ipv4.tcp_keepalive_time = 200
net.ipv4.tcp_keepalive_probes = 2
net.ipv4.tcp_keepalive_intvl = 2
EOF
systemctl restart network
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
@DATABASE_MASTER_IPADDR@ @DATABASE_MASTER_NAME@
@DATABASE_SLAVE_IPADDR@ @DATABASE_SLAVE_NAME@
@QDEVICE_IPADDR@ @QDEVICE_NAME@
EOF
```

Dans la suite de ce document, on parlera de nœud principal pour le premier et de nœud secondaire pour le second. Cette distinction est purement arbitraire, les rôles pourront bien sûr être échangés une fois l'installation terminée.

### Installation des paquets

Centreon propose les paquets `centreon-ha-common` et `centreon-ha-web`, qui fournit tous les scripts et les dépendances nécessaires au fonctionnement d'un cluster Centreon.

#### Serveurs Centraux

Ces paquets sont à installer sur l'ensemble les 2 Serveurs Centraux :

<Tabs groupId="sync">
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
<TabItem value="Alma Linux 8" label="Alma Linux 8">

```bash
dnf config-manager --enable ha
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt update && apt install centreon-ha-web pcs pacemaker corosync corosync-qdevice 
```

</TabItem>
<TabItem value="RHEL 7" label="RHEL 7">

```bash
yum install epel-release
subscription-manager repos --enable rhel-7-for-x86_64-highavailability-rpms
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install epel-release
yum install centreon-ha-web pcs pacemaker corosync corosync-qdevice 
```

</TabItem>
</Tabs>

#### Serveurs Base de données

These packages must be installed on both Database Servers (Except Quorum):

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

```bash
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable rhel-8-for-x86_64-highavailability-rpms
dnf install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

```bash
dnf config-manager --enable ol8_addons
dnf install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Alma Linux 8" label="Alma Linux 8">

```bash
dnf config-manager --enable ha
dnf install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt update && apt install centreon-ha-common pcs pacemaker corosync corosync-qdevice 
```

</TabItem>
<TabItem value="RHEL 7" label="RHEL 7">

```bash
yum install epel-release
subscription-manager repos --enable rhel-7-for-x86_64-highavailability-rpms
dnf install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install epel-release
yum install centreon-ha-common pcs pacemaker corosync corosync-qdevice 
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

Après avoir lancé ces commandes sur les deux nœuds, copier le contenu du fichier qui s'est affiché sous la commande `cat` et le coller dans le fichier (à créer) `~/.ssh/authorized_keys`, sur l'autre noeud puis appliquer les bons droits sur le fichier (toujours en tant que `centreon`) :

```bash
chmod 600 ~/.ssh/authorized_keys
```

L'échange de clefs doit ensuite être validé par une première connexion qui permettra d'accepter la signature du serveur SSH (toujours en tant que `centreon`) :

```bash
ssh <nom de l'autre nœud>
```

Puis sortir de la session de `centreon` avec `exit` ou `Ctrl-D`.

#### Compte `mysql`

Pour le compte `mysql` la procédure diffère quelque peu, car cet utilisateur n'a normalement pas de *home directory* ni la possibilité d'ouvrir une session Shell. Cette procédure est à appliquer sur les deux nœuds base de données.

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

Après avoir lancé ces commandes sur les deux nœuds, copier le contenu du fichier et le coller dans `~/.ssh/authorized_keys`, sur l'autre noeud puis appliquer les bons droits sur le fichier (toujours en tant que `mysql`) :

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

**Remarque :** sauf une mention contraire, chacune des étapes suivantes est à réaliser **sur les deux nœuds de bases de données**.

### Configuration de MariaDB

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8/ RHEL 7 / CentOS 7">

Pour commencer, il faut optimiser la configuration de MariaDB, qui sera concentrée dans le seul fichier `/etc/my.cnf.d/server.cnf`. Par défaut, la section `[server]` de ce fichier est vide, c'est là que doit être collées les lignes suivantes :

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

```ini
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

> **Attention:** N'oubliez pas de modifier le paramètre `Chemin d'accès au fichier de configuration MySQL` in **Administration > Paramètres > Backup**

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
CREATE USER '@MARIADB_CENTREON_USER@'@'@DATABASE_SLAVE_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MARIADB_CENTREON_USER@'@'@DATABASE_SLAVE_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MARIADB_CENTREON_USER@'@'@DATABASE_SLAVE_IPADDR@';

CREATE USER '@MARIADB_CENTREON_USER@'@'@DATABASE_MASTER_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MARIADB_CENTREON_USER@'@'@DATABASE_MASTER_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MARIADB_CENTREON_USER@'@'@DATABASE_MASTER_IPADDR@';
```

Optionnellement, et pour que les scripts d'administration fonctionnent sur l'ensemble des nœuds du Cluster (Centraux Web inclus), les utilisateurs suivants:

```sql
CREATE USER '@MARIADB_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MARIADB_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MARIADB_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@';

CREATE USER '@MARIADB_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MARIADB_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MARIADB_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@';
```

Lors d'un upgrade de centreon-ha depuis une plateforme Centreon ou un déploiement de VM via OVA/OVF, mettre à jour le mot de passe `'@MARIADB_CENTREON_USER@'@'localhost'`:

```sql
ALTER USER '@MARIADB_CENTREON_USER@'@'localhost' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
```

### Création du compte de réplication

Toujours dans le prompt MariaDB (cf paragraphe précédent) créer l'utilisateur `@MARIADB_REPL_USER@`, dédié à la réplication, à l'aide des commandes suivantes :

```sql
GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'localhost' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'@DATABASE_SLAVE_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'@DATABASE_MASTER_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';
```

Optionnellement, et pour que les scripts d'administration fonctionnent sur l'ensemble des nœuds du Cluster (Centraux Web inclus), les utilisateurs suivants:

```sql
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

DBHOSTNAMEMASTER='@DATABASE_MASTER_NAME@'
DBHOSTNAMESLAVE='@DATABASE_SLAVE_NAME@'
DBREPLUSER='@MARIADB_REPL_USER@'
DBREPLPASSWORD='@MARIADB_REPL_PASSWD@'
DBROOTUSER='@MARIADB_REPL_USER@'
DBROOTPASSWORD='@MARIADB_REPL_PASSWD@'
CENTREON_DB='centreon'
CENTREON_STORAGE_DB='centreon_storage'

###############################
```

Pour s'assurer que les dernières étapes ont été effectuées correctement, et que les bons noms, logins et mots de passe ont bien été saisis dans le fichier de configuration, il faut lancer la commande depuis un serveur database (ou depuis n'importe quel serveur si vous avez ajouté les comptes optionnels) :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Le résultat attendu est :

```text
Connection MASTER Status '@DATABASE_MASTER_NAME@' [OK]
Connection SLAVE Status '@DATABASE_SLAVE_NAME@' [OK]
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
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8/ RHEL 7 / CentOS 7">

Maintenant, que tout est bien configuré, il faut activer le mode `read_only` sur les deux serveurs en décommentant (*ie.* retirer le `#` en début de ligne) cette instruction dans le fichier `/etc/my.cnf.d/server.cnf` :

* Nœud de bases de données principal

```ini
[server]
server-id=1
read_only
log-bin=mysql-bin
```

* Nœud de bases de données secondaire

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

Pour synchroniser les bases, arrêter le service `mysql` sur le nœud de bases de données secondaire pour écraser ses données avec celles du serveur principal.

Il faut donc lancer la commande suivante sur **le nœud de bases de données secondaire** :

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

Une fois que le service est bien arrêté sur **le nœud de bases de données secondaire**, lancer le script de synchronisation **depuis le nœud de bases de données principal** :

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

Ce script est très verbeux, et tout ce qui s'affiche n'est pas forcément compréhensible, mais pour s'assurer qu'il s'est bien déroulé jusqu'au bout, il suffit de s'assurer que la fin ressemble bien à :

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
Connection MASTER Status '@DATABASE_MASTER_NAME@' [OK]
Connection SLAVE Status '@DATABASE_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

## Mise en place du cluster Centreon

**Informations :** Ces opérations sont à réalisées sur les noeuds `@CENTRAL_MASTER_NAME@` et `@CENTRAL_SLAVE_NAME@`

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

Les tâches planifiées de type **cron** sont exécutées directement par le processus gorgone dans les architectures hautement disponibles. Cela permet de garantir la non-concurrence de leur exécution sur les nœuds centraux. Il est donc nécessaire de les supprimer manuellement :

```bash
rm -f /etc/cron.d/centreon
rm -f /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-auto-disco
rm -f /etc/cron.d/centreon-ha-mysql
```

### Modification des droits

Les répertoires /var/log/centreon-engine et /tmp/centreon-autodisco sont partagés entre plusieurs processus. Il est nécessaire
de modifier les droits des répertoires et fichiers pour garantir le bon fonctionnement de la réplication de fichiers et de la
découverte automatique des services :

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
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7">

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

**Informations :** Ces opérations sont à réaliser sur l'ensemble des nœuds `@CENTRAL_MASTER_NAME@`, `@CENTRAL_SLAVE_NAME@`, `@DATABASE_MASTER_NAME@` et `@DATABASE_SLAVE_NAME@`. Centreon est installé par dépendances du paquet centreon-ha sur les nœuds de bases de données, cela n'a pas d'incidences  sur le fonctionnement.

Les services applicatifs de Centreon ne seront plus lancés au démarrage du serveur comme c'est le cas pour une installation standard, ce sont les services de clustering qui s'en chargeront. Il faut donc arrêter et désactiver ces services.

For **Central nodes**

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon
```

</TabItem>
<TabItem value="Debian 11 " label="Debian 11">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd apache2 php8.1-fpm centreon 
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd apache2 php8.1-fpm centreon 
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd php-fpm centreon
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd php-fpm centreon
```

</TabItem>
</Tabs>

And for **Database nodes**

```bash
systemctl stop mariadb
systemctl disable mariadb
```

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7">
Le service MariaDB étant sur un mode mixte entre SysV init et systemd, pour bien s'assurer qu'il ne soit plus lancé au démarrage, il faut également lancer la commande :

```bash
chkconfig mysql off
```

</TabItem>
<TabItem value="Debian 11 " label="Debian 11">
Le service MariaDB étant sur un mode mixte entre SysV init et systemd, pour bien s'assurer qu'il ne soit plus lancé au démarrage, il faut également lancer la commande :

```bash
update-rc.d -f mariadb remove
```

</TabItem>
</Tabs>

### Création du cluster

#### Activation des services de clustering

Pour commencer, démarrer le service pcsd sur l'ensemble des nœuds :

```bash
systemctl start pcsd
```

#### Préparation du serveur qui jouera le rôle de *Quorum Device*

**Informations :** Cette opération doit être réalisée sur le serveur `@QDEVICE_NAME@`

<Tabs groupId="sync">
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
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="RHEL 7" label="RHEL 7">

```bash
yum install epel-release
subscription-manager repos --enable rhel-7-for-x86_64-highavailability-rpms
yum install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install epel-release
yum install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
</Tabs>

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7">

Modifier le paramètre `COROSYNC_QNETD_OPTIONS` du fichier de configuration `/etc/sysconfig/corosync-qnetd` du Quorum afin de restreindre les connexions entrant à IPv4.

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

Par mesure de simplicité, nous allons définir le même mot de passe pour le compte `hacluster` sur l'ensemble des nœuds `@QDEVICE_NAME@` inclus:

```bash
passwd hacluster
```

Une fois ce mot de passe commun défini, il est possible pour un nœud de s'authentifier sur les autres. **La commande suivante ainsi que toutes les commandes agissant sur le cluster doivent être lancée sur un seul nœud.**

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
pcs host auth \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@DATABASE_MASTER_NAME@" \
    "@DATABASE_SLAVE_NAME@" \
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
    "@DATABASE_MASTER_NAME@" \
    "@DATABASE_SLAVE_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@'
```
 
</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
pcs cluster auth \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@DATABASE_MASTER_NAME@" \
    "@DATABASE_SLAVE_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@' \
    --force
 ```

</TabItem>
</Tabs>

#### Création du cluster

Cette commande doit être lancée sur un des nœuds :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

```bash
pcs cluster setup \
    centreon_cluster \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@DATABASE_MASTER_NAME@" \
    "@DATABASE_SLAVE_NAME@" \
    --force
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
pcs cluster setup \
    --force \
    --name centreon_cluster \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@DATABASE_MASTER_NAME@" \
    "@DATABASE_SLAVE_NAME@"
```

</TabItem>
</Tabs>

Démarrer ensuite `pacemaker` sur l'ensemble des nœuds :

```bash
systemctl enable pacemaker pcsd corosync
systemctl start pacemaker
```

Puis définir les propriétés par défaut sur un des nœuds :

```bash
pcs property set symmetric-cluster="true"
pcs property set stonith-enabled="false"
pcs resource defaults resource-stickiness="100"
```

L'état du cluster peut être suivi en temps réel avec la commande `crm_mon -f`, qui vous permettra de voir apparaître les nouvelles ressources au fur et à mesure.

#### Ajout du *Quorum Device*

Cette commande est lancée depuis un seul nœud, le Cluster va automatiquement répliquer la configuration sur les autres :

```bash
pcs quorum device add model net \
    host="@QDEVICE_NAME@" \
    algorithm="ffsplit"
```

### Création des ressources MariaDB

Les commandes de cette section doivent être lancées depuis un seul nœud, le Cluster va automatiquement répliquer la configuration sur les autres.

#### Process MariaDB Primaire/secondaire

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mariadb-centreon \
    config="/etc/my.cnf.d/server.cnf" \
    pid="/var/lib/mysql/mysql.pid" \
    datadir="/var/lib/mysql" \
    socket="/var/lib/mysql/mysql.sock" \
    binary="/usr/bin/mysqld_safe" \
    node_list="@DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd="@MARIADB_REPL_PASSWD@" \
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
<TabItem value="RHEL 7" label="RHEL 7">

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mariadb-centreon \
    config="/etc/my.cnf.d/server.cnf" \
    pid="/var/lib/mysql/mysql.pid" \
    datadir="/var/lib/mysql" \
    socket="/var/lib/mysql/mysql.sock" \
    binary="/usr/bin/mysqld_safe" \
    node_list="@DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd="@MARIADB_REPL_PASSWD@" \
    test_table='centreon.host'
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mariadb-centreon \
    config="/etc/my.cnf.d/server.cnf" \
    pid="/var/lib/mysql/mysql.pid" \
    datadir="/var/lib/mysql" \
    socket="/var/lib/mysql/mysql.sock" \
    binary="/usr/bin/mysqld_safe" \
    node_list="@DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd="@MARIADB_REPL_PASSWD@" \
    test_table='centreon.host' \
    master
```

</TabItem>
</Tabs>

> **ATTENTION :** la commande suivante varie suivant la distribution Linux utilisée.

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

```bash
pcs resource promotable ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

</TabItem>
<TabItem value="RHEL 7" label="RHEL 7">

```bash
pcs resource master ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

</TabItem>
<TabItem value="CentOS7" label="CentOS7">

```bash
pcs resource meta ms_mysql-master \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

</TabItem>
</Tabs>

##### Adresse VIP Serveurs bases de données

```bash
pcs resource create vip_mysql \
    ocf:heartbeat:IPaddr2 \
    ip="@VIP_SQL_IPADDR@" \
    nic="@VIP_SQL_IFNAME@" \
    cidr_netmask="@VIP_SQL_CIDR_NETMASK@" \
    broadcast="@VIP_SQL_BROADCAST_IPADDR@" \
    flush_routes="true" \
    meta target-role="stopped" \
    op start interval="0s" timeout="20s" \
    stop interval="0s" timeout="20s" \
    monitor interval="10s" timeout="20s"
```

### Création des ressources clones

Les ressources clones sont des ressources actives sur les deux nœuds Centraux.

> **Avertissement :** Toutes les commandes qui suivent ne doivent être lancées que sur un seul des nœuds.

#### PHP8

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7">

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

#### Broker RRD

```bash
pcs resource create "cbd_rrd" \
    systemd:cbd \
    meta target-role="stopped" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="20s" timeout="30s" \
    clone
```

### Création du groupe de ressources Centreon

#### Adresse VIP Serveurs Centraux

```bash
pcs resource create vip \
    ocf:heartbeat:IPaddr2 \
    ip="@VIP_IPADDR@" \
    nic="@VIP_IFNAME@" \
    cidr_netmask="@VIP_CIDR_NETMASK@" \
    broadcast="@VIP_BROADCAST_IPADDR@" \
    flush_routes="true" \
    meta target-role="stopped" \
    op start interval="0s" timeout="20s" \
    stop interval="0s" timeout="20s" \
    monitor interval="10s" timeout="20s" \
    --group centreon
```

#### Service httpd

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

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
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
pcs resource create http \
    systemd:httpd24-httpd \
    meta target-role="started" \
    op start interval="0s" timeout="40s" \
    stop interval="0s" timeout="40s" \
    monitor interval="5s" timeout="20s" \
    --group centreon \
    --force
```

</TabItem>
</Tabs>

#### Service Gorgone

```bash
pcs resource create gorgone \
    systemd:gorgoned \
    meta target-role="stopped" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

#### Service centreon-central-sync

Ce service est spécifique à *Centreon HA*. Sa fonction est de répliquer les changements de configuration, l'ajout d'images via l'interface, etc.

```bash
pcs resource create centreon_central_sync \
    systemd:centreon-central-sync \
    meta target-role="stopped" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

#### Broker SQL

```bash
pcs resource create cbd_central_broker \
    systemd:cbd-sql \
    meta target-role="stopped" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="30s" \
    --group centreon
```

#### Service centengine

```bash
pcs resource create centengine \
    systemd:centengine \
    meta multiple-active="stop_start" target-role="stopped" \
    op start interval="0s" timeout="90s" stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="30s" \
    --group centreon
```

#### Service centreontrapd

```bash
pcs resource create centreontrapd \
    systemd:centreontrapd \
    meta target-role="stopped" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

#### Service snmptrapd

```bash
pcs resource create snmptrapd \
    systemd:snmptrapd \
    meta target-role="stopped" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

### Contraintes

Dans le cadre d'un Cluster avec bases de données déportées, il est nécessaire de définir des contraintes pour spécifier sur quels nœuds les ressources doivent être exécutées.

Exécuter les commandes suivantes pour indiquer au Cluster que les ressources vip_mysql & le rôle primaire doivent être démarrées sur le même nœud :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

```bash
pcs constraint colocation add "vip_mysql" with master "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
pcs constraint colocation add "vip_mysql" with master "ms_mysql-master"
pcs constraint colocation add master "ms_mysql-master" with "vip_mysql"
```

</TabItem>
</Tabs>

Exécuter les commandes suivantes pour indiquer au Cluster sur quels nœuds les ressources doivent être exécutées :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

```bash
pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location ms_mysql-clone avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY
pcs constraint location cbd_rrd-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location ms_mysql-master avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY
pcs constraint location cbd_rrd-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```

</TabItem>
</Tabs>

### Lancement du Cluster et contrôle de l'état des ressources

#### Activer les ressources

```bash
pcs resource enable php-clone
pcs resource enable cbd_rrd-clone
pcs resource meta vip target-role="started"
pcs resource meta vip_mysql target-role="started"
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

Il est possible de suivre l'état du cluster en temps réel via la commande `crm_mon -f`. Suite à l'activation  des ressources, vous devriez obtenir une sortie similaire à celle-ci:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

```bash
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 22 15:00:13 2021
  * Last change:  Wed Sep 15 16:26:53 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 4 nodes configured
  * 21 resource instances configured

Node List:
  * Online: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @DATABASE_MASTER_NAME@ ]
    * Slaves: [ @DATABASE_SLAVE_NAME@ ]
  * vip_mysql   (ocf::heartbeat:IPaddr2):        Started @DATABASE_MASTER_NAME@
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
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Apr 29 12:54:11 2022
Last change: Fri Apr 29 12:34:16 2022 by root via cibadmin on @CENTRAL_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
vip_mysql       (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
```

</TabItem>
</Tabs>

Si la ressource **centreon_central_sync** ne veut pas démarrer, vérifiez si le dossier `/usr/share/centreon-broker/lua` existe **sur les deux noeuds centraux**.

Si non, vous pouvez le créer avec cette commande `mkdir -p /usr/share/centreon-broker/lua`. Puis, lancez un cleanup avec cette commande `pcs resource cleanup`.

#### Ressources désactivées

Lorsque vous faites un `crm_mon -f` et que vous avez une ressource qui est désactivée :

```text
...
 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
vip_mysql       (ocf::heartbeat:IPaddr2):       Stopped (disabled)
...
```

Vous devez activer la ressource avec la commande suivante :

```bash
pcs resource enable @RESSOURCE_NAME@
```

Dans notre cas :

```bash
pcs resource enable vip_mysql
```

#### Contrôler la synchronisation des bases

L'état de la réplication MariaDB peut être vérifié à n'importe quel moment grâce à la commande `mysql-check-status.sh` :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Résultat attendu :

```bash
Connection MASTER Status '@DATABASE_MASTER_NAME@' [OK]
Connection SLAVE Status '@DATABASE_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

Il est possible qu'immédiatement après l'installation, le thread de réplication ne soit pas actif. Un redémarrage de la ressource `ms_mysql` doit permettre d'y remédier.

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

```bash
pcs resource restart ms_mysql-clone
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
pcs resource restart ms_mysql
```

</TabItem>
</Tabs>

#### Contrôle de l'absence de contraintes

En temps normal, seules les contraintes de colocation doivent être actives sur le cluster. La commande `pcs constraint show` doit retourner :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

```bash
Location Constraints:
  Resource: cbd_rrd-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: centreon
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: ms_mysql-clone
    Disabled on: @CENTRAL_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @CENTRAL_SLAVE_NAME@ (score:-INFINITY)
  Resource: php-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
Ordering Constraints:
Colocation Constraints:
  vip_mysql with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with vip_mysql (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Location Constraints:
  Resource: cbd_rrd-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: centreon
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: ms_mysql-master
    Disabled on: @CENTRAL_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @CENTRAL_SLAVE_NAME@ (score:-INFINITY)
  Resource: php-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
Ordering Constraints:
Colocation Constraints:
  vip_mysql with ms_mysql-master (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-master with vip_mysql (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
</Tabs>

## Modifications des fichiers de configuration Centreon

Suite à la mise en place du cluster et de la *vip_mysql*, il est nécessaire de modifier les outputs du Centreon Broker et 3 fichiers de configuration du Central. Ces éléments devront pointer sur la _vip_mysql_ afin de toujours pointer sur le nœud actif MariaDB.
Les 3 fichiers sont :

* /etc/centreon/centreon.conf.php
* /etc/centreon/conf.pm
* /etc/centreon/config.d/10-database.yaml
Il sera nécessaire modifier l'IP de l'ancien nœud actif par l'IP de la *vip_mysql*.

### Modification des outputs central-broker-master

La configuration des *Output* Broker du central-broker-master se fait à l'aide du menu *Configuration  >  Collecteurs  >  Configuration de Centreon Broker*.

* Modifier la sortie "IPv4" en remplaçant "@DATABASE_MASTER_IPADDR@" par @VIP_SQL_IPADDR@ dans la configuration *central-broker-master* :

| Broker Output                         | Parameter  | Value            |
| ------------------------------------- | ---------- | ---------------- |
| Unified SQL                           | DB host    | @VIP_SQL_IPADDR@ |

### Exporter la configuration

Une fois que les actions des deux précédents paragraphes ont été réalisées, il faut exporter la configuration (3 premières cases pour l'export du collecteur "Central") pour que celle-ci soit effective.

Ces actions uniquement sur le `@CENTRAL_MASTER_NAME@` puis les fichiers de configuration de broker doivent être copiés vers `@CENTRAL_SLAVE_NAME@`.

```bash
rsync -a /etc/centreon-broker/*json @CENTRAL_SLAVE_IPADDR@:/etc/centreon-broker/
```

### Modification des 3 fichiers de configuration

Après avoir modifié l'output du broker, il nous faut modifier les fichiers de configuration de Centreon.
Pour ce faire éditer tout d'abord le fichier `/etc/centreon/conf.pm` et remplacer @DATABASE_MASTER_IPADDR@ par l'adresse de la *vip-mysql* :

```bash
#############################################
# File Added by Centreon
#
$centreon_config = {
       VarLib => "/var/lib/centreon",
       CentreonDir => "/usr/share/centreon/",
       CacheDir => "/var/cache/centreon/",
       "centreon_db" => "centreon",
       "centstorage_db" => "centreon_storage",
       "db_host" => "@VIP_SQL_IPADDR@:3306",
       "db_user" => "@MARIADB_CENTREON_USER@",
       "db_passwd" => '@MARIADB_CENTREON_PASSWD@'
};
# Central or Poller ?
$instance_mode = "central";
# Centreon Centcore Command File
$cmdFile = "/var/lib/centreon/centcore.cmd";
# Deprecated format of Config file.
$mysql_user = "@MARIADB_CENTREON_USER@";
$mysql_passwd = '@MARIADB_CENTREON_PASSWD@';
$mysql_host = "@VIP_SQL_IPADDR@:3306";
$mysql_database_oreon = "centreon";
$mysql_database_ods = "centreon_storage";
1;
```

Puis faite la même opération dans le fichier `/etc/centreon/centreon.conf.php` :

```bash
<?php
/*
 * Centreon is developped with GPL Licence 2.0 :
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt
 * Developped by : Julien Mathis - Romain Le Merlus - Christophe Coraboeuf
 *
 * The Software is provided to you AS IS and WITH ALL FAULTS.
 * Centreon makes no representation and gives no warranty whatsoever,
 * whether express or implied, and without limitation, with regard to the quality,
 * safety, contents, performance, merchantability, non-infringement or suitability for
 * any particular or intended purpose of the Software found on the Centreon web site.
 * In no event will Centreon be liable for any direct, indirect, punitive, special,
 * incidental or consequential damages however they may arise and even if Centreon has
 * been previously advised of the possibility of such damages.
 *
 * For information : contact@centreon.com
 */
/*      Database */
$conf_centreon['hostCentreon'] = "@VIP_SQL_IPADDR@";
$conf_centreon['hostCentstorage'] = "@VIP_SQL_IPADDR@";
$conf_centreon['user'] = "@MARIADB_CENTREON_USER@";
$conf_centreon['password'] = '@MARIADB_CENTREON_PASSWD@';
$conf_centreon['db'] = "centreon";
$conf_centreon['dbcstg'] = "centreon_storage";
$conf_centreon['port'] = "3306";
/* path to classes */
$classdir='./class';
/* Centreon Path */
$centreon_path='/usr/share/centreon/';
?>
```

Et terminer sur avec le dernier fichier `/etc/centreon/config.d/10-database.yaml`

```bash
database:
  db_configuration:
    dsn: "mysql:host=@VIP_SQL_IPADDR@:3306;dbname=centreon"
    username: "@MARIADB_CENTREON_USER@"
    password: "@MARIADB_CENTREON_PASSWD@"
  db_realtime:
    dsn: "mysql:host=@VIP_SQL_IPADDR@:3306;dbname=centreon_storage"
    username: "@MARIADB_CENTREON_USER@"
    password: "@MARIADB_CENTREON_PASSWD@"
```

Ensuite, vous devez redémarrer les ressources gorgone et cbd_central_broker pour que les changements prennent effet.
Utilisez la commande suivante pour redémarrer la ressource gorgone et toutes les ressources suivantes :

```bash
pcs resource restart gorgone
```

Et après le redémarrage des ressources, vérifiez si tout est OK avec la commande `crm_mon -fr`, le résultat devrait être similaire à ceci :

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.1.4-5.el8_7.2-dc6eb4362e) - partition with quoru
m
  * Last updated: Wed Nov 23 10:27:48 2022
  * Last change:  Wed Nov 23 10:27:43 2022 by hacluster via crmd on @CENTRAL_MASTER_NAME@
  * 4 nodes configured
  * 21 resource instances configured

Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ centreon-rhel8-pri-bdd @CENTRAL_SLAVE_NAME@ @DATABASE_SLAVE_NAME@
]

Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ centreon-rhel8-pri-bdd ]
    * Slaves: [ @DATABASE_SLAVE_NAME@ ]
    * Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * vip_mysql   (ocf::heartbeat:IPaddr2):        Started centreon-rhel8-pri-bdd
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
    * Stopped: [ centreon-rhel8-pri-bdd @DATABASE_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
    * Stopped: [ centreon-rhel8-pri-bdd @DATABASE_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_MASTER_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_MASTER_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_MASTER_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_MASTER_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_MASTER_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_MASTER_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started@CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@

Migration Summary:
```

Si une erreur est trouvée pendant l'exécution de vos ressources, essayez de "nettoyer" avec cette commande :

```bash
pcs resource cleanup
```

## Intégrer des collecteurs

Il ne reste maintenant plus qu'à [intégrer des collecteurs](integrating-pollers.md) et commencer à superviser !
