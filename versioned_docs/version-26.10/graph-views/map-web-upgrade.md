---
id: map-web-upgrade
title: Upgrading MAP
description: "Upgrade Centreon MAP to a new major version"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> If you're upgrading to a new major version (i.e: A.B.x with A or B that
> changes) you need to install the new Business
> repository. You can find its address on the [support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

> From Centreon 24.10, MAP Legacy is no longer available. Follow this [link](https://archives-docs.centreon.com/24.04/docs/graph-views/introduction/) to see the latest available version of the MAP Legacy documentation (archived version).

## Prerequisites

### Check your operating system

Make sure that the central server and the MAP server run an [operating system supported by this version](../installation/compatibility.md#operating-systems).

If one of your servers runs an operating system that is no longer supported, you cannot upgrade it directly. First migrate your platform to a supported operating system:

- For the central server, see [Migrating a platform](../migrate/introduction.md).
- For the MAP server, see [Migrating the extension](map-web-migrate.md).

### Check your database version

Make sure that your database uses a [DBMS version supported by this version](../installation/compatibility.md#dbms). If it does not, upgrade it before you upgrade MAP. See [Upgrading MariaDB](../upgrade/upgrade-mariadb.md) or [Upgrading MySQL](../upgrade/upgrade-mysql.md).

### Update the RPM signing key

For security reasons, the keys used to sign Centreon RPMs are rotated regularly. If your platform still uses a previous key, go through the [key rotation procedure](../security/key-rotation.md#existing-installation) to remove the old key and install the new one.

## Update the package

1. Stop the **centreon-map-engine** service by running this command on the machine hosting the Centreon MAP service:
 
  ```shell
  sudo systemctl stop centreon-map-engine
  ```

2. To update the Centreon MAP module, run the following commands:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

 - On the central server:
 
 ``` shell
 sudo dnf update centreon-map-web-client
 ```
 
 - On the MAP server:

 ``` shell
 sudo dnf update centreon-map-engine
 ```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

 - On the central server:
 
 ``` shell
 sudo dnf update centreon-map-web-client
 ```
 
 - On the MAP server:

 ``` shell
 sudo dnf update centreon-map-engine
 ```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

 - On the central server:

 ``` shell
 sudo apt install --only-upgrade centreon-map-web-client
 ```
  
 - On the MAP server:
 
 ``` shell
 sudo apt install --only-upgrade centreon-map-engine
 ```

</TabItem>
</Tabs>

3. Clear your browser cache.

4. Finalize the update of the module and the widget in the Centreon interface **Administration > Extensions > Manager**.

 > An update button is displayed when an update is available. Click it to update the module, then do the same for the widget.

5. Restart the **centreon-map-engine** service using the following command:
 
  ```shell
  sudo systemctl start centreon-map-engine
  ```
