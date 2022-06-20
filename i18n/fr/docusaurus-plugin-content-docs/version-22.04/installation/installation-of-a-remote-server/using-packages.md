---
id: using-packages
title: À partir des paquets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Centreon fournit des RPM pour ses produits au travers de la solution
Centreon Open Source disponible gratuitement sur notre dépôt.

Les paquets peuvent être installés sur CentOS 7, Alma/RHEL/Oracle Linux 8 et Debian 11.

Après avoir installé votre serveur, réalisez la mise à jour de votre système
d'exploitation via la commande :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum update
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

``` shell
sudo apt update && sudo apt upgrade
```

</TabItem>
</Tabs>

> Acceptez toutes les clés GPG proposées et pensez a redémarrer votre serveur
> si une mise à jour du noyau est proposée.

Si vous installez Centreon sur AlmaLinux/RHEL/OracleLinux 8, et que vous comptez utiliser Centreon en français, espagnol ou portugais, installez les paquets correspondants :

```shell
dnf install glibc-langpack-fr
dnf install glibc-langpack-es
dnf install glibc-langpack-pt
```

Vous pouvez utiliser la commande suivante pour vérifier quelles langues sont installées sur votre système :

```shell
locale -a
```

## Étapes de pré-installation

### Désactiver SELinux (s'il est installé)

Pendant l'installation, SELinux doit être désactivé. Éditez le fichier
**/etc/selinux/config** et remplacez **enforcing** par **disabled**, ou bien
exécutez la commande suivante :

```shell
sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config
```

Redémarrez votre système d'exploitation pour prendre en compte le changement.

```shell
reboot
```

Après le redémarrage, une vérification rapide permet de confirmer le statut de
SELinux :

```shell
$ getenforce
Disabled
```

### Configurer ou désactiver le pare-feu

Paramétrer le pare-feu système ou désactiver ce dernier. Pour désactiver ce
dernier exécuter les commandes suivantes :

```shell
systemctl stop firewalld
systemctl disable firewalld
```

