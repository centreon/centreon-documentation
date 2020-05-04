---
id: troubleshooting-guide
title: Troubleshooting guide
---

## A failed action is displayed in `crm_mon` but the resource seems to be working fine

```text
Stack: corosync
Current DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el7_7.2-3c4c782f70) - partition with quorum
Last updated: Thu Feb 20 13:14:17 2020
Last change: Thu Feb 20 09:25:54 2020 by root via crm_attribute	on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resources configured

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
     vip        (ocf::heartbeat:IPaddr2):	Started @CENTRAL_MASTER_NAME@
     http	(systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync	(systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     centreontrapd	(systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):	Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@

Failed Resource Actions:
* centreontrapd_start_0 on @CENTRAL_MASTER_NAME@ 'not running' (7): call=82, status=complete, exitreason='',
    last-rc-change='Thu Feb 20 13:42:19 2020', queued=1ms, exec=2122ms
```

## Resource not starting

In the event of a Centreon resource (eg. `centreontrpad`) failing to start, *failed actions* will appear at the bottom of the `crm_mon` command's output **and** the resources that are supposed to be started after it. It will look like this:

```text
Stack: corosync
Current DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el7_7.2-3c4c782f70) - partition with quorum
Last updated: Thu Feb 20 13:14:17 2020
Last change: Thu Feb 20 09:25:54 2020 by root via crm_attribute	on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resources configured

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
     vip        (ocf::heartbeat:IPaddr2):	Started @CENTRAL_MASTER_NAME@
     http	(systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync	(systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     centreontrapd	(systemd:centreontrapd):        Stopped
     snmptrapd  (systemd:snmptrapd):    Stopped
     cbd_central_broker (systemd:cbd-sql):	Stopped
     centengine (systemd:centengine):   Stopped

Failed Resource Actions:
* centreontrapd_start_0 on @CENTRAL_MASTER_NAME@ 'not running' (7): call=82, status=complete, exitreason='',
    last-rc-change='Thu Feb 20 13:42:19 2020', queued=1ms, exec=2122ms
```

In order to get more information regarding this failure, you should first check the service's status by running this command on the node **where the service should be currently running**:

```bash
systemctl status centreontrapd -l
```

If it does not provide enough information, you can try forcing it to start and check for error messages:

```bash
pcs resource debug-start centreontrapd
```

Once the root cause has been identified, run the following command for the cluster to "forget" these errors and restart the service:

```bash
pcs resource cleanup centreontrapd
```

## One resource or resources group doesn't start on any node

If after a failover, could it be a manual one or after a server shutdown, the following situation happens:

```text
Stack: corosync
Current DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el7_7.2-3c4c782f70) - partition with quorum
Last updated: Thu Feb 20 14:48:12 2020
Last change: Thu Feb 20 14:47:47 2020 by root via crm_resource on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resources configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Slaves: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php7-clone [php7]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
```

No error is displayed but the centreon group doesn't show up anymore and none of its resources is started. This mostly happens when there were multiples failover (`pcs resource move ....`) without deleting the constraint. To check that:

```bash
pcs constraint show
```

```text
Location Constraints:
  Resource: centreon
    Disabled on: @CENTRAL_SLAVE_NAME@ (score:-INFINITY) (role: Started)
    Disabled on: @CENTRAL_MASTER_NAME@ (score:-INFINITY) (role: Started)
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-master (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-master with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

We notice that the centreon group isn't authorized to start on any node

To free the resource group from its constraints, run the following command:

```bash
pcs resource clear centreon
```

Resources should be starting now.



