---
id: users
title: Users in Centreon Cloud
---

In Centreon Cloud, users/contacts can:

* Log in to the Centreon web interface.
* Receive notifications.
* Access their profile's settings (profile icon at the top right of the interface), and:
  * Switch to dark mode.
  * Change the user interface language.
  * Display the page in full screen mode (F).

All users can access their own account to change their password (by clicking the profile icon in the top right corner of the screen). Users can see resources monitored by the platform according to the [rights granted by their administrator](../administration/resource_access.md).

## User roles

There are three roles for users in Centreon Cloud, each with a specific set of rights on menus and actions.

* **User**. Typically, **Users** are the people who will do the monitoring. They can:
  * use the **Resources Status** page to view the status of all resources, filter the view, acknowledge alerts, define/plan downtime, force a check, add a comment.
  * use custom views, performance graphs and dashboards.

* **Editor**. **Editors** can do the same things as **Users**, but they also can:
  * create hosts and services, meta-services, templates, categories, etc.
  * disacknowledge an acknowledgement, submit a result, etc.
  * view the list of pollers, export the configuration and access the poller installation command.
  * install Monitoring Connectors.

* **Administrator**. **Administrators** can do the same things as **Editors**, but they can also invite users using the CIAM, create user groups, and [grant users the right to see resources](../administration/resource_access.md).

## Creating users

Users are managed in [Centreon CIAM](../ciam/ciam.md). Only CIAM Administrators can invite users into an organization (i.e. to a Centreon Cloud platform).

Once created, users can be sorted into user groups to accelerate the creation of [resource access rules](../administration/resource_access.md). These are used to define which users can see which resources.

## Removing a user from an organization

You can remove users from an organization: although they will still exist in the CIAM and will be able to connect to it, they will no longer be able to see this organization, or to access any of this organization's applications, including their Centreon platforms.

To remove a user from an organization, go to this organization's user list (**Users > User list**), then click **Remove user** in the **Action** column.
