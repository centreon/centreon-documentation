---
id: map-web-upgrade
title: Upgrading MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> If you're updating to a new major or minor version (i.e:A.B.x with A or B that
> changes) you need to contact our Support service to retrieve the new
> repository.

## Prerequisites

### Update the RPM signing key

For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021. When upgrading from an older version, you need to go through the [key rotation procedure](../security/key-rotation.md#existing-installation), to remove the old key and install the new one.

## Update the package

1. In order to update the Centreon MAP module using an RPM package, execute the
following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
sudo dnf update centreon-map-engine centreon-map-web-client
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

``` shell
sudo yum update centreon-map-engine centreon-map-web-client
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

 - If MAP only is installed:
 
 ``` shell
 sudo apt upgrade centreon-map-engine centreon-map-web-client
 ```
  
 - If MAP and MAP Legacy are installed on the same server:
   
   - Make a backup of the **map.cnf** file:
    
    ```shell
    cp /etc/my.cnf.d/map.cnf /etc/my.cnf.d/map.cnf.bk
    ```

   - Update the centreon-map-engine package
   
    ``` shell
    sudo apt upgrade -o Dpkg::Options::="--force-overwrite" centreon-map-engine centreon-map-web-client
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

2. See [Upgrading MariaDB](../upgrade/upgrade-mariadb.md).
 > If you upgrade to version 24.04 and above, you have to upgrade MariaDB to version 10.11.

## Update through the interface

Log on to the Centreon web interface and go to `Administration > Extension >
Manager`.

Click on the orange button to update the module, do the same for the widget.
