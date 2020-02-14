---
id: upgrade
title: Upgrade the extension
---

This chapter describes how to upgrade your Centreon MAP extension. This is
done by upgrading the three main components:

-   Centreon MAP server
-   Centreon MAP web interface & its widget
-   Desktop client (automatically updated).

Before upgrading Centreon MAP server, we highly recommand performing a
MySQL dump (backup) of your `centreon_studio` database. This will allow
you easily to roll back to the previous state if necessary.

Be sure to read the release notes for an explanation of features, fixes
& custom procedures.

**If you're updating to a new major or minor version (i.e:A.B.x with A
or B that changes) you need to contact our Support service to retrieve
the new repository**

## Centreon MAP Server

> If you are still running version **4.0.X**, you **must first install and
> run the server in version 4.1.X before upgrading to the latest
> version**.

Run the following commands to upgrade your Centreon MAP server:

```
    # systemctl stop tomcat
    # yum update centreon-map-server
    # systemctl start tomcat
````

Centreon MAP Web interface
--------------------------

```
    yum update centreon-map-web-client
````

Complete the upgrade by going to *Administration \> Extensions \>
Manager* (module & widget parts):

![image](../assets/data-presentation/update-web-client.png)

Centreon MAP Desktop client
---------------------------

If the user\'s computer has an online connection, the desktop client is
automatically upgraded to the latest version that corresponds to the
server. Alternatively, the client can be downloaded through this link:
*Monitoring \> Map \| Desktop client*.
