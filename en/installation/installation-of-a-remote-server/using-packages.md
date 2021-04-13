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

After installing your server, consider updating your operating system via the
command:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
``` shell
dnf update
```
<!--CentOS 7-->
``` shell
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

This section describes how to install a Centreon Remote Server.

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

<!--END_DOCUSAURUS_CODE_TABS-->

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

### Set the PHP time zone

You are required to set the PHP time zone. Run the command:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```
<!--CentOS 7-->
```shell
echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php73/php.d/50-centreon.ini
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
systemctl restart rh-php73-php-fpm
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
systemctl enable rh-php73-php-fpm httpd24-httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
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

> During web installation, it is not necessary to install Autodiscovery module.

> In the step **Initialization of the monitoring**, only the actions from 6 to 8
> must be done.

## Register the server

To register it to the Centreon Central server or a Remote server, execute the following command:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t remote -h <IP_TARGET_NODE> -n <POLLER_NAME>
```

Example:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t remote -h 192.168.0.1 -n remote-1
```
<!--CentOS 7-->
``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t Poller -h <IP_TARGET_NODE> -n <POLLER_NAME>
```

Example:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t remote -h 192.168.0.1 -n remote-1
```
<!--END_DOCUSAURUS_CODE_TABS-->

> Replace **<IP_TARGET_NODE>** by the IP of the Centreon server seen by the poller or by the Remote Server if you
> want to link your server to it.

> The **<API_ACCOUNT>** must have access to configuration API. You can use default **admin** account.

> If you need to change the HTTP method or the port, you can use the following format for the **-h** option:
> HTTPS://<IP_TARGET_NODE>:PORT

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
Kindly fill in the required information to convert your platform into Remote :

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

### Main errors messages

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

> Your Centreon target version is invalid. It should be greater or equal to 21.04.

## Extend local DBMS rights

Finally, add rights to **centreon** database user to use **LOAD DATA INFILE**
command:

```sql
GRANT FILE on *.* to 'centreon'@'localhost';
```

## Add the Remote Server to configuration

Go to the
[Add a Remote Server to configuration](../../monitoring/monitoring-servers/add-a-remote-server-to-configuration.html).

## Secure your platform

Don't forget to secure your Centreon platform following our
[recommendations](../../administration/secure-platform.html)