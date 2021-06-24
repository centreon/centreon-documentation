---
id: installation
title: Installation
---

## Procedure

1. To install packages, execute the following command on the Central server:

    ``` shell
    yum install -y centreon-auto-discovery-server
    ```

2. Connect to the Centreon web interface using an account allowed to install
products and go to the **Administration > Extensions > Manager** menu.

3. Make sure that the **License Manager** and **Plugin Packs Manager** modules are
 up-to-date before installing the **Auto Discovery** module.

4. Click on the installation icon corresponding to the **Auto Discovery** module:

    ![image](../../assets/monitoring/discovery/install-before.png)

    The module is now installed:

    ![image](../../assets/monitoring/discovery/install-after.png)

5. To get ready-to-use discovery rules, go to the **Configuration > Plugin
Packs** page and [install the plugin packs](../pluginpacks.html#pack-installation) for the 
discovery providers you want.
