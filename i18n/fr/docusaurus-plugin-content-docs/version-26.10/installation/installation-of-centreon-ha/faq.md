---
id: ha-faq
title: FAQ générale Centreon HA
description: "Questions fréquentes sur Centreon HA"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Quand ai-je besoin de HA ?

La HA est utile lorsqu'il est essentiel que votre plateforme Centreon fonctionne sans interruption - parce que les ressources que vous supervisez doivent être fonctionnelles à tout moment.

Centreon HA est un cluster actif-passif. Il n'effectue pas d'équilibrage de charge (load balancing).

## Puis-je mettre en place de la HA moi-même ?

Votre HA doit être installée par Centreon Professional Services.

## Ai-je besoin d'une licence pour Centreon HA ?

Les extensions nécessitent des fichiers de licence spécifiques pour fonctionner sans problème sur les deux nœuds centraux. Si vous avez une édition IT ou Business, veuillez contacter votre représentant commercial Centreon ou votre Technical Account Manager.

## Qu'est-ce qui est supporté, et qu'est-ce qui ne l'est pas ?

Avec Centreon 25.10, les clusters HA peuvent être installés sur [tous les OS supportés](../compatibility.md#système-dexploitation), avec MariaDB comme SGBD.

Le support pour les configurations HA n'est pas inclus dans le support standard de Centreon. Si vous souhaitez un support pour votre système HA, votre configuration HA doit être installée par Centreon Professional Services, et vous devez acheter un pack de support HA spécifique.

## Quels sont les modules sur lesquels je peux configurer la HA ?

La HA peut être configurée sur :

* Vos serveurs centraux (qui incluent automatiquement BAM).
<!--* Un serveur Centreon MAP : veuillez contacter votre représentant commercial Centreon si vous souhaitez implémenter cette solution.-->
* Il n'est pas nécessaire de mettre en place une redondance sur un serveur MBI car toutes les données de MBI sont déjà présentes dans la base de données connectée au serveur central.

La HA n'est pas supportée sur les collecteurs.
