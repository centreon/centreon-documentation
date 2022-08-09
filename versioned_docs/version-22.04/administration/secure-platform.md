---
id: secure-platform
title: Secure your platform
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter suggests how to best secure your Centreon platform.

## Strengthen user account security

After installing Centreon, it is necessary to change the default passwords of the following users:

- root
- centreon
- centreon-engine
- centreon-broker
- centreon-gorgone

To do this, use the following command with a privileged account (eg. sudo) or with root (not recommended — you should
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

> As a reminder, the list of users and groups can be found [here](../installation/prerequisites.md#users-and-groups)

## Enable SELinux

Centreon recently developed SELinux rules in order to strengthen the control of
components by the operating system.

> These rules are currently in **beta mode** and can be activated.
> You can activate them by following this procedure. In you detect of a problem,
> it is possible to disable SELinux globally and to send us your feedback in
> order to improve our rules on [Github](https://github.com/centreon/centreon).

### SELinux Overview

Security Enhanced Linux (SELinux) provides an additional layer of system security. SELinux fundamentally answers the
question: `May <subject> do <action> to <object>?`, for example: May a web server access files in users' home
directories?

The standard access policy based on the user, group, and other permissions, known as Discretionary Access Control
(DAC), does not enable system administrators to create comprehensive and fine-grained security policies, such as
restricting specific applications to only viewing log files, while allowing other applications to append new data to
the log files.

SELinux implements Mandatory Access Control (MAC). Every process and system resource has a special security label
called an SELinux context. A SELinux context, sometimes referred to as an SELinux label, is an identifier which
abstracts away the system-level details and focuses on the security properties of the entity. Not only does this provides
a consistent way of referencing objects in the SELinux policy, but it also removes any ambiguity that can be found in
other identification methods. For example, a file can have multiple valid path names on a system that makes use of bind
mounts.

The SELinux policy uses these contexts in a series of rules which define how processes can interact with each other and
the various system resources. By default, the policy does not allow any interaction unless a rule explicitly grants access.

For more information about SELinux please see [Red Hat documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/using_selinux/getting-started-with-selinux_using-selinux)

### Activate SELinux in permissive mode

By default, SELinux is disabled during Centreon installation process. To enable SELinux in permissive mode, you need to
modify the `/etc/selinux/config` file as:

```shell
# This file controls the state of SELinux on the system.
# SELINUX= can take one of these three values:
#     enforcing - SELinux security policy is enforced.
#     permissive - SELinux prints warnings instead of enforcing.
#     disabled - No SELinux policy is loaded.
SELINUX=permissive
# SELINUXTYPE= can take one of three two values:
#     targeted - Targeted processes are protected,
#     minimum - Modification of targeted policy. Only selected processes are protected.
#     mls - Multi Level Security protection.
SELINUXTYPE=targeted
```

Then reboot your server:

```shell
shutdown -r now
```

### Install Centreon SELinux packages

Depending on the type of server, install the packages with the following command:

<Tabs groupId="sync">
<TabItem value="Central / Remote Server" label="Central / Remote Server">

   ```shell
   yum install centreon-common-selinux \
   centreon-web-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Poller" label="Poller">

   ```shell
   yum install centreon-common-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Map server" label="Map server">

   ```shell
   yum install centreon-map-selinux
   ```

</TabItem>
<TabItem value="MBI server" label="MBI server">

   ```shell
   yum install centreon-mbi-selinux
   ```

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
cat /var/log/audit/audit.log | grep -i denied
```

If errors appear, you have to analyse them and to decide if these errors are regular and must be added in addition of
the Centreon default SELinux rules. To do this, use the following command to tranform error in SELinux rules:

```shell
audit2allow -a
```

Then execute the proposed rules.

If after a while, no error is present, you can activate SELinux in full mode by
following this [procedure](#activate-selinux-in-permissive-mode) using **enforcing** mode.

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
installation. It is mandatory to set a password for the **root** user of the database. If you haven't already done so, please execute the following command and follow instructions:

```shell
mysql_secure_installation
```

## Enable firewalld

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / Centos 7" label="Alma / RHEL / Oracle Linux 8 / Centos 7">

Install firewalld:

```shell
yum install firewalld
```

</TabItem>

<TabItem value="Debian 11" label="Debian 11">

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
> [here](../installation/architectures.md#tables-of-platform-flows).

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
<TabItem value="Centos 7" label="Centos 7">

```shell
yum install python-inotify
```

</TabItem>

<TabItem value="Debian 11" label="Debian 11">

```shell
apt install python3-inotify
```

</TabItem>
</Tabs>

Install fail2ban:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / Centos 7" label="Alma / RHEL / Oracle Linux 8 / Centos 7">

```shell
yum install epel-release
yum install fail2ban fail2ban-systemd
```

If you have SELinux installed, then update the SELinux policies:

```shell
yum update -y selinux-policy*
```

</TabItem>

<TabItem value="Debian 11" label="Debian 11">

```shell
apt install epel-release
apt install fail2ban fail2ban-systemd
```

If you have SELinux installed, then update the SELinux policies:

```shell
apt update -y selinux-policy*
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

Edit `/etc/fail2ban/jail.local` file and search **[centreon]** block, then modify such as:

```shell
[centreon]
port    = http,https
logpath = /var/log/centreon/login.log
backend  = pyinotify
```

To enable the **centreon** fail2ban rule, create the `/etc/fail2ban/jail.d/custom.conf` file and add following lines:

```shell
[centreon]
enabled = true
findtime = 10m
bantime = 10m
maxretry = 3
```

> **maxretry** is the number of authentication failed before to ban the IP address
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

> For more information go to the [official website](http://www.fail2ban.org).

## Secure the web server with HTTPS

By default, Centreon installs a web server in HTTP mode. It is strongly recommended to switch to HTTPS mode by adding your certificate. It is also recommended to use a certificate validated by an authority rather than a self-signed one. 

- If you already have a certificate validated by an authority, you can go directly to this [step](#activating-https-mode-on-your-web-server) to activate HTTPS mode on your Apache server.

- If you do not have a certificate validated by an authority, you can generate one on platforms such as [Let's Encrypt](https://letsencrypt.org/).

- If you need to create a certificate with the self-signed method, follow this [step](#creating-a-self-signed-certificate) before activating HTTPS mode on your server.

### Creating a self-signed certificate

>  This procedure allows you to create:
- A private key for the server: **centreon7.key** in our case. It will be used by the Apache service.
- A CSR (Certificate Signing Request) file: **centreon7.csr** in our case.
- A private key for the certificate of the certification authority: **ca_demo.key** in our case.
- A x509 certificate to sign your certificate for the server: **ca-demo.crt** in our case.
- A certificate for the server: **centreon7.crt** in our case.

1. Install the SSL module for Apache:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install mod_ssl mod_security openssl
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install httpd24-mod_ssl httpd24-mod_security openssl
```

</TabItem>

<TabItem value="Debian 11" label="Debian 11">

```shell
apt install mod_ssl mod_security openssl
```

</TabItem>
</Tabs>

Let's assume that you have a Centreon server with a **centreon7.localdomain** FQDN address.

2. Prepare the OpenSSL configuration:

Due to a policy change at Google, self-signed certificates may be rejected by the Google Chrome browser (it is not even possible to add an exception). To continue using this browser, you have to change the OpenSSL configuration.

Open the file **/etc/pki/tls/openssl.cnf**. The goal here is to edit this file in order to inform the various IPs and FQDNs for the server.

Find the ```[v3_ca]``` section in order to add a new ```alt_names``` tag:

```text
# Add the alt_names tag that allows you to inform our various IPs and FQDNs for the server
[ alt_names ]
IP.1 = xxx.xxx.xxx.xxx
DNS.1 = centreon7.localdomain
# If you have several IP (HA: vip + ip)
# IP.2 = xxx.xxx.xxx.xxx
[ v3_ca ]
subjectAltName = @alt_names
```

Here is an example of how the file should look like:
```text
[ alt_names ]
IP.1 = 10.25.11.73
DNS.1 = centreon7.localdomain

[ v3_ca ]
subjectAltName = @alt_names
```

3. Create a private key for the server:

Let's create a private key named **centreon7.key** without a password so that it can be used by the Apache service.
```text
openssl genrsa -out centreon7.key 2048
```

Protect your file by limiting rights:
```text
chmod 400 centreon7.key
```

4. Create a Certificate Signing Request file:

From the key you created, create a CSR (Certificate Signing Request) file: **centreon7.csr** in our case. Fill in the fields according to your company. The **Common Name** field must be identical to the hostname of your Apache server (in our case it is **centreon7.localdomain**).
```text
openssl req -new -key centreon7.key -out centreon7.csr
```

5. Create a private key for the certificate of certification authority:

Create a private key for this authority: **ca_demo.key** in our case. We add the **-aes256** option to encrypt the output key and include a password. This password will be requested each time this key is used.
```text
openssl genrsa -aes256 2048 > ca_demo.key
```

6. Create a x509 certificate from the private key of the certificate of certification authority:

Create a x509 certificate that will be valid for one year: **ca_demo.crt** in our case.

>  Note that it is necessary to simulate a trusted third party, so the **Common Name** field must be different from the server certificate.
```text
openssl req -new -x509 -days 365 -key ca_demo.key -out ca_demo.crt
```

The certificate being created, you will be able to use it to sign your server certificate.

7. Create a certificate for the server:

Create your certificate for the server by using the x509 certificate (**ca_demo.crt**) to sign it.
```text
openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/pki/tls/openssl.cnf -extensions v3_ca
```

The password created on step **Create a private key for the certificate of certification authority**  must be entered. You get your server certificate named **centreon7.crt**.

You can view the contents of the file: 
```text
less centreon7.crt
```

8. Then you have to retrieve the x509 certificate file (**ca_demo.crt**) and import it into your browser's certificate manager.

Now you have your self-signed certificate, you can perform the following procedure to activate HTTPS mode on your Apache server.

### Activating HTTPS mode on your web server

1. Install SSL module for Apache:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install mod_ssl mod_security openssl
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install httpd24-mod_ssl httpd24-mod_security openssl
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt install mod_ssl mod_security openssl
```


</TabItem>
</Tabs>

2. Install your certificates:

Install your certificates (**centreon7.key** and **centreon7.crt**) by copying them to the Apache configuration:

```text
cp centreon7.key /etc/pki/tls/private/
cp centreon7.crt /etc/pki/tls/certs/
```

3. Backup the previous Apache configuration for Centreon:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
cp /etc/httpd/conf.d/10-centreon.conf{,.origin}
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
cp /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf{,.origin}
```

</TabItem>

<TabItem value="Debian 11" label="Debian 11">

```shell
cp /etc/apache2/sites-available/centreon.conf{,.origin}
```

</TabItem>
</Tabs>

4. Edit the Centreon Apache configuration:

> Centreon offers an example of configuration file to enable HTTPS available in the following directory:
> **/usr/share/centreon/examples/centreon.apache.https.conf**

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Edit the **/etc/httpd/conf.d/10-centreon.conf** file by adding the **<VirtualHost *:443>** section.

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

Edit the **/opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf** file by adding the **<VirtualHost *:443>** section.
</TabItem>

<TabItem value="Debian 11" label="Debian 11">

Edit the **/etc/apache2/sites-available/centreon.conf** file by adding the **<VirtualHost *:443>** section.
</TabItem>
</Tabs>

```apacheconf
Define base_uri "/centreon"
Define install_dir "/usr/share/centreon"

ServerTokens Prod

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
</VirtualHost>
```

This is how the file should look like:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">
</TabItem>

<TabItem value="Debian 11" label="Debian 11">
</TabItem>
</Tabs>

```apacheconf
Define base_uri "/centreon"
Define install_dir "/usr/share/centreon"

ServerTokens Prod

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
</VirtualHost>

<VirtualHost *:443>
    #####################
    # SSL configuration #
    #####################
    SSLEngine On
    SSLProtocol All -SSLv3 -SSLv2 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-DSS-AES256-GCM-SHA384:DHE-DSS-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-GCM-SHA256:!aNULL:!eNULL:!LOW:!3DES:!MD5:!EXP:!PSK:!DSS:!RC4:!SEED:!ADH:!IDEA
    SSLHonorCipherOrder On
    SSLCompression Off
    SSLCertificateFile /etc/pki/tls/certs/centreon7.crt
    SSLCertificateKeyFile /etc/pki/tls/private/centreon7.key

    Alias ${base_uri}/api ${install_dir}
    Alias ${base_uri} ${install_dir}/www/

    <LocationMatch ^\${base_uri}/?(?!api/latest/|api/beta/|api/v[0-9]+/|api/v[0-9]+\.[0-9]+/)(.*\.php(/.*)?)$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/www/$1"
    </LocationMatch>

    <LocationMatch ^\${base_uri}/?(authentication|api/(latest|beta|v[0-9]+|v[0-9]+\.[0-9]+))/.*$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/api/index.php/$1"
    </LocationMatch>

    ProxyTimeout 300
    ErrorDocument 404 ${base_uri}/index.html
    Options -Indexes +FollowSymLinks

    <IfModule mod_security2.c>
        # https://github.com/SpiderLabs/ModSecurity/issues/652
        SecRuleRemoveById 200003
    </IfModule>

    <Directory "${install_dir}/www">
        DirectoryIndex index.php
        AllowOverride none
        Require all granted
        FallbackResource ${base_uri}/index.html
    </Directory>

    <Directory "${install_dir}/api">
        AllowOverride none
        Require all granted
    </Directory>

    <If "'${base_uri}' != '/'">
        RedirectMatch ^/$ ${base_uri}
    </If>
</VirtualHost>
```

> Do not forget to change the **SSLCertificateFile** and **SSLCertificateKeyFile** directives with the path containing your
> certificate and key. In our case: **SSLCertificateFile /etc/pki/tls/certs/centreon7.crt** and **SSLCertificateKeyFile /etc/pki/tls/private/centreon7.key**.

5. Enable HttpOnly / Secure flags and hide the Apache server signature:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Edit the **/etc/httpd/conf.d/10-centreon.conf** file and add the following line:

```apacheconf
Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure;SameSite=Strict
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
ServerSignature Off
ServerTokens Prod
```

Edit the **/etc/php.d/50-centreon.ini** file and turn off the `expose_php` parameter:

```phpconf
expose_php = Off
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

Edit the **/opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf** file and add the following line:

```apacheconf
Header set X-Frame-Options: "sameorigin"
Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure;SameSite=Strict
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
ServerSignature Off
ServerTokens Prod
TraceEnable Off
```

Edit the **/etc/php.d/50-centreon.ini** file and turn off the **expose_php** parameter:

```phpconf
expose_php = Off
```

</TabItem>

<TabItem value="Debian 11" label="Debian 11">

Edit the **/etc/apache2/sites-available/centreon.conf** file and add the following line:

```apacheconf
Header set X-Frame-Options: "sameorigin"
Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure;SameSite=Strict
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
ServerSignature Off
ServerTokens Prod
TraceEnable Off
```

Edit the **/etc/php.d/50-centreon.ini** file and turn off the **expose_php** parameter:

```phpconf
expose_php = Off
```

</TabItem>
</Tabs>

6. Hide the default **/icons** directory:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Edit the **/etc/httpd/conf.d/autoindex.conf** file and comment the following line:

```apacheconf
#Alias /icons/ "/usr/share/httpd/icons/"
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

Edit the **/opt/rh/httpd24/root/etc/httpd/conf.d/autoindex.conf** file and comment the following line:

```apacheconf
#Alias 
/icons/ "/opt/rh/httpd24/root/usr/share/httpd/icons/"
```

</TabItem>

<TabItem value="Debian 11" label="Debian 11">

Edit the **/etc/apache2/sites-available/autoindex.conf** file and comment the following line:

```apacheconf
#Alias 
/icons/ "/etc/apache2/sites-available/icons/"
```

</TabItem>
</Tabs>

7. Restart the Apache and PHP processes to take in account the new configuration:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

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

```shell
systemctl restart php-fpm apache2
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

Now you can access your platform with your browser in HTTPS mode.

> Once your web server is set to HTTPS mode, if you have a MAP server on your platform, you have to set it to HTTPS mode too, otherwise
> recent web browsers may block communication between the two servers. The procedure is detailed [here](../graph-views/secure-your-map-platform.md#Configure-HTTPS/TLS-on-the-MAP-server).

## Custom URI

It is possible to update the URI of Centreon. For example, **/centreon** can be replaced by **/monitoring**.

> At least one path level is mandatory.

To update the Centreon URI, you need to follow those steps:

1. Go to **Administration > Parameters > Centreon UI** and change the **Centreon Web Directory** value.

![image](../assets/administration/custom-uri.png)

2. Edit Apache configuration file for Centreon Web...

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
vim /etc/httpd/conf.d/10-centreon.conf
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
vim /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf
```

</TabItem>

<TabItem value="Debian 11" label="Debian 11">

```shell
vim /etc/apache2/sites-available/centreon.conf
```

</TabItem>
</Tabs>

...and change **/centreon** path with your new path

## Enabling http2

It is possible to enable http2 protocol to improve Centreon network performance.

To use http2, you need to follow those steps:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

1. [Configure https on Centreon](#secure-the-web-server-with-https)

2. Install nghttp2 module:

```shell
dnf install nghttp2
```

3. Enable http2 protocol in **/etc/httpd/conf.d/10-centreon.conf**:

```apacheconf
...
<VirtualHost *:443>
    Protocols h2 h2c http/1.1
    ...
</VirtualHost>
...
```

4. Update method used by apache multi-processus module in **/etc/httpd/conf.modules.d/00-mpm.conf**:

```diff
-LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
+#LoadModule mpm_prefork_module modules/mod_mpm_prefork.so

-#LoadModule mpm_event_module modules/mod_mpm_event.so
+LoadModule mpm_event_module modules/mod_mpm_event.so
```

5. Restart the Apache process to take in account the new configuration:

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

1. [Configure https on Centreon](#secure-the-web-server-with-https)

2. Install nghttp2 module:

```shell
yum install httpd24-nghttp2
```

3. Enable http2 protocol in **/opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf**:

```apacheconf
...
<VirtualHost *:443>
    Protocols h2 h2c http/1.1
    ...
</VirtualHost>
...
```

4. Update method used by Apache multi-processus module in **/opt/rh/httpd24/root/etc/httpd/conf.modules.d/00-mpm.conf**:

```diff
-LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
+#LoadModule mpm_prefork_module modules/mod_mpm_prefork.so

-#LoadModule mpm_event_module modules/mod_mpm_event.so
+LoadModule mpm_event_module modules/mod_mpm_event.so
```

5. Restart the Apache process to take in account the new configuration:

```shell
systemctl restart httpd24-httpd
```

</TabItem>

<TabItem value="Debian 11" label="Debian 11">

1. [Configure https on Centreon](#secure-the-web-server-with-https)

2. Install nghttp2 module:

```shell
apt install nghttp2
```

3. Enable http2 protocol in **/etc/apache2/sites-available/centreon.conf**:

```apacheconf
...
<VirtualHost *:443>
    Protocols h2 h2c http/1.1
    ...
</VirtualHost>
...
```

4. Update method used by Apache multi-processus module in **/etc/apache2/sites-available/00-mpm.conf**:

```diff
-LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
+#LoadModule mpm_prefork_module modules/mod_mpm_prefork.so

-#LoadModule mpm_event_module modules/mod_mpm_event.so
+LoadModule mpm_event_module modules/mod_mpm_event.so
```

5. Restart the Apache process to take in account the new configuration:

```shell
systemctl restart apache2
```

</TabItem>
</Tabs>

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

> The Table of network flows is available [here](../installation/architectures.md#table-of-network-flows).

### Centreon Broker communication

#### Centreon Broker and the firewall

In certain cases, you may not be able to initialize the Centreon Broker data flow from the poller (or the Remote Server)
to the Central Server or the Remote Server.
[See the following configuration to invert the flow](../monitoring/monitoring-servers/advanced-configuration.md#centreon-broker-and-the-firewall).

#### Centreon Broker flow authentication

If you need to authenticate pollers that are sending data to the monitoring system, you can use the Centreon Broker
authentication mechanism, which is based on X.509 certificates.
[See the following configuration to authenticate the peer](../monitoring/monitoring-servers/advanced-configuration.md#centreon-broker-flow-authentication).

#### Compress and encrypt the Centreon Broker communication

It is also possible to compress and encrypt the Centreon Broker communication.
Go to **Configuration > Pollers > Broker configuration** menu, edit your Centreon Broker configuration
and enable for **IPv4** inputs and outputs:

- Enable TLS encryption: Auto
- Enable negotiation: Yes
- Compression (zlib): Auto

### Centreon Gorgone communication

This the official [Centreon gorgone documentation](https://github.com/centreon/centreon-gorgone/blob/master/docs/configuration.md#gorgonecore)
to secure the communication.

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

Centreon offers to save the configuration of the platform. To do this, go to the
[**Administration > Parameters > Backup**](./backup.md) menu.
