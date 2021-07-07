---
id: upgrade-from-20-10
title: Montée de version depuis Centreon 20.10
---

Ce chapitre décrit la procédure de montée de version de votre plate-forme
Centreon depuis la version 20.10 vers la version 21.04.

> Si vous souhaitez migrer votre serveur Centreon vers CentOS / Oracle Linux
> / RHEL 8, vous devez suivre la [procédure de migration](../migrate/migrate-from-20-x.html)

> Pour effectuer cette procédure, votre version de MariaDB doit être >= 10.3.22.
> Si cela n'est pas le cas, merci de suivre avant le
> [chapitre de mise à jour de MariaDB](./upgrade-from-19-10.html#upgrade-mariadb-server)

> Attention, suite à la correction d'un problème relatif au schéma de base de données, il sera nécessaire
> d'arrêter l'insertion en base de données des données collectées le temps de la mise à jour. Celles-ci seront stockées
> dans des fichiers temporaires puis insérées à la fin du processus de mise à jour.

## Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance
des sauvegardes de l’ensemble des serveurs centraux de votre plate-forme :

- Serveur Centreon Central,
- Serveur de gestion de base de données.

## Montée de version du serveur Centreon Central

> Depuis la version 21.04, Centreon utilise **MariaDB 10.5**.
>
> Le processus suivant met seulement à jour les composants Centreon pour le
> moment.
>
> MariaDB sera mis à jour après.

### Mise à jour des dépôts

Il est nécessaire de mettre à jour le dépôt Centreon.

Exécutez la commande suivante :

```shell
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-4.el7.centos.noarch.rpm
```

### Upgrade PHP

Centreon 21.04 utilise PHP en version 7.3.

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
Vous devez changer le flux PHP de la version 7.2 à 7.3 en exécutant les commandes suivantes et en répondant **y**
pour confirmer :
```shell
dnf module reset php
dnf module install php:7.3
```
<!--CentOS 7-->
PHP sera mis à jour automatiquement avec Centreon.
<!--END_DOCUSAURUS_CODE_TABS-->

### Montée de version de la solution Centreon

Arrêter le processus Centreon Broker :
```shell
systemctl stop cbd
```

Supprimer les fichiers de rétention présent :
```shell
rm /var/lib/centreon-broker/* -f
```

Videz le cache de yum :

```shell
yum clean all --enablerepo=*
```

Mettez à jour l'ensemble des composants :

```shell
yum update centreon\*
```

> Acceptez les nouvelles clés GPG des dépôts si nécessaire.

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
Exécutez les commandes suivantes :
```shell
systemctl enable php-fpm
systemctl restart php-fpm
```
<!--CentOS 7-->
Le fuseau horaire par défaut de PHP 7 doit être configuré. Executez la commande suivante :
```shell
echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php73/php.d/50-centreon.ini
```

> Remplacez **Europe/Paris** par votre fuseau horaire. La liste des fuseaux
> horaires est disponible [ici](http://php.net/manual/en/timezones.php).

Exécutez les commandes suivantes :
```shell
systemctl stop rh-php72-php-fpm
systemctl disable rh-php72-php-fpm
systemctl enable rh-php73-php-fpm
systemctl start rh-php73-php-fpm
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Finalisation de la mise à jour

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
Avant de démarrer la montée de version via l'interface web, rechargez le serveur Apache avec la commande suivante :
```shell
systemctl reload httpd
```
<!--CentOS 7-->
Avant de démarrer la montée de version via l'interface web, rechargez le serveur Apache avec la commande suivante :
```shell
systemctl reload httpd24-httpd
```
<!--END_DOCUSAURUS_CODE_TABS-->

Connectez-vous ensuite à l'interface web Centreon pour démarrer le processus de
mise à jour :

Cliquez sur **Next** :

![image](../assets/upgrade/web_update_1.png)

Cliquez sur **Next** :

![image](../assets/upgrade/web_update_2.png)

La note de version présente les principaux changements, cliquez sur **Next** :

![image](../assets/upgrade/web_update_3.png)

Le processus réalise les différentes mises à jour, cliquez sur **Next** :

![image](../assets/upgrade/web_update_4.png)

Votre serveur Centreon est maintenant à jour, cliquez sur **Finish** pour
accéder à la page de connexion :

![image](../assets/upgrade/web_update_5.png)

Si le module Centreon BAM est installé, référez-vous à la [documentation
associée](../service-mapping/upgrade.html) pour le mettre à jour.

### Actions post montée de version

1. [Déployer la configuration](../monitoring/monitoring-servers/deploying-a-configuration.html).

2. Redémarrez les processus Centreon :

    ```
    systemctl restart cbd centengine centreontrapd gorgoned
    ```

3. Montée de version des extensions :

Depuis le menu `Administration > Extensions > Gestionnaire`, mettez à jour
toutes les extensions, en commençant par les suivantes :

  - License Manager,
  - Plugin Packs Manager,
  - Auto Discovery.

Vous pouvez alors mettre à jour toutes les autres extensions commerciales.

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

4. Démarrer le service mariadb :

    ```shell
    systemctl start mariadb
    ```

5. Lancez le processus de mise à jour MariaDB :

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

> Référez vous à la [documentation officielle](https://mariadb.com/kb/en/mysql_upgrade/)
> pour plus d'informations ou si des erreurs apparaissent pendant cette dernière étape.

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

4. Démarrer le service mariadb :

    ```shell
    systemctl start mariadb
    ```

5. Lancez le processus de mise à jour MariaDB :

   ```shell
    mysql_upgrade -u <utilisateur_admin_bdd> -p
    ```

    Exemple : si votre utilisateur_admin_bdd est `root`, entrez:

    ```
    mysql_upgrade -u root -p
    ```

> Référez vous à la [documentation officielle](https://mariadb.com/kb/en/mysql_upgrade/)
> pour plus d'informations ou si des erreurs apparaissent pendant cette dernière étape.

#### Activer MariaDB au démarrage automatique

Exécutez la commande suivante :

```shell
systemctl enable mariadb
```

## Montée de version des Remote Servers

Cette procédure est identique à la montée de version d'un serveur Centreon
Central.

## Montée de version des Pollers

### Mise à jour des dépôts

Exécutez la commande suivante :

```shell
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-4.el7.centos.noarch.rpm
```

### Montée de version de la solution Centreon

Videz le cache de yum :

```shell
yum clean all --enablerepo=*
```

Mettez à jour l'ensemble des composants :

```shell
yum update centreon\*
```

> Acceptez les nouvelles clés GPG des dépôts si nécessaire.
