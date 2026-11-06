---
id: map-web-access
title: Gérer les droits d'accès dans MAP
description: "Gérer les rôles et privilèges des utilisateurs MAP pour contrôler qui peut voir, modifier, partager ou supprimer les cartes"
---

Cette page explique comment les utilisateurs accèdent aux cartes en fonction de privilèges bien définis.

## Rôles dans MAP

### Définitions

Il existe deux types de rôles :

- **Administrateurs / Éditeurs :** peuvent créer de nouvelles cartes. Ils peuvent voir, modifier, supprimer et partager toutes les cartes.
- **Utilisateurs (aussi appelés Opérateurs) :** par défaut, ils n'ont aucun privilège sur les cartes. Ils ne peuvent voir que les cartes partagées avec eux.

Les droits d'accès à une carte (également appelés privilèges) ne sont pas gérés au niveau de l'utilisateur, mais par le biais de groupes d'accès. Vous pouvez accéder à une carte si vous appartenez à un groupe d'accès qui dispose de privilèges sur cette carte. Les privilèges vous permettent d'effectuer certaines actions sur les cartes.

Au niveau de la carte, les Administrateurs et les Éditeurs peuvent accorder des privilèges aux Utilisateurs.
 
### Vérifier le statut de créateur

Suivez cette procédure pour vérifier si vous êtes autorisé à créer une carte.

1. Allez à la page **Supervision > Map**.

2. Si le bouton **Ajouter une carte** s'affiche, vous appartenez à un groupe d'accès auquel le rôle de créateur est attribué et vous pouvez créer des cartes.

## Privilèges sur une carte

> Le rôle d'**Éditeur** doit toujours conserver le privilège **Propriétaire**. Si vous modifiez ce privilège, tous les utilisateurs risquent de perdre l'accès aux cartes. Des améliorations techniques sont en cours pour éviter ce problème.

Vous accordez des privilèges lorsque vous partagez une carte. Au niveau de la carte, vous pouvez spécifier quel groupe d'accès est autorisé à accéder à cette carte, ainsi que des privilèges spécifiques.

### Accorder des privilèges au rôle Utilisateurs

Les Utilisateurs n'obtiennent des privilèges que sur les cartes partagées avec eux.

Suivez cette procédure pour accorder des privilèges en partageant une carte :

1. Allez à la page **Supervision > Map**.
La page **Map** s'affiche avec la liste des cartes disponibles.

2. Cliquez sur le bouton de **partage** correspondant à la carte que vous souhaitez partager.
La liste des rôles disponibles s'affiche.

3. Pour le rôle **Utilisateurs** (appelés **Opérateurs** dans la liste), sélectionnez le privilège à accorder dans la liste déroulante.

4. Cliquez sur **Sauvegarder** pour confirmer.

### Permissions associées

Ce tableau décrit les types de privilèges et les permissions associées :

|                | Aucun privilège | Accès en lecture | Accès en écriture | Propriétaire |
|----------------|------|--------|--------|-------|
| Peut consulter |      |   x    |    x   |   x   | 
| Peut modifier  |      |        |    x   |   x   |
| Peut partager  |      |        |        |   x   |
| Peut supprimer |      |        |        |   x   |

- Les utilisateurs disposant du privilège **Propriétaire** peuvent également définir ou modifier les propriétés de la carte (nom et icône).
- Le partage d'une carte permet au destinataire d'acquérir des privilèges sur cette carte.

Le contrôle d'accès aux cartes n'est appliqué qu'au niveau de la carte. Lorsque vous disposez du privilège **Accès en lecture**, vous pouvez visualiser une carte et toutes les ressources qu'elle contient, même si vous ne disposez pas de la liste de contrôle d'accès (ACL en anglais) correspondante. Lorsque vous modifiez une carte, vous ne pouvez ajouter des ressources que si vous disposez de l'ACL correspondante.
