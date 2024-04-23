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

Tous les utilisateurs peuvent accéder à leur compte afin de changer leur mot de passe (en cliquant sur l'icône de profil en haut à droite de la fenêtre). Tous les utilisateurs peuvent voir toutes les ressources supervisées par la plateforme. Tous les utilisateurs reçoivent des [notifications](../alerts-notifications/notif-configuration.md).

## Rôles des utilisateurs

Dans Centreon Cloud, les utilisateurs peuvent avoir 3 rôles, chacun avec des droits bien définis.

* **User**. Typiquement, les "users" sont les personnes qui supervisent les ressources. Ils peuvent:
  * utiliser la page **Statut des ressources** : ils peuvent voir le statut de toutes les ressources, filtrer la vue, acquitter des alertes, définir/planifier des acquittements, forcer un contrôle, ajouter un commentaire.
  * utiliser des vues personnalisées, des graphiques de performance et des tableaux de bord.

* **Editor**. Les éditeurs peuvent faire les mêmes choses que les "users", mais ils peuvent également :
  * créer des hôtes et des services, des méta-services, des modèles, des catégories...
  * annuler un acquittement, soumettre un résultat...
  * voir la liste des collecteurs et exporter la configuration
  * installer des connecteurs de supervision.

* **Administrator**. Les administrateurs peuvent faire les mêmes choses que les éditeurs, mais ils peuvent également inviter des utilisateurs via le CIAM.

## Créer des utilisateurs

Les utilisateurs sont gérés via [Centreon CIAM](../ciam/ciam.md). Seuls les administrateurs CIAM peuvent inviter des utilisateurs dans une organisation (et donc sur une plateforme Centreon Cloud).
