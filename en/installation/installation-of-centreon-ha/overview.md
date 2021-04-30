---
id: overview
title: Centreon-HA Overview
---

## Introduction 

Centreon-HA is the only official and supported solution to set up a highly available monitoring cluster. It 
includes the following: 
* Documentation, mainly, to describe how to set up your Cluster on top of your Centreon solution.
* Script collection enabling safe and efficient management of Centreon related resources.
* Additionnal files extending default Centreon capabilities. 

Its architecture relies on the [ClusterLabs](https://clusterlabs.org/) components pacemaker and corosync, 
allowing fault-tolerance on the following components: 

* Central Server applicative daemons
  * centreon-engine (scheduler)
  * centreon-broker (multiplexer)
  * centreon-gorgone (task manager)
  * centreon-central-sync (config file replication)
* Central Server third-party daemons
  * php-fpm (FastCGI PHP cache)
  * apache server (webserver)
* Databases
  * Active/Passive binlog replication (storage)
* Hosts failures
  * Virtual machines or Physical servers

> **Warning:** If you have an IT or Business subscription, please get in touch with your Centreon Sales 
representative or Technical Account Manager before implementing this. Extensions need specific license 
files to work on both nodes smoothly.  

## Concepts

The solution implements three different kinds of resources: 

* _Multi-state_ resource running on both nodes with different roles. 
* _Clone_ resources, running on both primary and secondary nodes.
* _Unique_ resources, part of a _group_, and running on only one node.

The cluster services are divided into two functional groups.

### MariaDB functional group

The `ms_mysql` functional group is a _multi-state_ resource. This resource can be in active/primary mode 
on one node and in secondary/passive mode on another node. 

The `ms_mysql-master` meta-resource is assigned to the primary database. 

### Centreon functional group

The `centreon` functional group gathers all Centreon resources to manage them. 

### Resources type description

All these resources are described in the table below.

| Name                    | Type                 | Description                                          |
| ----------------------- | -------------------- | ---------------------------------------------------- |
| `ms_mysql`              | multi-state resource | Handles `mysql` process and the data replication     |
| `ms_mysql-master`       | location             | Set MariaDB Master server rule preference            |
| `php7`                  | clone service        | FastCGI Process Manager service (`rh-php73-php-fpm`) |
| `cbd_rrd`               | clone service        | Broker RRD service (`cbd`)                           |
| `centreon`              | group                | Centreon "primitive services" group                  |
| `vip`                   | primitive service    | VIP address for centreon                             |
| `http`                  | primitive service    | Apache service (`httpd24-httpd`)                     |
| `gorgone`               | primitive service    | Gorgone service (`gorgoned`)                         |
| `centreon_central_sync` | primitive service    | Files synchronization service                        |
| `cbd_central_broker`    | primitive service    | Central Broker service (`cbd-sql`)                   |
| `centengine`            | primitive service    | Centreon-Engine service (`centengine`)               |
| `centreontrapd`         | primitive service    | SNMP Traps management service (`centreontrapd`)      |
| `snmptrapd`             | primitive service    | SNMP Traps listening service (`snmptrapd`)           |

**Note:** The resources of the `centreon` group are started one after the other in the list order.

### Resources constraints

Pacemaker offers various types of constraints:
* Location: where the resource should or shouldn't run.
* Colocation: how resources behave to each other.

For example, Centreon-HA uses location constraints to specify to Pacemaker that the database process 
needs to be up on backend nodes but not on the front-end node. 

Regarding colocation constraints, they can ensure a Virtual IP sticks to the master nodes and/or role. 
Therefore Users, Pollers, and Daemons constantly interact with the primary node. 

### QDevice and votes

The configuration of a qdevice is **mandatory** to avoid split-brain and other situations nobody wants 
to face in a Cluster. The server with the `quorum-device` role =aims to obtain an absolute majority in a vote 
to elect a master node or resource role.

## Support

### Softwares & operating systems 

Centreon officialy supports Clustering on the following Products: 

* Any Centreon Licensed Editions 
* Centreon Map Server 

And on the following Operating Systems: 

* CentOS 7
* RHEL 7

The only official database server Centreon supports is MariaDB. 

Nevertheless, note that we validated that the whole solution can run on MySQL 8 *with some 
modifications*, only the [community](https://github.com/centreon-ha/issues) (or your DBAs) 
can help and support you in running a Cluster on top of an Oracle MySQL server.

For both MariaDB and Oracle MySQL, the replication configuration might be intrusive. We *strongly discourage you* setting 
up a cluster on a server holding other application databases, we won't support it. 

### Architectures

Centreon supports both 2 and 4 nodes architectures. We recommend using a two nodes architecture except
if your organization requires a systematic split of front and back servers or your monitoring 
scope is above 5k Hosts. 

Schemas below show both architecture flavor and network flows between servers. To get the complete network 
flow matrix, refer to the architecture dedicated installation page. 

<!--DOCUSAURUS_CODE_TABS-->

<!--Two-nodes-cluster-->

![image](../../assets/integrations/centreon-ha/centreon-ha-2-nodes-arch.png)

Reach [this page](../../installation/installation-of-centreon-ha/installation-2-nodes.png) to start your two nodes setup! 

<!--Four-nodes-cluster-->

![image](../../assets/integrations/centreon-ha/centreon-ha-4-nodes-arch.png)

Reach [this page](../../installation/installation-of-centreon-ha/installation-4-nodes.png) to start your two nodes setup!

## Additionnal information

### Server organization

Setting up a Centreon-HA cluster might be overkill if all your servers are running in the same datacenter or 
the same rack. 

In a perfect world, the primary and secondary nodes are running on different (geographical) sites, and the qdevice communicate
with both sites independently. 

### Role of the Centreon central server

In the case of a highly available architecture the **Centreon central cluster must not be used as a poller**. 
In other words, it mustn't monitor resources. Its monitoring ability should only be used to monitor its pollers. 
If this recommendation is not followed, the `centengine` service would take too long to restart 
and **it may cause the functional `centreon` group to failover**.

### VIP and load balancing

Centreon recommends using VIP addresses for both Central and Database servers. 

If you use a load balancer, it's necessary to manage the routing of all application flows. 

For example, in a four nodes setup, a load balancer can rely on:
* the listening port or the apache process state to route Users and Pollers' communication toward frontend servers.
* the value of the "read_only" flag on both database servers to determine which one is the primary one.



