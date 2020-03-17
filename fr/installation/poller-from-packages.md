---
id: poller-from-packages
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

aramétrer le pare-feu système ou désactiver ce dernier. Pour désactiver ce dernier exécuter les commandes suivantes :

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
yum install centreon-poller-centreon-engine
```

## Echange de clés SSH

La communication entre le serveur central et un collecteur se fait via SSH.

Vous devez échanger les clés SSH entre les serveurs.

Si vous n’avez pas de clé SSH privée sur le serveur central pour l’utilisateur **centreon** :

``` shell
su - centreon
ssh-keygen -t rsa
```

> Appuyez sur la touche *entrée* quand il vous sera demandé de saisir un fichier pour enregistrer la clé. **Laissez le
> mot de passe vide**. Vous recevrez une empreinte digitale de clé et une image randomart.

Générez un mot de passe sur le nouveau serveur pour l'utilisateur **centreon** :

``` shell
passwd centreon
```

Vous devez copier cette clé sur le nouveau serveur :

``` shell
su - centreon
ssh-copy-id -i .ssh/id_rsa.pub centreon@IP_NEW_POLLER
```

## Configurer un nouveau collecteur dans Centreon

Rendez-vous dans le menu **Configuration > Pollers** et cliquez sur **Add server with wizard** pour accéder à
l'assistant de configuration.

Sélectionnez **Add a Centreon Poller** et cliquez sur **Next** :

![image](assets/installation/poller/wizard_add_poller_1.png)

Saisissez le nom, l'adresse IP du collecteur et celle du serveur Centreon central,
cliquez sur **Next** :

![image](assets/installation/poller/wizard_add_poller_2.png)

> L'adresse IP du collecteur est l'adresse IP ou le FQNS pour accéder au collecteur depuis le serveur Centreon Central.
>
> L'adresse IP du collecteur est l'adresse IP ou le FQNS pour accéder au collecteur serveur Centreon Central vers le collecteur.

Si vous souhaitez lier ce collecteur au serveur Centreon Central, cliquez sur **Apply** :

![image](assets/installation/poller/wizard_add_poller_3.png)

Sinon, si vous souhaitez lier ce collecteur à un Remote Server, sélectionnez le Remote Server dans la liste et cliquez
sur **Apply** :

Patientez quelques secondes, l'assistant va configurer votre nouveau serveur.

Le collecteur est maintenant configuré :

![image](assets/installation/poller/wizard_add_poller_5.png)

## Premiers pas

Rendez-vous dans le chapitre [Premiers pas](../tutorials/tutorials) pour mettre en place votre première supervision.
