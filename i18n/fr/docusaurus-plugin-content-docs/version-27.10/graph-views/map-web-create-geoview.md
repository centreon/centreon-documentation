---
id: map-web-create-geoview
title: Créer une vue géographique
description: "Créez des vues géographiques dans Centreon MAP pour placer vos ressources sur une carte : affichage, regroupement, clignotement et couches de données."
---

Cette page explique comment créer des vues géographiques à partir de l'interface Centreon MAP.

L'affichage du bouton **Ajouter une vue géographique** signifie que vous êtes autorisé à créer une carte et que vous appartenez à un groupe d'accès auquel est attribué le rôle de créateur.

- Cartes standard : pour visualiser des représentations graphiques de votre infrastructure supervisée.
- Vues géographiques : pour afficher les ressources de votre infrastructure sur une zone géographique définie.

> Les options disponibles dans l'interface MAP dépendent des permissions qui vous ont été attribuées par votre administrateur. Voir la page [Gérer les droits d'accès dans MAP](map-web-access.md) pour plus d'informations sur les privilèges et permissions.

L'affichage du bouton **Ajouter une carte** signifie que vous êtes autorisé à créer une carte et que vous appartenez à un groupe d'accès auquel est attribué le rôle de créateur.

## Prérequis

Pour placer une ressource (hôte, groupe d'hôtes ou activité métier) sur une vue géographique, renseignez d'abord ses coordonnées géographiques dans l'onglet **Informations détaillées** de la ressource.

Par exemple, pour renseigner les coordonnées géographiques de l'hôte **Central** :

1. Allez dans **Configuration > Hôtes > Hôtes**. Puis cliquez sur l'hôte **Central**.
2. Cliquez sur l'onglet **Informations détaillées de l'hôte**.
3. Remplissez le champ **Coordonnées géographiques** avec le format `Latitude, Longitude`. Cliquez ensuite sur **Sauvegarder**.

> Pour une carte, vous pouvez saisir les **coordonnées géographiques** dans la fenêtre d'édition de la carte (allez dans le menu **Supervision > Carte**, section **Cartes standard**, puis cliquez sur le bouton **Configuration** pour accéder aux propriétés de la carte).

## Créer une vue géographique

1. Dans la page **Supervision > Map**, cliquez sur le bouton **Ajouter une vue géographique** situé dans la section **Vues géographiques**.

2. Remplissez la section **Nom** :
   - Nom et image : saisissez un nom pour la vue géographique et sélectionnez une image dans la liste déroulante.

3. Remplissez la section **Ajouter des ressources** en sélectionnant les ressources listées par type. Chaque champ propose une liste des ressources disponibles :
   - Cartes
   - Groupes d'hôtes
   - Hôtes par Groupe d'hôtes
   - Activités métier par VM

4. Cliquez sur **Ajouter**.

La nouvelle vue géographique s'ouvre directement dans l'interface de l'éditeur.

## Informations complémentaires

### Comment les ressources sont affichées

Lorsqu'une ressource (hôte, groupe d'hôtes ou activité métier) est positionnée sur une vue géographique, elle est affichée sous la forme d'un cercle dont la couleur est définie par les règles suivantes :

- **Hôte :** état le plus défavorable entre l'hôte et ses services.
- **Groupe d'hôtes :** état le plus défavorable des hôtes appartenant aux groupes d'hôtes.
- **Activité métier :** état actuel.

Ordre des pires états : Critique (rouge) \> Indisponible (rouge) \> Alerte (orange) \>
Inconnu (gris) \> Injoignable (gris) \> OK (vert) \> Disponible (vert) \> En attente (bleu)

### Regroupement

Lorsque des ressources sont proches les unes des autres au niveau de zoom actuel, elles sont regroupées en un seul cercle qui affiche :

- L'état de l'objet le plus mauvais (affiché via une couleur, soit le vert, l'orange, le rouge ou le gris).
- Le nombre de ressources dans cet état.

Ce comportement peut être désactivé dans les options globales de Centreon MAP, en définissant l'option **Mode de regroupement** sur **Non**.

### Ressources clignotantes

Si une ressource est dans un état "non-ok", elle clignote.
Ce comportement peut être désactivé dans les options globales de Centreon MAP, en définissant l'option **Marqueurs clignotants** sur **Non**.

### Couches de données dans les vues géographiques

Centreon MAP vous donne la possibilité d'afficher des couches de données supplémentaires sur les cartes afin d'ajouter un contexte à l'état de votre infrastructure informatique en temps réel.

Vous devez d'abord ajouter des couches de données dans les options de Centreon MAP, dans la section **Services de couches de données géographiques**. Une fois la couche de données activée, utilisez l'icône en haut à gauche pour l'afficher ou la masquer.
