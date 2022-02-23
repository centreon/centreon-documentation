---
id: users
title: Users in Centreon Cloud
---

In Centreon Cloud, users/contacts can:

* Log in to the Centreon web interface.
* Receive notifications (if they are given the **Notifications** role).

## User roles

There are 3 roles for users in Centreon Cloud, each with a specific set of rights.

* **Users**. Typically, the people who will do the monitoring itself. They can:
  * use the **Resources Status** page : they can view the status of all resources, filter the view, acknowledge alerts, define/plan downtimes, force a check, add a comment.
  * use custom views (create, edit and share them, but not delete them).

* **Editors**. They can do the same things as **Users**, but they also can:
  * create hosts, services, users, time periods, templates, categories...
  * disacknowledge an acknowledgement, submit a result...
  * view the list of pollers, export the configuration.

* **Notifications**: People with the **Notifications** role can receive [notifications](../alerts-notifications/notif-configuration) for all resources monitored by the platform. This role comes in addition to the **Users** and **Editors** roles (a user cannot have only the **Notifications** role, as this role does not give access to any menus).

All users can access their own account to change their password. Each user belongs at least to the **Users** or **Editors** group.

## Creating users

You must belong to the **Editor** group to be able to <!--[create a user](cloud-contacts-create)--> in Centreon Cloud. However, a user must belong to a group if they want to create a user within that group. This means that you should also give **Editors** the **Users** and **Notifications** roles if you want them to be able to give users these roles.

* Typically, you would give **Users** the **Users** and **Notifications** roles if you wanted them to be able to receive notifications.
* If you want **Editors** to be able to create **Users**, give **Editors** both the **Users** and **Editors** roles (plus the **Notifications** role if you want them to be able to receive notifications).
