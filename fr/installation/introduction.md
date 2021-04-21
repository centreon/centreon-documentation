---
id: introduction
title: Introduction
---

Ce chapitre décrit les différentes étapes de mise en place d'une plate-forme de
supervision basée sur Centreon.

La plate-forme de supervision peut-être installée de plusieurs manières. 
Cependant, **nous vous recommandons vivement d'utiliser Centreon ISO ou les dépôt
Centreon (paquets), pour installer votre plate-forme**. Profitez ainsi de nos
travaux d'industrialisation de l'installation et de la mise à jour de
l'environnement. Profitez également des optimisations installées en standard par
le système.

L'installation de Centreon peut être effectuée à partir des sources (tar.gz)
mais le travail est plus complexe. De plus l'installeur ne sera supporté que par
la communauté.

Avant toute installation

1.  Veillez à bien suivre les [pré-requis
    d'installation](prerequisites.html) et de dimensionnement
    (ressources CPU, mémoire, disques, partitionnement, etc...)
2.  Prenez également soin de bien choisir le [type
    d'architecture](architectures.html) qu'il convient d'utiliser pour vos besoins.
3.  [Téléchargez Centreon](https://download.centreon.com/)
4.  Enfin, vous pourrez procéder à l'installation de la plate-forme.

Pour tester rapidement Centreon à partir d'un serveur CentOS / Oracle Linux / RHEL
en version 8, vous pouvez exécuter la commande suivante en **root** :

``` shell
curl -L https://raw.githubusercontent.com/centreon/centreon/master/unattended.sh | sh
```
