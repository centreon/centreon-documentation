---
id: using-packages
title: Using packages
description: "Install a Centreon central server using RPM or DEB packages"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DatabaseRepository from '../_database-repository.mdx';
import DatabaseLocalInstall from '../_database-local-install.mdx';
import DatabaseRemoteInstall from '../_database-remote-install.mdx';
import DatabaseEnableRestart from '../_database-enable-restart.mdx';
import DatabaseTlsConf from '../_database-tls-conf.mdx';

You must run the installation procedure as a privileged user.

> When you run a command, check its output. If you get an error message, stop the procedure and fix the issue.

## Prerequisites

After installing your server, update your operating system using the following
command:

<Tabs groupId="os">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update
```

### Additional configuration

If you intend to use Centreon in French, Spanish, Portuguese or German, install the corresponding packages:

```shell
dnf install glibc-langpack-fr
dnf install glibc-langpack-es
dnf install glibc-langpack-pt
dnf install glibc-langpack-de
```

Use the following command to check which languages are installed on your system:

```shell
locale -a
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
dnf update
```

### Additional configuration

If you intend to use Centreon in French, Spanish, Portuguese or German, install the corresponding packages:

```shell
dnf install glibc-langpack-fr
dnf install glibc-langpack-es
dnf install glibc-langpack-pt
dnf install glibc-langpack-de
```

Use the following command to check which languages are installed on your system:

```shell
locale -a
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt update && apt upgrade
```

</TabItem>
</Tabs>

> Accept all GPG keys and reboot your server if a kernel update is proposed.

## Step 1: Pre-installation

### Disable SELinux

<Tabs groupId="os">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

During installation, SELinux should be disabled. To do this, edit the file **/etc/selinux/config** and replace
**enforcing** with **disabled**. You can also run the following command:

```shell
sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config
```

Reboot your operating system to apply the change.

```shell
reboot
```

After system startup, perform a quick check of the SELinux status:

```shell
getenforce
```

You should have this result:

```shell
Disabled
```

> **Note that this deactivation should be temporary.** SELinux should be [reenabled after installation](../../administration/secure-platform.md#activate-selinux) for security reasons.

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

During installation, SELinux should be disabled. To do this, edit the file **/etc/selinux/config** and replace
**enforcing** with **disabled**. You can also run the following command:

```shell
sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config
```

Reboot your operating system to apply the change.

```shell
reboot
```

After system startup, perform a quick check of the SELinux status:

```shell
getenforce
```

You should have this result:

```shell
Disabled
```

> **Note that this deactivation should be temporary.** SELinux should be [reenabled after installation](../../administration/secure-platform.md#activate-selinux) for security reasons.

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

SELinux is not installed on Debian 13, continue.

</TabItem>
</Tabs>

### Configure or disable the firewall

If your firewall is active, add [firewall rules](../../administration/secure-platform.md#enable-firewalld).
You can also disable the firewall during installation by running the following commands:

```shell
systemctl stop firewalld
systemctl disable firewalld
```

### Install the repositories

#### Dependencies

<Tabs groupId="os">
<TabItem value="Alma 9" label="Alma 9">

```shell
dnf install dnf-plugins-core
dnf install epel-release
dnf config-manager --set-enabled crb
```

Install and enable PHP 8.4 using the following commands:

```shell
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-9.rpm
dnf module switch-to php:remi-8.4/common -y
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

```shell
dnf install -y dnf-plugins-core
dnf install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-9-x86_64-rpms
```

If your server is a Cloud RHEL instance, you will have to execute the following command:

```shell
dnf config-manager --set-enabled codeready-builder-for-rhel-9-rhui-rpms
```

Install and enable PHP 8.4 using the following commands:

```shell
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-9.rpm
dnf module switch-to php:remi-8.4/common -y
```

</TabItem>
<TabItem value="Oracle Linux 9" label="Oracle Linux 9">

```shell
dnf install dnf-plugins-core
dnf install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
dnf config-manager --set-enabled ol9_codeready_builder
```

Install and enable PHP 8.4 using the following commands:

