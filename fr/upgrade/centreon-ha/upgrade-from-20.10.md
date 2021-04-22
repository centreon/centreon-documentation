---
id: upgrade-centreon-ha-from-20-10
title: Montée de version de Centreon HA depuis Centreon 20.10
---

Ce chapitre décrit la procédure de montée de version de votre plateforme
Centreon HA depuis la version 20.10 vers la version 21.04.

## Prérequis

### Suspension de la gestion des resources par le cluster

Cette opération nécessite de suspendre la gestion des ressources Centreon et MariaDB par le cluster pour éviter qu'une bascule se produise en pleine mise à jour.

```bash
pcs resource unmanage centreon
pcs resource unmanage ms_mysql
```

### Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance
des sauvegardes de l’ensemble des serveurs centraux de votre plateforme :

- Serveur Centreon Central,
- Serveur de base de données.

## Processus de mise à jour

### Mise à jour des dépôts

Il est nécessaire de mettre à jour le dépôt Centreon.

Exécutez la commande suivante :

```shell
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-4.el7.centos.noarch.rpm
```

> **WARNING:** pour éviter des problèmes de dépendances manquantes, référez-vous à la documentation des modules additionnels pour mettre à jour les dépôts Centreon Business

### Montée de version de la solution Centreon

Videz le cache de yum :

```shell
yum clean all --enablerepo=*
```

Mettez à jour l'ensemble des composants :

<!--DOCUSAURUS_CODE_TABS-->
<!--HA 2 Nodes-->

```shell
yum update centreon\*
yum install centreon-ha-web centreon-ha-common
yum autoremove centreon-ha
```

<!--HA 4 Nodes-->

Sur les serveurs Centraux
```shell
yum update centreon\*
yum install centreon-ha-web centreon-ha-common
yum autoremove centreon-ha
```

Sur les serveurs de base de données :
```shell
yum update centreon\*
yum install centreon-ha-common
yum autoremove centreon-ha
```

<!--END_DOCUSAURUS_CODE_TABS-->

> Acceptez les nouvelles clés GPG des dépôts si nécessaire.

Le fuseau horaire par défaut de PHP 7 doit être configuré. Executez la commande suivante :
```shell
echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php73/php.d/50-centreon.ini
```

> **WARNING** les commandes suivantes ne doivent être exécutées que sur un seul nœud du cluster.

<!--DOCUSAURUS_CODE_TABS-->
<!--HA 2 Nodes-->
```bash
pcs resource delete php7
pcs resource create "php7" \
    systemd:rh-php73-php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
```
<!--HA 4 Nodes-->
```bash
pcs resource delete php7
pcs resource create "php7" \
    systemd:rh-php73-php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
pcs constraint location php7-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```
<!--END_DOCUSAURUS_CODE_TABS-->

Une fois les mises à jour terminées sur les deux serveurs, il reste à appliquer la mise à jour via l'interface web en fermant la session en cours ou en rafraichissant la page de login.

