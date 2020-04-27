---
id: operating-guide
title: Guide d'exploitation du cluster
---

Sauf mention contraire, toutes les commandes présentées dans ce document sont à lancer en tant que `root`.

## Gestion du cluster

L'ensemble des commandes suivantes peuvent être exécutées depuis n'importe quel membre du cluster.

### Afficher l'état du cluster

Pour afficher l'état général du cluster exécuter la commande :

```bash
crm_mon
```

> **Avertissement:** Vérifier les erreurs de type `Failed` présentes sur les ressources et corriger ces dernières.

### Afficher l'état d'une ressource

Pour connaître le statut d'une ressource en particulier, exécuter la commande :

```bash
pcs resource show <resource_name>
```

Par exemple pour connaître le statut de la ressource **centengine** exécuter la commande :

```bash
pcs resource show centengine
```

### Afficher la configuration du cluster

Pour afficher la configuration du cluster exécuter la commande :

```bash
pcs config show
```

### Tester la configuration

Pour tester la configuration du cluster exécuter la commande :

```bash
crm_verify -L -V
```

### Sauvegarder & importer la configuration

Pour sauvegarder la configuration du cluster au format XML exécuter la commande :

```bash
cibadmin --query > cluster_configuration.xml
```

> **Avertissement :** les commandes qui suivent apportent des modifications à la configuration du cluster, et peuvent le rendre dysfonctionnel, elles ne doivent être utilisées qu'en connaissance de cause.

Pour importer une configuration au format XML exécuter la commande :

```bash
cibadmin --replace --xml-file cluster_configuration.xml
```

Pour supprimer totalement une configuration exécuter la commande :

```bash
cibadmin --force --erase
```

Export dans un fichier au format binaire

```bash
pcs config backup export
```

Restauration d'un fichier au format binaire

```bash
pcs config restore export.tar.bz2
```

### Vérifier la possibilité de bascule des ressources via une simulation du cluster

Pour simuler la possibilité de bascule des ressources exécuter la commande :

```bash
crm_simulate -L -s
```

Puis contrôler les scores affichés.

## Gestion des ressources

### Basculer une ressource d'un nœud à un autre

Pour basculer/déplacer une ressource exécuter la commande :

```bash
pcs resource move <resource_name>
```

Une fois la bascule terminée, exécuter la commande :

```bash
pcs resource clear <resource_name>
```

La commande `pcs resource move <resource_name>` positionne une contrainte `-INFINITY` sur le nœud hébergeant la ressource qui n'est plus autorisée à être en fonctionnement sur ce nœud. De ce fait, la ressource bascule sur un autre nœud. Suite à cette manipulation, il est donc nécessaire d'exécuter la commande `pcs resource clear <resource_name>` pour permettre à cette ressource de basculer à nouveau sur ce nœud à l'avenir.

### Supprimer l'affichage d'une erreur

Les erreurs d'exécution ou de monitoring des ressources donnent lieu à l'apparition de "failed actions" dans le retour affiché par la commande `pcs status`. Il est recommandé d'en rechercher la cause en suivant ce [guide de résolution de panne](troubleshooting-guide.html) avant d'éliminer l'alerte, mais si l'alerte n'est plus d'actualité, il faut supprimer manuellement le message d'erreur en lançant la commande :

```bash
pcs resource cleanup <resource_name>
```

### Visualiser les journaux du cluster

Pour visualiser les journaux d'évènements du cluster exécuter les commandes :

```bash
tailf /var/log/cluster/corosync.log
```

Ce fichier de log est très verbeux, dont il est préférable de savoir ce que l'on cherche sous peine d'y passer beaucoup de temps.

### Modifier le niveau de verbosité de journalisation du cluster

Pour modifier le niveau de verbosité des journaux du cluster modifier le fichier suivant : `/etc/sysconfig/pacemaker`

## Gestion du groupe de ressources MariaDB

### Vérifier l’état de la réplication MariaDB

Exécuter la commande suivante sur l'un des deux serveurs centraux:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

Si des erreurs apparaissent, suivre la procédure ci-après pour rétablir la synchronisation.

### Rétablir manuellement la réplication MariaDB

Ces procédures sont à réaliser en cas de problèmes de synchronisation n'ayant pu être résolu par les commandes `pcs resource cleanup` ou `pcs resource restart ms_mysql`. Par exemple dans le cas d'un `duplicate entry` ou d'un crash serveur à la suite duquel la réplication n'a pas pu se remettre en marche.

Désactiver le contrôle des ressources MariaDB par le cluster :

```bash
pcs resource unmanage ms_mysql
```

