---
id: user-rights
title: Droits utilisateur dans Centreon Log Management
---

Dans Centreon Log Management, les utilisateurs peuvent :

* Se connecter à l'interface Log Management.
* Accéder aux paramètres de leur profil (icône de profil en haut à droite de l'interface), et :
  * Passer en mode sombre.
  * Changer la langue de l'interface utilisateur.
  * Afficher la page en mode plein écran (F).

Tous les utilisateurs peuvent accéder à leur propre compte pour changer leur mot de passe (en cliquant sur l'icône de profil en haut à droite de l'écran).

## Rôles des utilisateurs

Il existe trois rôles pour les utilisateurs dans Centreon Log Management, chacun disposant d'un ensemble spécifique de droits sur les menus et les actions.

* **User**. Les utilisateurs peuvent :
  * Utiliser l'explorateur de logs pour consulter et rechercher des logs.
  * Consulter les tableaux de bord.
  * Consulter les évènements d'alerte.

* **Editor**. Les éditeurs peuvent faire les mêmes choses que les **Utilisateurs**, mais ils peuvent également :
  * Créer et modifier des tableaux de bord.
  * Créer et modifier des règles d'alerte.
  * Créer et modifier des notifications.

* **Administrator**. Les administrateurs peuvent faire les mêmes choses que les **Éditeurs**, mais ils peuvent également :
   * Gérer les utilisateurs via Centreon Hub.
   * Accéder aux pages d'**Administration**.

## Créer des utilisateurs

Les utilisateurs sont gérés dans [Centreon Hub](../users/centreon-hub.md). Seuls les administrateurs de Centreon Hub peuvent inviter des utilisateurs dans une organisation (c'est-à-dire dans une plateforme Centreon Log Management).

## Supprimer un utilisateur d'une organisation

Vous pouvez supprimer des utilisateurs d'une organisation : ils continueront d'exister dans Centreon Hub et pourront toujours s'y connecter, mais ils ne pourront plus voir cette organisation, ni accéder à aucune des applications de cette organisation, y compris ses plateformes Centreon.

Pour supprimer un utilisateur d'une organisation, accédez à la liste des utilisateurs de cette organisation (**Users > User list**), puis cliquez sur **Remove user** dans la colonne **Action**.