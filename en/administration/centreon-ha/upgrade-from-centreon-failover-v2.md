---
id: upgrade-from-centreon-failover
title: Upgrade Centreon-HA from Centreon Failover
---
This procedure is set up for the Centreon Failover platforms lower than version 20.04 with 3 oder 5 nodes. You will need to retrieve the repositories by calling Centreon Support. 

As part of the intervention, a Consultant Centreon will install them on the servers. Here is the list of RPMs that will be used to install the repositories and upgrade the Centreon Failover EMS platform:

* centreon-release-20.04-1.el7.centos.noarch.rpm
* centreon-plugin-packs-release-20.04-1.el7.centos.noarch.rpm
* centreon-bam-release-20.04-1.el7.centos.noarch.rpm
* centreon-map-release-20.04-1.el7.centos.noarch.rpm
* centreon-mbi-release-20.04-1.el7.centos.noarch.rpm

The centreon interface will be not available during the first steps of the process because of a service cut due to an Engine / broker incompatibility between the old and the new version.

Please contact the support for more informations before following the next steps.

## Convention, Defining hosts' names and addresses

The convention followed is that:

* `[ALL]`: denotes a command that needs to be run on all cluster machines as root,
* `[ONE]`: indicates a command that only needs to be run on one cluster host as root.

For Centreon specific things,

* `[DB]` means only on database servers as root
* `[CENTREON]` means only frontend servers as root
* `[QUORUM]` means only quorum server as root
* `[POLLER]` means only poller servers as root
* `[*_MASTER/*_SLAVE]` means that the command must be run on a specific node

Some variables characterize the installation. These variables are identified as @VARIABLE@ and you need to change it by yours each time you will see it in the document.


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

## Prerequisites for the upgrade

The repositories to install for Centreon servers by components are as follows:

* `[CENTREON]`: All repositories are required
* `[POLLER]`: centreon-release-20.04-1.el7.centos.noarch.rpm 
* `[MAP]`: centreon-release-20.04-1.el7.centos.noarch.rpm and centreon-map-release-20.04-1.el7.centos.noarch.rpm
* `[MBI]`: centreon-release-20.04-1.el7.centos.noarch.rpm and centreon-mbi-release-20.04-1.el7.centos.noarch.rpm

Then clear various metadata informations that accumulates in the yum cache directory (/ var / cache / yum /) over the time:

```bash
[ALL]% Yum clean all
```

## Cluster preparation

### Disable clustering

It is necessary to disable and unmanage all Centreon resources, as well as MariaDB.
```bash
[ONE]% pcs resource disable ms_mysql
pcs resource disable centreon
pcs resource unmanage centreon
pcs resource unmanage ms_mysql
```

### Delete the cluster

The cluster configuration should be destroyed.
```bash
[ONE]% pcs cluster destroy
```

## Package upgrade

### Upgrade Centreon packages

Update your platform by running the following command on each node:

```bash
[ALL]%yum update centreon\*
```

### add timezone

The PHP timezone should be set. Run the command:

```bash
[MASTER]% echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php72/php.d/50-centreon.ini
```
Change Europe/Paris to your time zone.

Then, run the following command:

```bash
systemctl restart rh-php72-php-fpm
```

### Change @VIP_IPADDR@ by @IP_DATABASE_MASTER@ in this 2 files:
[MASTER]% /etc/centreon/centreon.conf.php and /etc/centreon/conf.pm

## Database

### Start MySQL on master node

Mysql service must be started:

```bash
[DB_MASTER]% systemctl start mysql
```
### Remove READ_ONLY flag

To Set the database back to Read+Write mode, run the following command:

```bash
[DB_MASTER]% SET GLOBAL READ_ONLY=0;
```

## Web Upgrade

### Upgrade preparation

Before upgrading the web interface, stop php71 and start php72 with the following command:

```bash
[MASTER]% systemctl stop rh-php71-php-fpm
systemctl start rh-php72-php-fpm
systemctl restart httpd24-httpd
```
### Connect to Master IP addr and play the wizard

Log on to the Centreon web interface to continue the upgrade process.

## Post upgrade actions

### Customizing poller reload command

You may ignore that, but the central broker daemon has to be reloaded every time you update your central poller's configuration, hence the "Centreon Broker reload command" parameter in *Configuration > Pollers > Central*.

As stated above, the centreon-broker processes will be divided into `cbd` (for RRD) and `cbd-sql` (for central broker) services. In this perspective, the service that needs to be reloaded is `cbd-sql` and not `cbd` any more. So you will have to set the "Centreon Broker reload command" parameter to `service cbd-sql reload`.

### Remove Pacemaker and Corosync packets on quorum

```bash
[QUORUM]% yum remove corosync pacemaker corosync-qdevice corosynclib pcs
```
### Uninstalling the quorum

```bash
[QUORUM]% pcs quorum device remove or pcs qdevice destroy net
```
### Update MariaDB to 10.3

Follow the following documentation:
https://docs.centreon.com/current/fr/upgrade/upgrade-from-19-10.html#mont%C3%A9e-de-version-du-serveur-mariadb


### Kernel network tuning

In order to improve the cluster reliability, and since *Centreon HA* only supports IPv4, we recommend to apply the following kernel settings all your Centreon servers (including pollers):

```bash
[ALL]% cat >> /etc/sysctl.conf <<EOF
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv4.tcp_retries2 = 3
net.ipv4.tcp_keepalive_time = 200
net.ipv4.tcp_keepalive_probes = 2
net.ipv4.tcp_keepalive_intvl = 2
EOF
systemctl restart network
```

### Installing system packages

Centreon offers a package named centreon-ha, which provides all the needed files and dependencies required by a Centreon cluster

```bash
[CENTREON]% yum install epel-release
yum install centreon-ha
```











