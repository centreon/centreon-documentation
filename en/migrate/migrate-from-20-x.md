---
id: migrate-from-20-x
title: Migrate from a Centreon 20.x platform
---

## Prerequisites

The following procedure only applies to migration from a **Centreon 20.x**
platform installed on a 64-bit GNU/Linux distribution other than CentOS or
Red Hat 8.

## Migrate

> If your Centreon platform includes a Centreon redundancy system, please 
> contact [Centreon support](https://centreon.force.com).

### Install the new server

Perform the following actions:

1. You will need to install a new Centreon Central server from the
[ISO](../installation/installation-of-a-central-server/using-centreon-iso.html) or from
[packages](../installation/installation-of-a-central-server/using-packages.html), until you
complete the installation process by connecting to the Centreon Web interface.

2. Perform software and system updates:

```shell
dnf update
```

> It is advisable to set the same password for the *centreon* user during the web
> installation process.

### Synchronize the data

Connect to your old Centreon server and synchronize following directories:

```shell
rsync -avz /etc/centreon root@<IP_NEW_CENTREON>:/etc
rsync -avz /etc/centreon-broker root@<IP_NEW_CENTREON>:/etc
rsync -avz /var/log/centreon-engine/archives/ root@<IP_NEW_CENTREON>:/var/log/centreon-engine
rsync -avz --exclude centcore/ --exclude log/ /var/lib/centreon root@<IP_NEW_CENTREON>:/var/lib
rsync -avz /var/spool/centreon/.ssh root@<IP_NEW_CENTREON>:/var/spool/centreon
```

> Replace **\<IP_NEW_CENTREON\>** by the IP or the new Centreon server.

### Retrieve databases

1. Dump source databases:

```shell
mysqldump -u root -p centreon > /tmp/centreon.sql
mysqldump -u root -p centreon_storage > /tmp/centreon_storage.sql
```

2. Stop source MariaDB servers:

```shell
service mysqld stop
```

3. Export the dumps to the new Centreon 20.10 database server (make sure you
have enough space for large databases dumps):

```shell
rsync -avz /tmp/centreon.sql root@<IP_NEW_CENTREON>:/tmp/
rsync -avz /tmp/centreon_storage.sql root@<IP_NEW_CENTREON>:/tmp/
```

4. On the Centreon 20.10 database server, drop the original databases and
create them again:

```shell
mysql -u root -p
```

```SQL
DROP DATABASE centreon;
DROP DATABASE centreon_storage;
CREATE DATABASE centreon;
CREATE DATABASE centreon_storage;
```

5. Import the previously transfered dumps:

```shell
mysql -u root centreon -p </tmp/centreon.sql
mysql -u root centreon_storage -p </tmp/centreon_storage.sql
```

6. Upgrade the tables:

```shell
mysql_upgrade
```

7. Start the mariadb process on the new server:

```shell
systemctl start mariadb
```

> Replace **\<IP_NEW_CENTREON\>** by the IP or the new Centreon server.

### Synchronize the plugins

Synchronizing the monitoring plugins is more complex and depends on your
installation. The main directories to synchronize are:

1. /usr/lib/nagios/plugins/
2. /usr/lib/centreon/plugins/

> To run the plugins, you must first install the required dependencies.

### Upgrade Centreon

On the new server, force the update by moving the contents of the
**/var/lib/centreon/installs/install-20.10.0-YYYYMMDD\_HHMMSS** directory to
the **/usr/share/centreon/www/install** directory:

```shell
cd /var/lib/centreon/installs/
mv install-20.10.0-YYYYMMDD_HHMMSS/ /usr/share/centreon/www/install/
```

> If you use the same IP address or same DNS name between old Centreon webserver
> and the new one, do a full cache cleanup of your browser to avoid JS issues

Go to *http://\<IP_NEW_CENTREON\>/centreon* URL and perform the upgrade.

> If you changed the *centreon* password during the installation process you must
> follow these steps:
>
> 1. Edit the /etc/centreon/centreon.conf.php file,
> 2. Edit the /etc/centreon/conf.pm file,
> 3. Edit the Centreon Broker central configuration using Centreon web interface
> and change the password for the **Perfdata generator** and **Broker SQL
> database** output,
> 4. Edit the /etc/centreon/config.d/10-database.yaml file.

If the IP of your Centreon server has changed, edit the configuration for all
the Centreon Broker modules of your Pollers and change the IP to connect to
the Centreon Central server (output IPv4). See the [Advanced
configuration](../monitoring/monitoring-servers/advanced-configuration.html#tcp-outputs)
chapter for more information.

Then [generate](../monitoring/monitoring-servers/deploying-a-configuration.html) the
configuration of all your pollers and export it.

### Upgrade the modules

Please refer to the documentation of each module to verify compatibility with
Centreon 20.10 and perform the upgrade.
