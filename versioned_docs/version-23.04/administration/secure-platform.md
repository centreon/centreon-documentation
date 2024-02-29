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
grep apache /etc/passwd
```

You must have **/sbin/nologin** like:

```shell
apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin
```

> As a reminder, the list of users and groups can be found [here](../installation/technical.md#users-and-groups)

## Enable SELinux

Centreon developed SELinux rules in order to strengthen the control of
components by the operating system.

> These rules are currently in **beta mode** and can be activated.
> You can activate them by following this procedure. If you detect a problem,
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

By default, SELinux is disabled during the Centreon installation process. To enable SELinux in permissive mode, you need to
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
   dnf install centreon-mbi-selinux
   ```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

<Tabs groupId="sync">
<TabItem value="Central / Remote Server" label="Central / Remote Server">

   ```shell
   apt install centreon-common-selinux \
   centreon-web-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Poller" label="Poller">

   ```shell
   apt install centreon-common-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Map server" label="Map server">

   ```shell
   apt install centreon-map-selinux
   ```

</TabItem>
<TabItem value="MBI server" label="MBI server">

   ```shell
   apt install centreon-mbi-selinux
   ```

</TabItem>
</Tabs>

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
grep -i denied /var/log/audit/audit.log
```

If errors appear, you have to analyse them and to decide if these errors are regular and must be added in addition to
the Centreon default SELinux rules. To do this, use the following command to transform errors into SELinux rules:

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
installation. It is mandatory to set a password for the **root** user of the database. If you haven't already done so, please execute the following command and follow the instructions:

```shell
mysql_secure_installation
```

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
<TabItem value="Debian 11" label="Debian 11">

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
<TabItem value="Debian 11" label="Debian 11">

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

Let's assume that you have a Centreon server with a **centreon7.localdomain** FQDN address.

1. Prepare the OpenSSL configuration:

  Due to a policy change at Google, self-signed certificates may be rejected by the Google Chrome browser (it is not even possible to add an exception). To continue using this browser, you have to change the OpenSSL configuration.

  <Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

  Open the file **/etc/pki/tls/openssl.cnf**. The goal here is to edit this file in order to inform the various IPs and FQDNs for the server.

  </TabItem>

  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

  Open the file **/etc/pki/tls/openssl.cnf**. The goal here is to edit this file in order to inform the various IPs and FQDNs for the server.

  </TabItem>
  <TabItem value="Debian 11" label="Debian 11">
  
  Open the file **/etc/ssl/openssl.cnf**. The goal here is to edit this file in order to inform the various IPs and FQDNs for the server.
  
  </TabItem>
  </Tabs>
  
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
  
2. Create a private key for the server:
  
  Let's create a private key named **centreon7.key** without a password so that it can be used by the Apache service.
  ```text
  openssl genrsa -out centreon7.key 2048
  ```
  
  Protect your file by limiting rights:
  ```text
  chmod 400 centreon7.key
  ```
  
3. Create a Certificate Signing Request file:
  
  From the key you created, create a CSR (Certificate Signing Request) file: **centreon7.csr** in our case. Fill in the fields according to your company. The **Common Name** field must be identical to the hostname of your Apache server (in our case it is **centreon7.localdomain**).
  ```text
  openssl req -new -key centreon7.key -out centreon7.csr
  ```
  
4. Create a private key for the certificate of certification authority:
  
  Create a private key for this authority: **ca_demo.key** in our case. We add the **-aes256** option to encrypt the output key and include a password. This password will be requested each time this key is used.
  ```text
  openssl genrsa -aes256 2048 > ca_demo.key
  ```
  
5. Create a x509 certificate from the private key of the certificate of certification authority:
  
  Create a x509 certificate that will be valid for one year: **ca_demo.crt** in our case.
  
  > Note that it is necessary to simulate a trusted third party, so the **Common Name** field must be different from the server certificate.
  ```text
  openssl req -new -x509 -days 365 -key ca_demo.key -out ca_demo.crt
  ```
  
  The certificate being created, you will be able to use it to sign your server certificate.
  
6. Create a certificate for the server:
  
  Create your certificate for the server by using the x509 certificate (**ca_demo.crt**) to sign it.
  
  <Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">
  
  ```text
  openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/pki/tls/openssl.cnf -extensions v3_ca
  ```
  
  </TabItem>
  
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">
  
  ```text
  openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/pki/tls/openssl.cnf -extensions v3_ca
  ```
  
  </TabItem>
  <TabItem value="Debian 11" label="Debian 11">
  
  ```text
  openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/ssl/openssl.cnf -extensions v3_ca
  ```
  
  </TabItem>
  </Tabs>
  
  The password created at step **Create a private key for the certificate of certification authority** must be entered. You get your server certificate named **centreon7.crt**.
  
  You can view the contents of the file: 
  ```text
  less centreon7.crt
  ```
  
7. Then you have to retrieve the x509 certificate file (**ca_demo.crt**) and import it into your browser's certificate manager.
  
Now you have your self-signed certificate, you can perform the following procedure to activate HTTPS mode on your Apache server.

### Activating HTTPS mode on your web server

1. Install the SSL module for Apache:
  
<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install mod_ssl mod_security openssl
```
  
