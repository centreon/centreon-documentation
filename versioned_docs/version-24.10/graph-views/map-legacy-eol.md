---
id: map-legacy-eol
title: MAP Legacy end of life
---

> **MAP Legacy is no longer available from version 24.10, you have to use MAP.**

## How to fully uninstall MAP Legacy

As MAP Legacy is no longer delivered, you must uninstall it completely following the instructions below.

> It is mandatory to perform these steps now, as you may encounter issues when upgrading to later versions.

### Migrate to Centreon MAP

> MAP Legacy must be uninstalled after you have migrated to MAP.

Ensure you are using the [correct version of MAP](../graph-views/introduction-map.md). Use the [migration to Centreon MAP](../graph-views/import-into-map-web.md) procedure if needed.

### Remove the legacy package

Remove the **centreon-map-server** package from the server where MAP Legacy was installed:

```shell
--> command for centreon-map-server deletion
```

### Optional procedures

> These cleaning procedures will allow you to work in an optimal environment. If you wish, you can make a backup of your data.

- Remove the legacy configuration files from the server where MAP Legacy was installed:
  
  ```shell
  --> command for /etc/centreon-studio/ deletion
  ```

- Remove the legacy log files:
  
  > You can check the path with this command `/etc/centreon/studio/centreon-map.log`

  ```shell
  --> command for /var/log/centreon-map/centreon-map.log
  ```

- Remove the database that was used by MAP Legacy:
  
  > You can check the service and the database with this command `/etc/centreon/studio/studio-database.properties`

  ```shell
  --> command for /var/log/centreon-map/centreon-map.log
  ```
 
