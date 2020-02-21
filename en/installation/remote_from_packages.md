---
id: remote_from_packages
title: Using packages 
---

Installing a Remote Server is similar to installing a Centreon Central Server.

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

Then restart your DBMS.


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

## Enabling the Remote Server option

Connect to your **Remoter Server** and execute following command:
```Bash
/usr/share/centreon/bin/centreon -u admin -p centreon -a enableRemote -o CentreonRemoteServer \
-v '@IP_CENTREON_CENTRAL;<not check SSL CA on Central>;<HTTP method>;<TCP port>;<not check SSL CA on Remote>;<no proxy to call Central>'
```

Replace **@IP_CENTREON_CENTRAL** by the IP of the Centreon server seen by the poller. You can define multiple IP
address using a coma as separator.

> To use HTTPS, replace **@IP_CENTREON_CENTRAL** by **https://@IP_CENTREON_CENTRAL**.
>
> To use non default port, replace **@IP_CENTREON_CENTRAL** by **@IP_CENTREON_CENTRAL:\<port\>**

For the **\<not check SSL CA on Central\>** option you can put **1** to do not check the SS CA on the Centreon Central
Server if HTTPS is enabled, or put **0**.

The **\<HTTP method\>** is to define how the Centreon Central server can contact the Remote server: HTTP or HTTPS.

The **\<TCP port\>** is to define on wich TCP port the entreon Central server can contact the Remote server.

For the **\<not check SSL CA on Remote\>** option you can put **1** to do not check the SS CA on the Remote server if
HTTPS is enabled, or put **0**.

For the **\<no proxy to call Central\>** option you can put **1** to do not use HTTP(S) proxy to contact the Centreon
Central server.

This command will enable **Remote Server** mode:
```Bash
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
```SQL
GRANT FILE on *.* to 'centreon'@'localhost';
```

## Exchanging SSH Keys

Communication between a central server and a poller server is done through SSH.

You need to exchange SSH keys between the servers.

If you do not have any private SSH keys on the central server for the **centreon** user:
```Bash
su - centreon
ssh-keygen -t rsa
```

> Hit enter when it prompts for a file to save the key to use the default location, or, create one in a specified
> directory. **Leave the passphrase blank**. You will receive a key fingerprint and a randomart image.

Generate a password for the **centreon** user on the new server:
```Bash
passwd centreon
```

Copy this key on to the new server:
```Bash
su - centreon
ssh-copy-id -i .ssh/id_rsa.pub centreon@IP_NEW_SERVER
```

## Configuring a new Centreon Remote Server

Go to the **Configuration > Pollers** menu and click **Add server with wizard** to configure a new poller.

Select **Add a Centreon Remote Server** and click on **Next**:

![image](assets/installation/poller/wizard_add_remote_1.png)

If you enabled the **Remote Server** option when installing your server, select the option **Select a Remote Server**,
then select your server and fill in the form:

![image](assets/installation/poller/wizard_add_remote_2a.png)

Otherwise, select the **Manual input** option and fill in the form:

![image](assets/installation/poller/wizard_add_remote_2b.png)

The **Database username** and **Database password** are the credentials defined during the installation of the Remote
Server.

The **Server IP address** field is of the following form: [(http|https)://]@IP[:(port)]. If your Remote Server is only
available on HTTPS, it is mandatory to define the HTTP method and the TCP port is this one is not the default one.

The **Do not check SSL certificate validation** option allows to connect to the Remote Server using self-signed SSL
certificate.

The **Do not use configured proxy tp connect to this server** allows to connect to the Remote Server without using the
proxy configuration of the Centreon Central server.

Click on **Next**.

Select the poller(s) to link to this Remote Server, then click on **Apply**:

![image](assets/installation/poller/wizard_add_remote_3.png)

The wizard will configure your new server:

![image](assets/installation/poller/wizard_add_remote_4.png)

Once the configuration is exported, restart the Centreon Broker process on the
Remote Server using the following command:
```Bash
systemctl restart cbd
```

The Remote Server is now configured:

![image](assets/installation/poller/wizard_add_remote_5.png)

## Getting started

Go to the [Getting Started](../tutorials/tutorials) chapter to configure your first monitoring.
