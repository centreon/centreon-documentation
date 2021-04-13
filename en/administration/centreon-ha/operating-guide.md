---
id: operating-guide
title: Operating guide
---

> Unless otherwise stated, all commands in this document must be passed as `root`.

> In this document, we will refer to characteristics that are bound to change from a platform to another (such as IP addresses and hosts names) by the [macros defined here](installation-2-nodes.html#defining-hosts-names-and-addresses).

## Cluster Management

The following set of commands can be run from any member of the cluster.

### Display cluster status

To view the general state of the cluster, run this command:

```bash
crm_mon
```

> Check the "Failed actions" on the resources and troubleshoot them using the [troubleshooting guide](troubleshooting-guide.html).

### View the status of a resource

To know the status of a specific resource, run this command:

```bash
pcs resource show <resource_name>
```

For example to know the status of the **centengine** resource, run this command:

```bash
pcs resource show centengine
```

### View cluster configuration

To view the cluster configuration, run this command:

```bash
pcs config show
```

### Test the configuration

To test the cluster configuration, run this command:

```bash
crm_verify -L -V
```

### Save & import configuration

#### Export/import in XML format

To save the cluster configuration in XML format, run this command:

```bash
cibadmin --query > /tmp/cluster_configuration.xml
```

> The following commands perform important modifications to the cluster's configuration and might break it. Use wisely.

After having modified the XML configuration file, reimport it:

```bash
cibadmin --replace --xml-file /tmp/cluster_configuration.xml
```

To completely reset your cluster's configuration, run this command:

```bash
cibadmin --force --erase
```

#### Export/import in binary format

The cluster's configuration can be backed up to a binary file:

```bash
pcs config backup export
```

This backup can then be re-imported:

```bash
pcs config restore export.tar.bz2
```

### Check the "switchability" of a resource

To simulate the ability to toggle a resource from one node to another, run this command:

```bash
crm_simulate -L -s
```

Then check the scores displayed.

## Resource management

### Switch a resource from one node to another

To move a resource from the node where it is currently running to the other, run this command:

```bash
pcs resource move <resource_name>
```

> Warning: the `pcs resource move` adds a constraint that will prevent the resource from moving back to the node where it used to be running.

Once the resource is done moving, run this command:

```bash
pcs resource clear <resource_name>
```

### Remove an error displayed in the cluster status

Once the cause of the error has been identified and fixed ([troubleshooting guide](troubleshooting-guide.html)), you must manually delete the error message:

```bash
pcs resource cleanup
```

Or, if you want to remove only the errors linked to one resource:

```bash
pcs resource cleanup <resource_name>
```

### View cluster logs

The cluster logs are located in `/var/log/cluster/corosync.log`:

```bash
tailf /var/log/cluster/corosync.log
```

Useful logs can also be found in `/var/log/messages`.

### Change the cluster log verbosity level

To change the verbosity level of the cluster logs, edit the following files:

* `/etc/sysconfig/pacemaker`
* `/etc/rsyslog.d/centreon-cluster.conf`

## Management of the MariaDB resource

This chapter discusses the operation procedures for the `ms_mysql` resource. The procedures are to be performed on the `@CENTRAL_MASTER_NAME@` and `@CENTRAL_SLAVE_NAME@` servers.

### Check the status of MariaDB replication

Run the following command on one of the database servers:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

If errors are displayed on the third or the fourth line, it means that the database replication has been broker for some reason. The procedure below explains how to manually re-enable the MariaDB replication.

### Restore MariaDB master-slave replication

> These procedure is to be performed in the event of a breakdown in the MariaDB databases replication thread or a server crash if it cannot be recovered by running `pcs resource cleanup ms_mysql` or `pcs resource restart ms_mysql`.

Prevent the cluster from managing the MariaDB resource during the operation (to be run from any node):

```bash
pcs resource unmanage ms_mysql
```

Connect to the MariaDB slave server ans shutdown the MariaDB service:

```bash
mysqladmin -p shutdown
```

Connect to the MariaDB master server and run the following command to overwrite the slave's data with the master's:

```bash
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

Re-enable the cluster to manage the MariaDB resource:

```bash
pcs resource manage ms_mysql
```

Run the following command on one of the database servers to make sure that the replication has successfully been restored:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

### Reverse the direction of the MariaDB master-slave replication

> Before performing this operation, it is mandatory to make sure that the MariaDB replication thread [is running well](operating-guide.html#check-the-status-of-mariadb-replication).

> **Warning:** Following this procedure on a 2-node cluster installed using [this procedure](installation-2-nodes.html) will move the `centreon` resource group as well, because it **must** run on the node having the `ms_mysql-master` meta attribute.

To make the resource move from one node to the other, run this command:

```bash
pcs resource move ms_mysql-master
```

This command sets a "-Inf" constraint on the node hosting the resource. As a result, the resource switches to another node. 

Wait until all the resources have switched to the other node and then clear the constraint:

```bash
pcs resource clear ms_mysql-master
```

## Management of the Centreon resource group

### Toggle the resource group `centreon`

> **Warning:** As in [this chapter](operating-guide.html#reverse-the-direction-of-the-mariadb-master-slave-replication), following this procedure on a 2-node cluster installed using [this procedure](installation-2-nodes.html) will switch the MariaDB master as well, because is **must** run on the node having the `ms_mysql-master` meta attribute.

Move the resource group to the other node:

```bash
pcs resource move centreon
```

This command sets a "-Inf" constraint on the node hosting the resource. As a result, the resource group switches to another node. Following this manipulation, it is necessary to clear the constraint:

```bash
pcs resource clear centreon
```

### Delete a Pacemaker resource group

> **Warning:** These commands will prevent your Centreon cluster from working. Only do this if you know what you are doing.

Connect to a cluster node and run the following commands:

```bash
pcs resource delete centreon             \
                cbd_central_broker       \
                gorgone                  \
                snmptrapd                \
                centreontrapd            \
                http                     \
                centreon_central_sync    \
                vip
```

If that does not work, it is probably due to a resource in a failed state. Run the following commands to delete the resource:

```bash
crm_resource --resource [resource] -D -t primitive -C
pcs resource cleanup centreon
```

To create the resources again, follow the installation procedure [from this point](installation-2-nodes.html#creating-the-centreon-resource-group)

## Monitoring a Centreon-HA cluster

A high-availability platform is basically a LAMP platform (Linux Apache MariaDB PHP) managed by the [ClusterLabs](https://clusterlabs.org/) tools. The platform's monitoring must therefore include the same indicators as with any Centreon platform, and some cluster-specific ones. **The monitoring of the cluster must be performed from an external poller.**

### System indicators and processes

The easiest part consists in monitoring the basic system indicators, mostly using SNMP Protocol, which is made quite simple thanks to the [Linux plugin pack](../plugin-packs/procedures/operatingsystems-linux-snmp.html).

* System metrics
    * LOAD Average
    * CPU usage
    * Memory usage
    * SWAP usage
    * File systems usage
    * Networking traffic
    * NTP synchronization with the reference time server
* Processes
    * System processes `crond`, `ntpd`, `rsyslogd`
    * Centreon processes `gorgoned`, `centengine`, `centerontrapd`, `httpd24-httpd`, `snmptrapd`, `mysqld`, `rh-php73-php-fpm`

### Application monitoring

* Control access to the URL `http://@VIP_IPADDR@/centreon` using the [HTTP Protocol plugin pack](../plugin-packs/procedures/applications-protocol-http.html)
* MariaDB, using the [MySQL/MariaDB Database plugin pack](../plugin-packs/procedures/applications-databases-mysql.html)
    * MariaDB Server Connection Control
    * MariaDB / InnoDB buffers and caches
    * Indexes usage
    * MariaDB replication

### Cluster monitoring

The cluster-specific health checks can be monitored using the [Pacemaker plugin pack](../plugin-packs/procedures/applications-pacemaker-ssh.html):

* Resources constraints: only for `ms_mysql` and  `centreon` resources
* Failed actions

> Note: a plugin pack dedicated to Centreon-HA might be release in the future to make this easier.

