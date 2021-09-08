---
id: installation
title: Installation
---

## Installing the Autodiscovery module

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


## Setting up a dedicated autodiscovery account

We recommend that you set up a dedicated technical account (e.g. `autodisco`) that will execute the discovery jobs in the background (different from the one you use to create and launch jobs in the interface). 

1. On page **Configuration > Users > Contacts/Users**, create a dedicated [user](../basic-objects/contacts.html). On the **Centreon Authentication** tab, give it the following rights:
    - **Reach Centreon front-end**: **No**
    - **Admin**: **Yes**
    - **Reach API Configuration**: **Yes**.

2. In the Central server's terminal, edit the following file:

    ```
    /etc/centreon-gorgone/config.d/31-centreon-api.yaml
    ```
    Replace the default username and password by the credentials of your dedicated autodiscovery account.

    Example:

    ```
    gorgone:
        tpapi:
        - name: centreonv2
        base_url: "http://127.0.0.1/centreon/api/beta/"
        username: autodisco
        password: XXXXXXXXXXXXXXXX
        - name: clapi
        username: autodisco
        password: XXXXXXXXXXXXXXXX
    ```

3. Restart the **gorgoned** service:

    ```
    systemctl restart gorgoned
    ```
