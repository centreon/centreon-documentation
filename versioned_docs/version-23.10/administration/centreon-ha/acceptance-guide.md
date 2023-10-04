---
id: acceptance-guide
title: Cluster acceptance guide
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Please note that all commands presented in this document should be run as `root` unless otherwise stated.

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">

> This document will refer to parameters that vary from one installation to another (e.g., names and IP addresses of nodes) via [macros defined here](../../installation/installation-of-centreon-ha/installation-2-nodes.md#defining-hosts-names-and-addresses)

## Requirements of the tests

To verify the proper functioning of your cluster, you will get all the commands to perform a failover test and simulate network failures.

It is necessary to check the state of the cluster before performing the acceptance tests. 

### Check the state of the cluster

To check the general state of the cluster, run the command:

```bash
pcs status
```

The command should return the following information:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_MASTER_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_MASTER_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_MASTER_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_MASTER_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_MASTER_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_MASTER_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@
```

</TabItem>
</Tabs>

> Check the resources for `Failed` errors and correct them with the help of the [troubleshooting guide](troubleshooting-guide.md).

### Check the constraints

To check that there are no `Location Constraints`, execute the command:

```bash
pcs constraint
```

The command should return this:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
</Tabs>

### Check the status of the database synchronization

To verify that the database synchronization is working, execute the following command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The command should return the following information:

```text
Connection MASTER Status '@CENTRAL_MASTER_NAME@' [OK]
Connection SLAVE Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> If the synchronization shows `KO`, you must fix it with the help of the [operating-guide](operating-guide.md).

## Centreon resource failover

### State of the cluster before the failover

Before running a failover test, check the status of the cluster with the following command:

```bash
pcs status
```

The expected output is:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_MASTER_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_MASTER_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_MASTER_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_MASTER_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_MASTER_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_MASTER_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@
```

</TabItem>
</Tabs>

### Perform a failover

To move the resources, run the command:

```bash
pcs resource move centreon
```

You can also use the `crm_mon -fr` command to watch the failover as it happens. It will be necessary to use Ctrl+c to exit the command.

> Warning: The `pcs resource move centreon` command sets an `-INFINITY` constraint on the node hosting the resource, no longer allowed to be running on that node.

As a result, the resources move to another node. Following this manipulation, it is, thus, necessary to execute the command `pcs resource clear centreon` to ensure the resources can be moved back to this node in the future.

To verify that the resources have moved to the second node, performs the command: 

```bash
pcs status
```

The expected output is:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started Started @CENTRAL_SLAVE_NAME@
    * http      (systemd:httpd):         Started Started @CENTRAL_SLAVE_NAME@
    * gorgone   (systemd:gorgoned):      Started Started @CENTRAL_SLAVE_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_SLAVE_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_SLAVE_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_SLAVE_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_SLAVE_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_SLAVE_NAME@
```

</TabItem>
</Tabs>

You may notice that like the `centreon` resources, the secondary node has also been promoted to `master` for the `ms_mysql` resource. This behavior is intended and due to `Colocation Constraints` between the `centreon` resources and `msq_mysql`.

> The `Colocation Constraints` are unfound on a 4-node cluster!

Once the failover is completed, execute the command:

```bash
pcs resource clear centreon
```

> This will remove the constraints established during the failover.

Also, check that MySQL replication is still operational using the command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The command should return the following information:

```text
Connection MASTER Status '@CENTRAL_MASTER_NAME@' [OK]
Connection SLAVE Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> If the synchronization is `KO`, you must fix it with the help of the [operating-guide](operating-guide.md).

### Back to the nominal situation

To return to the nominal situation, you must launch the resource failover.

Execute the command:

```bash
pcs status
```

The output should be:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):         Started @CENTRAL_SLAVE_NAME@
    * http      (systemd:httpd):          Started @CENTRAL_SLAVE_NAME@
    * gorgone   (systemd:gorgoned):       Started @CENTRAL_SLAVE_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):          Started @CENTRAL_SLAVE_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_SLAVE_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_SLAVE_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_SLAVE_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_SLAVE_NAME@
```

</TabItem>
</Tabs>

If you have `Location Constraints`, run the constraint cleanup command:

```bash
pcs resource clear centreon
```

Then, execute the failover command: 

```bash
pcs resource move centreon
```

As before, you can follow the failover with the `crm_mon -fr` command.

Finally, remove the constraints with the command:

```bash
pcs resource clear centreon
```

Also check that MySQL replication is still operational using the following command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The command should return the following information:

```text
Connection MASTER Status '@CENTRAL_MASTER_NAME@' [OK]
Connection SLAVE Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> If the synchronization is `KO`, you must fix it with the help of the [operating-guide](operating-guide.md).

## Simulate the loss of the secondary node

To simulate a network failure that would isolate the secondary node, you can use `iptables` to drop traffic from and to the secondary node.
The secondary node will be completely excluded from the cluster. The primary node keeps the majority with the QDevice.

### Processing

To perform this test, launch the `iptables` commands on the primary node:

```bash
iptables -A INPUT -s @IP_SECONDARY_NODE@ -j DROP
iptables -A OUTPUT -d @IP_SECONDARY_NODE@ -j DROP
```

Executing the command `pcs status` on the secondary node results in stopped resources being seen on the secondary node and the primary node being seen as `offline`:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster name: centreon_cluster
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_SLAVE_NAME@ (version 2.1.2-4.el8_6.3-ada5c3b36e2) - partition WITHOUT quorum
  * Last updated: Tue Nov  8 14:33:00 2022
  * Last change:  Tue Nov  8 14:25:58 2022 by root via crm_resource on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_SLAVE_NAME@ ]
  * OFFLINE: [ @CENTRAL_MASTER_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php-clone [php]:
    * Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Stopped
    * http      (systemd:httpd):         Stopped
    * gorgone   (systemd:gorgoned):      Stopped
    * centreon_central_sync     (systemd:centreon-central-sync):         Stopped
    * cbd_central_broker        (systemd:cbd-sql):       Stopped
    * centengine        (systemd:centengine):    Stopped
    * centreontrapd     (systemd:centreontrapd):         Stopped
    * snmptrapd (systemd:snmptrapd):     Stopped
Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

The resources and the cluster are still working by performing a `pcs status` on the primary node.
The secondary node is seen `offline` on the primary.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster name: centreon_cluster
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.1.2-4.el8_6.3-ada5c3b36e2) - partition with quorum
  * Last updated: Tue Nov 8 15:19:52 2022
  * Last change:  Tue Nov  8 14:25:58 2022 by root via crm_resource on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
	@@ -545,40 +609,51 @@ Full List of Resources:
    * centengine        (systemd:centengine):    Started @CENTRAL_MASTER_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@
Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

### Back to nominal situation

To check the various iptables rules configured on the primary node, run the following command:

```bash
iptables -L
```

The command should return the following information:

```text
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  @CENTRAL_SLAVE_NAME@                 anywhere

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  anywhere             @CENTRAL_SLAVE_NAME@
```

If you do not have any other iptables rules configured, you can execute the following command to remove the rules related to the test:

```bash
iptables -F
```

Otherwise, it will be necessary to list the rule numbers with the specific command:

```bash
iptables -L --line-numbers
```

And delete it with the command:

```bash
iptables -D INPUT @RULE_NUMBER@
iptables -D OUTPUT @RULE_NUMBER@
```

The secondary node is again seen `online` by the cluster:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_MASTER_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_MASTER_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_MASTER_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_MASTER_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_MASTER_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_MASTER_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@
```

</TabItem>
</Tabs>

Also check MySQL replication is still operational using the command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The order must return the following information:

```text
Connection MASTER Status '@CENTRAL_MASTER_NAME@' [OK]
Connection SLAVE Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

## Simulate the loss of the primary node

### Processing

To perform this test, run the commands on the primary server:

```bash
iptables -A INPUT -s @IP_SECONDARY_NODE@ -j DROP 
iptables -A OUTPUT -d @IP_SECONDARY_NODE@ -j DROP 
iptables -A INPUT -s @QDEVICE_IP@ -j DROP 
iptables -A OUTPUT -d @QDEVICE_IP@  -j DROP
```

Resources on the primary node should stop and should start on the secondary node. You can use the `crm_mon -fr` command on the secondary node to watch the startup of resources:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_SLAVE_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_SLAVE_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_SLAVE_NAME@ ]
  * OFFLINE [ @CENTRAL_MASTER_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_SLAVE_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_SLAVE_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_SLAVE_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_SLAVE_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_SLAVE_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_SLAVE_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_SLAVE_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_SLAVE_NAME@
```

</TabItem>
</Tabs>

This test checks that resources will be switched to the secondary node if the primary node is unavailable and allows for continuity of service.

### Back to nominal situation

To check the various iptables rules configured on the primary node, run the following command:

```bash
iptables -L
```

The command should return the following information:

```text
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  @CENTRAL_SLAVE_NAME@                 anywhere
DROP       all  --  @QDEVICE_NAME@      anywhere

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  anywhere             @CENTRAL_SLAVE_NAME@
DROP       all  --  anywhere             @QDEVICE_NAME@
```

If you do not have any other iptables rules configured, you can execute the following command to remove the rules related to the test:

```bash
iptables -F
```

Otherwise, it will be necessary to list the rule numbers with the specific command:

```bash
iptables -L --line-numbers
```

And delete it with the command:

```bash
iptables -D INPUT @RULE_NUMBER@;
iptables -D OUTPUT @RULE_NUMBER@
```

By running the `crm_mon` command on the second node, you will see the primary node move up in the cluster but staying as SLAVE node.

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.1.2-4.el8_6.3-ada5c3b36e2) - partition with quorum
  * Last updated: Tue Nov  8 5:27:28 PM 2022
  * Last change:  Tue Nov  8 17:23:19 2022 by root via crm_attribute on @CENTRAL_SLAVE_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * ms_mysql  (ocf::heartbeat:mariadb-centreon):       Stopped @CENTRAL_MASTER_NAME@ (Monitoring)
    * Masters: [ @CENTRAL_SLAVE_NAME@ ]
    * Stopped: [ @CENTRAL_MASTER_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_SLAVE_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_SLAVE_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_SLAVE_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_SLAVE_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_SLAVE_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_SLAVE_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_SLAVE_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_SLAVE_NAME@
Migration Summary:
  * Node: @CENTRAL_MASTER_NAME@:
    * ms_mysql: migration-threshold=1000000 fail-count=1000000 last-failure='Tue Nov  8 17:27:25 2
022'
Failed Resource Actions:
  * ms_mysql_start_0 on @CENTRAL_MASTER_NAME@ 'error' (1): call=440, status='complete', exitreason='M
ariaDB slave io has failed (1236): Got fatal error 1236 from master when reading data from binary
log: 'Error: connecting slave', last-rc-change='Tue Nov  8 17:27:21 2022', queued=0ms, exec=4060ms
```

If you want to switch to the primary node, you must do a failover.
So, **before you do this, you must check the cluster and database replication status**.

First, check the constraints:

```shell
pcs constraint
```

The command should return this:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
</Tabs>

then check the database replication

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

At this time, the cluster is in degraded mode with two slave nodes.
In this particular case, it returns the following information because the ms_mysql resource is stopped on @CENTRAL_MASTER_NAME@:

```text
Connection SLAVE Status '@CENTRAL_MASTER_NAME@' [KO]
Error reports:
    ERROR 2002 (HY000): Can't connect to MySQL server on '@CENTRAL_MASTER_NAME@' (115)
Impossible de se connecter au serveur '@CENTRAL_MASTER_NAME@'.
Connection SLAVE Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [KO]
Error reports:
    Skip check on '@CENTRAL_MASTER_NAME@'.
    No slave (maybe because we cannot check a server).
Position Status [SKIP]
Error reports:
    Skip because we can't identify a unique slave.
```

You must do a database synchronization from @CENTRAL_SLAVE_NAME@ to @CENTRAL_MASTER_NAME@ by launching the "sync-bigdb" script on the **Slave node**.

```shell
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

As for the previous execution of this script, verify if LVM Snapshot is correctly deleted and the MySQL Slave restarted:

```text
Unmount and Delete LVM snapshot
  Logical volume "dbbackupdatadir" successfully removed.
Start MySQL Slave
OK
Start Replication
Id      User    Host    db      Command Time    State   Info    Progress
5       centreon-repl   @CENTRAL_SLAVE_NAME@:51850        NULL    Query   0       starting        show processlist  0.000
6       centreon        localhost       centreon_storage        Sleep   0               NULL    0.000
7       system user             NULL    Connect 0       Connecting to master    NULL    0.000
8       system user             NULL    Slave_SQL       0       Slave has read all relay log; waiting for more updates    NULL    0.000
```

Database replication should now be OK. Check this.

```shell
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The result should be:

```text
Connection MASTER Status '@CENTRAL_SLAVE_NAME@' [OK]
Connection SLAVE Status '@CENTRAL_MASTER_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

Now, you can perform a failover to return to the initial situation.

```shell
pcs resource clear centreon
```

Do a cleanup to clear errors and restart the ms_mysql resource on @CENTRAL_MASTER_NAME@.

```shell
pcs resource cleanup
```

The situation has stabilized, and you can perform a failover by moving the **centreon** resource.

```shell
pcs resource move centreon
```

The **centreon** resource is now relocated and the cluster is OK. Check with `crm_mon -fr` on any node.

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.1.2-4.el8_6.3-ada5c3b36e2) - partition with quorum
  * Last updated: Wed Nov  9 10:23:54 2022
  * Last change:  Wed Nov  9 10:23:26 2022 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ centreon-rhel8-sec ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ centreon-rhel8-sec ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ centreon-rhel8-sec ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ centreon-rhel8-sec ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_MASTER_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_MASTER_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_MASTER_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_MASTER_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_MASTER_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_MASTER_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@
