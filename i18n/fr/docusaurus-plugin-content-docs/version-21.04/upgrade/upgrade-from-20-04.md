---
id: upgrade-from-20-04
title: Montée de version depuis Centreon 20.04
---

Ce chapitre décrit la procédure de montée de version de votre plate-forme
Centreon depuis la version 20.04 vers la version 21.04.

> Si vous souhaitez migrer votre serveur Centreon vers CentOS / Oracle Linux
> / RHEL 8, vous devez suivre la [procédure de migration](../migrate/migrate-from-20-x)

> Pour effectuer cette procédure, votre version de MariaDB doit être >= 10.3.22.
> Si cela n'est pas le cas, merci de suivre avant le
> [chapitre de mise à jour de MariaDB](./upgrade-from-19-10#upgrade-mariadb-server)

## Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance
des sauvegardes de l’ensemble des serveurs centraux de votre plate-forme :

- Serveur Centreon Central,
- Serveur de gestion de base de données.

## Mettre à jour la clé de signature RPM

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon à jour depuis une version plus ancienne, vous devez suivre la [procédure de changement de clé](../security/key-rotation#installation-existante), afin de supprimer l'ancienne clé et d'installer la nouvelle.

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
yum install -y https://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-6.el7.centos.noarch.rpm
```

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

### Finalisation de la mise à jour

Avant de démarrer la montée de version via l'interface web, rechargez le
serveur Apache avec la commande suivante :

```shell
systemctl reload httpd24-httpd
```

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
associée](../service-mapping/upgrade) pour le mettre à jour.

### Actions post montée de version

1. [Déployer la configuration](../monitoring/monitoring-servers/deploying-a-configuration).

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

> Référez vous à la documentation officielle de MariaDB pour en savoir
> davantage sur ce processus :
>
> https://mariadb.com/kb/en/upgrading-between-major-mariadb-versions/

#### Mettre à jour le dépôt Centreon

> Cette étape est nécessaire seulement si votre environnement comprend une base de données déportée.
> Si le serveur central Centreon et
> MariaDB sont hébergés sur le même serveur, sautez cette étape.

Exécutez la commande suivante sur le serveur de base de données dédié :

```shell
yum install -y https://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-6.el7.centos.noarch.rpm
```

#### Mettre à jour MariaDB

Il est nécessaire de désinstaller puis réinstaller MariaDB pour changer de version majeure (c'est-à-dire pour passer d'une version 10.3 à une version 10.5).

1. Arrêtez le service mariadb :

```shell
systemctl stop mariadb
```

2. Désinstallez la version actuelle :

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
yum install -y https://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-6.el7.centos.noarch.rpm
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

Démarrez et activez **gorgoned**:

```shell
systemctl start gorgoned
systemctl enable gorgoned
```

## Sécurisez votre plateforme

N'oubliez pas de sécuriser votre plateforme Centreon en suivant nos
[recommandations](../administration/secure-platform)
