---
id: users
title: Users in Centreon Cloud
---

In Centreon Cloud, users/contacts can:

* Log in to the Centreon web interface.
* Receive notifications (if they are given the **Notification** role).

All users can access their own account to change their password. All users can see all resources monitored by the platform.

## User roles

There are 4 roles for users in Centreon Cloud, each with a specific set of rights.

* **Operator**. Typically, **Operators** are the people who will do the monitoring. They can:
  * use the **Resources Status** page : they can view the status of all resources, filter the view, acknowledge alerts, define/plan downtimes, force a check, add a comment.
  * use custom views, performance graphs and dashboards.

* **Editor**. **Editors** can do the same things as **Operators**, but they also can:
  * create hosts and services, meta-services, templates, categories...
  * disacknowledge an acknowledgement, submit a result...
  * view the list of pollers, export the configuration.

* **Administrator**. **Administrators** can do the same things as **Editors**, but they also can:
  * create users and grant them rights
  * create time periods
  * install plugin packs
  * view logs and information about the platform and the monitoring engine.

* **Notification**: People with the **Notification** role can receive [notifications](../alerts-notifications/notif-configuration) for all resources monitored by the platform. This role comes in addition to the **Operator**, **Editor** and **Administrator** roles (a user cannot have only the **Notification** role, as this role does not give access to any menus).

## Creating users

You must have the **Administrator** role to be able to create a user in Centreon Cloud. However, a user must belong to a group if they want to create a user within that group. This means that you should also give **Administrators** the **Editor**, **Operator** and **Notification** roles if you want them to be able to give users these roles.

* Typically, you would give an **Operator** the **Operator** and **Notification** roles if you wanted them to be able to receive notifications.
* If you want **Administrators** to be able to create **Operators** or **Editors**, give them also both the **Operator** and **Editor** roles (plus the **Notification** role if you want them to be able to receive notifications).

* To create a user, go to **Configuration > Users > Contacts/Users**, then click **Add**.
* To grant a user the right to access a page or to perform an action, select the role(s) you want from the **Roles** list.
  