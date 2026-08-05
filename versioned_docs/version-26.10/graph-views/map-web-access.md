---
id: map-web-access
title: Managing access rights in MAP
description: "Manage user privileges and access rights on Centreon MAP views"
---

This topic explains how administrators can manage who is allowed to create maps in Centreon MAP.

Users who can create maps are:

- Centreon administrators.
- Users belonging to an access group that is granted the creator role.

For more information about how access to existing maps is controlled through privileges, see [Understanding map access (ACL)](map-understanding-access.md).

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

4. Click Save to confirm.
Users belonging to the selected access group are now able to create maps.
