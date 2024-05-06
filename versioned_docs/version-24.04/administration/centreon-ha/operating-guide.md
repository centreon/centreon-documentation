---
id: operating-guide
title: Operating guide
---

> Unless otherwise stated, all commands in this document must be passed as `root`.

> In this page, we will refer to characteristics that are bound to change from one platform to another (such as IP addresses and host names) by the [macros defined here](../../installation/installation-of-centreon-ha/installation.md#convention-for-names-and-ip-addresses).

## What happens when the cluster fails over?

When the cluster fails over (e.g. when the active node is affected by a network outage, if its Broker partitions are full...):

* The host for the VIP should be OK (it may temporarily go down in a SOFT state if the corresponding monitoring check is performed at the exact same time the cluster fails over.)
* The host for the central node that failed will show up as DOWN and/or with CRITICAL services.
* You may receive notifications if you have configured them.
* You may have to log on to the interface again.

## In Resource Status, how do I know the state of the cluster?

On both central nodes, the **PCS-Status** service gives you the detailed state of the cluster. The output of the service in the details panel is the output of the `pcs status` command.

## In Resource status, how do I know which central is the active node?

You can know which central is the active node by looking at which node is carrying the cluster resources in the output of the **PCS-Status** service on each central.

## Cluster Management

The following set of commands can be run from any member of the cluster (central nodes, quorum device).

### Display the status of the cluster

To view the general state of the cluster, you can run the following commands:

* `pcs status`, which has a static output: it displays the state of the cluster as it is at the time you run the command.

* `crm_mon`, which has a dynamic output: the state of the cluster is displayed in real time. You can watch the resources being stopped and transferred to the other node. Use `crm_mon -fr` to keep displaying stopped resources.

Example of output when the cluster is working properly:

```
Cluster Summary:
  * Stack: corosync (Pacemaker is running)
  * Current DC: @CENTRAL_PASSIVE_NAME@ (version 2.1.6-9.1.el8_9-6fdc9deea29) - partition with quorum
  * Last updated: Wed Apr 17 10:24:25 2024 on @CENTRAL_ACTIVE_NAME@
  * Last change:  Tue Apr 16 05:47:37 2024 by hacluster via crmd on @CENTRAL_PASSIVE_NAME@
  * 2 nodes configured
  * 12 resource instances configured

Node List:
  * Online: [ @CENTRAL_PASSIVE_NAME@ @CENTRAL_ACTIVE_NAME@ ]

Active Resources:
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_PASSIVE_NAME@ @CENTRAL_ACTIVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_PASSIVE_NAME@ @CENTRAL_ACTIVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_ACTIVE_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_ACTIVE_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_ACTIVE_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_ACTIVE_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_ACTIVE_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_ACTIVE_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_ACTIVE_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_ACTIVE_NAME@

```

These commands should return no errors. If there are "Failed actions" on any resource, troubleshoot them using the [troubleshooting guide](troubleshooting-guide.md).

### View the cluster's configuration

To display a very detailed description the cluster's configuration (including network information), run this command:

```bash
pcs config show
```

### Test the configuration

To test the cluster's configuration (e.g. to check the name of the resources for any typos, or to check network information), run this command:

```bash
crm_verify -L -V
```

## Switching resources/resource groups from one node to another

To toggle the `centreon` resource group:

1. Move the resource group to the other node:

   ```bash
   pcs resource move centreon
   ```

   This command sets an "-Inf" constraint on the node hosting the resource. As a result, the resource group switches to another node. 

2. Clear the constraint:

   ```bash
   pcs resource clear centreon
   ```

If you move a single resource from the centreon resource group from one node to the other, all the other resources in the group will switch too.

## Remove an error displayed in the cluster status

Once the cause of the error has been identified and fixed ([troubleshooting guide](troubleshooting-guide.md)), you must manually delete the error message:

```bash
pcs resource cleanup
```

Or, if you want to remove only the errors linked to one resource:

```bash
pcs resource cleanup <resource_name>
```

## View cluster logs

The cluster logs are located in `/var/log/cluster/corosync.log`:

```bash
tail -f /var/log/cluster/corosync.log
```

Useful logs can also be found in `/var/log/pacemaker/pacemaker.log`.

### Change the cluster log verbosity level

To change the verbosity level of the cluster logs, edit the following files:

* `/etc/sysconfig/pacemaker`
* `/etc/rsyslog.d/centreon-cluster.conf`

## Advanced commands

### Save & import the configuration of the cluster

#### Export/import in XML format

To save the cluster configuration in XML format, run this command:

```bash
cibadmin --query > /tmp/cluster_configuration.xml
```

> The following commands perform important modifications to the cluster's configuration and might break it. Use them wisely.

After modifying the XML configuration file, reimport it:

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

### Delete a Pacemaker resource group

> **Warning:** These commands will destroy your Centreon cluster. Do this only if you know what you are doing.

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

To create the resources again, follow the installation procedure [from this point](../../installation/installation-of-centreon-ha/installation-2-nodes.md#creating-the-centreon-resource-group)
