---
id: installation-2-nodes
title: Installing a Centreon HA 2-nodes cluster
---

## Prerequisites

### Understanding

Before applying this procedure, you should have a good knowledge of Linux OS, of Centreon, and of Pacemaker clustering tools in order to have a correct understanding of what is being done.

> **WARNING:** Anyone following this procedure is doing it at his own risk. Under no circumstances shall the Centreon company be liable for any breakdown or data loss.

### Installed Centreon platform

A Centreon HA cluster can only be installed on base of an operating Centreon platform. Before following this procedure, it is mandatory that **[this installation procedure](../../installation/introduction.html)** has already been completed and that **about 5GB free space have been spared on the LVM volume group** that carries the MariaDB data directory (`/var/lib/mysql` mount point by default).

The output of the `vgs` command must look like (what must be payed attention on is the value under `VFree`):

```text
  VG                    #PV #LV #SN Attr   VSize   VFree 
  centos_centreon-c1      1   5   0 wz--n- <31,00g <5,00g
```

> **WARNING:** If this particular prerequisite is not effective, the databases synchronization method described further won't work.

### Quorum Device

In order to keep the cluster safe from split-brain issues, a third server is mandatory to resolve the master's election in the event of a connection loss. The role of Quorum Device, can be held by a poller of the monitoring platform.

### Defining hosts' names and addresses

In this procedure, we will refer to characteristics that are bound to change from a platform to another (such as IP addresses) by the following macros:

* `@CENTRAL_MASTER_IPADDR@`: primary central server's IP address
* `@CENTRAL_MASTER_NAME@`: primary central server's name (must be identical to `hostname -s`)
* `@CENTRAL_SLAVE_IPADDR@`: secondary central server's IP address
* `@CENTRAL_SLAVE_NAME@`: secondary central server's name (must be identical to `hostname -s`)
* `@QDEVICE_IPADDR@`: quorum device's IP address
* `@QDEVICE_NAME@`: quorum device's name (must be identical to `hostname -s`)
* `@MARIADB_REPL_USER@`:  MariaDB replication login (default: `centreon-repl`)
* `@MARIADB_REPL_PASSWD@`: MariaDB replication password
* `@MARIADB_CENTREON_USER@`: MariaDB Centreon login (default: `centreon`)
* `@MARIADB_CENTREON_PASSWD@`: MariaDB Centreon password
* `@VIP_IPADDR@`: virtual IP address of the cluster
* `@VIP_IFNAME@`: network device carrying the cluster's VIP
* `@VIP_CIDR_NETMASK@`: subnet mask length in bits (eg. 24)
* `@VIP_BROADCAST_IPADDR@`: cluster's VIP broadcast address
* `@CENTREON_CLUSTER_PASSWD@` : `hacluster` user's password

### Configuring  centreon-broker

#### Link to cbd service

On a standard Centreon platform, cbd service manages two processes of `centreon-broker-daemon` (`cbd`):

* `central-broker-master`: also called "central broker" or "SQL broker", redirects input-output from pollers to database, RRD broker, and so on.
* `central-rrd-master`: also called "RRD broker", receives the stream from the central broker and updates the RRD binary data files (used to display graphs).

In the context of a *Centreon HA* cluster, both broker processes will be handled by a separate service, managed by the cluster.

* `central-broker-master` known as the resource `cbd_central_broker`, linked to *systemd* service `cbd-sql`
* `central-rrd-master` known as the clone resource `cbd_rrd`, linked to *systemd* `cbd` service, the standard broker service of Centreon.

So that everything goes well, you will have to unlink central-broker-master from `cbd` service by checking "No" for parameter "Link to cbd service" in *Configuration* > *Pollers* > *Broker configuration* > *central-broker-master* under the *General* tab.

#### Double output stream towards RRD

In the event of a cluster switch, you will expect the newly elected master central server to be able to display the metrics graphs, which requires all RRD data files to be up-to-date on both nodes. In order to fit this condition, you will double the central broker output stream and send it to both RRD broker processes. You can configure this in the same menu as above, this time under the *Output* tab. The parameters that must be changed are:

