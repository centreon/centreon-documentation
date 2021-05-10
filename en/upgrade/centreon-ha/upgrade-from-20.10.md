---
id: upgrade-centreon-ha-from-20-10
title: Upgrade Centreon HA from Centreon 20.10
---

This chapter describes how to upgrade your Centreon HA platform from version 20.10
to version 21.04.

## Prerequisites

### Suspend cluster resources management

In order to avoid a failover of the cluster during the update, it is necessary to unmanage all Centreon resources, as well as MariaDB.

```bash
pcs resource unmanage centreon
pcs resource unmanage ms_mysql
```

### Perform a backup

Be sure that you have fully backed up your environment for the following
servers:

- Central server
- Database server

## Upgrade process

### Update the Centreon repository

Run the following commands:

```shell
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-4.el7.centos.noarch.rpm
```

> **WARNING:** to avoid broken dependencies, please refer to the documentation of the additional modules to update the Centreon Business Repositories.

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
yum update centreon\*
yum install centreon-ha-web centreon-ha-common
yum autoremove centreon-ha
```

<!--HA 4 Nodes-->

On the Central Servers:

```shell
yum update centreon\*
yum install centreon-ha-web centreon-ha-common
yum autoremove centreon-ha
```

On the Database Servers:

```shell
yum update centreon\*
yum install centreon-ha-common
yum autoremove centreon-ha
```

<!--END_DOCUSAURUS_CODE_TABS-->

The PHP timezone should be set. Run the command on both Central Server nodes:

```shell
echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php73/php.d/50-centreon.ini
```

> **WARNING** the following commands must be executed on only one node of the cluster.

<!--DOCUSAURUS_CODE_TABS-->
<!--HA 2 Nodes-->
```bash
pcs resource delete php7
pcs resource create "php7" \
    systemd:rh-php73-php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
```
<!--HA 4 Nodes-->
```bash
pcs resource delete php7
pcs resource create "php7" \
    systemd:rh-php73-php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
pcs constraint location php7-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY
```
<!--END_DOCUSAURUS_CODE_TABS-->

Then to perform the WEB UI upgrade, please [follow the official documentation](../../upgrade/upgrade-from-20-10.md#finalizing-the-upgrade) Only on the **active central node**.

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

Be aware that MariaDB strongly recommends to upgrade the server through each
major release. Please refer to the [official MariaDB
documentation](https://mariadb.com/kb/en/upgrading/) for further information.

You then need to upgrade from 10.3 to 10.4 and from 10.4 to 10.5.

That is why Centreon provides both 10.4 and 10.5 versions on its stable
repositories.

> Refer to the official MariaDB documentation to know more about this process:
>
> - https://mariadb.com/kb/en/upgrading-from-mariadb-103-to-mariadb-104/#how-to-upgrade
> - https://mariadb.com/kb/en/upgrading-from-mariadb-104-to-mariadb-105/#how-to-upgrade

> **WARNING** the following commands must be executed firstly on the active database node. Once the active database node is in 10.5, you can upgrade the passive database node.

#### Upgrade from 10.3 to 10.4

Follow those summarized steps to perform the upgrade in the way recommended by
MariaDB.

1. Stop the mariadb service:

    ```shell
    mysqladmin -p shutdwon
    ```

2. Uninstall current 10.3 version (MariaDB-shared):

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Install 10.4 version:

    ```shell
    yum install MariaDB-server-10.4\* MariaDB-client-10.4\* MariaDB-shared-10.4\* MariaDB-compat-10.4\* MariaDB-common-10.4\*
    ```

4. Move the configuration file:

    ```shell
     mv /etc/my.cnf.d/server.cnf.rpmsave /etc/my.cnf.d/server.cnf
    ```

5. Start the mariadb service:

    ```shell
    systemctl start mariadb
    ```

6. Launch the MariaDB upgrade process:

    ```shell
    mysql_upgrade -p
    ```

> Refer to the [official documentation](https://mariadb.com/kb/en/mysql_upgrade/)
> if errors occur during this last step.

#### Upgrade from 10.4 to 10.5

Follow those summarized steps to perform the upgrade in the way recommended by
MariaDB:

1. Stop the mariadb service:

    ```shell
    mysqladmin -p shutdwon
    ```

2. Uninstall current 10.4 version:

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
    systemctl start mariadb
    ```

6. Launch the MariaDB upgrade process:

    ```shell
    mysql_upgrade -p
    ```

You may not use the option `-p` for `mysqladmin` and `mysql_upgrade` commands
if you haven't securize your database server.

> Refer to the [official documentation](https://mariadb.com/kb/en/mysql_upgrade/)
> if errors occur during this last step.

#### Restart MariaDB Replication

The replication thread will be down after the upgrade. To restart it
Run this command **on the secondary node:**

```bash
systemctl stop mysql
```

It is important to make sure that MariaDB is completely shut down. You will run this command and check that it returns no output:

```bash
ps -ef | grep mysql[d]
```

In case one or more process are still alive, then run this other command (it will prompt for the MariaDB root password):

```bash
mysqladmin -p shutdown
```

Once the service is stopped **on the secondary node**, you will run the synchronization script **from the primary node**:

```bash
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

the output of this command must display only `OK` results:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The expected output is:

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

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

It can happen that the replication thread is not running right after installation.  Restarting the `ms_mysql` resource may fix it.

```bash 
pcs resource restart ms_mysql
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
 Clone Set: php7-clone [php7]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
```
<!--HA 4 Nodes-->
```bash
[...]
4 nodes configured
21 resources configured

Online: [@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [@DATABASE_MASTER_NAME@]
     Slaves: [@DATABASE_SLAVE_NAME@]
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
 Clone Set: php7-clone [php7]
     Started: [@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE@]
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Verifying the platform stability

You should now check that eveything works fine:

* Access to the web UI menus.
* Poller configuration generation + reload and restart method.
* Schedule immediate check (Central + Pollers) and acknowledge, downtime etc.
* Move resources or reboot active server and check again that everything is fine.
