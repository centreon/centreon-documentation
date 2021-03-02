---
id: migrate-from-3-4
title: Migration depuis une plateforme Centreon 3.4
---

## Prérequis

Cette procédure ne s'applique que pour une plate-forme **Centreon 3.4**,
installé sur une distribution GNU/Linux 64 bits autre que CentOS ou Red Hat 7
et disposant des prérequis suivants :

| Composants      | Version |
| --------------- | ------- |
| Centreon Web    | 2.8.x   |
| Centreon Broker | 3.0.x   |
| Centreon Engine | 1.8.x   |

> Si votre plate-forme a été installé à partir de l'ISO Centreon ou des dépôts
> Centreon 3.4 sur CentOS ou Red Hat en version 7, référez-vous à la documentation
> de [montée de version](../upgrade/upgrade-from-3-4.html).

## Migration

> En cas de migration d'une plate-forme disposant du système de redondance
> Centreon, il est nécessaire de contacter votre
> [support Centreon](https://centreon.force.com).

> En cas de migration d'une plate-forme disposant du module **Centreon Poller
> Display 1.6.x**, référez-vous à la
> [procédure de migration](poller-display-to-remote-server.html).

### Installation du nouveau serveur

Réalisez les actions suivantes :

1. Installez un nouveau serveur Centreon à partir de
[l'ISO](../installation/installation-of-a-central-server/using-centreon-iso.html)
ou des [paquets](../installation/installation-of-a-central-server/using-packages.html)
jusqu'à terminer le processus d'installation en vous connectant à l'interface
web.

2. Réalisez les mises à jour logicielle et système :

    ```shell
    yum update
    ```

> Il est préférable de saisir le même mot de passe pour l'utilisateur 'centreon'
> lors du processus d'installation web.

### Synchronisation des données

Connectez-vous à votre ancien serveur Centreon et synchronisez les répertoires
suivants :

```shell
rsync -avz /etc/centreon root@<IP_NOUVEAU_CENTREON>:/etc
rsync -avz /etc/centreon-broker root@<IP_NOUVEAU_CENTREON>:/etc
rsync -avz /var/log/centreon-engine/archives/ root@<IP_NOUVEAU_CENTREON>:/var/log/centreon-engine
rsync -avz --exclude centcore/ --exclude log/ /var/lib/centreon root@<IP_NOUVEAU_CENTREON>:/var/lib
rsync -avz /var/spool/centreon/.ssh root@<IP_NOUVEAU_CENTREON>:/var/spool/centreon
```

> Remplacez **\<IP_NOUVEAU_CENTREON\>** par l'adresse IP de votre nouveau serveur
Centreon.

### Récupération des bases de données

1. Faire un dump des bases de données sources :

    ```shell
    mysqldump -u root -p centreon > /tmp/centreon.sql
    mysqldump -u root -p centreon_storage > /tmp/centreon_storage.sql
    ```

2. Arreter le serveur MariaDB source :

    ```shell
     service mysqld stop
    ```

3. Transférer les exports vers le nouveau serveur de base de données Centreon
21.04 :

    ```shell
    rsync -avz /tmp/centreon.sql root@<IP_NOUVEAU_CENTREON>:/tmp/
    rsync -avz /tmp/centreon_storage.sql root@<IP_NOUVEAU_CENTREON>:/tmp/
    ```

4. Sur le serveur de base de données Centreon 21.04, supprimer les bases de
données vierges et les recréer :

    ```shell
    mysql -u root -p
    ```

    ```SQL
    DROP DATABASE centreon;
    DROP DATABASE centreon_storage;
    CREATE DATABASE centreon;
    CREATE DATABASE centreon_storage;
    ```

5. Importer les dumps :

    ```shell
    mysql -u root centreon -p </tmp/centreon.sql
    mysql -u root centreon_storage -p </tmp/centreon_storage.sql
    ```

6. Executer l'upgrade des tables :

    ```shell
    mysql_upgrade
    ```

7. Démarrer le processus mariadb sur le nouveau serveur :

    ```shell
    systemctl start mariadb
    ```

> Remplacez **\<IP_NOUVEAU_CENTREON\>** par l'adresse IP de votre nouveau serveur
Centreon.

### Synchronisation des plugins

La synchronisation des sondes de supervision (plugins) est plus délicate et
dépend de votre installation. Les principaux répertoires à synchroniser sont :

1. /usr/lib/nagios/plugins/
2. /usr/lib/centreon/plugins/

> Il est important d'installer les dépendances nécessaires au fonctionnement des
> sondes de supervision.

> Si vous avez des Pollers en Centreon Engine 1.8.1 que vous comptez migrer plus
> tard en 21.04, attention au dossier des plugins Nagios. La macro de
> ressource $USER1$ de Centreon 21.04 pointe sur /usr/lib64/nagios/plugins
>
> A éxécuter sur vos collecteurs en Centreon Engine 1.8.1 :
>
> ```shell
> mv /usr/lib64/nagios/plugins/* /usr/lib/nagios/plugins/
> rmdir /usr/lib64/nagios/plugins/
> ln -s -t /usr/lib64/nagios/ /usr/lib/nagios/plugins/
> ```
>
> De cette façon un lien symbolique est créé :
>
> ```shell
> $ ls -alt /usr/lib64/nagios/
> lrwxrwxrwx   1 root root      24  1 nov.  17:59 plugins -> /usr/lib/nagios/plugins/
> -rwxr-xr-x   1 root root 1711288  6 avril  2018 cbmod.so
> ```

Vous pouvez générer les configurations depuis Centreon 21.04
indifféremment vers un collecteur en 21.04 ou 1.8.1.

### Montée de version de la solution Centreon

Forcez la montée de version du nouveau serveur en déplacant le contenu du répertoire
**/var/lib/centreon/installs/install-21.04.0-YYYYMMDD\_HHMMSS** dans le
répertoire  **/usr/share/centreon/www/install** :

```shell
cd /var/lib/centreon/installs/
mv install-21.04.0-YYYYMMDD_HHMMSS/ /usr/share/centreon/www/install/
```

> Si vous utilisez la meme adresse IP ou le même nom DNS entre l'ancien serveur
> web Centreon et le nouveau, videz completement le cache de votre navigateur pour
> éviter des problemes de scripts JS.

Se connecter à l'url *http://\<IP_NEW_CENTREON\>/centreon* et suivre les étapes
de mise à jour.

> Si vous avez modifié le mot de passe de l'utilisateur 'centreon' lors de
> l'installation de votre nouveau serveur Centreon pour accéder aux bases de
> données, il sera nécessaire de réaliser les actions suivantes sur le nouveau
> serveur Centreon :
>
> 1. Modifiez le fichier /etc/centreon/centreon.conf.php,
> 2. Modifiez le fichier /etc/centreon/conf.pm,
> 3. Éditer la configuration du Centreon Broker central, via l'interface web
> Centreon et modifier le mot de passe pour les deux output broker **Perfdata
> generator** et **Broker SQL database**,
> 4. Modifiez le fichier /etc/centreon/config.d/10-database.yaml.

Si l'adresse IP de votre serveur Centreon a changé, éditez la configuration de
l'ensemble des modules broker de vos collecteurs et modifiez l'adresse IP de
connexion au serveur Centreon central (output IPv4). Consultez le chapitre
[Configuration
avancée](../monitoring/monitoring-servers/advanced-configuration.html#tcp-outputs)
pour plus d'information.

Puis [générez](../monitoring/monitoring-servers/deploying-a-configuration.html)
la configuration de l'ensemble de la plateforme et exportez là.

### Mise à jour des modules

Référez-vous à la documentation des modules installés afin de connaître leur
compatibilité avec Centreon 21.04, et pour mettre à jour ces derniers.
