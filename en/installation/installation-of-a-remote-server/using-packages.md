---
id: using-packages
title: Using packages 
---

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

This section describes how to install a Centreon Remote Server.

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

Run the following command on the Centreon Remote Server:

```shell
yum install -y centreon-base-config-centreon-engine centreon-widget\*
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
[web installation steps](../web-and-post-installation.html#web-installation).

> In the step **Initialization of the monitoring**, only the actions from 6 to 8
> must be done.

## Register the server

To transform the server into a Remote Server and register it to the Centreon Central server, execute the following command:

``` shell
/opt/rh/rh-php72/root/bin/php /usr/share/centreon/bin/registerServerTopology.php -u <API_ACCOUNT> \
-t Remote -h <IP_CENTREON_CENTRAL> -n <REMOTE_SERVER_NAME>
```

Example:

``` shell
/opt/rh/rh-php72/root/bin/php /usr/share/centreon/bin/registerServerTopology.php -u admin \
-t Remote -h 192.168.0.1 -n remote-1
```

> Replace **<IP_CENTREON_CENTRAL>** by the IP of the Centreon server seen by the Remote Server.

> The **<API_ACCOUNT>** must have access to configuration API. you can use default **admin** account.

> If you need to change the HTTP method or the port, you can use the following format for the **-h** option:
> HTTPS://<IP_CENTREON_CENTRAL>:PORT

Then follow instructions by
1. Entering your password:

``` shell
192.168.0.1: please enter your password
```

2. Define if you use a proxy to connect to Centreon central server:

``` shell
Are you using a proxy ? (y/n)n
```

If you use a proxy, please define credentials:

``` shell
Are you using a proxy ? (y/n)y

proxy host: myproxy.example.com

proxy port: 3128

proxy username (press enter if no username/password are required): myuser

please enter the proxy password:
```

3. Select the IP adress:

```shell
Found IP on CURRENT NODE:
   [1]: 192.168.0.2
Which IP do you want to use as CURRENT NODE IP ?1
```

4. Then validate the information:

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

You will receive the validation of the Centreon central server:

``` shell
2020-10-16T17:19:37+02:00 [INFO]: The CURRENT NODE 'remote': 'remote-1@192.168.0.2' linked to TARGET NODE: '192.168.0.1' has been added
```

### Main errors messages

``` shell
error code: 401
error message: Invalid credentials
```

> Your credentials are incorrect for the **<API_ACCOUNT>**.

``` shell
error code: 500
error message: Access Denied.
```

> The **<API_ACCOUNT>** doesn't have access to configuration API.

``` shell
error code: 400
error message: Can't connect to the api
```

> The access url is not complete. Use the **--root** option to define the API URL Path. For example: **--root /monitoring**.

## Extend local DBMS rights

Finally, add rights to **centreon** database user to use **LOAD DATA INFILE**
command:

```sql
GRANT FILE on *.* to 'centreon'@'localhost';
```

## Add the Remote Server to configuration

Go to the
[Add a Remote Server to configuration](../../monitoring/monitoring-servers/add-a-remote-server-to-configuration.html).
