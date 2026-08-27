---
id: tokens
title: Managing access tokens
description: "Learn how to create, scope, and revoke the access tokens that authenticate Centreon Experience Monitoring agents, probes, and API calls."
---

Some Experience Monitoring features require access tokens to work.

* [System agents](../installation/servers/install-system-agents.md) that monitor the health of a host server.
* [Event markers](./monitor-production-events.md) plotted on charts using the API.
* Exporting data (using [personal or organization](#organization-tokens-and-personal-tokens) API tokens).
* [STM probes](../configuration/user-journey/stm-zones.md). The STM zone must have been created before creating the token.

> Access tokens have moved to the **Tokens** tab of each organization's page. Existing tokens have been migrated automatically and will continue to work without rotation.

## Organization tokens and personal tokens

* Organization tokens are used when the action needs to keep running without a specific user.<!--  They allow you to interact with the public API, and probes and agents. --> Only users with an [**Administrator** role](../configuration/manage-users-and-rights.md#roles) can create organization tokens.
* Personal tokens are linked to individual user rights. Users with a [**Member** role](../configuration/manage-users-and-rights.md#roles) can only create **Read-only** personal tokens.

## Token permissions

Permissions are used for API tokens.

* **Read-only**: Retrieve data.
* **Admin**: Write on all public API endpoints.

Other types of tokens are automatically given a role called **Push**: writing is permitted only on a limited number of endpoints.

## Creating an access token

1. Go to the correct page according to the type of token you want to create:
   * **organization tokens**: navigate to the organization's page, then select the **Tokens** tab.
   * **personal tokens**: click your user icon in the top-right corner, then click **My Account**.
2. Click the **Create token** button.
3. In the configuration window, enter a description that explains what the token will be used for (or its type), and a validity period. The token name shows the first 4 characters of the token, followed by asterisks.
4. Enter or select all other relevant information:

   | Type of token | Field |
   | --- | --- |
   | Probe ([STM zone](../configuration/user-journey/stm-zones.md)) | STM zone that the token will allow to probe |
   | System agent | Site whose host machine will be monitored |
   | Data API (both organization and personal) | Scope (organization/site), [Role (token permissions)](#token-permissions).<br/>Base your permissions on the principle of least privilege. |
   | Custom events (event markers) | Which site you want to plot event markers on<br />Which custom icon you want your event marker to display. |

5. Click **Create a token**. The token is displayed in the **Token** field. Copy it immediately: it is displayed only once. Once the window is closed, the secret cannot be retrieved, recovered, or displayed again. If a token is lost before it is securely stored in your integration environment, you must [revoke](#revoking-an-access-token) the existing token and generate a new one.

## Revoking an access token

Revoking a token is immediate and irreversible: it terminates all active sessions and API requests that use that token.

In the list of tokens, click the **Revoke** icon associated with the token, then confirm the action. Any subsequent authentication attempts using the revoked token will result in a **401 Unauthorized** response.

## Security best practices

* Token rotation: update your tokens periodically.
* Scope minimization: use **Read-only** over **Admin** where possible.
