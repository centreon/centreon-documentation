---
id: map-understanding-access
title: Understanding map access (ACL)
description: "Understand how access control and privileges work for Centreon MAP views"
---

This topic explains how users can access maps according to well-defined privileges.

Rights to access a map – also called privileges – are not managed at user level, but through access groups. You can access a map because you belong to an access group that has privileges to access that map. Privileges allow you to perform some specific actions on maps.

## Privileges on a map

Ensure users are well organized in access groups. This will facilitate the granting of privileges according to those groups.

### Managing users in access groups
Users must belong to the right group to get access to specific maps. Use the [Creating an access group](../administration/access-control-lists.md#creating-an-access-group) procedure to manage users in access groups.

### Granting privileges on a map
Privileges are granted when you perform the action of sharing a map. At map level, you can specify which access group is allowed to access that map, with specific privileges as well.

Perform the following procedure to grant privileges using the sharing action.

1. Go to **Monitoring > Map**.
The Map homepage is displayed with the list of available maps.

2. Click the **share** button corresponding to the map you want to share.
The list of available access groups is displayed.

3. For the access group you want, select the privilege to grant in the dropdown list.

4. Click **Save** to confirm.
If a user belongs to several access groups, the privilege with the most permissions will be applied.

This table describes the types of privileges and related permissions:

|            | None | Viewer | Editor | Owner |
|------------|------|--------|--------|-------|
| Can see    |      |   x    |    x   |   x   | 
| Can edit   |      |        |    x   |   x   |
| Can share  |      |        |        |   x   |
| Can delete |      |        |        |   x   |

- When you create a map, you and users in your access group have Owner privileges on that map.
- Centreon administrators are creators and have Owner privileges on all maps.
- Users with Owner privileges can also set or change map properties (name and icon).
- Sharing a map allows the recipient to acquire privileges on that map.

Access control to maps is only enforced at the map level. When you have the “Viewer” privilege, you can view a map and all its included resources, even if you do not have the corresponding ACL. When editing a map, you can only add resources if you have the corresponding ACL.
