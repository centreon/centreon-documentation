---
id: using-packages
title: A partir des paquets
---

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

### Installer le dépôt Centreon

Afin d’installer les logiciels Centreon à partir des dépôts, vous devez au
préalable installer le fichier lié au dépôt.

Exécutez la commande suivante à partir d’un utilisateur possédant les droits
suffisants :

```shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

## Installation

Exécutez la commande :

```shell
yum install -y centreon-poller-centreon-engine
```

Pour activer le démarrage automatique des services au démarrage du serveur,
exécuter la commande suivant :

```shell
systemctl enable centengine centreontrapd
```

## Ajouter le Poller à la configuration

Rendez-vous au chapitre [Ajouter un Poller à la configuration](../../monitoring/monitoring-servers/add-a-poller-to-configuration.html).
