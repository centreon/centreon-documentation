---
id: map-web-create-geoview
title: Créer une vue géographique
description: "Créez des vues géographiques dans Centreon MAP pour placer vos ressources sur une carte : affichage, regroupement, clignotement et couches de données."
---

Cette page explique comment créer des vues géographiques à partir de l'interface Centreon MAP.

Si le bouton **Ajouter une vue géographique** s'affiche à la page **Supervision > Map**, vous appartenez à un groupe d'accès auquel le rôle de créateur est attribué et vous pouvez créer des vues géographiques.

## Prérequis

Pour placer une ressource (hôte, groupe d'hôtes ou activité métier) sur une vue géographique, renseignez d'abord ses coordonnées géographiques dans l'onglet **Informations détaillées** de la ressource.

Par exemple, pour renseigner les coordonnées géographiques de l'hôte **Central** :

1. Allez à la page **Configuration > Hôtes > Hôtes**. Puis cliquez sur l'hôte **Central**.
2. Cliquez sur l'onglet **Informations détaillées de l'hôte**.
3. Remplissez le champ **Coordonnées géographiques** au format `Latitude, Longitude`. Cliquez ensuite sur **Sauvegarder**.

> Pour une carte, vous pouvez saisir les **coordonnées géographiques** dans les propriétés de la carte : allez à la page **Supervision > Map**, section **Cartes standard**, puis cliquez sur le bouton **clé à molette** de la carte.

## Créer une vue géographique

1. À la page **Supervision > Map**, cliquez sur le bouton **Ajouter une vue géographique** situé dans la section **Vues géographiques**.

2. Remplissez la section **Nom** :
   - Nom et image : saisissez un nom pour la vue géographique et sélectionnez une image dans la liste déroulante.

3. Remplissez la section **Ajouter des ressources** en sélectionnant les ressources listées par type. Chaque champ propose une liste des ressources disponibles :
   - Cartes
   - Groupes d'hôtes
   - Hôtes par groupe d'hôtes
   - Activités métier par vue métier (BV)

4. Cliquez sur **Ajouter**.

La nouvelle vue géographique s'ouvre directement dans l'interface de l'éditeur.

## Informations complémentaires

### Affichage des ressources

Lorsqu'une ressource (hôte, groupe d'hôtes ou activité métier) est positionnée sur une vue géographique, elle est affichée sous la forme d'un cercle dont la couleur est définie par les règles suivantes :

- **Hôte :** statut le plus critique entre l'hôte et ses services.
- **Groupe d'hôtes :** statut le plus critique des hôtes appartenant au groupe d'hôtes.
- **Activité métier :** statut actuel.

Ordre de criticité des statuts : Critique (rouge) \> Indisponible (rouge) \> Alerte (orange) \>
Inconnu (gris) \> Injoignable (gris) \> OK (vert) \> Disponible (vert) \> En attente (bleu)

### Regroupement

Lorsque des ressources sont proches les unes des autres au niveau de zoom actuel, elles sont regroupées en un seul cercle qui affiche :

- Le statut le plus critique parmi ces ressources (affiché sous la forme d'une couleur : vert, orange, rouge ou gris).
- Le nombre de ressources dans ce statut.

Ce comportement peut être désactivé dans les options globales de Centreon MAP, en définissant l'option **Mode de regroupement** sur **Non**.

### Ressources clignotantes

Si une ressource n'est pas dans un statut OK, elle clignote.
Ce comportement peut être désactivé dans les options globales de Centreon MAP, en définissant l'option **Marqueurs clignotants** sur **Non**.

### Couches de données dans les vues géographiques

Centreon MAP vous permet d'afficher des couches de données supplémentaires sur les cartes afin d'ajouter du contexte au statut en temps réel de votre infrastructure informatique.

Vous devez d'abord ajouter des couches de données dans les options de Centreon MAP, dans la section **Services de couches de données géographiques**. Une fois la couche de données activée, utilisez l'icône en haut à gauche pour l'afficher ou la masquer.
