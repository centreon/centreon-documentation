---
id: using-packages
title: Using packages
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Centreon provides RPM packages for its products through the Centreon Open
Source version available free of charge in our repository.

These packages have been successfully tested in CentOS 7 and 8 environments.

> Due to Red Hat's stance on CentOS 8, we suggest not to use said version for
> your production environment. Nevertheless, these packages for CentOS 8 are
> compatible with RHEL 8 and Oracle Linux 8 versions.

You must run the installation procedure as a privileged user.

## Prerequisites

After installing your server, update your operating system using the following
command:

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf update
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum update
```

</TabItem>
</Tabs>

> Accept all GPG keys and reboot your server if a kernel update is
> proposed.

## Step 1: Pre-installation

### Disable SELinux

During installation, SELinux should be disabled. To do this, edit the file
**/etc/selinux/config** and replace **enforcing** by **disabled**. You can also run the following command:

```shell
sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config
```

Reboot your operating system to apply the change.

```shell
reboot
```

After system startup, perform a quick check of the SELinux status:

```shell
getenforce
```

You should have this result:
```shell
Disabled
```

### Configure or disable the firewall

If your firewall is active, add [firewall rules](../../administration/secure-platform#enable-firewalld). You can also disable the firewall during installation by running the following commands:

```shell
systemctl stop firewalld
systemctl disable firewalld
```

### Install the repositories

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

#### Redhat CodeReady Builder repository

To install Centreon you will need to enable the official CodeReady Builder
repository supported by Redhat.

Enable the CodeReady Builder repository using these commands:

```shell
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

Enable PHP 7.3 using the following command:
```shell
dnf module enable php:7.3 -y
```

Check that PHP 7.3 is activated:
```shell
dnf module list php
```

You should have this result:
```shell
Red Hat Enterprise Linux 8 for x86_64 - AppStream (RPMs)
Name                                     Stream                                 Profiles                                                 Summary
php                                      7.2 [d]                                common [d], devel, minimal                               PHP scripting language
php                                      7.3 [e]                                common [d], devel, minimal                               PHP scripting language
php                                      7.4                                    common [d], devel, minimal                               PHP scripting language

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
```

</TabItem>
<TabItem value="CentOS 8" label="CentOS 8">

#### Redhat PowerTools repository

To install Centreon you will need to enable the official PowerTools repository
supported by Redhat.

Enable the PowerTools repository using these commands:

- For Centos 8.2:

    ```shell
    dnf -y install dnf-plugins-core epel-release
    dnf config-manager --set-enabled PowerTools
    ```

- For CentOS 8.3 and CentOS Stream:
    ```shell
    dnf -y install dnf-plugins-core epel-release
    dnf config-manager --set-enabled powertools
    ```

Enable PHP 7.3 using the following command:
```shell
dnf module enable php:7.3 -y
```

Check that PHP 7.3 is activated:
```shell
dnf module list php
```

You should have this result:
```shell
CentOS Linux 8 - AppStream
Name                                     Stream                                 Profiles                                                 Summary
php                                      7.2 [d]                                common [d], devel, minimal                               PHP scripting language
php                                      7.3 [e]                                common [d], devel, minimal                               PHP scripting language
php                                      7.4                                    common [d], devel, minimal                               PHP scripting language

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

#### Oracle CodeReady Builder repository

To install Centreon you will need to enable the official Oracle CodeReady
Builder repository supported by Oracle.

Enable the repository using these commands:

```shell
dnf -y install dnf-plugins-core oracle-epel-release-el8
dnf config-manager --set-enabled ol8_codeready_builder
```

Enable PHP 7.3 using the following command:
```shell
dnf module enable php:7.3 -y
```

Check that PHP 7.3 is activated:
```shell
dnf module list php
```

You should have this result:
```shell
Oracle Linux 8 Application Stream (x86_64)
Name                                Stream                                 Profiles                                                 Summary
php                                 7.2 [d]                                common [d], devel, minimal                               PHP scripting language
php                                 7.3 [e]                                common [d], devel, minimal                               PHP scripting language
php                                 7.4                                    common [d], devel, minimal                               PHP scripting language

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

