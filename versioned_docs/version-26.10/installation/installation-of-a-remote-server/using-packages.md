---
id: using-packages
title: Using packages (remote server)
description: "Install and register a remote server using RPM or DEB packages"
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

#### Dependencies

<DependenciesRepository />

#### Database repository

<DatabaseRepository />

#### Centreon repository

<CentreonRepository />

## Step 2: Install the server

This section describes how to install a Centreon remote server.

You can install this server with a local database on the server or
a remote database on a dedicated server.

<Tabs groupId="sync">
  <TabItem value="With a local database" label="With a local database">
    <DatabaseLocalInstall />

You can now move on to the [next step](#step-3-configuration).

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

This section describes how to set up a TLS connection between the remote server and its web interface.

<InterfaceTlsConf />

## Step 4: Configuration

### Server name

If you want to change the server's name, use the following command:
```shell
hostnamectl set-hostname new-server-name
```

Replace **new-server-name** with the name of your choice. Example:
```shell
hostnamectl set-hostname remote1
```

### Service startup during system bootup

To make services start automatically during system bootup, run these commands
on the central server:

<Tabs groupId="sync">
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
systemctl enable crond
systemctl start crond
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
systemctl enable php8.2-fpm apache2 centreon cbd centengine gorgoned centreontrapd snmpd snmptrapd
```

</TabItem>
</Tabs>

Then execute the following command (on the remote server if you are using a local database, or on your dedicated database server):

<DatabaseEnableRestart />

## Step 5: Web installation

1. Start the Apache server with the
following command:

<Tabs groupId="sync">
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
[web installation steps](../web-and-post-installation.md#web-installation) procedure.

> During web installation, it is not necessary to install the Autodiscovery module.

> In the step **Initialization of the monitoring**, only actions 6 to 8 need to be done.

<!-- ## Step 5: Register the server

To transform the server into a Remote Server and to register it to the Central server or another Remote server, execute the following command on the future remote server:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t remote -h <IP_TARGET_NODE> -n<REMOTE_SERVER_NAME>
```

If you are using a [custom URI](../../administration/secure-platform.md#custom-uri), add it at the end of the command with this format : **/custom_uri**.

Example (with a custom URI):

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t remote -h 192.168.0.1 -n remote-1 /monitoring
```

> Replace **\<IP_TARGET_NODE\>** with the IP of the central server, as seen by the remote server.

> The **\<API_ACCOUNT\>** must have access to the configuration API. You can use the default **admin** account.

> If you need to change the HTTP method or the port, you can use the following format for the **-h** option:
> `HTTPS:/<IP_TARGET_NODE>:PORT`

Then follow instructions by
1. Entering your password:

    ``` shell
    192.168.0.1: please enter your password:
    ```

2. Select the IP address if multiple network interfaces exist:

    ```shell
    Which IP do you want to use as CURRENT NODE IP?
    1) 192.168.0.2
    2) 192.168.0.3
    1
    ```

3. Then validate the information:

    ``` shell
    Summary of the information that will be sent:

    API connection:
    username: admin
    password: ******
    target server: 192.168.0.1

    Pending Registration Server:
    name: remote-1
    type: remote
    address: 192.168.0.2

    Do you want to register this server with the previous information? (y/n)y
    ```

4. Add additional information to enable future communication between your Remote Server and its Central,
fill in the required information to convert your platform into a Remote server:

  ```shell
  <CURRENT_NODE_ADDRESS>: Please enter your username:
  admin
  <CURRENT_NODE_ADDRESS>: Please enter your password:

  <CURRENT_NODE_ADDRESS>: Protocol [http]:
  <CURRENT_NODE_ADDRESS>: Port [80]:
  <CURRENT_NODE_ADDRESS> : centreon root folder [centreon]:
  ```

5. If you use a proxy, please define credentials:

    ```shell
    Are you using a proxy? (y/n)
    y
    enter your proxy Host:
    myproxy.example.com
    enter your proxy Port [3128]:
    Are you using a username/password? (y/n)
    y
    enter your username:
    my_proxy_username
    enter your password:

    ```

You will receive the validation of the Centreon central server:

``` shell
2020-10-16T17:19:37+02:00 [INFO]: The CURRENT NODE 'remote: 'remote-1@192.168.0.2' has been converted and registered successfully.
```

### Main error messages

``` shell
2020-10-20T10:23:15+02:00 [ERROR]: Invalid credentials
```

> Your credentials are incorrect for the **\<API_ACCOUNT\>**.

``` shell
2020-10-20T10:24:59+02:00 [ERROR]: Access Denied.
```

> The **\<API_ACCOUNT\>** doesn't have access to configuration API.

``` shell
Couldn't connect to 192.168.0.1:444; Connection refused
```

> Unable to access the API. Please check **\<IP_TARGET_NODE\>**, scheme and port.

``` shell
2020-10-20T10:39:30+02:00 [ERROR]: Can’t connect to the API using: https://192.168.0.1:443/centreon/api/latest/login
```

> The access url is incomplete or invalid. Use the **--root** option to define the API URL Path. For example: **--root monitoring**.

``` shell
2020-10-20T10:42:23+02:00 [ERROR]: No route found for “POST /centreon/api/latest/platform/topology”
```

> Your Centreon target version is invalid. It should be greater than or equal to 26.10. -->

## Step 6: Extend local DBMS rights

Finally, add rights for the **centreon** database user to use **LOAD DATA INFILE**
command:

```sql
mysql -u root -p
GRANT FILE on *.* to 'centreon'@'localhost';
SET GLOBAL local_infile=1;
exit
```

## Step 7: Attach the remote server to the central server

Go to
[Attach a remote server to a central server](../../monitoring/monitoring-servers/add-a-remote-server-to-configuration.md).

## Step 8: Secure your platform

Remember to secure your Centreon platform following our
[recommendations](../../administration/secure-platform.md).
