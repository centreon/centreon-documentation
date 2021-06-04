---
id: secure-platform
title: Secure your platform
---

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

> As a reminder, the list of users and groups can be found [here](../installation/prerequisites.html#users-and-groups)

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

<!--DOCUSAURUS_CODE_TABS-->
<!--Central / Remote Server-->
   ```shell
   yum install centreon-common-selinux \
   centreon-web-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```
<!--Poller-->
   ```shell
   yum install centreon-common-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```
<!--Map server-->
   ```shell
   yum install centreon-map-selinux
   ```
<!--MBI server-->
   ```shell
   yum install centreon-mbi-selinux
   ```
<!--END_DOCUSAURUS_CODE_TABS-->

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

## Securing the installation of the DBMS

[MariaDB](https://mariadb.com/kb/en/mysql_secure_installation/) propose a default procedure to secure the DBMS
installation. Please execute the following command and follow instruction:

```shell
mysql_secure_installation
```

## Enable firewalld

Install firewalld:
```shell
yum install firewalld
```

Enable firewalld:
```shell
systemctl enable firewalld
systemctl start firewalld
```

> The list of network flows required for each type of server is defined
> [here](../installation/architectures.html#tables-of-platform-flows).

<!--DOCUSAURUS_CODE_TABS-->
<!--Central / Remote Server-->
Example of rules for a Centreon Central or Remote Server:
```shell
# For default protocols
firewall-cmd --zone=public --add-service=ssh --permanent
firewall-cmd --zone=public --add-service=http --permanent
firewall-cmd --zone=public --add-service=snmp --permanent
firewall-cmd --zone=public --add-service=snmptrap --permanent
# Centreon Gorgone
firewall-cmd --zone=public --add-port=5556/tcp --permanent
# Centreon Broker
firewall-cmd --zone=public --add-port=5669/tcp --permanent
```
<!--Poller-->
Example of rules for Centreon poller:
```shell
# For default protocols
firewall-cmd --zone=public --add-service=ssh --permanent
firewall-cmd --zone=public --add-service=snmp --permanent
firewall-cmd --zone=public --add-service=snmptrap --permanent
```
<!--END_DOCUSAURUS_CODE_TABS-->

Once the rules have been added, it is necessary to reload firewalld:
```shell
firewall-cmd --reload
```

### Enable fail2ban

Fail2Ban is an intrusion prevention software framework that protects computer servers from brute-force attacks.

Install fail2ban:
```shell
yum install epel-release
yum install fail2ban fail2ban-systemd yum python-inotify
```

If you have SELinux installed, then update the SELinux policies:
```shell
yum update -y selinux-policy*
```

Enable firewalld:
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

## Enable HTTPS on the web server

By default, Centreon installs a web server in HTTP mode. It is strongly recommended to switch to HTTPS mode by adding your certificate.

It is better to use a certificate validated by an authority rather than a self-signed one. However, in case self-signed method suits you more, you can refer to the [appropriate section](#securing-the-apache-web-server-with-self-signed-certificat).

If you do not have a certificate validated by an authority, you can generate one on platforms such as [Let's Encrypt](https://letsencrypt.org/).

Once you have your certificate, perform the following procedure to activate HTTPS mode on your Apache server:

1. Install SSL module for Apache:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install mod_ssl mod_security openssl
```
<!--CentOS 7-->
```shell
yum install httpd24-mod_ssl httpd24-mod_security openssl
```
<!--END_DOCUSAURUS_CODE_TABS-->

2. Install your certificates:

Copy your certificate and key on the server according your configuration; by default, it's:

- /etc/pki/tls/certs/ca.crt
- /etc/pki/tls/private/ca.key

3. Backup previous Apache configuration for Centreon:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
cp /etc/httpd/conf.d/10-centreon.conf{,.origin}
```
<!--CentOS 7-->
```shell
cp /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf{,.origin}
```
<!--END_DOCUSAURUS_CODE_TABS-->

4. Edit Centreon Apache configuration

> Centreon offers an example configuration file to enable HTTPS available in the following directory:
> **/usr/share/centreon/examples/centreon.apache.https.conf**

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
Edit the **/etc/httpd/conf.d/10-centreon.conf** as following:
<!--CentOS 7-->
Edit the **/opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf** as following:
<!--END_DOCUSAURUS_CODE_TABS-->

```apacheconf
Alias /centreon/api /usr/share/centreon
Alias /centreon /usr/share/centreon/www/

<LocationMatch ^/centreon/(?!api/latest/|api/beta/|api/v[0-9]+/|api/v[0-9]+\.[0-9]+/)(.*\.php(/.*)?)$>
    ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/www/$1
</LocationMatch>

<LocationMatch ^/centreon/api/(latest/|beta/|v[0-9]+/|v[0-9]+\.[0-9]+/)(.*)$>
    ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/api/index.php/$1
</LocationMatch>

ProxyTimeout 300

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
    SSLCertificateFile /etc/pki/tls/certs/ca.crt
    SSLCertificateKeyFile /etc/pki/tls/private/ca.key

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

        FallbackResource /centreon/index.html

        AddType text/plain hbs
    </Directory>

    <Directory "/usr/share/centreon/api">
        Options Indexes
        AllowOverride all
        Order allow,deny
        Allow from all
        Require all granted
        <IfModule mod_php5.c>
            php_admin_value engine Off
        </IfModule>

        AddType text/plain hbs
    </Directory>
</VirtualHost>

RedirectMatch ^/$ /centreon
```

> Don't forget to change **SSLCertificateFile** and **SSLCertificateKeyFile** directives with the path containing your
> certificate and key.

5. Enable HttpOnly / Secure flags and hide Apache server signature

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
Edit the **/etc/httpd/conf.d/10-centreon.conf** file and add the following line:

```apacheconf
Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure
ServerSignature Off
ServerTokens Prod
```

Edit the **/etc/php.d/50-centreon.ini** file and turn off the `expose_php` parameter:

```phpconf
expose_php = Off
```
<!--CentOS 7-->
Edit the **/opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf** file and add the following line:

```apacheconf
Header set X-Frame-Options: "sameorigin"
Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure
ServerSignature Off
ServerTokens Prod
TraceEnable Off
```

Edit the **/etc/opt/rh/rh-php73/php.d/50-centreon.ini** file and turn off the `expose_php` parameter:

```phpconf
expose_php = Off
```
<!--END_DOCUSAURUS_CODE_TABS-->

6. Hide the default /icons directory

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
Edit the **/etc/httpd/conf.d/autoindex.conf** file and comment the following line:

```apacheconf
#Alias /icons/ "/usr/share/httpd/icons/"
```
<!--CentOS 7-->
Edit the **/opt/rh/httpd24/root/etc/httpd/conf.d/autoindex.conf** file and comment the following line:

```apacheconf
#Alias /icons/ "/opt/rh/httpd24/root/usr/share/httpd/icons/"
```
<!--END_DOCUSAURUS_CODE_TABS-->

7. Disable mod_security boundary to enable license upload

Edit the **/opt/rh/httpd24/root/etc/httpd/conf.d/mod_security.conf** file and comment the following line:

```apacheconf
#SecRule MULTIPART_UNMATCHED_BOUNDARY "!@eq 0" \
#"id:'200003',phase:2,t:none,log,deny,status:44,msg:'Multipart parser detected a possible unmatched boundary.'"
```

8. Restart the Apache and PHP process to take in account the new configuration:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
systemctl restart php-fpm httpd
```

Then check its status:

```shell
systemctl status httpd
```

If everything is ok, you must have:

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
<!--CentOS 7-->
```shell
systemctl restart rh-php73-php-fpm httpd24-httpd
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
<!--END_DOCUSAURUS_CODE_TABS-->

### Securing the Apache web server with self-signed certificat

Let's assume that we have a Centreon server with a `centreon7.localdomain` FQDN address.

1. Preparation of the openssl configuration

Due to a policy change at google, self-signed certificates may be rejected by the google chrome browser. (it is not even possible to add an exception). To continue to use this browser, you have to change the openssl configuration.

open the file `/etc/pki/tls/openssl.cnf` and find the `[v3_ca]` section:
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

2. Creating a private key for the server

Let's create a private key nammed `centreon7.key` without a password so that it can be used by the apache service.
```text
openssl genrsa -out centreon7.key 2048
```

Protect your file by limiting rights:
```text
chmod 400 centreon7.key
```

3. Creation of a certificate signing request file 

From the key you created, create a CSR (Certificate Signing Request) file. Fill in the fields according to your company. The "Common Name" field must be identical to the hostname of your apache server (in our case it is centreon7.localdomain).
```text
openssl req -new -key centreon7.key -out centreon7.csr
```

4. Creation of a private key for the certificate authority's certificate

First, create a private key for this authority. We add the -aes256 option to encrypt the output key and include a password. This password will be requested each time this key is used.
```text
openssl genrsa -aes256 2048 > ca_demo.key
```

5. Creation of the x509 certificate from the private key of the certificate authority's certificate

Next, create a x509 certificate that will be valid for one year.

>  Note that it is necessary to simulate a trusted third party, so the "Common Name" must be different from the server certificate.
```text
openssl req -new -x509 -days 365 -key ca_demo.key -out ca_demo.crt
```

The certificate being created, you will be able to use it to sign your server certificate.

6. Creating a certificate for the server

Use the x509 certificate to sign your certificate for the server
```text
openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/pki/tls/openssl.cnf -extensions v3_ca
```

The CAcreateserial option is only needed the first time. The previously created password must be entered. You get your server certificate named centreon7.crt.

You can view the contents of the : 
```text
less centreon7.crt
```

7. Copy files to apache configuration

Copy the private key of the server and the previously signed server certificate.
```text
cp centreon7.key /etc/pki/tls/private/centreon7.key
cp centreon7.crt /etc/pki/tls/certs/
```
8. Update Apache configuration file

Finally, update `SSLCertificateFile` and `SSLCertificateKeyFile` parameters appropriately in your apache configuration file located in `/opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf`. 
Here is an example of how the file should look like: 

```apacheconf
Alias /centreon/api /usr/share/centreon
Alias /centreon /usr/share/centreon/www/
<LocationMatch ^/centreon/(?!api/latest/|api/beta/|api/v[0-9]+/|api/v[0-9]+\.[0-9]+/)(.*\.php(/.*)?)$>
    ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/www/$1
</LocationMatch>
<LocationMatch ^/centreon/api/(latest/|beta/|v[0-9]+/|v[0-9]+\.[0-9]+/)(.*)$>
    ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/api/index.php/$1
</LocationMatch>
ProxyTimeout 300
<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
</VirtualHost>
<VirtualHost *:443>
#####################
# SSL configuration #
#####################
    SSLEngine on
    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256
    SSLCertificateFile /etc/pki/tls/certs/centreon7.crt
    SSLCertificateKeyFile /etc/pki/tls/private/centreon7.key
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
        FallbackResource /centreon/index.html
        AddType text/plain hbs
    </Directory>
    <Directory "/usr/share/centreon/api">
        Options Indexes
        AllowOverride all
        Order allow,deny
        Allow from all
        Require all granted
        <IfModule mod_php5.c>
            php_admin_value engine Off
        </IfModule>
        AddType text/plain hbs
    </Directory>
</VirtualHost>
```
9. Copy the x509 certificate to the client's browser

Now, you will have to retrieve the certificate file x509 ca_demo.crt and import this file into your browser's certificate manager.

## Custom URI

It is possible to update the URI of Centreon. For example, **/centreon** can be replaced by **/monitoring**.

> At least one path level is mandatory.

To update the Centreon URI, you need to follow those steps:

1. Go to `Administration > Parameters > Centreon UI` and change the **Centreon Web Directory** value.

![image](../assets/administration/custom-uri.png)

2. Edit Apache configuration file for Centreon Web 

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
vim /etc/httpd/conf.d/10-centreon.conf
```
<!--CentOS 7-->
```shell
vim /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf
```

and change **/centreon** path with your new path
<!--END_DOCUSAURUS_CODE_TABS-->

## Enabling http2

It is possible to enable http2 protocol to improve Centreon network performance.

To use http2, you need to follow those steps:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
1. [Configure https on Centreon](./secure-platform.html#enable-https-on-the-web-server)

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
<!--CentOS 7-->
1. [Configure https on Centreon](./secure-platform.html#enable-https-on-the-web-server)

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

4. Update method used by apache multi-processus module in **/opt/rh/httpd24/root/etc/httpd/conf.modules.d/00-mpm.conf**:

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
<!--END_DOCUSAURUS_CODE_TABS-->

## User authentication

Centreon offers several methods to authenticate users:

- local (MySQL)
- [LDAP](./parameters/ldap.html)
- [Generic SSO](./parameters/centreon-ui.html#sso) or [OpenId Connect](./parameters/centreon-ui.html#openid-connect)

## Create user profiles

Centreon offers to manage access permissions to the different menus, resources and possible actions on resources via
the management of [Access Control List](./access-control-lists.html).

## Secure communications between servers

It is strongly recommended to secure communications between the different servers of the Centreon platform if some servers
are not in a secure network.

> The Table of network flows is available [here](../installation/architectures.html#table-of-network-flows).

### Centreon Broker communication

#### Centreon Broker and the firewall

In certain cases, you may not be able to initialize the Centreon Broker data flow from the poller (or the Remote Server)
to the Central Server or the Remote Server.
[See the following configuration to invert the flow](../monitoring/monitoring-servers/advanced-configuration.html#centreon-broker-and-the-firewall).

#### Centreon Broker flow authentication

If you need to authenticate pollers that are sending data to the monitoring system, you can use the Centreon Broker
authentication mechanism, which is based on X.509 certificates.
[See the following configuration to authenticate the peer](../monitoring/monitoring-servers/advanced-configuration.html#centreon-broker-flow-authentication).

#### Compress and encrypt the Centreon Broker communication

It is also possible to compress and encrypt the Centreon Broker communication.
Go to `Configuration > Pollers > Broker configuration` menu, edit your Centreon Broker configuration
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
[`Administration > Logs`](./logging-configuration-changes.html) menu.

## Backing up the platform

Centreon offers to save the configuration of the platform. To do this, go to the
[`Administration  >  Parameters  >  Backup`](./backup.html) menu.
