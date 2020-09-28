---
id: using-centreon-iso
title: Using Centreon ISO
---

Installing a Remote Server is similar to installing a Centreon Central Server.

## Step 1: Startup the server

To install Centreon, start up your server from the Centreon ISO image in version el7.
Start up with **Install CentOS 7**:

![image](../../assets/installation/01_bootmenu.png)

## Step 2: Choose a language

Choose the language for the installation process and click on **Continue**:

![image](../../assets/installation/02_select_install_lang.png)

## Step 3: Select the component

Click on the **Installation Type** menu:

![image](../../assets/installation/03_menu_type_install.png)

You have different options to choose from:

![image](../../assets/installation/04_form_type_install.png)

* **Central with database**: Install Centreon (web interface and database), monitoring engine and Broker.
* **Central without database**: Install Centreon (web interface only), monitoring engine and Broker.
* **Poller**: Install poller (monitoring engine and Broker only).
* **Database**: Install database server (if you have already installed a **Central server without a database** option).

After selecting your installation type, click **Done**.

## Step 4: System configuration

### Configure disk Partitioning

Click on the **Installation Destination** menu:

![image](../../assets/installation/05_menu_filesystem.png)

Select the hard disk drive and the **I will configure partitioning** option. Then click on **Done**:

![image](../../assets/installation/06_select_disk.png)

Using the **+** button, create your own partitioning file system following the instructions in
[prerequisites chapter](../prerequisites.html). Then click on **Done**:

![image](../../assets/installation/07_partitioning_filesystem.png)

> It is recommended to use LVM as the default partitioning scheme.

A confirmation window appears. Click on **Accept Changes** to validate the partitioning:

![image](../../assets/installation/08_apply_changes.png)

### Configure the timezone

Click on the **Date & Time** menu:

![image](../../assets/installation/11_menu_timezone.png)

Select the time zone and then click the gear button to configure the NTP server:

![image](../../assets/installation/12_select_timzeone.png)

Type in the name of the NTP server you wish to use and click the plus button. Or, select one from the list of
predefined NTP servers then click **OK** and then **Done**:

![image](../../assets/installation/13_enable_ntp.png)

> It is okay that you can't enable the “network time” option in this screen. It will become enabled automatically when
> you configure the network and hostname.

### Configure the network

Click on the **Network & Hostname** menu:

![image](../../assets/installation/09_menu_network.png)

Enable all network interfaces by clicking the button in the top right from **off** to **on**. Then click on **Done**:

![image](../../assets/installation/10_network_hostname.png)

## Begin the installation

Once configuration is complete, click on **Begin Installation**:

![image](../../assets/installation/14_begin_install.png)

Click on **Root Password**:

![image](../../assets/installation/15_menu_root_password.png)

Define and confirm the **root** user password. Click on **Done**:

![image](../../assets/installation/16_define_root_password.png)

Wait for the installation process to finish. You can also use this time to add additional users to the system if you
desire.

![image](../../assets/installation/17_wait_install.png)

When the installation is complete, click on **Reboot**:

![image](../../assets/installation/18_reboot_server.png)

## Update the system

Connect to your server using a terminal, and execute the command:

``` shell
yum update
```

> Accept all GPG keys if you are prompted

Then restart your server with the following command:

``` shell
reboot
```

### Services startup during system bootup

To make services start automatically during system bootup, run these commands
on the central server:

```shell
systemctl enable rh-php72-php-fpm httpd24-httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```

## Web installation

Conclude installation by performing [web installation steps](../web-and-post-installation.html#Web-installation).

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
parent server address: 192.168.0.1

Do you want to register this server with those informations ? (y/n)y
```

You will receive the validation of the Centreon central server:

``` shell
message: The 'remote-1' Platform: 'remote-1@192.168.0.2.2' linked to '192.168.0.1' has been added
```

### Main errors messages

``` shell
error code: 401
error message: Invalid credentials
```

> You credetials are incorrect for the **<API_ACCOUNT>**.

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
