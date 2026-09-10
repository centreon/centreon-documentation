---
id: using-packages
title: Using packages (central server)
description: "Install a Centreon central server using RPM or DEB packages"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DatabaseRepository from '../_database-repository.mdx';
import DatabaseLocalInstall from '../_database-local-install.mdx';
import DatabaseRemoteInstall from '../_database-remote-install.mdx';
import DatabaseEnableRestart from '../_database-enable-restart.mdx';
import DatabaseTlsConf from '../_database-tls-conf.mdx';
import InstallCommon from '../_install-common.mdx';
import TlsCertificates from '../_tls-certificates.mdx';
import InterfaceTlsConf from '../_interface-tls-conf.mdx';
import CentreonRepository from '../_centreon-repository.mdx';
import DependenciesRepository from '../_dependencies-repository.mdx';

You must run the installation procedure as a privileged user.

> When you run a command, check its output. If you get an error message, stop the procedure and fix the issue.

We recommend encrypting the communications of both the web server and the database, even though these steps are not required for Centreon to work. The procedure below sets up this encryption. In some cases (e.g. when running quick tests), you may want a non-secure setup: just skip [step 3: Set up the TLS configuration](#step-3-set-up-the-tls-configuration).

<InstallCommon />

### Install the repositories

#### Dependencies

<DependenciesRepository />

#### Database repository

<DatabaseRepository />

#### Centreon repository

<CentreonRepository />

## Step 2: Install the central server and the database

You can install the central server with a local database on the server or
a remote database on a dedicated server.

<Tabs groupId="sync">
  <TabItem value="With a local database" label="With a local database">
    <DatabaseLocalInstall />
  </TabItem>
  <TabItem value="With a remote database" label="With a remote database">
    <DatabaseRemoteInstall />
  </TabItem>
</Tabs>

## Step 3: Set up the TLS configuration

### Generate the certificates

<TlsCertificates />

### For the database

<DatabaseTlsConf />

### For the web interface

This section describes how to set up a TLS connection between the central server and its web interface.

<InterfaceTlsConf />

## Step 4: Configuration

### Change the server name (optional)

If you want to change the server's hostname, use the following command, replacing **new-server-name** with the name of your choice:

```shell
hostnamectl set-hostname new-server-name
```

Example:

```shell
hostnamectl set-hostname central
```

### Set the PHP time zone

You are required to set the PHP time zone.

> Replace **Europe/Paris** with your time zone. You can find the list of
> supported time zones [here](http://php.net/manual/en/timezones.php).

<Tabs groupId="os">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Run the following command as `root`:

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

After saving the file, restart the PHP-FPM service:

```shell
systemctl restart php-fpm
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

Run the following command as `root`:

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

After saving the file, restart the PHP-FPM service:

```shell
systemctl restart php-fpm
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
echo "date.timezone = Europe/Paris" >> /etc/php/8.4/mods-available/centreon.ini
```

> The PHP timezone was defined during the installation process by retrieving the timezone configured on the operating system.

After saving the file, restart the PHP8.4-FPM service:

```shell
systemctl restart php8.4-fpm
```

</TabItem>
</Tabs>

### Service startup during system bootup

To make services start automatically during system bootup, run these commands
on the central server:

<Tabs groupId="os">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
systemctl enable crond
systemctl start crond
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
systemctl enable --now crond
systemctl start crond
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
systemctl enable apache2 php8.4-fpm centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
systemctl enable --now cron
```

</TabItem>
</Tabs>

Then execute the following command (on the central server if you are using a local database, or on your remote database server):

<DatabaseEnableRestart />

## Step 5: Web installation

1. Start the Apache server with the
following command:

<Tabs groupId="os">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl start httpd
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
systemctl start httpd
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
systemctl start apache2
```

</TabItem>
</Tabs>

2. To complete the installation, follow the
[web installation](../web-and-post-installation.md#web-installation) procedure.
