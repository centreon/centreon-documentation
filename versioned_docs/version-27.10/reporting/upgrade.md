---
id: upgrade
title: Upgrade the extension
description: "Upgrade Centreon MBI to a new major version"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> If one of your servers runs an operating system that is [no longer supported](../installation/compatibility.md#operating-systems), you cannot upgrade MBI directly. 
First migrate your platform to a supported operating system:
>
> - For the central server, see our [introduction to the migration process](../migrate/introduction.md).
> - For the MBI server, see [Migrating the extension](migrate.md).

> When updating from version < 18.10 to a version >= 18.10, you need to: 
>
> - Retrieve a new license from Centreon support
> - Make sure your Centreon MBI server is [based on a supported OS](../installation/compatibility.md). You may use the
>   following procedure to migrate your server: [Migrate your
>   reporting server](migrate.md)

The upgrade of Centreon MBI consists of four steps:

- Updating the repository
- Updating the extension interface
- Updating the reporting server
- Updating the MariaDB database

## Prerequisites

### Upgrade your central server

See [Introduction to upgrade](../upgrade/introduction.md).

## Step 1: Update the repository

When you upgrade from a previous major version to 26.10.x, you first need to update the repository on your Central & Reporting servers.

You will find the new "Business" repository on the "Repositories" page in your [Centreon Support account](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

On the reporting server, you also need to install the 26.10 standard repository:

<Tabs groupId="os">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
dnf clean all
dnf update -y centreon-bi\* centreon-perl-libs-common
```
</TabItem>
</Tabs>

## Step 2: Upgrade the extension interface

1. Update the package, run the following commands:

```shell
dnf clean all
dnf update centreon-bi-server
```

2. Update through the interface:  Log on to the Centreon web interface, go to
**Administration > Extension > Manager** and click the
Update button to update the extension and the widgets.

## Step 3: Upgrade the reporting server

### Java version requirement

Version 26.10 requires Java 25. When upgrading the MBI packages, java (OpenJDK 25) is automatically installed as a dependency, if needed. The **cbis** service always uses **/usr/lib/jvm/java-25-openjdk** on Alma / RHEL / Oracle Linux and **/usr/lib/jvm/java-25-openjdk-amd64** on Debian 13. Once the upgrade is complete, you can remove the Java 17 packages left over from version 25.10, if no other application on the server uses them.

### Upgrade procedure

Now you can start the upgrade process:

1. Connect to your reporting server and stop the scheduler service (CBIS):

    ```shell
    systemctl stop cbis
    ```

2. Then run the following commands:

```shell
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
dnf clean all
dnf update -y centreon-bi\* centreon-perl-libs-common
```

3. Start the scheduler service:

    ```shell
    systemctl start cbis
    ```

4. Start and enable **gorgoned**:

   ```shell
   systemctl start gorgoned && systemctl enable gorgoned
   ```

## Step 4: Upgrade the database

1. Stop the **cbis** service:

    ```shell
    systemctl stop cbis
    ```

2. See [Upgrading MariaDB](../upgrade/upgrade-mariadb.md) or [Upgrade MySQL](../upgrade/upgrade-mysql.md).

<!-- On Debian 13, if the package asks whether to replace `/etc/mysql/mariadb.conf.d/50-server.cnf`, keep your currently installed version (answer **N**). The package version sets `bind-address = 127.0.0.1`, and the central server would then no longer be able to reach the reporting database. -->

3. Check that MariaDB is running:

    ```shell
    systemctl is-active mariadb
    ```

The command must return `active`.
<!--  On Debian 13, also check that MariaDB still listens on all interfaces:

```shell
grep "^bind-address" /etc/mysql/mariadb.conf.d/50-server.cnf
```

The value must be `0.0.0.0`. If it is `127.0.0.1`, set it back to `0.0.0.0` and restart MariaDB with `systemctl restart mariadb`. -->

4. Start the **cbis** service:

    ```shell
    systemctl start cbis
    ```
