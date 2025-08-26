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

## Poller checks