* In the first "IPv4" output, replace "localhost" with `@CENTRAL_MASTER_IPADDR@` in the "Host to connect to" field.

| Output IPv4        |                            |
| ------------------ | -------------------------- |
| Name               | centreon-broker-master-rrd |
| Connection port    | 5670                       |
| Host to connect to | `@CENTRAL_MASTER_IPADDR@`  |
| Buffering timeout  | 0                          |
| Retry interval     | 60                         |

* Add another "IPv4" output, similar to the first one, named "centreon-broker-slave-rrd" for example, directed towards `@CENTRAL_SLAVE_IPADDR@`.

| Output IPv4        |                           |
| ------------------ | ------------------------- |
| Name               | centreon-broker-slave-rrd |
| Connection port    | 5670                      |
| Host to connect to | `@CENTRAL_SLAVE_IPADDR@`  |
| Buffering timeout  | 0                         |
| Retry interval     | 60                        |

#### Export the configuration

Once the previous actions have been done, you will have to export the central poller configuration files to apply these changes. Select the central poller, export the configuration with the "Move Export Files" option checked.

All the previous actions have to be applied either to both nodes, or to `@CENTRAL_MASTER_NAME@` only and the exported files have to be copied to `@CENTRAL_SLAVE_NAME@`:

```bash
rsync -a /etc/centreon-broker/*json @CENTRAL_SLAVE_IPADDR@:/etc/centreon-broker/
```

### Customizing poller reload command

You may ignore that, but the central broker daemon has to be reloaded every time you update your central poller's configuration, hence the "Centreon Broker reload command" parameter in *Configuration > Pollers > Central*.

As stated above, the centreon-broker processes will be divided into `cbd` (for RRD) and `cbd-sql` (for central broker) services. In this perspective, the service that needs to be reloaded is `cbd-sql` and not `cbd` any more. So you will have to set the "Centreon Broker reload command" parameter to `service cbd-sql reload`.

## System settings

Before actually setting the cluster up, some system prerequisites have to be met.

### Kernel network tuning

In order to improve the cluster reliability, and since *Centreon HA* only supports IPv4, we recommend to apply the following kernel settings all your Centreon servers (including pollers):

```bash
cat >> /etc/sysctl.conf <<EOF
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv4.tcp_retries2 = 3
net.ipv4.tcp_keepalive_time = 200
net.ipv4.tcp_keepalive_probes = 2
net.ipv4.tcp_keepalive_intvl = 2
EOF
systemctl restart network
```

### Name resolution

So that the *Centreon HA* cluster can stay in operation in the event of a DNS service breakdown, all the cluster nodes must know each other by name without DNS, using `/etc/hosts`.

```bash
cat >/etc/hosts <<"EOF"
127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4
@CENTRAL_MASTER_IPADDR@ @CENTRAL_MASTER_NAME@
@CENTRAL_SLAVE_IPADDR@ @CENTRAL_SLAVE_NAME@
@QDEVICE_IPADDR@ @QDEVICE_NAME@
EOF
```

From here, `@CENTRAL_MASTER_NAME@` will be named the "primary server/node" and `@CENTRAL_SLAVE_NAME@` the "secondary server/node". This designation is arbitrary, the two nodes will of course be interchangeable once the setup is done.

### Installing system packages

Centreon offers a package named `centreon-ha`, which provides all the needed files and dependencies required by a Centreon cluster. These packages must be installed on both central nodes:

```bash
yum install epel-release
yum install centreon-ha
```

### SSH keys exchange

SSH key-based authentication must be set so that files and commands can be sent from one node to another by UNIX accounts:

* `mysql`
* `centreon`

There are two ways of exchanging such keys:

* By using `ssh-copy-id` command: needs to be able to log in to remote host using a password. It is however unsafe for such system accounts to have a password authentication available. If you choose this method, we advice you to revoke this password afterwards with these commands: `passwd -d centreon` and `passwd -d mysql`.
* By manually copying the public key in `~/.ssh/authorized_keys`. This method is safer.

