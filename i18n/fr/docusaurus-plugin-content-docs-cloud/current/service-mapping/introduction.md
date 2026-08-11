---
id: introduction
title: Introduction à Centreon BAM
description: "Présentation de Centreon Business Activity Monitoring (BAM) et de sa capacité à relier l'activité informatique à la performance des services métier"
---

La fonctionnalité de **Service Mapping** de Centreon se base sur
l'extension nommée **Centreon Business Activity Monitoring (Centreon
BAM)**.

## Qu'est-ce que Centreon BAM ?

Le module **Centreon Business Activity Monitoring** offre la possibilité
de mesurer en temps réel l'activité de la production informatique en
agrégeant les états des différents points de contrôle supervisés avec
**Centreon**. L'utilisateur est alors mieux informé de l'état de santé
global de son SI et à même de prendre les meilleures décisions.

**Centreon BAM** utilise un moteur avancé de calcul des "**Business
Activities**" (BA), à partir d'indicateurs de performance clés (**KPI**)
supervisés par **Centreon**.

Définitions :

  - **BA** - Activité métier
  - **BV** - Vue métier : regroupement de plusieurs activités métier.
  - **KPI** - Indicateur de performance clé : l'indicateur pondéré pris
    en compte dans le calcul de la BA.

> Centreon BAM peut également être utilisé [via son API](https://docs-api.centreon.com/api/centreon-bam/cloud/).

## Configuration d'une activité métier

L'interface de configuration de Centreon BAM vous permet de gérer une
activité métier entière depuis un seul écran :

- **Visualisez toute la structure en un coup d'œil** : l'activité métier
  et tous ses indicateurs sont affichés sous la forme d'une arborescence
  unique, ce qui vous donne une vue d'ensemble de ce qui est supervisé
  sans devoir naviguer d'un écran à l'autre.

  ![image](../assets/service-mapping/bam-config-1.gif)

- **Modifiez chaque nœud dans son contexte** : sélectionnez n'importe
  quel nœud de l'arborescence pour modifier directement sa méthode de
  calcul, ses seuils ou l'héritage des plages de maintenance, sans
  changer de menu.

  ![image](../assets/service-mapping/bam-config-2.gif)

- **Enregistrez toutes vos modifications en une seule fois** : effectuez
  plusieurs modifications dans l'arborescence, puis enregistrez-les
  toutes ensemble plutôt que nœud par nœud.

  ![image](../assets/service-mapping/bam-config-3.gif)
