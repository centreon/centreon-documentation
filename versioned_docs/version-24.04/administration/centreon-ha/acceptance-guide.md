---
id: acceptance-guide
title: Testing the cluster
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page provides you with a procedure to validate that your cluster is working properly: you will perform a failover, simulate a network failure, and check that the cluster behaves as expected.

> Please note that all commands presented in this document should be run as `root` unless otherwise stated.

On this page, we will use the macros @CENTRAL_NODE1_NAME@ and @CENTRAL_NODE2_NAME@ to represent the hostnames of central nodes 1 and 2. Bear in mind that depending on the situation, either node 1 or node 2 can be the active or the passive node (if node 1 is the active node, node 2 is the passive node, and vice versa). It is the same with the database nodes.

## Check the state of the cluster

After completing the installation procedure and before starting any tests, the active central node should be central node 1 and the passive central node should be central node 2.

To check the general state of the cluster, run the following command:

```bash
pcs status
```

The command should return the following information:

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_NODE1_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @CENTRAL_NODE1_NAME@

  * 4 nodes configured
  * 21 resource instances configured

Node List:
  * Online: [ central1 central2 db1 db2 ]

Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ db1 ]
    * Slaves: [ db2 ]
    * Stopped: [ central1 central2 ]
  * Clone Set: php-clone [php]:
    * Started: [ central1 central2 ]
    * Stopped: [ db1 db2 ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ central1 central2 ]
    * Stopped: [ db1 db2 ]
  * vip_mysql   (ocf::heartbeat:IPaddr2):        Started db1
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started central1
    * http      (systemd:httpd):         Started central1
    * gorgone   (systemd:gorgoned):      Started central1
    * centreon_central_sync     (systemd:centreon-central-sync):         Started central1
    * cbd_central_broker        (systemd:cbd-sql):       Started central1
    * centengine        (systemd:centengine):    Started central1
    * centreontrapd     (systemd:centreontrapd):         Started central1
    * snmptrapd (systemd:snmptrapd):     Started central1

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

> This command should return no errors. If there are "Failed actions" on any resource, troubleshoot them using the [troubleshooting guide](troubleshooting-guide.md).

### Check the constraints

If a failover has occurred at some point, there may be some leftover location constraints. Run the following command to display the current constraints:

```bash
pcs constraint
```

The command should return this:

```text
Location Constraints:
  Resource: cbd_rrd-clone
    Disabled on:
      Node: @DATABASE_NODE1_NAME@ (score:-INFINITY)
      Node: @DATABASE_NODE2_NAME@ (score:-INFINITY)
  Resource: centreon
    Disabled on:
      Node: @DATABASE_NODE1_NAME@ (score:-INFINITY)
      Node: @DATABASE_NODE2_NAME@ (score:-INFINITY)
  Resource: ms_mysql-clone
    Disabled on:
      Node: @CENTRAL_NODE1_NAME@ (score:-INFINITY)
      Node: @CENTRAL_NODE2_NAME@ (score:-INFINITY)
  Resource: php-clone
    Disabled on:
      Node: @DATABASE_NODE1_NAME@ (score:-INFINITY)
      Node: @DATABASE_NODE2_NAME@ (score:-INFINITY)
Ordering Constraints:
Colocation Constraints:
  vip_mysql with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with vip_mysql (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:

```

The output shows the constraints you have defined during the installation procedure: the **ms_mysql-clone** resource only runs on the database nodes, the **cbd_rrd-clone**, **centreon** and **php-clone** resources only run on the central nodes.

To remove unwanted constraints, run the following command:

```bash
pcs resource clear centreon
```

### Check the status of the database synchronization

To check that the database synchronization is working, run the following command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The command should return the following information:

```bash
Connection MASTER Status '@DATABASE_NODE1_NAME@' [OK]
Connection SLAVE Status '@DATABASE_NODE2_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> If the synchronization shows `KO`, you must fix it with the help of the [operating guide](operating-guide.md).

## Test 1: Centreon resource failover

### Perform a failover

We're assuming that central node 1 is the active central node and central node 2 is the passive central node ([check the state of the cluster](#check-the-state-of-the-cluster) if you need to).

When you move the **centreon** resource group from central node 1 to central node 2, central node 2 will become the active node and central node 1 will become the passive node.

1. Run the following command to perform the failover:

```bash
pcs resource move centreon
```

In another terminal, you can also use the `crm_mon -fr` command to watch the failover as it happens. It will be necessary to use Ctrl+c to exit the command.

> Warning: The `pcs resource move centreon` command sets an `-INFINITY` constraint on node 1. This means that the resource is no longer allowed to be running on that node.

2. The resources move to node 2. To check that the resources have indeed moved, run the following command:

```bash
pcs status
```

The expected output is:

```text
Cluster name: centreon_cluster

