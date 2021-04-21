---
id: operating-guide
title: Guide d'exploitation du cluster
---

> Sauf mention contraire, toutes les commandes présentées dans ce document sont à lancer en tant que `root`.

> Dans ce document, nous ferons référence à des paramètres variant d'une installation à une autre (noms et adresses IP des nœuds par exemple) par l'intermédiaire des [macros définies ici](installation-2-nodes.html#définition-des-noms-et-adresses-ip-des-serveurs)

## Gestion du cluster

L'ensemble des commandes suivantes peuvent être exécutées depuis n'importe quel nœud du cluster.

### Afficher l'état du cluster

Pour afficher l'état général du cluster exécuter la commande :

```bash
crm_mon
```

> Vérifier les erreurs de type `Failed` présentes sur les ressources et corriger ces dernières en vous aidant du [guide de troubleshooting](troubleshooting-guide.html).

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

#### Export/import en format XML

Pour sauvegarder la configuration du cluster au format XML exécuter la commande :

```bash
cibadmin --query > /tmp/cluster_configuration.xml
```

> **Avertissement :** les commandes qui suivent apportent des modifications à la configuration du cluster, et peuvent le rendre dysfonctionnel, elles ne doivent être utilisées qu'en connaissance de cause.

Pour importer une configuration au format XML exécuter la commande :

```bash
cibadmin --replace --xml-file /tmp/cluster_configuration.xml
```

Pour effacer complètement la configuration du cluster exécuter la commande :

```bash
cibadmin --force --erase
```

#### Export/import en format binaire

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

> Attention : La commande `pcs resource move <resource_name>` positionne une contrainte `-INFINITY` sur le nœud hébergeant la ressource qui n'est plus autorisée à être en fonctionnement sur ce nœud. De ce fait, la ressource bascule sur un autre nœud. Suite à cette manipulation, il est donc nécessaire d'exécuter la commande `pcs resource clear <resource_name>` pour permettre à cette ressource de basculer à nouveau sur ce nœud à l'avenir.

Une fois la bascule terminée, exécuter la commande :

```bash
pcs resource clear <resource_name>
```

### Supprimer l'affichage d'une erreur

Les erreurs d'exécution ou de monitoring des ressources donnent lieu à l'apparition de "failed actions" dans le retour affiché par la commande `pcs status`. Il est recommandé d'en rechercher la cause en suivant ce [guide de résolution de panne](troubleshooting-guide.html) avant d'éliminer l'alerte, mais si l'alerte n'est plus d'actualité, il faut supprimer manuellement le message d'erreur en lançant la commande :

```bash
pcs resource cleanup
```

Ou bien, pour ne supprimer que les erreurs relatives à une ressource en particulier :

```bash
pcs resource cleanup <resource_name>
```

### Consultation des journaux du cluster

Pour visualiser les journaux d'évènements du cluster exécuter les commandes :

```bash
tailf /var/log/cluster/corosync.log
```

Ce fichier de log est très verbeux, dont il est préférable de savoir ce que l'on cherche sous peine d'y passer beaucoup de temps.

### Modifier le niveau de verbosité de journalisation du cluster

Pour modifier le niveau de verbosité des journaux du cluster modifier le fichier suivant : `/etc/sysconfig/pacemaker`

## Gestion de la ressources MariaDB

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

> Ces procédures sont à réaliser en cas de problèmes de synchronisation n'ayant pu être résolu par les commandes `pcs resource cleanup` ou `pcs resource restart ms_mysql`. Par exemple dans le cas d'un `duplicate entry` ou d'un crash serveur à la suite duquel la réplication n'a pas pu se remettre en marche.

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

### Changer le sens de la réplication MariaDB

> Avant d'exécuter ces commandes, vous devez vous assurer que la réplication MariaDB est dans un état `correct`. Pour cela, se référer à [la procédure plus haut](#v%C3%A9rifier-l%C3%A9tat-de-la-r%C3%A9plication-mariadb).

> **Avertissement :** sur un cluster à 2 serveurs installé [comme décrit ici](installation-2-nodes.html), le groupe de ressources `centreon` basculera également pour suivre le serveur MariaDB maître.

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

Pour recréer les ressources, on se référera à cette étape du [guide d'installation d'un cluster à 2 nœuds](installation-2-nodes.html#création-du-groupe-de-ressources-centreon).

## Superviser un cluster Centreon-HA

Une plate-forme de haute disponibilité est avant tout une plate-forme LAMP (Linux Apache MariaDB PHP) pilotée par les outils du projet [ClusterLabs](https://clusterlabs.org/). La supervision de la plate-forme doit donc inclure, en plus des indicateurs habituels, quelques spécificités relatives à son caractère de haute disponibilité. La supervision doit être assurée par un poller externe, non par le cluster lui-même.

### Indicateurs systèmes et processus

La partie la plus simple consiste à surveiller les indicateurs systèmes de base, principalement *via* le protocole SNMP, ce qui est facilité par le [plugin pack Linux](../plugin-packs/procedures/operatingsystems-linux-snmp.html)

* Métriques systèmes
    * LOAD Average
    * Consommation CPU
    * Consommation Mémoire
    * Consommation SWAP
    * Utilisation des systèmes de fichiers
    * Trafic réseau
    * Synchronisation NTP
* Processus
    * Contrôle de l'état des processus `crond`, `chronyd`, `rsyslogd`
    * Contrôles de l'état des processus `gorgoned`, `centengine`, `centreontrapd`, `httpd24-httpd`, `snmptrapd`, `mysqld`, `rh-php73-php-fpm`

### Supervision applicative

* Contrôle de l'accès à l'url `http://@VIP_IPADDR@/centreon` à l'aide du [plugin pack HTTP Protocol](../plugin-packs/procedures/applications-protocol-http.html)
* Contrôle de la base de données MariaDB en utilisant le [plugin pack MySQL/MariaDB](../plugin-packs/procedures/applications-databases-mysql.html) :
    * Contrôle de connexion au serveur MariaDB
    * Les buffers et caches MariaDB/InnoDB
    * L’usage des index
    * Réplication MariaDB

### Supervision du cluster

Les points de contrôle spécifiques au cluster peuvent être supervisés en utilisant le [plugin pack Pacemaker](../plugin-packs/procedures/applications-pacemaker-ssh.html) :

* Contraintes sur les ressources : uniquement sur la ressource `ms_mysql` et le groupe `centreon`
* Failed actions

> Note : un plugin pack dédié à Centreon-HA devrait être publié prochainement pour faciliter la supervision de cet aspect.