The second method will be documented below.

#### `centreon` account

Switch to `centreon`'s bash environment on both nodes:

```
su - centreon
```

Then run these commands on both nodes:

```bash
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub
```

Once done, copy the content of the public key file displayed by `cat` and paste it to `~/.ssh/authorized_keys` (must be created) on the other node and apply the correct file permissions (sill as `centreon` user):

```
chmod 600 ~/.ssh/authorized_keys
```

The keys exchange must be validated by an initial connection from each node to the other in order to accept and register the peer node's SSH fingerprint (sill as `centreon` user):

```
ssh <peer node hostname>
```

Then exit the `centreon` session typing `exit` or `Ctrl-D`.

#### `mysql` account

For the `mysql` account, the procedure is slightly different since this user normally has neither home directory nor the ability to open a Shell session. These commands must be run on both nodes as well:

```bash
systemctl stop mysql
mkdir /home/mysql
chown mysql: /home/mysql
usermod -d /home/mysql mysql
usermod -s /bin/bash mysql
systemctl start mysql
su - mysql
```

Once in `mysql`'s `bash` envinronment, run these commands on both nodes:

```bash
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub
```

Once done, copy the content of the public key file displayed by `cat` and paste it to `~/.ssh/authorized_keys` (must be created) on the other node and apply the correct file permissions (sill as `mysql` user):

```bash
chmod 600 ~/.ssh/authorized_keys
```

The keys exchange must be validated by an initial connection from each node to the other in order to accept and register the peer node's SSH fingerprint (sill as `mysql` user):

```bash
ssh <peer node hostname>
```

Then exit the `mysql` session typing `exit` or `Ctrl-D`.

## Configuring the MariaDB databases replication

A Master-Slave MariaDB cluster will be setup so that everything is synchronized in real-time. 

**Note: unless otherwise stated, each of the following steps have to be run **on both central nodes**.

### Configuring MariaDB

For both optimization and cluster reliability purposes, you need to add this tuning options to MariaDB configuration in the `/etc/my.cnf.d/server.cnf` file. By default, the `[server]` section of this file is empty. Paste these lines (some have to be modified) into this section:

```ini
[server]
server-id=1 # SET TO 1 FOR MASTER AND 2 FOR SLAVE
#read_only
log-bin=mysql-bin
binlog-do-db=centreon
binlog-do-db=centreon_storage
innodb_flush_log_at_trx_commit=1
sync_binlog=1
binlog_format=MIXED
slave_compressed_protocol=1
datadir=/var/lib/mysql
pid-file=/var/lib/mysql/mysql.pid

# Tuning standard Centreon
innodb_file_per_table=1
open_files_limit=32000
key_buffer_size=256M
sort_buffer_size=32M
join_buffer_size=4M
thread_cache_size=64
read_buffer_size=512K
read_rnd_buffer_size=256K
max_allowed_packet=64M
# Uncomment for 4 Go Ram
#innodb_buffer_pool_size=512M
# Uncomment for 8 Go Ram
#innodb_buffer_pool_size=1G
# MariaDB strict mode will be supported soon
#sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
```

> **Important:** the value of `server-id` must be different from one server to the other. The values suggested in the comment 1 => Master et 2 => Slave are not mandatory by recommended.

**Reminder:** Don't forget to uncomment the right value for `innodb_buffer_pool_size` according to your own servers' memory size.

To apply the new configuration, you have to restart the database server:

```bash
systemctl restart mysql
```

Make sure that the restart went well:

```bash
systemctl status mysql
```

> **Warning:** Other files in `/etc/my.cnf.d/` such as `centreon.cnf` will be ignored from now. Any customization will have to be added to `server.cnf`.

### Securing the database server

To avoid useless exposure of your databases, you should restrict access to it as much as possible. The `mysql_secure_installation` command will help you apply some basic security principles. You just need to run this command and let yourself be guided, choosing the recommended choice at every step. We suggest you choose a strong password.

