---
id: poller-from-packages
title: Using packages 
---

## Pre-installation steps

### Disable SELinux

First, *SELinux* should be disabled. To do this, you have to edit the file
*/etc/selinux/config* and replace *enforcing* by *disabled*:

``` shell
SELINUX=disabled
```

> After saving the file, reboot your operating system to apply the changes.

Perform a quick check of the SELinux status:

``` shell
getenforce
```

You should have this result:

``` shell
Disabled
```

### Configure the firewall

Add firewall rules or disable the firewall by running the following commands:

``` shell
systemctl stop firewalld
systemctl disable firewalld
systemctl status firewalld
```

### Installing the repositories

To install Centreon software from the repository, you should first install the
centreon-release package, which will provide the repository file.

Install the Centreon repository using this command:

``` shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

The repository is now installed.

## Installing a Centreon Poller server

Run the command:

``` shell
yum install -y centreon-poller-centreon-engine
```

## Add the Poller to configuration

Go to the *[Add a Poller to configuration](add-poller-to-configuration.html)*.
