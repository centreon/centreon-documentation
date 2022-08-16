---
id: upgrade-centreon-ha-from-21-10
title: Montée de version de Centreon HA depuis Centreon 21.10
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce chapitre décrit comment mettre à niveau votre plate-forme Centreon HA de la version 21.10
vers la version 22.04.

## Prérequis

### Suspendre la gestion des ressources du cluster

Afin d'éviter un basculement du cluster pendant la mise à jour, il est nécessaire de surpendre toutes les ressources Centreon, ainsi que MariaDB.

```bash
pcs property set maintenance-mode=true
```

### Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance des sauvegardes de l’ensemble des serveurs centraux de votre plateforme :

- Serveur Centreon Central
- Serveur de Base de données

### Mettre à jour la clé de signature RPM

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon à jour depuis une version plus ancienne, vous devez suivre la [procédure de changement de clé](../../security/key-rotation.md#existing-installation), afin de supprimer l'ancienne clé et d'installer la nouvelle.

## Processus de mise à jour

### Mise à jour des dépôts

Il est nécessaire de mettre à jour le dépôt Centreon.

Exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```bash
dnf install -y https://yum.centreon.com/standard/22.04/el8/stable/noarch/RPMS/centreon-release-22.04-3.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install -y https://yum.centreon.com/standard/22.04/el7/stable/noarch/RPMS/centreon-release-22.04-3.el7.centos.noarch.rpm
```

</TabItem>
</Tabs>

> **WARNING:** pour éviter des problèmes de dépendances manquantes, référez-vous à la documentation des modules additionnels pour mettre à jour les dépôts Centreon Business

### Montée de version de la solution Centreon

> Assurez-vous que tous les utilisateurs sont déconnectés de l'interface web Centreon.
> avant de commencer la procédure de mise à niveau.

Videz le cache de yum :

```bash
yum clean all --enablerepo=*
```

Puis, mettez à jour l'ensemble des composants :

<Tabs groupId="sync">
<TabItem value="RHEL / Oracle Linux 8" label="RHEL / Oracle Linux 8">

```bash
dnf update centreon\*
```

</TabItem>
<TabItem value="RHEL / CentOS 7" label="RHEL / CentOS 7">


```bash
yum update centreon\*
```

</TabItem>
</Tabs>

Uniquement sur les serveurs Centraux

<Tabs groupId="sync">
<TabItem value="RHEL / Oracle Linux 8" label="RHEL / Oracle Linux 8">

```bash
mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm
```

</TabItem>
<TabItem value="RHEL / CentOS 7" label="RHEL / CentOS 7">

```bash
mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm
```

</TabItem>
</Tabs>

### Mettre à jour une configuration Apache personnalisée

Cette section s'applique uniquement si vous avez personnalisé votre configuration Apache. Lors de la montée de version, le fichier de configuration Apache n'est pas mis à jour automatiquement : le nouveau fichier de configuration amené par le rpm ne remplace pas l'ancien. Vous devez reporter les changements manuellement dans votre fichier de configuration personnalisée.

Faites un diff entre l'ancien et le nouveau fichier de configuration Apache :

<Tabs groupId="sync">
<TabItem value="RHEL / Oracle Linux 8" label="RHEL / Oracle Linux 8">

On the Central Servers:

```
diff -u /etc/httpd/conf.d/10-centreon.conf /etc/httpd/conf.d/10-centreon.conf.rpmnew
```

</TabItem>
<TabItem value="RHEL / CentOS 7" label="RHEL / CentOS 7">

On the Central Servers:

```
diff -u /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf.rpmnew
```

</TabItem>
</Tabs>

* **10-centreon.conf** (post montée de version) : ce fichier contient la configuration personnalisée. Il ne contient pas les nouveautés apportées par la version 21.10, par exemple la chaîne **authentication** dans la directive **LocationMatch**
* **10-centreon.conf.rpmnew** (post montée de version) : ce fichier est fourni par le rpm; il contient la chaîne **authentication**, mais ne contient pas la configuration personnalisée.

Pour chaque différence entre les fichiers, évaluez si celle-ci doit être reportée du fichier **10-centreon.conf.rpmnew** au fichier **10-centreon.conf**.

### Finalisation de la mise à jour

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Avant de démarrer la montée de version via l'interface web, rechargez le serveur Apache avec la commande suivante :

```bash
systemctl reload httpd
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

Avant de démarrer la montée de version via l'interface web, rechargez le serveur Apache avec la commande suivante :

```bash
systemctl reload httpd24-httpd
```

</TabItem>
</Tabs>

Ensuite, pour effectuer la mise à jour de l'interface Web, veuillez [suivre la documentation officielle](../../upgrade/upgrade-from-21-10.md#finalizing-the-upgrade) Uniquement sur le **nœud Central Actif**.

Sur le nœud central passif, déplacez le répertoire "install" pour éviter d'obtenir l'écran "upgrade" dans le WUI en cas de nouvel échange de rôles.

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-YYYY-MM-DD
sudo -u apache /usr/share/centreon/bin/console cache:clear
```

### Suppression des crons

La mise à jour RPM remet en place les crons sur les serveurs Central et Bases de données. Supprimez-les pour éviter les exécutions simultanées : 

```bash
rm -rf /etc/cron.d/centreon
rm -rf /etc/cron.d/centstorage
```

### Réinitialiser les autorisations de la ressource centreon_central_sync

L'upgrade RPM remet les permissions en place sur les serveurs centraux. Modifiez-les en utilisant ces commandes :

```bash
chmod 775 /var/log/centreon-engine/
mkdir /var/log/centreon-engine/archives
chown centreon-engine: /var/log/centreon-engine/archives
chmod 775 /var/log/centreon-engine/archives/
find /var/log/centreon-engine/ -type f -exec chmod 664 {} \;
find /usr/share/centreon/www/img/media -type d -exec chmod 775 {} \;
find /usr/share/centreon/www/img/media -type f \( ! -iname ".keep" ! -iname ".htaccess" \) -exec chmod 664 {} \;
```

## Ugprade du cluster

Depuis Centreon 22.04, la réplication de MariaDB est maintenant basée sur [GTID](https://mariadb.com/kb/en/gtid/).
Il est nécessaire de détruire complètement le cluster et de le configurer à nouveau avec
la dernière version de Centreon et les mécanismes de réplication de MariaDB GTID.

### Mode maintenance et sauvegarde

Réaliser une sauvegarde du cluster en utilisant :

```bash
pcs config backup centreon_cluster
pcs config export pcs-commands | sed -e :a -e '/\\$/N; s/\\\n//; ta' | sed 's/-f tmp-cib.xml//' | egrep "create|group" | egrep -v "(mysql|php|cbd_rrd)" > centreon_pcs_command.sh
```

Vérifiez que le fichier `centreon_cluster.tar.bz2` existe avant de continuer cette procédure.

```bash
ls -l centreon_cluster.tar.bz2
```

Vous devriez obtenir un résultat comme celui-ci :

```text
-rw------- 1 root root 2777 May  3 17:49 centreon_cluster.tar.bz2
```

Vérifiez ensuite le fichier centreon_pcs_command.sh, la commande d'exportation peut afficher quelques lignes d'avertissement mais elle n'est pas bloquante.

```bash
cat centreon_pcs_command.sh
```

Le contenu doit ressembler à ceci :

```text
pcs resource create vip ocf:heartbeat:IPaddr2 broadcast=@VIP_BROADCAST_IPADDR@ cidr_netmask=@VIP_CIDR_NETMASK@ flush_routes=true ip=@VIP_IPADDR@ nic=@VIP_IFNAME@ op monitor interval=10s timeout=20s start interval=0s timeout=20s stop interval=0s timeout=20s meta target-role=started
pcs resource create http systemd:httpd24-httpd op monitor interval=5s timeout=20s start interval=0s timeout=40s stop interval=0s timeout=40s meta target-role=started
pcs resource create gorgone systemd:gorgoned op monitor interval=5s timeout=20s start interval=0s timeout=90s stop interval=0s timeout=90s meta target-role=started
pcs resource create centreon_central_sync systemd:centreon-central-sync op monitor interval=5s timeout=20s start interval=0s timeout=90s stop interval=0s timeout=90s meta target-role=started
pcs resource create cbd_central_broker systemd:cbd-sql op monitor interval=5s timeout=30s start interval=0s timeout=90s stop interval=0s timeout=90s meta target-role=started
pcs resource create centengine systemd:centengine op monitor interval=5s timeout=30s start interval=0s timeout=90s stop interval=0s timeout=90s meta multiple-active=stop_start target-role=started
pcs resource create centreontrapd systemd:centreontrapd op monitor interval=5s timeout=20s start interval=0s timeout=30s stop interval=0s timeout=30s meta target-role=started
pcs resource create snmptrapd systemd:snmptrapd op monitor interval=5s timeout=20s start interval=0s timeout=30s stop interval=0s timeout=30s meta target-role=started
pcs resource group add centreon vip http gorgone centreon_central_sync cbd_central_broker centengine centreontrapd snmptrapd
```

Ce fichier sera nécessaire pour recréer toutes les ressources de votre cluster.

### Supprimer les ressources

Ces commandes ne doivent être exécutées que sur le nœud central actif :

```bash
pcs resource delete ms_mysql --force
pcs resource delete vip_mysql --force
pcs resource delete cbd_rrd --force
pcs resource delete php --force
pcs resource delete centreon --force
```

### Reconfigure MariaDB

Il est nécessaire de modifier la configuration de mysql en éditant `/etc/my.cnf.d/server.cnf` :

> Sur les 2 serveurs centraux dans une HA 2 nœuds
> Sur les 2 serveurs de base de données dans une HA 4 noeuds.

```bash
[server]
...
skip-slave-start
log-slave-updates
gtid_strict_mode=ON
expire_logs_days=7
ignore-db-dir=lost+found
...
```

### Lancer la réplication GTID

Exécutez cette commande **sur le nœud de base de données secondaire:**.

```bash
mysqladmin -p shutdown
```

Il est important de s'assurer que MariaDB est complètement arrêté. Vous allez exécuter cette commande et vérifier qu'elle ne renvoie aucun résultat :

```bash
ps -ef | grep mariadb[d]
```

Une fois le service arrêté **sur le nœud de base de données secondaire**, vous allez exécuter le script de synchronisation **depuis le nœud de base de données primaire** :

```bash
mysqladmin -p shutdown
systemctl restart mariadb
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

La sortie de ce script est très verbeuse et vous ne pouvez pas vous attendre à tout comprendre, donc pour vous assurer que tout s'est bien passé, concentrez-vous sur les dernières
lignes de la sortie, en vérifiant qu'elle ressemble à ceci :

```text
Umount and Delete LVM snapshot
  Logical volume "dbbackupdatadir" successfully removed
Start MySQL Slave
Start Replication
Id	User	Host	db	Command	Time	State	Info	Progress
[variable number of lines]
```

La chose importante à vérifier est que `Start MySQL Slave` et `Start Replication` sont présents et qu'aucune erreur ne les suit.

De plus, la sortie de cette commande ne doit afficher que des résultats `OK` :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

La sortie attendue est :

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

### Redémarrer les processus de Centreon

Puis de redémarrer tous les processus sur le **nœud central actif** :

```bash
systemctl restart cbd-sql cbd gorgoned centengine centreontrapd 
```

Et sur le **nœud central passif** :

```bash
systemctl restart cbd
```

### Nettoyer les fichiers de mémoire de broker

> **WARNING:** exécuter cette commande uniquement sur le noeud central passif.

Avant de reprendre la gestion des ressources du cluster, pour éviter les problèmes de broker, il faut nettoyer tous les fichiers *.memory.*, *.unprocessed.* ou *.queue.* :

```bash
rm -rf /var/lib/centreon-broker/central-broker-master.memory*
rm -rf /var/lib/centreon-broker/central-broker-master.queue*
rm -rf /var/lib/centreon-broker/central-broker-master.unprocessed*
```

### Recréer les ressources du cluster

À exécuter **seulement sur un nœud central** :

> **WARNING:** la syntaxe de la commande suivante dépend de la distribution Linux que vous utilisez.

> Vous pouvez trouver les variables @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ @MARIADB_REPL_USER@
@MARIADB_REPL_USER@ dans `/etc/centreon-ha/mysql-resources.sh`.

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

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
<TabItem value="RHEL 7" label="RHEL 7">

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
<TabItem value="CentOS 7" label="CentOS 7">

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
    test_table='centreon.host' \
    master
```

</TabItem>
</Tabs>

> **WARNING:** la syntaxe de la commande suivante dépend de la distribution Linux que vous utilisez.

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">
<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

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
<TabItem value="CentOS 7" label="CentOS 7">

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
</TabItem>
<TabItem value="HA 4 Nodes" label="HA 4 Nodes">
<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```bash
pcs resource promotable ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

Adresse VIP des serveurs de bases de données

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

Adresse VIP des serveurs de bases de données

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
</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
pcs resource meta ms_mysql-master \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

Adresse VIP des serveurs de bases de données

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
</TabItem>
</Tabs>
</TabItem>
</Tabs>

#### PHP ressource

```bash
pcs resource create "php" \
    systemd:php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
```

#### Ressource RRD broker

```bash
pcs resource create "cbd_rrd" \
    systemd:cbd \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="20s" timeout="30s" \
    clone
```

#### Recréer le groupe de ressources *centreon*

```bash
bash centreon_pcs_command.sh
```

#### Recréer les contraintes

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">
<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
pcs constraint colocation add master "ms_mysql-clone" with "centreon"
pcs constraint order stop centreon then demote ms_mysql-clone
```

</TabItem>
<TabItem value="REHL 7 / CentOS 7" label="REHL 7 / CentOS 7">

```bash
pcs constraint colocation add master "ms_mysql-master" with "centreon"
pcs constraint order stop centreon then demote ms_mysql-master
```

</TabItem>
</Tabs>
</TabItem>
<TabItem value="HA 4 Nodes" label="HA 4 Nodes">

Afin de fixer le rôle de la base de données primaire avec l'IP virtuelle, définissez une contrainte mutuelle :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
pcs constraint colocation add "vip_mysql" with master "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"
```

</TabItem>
<TabItem value="REHL 7 / CentOS 7" label="REHL 7 / CentOS 7">

```bash
pcs constraint colocation add "vip_mysql" with master "ms_mysql-master"
pcs constraint colocation add master "ms_mysql-master" with "vip_mysql
```

</TabItem>
</Tabs>

Recréez ensuite les contraintes qui empêchent les processus Centreon de s'exécuter sur les nœuds de base de données et vice-versa :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location ms_mysql-clone avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY
pcs constraint location cbd_rrd-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```

</TabItem>
<TabItem value="REHL 7 / CentOS 7" label="REHL 7 / CentOS 7">

```bash
pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location ms_mysql-master avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY
pcs constraint location cbd_rrd-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```

</TabItem>
</Tabs>
</TabItem>
</Tabs>

## Reprise de la gestion des ressources du cluster

Maintenant que la mise à jour est terminée, les ressources peuvent être gérées à nouveau :

```bash
pcs property set maintenance-mode=false
pcs resource cleanup ms_mysql
```

## Vérifier la santé du cluster

Vous pouvez surveiller les ressources du cluster en temps réel en utilisant la commande `crm_mon -fr` :
> **INFO:** L'option `-fr` vous permet d'afficher toutes les resources même si elles sont disable.

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">

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
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
```

</TabItem>
<TabItem value="HA 4 Nodes" label="HA 4 Nodes">

```bash
[...]
4 nodes configured
21 resources configured

Online: [@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
vip_mysql       (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
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

### Ressources désactivées

Lorsque vous faite une `crm_mon -fr` et que vous une ressource qui est disable :

```bash
...
 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
vip_mysql       (ocf::heartbeat:IPaddr2):       Stopped (disabled)
...
```

Vous devez faire enable la resource avec la commande suivante :

```bash
pcs resource enable @RESSOURCE_NAME@
```

Dans notre cas :

```bash
pcs resource enable vip_mysql
```

## Vérification de la stabilité de la plate-forme

Vous devez maintenant vérifier que tout fonctionne bien :

* Accès aux menus de l'interface utilisateur web.
* Génération de la configuration des pollers + méthode de rechargement et de redémarrage.
* Planification des contrôles immédiats (Central + Pollers), des accusés de réception, des temps d'arrêt, etc.
* Déplacer des ressources ou redémarrer le serveur actif et vérifier à nouveau que tout va bien.