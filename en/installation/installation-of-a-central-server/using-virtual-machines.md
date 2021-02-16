---
id: using-virtual-machines
title: Using virtual machines (VMs)
---

> If you want to install Centreon on CentOS / Oracle Linux / RHEL distribution
> in version 8, you must [use RPM packages](./using-packages.html)

Two preconfigured virtual machines are available on the Centreon [download web site](https://download.centreon.com)

These virtual machines are available in OVA (VMware) and OVF (VirtualBox) format.

> The OVA/OVF may not have a network adapter configured. If so, you will have to configure a network adapter in your
virtual machine before you proceed.

## Importing

The first step is to import the OVF File. Go to **File > Deploy OVF Template** and select a file. Because the menu
selections are actually linked to your specific VMWare configuration, we are unable to provide more information.
Be advised that best practice is to use **Thin Provision** to save as much free space as possible on the disk.

## Connecting

Log into the CLI of your Centreon VM. The server has a default password.

To connect to the web UI use: **admin/centreon**.

You can also connect to the server via SSH using the account: **root/centreon**.
The **root** password of the DBMS is not initialized.

> For security reasons, we highly recommend for you to change these passwords after installation.

On your first login to Centreon CLI, you will see a banner that describes
additional oerations to be performed. **It is imperative that you complete the instructions, especially operations 4 and 5.**

> To remove this message, delete the **/etc/profile.d/centreon.sh** file.

## Getting started

Go to the [Getting Started](../../getting-started/installation-first-steps.html)
chapter to configure your first monitoring.
