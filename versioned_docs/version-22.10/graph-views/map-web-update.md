---
id: map-web-update
title: Updating MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use the following procedure to update your MAP version:

1. Stop the **centreon-map-engine** service by running this command on the machine hosting the Centreon MAP service:
 
  ```shell
  sudo systemctl stop centreon-map-engine
  ```

2. Update the packages by running this command on the machine(s) hosting the central service and the Centreon MAP service:
 
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

``` shell
sudo apt update centreon-map-engine centreon-map-web-client
```

</TabItem>
</Tabs>

3. Clear your browser cache.
 
4. Restart the **centreon-map-engine** service using the following command:
 
  ```shell
  sudo systemctl start centreon-map-engine
  ```
