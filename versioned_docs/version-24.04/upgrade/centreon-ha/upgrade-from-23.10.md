---
id: upgrade-centreon-ha-from-23-10
title: Upgrade Centreon HA from Centreon 23.10
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter describes how to upgrade your Centreon HA platform from version 23.10 to version 24.04.

## Prerequisites

### Suspend cluster resources management

In order to avoid a failover of the cluster during the update, it is necessary to unmanage all Centreon resources, as well as MariaDB.

```bash
pcs property set maintenance-mode=true
```

### Perform a backup

Be sure that you have fully backed up your environment for the following servers:

- Central server
- Database server

### Update the RPM signing key

For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021.
When upgrading from an older version, you need to go through the [key rotation procedure](../../security/key-rotation.md#existing-installation), to remove the old key and install the new one.

## Upgrade process

Before process the upgrade, stop Centreon-Broker-SQL on the **central master node**:

```bash
systemctl stop cbd-sql
```

Now, to perform the upgrade:

> For the **active central node** and **active database node if needed** please [follow the official documentation](../../upgrade/upgrade-from-23-10.md) **until the "Post-upgrade actions" step included**.

> For the **passive central node** and **passive database node if needed**, please [follow the official documentation](../../upgrade/upgrade-from-23-10.md) **until the "Update your customized Apache configuration" step included only. Do not perform the "Finalizing the upgrade" step.**.

<Tabs groupId="sync">
<TabItem value="RHEL8 / Alma Linux 8 / Oracle Linux 8" label="RHEL8 / Alma Linux 8 / Oracle Linux 8">

Then on the **two central nodes**, restore the file `/etc/centreon-ha/centreon_central_sync.pm`:

```shell
mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm
```

On the **passive central node**, move the "install" directory to avoid getting the "upgrade" screen in the interface in the event of a further exchange of roles.

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y-%m-%d`
sudo -u apache /usr/share/centreon/bin/console cache:clear
```

</TabItem>
<TabItem value="RHEL9 / Alma Linux 9 / Oracle Linux 9" label="RHEL9 / Alma Linux 9 / Oracle Linux 9">

Then on the **two central nodes**, restore the file `/etc/centreon-ha/centreon_central_sync.pm`:

```shell
mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm
```

On the **passive central node**, move the "install" directory to avoid getting the "upgrade" screen in the interface in the event of a further exchange of roles.

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y-%m-%d`
sudo -u apache /usr/share/centreon/bin/console cache:clear
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

On the **passive central node**, move the "install" directory to avoid getting the "upgrade" screen in the interface in the event of a further exchange of roles.

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y-%m-%d`
sudo -u www-data /usr/share/centreon/bin/console cache:clear
```

</TabItem>
</Tabs>

### Removing cron jobs

The RPM upgrade puts cron jobs back in place on the central and databases servers. Remove them to avoid concurrent executions on central and database nodes: 

```bash
rm -f /etc/cron.d/centreon
rm -f /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-ha-mysql
```

and restart the cron daemon:

<Tabs groupId="sync">
<TabItem value="RHEL8 / Alma Linux 8 / Oracle Linux 8" label="RHEL8 / Alma Linux 8 / Oracle Linux 8">

```bash
systemctl restart crond
```

</TabItem>
<TabItem value="RHEL9 / Alma Linux 9 / Oracle Linux 9" label="RHEL9 / Alma Linux 9 / Oracle Linux 9">

```bash
systemctl restart crond
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
systemctl restart cron
```

</TabItem>
</Tabs>

As you have deleted the **centreon-ha-mysql** cron, check that the following line appears in the **server** section of the **/etc/my.cnf.d/server.cnf** file (or in the **/etc/mysql/mariadb.conf.d/50-server.cnf** on Debian), it is normally already in place since 22.04 and GTID replication:

```shell
expire_logs_days=7
```

### Reset the permissions for centreon_central_sync resource

The RPM upgrade puts the permissions back in place on the two **central servers**. Change them using these commands:

```bash
chmod 775 /var/log/centreon-engine/
mkdir /var/log/centreon-engine/archives
chown centreon-engine: /var/log/centreon-engine/archives
chmod 775 /var/log/centreon-engine/archives/
find /var/log/centreon-engine/ -type f -exec chmod 664 {} \;
find /usr/share/centreon/www/img/media -type d -exec chmod 775 {} \;
find /usr/share/centreon/www/img/media -type f \( ! -iname ".keep" ! -iname ".htaccess" \) -exec chmod 664 {} \;
```

## Cluster ugprade

Since Centreon 22.04, The mariaDB Replication is now based on [GTID](https://mariadb.com/kb/en/gtid/).

However, some changes must always be done.

### Backup the configuration

Perform a backup of the cluster on central master node using:

```bash
pcs config backup centreon_cluster
cibadmin -Q > export_cluster.xml
```

Check the file `centreon_cluster.tar.bz2` exist before continuing this procedure.

```bash
ls -l centreon_cluster.tar.bz2
```

You should have a result like this:

```text
-rw------- 1 root root 2777 May  3 17:49 centreon_cluster.tar.bz2
```

### Modifying order of resources on centreon group

To optimize managment of resources and to avoid restart cbd-sql when we just want to restart gorgone, we must change there order in the group.

```bash
pcs resource group remove centreon cbd_central_broker
pcs resource group add centreon cbd_central_broker --before gorgone
```

### Clean broker memory files

> **WARNING:** perform this command only the **passive central node**.

Before resuming the cluster resources management, to avoid broker issues, cleanup all the *.memory.*, *.unprocessed.* or *.queue.* files:

```bash
rm -f /var/lib/centreon-broker/central-broker-master.memory*
rm -f /var/lib/centreon-broker/central-broker-master.queue*
rm -f /var/lib/centreon-broker/central-broker-master.unprocessed*
```

#### Recreating the constraint

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">
<Tabs groupId="sync">
<TabItem value="RHEL8 / Alma Linux 8 / Oracle Linux 8" label="RHEL8 / Alma Linux 8 / Oracle Linux 8">

First extract all contraint IDs:

```bash
pcs constraint config --full | grep "id:" | awk -F "id:" '{print $2}' | sed 's/.$//'
```

You should have a similar result:

```text
order-centreon-ms_mysql-clone-mandatory
colocation-ms_mysql-clone-centreon-INFINITY
colocation-centreon-ms_mysql-clone-INFINITY
```

and delete **all** constraints, **adapt IDs with your own**

```bash
pcs constraint delete order-centreon-ms_mysql-clone-mandatory
pcs constraint delete colocation-ms_mysql-clone-centreon-INFINITY
pcs constraint delete colocation-centreon-ms_mysql-clone-INFINITY
```

Verify if all constraint are well deleted:

```bash
pcs contraint
```

You should have a result like this:

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
Ticket Constraints:
```

If it's OK, then recreate only needed constraints

```bash
pcs constraint colocation add master "ms_mysql-clone" with "centreon"
pcs constraint colocation add master "centreon" with "ms_mysql-clone"
```

</TabItem>
<TabItem value="RHEL9 / Alma Linux 9 / Oracle Linux 9" label="RHEL9 / Alma Linux 9 / Oracle Linux 9">

First extract all contraint IDs:

```bash
pcs constraint config --full | grep "id:" | awk -F "id:" '{print $2}' | sed 's/.$//'
```

You should have a similar result:

```text
order-centreon-ms_mysql-clone-mandatory
colocation-ms_mysql-clone-centreon-INFINITY
colocation-centreon-ms_mysql-clone-INFINITY
```

and delete **all** constraints, **adapt IDs with your own**

```bash
pcs constraint delete order-centreon-ms_mysql-clone-mandatory
pcs constraint delete colocation-ms_mysql-clone-centreon-INFINITY
pcs constraint delete colocation-centreon-ms_mysql-clone-INFINITY
```

Verify if all constraint are well deleted:

```bash
pcs contraint
```

You should have a result like this:

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
Ticket Constraints:
```

If it's OK, then recreate only needed constraints

```bash
pcs constraint colocation add master "ms_mysql-clone" with "centreon"
pcs constraint colocation add master "centreon" with "ms_mysql-clone"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

First extract all contraint IDs:

```bash
pcs constraint show --full | grep "id:" | awk -F "id:" '{print $2}' | sed 's/.$//'
```

You should have a result like this:

```text
order-centreon-ms_mysql-clone-mandatory
colocation-ms_mysql-clone-centreon-INFINITY
colocation-centreon-ms_mysql-clone-INFINITY
```

and delete **all** constraints, **adapt ids with your own**

```bash
pcs constraint delete order-centreon-ms_mysql-clone-mandatory
pcs constraint delete colocation-ms_mysql-clone-centreon-INFINITY
pcs constraint delete colocation-centreon-ms_mysql-clone-INFINITY
```

Verify if all constraint are well deleted:

```bash
pcs contraint
```

You should have a result like this:

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
Ticket Constraints:
```

If it's OK, then recreate only needed constraints

```bash
pcs constraint colocation add master "ms_mysql-clone" with "centreon"
pcs constraint colocation add master "centreon" with "ms_mysql-clone"
```

</TabItem>
</Tabs>
</TabItem>
<TabItem value="HA 4 Nodes" label="HA 4 Nodes">
<Tabs groupId="sync">
<TabItem value="RHEL8 / Alma Linux 8 / Oracle Linux 8" label="RHEL8 / Alma Linux 8 / Oracle Linux 8">

First extract all contraint IDs:

```bash
pcs constraint config --full | grep "id:" | awk -F "id:" '{print $2}' | sed 's/.$//'
```

You should have a similar result depending of your host names:

```text
location-cbd_rrd-clone-cc-ha-bdd1-2210-alma8--INFINITY
location-cbd_rrd-clone-cc-ha-bdd2-2210-alma8--INFINITY
location-centreon-cc-ha-bdd1-2210-alma8--INFINITY
location-centreon-cc-ha-bdd2-2210-alma8--INFINITY
location-ms_mysql-clone-cc-ha-web1-2210-alma8--INFINITY
location-ms_mysql-clone-cc-ha-web2-2210-alma8--INFINITY
location-php-clone-cc-ha-bdd1-2210-alma8--INFINITY
location-php-clone-cc-ha-bdd2-2210-alma8--INFINITY
order-centreon-ms_mysql-clone-mandatory
colocation-ms_mysql-clone-vip_mysql-INFINITY
colocation-centreon-vip-INFINITY
```

and delete **all** constraints, **adapt IDs with your own**

```bash
pcs constraint delete location-cbd_rrd-clone-cc-ha-bdd1-2210-alma8--INFINITY
pcs constraint delete location-cbd_rrd-clone-cc-ha-bdd2-2210-alma8--INFINITY
pcs constraint delete location-centreon-cc-ha-bdd1-2210-alma8--INFINITY
...
```

Verify if all constraint are well deleted:

```bash
pcs contraint
```

You should have a result like this:

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
Ticket Constraints:
```

If it's OK, then recreate only needed constraints.

In order to glue the Primary Database role with the Virtual IP, define a mutual Constraint:

```bash
pcs constraint colocation add "vip_mysql" with master "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"
```

</TabItem>
<TabItem value="RHEL9 / Alma Linux 9 / Oracle Linux 9" label="RHEL9 / Alma Linux 9 / Oracle Linux 9">

First extract all contraint IDs:

```bash
pcs constraint config --full | grep "id:" | awk -F "id:" '{print $2}' | sed 's/.$//'
```

You should have a similar result depending of your host names:

```text
location-cbd_rrd-clone-cc-ha-bdd1-2210-alma8--INFINITY
location-cbd_rrd-clone-cc-ha-bdd2-2210-alma8--INFINITY
location-centreon-cc-ha-bdd1-2210-alma8--INFINITY
location-centreon-cc-ha-bdd2-2210-alma8--INFINITY
location-ms_mysql-clone-cc-ha-web1-2210-alma8--INFINITY
location-ms_mysql-clone-cc-ha-web2-2210-alma8--INFINITY
location-php-clone-cc-ha-bdd1-2210-alma8--INFINITY
location-php-clone-cc-ha-bdd2-2210-alma8--INFINITY
order-centreon-ms_mysql-clone-mandatory
colocation-ms_mysql-clone-vip_mysql-INFINITY
colocation-centreon-vip-INFINITY
```

and delete **all** constraints, **adapt IDs with your own**

```bash
pcs constraint delete location-cbd_rrd-clone-cc-ha-bdd1-2210-alma8--INFINITY
pcs constraint delete location-cbd_rrd-clone-cc-ha-bdd2-2210-alma8--INFINITY
pcs constraint delete location-centreon-cc-ha-bdd1-2210-alma8--INFINITY
...
```

Verify if all constraint are well deleted:

```bash
pcs contraint
```

You should have a result like this:

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
Ticket Constraints:
```

If it's OK, then recreate only needed constraints.

In order to glue the Primary Database role with the Virtual IP, define a mutual Constraint:

```bash
pcs constraint colocation add "vip_mysql" with master "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

First extract all contraint id:

```bash
pcs constraint show --full | grep "id:" | awk -F "id:" '{print $2}' | sed 's/.$//'
```

You should have a similar result depending of your host names:

```text
location-cbd_rrd-clone-deb11-bdd1--INFINITY
location-cbd_rrd-clone-deb11-bdd2--INFINITY
location-centreon-deb11-bdd1--INFINITY
location-centreon-deb11-bdd2--INFINITY
location-ms_mysql-clone-deb11-central1--INFINITY
location-ms_mysql-clone-deb11-central2--INFINITY
location-php-clone-deb11-bdd1--INFINITY
location-php-clone-deb11-bdd2--INFINITY
colocation-vip_mysql-ms_mysql-clone-INFINITY-1
colocation-ms_mysql-clone-vip_mysql-INFINITY
```

and delete **all** constraints, **adapt ids with your own**

```bash
pcs constraint delete location-cbd_rrd-clone-deb11-bdd1--INFINITY
pcs constraint delete location-cbd_rrd-clone-deb11-bdd2--INFINITY
pcs constraint delete location-centreon-deb11-bdd1--INFINITY
...
```

Verify if all constraint are well deleted:

```bash
pcs contraint
```

You should have a result like this:

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
Ticket Constraints:
```

If it's OK, then recreate only needed constraints

```bash
pcs constraint colocation add "vip_mysql" with master "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"
```

</TabItem>
</Tabs>

Then recreate the Constraint that prevent Centreon Processes to run on Database nodes and vice-et-versa:

<Tabs groupId="sync">
<TabItem value="RHEL8 / Alma Linux 8 / Oracle Linux 8" label="RHEL8 / Alma Linux 8 / Oracle Linux 8">

```bash
pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location ms_mysql-clone avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY
pcs constraint location cbd_rrd-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```

</TabItem>
<TabItem value="RHEL9 / Alma Linux 9 / Oracle Linux 9" label="RHEL9 / Alma Linux 9 / Oracle Linux 9">

```bash
pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location ms_mysql-clone avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY
pcs constraint location cbd_rrd-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location ms_mysql-clone avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY
pcs constraint location cbd_rrd-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```

</TabItem>
</Tabs>
</TabItem>
</Tabs>

## Resuming the cluster resources management

Now that the update is finished, the resources can be managed again:

```bash
pcs property set maintenance-mode=false
pcs resource cleanup
```

## Check cluster's health

You can monitor the cluster's resources in real time using the `crm_mon -fr` command:
> **INFO:** The `-fr` option allows you to display all resources even if they are disable.

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">

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
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
```

</TabItem>
<TabItem value="HA 4 Nodes" label="HA 4 Nodes">

```text
[...]
4 nodes configured
21 resources configured

Online: [@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
vip_mysql       (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
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
```

</TabItem>
</Tabs>

## Verifying the platform stability

You should now check that eveything works fine:

* Access to the web UI menus.
* Poller configuration generation + reload and restart method.
* Schedule immediate checks (Central + Pollers) , acknowledgements, downtimes, etc.
* Move resources or reboot active server and check again that everything is fine.
