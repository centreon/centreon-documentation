---
id: developer-broker-bbdo-switch-version
title: Switching versions of BBDO
---

BBDO must have the same version for all servers in your architecture (central server, remote servers, pollers).

> If you use BBDO v2 with this version of Centreon, you will not be able to use the **Resources Status** page.

If you want to switch versions of BBDO (either switch from v3 to v2 or from v2 to v3), follow this procedure:

1. On the central server, go to **Configuration > Pollers > Broker configuration**.
2. Select the server you want, and on the **General** tab, in **Advanced options**, select the version of BBDO you want from the **BBDO version** list. Then click **Save**.
3. Do the same with all the elements listed on the **Configuration > Pollers > Broker configuration page
4. Restart gorgoned on each server:

   ```shell
   systemctl restart gorgoned
   ```

5. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) for all servers.
6. Stop the following services:
   - On the central server and on remote servers:

     ```shell
     systemctl stop cbd centengine
     ```

   - On the pollers:

     ```shell
     systemctl stop centengine
     ```

7. Start the following services:
   - On the central server and on remote servers:

     ```shell
     systemctl start cbd centengine
     ```

   - On the pollers:

     ```shell
     systemctl start centengine
     ```

You can check in the logs which version of BBDO is active for a server:

- central broker:

  ```shell
  tail /var/log/centreon-broker/central-{broker,rrd,module}-master.log

- remote broker:

  ```shell
  tail /var/log/centreon-broker/<remote_name>-{broker,rrd,module}-master.log
  ```

- poller module:

  ```shell
  tail /var/log/centreon-broker/<poller_name>-module.log
  ```

The following line states which version is used for each server:

```shell
[2022-05-17T14:53:44.828+00:00] [bbdo] [info] BBDO: peer is using protocol version 2.0.0, we're using version 2.0.0
```
