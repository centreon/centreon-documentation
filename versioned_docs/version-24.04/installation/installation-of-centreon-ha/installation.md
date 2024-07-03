---
id: installation
title: Installing Centreon HA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Debian 12 and MySQL 8 are not supported yet for HA installations using Centreon version 24.04. If you wish to install an HA platform with this configuration, please contact your Centreon sales representative.

## Before you start

### Disclaimer

Your HA must be installed by Centreon.
This procedure is geared towards expers users who have a strong knowledge of the Pacemaker-Corosync clustering tools, of networks, of Linux OS and of Centreon.

> **WARNING:** Anyone following this procedure does so at their own risk. Under no circumstances shall Centreon be liable for any breakdown or data loss.

See also "[What is supported, and what isn't?](faq.md#what-is-supported-and-what-isnt)".

### Convention for names and IP addresses

In this procedure, we will refer to characteristics that are bound to change from one platform to another (such as IP addresses) by the following macros:

* `@CENTRAL_ACTIVE_IPADDR@`: active central server's IP address
* `@CENTRAL_ACTIVE_NAME@`: active central server's name (must be identical to `hostname -s`)
* `@CENTRAL_PASSIVE_IPADDR@`: passive central server's IP address
* `@CENTRAL_PASSIVE_NAME@`: passive central server's name (must be identical to `hostname -s`)
* `@QDEVICE_IPADDR@`: quorum device's IP address
* `@QDEVICE_NAME@`: quorum device's name (must be identical to `hostname -s`)
* `@VIP_IPADDR@`: virtual IP address of the central servers cluster
* `@VIP_IFNAME@`: network device carrying the central servers cluster's VIP (name of the interface the VIP must send the flows to. The interface must have the same name on both central nodes).
* `@VIP_CIDR_NETMASK@`: subnet mask length in bits (e.g. 24)
* `@VIP_BROADCAST_IPADDR@`: central servers cluster's VIP broadcast address
* `@CENTREON_CLUSTER_PASSWD@`: `hacluster` user's password
* `@DATABASE_ACTIVE_IPADDR@`: active database server's IP address
* `@DATABASE_ACTIVE_NAME@`: active database server's FQDN (must be identical to: `hostname -s`)
* `@DATABASE_PASSIVE_IPADDR@`: passive database server's IP address 
* `@DATABASE_PASSIVE_NAME@`: passive database server's FQDN (must be identical to: `hostname -s`)
* `@DB_REPL_USER@`:  account that will perform the database replication (default: `centreon-repl`)
* `@DB_REPL_PASSWD@`: password for this account
* `@DB_CENTREON_USER@`: Account that the central servers will use to log in to the databases (to display the interface, to insert data into the databases, etc). The default value is `centreon`.
* `@DB_CENTREON_PASSWD@`: Password for this account
* `@VIP_SQL_IPADDR@`: virtual IP address of the SQL cluster
* `@VIP_SQL_IFNAME@`: network device carrying the SQL cluster's VIP (name of the interface the central server must send the flows to. The interface must have the same name on both database nodes).
* `@VIP_SQL_CIDR_NETMASK@`: SQL Cluster subnet mask length in bits (e.g. 24)
* `@VIP_SQL_BROADCAST_IPADDR@`: cluster's VIP SQL broadcast address

During the installation procedure, central node 1 will be the active node and central node 2 will be the passive node. Of course, the roles will be able to be switched later.

### How should I organize my Centreon HA?

Ideally, the two central nodes should be running on different geographical sites. The quorum device should communicate with both sites independently. All members of the cluster (active and passive nodes, quorum device) need to communicate with each other.

To reduce the probability of an interruption of service occurring, it is not recommended to set up a Centreon HA cluster where all your servers are running in the same datacenter or (even more so) within the same rack.

In the case of a highly available architecture the Centreon central servers must not monitor resources. If this recommendation is not followed, the centengine service will take too long to restart and it may cause the functional Centreon group to failover.

Make sure to give your servers clear, relevant hostnames so that you know which is which.

## Step 1: Prepare the elements of the cluster

### Installation checklist

#### Set up VIPs for the central servers and for the databases

* Reserve an IP address in your network to act as a VIP so that pollers can always send data to the active central node.
* Reserve another VIP through which the active central server will access the active database server.

#### Install the central servers

* Node 1 can either be a freshly installed Centreon or an existing Centreon with a remote database that already monitors resources (in that case, it should be running smoothly and without errors). If your existing Centreon has a local database, you need to transform it into a remote database first.
* Node 2 must be a freshly installed Centreon.

