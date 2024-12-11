---
id: using-packages
title: Using packages 
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> This is an older version of Centreon. We recommend you install the latest version.

Centreon provides RPM and DEB packages for its products through the Centreon Open
Source version available free of charge in our repository.

These packages can be installed on Alma/RHEL/Oracle Linux 8 and 9 and on Debian 11.

You must run the installation procedure as a privileged user.

> When you run a command, check its output. If you get an error message, stop the procedure and fix the issue.

## Prerequisites

After installing your server, update your operating system using the following
command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

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
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update && apt upgrade
```

</TabItem>
</Tabs>

> Accept all GPG keys and reboot your server if a kernel update is proposed.

## Step 1: Pre-installation

### Disable SELinux

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

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
<TabItem value="Debian 11" label="Debian 11">

SELinux is not installed on Debian 11, continue.

</TabItem>
</Tabs>

### Configure or disable the firewall

If your firewall is active, add [firewall rules](../../administration/secure-platform.md#enable-firewalld).
You can also disable the firewall during installation by running the following commands:

```shell
systemctl stop firewalld
systemctl disable firewalld
```

### Server name

If you want to change the server's name, use the following command:
```shell
hostnamectl set-hostname new-server-name
```

Replace **new-server-name** with the name of your choice. Example:
```shell
hostnamectl set-hostname poller1
```

### Install the repositories

<Tabs groupId="sync">
<TabItem value="Alma 8" label="Alma 8">

#### Redhat PowerTools repository

To install Centreon, you will need to enable the official PowerTools repository
supported by Redhat.

Enable the PowerTools repository using these commands:

```shell
dnf -y install dnf-plugins-core epel-release
dnf config-manager --set-enabled powertools
```

</TabItem>
<TabItem value="RHEL 8" label="RHEL 8">

#### Redhat CodeReady Builder repository

To install Centreon, you will need to enable the official CodeReady Builder
supported by Redhat.

Enable the CodeReady Builder repository using these commands:

```shell
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

If your server is a Cloud RHEL instance, you will have to execute the following command:

```shell
dnf config-manager --set-enabled codeready-builder-for-rhel-8-rhui-rpms
```

</TabItem>

<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

#### Oracle CodeReady Builder repository

To install Centreon, you will need to enable the official Oracle CodeReady
Builder repository supported by Oracle.

Enable the repository using these commands:

```shell
dnf install dnf-plugins-core
dnf install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
dnf config-manager --set-enabled ol9_codeready_builder
```

</TabItem>
<TabItem value="Alma 9" label="Alma 9">

To install Centreon you will need to install the **CodeReady Builder** repository.

Run the following commands:

```shell
dnf install dnf-plugins-core
dnf install epel-release
dnf config-manager --set-enabled crb
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

To install Centreon you will need to install the **CodeReady Builder** repository.

Run the following commands:

```shell
dnf install -y dnf-plugins-core
dnf install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-9-x86_64-rpms
```

If your server is a Cloud RHEL instance, you will have to execute the following command:

```shell
dnf config-manager --set-enabled codeready-builder-for-rhel-9-rhui-rpms
```

</TabItem>
<TabItem value="Oracle Linux 9" label="Oracle Linux 9">

To install Centreon you will need to install the **CodeReady Builder** repository.

Run the following commands:

```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
dnf config-manager --set-enabled ol9_codeready_builder
dnf install -y epel-release
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Install the following dependencies:

```shell
apt update && apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2 curl
```

</TabItem>
</Tabs>

#### Centreon repository

To install Centreon software, you should first install the Centreon repository.

Install the Centreon repository using this command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.10/el8/centreon-23.10.repo
dnf clean all --enablerepo=*
dnf update
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.10/el9/centreon-23.10.repo
dnf clean all --enablerepo=*
dnf update
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

To install the Centreon repository, execute the following command line:

```shell
echo "deb https://packages.centreon.com/apt-standard-23.10-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```

Then import the repository key:

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
apt update
```

</TabItem>
</Tabs>

## Step 2: Installation

To install the monitoring engine, run the command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y centreon-poller
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y centreon-poller
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update
apt install -y --no-install-recommends centreon-poller
```

</TabItem>
</Tabs>

To make services start automatically during system bootup, run the following
command:
``` shell
systemctl enable centreon centengine centreontrapd snmptrapd gorgoned
```

Passive monitoring services can be started:
```shell
systemctl start centreontrapd snmptrapd gorgoned
```

Restart Centreon Engine:
```shell
systemctl restart centengine
```

## Step 3: Register the server

To turn the server into a poller and to register it to the Central server or a Remote server, execute the following command on the future poller:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u\<API_ACCOUNT\> \
-t poller -h\<IP_TARGET_NODE\> -n <POLLER_NAME>
```

Example:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t poller -h 192.168.0.1 -n poller-1
```

> Replace **\<IP_TARGET_NODE\>** with the IP of the central server or remote server that you want to link the poller to (IP as seen by the poller)

> The **\<API_ACCOUNT\>** must have access to the configuration API. You can use the default **admin** account.

> If you need to change the HTTP method or the port, you can use the following format for the **-h** option:
> `HTTPS:/<IP_TARGET_NODE>:PORT`

Then follow instructions by
1. Entering your password:

    ``` shell
    please enter the password for 192.168.0.1:
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
    name: poller-1
    type: poller
    address: 192.168.0.2
    
    Do you want to register this server with the previous information? (y/n)y
    ```

You will receive the validation of the Centreon central or the Remote Server server:

``` shell
2020-10-16T17:19:37+02:00 [INFO]: The CURRENT NODE 'poller': 'poller-1@192.168.0.2' linked to TARGET NODE: '192.168.0.1' has been added
```

### Main error messages

``` shell
2023-05-20T10:23:15+02:00 [ERROR]: Invalid credentials
```

> Your credentials are incorrect for the **\<API_ACCOUNT\>**.

``` shell
2023-05-20T10:24:59+02:00 [ERROR]: Access Denied.
```

> The **\<API_ACCOUNT\>** doesn't have access to configuration API.

``` shell
Couldn't connect to 192.168.0.1:444; Connection refused
```

> Unable to access the API. Please check **\<IP_TARGET_NODE\>**, scheme and port.

``` shell
2023-05-20T10:39:30+02:00 [ERROR]: Can’t connect to the API using: https://192.168.0.1:443/centreon/api/latest/login
```

> The access URL is incomplete or invalid. Use the **--root** option to define the API URL Path. For example: **--root monitoring**.

``` shell
2023-05-20T10:42:23+02:00 [ERROR]: No route found for “POST /centreon/api/latest/platform/topology”
```

> Your Centreon target version is invalid. It should be greater than or equal to 23.10.

## Step 4: Add the Poller to the configuration

Go to [Attach a poller to a central or a remote server](../../monitoring/monitoring-servers/add-a-poller-to-configuration.md).

## Step 5: Secure your platform

Remember to secure your Centreon platform following our
[recommendations](../../administration/secure-platform.md).
