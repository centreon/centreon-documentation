---
id: developer-broker-bbdo-switch-versions
title: Switching versions of BBDO
description: "Procedure to manually switch the BBDO protocol version on your servers"
---

From Centreon 25.10, BBDO v2 is deprecated. When you upgrade your Centreon version, the central server automatically switches to BBDO v3 (remote servers and pollers will use BBDO v3 automatically once you deploy the configuration). However, here is a procedure for switching versions manually if necessary.

BBDO must have the same version for all servers in your architecture (central server, remote servers, pollers). You must also [use BBDO v3 with your stream connectors](./developer-broker-stream-connector-migration.md).

## Procedure

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
  grep "using version" /var/log/centreon-engine/config0/centengine.log
  ```

The following line states which version is used for each server:

```shell
[2025-10-17T14:53:44.828+00:00] [bbdo] [info] BBDO: peer is using protocol version 3.0.0, we're using version 3.0.0
```
