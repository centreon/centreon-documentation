---
id: user_groups
title: User groups in Centreon Cloud
---

In Centreon Cloud, user groups are used to [grant rights on resources](../administration/resource_access.md) more easily.
Users and user groups are managed in [Centreon CIAM](../ciam/ciam.md). Only CIAM Administrators can create and manage user groups.

A user can belong to several user groups.

## Creating a user group

1. In Centreon CIAM, go to **Users > User groups**.
2. Click **Add group**. A popup window appears.
3. Enter a name and a description for your user group, then select the names of the users you want to be in the group.
4. Click **Save**. The new user group appears in the list. You will be able to see it in your Centreon Cloud platform shortly. If a user that was added to the group was already logged in to Centreon, they may need to log out and back in to see the resources that have been authorized via this group by a [resource access rule](../administration/resource_access.md).

## Managing user groups

* To edit a user group, click the gear icon in the **Action** column.
* To delete a user group, click the **More actions** button in the **Action** column, then click **Delete**. This will delete the group, but not the users that were part of it.
* You can temporarily disable a user group instead of deleting it (because you think you might need it later). Use the switch in the **Enabled/Disabled** column.

## Using a user group

In Centreon Cloud, go to **Administration > ACL > Resource Access Management** to [grant rights on resources to user groups](../administration/resource_access.md).
