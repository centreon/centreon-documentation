---
id: poller-remove
title: Removing a poller from your architecture
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import MoveResources from './_move-resources.mdx';

To remove a poller from your Centreon architecture:

1. Move the resources that the pollers used to monitor to another poller:

   <MoveResources />

   The services monitored by this poller are moved to the other poller automatically.
3. On the **Configuration > Pollers > Pollers** page, select the poller you want to remove, then click **Delete**. The poller disappears from the list of pollers, but it is not removed properly yet.
4. Deploy the configuration for the central server. The poller is removed for good. This cannot be undone.