WARNINGS:
Following resources have been moved and their move constraints are still in plac                                                                             e: 'centreon'
Run 'pcs constraint location' or 'pcs resource clear <resource id>' to view or r                                                                             emove the constraints, respectively

Cluster Summary:
  * Stack: corosync (Pacemaker is running)
  * Current DC: central2 (version 2.1.6-9.1.el8_9-6fdc9deea29) - MIXED-VERSION p                                                                             artition with quorum
  * Last updated: Tue Jun  4 05:41:08 2024 on central2
  * Last change:  Tue Jun  4 05:36:52 2024 by root via crm_resource on central1
  * 4 nodes configured
  * 21 resource instances configured

Node List:
  * Online: [ central1 central2 db1 db2 ]

Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ db1 ]
    * Slaves: [ db2 ]
    * Stopped: [ central1 central2 ]
  * Clone Set: php-clone [php]:
    * Started: [ central1 central2 ]
    * Stopped: [ db1 db2 ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ central1 central2 ]
    * Stopped: [ db1 db2 ]
  * vip_mysql   (ocf::heartbeat:IPaddr2):        Started db1
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started central2
    * http      (systemd:httpd):         Started central2
    * gorgone   (systemd:gorgoned):      Started central2
    * centreon_central_sync     (systemd:centreon-central-sync):         Started                                                                              central2
    * cbd_central_broker        (systemd:cbd-sql):       Started central2
    * centengine        (systemd:centengine):    Started central2
    * centreontrapd     (systemd:centreontrapd):         Started central2
    * snmptrapd (systemd:snmptrapd):     Started central2

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

3. Once the failover is completed, execute the following command to ensure the resources can be moved back to their original node in the future (EL8 or Debian).

```bash
pcs resource clear centreon
```

This will remove the constraints established during the failover.

### Go back to the nominal situation

If you want to return to the nominal situation (i.e. central node 1 is the active central node and central node 2 is the passive central node), you must perform a second resource failover.

1. If you haven't already done so, run the constraint cleanup command to remove the constraint created by the failover (EL8 or Debian):

   ```bash
   pcs resource clear centreon
   ```

2. Then, execute the failover command:

   ```bash
   pcs resource move centreon
   ```

As before, you can follow the failover with the `crm_mon -fr` command.

3. Finally, remove the constraints with the following command (EL8 or Debian):

   ```bash
   pcs resource clear centreon
   ```

## Test 2: Simulate the loss of the passive central node

If the passive central node goes down, the cluster should carry on working as before, as the resources are managed by the active central node. You will see your passive central node as down in Resources Status.

To simulate a network failure that would isolate the passive central node, you can use `iptables` to drop traffic from and to the passive central node. The passive central node will be completely excluded from the cluster. The active central node keeps the majority with the quorum device.

### Perform the test

We're assuming that node 1 is the active node and node 2 is the passive node ([check the state of the cluster](#check-the-state-of-the-cluster) if you need to).

To perform this test, run the `iptables` commands on the **active central node**:

```bash
iptables -A INPUT -s @CENTRAL_NODE1_IPADDR@ -j DROP
iptables -A OUTPUT -d @CENTRAL_NODE1_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_NODE1_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_NODE1_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_NODE2_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_NODE2_IPADDR@ -j DROP
iptables -A INPUT -s @QDEVICE_IPADDR@ -j DROP
iptables -A OUTPUT -d @QDEVICE_IPADDR@ -j DROP
```

The passive central node is now excluded from the cluster.

If you run `pcs status` on the active central node:

* The resources and the cluster are still working.
* The passive central node is seen `offline` on the active node:

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

If you run `pcs status` on the passive node:

* All resources appear stopped on the passive node
* The active node is seen as `offline` (as the passive node is cut off from the rest of the cluster):

