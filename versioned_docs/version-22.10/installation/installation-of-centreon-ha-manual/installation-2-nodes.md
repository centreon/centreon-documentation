---
id: centreon-ha-2-nodes-installation-manual-failover
title: 2-node manual failover installation
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

### Understanding

Before following this procedure, it is recommended to have a satisfactory level of knowledge of the Linux operating system and Centreon to understand what is going to be done and to be able to get out of a possible mistake.

### Installation of Centreon

The installation of a Centreon-HA cluster can only be done on the basis of a functional installation of Centreon. Before following this procedure, it is therefore imperative to have applied **[this installation procedure](https://docs.centreon.com/docs/installation/introduction/)** until the end **by reserving about 5GB of free space** on the *volume group* which contains the MySQL data (mount point `/var/lib/mysql` by default). 

The `vgs` command should return a display of the form below (especially the value under `VFree`):

```text
  VG                    #PV #LV #SN Attr   VSize   VFree 
  centos_centreon-c1      1   5   0 wz--n- <31,00g <5,00g
```

**WARNING:** If this prerequisite is not checked, it will not be possible to synchronize the databases as described in this document.

### Definition of server names and IP addresses

In this procedure we will refer to parameters that vary from one installation to another (names and IP addresses of nodes for example) via the following macros:

* `@CENTRAL_MASTER_IPADDR@`: IP address of the main central server
* `@CENTRAL_MASTER_NAME@` : name of the main central server
* `@CENTRAL_SLAVE_IPADDR@` : IP address of the secondary central server
* `@CENTRAL_SLAVE_NAME@` : name of the secondary central server
* `@DB_MASTER_IPADDR@` : IP address of the main database server
* `@DB_MASTER_NAME@` : name of the main database server
* `@DB_SLAVE_IPADDR@` : IP address of the secondary database server
* `@DB_SLAVE_NAME@` : name of the secondary database server
* `@MYSQL_REPL_USER@`: MySQL replication account name (suggested: centreon-repl)
* `@MYSQL_REPL_PASSWD@`: password for this account
* `@MYSQL_CENTREON_USER@`: MySQL account name of Centreon (suggested: centreon)
* `@MYSQL_CENTREON_PASSWD@` : password for this account
* `@CENTRAL_VIP_IPADDR@` : virtual IP address of the cluster
* `@CENTRAL_VIP_IFNAME@` : name of the interface that will carry the VIP
* `@CENTRAL_VIP_CIDR_NETMASK@` : subnet mask expressed in number of bits without the '/' (example : 24)
* `@CENTRAL_VIP_BROADCAST_IPADDR@`: broadcast address
* `@DB_VIP_IPADDR@` : virtual IP address of the cluster, in the case of a 2 node HA, it is the same as the central one.
* `@DB_VIP_IFNAME@` : name of the interface that will carry the VIP, in the case of a 2-node HA, it is the same as the central one.
* `@DB_VIP_CIDR_NETMASK@` : subnet mask expressed in number of bits without the '/' (example : 24), in the case of a 2-node HA, it is the same as the central one.
* `@DB_VIP_BROADCAST_IPADDR@` : broadcast address, in the case of a 2 nodes HA, it is the same as the central one.

### Centreon-broker configuration

#### Linking to the cbd service

In a standard Centreon installation, the `cbd` service drives two instances of `centreon-broker-daemon` :

* `central-broker-master`: also known as "central broker" or "SQL broker", which redirects all I/O from pollers to databases, to the RRD broker, etc.
* central-rrd-master` : the RRD broker which receives its flow from the SQL broker, and whose only function is to write the RRD files used to display the graphs. 

In a Centreon-HA cluster, the two broker processes will each be managed via a separate service that will be driven by the cluster:

* `central-broker-master` as the `cbd_central_broker` resource, linked to the *systemd* `cbd-sql` service
* `central-rrd-master` as the clone resource `cbd_rrd`, linked to the standard Centreon *systemd* `cbd` service.

In order for everything to work properly in the following, you must now undo the link between central-broker-master and the `cbd` service ** by checking "no" for the parameter "Linked to cbd service "** in *Configuration* > *Pollers* > *Broker configuration* > *central-broker-master* in the *General* tab.

#### Dual RRD streams

Rather than setting up a real-time replication of RRD data files, the technical choice that was made to allow graphs to be displayed on any node as soon as it becomes `master' was to duplicate the output stream from `central-broker-master' to `central-rrd-master'. This is configured in the same menu as in the previous paragraph, but this time in the *Output* tab of *Configuration > Collectors > Centreon Broker Configuration*.

* Modify the output "IPv4" by replacing "localhost" by `@CENTRAL_MASTER_IPADDR@`.

| Output IPv4 |  |
| --------------- | ------------------ |
| Name | centreon-broker-master-rrd |
| Connection port | 5670 |
| Host to connect to | `@CENTRAL_MASTER_IPADDR@` |
| Buffering timeout | 0 |
| Retry interval | 60 |

* Add a new IPv4 output, similar to the first one and named for example "centreon-broker-slave-rrd" pointing this time to `@CENTRAL_SLAVE_IPADDR@`.

| Output IPv4 |  |
| --------------- | ------------------ |
| Name | centreon-broker-slave-rrd |
| Connection port | 5670 |
| Host to connect to | `@CENTRAL_SLAVE_IPADDR@` |
| Buffering timeout | 0 |
| Retry interval | 60 |

#### Export the configuration

Once the actions of the two previous paragraphs have been performed, the configuration must be exported (first 3 boxes for the export of the "Central" poller) for it to be effective.

These actions must be performed either on both nodes, or only on `@CENTRAL_MASTER_NAME@` and then the broker configuration files must be copied to `@CENTRAL_SLAVE_NAME@`.

```bash
rsync -a /etc/centreon-broker/*json @CENTRAL_SLAVE_IPADDR@:/etc/centreon-broker/
```

### Modification of the `cbd` reload command

This may not be known to all Centreon users, but every time a reload of the central poller configuration is done via the interface, the broker service (`cbd`) is reloaded (not just centengine), hence the "Centreon Broker reload command" parameter in *Configuration > Pollers > Central*.

As explained above, the broker processes are split between two services: `cbd` for the RRD broker, `cbd-sql` for the central broker. In the context of a centreon-ha cluster, the service that must be reloaded during the configuration export is `cbd-sql` and not `cbd`. You must therefore apply the value `service cbd-sql reload` to the "Centreon Broker reload command" parameter.

### Synchronize Centreon configuration files (PHP, Perl, Gorgone)

```bash
rsync -av /etc/centreon/* root@@CENTRAL_SLAVE_IPADDR@:/etc/centreon/
```

## System preparation

Before getting to the actual cluster setup, a few preparatory steps are necessary at the OS level.

**Note:** unless otherwise stated, each of the following steps must be performed **on the two central nodes**.

### Tuning the network configuration

In order to improve the reliability of the cluster and since *Centreon HA* only runs on IP v4, it is recommended to apply the following tuning on all servers of the Centreon platform:

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

To avoid problems with the management of fixed and virtual IP addresses, it is necessary to declare the fixed IP address of each server in the network configuration.

To do this, execute the following commands on each node:

For the server `@CENTRAL_MASTER_NAME@`:

```bash
nmcli con mod @CENTRAL_VIP_IFNAME@ +ipv4.addresses "@CENTRAL_MASTER_IPADDR@/@CENTRAL_VIP_CIDR_NETMASK@"
nmcli con up @CENTRAL_VIP_IFNAME@
```

For the server `@CENTRAL_SLAVE_NAME@`:

```bash
nmcli con mod @CENTRAL_VIP_IFNAME@ +ipv4.addresses "@CENTRAL_SLAVE_IPADDR@/@CENTRAL_VIP_CIDR_NETMASK@"
nmcli con up @CENTRAL_VIP_IFNAME@
```

You can verify on each node if the IP address is declared with this command on the Central node for example:

```bash
cat /etc/sysconfig/network-scripts/ifcfg-@CENTRAL_VIP_IFNAME@
```

The result is like that for `@CENTRAL_MASTER_NAME@`:

```text
...
DEVICE=@CENTRAL_VIP_IFNAME@
ONBOOT=yes
IPADDR=@CENTRAL_MASTER_IPADDR@
PREFIX=23
...
```

### Name resolution

In order to ensure that the cluster functions properly even if the name resolution service fails, it is imperative that the nodes know each other through the `/etc/hosts` file. In the case of a 2-node cluster, it is not necessary to declare the hosts `@DB_MASTER_NAME@` and `@DB_MASTER_SLAVE@` since they are the same as the central hosts.

```bash
cat >/etc/hosts <<"EOF"
127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4
@CENTRAL_MASTER_IPADDR@ @CENTRAL_MASTER_NAME@
@CENTRAL_SLAVE_IPADDR@ @CENTRAL_SLAVE_NAME@
EOF
```

In the rest of this document, we will refer to the primary node as the primary node and the secondary node as the secondary node. This distinction is purely arbitrary, the roles can of course be exchanged once the installation is complete.

### Installing the packages

Centreon offers the `centreon-ha` package, which provides all the scripts and dependencies needed to run a Centreon cluster.

On all :

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

```bash
subscription-manager repos --enable rhel-8-for-x86_64-highavailability-rpms
dnf install centreon-ha-web
```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

```bash
dnf config-manager --enable ol8_addons
dnf install centreon-ha-web
```

</TabItem>
<TabItem value="Alma Linux 8" label="Alma Linux 8">

```bash
dnf config-manager --enable ha
dnf install centreon-ha-web
```

</TabItem>
<TabItem value="RHEL 7" label="RHEL 7">

```bash
subscription-manager repos --enable rhel-7-for-x86_64-highavailability-rpms
dnf install centreon-ha-web
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-ha-web
```

</TabItem>
</Tabs>

### SSH key exchange

In order to allow servers to exchange files and commands, it is necessary to set up the possibility to connect through SSH from one server to the other for the users:

* `mysql`
* `centreon`

There are 2 ways to exchange SSH keys:

* Using `sh-copy-id`: using this command requires the ability to validate authentication with a password. However, it is not desirable to define a password for the service accounts we are talking about here. If this method is used anyway, it is recommended to remove the password after the exchange, with the commands `passwd -d centreon` and `passwd -d mysql`.
* By manually copying the public key into `~/.ssh/authorized_keys`. This method is to be preferred, but requires, to work properly, that only the owner of the file is able to read it.

This is the second method which will be proposed below.

#### Centreon account

This procedure is to be applied on the two central nodes. To begin, switch to the `bash` environment of `centreon`:

```bash
su - centreon
```

Then run these commands on the two central nodes:

```bash
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub | tee ~/.ssh/authorized_keys
```

After running these commands on both nodes, copy the contents of the file that was displayed under the `cat` command and paste it into the `~/.ssh/authorized_keys` file **on the other node** and then apply the correct permissions to the file (still as `centreon`):

```bash
chmod 600 ~/.ssh/authorized_keys
```

The key exchange must then be validated by a first connection that will accept the signature of the SSH server (always as `centreon`) :

```bash
ssh @CENTRAL_MASTER_NAME@
ssh @CENTRAL_SLAVE_NAME@
```

Then exit the `centreon` session with `exit` or `Ctrl-D`.

#### Mysql account

For the `mysql` account the procedure differs somewhat because this user does not normally have a *home directory* or the ability to open a Shell session. This procedure is also to be applied on the two central nodes.

```bash
systemctl stop mysql
mkdir /home/mysql
chown mysql: /home/mysql
usermod -d /home/mysql mysql
usermod -s /bin/bash mysql
touch /var/log/mysqld.log
chown mysql. /var/log/mysqld.log
systemctl start mysql
```

Then switch to the `bash` environment of `mysql` and generate the SSH keys:

```bash
su - mysql
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub | tee ~/.ssh/authorized_keys
```

After running these commands on both nodes, copy the contents of the file and paste it into `~/.ssh/authorized_keys` **on the other node** and then apply the correct permissions to the file (still as `mysql`):

```bash
chmod 600 ~/.ssh/authorized_keys
```

The key exchange must then be validated by a first connection which will accept the signature of the SSH server by typing "yes" (always as `mysql`) :

```bash
ssh @DB_MASTER_NAME@
ssh @DB_SLAVE_NAME@
```

Then exit the `mysql` session with `exit` or `Ctrl-D`.

## Setting up MySQL replication

In order for the two nodes to be interchangeable at any time, the two databases must be continuously replicated. To do this we will set up a Master-Slave replication.
Since Centreon 22.04, The mariaDB Replication is now based on  **[GTID](https://mariadb.com/kb/en/gtid/)**.

**Note:** unless otherwise stated, each of the following steps must be performed **on both database nodes**.

### MySQL configuration

To begin with, we need to tune the MySQL configuration, which will be concentrated in the single file `/etc/my.cnf.d/server.cnf`.  By default, the `[server]` section of this file is empty, which is where the following lines should be pasted:

```ini
[server]
sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
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

**Important:** the value of `server-id` must be different from one server to another, so that they can identify each other correctly. The values 1 => Master and 2 => Slave are not mandatory but are recommended.

**NB:** Do not forget to uncomment (remove the '#' at the beginning of the line) the `innodb_buffer_pool_size` parameter which corresponds to your platform.

For these modifications to be taken into account, you must restart the database server:

```bash
systemctl restart mariadb
```

Make sure that the reboot was successful with the following command:

```bash
systemctl status mariadb
```

**Warning:** The `centreon.cnf` file will no longer be taken into account, if parameters have been customized there, they must be transferred to `server.cnf`.

### Securing the database 

Access to databases should be restricted as strictly as possible. The command `mysql_secure_installation` allows to remove the accesses not protected by passwords and the test database. Run this command and be guided by the default choices. Be careful to choose a password that does not belong to any dictionary.

```bash
mysql_secure_installation
```

### Creating the centreon account

To be able to administer MySQL users, you must first connect as root (with the password entered in the previous paragraph):

```
mysql -p
```

Then paste in the MySQL prompt the commands below by changing the IP addresses and passwords.

```sql
CREATE USER '@MYSQL_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@' IDENTIFIED BY '@MYSQL_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_SLAVE_IPADDR@';

CREATE USER '@MYSQL_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@' IDENTIFIED BY '@MYSQL_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@MYSQL_CENTREON_USER@'@'@CENTRAL_MASTER_IPADDR@';
```

### Creating the replication account

Still in the MySQL prompt (see previous paragraph) create the user `@MYSQL_REPL_USER@`, dedicated to replication, using the following commands:

```sql
CREATE USER '@MYSQL_REPL_USER@'@'localhost' IDENTIFIED BY '@MYSQL_REPL_PASSWD@';
GRANT PROCESS, RELOAD, SHUTDOWN, SUPER, REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO '@MYSQL_REPL_USER@'@'localhost';

CREATE USER '@MYSQL_REPL_USER@'@'@CENTRAL_SLAVE_IPADDR@' IDENTIFIED BY '@MYSQL_REPL_PASSWD@';
GRANT PROCESS, RELOAD, SHUTDOWN, SUPER, REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO '@MYSQL_REPL_USER@'@'@DB_SLAVE_IPADDR@';

CREATE USER '@MYSQL_REPL_USER@'@'@CENTRAL_MASTER_IPADDR@' IDENTIFIED BY '@MYSQL_REPL_PASSWD@';
GRANT PROCESS, RELOAD, SHUTDOWN, SUPER, REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO '@MYSQL_REPL_USER@'@'@DB_MASTER_IPADDR@';
```

### Configuring environment variables for MySQL scripts

The file `/etc/centreon-ha/mysql-resources.sh` contains environment variables that must be adapted to the current installation by replacing the macros with the appropriate value.

```bash
#!/bin/bash

###############################
# Database access credentials #
###############################

DBHOSTNAMEMASTER='@DB_MASTER_NAME@'
DBHOSTNAMESLAVE='@DB_SLAVE_NAME@'
DBREPLUSER='@MYSQL_REPL_USER@'
DBREPLPASSWORD='@MYSQL_REPL_PASSWD@'
DBROOTUSER='@MYSQL_REPL_USER@'
DBROOTPASSWORD='@MYSQL_REPL_PASSWD@'
CENTREON_DB='centreon'
CENTREON_STORAGE_DB='centreon_storage'

##########################################
# Manual failover additional informations #
##########################################

CENTRAL_VIP_IPADDR='@CENTRAL_VIP_IPADDR@'
CENTRAL_VIP_IFNAME='@CENTRAL_VIP_IFNAME@'
CENTRAL_VIP_CIDR_NETMASK='@CENTRAL_VIP_CIDR_NETMASK@'
CENTRAL_VIP_BROADCAST_IPADDR='@CENTRAL_VIP_BROADCAST_IPADDR@'
MYSQL_VIP_IPADDR='@DB_VIP_IPADDR@'
MYSQL_VIP_IFNAME='@DB_VIP_IFNAME@'
MYSQL_VIP_CIDR_NETMASK='@DB_VIP_CIDR_NETMASK@'
MYSQL_VIP_BROADCAST_IPADDR='@DB_VIP_BROADCAST_IPADDR@'
```

To make sure that the last steps have been done correctly, and that the correct names, logins and passwords have been entered in the configuration file, run the command :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The expected outcome is:

```text
Connection Status '@DB_MASTER_NAME@' [OK]
Connection Status '@DB_SLAVE_NAME@' [OK]
Slave Thread Status [KO]
Error reports:
    No slave (maybe because we cannot check a server).
Position Status [SKIP]
!Error reports:
    Skip because we can't identify a unique slave.
```

What is important to check is that the first two connection tests are `OK`.

### Switching to read-only

Now that everything is set up properly, we need to enable read_only mode on both servers by uncommenting (*ie.* remove the `#` at the beginning of the line) this statement in the `/etc/my.cnf.d/server.cnf` file:

* Main node

```ini
[server]
server-id=1
read_only
log-bin=mysql-bin
```

* Secondary node

```ini
[server]
server-id=2
read_only
log-bin=mysql-bin
```

Then apply this change by restarting MySQL on both nodes:

```bash
systemctl restart mariadb
```

### Authorization of centreon and mysql accounts

In order for the scripts to run correctly through the ssh connections via the centreon and mysql accounts, they must be given additional rights

For the centreon account, edit the file `/etc/sudoers.d/centreon-cluster` and add the following lines:

```bash
CENTREON   ALL = NOPASSWD: /usr/bin/systemctl reload centreon
CENTREON   ALL = NOPASSWD: /usr/bin/systemctl restart centreon
CENTREON   ALL = NOPASSWD: /usr/bin/systemctl stop centreon
CENTREON   ALL = NOPASSWD: /usr/bin/systemctl start centreon

CENTREON   ALL = NOPASSWD: /usr/bin/nmcli
```

For the mysql account, edit the file `/etc/sudoers.d/centreon-cluster-db` and add the following line:

```bash
MYSQL   ALL = NOPASSWD: /usr/bin/nmcli
```

### Synchronize databases and start MySQL replication

To synchronize the databases, stop the `mysql` service on the secondary node to overwrite its data with that of the main server. 

So you need to run the following command **on the secondary node** :

```bash
systemctl stop mariadb
```

In some cases systemd may fail to stop the `mysql` service, to be sure, check that the following command returns no lines:

```bash
ps -ef | grep mysql[d]
```

If a `mysqld` process is still running, then the following command should be run to stop it (and provide the mysql root password when prompted):

```bash
mysqladmin -p shutdown
```

Once the service is stopped on the **secondary** node, run the synchronization script **from the main node** : 

```bash
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

This script does the following:

* verify that mysql is stopped on the secondary node
* stop mysql on the primary node
* mount an LVM snapshot on the *volume group* that supports the /var/lib/mysql partition
* start mysql on the primary node
* store the current position in the binary logs
* disable the MySQL global variable `read_only` on the master node (*ie.* the master node is now allowed to write to its database)
* synchronize all data files (excluding the `mysql` system database) by overwriting the files on the secondary node
* unmount the LVM snapshot
* create the replication thread that will keep the data updated on the secondary node

This script is very verbose, and not everything that is displayed is understandable, but to make sure that it has run to completion, just make sure that the end looks like :

```text
Umount and Delete LVM snapshot
  Logical volume "dbbackupdatadir" successfully removed
Start MySQL Slave
OK
Start Replication
Id	User	Host	db	Command	Time	State	Info	Progress
3	@MYSQL_REPL_USER@	@CENTRAL_MASTER_NAME@:33084	NULL	Query	0	init	show processlist	0.000
```

If all went well, then the `mysql-check-status.sh` command should return an error-free result:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Expected outcome:

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

### Creating the MySQL VIP

The VIP will be added to the `@DB_VIP_IFNAME@` interface configuration on the master node:

```bash
nmcli con mod "@DB_VIP_IFNAME@" +ipv4.addresses "@DB_VIP_IPADDR@/@DB_VIP_CIDR_NETMASK@"
nmcli connection up "@DB_VIP_IFNAME@"
```

Then run the following script **on one of the two MySQL nodes** to verify if the VIP is correctly mount on the MySQL master server (this script can be run on either of the two nodes, it will detect by itself which is the master):

```bash
/usr/share/centreon-ha/bin/move-mysql-vip-to-mysql-master.sh
```

The result should be like this, if not the script move the VIP in correct place:

```text
The VIP address is already at the right place. Nothing to do.
```

## Setting up the Centreon cluster

**Note:** unless otherwise noted, each of the following steps must be performed **on the two center nodes**.

### Configuring the Synchronization Service

The `centreon-central-sync` service requires that we define for each node in `/etc/centreon-ha/centreon_central_sync.pm` the IP address of its correspondent:

So for the server `@CENTRAL_MASTER_NAME@` we must have :

```bash
our %centreon_central_sync_config = (
    peer_addr => "@CENTRAL_SLAVE_IPADDR@"
);
1;
```

And for the server `@CENTRAL_SLAVE_NAME@` we must have :

```bash
our %centreon_central_sync_config = (
    peer_addr => "@CENTRAL_MASTER_IPADDR@"
);
1;
```

## Removing crons

Scheduled cron tasks are executed directly by the gorgone process in the highly available architecture. This ensures that they do not compete with each other on the central nodes. It is therefore necessary to delete them manually:

```bash
rm -f /etc/cron.d/centreon
rm -f /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-auto-disco
```

## Changing rights

The directories /var/log/centreon-engine and /tmp/centreon-autodisco are shared between several processes. It is necessary to modify the rights of the directories and files to ensure the proper functioning of file replication and automatic discovery of services:

```bash
chmod 775 /var/log/centreon-engine/
mkdir /var/log/centreon-engine/archives
chown centreon-engine: /var/log/centreon-engine/archives
chmod 775 /var/log/centreon-engine/archives/
chmod 664 /var/log/centreon-engine/*
chmod 664 /var/log/centreon-engine/archives/*
```

```bash
mkdir /tmp/centreon-autodisco/
chown apache: /tmp/centreon-autodisco/
chmod 775 /tmp/centreon-autodisco/
```

### Stop and disable services

The Centreon application services will no longer be launched at the server startup as it is the case for a standard installation, the clustering services will take care of it. It is therefore necessary to stop and disable these services.

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon centreon-central-sync cbd-sql
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd php-fpm centreon
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd24-httpd php-fpm centreon centreon-central-sync cbd-sql
```

</TabItem>
</Tabs>

### Redefine service startup rules

Some services should only be started on one node, but for others, it's okay or even desirable to start them on both nodes. We'll start with these services.

#### PHP service

The `php-fpm.service` service does not need to be modified, but must be enabled so that it is started automatically when the central servers are started.

Execute this command **on the two central nodes**:

```bash
systemctl enable php-fpm
```

#### Broker RRD service

The "broker-rrd" process is started via the `cbd.service`. The latter is by default driven by `centreon.service` but in this configuration, it must be detached by modifying its definition on the two central nodes:

```bash
cat > /usr/lib/systemd/system/cbd.service <<"EOF"
[Unit]
Description=Centreon Broker watchdog
After=syslog.target network.target

[Service]
ExecStart=/usr/sbin/cbwd /etc/centreon-broker/watchdog.json
ExecReload=/bin/kill -HUP $MAINPID
Type=simple
User=centreon-broker
UMask=0002

[Install]
WantedBy=multi-user.target
EOF
```

Then start it and activate it:

```bash
systemctl start cbd
systemctl enable cbd
```

#### Creating the Centreon VIP

The VIP will be added to the `@CENTRAL_VIP_IFNAME@` interface configuration on master node.
In most cases, the central VIP is the same of database VIP for 2 nodes cluster and this action has already done for the replication.

If not, execute those commands on `@CENTRAL_MASTER_NAME@`:

```bash
nmcli con mod "@CENTRAL_VIP_IFNAME@" +ipv4.addresses "@CENTRAL_VIP_IPADDR@/@CENTRAL_VIP_CIDR_NETMASK@"
nmcli connection up "@CENTRAL_VIP_IFNAME@"
```

#### Httpd service

The `httpd.service` service is by default independent of `centreon.service` but in this configuration, it must be attached to it by modifying its definition on the two central nodes:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
cat > /usr/lib/systemd/system/httpd.service <<"EOF"
[Unit]
Description=The Apache HTTP Server
PartOf=centreon.service
ReloadPropagatedFrom=centreon.service
After=centreon.service

[Service]
Type=notify
Environment=LANG=C

ExecStart=/usr/sbin/httpd $OPTIONS -DFOREGROUND
ExecReload=/usr/sbin/httpd $OPTIONS -k graceful
ExecStop=/usr/sbin/httpd $OPTIONS -k graceful-stop
# Send SIGWINCH for graceful stop
KillSignal=SIGCONT
KillMode=mixed
PrivateTmp=true

[Install]
WantedBy=centreon.service
EOF
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
cat > /usr/lib/systemd/system/httpd24-httpd.service <<"EOF"
[Unit]
Description=The Apache HTTP Server
PartOf=centreon.service
ReloadPropagatedFrom=centreon.service
After=centreon.service

[Service]
Type=notify
EnvironmentFile=/opt/rh/httpd24/root/etc/sysconfig/httpd

ExecStart=/opt/rh/httpd24/root/usr/sbin/httpd-scl-wrapper $OPTIONS -DFOREGROUND
ExecReload=/opt/rh/httpd24/root/usr/sbin/httpd-scl-wrapper $OPTIONS -k graceful
ExecStop=/opt/rh/httpd24/root/usr/sbin/httpd-scl-wrapper $OPTIONS -k graceful-stop
# We want systemd to give httpd some time to finish gracefully, but still want
# it to kill httpd after TimeoutStopSec if something went wrong during the
# graceful stop. Normally, Systemd sends SIGTERM signal right after the
# ExecStop, which would kill httpd. We are sending useless SIGCONT here to give
# httpd time to finish.
KillSignal=SIGCONT
PrivateTmp=true

[Install]
WantedBy=centreon.service
EOF
```

</TabItem>
</Tabs>

#### Gorgone service

The `gorgoned.service` service is by default independent of `centreon.service` but in this configuration, it must be attached to it by modifying its definition on the two central nodes:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
cat > /etc/systemd/system/gorgoned.service <<"EOF"
[Unit]
Description=Centreon Gorgone
PartOf=centreon.service
After=httpd.service
ReloadPropagatedFrom=centreon.service

[Service]
EnvironmentFile=/etc/sysconfig/gorgoned
ExecStart=/usr/bin/perl /usr/bin/gorgoned $OPTIONS
Type=simple
User=centreon-gorgone

[Install]
WantedBy=centreon.service
EOF
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
cat > /etc/systemd/system/gorgoned.service <<"EOF"
[Unit]
Description=Centreon Gorgone
PartOf=centreon.service
After=httpd24-httpd.service
ReloadPropagatedFrom=centreon.service

[Service]
EnvironmentFile=/etc/sysconfig/gorgoned
ExecStart=/usr/bin/perl /usr/bin/gorgoned $OPTIONS
Type=simple
User=centreon-gorgone

[Install]
WantedBy=centreon.service
EOF
```

</TabItem>
</Tabs>

#### Centreon-central-sync service

This service is specific to *Centreon HA*. Its function is to replicate configuration changes, add images via the interface, etc.

```bash
cat > /usr/lib/systemd/system/centreon-central-sync.service <<"EOF"
[Unit]
Description=Centreon Central Sync (failover only)
PartOf=centreon.service
ReloadPropagatedFrom=centreon.service
After=gorgoned.service

[Service]
EnvironmentFile=/etc/sysconfig/centreon_central_sync
ExecStart=/usr/share/centreon-ha/bin/centreon_central_sync $OPTIONS
ExecReload=/bin/kill -HUP $MAINPID
Type=simple
User=centreon

[Install]
WantedBy=centreon.service
EOF
```

#### Broker SQL service

```bash
cat > /usr/lib/systemd/system/cbd-sql.service <<"EOF"
[Unit]
Description=Centreon SQL Broker service
PartOf=centreon.service
ReloadPropagatedFrom=centreon.service
After=centreon-central-sync.service

[Service]
EnvironmentFile=/etc/sysconfig/cbd_sql
ExecStart=/usr/sbin/cbd $OPTIONS
ExecReload=/bin/kill -HUP $MAINPID
Type=simple
User=centreon-broker
UMask=0002

[Install]
WantedBy=centreon.service
EOF
```

#### Centengine service

```bash
cat > /usr/lib/systemd/system/centengine.service <<"EOF"
[Unit]
Description=Centreon Engine
PartOf=centreon.service
ReloadPropagatedFrom=centreon.service
After=cbd-sql.service

[Service]
ExecStart=/usr/sbin/centengine /etc/centreon-engine/centengine.cfg
ExecReload=/bin/kill -HUP $MAINPID
Type=simple
User=centreon-engine

[Install]
WantedBy=centreon.service
EOF
```

#### Centreontrapd service

```bash
cat > /usr/lib/systemd/system/centreontrapd.service <<"EOF"
[Unit]
Description=Centreon Trapd Daemon is a Centreon program that manage traps
PartOf=centreon.service
After=centreon.service
ReloadPropagatedFrom=centreon.service

[Service]
EnvironmentFile=/etc/sysconfig/centreontrapd
ExecStart=/usr/share/centreon/bin/centreontrapd $OPTIONS
ExecReload=/bin/kill -HUP $MAINPID
Type=simple
User=centreon

[Install]
WantedBy=centreon.service
EOF
```

#### Snmptrapd service

```bash
cat > /usr/lib/systemd/system/snmptrapd.service <<"EOF"
[Unit]
Description=Simple Network Management Protocol (SNMP) Trap Daemon.
PartOf=centreon.service
After=centreontrapd.service

[Service]
Type=notify
Environment=OPTIONS="-Lsd"
EnvironmentFile=-/etc/sysconfig/snmptrapd
ExecStart=/usr/sbin/snmptrapd $OPTIONS -f
ExecReload=/bin/kill -HUP $MAINPID

[Install]
WantedBy=centreon.service
EOF
```

### Initial launch of all services

#### Installation of the Centreon virtual IP address

Normally the VIP has already been mounted previously. Check that this is the case on the primary server defined above (normally `@CENTRAL_MASTER_NAME@`)

```bash
ip a
```

You should see the virtual IP `@CENTRAL_VIP_IPADDR@` attached to the `@CENTRAL_VIP_IFNAME@` interface appear in the return of the `ip a` command.

If this is not the case, the virtual IP address must be mounted, for example on `@CENTRAL_MASTER_NAME@` :

```bash
nmcli con mod "@CENTRAL_VIP_IFNAME@" +ipv4.addresses "@CENTRAL_VIP_IPADDR@/@CENTRAL_VIP_CIDR_NETMASK@"
nmcli con up "@CENTRAL_VIP_IFNAME@"
```

#### Taking into account the changes made to the services

In order to take into account all the previous modifications, and to activate the services (so that the start of the `centreon.service` service starts them all) it is necessary to launch these commands on the two central nodes:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
systemctl daemon-reload
systemctl enable cbd httpd gorgoned centreon-central-sync cbd-sql centengine centreontrapd snmptrapd mariadb
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
systemctl daemon-reload
systemctl enable cbd httpd24-httpd gorgoned centreon-central-sync cbd-sql centengine centreontrapd snmptrapd mariadb
```

</TabItem>
</Tabs>

And finally start them all via the `centreon.service` on the node where the VIP was mounted:

```bash
systemctl start centreon
```

Then check the status of all services:

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```bash
systemctl status cbd httpd gorgoned centreon-central-sync cbd-sql centengine centreontrapd snmptrapd
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```bash
systemctl status cbd httpd24-httpd gorgoned centreon-central-sync cbd-sql centengine centreontrapd snmptrapd
```

</TabItem>
</Tabs>

After this step, all resources must be active in the same place, and the platform must be functional and redundant. If not, refer to the troubleshooting guide in the next paragraph.

## Standard manual HA operation

### Switch Centreon services from one node to another

This script can be run from any Centreon node, but you must (for now) specify the target node. For example to change the active node from `@CENTRAL_MASTER_NAME@` to `@CENTRAL_SLAVE_NAME@` :

```bash
/usr/share/centreon-ha/bin/set-centreon-master.sh @CENTRAL_SLAVE_NAME@
```

The expected outcome is:

```text
Stopping centreon.service on @CENTRAL_MASTER_NAME@...
Unmounting VIP on @CENTRAL_MASTER_NAME@...
Adding vip to @CENTRAL_SLAVE_NAME@...
Starting centreon.service on @CENTRAL_SLAVE_NAME@...
```

If we try to switch to the node that is already active, we will get :

```text
Host @CENTRAL_MASTER_NAME@ is already the current master :-)
```

### Reverse MySQL SLAVE/MASTER roles

This script can be launched from any node, this time we do not specify the name of the target server:

```bash
/usr/share/centreon-ha/bin/mysql-switch-slave-master.sh
```

The expected outcome is:

```text
Locking master database on @DB_SLAVE_NAME@
Waiting Relay log bin to finish proceed (TIMEOUT = 60sec)
Removing slave thread on @DB_MASTER_NAME@
Recording binlog file and position from @DB_MASTER_NAME@
Unlocking databases on @DB_MASTER_NAME@
Setting and starting slave thread on @DB_SLAVE_NAME@
We have to move the VIP address
```

### Checking database synchronization

The status of MySQL replication can be checked at any time with the command `mysql-check-status.sh` :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Expected outcome:

```bash
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

## Integrating pollers

You can now [add your pollers](./integrating-pollers.md) and start monitoring!
