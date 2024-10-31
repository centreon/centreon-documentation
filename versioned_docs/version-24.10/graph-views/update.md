---
id: update
title: Updating the extension
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter describes how to update your Centreon MAP (Legacy) extension. This
is done by updating the three main components:

- Centreon MAP (Legacy) server
- Centreon MAP (Legacy) web interface and its widget
- Desktop client (automatically updated).

Before updating Centreon MAP (Legacy) server, we highly recommend performing a
MariaDB dump (backup) of your `centreon_studio` database. This will
allow you easily to roll back to the previous state if necessary.

Be sure to read the release notes for an explanation of features, fixes
and custom procedures.

## Centreon MAP (Legacy) Server

Run the following commands to upgrade your Centreon MAP (Legacy) server:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
systemctl stop centreon-map
dnf update centreon-map-server
systemctl start centreon-map
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

``` shell
systemctl stop centreon-map
dnf update centreon-map-server
systemctl start centreon-map
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

``` shell
systemctl stop centreon-map
apt update && apt install --only-upgrade centreon-map-server
systemctl start centreon-map
```

</TabItem>
</Tabs>

This point only applies if you customized your **centreon-map.conf** configuration file. When updating your MAP (Legacy) module, the **/etc/centreon-studio/centreon-map.conf** file is not upgraded automatically; the new configuration file brought by the rpm does not replace the old file. You must copy the changes manually to your customized configuration file.

* The old configuration file is renamed **centreon-map.conf.rpmsave**.
* The upgrade installs a new **centreon-map.conf** file.

Run a diff between the old and the new configuration files:

```shell
diff -u /etc/centreon-studio/centreon-map.conf /etc/centreon-studio/centreon-map.conf.rpmsave
```

For each difference between the files, assess whether you should copy it from **centreon-map.conf.rpmsave** to **centreon-map.conf**.

## Centreon MAP (Legacy) Web interface

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
dnf update centreon-map-web-client
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

``` shell
dnf update centreon-map-web-client
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

``` shell
apt update && apt install --only-upgrade centreon-map-web-client
```

</TabItem>
</Tabs>

Complete the upgrade by going to **Administration > Extensions > Manager**
(module & widget parts)

## Centreon MAP (Legacy) Desktop client

If the user's computer has an online connection, the desktop client is
automatically upgraded to the latest version that corresponds to the server.

Alternatively, the client can be downloaded through the **Monitoring > Map** menu and the **Desktop client** button.
