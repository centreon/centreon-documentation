---
id: map-web-manage
title: Gérer les cartes dans MAP
---

Cette page décrit comment créer et gérer les cartes à partir de l'interface Centreon MAP. Vous pouvez créer deux types de cartes :
- Cartes standard : pour visualiser des représentations graphiques de votre infrastructure supervisée.
- Vues géographiques : pour afficher les ressources de votre infrastructure sur une zone géographique définie.

> Les options disponibles dans l'interface MAP dépendent des permissions qui vous ont été attribuées par votre administrateur. Voir la page [Gérer les droits d'accès dans MAP](map-web-access.md) pour plus d'informations sur les privilèges et permissions.

L'affichage du bouton **Add a Map** signifie que vous êtes autorisé à créer une carte et que vous appartenez à un groupe d'accès auquel est attribué le rôle de créateur.

## Créer une carte standard

1. Dans la page **Supervision > Map**, cliquez sur le bouton **Add a Map** situé dans la section **Standard maps**.

2. Définissez les propriétés de la nouvelle carte :
   - Nom : nommez la carte.
   - Image : sélectionnez une image si vous souhaitez personnaliser l'affichage de la carte dans la liste des cartes.

3. Cliquez sur **Ajouter** pour confirmer la création de la carte.

La nouvelle carte s'ouvre directement dans l'interface de l'éditeur.
Allez à la page [Utiliser l'éditeur MAP](map-web-editor.md) pour savoir comment personnaliser votre carte.

## Créer une vue géographique

1. Dans la page **Supervision > Map**, cliquez sur le bouton **Add a new Geographic view** situé dans la section **Geographic views**.

2. Définissez les propriétés de la nouvelle vue géographique :
   - Nom : nommez la vue géographique.

3. Cliquez sur **Ajouter** pour confirmer la création de la vue.
La nouvelle vue s'affiche dans la liste des **Geographic views**.

4. Cliquez sur la vue pour l'ouvrir, puis sur le bouton **Éditer**. Complétez les paramètres suivants :

   - Groupe d'hôtes
   - Hosts belonging to the following Host Group(s)
   - Activités Métiers
   - Latitude
   - Longitude
   - Zoom

7. Cliquez sur **Éditer** pour confirmer les paramètres de la vue.

## Procéder à des actions sur une carte

Vous pouvez effectuer des actions sur chaque carte standard et chaque vue géographique à laquelle vous avez accès. Suivez ces procédures si vous souhaitez modifier les propriétés d'une carte, la partager ou la supprimer.

> La fonctionnalité de partage d'une carte n'est pas disponible sur une vue géographique.

Survolez la carte sur laquelle vous souhaitez appliquer une action et cliquez sur le bouton correspondant.

### Supprimer une carte

Cliquez sur le bouton de la corbeille et confirmez la suppression en cliquant sur le bouton **Supprimer**.

### Modifier les propriétés de la carte

Cliquez sur le bouton de clé à molette pour modifier les propriétés de la carte et confirmez les modifications en cliquant sur le bouton **Modifier**.

### Partager une carte

Cliquez sur le bouton de partage pour modifier les privilèges du groupe d'accès et confirmez les modifications en cliquant sur le bouton **Sauvegarder**.

### Copier l'URL de la carte

Un bouton de copie d'URL de la carte est disponible en mode visualisation, ce qui vous permet de partager facilement la carte que vous avez ouverte.
