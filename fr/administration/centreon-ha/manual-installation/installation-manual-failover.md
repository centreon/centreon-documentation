---
id: centreon-ha-installation-manual-failover
title: Installation en failover manuel à 2 nœuds
---

## Prérequis

### Compréhension

Avant de suivre cette procédure, il est recommandé d'avoir un niveau de connaissance satisfaisant du système d'exploitation Linux et de Centreon pour bien comprendre ce qui va être fait et pour pouvoir se sortir d'un éventuel faux pas.

### Installation de Centreon

L'installation d'un cluster Centreon-HA ne peut se faire que sur la base d'une installation fonctionnelle de Centreon. Avant de suivre cette procédure, il est donc impératif d'avoir appliqué **[cette procédure d'installation](https://documentation-fr.centreon.com/docs/centreon/en/latest/installation/index.html)** jusqu'au bout **en réservant environ 5GB de libre** sur le *volume group* qui contient  les données MySQL (point de montage `/var/lib/mysql` par défaut). 

La commande `vgs` doit retourner un affichage de la forme ci-dessous (en particulier la valeur sous `VFree`) :

```text
  VG                    #PV #LV #SN Attr   VSize   VFree 
  centos_centreon-c1      1   5   0 wz--n- <31,00g <5,00g
```

**AVERTISSEMENT :** Si ce prérequis n'est pas vérifié, il ne sera pas possible de synchroniser les bases de données de la façon indiquée dans ce document.

### Définition des noms et adresses IP des serveurs

Dans cette procédure nous ferons référence à des paramètres variant d'une installation à une autre (noms et adresses IP des nœuds par exemple) par l'intermédiaire des macros suivantes :

* `@CENTRAL_MASTER_IPADDR@` : adresse IP du serveur central principal
* `@CENTRAL_MASTER_NAME@` : nom du serveur central principal
* `@CENTRAL_SLAVE_IPADDR@` : adresse IP du serveur central secondaire
* `@CENTRAL_SLAVE_NAME@` : nom du serveur central secondaire
* `@DB_MASTER_IPADDR@` : adresse IP du serveur de base de données principal
* `@DB_MASTER_NAME@` : nom du serveur de base de données principal
* `@DB_SLAVE_IPADDR@` : adresse IP du serveur de base de données secondaire
* `@DB_SLAVE_NAME@` : nom du serveur de base de données secondaire
* `@MYSQL_REPL_USER@` : nom du compte MySQL de réplication (suggéré : centreon-repl)
* `@MYSQL_REPL_PASSWD@` : mot de passe de ce compte
* `@MYSQL_CENTREON_USER@` : nom du compte MySQL de Centreon (suggéré : centreon)
* `@MYSQL_CENTREON_PASSWD@` : mot de passe de ce compte
* `@CENTRAL_VIP_IPADDR@` : adresse IP virtuelle du cluster
* `@CENTRAL_VIP_IFNAME@` : nom de l'interface qui portera la VIP
* `@CENTRAL_VIP_CIDR_NETMASK@` : masque de sous-réseau exprimé en nombre de bits sans le '/' (exemple : 24)
* `@CENTRAL_VIP_BROADCAST_IPADDR@` : adresse de broadcast
* `@DB_VIP_IPADDR@` : adresse IP virtuelle du cluster
* `@DB_VIP_IFNAME@` : nom de l'interface qui portera la VIP
* `@DB_VIP_CIDR_NETMASK@` : masque de sous-réseau exprimé en nombre de bits sans le '/' (exemple : 24)
* `@DB_VIP_BROADCAST_IPADDR@` : adresse de broadcast
* `@CENTREON_CLUSTER_PASSWD@` : mot de passe du compte `hacluster`

### Configuration de centreon-broker

#### Liaison au service cbd

Dans une installation standard de Centreon, le service `cbd` pilote deux instances de `centreon-broker-daemon` :

* `central-broker-master` : que l'on appelle aussi "broker central" ou encore "broker SQL", qui redirige toutes les entrées-sorties en provenance des pollers, vers les bases de données, vers le broker RRD, etc.
* `central-rrd-master` : le broker RRD qui reçoit son flux du broker SQL, et dont la seule fonction est d'écrire les fichiers RRD utilisés pour afficher les graphes. 

Dans un cluster Centreon-HA, les deux processus broker vont être gérés chacun via un service distinct qui seront pilotés par le cluster :

* `central-broker-master` en tant que la ressource `cbd_central_broker`, liée au service *systemd* `cbd-sql`
* `central-rrd-master` en tant que la ressource clone `cbd_rrd`, liée au service *systemd* `cbd` standard de Centreon.

Pour que tout se mette bien en place dans la suite, il faut dès à présent défaire la liaison entre central-broker-master et le service `cbd` **en cochant "non" pour le paramètre "Lié au service cbd"** dans *Configuration* > *Pollers* > *Broker configuration* > *central-broker-master* dans l'onglet *General*.

#### Double flux RRD

Plutôt que de mettre en place une réplication en temps réel des fichiers de données RRD, le choix technique qui a été fait pour permettre d'afficher les graphes sur n'importe quel nœud dès qu'il devient `master` a été de dupliquer le flux de sortie (`output`) de `central-broker-master` vers `central-rrd-master`. Cela se configure dans le même menu qu'au paragraphe précédent, mais cette fois dans l'onglet *Output* de *Configuration  >  Collecteurs  >  Configuration de Centreon Broker*. 

* Modifier la sortie "IPv4" en remplaçant "localhost" par `@CENTRAL_MASTER_IPADDR@`

| Output IPv4 |  |
| --------------- | ------------------ |
| Nom | centreon-broker-master-rrd |
| Port de connexion | 5670 |
| Hôte distant | `@CENTRAL_MASTER_IPADDR@` |
| Temps avant activation du processus de basculement (failover) | 0 |
| Intervalle entre 2 tentatives | 60 |

* Ajouter une nouvelle sortie IPv4, similaire à la première et nommée par exemple "centreon-broker-slave-rrd" pointant cette fois vers `@CENTRAL_SLAVE_IPADDR@`.

| Output IPv4 |  |
| --------------- | ------------------ |
| Nom | centreon-broker-slave-rrd |
| Port de connexion | 5670 |
| Hôte distant | `@CENTRAL_SLAVE_IPADDR@` |
| Temps avant activation du processus de basculement (failover) | 0 |
| Intervalle entre 2 tentatives | 60 |

#### Exporter la configuration

Une fois que les actions des deux précédents paragraphes ont été réalisées, il faut exporter la configuration (3 premières cases pour l'export du poller "Central") pour que celle-ci soit effective.

Ces actions doivent être réalisées soit sur les deux nœuds, soit uniquement sur `@CENTRAL_MASTER_NAME@` puis les fichiers de configuration de broker doivent être copiés vers `@CENTRAL_SLAVE_NAME@`.

```bash
rsync -a /etc/centreon-broker/*json @CENTRAL_SLAVE_IPADDR@:/etc/centreon-broker/
```

### Modification de la commande de rechargement de `cbd`

Cela n'est pas forcément connu de tous les utilisateurs de Centreon, mais chaque fois qu'un rechargement de la configuration du poller central est effectué via l'interface, le service broker (`cbd`) est rechargé (pas seulement centengine), d'où le paramètre "Centreon Broker reload command" dans *Configuration > Pollers > Central*.

Ainsi que cela a été expliqué plus haut, les processus broker sont répartis entre deux services : `cbd` pour le broker RRD, `cbd-sql` pour le broker central. Dans le cadre d'un cluster centreon-ha, service que l'on doit recharger lors de l'export de configuration est `cbd-sql` et non plus `cbd`. Il faut donc appliquer la valeur `service cbd-sql reload` au paramètre "Centreon Broker reload command".

### Modifier les fichiers de conf centreon (PHP, Perl, Gorgone)

```bash
rsync -av /etc/centreon/* 192.168.56.192:/etc/centreon/
```

## Préparation du système

Avant d'en arriver au paramétrage du cluster à proprement parler, quelques étapes préparatoires sont nécessaires au niveau de l'OS.

**Remarque :** sauf mention contraire, chacune des étapes suivantes est à réaliser **sur les deux nœuds centraux**.

### Tuning de la configuration réseau

Afin d'améliorer la fiabilité du cluster et étant donné que *Centreon HA* ne fonctionne qu'en IP v4, il est recommandé d'appliquer le tuning suivant sur tous les serveurs de la plateforme Centreon :

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

### Résolution de noms

Pour sécuriser le bon fonctionnement du cluster même en cas de panne du service de résolution de noms, il est impératif que les nœuds se connaissent *via* le fichier `/etc/hosts`.

```bash
cat >/etc/hosts <<"EOF"
127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4
@CENTRAL_MASTER_IPADDR@ @CENTRAL_MASTER_NAME@
@CENTRAL_SLAVE_IPADDR@ @CENTRAL_SLAVE_NAME@
@DB_MASTER_IPADDR@ @DB_MASTER_NAME@
@DB_SLAVE_IPADDR@ @DB_SLAVE_NAME@
EOF
```

Dans la suite de ce document, on parlera de nœud principal pour le premier et de nœud secondaire pour le second. Cette distinction est purement arbitraire, les rôles pourront bien sûr être échangés une fois l'installation terminée.

### Installation des paquets

Centreon propose le paquet `centreon-ha`, qui fournit tous les scripts et les dépendances nécessaires au fonctionnement d'un cluster Centreon.

Sur tous les serveurs :

```bash
yum install epel-release
yum install centreon-ha
```

Ensuite, sur les serveurs de base de données :

```bash
systemctl stop rh-php72-php-fpm.service httpd24-httpd.service 
systemctl disable rh-php72-php-fpm.service httpd24-httpd.service
```

### Échanges de clefs SSH

Afin de permettre aux deux serveurs centraux d'échanger des fichiers et des commandes, il faut mettre en place la possibilité de se connecter *via* SSH d'un serveur à l'autre pour les utilisateurs :

* `mysql`
* `centreon`

Il existe 2 façons d'échanger des clefs SSH :

* En utilisant `sh-copy-id` : l'utilisation de cette commande nécessite de pouvoir valider l'authentification au moyen d'un mot de passe. Or il n'est pas souhaitable, pour les comptes de service dont il est question ici, de définir de mot de passe. Si cette méthode est retenue malgré tout, il est recommandé de supprimer le mot de passe après l'échange, avec les commandes `passwd -d centreon` et `passwd -d mysql`
* En copiant manuellement la clef publique dans `~/.ssh/authorized_keys`. Cette méthode est à privilégier, mais demande, pour fonctionner correctement, que seul le propriétaire du fichier soit capable d'accéder en lecture à celui-ci.

C'est la seconde méthode qui sera proposée plus bas.

#### Compte `centreon`

Cette procédure est à appliquer sur les deux nœuds centraux :

```bash
su - centreon
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub | tee ~/.ssh/authorized_keys
```

Après avoir lancé ces commandes sur les deux nœuds, copier le contenu du fichier qui s'est affiché sous la commande `cat` et le coller dans le fichier `~/.ssh/authorized_keys` **de l'autre nœud** puis appliquer les bons droits sur le fichier (toujours en tant que `centreon`) :

```bash
chmod 600 ~/.ssh/authorized_keys
```

L'échange de clefs doit ensuite être validé par une première connexion qui permettra d'accepter la signature du serveur SSH (toujours en tant que `centreon`) :

```bash
ssh @CENTRAL_MASTER_NAME@
ssh @CENTRAL_SLAVE_NAME@
```

Puis sortir de la session de `centreon` avec `exit` ou `Ctrl-D`.

#### Compte `mysql`

Pour le compte `mysql` la procédure diffère quelque peu car cet utilisateur n'a normalement pas de *home directory* ni la possibilité d'ouvrir une session Shell. Cette procédure est également à appliquer sur les deux nœuds centraux.

```bash
systemctl stop mysql
mkdir /home/mysql
chown mysql: /home/mysql
usermod -d /home/mysql mysql
usermod -s /bin/bash mysql
systemctl start mysql
```


```bash
su - mysql
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub | tee ~/.ssh/authorized_keys
```

Après avoir lancé ces commandes sur les deux nœuds, copier le contenu du fichier et le coller dans `~/.ssh/authorized_keys` **sur l'autre nœud** puis appliquer les bons droits sur le fichier (toujours en tant que `mysql`) :

```bash
chmod 600 ~/.ssh/authorized_keys
```

L'échange de clefs doit ensuite être validé par une première connexion qui permettra d'accepter la signature du serveur SSH en tapant "yes" (toujours en tant que `mysql`) :

```bash
ssh @DB_MASTER_IPADDR@
ssh @DB_SLAVE_IPADDR@
```

Puis sortir de la session de `mysql` avec `exit` ou `Ctrl-D`.

## Mise en place de la réplication MySQL

Afin que les deux nœuds soient interchangeables à tout moment, il faut que les deux bases de données soient répliquées en continu. Pour cela nous allons mettre en place une réplication Master-Slave.

**Remarque :** sauf mention contraire, chacune des étapes suivantes est à réaliser **sur les deux nœuds base de données**.

### Configuration de MySQL

Pour commencer, il faut tuner la configuration de MySQL, qui sera concentrée dans le seul fichier `/etc/my.cnf.d/server.cnf`.  Par défaut, la section `[server]` de ce fichier est vide, c'est là que doit être collées les lignes suivantes :

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

**Important :** la valeur de `server-id` doit être différente d'un serveur à l'autre, pour qu'ils puissent s'identifier correctement. Les valeurs 1 => Master et 2 => Slave ne sont pas obligatoires mais sont recommandées.

**NB :** Ne pas oublier de décommenter (supprimer le '#' en début de ligne) le paramètre `innodb_buffer_pool_size` qui correspond à votre plateforme.

Pour que ces modifications soient bien prises en compte, il faut redémarrer le serveur de base de données :

```bash
systemctl restart mysql
```

Bien s'assurer que le redémarrage s'est bien déroulé avec la commande suivante :

```bash
systemctl status mysql
```

**Avertissement :** Le fichier `centreon.cnf` ne sera plus pris en compte, si des paramètres y ont été personnalisés, il faut les reporter dans `server.cnf`.

### Sécurisation de la base de données 

L'accès aux bases de données doit être limité de la façon la plus stricte possible. La commande `mysql_secure_installation` permet de supprimer les accès non protégés par des mots de passes et la base de données de test. Lancer cette commande et se laisser guider par les choix par défaut. Attention à choisir un mot de passe n'appartenant à aucun dictionnaire.

```bash
mysql_secure_installation
```

### Création du compte centreon

Pour pouvoir administrer les utilisateurs MySQL, il faut d'abord se connecter en tant que root (avec le mot de passe saisi au paragraphe précédent) :

```
mysql -p
```

Coller alors dans le prompt MySQL les commandes ci-dessous en modifiant les adresses IP ainsi que les mots de passe.

```sql
GRANT RELOAD, SHUTDOWN, SUPER ON *.* TO '@MYSQL_CENTREON_USER@'@'localhost';

CREATE USER '@MYSQL_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@' IDENTIFIED BY '@MYSQL_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@';
GRANT RELOAD, SHUTDOWN, SUPER ON *.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@';

CREATE USER '@MYSQL_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@' IDENTIFIED BY '@MYSQL_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@';
GRANT RELOAD, SHUTDOWN, SUPER ON *.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@';

CREATE USER '@MYSQL_CENTREON_USER@'@'@DB_SLAVE_IPADDR@' IDENTIFIED BY '@MYSQL_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MYSQL_CENTREON_USER@'@'@DB_SLAVE_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MYSQL_CENTREON_USER@'@'@DB_SLAVE_IPADDR@';
GRANT RELOAD, SHUTDOWN, SUPER ON *.* TO '@MYSQL_CENTREON_USER@'@'@DB_SLAVE_IPADDR@';

CREATE USER '@MYSQL_CENTREON_USER@'@'@DB_MASTER_IPADDR@' IDENTIFIED BY '@MYSQL_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MYSQL_CENTREON_USER@'@'@DB_MASTER_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MYSQL_CENTREON_USER@'@'@DB_MASTER_IPADDR@';
GRANT RELOAD, SHUTDOWN, SUPER ON *.* TO '@MYSQL_CENTREON_USER@'@'@DB_MASTER_IPADDR@';
```

### Création du compte de réplication

Toujours dans le prompt MySQL (cf paragraphe précédent) créer l'utilisateur `@MYSQL_REPL_USER@`, dédié à la réplication, à l'aide des commandes suivantes :

```sql
GRANT PROCESS, RELOAD, SUPER, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MYSQL_REPL_USER@'@'localhost' IDENTIFIED BY '@MYSQL_REPL_PASSWD@';

GRANT PROCESS, RELOAD, SUPER, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MYSQL_REPL_USER@'@'@DB_SLAVE_IPADDR@' IDENTIFIED BY '@MYSQL_REPL_PASSWD@';

GRANT PROCESS, RELOAD, SUPER, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MYSQL_REPL_USER@'@'@DB_MASTER_IPADDR@' IDENTIFIED BY '@MYSQL_REPL_PASSWD@';
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

### Configuration des variables d'environnement des scripts MySQL

Le fichier `/etc/centreon-ha/mysql-resources.sh` contient des variables d'environnement qu'il faut adapter à l'installation courante en remplaçant les macros par la valeur qui convient.

```bash
#!/bin/bash

###############################
# Database access credentials #
###############################

DBHOSTNAMEMASTER='@DB_MASTER_NAME@'
DBHOSTNAMESLAVE='@DB_SLAVE_NAME@'
DBREPLUSER='@MYSQL_REPL_USER@'
DBREPLPASSWORD='@MYSQL_REPL_PASSWD@'
DBROOTUSER='@MYSQL_CENTREON_USER@'
DBROOTPASSWORD='@MYSQL_CENTREON_PASSWD@'
CENTREON_DB='centreon'
CENTREON_STORAGE_DB='centreon_storage'

##########################################
# Manual failover additional information #
##########################################

CENTRAL_VIP_IPADDR=@CENTRAL_VIP_IPADDR@
CENTRAL_VIP_IFNAME=@CENTRAL_VIP_IFNAME@
CENTRAL_VIP_CIDR_NETMASK=@CENTRAL_VIP_CIDR_NETMASK@
CENTRAL_VIP_BROADCAST_IPADDR=@CENTRAL_VIP_BROADCAST_IPADDR@
MYSQL_VIP_IPADDR=@DB_VIP_IPADDR@
MYSQL_VIP_IFNAME=@DB_VIP_IFNAME@
MYSQL_VIP_CIDR_NETMASK=@DB_VIP_CIDR_NETMASK@
MYSQL_VIP_BROADCAST_IPADDR=@DB_VIP_BROADCAST_IPADDR@
```

Pour s'assurer que les dernières étapes ont été effectuées correctement, et que les bons noms, logins et mots de passes ont bien été saisis dans le fichier de configuration, il faut lancer la commande :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Le résultat attendu est :

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

Ce qu'il est important de vérifier est que les deux premiers tests de connexion soient `OK`.

### Passage en read-only

Maintenant que tout est bien configuré, il faut activer le mode `read_only` sur les deux serveurs en décommentant (*ie.* retirer le `#` en début de ligne) cette instruction dans le fichier `/etc/my.cnf.d/server.cnf` :

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

Appliquer ensuite ce changement par un redémarrage de MySQL sur les deux nœuds :

```bash
systemctl restart mysql
```

### Synchroniser les bases et lancer la réplication MySQL

Pour synchroniser les bases, arrêter le service `mysql` sur le nœud secondaire pour écraser ses données avec celles du serveur principal. 

Il faut donc lancer la commande suivante **sur le nœud secondaire** :

```bash
systemctl stop mysql
```

Dans certains cas il se peut que systemd ne parvienne pas à arrêter le service `mysql`, pour s'en assurer, vérifier que la commande suivante ne retourne aucune ligne :

```bash
ps -ef | grep mysql[d]
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
* désactiver la variable globale MySQL `read_only` sur le nœud principal (*ie.* le nœud principal est maintenant autorisé à écrire dans sa base)
* synchroniser tous les fichiers de données (hors base système `mysql`) en écrasant les fichiers du nœud secondaire
* démonter le snapshot LVM
* créer le thread de réplication qui va maintenir les données à jour sur le nœud secondaire

Ce script est très verbeux, et tout ce qui est s'affiche n'est pas forcément compréhensible, mais pour s'assurer qu'il s'est bien déroulé jusqu'au bout, il suffit de s'assurer que la fin ressemble bien à :

```text
Umount and Delete LVM snapshot
  Logical volume "dbbackupdatadir" successfully removed
Start MySQL Slave
Start Replication
Id	User	Host	db	Command	Time	State	Info	Progress
3	centreon	@CENTRAL_MASTER_NAME@:33084	NULL	Query	0	init	show processlist	0.000
```

Si tout s'est bien passé, alors la commande `mysql-check-status.sh` doit renvoyer un résultat sans erreur :

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

### Création de la VIP MySQL

La VIP sera ajoutée à la configuration de l'interface `@DB_VIP_IFNAME@` sur les deux nœuds :

```bash
cat > /etc/sysconfig/network-scripts/ifcfg-@DB_VIP_IFNAME@\:1 <<"EOF"
DEVICE="@DB_VIP_IFNAME@:1"
BOOTPROTO=none
ONPARENT=no
IPADDR=@DB_VIP_IPADDR@
PREFIX=@DB_VIP_CIDR_NETMASK@
IPV6INIT=no
EOF
```

Puis lancer le script suivant **sur l'un des deux nœuds MySQL** pour monter la VIP sur le serveru master MySQL (ce script peut être lancé sur l'un ou l'autre deux deux nœuds, il détectera tout seul quel est le master) :

```bash
/usr/share/centreon-ha/bin/move-mysql-vip-to-mysql-master.sh
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

## Suppression des crons
Les tâches planifiées de type cron sont executées directement par le processus gorgone dans les architecture hautement disponible. Cela permet de garantir la non-concurrence de leur execution sur les noeuds centraux. Il est donc nécessaire de les supprimer manuellement:

rm /etc/cron.d/centreon
rm /etc/cron.d/centstorage
rm /etc/cron.d/centreon-auto-disco

## Modification des droits
Les répertoires /var/log/centreon-engine et /tmp/centreon-autodisco sont partagés entre plusieurs processus. Il est nécessaire de modifier les droits des répertoires et fichiers pour garantir le bon fonctionnement de la réplication de fichiers et de la découverte automatique des services:

Réplication des fichiers
chmod 775 /var/log/centreon-engine/
mkdir /var/log/centreon-engine/archives
chown centreon-engine: /var/log/centreon-engine/archives
chmod 775 /var/log/centreon-engine/archives/
chmod 664 /var/log/centreon-engine/*
chmod 664 /var/log/centreon-engine/archives/*

Copy
Découverte des services
mkdir /tmp/centreon-autodisco/
chown apache: /tmp/centreon-autodisco/
chmod 775 /tmp/centreon-autodisco/

### Arrêt et désactivation des services

Les services applicatifs de Centreon ne seront plus lancés au démarrage du serveur comme c'est le cas pour une installation standard, ce sont les services de clustering qui s'en chargeront. Il faut donc arrêter et désactiver ces services.

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd centreon mysql
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd centreon mysql centreon-central-sync cbd-sql
```

S'il est installé sur les nœuds centraux, le service `mysql` étant sur un mode mixte entre SysV init et systemd, pour bien s'assurer qu'il ne soit plus lancé au démarrage, il faut également lancer la commande :

```bash
chkconfig mysql off
```

### Redéfinition des règles de démarrage des services

Certains services ne doivent être démarrés que sur un seul nœud, mais pour d'autres, il n'est pas gênant voire souhaitable de les démarrer sur les deux nœuds. Nous allons commencer par ces services.

#### PHP7

Le service `rh-php72-php-fpm.service` ne nécessite pas de modification, mais doit être activé pour qu'il soit lancé automatiquemnt au démarrage des serveurs centraux :

```bash
systemctl enable rh-php72-php-fpm.service
```

#### Broker RRD

Le processus "broker-rrd" est lancé via le service `cbd.service`. Ce dernier est par défaut piloté par `centreon.service` mais dans cette configuration, il faut l'en détacher en modifiant sa définition sur les deux nœuds centraux :

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

Puis l'activer :

```bash
systemctl enable cbd.service
```

#### Création de la VIP Centreon

La VIP sera ajoutée à la configuration de l'interface `@CENTRAL_VIP_IFNAME@` sur les deux nœuds :

```bash
cat > /etc/sysconfig/network-scripts/ifcfg-@CENTRAL_VIP_IFNAME@\:1 <<"EOF"
DEVICE="@CENTRAL_VIP_IFNAME@:1"
BOOTPROTO=none
ONPARENT=no
IPADDR=@CENTRAL_VIP_IPADDR@
PREFIX=@CENTRAL_VIP_CIDR_NETMASK@
IPV6INIT=no
EOF
```

#### Service httpd

Le service `httpd24-httpd.service` est par défaut indépendant de `centreon.service` mais dans cette configuration, il faut l'y rattacher en modifiant sa définition sur les deux nœuds centraux :

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

#### Service Gorgone

Le service `httpd24-httpd.service` est par défaut indépendant de `centreon.service` mais dans cette configuration, il faut l'y rattacher en modifiant sa définition sur les deux nœuds centraux :

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
```

#### Service centreon-central-sync

Ce service est spécifique à *Centreon HA*. Sa fonction est de répliquer les changements de configuration, l'ajout d'images via l'interface, etc.

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

#### Broker SQL

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
```

Après cette étape, toutes les ressources doivent être actives au même endroit, et la plateforme fonctionnelle et redondée. Dans le cas contraire, se référer au guide de troubleshooting du paragraphe suivant.

### Lancement initial de tous les services

#### Montage de l'adresse IP virtuelle Centreon

Il faut commencer par monter l'adresse IP virtuelle, par exemple sur `@CENTRAL_MASTER_NAME@` :

```bash
ifup "@CENTRAL_VIP_IFNAME@:1"
```

#### Prise en compte des modifications apportées aux services

Afin de prendre en compte toutes les modifications précédentes, et activer les services (afin que le démarrage du service `centreon.service` les lance tous) il lancer ces commandes sur les deux nœuds centraux :

```bash
systemctl daemon-reload
systemctl enable cbd.service httpd24-httpd.service gorgoned.service centreon-central-sync.service cbd-sql.service centengine.service centreontrapd.service snmptrapd.service 
```

Et enfin les lancer tous via le service `centreon.service` sur le nœud où la VIP a été montée :

```bash
systemctl start centreon.service
```

Contrôler ensuite le statut de tous les services :

```bash
cbd.service httpd24-httpd.service gorgoned.service centreon-central-sync.service cbd-sql.service centengine.service centreontrapd.service snmptrapd.service
```

### Basculer les services Centreon d'un nœud à l'autre

Ce script peut être lancé de n'importe quel nœud central, mais il faut (pour l'instant) préciser le nœud cible. Par exemple pour que le nœud actif ne soit plus `@CENTRAL_MASTER_NAME@` mais `@CENTRAL_SLAVE_NAME@` :

```bash
/usr/share/centreon-ha/bin/set-centreon-master.sh @CENTRAL_SLAVE_NAME@
```

Le résultat attendu est :

```text
Stopping centreon.service on @CENTRAL_MASTER_NAME@...
Unmounting VIP on @CENTRAL_MASTER_NAME@...
Adding vip to @CENTRAL_SLAVE_NAME@...
Starting centreon.service on @CENTRAL_SLAVE_NAME@...
```

Si l'on essaye de basculer vers le nœud qui est déjà actif, on aura :

```text
Host @CENTRAL_MASTER_NAME@ is already the current master :-)
```

### Inverser les rôles SLAVE/MASTER MySQL

Cette fois on ne précise pas le nom du serveur cible :

```bash
/usr/share/centreon-ha/bin/mysql-switch-slave-master.sh
```

Le résultat attendu est :

```text
Locking master database on @DB_SLAVE_NAME@
Waiting Relay log bin to finish proceed (TIMEOUT = 60sec)
Removing slave thread on @DB_MASTER_NAME@
Recording binlog file and position from @DB_MASTER_NAME@
Unlocking databases on @DB_MASTER_NAME@
Setting and starting slave thread on @DB_SLAVE_NAME@
We have to move the VIP address
```

### Contrôler la synchronisation des bases

L'état de la réplication MySQL peut être vérifié à n'importe quel moment grâce à la commande `mysql-check-status.sh` :

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