2. Install your certificates:

Install your certificates (**centreon7.key** and **centreon7.crt** in our example) by copying them to the Apache configuration:

```shell
cp centreon7.key /etc/pki/tls/private/
cp centreon7.crt /etc/pki/tls/certs/
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install mod_ssl mod_security openssl
```
  
2. Install your certificates:

Install your certificates (**centreon7.key** and **centreon7.crt** in our example) by copying them to the Apache configuration:

```shell
cp centreon7.key /etc/pki/tls/private/
cp centreon7.crt /etc/pki/tls/certs/
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
curl -sSL https://packages.sury.org/apache2/README.txt | sudo bash -x
apt update
apt install libapache2-mod-security2
a2enmod ssl
a2enmod security2
systemctl restart apache2
```

2. Install your certificates:

Install your certificates (**centreon7.key** and **centreon7.crt** in our example) by copying them to the Apache configuration:

```shell
cp centreon7.key /etc/ssl/private/
cp centreon7.crt /etc/ssl/certs/
```

</TabItem>
</Tabs>

3. Backup the previous Apache configuration for Centreon:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
cp /etc/httpd/conf.d/10-centreon.conf{,.origin}
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
cp /etc/httpd/conf.d/10-centreon.conf{,.origin}
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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Edit the **/etc/httpd/conf.d/10-centreon.conf** file by adding the **<VirtualHost *:443>** section.

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

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

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

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

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
    SSLCertificateFile /etc/ssl/certs/centreon7.crt
    SSLCertificateKeyFile /etc/ssl/private/centreon7.key

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
> certificate and key. In our case: **SSLCertificateFile /etc/ssl/certs/centreon7.crt** and **SSLCertificateKeyFile /etc/ssl/private/centreon7.key**.

</TabItem>
</Tabs>

5. Enable HttpOnly / Secure flags and hide the Apache server signature:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Edit the **/etc/httpd/conf.d/10-centreon.conf** file and add the following lines before the `<VirtualHost>` tag:

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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Edit the **/etc/httpd/conf.d/10-centreon.conf** file and add the following lines before the `<VirtualHost>` tag:

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
<TabItem value="Debian 11" label="Debian 11">

Edit the **/etc/apache2/sites-available/centreon.conf** file and add the following lines before the `<VirtualHost>` tag:

```apacheconf
Header set X-Frame-Options: "sameorigin"
Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure;SameSite=Strict
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
ServerSignature Off
ServerTokens Prod
TraceEnable Off
```

Edit the **/etc/php/8.1/mods-available/centreon.ini** file and turn off the **expose_php** parameter:

> This one was done during the installation process.

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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Edit the **/etc/httpd/conf.d/autoindex.conf** file and comment the following line:

```apacheconf
#Alias /icons/ "/usr/share/httpd/icons/"
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Edit the **/etc/apache2/mods-available/autoindex.conf** file and comment the following line:

> The default icons directory is already hidden.

</TabItem>
</Tabs>

7. You can perform this test to check that Apache is properly configured, by running the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```apacheconf
apachectl configtest
```

The expected result is the following:

```apacheconf
Syntax OK
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```apacheconf
apachectl configtest
```

The expected result is the following:

```apacheconf
Syntax OK
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```apacheconf
apache2ctl configtest
```

The expected result is the following:

```apacheconf
Syntax OK
```

</TabItem>
</Tabs>

8. Restart the Apache and PHP processes to take in account the new configuration:

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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

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
<TabItem value="Debian 11" label="Debian 11">

```shell
systemctl restart php8.1-fpm apache2
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

9. Gorgone API configuration

Replace **127.0.0.1** by the FQDN of your central server in the **/etc/centreon-gorgone/config.d/31-centreon-api.yaml** file:

```text
gorgone:
  tpapi:
    - name: centreonv2
      base_url: "http://centreon7.localdomain/centreon/api/latest/"
      username: "centreon-gorgone"
      password: "bpltc4aY"
    - name: clapi
      username: "centreon-gorgone"
      password: "bpltc4aY"
```

Then restart the Gorgone daemon:

```shell
systemctl restart gorgoned
```

Then check its status:

```shell
systemctl status gorgoned
```

If everything is ok, you must have:

