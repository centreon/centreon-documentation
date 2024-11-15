---
id: migrate-from-3-4
title: Migration depuis une plateforme Centreon 3.4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prérequis

Cette procédure ne s'applique que pour une plate-forme **Centreon 3.4**,
installée sur une distribution GNU/Linux 64 bits
et disposant des prérequis suivants :

| Composants      | Version |
| --------------- | ------- |
| Centreon Web    | 2.8.x   |
| Centreon Broker | 3.0.x   |
| Centreon Engine | 1.8.x   |

## Migration

Tous les serveurs de votre architecture (serveur central, serveurs distants et collecteurs) doivent avoir la même version majeure de Centreon. Il est également recommandé d'avoir la même version mineure.

> En cas de migration d'une plate-forme disposant du système de redondance
> Centreon, il est nécessaire de contacter votre
> [support Centreon](https://support.centreon.com).

> En cas de migration d'une plate-forme disposant du module **Centreon Poller
> Display 1.6.x**, référez-vous à la
> [procédure de migration](poller-display-to-remote-server.md).

### Installation du nouveau serveur central

Réalisez les actions suivantes :

1. Installez un nouveau serveur Centreon à partir des [paquets](../installation/installation-of-a-central-server/using-packages.md)
jusqu'à terminer le processus d'installation en vous connectant à l'interface
web.

2. Réalisez les mises à jour logicielle et système :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt update
```

</TabItem>
</Tabs>

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
rsync -avz /usr/share/centreon/www/img/media root@<IP_NEW_CENTREON>:/usr/share/centreon/www/img
```

> Remplacez **<IP_NOUVEAU_CENTREON>** par l'adresse IP de votre nouveau serveur
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
24.10 :

    ```shell
    rsync -avz /tmp/centreon.sql root@<IP_NOUVEAU_CENTREON>:/tmp/
    rsync -avz /tmp/centreon_storage.sql root@<IP_NOUVEAU_CENTREON>:/tmp/
    ```

4. Sur le serveur de base de données Centreon 24.10, supprimer les bases de
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
    
    Si votre base de données est protégée par mot de passe, entrez :

   ```shell
    mysql_upgrade -u <utilisateur_admin_bdd> -p
    ```

    Exemple : si votre utilisateur_admin_bdd est `root`, entrez:

    ```
    mysql_upgrade -u root -p
    ```

7. Démarrer le processus mariadb sur le nouveau serveur :

    ```shell
    systemctl start mariadb
    ```

> Remplacez **<IP_NOUVEAU_CENTREON>** par l'adresse IP de votre nouveau serveur
Centreon.

### Synchronisation des plugins

La synchronisation des sondes de supervision (plugins) est plus délicate et
dépend de votre installation. Les principaux répertoires à synchroniser sont :

1. /usr/lib/nagios/plugins/
2. /usr/lib/centreon/plugins/

> Il est important d'installer les dépendances nécessaires au fonctionnement des
> sondes de supervision.

> Si vous avez des Pollers en Centreon Engine 1.8.1 que vous comptez migrer plus
> tard en 24.10, attention au dossier des plugins Nagios. La macro de
> ressource $USER1$ de Centreon 24.10 pointe sur /usr/lib64/nagios/plugins
>
> A exécuter sur vos collecteurs en Centreon Engine 1.8.1 :
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

Vous pouvez générer les configurations depuis Centreon 24.10
indifféremment vers un collecteur en 24.10 ou 1.8.1.

### Montée de version de la solution Centreon

Forcez la montée de version du nouveau serveur en déplacant le contenu du répertoire
**/var/lib/centreon/installs/install-24.10.0-YYYYMMDD\_HHMMSS** dans le
répertoire  **/usr/share/centreon/www/install** :

```shell
cd /var/lib/centreon/installs/
mv install-24.10.0-YYYYMMDD_HHMMSS/ /usr/share/centreon/www/install/
```

> Si vous utilisez la même adresse IP ou le même nom DNS entre l'ancien serveur
> web Centreon et le nouveau, videz complètement le cache de votre navigateur pour
> éviter des problemes de scripts JS.

Se connecter à l'URL `http://<IP_NEW_CENTREON>/centreon` et suivre les étapes
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
avancée](../monitoring/monitoring-servers/advanced-configuration.md#tcp-outputs)
pour plus d'information.

Les informations de connexion de l'utilisateur **centreon-gorgone** nouvellement créé doivent être les mêmes que celles de l'utilisateur **centreon-gorgone** sur l'ancien serveur. Éditez le fichier `etc/centreon-gorgone/config.d/31-centreon-api.yaml` et entrez les information de connexion de l'ancien utilisateur. Exemple :

   ```shell
   gorgone:
     tpapi:
       - name: centreonv2
         base_url: "http://127.0.0.1/centreon/api/latest/"
         username: "@GORGONE_USER@"
         password: "@GORGONE_PASSWORD@"
       - name: clapi
         username: "@GORGONE_USER@"
         password: "@GORGONE_PASSWORD@"
   ```

Puis [générez](../monitoring/monitoring-servers/deploying-a-configuration.md)
la configuration de l'ensemble de la plateforme et exportez là.

### Mise à jour des modules

Référez-vous à la documentation des modules installés afin de connaître leur
compatibilité avec Centreon 24.10, et pour mettre à jour ces derniers.

### Migrer vos autres serveurs

Assurez-vous que tous les serveurs de votre architecture (serveur central, serveurs distants et collecteurs) ont la même version majeure de Centreon.
