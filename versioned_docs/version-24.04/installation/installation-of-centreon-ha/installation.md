---
id: installation
title: Installing Centreon HA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Debian 12 and MySQL 8 are not supported yet for HA installations using Centreon version 24.04. If you wish to install an HA platform with this configuration, please contact your Centreon sales representative.

## Before you start

This procedure only applies if you are able to set up a database cluster with a dedicated VIP. The Centreon cluster and the database cluster will be independent.

### Disclaimer

It is strongly recommended that your HA is installed by Centreon Professional Services. You may implement HA yourself **only** if:

* you are able to set up replicated databases with a dedicated VIP. The following procedure only applies if you already have a database cluster.
* you have a strong knowledge of the Pacemaker-Corosync clustering tools, of networks, of Linux OS and of Centreon, in order to have a proper understanding of what is being done and to be able to correct any mistakes that might occur.

See also "[What is supported, and what isn't?](faq.md#what-is-supported-and-what-isnt)".

> **WARNING:** Anyone following this procedure does so at their own risk. Under no circumstances shall Centreon be liable for any breakdown or data loss.

### Convention for names and IP addresses

In this procedure, we will refer to characteristics that are bound to change from one platform to another (such as IP addresses) by the following macros:

* `@CENTRAL_ACTIVE_IPADDR@`: active central server's IP address
* `@CENTRAL_ACTIVE_NAME@`: active central server's name (must be identical to `hostname -s`)
* `@CENTRAL_PASSIVE_IPADDR@`: passive central server's IP address
* `@CENTRAL_PASSIVE_NAME@`: passive central server's name (must be identical to `hostname -s`)
* `@QDEVICE_IPADDR@`: quorum device's IP address
* `@QDEVICE_NAME@`: quorum device's name (must be identical to `hostname -s`)
* `@VIP_IPADDR@`: virtual IP address of the cluster
* `@VIP_IFNAME@`: network device carrying the cluster's VIP (name of the interface the VIP must send the flows to. The interface must have the same name on both central nodes).
* `@VIP_CIDR_NETMASK@`: subnet mask length in bits (e.g. 24)
* `@VIP_BROADCAST_IPADDR@`: cluster's VIP broadcast address
* `@CENTREON_CLUSTER_PASSWD@`: `hacluster` user's password

During the installation procedure, node 1 will be the active node and node 2 will be the passive node. Of course, the roles will be able to be switched later.

### How should I organize my Centreon HA?

Ideally, the two central nodes should be running on different geographical sites. The quorum device should communicate with both sites independently. All members of the cluster (active and passive nodes, quorum device) need to communicate with each other.

To reduce the probability of an interruption of service occurring, it is not recommended to set up a Centreon HA cluster where all your servers are running in the same datacenter or (even more so) within the same rack.

In the case of a highly available architecture the Centreon central servers must not monitor resources. If this recommendation is not followed, the centengine service will take too long to restart and it may cause the functional Centreon group to failover.

Make sure to give your servers clear, relevant hostnames so that you know which is which.

## Step 1: Prepare the elements of the cluster

### Installation checklist

#### Set up VIPs for the central servers and for the databases

* Reserve an IP address in your network to act as a VIP so that pollers can always send data to the active central node.
* Reserve another VIP through which the central servers will access the replicated databases.

#### Install and set up replication for the databases

