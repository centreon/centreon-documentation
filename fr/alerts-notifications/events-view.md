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

![image](assets/alerts/events-view/acknowledgement.gif)

Seules les ressources en statut "Non-OK" peuvent être acquittées.

L'acquitement a pour effet de masuer l'alerte de la vue "Unhandled" et de stopper 
les notifications partant de la resource.

### Planifiée une plage de maintenance

Il est possible de planifier une plage de maintenance :

- En lançant le contrôle directement via le bouton qui s'affiche au survol de la ligne 
- En sélectionne une ou plusieurs lignes et en cliquant sur le bouton "Check"

![image](assets/alerts/events-view/downtime.gif)

### Relancer un contrôle

Dans de nombreuses situations, il est nécessaire de pouvoir rafraîchir le statut d'un service / hôte en 
lançant un controle manuellement via l'interface. Cela est possible de deux manière différentes 

- En lançant le contrôle directement via le bouton qui s'affiche au survol de la ligne 
- En sélectionne une ou plusieurs lignes et en cliquant sur le bouton "Check"

![image](assets/alerts/events-view/check.gif)


## Filtrer les évènements 

### Filtres prédéfinis

Lorsque vous arrivez sur la vue d'évènement, par défaut le filtre est positionné sur "Unhandled problems", cette 
vue permet de visualiser rapidement tous les problèmes n'ayant pas encore été pris en compte. Il est possible
de choisir parmis 2 autres filtre: Problems & All. 

Signification des filtres:

- Unhandled: Le statut de la resources est Warning ou Critical ou Unknown ou Down ET la resource n'est ni acquittée ni en plage de maintenance planifiée
- Resource problems: Le statut de la resources est Warning ou Critical ou Unknown ou Down
- All: toutes les resources

![image](assets/alerts/events-view/predefined-filters.gif)

### Barre de recherche 

Il est possible de filters les évènements par nom de ressource. La mécanique d'expressions régulières est intégrée 
à cette barre de recherche, rendant cette dernière plus flexible.

Par défaut la recherche se fait sur les champs suivants:

- Nom d'hôtes
- Alias de l'hôte
- Addresse / FQDN de l'hôte
- Description du service

![image](assets/alerts/events-view/simple-search.png)

Il est possible de forcer le champ sur lequel on souhaite rechercher en utilisant les label suivants:

- h.name: chercher uniquement sur le nom d'hôte
- h.alias: chercher uniquement sur l'alias de l'hôte
- h.address: chercher uniquement sur le FQDN / l'adresse IP de l'hôte
- s.description: chercher uniquement sur la description du service

![image](assets/alerts/events-view/label-search.png)

### Par critères avancés

- types de resource    
- Statut (Ok,Warning, Critical, Unknown, Pending, Up, Down)
- état : y'a t'il une action en cours sur le service ou l'équipement ? (acquittement, plage de maintenance planifiée)
- Groupes d'hôtes
- Groupe de services 

![image](assets/alerts/events-view/advanced-search.png)


## Panneau de détail

Lorsque vous cliquez sur une ligne, un panneau de détail s'affiche pour présenter les informations principale de la ressource.

En fonction du type de ressource, différents onglets sont disponibles

### Panneau d'hôte

Le panneau d'hôte contient les informations détailles sur le statut ses principaux indicateurs.

![image](assets/alerts/events-view/host-panel.gif)

Si l'hôte est acquitté ou en downtime, des informations supplémentaires seront visibles sur le panneau.

### Panneau de service

Le panneau de service contient les informations détaillées du statut du service ainsi qu'un onglet "Graph". L'onglet 
"Graphique" permet de visualiser rapidement l'évolution des métriques du service.

![image](assets/alerts/events-view/service-panel.gif)

Si le service est acquitté ou en downtime, des informations supplémentaires seront visibles sur le panneau.
