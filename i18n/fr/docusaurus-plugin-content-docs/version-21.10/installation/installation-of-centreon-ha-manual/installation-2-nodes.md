---
id: centreon-ha-2-nodes-installation-manual-failover
title: Installation de Centreon-HA 2 nœuds à basculement manuel
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Conditions préalables

### Compréhension

Avant de suivre cette procédure, il est recommandé d'avoir un niveau de connaissance satisfaisant du système d'exploitation Linux et de Centreon afin de comprendre ce qui va être fait et de pouvoir se sortir d'une éventuelle erreur.

### Installation de Centreon

L'installation d'un cluster Centreon-HA ne peut se faire que sur la base d'une installation fonctionnelle de Centreon. Avant de suivre cette procédure, il est donc impératif d'avoir appliqué **[cette procédure d'installation](https://docs.centreon.com/fr/docs/21.10/installation/introduction/)** jusqu'au bout **en réservant environ 5Go d'espace libre** sur le *groupe de volumes* qui contient les données MySQL (point de montage `/var/lib/mysql` par défaut).

La commande `vgs` devrait retourner un affichage de la forme ci-dessous (en particulier la valeur sous `VFree`) :

```text
  VG                    #PV #LV #SN Attr   VSize   VFree 
  centos_centreon-c1      1   5   0 wz--n- <31,00g <5,00g
```

**Attention :** Si cette condition préalable n'est pas vérifiée, il ne sera pas possible de synchroniser les bases de données comme décrit dans ce document.

### Définition des noms et adresses IP des serveurs

Dans cette procédure, nous ferons référence aux paramètres qui varient d'une installation à l'autre (noms et adresses IP des noeuds par exemple) via les macros suivantes :

* `@CENTRAL_MASTER_IPADDR@` : Adresse IP du serveur central principal
* `@CENTRAL_MASTER_NAME@` : nom du serveur central principal
* `@CENTRAL_SLAVE_IPADDR@` : adresse IP du serveur central secondaire
* `@CENTRAL_SLAVE_NAME@` : nom du serveur central secondaire
* `@DB_MASTER_IPADDR@` : adresse IP du serveur principal de la base de données
* `@DB_MASTER_NAME@` : nom du serveur de base de données principal
* `@DB_SLAVE_IPADDR@` : adresse IP du serveur de base de données secondaire
* `@DB_SLAVE_NAME@` : nom du serveur de base de données secondaire
* `@MYSQL_REPL_USER@` : Nom du compte de réplication MySQL (suggéré : centreon-repl)
* `@MYSQL_REPL_PASSWD@` : mot de passe pour ce compte
* `@MYSQL_CENTREON_USER@` : Nom du compte MySQL de Centreon (suggéré : centreon)
* `@MYSQL_CENTREON_PASSWD@` : mot de passe pour ce compte
* `@CENTRAL_VIP_IPADDR@` : adresse IP virtuelle du cluster
* `@CENTRAL_VIP_IFNAME@` : nom de l'interface qui portera le VIP
* `@CENTRAL_VIP_CIDR_NETMASK@` : masque de sous-réseau exprimé en nombre de bits sans le '/' (exemple : 24)
* `@CENTRAL_VIP_BROADCAST_IPADDR@` : adresse de diffusion (broadcast)
* `@DB_VIP_IPADDR@` : adresse IP virtuelle du cluster, dans le cas d'un HA à 2 noeuds, elle est la même que celle du central.
* `@DB_VIP_IFNAME@` : nom de l'interface qui portera le VIP, dans le cas d'un HA à 2 noeuds, c'est le même que celui du central.
* `@DB_VIP_CIDR_NETMASK@` : masque de sous-réseau exprimé en nombre de bits sans le '/' (exemple : 24), dans le cas d'un HA à 2 noeuds, il est identique au masque central.
* `@DB_VIP_BROADCAST_IPADDR@` : adresse de diffusion, dans le cas d'une HA à 2 noeuds, elle est la même que celle du central.

### Configuration de Centreon-broker

#### Lien vers le service cbd

Dans une installation Centreon standard, le service `cbd` pilote deux instances de `centreon-broker-daemon` :

* `central-broker-master` : également appelé "central broker" ou "SQL broker", qui redirige toutes les entrées/sorties des pollers vers les bases de données, vers le broker RRD, etc.
* central-rrd-master` : le RRD broker qui reçoit son flux du SQL broker, et dont la seule fonction est d'écrire les fichiers RRD utilisés pour afficher les graphes. 

Dans un cluster Centreon-HA, les deux processus de broker seront chacun gérés par un service séparé qui sera piloté par le cluster :

* `central-broker-master` comme ressource `cbd_central_broker`, liée au service *systemd* `cbd-sql`.
* `central-rrd-master` comme ressource clone `cbd_rrd`, liée au service standard Centreon *systemd* `cbd`.

Pour que tout fonctionne correctement dans la suite, vous devez maintenant défaire le lien entre central-broker-master et le service `cbd` ** en cochant "no" pour le paramètre "Linked to cbd service "** dans *Configuration* > *Pollers* > *Configuration broker* > *central-broker-master* dans l'onglet *General*.

#### Double flux RRD

Plutôt que de mettre en place une réplication en temps réel des fichiers de données RRD, le choix technique qui a été fait pour permettre aux graphiques d'être affichés sur n'importe quel noeud dès qu'il devient 'master' a été de dupliquer le flux de sortie de `central-broker-master' vers `central-rrd-master'. Ceci est configuré dans le même menu que dans le paragraphe précédent, mais cette fois dans l'onglet *Output* de *Configuration > Collectors > Centreon Broker Configuration*.

* Modifiez la sortie "IPv4" en remplaçant "localhost" par `@CENTRAL_MASTER_IPADDR@`.

| Sortie IPv4 | |
| --------------- | ------------------ |
| Nom | centreon-broker-master-rrd |
| Port de connexion | 5670 |
| Hôte auquel se connecter | `@CENTRAL_MASTER_IPADDR@` |
| Délai de mise en mémoire tampon | 0 |
| Intervalle de réessai | 60 |

* Add a new IPv4 output, similar to the first one and named for example "centreon-broker-slave-rrd" pointing this time to `@CENTRAL_SLAVE_IPADDR@`.

| Sortie IPv4 | |
| --------------- | ------------------ |
| Nom | centreon-broker-slave-rrd |
| Port de connexion | 5670 |
| Hôte auquel se connecter | `@CENTRAL_SLAVE_IPADDR@` |
| Délai de mise en mémoire tampon | 0 |
| Intervalle de réessai | 60 |

#### Exporter la configuration

Une fois les actions des deux paragraphes précédents effectuées, la configuration doit être exportée (3 premières cases pour l'exportation du poller "Central") pour qu'elle soit effective.

Ces actions doivent être effectuées soit sur les deux noeuds, soit uniquement sur `@CENTRAL_MASTER_NAME@` et ensuite les fichiers de configuration du broker doivent être copiés sur `@CENTRAL_SLAVE_NAME@`.

```bash
rsync -a /etc/centreon-broker/*json @CENTRAL_SLAVE_IPADDR@:/etc/centreon-broker/
```

### Modification de la commande `cbd` reload

Ceci n'est peut-être pas connu de tous les utilisateurs de Centreon, mais à chaque fois qu'un rechargement de la configuration du poller central est effectué via l'interface, le service broker (`cbd`) est rechargé (et pas seulement centengine), d'où le paramètre "Centreon Broker reload command" dans *Configuration > Pollers > Central*.

Comme expliqué ci-dessus, les processus du broker sont répartis entre deux services : `cbd` pour le courtier RRD, `cbd-sql` pour le courtier central. Dans le contexte d'un cluster centreon-ha, le service qui doit être rechargé lors de l'exportation de la configuration est `cbd-sql` et non `cbd`. Vous devez donc appliquer la valeur `service cbd-sql reload` au paramètre "Centreon Broker reload command".

### Synchronisation des fichiers de configuration de Centreon (PHP, Perl, Gorgone)

```bash
rsync -av /etc/centreon/* root@@CENTRAL_SLAVE_IPADDR@:/etc/centreon/
```

## Préparation du système

Avant de passer à la configuration proprement dite du cluster, quelques étapes préparatoires sont nécessaires au niveau du système d'exploitation.

**Note : ** sauf indication contraire, chacune des étapes suivantes doit être effectuée **sur les deux noeuds centraux**.

### Réglage de la configuration du réseau

Afin d'améliorer la fiabilité du cluster et puisque *Centreon HA* ne fonctionne que sur IP v4, il est recommandé d'appliquer les réglages suivants sur tous les serveurs de la plateforme Centreon :

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

Pour éviter les problèmes liés à la gestion des adresses IP fixes et virtuelles, il est nécessaire de déclarer l'adresse IP fixe de chaque serveur dans la configuration du réseau.

Pour ce faire, exécutez les commandes suivantes sur chaque nœud :

Pour le serveur `@CENTRAL_MASTER_NAME@` :

```bash
nmcli con mod @CENTRAL_VIP_IFNAME@ +ipv4.addresses "@CENTRAL_MASTER_IPADDR@/@CENTRAL_VIP_CIDR_NETMASK@"
nmcli con up @CENTRAL_VIP_IFNAME@
```

Pour le serveur `@CENTRAL_SLAVE_NAME@` :

```bash
nmcli con mod @CENTRAL_VIP_IFNAME@ +ipv4.addresses "@CENTRAL_SLAVE_IPADDR@/@CENTRAL_VIP_CIDR_NETMASK@"
nmcli con up @CENTRAL_VIP_IFNAME@
```

Vous pouvez vérifier sur chaque noeud si l'adresse IP est déclarée avec cette commande :

```bash
cat /etc/sysconfig/network-scripts/ifcfg-@CENTRAL_VIP_IFNAME@
```

Le résultat est le même pour `@CENTRAL_MASTER_NAME@` :

```text
...
DEVICE=@CENTRAL_VIP_IFNAME@
ONBOOT=yes
IPADDR=@CENTRAL_MASTER_IPADDR@
PREFIX=23
...
```

### Résolution de noms

Afin de s'assurer que le cluster fonctionne correctement même si le service de résolution de nom échoue, il est impératif que les noeuds se connaissent par le fichier `/etc/hosts`. Dans le cas d'un cluster à 2 noeuds, il n'est pas nécessaire de déclarer les hôtes `@DB_MASTER_NAME@` et `@DB_MASTER_SLAVE@` puisqu'ils sont les mêmes que les hôtes centraux.

```bash
cat >/etc/hosts <<"EOF"
127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4
@CENTRAL_MASTER_IPADDR@ @CENTRAL_MASTER_NAME@
@CENTRAL_SLAVE_IPADDR@ @CENTRAL_SLAVE_NAME@
EOF
```

Dans la suite de ce document, nous ferons référence au nœud primaire comme étant le nœud principal et au nœud secondaire comme étant le nœud secondaire. Cette distinction est purement arbitraire, les rôles peuvent bien sûr être échangés une fois l'installation terminée.

### Installation des paquets

Centreon propose le paquet `centreon-ha`, qui fournit tous les scripts et dépendances nécessaires pour faire fonctionner un cluster Centreon.

Sur tous les :

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

```bash
subscription-manager repos --enable rhel-8-for-x86_64-highavailability-rpms
dnf install centreon-ha-web
```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

```bash
dnf config-manager --enable ol8_addons
dnf install centreon-ha-web
```

</TabItem>
<TabItem value="Alma Linux 8" label="Alma Linux 8">

```bash
dnf config-manager --enable ha
dnf install centreon-ha-web
```

</TabItem>
<TabItem value="RHEL 7" label="RHEL 7">

```bash
subscription-manager repos --enable rhel-7-for-x86_64-highavailability-rpms
dnf install centreon-ha-web
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-ha-web
```

</TabItem>
</Tabs>

### Échange de clés SSH

Afin de permettre aux deux serveurs centraux d'échanger des fichiers et des commandes, il est nécessaire de mettre en place la possibilité de se connecter *via* SSH d'un serveur à l'autre pour les utilisateurs :

* `mysql`
* `centreon`

Il y a 2 façons d'échanger des clés SSH :

* En utilisant `sh-copy-id` : l'utilisation de cette commande nécessite de pouvoir valider l'authentification avec un mot de passe. Cependant, il n'est pas souhaitable de définir un mot de passe pour les comptes de service dont nous parlons ici. Si cette méthode est quand même utilisée, il est recommandé de supprimer le mot de passe après l'échange, avec les commandes `passwd -d centreon` et `passwd -d mysql`.
* En copiant manuellement la clé publique dans `~/.ssh/authorized_keys`. Cette méthode est à privilégier, mais nécessite, pour fonctionner correctement, que seul le propriétaire du fichier soit en mesure de le lire.

C'est la deuxième méthode qui sera proposée ci-dessous.

#### Compte centreon

Cette procédure doit être appliquée sur les deux noeuds centraux. Pour commencer, passez dans l'environnement `bash` de `centreon` :

```bash
su - centreon
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub | tee ~/.ssh/authorized_keys
```

Après avoir exécuté ces commandes sur les deux noeuds, copiez le contenu du fichier qui a été affiché par la commande `cat` et collez-le dans le fichier `~/.ssh/authorized_keys` **sur l'autre noeud** puis appliquez les permissions correctes au fichier (toujours en tant que `centreon`) :

```bash
chmod 600 ~/.ssh/authorized_keys
```

L'échange de clés doit ensuite être validé par une première connexion qui acceptera la signature du serveur SSH (toujours sous le nom de `centreon`) :

```bash
ssh @CENTRAL_MASTER_NAME@
ssh @CENTRAL_SLAVE_NAME@
```

Ensuite, quittez la session `centreon` avec `exit` ou `Ctrl-D`.

#### Compte mysql

Pour le compte `mysql`, la procédure diffère quelque peu car cet utilisateur n'a normalement pas de *répertoire personnel* ni la possibilité d'ouvrir une session Shell. Cette procédure doit également être appliquée sur les deux noeuds centraux.

```bash
systemctl stop mysql
mkdir /home/mysql
chown mysql: /home/mysql
usermod -d /home/mysql mysql
usermod -s /bin/bash mysql
touch /var/log/mysqld.log
chown mysql. /var/log/mysqld.log
systemctl start mysql
```

Ensuite, passez à l'environnement `bash` de `mysql` et générez les clés SSH :

```bash
su - mysql
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub | tee ~/.ssh/authorized_keys
```

Après avoir exécuté ces commandes sur les deux noeuds, copiez le contenu du fichier et collez-le dans `~/.ssh/authorized_keys` **sur l'autre noeud** et appliquez ensuite les permissions correctes au fichier (toujours en tant que `mysql`) :

```bash
chmod 600 ~/.ssh/authorized_keys
```

L'échange de clés doit ensuite être validé par une première connexion qui acceptera la signature du serveur SSH en tapant "yes" (toujours comme `mysql`) :

```bash
ssh @DB_MASTER_NAME@
ssh @DB_SLAVE_NAME@
```

Ensuite, quittez la session `mysql` avec `exit` ou `Ctrl-D`.

## Configuration de la réplication MySQL

Pour que les deux noeuds soient interchangeables à tout moment, les deux bases de données doivent être répliquées en permanence. Pour ce faire, nous allons mettre en place une réplication maître-esclave.

**Note:** sauf indication contraire, chacune des étapes suivantes doit être effectuée **sur les deux nœuds de base de données**.

### Configuration de MySQL

Pour commencer, nous devons régler la configuration de MySQL, qui sera concentrée dans le fichier unique `/etc/my.cnf.d/server.cnf`.  Par défaut, la section `[server]` de ce fichier est vide, et c'est là que les lignes suivantes doivent être collées :

```ini
[server]
sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
server-id=1 # SET TO 1 FOR MASTER AND 2 FOR SLAVE
#read_only
log-bin=mysql-bin
binlog-do-db=centreon
binlog-do-db=centreon_storage
innodb_flush_log_at_trx_commit=1
sync_binlog=1
binlog_format=MIXED
slave_compressed_protocol=1
datadir=/var/lib/mysql
pid-file=/var/lib/mysql/mysql.pid

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

**Important:** la valeur de `server-id` doit être différente d'un serveur à l'autre, afin qu'ils puissent s'identifier correctement. Les valeurs 1 => Maître et 2 => Esclave ne sont pas obligatoires mais sont recommandées.

**NB:** N'oubliez pas de décommenter (enlever le '#' en début de ligne) le paramètre `innodb_buffer_pool_size` qui correspond à votre plateforme.

Pour que ces modifications soient prises en compte, vous devez redémarrer le serveur de base de données :

```bash
systemctl restart mariadb
```

Assurez-vous que le redémarrage a réussi avec la commande suivante :

```bash
systemctl status mariadb
```

**Avertissement:** Le fichier `centreon.cnf` ne sera plus pris en compte, si des paramètres y ont été personnalisés, ils doivent être transférés dans `server.cnf`.

### Sécurisation de la base de données 

L'accès aux bases de données doit être restreint le plus strictement possible. La commande `mysql_secure_installation` permet de supprimer les accès non protégés par des mots de passe et la base de données de test. Exécutez cette commande et laissez-vous guider par les choix par défaut. Faites attention à choisir un mot de passe qui n'appartient à aucun dictionnaire.

```bash
mysql_secure_installation
```

### Création du compte centreon

Pour pouvoir administrer les utilisateurs de MySQL, vous devez d'abord vous connecter en tant que root (avec le mot de passe saisi dans le paragraphe précédent) :

```
mysql -p
```

Puis collez dans l'invite MySQL les commandes ci-dessous en changeant les adresses IP et les mots de passe.

```sql
CREATE USER '@MYSQL_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@' IDENTIFIED BY '@MYSQL_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@';

CREATE USER '@MYSQL_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@' IDENTIFIED BY '@MYSQL_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@';
```

### Création du compte de réplication

Toujours dans le prompt MySQL (voir paragraphe précédent) créez l'utilisateur `@MYSQL_REPL_USER@`, dédié à la réplication, en utilisant les commandes suivantes :

```sql
CREATE USER '@MYSQL_REPL_USER@'@'localhost' IDENTIFIED BY '@MYSQL_REPL_PASSWD@';
GRANT PROCESS, RELOAD, SHUTDOWN, SUPER, REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO '@MYSQL_REPL_USER@'@'localhost';

CREATE USER '@MYSQL_REPL_USER@'@'@CENTRAL_SLAVE_IPADDR@' IDENTIFIED BY '@MYSQL_REPL_PASSWD@';
GRANT PROCESS, RELOAD, SHUTDOWN, SUPER, REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO '@MYSQL_REPL_USER@'@'@DB_SLAVE_IPADDR@';

CREATE USER '@MYSQL_REPL_USER@'@'@CENTRAL_MASTER_IPADDR@' IDENTIFIED BY '@MYSQL_REPL_PASSWD@';
GRANT PROCESS, RELOAD, SHUTDOWN, SUPER, REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO '@MYSQL_REPL_USER@'@'@DB_MASTER_IPADDR@';
```

### Mise en place des purge des logs binaires

Les logs binaires de MySQL doivent être purgées sur les deux nœuds, mais pas en même temps, c'est pourquoi cette tâche automatique est mise en place manuellement de façon différenciée sur les deux serveurs.

* Sur le serveur principal

```bash
cat >/etc/cron.d/centreon-ha-mysql <<EOF
0 4 * * * root bash /usr/share/centreon-ha/bin/mysql-purge-logs.sh >> /var/log/centreon-ha/mysql-purge.log 2>&1
EOF
```

* Sur le serveur secondaire

```bash
cat >/etc/cron.d/centreon-ha-mysql <<EOF
30 4 * * * root bash /usr/share/centreon-ha/bin/mysql-purge-logs.sh >> /var/log/centreon-ha/mysql-purge.log 2>&1
EOF
```

puis redémarrer le service crond sur les deux noeuds:

```bash
systemctl restart crond
```

### Configuration des variables d'environnement pour les scripts MySQL

Le fichier `/etc/centreon-ha/mysql-resources.sh` contient des variables d'environnement qui doivent être adaptées à l'installation actuelle en remplaçant les macros par la valeur appropriée.

```bash
#!/bin/bash

###############################
# Database access credentials #
###############################

DBHOSTNAMEMASTER='@DB_MASTER_NAME@'
DBHOSTNAMESLAVE='@DB_SLAVE_NAME@'
DBREPLUSER='@MYSQL_REPL_USER@'
DBREPLPASSWORD='@MYSQL_REPL_PASSWD@'
DBROOTUSER='@MYSQL_REPL_USER@'
DBROOTPASSWORD='@MYSQL_REPL_PASSWD@'
CENTREON_DB='centreon'
CENTREON_STORAGE_DB='centreon_storage'

##########################################
# Manual failover additional informations #
##########################################

CENTRAL_VIP_IPADDR='@CENTRAL_VIP_IPADDR@'
CENTRAL_VIP_IFNAME='@CENTRAL_VIP_IFNAME@'
CENTRAL_VIP_CIDR_NETMASK='@CENTRAL_VIP_CIDR_NETMASK@'
CENTRAL_VIP_BROADCAST_IPADDR='@CENTRAL_VIP_BROADCAST_IPADDR@'
MYSQL_VIP_IPADDR='@DB_VIP_IPADDR@'
MYSQL_VIP_IFNAME='@DB_VIP_IFNAME@'
MYSQL_VIP_CIDR_NETMASK='@DB_VIP_CIDR_NETMASK@'
MYSQL_VIP_BROADCAST_IPADDR='@DB_VIP_BROADCAST_IPADDR@'
```

Pour s'assurer que les dernières étapes ont été effectuées correctement, et que les noms, identifiants et mots de passe corrects ont été saisis dans le fichier de configuration, exécutez la commande :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Le résultat attendu est le suivant :

```text
Connection Status '@DB_MASTER_NAME@' [OK]
Connection Status '@DB_SLAVE_NAME@' [OK]
Slave Thread Status [KO]
Error reports:
    No slave (maybe because we cannot check a server).
Position Status [SKIP]
!Error reports:
    Skip because we can't identify a unique slave.
```

Ce qu'il est important de vérifier, c'est que les deux premiers tests de connexion sont `OK`.

### Passage en mode lecture seule

Maintenant que tout est correctement configuré, nous devons activer le mode lecture seule sur les deux serveurs en décommentant (*ie.* enlever le `#` en début de ligne) cette déclaration dans le fichier `/etc/my.cnf.d/server.cnf` :

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

Ensuite, appliquez ce changement en redémarrant MySQL sur les deux nœuds :

```bash
systemctl restart mariadb
```

### Autorisation des comptes centreon et mysql

Pour que les scripts s'exécutent correctement à travers les connexions ssh via les comptes centreon et mysql, il faut leur donner des droits supplémentaires

Pour le compte centreon, éditez le fichier `/etc/sudoers.d/centreon-cluster` et ajoutez les lignes suivantes :

```bash
CENTREON   ALL = NOPASSWD: /usr/bin/systemctl reload centreon
CENTREON   ALL = NOPASSWD: /usr/bin/systemctl restart centreon
CENTREON   ALL = NOPASSWD: /usr/bin/systemctl stop centreon
CENTREON   ALL = NOPASSWD: /usr/bin/systemctl start centreon

CENTREON   ALL = NOPASSWD: /usr/bin/nmcli
```

Pour le compte mysql, modifiez le fichier `/etc/sudoers.d/centreon-cluster-db` et ajoutez la ligne suivante :

```bash
MYSQL   ALL = NOPASSWD: /usr/bin/nmcli
```

### Synchronisation des bases de données et démarrage de la réplication MySQL

Pour synchroniser les bases de données, arrêtez le service `mysql` sur le noeud secondaire pour écraser ses données avec celles du serveur principal. 

Vous devez donc exécuter la commande suivante **sur le noeud secondaire** :

```bash
systemctl stop mariadb
```

Dans certains cas, systemd peut échouer à arrêter le service `mysql`, pour en être sûr, vérifiez que la commande suivante ne renvoie aucune ligne :

```bash
ps -ef | grep mysql[d]
```

Si un processus `mysqld` est toujours en cours d'exécution, alors la commande suivante doit être exécutée pour l'arrêter (et fournir le mot de passe root mysql lorsqu'il est demandé) :

```bash
mysqladmin -p shutdown
```

Une fois le service arrêté sur le nœud **secondaire**, exécutez le script de synchronisation **depuis le nœud principal** : 

```bash
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

Ce script fait ce qui suit :

* vérifier que mysql est arrêté sur le noeud secondaire
* arrêter mysql sur le noeud primaire
* monter un snapshot LVM sur le *groupe de volumes* qui supporte la partition /var/lib/mysql
* Démarrer mysql sur le nœud primaire
* stocker la position actuelle dans les journaux binaires
* désactivez la variable globale MySQL `read_only` sur le noeud principal (*c'est-à-dire que le noeud principal est maintenant autorisé à écrire dans sa base de données)
* Synchroniser tous les fichiers de données (à l'exception de la base de données système `mysql`) en écrasant les fichiers sur le noeud secondaire.
* Démontage du snapshot LVM
* créer le thread de réplication qui maintiendra les données à jour sur le noeud secondaire.

Ce script est très verbeux, et tout ce qui est affiché n'est pas compréhensible, mais pour être sûr qu'il a été exécuté jusqu'au bout, assurez-vous que la fin ressemble à :

```text
Umount and Delete LVM snapshot
  Logical volume "dbbackupdatadir" successfully removed
Start MySQL Slave
OK
Start Replication
Id	User	Host	db	Command	Time	State	Info	Progress
3	@MYSQL_REPL_USER@	@CENTRAL_MASTER_NAME@:33084	NULL	Query	0	init	show processlist	0.000
```

Si tout s'est bien passé, alors la commande `mysql-check-status.sh` devrait retourner un résultat sans erreur :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Résultat attendu :

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

### Création du VIP MySQL

La VIP sera ajoutée à la configuration de l'interface `@DB_VIP_IFNAME@` sur le noeud maître :

```bash
nmcli con mod "@DB_VIP_IFNAME@" +ipv4.addresses "@DB_VIP_IPADDR@/@DB_VIP_CIDR_NETMASK@"
nmcli connection up "@DB_VIP_IFNAME@"
```

Exécutez ensuite le script suivant **sur l'un des deux nœuds MySQL** pour vérifier si la VIP est correctement montée sur le serveur maître MySQL (ce script peut être exécuté sur l'un ou l'autre des deux nœuds, il détectera de lui-même lequel est le maître) :

```bash
/usr/share/centreon-ha/bin/move-mysql-vip-to-mysql-master.sh
```

Le résultat devrait être comme ceci, si non le script déplace la VIP au bon endroit :

```text
The VIP address is already at the right place. Nothing to do.
```

## Configuration du cluster Centreon

**Note:** sauf indication contraire, chacune des étapes suivantes doit être effectuée **sur les deux nœuds centraux**.

### Configuration du service de synchronisation

Le service `centreon-central-sync` nécessite que nous définissions pour chaque noeud dans `/etc/centreon-ha/centreon_central_sync.pm` l'adresse IP de son correspondant :

Ainsi pour le serveur `@CENTRAL_MASTER_NAME@` nous devons avoir :

```bash
our %centreon_central_sync_config = (
    peer_addr => "@CENTRAL_SLAVE_IPADDR@"
);
1;
```

Et pour le serveur `@CENTRAL_SLAVE_NAME@` nous devons avoir :

```bash
our %centreon_central_sync_config = (
    peer_addr => "@CENTRAL_MASTER_IPADDR@"
);
1;
```

## Suppression des crons

Les tâches cron planifiées sont exécutées directement par le processus gorgone dans l'architecture hautement disponible. Cela permet d'éviter qu'elles ne se fassent concurrence sur les nœuds centraux. Il est donc nécessaire de les supprimer manuellement :

```bash
rm -f /etc/cron.d/centreon
rm -f /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-auto-disco
```

## Changement de droits

Les répertoires /var/log/centreon-engine et /tmp/centreon-autodisco sont partagés entre plusieurs processus. Il est nécessaire de modifier les droits de ces répertoires et fichiers pour assurer le bon fonctionnement de la réplication des fichiers et de la découverte automatique des services :

```bash
chmod 775 /var/log/centreon-engine/
mkdir /var/log/centreon-engine/archives
chown centreon-engine: /var/log/centreon-engine/archives
chmod 775 /var/log/centreon-engine/archives/
chmod 664 /var/log/centreon-engine/*
chmod 664 /var/log/centreon-engine/archives/*
```

```bash
mkdir /tmp/centreon-autodisco/
chown apache: /tmp/centreon-autodisco/
chmod 775 /tmp/centreon-autodisco/
```

### Arrêter et désactiver les services

Les services de l'application Centreon ne seront plus lancés au démarrage du serveur comme c'est le cas pour une installation standard, les services de clustering s'en chargeront. Il est donc nécessaire d'arrêter et de désactiver ces services.

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon centreon-central-sync cbd-sql
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd php-fpm centreon
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd php-fpm centreon centreon-central-sync cbd-sql
```

</TabItem>
</Tabs>

### Redéfinir les règles de démarrage des services

Certains services ne doivent être démarrés que sur un seul noeud, mais pour d'autres, il est acceptable ou même souhaitable de les démarrer sur les deux noeuds. Nous allons commencer par ces services.

#### Service PHP

Le service `php-fpm.service` n'a pas besoin d'être modifié, mais doit être activé pour qu'il soit démarré automatiquement lors du démarrage des serveurs centraux.

Exécutez cette commande **sur les deux noeuds centraux** :

```bash
systemctl enable php-fpm
```

#### Service Broker RRD

Le processus "broker-rrd" est lancé via le `cbd.service`. Ce dernier est par défaut piloté par `centreon.service` mais dans cette configuration, il doit être détaché en modifiant sa définition sur les deux noeuds centraux :

```bash
cat > /usr/lib/systemd/system/cbd.service <<"EOF"
[Unit]
Description=Centreon Broker watchdog
After=syslog.target network.target

[Service]
ExecStart=/usr/sbin/cbwd /etc/centreon-broker/watchdog.json
ExecReload=/bin/kill -HUP $MAINPID
Type=simple
User=centreon-broker
UMask=0002

[Install]
WantedBy=multi-user.target
EOF
```

Ensuite, démarrez-le et activez-le :

```bash
systemctl start cbd
systemctl enable cbd
```

#### Création de la VIP Centreon

La VIP sera ajoutée à la configuration de l'interface `@CENTRAL_VIP_IFNAME@` sur le nœud maître.
Dans la plupart des cas, la VIP centrale est le même que la VIP de la base de données pour un cluster à 2 nœuds et cette action a déjà été effectuée pour la réplication.

Si non, exécutez ces commandes sur `@CENTRAL_MASTER_NAME@` :

```bash
nmcli con mod "@CENTRAL_VIP_IFNAME@" +ipv4.addresses "@CENTRAL_VIP_IPADDR@/@CENTRAL_VIP_CIDR_NETMASK@"
nmcli connection up "@CENTRAL_VIP_IFNAME@"
```

#### Service httpd

Le service `httpd.service` est par défaut indépendant de `centreon.service` mais dans cette configuration, il faut l'y rattacher en modifiant sa définition sur les deux noeuds centraux :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
cat > /usr/lib/systemd/system/httpd.service <<"EOF"
[Unit]
Description=The Apache HTTP Server
PartOf=centreon.service
ReloadPropagatedFrom=centreon.service
After=centreon.service

[Service]
Type=notify
Environment=LANG=C

ExecStart=/usr/sbin/httpd $OPTIONS -DFOREGROUND
ExecReload=/usr/sbin/httpd $OPTIONS -k graceful
ExecStop=/usr/sbin/httpd $OPTIONS -k graceful-stop
# Send SIGWINCH for graceful stop
KillSignal=SIGCONT
KillMode=mixed
PrivateTmp=true

[Install]
WantedBy=centreon.service
EOF
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
cat > /usr/lib/systemd/system/httpd24-httpd.service <<"EOF"
[Unit]
Description=The Apache HTTP Server
PartOf=centreon.service
ReloadPropagatedFrom=centreon.service
After=centreon.service

[Service]
Type=notify
EnvironmentFile=/opt/rh/httpd24/root/etc/sysconfig/httpd

ExecStart=/opt/rh/httpd24/root/usr/sbin/httpd-scl-wrapper $OPTIONS -DFOREGROUND
ExecReload=/opt/rh/httpd24/root/usr/sbin/httpd-scl-wrapper $OPTIONS -k graceful
ExecStop=/opt/rh/httpd24/root/usr/sbin/httpd-scl-wrapper $OPTIONS -k graceful-stop
# We want systemd to give httpd some time to finish gracefully, but still want
# it to kill httpd after TimeoutStopSec if something went wrong during the
# graceful stop. Normally, Systemd sends SIGTERM signal right after the
# ExecStop, which would kill httpd. We are sending useless SIGCONT here to give
# httpd time to finish.
KillSignal=SIGCONT
PrivateTmp=true

[Install]
WantedBy=centreon.service
EOF
```

</TabItem>
</Tabs>

#### Service Gorgone

Le service `gorgoned.service` est par défaut indépendant de `centreon.service` mais dans cette configuration, il doit lui être rattaché en modifiant sa définition sur les deux noeuds centraux :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
cat > /etc/systemd/system/gorgoned.service <<"EOF"
[Unit]
Description=Centreon Gorgone
PartOf=centreon.service
After=httpd.service
ReloadPropagatedFrom=centreon.service

[Service]
EnvironmentFile=/etc/sysconfig/gorgoned
ExecStart=/usr/bin/perl /usr/bin/gorgoned $OPTIONS
Type=simple
User=centreon-gorgone

[Install]
WantedBy=centreon.service
EOF
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
cat > /etc/systemd/system/gorgoned.service <<"EOF"
[Unit]
Description=Centreon Gorgone
PartOf=centreon.service
After=httpd24-httpd.service
ReloadPropagatedFrom=centreon.service

[Service]
EnvironmentFile=/etc/sysconfig/gorgoned
ExecStart=/usr/bin/perl /usr/bin/gorgoned $OPTIONS
Type=simple
User=centreon-gorgone

[Install]
WantedBy=centreon.service
EOF
```

</TabItem>
</Tabs>

#### Service centreon-central-sync

Ce service est spécifique à *Centreon HA*. Sa fonction est de répliquer les changements de configuration, d'ajouter des images via l'interface, etc.

```bash
cat > /usr/lib/systemd/system/centreon-central-sync.service <<"EOF"
[Unit]
Description=Centreon Central Sync (failover only)
PartOf=centreon.service
ReloadPropagatedFrom=centreon.service
After=gorgoned.service

[Service]
EnvironmentFile=/etc/sysconfig/centreon_central_sync
ExecStart=/usr/share/centreon-ha/bin/centreon_central_sync $OPTIONS
ExecReload=/bin/kill -HUP $MAINPID
Type=simple
User=centreon

[Install]
WantedBy=centreon.service
EOF
```

#### Service Broker SQL

```bash
cat > /usr/lib/systemd/system/cbd-sql.service <<"EOF"
[Unit]
Description=Centreon SQL Broker service
PartOf=centreon.service
ReloadPropagatedFrom=centreon.service
After=centreon-central-sync.service

[Service]
EnvironmentFile=/etc/sysconfig/cbd_sql
ExecStart=/usr/sbin/cbd $OPTIONS
ExecReload=/bin/kill -HUP $MAINPID
Type=simple
User=centreon-broker
UMask=0002

[Install]
WantedBy=centreon.service
EOF
```

#### Service centengine

```bash
cat > /usr/lib/systemd/system/centengine.service <<"EOF"
[Unit]
Description=Centreon Engine
PartOf=centreon.service
ReloadPropagatedFrom=centreon.service
After=cbd-sql.service

[Service]
ExecStart=/usr/sbin/centengine /etc/centreon-engine/centengine.cfg
ExecReload=/bin/kill -HUP $MAINPID
Type=simple
User=centreon-engine

[Install]
WantedBy=centreon.service
EOF
```

#### Service centreontrapd

```bash
cat > /usr/lib/systemd/system/centreontrapd.service <<"EOF"
[Unit]
Description=Centreon Trapd Daemon is a Centreon program that manage traps
PartOf=centreon.service
After=centreon.service
ReloadPropagatedFrom=centreon.service

[Service]
EnvironmentFile=/etc/sysconfig/centreontrapd
ExecStart=/usr/share/centreon/bin/centreontrapd $OPTIONS
ExecReload=/bin/kill -HUP $MAINPID
Type=simple
User=centreon

[Install]
WantedBy=centreon.service
EOF
```

#### Service snmptrapd

```bash
cat > /usr/lib/systemd/system/snmptrapd.service <<"EOF"
[Unit]
Description=Simple Network Management Protocol (SNMP) Trap Daemon.
PartOf=centreon.service
After=centreontrapd.service

[Service]
Type=notify
Environment=OPTIONS="-Lsd"
EnvironmentFile=-/etc/sysconfig/snmptrapd
ExecStart=/usr/sbin/snmptrapd $OPTIONS -f
ExecReload=/bin/kill -HUP $MAINPID

[Install]
WantedBy=centreon.service
EOF
```

### Lancement initial de tous les services

#### Installation de l'adresse IP virtuelle Centreon

Normalement, la VIP a déjà été montée précédemment. Vérifiez que c'est le cas sur le serveur primaire défini ci-dessus (normalement `@CENTRAL_MASTER_NAME@`)

```bash
ip a
```

Vous devriez voir l'IP virtuelle `@CENTRAL_VIP_IPADDR@` attachée à l'interface `@CENTRAL_VIP_IFNAME@` apparaître dans le retour de la commande `ip a`.

Si ce n'est pas le cas, l'adresse IP virtuelle doit être montée, par exemple sur `@CENTRAL_MASTER_NAME@` :

```bash
nmcli con mod "@CENTRAL_VIP_IFNAME@" +ipv4.addresses "@CENTRAL_VIP_IPADDR@/@CENTRAL_VIP_CIDR_NETMASK@"
nmcli con up "@CENTRAL_VIP_IFNAME@"
```

#### Prise en compte des modifications apportées aux services

Afin de prendre en compte toutes les modifications précédentes, et d'activer les services (pour que le démarrage du service `centreon.service` les lance tous) il est nécessaire de lancer ces commandes sur les deux noeuds centraux :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
systemctl daemon-reload
systemctl enable cbd httpd gorgoned centreon-central-sync cbd-sql centengine centreontrapd snmptrapd mariadb
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
systemctl daemon-reload
systemctl enable cbd httpd24-httpd gorgoned centreon-central-sync cbd-sql centengine centreontrapd snmptrapd mariadb
```

</TabItem>
</Tabs>

Et enfin les démarrer tous via le `centreon.service` sur le noeud où la VIP a été montée :

```bash
systemctl start centreon
```

Vérifiez ensuite l'état de tous les services :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
systemctl status cbd httpd gorgoned centreon-central-sync cbd-sql centengine centreontrapd snmptrapd
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
systemctl status cbd httpd24-httpd gorgoned centreon-central-sync cbd-sql centengine centreontrapd snmptrapd
```

</TabItem>
</Tabs>

Après cette étape, toutes les ressources doivent être actives au même endroit, et la plateforme doit être fonctionnelle et redondante. Si ce n'est pas le cas, consultez le guide de dépannage dans le paragraphe suivant.

### Opération HA manuelle standard

### Basculer les services Centreon d'un nœud à l'autre

Ce script peut être exécuté depuis n'importe quel nœud Centreon, mais vous devez (pour l'instant) spécifier le nœud cible. Par exemple pour changer le noeud actif de `@CENTRAL_MASTER_NAME@` à `@CENTRAL_SLAVE_NAME@` :

```bash
/usr/share/centreon-ha/bin/set-centreon-master.sh @CENTRAL_SLAVE_NAME@
```

Le résultat attendu est le suivant :

```text
Stopping centreon.service on @CENTRAL_MASTER_NAME@...
Unmounting VIP on @CENTRAL_MASTER_NAME@...
Adding vip to @CENTRAL_SLAVE_NAME@...
Starting centreon.service on @CENTRAL_SLAVE_NAME@...
```

Si nous essayons de passer au nœud qui est déjà actif, nous obtiendrons :

```text
Host @CENTRAL_MASTER_NAME@ is already the current master :-)
```

### Inverser les rôles SLAVE/MASTER de MySQL

Cette fois, nous ne spécifions pas le nom du serveur cible :

```bash
/usr/share/centreon-ha/bin/mysql-switch-slave-master.sh
```

Le résultat attendu est le suivant :

```text
Locking master database on @DB_SLAVE_NAME@
Waiting Relay log bin to finish proceed (TIMEOUT = 60sec)
Removing slave thread on @DB_MASTER_NAME@
Recording binlog file and position from @DB_MASTER_NAME@
Unlocking databases on @DB_MASTER_NAME@
Setting and starting slave thread on @DB_SLAVE_NAME@
We have to move the VIP address
```

### Vérification de la synchronisation des bases de données

L'état de la réplication MySQL peut être vérifié à tout moment avec la commande `mysql-check-status.sh` :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Résultat attendu :

```bash
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

## Intégrer des collecteurs

Il ne reste maintenant plus qu'à [intégrer les collecteurs](./integrating-pollers.md) et commencer à superviser !
