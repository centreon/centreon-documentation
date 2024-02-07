---
id: api-tokens
title: API tokens
---

Using the API, a third-party application can perform actions in Centreon. To be able do that, the third-party application must authenticate itself to Centreon, using a user account and an API token.

A token is linked to one [Centreon user](../users/users.md). API calls will be executed according to the [rights assigned to this user](../users/users.md#user-roles). A specific user can have several tokens.

## Who can create API tokens?

* [Users with an **Editor** or **Administrator** role](../users/users.md#user-roles) can access the **Administration > API tokens** page and can create tokens for themselves.
* Users with an **Administrator** role are also able to see tokens created by other users, and to create tokens for other users.

## Creating an API token

1. Go to **Administration > API tokens**.
2. Click **Generate new token**. A pop-up window appears.
3. Fill in the required fields and then click **Generate new token**. A **Token** field appears in the window.
4. Copy the token using the button to the right of the field. Store the token carefully: you will not be able to display it a second time.
5. Click **Done**.
