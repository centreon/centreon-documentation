---
id: metrology
title: Métrologie
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

## Gestion des graphiques

### Graphiques de performances

Il existe plusieurs manières de visualiser les graphiques de performances :

* Visualiser le graphique dans la liste des services, depuis le menu **Monitoring \> Status Details \> Services**, en
  survolant l'icône ![image](assets/common/column-chart.png)
* Visualiser les graphiques depuis la page de détails d'un hôte en cliquant sur l'icône  **View graphs for host**
* Visualiser le graphique depuis la page de détails d'un service
* Depuis le menu **Monitoring \> Performances \> Graphs** pour visualiser un à plusieurs graphiques

### Graphique de statut

Comme pour les graphiques de performances, il existe différentes façons d'accéder au graphique d'historique :

* Depuis la page de détails d'un service
* Depuis le menu **Monitoring \> Performances \> Graphs**, en sélectionnant au préalable un service spécifique

### Visualiser plusieurs graphiques

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

## Modèle de graphique

### Définition

Les modèles de graphiques sont des modèles qui permettent de mettre en forme les graphiques. Les modèles de graphiques
permettent de configurer plusieurs paramètres de présentation dont la mesure de l'axe des ordonnées, la largeur et la
hauteur du graphique ou encore les différentes couleurs...

### Configuration

Se rendre dans le menu **Monitoring \> Performances \> Templates**

![image](assets/metrology/02addgraph_template.png)

* Le champ **Template name** permet de définir un nom pour le modèle de graphe
* Le champ **Vertical label** contient la légende pour l'axe des ordonnées (type de données mesurées)
* Les champs **Width** et **Height** sont exprimées en pixels et expriment respectivement la largeur et la hauteur du modèle
* Le champ **Lower limit** définit la limite minimale de l'axe des ordonnées
* Le champ **Upper limit** définit la limite maximale de l'axe des ordonnées
* La liste **Base** définit la base de calcul pour les données lors de la mise à l'échelle des ordonnées du graphique.
  Utiliser 1024 pour des mesures comme l'octet (1 Ko = 1024 octets) et 1000 pour des mesures comme le volt (1 kV = 1000 Volts)
* La case **Scale Graph Values** activer l'échelle automatique du graphique et contourner les options précédentes
* Le champ **Default Centreon Graph Template** permet d'afficher tous les graphiques sans modèle prédéfini en utilisant ces valeurs

> Si la case **size to max** est cochée, le graphique sera automatiquement mis à l'échelle de la valeur maximale des
> ordonnées présentées sur la période donnée.

### Utiliser un modèle de graphe

Ajouter un modèlede graphe lors de l'édition d'un service (ou d'un modèle de service) en accédant à l'onglet
**Service Extended Info** dans le formulaire de configuration :

![image](assets/metrology/02linkgraph_template.png)

## Courbes

### Définition

Une courbe est la représentation de l'évolution des données de performances (métriques issues de la collecte) visible
via les graphiques de performance. Un graphique peut contenir plusieurs courbes. Il est possible de personnaliser les
courbes en modifiant certains paramètres : l'allure des courbes, la position des courbes sur le graphique, la légende
ainsi que les informations complémentaires (moyenne, valeur totale...).

### Configuration

Se rendre dans le menu **Monitoring \> Performances \> Curves**

![image](assets/metrology/02addcurve.png)

* Le champ **Template Name** définit le nom du modèle
* Le champ **Hosts/Service Data Source** définit le service pour lequel sera utilisée cette courbe. Si ces informations
  ne sont pas renseignées, cette définition de courbe s'appliquera à l'ensemble des services dans lesquels cette métrique
  apparait
* Le champ **Data Source Name** permet de sélectionner la métrique qui utilisera cette définition. La liste
  **List of known metrics** permet de choisir les métriques déjà existantes utilisées par les services
* Si la case **Stack** est cochée, cette courbe s'empilera ('stacking') sur les autres (utile pour voir la proportion
  d'une métrique par rapport à une autre).
* Si la case **Stack** est cochée, la liste **Order** permet de définir l'ordre d'affichage/empilage de la courbe (plus
  le nombre est petit, plus il sera proche de l'abscisse).
* Si la case **Invert** est cochée, la courbe est inversée (opposée de la valeur absolue) par rapport à l'axe des ordonnées
  (utile pour voir la proportion du trafic entrant par rapport au trafic sortant).
* La liste **Thickness** exprime l'épaisseur de la ligne du trait de la courbe (exprimée en pixels).
* Le champ **Line color** définit la couleur de la courbe.
* Le champ **Area color** concerne la couleur de remplissage de la courbe si l'option **Filling** est cochée, (voir ci-dessous).
   Elle contient 3 champs qui correspondent respectivement aux couleurs du statut OK, WARNING et CRITICAL.
* Le champ **Transparency** définit le niveau de transparence de la couleur du contour.
* Si la case **Filling** est cochée, alors toute la courbe est remplie avec la couleur de l'aire définie en fonction du statut.


Les attributs ci-dessous concernent les informations situées en dessous du graphique :

* Le champ **Legend** définit la légende de la courbe.
* Si la case **Display only the legend** est cochée, la courbe sera masquée tandis que la légende sera visible.
* La liste **Empty lines after this legend** permet de définir un certain nombre de lignes vides après la légende.
* Si la case **Print max value** est cochée, alors la valeur maximale atteinte par la courbe sera affichée.
* Si la case **Print min value** est cochée, alors la valeur minimale atteinte par la courbe sera affichée.
* Si la case **Round the min and max** est cochée, alors les valeurs minimales et maximales seront arrondies.
* Si la case **Print Average** est cochée, alors la moyenne des points de la courbe sera affichée.
* Si la case **Print last value** est cochée, alors la dernière valeur collectée de la courbe sera affichée.
* Si la case **Print total value** est cochée, s'affiche alors la valeur totale (somme de toutes les valeurs de la courbe
  sur la période sélectionnée). 
* Le champ **Comment** permet de commenter la courbe.

### Exemples de courbes

Les courbes empilées :

![image](assets/metrology/02graphempile.png)

Les courbes inversées :

![image](assets/metrology/02graphinverse.png)
 
Les courbes avec remplissage :

![image](assets/metrology/02graphremplissage.png)

## Métriques virtuelles

### Definition

Les métriques virtuelles sont l'affichage de courbes résultant du traitement / agrégation de données issues d'un jeu de
données. Le jeu de données correspond aux différentes valeurs des courbes sur la période de présentation du graphique.
La création de métriques virtuelles repose sur le langage RPN (Reverse Polish Notation).

Deux types de jeu de données sont disponibles :

* CDEF : Cette commande crée un nouvel ensemble de points à partir d'une ou plusieurs séries de données. L'agrégation est
  réalisée sur chaque point (données). 
* VDEF : Le résultat de chaque agrégation est une valeur et une composante temporelle. Ce résultant peut également être
  utilisé dans les divers éléments de graphique et d'impression. 

#### CDEF vs VDEF

Le type CDEF travaille sur un ensemble de points (tableau de données). Le résultat du traitement (exemple : multiplication
par 8 pour convertir des bits en octets) sera un ensemble de point. Le type VDEF permet d'extraire le maximum d'un ensemble
de point.

> Pour plus d'informations sur la notation de type RPN, référencez-vous à la
> [documentation officielle RRD](http://oss.oetiker.ch/rrdtool/tut/rpntutorial.en.html)

### Configuration

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

### Exemple

Configuration :

![image](assets/metrology/02virtualmetric_conf.png)

Résultat :

![image](assets/metrology/02virtualmetric_example.png)
