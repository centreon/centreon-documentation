---
id: manage-users-and-rights
title: Gérer les utilisateurs et leurs droits
description: Gérer les membres, rôles et niveaux de droits de l'organisation
---

Les licences Experience Monitoring n'ont pas de limite de nombre d'utilisateurs. Nous recommandons d'inviter toutes les personnes impliquées dans le projet, quel que soit leur rôle. Accédez à la page **Organisation** pour inviter des utilisateurs.

## Rôles

Dans Experience Monitoring, les rôles possibles sont les suivants :

- **Membre** : les membres peuvent consulter les informations. Ils ne peuvent pas modifier la configuration du site ou des scénarios Experience Monitoring. Ils peuvent uniquement gérer leurs propres paramètres et abonnements aux alertes et rapports, et ajouter des commentaires aux graphiques.
- **Administrateur** : les administrateurs disposent d'un ensemble de permissions plus étendu. Ils peuvent modifier les paramètres des scénarios, ajouter/supprimer des utilisateurs dans l'organisation, activer/désactiver les rapports et alertes, ajouter des utilisateurs aux rapports et alertes...
- **Propriétaires** : les propriétaires sont les personnes responsables d'une organisation. Ils ont le droit de modifier tout ce qui concerne une organisation et de gérer les administrateurs.

Les permissions sont partagées entre tous les sites d'une même organisation.

## Accéder au menu de configuration

Toutes les actions décrites ici sont effectuées depuis la page **Organisation**, accessible depuis le sélecteur de site.

![image](../assets/configuration/user-journey/organization-page.png)

## Gérer les utilisateurs de votre organisation

> Si personne dans votre organisation n'a le rôle **Administrateur** ou **Propriétaire**, contactez le [support Centreon](http://support.centreon.com/) ou votre revendeur pour gérer votre organisation.

### Gérer les utilisateurs

Pour ajouter ou supprimer un utilisateur ou gérer ses permissions, vous devez avoir le rôle **Administrateur** ou **Propriétaire**.

Depuis la page **Configuration de l'organisation**, cliquez sur l'onglet **Comptes utilisateurs**.

Les utilisateurs existants sont listés selon leur rôle.

- Pour ajouter un utilisateur, cliquez sur l'icône d'ajout dans la colonne du rôle que vous souhaitez attribuer et saisissez l'adresse e-mail du nouvel utilisateur. S'il ne possède pas encore de compte Experience Monitoring, il sera automatiquement invité à en créer un.
- Pour modifier les permissions d'un utilisateur existant, faites-le glisser dans la colonne correspondant au rôle que vous souhaitez lui attribuer.
- Pour supprimer les permissions d'un utilisateur, cliquez sur la croix à côté de son nom.

> Si vous souhaitez supprimer l'accès d'un utilisateur à plusieurs organisations, vous devez le faire pour chaque organisation séparément. Si vous avez accès à de nombreuses organisations, contactez le [support Centreon](http://support.centreon.com/) pour obtenir de l'aide.

## Expiration automatique des mots de passe

Les utilisateurs ayant le rôle **Propriétaire** peuvent définir une politique d'expiration des mots de passe pour votre organisation.

Depuis l'onglet **Général**, vous pouvez activer ou désactiver l'expiration des mots de passe et définir le nombre de jours avant que les utilisateurs doivent changer leur mot de passe.

Les utilisateurs seront invités à changer leur mot de passe à l'issue du nombre de jours défini. Si un même utilisateur appartient à plusieurs organisations, il devra changer son mot de passe selon la période la plus courte définie parmi toutes ses organisations.