Using the procedure for an installation with remote databases, [install the central server(s) from packages](https://docs.centreon.com/docs/installation/installation-of-a-central-server/using-packages). Both central servers must have the exact same version of Centreon ([update](https://docs.centreon.com/docs/update/update-centreon-platform) your platform if needed). In all cases, at this stage, make central node 1 point to database node 1 and central node 2 point to database node 2. [Both central nodes will be made to point to the database VIP](#step-4-modifying-the-centreon-configuration-files) once database replication is set up and and the resources in the **centreon** group only run on the active node.

* Both central servers should have an **admin** account with the same password.
* If you have an IT or Business edition, remember that license files for HA are specific. Please contact your Centreon sales representative to obtain your license files.

#### Check the databases

On the database servers, it is mandatory that **about 5 GB free space has been spared on the LVM volume group** that carries the MariaDB data directory (`/var/lib/mysql` mount point by default).

The output of the `vgs` command must look like this (notice the value under `VFree`):

```text
  VG                    #PV #LV #SN Attr   VSize   VFree 
  centos_centreon-c1      1   5   0 wz--n- <31,00g <5,00g
```

* MariaDB files `ibdata*` and `ib_logfile*` must be in the "datadir" directory or in a subdirectory (scripts `centreondb-smooth-backup.sh` and `mysql-sync-bigdb.sh` are not compatible with this operation);
* MariaDB files `log-bin*` and `relay-log*` can be located in a directory (or a subdirectory) different from "datadir". They can also be on a different logical volume (`lvm`) than "datadir". However, the logical volume must be located in the volume group where "datadir" is stored.

> **WARNING:** If these particular prerequisites are not effective, the database synchronization method described below will not work.

#### Install the pollers

Install your host machines and [install the pollers from packages](https://docs.centreon.com/docs/installation/installation-of-a-poller/using-packages) or [using the unattended script](https://docs.centreon.com/docs/installation/installation-of-a-poller/unattended-install-poller/). Do not register the pollers to a central server yet, this will be done later.

#### Choose a quorum device

Choose which server in your infrastructure should act as a quorum device. This can be a poller. (The actual configuration will be done later: see [Prepare the server that will function as the quorum device](#prepare-the-server-that-will-function-as-the-quorum-device) and [Define the quorum device](#define-the-quorum-device).)

In order to adhere to best practices and be as resilient as possible, the quorum server should be at a different site than the other nodes, with independent network connections.

### Configure centreon-broker on the central servers

#### Change the link to the cbd service

On a standard Centreon platform, there are two `cbd` services:

* `central-broker-master`: also called "central broker" or "SQL broker", redirects input-output from pollers to the database, to RRD broker, and so on.
* `central-rrd-master`: also called "RRD broker", receives the stream from the central broker and updates the RRD binary data files (used to display graphs).

In the context of a Centreon HA cluster, both broker processes will be handled by a separate service, managed by the cluster.

* `central-broker-master` is replaced by `cbd_central_broker` (linked to *systemd* service `cbd-sql`)
* `central-rrd-master` is replaced by `cbd_rrd` (linked to *systemd* `cbd` service), the standard broker service for Centreon.

On both central servers:

1. Go to **Configuration > Pollers > Broker configuration**, then select **central-broker-master**.
2. On the **General** tab, in the **Main options** section, set **Link to cbd service** to **No**.

This will result in the **Last Update** column of the **Configuration > Pollers > Pollers** page to become yellow, as Broker is temporarily stopped. An error will also appear in the **Pollers** section of the header bar: this is normal. Things will come back to normal at the end of the installation procedure (after you have defined all the resource groups, including **sql_broker**).

#### Double the output stream toward RRD

In the event of a cluster switch, you will expect the newly elected active central server to be able to display the metrics graphs, which requires all RRD data files to be up to date on both nodes. In order to fulfill this condition, you will double the central broker output stream and send it to both RRD broker processes.

1. Go to **Configuration > Pollers > Broker configuration**, then select **central-broker-master**.
2. On the **Output** tab, select **Output 2 - IPv4**. The name of this output is **centreon-broker-master-rrd**.
3. In the **Host to connect to** field, replace **localhost** with the IP address of the active node (`@CENTRAL_ACTIVE_IPADDR@`).
4. Select **TCP - IPv4** from the dropdown list at the top of the page, then click **Add**.
5. Fill in the following details for this new output:

| Output IPv4        |                           |
| ------------------ | ------------------------- |
| Name               | centreon-broker-slave-rrd |
| Connection port    | 5670                      |
| Host to connect to | `@CENTRAL_PASSIVE_IPADDR@`  |

#### Export the configuration

Once the above actions have been done ([Change the link to the cbd service](#change-the-link-to-the-cbd-service) and [Double the output stream toward RRD](#double-the-output-stream-toward-rrd)), export the configuration of the central server to apply these changes. The **Move Export Files** option must be checked.

All the above actions should be applied either to both nodes, or to central node 1 only and then the exported files should be copied to central node 2:

```bash
rsync -a /etc/centreon-broker/*json @CENTRAL_PASSIVE_IPADDR@:/etc/centreon-broker/
```

Check that the files have been properly copied to node 2. If you just copied the json files from node 1 to node 2, for the moment, the changes do not appear in node 2's interface.

### Customize the poller reload command

In Centreon, the central broker daemon is reloaded every time you export your configuration. In the context of a HA setup, the central broker service is managed by the cluster and is called `cbd-sql`, [as described earlier](#change-the-link-to-the-cbd-service). This means that the service that needs to be reloaded when you export the configuration is `cbd-sql`, and no longer `cbd`: you need to configure this on central node 1.

1. Go to **Configuration > Pollers > Pollers**, then click on the central server.
2. In the **Centreon Broker** section, set the **Centreon Broker reload command** parameter to `service cbd-sql reload`.

### Tune kernel network settings

In order to improve the reliability of the cluster, and since Centreon HA only supports IPv4, we recommend applying the following kernel settings to all your Centreon servers (including pollers):

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

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

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

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
</Tabs>

### Allow for server name resolution

So that the Centreon HA cluster can stay in operation in the event of a DNS service breakdown, all members of the cluster must know each other by name, using `/etc/hosts`.

Run the following command on the two central nodes, on the quorum device, and on both database servers:

```bash
cat >/etc/hosts <<"EOF"
127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4
@CENTRAL_ACTIVE_IPADDR@ @CENTRAL_ACTIVE_NAME@
@CENTRAL_PASSIVE_IPADDR@ @CENTRAL_PASSIVE_NAME@
@DATABASE_ACTIVE_IPADDR@ @DATABASE_ACTIVE_NAME@
@DATABASE_PASSIVE_IPADDR@ @DATABASE_PASSIVE_NAME@
@QDEVICE_IPADDR@ @QDEVICE_NAME@
EOF
```

### Install HA tools on the central servers

Install the following packages on both central nodes. They provide all the files and dependencies required by a Centreon central cluster.

<Tabs groupId="sync">
<TabItem value="Alma Linux 8" label="Alma Linux 8">

```bash
dnf config-manager --enable ha
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="RHEL 8" label="RHEL 8">

> To install Pacemaker and Corosync packages on RedHat systems, servers must have access to the **Red Hat Enterprise Linux High Availability** licensed repository.

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
<TabItem value="Alma 9" label="Alma 9">

```bash
dnf config-manager --enable highavailability
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

> To install Pacemaker and Corosync packages on RedHat systems, servers must have access to the **Red Hat Enterprise Linux High Availability** licensed repository.

```bash
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
subscription-manager repos --enable rhel-9-for-x86_64-highavailability-rpms
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Oracle Linux 9" label="Oracle Linux 9">

```bash
dnf config-manager --enable ol9_addons
dnf install centreon-ha-web pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt update && apt install centreon-ha-web pcs pacemaker corosync corosync-qdevice 
```

</TabItem>
</Tabs>

### Install HA tools on the database servers

Install the following packages on both database nodes.

<Tabs groupId="sync">
<TabItem value="Alma Linux 8" label="Alma Linux 8">

```bash
dnf config-manager --enable ha
dnf install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

</TabItem>
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
<TabItem value="Alma 9" label="Alma 9">

```bash
dnf config-manager --enable highavailability
dnf install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

```bash
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
subscription-manager repos --enable rhel-9-for-x86_64-highavailability-rpms
dnf install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Oracle Linux 9" label="Oracle Linux 9">

```bash
dnf config-manager --enable ol9_addons
dnf install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt update && apt install centreon-ha-common pcs pacemaker corosync corosync-qdevice 
```

</TabItem>
</Tabs>

### Configure SSH keys exchange

SSH key-based authentication must be set up so that files and commands can be sent:

* from one central node to another by the **centreon** Unix account.
* from one database node to another by the **mysql** Unix account.

There are two ways of exchanging such keys:

* By using the `ssh-copy-id` command: needs to be able to log in to remote host using a password. It is however unsafe for such system accounts to have a password authentication available. If you choose this method, we advise you to revoke the password afterward with these commands: `passwd -d centreon` and `passwd -d mysql`.
* By manually copying the public key in `~/.ssh/authorized_keys`. This method is safer.

The second method is documented below.

#### **centreon** account

Switch to `centreon`'s bash environment on both central nodes:

```bash
su - centreon
```

Then run this command on both central nodes:

```bash
ssh-keygen -t ed25519 -a 100
```

Display the contents of the key file in your terminal using this command:

```bash
cat ~/.ssh/id_ed25519.pub
```

Once done, copy the content of the public key file displayed by `cat` and paste it to the `~/.ssh/authorized_keys` file (must be created) on the other node, and then apply the correct file permissions (still as user `centreon`):

```bash
chmod 600 ~/.ssh/authorized_keys
```

The key exchange must be validated by an initial connection from each node to the other in order to accept and register the peer node's SSH fingerprint (still as user `centreon`):

```bash
ssh <peer node hostname>
```

Exit the SSH session (`Ctrl D`), then exit the `centreon` session by typing `exit` or `Ctrl D`.

#### **mysql** account

For the `mysql` account, the procedure is slightly different because this user normally has neither a home directory nor the ability to open a Shell session. Run the following commands on both database nodes:

```bash
systemctl stop mysql
mkdir /home/mysql
chown mysql: /home/mysql
usermod -d /home/mysql mysql
usermod -s /bin/bash mysql
systemctl start mysql
su - mysql
```

Once in `mysql`'s `bash` environment, run these commands on both database nodes:

```bash
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub
```

Once done, copy the content of the public key file displayed by `cat` and paste it to `~/.ssh/authorized_keys` (must be created) on the other database node, and then apply the correct file permissions (still as user`mysql`):

```bash
chmod 600 ~/.ssh/authorized_keys
```

The key exchange must be validated by an initial connection from each database node to the other in order to accept and register the peer node's SSH fingerprint (still as user `mysql`):

```bash
ssh <peer node hostname>
```

Exit the SSH session (`Ctrl D`), then exit the `mysql` session by typing `exit` or `Ctrl D`.

### Open network flows

In addition to the necessary flows described in the [official documentation](https://docs.centreon.com/docs/installation/technical/#tables-of-network-flows),
you will need to open the following flows:

| From                           | Destination                    | Protocol | Port     | Application                                                                                |
| :----------------------------- | :----------------------------- | :------- | :------- | :----------------------------------------------------------------------------------------- |
| Active Central Server          | Passive Central Server         | SSH      | TCP 22   | Synchronization of configuration files (must also be open from passive to active node) |
| Active Central Server          | Passive Central Server         | BDDO     | TCP 5670 | RRDs synchronization (must also be open from passive to active node)                   |
| Active Database Server         | Passive Database Server        | MySQL    | TCP 3306 | MySQL synchronization (must also be open from passive to active node)                  |
| Active Database Server         | Passive Database Server        | SSH      | TCP 22   | MySQL synchronization (must also be open from passive to active node)                  |
| Central Servers + DB + QDevice | Central Servers + DB + QDevice | Corosync | UDP 5404 | Communication inside the cluster (Multicast)                                               |
| Central Servers + DB + QDevice | Central Servers + DB + QDevice | Corosync | UDP 5405 | Communication inside the cluster (Unicast)                                                 |
| Central Servers + DB + QDevice | Central Servers + DB + QDevice | PCS      | TCP 2224 | Communication inside the cluster                                                           |
| Central Servers + DB + QDevice | Central Servers + DB + QDevice | Corosync | TCP 5403 | Communication with the QDevice                                                             |

## Step 2: Set up the database replication

An active-passive database cluster will be set up so that your data is synchronized in real time.

* If one of your databases contains data, it must become the active database node.
* If both your databases are blank, either can be the active node.

**Note**: unless otherwise stated, each of the following steps must be run on both database nodes.

### Configuring MariaDB

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

For both optimization and cluster reliability purposes, you need to add these tuning options to the MariaDB configuration in the `/etc/my.cnf.d/server.cnf` file. By default, the `[server]` section of this file is empty. Paste the following lines (some need to be modified) into this section:

```ini
[server]
server-id=1 # SET TO 1 FOR DATABASE NODE 1 AND 2 FOR DATABASE NODE 2
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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

For both optimization and cluster reliability purposes, you need to add these tuning options to the MariaDB configuration in the `/etc/my.cnf.d/server.cnf` file. By default, the `[server]` section of this file is empty. Paste the following lines (some need to be modified) into this section:

```ini
[server]
server-id=1 # SET TO 1 FOR DATABASE NODE 1 AND 2 FOR DATABASE NODE 2
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
max_allowed_packet=128M
# Uncomment for 4 Go Ram
#innodb_buffer_pool_size=512M
# Uncomment for 8 Go Ram
#innodb_buffer_pool_size=1G
```

In addition, replace the [mysqld] section with :

```
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
log-error=/var/log/mariadb/mariadb.log
pid-file=/var/lib/mysql/mysql.pid
```

then create the directory and corresponding log file:

```shell
mkdir /var/log/mariadb
touch /var/log/mariadb/mariadb.log
chown -R mysql: /var/log/mariadb
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

For both optimization and cluster reliability purposes, you need to add these tuning options to the MariaDB configuration in the `/etc/mysql/mariadb.conf.d/50-server.cnf` file. By default, the `[server]` section of this file is empty. Paste the following lines (some need to be modified) into this section:

```ini
[server]
server-id=1 # SET TO 1 FOR DATABASE NODE 1 AND 2 FOR DATABASE NODE 2
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

> **Important**: The value of the `server-id` option must be different from one server to the other.

**Reminder**: Remember to uncomment the right value for `innodb_buffer_pool_size` according to your own servers' memory size.

To apply the new configuration, restart the database server:

```bash
systemctl restart mysql
```

Make sure the restart went well:

```bash
systemctl status mysql
```

> **Warning:** other files in `/etc/my.cnf.d/`, such as `centreon.cnf`, will be ignored from now on. Any customization will have to be added to `server.cnf`.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

> **Warning:** remember to change the parameter `Mysql configuration file path` to `/etc/my.cnf.d/server.cnf` in **Administration > Parameters > Backup** on central node 1.

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

> **Warning:** remember to change the parameter `Mysql configuration file path` to `/etc/my.cnf.d/server.cnf` in **Administration > Parameters > Backup** on central node 1.

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

> **Warning:** remember to change the parameter `Mysql configuration file path` to `/etc/mysql/mariadb.conf.d/50-server.cnf` in **Administration > Parameters > Backup** on central node 1.

</TabItem>
</Tabs>

### Creating the `centreon` MariaDB account

First log in to MariaDB as `root` on both database servers (using the password you have defined during installation, when executing the **mysql_secure_installation** script):

```bash
mysql -p
```

Then, on both database servers, paste the following SQL commands to the MariaDB prompt to create and/or configure the account that the central servers will use to connect to the databases (to display the interface, to insert data into the databases, etc). You may have created this account at [step 6 of the web installation](../web-and-post-installation.md#step-6-database-information). The default name for this account is `centreon`. Replace the macros first:

```sql
CREATE USER '@DB_CENTREON_USER@'@'@DATABASE_PASSIVE_IPADDR@' IDENTIFIED BY '@DB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@DB_CENTREON_USER@'@'@DATABASE_PASSIVE_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@DB_CENTREON_USER@'@'@DATABASE_PASSIVE_IPADDR@';

CREATE USER '@DB_CENTREON_USER@'@'@DATABASE_ACTIVE_IPADDR@' IDENTIFIED BY '@DB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@DB_CENTREON_USER@'@'@DATABASE_ACTIVE_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@DB_CENTREON_USER@'@'@DATABASE_ACTIVE_IPADDR@';
```

Add the following privileges so that the status of this account can be seen from the central cluster too.

```sql
CREATE USER '@DB_CENTREON_USER@'@'@CENTRAL_PASSIVE_IPADDR@' IDENTIFIED BY '@DB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@DB_CENTREON_USER@'@'@CENTRAL_PASSIVE_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@DB_CENTREON_USER@'@'@CENTRAL_PASSIVE_IPADDR@';

CREATE USER '@DB_CENTREON_USER@'@'@CENTRAL_ACTIVE_IPADDR@' IDENTIFIED BY '@DB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon.* TO '@DB_CENTREON_USER@'@'@CENTRAL_ACTIVE_IPADDR@';
GRANT ALL PRIVILEGES ON centreon_storage.* TO '@DB_CENTREON_USER@'@'@CENTRAL_ACTIVE_IPADDR@';
```

### Creating the MariaDB replication account

Still in the same prompt, create the account that will perform the database replication (its default name is `centreon-repl`):

```sql
GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@DB_REPL_USER@'@'localhost' IDENTIFIED BY '@DB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@DB_REPL_USER@'@'@DATABASE_PASSIVE_IPADDR@' IDENTIFIED BY '@DB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@DB_REPL_USER@'@'@DATABASE_ACTIVE_IPADDR@' IDENTIFIED BY '@DB_REPL_PASSWD@';
```

Add the following privileges so that the status of this account can be seen from the central cluster too.

```sql
GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@DB_REPL_USER@'@'@CENTRAL_PASSIVE_IPADDR@' IDENTIFIED BY '@DB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@DB_REPL_USER@'@'@CENTRAL_ACTIVE_IPADDR@' IDENTIFIED BY '@DB_REPL_PASSWD@';
```

### Configuring environment variables for the MariaDB scripts

In the `/etc/centreon-ha/mysql-resources.sh` file, configure environment variables so that the Centreon HA scripts dedicated to MariaDB can work on every node. This must be done on both central nodes and on both database nodes. These variables must be assigned the chosen values for the macros.

```bash
#!/bin/bash

###############################
# Database access credentials #
###############################

DBHOSTNAMEMASTER='@DATABASE_ACTIVE_NAME@'
DBHOSTNAMESLAVE='@DATABASE_PASSIVE_NAME@'
DBREPLUSER='@DB_REPL_USER@'
DBREPLPASSWORD='@DB_REPL_PASSWD@'
DBROOTUSER='@DB_REPL_USER@'
DBROOTPASSWORD='@DB_REPL_PASSWD@'
CENTREON_DB='centreon'
CENTREON_STORAGE_DB='centreon_storage'

###############################
```

To make sure that all the previous steps have been successful, and that the correct names, logins and passwords have been entered in the configuration bash file, run this command on both database nodes:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The expected output is:

```text
Connection SLAVE Status '@DATABASE_ACTIVE_NAME@' [OK]
Connection SLAVE Status '@DATABASE_PASSIVE_NAME@' [OK]
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
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Now that everything is configured correctly, enable the `read_only` on both database servers by uncommenting the **read_only** instruction in the `/etc/my.cnf.d/server.cnf` file (i.e., by removing the `#` at the beginning of the line). The beggining of the `[server]` section should now look like this:

* Active database node:

```ini
[server]
server-id=1
read_only
log-bin=mysql-bin
```

* Passive database node:

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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Now that everything is configured correctly, enable the `read_only` on both database servers by uncommenting the **read_only** instruction in the `/etc/my.cnf.d/server.cnf` file (i.e., by removing the `#` at the beginning of the line). The beggining of the `[server]` section should now look like this:

* Active database node:

```ini
[server]
server-id=1
read_only
log-bin=mysql-bin
```

* Passive database node:

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

Now that everything is configured correctly, enable the `read_only` on both database servers by uncommenting the **read_only** instruction in the `/etc/mysql/mariadb.conf.d/50-server.cnf` file (i.e., by removing the `#` at the beginning of the line). The beggining of the `[server]` section should now look like this:

* Active database node

```ini
[server]
server-id=1
read_only
log-bin=mysql-bin
```

* Passive database node

```ini
[server]
server-id=2
read_only
log-bin=mysql-bin
```

Next, apply this change by restarting MariaDB on both nodes:

```bash
systemctl restart mariadb
```

</TabItem>
</Tabs>

### Synchronizing the databases and enabling MariaDB replication

In the process of synchronizing the databases, you will first stop the passive database process so that its data can be overwritten by the active database node's data.

> Important: If you have existing data, make sure you synchronize the database with the data onto the blank database (i.e. the database that contains data must be the active node), and not the other way round.

Run this command **on the passive node**:

```bash
systemctl stop mysql
```

It is important to make sure that MariaDB is completely shut down. Run this command on the passive node and check that it returns no output:

```bash
ps -ef | grep mariadb[d]
```

In case one or more processes are still alive, run the following command (it will prompt for the MariaDB root password):

```bash
mysqladmin -p shutdown
```

Once the database service is stopped **on the passive database node**, run the synchronization script **from the active database node**:

```bash
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

This script will perform the following actions:

* Check that MariaDB is stopped on the secondary node.
* Stop MariaDB on the primary node.
* Mount an LVM snapshot on the same volume group that holds `/var/lib/mysql` (or whatever mount point holds the MariaDB data files).
* Start MariaDB again on the primary node.
* Record the current position in the binary log.
* Disable the `read_only` mode on the active database node (this node will now be able to write to its database). The passive database node stays in `read_only` mode: only the replication process can insert data there.
* Synchronize/overwrite all the data files (except for the `mysql` system database).
* Unmount the LVM snapshot.
* Create the replication thread that will keep both databases synchronized.

This script's output is very verbose and you can't expect to understand everything, so to make sure it went well, focus on the last lines of its output, checking that it looks like this:

```text
Umount and Delete LVM snapshot
  Logical volume "dbbackupdatadir" successfully removed
Start MySQL Slave
Start Replication
Id	User	Host	db	Command	Time	State	Info	Progress
[variable number of lines]
```

The important thing to check is that `Start MySQL Slave` and `Start Replication` are present and are not followed by any errors.

In addition, the output of this command must display only `OK` results:

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

The expected output is:

```text
Connection MASTER Status '@DATABASE_ACTIVE_NAME@' [OK]
Connection SLAVE Status '@DATABASE_PASSIVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

## Step 3: Set up the Centreon cluster

**Note**: Unless otherwise stated, each of the following steps must be run **on both central nodes**.

### Configure the file synchronization service

Each central node must know the IP address of the other central node so that data can be synced between them. To be more specific, the `centreon-central-sync` file synchronization service needs the IP address of the peer node to be entered in its configuration file (`/etc/centreon-ha/centreon_central_sync.pm`).

So, on the active central server, the configuration file should look like this:

```perl
our %centreon_central_sync_config = (
    peer_addr => "@CENTRAL_PASSIVE_IPADDR@"
);
1;
```

And on the passive central server:

```perl
our %centreon_central_sync_config = (
    peer_addr => "@CENTRAL_ACTIVE_IPADDR@"
);
1;
```

### Remove legacy Centreon cron jobs

In a high-availability setup, all cron-based scheduled tasks are managed by the gorgone daemon. This means that all Centreon-related crons on both central nodes are unnecessary and must be removed from the **/etc/cron.d/** directory, otherwise the metrics will be incorrect. Run the following commands:

```bash
rm -f /etc/cron.d/centreon
rm -f /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-auto-disco
rm -f /etc/cron.d/centreon-ha-mysql
```

### Modify permissions on directories

Modifications must be made to the permissions for the `/var/log/centreon-engine` and `/tmp/centreon-autodisco` directories. This is mandatory so that file sync and discovery scheduled tasks are fully functional.

* Files synchronization

```bash
chmod 775 /var/log/centreon-engine/
mkdir /var/log/centreon-engine/archives
chown centreon-engine: /var/log/centreon-engine/archives
chmod 775 /var/log/centreon-engine/archives/
find /var/log/centreon-engine/ -type f -exec chmod 664 {} \;
find /usr/share/centreon/www/img/media -type d -exec chmod 775 {} \;
find /usr/share/centreon/www/img/media -type f \( ! -iname ".keep" ! -iname ".htaccess" \) -exec chmod 664 {} \;
```

* Services discovery

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
mkdir /tmp/centreon-autodisco/
chown apache: /tmp/centreon-autodisco/
chmod 775 /tmp/centreon-autodisco/
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

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

### Stop and disable services

The central nodes and the database nodes must no longer launch some services at boot time: this will be done by the clustering tools, and only them.

#### On each central node

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

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
</Tabs>

At this point, you no longer have access to the central servers' interfaces (as you have stopped the corresponding service). The interfaces will be up again at the end of the installation procedure.

#### On each database node

```bash
systemctl stop mysql
systemctl disable mysql
```

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

By default, the `mysql` service is enabled in both systemd and system V perspectives, so you should make sure it is disabled:

```bash
chkconfig mysql off
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

By default, the `mysql` service is enabled in both systemd and system V perspectives, so you should make sure it is disabled:

```bash
chkconfig mysql off
```

</TabItem>
<TabItem value="Debian 11 " label="Debian 11">

By default, the `mysql` service is enabled in both systemd and system V perspectives, so you should make sure it is disabled:

```bash
update-rc.d -f mariadb remove
```

</TabItem>
</Tabs>

### Activate the clustering services

Start `pcsd` on the central and database nodes:

```bash
systemctl start pcsd
```

### Prepare the server that will function as the quorum device

You can use one of your pollers to play the role of quorum device.

> **WARNING:** Make sure Selinux and Firewalld are disabled on this machine.

Run the following commands to install all required packages on the quorum device:

<Tabs groupId="sync">
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
<TabItem value="Alma Linux 9" label="Alma Linux 9">

```bash
dnf config-manager --enable ha
dnf install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

```bash
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
subscription-manager repos --enable rhel-9-for-x86_64-highavailability-rpms
dnf install pcs corosync-qnetd
systemctl start pcsd.service
systemctl enable pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

</TabItem>
<TabItem value="Oracle Linux 9" label="Oracle Linux 9">

```bash
dnf config-manager --enable ol9_addons
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
</Tabs>

Here is the expected output of the `qdevice status` command:

```shell
[root@@QDEVICE_NAME@ ~]# pcs qdevice status net --full
QNetd address:                  *:5403
TLS:                            Supported (client certificate required)
Connected clients:              0
Connected clusters:             0
Maximum send/receive size:      32768/32768 bytes
```

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Modify the parameter `COROSYNC_QNETD_OPTIONS` in the file `/etc/sysconfig/corosync-qnetd` to make sure the service will be listening to the connections on Ipv4 only.

```bash
COROSYNC_QNETD_OPTIONS="-4"
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
COROSYNC_QNETD_OPTIONS="-4"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Modify the parameter `COROSYNC_QNETD_OPTIONS` in the file `/etc/default/corosync-qnetd` to make sure the service will be listening to the connections on Ipv4 only.

```bash
COROSYNC_QNETD_OPTIONS="-4"
```

</TabItem>
</Tabs>

### Authenticate the hacluster user to the cluster's members

A user called **hacluster** has been automatically created when you installed Pacemaker and Corosync. This user will run the Corosync and Pacemaker processes on all 5 members of the cluster.
For the sake of simplicity, the **hacluster** user will be assigned the same password on both central nodes, on both database servers and on the quorum device. Run the following command on each machine and set the password you want.

```bash
passwd hacluster
```

Now that all members of the cluster (both central nodes, both database nodes and the quorum device server) share the same password, run this command **only on one of the central nodes** in order to authenticate the **hacluster** user to all members of the cluster.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs host auth \
    "@CENTRAL_ACTIVE_NAME@" \
    "@CENTRAL_PASSIVE_NAME@" \
    "@DATABASE_ACTIVE_NAME@" \
    "@DATABASE_PASSIVE_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@'
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs host auth \
    "@CENTRAL_ACTIVE_NAME@" \
    "@CENTRAL_PASSIVE_NAME@" \
    "@DATABASE_ACTIVE_NAME@" \
    "@DATABASE_PASSIVE_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@'
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

On Debian, the cluster is autoconfigured with default values. In order to install our cluster, we need to remove the default values using the following command:

```bash
pcs cluster destroy
```

Then you can start the authentication of the cluster:

```bash
pcs host auth \
    "@CENTRAL_ACTIVE_NAME@" \
    "@CENTRAL_PASSIVE_NAME@" \
    "@DATABASE_ACTIVE_NAME@" \
    "@DATABASE_PASSIVE_NAME@" \
    "@QDEVICE_NAME@" \
    -u "hacluster" \
    -p '@CENTREON_CLUSTER_PASSWD@'
```
 
</TabItem>
</Tabs>

If the authentication has succeeded on all nodes, you will get a message similar to this:

```shell
@CENTRAL_PASSIVE_NAME@: Authorized
@CENTRAL_PASSIVE_NAME@: Authorized
@DATABASE_ACTIVE_NAME@: Authorized
@DATABASE_PASSIVE_NAME@: Authorized
@QDEVICE_NAME@: Authorized
```

### Create the cluster

The following command creates the cluster. Run it **only on one of the central nodes**.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs cluster setup \
    centreon_cluster \
    "@CENTRAL_ACTIVE_NAME@" \
    "@CENTRAL_PASSIVE_NAME@" \
    "@DATABASE_ACTIVE_NAME@" \
    "@DATABASE_PASSIVE_NAME@" \
    --force
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs cluster setup \
    centreon_cluster \
    "@CENTRAL_ACTIVE_NAME@" \
    "@CENTRAL_PASSIVE_NAME@" \
    "@DATABASE_ACTIVE_NAME@" \
    "@DATABASE_PASSIVE_NAME@" \
    --force
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs cluster setup \
    centreon_cluster \
    "@CENTRAL_ACTIVE_NAME@" \
    "@CENTRAL_PASSIVE_NAME@" \
    "@DATABASE_ACTIVE_NAME@" \
    "@DATABASE_PASSIVE_NAME@" \
    --force
```

</TabItem>
</Tabs>

You should get the following message:

```shell
[root@@CENTRAL_ACTIVE_IPNAME@ ~]# pcs cluster setup     centreon_cluster     "@CENTRAL_ACTIVE_IPADDR@"     "@CENTRAL_PASSIVE_IPADDR@"     --force
No addresses specified for host '@CENTRAL_ACTIVE_IPADDR@', using '@CENTRAL_ACTIVE_IPADDR@'
No addresses specified for host '@CENTRAL_PASSIVE_IPADDR@', using '@CENTRAL_PASSIVE_IPADDR@'
Destroying cluster on hosts: '@CENTRAL_ACTIVE_IPADDR@', '@CENTRAL_PASSIVE_IPADDR@'...
@CENTRAL_ACTIVE_IPADDR@: Successfully destroyed cluster
@CENTRAL_PASSIVE_IPADDR@: Successfully destroyed cluster
Requesting remove 'pcsd settings' from '@CENTRAL_ACTIVE_IPADDR@', '@CENTRAL_PASSIVE_IPADDR@'
@CENTRAL_ACTIVE_IPADDR@: successful removal of the file 'pcsd settings'
@CENTRAL_PASSIVE_IPADDR@: successful removal of the file 'pcsd settings'
Sending 'corosync authkey', 'pacemaker authkey' to '@CENTRAL_ACTIVE_IPADDR@', '@CENTRAL_PASSIVE_IPADDR@'
@CENTRAL_ACTIVE_IPADDR@: successful distribution of the file 'corosync authkey'
@CENTRAL_ACTIVE_IPADDR@: successful distribution of the file 'pacemaker authkey'
@CENTRAL_PASSIVE_IPADDR@: successful distribution of the file 'corosync authkey'
@CENTRAL_PASSIVE_IPADDR@: successful distribution of the file 'pacemaker authkey'
Sending 'corosync.conf' to '@CENTRAL_ACTIVE_IPADDR@', '@CENTRAL_PASSIVE_IPADDR@'
@CENTRAL_ACTIVE_IPADDR@: successful distribution of the file 'corosync.conf'
@CENTRAL_PASSIVE_IPADDR@: successful distribution of the file 'corosync.conf'
Cluster has been successfully set up.
```

Then start the `pacemaker` service **on both central and database nodes**:

```bash
systemctl enable pacemaker pcsd corosync
systemctl start pacemaker
```

And afterward define these properties **only on one node**:

```bash
pcs property set symmetric-cluster="true"
pcs property set stonith-enabled="false"
pcs resource defaults update resource-stickiness="100"
```

You can now monitor the state of the cluster with the `crm_mon -f` command: it will display [the new cluster resources as you create them](#create-the-centreon-resource-group).

At this stage, no resources have been added to the cluster, so the results of the command run from node 1 should look like this:

```shell
Cluster Summary:
  * Stack: corosync (Pacemaker is running)
  * Current DC: @CENTRAL_ACTIVE_NAME@ (version 2.1.6-9.1.el8_9-6fdc9deea29) - partition with quorum
  * Last updated: Fri Mar 29 10:47:22 2024 on @CENTRAL_ACTIVE_NAME@
  * Last change:  Thu Mar 28 16:38:56 2024 by root via cibadmin on @CENTRAL_ACTIVE_NAME@
  * 4 nodes configured
  * 0 resource instances configured

Node List:
  * Online: [ @CENTRAL_ACTIVE_NAME@ @CENTRAL_PASSIVE_NAME@ @DATABASE_ACTIVE_NAME@ @DATABASE_PASSIVE_NAME@ ]

Active Resources:
  * No active resources

Migration Summary:
```

### Define the quorum device

To let the central nodes know which server is the quorum device, run this command on one of the central nodes:

```bash
pcs quorum device add model net \
    host="@QDEVICE_NAME@" \
    algorithm="ffsplit"
```

The results should look like this:

```shell
Setting up qdevice certificates on nodes...
@CENTRAL_ACTIVE_NAME@: Succeeded
@CENTRAL_PASSIVE_NAME@: Succeeded
@DATABASE_PASSIVE_NAME@: Succeeded
@DATABASE_ACTIVE_NAME@: Succeeded
Enabling corosync-qdevice...
@CENTRAL_PASSIVE_NAME@: corosync-qdevice enabled
@DATABASE_PASSIVE_NAME@: corosync-qdevice enabled
@DATABASE_ACTIVE_NAME@: corosync-qdevice enabled
@CENTRAL_ACTIVE_NAME@: corosync-qdevice enabled
Sending updated corosync.conf to nodes...
@CENTRAL_ACTIVE_NAME@: Succeeded
@DATABASE_ACTIVE_NAME@: Succeeded
@CENTRAL_PASSIVE_NAME@: Succeeded
@DATABASE_PASSIVE_NAME@: Succeeded
@CENTRAL_ACTIVE_NAME@: Corosync configuration reloaded
Starting corosync-qdevice...
@CENTRAL_ACTIVE_NAME@: corosync-qdevice started
@CENTRAL_PASSIVE_NAME@: corosync-qdevice started
@DATABASE_PASSIVE_NAME@: corosync-qdevice started
@DATABASE_ACTIVE_NAME@: corosync-qdevice started

```

### Create the database cluster resources

All commands within this section should be executed on **only one database node**. The configuration will be spread automatically.

#### Active and passive MySQL processes

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mariadb-centreon \
    config="/etc/my.cnf.d/server.cnf" \
    pid="/var/lib/mysql/mysql.pid" \
    datadir="/var/lib/mysql" \
    socket="/var/lib/mysql/mysql.sock" \
    binary="/usr/bin/mysqld_safe" \
    node_list="@DATABASE_ACTIVE_NAME@ @DATABASE_PASSIVE_NAME@" \
    replication_user="@DB_REPL_USER@" \
    replication_passwd='@DB_REPL_PASSWD@' \
    test_user="@DB_REPL_USER@" \
    test_passwd='@DB_REPL_PASSWD@' \
    test_table='centreon.host'
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs resource create "ms_mysql" \
    ocf:heartbeat:mariadb-centreon \
    config="/etc/my.cnf.d/server.cnf" \
    pid="/var/lib/mysql/mysql.pid" \
    datadir="/var/lib/mysql" \
    socket="/var/lib/mysql/mysql.sock" \
    binary="/usr/bin/mysqld_safe" \
    node_list="@DATABASE_ACTIVE_NAME@ @DATABASE_PASSIVE_NAME@" \
    replication_user="@DB_REPL_USER@" \
    replication_passwd='@DB_REPL_PASSWD@' \
    test_user="@DB_REPL_USER@" \
    test_passwd='@DB_REPL_PASSWD@' \
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
    node_list="@DATABASE_ACTIVE_NAME@ @DATABASE_PASSIVE_NAME@" \
    replication_user="@DB_REPL_USER@" \
    replication_passwd='@DB_REPL_PASSWD@' \
    test_user="@DB_REPL_USER@" \
    test_passwd='@DB_REPL_PASSWD@' \
    test_table='centreon.host'
```

</TabItem>
</Tabs>

This command has no output.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs resource promotable ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs resource promotable ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs resource promotable ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

</TabItem>
</Tabs>

This command has no output.

#### Define the database VIP

Run the following command on the active database node to let it know the address of the database VIP.

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

### Define the clone resources

RRD broker and PHP8 will run on both central nodes at the same time. For this to work properly, they must be declared as clone resources.

> **Warning:** All the commands in this section should be run only once on the central node of your choice.

##### PHP8 resource

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

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
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="20s" timeout="30s" \
    clone
```

### Create the centreon resource group

The **centreon** [resource group](https://docs.centreon.com/docs/installation/installation-of-centreon-ha/overview/#what-processes-are-synchronized-by-centreon-ha) is the list of processes that Pacemaker will have to manage. These processes will not be managed by the central nodes themselves (most of them have been [disabled](#stop-and-disable-services) on the central servers).

#### Define the central VIP

Run the following command on the active central node to let it know the address of the VIP.

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

From now on, when you connect using SSH to the active node, your terminal may show the IP address of the VIP.

#### httpd service

This will enable the web server.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

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
</Tabs>

#### Gorgone service

```bash
pcs resource create gorgone \
    systemd:gorgoned \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

#### centreon-central-sync service

This service only exists in the context of Centreon HA. It provides real-time synchronization for configuration files, images, etc.

```bash
pcs resource create centreon_central_sync \
    systemd:centreon-central-sync \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

#### SQL Broker

```bash
pcs resource create cbd_central_broker \
    systemd:cbd-sql \
    meta target-role="started" \
    op start interval="0s" timeout="90s" \
    stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="30s" \
    --group centreon
```

#### Centengine service

```bash
pcs resource create centengine \
    systemd:centengine \
    meta multiple-active="stop_start" target-role="started" \
    op start interval="0s" timeout="90s" stop interval="0s" timeout="90s" \
    monitor interval="5s" timeout="30s" \
    --group centreon
```

#### Centreontrapd service

```bash
pcs resource create centreontrapd \
    systemd:centreontrapd \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

#### Snmptrapd service

```bash
pcs resource create snmptrapd \
    systemd:snmptrapd \
    meta target-role="started" \
    op start interval="0s" timeout="30s" \
    stop interval="0s" timeout="30s" \
    monitor interval="5s" timeout="20s" \
    --group centreon
```

### Define resource constraints

When using this architecture, you must define some specific constraints to specify on which nodes resources are allowed to run.

In order to colocate the active database role with the database VIP, define a mutual constraint:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs constraint colocation add "vip_mysql" with master "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs constraint colocation add "vip_mysql" with Promoted "ms_mysql-clone"
pcs constraint colocation add Promoted "ms_mysql-clone" with "vip_mysql"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs constraint colocation add "vip_mysql" with master "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"
```

</TabItem>
</Tabs>

Create the constraint that prevents Centreon processes from running on database nodes and vice-versa:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs constraint location centreon avoids @DATABASE_ACTIVE_NAME@=INFINITY @DATABASE_PASSIVE_NAME@=INFINITY
pcs constraint location ms_mysql-clone avoids @CENTRAL_ACTIVE_NAME@=INFINITY @CENTRAL_PASSIVE_NAME@=INFINITY
pcs constraint location cbd_rrd-clone avoids @DATABASE_ACTIVE_NAME@=INFINITY @DATABASE_PASSIVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_ACTIVE_NAME@=INFINITY @DATABASE_PASSIVE_NAME@=INFINITY
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs constraint location centreon avoids @DATABASE_ACTIVE_NAME@=INFINITY @DATABASE_PASSIVE_NAME@=INFINITY
pcs constraint location ms_mysql-clone avoids @CENTRAL_ACTIVE_NAME@=INFINITY @CENTRAL_PASSIVE_NAME@=INFINITY
pcs constraint location cbd_rrd-clone avoids @DATABASE_ACTIVE_NAME@=INFINITY @DATABASE_PASSIVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_ACTIVE_NAME@=INFINITY @DATABASE_PASSIVE_NAME@=INFINITY
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs constraint location centreon avoids @DATABASE_ACTIVE_NAME@=INFINITY @DATABASE_PASSIVE_NAME@=INFINITY
pcs constraint location ms_mysql-clone avoids @CENTRAL_ACTIVE_NAME@=INFINITY @CENTRAL_PASSIVE_NAME@=INFINITY
pcs constraint location cbd_rrd-clone avoids @DATABASE_ACTIVE_NAME@=INFINITY @DATABASE_PASSIVE_NAME@=INFINITY
pcs constraint location php-clone avoids @DATABASE_ACTIVE_NAME@=INFINITY @DATABASE_PASSIVE_NAME@=INFINITY
```

</TabItem>
</Tabs>

### Activate the resources

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

At this stage, you can connect to the interface of the active node using the VIP's address. [avec la base déportée j'ai plus rien parce que mon utilisateur autorisé pointait vers l'adresse directe de la base et pas vers une vip]

étape proxy de l'interface
qu'est-ce qui me dit dans la ui où est la base? In Configuration > Pollers > Broker configuration, Open “central-broker-master” and in the “Output” tab, you have to change the “DB host” -> ça m'avait mis la base 2 au lieu de la base 1

### Check the state of the cluster

#### Check the state of the resources

Use the `crm_mon -f` command to check that all your resources have been created and are started. Here is an example of output:

```bash
Cluster Summary:
  * Stack: corosync (Pacemaker is running)
  * Current DC: @CENTRAL_ACTIVE_NODE@ (version 2.1.6-9.1.el8_9-6fdc9deea29) - MIXED-VERSION partition with quorum
  * Last updated: Tue Jun  4 07:57:43 2024 on @CENTRAL_ACTIVE_NODE@
  * Last change:  Tue Jun  4 05:44:11 2024 by root via crm_resource on @CENTRAL_PASSIVE_NODE@
  * 4 nodes configured
  * 21 resource instances configured

Node List:
  * Online: [ @CENTRAL_ACTIVE_NODE@ @CENTRAL_PASSIVE_NODE@ @DATABASE_ACTIVE_NODE@ @DATABASE_PASSIVE_NODE@ ]

Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @DATABASE_ACTIVE_NODE@ ]
    * Slaves: [ @DATABASE_PASSIVE_NODE@ ]
    * Stopped: [ @CENTRAL_ACTIVE_NODE@ @CENTRAL_PASSIVE_NODE@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_ACTIVE_NODE@ @CENTRAL_PASSIVE_NODE@ ]
    * Stopped: [ @DATABASE_ACTIVE_NODE@ @DATABASE_PASSIVE_NODE@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_ACTIVE_NODE@ @CENTRAL_PASSIVE_NODE@ ]
    * Stopped: [ @DATABASE_ACTIVE_NODE@ @DATABASE_PASSIVE_NODE@ ]
  * vip_mysql   (ocf::heartbeat:IPaddr2):        Started @DATABASE_ACTIVE_NODE@
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_ACTIVE_NODE@
    * http      (systemd:httpd):         Started @CENTRAL_ACTIVE_NODE@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_ACTIVE_NODE@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_ACTIVE_NODE@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_ACTIVE_NODE@
    * centengine        (systemd:centengine):    Started @CENTRAL_ACTIVE_NODE@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_ACTIVE_NODE@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_ACTIVE_NODE@

Migration Summary:

```

If **centreon_central_sync** won't start, check if the folder `/usr/share/centreon-broker/lua` exists.

If not, you can create it with this command: `mkdir -p /usr/share/centreon-broker/lua`. Then launch a cleanup with this command: `pcs resource cleanup`.

#### Disabled resources

When you do a `crm_mon -fr` and you have a resource that is disabled:

```text
...
 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_ACTIVE_NAME@ ]
     Slaves: [ @DATABASE_PASSIVE_NAME@ ]
     Stopped: [ @CENTRAL_ACTIVE_NAME@ @CENTRAL_PASSIVE_NAME@ ]
ms_mysql       (ocf::heartbeat:IPaddr2):       Stopped (disabled)
...
```

You must enable the resource with the following command:

```bash
pcs resource enable @RESSOURCE_NAME@
```

In the case of the above example:

```bash
pcs resource enable ms_mysql
```

## Step 4: Modifying the Centreon configuration files

We have [defined a VIP for the databases](#define-the-database-vip) earlier: the data will be sent from the active central node to the current active database via the database VIP. This means that we must give the central nodes the address of the VIP so that they can send the data to it. It is necessary to modify the output of Centreon Broker and three configuration files on the central servers so that they point to the database VIP.

### Modifying central-broker-master outputs

1. Go to **Configuration > Pollers > Broker Configuration**.
2. Click **central-broker-master**.
3. On the **Output** tab, edit the **Unified SQL** output and replace "@DATABASE_ACTIVE_IPADDR@" with @VIP_SQL_IPADDR@:

| Broker Output                         | Parameter  | Value            |
| ------------------------------------- | ---------- | ---------------- |
| Unified SQL                           | DB host    | @VIP_SQL_IPADDR@ |

### Deploying the configuration

Once the actions in the previous paragraph have been completed, the configuration of the **active central node** must be deployed for them to take effect (check the first three boxes under **Actions**).

Then copy the broker configuration files to the **passive central node**:

```bash
rsync -a /etc/centreon-broker/*json @CENTRAL_PASSIVE_IPADDR@:/etc/centreon-broker/
```

### Modification of the three configuration files

After modifying the output of the broker, we must modify the Centreon configuration files. **You need to do this on both central nodes.**
To do this, first, edit the `/etc/centreon/conf.pm` file and replace @DATABASE_ACTIVE_IPADDR@ with the address of the database VIP. Here is the expected result:

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
       "db_user" => "@DB_CENTREON_USER@",
       "db_passwd" => '@DB_CENTREON_PASSWD@'
};
# Central or Poller?
$instance_mode = "central";
# Centreon Centcore Command File
$cmdFile = "/var/lib/centreon/centcore.cmd";
# Deprecated format of Config file.
$mysql_user = "@DB_CENTREON_USER@";
$mysql_passwd = '@DB_CENTREON_PASSWD@';
$mysql_host = "@VIP_SQL_IPADDR@:3306";
$mysql_database_oreon = "centreon";
$mysql_database_ods = "centreon_storage";
1;
```

Then perform the same operation in the `/etc/centreon/centreon.conf.php` file. Here is the expected result:

```bash
<?php
/*
 * Centreon is developed with GPL Licence 2.0:
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt
 * Developed by: Julien Mathis - Romain Le Merlus - Christophe Coraboeuf
 *
 * The Software is provided to you AS IS and WITH ALL FAULTS.
 * Centreon makes no representation and gives no warranty whatsoever,
 * whether express or implied, and without limitation, with regard to the quality,
 * safety, contents, performance, merchantability, non-infringement or suitability for
 * any particular or intended purpose of the Software found on the Centreon website.
 * In no event will Centreon be liable for any direct, indirect, punitive, special,
 * incidental or consequential damages however they may arise and even if Centreon has
 * been previously advised of the possibility of such damages.
 *
 * For information: contact@centreon.com
 */
/*      Database */
$conf_centreon['hostCentreon'] = "@VIP_SQL_IPADDR@";
$conf_centreon['hostCentstorage'] = "@VIP_SQL_IPADDR@";
$conf_centreon['user'] = "@DB_CENTREON_USER@";
$conf_centreon['password'] = '@DB_CENTREON_PASSWD@';
$conf_centreon['db'] = "centreon";
$conf_centreon['dbcstg'] = "centreon_storage";
$conf_centreon['port'] = "3306";
/* path to classes */
$classdir='./class';
/* Centreon Path */
$centreon_path='/usr/share/centreon/';
?>
```

And finish with the last file: `/etc/centreon/config.d/10-database.yaml`. Here is the expected result:

```bash
database:
  db_configuration:
    dsn: "mysql:host=@VIP_SQL_IPADDR@:3306;dbname=centreon"
    username: "@DB_CENTREON_USER@"
    password: "@DB_CENTREON_PASSWD@"
  db_realtime:
    dsn: "mysql:host=@VIP_SQL_IPADDR@:3306;dbname=centreon_storage"
    username: "@DB_CENTREON_USER@"
    password: "@DB_CENTREON_PASSWD@"
```

You then need to restart the **gorgone** and **cbd_central_broker** resources for changes to take effect. Use the following command:

```bash
pcs resource restart centreon
```

After resources are restarted, check if all is OK using the `crm_mon -fr` command. The result should look like this:

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_ACTIVE_NAME@ (version 2.1.4-5.el8_7.2-dc6eb4362e) - partition with quoru
m
  * Last updated: Wed Nov 23 10:27:48 2022
  * Last change:  Wed Nov 23 10:27:43 2022 by hacluster via crmd on @CENTRAL_ACTIVE_NAME@
  * 4 nodes configured
  * 21 resource instances configured

Node List:
  * Online: [ @CENTRAL_ACTIVE_NAME@ @DATABASE_ACTIVE_NAME@ @CENTRAL_PASSIVE_NAME@ @DATABASE_PASSIVE_NAME@
]

Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @DATABASE_ACTIVE_NAME@ ]
    * Slaves: [ @DATABASE_PASSIVE_NAME@ ]
    * Stopped: [ @CENTRAL_ACTIVE_NAME@ @CENTRAL_PASSIVE_NAME@ ]
  * vip_mysql   (ocf::heartbeat:IPaddr2):        Started @DATABASE_ACTIVE_NAME@
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_ACTIVE_NAME@ @CENTRAL_PASSIVE_NAME@ ]
    * Stopped: [ @DATABASE_ACTIVE_NAME@ @DATABASE_PASSIVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_ACTIVE_NAME@ @CENTRAL_PASSIVE_NAME@ ]
    * Stopped: [ @DATABASE_ACTIVE_NAME@ @DATABASE_PASSIVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_ACTIVE_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_ACTIVE_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_ACTIVE_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_ACTIVE_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_ACTIVE_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_ACTIVE_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started@CENTRAL_ACTIVE_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_ACTIVE_NAME@

Migration Summary:
```

If an error is found while your resources are running, use the following command:

```bash
pcs resource cleanup
```

## Step 5: Integrate your pollers

1. If you haven't already done so, apply the necessary [kernel network tuning](#kernel-network-tuning) to the host machines for your pollers.
2. [Install your pollers](https://docs.centreon.com/docs/installation/installation-of-a-poller/using-packages) and register them using the central VIP as the address of the central server. Then run the wizard to [attach the poller](https://docs.centreon.com/docs/monitoring/monitoring-servers/add-a-poller-to-configuration) to the VIP.
3. [Add your pollers](https://docs.centreon.com/docs/installation/installation-of-centreon-ha/integrating-pollers) to the platform's HA architecture.

You can now start your monitoring.

## Step 6: Monitor your cluster

See [Monitoring Centreon HA](https://docs.centreon.com/docs/administration/centreon-ha/monitoring-guide).