```shell
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-9.rpm
dnf module switch-to php:remi-8.4/common -y
```

</TabItem>
<TabItem value="Alma Linux 10" label="Alma Linux 10">

```shell
dnf install dnf-plugins-core -y
dnf install epel-release -y
dnf config-manager --set-enabled crb
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-10.noarch.rpm
```

Install and enable PHP 8.4 using the following commands:

```shell
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-9.rpm
dnf module switch-to php:remi-8.4/common -y
```

</TabItem>
<TabItem value="RHEL Linux 10" label="RHEL Linux 10">

```shell
dnf install dnf-plugins-core -y
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-10.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-10-x86_64-rpms
```

If your server is a Cloud RHEL instance, you will have to execute the following command:

```shell
dnf config-manager --set-enabled codeready-builder-for-rhel-9-rhui-rpms
```

Install and enable PHP 8.4 using the following commands:

```shell
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-9.rpm
dnf module switch-to php:remi-8.4/common -y
```

</TabItem>
<TabItem value="Oracle Linux 10" label="Oracle Linux 10">

```shell
dnf install dnf-plugins-core -y
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-10.noarch.rpm
dnf config-manager --set-enabled ol10_codeready_builder
```

Install and enable PHP 8.4 using the following commands:

```shell
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-9.rpm
dnf module switch-to php:remi-8.4/common -y
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt update && apt install -y lsb-release ca-certificates apt-transport-https wget gnupg2 curl sudo
```

</TabItem>
</Tabs>

#### Database repository

<DatabaseRepository />

#### Centreon repository

To install Centreon software, you should first install the Centreon repository.

Install the Centreon repository using this command:

<Tabs groupId="os">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/26.10/el9/centreon-26.10.repo
dnf clean all --enablerepo=*
dnf update
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/26.10/el10/centreon.repo
dnf clean all --enablerepo=*
dnf update -y
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

To install the Centreon repositories, execute the following command:

```shell
echo "deb https://packages.centreon.com/apt-standard/ $(lsb_release -sc)-26.10-stable main" | tee -a /etc/apt/sources.list.d/centreon-26.10-stable.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```

Then import the repository key:

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
apt update
```

</TabItem>
</Tabs>

## Step 2: Generate the certificates

Generate the certificates the platform will need to connect to the web interface and to the database.

1. On the central server, install **openssl**.

   <Tabs groupId="os">
   <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

   ```shell
   dnf install openssl -y
   ```

   </TabItem>
   <TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

   ```shell
   dnf install openssl -y
   ```

   </TabItem>
   <TabItem value="Debian 13" label="Debian 13">

   ```shell
   apt install -y openssl
   ```

   </TabItem>
   </Tabs>

2. Download the **entrypoint.sh** script.

3. Run the script to generate a root CA and a certificate for this host. Replace \<HOSTNAME\> by the IP address of your machine:

   ```shell
   mkdir -p /etc/pki/centreon-tls
   OUT=/etc/pki/centreon-tls \
   entrypoint.sh <HOSTNAME> localhost 127.0.0.1
   cd /
   ```

   The command outputs the following files in **/etc/pki/centreon-tls/**:

      * rootCA.pem            (public)
      * server.pem            (server certificate)
      * server-key.pem        (server private key)
      * CA/rootCA.\{key,pem\}   (set the following permissions root:root, mode 0400)

4. Install the root CA into the OS trust store:

   <Tabs groupId="os">
   <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

   ```shell
   cp /etc/pki/centreon-tls/rootCA.pem /etc/pki/ca-trust/source/anchors/centreon-dev.crt
   update-ca-trust extract
   ```

   </TabItem>
   <TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

   ```shell
   cp /etc/pki/centreon-tls/rootCA.pem /etc/pki/ca-trust/source/anchors/centreon-dev.crt
   update-ca-trust extract
   ```

   </TabItem>
   <TabItem value="Debian 13" label="Debian 13">

   ```shell
   cp /etc/pki/centreon-tls/rootCA.pem /usr/local/share/ca-certificates/centreon-dev.crt
   ```

   </TabItem>
   </Tabs>

5. If you are using a remote database, also execute this procedure on the machine that will host the remote database, then copy the root CA certificate of the database machine to the central server's trust store.

## Step 3: Install the central server and the database

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

## Step 4: Set up the TLS configuration

### For the database

<DatabaseTlsConf />

### For the web interface

<Tabs groupId="os">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

1. Configure Apache TLS:

```shell
dnf install -y mod_ssl
echo 'Listen 443 https' > /etc/httpd/conf.d/ssl.conf
```

2. Enter the correct certificate paths in Centreon's Apache HTTPS configuration:

```shell
sed -e 's|/etc/pki/tls/certs/ca.crt|/etc/pki/centreon-tls/server.pem|g' \
    -e 's|/etc/pki/tls/private/ca.key|/etc/pki/centreon-tls/server-key.pem|g' \
    /usr/share/centreon/examples/centreon-apache-https.conf \
    > /etc/httpd/conf.d/00-centreon-tls.conf
