---
id: map-web-create-geoview
title: Créer une vue géographique
---

Cette page explique comment créer des vues géographiques à partir de l'interface Centreon MAP.

L'affichage du bouton **Ajouter une vue géographique** signifie que vous êtes autorisé à créer une carte et que vous appartenez à un groupe d'accès auquel est attribué le rôle de créateur.

- Cartes standard : pour visualiser des représentations graphiques de votre infrastructure supervisée.
- Vues géographiques : pour afficher les ressources de votre infrastructure sur une zone géographique définie.

> Les options disponibles dans l'interface MAP dépendent des permissions qui vous ont été attribuées par votre administrateur. Voir la page [Gérer les droits d'accès dans MAP](map-web-access.md) pour plus d'informations sur les privilèges et permissions.

L'affichage du bouton **Ajouter une carte** signifie que vous êtes autorisé à créer une carte et que vous appartenez à un groupe d'accès auquel est attribué le rôle de créateur.

## Prérequis

Afin d'appliquer les coordonnées géographiques lors de la configuration d'une nouvelle vue géographique, il est nécessaire de les fournir dans l'onglet **Informations détaillées** correspondant à la ressource que vous voulez superviser (un hôte, un groupe d'hôtes ou une activité).

Par exemple, pour renseigner les coordonnées géographiques de l'hôte **Central** :

1. Allez dans **Configuration > Hôtes > Hôtes**. Puis cliquez sur l'hôte **Central**.
2. Cliquez sur l'onglet **Informations détaillées de l'hôte**.
3. Remplissez le champ **Coordonnées géographiques** avec le format `Latitude, Longitude`. Cliquez ensuite sur **Sauvegarder**.

## Créer une vue géographique

1. Dans la page **Supervision > Map**, cliquez sur le bouton **Ajouter une vue géographique** situé dans la section **Vues géographiques**.

2. Définissez les propriétés de la nouvelle vue géographique :
   - Nom : nommez la vue géographique.

3. Cliquez sur **Ajouter** pour confirmer la création de la vue.
La nouvelle vue s'affiche dans la liste des **Vues géographiques**.

4. Cliquez sur la vue pour l'ouvrir, puis sur le bouton **Éditer** pour compléter les paramètres.

5. Cliquez sur **Éditer** pour confirmer les paramètres.

## Informations complémentaires

### Comment les ressources sont affichées

Lorsqu'une ressource (hôte, groupe d'hôtes ou activité métier) est positionnée sur une vue géographique, elle est affichée sous la forme d'un cercle dont la couleur est définie par les règles suivantes :

- **Hôte :** état le plus défavorable entre l'hôte et ses services.
- **Groupe d'hôtes :** état le plus défavorable des hôtes appartenant aux groupes d'hôtes.
- **Activité métier :** état actuel.

Ordre des pires états : Critique (rouge) \> Indisponible (rouge) \> Alerte (orange) \>
Inconnu (gris) \> Injoignable (gris) \> OK (vert) \> Disponible (vert) \> En attente (bleu)

### Regroupement

Lorsque plusieurs ressources sont géographiquement proches et que vous êtes à un "certain" niveau de zoom, elles sont regroupées en un seul cercle en affichant deux éléments :

- L'état de l'objet le plus mauvais (affiché via une couleur, soit le vert, l'orange, le rouge ou le gris).
- Le nombre de ressources dans cet état.

Ce comportement peut être désactivé dans les options globales de Centreon MAP, en définissant l'option **Mode de regroupement** sur **Non**.

### Ressources clignotantes

Si une ressource est dans un état "non-ok", elle clignote.
Ce comportement peut être désactivé dans les options globales de Centreon MAP, en définissant l'option **Marqueurs clignotants** sur **Non**.

### Couches de données dans les vues géographiques

Centreon MAP vous donne la possibilité d'afficher des couches de données supplémentaires sur les cartes afin d'ajouter un contexte à l'état de votre infrastructure informatique en temps réel.

Vous devez d'abord ajouter des couches de données dans les options de Centreon MAP, dans la section **Services de couches de données géographiques**. Puis, si la couche de données est activée, vous pouvez la rendre visible ou non en la cochant à l'aide de l'icône en haut à gauche.
