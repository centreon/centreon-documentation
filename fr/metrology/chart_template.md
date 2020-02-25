---
id: chart-template
title: Modèle de graphique
---

## Définition

Les modèles de graphiques sont des modèles qui permettent de mettre en forme les graphiques. Les modèles de graphiques
permettent de configurer plusieurs paramètres de présentation dont la mesure de l'axe des ordonnées, la largeur et la
hauteur du graphique ou encore les différentes couleurs...

## Configuration

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

## Utiliser un modèle de graphe

Ajouter un modèlede graphe lors de l'édition d'un service (ou d'un modèle de service) en accédant à l'onglet
**Service Extended Info** dans le formulaire de configuration :

![image](assets/metrology/02linkgraph_template.png)
