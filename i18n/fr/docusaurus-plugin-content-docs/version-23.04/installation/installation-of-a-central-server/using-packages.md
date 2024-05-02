---
id: using-packages
title: À partir des paquets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Centreon fournit des paquets RPM et DEB pour ses produits via la version Centreon Open Source disponible gratuitement dans notre dépôt.

Ces paquets peuvent être installés sur Alma/RHEL/Oracle Linux 8 et 9 et sur Debian 11.

> Vous devez exécuter la procédure d'installation en tant qu'utilisateur privilégié.

> Lorsque vous lancez une commande, vérifiez les messagez obtenus. En cas de message d'erreur, arrêtez la procédure et dépannez les problèmes.

## Prérequis

Après avoir installé votre serveur, mettez à jour votre système d'exploitation à l'aide de la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update
```

### Configuration spécifique

Pour utiliser Centreon en français, espagnol, portugais ou allemand, installez les paquets correspondants :

```shell
dnf install glibc-langpack-fr
dnf install glibc-langpack-es
dnf install glibc-langpack-pt
dnf install glibc-langpack-de
```

Utilisez la commande suivante pour vérifier quelles langues sont installées sur votre système :

```shell
locale -a
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update
```

### Configuration spécifique

Pour utiliser Centreon en français, espagnol, portugais ou allemand, installez les paquets correspondants :

```shell
dnf install glibc-langpack-fr
dnf install glibc-langpack-es
dnf install glibc-langpack-pt
dnf install glibc-langpack-de
```

Utilisez la commande suivante pour vérifier quelles langues sont installées sur votre système :

```shell
locale -a
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update && apt upgrade
```

</TabItem>
</Tabs>

> Acceptez toutes les clés GPG proposées et redémarrez votre serveur
> si une mise à jour du noyau est proposée.

## Étape 1 : Pré-installation

### Désactiver SELinux

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

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
```

Vous devriez obtenir ce résultat :

```shell
Disabled
```

> **Notez que cette désactivation doit être temporaire.** Pour réactiver SELinux, éditez le fichier **/etc/selinux/config** et changez la valeur avec les options suivantes :
> - ``SELINUX=enforcing`` pour que la politique de sécurité SELinux soit appliquée en mode strict.
> - ``SELINUX=permissive`` pour que les erreurs d’accès soient enregistrées dans les logs, mais l’accès ne sera pas bloqué.

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

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

Après le démarrage du système, effectuez une vérification rapide de l'état de SELinux :

```shell
getenforce
```

Vous devriez obtenir ce résultat :

```shell
Disabled
```

> **Notez que cette désactivation doit être temporaire.** Pour réactiver SELinux, éditez le fichier **/etc/selinux/config** et changez la valeur avec les options suivantes :
> - ``SELINUX=enforcing`` pour que la politique de sécurité SELinux soit appliquée en mode strict.
> - ``SELINUX=permissive`` pour que les erreurs d’accès soient enregistrées dans les logs, mais l’accès ne sera pas bloqué.

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

SELinux n'est pas installé sur Debian 11, continuez.

</TabItem>
</Tabs>

### Configurer ou désactiver le pare-feu

