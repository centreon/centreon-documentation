---
id: using-packages
title: Installation par les paquets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Centreon fournit des paquets RPM pour ses produits via la version Centreon Open Source disponible gratuitement dans notre dépôt.
Source disponible gratuitement dans notre dépôt.

Ces paquets peuvent être installés sur CentOS 7, sur Alma/RHEL/Oracle Linux 8 et sur Debian 11.

Vous devez exécuter la procédure d'installation en tant qu'utilisateur privilégié.

## Pré-requis

Après avoir installé votre serveur, mettez à jour votre système d'exploitation à l'aide de la commande suivante
commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update
```

Si vous installez Centreon sur AlmaLinux/RHEL/OracleLinux 8, et que vous avez l'intention d'utiliser Centreon en français, en espagnol ou en portugais, installez les paquets correspondants :

```shell
dnf install glibc-langpack-fr
dnf install glibc-langpack-es
dnf install glibc-langpack-pt
```

Utilisez la commande suivante pour vérifier quelles langues sont installées sur votre système :

```shell
locale -a
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum update
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update && apt upgrade
```

</TabItem>
</Tabs>

> Acceptez toutes les clés GPG et redémarrez votre serveur si une mise à jour du noyau est
> proposée.

### Étape 1 : Pré-installation

### Désactiver SELinux (s'il est installé)

Pendant l'installation, SELinux doit être désactivé. Pour ce faire, éditez le fichier
**/etc/selinux/config** et remplacez **enforcing** par **disabled**. Vous pouvez également exécuter la commande suivante :

```shell
sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config
```

Redémarrez votre système d'exploitation pour appliquer la modification.

```shell
reboot
```

Après le démarrage du système, effectuez une vérification rapide de l'état de SELinux :

```shell
getenforce
```

Vous devriez obtenir ce résultat :

```shell
Disabled
```

### Configurer ou désactiver le pare-feu

Si votre pare-feu est actif, ajoutez des [règles de pare-feu](../../administration/secure-platform.md#enable-firewalld). Vous pouvez également désactiver le pare-feu pendant l'installation en exécutant les commandes suivantes :

```shell
systemctl stop firewalld
systemctl disable firewalld
```

### Installer les référentiels

<Tabs groupId="sync">
<TabItem value="Alma 8" label="Alma 8">

#### Dépôt Remi

Pour installer Centreon, vous devez installer le dépôt **remi**.

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

#### Dépôt Remi et CodeReady Builder

Pour installer Centreon, vous devez installer les dépôts **remi** et **CodeReady Builder**.

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

#### Dépôts Remi et CodeReady Builder

Pour installer Centreon, vous devez installer les dépôts **remi** et **CodeReady Builder**.

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

#### Dépôt Redhat Software Collections

Pour installer Centreon, vous devrez configurer le dépôt officiel Software Collections
officiel pris en charge par Redhat. Il est nécessaire pour installer apache 2.4.

Installez le dépôt Software Collections à l'aide de cette commande :

```shell
yum install -y centos-release-scl
```

#### Dépôt Remi

Pour installer Centreon, vous devez installer le dépôt **remi**.

Exécutez les commandes suivantes :

```shell
yum install -y yum-utils
yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum-config-manager --enable remi-php80
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Installez les dépendances suivantes :

```shell
apt update && apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2
```

#### Ajouter le dépôt APT de Sury pour PHP 8.0

Pour installer le dépôt Sury, exécutez la commande suivante :

```shell
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/sury-php.list
```

Ensuite, importez la clé du référentiel :

```shell
wget -O- https://packages.sury.org/php/apt.gpg | gpg --dearmor | tee /etc/apt/trusted.gpg.d/php.gpg  > /dev/null 2>&1
apt update
```

</TabItem>
</Tabs>

#### Référentiel Centreon

Pour installer le logiciel Centreon à partir du référentiel, vous devez d'abord installer le paquetage
centreon-release, qui fournira le fichier du référentiel.

