---
id: poller-remove
title: Removing a poller from your architecture
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import MoveResources from './_move-resources.mdx';

To remove a poller from your Centreon architecture:

1. If you haven't already done so, move the resources that the poller used to monitor to another poller:

   <MoveResources />

   The services monitored by this poller are moved to the other poller automatically.
3. On the **Configuration > Pollers > Pollers** page, select the poller you want to remove, then click **Delete**. The poller disappears from the list of pollers.
4. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) for the central server. The poller is removed for good. This cannot be undone.
