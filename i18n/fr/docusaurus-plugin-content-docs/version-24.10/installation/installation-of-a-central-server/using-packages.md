---
id: using-packages
title: À partir des paquets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DatabaseRepository from '../_database-repository.mdx';
import DatabaseLocalInstall from '../_database-local-install.mdx';
import DatabaseRemoteInstall from '../_database-remote-install.mdx';
import DatabaseEnableRestart from '../_database-enable-restart.mdx';

Centreon fournit des paquets RPM et DEB pour ses produits via la version Centreon Open Source disponible gratuitement dans notre dépôt.

Ces paquets peuvent être installés sur Alma/RHEL/Oracle Linux 8 et 9 et sur Debian 11 et 12.

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
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

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
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

SELinux n'est pas installé sur Debian 11 et 12, continuez.

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
```

S'il s'agit d'une instance Cloud RHEL, vous devrez exécuter la commande suivante :

```shell
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
```

S'il s'agit d'une instance Cloud RHEL, vous devrez exécuter la commande suivante :

```shell
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
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

#### Installer les dépendances

Installez les dépendances suivantes :

```shell
apt update && apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2 curl
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

#### Dépôt de base de données

<DatabaseRepository />

#### Dépôt Centreon

Pour installer le logiciel Centreon, vous devez d'abord installer le dépôt Centreon.

Installez le dépôt Centreon à l'aide de la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/24.04/el8/centreon-24.04.repo
dnf clean all --enablerepo=*
dnf update
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/24.04/el9/centreon-24.04.repo
dnf clean all --enablerepo=*
dnf update
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
echo "deb https://packages.centreon.com/apt-standard-24.04-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
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
    <DatabaseLocalInstall />
  </TabItem>
  <TabItem value="Avec une base de données déportée" label="Avec une base de données déportée">
    <DatabaseRemoteInstall />
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
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

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
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
systemctl enable php8.1-fpm apache2 centreon cbd centengine gorgoned centreontrapd snmpd snmptrapd
```

</TabItem>
</Tabs>

Exécutez ensuite la commande suivante (sur le serveur central si vous utilisez une base de données locale, ou sur votre serveur de base de données distant) :

<DatabaseEnableRestart />

### Sécuriser la base de données

Il est obligatoire de sécuriser l'accès root de la base de données avant d'installer Centreon.
Si vous utilisez une base de données locale, exécutez la commande suivante sur le serveur central :

<Tabs groupId="sync">
<TabItem value="MariaDB" label="MariaDB"> 

```shell
mariadb-secure-installation
```

</TabItem>
<TabItem value="MySQL" label="MySQL"> 

```shell
mysql_secure_installation
```

</TabItem>
</Tabs>

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
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
systemctl start apache2
```

</TabItem>
</Tabs>

2. Pour terminer l'installation, suivez la procédure
d'[installation web](../web-and-post-installation.md#web-installation).
