---
id: map-web-access
title: Manage access rights in MAP
---

This topic explains how users can access the maps according to well-defined privileges.

## Roles in MAP

### Definitions

The following different types of role exist:

- **Administrators / Editors:** can create new maps. Can see, edit, delete and share all maps.
- **Users (also called Operators):** by default, they have no privileges on maps. They only can see maps shared with them.

Rights to access a map – also called privileges – are not managed at user level, but through access groups (or roles). You can access a map because you belong to a type of role that has privileges to access that map. Privileges allow you to perform some specific actions on maps.

At map level, Administrators and Editors can grant privileges to Users.
 
### Checking creator status

Perform the following procedure to check whether you are allowed to create a map.

1. Go to **Monitoring > Map**.

2. On the **Map** homepage, the **+** button means that you are allowed to create a map. This means you belong to a type of role that is granted the creator privilege.

## Privileges on a map

> The **Editor** role must imperatively keep the **Owner** privilege. If you change this privilege, all users may lose access to maps. Technical improvements are in progress to avoid this issue.

Privileges are granted when you perform the action of sharing a map. At map level, you can specify which type of role is allowed to access that map, with specific privileges as well. 

### Granting privileges to Users role

Users (in the context of users having the role of User in Centreon) only get privileges when maps are shared with them.

Perform the following procedure to grant privileges using the sharing action.

1. Go to **Monitoring > Map**.
The Map homepage is displayed with the list of available maps.

2. Click the **share** button corresponding to the map you want to share.
The list of available roles is displayed.

3. For the **Users** (called **Operators** in the list) role, select the privilege to grant in the dropdown list.

4. Click **Save** to confirm.

### Related permissions

This table describes the types of privileges and related permissions:

|            | None | Viewer | Editor | Owner |
|------------|------|--------|--------|-------|
| Can see    |      |   x    |    x   |   x   | 
| Can edit   |      |        |    x   |   x   |
| Can share  |      |        |        |   x   |
| Can delete |      |        |        |   x   |

- Users with Owner privileges can also set or change map properties (name and icon).
- Sharing a map allows the recipient to acquire privileges on that map.

Access control to maps is only enforced at the map level. When you have the “Viewer” privilege, you can view a map and all its included resources, even if you do not have the corresponding ACL. When editing a map, you can only add resources if you have the corresponding ACL.
