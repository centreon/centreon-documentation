---
id: using-packages
title: Using packages
---

Centreon provides RPM packages for its products through the Centreon Open
Sources version available free of charge in our repository.

These packages have been successfully tested in CentOS 7.x environments.

After installating your server, consider updating your operating system via the
command:

```shell
yum update
```

> Accept all GPG keys and consider rebooting your server if a kernel update is
> proposed.

## Pre-installation steps

### Disable SELinux

SELinux should be disabled. To do this, you have to edit the file
**/etc/selinux/config** and replace **enforcing** by **disabled**, or by
running the following command:

```shell
sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config
```

> Reboot your operating system to apply the change.

After system startup, perform a quick check of the SELinux status:

```shell
$ getenforce
Disabled
```

### Configure or disable firewall

Add firewall rules or disable the firewall by running the following commands:

```shell
systemctl stop firewalld
systemctl disable firewalld
```

### Install the repositories

#### Redhat Software Collections repository

To install Centreon you will need to set up the official Software Collections
repository supported by Redhat.

> Software collections are required for installing PHP 7 and associated libraries.

Install the Software Collections repository using this command:

```shell
yum install -y centos-release-scl
```

#### Centreon repository

To install Centreon software from the repository, you should first install the
centreon-release package, which will provide the repository file.

Install the Centreon repository using this command:

```shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

## Installation

This section describes how to install a Centreon Central server.

It's possible to install this server with a local database on the server, or
a remote database on a dedicated server.

<!--DOCUSAURUS_CODE_TABS-->

<!--With a local database-->

Run the commands:

```shell
yum install -y centreon centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

<!--With a remote database-->

> If installing database on a dedicated server, this server should also have
> the prerequired repositories.

Run the following command on the Central server:

```shell
yum install -y centreon-base-config-centreon-engine
```

Then run the following commands on the dedicated server:

```shell
yum install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

Then create a distant user with **root** privileges needed for Centreon
installation:

```SQL
CREATE USER '<USER>'@'<IP>' IDENTIFIED BY '<PASSWORD>';
GRANT ALL PRIVILEGES ON *.* TO '<USER>'@'<IP>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

> Replace **\<IP\>** with the Centreon Central IP address that will connect to
> the database server.
>
> Replace **\<USER\>** and **\<PASSWORD\>** by user's credentials.

Once the installation is complete you can delete this user using:

```SQL
DROP USER '<USER>'@'<IP>';
```

<!--END_DOCUSAURUS_CODE_TABS-->

> The package **centreon-database** installs an optimized MariaDB configuration
> to be used with Centreon.
>
> If this package is not installed, system limitation **LimitNOFILE** should be
> at least set to **32000** using a dedicated configuration file, example:
>
> ```shell
> $ cat /etc/systemd/system/mariadb.service.d/limits.conf
> [Service]
> LimitNOFILE=32000
> ```
>
> Same for the MariaDB **open_files_limit** directive, example:
>
> ```shell
> $ cat /etc/my.cnf.d/server.cnf
> [server]
> innodb_file_per_table=1
> open_files_limit=32000
> ```
>
> Remember to restart MariaDB after a change to configuration.

## Configuration

### Set the PHP time zone

You are required to set the PHP time zone. Run the command:

```shell
echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php72/php.d/50-centreon.ini
```

> Change **Europe/Paris** to your time zone. You can find the supported list of
> time zone [here](http://php.net/manual/en/timezones.php).

After saving the file, please do not forget to restart the PHP-FPM service:

```shell
systemctl restart rh-php72-php-fpm
```

### Services startup during system bootup

To make services start automatically during system bootup, run these commands
on the central server:

```shell
systemctl enable rh-php72-php-fpm httpd24-httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```

> If the database is on a dedicated server, remember to enable **mariadb**
> service on it.

## Web installation

Before starting the web installation process, start the Apache server with the
following command:

```shell
systemctl start httpd24-httpd
```

Conclude installation by performing
[web intallation steps](../web-and-post-installation.html#web-installation).
