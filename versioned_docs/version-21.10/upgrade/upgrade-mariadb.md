---
id: upgrade-mariadb
title: Upgrading MariaDB
---

You may have several MariaDB databases in your architecture. The central server has a database, each remote server has a database, 
and the MBI and MAP modules each have a dedicated database. Within your architecture, all databases must have the same verison of MariaDB.

## Upgrading process

When you upgrade from one major version of Centreon to another, you must:
1. Upgrade Centreon (packages, web installation, deploying the configuration).
2. Upgrade MariaDB.

> Refer to the official MariaDB documentation to know more about this process:
> https://mariadb.com/kb/en/upgrading-between-major-mariadb-versions/

## Version of Maria DB for each version of Centreon

| Centreon | MariaDB |
|----------|---------|
| 21.10    | 10.5    |
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

## Upgrading between major MariaDB versions

You have to uninstall then reinstall MariaDB to upgrade between major versions (for example to switch from version 10.4 to version 10.5).

1. Stop the mariadb service:

    ```shell
    systemctl stop mariadb
    ```

2. Uninstall the current version:

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

    > During this uninstallation step, you may encounter an error because one or several MariaDB packages are missing. In that case, you have to execute the uninstallation command not including the missing package.

    For instance, you get the following error message:

    ```shell
    package MariaDB-compat is not installed
    ```

    As **MariaDB-compat** is the missing package, please execute the same command without quoting **MariaDB-compat**:

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-common
    ```

  > Make sure you have [installed the official MariaDB repository](./upgrade-from-21-04.md#install-the-mariadb-repository) before you continue the procedure.

3. Install the 10.5 version:

    ```shell
    yum install MariaDB-server-10.5\* MariaDB-client-10.5\* MariaDB-shared-10.5\* MariaDB-common-10.5\*
    ```

4. Start the mariadb service:

    ```shell
    systemctl start mariadb
    ```

5. Launch the MariaDB upgrade process:

    ```shell
    mysql_upgrade
    ```

    If your database is password-protected, enter:

    ```shell
    mysql_upgrade -u <database_admin_user> -p
    ```

    Example: if your database_admin_user is `root`, enter:

    ```
    mysql_upgrade -u root -p
    ```

    > Refer to the [official documentation](https://mariadb.com/kb/en/mysql_upgrade/)
    > for more information or if errors occur during this last step.

6. To enable MariaDB on startup, execute the following command:

    ```shell
    systemctl enable mariadb
    ```

### Upgrading from 10.1 to 10.5

The `innodb_additional_mem_pool_size` parameter has been removed since MariaDB 10.2,
so you should remove it from file **/etc/my.cnf.d/centreon.cnf**

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

## Upgrading between minor versions of MariaDB

Follow these steps to upgrade between minor versions of MariaDBB (for example, to switch from version 10.3.2 to version 10.3.5) : 

1. Update MariaDB :

    ```
    yum update mariadb-*
    ```

2. Restart MariaDB :

    ```
    restart mariadb
    ```