> Vous pouvez trouver des instructions [ici](../../administration/secure-platform.md#enable-firewalld)
> pour configurer le pare-feu.

### Installer les dépôts

<Tabs groupId="sync">
<TabItem value="Alma 8" label="Alma 8">

#### Dépôt remi

Afin d'installer les logiciels Centreon, le dépôt **remi** doit être installé.

Exécutez les commandes suivantes :

```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
dnf config-manager --set-enabled 'powertools'
```

Activez PHP 8.0 en utilisant les commandes suivantes :

```shell
dnf module reset php
dnf module install php:remi-8.0
```

</TabItem>
<TabItem value="RHEL 8" label="RHEL 8">

#### Dépôt remi et CodeReady Builder

Afin d'installer les logiciels Centreon, les dépôts **remi** et **CodeReady Builder** doivent être installés.

Exécutez les commandes suivantes :

```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

Activez PHP 8.0 en utilisant les commandes suivantes :

```shell
dnf module reset php
dnf module install php:remi-8.0
```

</TabItem>

<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

#### Dépôt remi et CodeReady Builder

Afin d'installer les logiciels Centreon, les dépôts **remi** et **CodeReady Builder** doivent être installés.

Exécutez les commandes suivantes :

```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
dnf config-manager --set-enabled ol8_codeready_builder
```

Activez PHP 8.0 en utilisant les commandes suivantes :

```shell
dnf module reset php
dnf module install php:remi-8.0
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

#### Dépôt *Software collections* de Red Hat

Afin d'installer les logiciels Centreon, le dépôt *Software Collections* de Red
Hat doit être activé. Celui-ci est nécessaire pour l'installation de apache 2.4.

Exécutez la commande suivante :

```shell
yum install -y centos-release-scl
```

#### Dépôt remi

Afin d'installer les logiciels Centreon, le dépôt **remi** doit être installé.

Exécutez les commandes suivantes :

```shell
yum install -y yum-utils
yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum-config-manager --enable remi-php80
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

#### Installez les dépendances

Installez les dépendances suivantes :

```shell
sudo apt update && sudo apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2
```

#### Installez le dépôt Sury APT pour PHP 8.0

Pour installer le dépôt Sury, exécutez la commande suivante :

```shell
sudo echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/sury-php.list
```

Puis importez la clé du dépôt :

```shell
sudo su
wget -O- https://packages.sury.org/php/apt.gpg | gpg --dearmor | tee /etc/apt/trusted.gpg.d/php.gpg  > /dev/null 2>&1
exit
```

</TabItem>
</Tabs>

#### Dépôt Centreon

Afin d'installer les logiciels Centreon à partir des dépôts, vous devez au
préalable installer le fichier lié au dépôt.

Exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y https://yum.centreon.com/standard/22.04/el8/stable/noarch/RPMS/centreon-release-22.04-3.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y https://yum.centreon.com/standard/22.04/el7/stable/noarch/RPMS/centreon-release-22.04-3.el7.centos.noarch.rpm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Pour installer le dépôt Centreon, exécutez la commande suivante :

```shell
sudo echo "deb https://apt.centreon.com/repository/22.04/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/centreon.list
```

Puis importez la clé du dépôt :

```shell
sudo su
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
exit
```

</TabItem>
</Tabs>

## Installation

Ce chapitre décrit l'installation d'un serveur Centreon Remote Server.

Il est possible d'installer ce serveur avec une base de données locale au
serveur, ou déportée sur un serveur dédié.

### Avec base de données locale

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y centreon
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y centreon
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
sudo apt update && sudo apt install \
centreon=22.04.0-bullseye centreon-central=22.04.0-bullseye centreon-database=22.04.0-bullseye centreon-poller-centreon-engine=22.04.0-bullseye \
centreon-web=22.04.0-bullseye centreon-web-apache=22.04.0-bullseye \
centreon-gorgone=22.04.0-bullseye centreon-broker=22.04.1-bullseye centreon-broker-cbmod=22.04.1-bullseye centreon-broker-core=22.04.1-bullseye centreon-broker-storage=22.04.1-bullseye centreon-clib=22.04.1-bullseye centreon-engine=22.04.1-bullseye centreon-common=22.04.0-bullseye centreon-gorgone=22.04.0-bullseye centreon-perl-libs=22.04.0-bullseye centreon-plugin-applications-monitoring-centreon-central centreon-plugin-applications-monitoring-centreon-poller centreon-plugin-applications-protocol-dns centreon-plugin-applications-protocol-ldap centreon-plugin-hardware-printers-generic-snmp centreon-plugin-network-cisco-standard-snmp centreon-plugin-operatingsystems-linux-snmp centreon-plugin-operatingsystems-windows-snmp centreon-trap=22.04.0-bullseye centreon-web-common=22.04.0-bullseye centreon-license-manager=22.04.0-bullseye
```

```shell
sudo systemctl daemon-reload
```

</TabItem>
</Tabs>

Vous pouvez maintenant passer à [l'étape suivante](#configuration).

### Avec base de données déportée

> Dans le cas d'une installation avec un serveur dédié à la base de données, ce
> dernier doit aussi avoir les dépôts prérequis.

Exécutez la commande suivante sur le serveur Centreon Central :
<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y centreon-central
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y centreon-central
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt install -y centreon-central
```

</TabItem>
</Tabs>

Puis exécutez les commandes suivantes sur le serveur dédié à la base de données :
<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
</Tabs>

Sécurisez votre installation MariaDB en exécutant la commande suivante :
```shell
mysql_secure_installation
```

Créez enfin un utilisateur avec privilèges **root** nécessaire à l'installation de
Centreon :

```SQL
CREATE USER '<USER>'@'<IP>' IDENTIFIED BY '<PASSWORD>';
GRANT ALL PRIVILEGES ON *.* TO '<USER>'@'<IP>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

> Remplacez **<IP\>** par l'adresse IP avec laquelle le serveur Centreon
> Remote Server se connectera au serveur de base de données.
>
> Remplacez **<USER\>** et **<PASSWORD\>** par les identifiants de
> l'utilisateur.

Une fois l'installation terminée vous pouvez supprimer cet utilisateur via la
commande :

```SQL
DROP USER '<USER>'@'<IP>';
```


> Le paquet **centreon-database** installe une configuration MariaDB optimisée
> pour l'utilisation avec Centreon.
>
> Si ce paquet n'est pas installé, il faut à minima adapter la limitation
> **LimitNOFILE** à **32000** via une configuration dédiée, exemple:
>
> ```shell
> $ cat /etc/systemd/system/mariadb.service.d/centreon.conf
> [Service]
> LimitNOFILE=32000
> ```
>
> De même pour la directive MariaDB **open_files_limit**, exemple:
>
> ```shell
> $ cat /etc/my.cnf.d/centreon.cnf
> [server]
> innodb_file_per_table=1
> open_files_limit=32000
> ```
>
> Pensez à redémarrer le service mariadb après chaque changement de
> configuration.

## Configuration

### Nom du serveur

Si vous le souhaitez, vous pouvez changer le nom du serveur à l'aide de la commande suivante:
```shell
hostnamectl set-hostname new-server-name
```

Remplacez **new-server-name** par le nom de votre choix. Exemple :
```shell
hostnamectl set-hostname remote1
```

### Fuseau horaire PHP

La timezone par défaut de PHP doit être configurée. 

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 / CentOS 7">

Exécutez la commande suivante :

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

> Remplacez **Europe/Paris** par votre fuseau horaire. La liste des fuseaux
> horaires est disponible [ici](http://php.net/manual/en/timezones.php).

Après avoir réalisé la modification, redémarrez le service PHP-FPM :

```shell
systemctl restart php-fpm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Définissez le fuseau horaire PHP en éditant le fichier suivant :

```shell
/etc/php/8.0/mods-available/centreon.ini
```

> La liste des fuseaux
> horaires est disponible [ici](http://php.net/manual/en/timezones.php).

Après avoir sauvegardé le fichier, redémarrez le service PHP-FPM :

```shell
sudo systemctl restart php8.0-fpm
```

</TabItem>
</Tabs>

### Lancement des services au démarrage

Pour activer le lancement automatique des services au démarrage, exécutez la
commande suivante sur le serveur Central :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
systemctl enable php-fpm httpd24-httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
systemctl enable php8.0-fpm apache2 centreon cbd centengine gorgoned centreontrapd snmpd snmptrapd
```

</TabItem>
</Tabs>

Puis exécutez la commande suivante (sur le serveur distant si vous utilisez une base de données locale, sinon sur le serveur de base de données déporté):

```shell
systemctl enable mariadb
```

### Sécuriser la base de données

Depuis MariaDB 10.5, il est obligatoire de sécuriser l'accès en root à la base avant d'installer Centreon. Si vous utilisez une base de données locale, exécutez la commande suivante sur le serveur central :

```shell
mysql_secure_installation
```

* Répondez oui à toute question sauf à "Disallow root login remotely?". 
* Vous devez obligatoirement définir un mot de passe pour l'utilisateur **root** de la base de données.
Ce mot de passe vous sera demandé lors de l'[installation web](../web-and-post-installation.md).

> Pour plus d'informations, veuillez consulter la [documentation officielle MariaDB](https://mariadb.com/kb/en/mysql_secure_installation/).

## Installation web

Avant de démarrer l'installation web, démarrez le serveur Apache avec la
commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
systemctl start httpd
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
systemctl start httpd24-httpd
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
systemctl start apache2
```

</TabItem>
</Tabs>


Terminez l'installation en réalisant les
[étapes de l'installation web](../web-and-post-installation.md#installation-web).

> Pendant l'installation web, il n'est pas nécessaire d'installer le module
> Autodiscovery.

> A l'étape d'**Initialisation de la supervision**, seules les actions 6 à 8
> doivent être faites.

## Enregistrer le Remote Server

Pour transformer le serveur en serveur distant et l'enregistrer sur le serveur Central, exécutez la commande suivante sur le futur serveur distant :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t remote -h <IP_TARGET_NODE> -n <REMOTE_NAME>
```

Exemple:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t remote -h 192.168.0.1 -n remote-1
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t remote -h <IP_TARGET_NODE> -n <REMOTE_NAME>
```

Exemple:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t remote -h 192.168.0.1 -n remote-1
```

</TabItem>
</Tabs>

> Remplacez **<IP_TARGET_NODE>** par l'adresse IP du serveur Central auquel vous voulez rattacher le serveur distant (adresse IP vue par le serveur distant).

> Le compte **<API_ACCOUNT>** doit avoir accès à l'API de configuration. Vous pouvez utiliser le compte **admin**.

> Vous pouvez changer le port et la méthode HTTP, le format de l'option **-h** est le suivant :
> `HTTPS://<IP_TARGET_NODE>:PORT`

Suivre ensuite les instructions

1. Saisir le mot de passe :

    ``` shell
    192.168.0.1: please enter your password
    ```

2. Sélectionner l'adresse IP si plusieurs interfaces réseau existent:

    ```shell
    Which IP do you want to use as CURRENT NODE IP ?
    1) 192.168.0.2
    2) 192.168.0.3
    1
    ```

3. Valider les informations:

    ``` shell
    Summary of the informations that will be send:

    Api Connection:
    username: admin
    password: ******
    target server: 192.168.0.1

    Pending Registration Server:
    name: remote-1
    type: remote
    address: 192.168.0.2

    Do you want to register this server with those informations ? (y/n)y
    ```

4. Ajouter les informations nécessaires pour permettre de futures communications entre votre Remote Server et son Central

    ```shell
    <CURRENT_NODE_ADDRESS> : Please enter your username:
    admin
    <CURRENT_NODE_ADDRESS> : Please enter your password:

    <CURRENT_NODE_ADDRESS> : Protocol [http]:
    <CURRENT_NODE_ADDRESS> : Port [80]:
    <CURRENT_NODE_ADDRESS> : centreon root folder [centreon]:
    ```

5. Définir les accès au proxy du serveur Centreon du Central :

    ```shell
    Are you using a proxy ? (y/n)
    y
    enter your proxy Host:
    myproxy.example.com
    enter your proxy Port [3128]:
    Are you using a username/password ? (y/n)
    y
    enter your username:
    my_proxy_username
    enter your password:

    ```

Vous recevrez la validation du serveur Centreon Central :

``` shell
2020-10-16T17:19:37+02:00 [INFO]: The CURRENT NODE 'remote: 'remote-1@192.168.0.2' has been converted and registered successfully.
```

Enfin, il est nécessaire d'ajouter des droits à l'utilisateur de base de données **centreon** pour qu'il puisse
utiliser la commande **LOAD DATA INFILE** :

```sql
GRANT FILE on *.* to 'centreon'@'localhost';
```

### Principaux messages d'erreur

``` shell
2020-10-20T10:23:15+02:00 [ERROR]: Invalid credentials
```

> Vos informations d'identification sont incorrectes pour le compte **<API_ACCOUNT>**.

``` shell
2020-10-20T10:24:59+02:00 [ERROR]: Access Denied.
```

> L'utilisateur **<API_ACCOUNT>** n'a pas accès à l'API de configuration.

``` shell
Failed connect to 192.168.0.1:444; Connection refused
```

> Impossible d'accéder à l'API. Contrôler les valeurs **<IP_TARGET_NODE>**, méthode et port.

``` shell
2020-10-20T10:39:30+02:00 [ERROR]: Can’t connect to the API using: https://192.168.0.1:443/centreon/api/latest/login
```

> L'URL d'accès n'est pas complète ou invalide. Utilisez l'option **-root** pour définir le chemin de l'URL de l'API.
> Par exemple : **--root monitoring**.

``` shell
2020-10-20T10:42:23+02:00 [ERROR]: No route found for “POST /centreon/api/latest/platform/topology”
```

> La version Centreon du serveur distant est invalide. Elle doit être supérieure ou égale à 22.04.

## Ajouter le Remote Server à la configuration

Rendez-vous au chapitre
[Ajouter un Remote Server à la configuration](../../monitoring/monitoring-servers/add-a-remote-server-to-configuration.md).

## Sécurisez votre plateforme

N'oubliez pas de sécuriser votre plateforme Centreon en suivant nos
[recommandations](../../administration/secure-platform.md).
