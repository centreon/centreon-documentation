---
id: secure-platform
title: Secure your platform
description: "Harden Centreon with SELinux, firewalls, HTTPS, and other measures"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter suggests how to best secure your Centreon platform.

## Strengthen user account security

After installing Centreon, you must change the default passwords of the following users:

- root
- centreon
- centreon-engine
- centreon-broker
- centreon-gorgone

To do this, use the following command with a privileged account (e.g., sudo) or with root (not recommended — you should
have a dedicated user):

```shell
passwd <account_name>
```

In addition, it is important to verify that the Apache account does not have connection rights to the terminal.
Execute the following command:

```shell
cat /etc/passwd | grep apache
```

You must have **/sbin/nologin** like:

```shell
apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin
```

> As a reminder, the list of users and groups can be found [here](../installation/technical.md#users-and-groups)

## Enable SELinux

Centreon developed SELinux rules in order to strengthen the control of
components by the operating system.

> To activate these rules, follow this procedure. If you detect a problem,
> you can disable SELinux globally and send us your feedback in
> order to improve our rules on our community platform [The Watch](https://thewatch.centreon.com/).

### SELinux Overview

Security Enhanced Linux (SELinux) provides an additional layer of system security in EL environments. SELinux fundamentally answers the
question: `May <subject> do <action> to <object>?`, for example: May a web server access files in users' home
directories?

The standard access policy based on the user, group, and other permissions, known as Discretionary Access Control
(DAC), does not enable system administrators to create comprehensive and fine-grained security policies, such as
restricting specific applications to only viewing log files, while allowing other applications to append new data to
the log files.

SELinux implements Mandatory Access Control (MAC). Every process and system resource has a special security label
called an SELinux context. An SELinux context, sometimes referred to as an SELinux label, is an identifier that
abstracts away the system-level details and focuses on the security properties of the entity. Not only does this provide
a consistent way of referencing objects in the SELinux policy, but it also removes any ambiguity that can be found in
other identification methods. For example, a file can have multiple valid path names on a system that makes use of bind
mounts.

The SELinux policy uses these contexts in a series of rules that define how processes can interact with each other and
the various system resources. By default, the policy does not allow any interaction unless a rule explicitly grants access.

For more information about SELinux, please see [Red Hat documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/using_selinux/getting-started-with-selinux_using-selinux)

### Activate SELinux

By default, SELinux is disabled during the Centreon installation process and must be reenabled after it for security reasons.

To enable SELinux again, edit the **/etc/selinux/config** file and change the value with the following options:
- ``SELINUX=enforcing`` to make SELinux security policy enforced.
- ``SELINUX=permissive`` to make SELinux print warnings instead of enforce security policy.

Then reboot your server:

```shell
shutdown -r now
```

### Install Centreon SELinux packages

Depending on the type of server, install the packages with the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

<Tabs groupId="sync">
<TabItem value="Central / Remote Server" label="Central / Remote Server">

   ```shell
   dnf install centreon-common-selinux \
   centreon-web-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Poller" label="Poller">

   ```shell
   dnf install centreon-common-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Map server" label="Map server">

   ```shell
   dnf install centreon-map-selinux
   ```

</TabItem>
<TabItem value="MBI server" label="MBI server">

   ```shell
   dnf install centreon-mbi-selinux
   ```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

<Tabs groupId="sync">
<TabItem value="Central / Remote Server" label="Central / Remote Server">

   ```shell
   dnf install centreon-common-selinux \
   centreon-web-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Poller" label="Poller">

   ```shell
   dnf install centreon-common-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Map server" label="Map server">

   ```shell
   dnf install centreon-map-selinux
   ```

</TabItem>
<TabItem value="MBI server" label="MBI server">

   ```shell
   dnf install centreon-mbi-selinux \
   centreon-gorgoned-selinux
   ```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

SELinux only concerns EL environments.

</TabItem>
</Tabs>


To check the installation, execute the following command:

```shell
semodule -l | grep centreon
```

Depending on your type of server, you can see:

```shell
centreon-broker	0.0.5
centreon-common	0.0.10
centreon-engine	0.0.8
centreon-gorgoned	0.0.3
centreon-plugins	0.0.2
centreon-web	0.0.8
```

### Audit logs and enable SELinux

Before enabling SELinux in **enforcing** mode, you need to be sure that no errors appear using the following command:

```shell
ausearch --start week-ago --message AVC,USER_AVC
```

If errors appear, you must analyze them and decide if these errors are regular and should be added to
the Centreon default SELinux rules. To do this, use the following command to transform errors into SELinux rules:

To analyze the logs:

```shell
ausearch --start week-ago --message AVC,USER_AVC | audit2why
ausearch --start week-ago --message AVC,USER_AVC | audit2allow --module <modulename>
```

To create and install the proposed rules:

```shell
ausearch --start week-ago --message AVC,USER_AVC | audit2allow -M <modulename>
semodule -i <modulename>.pp
```

If after a while, no error is present, you can activate SELinux in full mode by
following this [procedure](#activate-selinux) using **enforcing** mode.

> Do not hesitate to give us your feedback on [Github](https://github.com/centreon/centreon).

## Securing configuration files

Change the permissions for the following configuration files:

```shell
chown centreon:centreon /etc/centreon/conf.pm
chmod 660 /etc/centreon/conf.pm
```

and

```shell
chown apache:apache /etc/centreon/centreon.conf.php
chmod 660 /etc/centreon/centreon.conf.php
```

## Securing root access to the DBMS

[MariaDB](https://mariadb.com/kb/en/mysql_secure_installation/) proposes a default procedure to secure the DBMS
installation. It is mandatory to set a password for the **root** user of the database. If you haven't already done so, please execute the following command and follow the instructions:

<Tabs groupId="sync">
<TabItem value="MariaDB" label="MariaDB"> 

```shell
mariadb-secure-installation
```

</TabItem>
<TabItem value="MySQL" label="MySQL"> 

```shell
mysql_secure_installation
```

</TabItem>
</Tabs>

## Enable firewalld

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Install firewalld:

```shell
dnf install firewalld
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Install firewalld:

```shell
dnf install firewalld
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

Install firewalld:

```shell
apt install firewalld
```

</TabItem>
</Tabs>

Enable firewalld:

```shell
systemctl enable firewalld
systemctl start firewalld
```

Then add rules for firewalld:

> The list of network flows required for each type of server is defined
> [here](../installation/technical.md#tables-of-network-flows).

<Tabs groupId="sync">
<TabItem value="Central / Remote Server" label="Central / Remote Server">

Execute the following commands (change the port numbers if you have customized them):

```shell
# For default protocols
firewall-cmd --zone=public --add-service=ssh --permanent
firewall-cmd --zone=public --add-service=http --permanent
firewall-cmd --zone=public --add-service=https --permanent
firewall-cmd --zone=public --add-service=snmp --permanent
firewall-cmd --zone=public --add-service=snmptrap --permanent
# Centreon Gorgone
firewall-cmd --zone=public --add-port=5556/tcp --permanent
# Centreon Broker
firewall-cmd --zone=public --add-port=5669/tcp --permanent
```

</TabItem>
<TabItem value="Poller" label="Poller">

Execute the following commands:

```shell
# For default protocols
firewall-cmd --zone=public --add-service=ssh --permanent
firewall-cmd --zone=public --add-service=snmp --permanent
firewall-cmd --zone=public --add-service=snmptrap --permanent
# Centreon Gorgone
firewall-cmd --zone=public --add-port=5556/tcp --permanent
```

</TabItem>
</Tabs>

Once the rules have been added, reload firewalld:

```shell
firewall-cmd --reload
```

To check that the configuration has been applied correctly, use the following command to list all active rules:

```shell
firewall-cmd --list-all
```

For instance:

```shell
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: eth0
  sources:
  services: http snmp snmptrap ssh
  ports: 5556/tcp 5669/tcp
  protocols:
  forward: no
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
```

## Enable fail2ban

Fail2Ban is an intrusion prevention software framework that protects computer servers from brute-force attacks.

Install the inotify module:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install python3-inotify
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install python3-inotify
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt install python3-inotify
```

</TabItem>
</Tabs>

Install fail2ban:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
yum install epel-release
yum install fail2ban fail2ban-systemd
```

If you have SELinux installed, then update the SELinux policies:

```shell
yum update -y selinux-policy*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
yum install epel-release
yum install fail2ban fail2ban-systemd
```

If you have SELinux installed, then update the SELinux policies:

```shell
yum update -y selinux-policy*
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt install fail2ban
```

</TabItem>
</Tabs>

Enable fail2ban:

```shell
systemctl enable fail2ban
systemctl start fail2ban 
```

Copy the default rules file:

```shell
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Edit the file `/etc/fail2ban/jail.local` and search the **[centreon]** block, then modify like this:

```shell
[centreon]
port    = http,https
logpath = /var/log/centreon/login.log
backend  = pyinotify
```

To enable the **centreon** fail2ban rule, create the `/etc/fail2ban/jail.d/custom.conf` file and add the following lines:

```shell
[centreon]
enabled = true
findtime = 10m
bantime = 10m
maxretry = 3
```

> **maxretry** is the number of authentications failed before banning the IP address
>
> **bantime** is the duration of the ban
>
> **findtime** is the time range to find authentication failed

Then restart fail2ban to load your rule:

```shell
systemctl restart fail2ban
```

To check the status of the **centreon** rule you can run:

```shell
fail2ban-client status centreon
```

Here is an example of output:

```shell
Status for the jail: centreon
|- Filter
|  |- Currently failed:	1
|  |- Total failed:	17
|  `- File list:	/var/log/centreon/login.log
`- Actions
   |- Currently banned:	0
   |- Total banned:	2
   `- Banned IP list:
```

> For more information, go to the [official website](http://www.fail2ban.org).

## Custom URI

It is possible to customize the URI for your Centreon platform. For example, **/centreon** can be replaced by **/monitoring**.

> At least one path level is mandatory.

To customize the Centreon URI:

1. Edit the Apache configuration file for Centreon Web:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
vi /etc/httpd/conf.d/10-centreon.conf
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
vi /etc/httpd/conf.d/10-centreon.conf
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
vi /etc/apache2/sites-available/centreon.conf
```

</TabItem>
</Tabs>

2. Replace **/centreon** with your new path:

```apache
Define base_uri "/centreon"
```

3. Restart Apache:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
systemctl restart apache2
```

</TabItem>
</Tabs>

## Enabling http2

It is possible to enable the http2 protocol to improve Centreon's network performance.

To use http2, you need to follow these steps:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

1. [Configure https on Centreon](#secure-the-web-server-with-https)

2. Install the nghttp2 module:

```shell
dnf install nghttp2
```

3. Enable the http2 protocol in **/etc/httpd/conf.d/10-centreon.conf**:

```apacheconf
...
<VirtualHost *:443>
    Protocols h2 http/1.1
    ...
</VirtualHost>
...
```

4. Update the method used by the apache multi-process module in **/etc/httpd/conf.modules.d/00-mpm.conf**:

   Find the following line and comment it by adding the "#" character as below:

   ```shell
   #LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
   ```

   Find the following line and uncomment it by removing the "#" character as below:

   ```shell
   LoadModule mpm_event_module modules/mod_mpm_event.so
   ```

5. Restart the Apache process to take the new configuration into account:

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

1. [Configure https on Centreon](#secure-the-web-server-with-https)

2. Install the nghttp2 module:

```shell
dnf install nghttp2
```

3. Enable the http2 protocol in **/etc/httpd/conf.d/10-centreon.conf**:

```apacheconf
...
<VirtualHost *:443>
    Protocols h2 http/1.1
    ...
</VirtualHost>
...
```

4. Update the method used by the apache multi-process module in **/etc/httpd/conf.modules.d/00-mpm.conf**:

   Find the following line and comment it by adding the "#" character as below:

   ```shell
   #LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
   ```

   Find the following line and uncomment it by removing the "#" character as below:

   ```shell
   LoadModule mpm_event_module modules/mod_mpm_event.so
   ```

5. Restart the Apache process to take the new configuration into account:

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

1. [Configure HTTPS on your Centreon server](#secure-the-web-server-with-https).

2. Install the nghttp2 module:

```shell
apt install nghttp2
```

3. Enable the **http2** protocol in **/etc/apache2/sites-available/centreon.conf**:

```apacheconf
...
<VirtualHost *:443>
    Protocols h2 http/1.1
    ...
</VirtualHost>
...
```

4. Execute the following commands:

```shell
a2dismod php8.2
a2dismod mpm_prefork
a2enmod mpm_event
a2enmod http2
```

5. Restart the Apache process to take the new configuration into account:

```shell
systemctl restart apache2
```

</TabItem>
</Tabs>

## Activate mod_security

**mod_security** is a security module for Apache that acts as a web application firewall (WAF).

1. Install **mod_security** :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install mod_security
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install mod_security
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt install libapache2-mod-security2
```

</TabItem>
</Tabs>

2. Edit the following file and adjust the settings as you want:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
/etc/httpd/conf.d/mod_security.conf
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
/etc/httpd/conf.d/mod_security.conf
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
/etc/modsecurity/mod_security.conf
```

</TabItem>
</Tabs>

We recommend the following configuration:

```text
    SecResponseBodyAccess Off
    SecDebugLog /var/log/httpd/modsec_debug.log
    SecDebugLogLevel 0
    SecAuditEngine RelevantOnly
    SecAuditLogRelevantStatus "^(?:5|4(?!01|4))"
    SecAuditLogParts ABJDEFHZ
    SecAuditLogType Serial
    SecAuditLog /var/log/httpd/modsec_audit.log
    SecArgumentSeparator &
    SecCookieFormat 0
    SecTmpDir /var/lib/mod_security
    SecDataDir /var/lib/mod_security
```

3. Restart Apache :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
systemctl restart apache2
```

</TabItem>
</Tabs>

## Add your certificate to your browser

If you use a certificate that is not provided by a trusted authority, you must import the CA certificate into your browser.

## User authentication

Centreon offers several methods to authenticate users:

- [local](../connect/loginpwd.md) (MySQL)
- [LDAP](./parameters/ldap.md)
- [Generic SSO](../connect/sso.md) or [OpenId Connect](../connect/openid.md)

## Create user profiles

Centreon offers to manage access permissions to the different menus, resources and possible actions on resources via
the management of [Access Control List](./access-control-lists.md).

## Secure communications between servers

It is strongly recommended to secure communications between the different servers of the Centreon platform if some servers
are not in a secure network.

> The Table of network flows is available [here](../installation/technical.md#tables-of-network-flows).

### Centreon Broker communication

#### Centreon Broker and the firewall

In certain cases, you may not be able to initialize the Centreon Broker data flow from the poller (or the Remote Server)
to the Central Server or the Remote Server.
[See the following configuration to invert the flow](../monitoring/monitoring-servers/advanced-configuration.md#centreon-broker-and-the-firewall).

#### Centreon Broker flow authentication

If you need to authenticate pollers that are sending data to the monitoring system, you can use the Centreon Broker
authentication mechanism, which is based on X.509 certificates.
[See the following configuration to authenticate the peer](../monitoring/monitoring-servers/advanced-configuration.md#centreon-broker-flow-authentication).

#### Compress and encrypt Centreon Broker communication

It is also possible to compress and encrypt Centreon Broker communication.
Go to the **Configuration > Pollers > Broker configuration** menu, edit your Centreon Broker configuration
and enable for **IPv4** inputs and outputs:

- Enable TLS encryption: Auto
- Enable negotiation: Yes
- Compression (zlib): Auto

### Centreon Gorgone communication

By default, ZMQ communications are secured; both external communications (with the poller) and internal ones (between gorgone processes).

However, the gorgone HTTP API is unsecured by default. Only localhost can talk with gorgone, but the communication does not take place using SSL.

You can [configure SSL](https://github.com/centreon/centreon-collect/blob/develop/gorgone/docs/modules/core/httpserver.md) in the **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** file.

Then you must configure gorgone using the **Administration > Parameters > Gorgone** page.

The **/etc/centreon-gorgone/config.d/whitelist.conf.d/centreon.yaml** file (on your central server, your remote servers and your pollers) contains the whitelists for Gorgone. If you want to customize the allowed commands, do not edit this file. Create a new one in the same folder, e.g. **/etc/centreon-gorgone/config.d/whitelist.conf.d/custom.yaml**.

## Security Information and Event Management - SIEM

Centreon event logs are available in the following directories:

| Logs directory            | Central server | Remote Server | Poller | Centreon Map server | Centreon MBI Server |
|---------------------------|----------------|---------------|--------|---------------------|---------------------|
| /var/log/centreon         | X              | X             |        |                     |                     |
| /var/log/centreon-broker  | X              | X             | X      |                     |                     |
| /var/log/centreon-engine  | X              | X             | X      |                     |                     |
| /var/log/centreon-gorgone | X              | X             | X      |                     |                     |
| /var/log/centreon-bi      | X              | X             |        |                     |                     |
| /var/log/centreon-map     | X              | X             |        | X                   | X                   |

> In addition, all actions to modify the Centreon configuration carried out by users are available via the
[**Administration > Logs**](./logging-configuration-changes.md) menu.

## Backing up the platform

Centreon offers to save the configuration of the platform. To do this, go to the [**Administration > Parameters > Backup**](./backup.md) menu.

## Using antivirus software on your Centreon platform

This section applies if you are using antivirus/EDR software to scan a Centreon Infra Monitoring platform (central server, remote server, poller, MAP or MBI server). This includes Business modules.

Here is a list of services and directories that should be excluded from antivirus scanning.

### Services to be excluded

* centengine
* cbd
* centreontrapd
* gorgoned
* php-fpm
* httpd

If you are using one of these connectors, exclude the following services:

* vmware: centreon_vmware
* as400: centreon-as400

### Directories to be excluded

* /etc/centreon*
* /var/log/centreon*
* /var/lib/centreon*
* /var/cache/centreon*
* /usr/share/centreon*
* /var/spool/centreon*
* /var/lib/mysql
