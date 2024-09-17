---
id: map-web-access
title: Gérer les droits d'accès dans MAP
---

Cette page explique comment les utilisateurs accèdent aux cartes en fonction de privilèges bien définis.

## Rôles dans MAP

### Définitions

Les différents types de rôles sont :

- **Administrateurs / Éditeurs :** peuvent créer de nouvelles cartes. Ils peuvent voir, modifier, supprimer et partager toutes les cartes.
- **Utilisateurs (aussi appelés Opérateurs) :** par défaut, ils n'ont aucun privilège sur les cartes. Ils ne peuvent voir que les cartes qu'on leur partage.

Les droits d'accès à une carte - également appelés privilèges - ne sont pas gérés au niveau de l'utilisateur, mais par le biais de groupes d'accès (ou rôles). Vous pouvez accéder à une carte parce que vous appartenez à un type de rôle qui dispose de privilèges pour accéder à cette carte. Les privilèges vous permettent d'effectuer certaines actions spécifiques sur les cartes.

Au niveau de la carte, les Administrateurs et Éditeurs peuvent accorder des privilèges aux Utilisateurs.
 
### Vérifier le statut de créateur

Suivez cette procédure pour vérifier si vous êtes autorisé à créer une carte.

1. Allez dans **Supervision > Map**.

2. Dans la page **Map**, le bouton **Add a Map** signifie que vous êtes autorisé à créer une carte. Cela signifie que vous appartenez à un type de rôle auquel le privilège de créateur est attribué.

## Privilèges sur une carte

> Le rôle d'**Éditeur** doit impérativement garder le privilège de **Propriétaire**. En modifiant ce privilège, tous les utilisateurs peuvent perdre l'accès aux cartes. Des améliorations techniques sont en cours pour éviter cet incident.

Les privilèges sont accordés lorsque vous effectuez l'action de partager une carte. Au niveau de la carte, vous pouvez spécifier quel groupe d'accès est autorisé à accéder à cette carte, ainsi que des privilèges spécifiques.

### Accorder des privilèges au rôle Utilisateurs

Les Utilisateurs (dans le contexte des utilisateurs ayant le rôle d'Utilisateur dans Centreon) n'obtiennent des privilèges que lorsque des cartes leur sont partagées.

Suivez cette procédure pour accorder des privilèges à l'aide de la fonctionnalité de partage :

1. Allez dans **Supervision > Map**.
La page **Map** s'affiche avec la liste des cartes disponibles.

2. Cliquez sur le bouton de **partage** correspondant à la carte que vous souhaitez partager.
La liste des rôles disponibles s'affiche.

3. Pour le rôle **Utilisateurs** (appelés **Opérateurs** dans la liste), sélectionnez le privilège à accorder dans la liste déroulante.

4. Cliquez **Sauvegarder** pour confirmer.

### Permissions associées

Ce tableau décrit les types de privilèges et les permissions associées :

|            | Aucun privilège | Accès en lecture | Accès en écriture | Propriétaire |
|------------|------|--------|--------|-------|
| Peut consulter    |      |   x    |    x   |   x   | 
| Peut éditer   |      |        |    x   |   x   |
| Peut partager  |      |        |        |   x   |
| Peut supprimer |      |        |        |   x   |

- Les utilisateurs disposant de privilèges de propriétaire peuvent également définir ou modifier les propriétés de la carte (nom et icône).
- Le partage d'une carte permet au destinataire d'acquérir des privilèges sur cette carte.

Le contrôle d'accès aux cartes n'est appliqué qu'au niveau de la carte. Lorsque vous disposez du privilège « Viewer », vous pouvez visualiser une carte et toutes les ressources qu'elle contient, même si vous ne disposez pas de la liste de contrôle d'accès (ACL en Anglais) correspondante. Lorsque vous modifiez une carte, vous ne pouvez ajouter des ressources que si vous disposez de l'ACL correspondante.
