---
id: upgrade-from-21-04
title: Montée de version depuis Centreon 21.04
---

Ce chapitre décrit la procédure de montée de version de votre plate-forme
Centreon depuis la version 21.04 vers la version 21.10.

> Si vous souhaitez migrer votre serveur Centreon vers CentOS / Oracle Linux
> / RHEL 8, vous devez suivre la [procédure de migration](../migrate/migrate-from-20-x.html)

## Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance
des sauvegardes de l’ensemble des serveurs centraux de votre plate-forme :

- Serveur Centreon Central,
- Serveur de gestion de base de données.

## Mettre à jour la clé de signature RPM

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon à jour depuis une version plus ancienne, vous devez suivre la [procédure de changement de clé](../security/key-rotation.html#installation-existante), afin de supprimer l'ancienne clé et d'installer la nouvelle.

## Montée de version du serveur Centreon Central

### Mise à jour des dépôts

Il est nécessaire de mettre à jour le dépôt Centreon.

Exécutez la commande suivante :

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y https://yum.centreon.com/standard/21.10/el8/stable/noarch/RPMS/centreon-release-21.10-2.el8.noarch.rpm
```
<!--CentOS 7-->
```shell
yum install -y https://yum.centreon.com/standard/21.10/el7/stable/noarch/RPMS/centreon-release-21.10-2.el7.centos.noarch.rpm
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Upgrade PHP

Centreon 21.10 utilise PHP en version 8.0.

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
Vous devez tout d'abord installer les dépôts **remi** :
```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
dnf config-manager --set-enabled 'powertools'
```
Ensuite, vous devez changer le flux PHP de la version 7.3 à 8.0 en exécutant les commandes suivantes et en répondant **y**
pour confirmer :
```shell
dnf module reset php
dnf module install php:remi-8.0
```
<!--CentOS 7-->
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
<!--END_DOCUSAURUS_CODE_TABS-->

### Montée de version de la solution Centreon

> Assurez-vous que tous les utilisateurs sont déconnectés avant de commencer
> la procédure de mise à jour.

Arrêter le processus Centreon Broker :
```shell
systemctl stop cbd
```

Supprimer les fichiers de rétention présents :
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
Le fuseau horaire par défaut de PHP 8 doit être configuré. Exécutez la commande suivante :
```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

> Remplacez **Europe/Paris** par votre fuseau horaire. La liste des fuseaux
> horaires est disponible [ici](http://php.net/manual/en/timezones.php).

Exécutez les commandes suivantes :
```shell
systemctl stop rh-php73-php-fpm
systemctl disable rh-php73-php-fpm
systemctl enable php-fpm
systemctl start php-fpm
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

## Montée de version des Remote Servers

Cette procédure est identique à la montée de version d'un serveur Centreon
Central.

> En fin de mise à jour, la configuration doit être déployée depuis le serveur Central.

## Montée de version des Pollers

### Mise à jour des dépôts

Exécutez la commande suivante :

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y https://yum.centreon.com/standard/21.10/el8/stable/noarch/RPMS/centreon-release-21.10-2.el8.noarch.rpm
```
<!--CentOS 7-->
```shell
yum install -y https://yum.centreon.com/standard/21.10/el7/stable/noarch/RPMS/centreon-release-21.10-2.el7.centos.noarch.rpm
```
<!--END_DOCUSAURUS_CODE_TABS-->

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
