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
- centreon-gorgoned

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

## Securing the installation of the DBMS

[MariaDB](https://mariadb.com/kb/en/mysql_secure_installation/) propose a default procedure to secure the DBMS
installation. Please execute the following command and follow instruction:

```shell
mysql_secure_installation
```

## Securing the Apache web server

By default, Centreon installs a web server in HTTP mode. It is strongly recommended to switch to HTTPS mode by adding your certificate.

It is better to use a certificate validated by an authority rather than a self-signed one.

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

        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
        ErrorDocument 404 /centreon/index.html

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
1. [Configure https on Centreon](./secure-platform.html#securing-the-apache-web-server)

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
1. [Configure https on Centreon](./secure-platform.html#securing-the-apache-web-server)

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

## Security event information management - SEIM

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
