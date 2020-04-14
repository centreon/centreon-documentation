---
id: release-notes
title: Release notes
---

## Introduction

You can find in this chapter all changelogs concerning Centreon Core.

> It is very important when you update your system to refer to this section in
> order to learn about behavior changes or major changes that have been made on
> this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have
> built on your platform (modules, widgets, plugins).

If you have any questions relating to the content of the notes, you can ask your
questions on our [github](https://github.com/centreon/centreon).

## Centreon Web

*22 Avril 2020*

### Nouvelles fonctionnalités

#### Vue d'évènements (beta)

L'interface de Centreon se voit ajouter une nouvelle expérience de consultation et gestion des évènements. Cela
est mis en place grâce à une nouvelle vue "unifiée", mélangeant hôtes et services et permettant de filtrer et 
d'agir efficacement sur les alertes en cours.

Cette vue est proposée en version "beta" afin de pouvoir la faire évoluter le plus efficacement et rapidement 
possible en fonction de vos retours et des analyses déjà effectuées. L'objectif est de faire de cette vue la plus
efficace possible en terme gestion des alertes à destination des opérateurs & administrateurs système.

Cette nouvelle vue est accessible via le menu `Home > Events view (beta)` et apporte les fonctionnalités suivantes:

* Une page unifiée regroupant les hôtes et les services
* Une recherche par nom basé sur les mécaniques d'expressions régulières
* La possibilité de forcer le critère de recherche via des labels prédéfinis
* Des critères de filtres additionnels multi-valeurs
* Des actions rapide sur les lignes et efficace via des boutons accessibles en haut de page (acquittement, mise 
en place de plage de maintenance, rafraîchissement du statut)
* Des informations détaillées affichées sous forme de panneau au dessus de la liste afin de toujours garder un oeil
et d'accéder facilement à d'autres ressources
* *... et bien plus à venir dans les semaines & mois qui viennent*

![image](../assets/alerts/events-view/events-view-demo.gif)

Pour en savoir plus sur cette fonctionnalité, [rendez vous sur cette page](../alerts/events-view)

#### Mobilité

Une version mobile de Centreon est disponible ! Il est possible de l'installer sur votre téléphone afin 
d'être en mesure d'effectuer les actions suivantes, sur votre mobile:

* Afficher la liste des resources (hôtes et services) et leur statut 
* Filtre ces listes
* Agir sur les ressources: mise en place d'acquittement ou de plage de maintenance
* Afficher le détail du statut des ressources et un graphiques lorsque disponible

<figure class="video_container">
  <video width="375" height="812" controls="true" allowfullscreen="true" poster="../assets/mobile/mobile-login.png">
    <source src="../assets/mobile/mobile-demo.mp4" type="video/mp4">
  </video>
</figure>

Plus d'information sur l'installation et l'utilisation de l'application mobile sur [cette page](../mobile/introduction)

### Bug fixes


## Centreon Engine

### Centreon Engine 20.04.0

## Centreon Broker

### Centreon Broker 20.04.0
