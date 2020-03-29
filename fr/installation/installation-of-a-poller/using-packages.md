---
id: using-packages
title: A partir des paquets
---

## Étapes pré-installation

### Désactiver SELinux

SELinux doit être désactivé. Pour cela vous devez modifier le fichier */etc/selinux/config* et remplacer "enforcing"
par "disabled" comme dans l'exemple suivant :

``` shell
SELINUX=disabled
```

> Après avoir sauvegardé le fichier, veuillez redémarrer votre système d'exploitation pour prendre en compte les changements.

Une vérification rapide permet de confirmer le statut de SELinux:

``` shell
getenforce
```

Vous devriez avoir le résultat suivant :

``` shell
Disabled
```

### Configuration du pare-feu

Paramétrer le pare-feu système ou désactiver ce dernier. Pour désactiver ce dernier exécuter les commandes suivantes :

``` shell
systemctl stop firewalld
systemctl disable firewalld
systemctl status firewalld
```

### Installation du dépôt Centreon

Afin d’installer les logiciels Centreon à partir des dépôts, vous devez au préalable installer le fichier lié au dépôt.
Exécutez la commande suivante à partir d’un utilisateur possédant les droits suffisants :

``` shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

Le dépôt est maintenant installé.

## Installation dun collecteur Centreon

Exécutez la commande :

``` shell
yum install -y centreon-poller-centreon-engine
```

## Ajouter le Poller à la configuration

Rendez-vous au chapitre *[Ajouter un Poller à la configuration](../../monitoring/monitoring-servers/add-a-poller-to-configuration.html)*.
