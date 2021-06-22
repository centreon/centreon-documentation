---
id: upgrade-mariadb
title: Upgrading MariaDB
---

You may have several MariaDB databases in your architecture. The central server has a database, each remote server has a database, 
and the MBI and MAP modules each have a dedicated database. Within your architecture, all databases must have the same verison of MariaDB.

## Upgrading process

When you upgrade from one major version of Centreon to another, you must:
1. Upgrade Centreon (packages, web installation, déploying the configuration).
2. Upgrade MariaDB.

Be aware that MariaDB strongly recommends that you upgrade the server one major version at a time.
You must upgade MariaDB from your original version up to version 10.5. The upgrade must be made
one version at a time, e.g. 10.1 to 10.2, 10.2 to 10.3, etc. 
That is why Centreon provides several versions on its stable repositories.

> Refer to the official MariaDB documentation to know more about this process:
> - https://mariadb.com/kb/en/upgrading-from-mariadb-101-to-mariadb-102/#how-to-upgrade
> - https://mariadb.com/kb/en/upgrading-from-mariadb-102-to-mariadb-103/#how-to-upgrade
> - https://mariadb.com/kb/en/upgrading-from-mariadb-103-to-mariadb-104/#how-to-upgrade
> - https://mariadb.com/kb/en/upgrading-from-mariadb-104-to-mariadb-105/#how-to-upgrade

## Version of Maria DB by version of Centreon

| Centreon | MariaDB |
|----------|---------|
| 21.04    | 10.5    |
| 20.10    | 10.3.x  |
| 20.04    | 10.3.x  |
| 19.10    | 10.1.x  |

## Knowing your version of MariaDB

To know which version of MariaDB is installed on your machine, enter the following command:

```
rpm -qa |grep MariaDB
```

The results should look like this:

```shell
MariaDB-client-10.5.8-1.el7.centos.x86_64
MariaDB-server-10.5.8-1.el7.centos.x86_64
MariaDB-common-10.5.8-1.el7.centos.x86_64
MariaDB-shared-10.5.8-1.el7.centos.x86_64
MariaDB-compat-10.5.8-1.el7.centos.x86_64
```

## Upgrade from 10.1 to 10.2

`innodb_additional_mem_pool_size` parameter has been removed since MariaDB 10.2,
so you should remove it Zfrom file **/etc/my.cnf.d/centreon.cnf**

```diff
#
# Custom MySQL/MariaDB server configuration for Centreon
#
[server]
innodb_file_per_table=1

open_files_limit = 32000

key_buffer_size = 256M
sort_buffer_size = 32M
join_buffer_size = 4M
thread_cache_size = 64
read_buffer_size = 512K
read_rnd_buffer_size = 256K
max_allowed_packet = 8M

# For 4 Go Ram
-#innodb_additional_mem_pool_size=512M
#innodb_buffer_pool_size=512M

# For 8 Go Ram
-#innodb_additional_mem_pool_size=1G
#innodb_buffer_pool_size=1G
```

Follow those summarized steps to perform the upgrade in the way recommended by
MariaDB:

1. Stop the mariadb service:

    ```shell
    systemctl stop mariadb
    ```

2. Uninstall current 10.1 version:

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Install 10.2 version:

    ```shell
    yum install MariaDB-server-10.2\* MariaDB-client-10.2\* MariaDB-shared-10.2\* MariaDB-compat-10.2\* MariaDB-common-10.2\*
    ```

4. Start the mariadb service:

    ```shell
    systemctl start mariadb
    ```

5. Launch the MariaDB upgrade process:

    ```shell
    mysql_upgrade
    ```

    > Refer to the [official documentation](https://mariadb.com/kb/en/mysql_upgrade/)
    > if errors occur during this last step.

6. To enable MariaDB on startup, execute the following command:

    ```shell
    systemctl enable mariadb
    ```

## Upgrade from 10.2 to 10.3

Follow those summarized steps to perform the upgrade in the way recommended by
MariaDB:

1. Stop the mariadb service:

    ```shell
    systemctl stop mariadb
    ```

2. Uninstall current 10.2 version:

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Install 10.3 version:

    ```shell
    yum install MariaDB-server-10.3\* MariaDB-client-10.3\* MariaDB-shared-10.3\* MariaDB-compat-10.3\* MariaDB-common-10.3\*
    ```

4. Start the mariadb service:

    ```shell
    systemctl start mariadb
    ```

5. Launch the MariaDB upgrade process:

    ```shell
    mysql_upgrade
    ```

    > Refer to the [official documentation](https://mariadb.com/kb/en/mysql_upgrade/)
    > if errors occur during this last step.

6. To enable MariaDB on startup, execute the following command:

    ```shell
    systemctl enable mariadb
    ```

## Upgrade from 10.3 to 10.4

Follow those summarized steps to perform the upgrade in the way recommended by
MariaDB:

1. Stop the mariadb service:

    ```shell
    systemctl stop mariadb
    ```

2. Uninstall current 10.3 version:

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Install 10.4 version:

    ```shell
    yum install MariaDB-server-10.4\* MariaDB-client-10.4\* MariaDB-shared-10.4\* MariaDB-compat-10.4\* MariaDB-common-10.4\*
    ```

4. Start the mariadb service:

    ```shell
    systemctl start mariadb
    ```

5. Launch the MariaDB upgrade process:

    ```shell
    mysql_upgrade
    ```

    > Refer to the [official documentation](https://mariadb.com/kb/en/mysql_upgrade/)
    > if errors occur during this last step.

6. To enable MariaDB on startup, execute the following command:

    ```shell
    systemctl enable mariadb
    ```

## Upgrade from 10.4 to 10.5

Follow those summarized steps to perform the upgrade in the way recommended by
MariaDB:

1. Stop the mariadb service:

    ```shell
    systemctl stop mariadb
    ```

2. Uninstall current 10.4 version:

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Install 10.5 version:

    ```shell
    yum install MariaDB-server-10.5\* MariaDB-client-10.5\* MariaDB-shared-10.5\* MariaDB-compat-10.5\* MariaDB-common-10.5\*
    ```

4. Start the mariadb service:

    ```shell
    systemctl start mariadb
    ```

5. Launch the MariaDB upgrade process:

    ```shell
    mysql_upgrade
    ```

    > Refer to the [official documentation](https://mariadb.com/kb/en/mysql_upgrade/)
    > if errors occur during this last step.

6. To enable MariaDB on startup, execute the following command:

    ```shell
    systemctl enable mariadb
    ```