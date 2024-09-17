---
id: using-packages
title: Using packages
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DatabaseRepository from '../_database-repository.mdx';
import DatabaseLocalInstall from '../_database-local-install.mdx';
import DatabaseRemoteInstall from '../_database-remote-install.mdx';
import DatabaseEnableRestart from '../_database-enable-restart.mdx';

Centreon provides RPM and DEB packages for its products through the Centreon Open
Source version available free of charge in our repository.

These packages can be installed on Alma/RHEL/Oracle Linux 8 and 9 and on Debian 12.

You must run the installation procedure as a privileged user.

> When you run a command, check its output. If you get an error message, stop the procedure and fix the issue.

## Prerequisites

After installing your server, update your operating system using the following
command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update
```

### Additional configuration

If you intend to use Centreon in French, Spanish, Portuguese or German, install the corresponding packages:

```shell
dnf install glibc-langpack-fr
dnf install glibc-langpack-es
dnf install glibc-langpack-pt
dnf install glibc-langpack-de
```

Use the following command to check which languages are installed on your system:

```shell
locale -a
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update
```

### Additional configuration

If you intend to use Centreon in French, Spanish, Portuguese or German, install the corresponding packages:

```shell
dnf install glibc-langpack-fr
dnf install glibc-langpack-es
dnf install glibc-langpack-pt
dnf install glibc-langpack-de
```

Use the following command to check which languages are installed on your system:

```shell
locale -a
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

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
**enforcing** with **disabled**. You can also run the following command:

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

> **Note that this deactivation should be temporary.** SELinux should be [reenabled after installation](../../administration/secure-platform.md#activate-selinux) for security reasons.

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

During installation, SELinux should be disabled. To do this, edit the file **/etc/selinux/config** and replace
**enforcing** with **disabled**. You can also run the following command:

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

> **Note that this deactivation should be temporary.** SELinux should be [reenabled after installation](../../administration/secure-platform.md#activate-selinux) for security reasons.

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

SELinux is not installed on Debian 12, continue.

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

If your server is a Cloud RHEL instance, you will have to execute the following command:

```shell
dnf config-manager --set-enabled codeready-builder-for-rhel-8-rhui-rpms
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
<TabItem value="Alma 9" label="Alma 9">

To install Centreon you will need to install the **CodeReady Builder** repository.

Run the following commands:

```shell
dnf install dnf-plugins-core
dnf install epel-release
dnf config-manager --set-enabled crb
```

Enable PHP 8.1 using the following commands:

```shell
dnf module reset php
dnf module install php:8.1
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

To install Centreon you will need to install the **CodeReady Builder** repository.

Run the following commands:

```shell
dnf install -y dnf-plugins-core
dnf install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-9-x86_64-rpms
```

If your server is a Cloud RHEL instance, you will have to execute the following command:

```shell
dnf config-manager --set-enabled codeready-builder-for-rhel-9-rhui-rpms
```

Enable PHP 8.1 using the following commands:

```shell
dnf module reset php
dnf module install php:8.1
```

</TabItem>
<TabItem value="Oracle Linux 9" label="Oracle Linux 9">

To install Centreon you will need to install the **CodeReady Builder** repository.

Run the following commands:

```shell
dnf install dnf-plugins-core
dnf install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
dnf config-manager --set-enabled ol9_codeready_builder
```

Enable PHP 8.1 using the following commands:

```shell
dnf module reset php
dnf module install php:8.1
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

#### Install dependencies

Install the following dependencies:

```shell
apt update && apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2 curl
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

#### Database repository

<DatabaseRepository />

#### Centreon repository

To install Centreon software, you should first install the Centreon repository.

Install the Centreon repository using this command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/24.10/el8/centreon-24.10.repo
dnf clean all --enablerepo=*
dnf update
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/24.10/el9/centreon-24.10.repo
dnf clean all --enablerepo=*
dnf update
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

To install the Centreon repository, execute the following command:

```shell
echo "deb https://packages.centreon.com/apt-standard-24.10-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```

Then import the repository key:

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
apt update
```

</TabItem>
</Tabs>

## Step 2: Installation

This section describes how to install a Centreon central server.

You can install this server with a local database on the server or
a remote database on a dedicated server.

<Tabs groupId="sync">
  <TabItem value="With a local database" label="With a local database">
    <DatabaseLocalInstall />
  </TabItem>
  <TabItem value="With a remote database" label="With a remote database">
    <DatabaseRemoteInstall />
  </TabItem>
</Tabs>

## Step 3: Configuration

### Server name

If you want to change the server's hostname, use the following command:

```shell
hostnamectl set-hostname new-server-name
```

Replace **new-server-name** with the name of your choice. Example:

```shell
hostnamectl set-hostname central
```

### Set the PHP time zone

You are required to set the PHP time zone.

> Replace **Europe/Paris** with your time zone. You can find the list of
> supported time zones [here](http://php.net/manual/en/timezones.php).

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Run the following command as `root`:

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

After saving the file, restart the PHP-FPM service:

```shell
systemctl restart php-fpm
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Run the following command as `root`:

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

After saving the file, restart the PHP-FPM service:

```shell
systemctl restart php-fpm
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
echo "date.timezone = Europe/Paris" >> /etc/php/8.1/mods-available/centreon.ini
```

> The PHP timezone was defined during the installation process by retrieving the timezone configured on the operating system.

After saving the file, restart the PHP8.1-FPM service:

```shell
systemctl restart php8.1-fpm
```

</TabItem>
</Tabs>

### Service startup during system bootup

To make services start automatically during system bootup, run these commands
on the central server:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
systemctl enable crond
systemctl start crond
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
systemctl enable crond
systemctl start crond
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
systemctl enable php8.1-fpm apache2 centreon cbd centengine gorgoned centreontrapd snmpd snmptrapd
```

</TabItem>
</Tabs>

Then execute the following command (on the central server if you are using a local database, or on your remote database server):

<DatabaseEnableRestart />

### Secure the database

It is mandatory to secure the database's root access before installing Centreon.
If you are using a local database, run the following command on the central server:

<Tabs groupId="sync">
<TabItem value="MariaDB" label="MariaDB"> 

```shell
mariadb-secure-installation
```

</TabItem>
<TabItem value="MySQL" label="MySQL"> 

```shell
mysql_secure_installation
```

</TabItem>
</Tabs>

* Answer **yes** to all the questions except "Disallow root login remotely?".
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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl start httpd
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
systemctl start apache2
```

</TabItem>
</Tabs>

2. To complete the installation, follow the
[web installation](../web-and-post-installation.md#web-installation) procedure.
