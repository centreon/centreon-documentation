---
id: authentication-tokens
title: Authentication tokens
description: Overview of API and CMA authentication tokens, who can create them, and how to generate, disable, or delete them
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

There are several types of authentication tokens:

* [API tokens](api_tokens.md): used to authenticate requests made to the Centreon API, allowing external tools or scripts to interact with the platform programmatically.
* [CMA](../cma/cma.md) tokens: used to secure communication between the CMA agent and the poller — the agent includes it in its requests, and the monitoring engine checks that it's present and valid before accepting the connection.
<!--* Poller tokens: used to authenticate a poller when registering it to a central server, in PullWSS mode. It ensures that only authorized pollers can connect and send data to the central server.-->

On the **Administration > Authentication tokens** page, you can filter the list of tokens by various criteria, including by type.

## Who can create authentication tokens?

[Users with an **Administrator** role](../users/users.md#user-roles) can access the **Administration > Authentication tokens** page and can:

* create tokens for themselves.
* see the list of tokens created by other users.
* create tokens for other users, and can disable or delete them.

## Creating an authentication token

1. Go to **Administration > Authentication Tokens**.
2. Click **Add**. A pop-up window appears.
3. Fill in the required fields, select the type of token you want, then click **Generate new token**. A **Token** field appears in the window. You can click the eye icon to display the token if you want.
4. Copy the token using the **Copy** button to the right of the field.
   * API tokens: Store the token carefully, as you will not be able to display it a second time.
   * CMA tokens can be displayed again at any time.
5. Click **Close**.

## Managing authentication tokens

The list of tokens shows the status of each token in the far left column (enabled, valid but disabled, expired). <!-- The date when the token was last used is also shown. -->

Users with the **Administrator** role can:

* Disable a valid authentication token using the **Enabled/Disabled** switch to the right of the line. The token can still be reenabled later.
* Delete a token using the **Delete** button.
