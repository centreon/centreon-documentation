---
id: installation
title: Installation
---

## Installing packages

Execute the following command on the Central server:

``` shell
yum install -y centreon-auto-discovery-server
```

## UI installation

Connect to the Centreon's web interface using an account allowed to administer
products and go to the `Administration > Extensions > Manager` menu.

> Make sure that **License Manager** and **Plugin Packs Manager** modules are
> up-to-date before installing **Auto Discovery** module.

Click on the installation icon corresponding to the **Auto Discovery** module:

![image](../../assets/monitoring/discovery/install-before.png)

The module is now installed:

![image](../../assets/monitoring/discovery/install-after.png)

## Installing the Plugin Packs

To get discovery rules ready to use, please go to `Configuration > Plugin
Packs` menu and [install your packs](../pluginpacks.html#pack-installation)
