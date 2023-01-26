---
id: introduction
title: Introduction
---

This chapter describes how to install your Centreon monitoring platform.

The monitoring platform may be installed in several ways. However, **we strongly
recommend using Centreon ISO or Centreon repositories (packages) to install your
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

To quickly test Centreon from a CentOS / Oracle Linux / RHEL in version 8, you
can run the following command as **root**:

```Bash
curl -L https://raw.githubusercontent.com/centreon/centreon/21.10.x/centreon/unattended.sh | sh
```

The script will install a central server using version 21.10, from the stable repository, with minimal output on your terminal.

In case of problems when running the script, execute it again using the following command:

```shell
sh -x unattended.sh install -t central -v 21.10 -r stable -l DEBUG  2>&1 |tee -a /tmp/unattended$(date +"%m-%d-%Y-%H%M%S").log
```

You will get a full log file with all errors in your tmp folder, named unattended(date).log.

Once the script has run, all you have to do is to carry out the [web installation steps](web-and-post-installation.md).