Migration Summary:
```

</TabItem>
<TabItem value="HA 4 Nodes" label="HA 4 Nodes">

> This document will refer to parameters that vary from one installation to another (e.g., names and IP addresses of nodes) via [macros defined here](../../installation/installation-of-centreon-ha/installation-4-nodes.md#defining-hosts-names-and-addresses)

## Requirements of the tests

To verify the proper functioning of your cluster, you will get all the commands to perform a failover test and simulate network failures.

It is necessary to check the state of the cluster before performing the acceptance tests. 

### Check the state of the cluster

To check the general state of the cluster, run the command:

```bash
pcs status
```

The command should return the following information:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

> Check the resources for `Failed` errors and correct them with the help of the [troubleshooting guide](troubleshooting-guide.md).

### Check the constraints

To check that there are no `Location Constraints`, execute the command:

```bash
pcs constraint
```

The command should return this:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Location Constraints:
  Resource: cbd_rrd-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: centreon
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: ms_mysql-clone
    Disabled on: @CENTRAL_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: php-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
Ordering Constraints:
Colocation Constraints:
  vip_mysql with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with vip_mysql (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
</Tabs>

### Check the status of the database synchronization

To verify that the database synchronization is working, execute the command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The command should return the following information:

```bash
Connection MASTER Status '@DATABASE_MASTER_NAME@' [OK]
Connection SLAVE Status '@DATABASE_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> If the synchronization shows `KO`, you must fix it with the help of the [operating-guide](operating-guide.md).

