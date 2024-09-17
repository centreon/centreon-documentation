---
id: poller-monitor
title: Monitoring your pollers
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The best practice is to have a poller monitor another poller (i.e. no poller should be monitored by itself).

## Monitoring a Centreon Cloud poller

To monitor a poller in your Centreon platform:

1. Install the [Centreon Poller monitoring connector](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-poller/).
2. [Create a host](../monitoring/basic-objects/hosts.md):
   * Apply the **App-Monitoring-Centreon-Poller-custom** template to it.
   * Select another poller from the **Monitoring server** list.
3. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md). Your new host appears in the [Resource status](../alerts-notifications/resources-status.md) page.
