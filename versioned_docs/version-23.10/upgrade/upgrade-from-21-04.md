---
id: upgrade-from-21-04
title: Upgrade from Centreon 21.04
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter describes how to upgrade your Centreon platform from version 21.04
to version 23.10.

> When you upgrade your central server, make sure you also upgrade all your remote servers and your pollers. All servers in your architecture must have the same version of Centreon. In addition, all servers must use the same [version of the BBDO protocol](../developer/developer-broker-bbdo.md#switching-versions-of-bbdo).

> If you want to migrate your Centreon server to Oracle Linux / RHEL 8
> you need to follow the [migration procedure](../migrate/migrate-from-el-to-el.md)

## Prerequisites

### Perform a backup

Be sure that you have fully backed up your environment for the following
servers:

- Central server
- Database server

### Update the RPM signing key

> For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021. When upgrading from an older version, you need to go through the [key rotation procedure](../security/key-rotation.md#existing-installation) to remove the old key and install the new one.

## Upgrade the Centreon Central server

> When you run a command, check its output. If you get an error message, stop the procedure and fix the issue.

### Install the new repositories

1. On your 21.04 platform, replace `https://packages.centreon.com/rpm-standard` or `https://yum.centreon.com/standard` by `https://archives.centreon.com/standard/` in your current YUM configuration (by default, `/etc/yum.repos.d/centreon.repo`).

2. Update your Centreon 21.04 to the latest minor version.

3. Remove the **centreon.repo** file:

   ```shell
   rm /etc/yum.repos.d/centreon.repo
   ```

4. Install the new repository:

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.10/el8/centreon-23.10.repo
```

> If you have an [offline license](../administration/licenses.md#types-of-licenses), also remove the old Monitoring Connectors repository, then install the new one.
>
> If you have a Business edition, do the same with the Business repository.
>
> You can find the address of these repositories on the [support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

### Upgrade PHP

Centreon 23.10 uses PHP in version 8.1.

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

First, you need to install the **remi** repository:

```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
sudo subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

Then, you need to change the PHP stream from version 7.3 to 8.1 by executing the following commands and answering **y**
to confirm:

```shell
dnf module reset php
```

```shell
dnf module install php:remi-8.1
```

</TabItem>
<TabItem value="Alma / Oracle Linux 8" label="Alma / Oracle Linux 8">

First, you need to install the **remi** repository:

```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
```

Then, you need to change the PHP stream from version 7.3 to 8.1 by executing the following commands and answering **y**
to confirm:

```shell
dnf module reset php
```

```shell
dnf module install php:remi-8.1
```

</TabItem>
</Tabs>

### Upgrade the Centreon solution

> Make sure all users are logged out from the Centreon web interface
> before starting the upgrade procedure.

If you have installed Business extensions, update the Business repository to version 23.10.
Visit the [support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories) to get its address.

Stop the Centreon Broker process:

```shell
systemctl stop cbd
```

Delete existing retention files:

```shell
rm /var/lib/centreon-broker/* -f
```

Clean the cache:

```shell
dnf clean all --enablerepo=*
```

Then upgrade all the components with the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update centreon\* php-pecl-gnupg
```

</TabItem>
</Tabs>

> Accept new GPG keys from the repositories as needed.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Execute the following commands:

```shell
systemctl enable php-fpm
systemctl restart php-fpm
```

</TabItem>
</Tabs>

### Update your customized Apache configuration

This section only applies if you customized your Apache configuration.

<Tabs groupId="sync">
<TabItem value="RHEL / Oracle Linux 8" label="RHEL / Oracle Linux 8">

When you upgrade your platform, the Apache configuration file is not upgraded automatically. The new configuration file brought by the rpm does not replace the old file. You must copy the changes manually to your customized configuration file.

Run a diff between the old and the new Apache configuration files:

```shell
diff -u /etc/httpd/conf.d/10-centreon.conf /etc/httpd/conf.d/10-centreon.conf.rpmnew
```

* **10-centreon.conf** (post upgrade): this file contains the custom configuration. It does not contain anything new brought by the upgrade.
* **10-centreon.conf.rpmnew** (post upgrade): this file is provided by the rpm; it does not contain any custom configuration.

For each difference between the files, assess whether you should copy it from **10-centreon.conf.rpmnew** to **10-centreon.conf**.

In particular, make sure your customized Apache configuration contains the following directive (with **authentication**).

```
<LocationMatch ^\${base_uri}/?(authentication|api/(latest|beta|v[0-9]+|v[0-9]+\.[0-9]+))/.*$>
    ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/api/index.php/$1"
</LocationMatch>
```

Check that Apache is configured properly by running the following command:

```shell
apachectl configtest
```

The expected result is the following:

```shell
Syntax OK
```

Restart the Apache and PHP processes to take the new configuration into account:

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
</Tabs>

#### Customized Apache configuration: enable text compression

In order to improve page loading speed, you can activate text compression on the Apache server. It requires the **brotli** package to work. This is optional, but it provides a better user experience.

Add the following code to your Apache configuration file, in both the `<VirtualHost *:80>` and `<VirtualHost *:443>` elements:

```shell
<IfModule mod_brotli.c>
    AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
```

### Finalizing the upgrade

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Before starting the web upgrade process, reload the Apache server with the
following command:

```shell
systemctl reload httpd
```

</TabItem>
</Tabs>

Then log on to the Centreon web interface to continue the upgrade process:

Click **Next**:

![image](../assets/upgrade/web_update_1.png)

Click **Next**:

![image](../assets/upgrade/web_update_2.png)

The release notes describe the main changes. Click **Next**:

![image](../assets/upgrade/web_update_3.png)

This process performs the various upgrades. Click **Next**:

![image](../assets/upgrade/web_update_4.png)

Your Centreon server is now up to date. Click **Finish** to access the login
page:

![image](../assets/upgrade/web_update_5.png)

> As the interface layout has changed in version 22.10, you need to clear your browser cache to display the new theme.

> Refer to the [Centreon BAM](../service-mapping/update.md), [Centreon MBI](../reporting/update.md)  and [Centreon MAP](../graph-views/map-web-upgrade.md) dedicated procedures to update these modules.

### Post-upgrade actions

1. Upgrade extensions. From **Administration > Extensions > Manager**, upgrade all extensions, starting
with the following:

   - License Manager,
   - Monitoring Connector Manager,
   - Auto Discovery.

   Then you can upgrade all other commercial extensions.

2. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md).

3. Restart the processes:
   
   ```shell
   systemctl restart cbd centengine centreontrapd gorgoned
   ```

## Upgrade the Remote Servers

This procedure is the same as for upgrading a Centreon Central server.

> At the end of the update, the configuration should be deployed from the Central server.

## Upgrade the Pollers

### Update the Centreon repository

Run the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.10/el8/centreon-23.10.repo
```

</TabItem>
</Tabs>

### Upgrade the Centreon solution

Clean the cache:

```shell
dnf clean all --enablerepo=*
```

Upgrade all the components with the following command:

```shell
dnf update centreon\*
```

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
