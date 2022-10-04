---
id: introduction
title: Introduction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter describes how to install your Centreon monitoring platform.

The monitoring platform may be installed in several ways. However, **we strongly
recommend using Centreon repositories (packages) to install your
platform**. Enjoy our industrialization work during installation and update steps
of the environment. Also enjoy optimizations installed by default on the system.

Centreon Installation can be performed from source (tar.gz) but the work is more
complex. In addition the installation will only be supported by the community.

Before installation

1.  Be sure to follow [the prerequisites installation and
    sizing](prerequisites.md) (resources CPU, memory, disks,
    partitioning, etc ...).
2.  Take care to choose [the type of architecture](architectures.md) that
    should be set up for your needs.
3.  [Download Centreon](https://download.centreon.com/)
4.  Finally, you can install the platform.

## Unattended script

To quickly test Centreon and install a central server on CentOS 7 or on AlmaLinux 8 / Oracle Linux 8 / RHEL 8, you
can use a script.

1. Update your system:

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

```shell
dnf update
subscription-manager register --username my_username --password my_password --auto-attach --force
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

> Replace **my_username** and **my_password** by the credentials of your RedHat account.

</TabItem>

<TabItem value="Alma / Oracle Linux 8" label="Alma / Oracle Linux 8">

```shell
dnf update
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum update
```

</TabItem>
</Tabs>

2. Run the following command as **root**:

  ```Bash
  curl -L https://raw.githubusercontent.com/centreon/centreon/master/unattended.sh | sh
  ```

3. Once the script has run, all you have to do is to carry out the [web installation steps](web-and-post-installation.md).
