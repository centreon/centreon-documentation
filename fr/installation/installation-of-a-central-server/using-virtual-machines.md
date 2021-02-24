---
id: using-virtual-machines
title: A partir des VMs
---

> Si vous souhaitez installer Centreon sur une distribution CentOS / Oracle Linux
> / RHEL en version 8, vous devez suivre la procédure
> [à partir des paquets RPM](./using-packages.html)

Deux machines virtuelles pré-configurées sont disponibles sur le [site de
téléchargement](https://download.centreon.com) de Centreon.

Ces machines virtuelles sont disponibles au format OVA (VMware) et OVF (VirtualBox).

> Les OVA/OVF peuvent ne pas contenir de configuration de carte réseau. Il sera nécessaire d'ajouter une carte réseau
avant de démarrer le serveur.

## Import

Il est dans un premier temps nécessaire d'importer le ficher OVF. Pour cela, sur le client VSphere allez dans le menu
**File > Deploy OVF Template** et sélectionnez le ficher précedemment téléchargé.
Il est alors nécessaire de suivre les différents menus. Les différents choix sont trés liés à l'infrastructure VMWare
en place, il est difficile d'être rééllement spécifique dans cette documentation.
Il est important de noter que les bonnes pratiques sont de choisir le mode **Thin Provision** qui vous permettra
d'économiser de l'espace disque sur vos datastores.

## Connexion

La machine est configurée avec des comptes par défaut.

Vous pourrez donc vous connecter à l'interface web avec le compte : **admin/centreon**.
Vous pourez aussi vous connecter en SSH avec le compte **root/centreon**.
Le mot de passe de de l'utilisateur **root** de la base de données n'est pas initialisé.

> Pour des raisons de sécurité, il est recommandé de changer tous ces mots de passe aprés l'installation

A la première connexion, un message indique les opérations à réaliser. Suivez celles-ci, **les opérations 4 et 5 sont
obligatoires**.

> Pour supprimer ce message, supprimez le fichier **/etc/profile.d/centreon.sh**.

## Premiers pas

Rendez-vous dans le chapitre [Premiers pas](../../getting-started/installation-first-steps.html)
pour mettre en place votre première supervision.
