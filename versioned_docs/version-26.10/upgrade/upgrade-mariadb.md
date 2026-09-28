---
id: upgrade-mariadb
title: Upgrading MariaDB
description: "Upgrade MariaDB to the version required by your Centreon release"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You may have several MariaDB databases in your architecture. The central server has a database, each remote server has a database,
and the MBI and MAP modules each have a dedicated database. Within your architecture, all databases must have the same version of MariaDB.

## Upgrading process

When you upgrade from one major version of Centreon to another, you must:

1. Upgrade Centreon (packages, web installation, deploying the configuration). Note that you can only upgrade Centreon [from a supported OS](upgrade-matrix.mdx).
2. Upgrade MariaDB.

> Refer to the official MariaDB documentation for more information about this process:
> https://mariadb.com/kb/en/upgrading-between-major-mariadb-versions/

## Version of Maria DB for each version of Centreon

| Centreon | MariaDB |
|----------|---------|
| 26.10    | 11.8    |
| 25.10    | 10.11   |
| 24.10    | 10.11   |
| 24.04    | 10.11   |
| 23.10    | 10.5    |
| 23.04    | 10.5    |

## Knowing your version of MariaDB

To find out which version of MariaDB is installed on your machine, enter the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
rpm -qa |grep MariaDB
```

The results may look like this example:

```shell
MariaDB-client-10.5.8-1.el9.centos.x86_64
MariaDB-server-10.5.8-1.el9.centos.x86_64
MariaDB-common-10.5.8-1.el9.centos.x86_64
MariaDB-shared-10.5.8-1.el9.centos.x86_64
MariaDB-compat-10.5.8-1.el9.centos.x86_64
```

</TabItem>
</Tabs>

## Upgrading between major MariaDB versions

You must uninstall then reinstall MariaDB to upgrade between major versions. In this example, we will switch from version 10.11 to version 11.8. Adapt the procedure if you are upgrading from another version.

1. Stop the MariaDB service:

    ```shell
    systemctl stop mariadb
    ```

2. Uninstall the current version:

<Tabs groupId="sync">
<TabItem value="Alma / Oracle Linux 9" label="Alma / Oracle Linux 9">

```shell
rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

```shell
rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-common
```

</TabItem>
</Tabs>

> During this uninstallation step, you may encounter an error because one or several MariaDB packages are missing. In that case, you should execute the uninstallation command without including the missing package.
>
> For instance, you get the following error message:
>
> `package MariaDB-compat is not installed`
>
> As **MariaDB-compat** is the missing package, please execute the same command without quoting **MariaDB-compat**:
>
> `rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-common`

> Make sure you have [installed the official MariaDB repository](https://mariadb.com/kb/en/mariadb-package-repository-setup-and-usage/) before you continue the procedure.

3. Install version 11.8:

<Tabs groupId="sync">
<TabItem value="Alma / Oracle Linux 9" label="Alma / Oracle Linux 9">

```shell
dnf module enable -y mariadb:11.8
dnf install mariadb-server-11.8\* mariadb-11.8\*
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

```shell
dnf module enable -y mariadb:11.8
dnf install mariadb-server-11.8\* mariadb-11.8\*
```

</TabItem>
</Tabs>

4. Start the MariaDB service:

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

    ```shell
    mysql_upgrade -u root -p
    ```

    > Refer to the [official documentation](https://mariadb.com/kb/en/mysql_upgrade/)
    > for more information or if errors occur during this last step.

6. To enable MariaDB on startup, execute the following command:

    ```shell
    systemctl enable mariadb
    ```

### Upgrading from 10.1 to a more recent version

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

Follow these steps to upgrade between minor versions of MariaDB (for example, to switch from version 10.3.2 to version 10.3.5):

1. Update MariaDB:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update MariaDB-*
```

</TabItem>
</Tabs>

2. Restart MariaDB:

    ```shell
    systemctl restart mariadb
    ```
