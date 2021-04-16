---
id: using-packages
title: A partir des paquets
---

Centreon fournit des RPM pour ses produits au travers de la solution
Centreon Open Sources disponible gratuitement sur notre dépôt.

Ces paquets ont été testés avec succès sur les environnements CentOS
en version 7 et 8.

> Cependant, suite au changement de stratégie effectué par Red Hat, nous pensons
> qu'il est préférable de ne pas utiliser CentOS 8 en production. Ces paquets
> pour CentOS 8 sont compatible avec RHEL et Oracle Linux en version 8.

## Étapes pré-installation

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

> Vous pouvez trouver des instructions [ici](../../administration/secure-platform.html#enable-firewalld)
> pour configurer le pare-feu.

### Installer les dépôts

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL 8-->
#### Redhat CodeReady Builder repository

To install Centreon you will need to enable the official CodeReady Builder
repository supported by Redhat.

Enable the CodeReady Builder repository using these commands:

```shell
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```
<!--CentOS 8-->
#### Dépôt PowerTools de Red Hat

Afin d'installer les logiciels Centreon, le dépôt PowerTools de Red Hat doit être
activé.

Exécutez les commandes suivantes :

```shell
dnf -y install dnf-plugins-core epel-release
dnf config-manager --set-enabled powertools
```
<!--Oracle Linux 8-->
#### Dépôt CodeReady Builder de Oracle

Afin d'installer les logiciels Centreon, le dépôt CodeReady Builder de Oracle
doit être activé.

Exécutez les commandes suivantes :

```shell
dnf -y install dnf-plugins-core oracle-epel-release-el8
dnf config-manager --set-enabled ol8_codeready_builder
```
<!--CentOS 7-->
#### Dépôt Redhat Software Collections

Pour installer Centreon, vous devrez configurer le référentiel officiel des collections
de logiciels pris en charge par Redhat.

Installez le référentiel de collections de logiciels à l'aide de cette commande :

```shell
yum install -y centos-release-scl
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### Dépôt Centreon

Afin d’installer les logiciels Centreon à partir des dépôts, vous devez au
préalable installer le fichier lié au dépôt.

Exécutez la commande suivante à partir d’un utilisateur possédant les droits
suffisants :

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y http://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-4.el8.noarch.rpm
```
<!--CentOS 7-->
```shell
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-4.el7.centos.noarch.rpm
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Installation

Pour installer le moteur de supervision, exécutez la commande :

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y centreon-poller-centreon-engine
```
<!--CentOS 7-->
```shell
yum install -y centreon-poller-centreon-engine
```
<!--END_DOCUSAURUS_CODE_TABS-->

Pour activer le démarrage automatique des services de supervision au démarrage
du serveur, exécuter la commande suivant :

```shell
systemctl enable centengine centreontrapd snmptrapd
```

Les services de supervision passive peuvent être démarrés :

```shell
systemctl start centreontrapd snmptrapd
```

> Le service de supervision active sera démarré suite à la génération de sa
> configuration.

## Enregistrer le serveur

Pour l'enregistrer sur le serveur Centreon Central ou un serveur distant, exécutez la commande suivante :

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t poller -h <IP_TARGET_NODE> -n <POLLER_NAME>
```

Exemple:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t poller -h 192.168.0.1 -n poller-1
```
<!--CentOS 7-->
``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t poller -h <IP_TARGET_NODE> -n <POLLER_NAME>
```

Exemple:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t poller -h 192.168.0.1 -n poller-1
```
<!--END_DOCUSAURUS_CODE_TABS-->

> Remplacer **<IP_TARGET_NODE>** par l'adresse IP du serveur Centreon Central ou du Remote Server vue par votre
> collecteur.

> Le compte **<API_ACCOUNT>** doit avoir accès à l'API de configuration. Vous pouvez utiliser le compte **admin**.

> Vous pouvez changer le port et la méthode HTTP, le format de l'option **-h** est le suivant :
> HTTPS://<IP_TARGET_NODE>:PORT

Suivre ensuite les instructions

1. Saisir le mot de passe :

    ``` shell
    192.168.0.1: please enter your password:
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
    
    Do you want to register this server with those informations ? (y/n)y
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

> L'URL d'accès n'est pas complète ou invalide. Utilisez l'option **-root** pour définir le chemin de l'URL de l'API.
> Par exemple : **--root monitoring**.

``` shell
2020-10-20T10:42:23+02:00 [ERROR]: No route found for “POST /centreon/api/latest/platform/topology”
```

> La version Centreon du serveur distant est invalide. Elle doit être supérieur ou égale à 21.04.

## Ajouter le Poller à la configuration

Rendez-vous au chapitre [Ajouter un Poller à la configuration](../../monitoring/monitoring-servers/add-a-poller-to-configuration.html).

## Sécurisez votre plateforme

N'oubliez pas de sécuriser votre plateforme Centreon en suivant nos
[recommandations](../../administration/secure-platform.html)
