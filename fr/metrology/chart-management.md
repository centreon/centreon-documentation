---
id: chart-management
title: Gestion des graphiques
---

Centreon permet de générer des graphiques à partir des informations de supervision. Il existe deux types de graphiques :

* Les graphiques de performances permettent de visualiser l'évolution des services de manière intuitive. Exemples :
  niveau de remplissage d'un disque dur, trafic réseau...
* Les graphiques d'historique (ou graphiques des statuts) permettent de visualiser l'évolution des statuts d'un service.

Les graphiques de performances ont toujours comme abscisse une période de temps et comme ordonnée une unité (Volts,
Octets...).
Les graphiques d'historique ont toujours comme abscisse une période de temps, leurs ordonnées ne varient pas. Uniquement
la couleur du graphique permet de visualiser le statut de l'objet :

* <span style="color:green">Green</span> pour le statut OK 
* <span style="color:orange">Orange</span> pour le statut WARNING
* <span style="color:red">Red</span> pour le statut CRITICAL
* <span style="color:grey">Grey</span> pour le statut UNKNOWN

Exemple de graphique de performances :

![image](assets/metrology/01perf_graph.png)

## Graphiques de performances

Il existe plusieurs manières de visualiser les graphiques de performances :

* Visualiser le graphique dans la liste des services, depuis le menu **Monitoring \> Status Details \> Services**, en
  survolant l'icône ![image](assets/common/column-chart.png)
* Visualiser les graphiques depuis la page de détails d'un hôte en cliquant sur l'icône  **View graphs for host**
* Visualiser le graphique depuis la page de détails d'un service
* Depuis le menu **Monitoring \> Performances \> Graphs** pour visualiser un à plusieurs graphiques

## Graphique de statut

Comme pour les graphiques de performances, il existe différentes façons d'accéder au graphique d'historique :

* Depuis la page de détails d'un service
* Depuis le menu **Monitoring \> Performances \> Graphs**, en sélectionnant au préalable un service spécifique

## Visualiser plusieurs graphiques

Pour visualiser l'ensemble des graphiques, se rendre dans le menu **Monitoring \> Performances \> Graphs**.

![image](assets/metrology/01graph_list.png)

Cette page propose plusieurs options de sélection ainsi que des options de filtrage :

* L'option **Chart** permet de sélectionner le graphique que vous souhaitez afficher
* L'option **Period** vous permet de sélectionner une fenêtre de temps prédéfinie pour afficher les données
* Les champs **From** et **To** permettent de sélectionner une fenêtre de temps manuelle pour afficher les données
* L'option **Filter by Host** permet de filtrer la liste **Chart** en ne présentant que les graphiques liés au
  ressources sélectionnées
* L'option **Filter by Hostgroup** permet de filtrer la liste **Chart** en ne présentant que les graphiques liés au
   ressources sélectionnées
* L'option **Filter by Servicegroup** permet de filtrer la liste **Chart** en ne présentant que les graphiques liés à
   les ressources sélectionnées

Plusieurs actions sont possibles sur cette page :

* Actualiser manuellement les données en cliquant sur l'icône ![image](assets/common/refresh.png)
* Actualiser automatiquement les données en cliquant sur l'icône ![image](assets/common/timer-gray.png) et en sélectionnant
  une période prédéfinie
* Pour afficher des graphiques sur 1, 2 ou 3 colonnes en cliquant sur l'icône associée ![image](assets/metrology/columns_selection.png)

Plusieurs actions sont possibles sur chaque graphique :

* **Split chart**: sépare plusieurs courbes d'un graphique en plusieurs graphiques contenant chacun une courbe
* **Display multiple periods**: affiche le graphique sur une période de 1 jour, 1 semaine, 1 mois, 1 an
* Exporter le graphique au format CSV en cliquant sur l'icône ![image](assets/common/csv.png) ou en PNG en cliquant sur
  l'icône ![image](assets/common/png.png)
* Remonter dans le temps en cliquant sur l'icône ![image](assets/metrology/right_arrow.png) ou avancer en cliquant sur
  l'icône ![image](assets/metrology/left_arrow.png)
* Il est également possible de zoomer sur une période en cliquant sur le graphique puis en sélectionnant une fenêtre
  temporelle:

![image](assets/metrology/chart_zoom.gif)
