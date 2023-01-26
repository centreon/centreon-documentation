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
mais le travail est plus complexe. De plus l'installation ne sera supportée que par
la communauté.

Avant toute installation

1.  Veillez à bien suivre les [pré-requis
    d'installation](prerequisites.md) et de dimensionnement
    (ressources CPU, mémoire, disques, partitionnement, etc...)
2.  Prenez également soin de bien choisir le [type
    d'architecture](architectures.md) qu'il convient d'utiliser pour vos besoins.
3.  [Téléchargez Centreon](https://download.centreon.com/)
4.  Enfin, vous pourrez procéder à l'installation de la plate-forme.

Pour tester rapidement Centreon à partir d'un serveur CentOS / Oracle Linux / RHEL
en version 8, vous pouvez exécuter la commande suivante en **root** :

``` shell
curl -L https://raw.githubusercontent.com/centreon/centreon/21.10.x/centreon/unattended.sh | sh
```
  
Le script installera un serveur central avec la version 21.10, depuis le dépôt stable, avec une sortie minimale sur votre terminal.

En cas de problèmes à l'exécution du script, exécutez-le à nouveau en utilisant la commande suivante :

```shell
sh -x unattended.sh install -t central -v 21.10 -r stable -l DEBUG  2>&1 |tee -a /tmp/unattended$(date +"%m-%d-%Y-%H%M%S").log
```

Vous obtiendrez un fichier de log complet avec toutes les erreurs dans votre répertoire tmp, fichier nommé unattended(date).log.

Une fois le script exécuté, il vous suffit de suivre les étapes de l'[installation web](web-and-post-installation.md).
