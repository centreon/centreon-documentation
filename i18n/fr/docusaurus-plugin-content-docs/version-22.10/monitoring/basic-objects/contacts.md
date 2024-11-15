---
id: contacts
title: Les utilisateurs/contacts
---

Dans Centreon, les utilisateurs/contacts peuvent :

- Recevoir des [notifications](../../alerts-notifications/notif-configuration.md).
- Se connecter à l’interface web de Centreon : chaque contact dispose de ses propres [droits](../../administration/access-control-lists.md) afin de se connecter à l’interface web.
- [Personnaliser l'utilisation de Centreon](./customization.md) :
  - Passer en mode sombre.
  - Changer la langue de l'interface utilisateur.
  - Réinitialiser le mot de passe.

Ces procédures permettent de gérer les utilisateurs :

- [Créer des utilisateurs/contacts manuellement](contacts-create.md). 
- [Connecter votre Centreon à un annuaire LDAP](../../administration/parameters/ldap.md).

## Débloquer les utilisateurs

L'accès à Centreon est bloqué pour un utilisateur qui échoue plusieurs fois pour se connecter (le nombre de tentatives est fixé par l'administrateur). Dès qu'un utilisateur est bloqué, une nouvelle colonne nommée **Débloquer** apparaît dans la page **Configuration > Utilisateurs > Contacts / Utilisateurs**, et vous pouvez voir un cadenas rouge au niveau de l'utilisateur bloqué.

1. Cliquez sur le cadenas rouge.
2. Confirmez l'action.

L'utilisateur est maintenant débloqué et peut à nouveau se connecter à Centreon.
