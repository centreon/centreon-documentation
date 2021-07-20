---
id: web-and-post-installation
title: Web And Post Installation
---

## Web installation

Log in to Centreon web interface via the URL *http://\<IP\>/centreon*.

The Centreon setup wizard is displayed. Click on **Next**.

![image](../assets/installation/acentreonwelcome.png)

Needed modules and prerequisites are checked.

They must be all satisfied. Click on **Refresh** once needed corrective actions
have been made.

Then click on **Next**.

![image](../assets/installation/acentreoncheckmodules.png)

Define pathes used by monitoring engine. We recommand to use defaults.

Then click on **Next**.

![image](../assets/installation/amonitoringengine2.png)

Define pathes used by broker module. We recommand to use defaults.

Then click on **Next**.

![image](../assets/installation/abrokerinfo2.png)

Define informations for the admin account creation.

Then click on **Next**.

![image](../assets/installation/aadmininfo.png)

Provide informations to connect to the database instance.

By default, the instance address is set to *localhost*, the instance root
user is set to *root* and the root password is empty.

> If you use a remote database server, or use a specific root user, change
> these entries

Then define databases name and credentials that will be created. We recommand
to use default values.

> Centreon database's user password should be the only parameter customized
> here.

Then click on **Next**.

![image](../assets/installation/adbinfo.png)

The Centreon setup wizard creates configuration files and databases structure.

When done, click on **Next**.

![image](../assets/installation/adbconf.png)

Select the available modules and widgets to be installed.

Then click on **Install**.

![image](../assets/installation/module_installationa.png)

Once the installation is complete, click on **Next**.

![image](../assets/installation/module_installationb.png)

At this point, an advertisement informs you of the latest Centreon news and
products.

If your platform is connected to the internet, the information you receive
will be up to date.

If you are not online, only information on the current version will be
displayed.

![image](../assets/installation/aendinstall.png)

The installation is complete. Click on **Finish**.

You can now log in.

![image](../assets/installation/aconnection.png)

## Initialization of the monitoring

To start the monitoring processes:

1. From your web interface, go to `Configuration > Pollers`,
2. Select **Central**  poller from the listing and click on
**Export configuration**,
3. Check **Move Export Files** in addition to default selection and click on
**Export**,
4. Log on to the Central server,
5. Start/restart collect processes:

    ```shell
    systemctl restart cbd centengine
    ```

6. Restart the tasks manager:

    ```shell
    systemctl restart gorgoned
    ```

7. Start the passive monitoring services:

    ```shell
    systemctl start snmptrapd centreontrapd
    ```

8. If you want to monitor this server, start the SNMP daemon:

    ```shell
    systemctl start snmpd
    ```

Monitoring is now working. You can start monitoring your IT system.

## Install available extensions

Go to `Administration > Extensions > Manager` menu and click on
**Install all**:

![image](../assets/installation/extensions-manager.png)

## Add a license

According to your Centreon edition, you may have to [add a license](../administration/licenses.html).

## Secure your platform

Don't forget to secure your Centreon platform following our
[recommendations](../administration/secure-platform.html).

## Getting started

Go to the [Getting Started](../getting-started/installation-first-steps.html#request-your-free-trial)
chapter to configure your first monitoring.