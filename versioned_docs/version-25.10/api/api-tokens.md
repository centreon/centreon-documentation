---
id: api-tokens
title: API tokens
---

Using an API token, a third-party application can call the Centreon API to perform actions in Centreon (webhooks).

A token is linked to one [Centreon user](../monitoring/basic-objects/contacts.md) and is valid only for a certain period of time. API calls will be executed according to the [rights assigned to this user](../administration/access-control-lists.md#granting-rights-to-a-user). A specific user can have several tokens.

## Who can create API tokens?

* [Users or administrators](../administration/access-control-lists.md#granting-rights-to-a-user) accessing the **Administration > API Tokens** page can create tokens for themselves.
* Administrators can also see tokens created by other users, can create tokens for other users, and can disable or delete them. This is the same for users with the **Manage API tokens** permission in [action ACLs](../administration/access-control-lists.md#access-filters-on-actions).

## Creating an API token

1. Go to **Administration > API Tokens**.
2. Click **Add**. A pop-up window appears.
3. Fill in the required fields and then click **Generate new token**. A **Token** field appears in the window. You can click the eye icon to display the token if you want.
4. Copy the token using the "copy" button to the right of the field. Store the token carefully: you will not be able to display it a second time.
5. Click **Close**.

## Managing API tokens

The list of tokens shows the status of each token in the far left column (enabled, valid but disabled, expired). The date when the token was last used is also shown.

Users with the **Administrator** role can:

* Disable a valid API token using the **Enabled/Disabled** switch to the right of the line. The token can still be reenabled later.
* Delete a token using the **Delete** button.
