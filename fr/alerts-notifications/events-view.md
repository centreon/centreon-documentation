---
id: events-view
title: Vue d'évènements (beta)
---

La vue d'évènements est votre vue principale pour connaître les évènements en cours et être en mesure 
de les comprendre, de les prendre en compte et de les traiter rapidement.

Cette vue rassemble à la voix les hôtes et les services afin de proposer une interface unique de gestion des évènements.

Cette vue offre les possibilités décrites dans les sections ci-dessous.

## Lister les évènements

Le listing des évènements permet d'avoir une vue condensé des alertes en cours ou plus largement de l'état de
toutes les ressources supervisées par la plateforme Centreon.

![image](assets/alerts/events-view/listing.png)

Il est possible de choisir la colonne de tri afin d'ordonner le listing par exemple par durée la plus récente, statut ou encore sévérité. 

![image](assets/alerts/events-view/orderby.gif)

## Exécuter des actions sur les évènements

### Prendre en compte un évènement 

Lorsqu'une ou plusieurs alertes apparaîsent, il est possible de les prendre en compte immédiatement et ce, de deux manières:

- En acquittement directement via le bouton qui s'affiche au survol de la ligne 

- En sélectionne une ou plusieurs lignes et en cliquant sur le bouton "Acquitté"

### Planifiée une plage de maintencance

### Relancer un contrôle

Dans de nombreuses situations, il est nécessaire de pouvoir rafraîchir le statut d'un service / hôte en 
lançant un controle manuellement via l'interface. Cela est possible de deux manière différentes 

- En lançant le contrôle directement via le bouton qui s'affiche au survol de la ligne 

- En sélectionne une ou plusieurs lignes et en cliquant sur le bouton "Check"


#TODO: Image check

Ou encore en cochant plusieurs ligne et en cliquant sur le bouton "Check" 

#TODO: Image check multiselect

## Filtrer les évènements 

### Filtres prédéfinis


### Barre de recherche 

Il est possible de filters les évènements par nom avec la possibilité d'utiliser les mécaniques d'expression régulière, la recherche se fait par défaut sur tous les champs suivants:

    - Nom d'hôtes
    - Alias de l'hôte
    - Addresse / FQDN de l'hôte
    - Description du service

#TODO: image filtre search bar avec regexp

### Par critères avancés

    - types de resource    
    - Statut (Ok,Warning, Critical, Unknown, Pending, Up, Down)
    - état : y'a t'il une action en cours sur le service ou l'équipement ? (acquittement, plage de maintenance planifiée)
    - Groupes d'hôtes
    - Groupe de services 

#TODO: image filtre simple 





