---
id: centreon_from_packages
title: Using packages
---

Centreon provides RPM packages for its products through the Centreon open source version available free of charge in
our repository.

These packages have been successfully tested in version 7.x CentOS and Red Hat environments.

Update your operating system via the command:
```Bash
yum update
```

> Accept all GPG keys and consider rebooting your server if a kernel update is proposed.

## Pre-installation steps

### Disable SELinux

First, *SELinux* should be disabled. To do this, you have to edit the file
*/etc/selinux/config* and replace *enforcing* by *disabled*:
```Bash
SELINUX=disabled
```

> After saving the file, reboot your operating system to apply the changes.

Perform a quick check of the SELinux status:
```Bash
getenforce
```
You should have this result:
```Bash
Disabled
```

### Installing the repository

#### Redhat Software Collections Repository

To install Centreon you will need to set up the official software collections repository supported by Redhat.

> Software collections are required for installing PHP 7 and associated libraries (Centreon requirement).

Install the software collections repository using this command:
```Bash
yum install centos-release-scl
```

The repository is now installed.

#### Centreon repository

To install Centreon software from the repository, you should first install the centreon-release package, which will
provide the repository file.

Install the Centreon repository using this command:

```Bash
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

The repository is now installed.

Some may not have the wget package installed. If not perform the following:

```Bash
yum install wget
```

## Installing a Centreon Central Server

This section describes how to install a Centreon central server.

### Installing a Centreon Central Server with database

Run the command:

```Bash
yum install centreon
systemctl restart mysql
```

> Centreon started the compatibility with SQL strict mode but not all components are ready yet. It is mandatory to
> disable the strict mode if you use MariaDB \>= 10.2.4 or MySQL \>= 5.7.5 for your production environments.

<!--DOCUSAURUS_CODE_TABS-->
<!--MariaDB-->
Execute the following SQL request:

```SQL
SET sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
```

or modify the */etc/my.cnf.d/centreon.cnf* file to add in the '[server]' section the following line:

```Bash    
sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
```

<!--MySQL-->
Execute the following SQL request:

```SQL   
SET sql_mode = 'NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode = 'NO_ENGINE_SUBSTITUTION';
```

or modify the */etc/my.cnf.d/centreon.cnf* file to add in the '[server]' section the following line:

```Bash
sql_mode = 'NO_ENGINE_SUBSTITUTION'
```
<!--END_DOCUSAURUS_CODE_TABS-->

then restart your DBMS.

### Installing a Centreon Central Server without database

Run the command:

```Bash
yum install centreon-base-config-centreon-engine
```

#### Installing the DBMS on the dedicated server

Run the commands:

```Bash
yum install centreon-database
systemctl daemon-reload
systemctl restart mysql
```
> **centreon-database** package installs a database server optimized for use with Centreon.

Then create a distant **root** account:

```SQL
CREATE USER 'root'@'IP' IDENTIFIED BY 'PASSWORD';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'IP' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

> Replace **IP** by the public IP address of the Centreon server and **PASSWORD**     by the **root** password.

> MySQL >= 8 require a strong password. Please use uppercase, numeric and special characters; or uninstall the
> **validate_password** using following command:
> ```SQL
> uninstall plugin validate_password;
> ```

> When running a PHP version before 7.1.16, or PHP 7.2 before 7.2.4, set MySQL 8 Server's default password plugin to
> mysql_native_password or else you will see errors similar to *The server requested authentication method unknown
> to the client [caching_sha2_password]* even when caching_sha2_password is not used.
> 
> This is because MySQL 8 defaults to caching_sha2_password, a plugin that is not recognized by the older PHP
>releases. Instead, change it by setting *default_authentication_plugin=mysql_native_password* in **my.cnf**.
>
> Change the method to store the password using following command:
> ```SQL
> ALTER USER 'root'@'IP' IDENTIFIED WITH mysql_native_password BY 'PASSWORD';
> FLUSH PRIVILEGES;
> ```

> Centreon started the compatibility with SQL strict mode but not all components are ready yet. It is mandatory to
> disable the strict mode if you use MariaDB >= 10.2.4 or MySQL >= 5.7.5 for your production environments.

<!--DOCUSAURUS_CODE_TABS-->
<!--MariaDB-->
Execute the following SQL request:

```SQL
SET sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
```

or modify the */etc/my.cnf.d/centreon.cnf* file to add in the '[server]' section the following line:

```Bash    
sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
```

<!--MySQL-->
Execute the following SQL request:

```SQL   
SET sql_mode = 'NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode = 'NO_ENGINE_SUBSTITUTION';
```

or modify the */etc/my.cnf.d/centreon.cnf* file to add in the '[server]' section the following line:

```Bash
sql_mode = 'NO_ENGINE_SUBSTITUTION'
```

<!--END_DOCUSAURUS_CODE_TABS-->

then restart your DBMS.

Once the installation is complete you can delete this account using:
```SQL
DROP USER 'root'@'IP';
```

### Database management system

We recommend using MariaDB for your database because it is open source. Ensure the database server is available to
complete the installation (locally or no).

It is necessary to modify **LimitNOFILE** limitation. Do not try to set this option in **/etc/my.cnf** because it will
*not* work. Run the commands:

<!--DOCUSAURUS_CODE_TABS-->
<!--MariaDB-->

```SQL
mkdir -p  /etc/systemd/system/mariadb.service.d/
echo -ne "[Service]\nLimitNOFILE=32000\n" | tee /etc/systemd/system/mariadb.service.d/limits.conf
systemctl daemon-reload
systemctl restart mysql
```

<!--MySQL-->

```SQL
mkdir -p  /etc/systemd/system/mysqld.service.d
echo -ne "[Service]\nLimitNOFILE=32000\n" | tee /etc/systemd/system/mysqld.service.d/limits.conf
systemctl daemon-reload
systemctl restart mysqld
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Setting the PHP time zone

You are required to set the PHP time zone. Run the command:

```Bash
echo "date.timezone = Europe/Paris" > /etc/opt/rh/rh-php72/php.d/php-timezone.ini
```

> Change **Europe/Paris** to your time zone. You can find the supported list of time zone
> [here](http://php.net/manual/en/timezones.php).

After saving the file, please do not forget to restart the PHP-FPM server:

```Bash
systemctl restart rh-php72-php-fpm
```

### Configuring/disabling the firewall

Add firewall rules or disable the firewall by running the following commands:
```Bash
systemctl stop firewalld
systemctl disable firewalld
systemctl status firewalld
```

### Launching services during system bootup

To make services start automatically during system bootup, run these commands on the central server:

```Bash
systemctl enable httpd24-httpd
systemctl enable snmpd
systemctl enable snmptrapd
systemctl enable rh-php72-php-fpm
systemctl enable centcore
systemctl enable centreontrapd
systemctl enable cbd
systemctl enable centengine
systemctl enable centreon
```

> If the MariaDB database is on a dedicated server, execute this command on the database server:
> ```Bash      
> systemctl enable mysql
> ```
> or for Mysql:
> ```Bash
> systemctl enable mysqld
> ```

### Concluding the installation

Before starting the web installation process, you will need to execute the following commands:

```Bash
systemctl start rh-php72-php-fpm
systemctl start httpd24-httpd
systemctl start mysqld
systemctl start centreon
systemctl start snmpd
systemctl start snmptrapd
```
## First configuration

Conclude installation by performance [first configuration](post-install#Web-installation).