En parallèle, sur le central passif, il faut déplacer le répertoire "install" pour éviter d'afficher à nouveau l'interface de mise à jour suite à une bascule et regénérer le cache Symfony :

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-YYYY-MM-DD
sudo -u apache /usr/share/centreon/bin/console cache:clear
```

### Suppression des crons

Les crons sont remis en place lors de la mise à jour des RPMs. Supprimer les sur les deux nœuds centraux afin d'éviter les executions concurrentes.

```bash
rm /etc/cron.d/centreon
rm /etc/cron.d/centstorage
rm /etc/cron.d/centreon-auto-disco
```

### Redémarrez les processus Centreon

Redémarrez les processus sur le nœud Central actif:

```
systemctl restart cbd centengine centreontrapd gorgoned
```

Et sur le nœud passif:

```bash
systemctl restart cbd
```

### Montée de version du serveur MariaDB

Les composants MariaDB peuvent maintenant être mis à jour.

Sachez que MariaDB recommande vivement de monter en version le serveur en
passant par chacune des versions majeures. Veuillez vous référer à la
[documentation officielle de MariaDB](https://mariadb.com/kb/en/upgrading/) pour
plus d'informations.

Vous devez donc mettre à jour de la version 10.3 vers 10.4 puis 10.4 vers
10.5.

Pour cela, Centreon met à disposition les versions 10.4 et 10.5 sur ses
dépôts stables.

> Référez vous à la documentation officielle de MariaDB pour en savoir
> d'avantage sur ce processus :
>
> - https://mariadb.com/kb/en/upgrading-from-mariadb-103-to-mariadb-104/#how-to-upgrade
> - https://mariadb.com/kb/en/upgrading-from-mariadb-104-to-mariadb-105/#how-to-upgrade

>**WARNING** les commandes suivantes de mise à jour vers Centreon doivent d'abord être exécutées sur le nœud de base de données actif. Une fois le nœud de base de données maître mis à jour en 10.05, vous pouvez mettre à jour le nœud de base de données passif.

#### Montée de version de 10.3 à 10.4

Suivez ces étapes résumées pour réaliser la montée de version comme MariaDB le
recommande :

1. Arrêtez le service mariadb :

    ```shell
    systemctl stop mariadb
    ```

2. Désinstallez la version actuelle 10.3 :

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Installez la version 10.4 :

    ```shell
    yum install MariaDB-server-10.4\* MariaDB-client-10.4\* MariaDB-shared-10.4\* MariaDB-compat-10.4\* MariaDB-common-10.4\*
    ```

4. Déplacer le fichier de configuration :

    ```shell
    mv /etc/my.cnf.d/server.cnf.rpmsave /etc/my.cnf.d/server.cnf
    ```

5. Démarrer le service mariadb :

    ```shell
    systemctl start mariadb
    ```

6. Lancez le processus de mise à jour MariaDB :

    ```shell
    mysql_upgrade -p
    ```

> Référez vous à la [documentation officielle](https://mariadb.com/kb/en/mysql_upgrade/)
> si des erreurs apparaissent pendant cette dernière étape.

#### Montée de version de 10.4 à 10.5

Suivez ces étapes résumées pour réaliser la montée de version comme MariaDB le
recommande :

1. Arrêtez le service mariadb :

    ```shell
    systemctl stop mariadb
    ```

2. Désinstallez la version actuelle 10.4 :

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Installez la version 10.5 :

    ```shell
    yum install MariaDB-server-10.5\* MariaDB-client-10.5\* MariaDB-shared-10.5\* MariaDB-compat-10.5\* MariaDB-common-10.5\*
    ```

4. Déplacer le fichier de configuration :

    ```shell
    mv /etc/my.cnf.d/server.cnf.rpmsave /etc/my.cnf.d/server.cnf
    ```

5. Démarrer le service mariadb :

    ```shell
    systemctl start mariadb
    ```

6. Lancez le processus de mise à jour MariaDB :

    ```shell
    mysql_upgrade -p
    ```

L'option `-p` n'est nécessaire uniquement aux commandes `mysql_upgrade` et `mysqladmin`
si vous avez sécurisé votre serveur de base de données.

> Référez vous à la [documentation officielle](https://mariadb.com/kb/en/mysql_upgrade/)
> si des erreurs apparaissent pendant cette dernière étape.

#### Relancer la réplication MariaDB

Suite à la mise à jour de MariaDB, la réplication MariaDB sera KO.
Pour la relancer, exécutez la commande suivante sur le nœud de bases de données passif pour écraser ses données avec celles du serveur actif. 

Il faut donc lancer la commande suivante sur **le nœud de bases de données passif** :

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

Une fois que le service est bien arrêté sur **le nœud de bases de données passif**, lancer le script de synchronisation **depuis le nœud de bases de données actif** : 

```bash
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

Résultat attendu :

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

### Suppression des fichiers "memory" de Broker

> **WARNING** exécutez uniquement cette commande sur le nœud central passif.

Avant de manager de nouveau le cluster à l'aide de pcs, pour éviter des problèmes
liés au changement de version majeure, supprimer tous les fichiers *.queue.*,
*.unprocessed.* ou *.memory.* avec les commandes suivantes :

```bash
rm -rf /var/lib/centreon-broker/central-broker-master.memory*
rm -rf /var/lib/centreon-broker/central-broker-master.queue*
rm -rf /var/lib/centreon-broker/central-broker-master.unprocessed*
```
i
## Rétablissement de la gestion des ressources par le cluster

Tous les composants devraient à présent être à jour et fonctionnels, il faut donc rétablir la gestion des ressources par le cluster :

```bash
pcs resource manage centreon
pcs resource manage ms_mysql
```

Il est possible qu'après le rétablissement de la gestion des ressources par le cluster,
le thread de réplication ne soit plus actif. Un redémarrage de la ressource `ms_mysql` doit permettre d'y remédier.

```bash 
pcs resource restart ms_mysql
```

### Contrôle de l'état du cluster

Il est possible de suivre l'état du cluster en temps réel via la commande `crm_mon` :

<!--DOCUSAURUS_CODE_TABS-->
<!--HA 2 Nodes-->
```bash
Stack: corosync
Current DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el7_7.2-3c4c782f70) - partition with quorum
Last updated: Thu Feb 20 13:14:17 2020
Last change: Thu Feb 20 09:25:54 2020 by root via crm_attribute on @CENTRAL_MASTER_NAME@

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
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
 Clone Set: php7-clone [php7]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
```
<!--HA 4 Nodes-->
```bash
[...]
4 nodes configured
21 resources configured

Online: [@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [@DATABASE_MASTER_NAME@]
     Slaves: [@DATABASE_SLAVE_NAME@]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [@CENTRAL_MASTER@ @CENTRAL_SLAVE_NAME@]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
     vip_mysql       (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
 Clone Set: php7-clone [php7]
     Started: [@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE@]
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Vérification de la stabilité de la plateforme

Il est toujours recommandé, après une mise à jour, de contrôler que tout fonctionne bien :

* Accès aux menus dans l'interface.
* Génération de configuration + reload ou restart de Centreon Engine
* Plannifier un contrôle immédiat dans le menu "Monitoring" et contrôler que c'est bien pris en compte (dans un délai raisonnable). Faire de même avec un acquittement, un arrêt prévu...
* Migrer une ressource ou un groupe de ressources d'un nœud à l'autre, rebooter un serveur actif et contrôler que tout continue de fonctionner (refaire le tests ci-dessus).
