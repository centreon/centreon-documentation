---
id: upgrade-from-centreon-failover
title: Upgrade Centreon-HA from Centreon Failover
---
This procedure is set up for the Centreon Failover platform lower than version 20.04 with 3 oder 5 nodes.
You will need to retrieve the repositories by calling Centreon Support. As part of the intervention, a Consultant Centreon will install them on the affected servers.
Here is the list of RPMs that will be used to install the repositories and upgrade the Centreon Failover EMS platform:

· centreon-release-20.04-1.el7.centos.noarch.rpm
· centreon-plugin-packs-release-20.04-1.el7.centos.noarch.rpm
· centreon-bam-release-20.04-1.el7.centos.noarch.rpm
· centreon-map-release-20.04-1.el7.centos.noarch.rpm
· centreon-mbi-release-20.04-1.el7.centos.noarch.rpm

The centreon interface will be not available during the first steps of the process.
Please contact the support for more informations before following the next steps.

## Convention, Defining hosts' names and addresses

The convention followed is that

[ALL]% denotes a command that needs to be run on all cluster machines as root,
[ONE]% indicates a command that only needs to be run on one cluster host as root.

For Centreon specific things,
[DB]% means only on database servers as root,
[CENTREON]% means only frontend servers as root.
[QUORUM]% means only quorum server as root.
[*_MASTER/*_SLAVE]% means that the command must be run on a specific node

Some variables characterize the installation. 
These variables are identified as @VARIABLE@ and you need to change it by yours each time you will see it in the document.
@CENTRAL_MASTER_IPADDR@: primary central server's IP address
@CENTRAL_MASTER_NAME@: primary central server's name (must be identical to hostname -s)
@CENTRAL_SLAVE_IPADDR@: secondary central server's IP address
@CENTRAL_SLAVE_NAME@: secondary central server's name (must be identical to hostname -s)
@QUORUM_IPADDR@: quorum device's IP address
@VIP_IPADDR@: virtual IP address of the cluster


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
### Add repository 20.04 and Upgrade Centreon packages
Update your platform by running the following command on each node:
```bash
[CENTREON]%yum update
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
[MASTER]% /etc/centreon/centreon.conf.php
/etc/centreon/conf.pm

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
















