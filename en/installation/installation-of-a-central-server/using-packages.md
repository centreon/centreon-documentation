---
id: using-packages
title: Using packages
---

Centreon provides RPM packages for its products through the Centreon Open
Sources version available free of charge in our repository.

These packages have been successfully tested in CentOS 7 and 8 environments.

> Due to Red Hat's stance on CentOS 8, we suggest not to use said version for
> your production environment. Nevertheless, these packages for CentOS 8 are
> compatible with RHEL 8 and Oracle Linux 8 versions.

After installating your server, consider updating your operating system via the
command:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf update
```
<!--CentOS 7-->
```shell
yum update
```
<!--END_DOCUSAURUS_CODE_TABS-->

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
getenforce
```

You should have this result:
```shell
Disabled
```

### Configure or disable firewall

Add firewall rules or disable the firewall by running the following commands:

```shell
systemctl stop firewalld
systemctl disable firewalld
```

### Install the repositories

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL 8-->
#### Redhat CodeReady Builder repository

To install Centreon you will need to enable the official CodeReady Builder
repository supported by Redhat.

Enable the CodeReady Builder repository using these commands:

```shell
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```
<!--CentOS 8-->
#### Redhat PowerTools repository

To install Centreon you will need to enable the official PowerTools repository
supported by Redhat.

Enable the PowerTools repository using these commands:

```shell
dnf -y install dnf-plugins-core epel-release
dnf config-manager --set-enabled powertools
```
<!--Oracle Linux 8-->
#### Oracle CodeReady Builder repository

To install Centreon you will need to enable the official Oracle CodeReady
Builder repository supported by Oracle.

Enable the repository using these commands:

```shell
dnf -y install dnf-plugins-core oracle-epel-release-el8
dnf config-manager --set-enabled ol8_codeready_builder
```
<!--CentOS 7-->
#### Redhat Software Collections repository

To install Centreon you will need to set up the official Software Collections
repository supported by Redhat.

> Software collections are required for installing PHP 7 and associated libraries.

Install the Software Collections repository using this command:

```shell
yum install -y centos-release-scl
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### Centreon repository

To install Centreon software from the repository, you should first install the
centreon-release package, which will provide the repository file.

Install the Centreon repository using this command:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y http://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-1.el8.noarch.rpm
```
<!--CentOS 7-->
```shell
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-1.el7.centos.noarch.rpm
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Installation

This section describes how to install a Centreon Central server.

It's possible to install this server with a local database on the server, or
a remote database on a dedicated server.

### With a local database

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y centreon centreon-database
systemctl daemon-reload
systemctl restart mariadb
```
<!--CentOS 7-->
```shell
yum install -y centreon centreon-database
systemctl daemon-reload
systemctl restart mariadb
```
<!--END_DOCUSAURUS_CODE_TABS-->

### With a remote database

> If installing database on a dedicated server, this server should also have
> the prerequired repositories.

Run the following command on the Central server:
<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y centreon-base-config-centreon-engine centreon-widget\*
```
<!--CentOS 7-->
```shell
yum install -y centreon-base-config-centreon-engine centreon-widget\*
```
<!--END_DOCUSAURUS_CODE_TABS-->

Then run the following commands on the dedicated server:
<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```
<!--CentOS 7-->
```shell
yum install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```
<!--END_DOCUSAURUS_CODE_TABS-->

Secure your MariaDB installation by executing the following command:
```shell
mysql_secure_installation
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

> The package **centreon-database** installs an optimized MariaDB configuration
> to be used with Centreon.
>
> If this package is not installed, system limitation **LimitNOFILE** should be
> at least set to **32000** using a dedicated configuration file, example:
>
> ```shell
> $ cat /etc/systemd/system/mariadb.service.d/centreon.conf
> [Service]
> LimitNOFILE=32000
> ```
>
> Same for the MariaDB **open_files_limit** directive, example:
>
> ```shell
> $ cat /etc/my.cnf.d/centreon.cnf
> [server]
> innodb_file_per_table=1
> open_files_limit=32000
> ```

> In addition to the directives above, it's strongly recommended to tune the 
> database configuration with the following parameters: 
>
> ```shell
> [server]
> key_buffer_size = 256M
> sort_buffer_size = 32M
> join_buffer_size = 4M
> thread_cache_size = 64
> read_buffer_size = 512K
> read_rnd_buffer_size = 256K
> max_allowed_packet = 128M
> ```
> 
> Optionnaly, tune the memory and buffer utilization of the InnoDB engine powered 
> tables. The example below applies to a database server with 8Gb RAM
>  
> ```shell
> innodb_buffer_pool_size=1G
> ```
>
> Remember to restart MariaDB after a change to configuration.

## Configuration

### Set the PHP time zone

You are required to set the PHP time zone. Run the command:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```
<!--CentOS 7-->
```shell
echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php72/php.d/50-centreon.ini
```
<!--END_DOCUSAURUS_CODE_TABS-->

> Change **Europe/Paris** to your time zone. You can find the supported list of
> time zone [here](http://php.net/manual/en/timezones.php).

After saving the file, please do not forget to restart the PHP-FPM service:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
systemctl restart php-fpm
```
<!--CentOS 7-->
```shell
systemctl restart rh-php72-php-fpm
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Services startup during system bootup

To make services start automatically during system bootup, run these commands
on the central server:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
systemctl enable php-fpm httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```
<!--CentOS 7-->
```shell
systemctl enable rh-php72-php-fpm httpd24-httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```
<!--END_DOCUSAURUS_CODE_TABS-->

> If the database is on a dedicated server, remember to enable **mariadb**
> service on it.

## Web installation

Before starting the web installation process, start the Apache server with the
following command:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
systemctl start httpd
```
<!--CentOS 7-->
```shell
systemctl start httpd24-httpd
```
<!--END_DOCUSAURUS_CODE_TABS-->

Conclude installation by performing
[web installation steps](../web-and-post-installation.html#web-installation).
