---
id: cma-troubleshooting
title: Troubleshooting CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

### Check that the connection with the poller is working

<Tabs groupId="sync">
<TabItem value="The agent connects to the poller" label="The agent connects to the poller">

1. Execute the following command in PowerShell:

   ```bash
   tnc <poller IP or DNS> -p 4317
   ```

   The following value must be returned:

   ```bash
   Connection to <IP ou DNS collecteur> 4317 port [tcp/http] succeeded!
   ```

</TabItem>

<TabItem value="The poller connects to the agent" label="The poller connects to the agent">

1. Port number 4317 must be open (inbound) on the host.

2. Execute the following command:

   ```bash
   netstat -na | grep 4317
   ```

   This command must return results, showing that the server is listening (ESTABLISHED).

   ```bash
   Active Internet connections (servers and established)
   Proto Recv-Q Send-Q Local Address           Foreign Address         State
   tcp        0      0 127.0.0.1:4317          <POLLER IP>:<PORT>      ESTABLISHED
   ```

3. Execute the following command:

   ```bash
   tcpdump -i any port 4317
   ```

   This command must return results, showing that packets are arriving from the poller.

</TabItem>
</Tabs>
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

### Check that the connection with the poller is working

<Tabs groupId="sync">
<TabItem value="The agent connects to the poller" label="The agent connects to the poller">

1. Execute the following command in PowerShell:

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

   ```bash
   TCP        127.0.0.1:4317          <IP COLLECTEUR>:<PORT>               ESTABLISHED
   ```

3. Check packets are arriving from the poller, using [netsh](https://learn.microsoft.com/fr-fr/windows-server/administration/windows-commands/netsh) or [pktmon](https://learn.microsoft.com/en-us/windows-server/networking/technologies/pktmon/pktmon).

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

   ```bash
   Active Internet connections (servers and established)
   Proto Recv-Q Send-Q Local Address           Foreign Address         State
   tcp        0      0 127.0.0.1:4317          <HOST IP>:<PORT>        ESTABLISHED
   ```

3. Execute the following command:

   ```bash
   tcpdump -i any port 4317
   ```

   This command must return results, showing that packets are arriving from the agent.

</TabItem>
<TabItem value="The poller connects to the agent" label="The poller connects to the agent">

Port number 4317 must be open (inbound) on the agent.

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
