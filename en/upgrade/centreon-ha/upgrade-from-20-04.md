---
id: upgrade-centreon-ha-from-20-04
title: Upgrade Centreon HA from Centreon 20.04
---

This chapter describes how to upgrade your Centreon HA platform from version 20.04
to version 21.10.

## Prerequisites

### Suspend cluster resources management

In order to avoid a failover of the cluster during the update, it is necessary to unmanage all Centreon resources, as well as MariaDB.

```bash
pcs resource unmanage centreon
pcs resource unmanage ms_mysql
pcs resource unmanage php7-clone
```

### Perform a backup

Be sure that you have fully backed up your environment for the following
servers:

- Central server
- Database server

### Update the RPM signing key

For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021. When upgrading from an older version, you need to go through the [key rotation procedure](../security/key-rotation.html#existing-installation), to remove the old key and install the new one.

## Upgrade process

### Update the Centreon repository

Run the following commands:

```shell
yum install -y https://yum.centreon.com/standard/21.10/el7/stable/noarch/RPMS/centreon-release-21.10-5.el7.centos.noarch.rpm
```

> **WARNING:** to avoid broken dependencies, please refer to the documentation of the additional modules to update the Centreon Business Repositories.

### Upgrade PHP

Centreon 21.10 uses PHP in version 8.0.

First, you need to install the **remi** repository:
```shell
yum install -y yum-utils
yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm
```
Then, you need to enable the php 8.0 repository
```shell
yum-config-manager --enable remi-php80
```

### Upgrade the Centreon solution

> Please, make sure all users are logged out from the Centreon web interface
> before starting the upgrade procedure.

Clean yum cache:

```shell
yum clean all --enablerepo=*
```

Then upgrade all the components with the following command:

<!--DOCUSAURUS_CODE_TABS-->
<!--HA 2 Nodes-->

```shell
yum remove centreon-ha
yum update centreon\*
yum install centreon-ha-web centreon-ha-common
mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm
mv /etc/centreon-ha/mysql-resources.sh.rpmsave /etc/centreon-ha/mysql-resources.sh
```

<!--HA 4 Nodes-->

On the Central Servers:

```shell
yum remove centreon-ha
yum update centreon\*
yum install centreon-ha-web centreon-ha-common
mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm
```

On the Database Servers:

```shell
yum remove centreon-ha
yum update centreon\*
yum install centreon-ha-common
mv /etc/centreon-ha/mysql-resources.sh.rpmsave /etc/centreon-ha/mysql-resources.sh
```

<!--END_DOCUSAURUS_CODE_TABS-->

The PHP timezone should be set. Run the command on both Central Server nodes:

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

> Replace **Europe/Paris** by your time zone. You can find the list of
> supported time zones [here](http://php.net/manual/en/timezones.php).

> **WARNING** the following commands must be executed on only one node of the cluster.

<!--DOCUSAURUS_CODE_TABS-->
<!--HA 2 Nodes-->
```bash
pcs resource delete php7 --force
pcs resource create "php" \
    systemd:php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
```
<!--HA 4 Nodes-->
```bash
pcs resource delete php7
pcs resource create "php" \
    systemd:php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
pcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```
<!--END_DOCUSAURUS_CODE_TABS-->

Then to perform the WEB UI upgrade, please [follow the official documentation](../../upgrade/upgrade-from-20-04.md#finalizing-the-upgrade) Only on the **active central node**.

On the passive central node, move the "install" directory to avoid getting the "upgrade" screen in the WUI in the event of a further exchange of roles.

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-YYYY-MM-DD
sudo -u apache /usr/share/centreon/bin/console cache:clear
```

### Removing cron jobs

The RPM upgrade puts cron job back in place. Remove them to avoid concurrent executions: 

```bash
rm /etc/cron.d/centreon
rm /etc/cron.d/centstorage
rm /etc/cron.d/centreon-auto-disco
```

### Reset the permissions for centreon_central_sync resource

The RPM upgrade puts the permissions back in place. Change it using these commands:

```bash
chmod 775 /var/log/centreon-engine/
mkdir /var/log/centreon-engine/archives
chown centreon-engine: /var/log/centreon-engine/archives
chmod 775 /var/log/centreon-engine/archives/
find /var/log/centreon-engine/ -type f -exec chmod 664 {} \;
find /usr/share/centreon/www/img/media -type d -exec chmod 775 {} \;
find /usr/share/centreon/www/img/media -type f \( ! -iname ".keep" ! -iname ".htaccess" \) -exec chmod 664 {} \;
```

### Restart Centreon process

Then to restart all the processes on the active central node:

```bash
systemctl restart cbd-sql cbd gorgoned centengine
```

And on the passive central node:

```bash
systemctl restart cbd
```

### Upgrade of MariaDB Databases

The MariaDB components can now be upgraded.

> **WARNING** the following commands must be executed first on the active 
database node. Once the active database node is in 10.5, you can upgrade the
passive database node.


1. Stop the mariadb service:

    ```shell
    mysqladmin -p shutdown
    ```

2. Uninstall current version:

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Install 10.5 version:

    ```shell
    yum install MariaDB-server-10.5\* MariaDB-client-10.5\* MariaDB-shared-10.5\* MariaDB-compat-10.5\* MariaDB-common-10.5\*
    ```

4. Move the configuration file:

    ```shell
     mv /etc/my.cnf.d/server.cnf.rpmsave /etc/my.cnf.d/server.cnf
    ```

5. Start the mariadb service:

    ```shell
    mysqld_safe &
    ```

6. Launch the MariaDB upgrade process:

    ```shell
    mysql_upgrade -p
    ```

You may not use the option `-p` for `mysqladmin` and `mysql_upgrade` commands
if you haven't securize your database server.

> Refer to the [official documentation](https://mariadb.com/kb/en/mysql_upgrade/)
> if errors occur during this last step.

### Change MariaDB replication

Since MariaDB 10.5, the slave_parallel_mode is no longer set up as *conservative*.
And now *centreon-ha* use GTID as the replication solution: http://mariadb.com/kb/en/gtid/
It's now necessary to recreate the resource mysql to used it.

> **WARNING** Please note which server was the primary, and which one was the replica.

#### Change MariaDB configuration file
It's necessary to modify the mysql configuration by editing `/etc/my.cnf.d/server.cnf`:

> On the 2 Central servers in HA 2 nodes
> On the 2 Database servers in HA 4 nodes.

```shell
[server]
...
slave_parallel_mode=conservative
skip-slave-start
log-slave-updates
gtid_strict_mode=ON
expire_logs_days=7
ignore-db-dir=lost+found
...
```

#### Delete the old resource

To recreate the resource ms_mysql, we need to delete first the resource using the following command:

```shell
pcs resource delete ms_mysql
```

#### Restart MariaDB and setup the replication

On the both server, restart MariaDB using the following command:

```shell
systemctl restart mariadb
```

If the mariadb didn't restart using this command, you can use the following command to stop it:

```shell
mysqladmin -p shutdown
```

and then to start it:

```shell
systemctl start mariadb
```

Then on the **primary** database server (or central), execute the following command:

```shell
mysql -p
mysql> SET GLOBAL read_only=OFF;
```

And on the **replica** database server (or central), execute the following command to restart the replication:

```shell
mysql-p
mysql> CHANGE MASTER TO MASTER_HOST='@CENTRAL_MASTER_NAME@', MASTER_USER='@MARIADB_REPL_USER@', MASTER_PASSWORD='@MARIADB_REPL_PASSWD@', master_use_gtid=slave_pos;
```

#### Creating the MariaDB cluster resource

To be run **only on one central node**:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL 8 / Oracle Linux 8-->
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

<!--RHEL 7-->
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

<!--CentOS 7-->
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
<!--END_DOCUSAURUS_CODE_TABS-->

> **WARNING:** the syntax of the following command depends on the Linux Distribution you are using.

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL 8 / Oracle Linux 8-->

```bash
pcs resource promotable ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

<!--RHEL 7-->
```bash
pcs resource master ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

<!--CentOS7-->
```bash
pcs resource meta ms_mysql-master \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```
<!--END_DOCUSAURUS_CODE_TABS-->

> **WARNING** if you're using an 4 nodes HA, change node_list attribute by using the @DATABASE_MASTER_NAME@ and @DATABASE_SLAVE_NAME@

#### Creating the constraint

Perform these commands only on **one node**:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL 8 / Oracle Linux 8-->
```bash
pcs constraint colocation add master "ms_mysql-clone" with "centreon"
pcs constraint order stop centreon then demote ms_mysql-clone
```

<!--RHEL 7 / CentOS 7-->
```bash
pcs constraint colocation add master "ms_mysql-master" with "centreon"
pcs constraint order stop centreon then demote ms_mysql-master
```
<!--END_DOCUSAURUS_CODE_TABS-->

> **WARNING** if you're using an 4 nodes HA, perform these commands:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL 8 / Oracle Linux 8-->

```bash
pcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"
pcs constraint order stop centreon then demote ms_mysql-clone
pcs constraint location ms_mysql-clone avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```
<!--RHEL 7 / CentOS 7-->

```bash
pcs constraint colocation add master "ms_mysql-master" with "vip_mysql"
pcs constraint 
 stop centreon then demote ms_mysql-master
pcs constraint location ms_mysql-master avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Clean broker memory files

> **WARNING** perform this command only the passive central node.

Before resuming the cluster resources management, to avoid broker's issues, cleanup all the *.memory.* or *.unprocessed.* or *.queue.* broker files on:

```bash
rm -rf /var/lib/centreon-broker/central-broker-master.memory*
rm -rf /var/lib/centreon-broker/central-broker-master.queue*
rm -rf /var/lib/centreon-broker/central-broker-master.unprocessed*
```

## Resuming the cluster resources management

Now that the update is finished, the resources can be managed again:

```bash
pcs resource manage centreon
pcs resource manage ms_mysql
```

It can happen that the replication thread is not running right after installation.
Restarting the `ms_mysql` resource may fix it.
You can also have some *failed actions* on the resources.
Cleaning the resource may fix it.

```bash 
pcs resource restart ms_mysql
pcs resource cleanup centreon
pcs resource cleanup ms_mysql
```

## Check cluster's health

You can monitor the cluster's resources in real time using the `crm_mon` command:

<!--DOCUSAURUS_CODE_TABS-->
<!--HA 2 Nodes-->
```bash
Stack: corosync
Current DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el7_7.2-3c4c782f70) - partition with quorum
Last updated: Thu Feb 20 13:14:17 2020
Last change: Thu Feb 20 09:25:54 2020 by root via crm_attribute	on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resources configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

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
 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_MASTER_NAME@ ]
     Slaves: [ @CENTRAL_SLAVE_NAME@ ]
```
<!--HA 4 Nodes-->
```bash
[...]
4 nodes configured
21 resources configured

Online: [@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@]

Active resources:

 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [@CENTRAL_MASTER@ @CENTRAL_SLAVE_NAME@]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
     vip_mysql       (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE@]
 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [@DATABASE_MASTER_NAME@]
     Slaves: [@DATABASE_SLAVE_NAME@]
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Verifying the platform stability

You should now check that eveything works fine:

* Access to the web UI menus.
* Poller configuration generation + reload and restart method.
* Schedule immediate check (Central + Pollers) and acknowledge, downtime etc.
* Move resources or reboot active server and check again that everything is fine.
