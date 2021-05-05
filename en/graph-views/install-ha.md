---
id: install-ha
title: Install Centreon MAP in High Availability
---

> Centreon MAP requires a valid license key. To purchase one and retrieve the
> necessary repositories, contact [Centreon](mailto:sales@centreon.com).

## Overview

Centreon MAP HA relies on the same concepts as Centreon HA.
You will found all the information on the [overview](../installation/installation-of-centreon-ha/overview.html).

> **WARNING:** The following documentation is only supported for MariaDB 10.3 and CentOS 7.

## Prerequisites

### Understanding

Before applying this procedure, you should have a good knowledge of Linux OS, of Centreon, and of Pacemaker clustering tools in order to have a correct understanding of what is being done.

> **WARNING:** Anyone following this procedure is doing it at his own risk. Under no circumstances shall the Centreon company be liable for any breakdown or data loss.

### Network flows

In addition of necessary flows describe on the [official documentation](../install.html#architecture),
you will need to open the following flows:

<!--DOCUSAURUS_CODE_TABS-->

<!--2 Nodes-->

| From                  | Destination           | Protocol | Port     | Application                                                               |
| :-------------------- | :-------------------- | :------- | :------- | :------------------------------------------------------------------------ |
| Active Node           | Passive Node          | MySQL    | TCP 3306 | MySQL synchronization (Must be also open from passive to the active node) |
| Map Servers + QDevice | Map Servers + QDevice | Corosync | UDP 5404 | Communication inside the cluster (Multicast)                              |
| Map Servers + QDevice | Map Servers + QDevice | Corosync | UDP 5405 | Communication inside the cluster (Unicast)                                |
| Map Servers + QDevice | Map Servers + QDevice | PCS      | TCP 2224 | Communication inside the cluster                                          |
| Map Servers + QDevice | Map Servers + QDevice | Corosync | TCP 5403 | Communication with the QDevice                                            |

<!--4 Nodes-->

| From                       | Destination                | Protocol | Port     | Application                                                               |
| :------------------------- | :------------------------- | :------- | :------- | :------------------------------------------------------------------------ |
| Database Active Node       | Database Passive Node      | MySQL    | TCP 3306 | MySQL synchronization (Must be also open from passive to the active node) |
| Map Servers + DB + QDevice | Map Servers + DB + QDevice | Corosync | UDP 5404 | Communication inside the cluster (Multicast)                              |
| Map Servers + DB + QDevice | Map Servers + DB + QDevice | Corosync | UDP 5405 | Communication inside the cluster (Unicast)                                |
| Map Servers + DB + QDevice | Map Servers + DB + QDevice | PCS      | TCP 2224 | Communication inside the cluster                                          |
| Map Servers + DB + QDevice | Map Servers + DB + QDevice | Corosync | TCP 5403 | Communication with the QDevice                                            |

<!--END_DOCUSAURUS_CODE_TABS-->

### Installed Centreon MAP platform

A Centreon MAP HA cluster can only be installed on base of an operating Centreon MAP platform.
Before following this procedure, it is mandatory that **[this installation procedure](../install.html)** has already been completed
and that **about 5GB free space have been spared on the LVM volume group** that
carries the MariaDB data directory (`/var/lib/mysql` mount point by default).

The output of the `vgs` command must look like (what must be payed attention on is the value under `VFree`):

```bash
  VG      #PV #LV #SN Attr   VSize  VFree
  vg_data   1   1   0 wz--n- 10,99g 5,99g
  vg_root   1   2   0 wz--n-  9,00g    0 

```

The 2 servers MAP must be linked to the same Central Server.
The script `/etc/centreon-studio/diagnostic.sh` must return `[OK]` on **booth** MAP Server:

```bash
########## Centreon Map server version ##########

  [INFO] centreon-map-server-xx.xx.x-x.el7.noarch

########## System ##########

  [OK]   SELinux disabled
  [OK]   Firewall is disabled
  [INFO] Physical memory available on the server: 1884128 kb.
  [INFO] Number of CPU available on the server: 1 core(s)

########## Java ##########

  [OK]   Java 11 installed
  [INFO] No optimization found for the JVM (Xms and Xmx options).

########## Database connection ##########

  [OK]   Connection to centreon
  [OK]   Connection to centreon_storage
  [OK]   Connection to centreon_studio

########## Broker connection ##########

  [OK]   Connection to @CENTRAL_IPADDR@ 5758 port

########## Authentication ##########

  [OK]   Centreon Central authentication using user centreon_map

########## Protocol verification ##########

  [OK] Centreon Map server configured to use HTTPS protocol
  [INFO] Centreon Central configured in Map to use https protocol.
  [OK]   Centreon Central successfully answered to HTTPS request

```

> **WARNING:** If these particular prerequisites are not effective, the databases synchronization method described further won't work.

### Studio Configuration

All the specific options setup in `/etc/centreon-studio/studio-config.properties`
must be the same on the 2 nodes. The options that can be enable or disable are describe
[here](../configure.html#define-views--status-computation-parameters).

### Quorum Device

In order to keep the cluster safe from split-brain issues, a third server is mandatory to resolve the master's election in the event of a connection loss. The role of Quorum Device, can be held by a poller of the monitoring platform.

### Defining hosts' names and addresses

In this procedure, we will refer to characteristics that are bound to change from a platform to another (such as IP addresses) by the following macros:

* `@MAP_PRIMARY_IPADDR@`: primary MAP server's IP address
* `@MAP_PRIMARY_NAME@`: primary MAP server's name (must be identical to `hostname -s`)
* `@MAP_SECONDARY_IPADDR@`: secondary MAP server's IP address
* `@MAP_SECONDARY_NAME@`: secondary MAP server's name (must be identical to `hostname -s`)
* `@QDEVICE_IPADDR@`: quorum device's IP address
* `@QDEVICE_NAME@`: quorum device's name (must be identical to `hostname -s`)
* `@MARIADB_REPL_USER@`:  MariaDB replication login (default: `centreon-repl`)
* `@MARIADB_REPL_PASSWD@`: MariaDB replication password
* `@MARIADB_CENTREON_USER@`: MariaDB Centreon MAP login (default: `centreon_map`)
* `@MARIADB_CENTREON_PASSWD@`: MariaDB Centreon MAP password
* `@VIP_IPADDR@`: virtual IP address of the cluster
* `@VIP_IFNAME@`: network device carrying the cluster's VIP
* `@VIP_CIDR_NETMASK@`: subnet mask length in bits (eg. 24)
* `@VIP_BROADCAST_IPADDR@`: cluster's VIP broadcast address
* `@CENTREON_CLUSTER_PASSWD@` : `hacluster` user's password

## System settings

Before actually setting the cluster up, some system prerequisites have to be met.

### Kernel network tuning

In order to improve the cluster reliability, and since *Centreon MAP HA* only supports IPv4, we recommend to apply the following kernel settings all your Centreon MAP servers (including quorum device):

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

So that the *Centreon MAP HA* cluster can stay in operation in the event of a DNS service breakdown, all the cluster nodes must know each other by name without DNS, using `/etc/hosts`.

```bash
cat >/etc/hosts <<"EOF"
127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4
@MAP_PRIMARY_IPADDR@ @MAP_PRIMARY_NAME@
@MAP_SECONDARY_IPADDR@ @MAP_SECONDARY_NAME@
@QDEVICE_IPADDR@ @QDEVICE_NAME@
EOF
```

From here, `@MAP_PRIMARY_NAME@` will be named the "primary server/node" and `@MAP_SECONDARY_NAME@` the "secondary server/node". This designation is arbitrary, the two nodes will of course be interchangeable once the setup is done.

### Installing system packages

Centreon offers a package named `centreon-ha-common`, which provides all the needed files and dependencies required by a Centreon cluster. These packages must be installed on both map nodes:

```bash
yum install epel-release
yum install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

SH keys exchange

SSH key-based authentication must be set so that files and commands can be sent from one node to another by UNIX accounts:

* `mysql`

There are two ways of exchanging such keys:

* By using `ssh-copy-id` command: needs to be able to log in to remote host using a password. It is however unsafe for such system accounts to have a password authentication available. If you choose this method, we advice you to revoke this password afterwards with this commans: `passwd -d mysql`.
* By manually copying the public key in `~/.ssh/authorized_keys`. This method is safer.

The second method will be documented below.

For the `mysql` account, these commands must be run on both nodes as well:

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

A Primary-Secondary MariaDB cluster will be setup so that everything is synchronized in real-time. 

**Note**: unless otherwise stated, each of the following steps have to be run **on both map nodes**.

### Configuring MariaDB

For both optimization and cluster reliability purposes, you need to add this tuning options to MariaDB configuration in the `/etc/my.cnf.d/server.cnf` file. By default, the `[server]` section of this file is empty. Paste these lines (some have to be modified) into this section:

```ini
[server]
server-id=1 # SET TO 1 FOR PRIMARY AND 2 FOR SECONDARY
#read_only
log-bin=mysql-bin
binlog-do-db=centreon_studio
innodb_flush_log_at_trx_commit=1
sync_binlog=1
binlog_format=MIXED
slave_compressed_protocol=1
datadir=/var/lib/mysql
pid-file=/var/lib/mysql/mysql.pid

max_allowed_packet=20M
innodb_log_file_size=200M

# this is only for the mysqld standalone daemon
[mysqld]
character-set-server=utf8
collation-server=utf8_general_ci
```

> **Important:** the value of `server-id` must be different from one server to the other. The values suggested in the comment 1 => Primary et 2 => Secondary are not mandatory by recommended.

To apply the new configuration, you have to restart the database server:

```bash
systemctl restart mysql
```

Make sure that the restart went well:

```bash
systemctl status mysql
```

> **Warning:** Other files in `/etc/my.cnf.d/` such as `map.cnf` will be ignored from now. Any customization will have to be added to `server.cnf`.

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

Then paste on both sides the following SQL commands to the MariaDB prompt to create the application user (default: `centreon_map`). Of course, you will replace the macros first:

```sql
CREATE USER '@MARIADB_CENTREON_USER@'@'@MAP_SECONDARY_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon_studio.* TO '@MARIADB_CENTREON_USER@'@'@MAP_SECONDARY_IPADDR@';

CREATE USER '@MARIADB_CENTREON_USER@'@'@MAP_PRIMARY_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon_studio.* TO '@MARIADB_CENTREON_USER@'@'@MAP_PRIMARY_IPADDR@';
```

### Creating the MariaDB replication account

Still in the same prompt, create the replication user (default: `centreon-repl`):

```sql
GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'localhost' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'@MAP_SECONDARY_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'@MAP_PRIMARY_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';
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

The `/etc/centreon-ha/mysql-resources.sh` file declares environment variables that must be configured so that the *Centreon MAP HA* scripts dedicated to MariaDB can work properly. These variables must be assigned the chosen values for the macros.

```bash
#!/bin/bash

###############################
# Database access credentials #
###############################

DBHOSTNAMEMASTER='@MAP_PRIMARY_NAME@'
DBHOSTNAMESLAVE='@MAP_SECONDARY_NAME@'
DBREPLUSER='@MARIADB_REPL_USER@'
DBREPLPASSWORD='@MARIADB_REPL_PASSWD@'
DBROOTUSER='@MARIADB_REPL_USER@'
DBROOTPASSWORD='@MARIADB_REPL_PASSWD@'
CENTREON_DB='centreon_studio'
CENTREON_STORAGE_DB='centreon_studio'

###############################
```

> **Note:** this script is normaly use for *Centreon HA* that's why we need to setup twice centreon\_studio as `CENTREON_DB` and `CENTREON_STORAGE_DB`.


To make sure that all the previous steps have been successful, and that the correct names, logins and passwords have been entered in the configuration bash file, run this command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The expected output is:

```text
Connection Status '@MAP_PRIMARY_NAME@' [OK]
Connection Status '@MAP_SECONDARY_NAME@' [OK]
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
Connection Status '@MAP_PRIMARY_NAME@' [OK]
Connection Status '@MAP_SECONDARY_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

### Stopping and disabling the services

Centreon's application services won't be launched at boot time anymore, they will be managed by the clustering tools. These services must therefore be stopped and disabled:

```bash
systemctl stop centreon-map mysql
systemctl disable centreon-map mysql
```

By default, the `mysql` service is enabled in both systemd and system V perspectives, so you'd rather make sure it is disabled:

```bash
chkconfig mysql off
```

### Creating the cluster

#### Activating the clustering services

First we enable all the services and start `pcsd` on both map nodes:

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

For the sake of simplicity, the `hacluster` user will be assigned the same password on both map nodes **and `@QDEVICE_NAME@`**.

```bash
passwd hacluster
```

Now that both of the map nodes **and** the *quorum device* server are sharing the same password, you will run this command **only on one of the map nodes** in order to authenticate on all the hosts taking part in the cluster.

```bash
pcs cluster auth \
    "@MAP_PRIMARY_NAME@" \
    "@MAP_SECONDARY_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@' \
    --force
```

#### Creating the cluster

The following command creates the cluster. It must be run **only on one of the map nodes**. 

```bash
pcs cluster setup \
    --force \
    --name centreon_cluster \
    "@MAP_PRIMARY_NAME@" \
    "@MAP_SECONDARY_NAME@"
```

Then start the `pacemaker` service **on both map nodes**:

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

Run this command on one of the map nodes:

```bash
pcs quorum device add model net \
    host="@QDEVICE_NAME@" \
    algorithm="ffsplit"
```

### Creating the MariaDB cluster resources

To be run **only on one map node**:

<!--DOCUSAURUS_CODE_TABS-->

<!--CentOS7-->

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
    test_table='centreon_studio.data' \
    master
```
<!--RHEL-->

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
    test_table='centreon_studio.data'
```
<!--END_DOCUSAURUS_CODE_TABS-->

> **WARNING:** the syntax of the following command depends on the Linux Distribution you are using.

<!--DOCUSAURUS_CODE_TABS-->

<!--CentOS7-->

```bash
pcs resource meta ms_mysql-master \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

<!--RHEL-->

```bash
pcs resource master ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Creating the *centreon_map* resource group

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
    --group centreon_map
```

#### Centreon MAP service

```bash
pcs resource create centreon-map \
    systemd:centreon-map \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="30s" \
    --group centreon_map
```

#### Colocation constraints

In order to force the cluster running both `centreon_map` resource group and the MariaDB Master on the same node, you have to declare these colocation constraints:

```bash
pcs constraint colocation add "centreon_map" with master "ms_mysql-master"
pcs constraint colocation add master "ms_mysql-master" with "centreon_map"
```

After this step, all resources should be running on the same node, the platform should be redundant and working properly.

### Checking the cluster's state

#### Checking the resources' states

You can monitor the cluster's resources in real time using the `crm_mon` command:

```bash
Stack: corosync
Current DC: @MAP_SECONDARY_NAME@ (version 1.1.20-5.el7_7.2-3c4c782f70) - partition with quorum
Last updated: Thu Feb 20 13:14:17 2020
Last change: Thu Feb 20 09:25:54 2020 by root via crm_attribute	on @MAP_PRIMARY_NAME@

2 nodes configured
14 resources configured

Online: [ @MAP_PRIMARY_NAME@ @MAP_SECONDARY_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @MAP_PRIMARY_NAME@ ]
     Slaves: [ @MAP_SECONDARY_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):	Started @MAP_PRIMARY_NAME@
     centreon-map	(systemd:centreon-map):   Started @MAP_PRIMARY_NAME@
```

#### Checking the database replication thread

The MariaDB replication state can be monitored at any time with the `mysql-check-status.sh` command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The expected output is:

```bash
Connection Status '@MAP_PRIMARY_NAME@' [OK]
Connection Status '@MAP_SECONDARY_NAME@' [OK]
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
  centreon_map with ms_mysql-master (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-master with centreon_map (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

### Update Centreon WEB UI extension

Now that you're using VIP Address, you must update the parameter `Map server address`
in the menu **Administration > Extensions > Options** to the VIP address or the FQDN that
resolves the VIP.

In case of HTTPS, it's possible that you need accept again the certificat (in case of auto-signed certificat).
