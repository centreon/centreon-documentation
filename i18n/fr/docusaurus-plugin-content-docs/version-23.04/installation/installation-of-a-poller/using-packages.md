---
id: using-packages
title: À partir des paquets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Centreon fournit des RPM pour ses produits au travers de la solution
Centreon Open Sources disponible gratuitement sur notre dépôt.

Les paquets peuvent être installés sur CentOS 7, Alma/RHEL/Oracle Linux 8 ou Debian 11.

L'ensemble de la procédure d'installation doit être faite en tant qu'utilisateur privilégié.

## Prérequis

Après avoir installé votre serveur, réalisez la mise à jour de votre système
d'exploitation via la commande :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update
```

### Configuration spécifique

Pour utiliser Centreon en français, espagnol ou portugais, installez les paquets correspondants :

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
Disabled
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

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

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

SELinux n'est pas installé sur Debian 11, continuez.

</TabItem>
</Tabs>

### Configurer ou désactiver le pare-feu

Paramétrez le pare-feu système ou désactivez ce dernier. Pour désactiver ce
dernier exécutez les commandes suivantes :

```shell
systemctl stop firewalld
systemctl disable firewalld
```

> Vous pouvez trouver des instructions [ici](../../administration/secure-platform.md#enable-firewalld)
> pour configurer le pare-feu.

### Nom du serveur

Si vous le souhaitez, vous pouvez changer le nom du serveur à l'aide de la commande suivante:
```shell
hostnamectl set-hostname new-server-name
```

Remplacez **new-server-name** par le nom de votre choix. Exemple:
```shell
hostnamectl set-hostname poller1
```

### Installer les dépôts

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
<TabItem value="Alma 8" label="Alma 8">

#### Dépôt PowerTools de Red Hat

Afin d'installer les logiciels Centreon, le dépôt PowerTools de Red Hat doit être
activé.

Exécutez les commandes suivantes :

```shell
dnf -y install dnf-plugins-core epel-release
dnf config-manager --set-enabled powertools
```

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

#### Dépôt Redhat Software Collections

Pour installer Centreon, vous devrez configurer le référentiel officiel des collections
de logiciels pris en charge par Redhat.

Installez le référentiel de collections de logiciels à l'aide de cette commande :

```shell
yum install -y centos-release-scl
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Installez les dépendances suivantes :

```shell
apt update && apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2
```

</TabItem>
</Tabs>

#### Dépôt Centreon

Afin d’installer les logiciels Centreon à partir des dépôts, vous devez au
préalable installer le fichier lié au dépôt.

Exécutez la commande suivante à partir d’un utilisateur possédant les droits
suffisants :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y https://yum.centreon.com/standard/23.04/el8/stable/noarch/RPMS/centreon-release-23.04-1.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y https://yum.centreon.com/standard/23.04/el7/stable/noarch/RPMS/centreon-release-23.04-1.el7.centos.noarch.rpm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Pour installer le dépôt Centreon, exécutez la commande suivante :

```shell
echo "deb https://apt.centreon.com/repository/23.04/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
```

Puis importez la clé du dépôt :

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
```

</TabItem>
</Tabs>

## Étape 2 : Installation

Pour installer le moteur de supervision, exécutez la commande :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y centreon-poller
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y centreon-poller
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update
apt install -y centreon-poller
```

</TabItem>
</Tabs>

Pour activer le démarrage automatique des services de supervision au démarrage
du serveur, exécuter la commande suivant :
```shell
systemctl enable centreon centengine centreontrapd snmptrapd
```

Les services de supervision passive peuvent être démarrés :
```shell
systemctl start centreontrapd snmptrapd
```

Redémarrez Centreon Engine :
```shell
systemctl restart centengine
```

## Étape 3 : Enregistrer le serveur

Pour transformer le serveur en collecteur et l'enregistrer sur le serveur central ou un serveur distant, exécutez la commande suivante sur le futur collecteur :

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t poller -h <IP_TARGET_NODE> -n <POLLER_NAME>
```

Exemple:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t poller -h 192.168.0.1 -n poller-1
```

> Remplacez **<IP_TARGET_NODE>** par l'adresse IP du serveur Central ou du serveur distant auquel vous voulez rattacher le collecteur (adresse IP vue par le
> collecteur).

> Le compte **<API_ACCOUNT>** doit avoir accès à l'API de configuration. Vous pouvez utiliser le compte **admin**.

> Vous pouvez changer le port et la méthode HTTP, le format de l'option **-h** est le suivant :
> `HTTPS://<IP_TARGET_NODE>:PORT`

Suivre ensuite les instructions

1. Saisir le mot de passe :

    ``` shell
    Please enter the password of 192.168.0.1:
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
    name: poller-1
    type: poller
    address: 192.168.0.2
    
    Do you want to register this server with those information? (y/n): y
    ```

Vous recevrez la validation du serveur Centreon central ou du serveur Remote Server :

``` shell
2020-10-16T17:19:37+02:00 [INFO]: The CURRENT NODE 'poller': 'poller-1@192.168.0.2' linked to TARGET NODE: '192.168.0.1' has been added
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

> L'URL d'accès n'est pas complète ou invalide. Utilisez l'option **--root** pour définir le chemin de l'URL de l'API.
> Par exemple : **--root monitoring**.

``` shell
2020-10-20T10:42:23+02:00 [ERROR]: No route found for “POST /centreon/api/latest/platform/topology”
```

> La version Centreon du serveur distant est invalide. Elle doit être supérieure ou égale à 23.04.

## Étape 4 : Ajouter le Poller à la configuration

Rendez-vous au chapitre [Ajouter un Poller à la configuration](../../monitoring/monitoring-servers/add-a-poller-to-configuration.md).

## Étape 5 : Sécuriser votre plateforme

N'oubliez pas de sécuriser votre plateforme Centreon en suivant nos
[recommandations](../../administration/secure-platform.md)