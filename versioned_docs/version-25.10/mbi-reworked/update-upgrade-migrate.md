---
id: update-upgrade-migrate
title: Updating, upgrading or migrating MBI
---

# Update 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Centreon MBI is updated in two steps:

- Updating the extension interface
- Updating the reporting server

## Update the extension interface

> Please ensure that the ETL process has been completed before updating the extension.

1. Update the package, run the following commands:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf clean all
dnf update centreon-bi-server
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf clean all
dnf update centreon-bi-server
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt clean
apt --only-upgrade install centreon-bi\*
```

</TabItem>
</Tabs>

2. Update through the interface: Log on to the Centreon web interface, go to
the **Administration > Extension > Manager** page and click the
Update button to update the extension and the widgets.

## Update the reporting server

Connect to your reporting server and stop the scheduler service **CBIS**:

```shell
systemctl stop cbis
```

Then stop **gorgoned**:

```shell
systemctl stop gorgoned
```

Then run the following commands: :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf clean all
dnf update centreon-bi\*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf clean all
dnf update centreon-bi\*
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt clean
apt --only-upgrade install centreon-bi\*
```

</TabItem>
</Tabs>

You also need to update Centreon Gorgone:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update centreon-gorgone\*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update centreon-gorgone\*
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt --only-upgrade install centreon-gorgone\*
```

</TabItem>
</Tabs>

Start the scheduler service **CBIS**:

```shell
systemctl start cbis
```

Then start **gorgoned**:

```shell
systemctl start gorgoned
```

MBI is now updated.

> Follow this procedure if [you get an error due to a column update issue](../resources/known-issues.md#you-get-some-errors-during-daily-import-and-statistic-calculation) in the database.

# Upgrade

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> When updating from version < 18.10 to a version >= 18.10, you need to
>
> - Retrieve a new license from Centreon support
> - Make sure your Centreon MBI server is based on CentOS/RH 7. You may use the
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

### Update the RPM signing key

On EL8, for security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021. When upgrading from an older version, you need to go through the [key rotation procedure](../security/key-rotation.md#existing-installation) to remove the old key and install the new one.

## Step 1: Update the repository

When you upgrade from a previous major version to 24.10.x, you first need to update the repository on your Central & Reporting servers.

You will find the new "Business" repository on the "Repositories" page in your [Centreon Support account](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

## Step 2: Upgrade the extension interface

1. Update the package, run the following commands:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf clean all
dnf update centreon-bi-server
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf clean all
dnf update centreon-bi-server
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt clean
apt install --only-upgrade centreon-bi-server
```

</TabItem>
</Tabs>

2. Update through the interface:  Log on to the Centreon web interface, go to
**Administration > Extension > Manager** and click the
Update button to update the extension and the widgets.

## Step 3: Upgrade the reporting server

### Java version requirement
  
  > Ensure a version of Java 17 (or 18) is installed before you start the procedure.
  
  - If you need to check the Java version, enter the following command:
  
  ```shell
  java -version
  ```
  
  - If you need to upgrade the Java installation to Java 17 (or 18), go to the [Oracle official download](https://www.oracle.com/java/technologies/downloads/#java17) page.

  - If several Java versions are installed, you need to activate the right version. Display the installed versions using the following command and select the Java 17 (or 18) version:
  
  ```shell
  sudo update-alternatives --config java
  ```
  
  Then restart the service:
  
  ```shell
  systemctl restart cbis
  ```

### Upgrade procedure

Now you can start the upgrade process:

1. Connect to your reporting server and stop the scheduler service (CBIS):

    ```shell
    systemctl stop cbis
    ```

2. Then run the following commands:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf clean all
dnf update centreon-bi\*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
dnf clean all
dnf update centreon-bi\*
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt clean
apt install --only-upgrade centreon-bi-reporting-server
```

</TabItem>
</Tabs>

3. Start the scheduler service:

    ```shell
    systemctl start cbis
    ```

4. Start and enable **gorgoned**:

   ```shell
   systemctl start gorgoned && systemctl enable gorgoned
   ```

## Step 4: Upgrade the MariaDB database

1. Stop the **cbis** service:

    ```shell
    systemctl stop cbis
    ```

2. See [Upgrading MariaDB](../upgrade/upgrade-mariadb.md).

3. Start the **cbis** service:

    ```shell
    systemctl start cbis
    ```

# Migrate

This chapter explains how to move your reporting server to another
one (e.g. if you want to switch to another supported OS).

The migration of the interface extension is done at the same time as the migration of the central server.

## Install the new reporting server

Install your new reporting server based on the Centreon Business
repository using the [standard documentation](installation.md).

## Synchronizing files & data

Stop mysqld on **both** Reporting servers

    service mysql stop

Copy data from the old reporting server to the new one:

    rsync -avz /var/lib/mysql/* root@IP_New_Reporting_Server:/var/lib/mysql/

Execute the following command to ensure compatibility of the database files:

    mysql_upgrade

-   If no error is visible, restart MariaDB/MySQL and continue to the section
    "Move generated reports"
-   If you see errors, especially on the following tables mysql
    innodb_index_stats, innodb_table_stats, gtid_slave_pos, it
    might be caused by an incompatibility between MySQL/MariaDB 5.5 and
    MariaDB 10.11. In that case, follow the procedure below:

        service mysql stop
        cp -a /var/lib/mysql/ /var/lib/mysql.bak
        cd /var/lib/mysql/mysql/
        rm innodb_index_stats.frm innodb_index_stats.ibd innodb_table_stats.frm innodb_table_stats.ibd gtid_slave_pos.frm gtid_slave_pos.ibd
        service mysql start

    Then manually recreate the tables:

    mysql mysql < repair_mysql_upgrade.sql

    Download the following file: [repair_mysql_upgrade.sql](../assets/reporting/administrate/repair_mysql_upgrade.sql)


> Be sure to copy the the custom report & resources you designed to your
> new reporting server in the same folders.

## Move generated reports

In case you also move your Centreon central server, you need to
synchronize the folders containing generated reports on your new
Centreon server to be able to have them on the interface:

    rsync -avz /var/lib/centreon/centreon-bi-server/archives/ root@IP_New_Centreon_Server:/var/lib/centreon/centreon-bi-server/archives/