```shell
● gorgoned.service - Centreon Gorgone
   Loaded: loaded (/etc/systemd/system/gorgoned.service; enabled; vendor preset: disabled)
   Active: active (running) since Mon 2023-03-06 15:58:10 CET; 27min ago
 Main PID: 1791096 (perl)
    Tasks: 124 (limit: 23040)
   Memory: 595.3M
   CGroup: /system.slice/gorgoned.service
           ├─1791096 /usr/bin/perl /usr/bin/gorgoned --config=/etc/centreon-gorgone/config.yaml --logfile=/var/log/centreon-gorgone/gorgoned.log --severity=info
           ├─1791109 gorgone-statistics
           ├─1791112 gorgone-legacycmd
           ├─1791117 gorgone-engine
           ├─1791118 gorgone-audit
           ├─1791125 gorgone-nodes
           ├─1791138 gorgone-action
           ├─1791151 gorgone-cron
           ├─1791158 gorgone-dbcleaner
           ├─1791159 gorgone-autodiscovery
           ├─1791166 gorgone-httpserver
           ├─1791180 gorgone-proxy
           ├─1791181 gorgone-proxy
           ├─1791182 gorgone-proxy
           ├─1791189 gorgone-proxy
           └─1791190 gorgone-proxy

mars 06 15:58:10 ito-central systemd[1]: gorgoned.service: Succeeded.
mars 06 15:58:10 ito-central systemd[1]: Stopped Centreon Gorgone.
mars 06 15:58:10 ito-central systemd[1]: Started Centreon Gorgone.
```

You should see the following line in the Gorgone daemon log file **/var/log/centreon-gorgone/gorgoned.log**:

```text
2023-03-06 15:58:12 - INFO - [autodiscovery] -class- host discovery - sync started
```

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
<TabItem value="Debian 11" label="Debian 11">

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
<TabItem value="Debian 11" label="Debian 11">

```shell
systemctl restart apache2
```

</TabItem>
</Tabs>

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

4. Update the method used by the apache multi-processus module in **/etc/httpd/conf.modules.d/00-mpm.conf**:

   Comment the following line:

   ```shell
   LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
   ```

   Uncomment the following line:

   ```shell
   LoadModule mpm_event_module modules/mod_mpm_event.so
   ```

5. Restart the Apache process to take in account the new configuration:

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

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

4. Update the method used by the apache multi-processus module in **/etc/httpd/conf.modules.d/00-mpm.conf**:

   Comment the following line:

   ```shell
   LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
   ```

   Uncomment the following line:

   ```shell
   LoadModule mpm_event_module modules/mod_mpm_event.so
   ```

5. Restart the Apache process to take in account the new configuration:

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

1. [Configure HTTPS on your Centreon server](#secure-the-web-server-with-https).

2. Install the nghttp2 module:

```shell
apt install nghttp2
```

3. Enable the **http2** protocol in **/etc/apache2/sites-available/centreon.conf**:

```apacheconf
...
<VirtualHost *:443>
    Protocols h2 h2c http/1.1
    ...
</VirtualHost>
...
```

4. Execute the following commands:

```shell
a2dismod php8.1
a2dismod mpm_prefork
a2enmod mpm_event
a2enmod http2
```

5. Restart the Apache process to take into account the new configuration:

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

By default, ZMQ communications are secured, both external (with the poller) and internal (between gorgone processes).

However, the gorgone HTTP API is unsecured by default. Only localhost can talk with gorgone but the communication is not done using SSL.

You can [configure SSL](https://github.com/centreon/centreon/blob/develop/centreon-gorgone/docs/modules/core/httpserver.md) in the **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** file.

Then you must configure gorgone using the **Administration > Parameters > Gorgone** page.

You also need to make sure that the **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** file (on your central server, your remote servers and your pollers) contains the following lines:

```shell
name: action
package: "gorgone::modules::core::action::hooks"
enable: true
command_timeout: 30
whitelist_cmds: true
allowed_cmds:
    - ^sudo\s+(/bin/)?systemctl\s+(reload|restart)\s+(centengine|centreontrapd|cbd)\s*$
    - ^(sudo\s+)?(/usr/bin/)?service\s+(centengine|centreontrapd|cbd|cbd-sql)\s+(reload|restart)\s*$
    - ^/usr/sbin/centenginestats\s+-c\s+/etc/centreon-engine/centengine\.cfg\s*$
    - ^cat\s+/var/lib/centreon-engine/[a-zA-Z0-9\-]+-stats\.json\s*$
    - ^/usr/lib/centreon/plugins/.*$
    - ^/bin/perl /usr/share/centreon/bin/anomaly_detection --seasonality >> /var/log/centreon/anomaly_detection\.log 2>&1\s*$
    - ^/usr/bin/php -q /usr/share/centreon/cron/centreon-helios\.php >> /var/log/centreon-helios\.log 2>&1\s*$
    - ^centreon
    - ^mkdir
    - ^/usr/share/centreon/www/modules/centreon-autodiscovery-server/script/run_save_discovered_host --all --job-id=\d+ --export-conf --token=\S+$
```

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
