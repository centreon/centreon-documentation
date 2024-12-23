---
id: poller-remove
title: Removing a poller from your architecture
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import MoveResources from './_move-resources.mdx';

> In order to ensure the stability and integrity of your monitoring environment, do not delete the central poller. The central poller plays a critical role in the overall operation of the Centreon platform. Removing it can lead to unintended disruptions in service. We are in the process of implementing safeguards to prevent the accidental deletion of the central poller.

To remove a poller from your Centreon architecture:

1. If you haven't already done so, move the resources that the poller used to monitor to another poller:

   <MoveResources />

   The services monitored by this poller are moved to the other poller automatically.
3. On the **Configuration > Pollers > Pollers** page, select the poller you want to remove, then click **Delete**. The poller disappears from the list of pollers.
4. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) for the SaaS platform. The poller is removed for good. This cannot be undone.
