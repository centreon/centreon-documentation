---
id: resources-status
title: Statut des ressources
---

La vue `Supervision > Statut des ressources` est votre vue principale
pour connaître les évènements en cours et être en mesure de les comprendre,
les prendre en compte et les traiter rapidement.

Cette vue rassemble à la fois les hôtes et les services afin de proposer
une interface unique et unifiée de gestion des évènements.

## Lister les évènements

Le listing des évènements permet d'avoir une vue condensée des alertes en
cours ou plus largement de l'état de toutes les ressources supervisées par
la plateforme Centreon.

![image](../assets/alerts/resources-status/resources-status-listing.png)

Il est possible de choisir la colonne de tri afin d'ordonner le listing, par
exemple par durée la plus récente, statut ou encore par sévérité.

![image](../assets/alerts/resources-status/resources-status-listing-order.gif)

## Exécuter des actions sur les évènements

### Prendre en compte un évènement

Lorsqu'une ou plusieurs alertes apparaîssent, il est possible de les
prendre en compte immédiatement et ce, de deux manières:

-   En acquittant directement via le bouton qui s'affiche au survol de
    la ligne
-   En sélectionnant une ou plusieurs lignes et en cliquant sur le
    bouton "Acknowledge"

![image](../assets/alerts/resources-status/resources-status-acknowledgement.gif)

> Seules les ressources en statut "Non-OK" peuvent être acquittées.
> Seule une ressource non acquittée peut être acquittée.

L'acquitement a pour effet de masquer l'alerte de la vue "Unhandled
problems" et de stopper les notifications partant de la ressource.

L'acquittement peut aussi être supprimé pour reverser l'évènement dans la liste
des évènements non pris en compte ainsi que pour relancer les notifications.

### Planifier une plage de maintenance

Il est possible de planifier une plage de maintenance :

-   En définissant directement une plage de maintenance via le bouton
    qui s'affiche au survol de la ligne
-   En sélectionnant une ou plusieurs lignes et en cliquant sur le bouton
    "Downtime"

![image](../assets/alerts/resources-status/resources-status-downtime.gif)

La mise en maintenance d'une ressource a pour effet de masquer l'alerte
de la vue "Unhandled problems" et de stopper les notifications partant
de la ressource.

### Relancer un contrôle

Dans de nombreuses situations, il est nécessaire de pouvoir rafraîchir
le statut d'un service / hôte en lançant un contrôle manuellement via
l'interface. Cela est possible de deux manières différentes

-   En lançant le contrôle directement via le bouton qui s'affiche au
    survol de la ligne
-   En sélectionnant une ou plusieurs lignes et en cliquant sur le
    bouton "Check"

![image](../assets/alerts/resources-status/resources-status-check.gif)

### Soumettre un statut

Dans certains cas, notamment avec les services dit "passifs", il peut
être utile de soumettre un résultat, c'est à dire un statut, un message
de sortie et des métriques, afin de remettre à zéro l'évènement.

![image](../assets/alerts/resources-status/resources-status-submit-status.gif)

## Filtrer les évènements

### Filtres prédéfinis

Lorsque vous arrivez sur la vue d'évènements, par défaut le filtre est
positionné sur "Unhandled problems", ce filtre permet de visualiser
rapidement tous les problèmes n'ayant pas encore été pris en compte ou
associés à une plage de maintenance. Il est possible de choisir parmis 2
autres filtre: "Resource Problems" & "All".

Signification des filtres:

-   Unhandled problems: Le statut de la ressource est Warning ou
    Critical ou Unknown ou Down ET la ressource n'est ni acquittée ni en
    plage de maintenance planifiée
-   Resource problems: Le statut de la ressource est Warning ou
    Critical ou Unknown ou Down
-   All: toutes les ressources

![image](../assets/alerts/resources-status/resources-status-filters-defaults.gif)

### Barre de recherche

Il est possible de filters les évènements par nom de ressource. La
mécanique d'expressions régulières est intégrée à cette barre de
recherche, rendant cette dernière plus flexible.

Par défaut la recherche se fait sur les champs suivants:

-   Nom d'hôtes
-   Alias de l'hôte
-   Adresse ou FQDN de l'hôte
-   Description du service
-   Information

![image](../assets/alerts/resources-status/resources-status-search-simple.png)

Il est possible de forcer le champ sur lequel on souhaite rechercher en
utilisant les labels suivants:

-   h.name: chercher uniquement sur le nom d'hôte
-   h.alias: chercher uniquement sur l'alias de l'hôte
-   h.address: chercher uniquement sur le FQDN / l'adresse IP de l'hôte
-   s.description: chercher uniquement sur la description du service
-   information: chercher uniquement sur l’information

![image](../assets/alerts/resources-status/resources-status-search-label.png)

### Par critères avancés

Si les filtres pré-définis et la barre de recherche ne suffisent pas, il
est possible de déplier les filtres afin d'accéder à plus de critères:

-   Ttypes de ressource (hôte ou service)
-   Statut (Ok, Warning, Critical, Unknown, Pending, Up, Down,
    Unreachable)
