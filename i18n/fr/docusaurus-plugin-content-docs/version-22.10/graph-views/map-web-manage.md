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

## Perform actions on a map

You can perform actions on each standard map and geographic view you have access to. Use the following procedures if you need to edit the map properties, share or delete a map.

> Deleting a map is the unique action you can perform on a geographic view.

Hover over the map on which you want to apply an action and click the corresponding button.

### Delete a map

Click the **red cross** button and confirm the deletion by clicking the **Delete** button.

### Edit map properties

Click the **wrench** button to edit the map properties and confirm the changes by clicking the **Edit** button.

### Share a map

Click the **arrow** button to edit the access group privileges and confirm the changes by clicking the **Save** button.

### Copy MAP URL

A **Copy MAP URL** button is available when you open a map in view mode, allowing you to easily share the map you opened. 
