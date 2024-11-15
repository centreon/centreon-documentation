---
id: contacts
title: Contacts/Users
---

In Centreon, users can:

* Receive [notifications](../../alerts-notifications/notif-configuration.md).
* Log in to the Centreon web interface: each user has its own [rights](../../administration/access-control-lists.md) to connect to the web interface.

You can:
- [Create users manually](contacts-create.md).
- [Connect your Centreon to an LDAP directory](../../administration/parameters/ldap.md).
- [Customize the use of Centreon](./customization.md):
  - Switch to dark mode.
  - Change the user interface language.
  - Reset the password.

## Unblock users

The access to Centreon is blocked for a user failing several times to log in (the number of attempts is set by the administrator). As soon as a user is blocked, a new column named **Unblock** appears in the **Configuration > Users > Contacts / Users** page, and you can see a red padlock at the blocked user's level.

1. Click on the red padlock.
2. Confirm you action.

The user is now unblocked and can connect to Centreon again.
