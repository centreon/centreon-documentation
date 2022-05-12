---
id: update
title: Update the extension
---

This chapter describes how to update your Centreon MAP extension. This
is done by updating the three main components:

- Centreon MAP server
- Centreon MAP web interface & its widget
- Desktop client (automatically updated).

Before updating Centreon MAP server, we highly recommend performing a
MariaDB dump (backup) of your `centreon_studio` database. This will
allow you easily to roll back to the previous state if necessary.

Be sure to read the release notes for an explanation of features, fixes
& custom procedures.

## Centreon MAP Server

Run the following commands to upgrade your Centreon MAP server:

``` shell
systemctl stop centreon-map
yum update centreon-map-server
systemctl start centreon-map
```

This point only applies if you customized your **centreon-map.conf** configuration file. When updating your MAP module, the **/etc/centreon-studio/centreon-map.conf** file is not upgraded automatically: the new configuration file brought by the rpm does not replace the old file. You must copy the changes manually to your customized configuration file.

* The old configuration file is renamed **centreon-map.conf.rpmsave**
* The upgrade installs a new **centreon-map.conf** file.

Run a diff between the old and the new configuration files:

```shell
diff -u /etc/centreon-studio/centreon-map.conf /etc/centreon-studio/centreon-map.conf.rpmsave
```

For each difference between the files, assess whether you should copy it from **centreon-map.conf.rpmsave** to **centreon-map.conf**.

## Centreon MAP Web interface

```shell
yum update centreon-map-web-client
```

Complete the upgrade by going to `Administration > Extensions > Manager`
(module & widget parts):

![image](../assets/graph-views/update-web-client.png)

## Centreon MAP Desktop client

If the user's computer has an online connection, the desktop client is
automatically upgraded to the latest version that corresponds to the server.

Alternatively, the client can be downloaded through the menu `Monitoring >
Map` and **Desktop client** button.
