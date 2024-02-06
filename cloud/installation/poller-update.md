---
id: poller-update
title: Updating a poller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This procedure describes how to update a poller from one minor version to another (e.g. from 23.10.x to 23.10.y).

## Updating a poller

1. On your central server, click the arrow next to **Pollers** at the left of the header bar.
2. In the pop-up that appears, click **Copy install command**. The command is copied to your clipboard.
3. On your poller, in your terminal, paste the install command and execute it.
4. [Deploy the poller's configuration](../monitoring/monitoring-servers/deploying-a-configuration.md),
and choose the **Restart** method for the Engine process.
5. Finally, restart the Gorgone service if it is used on the poller:

  ```shell
  systemctl restart centengine gorgoned
  ```
  