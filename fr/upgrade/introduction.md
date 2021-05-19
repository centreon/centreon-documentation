---
id: introduction
title: Introduction à la montée de version
---

Ce chapitre décrit le processus de montée de version d'une plate-forme Centreon.

La procédure dépend de la méthode d'installation de votre plate-forme Centreon.
Sélectionner **Mise à jour RPM** si vous avez installé Centreon à partir de
l'ISO ou des RPMS, sinon sélectionner **A partir des sources**. Avant de mettre
à jour réaliser une sauvegarde.

> Si vous utilisez au moins un des modules BAM, MAP ou MBI, vous devez mettre 
> en place leur nouveau dépôt afin d'éviter les problèmes de dépendances.
> Voir [cette page](../reporting/upgrade.html#monter-de-version-du-paquet)
> qui vous indique comment le récupérer.

> En cas de migration d'une plate-forme disposant du module **Centreon Poller
> Display 1.6.x**, référez-vous à la
> [procédure de migration](../migrate/poller-display-to-remote-server.html).

> Le processus de mise à jour ne peut démarrer qu'à partir des versions **2.8.0**
> et ultérieures. Si vous avez une version précédente, veuillez d'abord mettre à
> jour vers la dernière version *2.8.x*.
