---
id: manage-users-and-rights
title: Manage users and their rights
description: Manage organization members, roles, and permission levels
---

Experience Monitoring licenses have no user count limits. We recommend inviting everyone involved in the project, regardless of their role. Go to the **Organization** page to invite users.

## Roles

In Experience Monitoring, roles are as follows:

- **Member**: Members can read information. They cannot change site or Experience Monitoring scenario configuration. They can only manage their own settings and subscriptions to alerts and reports, and add comments to charts.
- **Administrator**: Administrators have a wider set of permissions. They can modify scenario settings, add/remove users to the organization, enable/disable reports and alerts, add users to reports and alerts, and more.
- **Owners**: owners are the people responsible for an organization. They have the right to modify anything on an organization and manage administrators.

Permissions are shared across all sites within the same organization.

## Access the configuration menu

All actions described here are performed from the **Organization** page accessed from the site selector.

![image](../assets/configuration/user-journey/organization-page.png)

## Managing users within your organization

> If nobody in your organization is an Administrator or Owner, contact the [Centreon support](http://support.centreon.com/) or your reseller to manage your organization.

### Managing users

To add or remove a user or to manage their permissions, you must have the **Administrator** or **Owner** role.

From the **Organization's configuration** page, click on the **User Accounts** tab

Existing users are listed according to their role.

- To add a user, click the add icon inside the column of the role you want to assign and enter the new user's email address. If they don't yet have an Experience Monitoring account, they will be invited to create one automatically.
- To change an existing user's permissions, drag & drop them into the column corresponding to the role you want to assign.
- To remove a user's permissions, click the cross next to their name.

> If you want to remove a user's access from multiple organizations, you must do it for each organization separately. If you have access to many organizations, contact the [Centreon support](http://support.centreon.com/) for assistance.

## Automatic password expiration

Users with the **Owner** role can define a password expiration policy for your organization.

From the **General** tab, you can enable or disable password expiration and set the number of days before users must change their password.

Users will be required to change their password after the number of days you set. If a same user belongs to multiple organizations, they must change their password according to the shortest period defined across all their organizations.
