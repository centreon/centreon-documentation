---
id: introduction
title: Introduction à la montée de version
description: "Passez Centreon à une nouvelle version majeure : vérifiez que votre OS est supporté, sauvegardez-la et mettez à jour les dépôts BAM, MAP, MBI."
---

## Qu'est-ce qu'une montée de version ?

Monter de version votre plateforme de supervision Centreon consiste à passer d'une version majeure à une autre (par exemple, de 23.10 à 26.10), tout en conservant le même système d'exploitation.

## Monter de version vers Centreon 27.10

Vous ne pouvez monter votre plateforme Centreon en version 27.10 que si votre OS actuel est EL9. [Les autres OS ne sont plus supportés](./upgrade-matrix.mdx) : vous devez passer à un [OS supporté](../installation/compatibility.md#système-dexploitation) en suivant une [procédure de migration](../migrate/introduction.md).

Avant de monter Centreon de version, pensez à réaliser une sauvegarde de votre plateforme.

> Utilisateurs de la Business edition : MAP Legacy n'est plus disponible dans Centreon 26.10. Si vous utilisez toujours MAP Legacy, vous devez migrer vers MAP. Consultez la page [Fin de vie de MAP Legacy](https://docs.centreon.com/docs/24.10/graph-views/map-legacy-eol/).

> Si vous utilisez au moins un des modules BAM, MAP ou MBI, vous devez installer
> leur nouveau dépôt afin d'éviter les problèmes de dépendances.
> Consultez [cette page](../reporting/upgrade.md#étape-1--montée-de-version-du-paquet).
