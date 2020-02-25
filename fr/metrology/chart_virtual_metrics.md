---
id: chart-virtual-metrics
title: Métriques virtuelles
---

## Definition

Les métriques virtuelles sont l'affichage de courbes résultant du traitement / agrégation de données issues d'un jeu de
données. Le jeu de données correspond aux différentes valeurs des courbes sur la période de présentation du graphique.
La création de métriques virtuelles repose sur le langage RPN (Reverse Polish Notation).

Deux types de jeu de données sont disponibles :

* CDEF : Cette commande crée un nouvel ensemble de points à partir d'une ou plusieurs séries de données. L'agrégation est
  réalisée sur chaque point (données). 
* VDEF : Le résultat de chaque agrégation est une valeur et une composante temporelle. Ce résultant peut également être
  utilisé dans les divers éléments de graphique et d'impression. 

### CDEF vs VDEF

Le type CDEF travaille sur un ensemble de points (tableau de données). Le résultat du traitement (exemple : multiplication
par 8 pour convertir des bits en octets) sera un ensemble de point. Le type VDEF permet d'extraire le maximum d'un ensemble
de point.

> Pour plus d'informations sur la notation de type RPN, référencez-vous à la
> [documentation officielle RRD](http://oss.oetiker.ch/rrdtool/tut/rpntutorial.en.html)

## Configuration

Se rendre dans le menu **Monitoring \> Performances \> Virtual Metrics**

![image](assets/metrology/02addvmetric.png)

* Le champ **Metric name** définit le nom de la métrique.
* La liste **Host/Service Data Source** permet de définir le service depuis lequel exploiter les métriques.
* Le champ **DEF Type** définit le type de jeu de données utilisé pour calculer la courbe virtuelle.
* Le champ **RPN (Reverse Polish Notation) Function**  définit la formule permettant de calculer la métrique virtuelle. 

> Il n'est pas possible d'ajouter ensemble les métriques de différents services. Cependant, il est possible d'ajouter
> des métriques virtuelles pour le calcul d'une nouvelle métrique.

* Le champ **Metric Unit** définit l'unité de la métrique.
* Le champ **Warning threshold** définit le seuil d'alerte à afficher dans le graphique.
* Le champ **Critical threshold** définit le seuil critique à afficher dans le graphique.
* Si la case *Hidden Graph and Legend** est cochée, alors la courbe et la légende sont cachées.
* Le champ **Comment** permet de commenter la métrique.

## Exemple

Configuration :

![image](assets/metrology/02virtualmetric_conf.png)

Résultat :

![image](assets/metrology/02virtualmetric_example.png)