Se connecter au serveur esclave et arrêter le service MariaDB :

```bash
mysqladmin -p shutdown
```

Se connecter au serveur maître et exécuter la commande suivante :

```bash
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

Réactiver le contrôle des ressources `MariaDB` par le cluster :

```bash
pcs resource manage ms_mysql
```

Exécuter la commande suivante sur l'un des deux serveurs centraux:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

### Changer le sens de la réplication MariaDB Master/Slave

Avant d'exécuter ces commandes, vous devez vous assurer que la réplication MariaDB est dans un état `correct`. Pour cela, se référer à [la procédure plus haut](#v%C3%A9rifier-l%C3%A9tat-de-la-r%C3%A9plication-mariadb).

> **Avertissement :** sauf si votre installation diffère du cluster à 2 serveurs dont l'installation est décrite [ici](installation-2-nodes), le groupe de ressources `centreon` basculera également pour suivre le serveur MariaDB maître.

Pour basculer/déplacer le groupe de ressources exécuter la commande :

```bash
pcs resource move ms_mysql-master
```

La commande `pcs resource move ms_mysql-master` positionne une contrainte `-Inf` sur le nœud hébergeant la ressource. De ce fait, la ressource bascule sur un autre nœud. Suite à cette manipulation, il est donc nécessaire, une fois la bascule terminée, d'exécuter la commande :

```bash
pcs resource clear ms_mysql-master
```

## Gestion du groupe de ressources Centreon

### Basculer le groupe de ressource Centreon

Pour basculer/déplacer le groupe de ressources exécuter la commande :

```bash
pcs resource move centreon
```

La commande `pcs resource move centreon` positionne une contrainte `-Inf` sur le nœud hébergeant la ressource. De ce fait, la ressource bascule sur un autre nœud. Une fois la bascule terminée, il faut donc exécuter la commande suivante pour rétablir la haute disponibilité :

```bash
pcs resource clear centreon
```

## Supprimer un groupe de ressource Pacemaker

> **Avertissement :** les commandes ci-dessous empêcheront le cluster de fonctionner, elles ne doivent être utilisées qu'en connaissance de cause.

Dans le cas où il y aurait besoin de supprimer le groupe et les éléments rattachés (primitive des services, contraintes, ...), se connecter sur un nœud du cluster et exécuter les commandes suivantes :

```bash
pcs resource delete centreon             \
                cbd_central_broker       \
                gorgone                  \
                snmptrapd                \
                centreontrapd            \
                http                     \
                centreon_central_sync    \
                vip
```

Si cela ne fonctionne pas, cela est sûrement dû à une ressource en erreur. Lancer les commandes suivantes afin de supprimer la ressource :

```bash
crm_resource --resource [resource] -D -t primitive -C
pcs resource cleanup centreon
```

Pour recréer les ressources, on se référera au [guide d'installation d'un cluster à 2 nœuds](installation-2-nodes.html#cr%C3%A9ation-du-groupe-de-ressources-centreon)

## Superviser son cluster

Une plate-forme de haute disponibilité est avant tout une plate-forme LAMP (Linux Apache MariaDB PHP) sur laquelle des composants du projet Linux-HA ont été rajouté. La supervision de la plate-forme doit donc comprend au minimum les éléments suivants supervisé depuis un **collecteur distant** pour tous les noeuds du cluster :

* Indicateurs système
    * Contrôle du **LOAD Average**
    * Contrôle de la consommation **CPU**
    * Contrôle de la consommation **Mémoire**
    * Contrôle de la consommation **SWAP**
    * Contrôle de l'espace libre des **partitions** (un contrôle par partition/file system)
    * Contrôle de la bande passante des **interfaces réseau**
* Processus
    * Contrôle de la **synchronisation NTP** (via le service `chronyd`) avec le serveur de temps de référence
    * Contrôle de l'état des processus `crond`, `chronyd`, `rsyslogd`
    * Contrôles de l'état des processus `gorgoned`, `centengine`, `centreontrapd`, `httpd24-httpd`, `snmptrapd`, `mysqld`
* Tests applicatifs
    * Contrôles de l'accès à l'url `http://@VIP_IPADDR@/centreon`
    * Contrôle de connexion au serveur MariaDB
    * Les buffers et caches MariaDB/InnoDB
    * L’usage des index

### Superviser l'état général du cluster

Modifier sur les deux serveurs centraux les privilèges de l'utilisateur `centreon-engine` en l'intégrant au groupe haclient :

```bash
usermod -a -G haclient centreon-engine
```
Puis suivre les étapes suivantes :

