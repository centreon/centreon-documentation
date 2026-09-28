---
id: user-rights
title: User rights in Centreon Log Management
---

In Centreon Log Management, users can:

* Log in to the Log Management interface.
* Access their profile's settings (profile icon at the top right of the interface), and:
  * Switch to dark mode.
  * Change the user interface language.
  * Display the page in full screen mode (F).

All users can access their own account to change their password (by clicking the profile icon in the top right corner of the screen).

## User roles

There are three roles for users in Centreon Log Management, each with a specific set of rights on menus and actions.

* **User**. Users can:
  * Use the Log explorer to view and search for logs.
  * View dashboards.
  * View alert events.

* **Editor**. Editors can do the same things as **Users**, but they also can:
  * Create and edit dashboards.
  * Create and edit alert rules.
  * Create and edit notifications.

* **Administrator**. **Administrators** can do the same things as **Editors**, but they also can:
   * Manage users using Centreon Hub.
   * Acces the **Administration** pages.

## Creating users

Users are managed in [Centreon Hub](centreon-hub.md). Only Centreon Hub Administrators can invite users into an organization (i.e. to a Centreon Log Management platform).

## Removing a user from an organization

You can remove users from an organization: although they will still exist in Centreon Hub and will be able to connect to it, they will no longer be able to see this organization, or to access any of this organization's applications, including their Centreon platforms.

To remove a user from an organization, go to this organization's user list (**Users > User list**), then click **Remove user** in the **Action** column.
