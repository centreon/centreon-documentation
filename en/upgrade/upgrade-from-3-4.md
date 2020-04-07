---
id: upgrade-from-3-4
title: Upgrade from Centreon 3.4
---

This chapter describes how to upgrade your platform to version Centreon 20.04.

> Upon completing the upgrade procedure, Centreon EMS users will have to request a
> new license from *[Centreon support](https://centreon.force.com)*.

> This procedure only applies to Centreon platforms installed from Centreon 3.4
> packages on **Red Hat / CentOS version 7** distributions.
> 
> If this is not the case, refer to the procedure in
> `migration<upgradecentreon1904>`.

To upgrade your Centreon MAP server, TODO

To upgrade your Centreon MBI server, TODO

## Perform a backup

Be sure that you have fully backed up your environment for the following
servers:

- Central server
- Database server

## Upgrade the Centreon central server

### Update the operating system

Remember to update your operating system via the command:

```shell
yum update
```

> Accept all GPG keys and consider rebooting your server if a kernel update is
> proposed.

### Install Redhat Software Collections repository

To install Centreon you will need to set up the official software collections
repository supported by Redhat.

> *Software collections* are required in order to install PHP 7 and the associated
> libraries (Centreon requirement).

Run the following command: :

```shell
yum install -y centos-release-scl
```

### Update the Centreon repository

Run the following commands:

```shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
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

### Additional actions

#### Update the PHP version

Centreon 20.04 uses a new version of PHP.

The PHP timezone should be set. Run the command:

```shell
echo "date.timezone = Europe/Paris" > /etc/opt/rh/rh-php72/php.d/php-timezone.ini
```

> Change **Europe/Paris** to your timezone.

Then, run the following commands:

```shell
systemctl enable rh-php72-php-fpm
systemctl start rh-php72-php-fpm
```

#### Update the Apache web server

Centreon 20.04 uses a new version of Apache web server.

> If you made manual configuration, please report it into
> **/opt/rh/httpd24/root/etc/httpd/conf.d/**.

If SSL mode was enabled, execute command:

```shell
yum install httpd24-mod_ssl
```

Then, run the following commands:

```shell
systemctl disable httpd
systemctl stop httpd
systemctl enable httpd24-httpd
systemctl start httpd24-httpd
systemctl enable centreon
systemctl restart centreon
```

### Finalizing the upgrade

Log on to the Centreon web interface to continue the upgrade process:

Click on **Next**:

![image](assets/upgrade/web_update_1.png)

Click on **Next**:

![image](assets/upgrade/web_update_2.png)

The release notes describe the main changes. Click on **Next**:

![image](assets/upgrade/web_update_3.png)

This process performs the various upgrades. Click on **Next**:

![image](assets/upgrade/web_update_4.png)

Your Centreon server is now up to date. Click on **Finish** to access the login
page:

![image](assets/upgrade/web_update_5.png)

To upgrade your Centreon BAM module, TODO

### Post-upgrade actions

#### Start the tasks manager

Centreon 20.04 has changed his tasks manager from *Centcore* to *Gorgone*.

To act this change, run the following commands:

```shell
systemctl stop centcore
systemctl enable gorgoned
systemctl start gorgoned
```

> By default, the communication between Central and Pollers or Remote Servers
> will still be using SSH protocol.
>
> Go to the *TODO* procedure to change the communication protocol.

#### Restart monitoring processes

Centreon Broker component has changed his configuration file format.

It now uses JSON instead of XML.

To make sure Broker and Engine's Broker module are using new configuration files,
follow this steps:

1. Deploy Central's configuration from the Centreon web UI by following
*[this procedure](../monitoring/monitoring-servers/deploying-a-configuration.html)*,
2. Restart both Broker and Engine on the Central server by running this
command:

    ```shell
    systemctl restart cbd centengine
    ```

#### Configure Apache API access

If you use https, you can follow
*[this procedure](../administration/accessing-to-centreon-ui.html)*

If you have a custom apache configuration, you'll probably need to add API access section
to your configuration file : **/opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf**

```diff
+Alias /centreon/api /usr/share/centreon
Alias /centreon /usr/share/centreon/www/

+<LocationMatch ^/centreon/(?!api/latest/|api/beta/|api/v[0-9]+/|api/v[0-9]+\.[0-9]+/)(.*\.php(/.*)?)$>
+  ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/www/$1
+</LocationMatch>

+<LocationMatch ^/centreon/api/(latest/|beta/|v[0-9]+/|v[0-9]+\.[0-9]+/)(.*)$>
+  ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/api/index.php/$1
+</LocationMatch>

ProxyTimeout 300

<Directory "/usr/share/centreon/www">
    DirectoryIndex index.php
    Options Indexes
    AllowOverride all
    Order allow,deny
    Allow from all
    Require all granted
    <IfModule mod_php5.c>
        php_admin_value engine Off
    </IfModule>

+    RewriteRule ^index\.html$ - [L]
+    RewriteCond %{REQUEST_FILENAME} !-f
+    RewriteCond %{REQUEST_FILENAME} !-d
+    RewriteRule . /index.html [L]
+    ErrorDocument 404 /centreon/index.html

    AddType text/plain hbs
</Directory>

+<Directory "/usr/share/centreon/api">
+    Options Indexes
+    AllowOverride all
+    Order allow,deny
+    Allow from all
+    Require all granted
+    <IfModule mod_php5.c>
+        php_admin_value engine Off
+    </IfModule>
+
+    AddType text/plain hbs
+</Directory>

RedirectMatch ^/$ /centreon
```

Then, restart apache service :

```shell
systemctl restart httpd24-httpd
```

## Upgrade the Pollers

### Update the Centreon repository

Run the following command:

```shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

### Upgrade the Centreon solution

Upgrade all the components with the following command:

```shell
yum update centreon\*
```

> Accept new GPG keys from the repositories as needed.

### Post-upgrade actions

Due to new configuration file format for Engine's Broker module, the
configuration needs to be re-deployed.

Deploy Poller's configuration from the Centreon web UI by following
*[this procedure](../monitoring/monitoring-servers/deploying-a-configuration.html)*, and choose *Restart* method for Engine process.

## Upgrading the Centreon Poller Display

TODO