Installez le référentiel Centreon à l'aide de cette commande :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y https://yum.centreon.com/standard/22.04/el8/stable/noarch/RPMS/centreon-release-22.04-3.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y  https://yum.centreon.com/standard/22.04/el7/stable/noarch/RPMS/centreon-release-22.04-3.el7.centos.noarch.rpm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
echo "deb https://apt.centreon.com/repository/22.04/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
```

Ensuite, importez la clé du référentiel :

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
```

</TabItem>
</Tabs>

### Étape 2 : Installation

Cette section décrit comment installer un serveur central Centreon.

Vous pouvez installer ce serveur avec une base de données locale sur le serveur, ou
une base de données distante sur un serveur dédié.

<Tabs groupId="sync">
<TabItem value="With a local database" label="With a local database">

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
apt update
apt install -y centreon
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="With a remote database" label="With a remote database">

> Si vous installez la base de données sur un serveur dédié, ce serveur doit également avoir
> les référentiels requis.

Exécutez la commande suivante sur le serveur central :

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
apt update
apt install -y centreon-central
```

</TabItem>
</Tabs>

Exécutez ensuite les commandes suivantes sur le serveur dédié à votre base de données :

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
apt update
apt install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
</Tabs>

> Il est obligatoire de définir un mot de passe pour l'utilisateur root de la base de données.

Ensuite, dans la dabatase distante, créez un utilisateur avec des privilèges **root**. Vous devrez entrer cet utilisateur pendant le 
processus d'installation web (à [étape 6](../web-and-post-installation.md#step-6-database-infomation),
dans les champs **Root user** et **Root password**).

```SQL
CREATE USER '<USER>'@'<CENTRAL_SERVER_IP>' IDENTIFIED BY '<PASSWORD>';
GRANT ALL PRIVILEGES ON *.* TO '<USER>'@'<CENTRAL_SERVER_IP>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

Exemple :

```shell
CREATE USER 'dbadmin'@'<CENTRAL_SERVER_IP>' IDENTIFIED BY '<DBADMIN_PASSWORD>';
GRANT ALL PRIVILEGES ON *.* TO 'dbadmin'@'<CENTRAL_SERVER_IP>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

> Remplacez **<CENTRAL_SERVER_IP\>** par l'adresse IP de Centreon Central qui se connectera au serveur de base de données.
> le serveur de base de données.
>
> Remplacez **<USER\>** et **<PASSWORD\>** par les informations d'identification de l'utilisateur.

Cet utilisateur ne sera utilisé que pour le processus d'installation : une fois l'[installation web](../web-and-post-installation.md) terminée, vous pouvez supprimer cet utilisateur en utilisant :

```SQL
DROP USER '<USER>'@'<IP>';
```

Exemple :

```SQL
DROP USER 'dbadmin'@'<CENTRAL_SERVER_IP>';
```

</TabItem>
</Tabs>

> Le paquet **centreon-database** installe une configuration optimisée de MariaDB
> pour être utilisée avec Centreon.
>
> Si ce paquetage n'est pas installé, la limitation du système **LimitNOFILE** devrait être
> au moins fixée à **32000** à l'aide d'un fichier de configuration dédié, par exemple :
>
> ``shell
> $ cat /etc/systemd/system/mariadb.service.d/centreon.conf
> [Service]
> LimitNOFILE=32000
> ```
>
> Idem pour la directive MariaDB **open_files_limit** : >
>
> <Tabs groupId="sync">
> <TabItem value="Alma / RHEL / Oracle Linux 8 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 / CentOS 7">
>
> ```shell
> $ cat /etc/my.cnf.d/centreon.cnf
> [server]
> innodb_file_per_table=1
> open_files_limit=32000
> ```
>
> </TabItem>
> <TabItem value="Debian 11" label="Debian 11">
>
> ```shell
> $ cat /etc/mysql/mariadb.conf.d/80-centreon.cnf
> [server]
> innodb_file_per_table=1
> open_files_limit=32000
> ```
> 
> MariaDB doit écouter toutes les interfaces au lieu de localhost/127.0.0.1, qui est la valeur par défaut. Editez le fichier suivant :
> 
> ```shell
> /etc/mysql/mariadb.conf.d/50-server.cnf
> ```
> 
> Définissez le paramètre **adresse de l'ordinateur** à **0.0.0.0** et redémarrez mariadb.
> 
> ```shell
> systemctl restart mariadb
> ```
> 
> </TabItem>
> </Tabs>

