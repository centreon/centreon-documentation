---
id: users
title: Les utilisateurs dans Centreon Cloud
---

Dans Centreon Cloud, les utilisateurs/contacts peuvent :

* Se connecter à l'interface web de Centreon.
* Recevoir des notifications (s'ils ont le rôle **Notifications**).

Tous les utilisateurs peuvent accéder à leur compte afin de changer leur mot de passe. Tous les utilisateurs peuvent voir toutes les ressources supervisées par la plateforme.

## Rôles des utilisateurs

Dans Centreon Cloud, les utilisateurs peuvent avoir 4 rôles, chacun avec des droits bien définis.

* **Operator**. Typiquement, les opérateurs sont les personnes qui supervisent les ressources. Ils peuvent:
  * utiliser la page **Statut des ressources** : ils peuvent voir le statut de toutes les ressources, filtrer la vue, acquitter des alertes, définir/planifier des acquittements, forcer un contrôle, ajouter un commentaire.
  * utiliser des vues personnalisées, des graphiques de performance et des tableaux de bord.

* **Editor**. Les éditeurs peuvent faire les mêmes choses que les opérateurs, mais ils peuvent également :
  * créer des hôtes et des services, des méta-services, des modèles, des catégories...
  * annuler un acquittement, soumettre un résultat...
  * voir la liste des collecteurs et exporter la configuration.

* **Administrator**. Les administrateurs peuvent faire les mêmes choses que les éditeurs, mais ils peuvent également :
  * créer des utilisateurs et leur attribuer des droits
  * créer des périodes de temps
  * installer des plugin packs
  * voir les logs et des informations concernant la plateforme et le moteur de supervision.

* **Notifications**: les utilisateurs ayant le rôle **Notifications** peuvent recevoir des [notifications](../alerts-notifications/notif-configuration) pour toutes les ressources supervisées par la plateforme. Ce rôle s'ajoute aux rôles **Operator**, **Editor** et **Administrator** (un utilisateur ne doit pas avoir uniquement le rôle **Notifications**, car celui-ci ne donne accès à aucun menu).

## Créer des utilisateurs

Pour pouvoir créer des utilisateurs dans Centreon Cloud, vous devez avoir le rôle  **Administrator**. Cependant, un administrateur doit lui-même posséder un rôle s'il veut pouvoir l'attribuer à un autre utilisateur. Cela signifie que vous devez également donner aux administrateurs les rôles **Editor**, **Operator** et **Notifications** si vous voulez qu'ils soient en mesure d'attribuer eux-mêmes ces rôles.

* Typiquement, un utilisateur avec le rôle **Operator** aurait également le rôle **Notifications** pour qu'il puisse recevoir des notifications.
* Si vous voulez qu'un administrateur puisse créer des opérateurs ou des éditeurs, donnez-leur également les rôles **Operator** et **Editor** (plus le rôle **Notifications** si vous voulez qu'ils puissent donner le droit de recevoir des notifications).

* Pour créer un utilisateur, allez à la page **Configuration > Utilisateurs > Contacts/Utilisateurs**, puis cliquez sur **Ajouter**.
* Pour donner le droit à un utilisateur d'accéder à une page ou de réaliser certaines actions :
  * sélectionnez le(s) rôle(s) adéquat(s) dans la liste **Lié aux rôles**.
  * si vous avez donné à un utilisateur le rôle **Notifications**, sélectionnez **notification_tmpl** dans le champ **Modèle de contact utilisé**, et sélectionnez **Activer les notifications**.
  