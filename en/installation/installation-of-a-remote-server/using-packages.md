---
id: using-packages
title: Using packages 
---

Installing a Remote Server is similar to installing a Centreon Central Server.

## Pre-installation steps

### Disable SELinux

First, *SELinux* should be disabled. To do this, you have to edit the file
*/etc/selinux/config* and replace *enforcing* by *disabled*:

``` shell
SELINUX=disabled
```

> After saving the file, reboot your operating system to apply the changes.

Perform a quick check of the SELinux status:

``` shell
getenforce
```

You should have this result:

``` shell
Disabled
```

### Installing the repositories

#### Redhat Software Collections Repository

To install Centreon you will need to set up the official software collections repository supported by Redhat.

> Software collections are required for installing PHP 7 and associated libraries (Centreon requirement).

Install the software collections repository using this command:

``` shell
yum install -y centos-release-scl
```

The repository is now installed.

#### Centreon repository

To install Centreon software from the repository, you should first install the centreon-release package, which will
provide the repository file.

Install the Centreon repository using this command:

``` shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

The repository is now installed.

## Install a Centreon Central server

This section describes how to install a Centreon Central server.

### Install a Centreon Central server with local database

Run the command:

``` shell
yum install -y centreon centreon-database
systemctl restart mariadb
```

> Centreon started the compatibility with SQL strict mode but not all components are ready yet. It is mandatory to
> disable the strict mode if you use MariaDB >= 10.2.4 or MySQL >= 5.7.5 for your production environments.

<!--DOCUSAURUS_CODE_TABS-->
<!--MariaDB-->
Execute the following SQL request:

``` SQL
SET sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
```

or modify the */etc/my.cnf.d/centreon.cnf* file to add in the '[server]' section the following line:

``` shell
sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
```

<!--MySQL-->
Execute the following SQL request:

``` SQL
SET sql_mode = 'NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode = 'NO_ENGINE_SUBSTITUTION';
```

or modify the */etc/my.cnf.d/centreon.cnf* file to add in the '[server]' section the following line:

``` shell
sql_mode = 'NO_ENGINE_SUBSTITUTION'
```
<!--END_DOCUSAURUS_CODE_TABS-->

Then restart your DBMS.

### Install a Centreon Central server with a remote database

Run the command:

``` shell
yum install -y centreon-base-config-centreon-engine
```

#### Install the DBMS on the dedicated server

Run the commands:

``` shell
yum install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

> **centreon-database** package installs a database server with an optimized configuration for Centreon.

Then create a distant **root** account:

``` SQL
CREATE USER 'root'@'<IP>' IDENTIFIED BY '<PASSWORD>';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'<IP>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

> Replace **\<IP\>** by the public IP address of the Centreon server and **\<PASSWORD\>** by the **root** password.

> MySQL >= 8 require a strong password. Please use uppercase, numeric and special characters; or uninstall the
> **validate_password** using following command:
>
> ``` SQL
> uninstall plugin validate_password;
> ```

> When running a PHP version before 7.1.16, or PHP 7.2 before 7.2.4, set MySQL 8 Server's default password plugin to
> mysql_native_password or else you will see errors similar to *The server requested authentication method unknown
> to the client [caching_sha2_password]* even when caching_sha2_password is not used.
> This is because MySQL 8 defaults to caching_sha2_password, a plugin that is not recognized by the older PHP
>releases. Instead, change it by setting *default_authentication_plugin=mysql_native_password* in **my.cnf**.
>
> Change the method to store the password using following command:
>
> ``` SQL
> ALTER USER 'root'@'<IP>' IDENTIFIED WITH mysql_native_password BY '<PASSWORD>';
> FLUSH PRIVILEGES;
> ```

> Centreon started the compatibility with SQL strict mode but not all components are ready yet. It is mandatory to
> disable the strict mode if you use MariaDB >= 10.2.4 or MySQL >= 5.7.5 for your production environments.

<!--DOCUSAURUS_CODE_TABS-->
<!--MySQL-->
Execute the following SQL request:

```SQL
SET sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
```

or modify the */etc/my.cnf.d/centreon.cnf* file to add in the '[server]' section the following line:

``` shell
sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
```

<!--MySQL-->
Execute the following SQL request:

```SQL
SET sql_mode = 'NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode = 'NO_ENGINE_SUBSTITUTION';
```

or modify the */etc/my.cnf.d/centreon.cnf* file to add in the '[server]' section the following line:

``` shell
sql_mode = 'NO_ENGINE_SUBSTITUTION'
```
<!--END_DOCUSAURUS_CODE_TABS-->

Then restart your DBMS.

Once the installation is complete you can delete this account using:

``` SQL
DROP USER 'root'@'<IP>';
```

### Database management system

We recommend using MariaDB for your database because it is open source. Ensure the database server is available to
complete the installation (locally or no).

It is necessary to modify **LimitNOFILE** limitation. Do not try to set this option in **/etc/my.cnf** because it will
*not* work. Run the commands:

<!--DOCUSAURUS_CODE_TABS-->
<!--MySQL-->
``` SQL
mkdir -p  /etc/systemd/system/mariadb.service.d/
echo -ne "[Service]\nLimitNOFILE=32000\n" | tee /etc/systemd/system/mariadb.service.d/limits.conf
systemctl daemon-reload
systemctl restart mariadb
```
<!--MySQL-->
``` SQL
mkdir -p  /etc/systemd/system/mysqld.service.d
echo -ne "[Service]\nLimitNOFILE=32000\n" | tee /etc/systemd/system/mysqld.service.d/limits.conf
systemctl daemon-reload
systemctl restart mysqld
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Set the PHP time zone

