---
id: map-legacy-eol
title: MAP Legacy end of life
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **MAP Legacy is no longer available. Starting from version 24.10, you have to use MAP.**

This topic describes what to do:

- if you were still using MAP Legacy and want to upgrade to Centreon 24.10 without losing any data.
- if you were still using MAP Legacy and have already upgraded to Centreon 24.10, and want to switch to MAP without losing any data.
- if you had already migrated from MAP Legacy to MAP in an earlier version (then MAP Legacy files need to be removed).

If you were still using MAP Legacy, it is likely that you have never installed MAP before. To know whether MAP is installed on your platform, run the following command:

```shell
rpm -q centreon-map-engine
```

If you have installed MAP at some point in the past, then switched back to MAP Legacy, be aware that switching from MAP Legacy to MAP will delete all contents you may have created in MAP when you first installed it.

## I was still using MAP Legacy and I haven't upgraded to Centreon 24.10 yet

If you have not upgraded to Centreon 24.10 yet, follow these steps:

* Make a backup of your MAP legacy data: backup all files in **/etc/centreon-studio** and make a dump of the MAP database.
* [Upgrade your Centreon platform to version 24.10](../../upgrade/introduction).
* If you have never done it in the past, [install MAP](map-web-install.md). If you have installed MAP in the past, [upgrade it to version 24.10](map-web-upgrade.md).
* [Upgrade MAP legacy to version 24.10](upgrading-map-legacy.md).
* [Switch from MAP Legacy to MAP](import-into-map-web.md) in your current version. This includes activating the new MAP module and importing your legacy maps into MAP.
* [Uninstall MAP Legacy from your Centreon platform](#how-to-fully-uninstall-map-legacy).

## I was still using MAP Legacy and I have already upgraded my platform and MAP legacy and MAP to Centreon 24.10

* Make a backup of your MAP legacy data: backup all files in **/etc/centreon-studio** and make a dump of the MAP database.
* [Switch from MAP Legacy to MAP](import-into-map-web.md). This includes activating the new MAP module and importing your legacy maps into MAP.
* [Uninstall MAP Legacy from your Centreon platform](#how-to-fully-uninstall-map-legacy).

## I wasn't using MAP Legacy anymore but it was still installed on my platform

If you had already migrated to MAP in an earlier version and weren't using MAP Legacy anymore, [uninstall MAP Legacy from your Centreon 24.10 platform](#how-to-fully-uninstall-map-legacy). This is because some legacy files are still present and need to be removed to avoid all problems when upgrading later.

## How to fully uninstall MAP Legacy

> It is mandatory to unistall MAP Legacy from your Centreon 24.10 platform, otherwise you may encounter issues when upgrading to later versions.

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

- Remove the legacy log files. (If you do not know where to find the log files, look in `/etc/centreon-studio/map-log.xml`. By default, the path is `/var/log/centreon-map/centreon-map.log`.)
  
  ```shell
  rm /var/log/centreon-map/centreon-map.log
  ```

- Remove the legacy configuration files from the server where MAP Legacy was installed:
  
  ```shell
  rm -rf /etc/centreon-studio
  ```

- Remove the database that was used by MAP Legacy:
  
  - Retrieve the credentials to connect to the database from this file `/etc/centreon-studio/studio-database.properties`.

  - Enter this command to remove the database:

  ```shell
  mysql --host=$DB_HOST --port=$DB_PORT --user=$DB_USER --password $DB_NAME "DROP DATABASE centreon_studio;"
  ```
