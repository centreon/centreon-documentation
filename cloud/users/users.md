---
id: users
title: Users in Centreon Cloud
---

In Centreon Cloud, users/contacts can:

* Log in to the Centreon web interface.
* Receive notifications.

All users can access their own account to change their password (by clicking on the profile icon in the top right corner of the screen). All users can see all resources monitored by the platform. All users receive [notifications](../alerts-notifications/notif-configuration.md).

## User roles

There are 3 roles for users in Centreon Cloud, each with a specific set of rights.

* **User**. Typically, **Users** are the people who will do the monitoring. They can:
  * use the **Resources Status** page : they can view the status of all resources, filter the view, acknowledge alerts, define/plan downtimes, force a check, add a comment.
  * use custom views, performance graphs and dashboards.

* **Editor**. **Editors** can do the same things as **Users**, but they also can:
  * create hosts and services, meta-services, templates, categories...
  * disacknowledge an acknowledgement, submit a result...
  * view the list of pollers, export the configuration.

* **Administrator**. **Administrators** can do the same things as **Editors**, but they also can:
  * create time periods
  * install plugin packs
  * view logs and information about the platform and the monitoring engine.

## Creating users

Users are managed in [Centreon CIAM](../ciam/ciam.md). Only CIAM Administrators can invite users into an organization (i.e. to a Centreon Cloud platform).