## Centreon resource failover

### State of the cluster before the failover

Before running a failover test, check the status of the cluster with the following command:

```bash
pcs status
```

The expected output is:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

### Perform a failover

To move the resources, run the command:

```bash
pcs resource move centreon
```

You can also use the `crm_mon -fr` command to watch the failover as it happens. It will be necessary to use Ctrl+c to exit the command.

> Warning: The `pcs resource move centreon` command sets an `-INFINITY` constraint on the node hosting the resource, no longer allowed to be running on that node.

As a result, the resources move to another node. Following this manipulation, it is, thus, necessary to execute the command `pcs resource clear centreon` to ensure the resources can be moved back to this node in the future.

To verify that the resources have moved to the second node, performs the command: 

```bash
pcs status
```

The expected output is:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

Once the failover is completed, execute the command:

```bash
pcs resource clear centreon
```

> This will remove the constraints established during the failover.

Also check that MySQL replication is still operational using the command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The command should return the following information:

```text
Connection MASTER Status '@CENTRAL_MASTER_NAME@' [OK]
Connection SLAVE Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> If the synchronization is `KO`, you must fix it with the help of the [operating-guide](operating-guide.md).

### Back to the nominal situation

To return to the nominal situation, you must launch the resource failover.

Execute the command:

```bash
pcs status
```

The output should be:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

Then run the constraint cleanup command in case you have `Location Constraints`:

```bash
pcs resource clear centreon
```

Then, execute the failover command: 

```bash
pcs resource move centreon
```

As before, you can follow the failover with the `crm_mon -fr` command.

Finally, remove the constraints with the command:

```bash
pcs resource clear centreon
```

## Simulate the loss of the secondary node

To simulate a network failure that would isolate the @CENTRAL_SLAVE_NAME@, you can use `iptables` to drop traffic from and to the @CENTRAL_SLAVE_NAME@.
The @CENTRAL_SLAVE_NAME@ will be completely excluded from the cluster. The @CENTRAL_MASTER_NAME@ keeps the majority with the QDevice.

### Processing 

To perform this test, launch the `iptables` commands on the @CENTRAL_SLAVE_NAME@. Be careful to avoid @CENTRAL_SLAVE_IPADDR@, otherwise you lose the SSH connection on this node.

```bash
iptables -A INPUT -s @CENTRAL_MASTER_IPADDR@ -j DROP
iptables -A OUTPUT -d @CENTRAL_MASTER_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_MASTER_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_MASTER_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_SLAVE_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_SLAVE_IPADDR@ -j DROP
iptables -A INPUT -s @QDEVICE_IPADDR@ -j DROP
iptables -A OUTPUT -d @QDEVICE_IPADDR@ -j DROP
```

Executing the command results in no active resources being seen on the secondary node and the primary node being seen as `offline`.
The resources and the cluster are still working by performing a `pcs status` on the primary node.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Thu May  5 10:34:05 2022
Last change: Thu May  5 09:09:50 2022 by root via crm_resource on @CENTRAL_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
OFFLINE: [ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

### Back to nominal situation

To check the various iptables rules configured on the primary node, run the following command:

```bash
iptables -L
```

The command should return the following information:

```text
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  @CENTRAL_SLAVE_NAME@                 anywhere

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  anywhere             @CENTRAL_SLAVE_NAME@
```

If you do not have any other iptables rules configured, you can execute the following command to remove the rules related to the test:

```bash
iptables -F
```

Otherwise, it will be necessary to list the rule numbers with the specific command:

```bash
iptables -L --line-numbers
```

And delete it with the command:

```bash
iptables -D INPUT @RULE_NUMBER@
iptables -D OUTPUT @RULE_NUMBER@
```

The secondary node is again seen `online` by the cluster:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

Also check MySQL replication is still operational using the command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The order must return the following information:

```text
Connection MASTER Status '@DATABASE_MASTER_NAME@' [OK]
Connection SLAVE Status '@DATABASE_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

