---
id: grafana
title: Plugin Centreon pour Grafana
---

Le plugin Centreon pour Grafana permet de visualiser dans Grafana des données issues de Centreon. Si vous utilisez Grafana pour récupérer des données d'autres platformes de supervision, vous pourrez ainsi mettre en parallèle les données issues de Centreon avec celles-ci.

## Prérequis

Pour pouvoir utiliser le plugin Centreon pour Grafana, vous devez avoir une licence [MBI](../reporting/introduction.md) valide et le module doit être installé.

## Données disponibles

Une data source Centreon vous permet de visualiser des données de performance issues de Centreon dans vos tableaux de bord Grafana.
Pour sélectionner les données de performance à afficher, vous pouvez combiner des filtres sur divers types de données disponibles sur votre plateforme Centreon. Vous pouvez afficher des métriques, des métriques virtuelles et des métaservices selon les données suivantes :

- Hosts
- Host groups
- Service Groups
- Services
- Business Activities (si BAM est installé et que vous avez une licence valide)
- Anomaly Detection (si le module est installé et que vous avez une licence valide)

Les données de performance sont disponibles, mais pas des données telles que les statuts des services ou des hôtes, les acquittements ou les downtimes.

## Où obtenir le plugin?

Le plugin Centreon pour Grafana est disponible sur [la page de téléchargement de Centreon](https://download.centreon.com/).

## Comparer des données dans un graphique

Utiliser le plugin Centreon pour Grafana permet d'avoir accès à toutes vos données de performance dans Grafana et de pouvoir filtrer selon des groupements de données spécifiques. Par exemple, dans un même graphique, vous pouvez comparer l'évolution d'une métrique commune à différents hôtes ou aux divers hôtes d'un groupe d'hôtes donné.

![image](../assets/metrology/grafana_compare.png)

Vous pouvez utiliser le caractère joker ***** pour filtrer sur plusieurs hôtes en même temps. Utiliser des [variables](https://grafana.com/docs/grafana/latest/variables/) au sein des filtres permet de créer des contextes dynamiques.

## Filtrer avec des variables

Un même tableau de bord Grafana peut contenir divers panneaux. Chaque panneau peut afficher des données provenant d'une source spécifique. Ainsi, vous pouvez comparer des données concernant le même hôte, mais provenant de différentes sources, par exemple, si vous supervisez des données différentes sur un même équipement avec divers outils.

Utilisez des [variables](https://grafana.com/docs/grafana/latest/variables/) pour sélectionner une liste de ressources correspondant à des filtres (par exemple tous les hôtes qui correspondent au groupe d'hôtes **Linux**). Dans le tableau de bord, des filtres vous proposeront automatiquement les variables correspondantes.

![image](../assets/metrology/grafana_variables.png)
