---
id: introduction
title: Introduction à la migration
description: "Quand migrer Centreon vers un nouveau serveur ou un OS supporté plutôt que de le mettre à jour, et quelle procédure de migration choisir selon votre OS."
---

## Qu'est-ce qu'une migration ?

Les procédures de migration s'appliquent dans le cas où vous souhaitez installer votre Centreon sur un autre serveur (typiquement, pour passer d'un OS qui n'est plus supporté à un [OS supporté](../installation/compatibility.md#système-dexploitation)). Il est alors nécessaire d'installer un nouvel OS et un nouveau Centreon, puis de migrer les anciennes données vers la nouvelle plateforme. Si votre version n'est plus supportée, vous devrez monter de version de Centreon en même temps.

## Migrer vers Centreon 27.10

Pour passer d'une ancienne version de Centreon à Centreon 27.10, votre plateforme doit fonctionner sur un système d'exploitation supporté. La procédure à suivre dépend de l'OS de votre plateforme actuelle :

* Si votre plateforme actuelle fonctionne sous EL8 : EL8 n'est plus supporté, vous devez donc migrer vers un nouveau serveur. Suivez la [procédure de migration d'EL vers EL](migrate-from-el-to-el.md) ou la [procédure de migration d'EL vers Debian](migrate-from-el-to-debian.md), selon l'OS choisi pour le nouveau serveur.
* Si votre plateforme actuelle fonctionne sous Debian, suivez la [procédure de migration Debian](migrate-from-debian-to-debian.md).
* Si votre plateforme actuelle fonctionne sous EL9, suivez la [procédure de montée de version](../upgrade/introduction.md) correspondant à votre version.

## Cas particuliers

* Si vous utilisez la haute disponibilité (HA) sur votre plateforme, contactez votre représentant commercial Centreon pour discuter des scénarios de migration possibles.
* Si vous souhaitez migrer depuis une version très ancienne de Centreon (par exemple, Centreon 3.4), [contactez le support](https://support.centreon.com/).
