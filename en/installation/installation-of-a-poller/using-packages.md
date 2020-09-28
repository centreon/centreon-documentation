---
id: using-packages
title: Using packages 
---

## Pre-installation steps

### Disable SELinux

SELinux should be disabled. To do this, you have to edit the file
**/etc/selinux/config** and replace **enforcing** by **disabled**, or by
running the following command:

```shell
sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config
```

> Reboot your operating system to apply the change.

After system startup, perform a quick check of the SELinux status:

```shell
$ getenforce
Disabled
```

### Configure or disable firewall

Add firewall rules or disable the firewall by running the following commands:

```shell
systemctl stop firewalld
systemctl disable firewalld
```

### Install the repositories

#### Redhat Software Collections repository

To install Centreon you will need to set up the official Software Collections
repository supported by Redhat.

> Software collections are required for installing PHP 7 and associated libraries.

Install the Software Collections repository using this command:

```shell
yum install -y centos-release-scl
```

#### Centreon repository

To install Centreon software from the repository, you should first install the
centreon-release package, which will provide the repository file.

Install the Centreon repository using this command:

```shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

## Installation

To install the monitoring engine, run the command:

```shell
yum install -y centreon-poller-centreon-engine
```

To make services start automatically during system bootup, run the following
command:

``` shell
systemctl enable centengine centreontrapd snmptrapd
```

Passive monitoring services can be started:

```shell
systemctl start centreontrapd snmptrapd
```

> Active monitoring service will be started following the generation of its
> configuration.

## Register the server

To register it to the Centreon Central server or a Remote server, execute the following command:

``` shell
/opt/rh/rh-php72/root/bin/php /usr/share/centreon/bin/registerServerTopology.php -u <API_ACCOUNT> \
-t Poller -h <IP_CENTREON_CENTRAL> -n <REMOTE_SERVER_NAME>
```

Example:

``` shell
/opt/rh/rh-php72/root/bin/php /usr/share/centreon/bin/registerServerTopology.php -u admin -t Poller -h 192.168.0.1 -n poller-1
```

> Replace **<IP_CENTREON_CENTRAL>** by the IP of the Centreon server seen by the poller or by the Remote Server if you
> want to link your server to it..

> The **<API_ACCOUNT>** must have access to configuration API. you can use default **admin** account.

> If you need to change the HTTP method or the port, you can use the following format for the **-h** option:
> HTTPS://<IP_CENTREON_CENTRAL>:PORT

Then follow instructions by
1. Entering your password:

``` shell
192.168.0.1: please enter your password
```

2. Define if you use a proxy to connect to Centreon central or the Remote Server:

``` shell
Are you using a proxy ? (y/n)n
```

If you use a proxy, please define credentials:

``` shell
Are you using a proxy ? (y/n)y

proxy host: myproxy.example.com

proxy port: 3128

proxy username (press enter if no username/password are required): myuser

please enter the proxy password:
```

3. Then validate the information:

``` shell
Summary of the informations that will be send:

Api Connection:
username: admin
password: ******
target server: 192.168.0.1

Pending Registration Server:
name: poller-1
type: poller
address: 192.168.0.2
parent server address: 192.168.0.1

Do you want to register this server with those informations ? (y/n)y
```

You will receive the validation of the Centreon central or the Remote Server server:

``` shell
message: The 'poller-1' Platform: 'poller-1@192.168.0.2.2' linked to '192.168.0.1' has been added
```

### Main errors messages

``` shell
error code: 401
error message: Invalid credentials
```

> You credetials are incorrect for the **<API_ACCOUNT>**.

``` shell
error code: 500
error message: Access Denied.
```

> The **<API_ACCOUNT>** doesn't have access to configuration API.

``` shell
error code: 400
error message: Can't connect to the api
```

> The access url is not complete. Use the **--root** option to define the API URL Path. For example: **--root /monitoring**.
message: The 'poller-1' Platform: 'poller-1@192.168.0.2.2' linked to '192.168.0.1' has been added
```

## Add the Poller to configuration

Go to the [Add a Poller to configuration](../../monitoring/monitoring-servers/add-a-poller-to-configuration.html).