```

3. Enable and restart Centreon services:

```shell
systemctl daemon-reload
```

<Tabs groupId="db">

<TabItem value="MariaDB" label="MariaDB">

```shell
systemctl restart mariadb
```

</TabItem>
<TabItem value="MySQL" label="MySQL">

```shell
systemctl restart mysqld
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

1. Configure Apache TLS:

```shell
dnf install -y mod_ssl
echo 'Listen 443 https' > /etc/httpd/conf.d/ssl.conf
```

2. Enter the correct certificate paths in Centreon's Apache HTTPS configuration:

```shell
sed -e 's|/etc/pki/tls/certs/ca.crt|/etc/pki/centreon-tls/server.pem|g' \
    -e 's|/etc/pki/tls/private/ca.key|/etc/pki/centreon-tls/server-key.pem|g' \
    /usr/share/centreon/examples/centreon-apache-https.conf \
    > /etc/httpd/conf.d/00-centreon-tls.conf
```

3. Enable and restart Centreon services:

```shell
systemctl daemon-reload
```

<Tabs groupId="db">

<TabItem value="MariaDB" label="MariaDB">

```shell
systemctl restart mariadb
```

</TabItem>
<TabItem value="MySQL" label="MySQL">

```shell
systemctl restart mysqld
```

</TabItem>
</Tabs>


</TabItem>
<TabItem value="Debian 13" label="Debian 13">

Enable every module the official Centreon HTTPS references:

```shell
a2enmod ssl proxy proxy_fcgi headers deflate rewrite
```

Enter the correct certificate paths in Centreon's Apache HTTPS configuration:

```shell
sed -e 's|/etc/pki/tls/certs/ca.crt|/etc/pki/centreon-tls/server.pem|g' \
    -e 's|/etc/pki/tls/private/ca.key|/etc/pki/centreon-tls/server-key.pem|g' \
    /usr/share/centreon/examples/centreon-apache-https.conf \
    > /etc/apache2/sites-available/00-centreon-tls.conf
```

Enable the configuration you just applied.

```shell
a2ensite 00-centreon-tls
```

</TabItem>
</Tabs>

## Step 5: Configuration

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

### Secure the database

It is mandatory to secure the database's root access before installing Centreon.
If you are using a local database, run the following command on the central server:

<Tabs groupId="db">
<TabItem value="MariaDB" label="MariaDB"> 

```shell
mariadb-secure-installation
```

</TabItem>
<TabItem value="MySQL" label="MySQL"> 

Retrieve the temporary password created by MySQL:

```shell
grep 'temporary password' /var/log/mysqld.log
```

Then change it when prompted by the following command:

```shell
mysql_secure_installation
```

</TabItem>
</Tabs>

* Answer **yes** to all the questions except "Disallow root login remotely?".
* It is mandatory to set a password for the **root** user of the database. You will need this password during the [web installation](../web-and-post-installation.md).

> For more information, please see the [official MariaDB documentation](https://mariadb.com/kb/en/mysql_secure_installation/).

## Step 6: Web installation

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