```bash
mysql_secure_installation
```

### Creating the `centreon` MariaDB account

First log in as `root` on both database servers (using the newly defined password):

```
mysql -p
```

Then paste on both sides the following SQL commands to the MariaDB prompt to create the application user (default: `centreon`). Of course, you will replace the macros first:

```sql
CREATE USER '@MARIADB_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MARIADB_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MARIADB_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@';

CREATE USER '@MARIADB_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MARIADB_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MARIADB_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@';
```

When upgrading to centreon-ha from an existing Centreon platform or an OVA/OVF VM deployment, update `'@MARIADB_CENTREON_USER@'@'localhost'` password:

```sql
ALTER USER '@MARIADB_CENTREON_USER@'@'localhost' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@'; 
```

### Creating the MariaDB replication account

Still in the same prompt, create the replication user (default: `centreon-repl`):

```sql
GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'localhost' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'@CENTRAL_SLAVE_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'@CENTRAL_MASTER_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';
```

### Setting up the binary logs purge jobs

MariaDB binary logs must be purged on both nodes, but not at the same time, therefore the cron jobs definitions must be set on different times:

* On the primary node:

```bash
cat >/etc/cron.d/centreon-ha-mysql <<EOF
0 4 * * * root bash /usr/share/centreon-ha/bin/mysql-purge-logs.sh >> /var/log/centreon-ha/mysql-purge.log 2>&1
EOF
```

* On the secondary node:

```bash
cat >/etc/cron.d/centreon-ha-mysql <<EOF
30 4 * * * root bash /usr/share/centreon-ha/bin/mysql-purge-logs.sh >> /var/log/centreon-ha/mysql-purge.log 2>&1
EOF
```

### Configuring the MariaDB scripts environment variables

The `/etc/centreon-ha/mysql-resources.sh` file declares environment variables that must be configured so that the *Centreon HA* scripts dedicated to MariaDB can work properly. These variables must be assigned the chosen values for the macros.

```bash
#!/bin/bash

###############################
# Database access credentials #
###############################

DBHOSTNAMEMASTER='@CENTRAL_MASTER_NAME@'
DBHOSTNAMESLAVE='@CENTRAL_SLAVE_NAME@'
DBREPLUSER='@MARIADB_REPL_USER@'
DBREPLPASSWORD='@MARIADB_REPL_PASSWD@'
DBROOTUSER='@MARIADB_REPL_USER@'
DBROOTPASSWORD='@MARIADB_REPL_PASSWD@'
CENTREON_DB='centreon'
CENTREON_STORAGE_DB='centreon_storage'

###############################
```


To make sure that all the previous steps have been successful, and that the correct names, logins and passwords have been entered in the configuration bash file, run this command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The expected output is:

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [KO]
Error reports:
    No slave (maybe because we cannot check a server).
Position Status [SKIP]
!Error reports:
    Skip because we can't identify a unique slave.
```

What matters here is that the first two connection tests are `OK`.

### Switching to read-only mode

Now that everything is well configured, you will enable the `read_only` on both database servers by uncommenting (*ie.* removing the `#` at the beginning of the line) this instruction in the `/etc/my.cnf.d/server.cnf` file:

* Primary node:

```ini
[server]
server-id=1
read_only
log-bin=mysql-bin
```

* Secondary node:

```ini
[server]
server-id=2
read_only
log-bin=mysql-bin
```

Then apply this change by restarting MariaDB on both nodes:

```bash
systemctl restart mysql
```

### Synchronizing the databases and enabling MariaDB replication

In the process of synchronizing the databases, you will first stop the secondary database process so that its data can be overwritten by the primary node's data. 

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

This script will perform the following actions:

