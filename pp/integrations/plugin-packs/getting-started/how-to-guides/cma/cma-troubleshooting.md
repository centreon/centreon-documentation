---
id: cma-troubleshooting
title: Troubleshooting CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In many situations, you need to quickly re-check one or multiple resources to refresh their status.

Two types of check action are available:

The Forced check action on [Resources status page](/docs/alerts-notifications/resources-status) is a check available for CMA, that you can perform at any time (in or out of the configured check period).

Check your resources and refresh their status in three ways:

By directly clicking the button on the line when the mouse is over it.
By selecting one or multiple lines and clicking the Forced check button above the table.
By clicking the Forced check button in the detail panel of the resource.

## Host checks

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

### Check that the service is running

1. Execute the following command:

   ```bash
   systemctl status centagent
   ```

2. If the service is not running, start it.

   ```bash
   systemctl restart centagent
   ```

### Check that the agent log file does not contain any errors

Depending on the path configured for your log file, check for any errors:

```bash
grep error /var/log/centreon-monitoring-agent/centagent.log
```

No lines should be returned.

</TabItem>
<TabItem value="Windows" label="Windows">

### Check that the service is running

1. Execute the following command:

   ```bash
   services.msc
   ```

2. Search for **Centreon Monitoring Agent** in the list of services: if the service is not running, start it.

### Check that the logs do not contain any errors

Depending on the configuration, use the event viewer or look at the specified file.

### Check that the connection to the poller is working

<Tabs groupId="sync">
<TabItem value="The agent connects to the poller" label="The agent connects to the poller">

1. Execute the following command:

```bash
tnc <poller IP or DNS> -p 4317
```

The value **true** must be returned.

</TabItem>

<TabItem value="The poller connects to the agent" label="The poller connects to the agent">

1. Port number 4317 must be open (inbound) on the host.

2. Execute the following command:

   ```bash
   netstat -na | grep 4317
   ```

   This command must return results, showing that the server is listening (ESTABLISHED).

3. Execute the following command:

   ```bash
   tcpdump -i any port 4317
   ```

   This command must return results, showing that packets are arriving from the poller.

</TabItem>
</Tabs>
</TabItem>
</Tabs>

## Poller checks

### Check that the server is listening and that packets are arriving

<Tabs groupId="sync">
<TabItem value="The agent connects to the poller" label="The agent connects to the poller">

1. Port number 4317 must be open (inbound) on the poller.

2. Execute the following command:

   ```bash
   netstat -na | grep 4317
   ```

   This command must return results, showing that the server is listening (ESTABLISHED).

3. Execute the following command:

   ```bash
   tcpdump -i any port 4317
   ```

   This command must return results, showing that packets are arriving from the agent.

</TabItem>
<TabItem value="The poller connects to the agent" label="The poller connects to the agent">

1. Port number 4317 must be open (inbound) on the agent.

2. Execute the following command:

```bash
tnc <Host IP or DNS> -p 4317
```

The value **true** must be returned.

</TabItem>
</Tabs>

### Enable the OpenTelemetry logs

1. Edit the monitoring engine's configuration file:

   ```bash
   /etc/centreon-engine/centengine.cfg
   ```

2. Add the following line:

   ```bash
   log_level_otl=trace
   ```

   The different log levels are: trace, debug, info, warning, error, critical, disabled.

3. Restart the monitoring engine.

### Check that the engine log file does not contain any errors

Execute the following command:

```bash
grep error /var/log/centreon-engine/centengine.log
```

No CMA related lines should be returned.

## Checks in Centreon

The host and its configured services must return a status and metrics.

## Location of poller and agent logs

* Poller logs: `/var/log/centreon-engine/centengine.log`

* Agent logs:
   * Linux: by default, `/var/log/centreon-monitoring-agent/centagent.log` (this log location can be configured in **/etc/centreon-monitoring-agent/centagent.json**)
   * Windows: the location is the one you specified when installing the agent (by default, in the Windows Event Viewer).
