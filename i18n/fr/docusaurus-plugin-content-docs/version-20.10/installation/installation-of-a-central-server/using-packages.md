---
id: using-packages
title: A partir des paquets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Centreon fournit des RPM pour ses produits au travers de la solution
Centreon Open Sources disponible gratuitement sur notre dépôt.

Ces paquets ont été testés avec succès sur les environnements CentOS
en version 7 et 8.

> Cependant, suite au changement de stratégie effectué par Red Hat, nous pensons
> qu'il est préférable de ne pas utiliser CentOS 8 en production. Ces paquets
> pour CentOS 8 sont compatible avec RHEL et Oracle Linux en version 8.

Après avoir installé votre serveur, réalisez la mise à jour de votre système
d'exploitation via la commande :

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

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

> Acceptez toutes les clés GPG proposées et pensez a redémarrer votre serveur
> si une mise à jour du noyau est proposée.

## Étapes de pré-installation

### Désactiver SELinux

SELinux doit être désactivé. Pour se faire, vous devez éditer le fichier
**/etc/selinux/config** et remplacer **enforcing** par **disabled**, ou en
exécutant la commande suivante :

```shell
sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config
```

> Redémarrez votre système d'exploitation pour prendre en compte le changement.

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

### Installer le dépôts

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

#### Redhat CodeReady Builder repository

To install Centreon you will need to enable the official CodeReady Builder
repository supported by Redhat.

Enable the CodeReady Builder repository using these commands:

```shell
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

</TabItem>
<TabItem value="CentOS 8" label="CentOS 8">

#### Dépôt PowerTools de Red Hat

Afin d'installer les logiciels Centreon, le dépôt PowerTools de Red Hat doit être
activé.

Exécutez les commandes suivantes :

```shell
dnf -y install dnf-plugins-core epel-release
dnf config-manager --set-enabled powertools
```

> Pour CentOS 8.2 utilisez la commande :
> ```shell
> dnf -y install dnf-plugins-core epel-release
> dnf config-manager --set-enabled PowerTools
> ```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

#### Dépôt CodeReady Builder de Oracle

Afin d'installer les logiciels Centreon, le dépôt CodeReady Builder de Oracle
doit être activé.

Exécutez les commandes suivantes :

```shell
dnf -y install dnf-plugins-core oracle-epel-release-el8
dnf config-manager --set-enabled ol8_codeready_builder
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

#### Dépôt *Software collections* de Red Hat

Afin d'installer les logiciels Centreon, le dépôt *Software Collections* de Red
Hat doit être activé.

> Le dépôt *Software Collections* est nécessaire pour l'installation de PHP 7
> et les librairies associées.

Exécutez la commande suivante :

```shell
yum install -y centos-release-scl
```

</TabItem>
</Tabs>

#### Dépôt Centreon

Afin d'installer les logiciels Centreon à partir des dépôts, vous devez au
préalable installer le fichier lié au dépôt.

Exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf install -y https://yum.centreon.com/standard/20.10/el8/stable/noarch/RPMS/centreon-release-20.10-4.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y https://yum.centreon.com/standard/20.10/el7/stable/noarch/RPMS/centreon-release-20.10-4.el7.centos.noarch.rpm
```

</TabItem>
</Tabs>

## Installation

Ce chapitre décrit l'installation d'un serveur Centreon Central.

Il est possible d'installer ce serveur avec une base de données locale au
serveur, ou déportée sur un serveur dédié.

### Avec base de données locale

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf install -y centreon centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y centreon centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
</Tabs>

### Avec base de données déportée

> Dans le cas d'une installation avec un serveur dédié à la base de données, ce
> dernier doit aussi avoir les dépôts prérequis.

Exécutez la commande suivante sur le serveur Centreon Central :
<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf install -y centreon-base-config-centreon-engine centreon-widget\*
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y centreon-base-config-centreon-engine centreon-widget\*
```

</TabItem>
</Tabs>

Puis exécutez les commandes suivantes sur le serveur dédié à la base de données :
<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

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

Créez enfin un utilisateur avec privilèges **root** nécessaire à l'installation de
Centreon :

```SQL
CREATE USER '<USER>'@'<IP>' IDENTIFIED BY '<PASSWORD>';
GRANT ALL PRIVILEGES ON *.* TO '<USER>'@'<IP>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

> Remplacez **<IP\>** par l'adresse IP avec laquelle le serveur Centreon
> Central se connectera au serveur de base de données.
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

## Configuration

### Fuseau horaire PHP

La timezone par défaut de PHP doit être configurée. Exécuter la commande suivante :

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php72/php.d/50-centreon.ini
```

</TabItem>
</Tabs>

> Changez **Europe/Paris** par votre fuseau horaire. La liste des fuseaux
> horaires est disponible [ici](http://php.net/manual/en/timezones.php).

Après avoir réalisé la modification, redémarrez le service PHP-FPM :

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
systemctl restart php-fpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
systemctl restart rh-php72-php-fpm
```

</TabItem>
</Tabs>

### Lancement des services au démarrage

Pour activer le lancement automatique des services au démarrage, exécutez la
commande suivante sur le serveur Central :

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
systemctl enable php-fpm httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
systemctl enable rh-php72-php-fpm httpd24-httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```

</TabItem>
</Tabs>

> Si la base de données est sur un serveur dédié, pensez à activer le
> lancement du service **mariadb** sur ce dernier.

## Installation web

Avant de démarrer l'installation web, démarrez le serveur Apache avec la
commande suivante :

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

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

Terminez l'installation en réalisant les
[étapes de l'installation web](../web-and-post-installation.md#installation-web).