* checking that MariaDB is stopped on the secondary node
* stopping MariaDB on the primary node
* mounting a LVM snapshot on the same volume group that bears the `/var/lib/mysql` (or whatever mount point holds the MariaDB data files)
* starting MariaDB again on the primary node
* recording the current position in the binary log
* disabling the `read_only` mode on the primary node (this node will now be able to write into its database)
* synchronizing/overwriting all the data files (except for the `mysql` system database) 
* unmounting the LVM snapshot
* creating the replication thread that will keep both databases synchronized

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
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

## Setting up the *Centreon* cluster

**Note: unless otherwise stated, each of the following steps have to be run **on both central nodes**.

### Configuring the file synchronization service

The file synchronization `centreon-central-sync` service needs the IP address of the peer node to be entered in its configuration file (`/etc/centreon-ha/centreon_central_sync.pm`).

So on the `@CENTRAL_MASTER_NAME@` server, the configuration file must look like:

```perl
our %centreon_central_sync_config = (
    peer_addr => "@CENTRAL_SLAVE_IPADDR@"
);
1;
```

And on the `@CENTRAL_SLAVE_NAME@`:

```perl
our %centreon_central_sync_config = (
    peer_addr => "@CENTRAL_MASTER_IPADDR@"
);
1;
```

### Removing legacy Centreon cron jobs

In high-availability setup, gorgone daemon manages all cron-based scheduled tasks. To avoid cron on both nodes, remove all Centreon related cron in /etc/cron.d/ directory:

```bash
rm /etc/cron.d/centreon
rm /etc/cron.d/centstorage
rm /etc/cron.d/centreon-auto-disco
```

### Permission modifications

Modifications have to be made on permissions of `/var/log/centreon-engine` and `/tmp/centreon-autodisco` directories.

In a clustered-setup, it's a requirement to get a file sync and discovery scheduled task fully functionnal. 

- Files synchronization

```bash
chmod 775 /var/log/centreon-engine/
chmod 775 /var/log/centreon-engine/archives/
chmod 664 /var/log/centreon-engine/*
chmod 664 /var/log/centreon-engine/archives/*
```

- Services discovery

```bash
chmod 775 /tmp/centreon-autodisco/
```

### Stopping and disabling the services

Centreon's application services won't be launched at boot time anymore, they will be managed by the clustering tools. These services must therefore be stopped and disabled:

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd centreon mysql
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd centreon mysql
```

By default, the `mysql` service is enabled in both systemd and system V perspectives, so you'd rather make sure it is disabled:

```bash
chkconfig mysql off
```

### Creating the cluster

#### Activating the clustering services

First we enable all the services and start `pcsd` on both central nodes:

```bash
systemctl start pcsd
```


#### Preparing the server that will hold the function of *quorum device* 

You can use one of your pollers to play this role. It must be prepared with the commands below: 

```bash
yum install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

Modify the parameter `COROSYNC_QNETD_OPTIONS` in the file `/etc/sysconfig/corosync-qnetd` to make sure the service will be listening the connections just on IPv4

```bash
COROSYNC_QNETD_OPTIONS="-4"
```

#### Authenticating to the cluster's members

For the sake of simplicity, the `hacluster` user will be assigned the same password on both central nodes **and `@QDEVICE_NAME@`**.

```bash
passwd hacluster
```

Now that both of the central nodes **and** the *quorum device* server are sharing the same password, you will run this command **only on one of the central nodes** in order to authenticate on all the hosts taking part in the cluster.

```bash
pcs cluster auth \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@' \
    --force
```

#### Creating the cluster

The following command creates the cluster. It must be run **only on one of the central nodes**. 

```bash
pcs cluster setup \
    --force \
    --name centreon_cluster \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@"
```

Then start the `pacemaker` service **on both central nodes**:

```bash
systemctl enable pacemaker pcsd corosync
systemctl start pacemaker
```

And afterwards define these properties **only on one node**:

```bash
pcs property set symmetric-cluster="true"
pcs property set stonith-enabled="false"
pcs resource defaults resource-stickiness="100"
```

You can now follow the state of the cluster with the `crm_mon` command, which will display new resources as they appear.

#### Creating the *Quorum Device*

Run this command on one of the central nodes:

