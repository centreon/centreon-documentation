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

### Install the repository

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

## Add the Poller to configuration

Go to the [Add a Poller to configuration](../../monitoring/monitoring-servers/add-a-poller-to-configuration.html).

## Secure your platform

Don't forget to secure your Centreon platform following our
[recommendations](../../administration/secure-platform.html)
