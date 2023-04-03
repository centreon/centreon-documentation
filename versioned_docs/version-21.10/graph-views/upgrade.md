---
id: upgrade
title: Upgrade the extension
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This chapter describes how to upgrade your Centreon MAP extension. This
is done by upgrading the four main components:

- Centreon MAP server
- Centreon MAP web interface & its widget
- Desktop client (automatically updated)
- MariaDB database.

## Prerequisites

Before upgrading Centreon MAP server, we highly recommend performing a
MariaDB dump (backup) of your `centreon_studio` database. This will
allow you easily to roll back to the previous state if necessary.

Be sure to read the release notes for an explanation of features, fixes
& custom procedures.

**When you're upgrading to a new major or minor version (i.e:A.B.x with
A or B that changes) you need to contact our Support service to retrieve
the new repository**.

> Mistakes when editing configuration files can lead to malfunctions of the software. We recommend that you make a backup of the file before editing it and that you only change the settings advised by Centreon.

### Update the RPM signing key

For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021. When upgrading from an older version, you need to go through the [key rotation procedure](../security/key-rotation.md#existing-installation), to remove the old key and install the new one.

## Step 1: Centreon MAP server

> If you are still running version **4.0.X**, you **must first install
> and run the server in version 4.1.X before upgrading to the latest
> version**.

Run the following commands to upgrade your Centreon MAP server:

1. Stop and disable legacy tomcat service coming from precedent version:

    ```shell
    systemctl stop tomcat
    systemctl disable tomcat
    ```

2. Update Centreon & Centreon MAP repositories:

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf install https://yum.centreon.com/standard/21.10/el8/stable/noarch/RPMS/centreon-release-21.10-5.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install https://yum.centreon.com/standard/21.10/el7/stable/noarch/RPMS/centreon-release-21.10-5.el7.centos.noarch.rpm
```

</TabItem>
</Tabs>

> Install Centreon MAP repository, you can find it on the
> [support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

3. Update Centreon MAP server:

    ```shell
    yum update centreon-map-server
    ```

4. Enable and start `centreon-map` service:

    ```shell
    systemctl enable centreon-map
    systemctl start centreon-map
    ```

> If you want totally clean up legacy Tomcat service, you can just remove
> Tomcat and move old log file to new log folder:

```shell
yum remove tomcat
cp /var/log/centreon-studio/* /var/log/centreon-map/
rm -rf /var/log/centreon-studio
```

5. This point only applies if you customized your **centreon-map.conf** configuration file. When upgrading your MAP module, the **/etc/centreon-studio/centreon-map.conf** file is not upgraded automatically: the new configuration file brought by the rpm does not replace the old file. You must copy the changes manually to your customized configuration file.

  * The old configuration file is renamed **centreon-map.conf.rpmsave**
  * The upgrade installs a new **centreon-map.conf** file.

  Run a diff between the old and the new configuration files:

  ```shell
  diff -u /etc/centreon-studio/centreon-map.conf /etc/centreon-studio/centreon-map.conf.rpmsave
  ```

  For each difference between the files, assess whether you should copy it from **centreon-map.conf.rpmsave** to **centreon-map.conf**.

## Step 2: Centreon MAP web interface

```shell
yum update centreon-map-web-client
```

Complete the upgrade: 
1. Go to **Administration > Extensions > Manager**.
2. Search for **Map web client**.
3. Click on the update button (module & widget parts).

## Step 3: Centreon MAP desktop client

If the user's computer has an online connection, the desktop client is
automatically upgraded to the latest version that corresponds to the server.

Alternatively, the client can be downloaded through the menu `Monitoring >
Map` and **Desktop client** button.

## Step 4: Update dialects in .properties files

In the **/etc/centreon-studio/centreon-database.properties** and the **/etc/centreon-studio/studio-database.properties** files, replace **MySQL5Dialect** with **MariaDB10Dialect**.

> This configuration also works with a MySQL database.

## Step 5: MariaDB database

1. Stop the **centreon-map** service:
    ```shell
    systemctl stop centreon-map
    ```

2. See [Upgrading MariaDB](../upgrade/upgrade-mariadb.md).

3. Start the **centreon-map** service:
    ```shell
    systemctl start centreon-map
    ```