```text
Cluster name: centreon_cluster
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_NODE2_NAME@ (version 2.1.2-4.el8_6.3-ada5c3b36e2) - partition WITHOUT quorum
  * Last updated: Tue Nov  8 14:33:00 2022
  * Last change:  Tue Nov  8 14:25:58 2022 by root via crm_resource on @CENTRAL_NODE1_NAME@
  * 2 nodes configured
  * 12 resource instances configured
Node List:
  * Online: [ @CENTRAL_NODE2_NAME@ ]
  * OFFLINE: [ @CENTRAL_NODE1_NAME@ ]
Full List of Resources:
  * Clone Set: php-clone [php]:
    * Stopped: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Stopped: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
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

### Go back to the nominal situation

If you want to go back to the nominal situation, remove the iptables rules.

To view the various iptables rules configured on the active node, run the following command:

```bash
iptables -L
```

The command should return the following information:

```text
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  @CENTRAL_NODE2_NAME@                 anywhere

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  anywhere             @CENTRAL_NODE2_NAME@
```

If you do not have any other iptables rules configured, you can execute the following command to remove the rules related to the test:

```bash
iptables -F
```

Otherwise, you will have to list the rule numbers with the following command:

```bash
iptables -L --line-numbers
```

And delete them with the following command:

```bash
iptables -D INPUT @RULE_NUMBER@
iptables -D OUTPUT @RULE_NUMBER@
```

If you run `pcs status` on the active node, the passive node is seen as `online` again:

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_NODE1_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_NODE1_NAME@
  * 2 nodes configured
  * 12 resource instances configured
Node List:
  * Online: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
Full List of Resources:
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_NODE1_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_NODE1_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_NODE1_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_NODE1_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_NODE1_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_NODE1_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_NODE1_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_NODE1_NAME@
```

Also check that the database replication is still operational using the following command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The expected output is:

```text
Connection MASTER Status '@DATABASE_NODE1_NAME@' [OK]
Connection SLAVE Status '@DATABASE_NODE2_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

## Test 3: Simulate the loss of the active node

This test checks that the resources are switched to the passive node if the active node is unavailable, allowing for continuity of service.

### Perform the test

We're assuming that central node 1 is the active central node and central node 2 is the passive central node ([check the state of the cluster](#check-the-state-of-the-cluster) if you need to).

To perform this test, run the commands on the active central node:

```bash
iptables -A INPUT -s @CENTRAL_NODE2_IPADDR@ -j DROP
iptables -A OUTPUT -d @CENTRAL_NODE2_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_NODE1_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_NODE1_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_NODE2_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_NODE2_IPADDR@ -j DROP
iptables -A INPUT -s @QDEVICE_IPADDR@ -j DROP
iptables -A OUTPUT -d @QDEVICE_IPADDR@ -j DROP
```

Resources on the active central node (central node 1) should stop. Central node 2 becomes the active node and all the resources switch to it. You can use the `crm_mon -fr` command on central node 2 to watch the startup of resources:

```text
Stack: corosync
Current DC: @CENTRAL_NODE1_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Thu May 5 11:06:38 2022
Last change: Thu May  5 09:09:50 2022 by root via crm_resource on @CENTRAL_NODE1_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_NODE1_NAME@ @DATABASE_NODE2_NAME@ @CENTRAL_NODE2_NAME@ ]
OFFLINE: [ @CENTRAL_NODE1_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_NODE1_NAME@ ]
     Slaves: [ @DATABASE_NODE2_NAME@ ]
     Stopped: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