-   Etat : y'a t'il une action en cours sur le service ou l'équipement ?
    (acquittement, plage de maintenance planifiée)
-   Groupes d'hôtes
-   Groupe de services

![image](../assets/alerts/resources-status/resources-status-search-advanced.png)

### Afficher / masquer des critères

Il est également possible d'afficher ou de masquer des critères qui ne sont pas pertinents pour la recherche à effectuer, en cliquant sur le bouton "Sélectionner des critères" à gauche :

![image](../assets/alerts/resources-status/resources-status-additional-criterias.gif)

### Sauvergarder un filtre

Lorsque vous souhaitez ne lister qu'un sous ensemble des équipements de
la supervision, vous êtes amenés à utiliser de nombreux critères et
expressions régulières. Dans ce cas, il est intéressant de sauvegarder
le filtre afin de pouvoir facilement le réutiliser plus tard.

Cela est possible en utilisant l'icône "roue dentée" à côté de "Filtre".
Grâce à ce menu, vous serez en mesure de:

-   Sauvegarder la recherche actuelle comme un nouveau filtre
-   Mettre à jour le filtre actuel avec la recherche en cours
-   Editer la liste des filtres afin de les supprimer, les renommer ou
    les ré-ordonner.

Une fois qu'un filtre est créé, il apparaitra dans la liste des filtres
sous la section "Mes filtres".

![image](../assets/alerts/resources-status/resources-status-filters-custom.gif)

En cliquant sur le menu "Éditer les filtres", il est possible de manipuler les filtres sauvegardés (en les renommant, ré-ordonnant et supprimant) :

![image](../assets/alerts/resources-status/resources-status-edit-filters.gif)

## Panneau de détail

Lorsque vous cliquez sur une ligne, un panneau de détail s'affiche pour
présenter les informations principales de la ressource.

En fonction du type de ressource, différents onglets sont disponibles.

### Panneau d'hôte

Le panneau d'hôte contient plusieurs onglets informatifs :

-   Informations détaillées sur le statut courant,
-   La liste des services rattachés à cet hôte avec leur statut (et de leurs graphiques, quand le mode correspondant est sélectionné),
-   La chronologie des événements survenus pour cet hôte,
-   Les raccourcis vers la configuration, les journaux d'évènement et les
    rapports de disponibilité.

![image](../assets/alerts/resources-status/resources-status-panel-host.gif)

Si l'hôte est acquitté ou en maintenance planifiée, des informations supplémentaires
seront visibles sur le panneau.

### Panneau de service

Le panneau de service contient plusieurs onglets informatifs :

-   Informations détaillées sur le statut courant,
-   La chronologie des événements survenus pour ce service,
-   Un graphique avec une courbe par métrique collectée par ce service,
-   Les raccourcis vers les configurations, les journaux d'évènement et les
    rapports de disponibilité pour ce service et son hôte.

![image](../assets/alerts/resources-status/resources-status-panel-service.gif)

Si le service est acquitté ou en downtime, des informations supplémentaires
seront visibles sur le panneau.

#### Graphique

L'onglet graphique vous permet d’afficher de manière visuelle l'évolution des métriques dans le temps pour la ressource sélectionnée. En survolant les courbes avec la souris, vous afficherez une bulle contentant les valeurs des différentes métriques correspondant à l'instant.

Il est possible de sélectionner ou désélectionner des métriques pour l'affichage un utilisant la légende. En cliquant sur un élément de la légende, l'ensemble des autres métriques sera désélectionnée, tandis que celle correspondant à la légende restera sélectionnée. Cliquer sur une métrique étant la seule sélectionnée sélectionnera également l'ensemble des autres :

![image](../assets/alerts/resources-status/resources-status-graph-select-only-metric.gif)

Vous pouvez également basculer l'affichage de chaque métrique individuellement en utilisant Ctrl+clique (ou bien Cmd+clique pour les utilisateurs Mac) sur la légende correspondante :

![image](../assets/alerts/resources-status/resources-status-graph-toggle-legends.gif)

La bascule "Afficher les évènements" permet d'afficher certains évènements de la chronologie de la ressource (Plages de maintenance, Acquittements, Commentaires) directement sur le graphique, aux travers d'annotations :

![image](../assets/alerts/resources-status/resources-status-graph-display-events.gif)

Il est possible d'ajouter un commentaire directement sur le graphique, en cliquant n’importe où, au niveau du temps souhaité, et ensuite en cliquant sur "Ajouter un commentaire" sur l'info bulle qui apparaît :

![image](../assets/alerts/resources-status/resources-status-graph-add-comment.gif)

En cliquant sur le bouton "Exporter comme PNG", vous pouvez exporter une capture du graphique sous forme d'image PNG, qui va aussi inclure les évènements de la chronologie, si l'option correspondante est activée. Notez que seules les métriques sélectionnées seront exportées :

![image](../assets/alerts/resources-status/resources-status-graph-export-to-png.gif)