```bash
pcs quorum device add model net \
    host="@QDEVICE_NAME@" \
    algorithm="ffsplit"
```

### Creating the MariaDB cluster resources

To be run **only on one central node**:

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mysql-centreon \
    config="/etc/my.cnf.d/server.cnf" \
    pid="/var/lib/mysql/mysql.pid" \
    datadir="/var/lib/mysql" \
    socket="/var/lib/mysql/mysql.sock" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    max_slave_lag="15" \
    evict_outdated_slaves="false" \
    binary="/usr/bin/mysqld_safe" \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd="@MARIADB_REPL_PASSWD@" \
    test_table='centreon.host' \
    master
```

```bash
pcs resource meta ms_mysql-master \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

### Creating the clone resources

Some resources must be running on one only node at a time (`centengine`, `gorgone`, `httpd`, ...), but some others can be running on both (the RRD broker and PHP7). For the second kind, you will declare *clone* resources.

> **Warning:** All the commands in this chapter have to be run only once on the central node of your choice.

##### PHP7 resource

```bash
pcs resource create "php7" \
	systemd:rh-php72-php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
```

##### RRD broker resource

```bash
pcs resource create "cbd_rrd" \
    systemd:cbd \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="20s" timeout="30s" \
    clone
```

### Creating the *centreon* resource group

##### VIP address

```bash
pcs resource create vip \
    ocf:heartbeat:IPaddr2 \
    ip="@VIP_IPADDR@" \
    nic="@VIP_IFNAME@" \
    cidr_netmask="@VIP_CIDR_NETMASK@" \
    broadcast="@VIP_BROADCAST_IPADDR@" \
    flush_routes="true" \
    meta target-role="started" \
    op start interval="0s" timeout="20s" \
    stop interval="0s" timeout="20s" \
    monitor interval="10s" timeout="20s" \
    --group centreon
```

##### Httpd service

```bash
pcs resource create http \
    systemd:httpd24-httpd \
    meta target-role="started" \
    op start interval="0s" timeout="40s" \
    stop interval="0s" timeout="40s" \
    monitor interval="5s" timeout="20s" \
    --group centreon \
    --force
```

##### Gorgone service

```bash
pcs resource create gorgone \
    systemd:gorgoned \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

##### centreon-central-sync service

This service only exists in the context of *Centreon HA*. It provides real time synchronization for configuration files, images, etc.

```bash
pcs resource create centreon_central_sync \
    systemd:centreon-central-sync \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

##### SQL Broker

```bash
pcs resource create cbd_central_broker \
    systemd:cbd-sql \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="30s" \
    --group centreon
```

##### Centengine service

```bash
pcs resource create centengine \
    systemd:centengine \
    meta multiple-active="stop_start" target-role="started" \
    op start interval="0s" timeout="90s" stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="30s" \
    --group centreon
```

##### Centreontrapd service

```bash
pcs resource create centreontrapd \
    systemd:centreontrapd \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

##### Snmptrapd service

```bash
pcs resource create snmptrapd \
    systemd:snmptrapd \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

#### Colocation constraints

In order to force the cluster running both `centreon` resource group and the MariaDB Master on the same node, you have to declare these colocation constraints:

```bash
pcs constraint colocation add "centreon" with master "ms_mysql-master"
pcs constraint colocation add master "ms_mysql-master" with "centreon"
```

After this step, all resources should be running on the same node, the platform should be redundant and working properly.

### Checking the cluster's state

#### Checking the resources' states

You can monitor the cluster's resources in real time using the `crm_mon` command:

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
```

#### Checking the database replication thread

The MariaDB replication state can be monitored at any time with the `mysql-check-status.sh` command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The expected output is:

```bash
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

It can happen that the replication thread is not running right after installation.  Restarting the `ms_mysql` resource may fix it.

```bash 
pcs resource restart ms_mysql
```

#### Checking the constraints

Normally the two colocation constraints that have been created during the setup should be the only constraints the `pcs constraint` command displays:

```bash
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-master (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-master with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

