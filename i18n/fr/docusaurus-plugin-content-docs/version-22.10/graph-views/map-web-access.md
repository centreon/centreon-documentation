---
id: map-web-access
title: Gérer les droits d'accès dans MAP
---

Cette page explique comment les utilisateurs accédent aux cartes en fonction de privilèges bien définis.

Les utilisateurs pouvant créer des cartes sont :

- Les administrateurs Centreon.
- Les utilisateurs appartenant à un groupe d'accès auquel le rôle de créateur est attribué.

Les droits d'accès à une carte - également appelés privilèges - ne sont pas gérés au niveau de l'utilisateur, mais par le biais de groupes d'accès. Vous pouvez accéder à une carte parce que vous appartenez à un groupe d'accès qui dispose de privilèges pour accéder à cette carte. Les privilèges vous permettent d'effectuer certaines actions spécifiques sur les cartes.

## Rôle de créateur de cartes
 
### Vérifier le statut de créateur

Suivez cette procédure pour vérifier si vous êtes autorisé à créer une carte.

1. Allez dans **Supervision > Map**.

2. Dans la page **Map**, le bouton **+** signifie que vous êtes autorisé à créer une carte. Cela signifie que vous appartenez à un groupe d'accès auquel le rôle de créateur est attribué.

### Attribuer le rôle de créateur
 
Seuls les administrateurs Centreon peuvent créer des cartes et autoriser les utilisateurs à créer des cartes.

Suivez cette procédure pour permettre aux utilisateurs de créer des cartes en leur attribuant des droits sur le groupe d'accès auquel ils appartiennent.

1. En tant qu'administrateur, allez dans **Supervision > Map**.

2. Cliquez sur **Edit creators**.
Une liste des groupes existants s'affiche.

3. Sélectionnez le(s) groupe(s) d'accès que vous souhaitez.

4. Cliquez sur **Sauvegarder** pour confirmer.
Les utilisateurs appartenant au groupe d'accès sélectionné sont maintenant autorisés à créer des cartes.
 
## Privilèges sur une carte

Ensure users are well organized in access groups. This will facilitate the granting of privileges according to those groups.

### Managing users in access groups
Users must belong to the right group to get access to specific maps. Use the [Creating an access group](../administration/access-control-lists.md#creating-an-access-group) procedure to manage users in access groups.

### Granting privileges on a map
Privileges are granted when you perform the action of sharing a map. At map level, you can specify which access group is allowed to access that map, with specific privileges as well.

Perform the following procedure to grant privileges using the sharing action.

1. Go to **Monitoring > Map**.
The Map homepage is displayed with the list of available maps.

2. Hover over the map you want to share and click the **Share** button.
The list of available access groups is displayed.

3. For the access group you want, select the privilege to grant in the dropdown list.

4. Click **Save** to confirm.
If a user belongs to several access groups, the privilege with the most permissions will be applied.

This table describes the types of privileges and related permissions:

|            | None | Viewer | Editor | Owner |
|------------|------|--------|--------|-------|
| Can see    |      |   x    |    x   |   x   | 
| Can edit   |      |        |    x   |   x   |
| Can share  |      |        |        |   x   |
| Can delete |      |        |        |   x   |

- When you create a map, you and users in your access group have Owner privileges on that map.
- Centreon administrators are creators and have Owner privileges on all maps.
- Users with Owner privileges can also set or change map properties (name and icon).
- Sharing a map allows the recipient to acquire privileges on that map.
