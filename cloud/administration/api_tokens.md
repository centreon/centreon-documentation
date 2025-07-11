---
id: api-tokens
title: Authentication tokens
---

Using an authentication token, a third-party application can call the [Centreon API](https://docs-api.centreon.com/api/centreon-web/cloud/) or use the [Centreon Monitoring Agent (CMA)](../../pp/integrations/plugin-packs/getting-started/how-to-guides/cma.md) connector to perform actions in Centreon.

API tokens are linked to one [Centreon user](../users/users.md) and is valid only for a period of time determined when creating the token. API calls will be executed according to the [rights assigned to this user](../users/users.md#user-roles). A specific user can have several API tokens.

CMA tokens are not linked to a single user.

## Who can create authentication tokens?

[Users with an **Administrator** role](../users/users.md#user-roles) can access the **Administration > Authentication tokens** page and can:
* create tokens for themselves.
* see tokens created by other users.
* create tokens for other users, and can disable or delete them.

## Creating an auhtentication token

1. Go to **Administration > authentication Tokens**.
2. Click **Add**. A pop-up window appears.
3. Fill in the required fields. API type is selected by default, you can change it to Centreon Monitoring Agent by clicking on the field. Click **Generate new token**. A **Token** field appears in the window. You can click the eye icon to display the token.
4. Copy the token using the "copy" button to the right of the field. Store the token carefully: you will not be able to display it a second time.
5. Click **Close**.

## Managing authentication tokens

The list of tokens shows the status of each token in the far left column (enabled, valid but disabled, expired). The date when the token was last used is also shown.

Users with the **Administrator** role can:

* Disable a valid authentication token using the **Enabled/Disabled** switch to the right of the line. The token can still be reenabled later.
* Delete a token using the **Delete** button.


