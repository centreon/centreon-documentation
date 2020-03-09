---
id: pluginpacks
title: Plugin Packs
---

The Plugins Packs are a set of templates developed by Centreon. They offer a simplified and optimized way to monitor
your IT infrastructure. These templates have been preconfigured to make deployment fast and efficient.

This chapter explains how to use Centreon Plugin Packs.

![image](assets/configuration/pluginpacks/pp_list.png)

## Prerequisites

### Centreon Plugin Pack Manager

The **Centreon Plugin Pack Manager** module, included natively in Centreon, can install, update or remove the Plugin
Packs. We recommended that you keep this module regularly updated.

To update **Centreon Plugin Pack Manager** run the following command:
```Bash
yum update centreon-pp-manager
```

> The centreon-pp-manager module is installed by default along with the Centreon software.

### License

A license is required to access the full Plugin Packs catalog. If your Centreon platform is linked to an online
subscription your license will be directly downloaded to your server. Otherwise, contact the
[Centreon support team](https://centreon.force.com) to get and install your license key.

### Access to Plugin Packs

If your Centreon platform is linked to an online subscription you can download Plugin Packs from the Plugin Pack
Manager user interface. Otherwise, a dedicated RPM repository will be provided by
[Centreon support team](https://centreon.force.com)

## Overview

The **Centreon Plugin Packs** are a set of **standardized** **templates** that are **preconfigured** for rapid
deployment of monitoring in your IT infrastructure.

These templates (commands, hosts and services templates) are attached to the **monitoring plugins**, which can either be:

* existing community plugins selected and validated by Centreon as being fully functional and optimized, or
* plugins written by Centreon that are distributed as free software under RPM or available on
  [Centreon Plugins](https://github.com/centreon/centreon-plugins) project

The added value of **Plugin Packs** is the **pre-configuration** of monitoring in the Centreon software. During installation,
**the Packs import** **pre-configured objects** into the Centreon software such as **commands**, **host templates**,
**service templates** and **host or service discovery rules**.

After you install the Plugin Packs, the next step is to install the monitoring plugins used by the Plugin Pack commands.
Refer to the documentation in the pack in case any features have to be configured or activated, and then create the
required hosts and services based on these models.

### Inside a Plugin Pack

A Plugin Pack contains:

* a description of the pack contents and the indicators that can be monitored.
* Centreon preset objects (commands, host templates, service templates) packaged and validated.
* documentation for a simple and quick deployment. It is available once the pack is installed. 

### Connectors

The Centreon Plugin Packs subscription gives you access to specific connectors:

| Connector  | Description
|------------|----------------------------------------------------------------------------------------        
| NRPE       | NRPE server, packaged by Centreon, with patches required to comply with Plugins Packs  
| NSClient++ | NSClient++, packaged by Centreon, ready to use with embedded Centreon Plugins
| VMWare     | Perl daemon using VMware SDK to monitor VMware platforms                               
| AS400      | Java-based connector allowing you to execute checks on an AS400

## Plugin Packs management

### Installation

Installation is a 3-step process:

1. Access to the Plugin Packs catalog
2. Pack installtion
3. Plugin installation

#### Access to Plugin Packs catalog

* **online platform**: if your platform is linked to an online subscription
* **offline** otherwise

<!--DOCUSAURUS_CODE_TABS-->
<!--Online platform-->

If you benefit from an online subscription, you must first authenticate your Centreon platform.
Go to the **Administration \> Extension \> Subscription** menu and log in with your Centreon 
username to authenticate your Centreon platform.

![image](assets/configuration/pluginpacks/imp_authentification.png)

Click on **install** to access the catalog:

![image](assets/configuration/pluginpacks/imp_install.png)

You can now proceed to the pack installation.

<!--Offline platform-->

From your Centreon Central server, install or update the Plugin Packs catalog:
```Bash
yum install centreon-pack-*
```

or:
```Bash
yum update centreon-pack-*
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Pack installation

You now have access to the Plugin Packs catalog:

![image](assets/configuration/pluginpacks/pp_list.png)

To install a Plugin Pack, hover over the icon with the mouse and click on the ``+``

![image](assets/configuration/pluginpacks/install_pp.png)

You can also click on the Plugin Pack to display more details and click on the ``+``

![image](assets/configuration/pluginpacks/install_pp_2.png)

Once the Plugin Pack is installed, a green outline and an arrow icon will indicate successful installation.

| **before installation**                                       | **after installation**                                       |
|---------------------------------------------------------------|--------------------------------------------------------------|
| ![image](assets/configuration/pluginpacks/before_install.png) | ![image](assets/configuration/pluginpacks/after_install.png) | 

> Please read the associated **monitoring procedure** of each installed pack to understand the content of the pack as
> well as the prerequisites necessary for its operation, by clicking on the ``?`` icon of each pack or by going to the
> [Integration/Plugin Packs chapter](../integrations/plugin-packs/init-plugin-packs)

#### Managing dependencies

During installation, some objects in the pack may not be installed. These objects are often additional configuration
objects and are not required to deploy the configuration templates provided by the pack.

Most of the time, it is necessary to update your Centreon platform and then reinstall your pack.

In the following example, the "autodiscover" object is a discovery rule for the "Centreon Auto Discovery" module, but
this one is only available for Centreon in 18.10.x version:

![image](assets/configuration/pluginpacks/objects_not_installed.png)

#### Plugin installation

Next, install the required plugins as indicated in the steps above.

Run the following command for **each Centreon poller** that will execute the plugins:
```Bash
yum install centreon-plugin-$PLUGIN-PACK$
```

Where ``$PLUGIN-PACK$`` is the name displayed by your YUM search.

### Update

#### Plugin Pack update

If an arrow appears on a Plugin Pack it means that an update is available.

![image](assets/configuration/pluginpacks/update.png)

Hover over the Plugin Pack and click on the arrow,

![image](assets/configuration/pluginpacks/update2.png)

or click on the Plugin Pack to display more details, then click on the arrow. 

![image](assets/configuration/pluginpacks/update3.png)

Confirm the update.

![image](assets/configuration/pluginpacks/update_confirm.png)

Your Plugin Pack is up to date.

![image](assets/configuration/pluginpacks/update_finish.png)

#### Plugin updates

To update the plugins, execute the following command on **all pollers**.

Update the plugins on **all pollers**:
```Bash
yum update centreon-plugins*
```

Restart the Centreon Engine on **all pollers**.

Then check that you do not have new errors while executing new plugins.

> It is your choice whether to install all the plugins on every poller, or just the required plugins. Keep in mind that
> you may encounter errors if you migrate a monitored host to a poller that happens to be missing the necessary plugins.
> If you update the plugins on the Centreon central server, be sure also to update them on each poller.

### Deletion

As with installation, you can remove a pack either by hovering over the desired pack in the UI and clicking on the red
cross:

![image](assets/configuration/pluginpacks/uninstall.png)

or by clicking first on the pack and then on the red cross:

![image](assets/configuration/pluginpacks/uninstall_2.png)

Confirm the uninstallation.

![image](assets/configuration/pluginpacks/uninstall_confirm.png)

Your Plugin Pack is now uninstalled.

![image](assets/configuration/pluginpacks/uninstall_3.png)

#### Managing dependencies

You will not be able remove a pack if host and service templates created by the Plugin Pack are being used by any
monitored hosts and services.

![image](assets/configuration/pluginpacks/uninstall_pp_used.png)

To uninstall the pack you will need either to:

* delete the hosts and services linked to the templates provided by the Plugin Pack,
* or unlink the hosts and services from the corresponding templates.

Attempting to uninstall a pack that is a dependency of another pack will cause the uninstallation process to stop if
the pack or its dependency is used by any hosts and services. Otherwise, the pack and its dependencies can be removed.