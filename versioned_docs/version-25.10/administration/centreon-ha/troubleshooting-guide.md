---
id: troubleshooting-guide
title: Troubleshooting HA
description: "Diagnose and fix common Centreon HA cluster resource issues"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## A failed action is displayed in `crm_mon` but the resource seems to be working fine

```bash
Cluster name: centreon_cluster

WARNINGS:
Following resources have been moved and their move constraints are still in place: 'centreon'
Run 'pcs constraint location' or 'pcs resource clear ' to view or remove the constraints, respectively

Cluster Summary:
* Stack: corosync (Pacemaker is running)
* Current DC: @CENTRAL_NODE2_NAME@ (version 2.1.6-9.1.el8_9-6fdc9deea29) - MIXED-VERSION partition with quorum
* Last updated: Tue Jun 4 05:41:08 2024 on @CENTRAL_NODE2_NAME@
* Last change: Tue Jun 4 05:36:52 2024 by root via crm_resource on @CENTRAL_NODE1_NAME@
* 4 nodes configured
* 21 resource instances configured

Node List:
* Online: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ @DATABASE_NODE1_NAME@ @DATABASE_NODE2_NAME@ ]

Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @DATABASE_NODE1_NAME@ ]
    * Slaves: [ @DATABASE_NODE2_NAME@ ]
    * Stopped: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
    * Stopped: [ @DATABASE_NODE1_NAME@ @DATABASE_NODE2_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
    * Stopped: [ @DATABASE_NODE1_NAME@ @DATABASE_NODE2_NAME@ ]
    * vip_mysql (ocf::heartbeat:IPaddr2): Started @DATABASE_NODE1_NAME@
  * Resource Group: centreon:
    * vip (ocf::heartbeat:IPaddr2): Started @CENTRAL_NODE2_NAME@
    * http (systemd:httpd): Started @CENTRAL_NODE2_NAME@
    * gorgone (systemd:gorgoned): Started @CENTRAL_NODE2_NAME@
    * centreon_central_sync (systemd:centreon-central-sync): Started @CENTRAL_NODE2_NAME@
    * cbd_central_broker (systemd:cbd-sql): Started @CENTRAL_NODE2_NAME@
    * centengine (systemd:centengine): Started @CENTRAL_NODE2_NAME@
    * centreontrapd (systemd:centreontrapd): Started @CENTRAL_NODE2_NAME@
    * snmptrapd (systemd:snmptrapd): Started @CENTRAL_NODE2_NAME@

Daemon Status:
corosync: active/enabled
pacemaker: active/enabled
pcsd: active/enabled

Failed Resource Actions:
* centreontrapd_start_0 on @CENTRAL_NODE1_NAME@ 'not running' (7): call=82, status=complete, exitreason='',
last-rc-change='Tue Jun 4 11:00:00 2024', queued=1ms, exec=2122ms
```

### Solution

The errors do not go away automatically even if the problem is resolved. To remove the error, run the following command:

```shell
pcs resource cleanup <resource_name>
```

In the example above, the command would be:

```shell
pcs resource cleanup centreontrapd
```

## A resource is not starting

In the event of a Centreon resource (e.g. `centreontrapd`) failing to start, **Failed actions** will appear at the bottom of the `crm_mon` command's output.

### Solution

To obtain more information regarding this failure, you should first check the service's status by running this command on the node **where the service should be currently running**:

```bash
systemctl status centreontrapd -l
```

If this does not provide enough information, you can try forcing the service to start and check for error messages:

```bash
pcs resource debug-start centreontrapd
```

Once the root cause has been identified, run the following command for the cluster to "forget" these errors and restart the service:

```bash
pcs resource cleanup centreontrapd
```

## One resource or resource group does not start on any node

If the following situation occurs after a failover, whether a manual one or after a server shutdown:

```bash
* Stack: corosync (Pacemaker is running)
  * Current DC: @CENTRAL_NODE1_NAME@ (version 2.1.8-3.el9-3980678f0) - partition with quorum
  * Last updated: Fri Mar 21 16:36:16 2025 on @CENTRAL_NODE1_NAME@
  * Last change:  Thu Mar 13 11:30:16 2025 by hacluster via hacluster on @CENTRAL_NODE1_NAME@
  * 4 nodes configured
  * 21 resource instances configured

Node List:
  * Online: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ @DATABASE_NODE1_NAME@ @DATABASE_NODE2_NAME@ ]

Active Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Promoted: [ @DATABASE_NODE1_NAME@ ]
    * Unpromoted: [ @DATABASE_NODE2_NAME@ ]
  * vip_mysql   (ocf:heartbeat:IPaddr2):         Started @DATABASE_NODE1_NAME@
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]    
```

No error is displayed, but the centreon resource group no longer appears in the output and none of its resources are started. This mostly happens when there were multiple failovers (`pcs resource move ....`) without deleting the constraint.

### Solution

To check whether some constraints are active, run the following command:

```bash
pcs constraint
```

The output will look like this:

```bash
```bash
Location Constraints:
Resource: cbd_rrd-clone
Disabled on:
Node: @DATABASE_NODE1_NAME@ (score:-INFINITY)
Node: @DATABASE_NODE2_NAME@ (score:-INFINITY)
Resource: centreon
Disabled on:
Node: @CENTRAL_NODE1_NAME@ (score:-INFINITY)
Node: @CENTRAL_NODE2_NAME@ (score:-INFINITY)
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
```

We notice that the centreon resource group is not authorized to start on any node.

To free the resource group from its constraints, run the following command (EL8 and Debian):

```bash
pcs resource clear centreon
```

Resources should be starting now.

## No resource is starting

If no resource is starting, one of the possible causes is that the quorum device is not started.

### Solution

To check how the quorum device is doing, run the following command on the central nodes or the database nodes:

```shell
pcs quorum status
```

If everything is OK, the output looks like this:

```text
Membership information
----------------------
    Nodeid      Votes    Qdevice Name
         1          1    A,V,NMW node1 (local)
         2          1    A,V,NMW node2
         3          1    A,V,NMW node3
         4          1    A,V,NMW node4
         0          1            Qdevice
```

If you obtain something else, there is a problem.

- Check that the **corosync-qnetd** service is running on your central and databases nodes.

```shell
systemctl status corosync-qnetd
```

- Try running this command to know whether the quorum device is started or not:

```shell
pcs qdevice status net --full
```

- If the quorum device is running, there may be a problem with the flows between the nodes and the quorum device.
- If the quorum device is not running, log in to your quorum device and start it using the following command:

```shell
pcs qdevice start net
```