> En plus des directives ci-dessus, il est fortement recommandé d'adapter la configuration de la base de données avec les paramètres suivants
> configuration de la base de données avec les paramètres suivants :
>
> ```shell
> [server]
> key_buffer_size = 256M
> sort_buffer_size = 32M
> join_buffer_size = 4M
> thread_cache_size = 64
> read_buffer_size = 512K
> read_rnd_buffer_size = 256K
> max_allowed_packet = 128M
> ```
>
> En option, régler l'utilisation de la mémoire et des tampons du moteur InnoDB alimentant les
> tables. L'exemple ci-dessous s'applique à un serveur de base de données avec 8 Go de RAM.
>
> ```shell
> innodb_buffer_pool_size=1G
> ```
>
> N'oubliez pas de redémarrer MariaDB après une modification de la configuration.

### Étape 3 : Configuration

### Nom du serveur

Si vous le souhaitez, vous pouvez changer le nom d'hôte du serveur en utilisant la commande suivante :

```shell
hostnamectl set-hostname new-server-name
```

Remplacez **new-server-name** par le nom que vous souhaitez. Exemple :

```shell
hostnamectl set-hostname central
```

### Définir le fuseau horaire de PHP

Vous devez définir le fuseau horaire de PHP.

> Remplacez **Europe/Paris** par votre fuseau horaire. Vous pouvez trouver la liste des
> fuseaux horaires supportés [ici] (http://php.net/manual/en/timezones.php).

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 / CentOS 7">

Exécutez la commande suivante en tant que `root` :

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

Après avoir enregistré le fichier, redémarrez le service PHP-FPM :

```shell
systemctl restart php-fpm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
echo "date.timezone = Europe/Paris" > /etc/php/8.0/mods-available/centreon.ini
```

Après avoir enregistré le fichier, redémarrez le service PHP-FPM :

```shell
systemctl restart php8.0-fpm
```

</TabItem>
</Tabs>

### Démarrage des services au démarrage du système

Pour que les services démarrent automatiquement au démarrage du système, exécutez les commandes suivantes
sur le serveur central :

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

Exécutez ensuite la commande suivante (sur le serveur central si vous utilisez une base de données locale, ou sur votre serveur de base de données distant) :

```shell
systemctl enable mariadb
systemctl restart mariadb
```

### Sécuriser la base de données

Depuis MariaDB 10.5, il est obligatoire de sécuriser l'accès root de la base de données avant d'installer Centreon.
Si vous utilisez une base de données locale, exécutez la commande suivante sur le serveur central sinon sur le serveur de la base de données :

```shell
mysql_secure_installation
```

* Répondez **oui** à toutes les questions, sauf à "Disallow root login remotely ?
* Il est obligatoire de définir un mot de passe pour l'utilisateur **root** de la base de données. Vous aurez besoin de ce mot de passe pendant l'[installation web](../web-and-post-installation.md).

> Pour plus d'informations, veuillez consulter la [documentation officielle de MariaDB](https://mariadb.com/kb/en/mysql_secure_installation/).

## Étape 4 : Installation web

1. Démarrez le serveur Apache avec la
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

2. Pour terminer l'installation, suivez la procédure
[étapes de l'installation web](../web-et-post-installation.md#web-installation).
