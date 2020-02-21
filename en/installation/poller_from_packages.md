---
id: poller_from_packages
title: Using packages 
---

## Pre-installation steps

### Disable SELinux

First, *SELinux* should be disabled. To do this, you have to edit the file
*/etc/selinux/config* and replace *enforcing* by *disabled*:

```Bash
SELINUX=disabled
```

> After saving the file, reboot your operating system to apply the changes.

Perform a quick check of the SELinux status:
```Bash
getenforce
```
You should have this result:
```Bash
Disabled
```

### Configure the firewall

Add firewall rules or disable the firewall by running the following commands:
```Bash
systemctl stop firewalld
systemctl disable firewalld
systemctl status firewalld
```

### Installing the repository

To install Centreon software from the repository, you should first install the centreon-release package, which will
provide the repository file.

Install the Centreon repository using this command:

```Bash
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

The repository is now installed.

## Installing a Centreon Poller Server

Run the command:

```Bash
yum install centreon-poller-centreon-engine
```

## Exchanging SSH Keys

Communication between a central server and a poller server is done through SSH.

You need to exchange SSH keys between the servers.

If you do not have any private SSH keys on the central server for the **centreon** user:
```Bash
su - centreon
ssh-keygen -t rsa
```

> Hit enter when it prompts for a file to save the key to use the default location, or, create one in a specified
> directory. **Leave the passphrase blank**. You will receive a key fingerprint and a randomart image.

Generate a password for the **centreon** user on the new server:
```Bash
passwd centreon
```

Copy this key on to the new server:
```Bash
su - centreon
ssh-copy-id -i .ssh/id_rsa.pub centreon@IP_NEW_SERVER
```

## Configuring a new poller in Centreon

Go to the **Configuration > Pollers** menu and click on **Add server with wizard** to configure a new poller.

Select **Add a Centreon Poller** and click on **Next**:

![image](assets/installation/poller/wizard_add_poller_1.png)

Type in the name, the IP address of the poller and IP address of the Central Server. Click on **Next**:

![image](assets/installation/poller/wizard_add_poller_2.png)

> The IP address of the poller is the IP address or the FQDN used to access this poller from the Central Server.
>
> The IP address of the Central Server is the IP address or the FQDN used to access the Central Server from the poller.

If you want to link the poller to the Centreon Server, click on **Apply**:

![image](assets/installation/poller/wizard_add_poller_3.png)

Otherwise, if you want to link the poller to an existing Centreon Remote Server, select one from the list. Then click **Apply**.

In a few seconds the wizard will configure your new poller.

![image](assets/installation/poller/wizard_add_poller_5.png)

## Getting started

Go to the [Getting Started](../tutorials/tutorials) chapter to configure your first monitoring.
