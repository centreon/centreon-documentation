---
id: first-steps
title: First steps
---

This chapter describes you how to quickly start to configure your Centreon monitoring interface by using configuration
objects.

## Login

To connect to your Centreon web interface access to URL: http://IP_ADDRESS/centreon

> Replace **IP_ADDRESS** by the IP address or FQDN of your Centreon web server.

Inform your user name and associated password and click on **Connect** button:

![image](../assets/tutorials/aconnection.png)

You are now connected to Centreon web interface.

## Introduction to menus

The Centreon web interface contains several menus, each with a specific function:

![image](../assets/tutorials/amenu.png)

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

![image](../assets/tutorials/change_language_1.png)

In the select box of language, select your language:

![image](../assets/tutorials/change_language_2.png)

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

![image](../assets/tutorials/host_service_command.png)

> To go further with templates, please read the [templates chapter](../monitoring/templates#definition).

## Installation of basic monitoring templates

Go to the **Configuration \> Plugin Packs** menu.

> Configure the proxy @TODO@(add the link ref:proxyimp) to allow the Centreon server to access the Internet.

Install the **Base Generic** Plugin Pack by moving your cursor on it and by clicking on **+** icon (it is a prerequisite
to the installation of any other Plugin Packs):

![image](../assets/tutorials/pp_base_generic_1.png)

You can also click on the Plugin Pack in order to know its content before installing it:

![image](../assets/tutorials/pp_base_generic_2.png)

Install other Plugin Packs you probably need for your environment, for example **Linux SNMP** and **Windows SNMP** available
for free:

![image](../assets/tutorials/pp_install_basic.gif)

Now you have the basic templates and plugins to initial monitoring!

Five additional Packs are available once you register on [our web site](https://store.centreon.com), and over 300
more if you subscribe to the [IMP offer](https://store.centreon.com). @TODO@(change this sentence!!!)

> If you already have a Centreon account, [you can now authenticate your Centreon platform]
> (https://documentation.centreon.com/docs/plugins-packs/en/latest/installation.html)
> to receive additional Plugin Packs or any services associated with your account.
