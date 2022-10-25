---
id: upgrade-from-22-04
title: Upgrade from Centreon 22.04
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter describes how to upgrade your Centreon platform from version 22.04
to version 22.10.

> When you upgrade your central server, make sure you also upgrade all your remote servers and your pollers. All servers in your architecture must have the same version of Centreon. In addition, all servers must use the same [version of the BBDO protocol](../developer/developer-broker-bbdo.md#switching-versions-of-bbdo).

> If you want to migrate your Centreon platform to another server/OS, please read our chapter on migration.
> you need to follow the [migration procedure](../migrate/introduction.md).

## Prerequisites

### Perform a backup

Be sure that you have fully backed up your environment for the following
servers:

- Central server
- Database server

### Update to the latest minor version

Update your platform to the latest available minor version of Centreon 22.04.

## Upgrade the Centreon Central server

### Update the Centreon repository

Run the following commands:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y https://yum.centreon.com/standard/22.10/el8/stable/noarch/RPMS/centreon-release-22.10-1.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y https://yum.centreon.com/standard/22.10/el7/stable/noarch/RPMS/centreon-release-22.10-1.el7.centos.noarch.rpm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
sed -i -E 's|[0-9]{2}\.[0-9]{2}|22.10|g' /etc/apt/sources.list.d/centreon.list
apt update
```

</TabItem>
</Tabs>

> If you are using a Business edition, install the correct Business repository too. You can find it on the [support portal](https://support.centreon.com/s/repositories).

### Install the MariaDB repository

<Tabs groupId="sync">

<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --os-type=rhel --os-version=8 --mariadb-server-version="mariadb-10.5"
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --os-type=rhel --os-version=7 --mariadb-server-version="mariadb-10.5"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --os-type=debian --os-version=11 --mariadb-server-version="mariadb-10.5"
```

</TabItem>
</Tabs>

### Upgrade PHP

Centreon 22.10 uses PHP in version 8.1.

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

You need to change the PHP stream from version 8.0 to 8.1 by executing the following commands and answering **y**
to confirm:

```shell
dnf module reset php
dnf module install php:remi-8.1
```

</TabItem>
<TabItem value="Alma / Oracle Linux 8" label="Alma / Oracle Linux 8">

You need to change the PHP stream from version 8.0 to 8.1 by executing the following commands and answering **y**
to confirm:

```shell
dnf module reset php
dnf module install php:remi-8.1
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

You need to enable the php 8.1 repository
```shell
yum-config-manager --enable remi-php81
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
systemctl stop php8.0-fpm
```

</TabItem>
</Tabs>

### Upgrade the Centreon solution

> Make sure all users are logged out from the Centreon web interface
> before starting the upgrade procedure.

If you have installed Business extensions, update the Business repository to version 22.10.
Visit the [support portal](https://support.centreon.com/s/repositories) to get its address.

If your OS is Debian 11 and you have a customized Apache configuration, perform a backup of your configuration file (**/etc/apache2/sites-available/centreon.conf**).

Stop the Centreon Broker process:

```shell
systemctl stop cbd
```

Delete existing retention files:

```shell
rm /var/lib/centreon-broker/* -f
```

Clean yum cache:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf clean all --enablerepo=*
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum clean all --enablerepo=*
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt clean all
apt update
```

</TabItem>
</Tabs>

Then upgrade all the components with the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
yum update centreon\* php-pecl-gnupg
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum update centreon\* php-pecl-gnupg
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt upgrade centreon
```

</TabItem>
</Tabs>

> Accept new GPG keys from the repositories as needed.

### Update your customized Apache configuration

This section only applies if you customized your Apache configuration. 

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

When upgrading your platform, the Apache configuration file is not upgraded automatically: the new configuration file brought by the rpm does not replace the old file. You must copy the changes manually to your customized configuration file.

Run a diff between the old and the new Apache configuration files:

```shell
diff -u /etc/httpd/conf.d/10-centreon.conf /etc/httpd/conf.d/10-centreon.conf.rpmnew
```

* **10-centreon.conf** (post upgrade): this file contains the custom configuration. It does not contain anthing new brought by the upgrade.
* **10-centreon.conf.rpmnew** (post upgrade): this file is provided by the rpm; it does not contain any custom configuration.

For each difference between the files, assess whether you should copy it from **10-centreon.conf.rpmnew** to **10-centreon.conf**.

Check that Apache is configured properly by running the following command:

```shell
apachectl configtest
```

The expected result is the following:

```shell
Syntax OK
```

Restart the Apache and PHP processes to take in account the new configuration:

```shell
systemctl restart php-fpm httpd
```

Then check its status:

```shell
systemctl status httpd
```

If everything is ok, you should have:

```shell
● httpd.service - The Apache HTTP Server
   Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; vendor preset: disabled)
  Drop-In: /usr/lib/systemd/system/httpd.service.d
           └─php-fpm.conf
   Active: active (running) since Tue 2020-10-27 12:49:42 GMT; 2h 35min ago
     Docs: man:httpd.service(8)
 Main PID: 1483 (httpd)
   Status: "Total requests: 446; Idle/Busy workers 100/0;Requests/sec: 0.0479; Bytes served/sec: 443 B/sec"
    Tasks: 278 (limit: 5032)
   Memory: 39.6M
   CGroup: /system.slice/httpd.service
           ├─1483 /usr/sbin/httpd -DFOREGROUND
           ├─1484 /usr/sbin/httpd -DFOREGROUND
           ├─1485 /usr/sbin/httpd -DFOREGROUND
           ├─1486 /usr/sbin/httpd -DFOREGROUND
           ├─1487 /usr/sbin/httpd -DFOREGROUND
           └─1887 /usr/sbin/httpd -DFOREGROUND

```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

When upgrading your platform, the Apache configuration file is not upgraded automatically: the new configuration file brought by the rpm does not replace the old file. You must copy the changes manually to your customized configuration file.

Run a diff between the old and the new Apache configuration files:

```shell
diff -u /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf.rpmnew
```

* **10-centreon.conf** (post upgrade): this file contains the custom configuration. It does not contain anthing new brought by the upgrade.
* **10-centreon.conf.rpmnew** (post upgrade): this file is provided by the rpm; it does not contain any custom configuration.

For each difference between the files, assess whether you should copy it from **10-centreon.conf.rpmnew** to **10-centreon.conf**.

Check that Apache is configured properly by running the following command:

```shell
/opt/rh/httpd24/root/usr/sbin/apachectl configtest
```

The expected result is the following:

```shell
Syntax OK
```

Restart the Apache and PHP processes to take in account the new configuration:

```shell
systemctl restart php-fpm httpd24-httpd
```

Then check its status:

```shell
systemctl status httpd24-httpd
```

If everything is ok, you must have:

```shell
● httpd24-httpd.service - The Apache HTTP Server
   Loaded: loaded (/usr/lib/systemd/system/httpd24-httpd.service; enabled; vendor preset: disabled)
   Active: active (running) since mar. 2020-05-12 15:39:58 CEST; 25min ago
  Process: 31762 ExecStop=/opt/rh/httpd24/root/usr/sbin/httpd-scl-wrapper $OPTIONS -k graceful-stop (code=exited, status=0/SUCCESS)
 Main PID: 31786 (httpd)
   Status: "Total requests: 850; Idle/Busy workers 50/50;Requests/sec: 0.547; Bytes served/sec: 5.1KB/sec"
   CGroup: /system.slice/httpd24-httpd.service
           ├─ 1219 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31786 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31788 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31789 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31790 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31802 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31865 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31866 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31882 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31903 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           └─32050 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Use the backup file you have created at the previous step to copy your customizations to file **/etc/apache2/sites-available/centreon.conf**.

Check that Apache is configured properly by running the following command:

```shell
apache2ctl configtest
```

The expected result is the following:

```shell
Syntax OK
```

Restart the Apache and PHP processes to take in account the new configuration:

```shell
systemctl restart php8.0-fpm apache2
```

Then check its status:

```shell
systemctl status apache2
```

If everything is ok, you must have:

```shell
● apache2.service - The Apache HTTP Server
    Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor pres>
     Active: active (running) since Tue 2022-08-09 05:01:36 UTC; 3h 56min ago
       Docs: https://httpd.apache.org/docs/2.4/
   Main PID: 518 (apache2)
      Tasks: 11 (limit: 2356)
     Memory: 18.1M
        CPU: 1.491s
     CGroup: /system.slice/apache2.service
             ├─ 518 /usr/sbin/apache2 -k start
             ├─1252 /usr/sbin/apache2 -k start
             ├─1254 /usr/sbin/apache2 -k start
             ├─1472 /usr/sbin/apache2 -k start
             ├─3857 /usr/sbin/apache2 -k start
             ├─3858 /usr/sbin/apache2 -k start
             ├─3859 /usr/sbin/apache2 -k start
             ├─3860 /usr/sbin/apache2 -k start
             ├─3876 /usr/sbin/apache2 -k start
             ├─6261 /usr/sbin/apache2 -k start
             └─6509 /usr/sbin/apache2 -k start
```

</TabItem>
</Tabs>

#### Customized Apache configuration: enable text compression

In order to improve page loading speed, you can activate text compression on the Apache server. It requires the **brotli** package to work. This is optional but it provides a better user experience.

Add the following code to your Apache configuration file, in both the `<VirtualHost *:80>` and `<VirtualHost *:443>` elements:

```shell
<IfModule mod_brotli.c>
    AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
```

### Finalizing the upgrade

Before starting the web upgrade process, reload the Apache server with the
following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
systemctl reload php-fpm httpd
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
systemctl reload php-fpm httpd24-httpd
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt autoremove
systemctl daemon-reload
systemctl stop php8.0-fpm.service
systemctl enable php8.1-fpm
systemctl start php8.1-fpm
systemctl restart apache2
```

</TabItem>
</Tabs>

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
[upgrade procedure](../service-mapping/upgrade.md).

### Post-upgrade actions

1. Upgrade extensions. From **Administration > Extensions > Manager**, upgrade all extensions, starting
with the following:

   - License Manager,
   - Plugin Packs Manager,
   - Auto Discovery.

   Then you can upgrade all other commercial extensions.

2. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md).

3. Restart the processes:

    ``` shell
    systemctl restart cbd centengine centreontrapd gorgoned
    ```

## Upgrade the Remote Servers

This procedure is the same as for upgrading a Centreon Central server.

> At the end of the update, configuration should be deployed from the Central server.

## Upgrade the Pollers

### Update the Centreon repository

Run the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y https://yum.centreon.com/standard/22.10/el8/stable/noarch/RPMS/centreon-release-22.10-1.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y https://yum.centreon.com/standard/22.10/el7/stable/noarch/RPMS/centreon-release-22.10-1.el7.centos.noarch.rpm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
sed -i -E 's|[0-9]{2}\.[0-9]{2}|22.10|g' /etc/apt/sources.list.d/centreon.list
apt update
```

</TabItem>
</Tabs>

### Upgrade the Centreon solution

Clean yum cache:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf clean all --enablerepo=*
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum clean all --enablerepo=*
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt clean all
apt update
```

</TabItem>
</Tabs>

Then upgrade all the components with the following command:

<Tabs groupId="sync">

<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
yum update centreon\*
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum update centreon\*
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt upgrade centreon-poller
```

</TabItem>
</Tabs>

> Accept new GPG keys from the repositories as needed.

Start and enable **gorgoned**:

```shell
systemctl start gorgoned
systemctl enable gorgoned
```

Restart **centengine**:

```shell
systemctl restart centengine
```
