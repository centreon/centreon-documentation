---
id: map-legacy-eol
title: MAP Legacy end of life
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **MAP Legacy is no longer available. Starting from version 24.10, you have to use MAP.**

This topic describes the steps to follow regarding MAP Legacy once you have migrated to the available version of MAP.

## How to fully uninstall MAP Legacy

As MAP Legacy is no longer delivered, you must uninstall it completely following the instructions below.

> It is mandatory to perform these steps now, as you may encounter issues when upgrading to later versions.

### Migrate to Centreon MAP

Ensure you are using the [correct version of MAP](https://docs.centreon.com/docs/graph-views/introduction-map/). Use the [migration to Centreon MAP](https://docs.centreon.com/docs/graph-views/import-into-map-web/) procedure if needed.

### Remove the legacy package

Remove the **centreon-map-server** package from the server where MAP Legacy was installed:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf remove centreon-map-server
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf remove centreon-map-server
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt remove centreon-map-server
```

</TabItem>
</Tabs>

### Optional procedures

> These cleaning procedures will allow you to work in an optimal environment. If you wish, you can make a backup of your data.

- Remove the legacy log files:
  
  > You can check the path in this file `/etc/centreon-studio/map-log.xml`. By default, this should be `/var/log/centreon-map/centreon-map.log`.

  ```shell
  rm /var/log/centreon-map/centreon-map.log
  ```

- Remove the legacy configuration files from the server where MAP Legacy was installed:
  
  ```shell
  rm -rf /etc/centreon-studio
  ```

- Remove the database that was used by MAP Legacy:
  
  - Retrieve the credentials to connect to the database in this file `/etc/centreon-studio/studio-database.properties`.

  - Enter this command to remove the database: 

  ```shell
  mysql --host=$DB_HOST --port=$DB_PORT --user=$DB_USER --password $DB_NAME "DROP DATABASE centreon_studio;"
  ```
 