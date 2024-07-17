---
id: map-web-upgrade
title: Upgrading MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> If you're updating to a new major version (i.e: A.B.x with A or B that
> changes) you need to install the new Business
> repository. You can find its address on the [support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

## Prerequisites

### Update the RPM signing key

For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021. When upgrading from an older version, you need to go through the [key rotation procedure](../security/key-rotation.md#existing-installation), to remove the old key and install the new one.

## Update the package

> If you use MAP Legacy, an additional action is required on the MAP server at the end of the procedure, to apply any customization.

1. Stop the **centreon-map-engine** service by running this command on the machine hosting the Centreon MAP service:
 
  ```shell
  sudo systemctl stop centreon-map-engine
  ```

2. In order to update the Centreon MAP module using an RPM package, execute the
following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

 - On the central server:
 
 ``` shell
 sudo dnf update centreon-map-web-client
 ```
 
 - On the MAP server:
 ``` shell
 sudo dnf update centreon-map-engine
 ```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

 - On the central server:
 
 ``` shell
 sudo yum update centreon-map-web-client
 ```
 
 - On the MAP server:
 
 ``` shell
 sudo yum update centreon-map-engine
 ```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

 - If MAP only is installed:
 
 On the central server:

 ``` shell
 sudo apt install --only-upgrade centreon-map-web-client
 ```
  
 On the MAP server:
 
 ``` shell
 sudo apt install --only-upgrade centreon-map-engine
 ```

 - If MAP and MAP Legacy are installed on the same server:
   
   - Make a backup of the **map.cnf** file:
    
    ```shell
    cp /etc/my.cnf.d/map.cnf /etc/my.cnf.d/map.cnf.bk
    ```

   - Update the centreon-map-engine package
   
    ``` shell
    sudo apt install --only-upgrade -o Dpkg::Options::="--force-overwrite" centreon-map-engine centreon-map-web-client
    ```

   - Retrieve the configuration file backup:
   
    ```shell
    cp /etc/my.cnf.d/map.cnf.bk /etc/my.cnf.d/map.cnf
    ```

   - Answer **Y** when prompted. Then restart MySQL:
   
    ```shell
    systemctl restart mariadb
    ```

</TabItem>
</Tabs>

3. Clear your browser cache.

4. Finalize the update of the module and the widget in the Centreon interface **Administration > Extensions > Manager**.

 > An orange update button is visible, indicating that an update is available. Click on it to update the module, and do the same for the widget.

5. Restart the **centreon-map-engine** service using the following command:
 
  ```shell
  sudo systemctl start centreon-map-engine
  ```

6. If you are using MAP Legacy, enter this command on the MAP server to apply any customization.

 ```shell
 diff -u /etc/centreon-studio/centreon-map.conf /etc/centreon-studio/centreon-map.conf.rpmsave
 ```

7. Make sure you are using the correct version of MariaDB and update it if needed. See [Upgrading MariaDB](../upgrade/upgrade-mariadb.md).
