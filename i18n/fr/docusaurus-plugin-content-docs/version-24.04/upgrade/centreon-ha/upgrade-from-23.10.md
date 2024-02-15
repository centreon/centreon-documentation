---
id: upgrade-centreon-ha-from-23-10
title: Montée de version de Centreon HA depuis Centreon 23.10
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce chapitre décrit comment mettre à niveau votre plate-forme Centreon HA de la version 23.10 vers la version 24.04.

## Prérequis

### Suspendre la gestion des ressources du cluster

Afin d'éviter un basculement du cluster pendant la mise à jour, il est nécessaire de suspendre toutes les ressources Centreon, ainsi que MariaDB.

```bash
pcs property set maintenance-mode=true
```

### Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance des sauvegardes de l’ensemble des serveurs centraux de votre plateforme :

- Serveur Centreon Central
- Serveur de Base de données

### Mettre à jour la clé de signature RPM

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Le dernier changement a eu lieu le 14 octobre 2021.
Lorsque vous mettez Centreon à jour depuis une version plus ancienne, vous devez suivre la [procédure de changement de clé](../../security/key-rotation.md#existing-installation), afin de supprimer l'ancienne clé et d'installer la nouvelle.

## Processus de mise à jour

Avant de procéder à la montée de version, arrêter Centreon-Broker-SQL sur le **nœud central primaire**:

```bash
systemctl stop cbd-sql
```

Maintenant, pour effectuer la montée de version:

> Pour le **nœud central actif** et **le nœud base de données actif s'il existe** merci de [suivre la documentation officielle](../../upgrade/upgrade-from-23-10.md) **jusqu'à l'étape "Actions post montée de version" incluse**.

> Pour le **nœud central passif** et **le nœud base de données passif s'il existe**, merci de [suivre la documentation officielle](../../upgrade/upgrade-from-23-10.md) **jusqu'à l'étape "Mettre à jour une configuration Apache personnalisée" incluse uniquement. Ne pas procéder à l'étape "Finalisation de la mise à jour**.

<Tabs groupId="sync">
<TabItem value="RHEL8 / Alma Linux 8 / Oracle Linux 8" label="RHEL8 / Alma Linux 8 / Oracle Linux 8">

Uniquement sur les serveurs deux nœuds centraux, restaurer le fichier `/etc/centreon-ha/centreon_central_sync.pm`.

```bash
mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm
```

Sur le **nœud central passif**, déplacez le répertoire **install** pour éviter d'obtenir l'écran "upgrade" dans l'interface en cas de nouvel échange de rôles et rechargez le cache Apache.

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y-%m-%d`
sudo -u apache /usr/share/centreon/bin/console cache:clear
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Sur le **nœud central passif**, déplacez le répertoire **install** pour éviter d'obtenir l'écran "upgrade" dans l'interface en cas de nouvel échange de rôles et rechargez le cache Apache.

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y-%m-%d`
sudo -u www-data /usr/share/centreon/bin/console cache:clear
```

</TabItem>
</Tabs>

### Suppression des crons

La mise à jour RPM remet en place les crons sur les serveurs Central et Bases de données. Supprimez-les pour éviter les exécutions simultanées : 

```bash
rm -rf /etc/cron.d/centreon
rm -rf /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-ha-mysql
```

puis redémarrer le service cron:

<Tabs groupId="sync">
<TabItem value="RHEL8 / Alma Linux 8 / Oracle Linux 8" label="RHEL8 / Alma Linux 8 / Oracle Linux 8">

```bash
systemctl restart crond
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
systemctl restart cron
```

</TabItem>
</Tabs>

Le cron **centreon-ha-mysql** étant supprimé, vérifiez que vous avez bien la ligne suivante dans la section **server** du fichier **/etc/my.cnf.d/server.cnf**  (ou dans le **/etc/mysql/mariadb.conf.d/50-server.cnf** sur Debian), il est normalement déjà en place depuis 22.04 et la réplication GTID :

```shell
expire_logs_days=7
```

Vous pouvez maintenant effectuer une mise à jour globale sur tous les nœuds, y compris le Quorum, mais **ne redémarrez pas maintenant** :

<Tabs groupId="sync">
<TabItem value="RHEL8 / Alma Linux 8 / Oracle Linux 8" label="RHEL8 / Alma Linux 8 / Oracle Linux 8">

```bash
dnf update
systemctl daemon-reload
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt upgrade
systemctl daemon-reload
```

</TabItem>
</Tabs>

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

Cependant, certains changements doivent toujours être apportés.

### Sauvegarder la configuration

Effectuez une sauvegarde du cluster sur le nœud central maître en utilisant:

```bash
pcs config backup centreon_cluster
cibadmin -Q > export_cluster.xml
```

Vérifiez que le fichier `centreon_cluster.tar.bz2` existe avant de continuer cette procédure.

```bash
ls -l centreon_cluster.tar.bz2
```

Vous devriez obtenir un résultat comme celui-ci:

```text
-rw------- 1 root root 2777 May  3 17:49 centreon_cluster.tar.bz2
```

### Modification de l'ordre des ressources sur le groupe centreon

Pour optimiser la gestion des ressources et éviter de redémarrer cbd-sql quand on veut juste redémarrer gorgone, il faut changer leur ordre dans le groupe.

```bash
pcs resource group remove centreon cbd_central_broker
pcs resource group add centreon cbd_central_broker --before gorgone
```

### Nettoyer les fichiers de mémoire de broker

> **WARNING:** exécuter cette commande uniquement sur le noeud central passif.

Avant de reprendre la gestion des ressources du cluster, pour éviter les problèmes de broker, il faut nettoyer tous les fichiers *.memory.*, *.unprocessed.* ou *.queue.* :

```bash
rm -rf /var/lib/centreon-broker/central-broker-master.memory*
rm -rf /var/lib/centreon-broker/central-broker-master.queue*
rm -rf /var/lib/centreon-broker/central-broker-master.unprocessed*
```

#### Recréer les contraintes

Par le passé, une erreur a pu être commise lors de la déclaration de contraintes avec un démontage de la ressource ms_mysql lors du déplacement de la ressource centreon. Pour y remédier, vous devez supprimer les contraintes et les recréer comme suit:

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">
<Tabs groupId="sync">
<TabItem value="RHEL8 / Alma Linux 8 / Oracle Linux 8" label="RHEL8 / Alma Linux 8 / Oracle Linux 8">

Commencez par extraire tous les identifiants des contraintes:

```bash
pcs constraint config --full | grep "id:" | awk -F "id:" '{print $2}' | sed 's/.$//'
```

Vous devriez obtenir un résultat similaire:

```text
order-centreon-ms_mysql-clone-mandatory
colocation-ms_mysql-clone-centreon-INFINITY
colocation-centreon-ms_mysql-clone-INFINITY
```

et supprimer **toutes** les contraintes, **adapter les ID avec les vôtres**

```bash
pcs constraint delete order-centreon-ms_mysql-clone-mandatory
pcs constraint delete colocation-ms_mysql-clone-centreon-INFINITY
pcs constraint delete colocation-centreon-ms_mysql-clone-INFINITY
```

Vérifier que toutes les contraintes ont bien été supprimées:

```bash
pcs contraint
```

Vous devriez obtenir un résultat comme celui-ci:

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
Ticket Constraints:
```

Si c'est le cas, recréez uniquement les contraintes nécessaires.

```bash
pcs constraint colocation add master "ms_mysql-clone" with "centreon"
pcs constraint colocation add master "centreon" with "ms_mysql-clone"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Extraire d'abord tous les identifiants de contraintes:

```bash
pcs constraint show --full | grep "id:" | awk -F "id:" '{print $2}' | sed 's/.$//'
```

Vous devriez obtenir un résultat similaire:

```text
order-centreon-ms_mysql-clone-mandatory
colocation-ms_mysql-clone-centreon-INFINITY
colocation-centreon-ms_mysql-clone-INFINITY
```

et supprimer **toutes** les contraintes, **adapter les ids avec les vôtres**

```bash
pcs constraint delete order-centreon-ms_mysql-clone-mandatory
pcs constraint delete colocation-ms_mysql-clone-centreon-INFINITY
pcs constraint delete colocation-centreon-ms_mysql-clone-INFINITY
```

Vérifier que toutes les contraintes sont bien supprimées:

```bash
pcs contraint
```

Vous devriez obtenir un résultat comme celui-ci:

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
Ticket Constraints:
```

Si c'est le cas, recréez uniquement les contraintes nécessaires.

```bash
pcs constraint colocation add master "ms_mysql-clone" with "centreon"
pcs constraint colocation add master "centreon" with "ms_mysql-clone"
```

</TabItem>
</Tabs>
</TabItem>
<TabItem value="HA 4 Nodes" label="HA 4 Nodes">
<Tabs groupId="sync">
<TabItem value="RHEL8 / Alma Linux 8 / Oracle Linux 8" label="RHEL8 / Alma Linux 8 / Oracle Linux 8">

Extraire d'abord tous les identifiants de contraintes:

```bash
pcs constraint config --full | grep "id:" | awk -F "id:" '{print $2}' | sed 's/.$//'
```

Vous devriez obtenir un résultat similaire en fonction de vos noms d'hôtes :

```text
location-cbd_rrd-clone-cc-ha-bdd1-2210-alma8--INFINITY
location-cbd_rrd-clone-cc-ha-bdd2-2210-alma8--INFINITY
location-centreon-cc-ha-bdd1-2210-alma8--INFINITY
location-centreon-cc-ha-bdd2-2210-alma8--INFINITY
location-ms_mysql-clone-cc-ha-web1-2210-alma8--INFINITY
location-ms_mysql-clone-cc-ha-web2-2210-alma8--INFINITY
location-php-clone-cc-ha-bdd1-2210-alma8--INFINITY
location-php-clone-cc-ha-bdd2-2210-alma8--INFINITY
order-centreon-ms_mysql-clone-mandatory
colocation-ms_mysql-clone-vip_mysql-INFINITY
colocation-centreon-vip-INFINITY
```

et supprimer **toutes** les contraintes, **adapter les ids avec les vôtres**

```bash
pcs constraint delete location-cbd_rrd-clone-cc-ha-bdd1-2210-alma8--INFINITY
pcs constraint delete location-cbd_rrd-clone-cc-ha-bdd2-2210-alma8--INFINITY
pcs constraint delete location-centreon-cc-ha-bdd1-2210-alma8--INFINITY
...
```

Vérifier que toutes les contraintes sont bien supprimées:

```bash
pcs contraint
```

Vous devriez obtenir un résultat comme celui-ci:

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
Ticket Constraints:
```

Si c'est le cas, recréez uniquement les contraintes nécessaires.

Afin de coller le rôle de base de données primaire avec l'IP virtuelle, définissez une contrainte mutuelle:

```bash
pcs constraint colocation add "vip_mysql" with master "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Extraire d'abord tous les identifiants de contraintes:

```bash
pcs constraint show --full | grep "id:" | awk -F "id:" '{print $2}' | sed 's/.$//'
```

Vous devriez obtenir un résultat similaire en fonction de vos noms d'hôtes :

```text
location-cbd_rrd-clone-deb11-bdd1--INFINITY
location-cbd_rrd-clone-deb11-bdd2--INFINITY
location-centreon-deb11-bdd1--INFINITY
location-centreon-deb11-bdd2--INFINITY
location-ms_mysql-clone-deb11-central1--INFINITY
location-ms_mysql-clone-deb11-central2--INFINITY
location-php-clone-deb11-bdd1--INFINITY
location-php-clone-deb11-bdd2--INFINITY
colocation-vip_mysql-ms_mysql-clone-INFINITY-1
colocation-ms_mysql-clone-vip_mysql-INFINITY
```

et supprimer **toutes** les contraintes, **adapter les ids avec les vôtres**

```bash
pcs constraint delete location-cbd_rrd-clone-deb11-bdd1--INFINITY
pcs constraint delete location-cbd_rrd-clone-deb11-bdd2--INFINITY
pcs constraint delete location-centreon-deb11-bdd1--INFINITY
...
```

Vérifier que toutes les contraintes sont bien supprimées:

```bash
pcs contraint
```

Vous devriez obtenir un résultat comme celui-ci:

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
Ticket Constraints:
```

Si c'est le cas, recréez uniquement les contraintes nécessaires

```bash
pcs constraint colocation add "vip_mysql" with master "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"
```

</TabItem>
</Tabs>

Recréez ensuite la contrainte qui empêche les processus Centreon de s'exécuter sur les nœuds de la base de données et vice-et-versa.:

<Tabs groupId="sync">
<TabItem value="RHEL8 / Alma Linux 8 / Oracle Linux 8" label="RHEL8 / Alma Linux 8 / Oracle Linux 8">

```bash
pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location ms_mysql-clone avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY
pcs constraint location cbd_rrd-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location ms_mysql-clone avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY
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
pcs resource cleanup
```

## Vérifier la santé du cluster

Vous pouvez surveiller les ressources du cluster en temps réel en utilisant la commande `crm_mon -fr` :
> **INFO:** L'option `-fr` vous permet d'afficher toutes les resources même si elles sont disable.

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">

```text
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

```text
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

### Redémarrer les nœuds pour appliquer les mises à jour du système

Lorsque votre cluster est OK, vous pouvez maintenant redémarrer le nœud esclave.

```bash
reboot
```

Attendez que le nœud revienne en ligne et changez de nœud en déplaçant la ressource centreon, par exemple.

```bash
pcs resource move centreon
```

Nettoyage des contraintes

```bash
pcs resource clear centreon
```

et lorsque le cluster est OK, redémarrez l'autre serveur. Vous pouvez également redémarrer le quorum.

```bash
reboot
```

## Vérification de la stabilité de la plate-forme

Vous devez maintenant vérifier que tout fonctionne bien :

* Accès aux menus de l'interface utilisateur web.
* Génération de la configuration des pollers + méthode de rechargement et de redémarrage.
* Planification des contrôles immédiats (Central + Pollers), des accusés de réception, des temps d'arrêt, etc.
* Déplacer des ressources ou redémarrer le serveur actif et vérifier à nouveau que tout va bien.
