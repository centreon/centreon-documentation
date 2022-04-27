---
id: introduction
title: Introduction
---

Ce chapitre décrit les différentes étapes de mise en place d'une plateforme de
supervision Centreon.

La plateforme de supervision peut être installée de plusieurs manières.
Cependant, **nous vous recommandons vivement d'utiliser Centreon ISO ou les dépôts
Centreon (paquets), pour installer votre plateforme**. Profitez ainsi de nos
travaux d'industrialisation de l'installation et de la mise à jour de
l'environnement. Profitez également des optimisations installées en standard par
le système.

L'installation de Centreon peut être effectuée à partir des sources (tar.gz)
mais le travail est plus complexe. De plus l'installation ne sera supportée que par
la communauté.

Avant toute installation :

1. Veillez à bien suivre les [prérequis
   d'installation](prerequisites.md) et de dimensionnement
   (ressources CPU, mémoire, disques, partitionnement, etc...)
2. Prenez également soin de bien choisir le [type
   d'architecture](architectures.md) qu'il convient d'utiliser pour vos besoins
3. [Téléchargez Centreon](https://download.centreon.com/)
4. Enfin, vous pourrez procéder à l'installation de la plateforme.

Pour tester rapidement Centreon et installer un serveur central sur AlmaLinux / Oracle Linux / RHEL
en version 8, vous pouvez exécuter la commande suivante en **root** :

``` shell
curl -L https://raw.githubusercontent.com/centreon/centreon/master/unattended.sh | sh
```

Une fois le script exécuté, il vous suffit de suivre les étapes de l'[installation web](web-and-post-installation.md).