Si votre pare-feu système est actif, [paramétrez-le](../../administration/secure-platform.md#activer-firewalld).
Vous pouvez également le désactiver le temps de l'installation :

```shell
systemctl stop firewalld
systemctl disable firewalld
```

### Installer les dépôts

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

Activez PHP 8.1 en utilisant les commandes suivantes :

```shell
dnf module reset php
dnf module install php:remi-8.1
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
dnf config-manager --set-enabled codeready-builder-for-rhel-8-rhui-rpms
```

Activez PHP 8.1 en utilisant les commandes suivantes :

```shell
dnf module reset php
dnf module install php:remi-8.1
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

Activez PHP 8.1 en utilisant les commandes suivantes :

```shell
dnf module reset php
dnf module install php:remi-8.1
```

</TabItem>
<TabItem value="Alma 9" label="Alma 9">

Exécutez les commandes suivantes :

```shell
dnf install dnf-plugins-core
dnf install epel-release
dnf config-manager --set-enabled crb
```

Activez PHP 8.1 avec la commande suivante :

```shell
dnf module reset php
dnf module install php:8.1
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

Exécutez les commandes suivantes :

```shell
dnf install -y dnf-plugins-core
dnf install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-9-x86_64-rpms
dnf config-manager --set-enabled codeready-builder-for-rhel-9-rhui-rpms
```

Activez PHP 8.1 avec la commande suivante :

```shell
dnf module reset php
dnf module install php:8.1
```

</TabItem>
<TabItem value="Oracle Linux 9" label="Oracle Linux 9">

Exécutez les commandes suivantes :

```shell
dnf install dnf-plugins-core
dnf install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
dnf config-manager --set-enabled ol9_codeready_builder
```

Activez PHP 8.1 avec la commande suivante :

```shell
dnf module reset php
dnf module install php:8.1
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

#### Installer les dépendances

Installez les dépendances suivantes :

```shell
apt update && apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2
```

#### Installer le dépôt Sury APT pour PHP 8.1

Pour installer le dépôt Sury, exécutez la commande suivante :

```shell
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/sury-php.list
```

Ensuite, importez la clé du dépôt :

```shell
wget -O- https://packages.sury.org/php/apt.gpg | gpg --dearmor | tee /etc/apt/trusted.gpg.d/php.gpg  > /dev/null 2>&1
apt update
```

</TabItem>
</Tabs>

#### Dépôt MariaDB

<Tabs groupId="sync">

<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --os-type=rhel --os-version=8 --mariadb-server-version="mariadb-10.5"
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --os-type=rhel --os-version=9 --mariadb-server-version="mariadb-10.5"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | bash -s -- --os-type=debian --os-version=11 --mariadb-server-version="mariadb-10.5"
```

</TabItem>
</Tabs>

#### Dépôt Centreon

Pour installer le logiciel Centreon, vous devez d'abord installer le dépôt Centreon.

Installez le dépôt Centreon à l'aide de la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon-23.04.repo
dnf clean all --enablerepo=*
dnf update
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el9/centreon-23.04.repo
dnf clean all --enablerepo=*
dnf update
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
echo "deb https://packages.centreon.com/apt-standard-23.04-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```

Ensuite, importez la clé du dépôt :

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
apt update
```

</TabItem>
</Tabs>

### Étape 2 : Installation

Cette section décrit comment installer un serveur central Centreon.

Vous pouvez installer ce serveur avec une base de données locale au serveur, ou
une base de données distante sur un serveur dédié.

<Tabs groupId="sync">
<TabItem value="Avec base de données locale" label="Avec base de données locale">

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y centreon-database centreon-central
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y centreon-database centreon-central
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt install -y --no-install-recommends centreon
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Avec une base de données déportée" label="Avec une base de données déportée">

> Si vous installez la base de données sur un serveur dédié, ce serveur doit également avoir
> les dépôts requis.

Exécutez la commande suivante sur le serveur central :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y centreon-central
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y centreon-central
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt install -y --no-install-recommends centreon-central
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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update
apt install -y --no-install-recommends centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
</Tabs>

> Il est obligatoire de définir un mot de passe pour l'utilisateur root de la base de données.

Sécurisez l'accès root à MariaDB en exécutant la commande suivante :

```shell
mysql_secure_installation
```

Ensuite, dans la base de données distante, créez un utilisateur avec des privilèges **root**. Vous devrez entrer cet utilisateur pendant 
le processus d'installation web (à [étape 6](../web-and-post-installation.md#étape-6-database-information),
dans les champs **Root user** et **Root password**).

```SQL
CREATE USER '<UTILISATEUR>'@'<IP_SERVEUR_CENTRAL>' IDENTIFIED BY '<MOT_DE_PASSE>';
GRANT ALL PRIVILEGES ON *.* TO '<UTILISATEUR>'@'<IP_SERVEUR_CENTRAL>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

Exemple :

```shell
CREATE USER 'dbadmin'@'<IP_SERVEUR_CENTRAL>' IDENTIFIED BY '<MOT_DE_PASSE_DBADMIN>';
GRANT ALL PRIVILEGES ON *.* TO 'dbadmin'@'<IP_SERVEUR_CENTRAL>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

> Remplacez **<IP_SERVEUR_CENTRAL\>** par l'adresse IP du serveur central qui se connectera au serveur de bases de données.
>
> Remplacez **<UTILISATEUR\>** et **<MOT_DE_PASSE\>** par les identifiants de l'utilisateur.

Cet utilisateur ne sera utilisé que pour le processus d'installation. Une fois [l'installation web](../web-and-post-installation.md/) terminée, vous pouvez supprimer cet utilisateur via la commande suivante :

```SQL
DROP USER '<UTILISATEUR>'@'<IP_SERVEUR_CENTRAL>';
```

Exemple :

```SQL
DROP USER 'dbadmin'@'<IP_SERVEUR_CENTRAL>';
```

* Le paquet **centreon-database** installe une configuration de MariaDB optimisée pour être utilisée avec Centreon.

> Si ce paquet n'est pas installé, la limitation du système **LimitNOFILE** devrait être
> au moins fixée à **32000** à l'aide d'un fichier de configuration dédié, par exemple :
>
> ```shell
> $ cat /etc/systemd/system/mariadb.service.d/centreon.conf
> [Service]
> LimitNOFILE=32000
> ```

* Idem pour la directive MariaDB **open_files_limit** :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

> ```shell
> $ cat /etc/my.cnf.d/centreon.cnf
> [server]
> innodb_file_per_table=1
> open_files_limit=32000
> ```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

> ```shell
> $ cat /etc/my.cnf.d/centreon.cnf
> [server]
> innodb_file_per_table=1
> open_files_limit=32000
> ```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

> ```shell
> $ cat /etc/mysql/mariadb.conf.d/80-centreon.cnf
> [server]
> innodb_file_per_table=1
> open_files_limit=32000
> ```
> 
> MariaDB doit écouter sur toutes les interfaces au lieu d'écouter sur localhost/127.0.0.1, qui est la valeur par défaut. Éditez le fichier suivant :
> 
> ```shell
> /etc/mysql/mariadb.conf.d/50-server.cnf
> ```
> 
> Attribuez au paramètre **bind-address** la valeur **0.0.0.0** et redémarrez mariadb.
> 
> ```shell
> systemctl restart mariadb
> ```

</TabItem>
</Tabs>

> En plus des directives ci-dessus, il est fortement recommandé d'adapter la configuration de la base de données avec les paramètres suivants :
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

> N'oubliez pas de redémarrer MariaDB après modification de la configuration.

</TabItem>
</Tabs>

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
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Exécutez la commande suivante en tant que `root` :

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

Après avoir enregistré le fichier, redémarrez le service PHP-FPM :

```shell
systemctl restart php-fpm
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

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
echo "date.timezone = Europe/Paris" >> /etc/php/8.1/mods-available/centreon.ini
```

> Celui-ci a été défini durant le processus d'installation en récupérant le fuseau horaire configuré sur le
> système d'exploitation.

Après avoir enregistré le fichier, redémarrez le service PHP-FPM :

```shell
systemctl restart php8.1-fpm
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
systemctl enable crond
systemctl start crond
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
systemctl enable crond
systemctl start crond
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
systemctl enable php8.1-fpm apache2 centreon cbd centengine gorgoned centreontrapd snmpd snmptrapd
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
Si vous utilisez une base de données locale, exécutez la commande suivante sur le serveur central :

```shell
mysql_secure_installation
```

* Répondez **oui** à toutes les questions, sauf à "Disallow root login remotely ?".
* Il est obligatoire de définir un mot de passe pour l'utilisateur **root** de la base de données. Ce mot de passe vous sera demandé pendant l'[installation web](../web-and-post-installation.md).

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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl start httpd
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
systemctl start apache2
```

</TabItem>
</Tabs>

2. Pour terminer l'installation, suivez la procédure
d'[installation web](../web-and-post-installation.md#web-installation).
