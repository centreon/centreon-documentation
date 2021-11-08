---
id: upgrade-from-20-04
title: Upgrade from Centreon 20.04
---

This chapter describes how to upgrade your Centreon platform from version 20.04
to version 21.04.

> If you want to migrate your Centreon server to CentOS / Oracle Linux / RHEL 8
> you need to follow the [migration procedure](../migrate/migrate-from-20-x.html)

> To perform this procedure, your MariaDB version must be >= 10.3.22.
> If not, please follow before the [MariaDB update chapter](./upgrade-from-19-10.html#upgrade-mariadb-server)

## Perform a backup

Be sure that you have fully backed up your environment for the following
servers:

- Central server
- Database server

## Update the RPM signing key

For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021. When upgrading from an older version, you need to go through the [key rotation procedure](../security/key-rotation.html#existing-installation), to remove the old key and install the new one.

## Upgrade the Centreon Central server

> Since 21.04, Centreon uses **MariaDB 10.5**.
>
> This upgrade process will only upgrade Centreon components first.
>
> MariaDB will be upgraded afterwards.

### Update the Centreon repository

Run the following commands:

```shell
yum install -y https://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-5.el7.centos.noarch.rpm
```

### Upgrade the Centreon solution

Stop the Centreon Broker process:
```shell
systemctl stop cbd
```

Delete existing retention files:
```shell
rm /var/lib/centreon-broker/* -f
```

Clean yum cache:

```shell
yum clean all --enablerepo=*
```

Then upgrade all the components with the following command:

```shell
yum update centreon\*
```

> Accept new GPG keys from the repositories as needed.

The PHP timezone should be set. Run the command:
```shell
echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php73/php.d/50-centreon.ini
```

> Replace **Europe/Paris** by your time zone. You can find the list of
> supported time zones [here](http://php.net/manual/en/timezones.php).

Execute the following commands:
```shell
systemctl stop rh-php72-php-fpm
systemctl disable rh-php72-php-fpm
systemctl enable rh-php73-php-fpm
systemctl start rh-php73-php-fpm
```

### Finalizing the upgrade

Before starting the web upgrade process, reload the Apache server with the
following command:

```shell
systemctl reload httpd24-httpd
```

Then log on to the Centreon web interface to continue the upgrade process:

Click on **Next**:

![image](../assets/upgrade/web_update_1.png)

Click on **Next**:

![image](../assets/upgrade/web_update_2.png)

The release notes describe the main changes. Click on **Next**:

![image](../assets/upgrade/web_update_3.png)

This process performs the various upgrades. Click on **Next**:

![image](../assets/upgrade/web_update_4.png)

Your Centreon server is now up to date. Click on **Finish** to access the login
page:

![image](../assets/upgrade/web_update_5.png)

If the Centreon BAM module is installed, refer to the
[upgrade procedure](../service-mapping/upgrade.html).

### Post-upgrade actions

1. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.html).

2. Restart Centreon processes:
    ```
    systemctl restart cbd centengine centreontrapd gorgoned
    ```

3. Upgrade extensions. From `Administration > Extensions > Manager`, upgrade all extensions, starting
with the following:

  - License Manager,
  - Plugin Packs Manager,
  - Auto Discovery.

Then you can upgrade all other commercial extensions.

### Upgrade the MariaDB server

The MariaDB components can now be upgraded.

> Refer to the official MariaDB documentation to know more about this process:
>
> https://mariadb.com/kb/en/upgrading-between-major-mariadb-versions/

#### Update the Centreon repository

> This step is required ONLY when your environment features an architecture with
> a dedicated remote DBMS. If your environment features Centreon Central and
> MariaDB together on the same server, you SHOULD simply skip this step.

Run the following command on the dedicated DBMS server:

```shell
yum install -y https://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-5.el7.centos.noarch.rpm
```

#### Upgrading MariaDB

You have to uninstall then reinstall MariaDB to upgrade between major versions (i.e. to switch from version 10.3 to version 10.5).

1. Stop the mariadb service:

    ```shell
    systemctl stop mariadb
    ```

2. Uninstall the current version:

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Install version 10.5:

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

#### Enable MariaDB on startup

Execute the following command:

```shell
systemctl enable mariadb
```

## Upgrade the Remote Servers

This procedure is the same than to upgrade a Centreon Central server.

## Upgrade the Pollers

### Update the Centreon repository

Run the following command:

```shell
yum install -y https://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-5.el7.centos.noarch.rpm
```

### Upgrade the Centreon solution

Clean yum cache:

```shell
yum clean all --enablerepo=*
```

Upgrade all the components with the following command:

```shell
yum update centreon\*
```

> Accept new GPG keys from the repositories as needed.

Start and enable **gorgoned**:

```shell
systemctl start gorgoned
systemctl enable gorgoned
```

## Secure your platform

Don't forget to secure your Centreon platform following our
[recommendations](../administration/secure-platform.html)
