---
id: upgrade
title: Upgrading the extension
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter describes how to upgrade your Centreon MAP (Legacy) extension. This
is done by upgrading the four main components:

- Centreon MAP (Legacy) server
- Centreon MAP (Legacy) web interface and its widget
- Desktop client (automatically updated)
- MariaDB database.

## Prerequisites

Before upgrading Centreon MAP (Legacy) server, we highly recommend performing a
MariaDB dump (backup) of your **centreon_studio** database. This will
allow you easily to roll back to the previous state if necessary.

Be sure to read the release notes for an explanation of features, fixes
and custom procedures.

**When you're upgrading to a new major or minor version (i.e:A.B.x with
A or B that changes) you need to contact our Support service to retrieve
the new repository**.

### Update the RPM signing key

For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021. When upgrading from an older version, you need to go through the [key rotation procedure](../security/key-rotation.md#existing-installation), to remove the old key and install the new one.

## Step 1: Centreon MAP (Legacy) server

> If you are still running version **4.0.X**, you **must first install and run the server in version 4.1.X before upgrading to the latest version**.

### Java version requirement
  > Ensure a version of Java 17 (or 18) is installed before you start the procedure.
  
  - If you need to check the Java version, enter the following command:
  
  ```shell
  java -version
  ```
  
  - If you need to upgrade the Java installation to Java 17 (or 18), go to the [Oracle official download](https://www.oracle.com/java/technologies/downloads/#java17) page.

  - If several Java versions are installed, you need to activate the right version. Display the installed versions using the following command and select the Java 17 (or 18) version:
  ```shell
  sudo update-alternatives --config java
  ```
  
  Then restart the service:
  
  ```shell
  systemctl restart centreon-map
  ```

  - If you need to use your platform in HTTPS, you will have to generate a keystore file for the Java 17 (or 18) version ([see the procedure](./secure-your-map-platform.md#httpstls-configuration-with-a-recognized-key)).

### Procedure

Follow this procedure to upgrade your Centreon MAP (Legacy) server:

1. Update the Centreon repository:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/22.10/el8/centreon-22.10.repo
```

2. Install Centreon Business repository, you can find it on the
[support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

3. Update Centreon MAP (Legacy) server:

    ```shell
    dnf update centreon-map-server
    ```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y yum-utils
yum-config-manager --add-repo https://packages.centreon.com/rpm-standard/22.10/el7/centreon-22.10.repo
```

2. Install Centreon Business repository, you can find it on the
[support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

3. Update Centreon MAP (Legacy) server:

    ```shell
    yum update centreon-map-server
    ```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
echo "deb https://packages.centreon.com/apt-standard-22.10-stable $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```

2. Install Centreon Business repository, you can find it on the
[support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

3. Update Centreon MAP (Legacy) server:

    ```shell
    apt update && apt upgrade centreon-map-server
    ```

</TabItem>
</Tabs>

4. Enable and start **centreon-map** service:

    ```shell
    systemctl enable centreon-map
    systemctl start centreon-map
    ```

5. This point only applies if you customized your **centreon-map.conf** configuration file. When upgrading your MAP (Legacy) module, the **/etc/centreon-studio/centreon-map.conf** file is not upgraded automatically: the new configuration file brought by the rpm does not replace the old file. You must copy the changes manually to your customized configuration file.

  * The old configuration file is renamed **centreon-map.conf.rpmsave**
  * The upgrade installs a new **centreon-map.conf** file.

  Run a diff between the old and the new configuration files:

  ```shell
  diff -u /etc/centreon-studio/centreon-map.conf /etc/centreon-studio/centreon-map.conf.rpmsave
  ```

  For each difference between the files, assess whether you should copy it from **centreon-map.conf.rpmsave** to **centreon-map.conf**.

## Step 2: Centreon MAP (Legacy) web interface

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update centreon-map-web-client
```
</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum update centreon-map-web-client
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update && apt upgrade centreon-map-web-client
```

</TabItem>
</Tabs>

Complete the upgrade: 
1. Go to **Administration > Extensions > Manager**.
2. Search for **Map web client**.
3. Click on the update button (module & widget parts).

## Step 3: Centreon MAP (Legacy) desktop client

If the user's computer has an online connection, the desktop client is
automatically upgraded to the latest version that corresponds to the server.

Alternatively, the client can be downloaded through the menu `Monitoring >
Map` and **Desktop client** button.

## Step 4: Update dialects in .properties files

In the **/etc/centreon-studio/centreon-database.properties** and the **/etc/centreon-studio/studio-database.properties** files, replace **MySQL5Dialect** with **MariaDB10Dialect**.

> This configuration also works with a MySQL database.

## Step 5: MariaDB database

> Mistakes when editing configuration files can lead to malfunctions of the software. We recommend that you make a backup of the file before editing it and that you only change the settings advised by Centreon.

1. Stop the **centreon-map** service:
    ```shell
    systemctl stop centreon-map
    ```

2. See [Upgrading MariaDB](../upgrade/upgrade-mariadb.md).
 > If you upgrade to version 24.04 and above, you have to upgrade MariaDB to version 10.11.

3. If you have upgraded your Centreon platform to version 22.10, the new BBDO v3 protocol is enabled. You need to edit the following file to allow MAP to work properly: **/etc/centreon-studio/studio-config.properties**

   ```text
   broker.pb.message.enabled=true
   ```

4. Start the **centreon-map** service:
    ```shell
    systemctl start centreon-map
    ```
