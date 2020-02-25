---
id: tutorials
title: First steps
---

This chapter describes you how to quickly start to configure your Centreon monitoring interface by using configuration
objects.

## Login

To connect to your Centreon web interface access to URL: http://IP_ADDRESS/centreon

> Replace **IP_ADDRESS** by the IP address or FQDN of your Centreon web server.

Inform your user name and associated password and click on **Connect** button:

![image](assets/tutorials/aconnection.png)

You are now connected to Centreon web interface.

## Introduction to menus

The Centreon web interface contains several menus, each with a specific function:

![image](assets/tutorials/amenu.png)

* **Home** lets you access the first home screen after logging in. It provides a summary of overall monitoring status.
  Your workspace may be blank for now. Once you configure customizable widgets, you will see data and charts according
  to your customization.
* **Monitoring** provides a combined view of the status of all monitored items in real and delayed time using logs and
  performance graphics.
* **Reporting** provides an intuitive view (using diagrams) of the evolution of monitoring over a given period.
* **Configuration** allows you to configure all monitored items and the monitoring infrastructure.
* **Administration** allows you to configure the Centreon web interface and view the overall status of the servers.

## Change the user interface language

On the banner, click on the profile icon, then click on **Edit profile**:

![image](assets/tutorials/change_language_1.png)

In the select box of language, select your language:

![image](assets/tutorials/change_language_2.png)

Then click on **Save**. Your interface is now translated.

> If your language doesn't appear in the list of available language, you can help the Centreon community to translate
> the web interface. Go to the @TODO@(ref to how to translate menu) chapter for more information.

## Basic principle of monitoring

Before starting to monitor, let's take a look at some basic concepts:

* A **host** is any device that has an IP address and that one wishes to monitor. For example, a physical server, a
  virtual machine, a temperature probe, an IP camera, a printer or a storage space.
* A **service** is a check point, or indicator, to be monitored on a host. This can be the CPU usage rate, temperature,
  motion detection, bandwidth usage rate, disk I/O, and so on.
* In order to collect each indicator value, monitoring **plugins** are used which are periodically executed by a
  collection engine called Centreon Engine.
* To be executed, a plugin needs a set of arguments that define, for example, which host to connect to or through which protocol.
  The plugin and its associated arguments form a **command**.

For example, to monitor a host with Centreon is to configure all the commands needed to measure the desired indicators,
and then deploy that configuration to the collection engine so that these commands are run periodically.

Nevertheless, to drastically simplify the configuration, we will rely on monitoring templates:

* A **host template** defines the configuration of the indicators for a given type of equipment.
* It relies on **service templates** that define the configuration of the commands needed to collect these indicators.
* Centreon provides downloadable **Plugins Packs** to install on its monitoring platform: each Plugin Pack includes host
  and services templates to configure the monitoring of a particular device in a few clicks.

This quick start guide proposes to install the monitoring templates supplied free of charge with the Centreon solution
and then to implement them to monitor your first equipment.

![image](assets/tutorials/host_service_command.png)

> To go further with templates, please read the Templates chapter @TODO@(ref:hosttemplates>).

## Installation of basic monitoring templates

Go to the **Configuration \> Plugin Packs** menu.

> Configure the proxy @TODO@(add the link ref:proxyimp) to allow the Centreon server to access the Internet.

Install the **base-generic** Plugin Pack by moving your cursor on it and by clicking on **+** icon (it is a prerequisite
to the installation of any other Plugin Pack):

![image](assets/tutorials/pp_base_generic.png)

Install other Plugin Packs you probably need for your environment, for **Linux SNMP** and **Windows SNMP** available
for free:

![image](assets/tutorials/pp_install_basic.gif)

Now you have the basic templates and plugins to initial monitoring!

