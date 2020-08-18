---
id: installation-2-nodes
title: Installation d'un cluster à 2 nœuds
---

## Prérequis

### Compréhension

Avant de suivre cette procédure, il est recommandé d'avoir un niveau de connaissance satisfaisant du système d'exploitation Linux, de Centreon et des outils de clustering Pacemaker-Corosync pour bien comprendre ce qui va être fait et pour pouvoir se sortir d'un éventuel faux pas.

> **AVERTISSEMENT :** Toute personne mettant en application cette procédure doit être consciente qu'elle prend ses responsabilités en cas de dysfonctionnement. En aucun cas la société Centreon ne saurait être tenue pour responsable de toute détérioration ou perte de données.

### Installation de Centreon

L'installation d'un cluster Centreon-HA ne peut se faire que sur la base d'une installation fonctionnelle de Centreon. Avant de suivre cette procédure, il est donc impératif d'avoir appliqué **[cette procédure d'installation](../../installation/introduction.html)** jusqu'au bout **en réservant environ 5GB de libre** sur le *volume group* qui contient  les données MariaDB (point de montage `/var/lib/mysql` par défaut). 

La commande `vgs` doit retourner un affichage de la forme ci-dessous (en particulier la valeur sous `VFree`) :

```text
  VG                    #PV #LV #SN Attr   VSize   VFree 
  centos_centreon-c1      1   5   0 wz--n- <31,00g <5,00g
```

> **AVERTISSEMENT :** Si ce prérequis n'est pas vérifié, il ne sera pas possible de synchroniser les bases de données de la façon indiquée dans ce document.

### *Quorum Device*

Pour le bon fonctionnement du cluster, en particulier pour éviter les cas de split-brain, il est nécessaire d'avoir un serveur tiers pour tenir le rôle d'arbitre. Il est possible d'utiliser un poller pour remplir ce rôle.

### Définition des noms et adresses IP des serveurs

Dans cette procédure nous ferons référence à des paramètres variant d'une installation à une autre (noms et adresses IP des nœuds par exemple) par l'intermédiaire des macros suivantes :

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

* `central-broker-master` : que l'on appelle aussi "broker central" ou encore "broker SQL", qui redirige toutes les entrées-sorties en provenance des pollers, vers les bases de données, vers le broker RRD, etc.
* `central-rrd-master` : le broker RRD qui reçoit son flux du broker SQL, et dont la seule fonction est d'écrire les fichiers RRD utilisés pour afficher les graphes. 

Dans un cluster Centreon-HA, les deux processus broker vont être gérés chacun via un service distinct qui seront pilotés par le cluster :

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

Une fois que les actions des deux précédents paragraphes ont été réalisées, il faut exporter la configuration (3 premières cases pour l'export du poller "Central") pour que celle-ci soit effective.

Ces actions doivent être réalisées soit sur les deux nœuds, soit uniquement sur `@CENTRAL_MASTER_NAME@` puis les fichiers de configuration de broker doivent être copiés vers `@CENTRAL_SLAVE_NAME@`.

```bash
rsync -a /etc/centreon-broker/*json @CENTRAL_SLAVE_IPADDR@:/etc/centreon-broker/
```

### Modification de la commande de rechargement de `cbd`

Cela n'est pas forcément connu de tous les utilisateurs de Centreon, mais chaque fois qu'un rechargement de la configuration du poller central est effectué via l'interface, le service broker (`cbd`) est rechargé (pas seulement centengine), d'où le paramètre "Centreon Broker reload command" dans *Configuration > Pollers > Central*.

Ainsi que cela a été expliqué plus haut, les processus broker sont répartis entre deux services : `cbd` pour le broker RRD, `cbd-sql` pour le broker central. Dans le cadre d'un cluster centreon-ha, service que l'on doit recharger lors de l'export de configuration est `cbd-sql` et non plus `cbd`. Il faut donc appliquer la valeur `service cbd-sql reload` au paramètre "Centreon Broker reload command".

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
@QDEVICE_IPADDR@ @QDEVICE_NAME@
EOF
```

Dans la suite de ce document, on parlera de nœud principal pour le premier et de nœud secondaire pour le second. Cette distinction est purement arbitraire, les rôles pourront bien sûr être échangés une fois l'installation terminée.

### Installation des paquets

Centreon propose le paquet `centreon-ha`, qui fournit tous les scripts et les dépendances nécessaires au fonctionnement d'un cluster Centreon. Ces paquets sont à installer sur les deux nœuds centraux :

```bash
yum install epel-release
yum install centreon-ha
```

### Échanges de clefs SSH

Afin de permettre aux deux serveurs centraux d'échanger des fichiers et des commandes, il faut mettre en place la possibilité de se connecter *via* SSH d'un serveur à l'autre pour les utilisateurs :

* `mysql`
* `centreon`

Il existe 2 façons d'échanger des clefs SSH :

* En utilisant `ssh-copy-id` : l'utilisation de cette commande nécessite de pouvoir valider l'authentification au moyen d'un mot de passe. Or il n'est pas souhaitable, pour les comptes de service dont il est question ici, de définir de mot de passe. Si cette méthode est retenue malgré tout, il est recommandé de supprimer le mot de passe après l'échange, avec les commandes `passwd -d centreon` et `passwd -d mysql`
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

Après avoir lancé ces commandes sur les deux nœuds, copier le contenu du fichier qui s'est affiché sous la commande `cat` et le coller dans le fichier (à créer) `~/.ssh/authorized_keys` puis appliquer les bons droits sur le fichier (toujours en tant que `centreon`) :

```bash
chmod 600 ~/.ssh/authorized_keys
```

L'échange de clefs doit ensuite être validé par une première connexion qui permettra d'accepter la signature du serveur SSH (toujours en tant que `centreon`) :

```bash
ssh <nom de l'autre nœud>
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
su - mysql
```

Une fois dans l'environnement `bash` de `mysql`, lancer ces commandes sur les deux nœuds centraux :

```bash
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub
```

Après avoir lancé ces commandes sur les deux nœuds, copier le contenu du fichier et le coller dans `~/.ssh/authorized_keys` puis appliquer les bons droits sur le fichier (toujours en tant que `mysql`) :

```bash
chmod 600 ~/.ssh/authorized_keys
```

L'échange de clefs doit ensuite être validé par une première connexion qui permettra d'accepter la signature du serveur SSH (toujours en tant que `mysql`) :

```bash
ssh <nom de l'autre nœud>
```

Puis sortir de la session de `mysql` avec `exit` ou `Ctrl-D`.

## Mise en place de la réplication MariaDB

Afin que les deux nœuds soient interchangeables à tout moment, il faut que les deux bases de données soient répliquées en continu. Pour cela nous allons mettre en place une réplication Master-Slave.

**Remarque :** sauf mention contraire, chacune des étapes suivantes est à réaliser **sur les deux nœuds centraux**.

### Configuration de MariaDB

Pour commencer, il faut tuner la configuration de MariaDB, qui sera concentrée dans le seul fichier `/etc/my.cnf.d/server.cnf`.  Par défaut, la section `[server]` de ce fichier est vide, c'est là que doit être collées les lignes suivantes :

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
# MariaDB strict mode will be supported soon
#sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
```

> **Important :** la valeur de `server-id` doit être différente d'un serveur à l'autre, pour qu'ils puissent s'identifier correctement. Les valeurs 1 => Master et 2 => Slave ne sont pas obligatoires mais sont recommandées.

**NB :** Ne pas oublier de décommenter (supprimer le '#' en début de ligne) le paramètre `innodb_buffer_pool_size` qui correspond à votre plateforme.

Pour que ces modifications soient bien prises en compte, il faut redémarrer le serveur de base de données :

```bash
systemctl restart mysql
```

Bien s'assurer que le redémarrage s'est bien déroulé avec la commande suivante :

```bash
systemctl status mysql
```

> **Avertissement :** Le fichier `centreon.cnf` ne sera plus pris en compte, si des paramètres y ont été personnalisés, il faut les reporter dans `server.cnf`.

### Sécurisation de la base de données 

L'accès aux bases de données doit être limité de la façon la plus stricte possible. La commande `mysql_secure_installation` permet de supprimer les accès non protégés par des mots de passes et la base de données de test. Lancer cette commande et se laisser guider par les choix par défaut. Attention à choisir un mot de passe n'appartenant à aucun dictionnaire.

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

Lorsque la solution centreon-ha est ajoutée à une plateforme Centreon existante ou déployée via une VM OVA/OVF, le mot de passe de l'utilisateur `'@MARIADB_CENTREON_USER@'@'localhost'` doit être mis à jour: 

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

### Mise en place des purge des logs binaires

Les logs binaires de MariaDB doivent être purgées sur les deux nœuds, mais pas en même temps, c'est pourquoi cette tâche automatique est mise en place manuellement de façon différenciée sur les deux serveurs.

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

Pour s'assurer que les dernières étapes ont été effectuées correctement, et que les bons noms, logins et mots de passes ont bien été saisis dans le fichier de configuration, il faut lancer la commande :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Le résultat attendu est :

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
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

Appliquer ensuite ce changement par un redémarrage de MariaDB sur les deux nœuds :

```bash
systemctl restart mysql
```

### Synchroniser les bases et lancer la réplication MariaDB

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
* désactiver la variable globale MariaDB `read_only` sur le nœud principal (*ie.* le nœud principal est maintenant autorisé à écrire dans sa base)
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
[nombre variable de lignes]
```

Ce qu'il est important de vérifier est que les lignes `Start MySQL Slave` et `Start Replication` ne soient suivies d'aucune erreur.

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

Les tâches planifiées de type __cron__ sont executées directement par le processus gorgone dans les architecture hautement disponible. Cela permet de garantir la non-concurrence de leur execution sur les noeuds centraux. Il est donc nécessaire de les supprimer manuellement:

```bash
rm /etc/cron.d/centreon
rm /etc/cron.d/centstorage
rm /etc/cron.d/centreon-auto-disco
```

### Modification des droits

Les répertoires /var/log/centreon-engine et /tmp/centreon-autodisco sont partagés entre plusieurs processus. Il est nécessaire 
de modifier les droits des répertoires et fichiers pour garantir le bon fonctionnement de la réplication de fichiers et de la 
découverte automatique des services:

- Réplication des fichiers 

```bash
chmod 775 /var/log/centreon-engine/
chmod 775 /var/log/centreon-engine/archives/
chmod 664 /var/log/centreon-engine/*
chmod 664 /var/log/centreon-engine/archives/*
```

- Découverte des services 

```bash
chmod 775 /tmp/centreon-autodisco/
```


### Arrêt et désactivation des services

Les services applicatifs de Centreon ne seront plus lancés au démarrage du serveur comme c'est le cas pour une installation standard, ce sont les services de clustering qui s'en chargeront. Il faut donc arrêter et désactiver ces services.

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd centreon mysql
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd centreon mysql
```

Le service MariaDB étant sur un mode mixte entre SysV init et systemd, pour bien s'assurer qu'il ne soit plus lancé au démarrage, il faut également lancer la commande :

```bash
chkconfig mysql off
```

### Création du cluster

#### Activation des services de clustering

Pour commencer, démarrer le service pcsd sur les deux nœuds centraux :

```bash
systemctl start pcsd
```

#### Préparation du serveur qui jouera le rôle de *Quorum Device*

```bash
yum install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

Modifier le paramètre `COROSYNC_QNETD_OPTIONS` du fichier de configuration `/etc/sysconfig/corosync-qnetd` du Quorum afin de restreindre les connexions entrant à IPv4.

`COROSYNC_QNETD_OPTIONS="-4"`


#### Authentification auprès des membres du cluster

Par mesure de simplicité, nous allons définir le même mot de passe pour le compte `hacluster` sur les deux nœuds **et sur `@QDEVICE_NAME@`** :

```bash
passwd hacluster
```

Une fois ce mot de passe commun défini, il est possible pour un nœud de s'authentifier sur les autres. **La commande suivante ainsi que toutes les commandes agissant sur le cluster doivent être lancée sur un seul nœud.**

```bash
pcs cluster auth \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@' \
    --force
```

#### Création du cluster

Cette commande doit être lancée sur un des deux nœuds :

```bash
pcs cluster setup \
    --force \
    --name centreon_cluster \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@"
```

Démarrer ensuite `pacemaker` sur les deux nœuds :

```bash
systemctl enable pacemaker pcsd corosync
systemctl start pacemaker
```

Puis définir les propriétés par défaut sur un des deux nœuds:

```bash
pcs property set symmetric-cluster="true"
pcs property set stonith-enabled="false"
pcs resource defaults resource-stickiness="100"
```

L'état du cluster peut être suivi en temps réel avec la commande `crm_mon`, qui vous permettra de voir apparaître les nouvelles ressources au fur et à mesure.

#### Ajout du *Quorum Device*

Cette commande doit être lancée depuis l'un des deux nœuds :

```bash
pcs quorum device add model net \
    host="@QDEVICE_NAME@" \
    algorithm="ffsplit"
```

### Création des ressources MariaDB

Cette commande ne doit être lancée que sur un des deux nœuds centraux :

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mysql-centreon \
    config="/etc/my.cnf.d/server.cnf" \
    pid="/var/lib/mysql/mysql.pid" \
    datadir="/var/lib/mysql" \
    socket="/var/lib/mysql/mysql.sock" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    max_slave_lag="15" \
    evict_outdated_slaves="false" \
    binary="/usr/bin/mysqld_safe" \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd="@MARIADB_REPL_PASSWD@" \
    test_table='centreon.host' \
    master
```

```bash
pcs resource meta ms_mysql-master \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

### Création des ressources clones

Certaines ressources ne doivent être démarrées que sur un seul nœud, mais pour d'autres, il n'est pas gênant voire souhaitable de les démarrer sur les deux nœuds. Pour ces dernières, nous déclarerons des ressources *clones*.

> **Avertissement :** Toutes les commandes qui suivent ne doivent être lancées que sur un seul des deux nœuds centraux.

##### PHP7

```bash
pcs resource create "php7" \
	systemd:rh-php72-php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
```

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

```bash
pcs constraint colocation add "centreon" with master "ms_mysql-master"
pcs constraint colocation add master "ms_mysql-master" with "centreon"
```

Après cette étape, toutes les ressources doivent être actives au même endroit, et la plateforme fonctionnelle et redondée. Dans le cas contraire, se référer au guide de troubleshooting du paragraphe suivant.

### Contrôle de l'état du cluster

#### Contrôle de l'état des ressources

Il est possible de suivre l'état du cluster en temps réel via la commande `crm_mon` :

```bash
Stack: corosync
Current DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el7_7.2-3c4c782f70) - partition with quorum
Last updated: Thu Feb 20 13:14:17 2020
Last change: Thu Feb 20 09:25:54 2020 by root via crm_attribute	on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resources configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_MASTER_NAME@ ]
     Slaves: [ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php7-clone [php7]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):	Started @CENTRAL_MASTER_NAME@
     http	(systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync	(systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     centreontrapd	(systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):	Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
```

#### Contrôler la synchronisation des bases

L'état de la réplication MariaDB peut être vérifié à n'importe quel moment grâce à la commande `mysql-check-status.sh` :

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

Il est possible qu'immédiatement après l'installation, le thread de réplication ne soit pas actif. Un redémarrage de la ressource `ms_mysql` doit permettre d'y remédier.

```bash 
pcs resource restart ms_mysql
```

#### Contrôle de l'absence de contraintes

En temps normal, seules les contraintes de colocation doivent être actives sur le cluster. La commande `pcs constraint` doit retourner :

```bash
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-master (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-master with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

