---
id: introduction
title: Introduction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter describes how to install your Centreon monitoring platform.

The monitoring platform can be installed in several ways. However, **we strongly
recommend using Centreon repositories (packages) to install your
platform**. Enjoy our industrialization work during installation and update steps
of the environment. Also enjoy optimizations installed by default on the system.

Centreon can be installed from sources (tar.gz) but the work is more
complex. In addition, the installation will only be supported by the community.

Before installing Centreon:

1. Check the [compatibility](compatibility.md) (supported OSs, DBMS).
2. Choose [the type of architecture](architectures.md) that best suits your needs.
3. Check the [prerequisites](prerequisites.md) (CPU resources, memory, disks, partitioning, etc...).
4. [Download Centreon](https://download.centreon.com/).
5. Finally, you can install the platform.

## Unattended script

To quickly test Centreon and install a central server on AlmaLinux/Oracle Linux/RHEL 8 or 9, you
can use a script.

1. Update your system:

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

```shell
dnf update
subscription-manager register --username my_username --password my_password --auto-attach --force
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

> Replace **my_username** and **my_password** with the credentials of your RedHat account.

</TabItem>

<TabItem value="Alma / Oracle Linux 8" label="Alma / Oracle Linux 8">

```shell
dnf update
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

```shell
dnf update
subscription-manager register --username my_username --password my_password --auto-attach --force
subscription-manager repos --enable codeready-builder-for-rhel-9-x86_64-rpms
```

</TabItem>
<TabItem value="Alma / Oracle Linux 9" label="Alma / Oracle Linux 9">

```shell
dnf update
```

</TabItem>
</Tabs>

2. Run the following command as **root**:

  ```Bash
  curl -L https://raw.githubusercontent.com/centreon/centreon/23.04.x/centreon/unattended.sh | sh
  ```

  The script will install a central server using version 23.04, from the stable repository, with minimal output on your terminal.

  In case of problems when running the script, execute it again using the following command:

  ```shell
  sh -x unattended.sh install -t central -v 22.10 -r stable -l DEBUG  2>&1 |tee -a /tmp/unattended-$(date +"%m-%d-%Y-%H%M%S").log
  ```

  You will get a full log file with all errors in your tmp folder, named unattended(date).log.

3. Once the script has run, all you have to do is to carry out the [web installation steps](web-and-post-installation.md).
