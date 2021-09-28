---
id: upgrade-from-21-04
title: Upgrade from Centreon 21.04
---

This chapter describes how to upgrade your Centreon platform from version 21.04
to version 21.10.

> If you want to migrate your Centreon server to CentOS / Oracle Linux / RHEL 8
> you need to follow the [migration procedure](../migrate/migrate-from-20-x.html)

## Perform a backup

Be sure that you have fully backed up your environment for the following
servers:

- Central server
- Database server

## Upgrade the Centreon Central server

### Update the Centreon repository

Run the following commands:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
yum install -y https://yum.centreon.com/standard/21.10/el7/stable/noarch/RPMS/centreon-release-21.10-1.el7.centos.noarch.rpm
```
<!--CentOS 7-->
dnf install -y https://yum.centreon.com/standard/21.10/el8/stable/noarch/RPMS/centreon-release-21.10-1.el8.noarch.rpm
<!--END_DOCUSAURUS_CODE_TABS-->

### Upgrade PHP

Centreon 21.10 uses PHP in version 8.0.

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
First, you need to install the **remi** repository:
```shell
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
dnf config-manager --set-enabled 'powertools'
```
Then, you need to change the PHP stream from version 7.3 to 8.0 by executing the following commands and answering **y**
to confirm:
```shell
dnf module reset php
dnf module install php:remi-8.0
```
<!--CentOS 7-->
First, you need to install the **remi** repository:
```shell
yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm
```
Then, you need to enable the php 8.0 repository
```shell
yum-config-manager --enable remi-php80
```
<!--END_DOCUSAURUS_CODE_TABS-->

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

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
Execute the following commands:
```shell
systemctl enable php-fpm
systemctl restart php-fpm
```
<!--CentOS 7-->
The PHP timezone should be set. Run the command:
```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

> Replace **Europe/Paris** by your time zone. You can find the list of
> supported time zones [here](http://php.net/manual/en/timezones.php).

Execute the following commands:
```shell
systemctl stop rh-php73-php-fpm
systemctl disable rh-php73-php-fpm
systemctl enable php-fpm
systemctl start php-fpm
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Finalizing the upgrade

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
Before starting the web upgrade process, reload the Apache server with the
following command:
```shell
systemctl reload httpd
```
<!--CentOS 7-->
Before starting the web upgrade process, reload the Apache server with the
following command:
```shell
systemctl reload httpd24-httpd
```
<!--END_DOCUSAURUS_CODE_TABS-->

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

2. Restart the processes:
    ```
    systemctl restart cbd centengine centreontrapd gorgoned
    ```

3. Upgrade extensions. From `Administration > Extensions > Manager`, upgrade all extensions, starting
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

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
yum install -y https://yum.centreon.com/standard/21.10/el7/stable/noarch/RPMS/centreon-release-21.10-1.el7.centos.noarch.rpm
```
<!--CentOS 7-->
dnf install -y https://yum.centreon.com/standard/21.10/el8/stable/noarch/RPMS/centreon-release-21.10-1.el8.noarch.rpm
<!--END_DOCUSAURUS_CODE_TABS-->

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
