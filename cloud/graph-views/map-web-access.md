---
id: map-web-access
title: Manage access rights in MAP
description: "Manage MAP user roles and privileges to control who can view, edit, share, or delete maps"
---

This topic explains how users can access maps according to well-defined privileges.

## Roles in MAP

### Definitions

There are two types of roles:

- **Administrators / Editors:** can create new maps. They can see, edit, delete and share all maps.
- **Users (also called Operators):** by default, they have no privileges on maps. They can only see the maps that are shared with them.

Rights to access a map (also called privileges) are not managed at user level, but through access groups. You can access a map if you belong to an access group that has privileges on that map. Privileges allow you to perform specific actions on maps.

At map level, Administrators and Editors can grant privileges to Users.

### Checking creator status

Perform the following procedure to check whether you are allowed to create a map.

1. Go to **Monitoring > Map**.

2. If the **Add a Map** button is displayed, you belong to an access group that is granted the creator role, and you can create maps.

## Privileges on a map

> The **Editor** role must always keep the **Owner** privilege. If you change this privilege, all users may lose access to maps. Technical improvements are in progress to avoid this issue.

You grant privileges when you share a map. At map level, you can specify which access group is allowed to access that map, with specific privileges as well.

### Granting privileges to Users role

Users only get privileges on the maps that are shared with them.

Perform the following procedure to grant privileges by sharing a map.

1. Go to **Monitoring > Map**.
The **Map** page is displayed with the list of available maps.

2. Click the **share** button corresponding to the map you want to share.
The list of available roles is displayed.

3. For the **Users** role (called **Operators** in the list), select the privilege to grant in the dropdown list.

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

Access control to maps is only enforced at the map level. When you have the **Viewer** privilege, you can view a map and all its included resources, even if you do not have the corresponding ACL. When editing a map, you can only add resources if you have the corresponding ACL.