## Simulate the loss of the primary node

### Processing

To perform this test, run the commands on the @CENTRAL_MASTER_NAME@:

```bash
iptables -A INPUT -s @CENTRAL_SLAVE_IPADDR@ -j DROP
iptables -A OUTPUT -d @CENTRAL_SLAVE_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_MASTER_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_MASTER_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_SLAVE_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_SLAVE_IPADDR@ -j DROP
iptables -A INPUT -s @QDEVICE_IPADDR@ -j DROP
iptables -A OUTPUT -d @QDEVICE_IPADDR@ -j DROP
```

Resources on the @CENTRAL_MASTER_NAME@ should stop and should start on the @CENTRAL_SLAVE_NAME@. You can use the `crm_mon -fr` command on the @CENTRAL_SLAVE_NAME@ to watch the startup of resources:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Thu May  5 11:06:38 AM 2022
Last change: Thu May  5 09:09:50 2022 by root via crm_resource on @CENTRAL_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]
OFFLINE: [ @CENTRAL_MASTER_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
vip_mysql       (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@

Migration Summary:
* Node @DATABASE_MASTER_NAME@:
* Node @CENTRAL_SLAVE_NAME@:
* Node @DATABASE_SLAVE_NAME@:
```

</TabItem>
</Tabs>

This test checks that resources will be switched to the secondary node if the primary node is unavailable and allows for continuity of service.

### Back to nominal situation

To check the various iptables rules configured on the primary node, run the following command:

```bash
iptables -L
```

The command should return the following information:

```text
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  @CENTRAL_SLAVE_NAME@  anywhere
DROP       all  --  @DATABASE_MASTER_NAME@  anywhere
DROP       all  --  @DATABASE_SLAVE_NAME@  anywhere
DROP       all  --  @QDEVICE_NAME@  anywhere

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  anywhere             @CENTRAL_SLAVE_NAME@
DROP       all  --  anywhere             @DATABASE_MASTER_NAME@
DROP       all  --  anywhere             @DATABASE_SLAVE_NAME@
DROP       all  --  anywhere             @QDEVICE_NAME@
```

If you do not have any other iptables rules configured, you can execute the following command to remove the rules related to the test:

```bash
iptables -F
```

Otherwise, it will be necessary to list the rule numbers with the specific command:

```bash
iptables -L --line-numbers
```

And delete it with the command:

```bash
iptables -D INPUT @RULE_NUMBER@;
iptables -D OUTPUT @RULE_NUMBER@
```

By running the `crm_mon` command on the second node, you will see the primary node move up in the cluster.
If you want to switch to the primary node, run the [failover commands](acceptance-guide.md#return-to-nominal-situation).

</TabItem>
</Tabs>
