---
id: map-web-update
title: Updating MAP
description: "Update your Centreon MAP installation to a new version"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use the following procedure to update your MAP version:

1. Stop the **centreon-map-engine** service by running this command on the machine hosting the Centreon MAP service:
 
  ```shell
  sudo systemctl stop centreon-map-engine
  ```

2. Update the packages by running these commands on the machines hosting the central service and the Centreon MAP service:
 
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
