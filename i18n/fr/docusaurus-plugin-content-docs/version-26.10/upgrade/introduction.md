---
id: introduction
title: Introduction à la montée de version
description: "Introduction à la montée de version de Centreon entre versions majeures"
---

Ce chapitre décrit comment monter de version votre plateforme de supervision Centreon, c'est-à-dire passer d'une version majeure à une autre (par exemple, de 23.10 à 26.10).

> Attention, [certains OS ne sont plus supportés](./upgrade-matrix.mdx) : passez à un [OS supporté](../installation/compatibility.md#système-dexploitation) en suivant une [procédure de migration](../migrate/introduction.md).

> Utilisateurs de la Business edition : MAP Legacy n'est plus disponible dans Centreon 26.10. Si vous utilisez toujours MAP Legacy, vous devez migrer vers MAP. Consultez la page [Fin de vie de MAP Legacy](https://docs.centreon.com/docs/24.10/graph-views/map-legacy-eol/).

Avant de monter Centreon de version, pensez à réaliser une sauvegarde de votre plateforme.

> Si vous utilisez au moins un des modules BAM, MAP ou MBI, vous devez installer
> leur nouveau dépôt afin d'éviter les problèmes de dépendances.
> Consultez [cette page](../reporting/upgrade.md#étape-1--montée-de-version-du-paquet).

> Si vous souhaitez changer l'OS du serveur hôte, suivez la [procédure de migration](../migrate/introduction.md). (Si vous souhaitez migrer une plateforme qui utilise **Centreon Poller Display 1.6.x**, consultez la
> [procédure de migration](../migrate/poller-display-to-remote-server.md) correspondante.)
