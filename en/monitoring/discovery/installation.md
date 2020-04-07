---
id: installation
title: Installation
---

## Architecture

The **Centreon Auto Discovery** module contains 3 parts:

* The web UI: rules creation, administration and exploitation of the module
* Discovery plugins
* Scheduled job (cron) which executes discovery rules

The discovery plugins look for new elements to monitor, see
*[Discovery plugins](create-services-discovery-rules.html#Discovery-plugins)* for more detail.

The rules, managed through the web UI, are saved into **Centreon**'s database and are executed periodically (every
night at 10:30 PM) by the *cron* jon. See *[Scheduled job](administration.html#Scheduled-job)* pour more detail.

The following figure describes the general functioning of this module:

![image](assets/configuration/autodisco/centreon_auto_disco_schema.png)

## Installing packages

Execute the following command:

```shell
yum install centreon-auto-discovery-server
```

## Configuring Centreon API access

Edit the **/etc/centreon/centreon_autodisco.pm** file and configure the **clapi_user** and **clapi_password**
parameters, then save modifications and close the file.

## UI installation

Connect to the Centreon's web interface using an account allowed to administer products and go to the
**Administration > Extensions > Manager** menu.

Click on the installation icon corresponding to the **Centreon Auto Discovery** module:

![image](assets/configuration/autodisco/install.png)

The module is now installed:

![image](assets/configuration/autodisco/list_modules.png)

## Installing the Plugin Packs

To get discovery rules ready to use, please go to **Configuration > Pluin Packs** menu and
[install your packs](../pluginpackshtml#Pack-installation)
