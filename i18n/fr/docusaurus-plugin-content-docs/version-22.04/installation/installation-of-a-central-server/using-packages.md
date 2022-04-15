---
id: using-packages
title: À partir des paquets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Centreon fournit des RPM pour ses produits au travers de la solution
Centreon Open Source disponible gratuitement sur notre dépôt.

Les paquets peuvent être installés sur CentOS7 ou sur Alma/RHEL/Oracle Linux 8.

L'ensemble de la procédure d'installation doit être faite en tant qu'utilisateur privilégié.

## Prérequis

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
</Tabs>

> Acceptez toutes les clés GPG proposées et pensez à redémarrer votre serveur
> si une mise à jour du noyau est proposée.

## Étape 1 : pré-installation

### Désactiver SELinux

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

Si votre pare-feu système est actif, [paramétrez-le](../../administration/secure-platform.md#enable-firewalld). Vous pouvez également le désactiver le temps de l'installation :

```shell
systemctl stop firewalld
systemctl disable firewalld
```

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
</Tabs>

## Étape 2 : Installation

Ce chapitre décrit l'installation d'un serveur central Centreon.

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
</Tabs>

Vous pouvez maintenant passer à [l'étape 3](#étape-3--configuration).

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
</Tabs>

Sécurisez l'accès root à MariaDB en exécutant la commande suivante :

```shell
mysql_secure_installation
```

> Vous devez obligatoirement définir un mot de passe pour l'utilisateur root de la base de données.

Enfin, dans la base de données distante, créez un utilisateur avec privilèges **root**. Vous devrez renseigner cet utilisateur pendant le processus d'installation web (à [l'étape 6](../web-and-post-installation.md#étape-6--database-information), dans les champs **Root user** et **Root password**).

```SQL
CREATE USER '<USER>'@'<IP_CENTRAL>' IDENTIFIED BY '<MOT_DE_PASSE>';
GRANT ALL PRIVILEGES ON *.* TO '<USER>'@'<IP_CENTRAL>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

Exemple:

```shell
CREATE USER 'dbadmin'@'<IP_CENTRAL>' IDENTIFIED BY '<MOT_DE_PASSE_DBADMIN>';
GRANT ALL PRIVILEGES ON *.* TO 'dbadmin'@'<IP_CENTRAL>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

> Remplacez **<IP_CENTRAL\>** par l'adresse IP avec laquelle le serveur Centreon
> Central se connectera au serveur de base de données.
>
> Remplacez **<USER\>** et **<MOT_DE_PASSE\>** par les identifiants de
> l'utilisateur.

Cet utilisateur ne sera utilisé que pour le processus d'intallation. Une fois [l'installation web](../web-and-post-installation.md) terminée vous pouvez supprimer cet utilisateur via la
commande :

```SQL
DROP USER '<USER>'@'<IP_CENTRAL>';
```

Exemple :

```SQL
DROP USER 'dbadmin'@'<IP_CENTRAL>';
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

> En sus des directives précédentes, il est fortement recommandé d'appliquer la
> configuration des bases de données avec les paramètres suivants:
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
> Il est également possible d'améliorer les performances des tables utilisant
> le moteur de stockage InnoDB avec les directives ci-dessous. Les valeurs
> ci-dessous sont applicables à une VM ayant au moins 8Go de RAM.
>
> ```shell
> innodb_buffer_pool_size=1G
> ```
>
> Pensez à redémarrer le service mariadb après chaque changement de
> configuration.

## Étape 3 : Configuration

### Nom du serveur

Si vous le souhaitez, vous pouvez changer le hostname du serveur à l'aide de la commande suivante :
```shell
hostnamectl set-hostname new-server-name
```

Remplacez **new-server-name** par le nom de votre choix. Exemple :
```shell
hostnamectl set-hostname central
```

### Fuseau horaire PHP

La timezone par défaut de PHP doit être configurée. Exécutez la commande suivante en `root` :

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

> Remplacez **Europe/Paris** par votre fuseau horaire. La liste des fuseaux
> horaires est disponible [ici](http://php.net/manual/en/timezones.php).

Après avoir réalisé la modification, redémarrez le service PHP-FPM :

```shell
systemctl restart php-fpm
```

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
</Tabs>

Puis exécutez la commande suivante (sur le serveur central si vous utilisez une base de données locale, sinon sur le serveur de base de données déporté):

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
</Tabs>

2. Terminez l'installation en réalisant les
[étapes de l'installation web](../web-and-post-installation.md#installation-web).
