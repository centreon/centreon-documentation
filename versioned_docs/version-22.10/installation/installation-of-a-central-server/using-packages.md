---
id: using-packages
title: Using packages
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Centreon provides RPM packages for its products through the Centreon Open
Source version available free of charge in our repository.

These packages can be installed on CentOS 7, on Alma/RHEL/Oracle Linux 8 and on Debian 11.

You must run the installation procedure as a privileged user.

## Prerequisites

After installing your server, update your operating system using the following
command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update
```

### Additional configuration

If you intend to use Centreon in French, Spanish or Portuguese, install the corresponding packages:

```shell
dnf install glibc-langpack-fr
dnf install glibc-langpack-es
dnf install glibc-langpack-pt
```

Use the following command to check which languages are installed on your system:

```shell
locale -a
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum update
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update && apt upgrade
```

</TabItem>
</Tabs>

> Accept all GPG keys and reboot your server if a kernel update is proposed.

## Step 1: Pre-installation

### Disable SELinux

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

During installation, SELinux should be disabled. To do this, edit the file **/etc/selinux/config** and replace
**enforcing** by **disabled**. You can also run the following command:

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

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

During installation, SELinux should be disabled. To do this, edit the file **/etc/selinux/config** and replace
**enforcing** by **disabled**. You can also run the following command:

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

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

SELinux is not installed on Debian 11, continue.

</TabItem>
</Tabs>

### Configure or disable the firewall

If your firewall is active, add [firewall rules](../../administration/secure-platform.md#enable-firewalld).
You can also disable the firewall during installation by running the following commands:

```shell
systemctl stop firewalld
systemctl disable firewalld
```

### Install the repositories

<Tabs groupId="sync">

<TabItem value="Alma 8" label="Alma 8">

#### Remi repository

To install Centreon you will need to install the **remi** repository.

Run the following commands:

```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
dnf config-manager --set-enabled 'powertools'
```

Enable PHP 8.1 using the following commands:

```shell
dnf module reset php
dnf module install php:remi-8.1
```

</TabItem>
<TabItem value="RHEL 8" label="RHEL 8">

#### Remi and CodeReady Builder repository

To install Centreon you will need to install the **remi** and **CodeReady Builder** repositories.

Run the following commands:

```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

Enable PHP 8.1 using the following commands:

```shell
dnf module reset php
dnf module install php:remi-8.1
```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

#### Remi and CodeReady Builder repositories

To install Centreon you will need to install the **remi** and **CodeReady Builder** repositories.

Run the following commands:

```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
dnf config-manager --set-enabled ol8_codeready_builder
```

Enable PHP 8.1 using the following commands:

```shell
dnf module reset php
dnf module install php:remi-8.1
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

#### Redhat Software Collections repository

To install Centreon you will need to set up the official Software Collections
repository supported by Redhat. It is required for installing apache 2.4.

Install the Software Collections repository using this command:

```shell
yum install -y centos-release-scl
```

#### Remi repository

To install Centreon you will need to install the **remi** repository.

Run the following commands:

```shell
yum install -y yum-utils
yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum-config-manager --enable remi-php81
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

#### Install dependencies

Install the following dependencies:

```shell
apt update && apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2
```

#### Add Sury APT repository for PHP 8.1

To install the Sury repository, execute the following command:

```shell
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/sury-php.list
```

Then import the repository key:

```shell
wget -O- https://packages.sury.org/php/apt.gpg | gpg --dearmor | tee /etc/apt/trusted.gpg.d/php.gpg  > /dev/null 2>&1
apt update
```

</TabItem>
</Tabs>

#### MariaDB repository

<Tabs groupId="sync">

<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
cd /tmp
curl -JO https://downloads.mariadb.com/MariaDB/mariadb_repo_setup
bash ./mariadb_repo_setup
sed -ri 's/10\../10.5/' /etc/yum.repos.d/mariadb.repo
rm -f ./mariadb_repo_setup
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
cd /tmp
curl -JO https://downloads.mariadb.com/MariaDB/mariadb_repo_setup
bash ./mariadb_repo_setup
sed -ri 's/10\../10.5/' /etc/yum.repos.d/mariadb.repo
rm -f ./mariadb_repo_setup
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

The packages will be installed automatically.

</TabItem>
</Tabs>

#### Centreon repository

To install Centreon software from the repository, you should first install the
centreon-release package, which will provide the repository file.

Install the Centreon repository using this command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y https://yum.centreon.com/standard/22.10/el8/stable/noarch/RPMS/centreon-release-22.10-1.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y https://yum.centreon.com/standard/22.10/el7/stable/noarch/RPMS/centreon-release-22.10-1.el7.centos.noarch.rpm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

To install the Centreon repository, execute the following command:

```shell
echo "deb https://apt.centreon.com/repository/22.10/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
```

