---
id: map-web-access
title: Managing access rights in MAP
---

This topic explains how users can access the maps according to well-defined privileges.

Users who can create maps are:

- Centreon administrators.
- Users belonging to an access group that is granted the creator role.

Rights to access a map – also called privileges – are not managed at user level, but through access groups. You can access a map because you belong to an access group that has privileges to access that map. Privileges allow you to perform some specific actions on maps.

## Role of map creator
 
### Checking creator status

Perform the following procedure to check whether you are allowed to create a map.

1. Go to **Monitoring > Map**.

2. On the **Map** homepage, the **+** button means that you are allowed to create a map. This means you belong to an access group that is granted the creator role.

### Granting creator role
 
Only Centreon administrators can create maps and allow users to create maps.

Perform the following procedure to allow users to create maps by granting rights on the access group they belong to.

1. As an administrator, go to **Monitoring > Map**.

2. Click on **Edit creators**.
A list of existing access groups is displayed.

3. Select the access group(s) you want.

4. Click on Save to confirm.
Users belonging to the selected access group are now able to create maps.
 
## Privileges on a map

Ensure users are well organized in access groups. This will facilitate the granting of privileges according to those groups.

### Managing users in access groups
Users must belong to the right group to get access to specific maps. Use the [Creating an access group](../administration/access-control-lists.md#creating-an-access-group) procedure to manage users in access groups.

### Granting privileges on a map
Privileges are granted when you perform the action of sharing a map. At map level, you can specify which access group is allowed to access that map, with specific privileges as well.

Perform the following procedure to grant privileges using the sharing action.

1. Go to **Monitoring > Map**.
The Map homepage is displayed with the list of available maps.

2. Click on the **share** button corresponding to the map you want to share.
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
