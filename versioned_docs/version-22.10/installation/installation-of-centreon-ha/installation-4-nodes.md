---
id: installation-4-nodes
title: Installing a Centreon HA 4-nodes cluster
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

### Understanding

Before applying this procedure, you should have a good knowledge of Linux OS, of Centreon, 
and of Pacemaker clustering tools in order to have a proper understanding of what is being done.

### Network Flows

In addition of necessary flows describe on the [official documentation](../architectures.md#tables-of-network-flows),
you will need to open the following flows:

| From                           | Destination                    | Protocol | Port     | Application                                                                                |
| :----------------------------- | :----------------------------- | :------- | :------- | :----------------------------------------------------------------------------------------- |
| Active Central Server          | Passive Central Server         | SSH      | TCP 22   | Synchronization of configuration files (Must be also open from passive to the active node) |
| Active Central Server          | Passive Central Server         | BDDO     | TCP 5670 | RRDs synchronization (Must be also open from passive to the active node)                   |
| Active Database Server         | Passive Database Server        | MySQL    | TCP 3306 | MySQL synchronization (Must be also open from passive to the active node)                  |
| Active Database Server         | Passive Database Server        | SSH      | TCP 22   | MySQL synchronization (Must be also open from passive to the active node)                  |
| Central Servers + DB + QDevice | Central Servers + DB + QDevice | Corosync | UDP 5404 | Communication inside the cluster (Multicast)                                               |
| Central Servers + DB + QDevice | Central Servers + DB + QDevice | Corosync | UDP 5405 | Communication inside the cluster (Unicast)                                                 |
| Central Servers + DB + QDevice | Central Servers + DB + QDevice | PCS      | TCP 2224 | Communication inside the cluster                                                           |
| Central Servers + DB + QDevice | Central Servers + DB + QDevice | Corosync | TCP 5403 | Communication with the QDevice                                                             |

### Installed Centreon platform

A Centreon HA cluster can only be installed on top of an operating Centreon platform. Before following this procedure, it is mandatory that **[this installation procedure](../../installation/introduction.md)** has already been completed and that **about 5GB free space have been spared on the LVM volume group** that carries the MariaDB data directory (`/var/lib/mysql` mount point by default).

The output of the `vgs` command must look like (what must be payed attention on is the value under `VFree`):

```text
  VG                    #PV #LV #SN Attr   VSize   VFree 
  centos_centreon-c1      1   5   0 wz--n- <31,00g <5,00g
```

* MariaDB files `ibdata*` and `ib_logfile*` must be in the "datadir" directory or in a subdirectory (scripts `centreondb-smooth-backup.sh` and `mysql-sync-bigdb.sh` aren't compatible with this operation);
* MariaDB files `log-bin*` and `relay-log*` can be located in a directory (or a subdirectory) different from "datadir". They can also be on a different logical volume (`lvm`) than "datadir". However, the logical volume must be located in the volume group where "datadir" is stored.

> **WARNING:** If these particular prerequisites are not effective, the databases synchronization method described further won't work.

### Quorum Device

In order to keep the cluster safe from split-brain issues, a third server is mandatory to resolve the master's election in the event of a connection loss. The role of Quorum Device, can be held by a poller of the monitoring platform.

In order to adhere to best practices and be as resilient as possible, the Quorum server placement
Quorum server should be at a different site than the two primary nodes, with independent network attachments.

> **WARNING:** Be sure SELinux and Firewalld are disabled.

### Defining hosts' names and addresses

In this procedure, we will refer to characteristics that are bound to change from a platform to another (such as IP addresses) by the following macros:

* `@CENTRAL_MASTER_IPADDR@`: primary central server's IP address
* `@CENTRAL_MASTER_NAME@`: primary central server's name (must be identical to `hostname -s`)
* `@CENTRAL_SLAVE_IPADDR@`: secondary central server's IP address
* `@CENTRAL_SLAVE_NAME@`: secondary central server's name (must be identical to `hostname -s`)
* `@DATABASE_MASTER_IPADDR@` : primary database server's IP address
* `@DATABASE_MASTER_NAME@` : primary database server's FQDN (must be identical to: `hostname -s`)
* `@DATABASE_SLAVE_IPADDR@` : secondary database server's IP address 
* `@DATABASE_SLAVE_NAME@` : secondary database server's FQDN (must be identical to: `hostname -s`)
* `@QDEVICE_IPADDR@`: quorum device's IP address
* `@QDEVICE_NAME@`: quorum device's name (must be identical to `hostname -s`)
* `@MARIADB_REPL_USER@`:  MariaDB replication login (default: `centreon-repl`)
* `@MARIADB_REPL_PASSWD@`: MariaDB replication password
* `@MARIADB_CENTREON_USER@`: MariaDB Centreon login (default: `centreon`)
* `@MARIADB_CENTREON_PASSWD@`: MariaDB Centreon 
* `@VIP_IPADDR@`: virtual IP address of the cluster
* `@VIP_IFNAME@`: network device carrying the cluster's VIP
* `@VIP_CIDR_NETMASK@`: subnet mask length in bits (eg. 24)
* `@VIP_BROADCAST_IPADDR@`: cluster's VIP broadcast address
* `@VIP_SQL_IPADDR@` : virtual IP address of the SQL cluster
* `@VIP_SQL_IFNAME@` : network device carrying the SQL cluster's VIP
* `@VIP_SQL_CIDR_NETMASK@` : SQL Cluster subnet mask length in bits (eg. 24)
* `@VIP_SQL_BROADCAST_IPADDR@` : cluster's VIP SQL broadcast address
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

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
cat >> /etc/sysctl.conf <<EOF
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv4.tcp_retries2 = 3
net.ipv4.tcp_keepalive_time = 200
net.ipv4.tcp_keepalive_probes = 2
net.ipv4.tcp_keepalive_intvl = 2
EOF
systemctl restart NetworkManager
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
cat >> /etc/sysctl.conf <<EOF
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv4.tcp_retries2 = 3
net.ipv4.tcp_keepalive_time = 200
net.ipv4.tcp_keepalive_probes = 2
net.ipv4.tcp_keepalive_intvl = 2
EOF
reboot
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

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

</TabItem>
</Tabs>

### Name resolution

So that the *Centreon HA* cluster can stay in operation in the event of a DNS service breakdown, all the cluster nodes must know each other by name without DNS, using `/etc/hosts`.

```bash
cat >/etc/hosts <<"EOF"
127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4
@CENTRAL_MASTER_IPADDR@ @CENTRAL_MASTER_NAME@
@CENTRAL_SLAVE_IPADDR@ @CENTRAL_SLAVE_NAME@
@DATABASE_MASTER_IPADDR@ @DATABASE_MASTER_NAME@
@DATABASE_SLAVE_IPADDR@ @DATABASE_SLAVE_NAME@
@QDEVICE_IPADDR@ @QDEVICE_NAME@
EOF
```

From here, `@CENTRAL_MASTER_NAME@` will be named the "primary server/node" and `@CENTRAL_SLAVE_NAME@` the "secondary server/node". This designation is arbitrary, the two nodes will of course be interchangeable once the setup is done.

### Installing system packages

Centreon offers a package named `centreon-ha-web` for the Central Servers and package `centreon-ha-common` for the Database servers, which provides all the needed files and dependencies required by a Centreon cluster.

#### Central Servers

These packages must be installed on both Central Servers (Except Quorum):

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

```bash
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable rhel-8-for-x86_64-highavailability-rpms
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

```bash
dnf config-manager --enable ol8_addons
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Alma Linux 8" label="Alma Linux 8">

```bash
dnf config-manager --enable ha
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt update && apt install centreon-ha-web pcs pacemaker corosync corosync-qdevice 
```

</TabItem>
<TabItem value="RHEL 7" label="RHEL 7">

```bash
yum install epel-release
subscription-manager repos --enable rhel-7-for-x86_64-highavailability-rpms
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install epel-release
yum install centreon-ha-web pcs pacemaker corosync corosync-qdevice 
```

</TabItem>
</Tabs>

#### Database Servers

These packages must be installed on both Database Servers (Except Quorum):

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

```bash
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable rhel-8-for-x86_64-highavailability-rpms
dnf install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

```bash
dnf config-manager --enable ol8_addons
dnf install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Alma Linux 8" label="Alma Linux 8">

```bash
dnf config-manager --enable ha
dnf install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt update && apt install centreon-ha-common pcs pacemaker corosync corosync-qdevice 
```

</TabItem>
<TabItem value="RHEL 7" label="RHEL 7">

```bash
yum install epel-release
subscription-manager repos --enable rhel-7-for-x86_64-highavailability-rpms
dnf install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install epel-release
yum install centreon-ha-common pcs pacemaker corosync corosync-qdevice 
```

</TabItem>
</Tabs>

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

```bash
su - centreon
```

Then run these commands on both nodes:

```bash
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub
```

Once done, copy the content of the public key file displayed by `cat` and paste it to `~/.ssh/authorized_keys` (must be created) on the other node and apply the correct file permissions (sill as `centreon` user):

```bash
chmod 600 ~/.ssh/authorized_keys
```

The keys exchange must be validated by an initial connection from each node to the other in order to accept and register the peer node's SSH fingerprint (sill as `centreon` user):

```bash
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

**Note**: unless otherwise stated, each of the following steps have to be run **on both database nodes**.

### Configuring MariaDB

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8/ RHEL 7 / CentOS 7">

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
slave_parallel_mode=conservative
datadir=/var/lib/mysql
pid-file=/var/lib/mysql/mysql.pid
skip-slave-start
log-slave-updates
gtid_strict_mode=ON
expire_logs_days=7
ignore-db-dir=lost+found

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
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

For both optimization and cluster reliability purposes, you need to add this tuning options to MariaDB configuration in the `/etc/mysql/mariadb.conf.d/50-server.cnf` file. By default, the `[server]` section of this file is empty. Paste these lines (some have to be modified) into this section:

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
slave_parallel_mode=conservative
datadir=/var/lib/mysql
pid-file=/run/mysqld/mysql.pid
skip-slave-start
log-slave-updates
gtid_strict_mode=ON
expire_logs_days=7
ignore-db-dir=lost+found

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
```

</TabItem>
</Tabs>

> **Important:** the value of `server-id` must be different from one server to the other. The values suggested in the comment 1 => Master et 2 => Slave are not mandatory but recommended.

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

> **Warning:** Don't forget to change the parameter `Mysql configuration file path` in **Administration > Parameters > Backup**

### Securing the database server

To avoid unnecessary exposure of your database, you should restrict access to it as much as possible. The `mysql_secure_installation` command will help you apply some basic security principles. You just need to run this command and let yourself be guided, choosing the recommended choice at every step. We suggest you choose a strong password.

```bash
mysql_secure_installation
```

### Creating the `centreon` MariaDB account

First log in as `root` on both database servers (using the newly defined password):

```bash
mysql -p
```

Then paste on both sides the following SQL commands to the MariaDB prompt to create the application user (default: `centreon`). Of course, you will replace the macros first:

```sql
CREATE USER '@MARIADB_CENTREON_USER@'@'@DATABASE_SLAVE_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MARIADB_CENTREON_USER@'@'@DATABASE_SLAVE_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MARIADB_CENTREON_USER@'@'@DATABASE_SLAVE_IPADDR@';

CREATE USER '@MARIADB_CENTREON_USER@'@'@DATABASE_MASTER_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MARIADB_CENTREON_USER@'@'@DATABASE_MASTER_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MARIADB_CENTREON_USER@'@'@DATABASE_MASTER_IPADDR@';
```

Optionnaly, you can allow these privileges to be used from Central Cluster. It will make some administration scripts runnable from every nodes.

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
TO '@MARIADB_REPL_USER@'@'@DATABASE_SLAVE_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'@DATABASE_MASTER_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';
```

Optionnaly, you can allow these privileges to be used from Central Cluster. It will make some administration scripts runnable from every nodes.

```sql
GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'@CENTRAL_SLAVE_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'@CENTRAL_MASTER_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';
```

### Configuring the MariaDB scripts environment variables

The `/etc/centreon-ha/mysql-resources.sh` file declares environment variables that must be configured so that the *Centreon HA* scripts dedicated to MariaDB can work properly. These variables must be assigned the chosen values for the macros.

```bash
#!/bin/bash

###############################
# Database access credentials #
###############################

DBHOSTNAMEMASTER='@DATABASE_MASTER_NAME@'
DBHOSTNAMESLAVE='@DATABASE_SLAVE_NAME@'
DBREPLUSER='@MARIADB_REPL_USER@'
DBREPLPASSWORD='@MARIADB_REPL_PASSWD@'
DBROOTUSER='@MARIADB_REPL_USER@'
DBROOTPASSWORD='@MARIADB_REPL_PASSWD@'
CENTREON_DB='centreon'
CENTREON_STORAGE_DB='centreon_storage'

###############################
```

To make sure that all the previous steps have been successful, and that the correct names, logins and passwords have been entered in the configuration bash file, run this command on databases nodes::

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The expected output is:

```text
Connection MASTER Status '@DATABASE_MASTER_NAME@' [OK]
Connection SLAVE Status '@DATABASE_SLAVE_NAME@' [OK]
Slave Thread Status [KO]
Error reports:
    No slave (maybe because we cannot check a server).
Position Status [SKIP]
!Error reports:
    Skip because we can't identify a unique slave.
```

What matters here is that the first two connection tests are `OK`.

### Switching to read-only mode

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8/ RHEL 7 / CentOS 7">

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

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Now that everything is well configured, you will enable the `read_only` on both database servers by uncommenting (*ie.* removing the `#` at the beginning of the line) this instruction in the `/etc/mysql/mariadb.conf.d/50-server.cnf` file :

* Nœud principal

```ini
[server]
server-id=1
read_only
log-bin=mysql-bin
```

* Nœud secondaire

```ini
[server]
server-id=2
read_only
log-bin=mysql-bin
```

Appliquer ensuite ce changement par un redémarrage de MariaDB sur les deux nœuds :

```bash
systemctl restart mariadb
```

</TabItem>
</Tabs>

### Synchronizing the databases and enabling MariaDB replication

In the process of synchronizing the databases, you will first stop the secondary database process so that its data can be overwritten by the primary node's data. 

Run this command **on the secondary node:**

```bash
systemctl stop mysql
```

It is important to make sure that MariaDB is completely shut down. You will run this command and check that it returns no output:

```bash
ps -ef | grep mariadb[d]
```

In case one or more process are still alive, then run this other command (it will prompt for the MariaDB root password):

```bash
mysqladmin -p shutdown
```

Once the service is stopped **on the secondary database node**, you will run the synchronization script **from the primary database node**:

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
Connection MASTER Status '@DATABASE_MASTER_NAME@' [OK]
Connection SLAVE Status '@DATABASE_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

## Setting up the *Centreon* cluster

**Note**: unless otherwise stated, each of the following steps have to be run **on both central nodes (`@CENTRAL_MASTER_NAME@` and `@CENTRAL_SLAVE_NAME@`)**.

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
rm -f /etc/cron.d/centreon
rm -f /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-auto-disco
```

### Permission modifications

Modifications have to be made on permissions of `/var/log/centreon-engine` and `/tmp/centreon-autodisco` directories.

In a clustered-setup, it's a requirement to get a file sync and discovery scheduled task fully functionnal. 

- Files synchronization

```bash
chmod 775 /var/log/centreon-engine/
mkdir /var/log/centreon-engine/archives
chown centreon-engine: /var/log/centreon-engine/archives
chmod 775 /var/log/centreon-engine/archives/
find /var/log/centreon-engine/ -type f -exec chmod 664 {} \;
find /usr/share/centreon/www/img/media -type d -exec chmod 775 {} \;
find /usr/share/centreon/www/img/media -type f \( ! -iname ".keep" ! -iname ".htaccess" \) -exec chmod 664 {} \;
```

- Services discovery

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7">

```bash
mkdir /tmp/centreon-autodisco/
chown apache: /tmp/centreon-autodisco/
chmod 775 /tmp/centreon-autodisco/
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
mkdir /tmp/centreon-autodisco/
chown www-data: /tmp/centreon-autodisco/
chmod 775 /tmp/centreon-autodisco/
```

</TabItem>
</Tabs>

### Stopping and disabling the services

**Informations :** These operations must be applied to all nodes `@CENTRAL_MASTER_NAME@`, `@CENTRAL_SLAVE_NAME@`, `@DATABASE_MASTER_NAME@` et `@DATABASE_SLAVE_NAME@`. All the Centreon suite is installed as a dependency of centreon-ha, but it will not be used on the database nodes and will not create any trouble.

Centreon's application services won't be launched at boot time anymore, they will be managed by the clustering tools. These services must therefore be stopped and disabled:

For ** Central nodes **

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon
```

</TabItem>
<TabItem value="Debian 11 " label="Debian 11">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd apache2 php8.1-fpm centreon 
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd apache2 php8.1-fpm centreon 
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd php-fpm centreon
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd php-fpm centreon
```

</TabItem>
</Tabs>

And for **Database nodes**

```bash
systemctl stop mysql
systemctl disable mysql
```

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7">

By default, the `mysql` service is enabled in both systemd and system V perspectives, so you'd rather make sure it is disabled:

```bash
chkconfig mysql off
```

</TabItem>
<TabItem value="Debian 11 " label="Debian 11">

By default, the `mysql` service is enabled in both systemd and system V perspectives, so you'd rather make sure it is disabled:

```bash
update-rc.d -f mariadb remove
```

</TabItem>
</Tabs>

### Creating the cluster

#### Activating the clustering services

First we enable all the services and start `pcsd` on ** all nodes **:

```bash
systemctl start pcsd
```

#### Preparing the server that will hold the function of *quorum device* 

You can use one of your pollers to play this role. It must be prepared with the commands below: 

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

```bash
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable rhel-8-for-x86_64-highavailability-rpms
dnf install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

```bash
dnf config-manager --enable ol8_addons
dnf install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="Alma Linux 8" label="Alma Linux 8">

```bash
dnf config-manager --enable ha
dnf install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="RHEL 7" label="RHEL 7">

```bash
yum install epel-release
subscription-manager repos --enable rhel-7-for-x86_64-highavailability-rpms
yum install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install epel-release
yum install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
</Tabs>

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7">

Modify the parameter `COROSYNC_QNETD_OPTIONS` in the file `/etc/sysconfig/corosync-qnetd` to make sure the service will be listening the connections just on IPv4

```bash
COROSYNC_QNETD_OPTIONS="-4"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Modify the parameter `COROSYNC_QNETD_OPTIONS` in the file `/etc/default/corosync-qnetd` to make sure the service will be listening the connections just on IPv4

```bash
COROSYNC_QNETD_OPTIONS="-4"
```

</TabItem>
</Tabs>

#### Authenticating to the cluster's members

For the sake of simplicity, the `hacluster` user will be assigned the same password on ** all nodes, `@QDEVICE_NAME@` included**.

```bash
passwd hacluster
```

Now that both of the central nodes **and** the *quorum device* server are sharing the same password, you will run this command **only on one of the nodes** in order to authenticate on all the hosts taking part in the cluster.

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
pcs host auth \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@DATABASE_MASTER_NAME@" \
    "@DATABASE_SLAVE_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@'
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

On Debian, the cluster is autoconfigured with default values. In order to install our cluster, we need to destroy this setup with this command:

```bash
pcs cluster destroy
```

Then you can start the authentication of the cluster:

```bash
pcs host auth \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@DATABASE_MASTER_NAME@" \
    "@DATABASE_SLAVE_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@'
```
 
</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
pcs cluster auth \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@DATABASE_MASTER_NAME@" \
    "@DATABASE_SLAVE_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@' \
    --force
```

</TabItem>
</Tabs>

#### Creating the cluster

The following command creates the cluster. It must be run **only on one of the nodes**. 

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

```bash
pcs cluster setup \
    centreon_cluster \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@DATABASE_MASTER_NAME@" \
    "@DATABASE_SLAVE_NAME@" \
    --force
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
pcs cluster setup \
    --force \
    --name centreon_cluster \
    "@CENTRAL_MASTER_NAME@" \
    "@CENTRAL_SLAVE_NAME@" \
    "@DATABASE_MASTER_NAME@" \
    "@DATABASE_SLAVE_NAME@"
```

</TabItem>
</Tabs>

Then start the `pacemaker` service **on both central and databases nodes**:

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

You can now follow the state of the cluster with the `crm_mon -f` command, which will display new resources as they appear.

#### Creating the *Quorum Device*

Run this command on one of the central nodes:

```bash
pcs quorum device add model net \
    host="@QDEVICE_NAME@" \
    algorithm="ffsplit"
```

### Creating the MariaDB cluster resources

All commands within this section should be exectued on **only on one Cluster node**, the configuration will be spread automatically.

#### Primary & Secondary MySQL Processes 

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mariadb-centreon \
    config="/etc/my.cnf.d/server.cnf" \
    pid="/var/lib/mysql/mysql.pid" \
    datadir="/var/lib/mysql" \
    socket="/var/lib/mysql/mysql.sock" \
    binary="/usr/bin/mysqld_safe" \
    node_list="@DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd='@MARIADB_REPL_PASSWD@' \
    test_table='centreon.host'
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mariadb-centreon \
    config="/etc/mysql/mariadb.conf.d/50-server.cnf" \
    pid="/run/mysqld/mysqld.pid" \
    datadir="/var/lib/mysql" \
    socket="/run/mysqld/mysqld.sock" \
    binary="/usr/bin/mysqld_safe" \
    node_list="@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd='@MARIADB_REPL_PASSWD@' \
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
    node_list="@DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd='@MARIADB_REPL_PASSWD@' \
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
    node_list="@DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@" \
    replication_user="@MARIADB_REPL_USER@" \
    replication_passwd='@MARIADB_REPL_PASSWD@' \
    test_user="@MARIADB_REPL_USER@" \
    test_passwd='@MARIADB_REPL_PASSWD@' \
    test_table='centreon.host' \
    master
```

</TabItem>
</Tabs>

> **WARNING:** the syntax of the following command depends on the Linux Distribution you are using.

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

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
<TabItem value="CentOS7" label="CentOS7">

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

#### MariaDB Virtual IP Address

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

### Creating the clone resources

Some resources must be running on one only node at a time (`centengine`, `gorgone`, `httpd`, ...), but some others can be running on both (the RRD broker and PHP7). For the second kind, you will declare *clone* resources.

> **Warning:** All the commands in this chapter have to be run only once on the central node of your choice.

##### PHP8 resource

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / RHEL 7 / CentOS 7">

```bash
pcs resource create "php" \
    systemd:php-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs resource create "php" \
    systemd:php8.1-fpm \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="30s" \
    clone
```

</TabItem>
</Tabs>

##### RRD broker resource

```bash
pcs resource create "cbd_rrd" \
    systemd:cbd \
    meta target-role="stopped" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="20s" timeout="30s" \
    clone
```

### Creating the *centreon* resource group

#### Web VIP address

```bash
pcs resource create vip \
    ocf:heartbeat:IPaddr2 \
    ip="@VIP_IPADDR@" \
    nic="@VIP_IFNAME@" \
    cidr_netmask="@VIP_CIDR_NETMASK@" \
    broadcast="@VIP_BROADCAST_IPADDR@" \
    flush_routes="true" \
    meta target-role="stopped" \
    op start interval="0s" timeout="20s" \
    stop interval="0s" timeout="20s" \
    monitor interval="10s" timeout="20s" \
    --group centreon
```

#### Httpd service

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
pcs resource create http \
    systemd:httpd \
    meta target-role="started" \
    op start interval="0s" timeout="40s" \
    stop interval="0s" timeout="40s" \
    monitor interval="5s" timeout="20s" \
    --group centreon \
    --force
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs resource create http \
    systemd:apache2 \
    meta target-role="started" \
    op start interval="0s" timeout="40s" \
    stop interval="0s" timeout="40s" \
    monitor interval="5s" timeout="20s" \
    --group centreon \
    --force
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

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

</TabItem>
</Tabs>

#### Gorgone service

```bash
pcs resource create gorgone \
    systemd:gorgoned \
    meta target-role="stopped" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

#### centreon-central-sync service

This service only exists in the context of *Centreon HA*. It provides real time synchronization for configuration files, images, etc.

```bash
pcs resource create centreon_central_sync \
    systemd:centreon-central-sync \
    meta target-role="stopped" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

#### SQL Broker

```bash
pcs resource create cbd_central_broker \
    systemd:cbd-sql \
    meta target-role="stopped" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="30s" \
    --group centreon
```

#### Centengine service

```bash
pcs resource create centengine \
    systemd:centengine \
    meta multiple-active="stop_start" target-role="stopped" \
    op start interval="0s" timeout="90s" stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="30s" \
    --group centreon
```

#### Centreontrapd service

```bash
pcs resource create centreontrapd \
    systemd:centreontrapd \
    meta target-role="stopped" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

#### Snmptrapd service

```bash
pcs resource create snmptrapd \
    systemd:snmptrapd \
    meta target-role="stopped" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

### Resource constraints

When using the 4 nodes architecture, you must define some specific Constraints to specify where Resources could run. 

In order to glue the Primary Database role with the Virtual IP, define a mutual Constraint:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

```bash
pcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"
pcs constraint order stop centreon then demote ms_mysql-clone
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
pcs constraint colocation add master "ms_mysql-master" with "vip_mysql"
pcs constraint order stop centreon then demote ms_mysql-master
```

</TabItem>
</Tabs>

Create the Constraint that prevent Centreon Processes to run on Database nodes and  vice-et-versa: 

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

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

### Activate the Cluster and check Resources operating state

#### Enable resources 

```bash
pcs resource enable php-clone
pcs resource enable cbd_rrd-clone
pcs resource meta vip target-role="started"
pcs resource meta vip_mysql target-role="started"
pcs resource meta centreontrapd target-role="started"
pcs resource meta snmptrapd target-role="started"
pcs resource meta centengine target-role="started"
pcs resource meta cbd_central_broker target-role="started"
pcs resource meta gorgone target-role="started"
pcs resource meta centreon_central_sync target-role="started"
pcs resource meta http target-role="started"
```

### Checking the cluster's state

#### Checking the resources' states

You can monitor the cluster's resources in real time using the `crm_mon -fr` command:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

```bash
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 22 15:00:13 2021
  * Last change:  Wed Sep 15 16:26:53 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 4 nodes configured
  * 21 resource instances configured

Node List:
  * Online: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @DATABASE_MASTER_NAME@ ]
    * Slaves: [ @DATABASE_SLAVE_NAME@ ]
  * vip_mysql   (ocf::heartbeat:IPaddr2):        Started @DATABASE_MASTER_NAME@
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
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Apr 29 12:54:11 2022
Last change: Fri Apr 29 12:34:16 2022 by root via cibadmin on @CENTRAL_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
vip_mysql       (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
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

</TabItem>
</Tabs>

If **centreon_central_sync** won't start, verify if the folder `/usr/share/centreon-broker/lua` exist **on the two central nodes**.

If not, you can create it with this command `mkdir -p /usr/share/centreon-broker/lua`. And launch a cleanup with this command `pcs resource cleanup`.

#### Disabled resources

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

#### Checking the database replication thread

The MariaDB replication state can be monitored at any time with the `mysql-check-status.sh` command:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The expected output is:

```bash
Connection MASTER Status '@DATABASE_MASTER_NAME@' [OK]
Connection SLAVE Status '@DATABASE_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

It can happen that the replication thread is not running right after installation.  Restarting the `ms_mysql` resource may fix it.

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

```bash 
pcs resource restart ms_mysql-clone
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash 
pcs resource restart ms_mysql
```

</TabItem>
</Tabs>

#### Checking the constraints

Normally the two colocation constraints that have been created during the setup should be the only constraints the `pcs constraint` command displays:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8/ Debian 11" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8 / Debian 11">

```bash
Location Constraints:
  Resource: cbd_rrd-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: centreon
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: ms_mysql-clone
    Disabled on: @CENTRAL_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @CENTRAL_SLAVE_NAME@ (score:-INFINITY)
  Resource: php-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
Ordering Constraints:
  stop centreon then demote ms_mysql-clone (kind:Mandatory)
Colocation Constraints:
  ms_mysql-clone with vip_mysql (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
Location Constraints:
  Resource: cbd_rrd-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: centreon
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: ms_mysql-master
    Disabled on: @CENTRAL_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @CENTRAL_SLAVE_NAME@ (score:-INFINITY)
  Resource: php-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
Ordering Constraints:
  stop centreon then demote ms_mysql-master (kind:Mandatory)
Colocation Constraints:
  ms_mysql-master with vip_mysql (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
</Tabs>

## Modifying the Centreon configuration files

Following the installation of the cluster and the _vip_mysql_, it is necessary to modify the output of the Centreon Broker and 3 configuration files of the Central. These elements will have to point on the _vip_mysql_ in order to always point on the active MariaDB node.
These 3 files are :
* /etc/centreon/centreon.conf.php
* /etc/centreon/conf.pm
* /etc/centreon/config.d/10-database.yaml
You'll need to change the IP of the previous database by the IP of the _vip_mysql_

### Modifying central-broker-master outputs

This is configured in the Centreon Broker configuration menu in the *Output* tab of *Configuration > Collectors > Centreon Broker Configuration*.

* Modify the "IPv4" output by replacing "@DATABASE_MASTER_IPADDR@" with @VIP_SQL_IPADDR@ in *central-broker-master* configuration:

| Broker Output                         | Parameter  | Value            |
| ------------------------------------- | ---------- | ---------------- |
| Unified SQL                           | DB host    | @VIP_SQL_IPADDR@ |

### Exporting configuration

Once the actions in the previous paragraph have been completed, the configuration must be exported (first 3 boxes for the "Central" poller export) for it to be effective.

These actions must be performed only on `@CENTRAL_MASTER_NAME@` and then the broker configuration files must be copied to `@CENTRAL_SLAVE_NAME@`.

```bash
rsync -a /etc/centreon-broker/*json @CENTRAL_SLAVE_IPADDR@:/etc/centreon-broker/
```

### Modification of the 3 configuration files

After having modified the output of the broker, we have to modify the Centreon configuration files.
To do this, first, edit the file `/etc/centreon/conf.pm` and replace @DATABASE_MASTER_IPADDR@ by the address of the _vip-mysql_:

```bash
#############################################
# File Added by Centreon
#
$centreon_config = {
       VarLib => "/var/lib/centreon",
       CentreonDir => "/usr/share/centreon/",
       CacheDir => "/var/cache/centreon/",
       "centreon_db" => "centreon",
       "centstorage_db" => "centreon_storage",
       "db_host" => "@VIP_SQL_IPADDR@:3306",
       "db_user" => "@MARIADB_CENTREON_USER@",
       "db_passwd" => '@MARIADB_CENTREON_PASSWD@'
};
# Central or Poller ?
$instance_mode = "central";
# Centreon Centcore Command File
$cmdFile = "/var/lib/centreon/centcore.cmd";
# Deprecated format of Config file.
$mysql_user = "@MARIADB_CENTREON_USER@";
$mysql_passwd = '@MARIADB_CENTREON_PASSWD@';
$mysql_host = "@VIP_SQL_IPADDR@:3306";
$mysql_database_oreon = "centreon";
$mysql_database_ods = "centreon_storage";
1;
```

Then do the same operation in the file `/etc/centreon/centreon.conf.php`:

```bash
<?php
/*
 * Centreon is developped with GPL Licence 2.0 :
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt
 * Developped by : Julien Mathis - Romain Le Merlus - Christophe Coraboeuf
 *
 * The Software is provided to you AS IS and WITH ALL FAULTS.
 * Centreon makes no representation and gives no warranty whatsoever,
 * whether express or implied, and without limitation, with regard to the quality,
 * safety, contents, performance, merchantability, non-infringement or suitability for
 * any particular or intended purpose of the Software found on the Centreon web site.
 * In no event will Centreon be liable for any direct, indirect, punitive, special,
 * incidental or consequential damages however they may arise and even if Centreon has
 * been previously advised of the possibility of such damages.
 *
 * For information : contact@centreon.com
 */
/*      Database */
$conf_centreon['hostCentreon'] = "@VIP_SQL_IPADDR@";
$conf_centreon['hostCentstorage'] = "@VIP_SQL_IPADDR@";
$conf_centreon['user'] = "@MARIADB_CENTREON_USER@";
$conf_centreon['password'] = '@MARIADB_CENTREON_PASSWD@';
$conf_centreon['db'] = "centreon";
$conf_centreon['dbcstg'] = "centreon_storage";
$conf_centreon['port'] = "3306";
/* path to classes */
$classdir='./class';
/* Centreon Path */
$centreon_path='/usr/share/centreon/';
?>
```

And finish with the last file `/etc/centreon/config.d/10-database.yaml`:

```bash
database:
  db_configuration:
    dsn: "mysql:host=@VIP_SQL_IPADDR@:3306;dbname=centreon"
    username: "@MARIADB_CENTREON_USER@"
    password: "@MARIADB_CENTREON_PASSWD@"
  db_realtime:
    dsn: "mysql:host=@VIP_SQL_IPADDR@:3306;dbname=centreon_storage"
    username: "@MARIADB_CENTREON_USER@"
    password: "@MARIADB_CENTREON_PASSWD@"
```

And then you need to restart gorgone and cbd_central_broker resources to changes take effects.
Restarting gorgone resource will restart all resources below, so using the following command:

```bash
pcs resource restart gorgone
```

And after resources are restarted, verify if all is OK with the command `crm_mon -fr`, the result should be like that:

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.1.4-5.el8_7.2-dc6eb4362e) - partition with quoru
m
  * Last updated: Wed Nov 23 10:27:48 2022
  * Last change:  Wed Nov 23 10:27:43 2022 by hacluster via crmd on @CENTRAL_MASTER_NAME@
  * 4 nodes configured
  * 21 resource instances configured

Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ centreon-rhel8-pri-bdd @CENTRAL_SLAVE_NAME@ @DATABASE_SLAVE_NAME@
]

Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ centreon-rhel8-pri-bdd ]
    * Slaves: [ @DATABASE_SLAVE_NAME@ ]
    * Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * vip_mysql   (ocf::heartbeat:IPaddr2):        Started centreon-rhel8-pri-bdd
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
    * Stopped: [ centreon-rhel8-pri-bdd @DATABASE_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
    * Stopped: [ centreon-rhel8-pri-bdd @DATABASE_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_MASTER_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_MASTER_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_MASTER_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_MASTER_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_MASTER_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_MASTER_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started@CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@

Migration Summary:
```

If an error is found while your resources are running, try "cleaning" with this command:

```bash
pcs resource cleanup
```

## Integrating pollers

You can now [add your pollers](integrating-pollers.md) and begin to monitor!