Then import the repository key:

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
```

</TabItem>
</Tabs>

## Step 2: Installation

This section describes how to install a Centreon central server.

You can install this server with a local database on the server, or
a remote database on a dedicated server.

<Tabs groupId="sync">
<TabItem value="With a local database" label="With a local database">

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y centreon
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y centreon
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update
apt install -y centreon
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="With a remote database" label="With a remote database">

> If installing the database on a dedicated server, this server should also have
> the prerequired repositories.

Run the following command on the Central server:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y centreon-central
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y centreon-central
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update
apt install -y centreon-central
```

</TabItem>
</Tabs>

Then run the following commands on the dedicated server for your database:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

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
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update
apt install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

</TabItem>
</Tabs>

> It is mandatory to set a password for the root user of the database.

Secure your MariaDB root access by executing the following command:

```shell
mysql_secure_installation
```

Then, in the remote dabatase, create a user with **root** privileges. You will have to enter this user during the 
web installation process (at [step 6](../web-and-post-installation.md#step-6-database-information),
in the **Root user** and **Root password** fields).

```SQL
CREATE USER '<USER>'@'<CENTRAL_SERVER_IP>' IDENTIFIED BY '<PASSWORD>';
GRANT ALL PRIVILEGES ON *.* TO '<USER>'@'<CENTRAL_SERVER_IP>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

Example:

```shell
CREATE USER 'dbadmin'@'<CENTRAL_SERVER_IP>' IDENTIFIED BY '<DBADMIN_PASSWORD>';
GRANT ALL PRIVILEGES ON *.* TO 'dbadmin'@'<CENTRAL_SERVER_IP>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

> Replace **<CENTRAL_SERVER_IP\>** with the Centreon Central IP address that will connect to the database server.
>
> Replace **<USER\>** and **<PASSWORD\>** by the user's credentials.

This user will only be used for the installation process: once the [web installation](../web-and-post-installation.md) is complete you can delete this user using:

```SQL
DROP USER '<USER>'@'<CENTRAL_SERVER_IP>';
```

Example:

```SQL
DROP USER 'dbadmin'@'<CENTRAL_SERVER_IP>';
```

* The package **centreon-database** installs an optimized MariaDB configuration
 to be used with Centreon.

> If this package is not installed, system limitation **LimitNOFILE** should be
> at least set to **32000** using a dedicated configuration file, example:
>
> ```shell
> $ cat /etc/systemd/system/mariadb.service.d/centreon.conf
> [Service]
> LimitNOFILE=32000
> ```

* Same for the MariaDB **open_files_limit** directive:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

> ```shell
> $ cat /etc/my.cnf.d/centreon.cnf
> [server]
> innodb_file_per_table=1
> open_files_limit=32000
> ```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

> ```shell
> $ cat /etc/my.cnf.d/centreon.cnf
> [server]
> innodb_file_per_table=1
> open_files_limit=32000
> ```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

> ```shell
> $ cat /etc/mysql/mariadb.conf.d/80-centreon.cnf
> [server]
> innodb_file_per_table=1
> open_files_limit=32000
> ```
> 
> MariaDB has to listen to all interfaces instead of localhost/127.0.0.1, which is the default value. Edit the following file:
> 
> ```shell
> /etc/mysql/mariadb.conf.d/50-server.cnf
> ```
> 
> Set the **bind-address** parameter to **0.0.0.0** and restart mariadb.
> 
> ```shell
> systemctl restart mariadb
> ```

</TabItem>
</Tabs>

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

</TabItem>
</Tabs>

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

You are required to set the PHP time zone.

> Replace **Europe/Paris** by your time zone. You can find the list of
> supported time zones [here](http://php.net/manual/en/timezones.php).

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 / CentOS 7">

Run the following command as `root`:

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

After saving the file, restart the PHP-FPM service:

```shell
systemctl restart php-fpm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
echo "date.timezone = Europe/Paris" > /etc/php/8.1/mods-available/centreon.ini
```

After saving the file, restart the PHP-FPM service:

```shell
systemctl restart php8.1-fpm
```

</TabItem>
</Tabs>

### Services startup during system bootup

To make services start automatically during system bootup, run these commands
on the central server:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
systemctl enable php-fpm httpd24-httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
systemctl enable php8.1-fpm apache2 centreon cbd centengine gorgoned centreontrapd snmpd snmptrapd
```

</TabItem>
</Tabs>

Then execute the following command (on the central server if you are using a local database, or on your remote database server):

```shell
systemctl enable mariadb
systemctl restart mariadb
```

### Secure the database

Since MariaDB 10.5, it is mandatory to secure the database's root access before installing Centreon.
If you are using a local database, run the following command on the central server:

```shell
mysql_secure_installation
```

* Answer **yes** to all questions except "Disallow root login remotely?".
* It is mandatory to set a password for the **root** user of the database. You will need this password during the [web installation](../web-and-post-installation.md).

> For more information, please see the [official MariaDB documentation](https://mariadb.com/kb/en/mysql_secure_installation/).

## Step 4: Web installation

1. Start the Apache server with the
following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
systemctl start httpd
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
systemctl start httpd24-httpd
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
systemctl start apache2
```

</TabItem>
</Tabs>

2. To complete the installation, follow the
[web installation](../web-and-post-installation.md#web-installation) procedure.