You are required to set the PHP time zone. Run the command:

``` shell
echo "date.timezone = Europe/Paris" > /etc/opt/rh/rh-php72/php.d/php-timezone.ini
```

> Change **Europe/Paris** to your time zone. You can find the supported list of time zone
> [here](http://php.net/manual/en/timezones.php).

After saving the file, please do not forget to restart the PHP-FPM server:

``` shell
systemctl restart rh-php72-php-fpm
```

### Configure/disable the firewall

Add firewall rules or disable the firewall by running the following commands:

``` shell
systemctl stop firewalld
systemctl disable firewalld
systemctl status firewalld
```

### Configure services startup during system bootup

To make services start automatically during system bootup, run these commands on the central server:

``` shell
systemctl enable httpd24-httpd
systemctl enable snmpd
systemctl enable snmptrapd
systemctl enable rh-php72-php-fpm
systemctl enable centreontrapd
systemctl enable cbd
systemctl enable centengine
systemctl enable gorgoned
systemctl enable centreon
```

<!--DOCUSAURUS_CODE_TABS-->
<!--MySQL-->
``` shell
systemctl enable mariadb
```
<!--MySQL-->
``` shell
systemctl enable mysqld
```
<!--END_DOCUSAURUS_CODE_TABS-->

> If the database is on a dedicated server, execute this last command on the database server.

### Conclude the installation

Before starting the web installation process, you will need to execute the following commands:

``` shell
systemctl start rh-php72-php-fpm
systemctl start httpd24-httpd
systemctl start mysqld
systemctl start centreon
systemctl start snmpd
systemctl start snmptrapd
```

## Web installation

Conclude installation by performing *[web intallation steps](../post-installation.html#Web-installation)*.

## Enable the Remote Server option

Connect to your **Remoter Server** and execute following command:

``` shell
/usr/share/centreon/bin/centreon -u admin -p centreon -a enableRemote -o CentreonRemoteServer \
-v '<IP_CENTREON_CENTRAL>;<not check SSL CA on Central>;<HTTP method>;<TCP port>;<not check SSL CA on Remote>;<no proxy to call Central>'
```

Replace **\<IP_CENTREON_CENTRAL\>** by the IP of the Centreon server seen by
the poller. You can define multiple IP address using a coma as separator.

> To use HTTPS, replace **\<IP_CENTREON_CENTRAL\>** by
> **https://\<IP_CENTREON_CENTRAL\>**.
>
> To use non default port, replace **\<IP_CENTREON_CENTRAL\>** by
> **\<IP_CENTREON_CENTRAL\>:\<PORT\>**

For the **\<not check SSL CA on Central\>** option you can put **1** to do not
check the SS CA on the Centreon Central Server if HTTPS is enabled, or put
**0**.

The **\<HTTP method\>** is to define how the Centreon Central server can
contact the Remote server: HTTP or HTTPS.

The **\<TCP port\>** is to define on wich TCP port the entreon Central
server can contact the Remote server.

For the **\<not check SSL CA on Remote\>** option you can put **1** to do not
check the SS CA on the Remote server if HTTPS is enabled, or put **0**.

For the **\<no proxy to call Central\>** option you can put **1** to do not use
HTTP(S) proxy to contact the Centreon Central server.

This command will enable **Remote Server** mode:

``` shell
Starting Centreon Remote enable process:
Limiting Menu Access...               Success
Limiting Actions...                   Done
Authorizing Master...                 Done
Set 'remote' instance type...         Done
Notifying Master...
Trying host '10.1.2.3'... Success
Centreon Remote enabling finished.
```

Add rights to centreon database user to use **LOAD DATA INFILE** command:

``` SQL
GRANT FILE on *.* to 'centreon'@'localhost';
```

## Add the Remote Server to configuration

Go to the *[Add a Remote Server to configuration](../../monitoring/monitoring-servers/add-a-remote-server-to-configuration.html)*.
