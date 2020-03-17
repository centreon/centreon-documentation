---
id: remote-from-iso
title: Using Centreon ISO
---

Installing a Remote Server is similar to installing a Centreon Central Server.

## Step 1: Startup the server

To install Centreon, start up your server from the Centreon ISO image in version el7.
Start up with **Install CentOS 7**:

![image](assets/installation/01_bootmenu.png)

## Step 2: Choose a language

Choose the language for the installation process and click on **Continue**:

![image](assets/installation/02_select_install_lang.png)

## Step 3: Select the component

Click on the **Installation Type** menu:

![image](assets/installation/03_menu_type_install.png)

You have different options to choose from:

![image](assets/installation/04_form_type_install.png)

* **Central with database**: Install Centreon (web interface and database), monitoring engine and Broker.
* **Central without database**: Install Centreon (web interface only), monitoring engine and Broker.
* **Poller**: Install poller (monitoring engine and Broker only).
* **Database**: Install database server (if you have already installed a **Central server without a database** option).

After selecting your installation type, click **Done**.

## Step 4: System configuration

### Configure disk Partitioning

Click on the **Installation Destination** menu:

![image](assets/installation/05_menu_filesystem.png)

Select the hard disk drive and the **I will configure partitioning** option. Then click on **Done**:

![image](assets/installation/06_select_disk.png)

Using the **+** button, create your own partitioning file system following the instructions in
[prerequisites chapter](prerequisites.html). Then click on **Done**:

![image](assets/installation/07_partitioning_filesystem.png)

> It is recommended to use LVM as the default partitioning scheme.

A confirmation window appears. Click on **Accept Changes** to validate the partitioning:

![image](assets/installation/08_apply_changes.png)

### Configure the timezone

Click on the **Date & Time** menu:

![image](assets/installation/11_menu_timezone.png)

Select the time zone and then click the gear button to configure the NTP server:

![image](assets/installation/12_select_timzeone.png)

Type in the name of the NTP server you wish to use and click the plus button. Or, select one from the list of
predefined NTP servers then click **OK** and then **Done**:

![image](assets/installation/13_enable_ntp.png)

> It is okay that you can't enable the “network time” option in this screen. It will become enabled automatically when
> you configure the network and hostname.

### Configure the network

Click on the **Network & Hostname** menu:

![image](assets/installation/09_menu_network.png)

Enable all network interfaces by clicking the button in the top right from **off** to **on**. Then click on **Done**:

![image](assets/installation/10_network_hostname.png)

## Begin the installation

Once configuration is complete, click on **Begin Installation**:

![image](assets/installation/14_begin_install.png)

Click on **Root Password**:

![image](assets/installation/15_menu_root_password.png)

Define and confirm the **root** user password. Click on **Done**:

![image](assets/installation/16_define_root_password.png)

Wait for the installation process to finish. You can also use this time to add additional users to the system if you
desire.

![image](assets/installation/17_wait_install.png)

When the installation is complete, click on **Reboot**:

![image](assets/installation/18_reboot_server.png)

## Update the system

Connect to your server using a terminal, and execute the command:

``` shell
yum update
```

![image](assets/installation/19_update_system.png)

Accept all GPG keys if you are prompted:

![image](assets/installation/20_accept_gpg_key.png)

Then restart your server with the following command:

``` shell
reboot
```

## First configuration

Conclude installation by performing [first configuration](post-install.html#Web-installation).

## Enable the Remote Server option

Connect to your **Remoter Server** and execute following command:

``` shell
/usr/share/centreon/bin/centreon -u admin -p centreon -a enableRemote -o CentreonRemoteServer \
-v '<IP_CENTREON_CENTRAL>;<not check SSL CA on Central>;<HTTP method>;<TCP port>;<not check SSL CA on Remote>;<no proxy to call Central>'
```

Replace **\<IP_CENTREON_CENTRAL\>** by the IP of the Centreon server seen by the poller. You can define multiple IP
address using a coma as separator.

> To use HTTPS, replace **\<IP_CENTREON_CENTRAL\>** by **https://\<IP_CENTREON_CENTRAL\>**.
>
> To use non default port, replace **\<IP_CENTREON_CENTRAL\>** by **\<IP_CENTREON_CENTRAL\>:\<PORT\>**

For the **\<not check SSL CA on Central\>** option you can put **1** to do not check the SS CA on the Centreon Central
Server if HTTPS is enabled, or put **0**.

The **\<HTTP method\>** is to define how the Centreon Central server can contact the Remote server: HTTP or HTTPS.

The **\<TCP port\>** is to define on wich TCP port the entreon Central server can contact the Remote server.

For the **\<not check SSL CA on Remote\>** option you can put **1** to do not check the SS CA on the Remote server if
HTTPS is enabled, or put **0**.

For the **\<no proxy to call Central\>** option you can put **1** to do not use HTTP(S) proxy to contact the Centreon
Central server.

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

## Exchanging SSH Keys

Communication between a central server and a poller server is done through SSH.

You need to exchange SSH keys between the servers.

If you do not have any private SSH keys on the central server for the **centreon** user:

``` shell
su - centreon
ssh-keygen -t rsa
```

> Hit enter when it prompts for a file to save the key to use the default location, or, create one in a specified
> directory. **Leave the passphrase blank**. You will receive a key fingerprint and a randomart image.

Generate a password for the **centreon** user on the new server:

``` shell
passwd centreon
```

Copy this key on to the new server:

``` shell
su - centreon
ssh-copy-id -i .ssh/id_rsa.pub centreon@IP_NEW_SERVER
```

## Configure a new Centreon Remote Server

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

``` shell
systemctl restart cbd
```

The Remote Server is now configured:

![image](assets/installation/poller/wizard_add_remote_5.png)

## Getting started

Go to the [Getting Started](../tutorials/first-steps.html) chapter to configure your first monitoring.