vip_mysql       (ocf::heartbeat:IPaddr2):       Started @DATABASE_NODE1_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_NODE2_NAME@ ]
     Stopped: [ @DATABASE_NODE1_NAME@ @CENTRAL_NODE1_NAME@ @DATABASE_NODE2_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_NODE2_NAME@ ]
     Stopped: [ @DATABASE_NODE1_NAME@ @CENTRAL_NODE1_NAME@ @DATABASE_NODE2_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_NODE2_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_NODE2_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_NODE2_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_NODE2_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_NODE2_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_NODE2_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_NODE2_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_NODE2_NAME@

Migration Summary:
* Node @DATABASE_NODE1_NAME@:
* Node @CENTRAL_NODE2_NAME@:
* Node @DATABASE_NODE2_NAME@:
```

### Go back to the nominal situation

To check the various iptables rules configured on the active node, run the following command:

```bash
iptables -L
```

The command should return the following information:

```text
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  @CENTRAL_NODE2_NAME@  anywhere
DROP       all  --  @DATABASE_NODE1_NAME@  anywhere
DROP       all  --  @DATABASE_NODE2_NAME@  anywhere
DROP       all  --  @QDEVICE_NAME@  anywhere

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  anywhere             @CENTRAL_NODE2_NAME@
DROP       all  --  anywhere             @DATABASE_NODE1_NAME@
DROP       all  --  anywhere             @DATABASE_NODE2_NAME@
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

And delete them with the following command:

```bash
iptables -D INPUT @RULE_NUMBER@;
iptables -D OUTPUT @RULE_NUMBER@
```

If you run the `crm_mon` command on node 2, you can see that node 1 is still the passive node:

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_NODE1_NAME@ (version 2.1.2-4.el8_6.3-ada5c3b36e2) - partition with quorum
  * Last updated: Tue Nov 8 17:27:28 2022
  * Last change:  Tue Nov  8 17:23:19 2022 by root via crm_attribute on @CENTRAL_NODE2_NAME@
  * 2 nodes configured
  * 12 resource instances configured
Node List:
  * Online: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * ms_mysql  (ocf::heartbeat:mariadb-centreon):       Stopped @CENTRAL_NODE1_NAME@ (Monitoring)
    * Masters: [ @CENTRAL_NODE2_NAME@ ]
    * Stopped: [ @CENTRAL_NODE1_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_NODE2_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_NODE2_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_NODE2_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_NODE2_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_NODE2_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_NODE2_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_NODE2_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_NODE2_NAME@
Migration Summary:
  * Node: @CENTRAL_NODE1_NAME@:
    * ms_mysql: migration-threshold=1000000 fail-count=1000000 last-failure='Tue Nov  8 17:27:25 2
022'
Failed Resource Actions:
  * ms_mysql_start_0 on @CENTRAL_NODE1_NAME@ 'error' (1): call=440, status='complete', exitreason='M
ariaDB slave io has failed (1236): Got fatal error 1236 from master when reading data from binary
log: 'Error: connecting slave', last-rc-change='Tue Nov  8 17:27:21 2022', queued=0ms, exec=4060ms
```

If you want to switch to the active node, you must do a failover.
So, **before you do this, you must check the cluster and database replication status**.

First, check the constraints:

```shell
pcs constraint
```

The command should return this:

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

then check the database replication

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

At this time, the cluster is in degraded mode with two passive nodes.
In this particular case, it returns the following information because the ms_mysql resource is stopped on node 1:

```text
Connection SLAVE Status '@CENTRAL_NODE1_NAME@' [KO]
Error reports:
    ERROR 2002 (HY000): Can't connect to MySQL server on '@CENTRAL_NODE1_NAME@' (115)
Impossible de se connecter au serveur '@CENTRAL_NODE1_NAME@'.
Connection SLAVE Status '@CENTRAL_NODE2_NAME@' [OK]
Slave Thread Status [KO]
Error reports:
    Skip check on '@CENTRAL_NODE1_NAME@'.
    No slave (maybe because we cannot check a server).
Position Status [SKIP]
Error reports:
    Skip because we can't identify a unique slave.
```

You must do a database synchronization from @CENTRAL_NODE2_NAME@ to @CENTRAL_NODE1_NAME@ by launching the "sync-bigdb" script on the **Slave node**.

```shell
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

As for the previous execution of this script, check whether the LVM Snapshot is correctly deleted and the MySQL Slave restarted:

```text
Umount and Delete LVM snapshot
  Logical volume "dbbackupdatadir" successfully removed.
Start MySQL Slave
OK
Start Replication
Id      User    Host    db      Command Time    State   Info    Progress
5       centreon-repl   @CENTRAL_NODE2_NAME@:51850        NULL    Query   0       starting        show processlist  0.000
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
Connection MASTER Status '@CENTRAL_NODE2_NAME@' [OK]
Connection SLAVE Status '@CENTRAL_NODE1_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

Now, you can perform a failover to return to the initial situation.

```shell
pcs resource clear centreon
```

Do a cleanup to clear errors and restart the ms_mysql resource on @CENTRAL_NODE1_NAME@.

```shell
pcs resource cleanup
```

The situation has stabilized, and you can perform a failover by moving the **centreon** resource.

```shell
pcs resource move centreon
```

The **centreon** resource is now relocated and the cluster is OK. Check this with `crm_mon -fr` on any node.

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_NODE1_NAME@ (version 2.1.2-4.el8_6.3-ada5c3b36e2) - partition with quorum
  * Last updated: Wed Nov  9 10:23:54 2022
  * Last change:  Wed Nov  9 10:23:26 2022 by root via crm_attribute on @CENTRAL_NODE1_NAME@
  * 2 nodes configured
  * 12 resource instances configured
Node List:
  * Online: [ @CENTRAL_NODE1_NAME@ centreon-rhel8-sec ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_NODE1_NAME@ ]
    * Slaves: [ centreon-rhel8-sec ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_NODE1_NAME@ centreon-rhel8-sec ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_NODE1_NAME@ centreon-rhel8-sec ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_NODE1_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_NODE1_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_NODE1_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_NODE1_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_NODE1_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_NODE1_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_NODE1_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_NODE1_NAME@
Migration Summary:
```
