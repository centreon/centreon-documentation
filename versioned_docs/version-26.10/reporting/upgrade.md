---
id: upgrade
title: Upgrade the extension
description: "Upgrade Centreon MBI to a new major version"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> When updating from version < 18.10 to a version >= 18.10, you need to
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

## Step 2: Upgrade the extension interface

1. Update the package, run the following commands:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf clean all
dnf update centreon-bi-server
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt clean
apt update
apt install --only-upgrade centreon-bi-server
```

</TabItem>
</Tabs>

2. Update through the interface:  Log on to the Centreon web interface, go to
**Administration > Extension > Manager** and click the
Update button to update the extension and the widgets.

## Step 3: Upgrade the reporting server

### Java version requirement

In version 26.10, the **cbis** service runs Java 25 through a hard-coded path: **/usr/lib/jvm/java-25-openjdk/bin/java**. It does not use the default `java` command, so a Java version installed elsewhere (for example, downloaded from the Oracle website) or selected with `update-alternatives` is not used by **cbis**.

Before you start the procedure, make sure that OpenJDK 25 is installed at this location:

1. Check the Java version at this path:

   ```shell
   /usr/lib/jvm/java-25-openjdk/bin/java -version
   ```

2. If the command fails, install OpenJDK 25 from your distribution's repositories:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y java-25-openjdk-headless
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt update
apt install -y openjdk-25-jre-headless
```

</TabItem>
</Tabs>

Once the reporting server is upgraded, you can check which Java binary **cbis** uses with the following command:

```shell
systemctl cat cbis | grep ExecStart
```

### Upgrade procedure

Now you can start the upgrade process:

1. Connect to your reporting server and stop the scheduler service (CBIS):

    ```shell
    systemctl stop cbis
    ```

2. Then run the following commands:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
dnf clean all
dnf update -y centreon-bi\* centreon-mariadb centreon-perl-libs-common
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt clean
apt update
apt install -y --only-upgrade centreon-bi-reporting-server centreon-mariadb centreon-perl-libs-common
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
