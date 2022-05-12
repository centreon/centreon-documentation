---
id: grafana
title: Plugin Centreon pour Grafana
---

Le plugin Centreon pour Grafana permet de visualiser dans Grafana des données issues de Centreon. Si vous utilisez Grafana pour récupérer des données d'autres platformes de supervision, vous pourrez ainsi mettre en parallèle les données issues de Centreon avec celles-ci.

## Prérequis

Pour pouvoir utiliser le plugin Centreon pour Grafana, vous devez avoir une licence [MBI](../reporting/introduction.md) valide et le module doit être installé. 

## Données disponibles

Actuellement, vous pouvez visualiser les données Centreon suivantes dans Grafana :

- Host Groups
- Service Groups
- Hosts
- Services
- Meta-services
- Virtual metrics
- Business Activities (si BAM est installé et que vous avez une licence valide)
- Anomaly Detection (si le module est installé et que vous avez une licence valide)
- Metrics

Les données de performance (métriques) sont disponibles, mais pas des données telles que les statuts des services ou des hôtes, les acquittements ou les downtimes.

## Où obtenir le plugin?

Le plugin Centreon pour Grafana est disponible sur [la page de téléchargement de Centreon](https://download.centreon.com/).

## Comparer des données dans un graphique

Utiliser le plugin Centreon pour Grafana permet d'avoir accès à toutes vos données de performance dans Grafana et de pouvoir filtrer selon des groupements de données spécifiques. Par exemple, dans un même graphique, vous pouvez comparer l'évolution d'une même métrique pour différents hôtes ou pour un groupe d'hôtes donné.

![image](../assets/metrology/grafana_compare.png)

Vous pouvez utiliser des expressions régulières pour filtrer sur plusieurs hôtes en même temps.

## Filtrer tout le tableau de bord avec des variables

Un même tableau de bord Grafana peut contenir divers panneaux. Chaque panneau peut afficher des données provenant d'une source spécifique. Ainsi, vous pouvez comparer des données concernant le même hôte, mais provenant de différentes sources, par exemple, si vous supervisez des données différentes sur un même équipement avec divers outils.

Les [variables](https://grafana.com/docs/grafana/latest/variables/) permettent de créer des listes déroulantes qui filtreront l'ensemble des données du tableau de bord. Par exemple, paramétrez une variable sur les noms des hôtes afin de n'afficher que les données d'un seul hôte à la fois dans le tableau de bord. En utilisant des filtres dans la variable, vous pourrez restreindre le nombre d'hôtes disponibles à la consultation.
 
![image](../assets/metrology/grafana_variables.png)
