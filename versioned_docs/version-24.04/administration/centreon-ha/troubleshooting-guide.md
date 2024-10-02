---
id: troubleshooting-guide
title: Troubleshooting HA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## A failed action is displayed in `crm_mon` but the resource seems to be working fine

```bash
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
    * centreontrapd     (systemd:centreontrapd):         Stopped
    * snmptrapd (systemd:snmptrapd):     Stopped
Failed Resource Actions:
* centreontrapd_start_0 on @CENTRAL_MASTER_NAME@ 'not running' (7): call=82, status=complete, exitreason='',
    last-rc-change='Wed Sep 15 13:42:19 2021', queued=1ms, exec=2122ms
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
Stack: corosync
Current DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el8_7.2-3c4c782f70) - partition with quorum
Last updated: Thu Feb 20 14:48:12 2020
Last change: Thu Feb 20 14:47:47 2020 by root via crm_resource on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resources configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Slaves: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
```

No error is displayed, but the centreon group no longer appears in the output and none of its resources are started. This mostly happens when there were multiple failovers (`pcs resource move ....`) without deleting the constraint.

### Solution

To check whether some constraints are active, run the following command:

```bash
pcs constraint config
```

The output will look like this:

```bash
Location Constraints:
    Disabled on: @CENTRAL_SLAVE_NAME@ (score:-INFINITY) (role: Started)
    Disabled on: @CENTRAL_MASTER_NAME@ (score:-INFINITY) (role: Started)
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

We notice that the centreon group is not authorized to start on any node.

To free the resource group from its constraints, run the following command (EL8 and Debian):

```bash
pcs resource clear centreon
```

Resources should be starting now.
