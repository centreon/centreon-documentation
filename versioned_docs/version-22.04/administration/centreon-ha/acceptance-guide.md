---
id: acceptance-guide
title: Cluster acceptance guide
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> Please note that all commands presented in this document are respectively to be run as `root` unless otherwise stated.

> This document will refer to parameters that vary from one installation to another (e.g., names and IP addresses of nodes) via. [macros defined here](../../installation/installation-of-centreon-ha/installation-2-nodes.md#defining-names-and-IP-addresses-of-servers)

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
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

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
  * Clone Set: php7-clone [php7]:
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
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 11:09:30 2021
Last change: Fri Jul  9 11:08:57 2021 by root via crm_resource on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_MASTER_NAME@ ]
     Slaves: [ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php7-clone [php7]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
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
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```bash
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-master (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-master with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
</Tabs>

### Check the status of the database synchronization

To verify that the database synchronization is working, performs the command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The command should return the following information:

```bash
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> If the synchronization shows `KO` you have to fix it with the help of the [operating-guide](operating-guide.md).

## Centreon resource failover

### State of the cluster before the failover

Before running a failover test, check the status of the cluster with the following command:

```bash
pcs status
```

The expected output is:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

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
  * Clone Set: php7-clone [php7]:
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
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 11:24:27 2021
Last change: Fri Jul  9 11:08:57 2021 by root via crm_resource on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_MASTER_NAME@ ]
     Slaves: [ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php7-clone [php7]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
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
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

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
  * Clone Set: php7-clone [php7]:
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
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 11:38:32 2021
Last change: Fri Jul  9 11:37:55 2021 by root via crm_attribute on @CENTRAL_SLAVE_NAME@
    
2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_SLAVE_NAME@ ]
     Slaves: [ @CENTRAL_MASTER_NAME@ ]
 Clone Set: php7-clone [php7]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@
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

The command must return the following information:

```bash
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> If the synchronization has `KO` you have to fix it with the help of the [operating-guide](operating-guide.md).

### Back to the nominal situation

To return to the nominal situation, you must launch the resource failover.

Execute the command:

```bash
pcs status
```

The output should be:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

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
  * Clone Set: php7-clone [php7]:
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
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 11:38:32 2021
Last change: Fri Jul  9 11:37:55 2021 by root via crm_attribute on @CENTRAL_SLAVE_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_SLAVE_NAME@ ]
     Slaves: [ @CENTRAL_MASTER_NAME@ ]
 Clone Set: php7-clone [php7]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@
```

</TabItem>
</Tabs>

Then, run the constraint cleanup command in case you have `Location Constraints`:

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

To simulate a network failure that would isolate the secondary node, you can use `iptables` to drop traffic from and to the secondary node.
The secondary node will be completely excluded from the cluster. The primary node keeps the majority with the QDevice.

### Processing 

To perform this test, launch the `iptables` commands on the primary node:

```bash
iptables -A INPUT -s @IP_SECONDARY_NODE@ -j DROP
iptables -A OUTPUT -d @IP_SECONDARY_NODE@ -j DROP
```

Executing the command results in no active resources being seen on the secondary node and the primary node being seen as `offline`:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```bash
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_SLAVE_NAME@ ]
  * OFFLINE: [ @CENTRAL_MASTER_NAME@ ]
No active resources
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Stack: corosync
Current DC: @CENTRAL_SLAVE_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition WITHOUT quorum
Last updated: Fri Jul  9 16:11:53 2021
Last change: Fri Jul  9 16:06:34 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_SLAVE_NAME@ ]
OFFLINE: [ @CENTRAL_MASTER_NAME@ ]

No active resources
```

</TabItem>
</Tabs>

The resources and the cluster are still working by performing a `pcs status` on the primary node.
The secondary node is seen `offline` on the primary.

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```bash
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ ]
  * OFFLINE: [ @CENTRAL_SLAVE_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php7-clone [php7]:
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
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 16:19:03 2021
Last change: Fri Jul  9 16:05:26 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ ]
OFFLINE: [ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_MASTER_NAME@ ]
 Clone Set: php7-clone [php7]
     Started: [ @CENTRAL_MASTER_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
```

</TabItem>
</Tabs>

### Back to nominal situation

To check the various iptables rules configured on the primary node, run the following command:

```bash
iptables -L
```

The command must return the following information:

```bash
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
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

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
  * Clone Set: php7-clone [php7]:
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
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 17:12:39 2021
Last change: Fri Jul  9 16:06:34 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_MASTER_NAME@ ]
     Slaves: [ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php7-clone [php7]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
```

</TabItem>
</Tabs>

Also check MySQL replication is still operational using the command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The order must return the following information:

```bash
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
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
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```bash
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_SLAVE_NAME@ ]
  * OFFLINE [ @CENTRAL_MASTER_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php7-clone [php7]:
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
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 15:14:00 2021
Last change: Fri Jul  9 15:11:35 2021 by root via crm_resource on @CENTRAL_SLAVE_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_SLAVE_NAME@ ]
OFFLINE: [ @CENTRAL_MASTER_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php7-clone [php7]
     Started: [ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@
```

</TabItem>
</Tabs>

On the primary node, the `pcs status` command should return the following result:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```bash
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_SLAVE_NAME@ ]
  * OFFLINE [ @CENTRAL_MASTER_NAME@ ]
No active resources
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition WITHOUT quorum
Last updated: Fri Jul  9 15:40:14 2021
Last change: Fri Jul  9 15:12:43 2021 by root via crm_resource on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ ]
OFFLINE: [ @CENTRAL_SLAVE_NAME@ ]

No active resources
```

</TabItem>
</Tabs>

This test checks that resources will be switched to the secondary node if the primary node is unavailable and allows for continuity of service.

### Back to nominal situation

To check the various iptables rules configured on the primary node, run the following command:

```bash
iptables -L
```

The command must return the following information:

```bash
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

By running the `crm_mon` command on the second node, you will see the primary node move up in the cluster.
If you want to switch to the primary node, run the [failover commands](acceptance-guide.md#return-to-nominal-situation).
