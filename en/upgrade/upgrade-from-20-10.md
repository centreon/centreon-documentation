---
id: upgrade-from-20-10
title: Upgrade from Centreon 20.10
---

This chapter describes how to upgrade your Centreon platform from version 20.10
to version 21.04.

## Perform a backup

Be sure that you have fully backed up your environment for the following
servers:

- Central server
- Database server

## Upgrade the Centreon Central server

### Update the Centreon repository

Run the following commands:

```shell
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-1.el7.centos.noarch.rpm
```

> If you are using a CentOS environment, you must install the *Software
> Collections* repositories with the following command:
>
> ```shell
> yum install -y centos-release-scl-rh
> ```

### Upgrade the Centreon solution

Clean yum cache:

```shell
yum clean all --enablerepo=*
```

Then upgrade all the components with the following command:

```shell
yum update centreon\*
```

> Accept new GPG keys from the repositories as needed.

### Additional actions

#### Update the PHP version

Since 21.04, Centreon uses a new version of PHP.

The PHP timezone should be set. Run the command:

```shell
echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php73/php.d/50-centreon.ini
```

> Change **Europe/Paris** to your time zone. You can find the supported list of
> time zone [here](http://php.net/manual/en/timezones.php).

> Don't forget your php-fpm specific configuration that you may have set in the
> /etc/opt/rh/rh-php72/php.ini and/or /etc/opt/rh/rh-php72/php-fpm.d/centreon.conf

Then, run the following commands:

```shell
systemctl disable rh-php72-php-fpm
systemctl stop rh-php72-php-fpm
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

#### Upgrade extensions

From `Administration > Extensions > Manager`, upgrade all extensions, starting
with the following:

  - License Manager,
  - Plugin Packs Manager,
  - Auto Discovery.

Then you can upgrade all other commercial extensions.

## Upgrade the Remote Servers

This procedure is the same than to upgrade a Centreon Central server.

## Upgrade the Pollers

### Update the Centreon repository

Run the following command:

```shell
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-1.el7.centos.noarch.rpm
```

> If you are using a CentOS environment, you must install the *Software
> Collections* repositories with the following command:
>
> ```shell
> yum install -y centos-release-scl-rh
> ```

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

### Additional actions

#### Update the PHP version

The PHP timezone should be set. Run the command:

```shell
echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php73/php.d/50-centreon.ini
```

> Change **Europe/Paris** to your time zone. You can find the supported list of
> time zone [here](http://php.net/manual/en/timezones.php).

> Don't forget your php-fpm specific configuration that you may have set in the
> /etc/opt/rh/rh-php72/php.ini and/or /etc/opt/rh/rh-php72/php-fpm.d/centreon.conf

Then, run the following commands:

```shell
systemctl disable rh-php72-php-fpm
systemctl stop rh-php72-php-fpm
systemctl enable rh-php73-php-fpm
systemctl start rh-php73-php-fpm
```
