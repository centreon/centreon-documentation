---
id: poller-migrate
title: Migrating a poller to another host machine
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import MoveResources from './_move-resources.mdx';

In some cases you might want to change the OS of the host machine for your poller. The correct procedure for this is to install a new server and migrate your resources to it.

\+ backups of custom plugins and AS400 connector.

1. Install a new host machine for your poller as per our [prerequistes](prerequisites.md).
2. [Deploy the poller](deploy-poller.md) to the new machine.
3. Move all the resources you want to the new poller.

   <MoveResources />

   The resources are now monitored by the new poller: the services monitored by this poller are moved to the other poller automatically.

5. [Remove the old poller](poller-remove.md) from your architecture.
