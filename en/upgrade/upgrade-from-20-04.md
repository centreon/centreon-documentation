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

## Upgrade the Centreon Central server

> Since 21.04, Centreon uses **MariaDB 10.5**.
>
> This upgrade process will only upgrade Centreon components first.
>
> MariaDB will be upgraded afterwards.

### Update the Centreon repository

Run the following commands:

```shell
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-4.el7.centos.noarch.rpm
```

### Upgrade the Centreon solution


> Please, make sure all users are logged out from the Centreon web interface
> before starting the upgrade procedure.

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

#### Restart Centreon processes

Restart the processes:
```
systemctl restart cbd centengine centreontrapd gorgoned
```

#### Upgrade extensions

From `Administration > Extensions > Manager`, upgrade all extensions, starting
with the following:

  - License Manager,
  - Plugin Packs Manager,
  - Auto Discovery.

Then you can upgrade all other commercial extensions.

### Upgrade MariaDB server

The MariaDB components can now be upgraded.

Be aware that MariaDB strongly recommends to upgrade the server through each
major release. Please refer to the [official MariaDB
documentation](https://mariadb.com/kb/en/upgrading/) for further information.

You then need to upgrade from 10.3 to 10.4 and from 10.4 to 10.5.

That is why Centreon provides both 10.4 and 10.5 versions on its stable
repositories.

> Refer to the official MariaDB documentation to know more about this process:
>
> - https://mariadb.com/kb/en/upgrading-from-mariadb-103-to-mariadb-104/#how-to-upgrade
> - https://mariadb.com/kb/en/upgrading-from-mariadb-104-to-mariadb-105/#how-to-upgrade

#### Upgrade from 10.3 to 10.4

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

#### Upgrade from 10.4 to 10.5

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
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-4.el7.centos.noarch.rpm
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

## Secure your platform

Don't forget to secure your Centreon platform following our
[recommendations](../administration/secure-platform.html)
