---
id: upgrade-centreon-ha-from-20-10
title: Montée de version de Centreon HA depuis Centreon 20.10
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Ce chapitre décrit la procédure de montée de version de votre plateforme
Centreon HA depuis la version 20.10 vers la version 21.10.

## Prérequis

### Suspension de la gestion des resources par le cluster

Cette opération nécessite de suspendre la gestion des ressources Centreon et MariaDB par le cluster pour éviter qu'une bascule se produise en pleine mise à jour.

```bash
pcs resource unmanage centreon
pcs resource unmanage ms_mysql
pcs resource unmanage php7-clone
```

### Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance
des sauvegardes de l’ensemble des serveurs centraux de votre plate-forme :

- Serveur Centreon Central,
- Serveur de base de données.

### Mettre à jour la clé de signature RPM

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon à jour depuis une version plus ancienne, vous devez suivre la [procédure de changement de clé](../../security/key-rotation.md#installation-existante), afin de supprimer l'ancienne clé et d'installer la nouvelle.

## Processus de mise à jour

### Mise à jour des dépôts

Il est nécessaire de mettre à jour le dépôt Centreon.

Exécutez la commande suivante :

```shell
yum install -y https://yum.centreon.com/standard/21.10/el7/stable/noarch/RPMS/centreon-release-21.10-5.el7.centos.noarch.rpm
```

> **WARNING:** pour éviter des problèmes de dépendances manquantes, référez-vous à la documentation des modules additionnels pour mettre à jour les dépôts Centreon Business

### Mise à jour PHP

Centreon 21.10 utilise PHP en version 8.0.

Vous devez tout d'abord installer les dépôts **remi** :

```shell
yum install -y yum-utils
yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm
```

Ensuite, vous devez activer le dépôt php 8.0

```shell
yum-config-manager --enable remi-php80
```

### Montée de version de la solution Centreon

> Assurez-vous que tous les utilisateurs sont déconnectés avant de commencer
> la procédure de mise à jour.

Videz le cache de yum :

```shell
yum clean all --enablerepo=*
```

Mettez à jour l'ensemble des composants :

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">

```shell
yum remove centreon-ha
yum update centreon\*
yum install centreon-ha-web centreon-ha-common
mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm
mv /etc/centreon-ha/mysql-resources.sh.rpmsave /etc/centreon-ha/mysql-resources.sh
```

</TabItem>
<TabItem value="HA 4 Nodes" label="HA 4 Nodes">

Sur les serveurs Centraux:

```shell
yum remove centreon-ha
yum update centreon\*
yum install centreon-ha-web centreon-ha-common
mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm
```

Sur les serveurs de base de données :

```shell
yum remove centreon-ha
yum update centreon\*
yum install centreon-ha-common
mv /etc/centreon-ha/mysql-resources.sh.rpmsave /etc/centreon-ha/mysql-resources.sh
```

</TabItem>
</Tabs>

> Acceptez les nouvelles clés GPG des dépôts si nécessaire.

Le fuseau horaire par défaut de PHP 8 doit être configuré. Executez la commande suivante :

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

> Remplacez **Europe/Paris** par votre fuseau horaire. La liste des fuseaux
> horaires est disponible [ici](http://php.net/manual/en/timezones.php).

> **WARNING** les commandes suivantes ne doivent être exécutées que sur un seul nœud du cluster.

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">

```bash
pcs resource delete php7 --force
pcs resource create "php" \
    systemd:php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
```

</TabItem>
<TabItem value="HA 4 Nodes" label="HA 4 Nodes">

```bash
pcs resource delete php7 --force
pcs resource create "php" \
    systemd:php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
pcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```

</TabItem>
</Tabs>

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

### Changez les permissions pour la resource centreon_central_sync

La mise à jour des RPMs à modifié les permissions sur certains fichiers synchronisés par _centreon\_central\_sync_. Il est nécesssaire de les modifier :

```bash
chmod 775 /var/log/centreon-engine/
mkdir /var/log/centreon-engine/archives
chown centreon-engine: /var/log/centreon-engine/archives
chmod 775 /var/log/centreon-engine/archives/
find /var/log/centreon-engine/ -type f -exec chmod 664 {} \;
find /usr/share/centreon/www/img/media -type d -exec chmod 775 {} \;
find /usr/share/centreon/www/img/media -type f \( ! -iname ".keep" ! -iname ".htaccess" \) -exec chmod 664 {} \;
```

### Suppression des fichiers "memory" de Broker

> **WARNING** exécutez uniquement ces commandes sur le nœud central actif:
Avant de manager de nouveau le cluster à l'aide de pcs, pour éviter des problèmes
liés au changement de version majeure, supprimer tous les fichiers *.queue.*,
*.unprocessed.* ou *.memory.* avec les commandes suivantes :

```bash
systemctl stop cbd-sql
rm -rf /var/lib/centreon-broker/central-broker-master.memory*
rm -rf /var/lib/centreon-broker/central-broker-master.queue*
rm -rf /var/lib/centreon-broker/central-broker-master.unprocessed*
systemctl start cbd-sql
```

Puis sur le nœud central passif, exécutez les commandes suivantes:

```bash
rm -rf /var/lib/centreon-broker/central-broker-master.memory*
rm -rf /var/lib/centreon-broker/central-broker-master.queue*
rm -rf /var/lib/centreon-broker/central-broker-master.unprocessed*
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

> La mise à jour MariaDB doit d'abord être executée sur le serveur primaire
> puis sur le serveur secondaire.
> Dans le cas d'une HA 4 nœeuds, la mise à jour doit être fait uniquement sur
> les serveurs de base de données.

1. Arrêtez le service mariadb :

    ```shell
    mysqladmin -p shutdown 
    ```

2. Désinstallez la version actuelle :

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Installez la version 10.5 :

    ```shell
    yum install MariaDB-server-10.5\* MariaDB-client-10.5\* MariaDB-shared-10.5\* MariaDB-compat-10.5\* MariaDB-common-10.5\*
    ```

4. Écrasez la configuration mariadbd:

   ```shell
   mv /etc/my.cnf.d/server.cnf.rpmsave /etc/my.cnf.d/server.cnf
   ```

5. Démarrez le service mariadb :

    ```shell
    mysqld_safe &
    ```

6. Lancez le processus de mise à jour MariaDB :

   ```shell
    mysql_upgrade -u <utilisateur_admin_bdd> -p
    ```

    Exemple : si votre utilisateur_admin_bdd est `root`, entrez:

    ```
    mysql_upgrade -u root -p
    ```

    > Référez vous à la [documentation officielle](https://mariadb.com/kb/en/mysql_upgrade/)
    > pour plus d'informations ou si des erreurs apparaissent pendant cette dernière étape.

#### Configurer le slave_parallel_mode

Depuis la version 10.5, le slave_parallel_mode n'est plus paramétré à *conservative*.
Il est nécessaire de modifier la configuration mysql en éditant `/etc/my.cnf.d/server.cnf`:

> Sur les 2 serveurs Centraux dans le cas d'une HA 2 nœuds
> et sur les 2 serveurs de base de données dans le cas d'une HA 4 nœuds.

```shell
[server]
...
slave_parallel_mode=conservative
...
```

#### Relancer la réplication MariaDB

Suite à la mise à jour de MariaDB, la réplication MariaDB sera KO.
Pour la relancer, exécutez la commande suivante sur le nœud de bases de données passif pour écraser ses données avec celles du serveur actif. 

Il faut donc lancer la commande suivante sur **le nœud de bases de données passif** :

```bash
mysqladmin -p shutdown
```

Vérifier que le service `mysql` est bien arrêté,la commande suivante ne doit retourner aucune ligne :

```bash
ps -ef | grep mariadb[d]
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

## Rétablissement de la gestion des ressources par le cluster

Tous les composants devraient à présent être à jour et fonctionnels, il faut donc rétablir la gestion des ressources par le cluster :

```bash
pcs resource manage centreon
pcs resource manage ms_mysql
```

Il est possible qu'après le rétablissement de la gestion des ressources par le cluster,
le thread de réplication ne soit plus actif ou que des *failed actions* soient présentes.
Un redémarrage de la ressource `ms_mysql` doit permettre d'y remédier ainsi qu'un *cleanup* des resources.

```bash 
pcs resource restart ms_mysql
pcs resource cleanup centreon
pcs resource cleanup ms_mysql
```

### Contrôle de l'état du cluster

Il est possible de suivre l'état du cluster en temps réel via la commande `crm_mon` :

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">

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
 Clone Set: php-clone [php]
     Started: [@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE@]
```

</TabItem>
</Tabs>

## Vérification de la stabilité de la plateforme

Il est toujours recommandé, après une mise à jour, de contrôler que tout fonctionne bien :

* Accès aux menus dans l'interface.
* Génération de configuration + reload ou restart de Centreon Engine
* Plannifier un contrôle immédiat dans le menu "Monitoring" et contrôler que c'est bien pris en compte (dans un délai raisonnable). Faire de même avec un acquittement, un arrêt prévu...
* Migrer une ressource ou un groupe de ressources d'un nœud à l'autre, rebooter un serveur actif et contrôler que tout continue de fonctionner (refaire le tests ci-dessus).
