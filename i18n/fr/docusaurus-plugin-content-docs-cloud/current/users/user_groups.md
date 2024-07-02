---
id: user_groups
title: Les groupes d'utilisateurs dans Centreon Cloud
---

Dans Centreon Cloud, vous pouvez utiliser les groupes d'utilisateurs afin d'[attribuer des droits sur les ressources](../administration/resource_access.md) plus facilement.
Les utilisateurs et groupes d'utilisateurs sont gérés dans [Centreon CIAM](../ciam/ciam.md). Seuls les administrateurs CIAM peuvent créer des groupes d'utilisateurs.

Un utilisateur peut appartenir à plusieurs groupes.

## Créer un groupe d'utilisateurs

1. Dans Centreon CIAM, allez à la page **Users > User groups**.
2. Cliquez sur **Add group**. Une popup apparaît.
3. Entrez le nom et la description de votre groupe, puis sélectionnez les noms des utilisateurs que vous souhaitez ajouter au groupe.
4. Cliquez sur **Save**. Le nouveau groupe d'utilisateurs apparaît dans la liste. Vous pourrez le voir dans votre plateforme Centreon Cloud dans quelques instants. Si un utilisateur ajouté au groupe était déjà connecté à Centreon, il devra se déconnecter puis se reconnecter pour voir les ressources nouvellement autorisées dans le [gestionnaire d'accès aux ressources](../administration/resource_access.md) via ce groupe.

## Gérer les groupes d'utilisateurs

* Pour éditer un groupe d'utilisateurs, cliquez sur l'icône rouage dans la colonne **Action**.
* Pour supprimer un groupe d'utilisateurs, cliquez sur le bouton **More actions** dans la colonne **Action**, puis cliquez sur **Delete**. Cela supprimera le groupe, mais pas les utilisateurs qui en font partie.
* Vous pouvez désactiver temporairemnt un groupe d'utilisateurs au lieu de le supprimer (si vous pensez vous en resservir ultérieurement). Utilisez le switch dans la colonne **Enabled/Disabled**.

## Utiliser un groupe d'utilisateurs

Dans Centreon Cloud, allez à la page **Administration > ACL > Resource Access Management** pour [attribuer des droits sur les ressources à des groupes d'utilisateurs](../administration/resource_access.md).
