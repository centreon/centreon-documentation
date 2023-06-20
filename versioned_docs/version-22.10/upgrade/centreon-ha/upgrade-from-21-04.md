---
id: upgrade-centreon-ha-from-21-04
title: Upgrade Centreon HA from Centreon 21.04
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter describes how to upgrade your Centreon HA platform from version 21.04
to version 22.10

## Prerequisites

### Suspend cluster resources management

In order to avoid a failover of the cluster during the update, it is necessary to unmanage all Centreon resources, as well as MariaDB.

```bash
pcs property set maintenance-mode=true
```

### Perform a backup

Be sure that you have fully backed up your environment for the following
servers:

- Central server
- Database server

### Update the RPM signing key

For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021. When upgrading from an older version, you need to go through the [key rotation procedure](../../security/key-rotation.md#existing-installation), to remove the old key and install the new one.

## Upgrade process

To perform the upgrade, please [follow the official documentation](../../upgrade/upgrade-from-21-04.md) Only on the **active central node** and **active database node if needed**.

Then perform below commands only on the Central Servers:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```shell
mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm
```

</TabItem>
<TabItem value="RHEL / CentOS 7" label="RHEL / CentOS 7">

```shell
mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm
```

</TabItem>
</Tabs>

On the passive central node, move the "install" directory to avoid getting the "upgrade" screen in the WUI in the event of a further exchange of roles.

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y-%m-%d`
sudo -u apache /usr/share/centreon/bin/console cache:clear
```

### Removing cron jobs

The RPM upgrade puts cron jobs back in place on the Central and Databases servers. Remove them to avoid concurrent executions: 

```bash
rm -rf /etc/cron.d/centreon
rm -rf /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-ha-mysql
```

### Reset the permissions for centreon_central_sync resource

The RPM upgrade puts the permissions back in place on the **Central servers**. Change it using these commands:

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
It's necessary to destroy completely the cluster and configure back again with
the latest version of Centreon and MariaDB Replication mechanismes.

### Maintenance mode and backup

Perform a backup of the cluster using:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```bash
pcs config backup centreon_cluster
pcs resource config --output-format=cmd | sed -e :a -e '/\\$/N; s/\\\n//; ta' | sed 's/-f tmp-cib.xml//' | egrep "create|group" | egrep -v "(mysql|php|cbd_rrd)" > centreon_pcs_command.sh
```

</TabItem>
<TabItem value="RHEL / CentOS 7" label="RHEL / CentOS 7">

```bash
pcs config backup centreon_cluster
pcs config export pcs-commands | sed -e :a -e '/\\$/N; s/\\\n//; ta' | sed 's/-f tmp-cib.xml//' | egrep "create|group" | egrep -v "(mysql|php|cbd_rrd)" > centreon_pcs_command.sh
```

</TabItem>
</Tabs>

Check the file `centreon_cluster.tar.bz2` exist before continuing this procedure.

```bash
ls -l centreon_cluster.tar.bz2
```

You should have a result like this:

```text
-rw------- 1 root root 2777 May  3 17:49 centreon_cluster.tar.bz2
```

Then check the file centreon_pcs_command.sh, the export command may display some Warning lines but it's not blocking.

```bash
cat centreon_pcs_command.sh
```

The content should looks like this:

```text
pcs resource create --no-default-ops --force -- vip ocf:heartbeat:IPaddr2   broadcast=@VIP_BROADCAST_IPADDR@ cidr_netmask=@VIP_CIDR_NETMASK@ flush_routes=true ip=@VIP_IPADDR@ nic=@VIP_IFNAME@   op     monitor interval=10s id=vip-monitor-interval-10s timeout=20s     start interval=0s id=vip-start-interval-0s timeout=20s     stop interval=0s id=vip-stop-interval-0s timeout=20s   meta target-role=started;
pcs resource create --no-default-ops --force -- http systemd:httpd   op     monitor interval=5s id=http-monitor-interval-5s timeout=20s     start interval=0s id=http-start-interval-0s timeout=40s     stop interval=0s id=http-stop-interval-0s timeout=40s   meta target-role=started;
pcs resource create --no-default-ops --force -- gorgone systemd:gorgoned   op     monitor interval=5s id=gorgone-monitor-interval-5s timeout=20s     start interval=0s id=gorgone-start-interval-0s timeout=90s     stop interval=0s id=gorgone-stop-interval-0s timeout=90s   meta target-role=started;
pcs resource create --no-default-ops --force -- centreon_central_sync systemd:centreon-central-sync   op     monitor interval=5s id=centreon_central_sync-monitor-interval-5s timeout=20s     start interval=0s id=centreon_central_sync-start-interval-0s timeout=90s     stop interval=0s id=centreon_central_sync-stop-interval-0s timeout=90s   meta target-role=started;
pcs resource create --no-default-ops --force -- cbd_central_broker systemd:cbd-sql   op     monitor interval=5s id=cbd_central_broker-monitor-interval-5s timeout=30s     start interval=0s id=cbd_central_broker-start-interval-0s timeout=90s     stop interval=0s id=cbd_central_broker-stop-interval-0s timeout=90s   meta target-role=started;
pcs resource create --no-default-ops --force -- centengine systemd:centengine   op     monitor interval=5s id=centengine-monitor-interval-5s timeout=30s     start interval=0s id=centengine-start-interval-0s timeout=90s     stop interval=0s id=centengine-stop-interval-0s timeout=90s   meta multiple-active=stop_start target-role=started;
pcs resource create --no-default-ops --force -- centreontrapd systemd:centreontrapd   op     monitor interval=5s id=centreontrapd-monitor-interval-5s timeout=20s     start interval=0s id=centreontrapd-start-interval-0s timeout=30s     stop interval=0s id=centreontrapd-stop-interval-0s timeout=30s   meta target-role=started;
pcs resource create --no-default-ops --force -- snmptrapd systemd:snmptrapd   op     monitor interval=5s id=snmptrapd-monitor-interval-5s timeout=20s     start interval=0s id=snmptrapd-start-interval-0s timeout=30s     stop interval=0s id=snmptrapd-stop-interval-0s timeout=30s   meta target-role=started;
pcs resource group add centreon   vip http gorgone centreon_central_sync cbd_central_broker centengine centreontrapd snmptrapd;
```

This file will be necessary to recreate all the ressources of your cluster.

### Delete the resources

These command should run only the active central node:

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">

```bash
pcs resource delete ms_mysql --force
pcs resource delete cbd_rrd --force
pcs resource delete php7 --force
pcs resource delete centreon --force
```

</TabItem>
<TabItem value="HA 4 Nodes" label="HA 4 Nodes">

```bash
pcs resource delete ms_mysql --force
pcs resource delete vip_mysql --force
pcs resource delete cbd_rrd --force
pcs resource delete php7 --force
pcs resource delete centreon --force
```

</TabItem>
</Tabs>

### Reconfigure MariaDB

It's necessary to modify the mysql configuration by editing the file `/etc/my.cnf.d/server.cnf`:

> On the 2 Central servers in HA 2 nodes
> On the 2 Database servers in HA 4 nodes.

```shell
[server]
...
skip-slave-start
log-slave-updates
gtid_strict_mode=ON
expire_logs_days=7
ignore-db-dir=lost+found
...
```

### Launch GTID replication

Run this command **on the secondary database node**:

```bash
mysqladmin -p shutdown
```

It is important to make sure that MariaDB is completely shut down. You will run this command and check that it returns no output:

```bash
ps -ef | grep mariadb[d]
```

Once the service is stopped **on the secondary database node**, you will run the synchronization script **from the primary database node**:

```bash
mysqladmin -p shutdown
systemctl restart mariadb
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

This script's output is very verbose and you can't expect to understand everything, so to make sure it went well, focus on the last lines of its output, checking that it looks like:

```text
Umount and Delete LVM snapshot
  Logical volume "dbbackupdatadir" successfully removed
Start MySQL Slave
Start Replication
Id	User	Host	db	Command	Time	State	Info	Progress
[variable number of lines]
```

The important thing to check is that `Start MySQL Slave` and `Start Replication` are present and that no errors follow it.

In addition, the output of this command must display only `OK` results:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The expected output is:

```text
Connection MASTER Status '@CENTRAL_MASTER_NAME@' [OK]
Connection SLAVE Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

### Restart Centreon process

Then to restart all the processes on the **active central node**:

```bash
systemctl restart cbd-sql cbd gorgoned centengine centreontrapd
```

And on the **passive central node**:

```bash
systemctl restart cbd
```

### Clean broker memory files

> **WARNING:** perform this command only the **passive central node**.

Before resuming the cluster resources management, to avoid broker issues, cleanup all the *.memory.*, *.unprocessed.* or *.queue.* files:

```bash
rm -rf /var/lib/centreon-broker/central-broker-master.memory*
rm -rf /var/lib/centreon-broker/central-broker-master.queue*
rm -rf /var/lib/centreon-broker/central-broker-master.unprocessed*
```

### Recreate the cluster resources

To be run **only on one central node**:

> **WARNING:** the syntax of the following command depends on the Linux Distribution you are using.

> You can find @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ @MARIADB_REPL_USER@
@MARIADB_REPL_USER@ variable in `/etc/centreon-ha/mysql-resources.sh`.

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mariadb-centreon \
    config="/etc/my.cnf.d/server.cnf" \
    pid="/var/lib/mysql/mysql.pid" \
    datadir="/var/lib/mysql" \
    socket="/var/lib/mysql/mysql.sock" \
    binary="/usr/bin/mysqld_safe" \
    node_list="@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd="@MARIADB_REPL_PASSWD@" \
    test_table='centreon.host'
```

</TabItem>
<TabItem value="RHEL 7" label="RHEL 7">

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mariadb-centreon \
    config="/etc/my.cnf.d/server.cnf" \
    pid="/var/lib/mysql/mysql.pid" \
    datadir="/var/lib/mysql" \
    socket="/var/lib/mysql/mysql.sock" \
    binary="/usr/bin/mysqld_safe" \
    node_list="@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd="@MARIADB_REPL_PASSWD@" \
    test_table='centreon.host'
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mariadb-centreon \
    config="/etc/my.cnf.d/server.cnf" \
    pid="/var/lib/mysql/mysql.pid" \
    datadir="/var/lib/mysql" \
    socket="/var/lib/mysql/mysql.sock" \
    binary="/usr/bin/mysqld_safe" \
    node_list="@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd="@MARIADB_REPL_PASSWD@" \
    test_table='centreon.host' \
    master
```

</TabItem>
</Tabs>

> **WARNING:** the syntax of the following command depends on the Linux Distribution you are using.

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">
<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```bash
pcs resource promotable ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```
</TabItem>
<TabItem value="RHEL 7" label="RHEL 7">

```bash
pcs resource master ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```
</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
pcs resource meta ms_mysql-master \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```
</TabItem>
</Tabs>
</TabItem>
<TabItem value="HA 4 Nodes" label="HA 4 Nodes">
<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```bash
pcs resource promotable ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

VIP Address of databases servers

```bash
pcs resource create vip_mysql \
    ocf:heartbeat:IPaddr2 \
    ip="@VIP_SQL_IPADDR@" \
    nic="@VIP_SQL_IFNAME@" \
    cidr_netmask="@VIP_SQL_CIDR_NETMASK@" \
    broadcast="@VIP_SQL_BROADCAST_IPADDR@" \
    flush_routes="true" \
    meta target-role="stopped" \
    op start interval="0s" timeout="20s" \
    stop interval="0s" timeout="20s" \
    monitor interval="10s" timeout="20s"
```

</TabItem>
<TabItem value="RHEL 7" label="RHEL 7">

```bash
pcs resource master ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

VIP Address of databases servers

```bash
pcs resource create vip_mysql \
    ocf:heartbeat:IPaddr2 \
    ip="@VIP_SQL_IPADDR@" \
    nic="@VIP_SQL_IFNAME@" \
    cidr_netmask="@VIP_SQL_CIDR_NETMASK@" \
    broadcast="@VIP_SQL_BROADCAST_IPADDR@" \
    flush_routes="true" \
    meta target-role="stopped" \
    op start interval="0s" timeout="20s" \
    stop interval="0s" timeout="20s" \
    monitor interval="10s" timeout="20s"
```
</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
pcs resource meta ms_mysql-master \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

VIP Address of databases servers

```bash
pcs resource create vip_mysql \
    ocf:heartbeat:IPaddr2 \
    ip="@VIP_SQL_IPADDR@" \
    nic="@VIP_SQL_IFNAME@" \
    cidr_netmask="@VIP_SQL_CIDR_NETMASK@" \
    broadcast="@VIP_SQL_BROADCAST_IPADDR@" \
    flush_routes="true" \
    meta target-role="stopped" \
    op start interval="0s" timeout="20s" \
    stop interval="0s" timeout="20s" \
    monitor interval="10s" timeout="20s"
```
</TabItem>
</Tabs>
</TabItem>
</Tabs>

#### PHP resource

```bash
pcs resource create "php" \
    systemd:php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
```

#### RRD broker resource

```bash
pcs resource create "cbd_rrd" \
    systemd:cbd \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="20s" timeout="30s" \
    clone
```

#### Recreating the *centreon* resource group

```bash
bash centreon_pcs_command.sh
```

#### Recreating the constraint

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">
<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```bash
pcs constraint colocation add master "ms_mysql-clone" with "centreon"
pcs constraint colocation add master "centreon" with "ms_mysql-clone" 
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
pcs constraint colocation add master "ms_mysql-master" with "centreon"
pcs constraint colocation add master "centreon" with "ms_mysql-master"
```

</TabItem>
</Tabs>
</TabItem>
<TabItem value="HA 4 Nodes" label="HA 4 Nodes">

In order to glue the Primary Database role with the Virtual IP, define a mutual Constraint:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```bash
pcs constraint colocation add "vip_mysql" with master "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
pcs constraint colocation add "vip_mysql" with master "ms_mysql-master"
pcs constraint colocation add master "ms_mysql-master" with "vip_mysql"
```

</TabItem>
</Tabs>

Then recreate the Constraint that prevent Centreon Processes to run on Database nodes and vice-et-versa:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8" label="RHEL 8 / Oracle Linux 8">

```bash
pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location ms_mysql-clone avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY
pcs constraint location cbd_rrd-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
pcs constraint location ms_mysql-master avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY
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
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.1.4-5.el8_7.2-dc6eb4362e) - partition with quorum
  * Last updated: Fri Feb 10 11:05:11 2023
  * Last change:  Fri Feb 10 11:04:41 2023 by hacluster via crmd on @CENTRAL_MASTER_NAME@
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
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@

Migration Summary:
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

### Disabled resources

When you do a `crm_mon -fr` and you have a resource that is disable :

```text
...
 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
vip_mysql       (ocf::heartbeat:IPaddr2):       Stopped (disabled)
...
```

You must enable the resource with the following command :

```bash
pcs resource enable @RESSOURCE_NAME@
```

In our case :

```bash
pcs resource enable vip_mysql
```

## Verifying the platform stability

You should now check that eveything works fine:

* Access to the web UI menus.
* Poller configuration generation + reload and restart method.
* Schedule immediate checks (Central + Pollers) , acknowledgements, downtimes, etc.
* Move resources or reboot active server and check again that everything is fine.
