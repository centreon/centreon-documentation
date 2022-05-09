---
id: introduction
title: Introduction à la montée de version
---

Ce chapitre décrit le processus de montée de version (upgrade) d'une plate-forme Centreon, c'est-à-dire le passage d'une version majeure à une autre (par exemple, 21.10 à 22.04).

La procédure dépend de la méthode d'installation de votre plate-forme Centreon.
Faites une **Mise à jour RPM** si vous avez installé Centreon à partir de
l'ISO ou des RPMS, et utilisez les fichiers source si vous avez installé Centreon à partir des sources. Avant de mettre
à jour, réalisez une sauvegarde.

> Si vous utilisez au moins un des modules BAM, MAP ou MBI, vous devez mettre 
> en place leur nouveau dépôt afin d'éviter les problèmes de dépendances.
> Voir [cette page](../reporting/upgrade.md#monter-de-version-du-paquet)
> qui vous indique comment le récupérer.

> Si vous souhaitez changer l'OS du serveur hôte, suivez la [procédure de migration](../migrate/introduction.md). (Idem en cas de migration d'une plate-forme disposant du module **[Centreon Poller
> Display 1.6.x](../migrate/poller-display-to-remote-server.md)**).

> Le processus de mise à jour ne peut démarrer qu'à partir des versions **2.8.0**
> et ultérieures. Si vous avez une version précédente, veuillez d'abord mettre à
> jour vers la dernière version 2.8.x.
