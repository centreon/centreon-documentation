---
id: using-packages
title: Using packages
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Centreon provides RPM packages for its products through the Centreon Open
Source version available free of charge in our repository.

These packages can be installed on CentOS 7 and on Alma/RHEL/Oracle Linux 8.

After installing your server, consider updating your operating system via the
command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
dnf update
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

``` shell
yum update
```

</TabItem>
</Tabs>

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

> You can find instructions [here](../../administration/secure-platform.md#enable-firewalld) to configure firewalld.

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

Enable PHP 8.0 using the following commands:
```shell
dnf module reset php
dnf module install php:remi-8.0
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

Enable PHP 8.0 using the following commands:
```shell
dnf module reset php
dnf module install php:remi-8.0
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

Enable PHP 8.0 using the following commands:
```shell
dnf module reset php
dnf module install php:remi-8.0
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
yum-config-manager --enable remi-php80
```

</TabItem>
</Tabs>

#### Centreon repository

To install Centreon software from the repository, you should first install the
centreon-release package, which will provide the repository file.

Install the Centreon repository using this command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y https://yum.centreon.com/standard/22.04/el8/stable/noarch/RPMS/centreon-release-22.04-3.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y https://yum.centreon.com/standard/22.04/el7/stable/noarch/RPMS/centreon-release-22.04-3.el7.centos.noarch.rpm
```

</TabItem>
</Tabs>

## Installation

This section describes how to install a Centreon Remote Server.

It's possible to install this server with a local database on the server, or
a remote database on a dedicated server.

### With a local database

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
</Tabs>

You can now move on to the [next step](#configuration).

### With a remote database

> If installing database on a dedicated server, this server should also have
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
</Tabs>

Then run the following commands on the dedicated server:
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
</Tabs>

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
>
> Remember to restart MariaDB after a change to configuration.

## Configuration

### Server name

If you want, you can change the server's name using the following command:
```shell
hostnamectl set-hostname new-server-name
```

Replace **new-server-name** by the name you want. Example:
```shell
hostnamectl set-hostname remote1
```

### Set the PHP time zone

You are required to set the PHP time zone. Run the command:

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

> Replace **Europe/Paris** by your time zone. You can find the list of
> supported time zones [here](http://php.net/manual/en/timezones.php).

After saving the file, please do not forget to restart the PHP-FPM service:

```shell
systemctl restart php-fpm
```

### Services startup during system bootup

To make services start automatically during system bootup, run these commands
on the central server:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
systemctl enable php-fpm httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
systemctl enable php-fpm httpd24-httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```

</TabItem>
</Tabs>

> If the database is on a dedicated server, remember to enable **mariadb**
> service on it.

### Secure the database

If you have installed the Centreon server with a local database, since MariaDB 10.5, it is mandatory to secure the database's root access before installing Centreon. Run the following command:

```shell
mysql_secure_installation
```

* Answer **yes** to all questions except "Disallow root login remotely?".
* It is mandatory to set a password for the **root** user of the database. You will need this password during the [web installation](../web-and-post-installation.md).

> For more information, please see the [official MariaDB documentation](https://mariadb.com/kb/en/mysql_secure_installation/).


## Web installation

Before starting the web installation process, start the Apache server with the
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
</Tabs>

Conclude installation by performing
[web installation steps](../web-and-post-installation.md#web-installation).

> During web installation, it is not necessary to install Autodiscovery module.

> In the step **Initialization of the monitoring**, only the actions from 6 to 8
> must be done.

## Register the server

To transform the server into a Remote Server and to register it to the Central server or to another Remote server, execute the following command on the future remote server:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t remote -h <IP_TARGET_NODE> -n <POLLER_NAME>
```

Example:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t remote -h 192.168.0.1 -n remote-1
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t Poller -h <IP_TARGET_NODE> -n <POLLER_NAME>
```

Example:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t remote -h 192.168.0.1 -n remote-1
```

</TabItem>
</Tabs>

> Replace **<IP_TARGET_NODE>** by the IP of the central server, as seen by the remote server.

> The **<API_ACCOUNT>** must have access to the configuration API. You can use the default **admin** account.

> If you need to change the HTTP method or the port, you can use the following format for the **-h** option:
> `HTTPS://<IP_TARGET_NODE>:PORT`

Then follow instructions by
1. Entering your password:

    ``` shell
    192.168.0.1: please enter your password:
    ```

2. Select the IP address if multiple network interfaces exist:

    ```shell
    Which IP do you want to use as CURRENT NODE IP ?
    1) 192.168.0.2
    2) 192.168.0.3
    1
    ```

3. Then validate the information:

    ``` shell
    Summary of the informations that will be send:

    Api Connection:
    username: admin
    password: ******
    target server: 192.168.0.1

    Pending Registration Server:
    name: remote-1
    type: remote
    address: 192.168.0.2

    Do you want to register this server with those informations ? (y/n)y
    ```

4. Add additional information to enable future communication between your Remote Server and its Central,
fill in the required information to convert your platform into a Remote server:

  ```shell
  <CURRENT_NODE_ADDRESS> : Please enter your username:
  admin
  <CURRENT_NODE_ADDRESS> : Please enter your password:

  <CURRENT_NODE_ADDRESS> : Protocol [http]:
  <CURRENT_NODE_ADDRESS> : Port [80]:
  <CURRENT_NODE_ADDRESS> : centreon root folder [centreon]:
  ```

5. If you use a proxy, please define credentials:

    ```shell
    Are you using a proxy ? (y/n)
    y
    enter your proxy Host:
    myproxy.example.com
    enter your proxy Port [3128]:
    Are you using a username/password ? (y/n)
    y
    enter your username:
    my_proxy_username
    enter your password:

    ```

You will receive the validation of the Centreon central server:

``` shell
2020-10-16T17:19:37+02:00 [INFO]: The CURRENT NODE 'remote: 'remote-1@192.168.0.2' has been converted and registered successfully.
```

### Main error messages

``` shell
2020-10-20T10:23:15+02:00 [ERROR]: Invalid credentials
```

> Your credentials are incorrect for the **<API_ACCOUNT>**.

``` shell
2020-10-20T10:24:59+02:00 [ERROR]: Access Denied.
```

> The **<API_ACCOUNT>** doesn't have access to configuration API.

``` shell
Failed connect to 192.168.0.1:444; Connection refused
```

> Unable to access to the API. Please check **<IP_TARGET_NODE>**, scheme and port.

``` shell
2020-10-20T10:39:30+02:00 [ERROR]: Can’t connect to the API using: https://192.168.0.1:443/centreon/api/latest/login
```

> The access url is not complete or invalide. Use the **--root** option to define the API URL Path. For example: **--root monitoring**.

``` shell
2020-10-20T10:42:23+02:00 [ERROR]: No route found for “POST /centreon/api/latest/platform/topology”
```

> Your Centreon target version is invalid. It should be greater or equal to 22.04.

## Extend local DBMS rights

Finally, add rights to **centreon** database user to use **LOAD DATA INFILE**
command:

```sql
GRANT FILE on *.* to 'centreon'@'localhost';
```

## Add the Remote Server to configuration

Go to the
[Add a Remote Server to configuration](../../monitoring/monitoring-servers/add-a-remote-server-to-configuration.md).

## Secure your platform

Don't forget to secure your Centreon platform following our
[recommendations](../../administration/secure-platform.md)
