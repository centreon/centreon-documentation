---
id: users
title: Les utilisateurs dans Centreon Cloud
---

Dans Centreon Cloud, les utilisateurs/contacts peuvent :

* Se connecter à l'interface web de Centreon.
* Recevoir des notifications.
* Accéder aux paramètres de leur profil (icône de profil en haut à droite de l'interface), et :
  * Passer en mode sombre.
  * Changer la langue de l'interface utilisateur.
  * Afficher la page en mode plein écran (F).

Tous les utilisateurs peuvent accéder à leur compte afin de changer leur mot de passe (en cliquant sur l'icône de profil en haut à droite de la fenêtre). Les utilisateurs peuvent voir les ressources supervisées par la plateforme selon les [droits attribués par leur administrateur](../administration/resource_access.md). Tous les utilisateurs reçoivent des [notifications](../alerts-notifications/notif-configuration.md).

## Rôles des utilisateurs

Dans Centreon Cloud, les utilisateurs peuvent avoir 3 rôles, chacun avec des droits bien définis sur les menus et les actions.

* **User**. Typiquement, les "users" sont les personnes qui supervisent les ressources. Ils peuvent:
  * utiliser la page **Statut des ressources** : ils peuvent voir le statut de toutes les ressources, filtrer la vue, acquitter des alertes, définir/planifier des acquittements, forcer un contrôle, ajouter un commentaire.
  * utiliser des vues personnalisées, des graphiques de performance et des tableaux de bord.

* **Editor**. Les éditeurs peuvent faire les mêmes choses que les "users", mais ils peuvent également :
  * créer des hôtes et des services, des méta-services, des modèles, des catégories...
  * annuler un acquittement, soumettre un résultat...
  * voir la liste des collecteurs et exporter la configuration
  * installer des connecteurs de supervision.

* **Administrator**. Les administrateurs peuvent faire les mêmes choses que les éditeurs, mais ils peuvent également inviter des utilisateurs via le CIAM, créer des groupes d'utilisateurs, et [leur attribuer des droits sur les ressources](../administration/resource_access.md).

## Créer des utilisateurs

Les utilisateurs sont gérés via [Centreon CIAM](../ciam/ciam.md). Seuls les administrateurs CIAM peuvent inviter des utilisateurs dans une organisation (et donc sur une plateforme Centreon Cloud).

Une fois créés, les utilisateurs peuvent être placés dans des groupes d'utilisateurs, afin d'accélérer la création de [règles d'accès aux ressources](../administration/resource_access.md). Celles-ci servent à définir quels utilisateurs peuvent voir quelles ressources.

## Supprimer un utilisateur d'une organisation

Vous pouvez supprimer des utilisateurs d'une organisation : bien qu'ils continueront à exister dans le CIAM et pourront toujours s'y connecter, ils ne pourront plus accéder à cette organisation, ni accéder à aucune des applications de cette organisation.

Pour supprimer un utilisateur d'une organisation, allez à la page **Users > User list** pour cette organisation, puis cliquez sur **Remove user** dans la colonne **Action**.