1. If you have a Centreon with already existing data, make a dump of the database first.
2. Install 2 blank Centreon databases [using our installation procedure for remote databases](https://docs.centreon.com/docs/installation/installation-of-a-central-server/using-packages/#step-2-installation).
3. Set up replication for the databases using the official replication tools for MariaDB or MySQL.
4. Configure the databases so that they can communicate with their dedicated VIP.

#### Install the central servers

[Install the two central nodes using packages](https://docs.centreon.com/docs/installation/installation-of-a-central-server/using-packages) with the exact same version of Centreon on them ([update](https://docs.centreon.com/docs/update/update-centreon-platform) your version if needed). Use the procedure for an installation with remote databases, but skip all steps concerning the databases themselves as you already installed them. At [step 6 of the web installation procedure](https://docs.centreon.com/docs/installation/web-and-post-installation/#step-6-database-information), make sure you enter the address of the VIP dedicated to your databases in the **Database Host Address** field.

* Node 1 can be an existing Centreon that already monitors resources; however, node 2 should be a freshly installed Centreon.
* Both central servers should have an **admin** account with the same password.
* If you have an IT or Business edition, remember that license files for HA are specific. Please contact your Centreon sales representative to obtain your license files.

#### Install the pollers

Install the host machines and [install the pollers from packages](https://docs.centreon.com/docs/installation/installation-of-a-poller/using-packages) or [using the unattended script](https://docs.centreon.com/docs/installation/installation-of-a-poller/unattended-install-poller/). Do not register the poller to a central server yet.

#### Choose a quorum device

Choose which server in your infrastructure should act as a quorum device. This can be a poller. (The actual configuration will be done later: see [Preparing the server that will function as the quorum device](#preparing-the-server-that-will-function-as-the-quorum-device) and [Defining the quorum device](#defining-the-quorum-device).)

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

This will result in the **Last Update** column of the **Configuration > Pollers > Pollers** page to become yellow, as Broker is temporarily stopped. An error will also appear in the **Pollers** section of the header bar: this is normal. Things will come back to normal at the end of the installation procedure (after you have defined all the resource groups, including sql_broker).

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

All the above actions should be applied either to both nodes or to `@CENTRAL_ACTIVE_NAME@` only, and the exported files should be copied to `@CENTRAL_PASSIVE_NAME@`:

```bash
rsync -a /etc/centreon-broker/*json @CENTRAL_PASSIVE_IPADDR@:/etc/centreon-broker/
```

Check that the files have been properly copied to node 2. If you just copied the json files from node 1 to node 2, for the moment, the changes do not appear in node 2's interface.

### Customize the poller reload command

In Centreon, the central broker daemon is reloaded every time you export your configuration. In the context of a HA setup, the central broker service is managed by the cluster and is called `cbd-sql`, [as described earlier](#change-the-link-to-the-cbd-service). This means that the service that needs to be reloaded when you export the configuration is `cbd-sql`, and no longer `cbd`: you need to configure this on central node 1.

1. Go to **Configuration > Pollers > Pollers**, then click on the central server.
2. In section **Centreon Broker**, set the **Centreon Broker reload command** parameter to `service cbd-sql reload`.

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

Run the following command on the two central nodes and on the quorum device:

```bash
cat >/etc/hosts <<"EOF"
127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4
@CENTRAL_ACTIVE_IPADDR@ @CENTRAL_ACTIVE_NAME@
@CENTRAL_PASSIVE_IPADDR@ @CENTRAL_PASSIVE_NAME@
@QDEVICE_IPADDR@ @QDEVICE_NAME@
EOF
```

### Install HA tools on the central servers

Install the following packages on both central nodes. They provide all the files and dependencies required by a Centreon cluster.

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

### Configure SSH keys exchange

SSH key-based authentication must be set up so that files and commands can be sent from one node to another by the **centreon** Unix account.

There are two ways of exchanging such keys:

* By using the `ssh-copy-id` command: needs to be able to log in to remote host using a password. It is however unsafe for such system accounts to have a password authentication available. If you choose this method, we advise you to revoke the password afterward with these commands: `passwd -d centreon` and `passwd -d mysql`.
* By manually copying the public key in `~/.ssh/authorized_keys`. This method is safer.

The second method will be documented below.

Switch to `centreon`'s bash environment on both nodes:

```bash
su - centreon
```

Then run this command on both nodes:

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

### Open network flows

In addition to the necessary flows described in the [official documentation](../technical/#tables-of-network-flows),
you will need to open the following flows:

| From                      | Destination               | Protocol | Port     | Application                                                                                |
| :------------------------ | :------------------------ | :------- | :------- | :----------------------------------------------------------------------------------------- |
| Active Node               | Passive Node              | SSH      | TCP 22   | Synchronization of configuration files (Must also be open from passive to active node) |
| Active Node               | Passive Node              | BDDO     | TCP 5670 | RRDs synchronization (Must also be from passive to active node)                   |
| Active Node               | Passive Node              | MySQL    | TCP 3306 | MySQL synchronization (Must also be open from passive to active node)                  |
| Central Servers + QDevice | Central Servers + QDevice | Corosync | UDP 5404 | Communication inside the cluster (Multicast)                                               |
| Central Servers + QDevice | Central Servers + QDevice | Corosync | UDP 5405 | Communication inside the cluster (Unicast)                                                 |
| Central Servers + QDevice | Central Servers + QDevice | PCS      | TCP 2224 | Communication inside the cluster                                                           |
| Central Servers + QDevice | Central Servers + QDevice | Corosync | TCP 5403 | Communication with the QDevice                                                             |

## Step 2: Set up the Centreon cluster

**Note**: unless otherwise stated, each of the following steps must be run **on both central nodes**.

### Configure the file synchronization service

Each central node must know the IP address of the other central node so that data can be synced between them. To be more specific, the `centreon-central-sync` file synchronization service needs the IP address of the peer node to be entered in its configuration file (`/etc/centreon-ha/centreon_central_sync.pm`).

So, on the `@CENTRAL_ACTIVE_NAME@` server, the configuration file should look like this:

```perl
our %centreon_central_sync_config = (
    peer_addr => "@CENTRAL_PASSIVE_IPADDR@"
);
1;
```

And on `@CENTRAL_PASSIVE_NAME@`:

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

The central nodes must no longer launch services at boot time: this will be done by the clustering tools, and only them. Stop and disable the following services on each central node:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon mysql
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon mysql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon mariadb
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd httpd php-fpm centreon mariadb
```

</TabItem>
<TabItem value="Debian 11 " label="Debian 11">

```bash
systemctl stop centengine snmptrapd centreontrapd gorgoned cbd apache2 php8.1-fpm centreon mariadb
systemctl disable centengine snmptrapd centreontrapd gorgoned cbd apache2 php8.1-fpm centreon mariadb
```

</TabItem>
</Tabs>

At this point, you no longer have access to the central servers' interfaces (as you have stopped the corresponding service). The interfaces will be up again at the end of the installation procedure.

### Activate the clustering services

Start `pcsd` on both central nodes:

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

RETOUR de qdevice status

```shell
[root@ip-172-16-5-171 ~]# pcs qdevice status net --full
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

A user called **hacluster** has been automatically created when you installed Pacemaker and Corosync. This user will run the Corosync and Pacemaker processes on all 3 members of the cluster.
For the sake of simplicity, the **hacluster** user will be assigned the same password on both central nodes and on the quorum device. Run the following command on each machine and set the password you want.

```bash
passwd hacluster
```

Now that all members of the cluster (both central nodes and the quorum device server) share the same password, run this command **only on one of the central nodes** in order to authenticate the **hacluster** user to all members of the cluster.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
pcs host auth \
    "@CENTRAL_ACTIVE_NAME@" \
    "@CENTRAL_PASSIVE_NAME@" \
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
    --force
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
pcs cluster setup \
    centreon_cluster \
    "@CENTRAL_ACTIVE_NAME@" \
    "@CENTRAL_PASSIVE_NAME@" \
    --force
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
pcs cluster setup \
    centreon_cluster \
    "@CENTRAL_ACTIVE_NAME@" \
    "@CENTRAL_PASSIVE_NAME@" \
    --force
```

</TabItem>
</Tabs>

You should get the following message:

```shell
[root@ip-@CENTRAL_ACTIVE_IPADDR@ ~]# pcs cluster setup     centreon_cluster     "@CENTRAL_ACTIVE_IPADDR@"     "@CENTRAL_PASSIVE_IPADDR@"     --force
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

Then start the `pacemaker` service **on both central nodes**:

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

At this stage, no resources have been added to the cluster, so the resultst of the command run from node 1 should look like this:

```shell
Cluster Summary:
  * Stack: corosync (Pacemaker is running)
  * Current DC: @CENTRAL_ACTIVE_IPADDR@ (version 2.1.6-9.1.el8
_9-6fdc9deea29) - partition with quorum
  * Last updated: Fri Mar 29 10:47:22 2024 on @CENTRAL_ACTIVE_IPADDR@
  * Last change:  Thu Mar 28 16:38:56 2024 by root via cibadmin on @CENTRAL_ACTIVE_IPADDR@
  * 2 nodes configured
  * 0 resource instances configured

Node List:
  * Online: [ @CENTRAL_ACTIVE_IPADDR@ @CENTRAL_PASSIVE_IPADDR@ ]

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
@CENTRAL_ACTIVE_IPADDR@: Succeeded
@CENTRAL_PASSIVE_IPADDR@: Succeeded
Enabling corosync-qdevice...
@CENTRAL_ACTIVE_IPADDR@: corosync-qdevice enabled
@CENTRAL_PASSIVE_IPADDR@: corosync-qdevice enabled
Sending updated corosync.conf to nodes...
@CENTRAL_PASSIVE_IPADDR@: Succeeded
@CENTRAL_ACTIVE_IPADDR@: Succeeded
@CENTRAL_ACTIVE_IPADDR@: Corosync configuration reloaded
Starting corosync-qdevice...
@CENTRAL_ACTIVE_IPADDR@: corosync-qdevice started
@CENTRAL_PASSIVE_IPADDR@: corosync-qdevice started
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

The **centreon** [resource group](overview.md#what-processes-are-synchronized-by-centreon-ha) is the list of processes that Pacemaker will have to manage. These processes will not be managed by the central nodes themselves (most of them have been [disabled](#stop-and-disable-services) on the central servers).

#### Define the VIP address

Run the following command on the active node to let it know the address of the VIP.

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

From now on, when you connect using SSH to the active node, your terminal will show the IP address of the VIP.

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

### Activate the resources

```bash
pcs resource enable php-clone
pcs resource enable cbd_rrd-clone
pcs resource meta vip target-role="started"
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

You can monitor the cluster's resources in real time using the `crm_mon -f` command. Here is an exmaple of output:

```bash
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_ACTIVE_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_ACTIVE_NAME@
  * 2 nodes configured
  * 12 resource instances configured
Node List:
  * Online: [ @CENTRAL_ACTIVE_NAME@ @CENTRAL_PASSIVE_NAME@ ]
Full List of Resources:
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_ACTIVE_NAME@ @CENTRAL_PASSIVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_ACTIVE_NAME@ @CENTRAL_PASSIVE_NAME@ ]
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

If **centreon_central_sync** won't start, check if the folder `/usr/share/centreon-broker/lua` exists.

If not, you can create it with this command: `mkdir -p /usr/share/centreon-broker/lua`. And launch a cleanup with this command: `pcs resource cleanup`.

#### Disabled resources

When you do a `crm_mon -fr` and you have a resource that is disabled:

```text
...
 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_ACTIVE_NAME@ @CENTRAL_PASSIVE_NAME@ ]
ms_mysql       (ocf::heartbeat:IPaddr2):       Stopped (disabled)
...
```

You must enable the resource with the following command:

```bash
pcs resource enable @RESSOURCE_NAME@
```

In our case:

```bash
pcs resource enable ms_mysql
```

## Step 3: Integrate your pollers

1. If you haven't already done so, apply the necessary [kernel network tuning](#kernel-network-tuning) to the host machines for your pollers.
2. [Install your pollers](../installation-of-a-poller/using-packages.md) and register them using the VIP as the address of the central server. The password is that of the admin account for node 1? - Then run the wizard to [attach the poller](../../monitoring/monitoring-servers/add-a-poller-to-configuration.md) to the VIP.
3. [Add your pollers](./integrating-pollers.md) to the platform's HA architecture.

You can now start your monitoring.

## Step 4: Monitor your cluster

See [Monitoring Centreon HA](../../administration/centreon-ha/monitoring-guide.md).