Five additional Packs are available once you register on [our web site](https://store.centreon.com), and over 300
more if you subscribe to the [IMP offer](https://store.centreon.com). @TODO@(change this sentence!!!)

> If you already have a Centreon account, [you can now authenticate your Centreon platform]
> (https://documentation.centreon.com/docs/plugins-packs/en/latest/installation.html)
> to receive additional Plugin Packs or any services associated with your account.

## Monitor a Linux server with SNMP

Go to the **Configuration \> Plugin Packs** menu and install **Linux SNMP** Plugin Pack:

![image](assets/tutorials/quick_start_linux_0.gif)

Go to the **Configuration \> Hosts \> Hosts** menu and click on **Add**:

![image](assets/tutorials/quick_start_linux_1.png)

Fill in the following information:

* The name of the server
* A description of the server
* The IP address
* The SNMP version and community

Click on **+ Add a new entry** button in **Templates** field, then select the **OS-Linux-SNMP-custom** template in the list.

Click on **Save**.

Your equipment has been added to the monitoring configuration:

![image](assets/tutorials/quick_start_linux_2.png)

Go to **Configuration \> Services \> Services by host** menu. A set of indicators has been automatically deployed:

![image](assets/tutorials/quick_start_linux_3.png)

Other indicators can be monitored. Click on **Add** button to add a new service as bandwidth usage for example:

![image](assets/tutorials/quick_start_linux_4a.png)

In the **Description** field, enter the name of the service to create, then select the host to link this service. In
the **Template** filed, select the **OS-Linux-Traffic-Generic-Name-SNMP-custom** template.

A list of macros corresponding to the model will then appear:

![image](assets/tutorials/quick_start_linux_4b.png)

Enter the name of the network interface for the **INTERFACENAME** macro value and click on **Save** to add this
indicator into the monitoring configuration.

Do the same to add packet error monitoring:

![image](assets/tutorials/quick_start_linux_5.png)

Or for file system:

![image](assets/tutorials/quick_start_linux_6.png)

It is now time to [deploy the supervision](#deploying-a-configuration).

Then go to the **Monitoring \> Status Details \> Services** menu and select **All** value for the **Service Status**
filter. After a few minutes, the first results of the monitoring appear:

![image](assets/tutorials/quick_start_linux_7.png)

#### To go further

The **Linux SNMP** Plugin Pack provides several monitoring templates. When creating a service, it is possible to search
the available models in the selection list: 

![image](assets/tutorials/quick_start_linux_8.png)

It is also possible to access the **Configuration \> Services \> Templates** menu to know the complete list:

![image](assets/tutorials/quick_start_linux_9.png)

To know the name of the available files system you can execute the plugin in command line:

```Bash
$  /usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --hostname=10.40.1.169 --snmp-community=public --snmp-version=2c --mode=list-storages
List storage:
Skipping storage 'Physical memory': no type or no matching filter type
Skipping storage 'Swap space': no type or no matching filter type
Skipping storage 'Virtual memory': no type or no matching filter type
'/' [size = 21003583488B] [id = 31]
'/dev/shm' [size = 1986875392B] [id = 36]
'/run' [size = 1986875392B] [id = 38]
'/sys/fs/cgroup' [size = 1986875392B] [id = 39]
'/boot' [size = 1015308288B] [id = 57]
'/var/cache/centreon/backup' [size = 5150212096B] [id = 58]
'/var/lib/centreon-broker' [size = 5150212096B] [id = 59]
Skipping storage 'Memory buffers': no type or no matching filter type
'/var/lib/centreon' [size = 7264002048B] [id = 60]
'/var/log' [size = 10434662400B] [id = 61]
'/var/lib/mysql' [size = 16776032256B] [id = 62]
'/run/user/0' [size = 397377536B] [id = 63]
Skipping storage 'Cached memory': no type or no matching filter type
Skipping storage 'Shared memory': no type or no matching filter type
```

It is the same to know the name of the available network interfaces:

```Bash
$  /usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --hostname=10.40.1.169 --snmp-community=public --snmp-version=2c --mode=list-interfaces
List interfaces:
'lo' [speed = 10, status = up, id = 1]
'enp0s3' [speed = 1000, status = up, id = 2]
```

## Monitor a Windows server with SNMP

Go to the **Configuration \> Plugin Packs** menu and install **Windows SNMP** Plugin Pack:

![image](assets/tutorials/quick_start_windows_0.gif)

Go to the **Configuration \> Hosts \> Hosts** menu and click on **Add**:

![image](assets/tutorials/quick_start_windows_1.png)

Fill in the following information:

* The name of the server
* A description of the server
* The IP address
* The SNMP version and community

Click on **+ Add a new entry** button in **Templates** field, then select the **OS-Windows-SNMP-custom**
template in the list.

Click on **Save**.

Your equipment has been added to the monitoring configuration:

![image](assets/tutorials/quick_start_windows_2.png)

Go to **Configuration \> Services \> Services by host** menu. A set of indicators has been automatically deployed:

![image](assets/tutorials/quick_start_windows_3.png)

Other indicators can be monitored. Click on **Add** button to add a new service as file system usage for example:

![image](assets/tutorials/quick_start_windows_4a.png)

In the **Description** field, enter the name of the service to create, then select the host to link this service. In
the **Template** filed, select the **OS-Windows-Disk-Generic-Name-SNMP-custom** template.

A list of macros corresponding to the model will then appear:

![image](assets/tutorials/quick_start_windows_4b.png)

Enter the name of the file system for the **DISKNAME** macro value and add **--regexp** for the value of **EXTRAOPTIONS**
macro, then and click on **Save** to add this indicator into the monitoring configuration.

Do the same to network bandwidth usage monitoring:

![image](assets/tutorials/quick_start_windows_5.png)

It is now time to [deploy the supervision](#deploying-a-configuration).

Then go to the **Monitoring \> Status Details \> Services** menu and select **All** value for the **Service Status**
filter. After a few minutes, the first results of the monitoring appear:

![image](assets/tutorials/quick_start_windows_6.png)

#### To go further

The **Windows SNMP** Plugin Pack provides several monitoring templates. When creating a service, it is possible to
search the available models in the selection list: 

![image](assets/tutorials/quick_start_windows_7.png)

It is also possible to access the **Configuration \> Services \> Templates** menu to know the complete list:

![image](assets/tutorials/quick_start_windows_8.png)

To know the name of the available files system you can execute the plugin in command line:

```Bash
$ /usr/lib/centreon/plugins/centreon_windows_snmp.pl --plugin=os::windows::snmp::plugin --hostname=10.24.11.66 --snmp-version='2c' --snmp-community='public' --mode=list-storages
List storage:
'C:\ Label:  Serial Number 2cb607df' [size = 53317988352B] [id = 1]
Skipping storage 'Virtual Memory': no type or no matching filter type
Skipping storage 'Physical Memory': no type or no matching filter type
```

It is the same to know the name of the available network interfaces:

```Bash
$ /usr/lib/centreon/plugins/centreon_windows_snmp.pl --plugin=os::windows::snmp::plugin --hostname=10.24.11.66 --snmp-version='2c' --snmp-community='public' --mode=list-interfaces
List interfaces:
'loopback_0' [speed = 1073, status = up, id = 1]
'ethernet_3' [speed = , status = notPresent, id = 10]
'ppp_1' [speed = , status = notPresent, id = 11]
'ethernet_10' [speed = 1000, status = up, id = 12]
'tunnel_4' [speed = 0.1, status = down, id = 13]
'ethernet_4' [speed = , status = up, id = 14]
'ethernet_5' [speed = , status = up, id = 15]
'ethernet_6' [speed = , status = up, id = 16]
'ethernet_7' [speed = , status = up, id = 17]
'ethernet_8' [speed = , status = up, id = 18]
'ethernet_9' [speed = , status = up, id = 19]
'tunnel_0' [speed = , status = down, id = 2]
'ethernet_11' [speed = 1000, status = up, id = 20]
'ethernet_12' [speed = 1000, status = up, id = 21]
'ethernet_13' [speed = 1000, status = up, id = 22]
'tunnel_1' [speed = , status = down, id = 3]
'tunnel_2' [speed = , status = down, id = 4]
'tunnel_3' [speed = , status = down, id = 5]
'ppp_0' [speed = , status = down, id = 6]
'ethernet_0' [speed = , status = up, id = 7]
'ethernet_1' [speed = , status = up, id = 8]
'ethernet_2' [speed = , status = up, id = 9]
```

## Monitor a Cisco Router with SNMP

Go to the **Configuration \> Plugin Packs** menu and install **Cisco Standard** Plugin Pack:

![image](assets/tutorials/quick_start_cisco_0.gif)

Go to the **Configuration \> Hosts \> Hosts** menu and click on **Add**:

![image](assets/tutorials/quick_start_cisco_1.png)

Fill in the following information:

* The name of the server
* A description of the server
* The IP address
* The SNMP version and community

Click on **+ Add a new entry** button in **Templates** field, then select the **Net-Cisco-Standard-SNMP-custom**
template in the list.

Click on **Save**.

Your equipment has been added to the monitoring configuration:

![image](assets/tutorials/quick_start_cisco_2.png)

Go to **Configuration \> Services \> Services by host** menu. A set of indicators has been automatically deployed:

![image](assets/tutorials/quick_start_cisco_3.png)

Other indicators can be monitored. Click on **Add** button to add a new service as bandwidth usage for example:

![image](assets/tutorials/quick_start_cisco_4a.png)

In the **Description** field, enter the name of the service to create, then select the host to link this service. In
the **Template** filed, select the **OS-Linux-Traffic-Generic-Name-SNMP-custom** template.

A list of macros corresponding to the model will then appear:

![image](assets/tutorials/quick_start_cisco_4b.png)

Enter the name of the network interface for the **INTERFACENAME** macro value and click on **Save** to add this indicator
into the monitoring configuration.

Do the same to add packet error monitoring:

![image](assets/tutorials/quick_start_cisco_5.png)

It is now time to [deploy the supervision](#deploying-a-configuration).

Then go to the **Monitoring \> Status Details \> Services** menu and select **All** value for the **Service Status**
filter. After a few minutes, the first results of the monitoring appear:

![image](assets/tutorials/quick_start_cisco_6.png)

#### To go further

The **Cisco Standard** Plugin Pack provides several monitoring templates. When creating a service, it is possible to
search the available models in the selection list: 

![image](assets/tutorials/quick_start_cisco_7.png)

It is also possible to access the **Configuration \> Services \> Templates** menu to know the complete list:

![image](assets/tutorials/quick_start_cisco_8.png)

To know the name of the available network interfaces you can execute the plugin in command line:

```Bash
$ /usr/lib/centreon/plugins/centreon_cisco_standard_snmp.pl --plugin=network::cisco::standard::snmp::plugin --hostname=10.40.1.254 --snmp-community=mrthsrnrd --snmp-version=2c --mode=list-interfaces
List interfaces:
'Gi1/0/1' [speed = 1000, status = up, id = 10101]
'Gi1/0/2' [speed = 1000, status = up, id = 10102]
'Gi1/0/3' [speed = 10, status = down, id = 10103]
'Gi1/0/4' [speed = 10, status = down, id = 10104]
'Gi1/0/5' [speed = 10, status = down, id = 10105]
'Gi1/0/6' [speed = 1000, status = up, id = 10106]
'Gi1/0/7' [speed = 10, status = down, id = 10107]
'Gi1/0/8' [speed = 10, status = down, id = 10108]
'Gi1/0/9' [speed = 10, status = down, id = 10109]
'Gi1/0/10' [speed = 10, status = down, id = 10110]
'Gi1/0/11' [speed = 10, status = down, id = 10111]
'Gi1/0/12' [speed = 10, status = down, id = 10112]
'Gi1/0/13' [speed = 10, status = down, id = 10113]
'Gi1/0/14' [speed = 10, status = down, id = 10114]
'Gi1/0/15' [speed = 10, status = down, id = 10115]
'Gi1/0/16' [speed = 10, status = down, id = 10116]
'Gi1/0/17' [speed = 1000, status = up, id = 10117]
'Gi1/0/18' [speed = 10, status = down, id = 10118]
'Gi1/0/19' [speed = 10, status = down, id = 10119]
'Gi1/0/20' [speed = 100, status = up, id = 10120]
'Gi1/0/21' [speed = 10, status = down, id = 10121]
'Gi1/0/22' [speed = 1000, status = up, id = 10122]
'Gi1/0/23' [speed = 10, status = down, id = 10123]
'Gi1/0/24' [speed = 1000, status = up, id = 10124]
'Gi1/0/25' [speed = 10, status = down, id = 10125]
'Gi1/0/26' [speed = 10, status = down, id = 10126]
'Gi1/0/27' [speed = 10, status = down, id = 10127]
'Gi1/0/28' [speed = 10, status = down, id = 10128]
```

It is the same to know the name of the spanning-tree:

```Bash
$ /usr/lib/centreon/plugins/centreon_cisco_standard_snmp.pl --plugin=network::cisco::standard::snmp::plugin --hostname=10.40.1.254 --snmp-community=mrthsrnrd --snmp-version=2c --mode=list-spanning-trees
List ports with Spanning Tree Protocol:
[port = GigabitEthernet1/0/20] [state = forwarding] [op_status = up] [admin_status = up] [index = 10120]
[port = Port-channel1] [state = forwarding] [op_status = up] [admin_status = up] [index = 5001]
```

## Monitor a MySQL or MariaDB database

Go to the **Configuration \> Plugin Packs** menu and install **MySQL/MariaDB** Plugin Pack:

![image](assets/tutorials/quick_start_mysql_0.gif)

Go to the **Configuration \> Hosts \> Hosts** menu and click on **Add**:

![image](assets/tutorials/quick_start_mysql_1a.png)

Fill in the following information:

* The name of the server
* A description of the server
* The IP address

Click on **+ Add a new entry button** in **Templates** field, then select the **App-DB-MySQL-custom** template in the list.

A list of macros corresponding to the model will then appear:

![image](assets/tutorials/quick_start_mysql_1b.png)

Fill in the value of following macros:

* **MYSQLUSERNAME**: the username to connect to the database.
* **MYSQLPASSWORD**: the password of the user.
* **MYSQLPORT**: the TCP port to connect to the database, by default 3306.

Click on **Save**.

Your equipment has been added to the monitoring configuration:

![image](assets/tutorials/quick_start_mysql_2.png)

Go to **Configuration \> Services \> Services by host** menu. A set of indicators has been automatically deployed:

![image](assets/tutorials/quick_start_mysql_3.png)

It is now time to [deploy the supervision](#deploying-a-configuration).

Then go to the **Monitoring \> Status Details \> Services** menu and select **All** value for the **Service Status**
filter. After a few minutes, the first results of the monitoring appear:

![image](assets/tutorials/quick_start_mysql_4.png)

#### To go further

The **MySQL/MariaDB** Plugin Pack provides several monitoring templates. When creating a service, it is possible to
search the available models in the selection list: 

![image](assets/tutorials/quick_start_mysql_5.png)

It is also possible to access the **Configuration \> Services \> Templates** menu to know the complete list:

![image](assets/tutorials/quick_start_mysql_6.png)

## Monitor Printer equipment with SNMP

Go to the **Configuration \> Plugin Packs** menu and install **Printer Standard** Plugin Pack:

![image](assets/tutorials/quick_start_printer_0.gif)

Go to the **Configuration \> Hosts \> Hosts** menu and click on **Add**:

![image](assets/tutorials/quick_start_printer_1.png)

Fill in the following information:

* The name of the server
* A description of the server
* The IP address
* The SNMP version and community

Click on **+ Add a new entry** button in **Templates** field, then select the **HW-Printer-standard-rfc3805-custom**
template in the list.

Click on **Save**.

Your equipment has been added to the monitoring configuration:

![image](assets/tutorials/quick_start_printer_2.png)

Go to **Configuration \> Services \> Services by host** menu. A set of indicators has been automatically deployed:

![image](assets/tutorials/quick_start_printer_3.png)

It is now time to [deploy the supervision](#deploying-a-configuration).

Then go to the **Monitoring \> Status Details \> Services** menu and select **All** value for the **Service Status**
filter. After a few minutes, the first results of the monitoring appear:

![image](assets/tutorials/quick_start_printer_4.png)

## Monitor UPS equipment with SNMP

Go to the **Configuration \> Plugin Packs** menu and install **UPS Standard** Plugin Pack:

![image](assets/tutorials/quick_start_ups_0.gif)

Go to the **Configuration \> Hosts \> Hosts** menu and click on **Add**:

![image](assets/tutorials/quick_start_ups_1.png)

Fill in the following information:

* The name of the server
* A description of the server
* The IP address
* The SNMP version and community

Click on **+ Add a new entry** button in **Templates** field, then select the **HW-UPS-Standard-Rfc1628-SNMP-custom**
template in the list.

Click on **Save**.

Your equipment has been added to the monitoring configuration:

![image](assets/tutorials/quick_start_ups_2.png)

Go to **Configuration \> Services \> Services by host** menu. A set of indicators has been automatically deployed:

![image](assets/tutorials/quick_start_ups_3.png)

It is now time to [deploy the supervision](#deploying-a-configuration).

Then go to the **Monitoring \> Status Details \> Services** menu and select **All** value for the **Service Status**
filter. After a few minutes, the first results of the monitoring appear:

![image](assets/tutorials/quick_start_ups_4.png)

## Create your first custom view

Go to **Home \> Custom Views** menu and click on the pencil icon located to the far right of the interface to enable
the edition mode.

Click on **+ Add view** to create your first custom view, then enter **My view** for the name and select 2 columns.
Finally click on **Submit**:

![image](assets/tutorials/cv_1.png)

Add your first widget by clicking on **+ Add widget**, then enter **TOP 10 CPU** for the title and select
**Live Top 10 CPU Usage**. Click on **Submit**:

![image](assets/tutorials/cv_2.png)

Click on **+ Add widget**, then enter **TOP 10 Memory** and select **Live Top 10 Memory Usage**. Click on **Submit**:

![image](assets/tutorials/cv_3.png)

The second widget is automatically placed on the second column:

![image](assets/tutorials/cv_4.png)

Click on **+ Add widget**, then enter **Unhandled Problems** and select **Services Monitoring**. Click on **Submit**:

![image](assets/tutorials/cv_5.png)

Edit this widget by clicking on wrench icon:

![image](assets/tutorials/cv_6.png)

In the popin, uncheck following cases:

* **Display Pending**
* **Display Duration**
* **Display Tries**

Then click on **Apply**.

Click on **+ Add widget**, then enter **Global Health** and select **Global Health**. Click on **Submit**:

![image](assets/tutorials/cv_7.png)

Edit this widget clicking on wrench icon and select **Show services** for the **Services/Hosts** field. Then click on **Apply**:

Your first custom view is created:

![image](assets/tutorials/cv_8.png)

## Deploying a configuration

On creation/deletion/change of objects via the configuration interface, the changes performed are not applied
automatically to the scheduler. To apply the changes performed, it is necessary to follow the procedure below.

#### First step

1. Go to the **Configuration \> Pollers** menu
2. Choose the pollers which you want to export configuration
3. Click on **Apply configuration** button

![image](assets/configuration/poller_menu_generate.png)

4. Check the **Generate Configuration Files** and **Run monitoring engine debug (-v)** boxes
5. Click on **Export** button

![image](assets/configuration/poller_generate_1.png)

Check that no error appears during generation.

> If there are errors, correct the errors and repeat the first step.

#### Second step

1. Uncheck the **Generate Configuration Files** and **Run monitoring engine debug (-v)** boxes
2. Then check the **Move Export Files** and **Restart Monitoring Engine** boxes
3. Click on **Export** button

![image](assets/configuration/poller_generate_2.png)

## Help us

If you have ideas of "Quick Start" and want to participate in creating some of tutorials to help users of the community,
please make your "pull-requests" for us to easily integrate them from [GitHub](https://github.com/centreon/centreon-documentation).
