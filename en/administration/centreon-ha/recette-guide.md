---
id: recette-guide
title: Faire la recette du cluster
---

> Please note that all commands presented in this document are respectively to be run as `root` unless otherwise stated.

> This document will refer to parameters that vary from one installation to another (e.g., names and IP addresses of nodes) via. [macros defined here](../../installation/installation-of-centreon-ha/installation-2-nodes.html#defining-names-and-IP-addresses-of-servers)

## Requirements of the tests

In order to test the functioning of your cluster, we will perform a failover test and also simulate a network crash.

About network failure, this is normally done at a physical level by removing the network cable or a switch to simulate the real-world scenario where the operating system has no control or indication of a problem other than the fact that the cluster can no longer communicate.
However, in our case, we will use iptables and drop the packets on the IP address that is configured for communication.

Starting with the verification in order to be in condition to perform the acceptance tests.

### Check the state of the cluster

To check the general state of the cluster run the command :

```bash
crm_mon -f
```

The display will show the following information:

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

> Check the resources for `Failed` errors and correct them with the help of the [troubleshooting guide](troubleshooting-guide.html).

### Check the constraints

To check that there are no constraints, runs the command: 

```bash
pcs constraint
```

The command should return this:

```bash
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-master (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-master with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

### Check the status of the database synchronization

To check that the database synchronization is working, runs the command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The expected result is:

```bash
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> If the synchronization has `KO` you have to correct it with the help of the [operating-guide](operating-guide.html).

## How to test
When all the checks have been done you can start testing.

### Centreon resource failover
#### Prerequisites