* Installer le Plugin `centreon-plugin-Applications-Pacemaker-Ssh` sur le serveur Central master et slave.
* Installer le Plugin Pack `centreon-pack-applications-pacemaker-ssh` sur le serveur Central master et slave.
* Finaliser l'installation du Plugin Pack sur l'interface web.
* Tester en ligne de commande la sonde Centreon Pacemaker :

```bash
su - centreon-engine
perl /usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
    --plugin="apps::pacemaker::local::plugin"     \
    --mode="crm"                                  \
    --command-options="-1 -f 2"                   \
    --standbyignore
```

```text
OK: Cluster is OK |
```

La macro **EXTRAOPTION** du service **CRM** déployé par le template d'hôte **App-Pacemaker-SSH-custom** peut ainsi être surchargé avec les options suivantes pour contrôler l'état général du cluster :

```text
    --command-options="-1 -f 2>$1" \
    --standbyignore
```

### Superviser la bascule du groupe `centreon`

```bash
su - centreon-engine
perl /usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
    --plugin="apps::pacemaker::local::plugin"     \
    --mode="crm"                                  \
    --command-options="-1 -f 2"                   \
    --standbyignore                               \
    --resources="centengine:@NAME_CENTRAL_MASTER@"
```

```text
OK: Cluster is OK |
```

```bash
perl /usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
    --plugin="apps::pacemaker::local::plugin"     \
    --mode="crm"                                  \
    --command-options="-1 -f 2"                   \
    --standbyignore                               \
    --resources="centengine:@NAME_CENTRAL_SLAVE@"
```

```text
CRITICAL: Resource 'centengine' is started on node '@NAME_CENTRAL_MASTER@' |
```

* Si la ressource `centengine` n'est plus sur le serveur `@CENTRAL_MASTER_NAME@` alors il y a eu bascule et le contrôle est en status **CRITICAL**
* Changer le nom de l'hôte `@CENTRAL_MASTER_NAME@` si besoin.

La macro **EXTRAOPTION** du service **CRM** déployé par le template d'hôte **App-Pacemaker-SSH-custom** peut ainsi être surchargé avec les options suivantes :

```bash
    --command-options="-1 -f 2" \
    --standbyignore             \
    --resources="centengine:@NAME_CENTRAL_MASTER@"
```

### Superviser la synchronisation des bases

Le plugin **centreon-plugin-Applications-Databases-Mysql** permet le contrôle de la réplication :

```bash
su - centreon-engine
perl /usr/lib/centreon/plugins/centreon_mysql.pl \
    --mode="replication-master-slave"     \
    --multiple                            \
    --host="@NAME_DATABASE_MASTER@"       \
    --username="centreon-repl"            \
    --password="@MARIADB_REPL_PASSWD@"      \
    --host="@NAME_DATABASE_SLAVE@"        \
    --username="centreon-repl"            \
    --password="@MARIADB_REPL_PASSWD@"
```

```text
OK: No problems. Replication is ok. | 'slave_latency'=0s;;;0;
```

**Note :** Changer le nom des hôtes `@CENTRAL_MASTER_NAME@` et `@CENTRAL_SLAVE_NAME@` ainsi que les informations de connexion aux bases de données si besoin.

Adapter les macro du service correspondant.

### Superviser les contraintes d'une resource

Le mode **constraints** du plugin **centreon-plugin-Applications-Pacemaker-Ssh** permet le contrôle des contraintes d'une resouce :

```bash
su - centreon-engine
perl /usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
    --mode=constraints                            \
    --resource=ms_mysql-master
```

```text
OK: Resource 'ms_mysql-master' constraint location is OK |
```

**Note :** Changer le nom de la resource `ms_mysql-master` si besoin.

La macro **RESOURCENAME** du service **Constraints** déployé par le template d'hôte **App-Pacemaker-SSH-custom** peut ainsi être surchargé avec les options **Nom-de-la-resource**

## Administration du cluster

### Lister les agents de ressources OCF disponibles

Pour lister les agents de ressources OCF disponibles de Pacemaker, exécuter la commande :

```bash
pcs resource agents ocf:pacemaker
```

Pour lister les agents de ressources OCF disponibles de Heartbeat, exécuter la commande :

```bash
pcs resource agents ocf:heartbeat
```

### Mettre un noeud en maintenance/standby

Pour mettre en maintenance un noeud, exécuter la commande :

```bash
crm_standby -v on -N <node_name>
```

Pour réintégrer un noeud au cluster, exécuter la commande :

```bash
crm_standby -v off -N <node_name>
```
