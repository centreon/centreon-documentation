---
id: poller-update-upgrade
title: Updating/upgrading a poller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Your poller should always be in the latest available version (i.e. in the latest minor version of the latest major version).

* If your poller is already in the latest major version but not in its latest minor version, performing this procedure will update it to the latest minor version. Example: if the latest version is 23.10.y and your poller is in version 23.10.x, then it will be updated to 23.10.y.
* If your poller is in another major version than the latest, this procedure will not update it to the latest minor version of this major version. The poller will be upgraded to the latest minor version of the latest major version available instead (e.g. it will be upgraded from 23.04.x to 23.10.y).

## Updating or upgrading a poller

1. On your central server, click the arrow next to **Pollers** at the left of the header bar.
2. In the pop-up that appears, click **Copy install command**. The command is copied to your clipboard.
3. On your poller, in your terminal, paste the install command and execute it.
4. [Deploy the poller's configuration](../monitoring/monitoring-servers/deploying-a-configuration.md),
and choose the **Restart** method for the Engine process.
5. Finally, restart the Gorgone service if it is used on the poller:

  ```shell
  systemctl restart centengine gorgoned
  ```
  