#### Redhat Software Collections repository

To install Centreon you will need to set up the official Software Collections
repository supported by Redhat. It is required for installing PHP 7 and its associated libraries.

Install the Software Collections repository using this command:

```shell
yum install -y centos-release-scl
```

</TabItem>
</Tabs>

#### Centreon repository

To install Centreon software from the repository, you should first install the
centreon-release package, which will provide the repository file.

Install the Centreon repository using this command:

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf install -y https://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-6.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y https://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-6.el7.centos.noarch.rpm
```

</TabItem>
</Tabs>

## Step 2: Installation

This section describes how to install a Centreon central server.

You can install this server with a local database on the server, or
a remote database on a dedicated server.

### With a local database

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf install -y centreon centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y centreon centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
</Tabs>

You can now move to [Step 3](#step-3-configuration).

### With a remote database

> If installing database on a dedicated server, this server should also have
> the prerequired repositories.

Run the following command on the Central server:
<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf install -y centreon-base-config-centreon-engine centreon-widget\*
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y centreon-base-config-centreon-engine centreon-widget\*
```

</TabItem>
</Tabs>

Then run the following commands on the dedicated server:
<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
</Tabs>

Secure your MariaDB installation by executing the following command:
```shell
mysql_secure_installation
```

> It is mandatory to set a password for the root user of the database.

Then create a distant user with **root** privileges needed for Centreon
installation:

```SQL
CREATE USER '<USER>'@'<IP>' IDENTIFIED BY '<PASSWORD>';
GRANT ALL PRIVILEGES ON *.* TO '<USER>'@'<IP>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

> Replace **<IP\>** with the Centreon Central IP address that will connect to
> the database server.
>
> Replace **<USER\>** and **<PASSWORD\>** by user's credentials.

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
> Optionally, tune the memory and buffer utilization of the InnoDB engine powered 
> tables. The example below applies to a database server with 8Gb RAM
>  
> ```shell
> innodb_buffer_pool_size=1G
> ```
>
> Remember to restart MariaDB after a change to configuration.

## Step 3: Configuration

### Server name

If you want, you can change the server's hostname using the following command:
```shell
hostnamectl set-hostname new-server-name
```

Replace **new-server-name** by the name you want. Example:

```shell
hostnamectl set-hostname central
```

### Set the PHP time zone

You are required to set the PHP time zone. Run the following command as `root`:

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php73/php.d/50-centreon.ini
```

</TabItem>
</Tabs>

> Replace **Europe/Paris** by your time zone. You can find the list of
> supported time zones [here](http://php.net/manual/en/timezones.php).

After saving the file, restart the PHP-FPM service:

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
systemctl restart php-fpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
systemctl restart rh-php73-php-fpm
```

</TabItem>
</Tabs>

### Services startup during system bootup

To make services start automatically during system bootup, run these commands
on the central server:

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
systemctl enable php-fpm httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
systemctl enable rh-php73-php-fpm httpd24-httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```

</TabItem>
</Tabs>

> If the database is on a dedicated server, remember to enable **mariadb**
> service on it.

### Secure the database

Since MariaDB 10.5, it is necessary to secure its installation
before installing Centreon.

> Answer yes to all questions except to "Disallow root login remotely?". It is mandatory
> to set a password for the **root** user of the database. You will need this password during the [web installation](../web-and-post-installation).

```shell
mysql_secure_installation
```

> For more information, refer to the [official MariaDB documentation](https://mariadb.com/kb/en/mysql_secure_installation/).

## Step 4: Web installation

1. Start the Apache server with the
following command:

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
systemctl start httpd
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
systemctl start httpd24-httpd
```

</TabItem>
</Tabs>

2. To complete the installation, follow the
[web installation steps](../web-and-post-installation#web-installation) procedure.
