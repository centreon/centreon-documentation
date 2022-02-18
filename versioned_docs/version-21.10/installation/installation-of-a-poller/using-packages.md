---
id: using-packages
title: Using packages 
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Centreon provides RPM packages for its products through the Centreon Open
Sources version available free of charge in our repository.

These packages have been successfully tested in CentOS 7 and 8 environments.

> Due to Red Hat's stance on CentOS 8, we suggest not to use said version for
> your production environment. Nevertheless, these packages for CentOS 8 are
> compatible with RHEL 8 and Oracle Linux 8 versions.

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

> You can find instructions [here](../../administration/secure-platform.md#enable-firewalld) to configure firewalld.

### Server name

If you want, you can change the server's name using the following command:
```shell
hostnamectl set-hostname new-server-name
```

Replace **new-server-name** by the name you want. Example:
```shell
hostnamectl set-hostname poller1
```

### Install the repositories

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

#### Redhat CodeReady Builder repository

To install Centreon you will need to enable the official CodeReady Builder
repository supported by Redhat.

Enable the CodeReady Builder repository using these commands:

```shell
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

</TabItem>
<TabItem value="CentOS 8" label="CentOS 8">

#### Redhat PowerTools repository

To install Centreon you will need to enable the official PowerTools repository
supported by Redhat.

Enable the PowerTools repository using these commands:

- For Centos 8.2:

    ```shell
    dnf -y install dnf-plugins-core epel-release
    dnf config-manager --set-enabled PowerTools
    ```

- For CentOS 8.3 and CentOS Stream:
    ```shell
    dnf -y install dnf-plugins-core epel-release
    dnf config-manager --set-enabled powertools
    ```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

#### Oracle CodeReady Builder repository

To install Centreon you will need to enable the official Oracle CodeReady
Builder repository supported by Oracle.

Enable the repository using these commands:

```shell
dnf -y install dnf-plugins-core oracle-epel-release-el8
dnf config-manager --set-enabled ol8_codeready_builder
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

#### Redhat Software Collections repository

To install Centreon you will need to set up the official Software Collections
repository supported by Redhat.

> Software collections are required for installing PHP 7 and associated libraries.

Install the Software Collections repository using this command:

```shell
yum install -y centos-release-scl
```

</TabItem>
</Tabs>

#### Centreon repository

To install Centreon software from the repository, you should first install the
centreon-release package, which will provide the repository file.

Install the Centreon repository using this command:

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf install -y https://yum.centreon.com/standard/21.10/el8/stable/noarch/RPMS/centreon-release-21.10-5.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y https://yum.centreon.com/standard/21.10/el7/stable/noarch/RPMS/centreon-release-21.10-5.el7.centos.noarch.rpm
```

</TabItem>
</Tabs>

## Installation

To install the monitoring engine, run the command:

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf install -y centreon-poller-centreon-engine
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y centreon-poller-centreon-engine
```

</TabItem>
</Tabs>

To make services start automatically during system bootup, run the following
command:
``` shell
systemctl enable centreon centengine centreontrapd snmptrapd
```

Passive monitoring services can be started:
```shell
systemctl start centreontrapd snmptrapd
```

Restart Centreon Engine:
```shell
systemctl restart centengine
```

## Register the server

To turn the server into a poller and to register it to the Central server or to a Remote server, execute the following command on the future poller:

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t poller -h <IP_TARGET_NODE> -n <POLLER_NAME>
```

Example:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t poller -h 192.168.0.1 -n poller-1
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t poller -h <IP_TARGET_NODE> -n <POLLER_NAME>
```

Example:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t poller -h 192.168.0.1 -n poller-1
```

</TabItem>
</Tabs>

> Replace **<IP_TARGET_NODE>** by the IP of the central server or remote server that you want to link the poller to (IP as seen by the poller)

> The **<API_ACCOUNT>** must have access to the configuration API. You can use the default **admin** account.

> If you need to change the HTTP method or the port, you can use the following format for the **-h** option:
> `HTTPS://<IP_TARGET_NODE>:PORT`

Then follow instructions by
1. Entering your password:

    ``` shell
    Please enter the password of 192.168.0.1:
    ```

2. Select the IP adress if multiple network interfaces exist:

    ```shell
    Which IP do you want to use as CURRENT NODE IP ?
    1) 192.168.0.2
    2) 192.168.0.3
    1
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
    
    Do you want to register this server with those information ? (y/n)y
    ```

You will receive the validation of the Centreon central or the Remote Server server:

``` shell
2020-10-16T17:19:37+02:00 [INFO]: The CURRENT NODE 'poller': 'poller-1@192.168.0.2' linked to TARGET NODE: '192.168.0.1' has been added
```

### Main errors messages

``` shell
2020-10-20T10:23:15+02:00 [ERROR]: Invalid credentials
```

> Your credentials are incorrect for the **<API_ACCOUNT>**.

``` shell
2020-10-20T10:24:59+02:00 [ERROR]: Access Denied.
```

> The **<API_ACCOUNT>** doesn't have access to configuration API.

``` shell
Failed connect to 192.168.0.1:444; Connection refused
```

> Unable to access to the API. Please check **<IP_TARGET_NODE>**, scheme and port.

``` shell
2020-10-20T10:39:30+02:00 [ERROR]: Can’t connect to the API using: https://192.168.0.1:443/centreon/api/latest/login
```

> The access url is not complete or invalide. Use the **--root** option to define the API URL Path. For example: **--root monitoring**.

``` shell
2020-10-20T10:42:23+02:00 [ERROR]: No route found for “POST /centreon/api/latest/platform/topology”
```

> Your Centreon target version is invalid. It should be greater or equal to 21.10.

## Add the Poller to configuration

Go to the [Add a Poller to configuration](../../monitoring/monitoring-servers/add-a-poller-to-configuration.md).

## Secure your platform

Don't forget to secure your Centreon platform following our
[recommendations](../../administration/secure-platform.md)
