---
id: map-web-access
title: Gérer les droits d'accès dans MAP
---

Cette page explique comment les utilisateurs accédent aux cartes en fonction de privilèges bien définis.

## Rôles dans MAP

Les différents types de rôles sont :

- **Administrateurs :** peuvent créer de nouvelles cartes. Ils peuvent voir, modifier, supprimer et partager toutes les cartes.
- **Éditeurs :** peuvent créer de nouvelles cartes. Ils peuvent voir, modifier, supprimer, partager leurs propres cartes et celles qu'on leur partage.
- **Utilisateurs (aussi appelés Opérateurs) :** par défaut, ils n'ont aucun privilège sur les cartes. Ils ne peuvent voir que les cartes qu'on leur partage.

Les droits d'accès à une carte - également appelés privilèges - ne sont pas gérés au niveau de l'utilisateur, mais par le biais de groupes d'accès (ou rôles). Vous pouvez accéder à une carte parce que vous appartenez à un type de rôle qui dispose de privilèges pour accéder à cette carte. Les privilèges vous permettent d'effectuer certaines actions spécifiques sur les cartes.

Au niveau de la carte, les Administrateurs et Éditeurs peuvent accorder des privilèges aux Utilisateurs.
 
### Vérifier le statut de créateur

Suivez cette procédure pour vérifier si vous êtes autorisé à créer une carte.

1. Allez dans **Supervision > Map**.

2. Dans la page **Map**, le bouton **Add a Map** signifie que vous êtes autorisé à créer une carte. Cela signifie que vous appartenez à un type de rôle auquel le privilège de créateur est attribué.

### Attribuer le rôle de créateur

Suivez cette procédure pour permettre aux utilisateurs de créer des cartes en leur attribuant des droits sur le type de rôle auquel ils appartiennent.

1. En tant qu'administrateur, allez dans **Supervision > Map**.

2. Cliquez sur **Edit creators**.
Une liste de rôles existants s'affiche.

3. Sélectionnez le(s) rôle(s) que vous souhaitez.

4. Cliquez sur **Sauvegarder** pour confirmer.
Les utilisateurs appartenant au groupe d'accès sélectionné sont maintenant autorisés à créer des cartes.
 
## Privilèges sur une carte

Les privilèges sont accordés lorsque vous effectuez l'action de partager une carte. Au niveau de la carte, vous pouvez spécifier quel groupe d'accès est autorisé à accéder à cette carte, ainsi que des privilèges spécifiques.

### Accorder des privilèges au rôle Utilisateurs

Les Utilisateurs (dans le contexte des utilisateurs ayant le rôle d'Utilisateur dans Centreon) n'obtiennent des privilèges que lorsque des cartes leur sont partagées.

Suivez cette procédure pour accorder des privilèges à l'aide de la fonctionnalité de partage :

1. Allez dans **Supervision > Map**.
La page **Map** s'affiche avec la liste des cartes disponibles.

2. Cliquez sur le bouton de **partage** correspondant à la carte que vous souhaitez partager.
La liste des rôles disponibles s'affiche.

3. Pour le rôle Utilisateurs, sélectionnez le privilège à accorder dans la liste déroulante.

4. Cliquez **Sauvegarder** pour confirmer.
Si un utilisateur appartient à plusieurs groupes d'accès, le privilège ayant le plus de permissions sera appliqué.

### Permissions associées

Ce tableau décrit les types de privilèges et les permissions associées :

|            | Aucun privilège | Accès en lecture | Accès en écriture | Propriétaire |
|------------|------|--------|--------|-------|
| Peut consulter    |      |   x    |    x   |   x   | 
| Peut éditer   |      |        |    x   |   x   |
| Peut partager  |      |        |        |   x   |
| Peut supprimer |      |        |        |   x   |

- Lorsque vous créez une carte, vous et les utilisateurs de votre type de rôle disposez des privilèges en tant que propriétaire de cette carte.
- Les administrateurs sont des créateurs et disposent des privilèges de propriétaire sur toutes les cartes.
- Les utilisateurs disposant de privilèges de propriétaire peuvent également définir ou modifier les propriétés de la carte (nom et icône).
- Le partage d'une carte permet au destinataire d'acquérir des privilèges sur cette carte.
