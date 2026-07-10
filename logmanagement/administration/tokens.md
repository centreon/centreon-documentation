---
id: tokens
title: Managing authentication tokens
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Each host needs a token to authenticate with Centreon Log Management. This token allows the host to securely identify itself when sending data, ensuring that only authorized hosts can connect to and use your Log Management platform.

You can also generate a token to [use the API](../api.md).

## Creating a token

1. Go to **Administration > Token management** and then click **Add**.
2. In the window that opens, enter a name (mandatory) and a description (optional) for your token.
3. Click **Generate token**. The window displays your token - it displays it one time only: store it securely. If you close the window, you won't be able to display the token again.

You can delete a token using the **Delete** icon on the **Administration > Token management** page. If you delete a token, any hosts that are using it will no longer be able to authenticate with Log Management. As a result, logs sent by those hosts will stop reaching your Log Management platform until a new valid token is configured. Deleting a token cannot be undone.

## Using tokens in your Open Telemetry Collector's configuration

See [Configuring an OpenTelemetry collector](../collector/collector.md).
