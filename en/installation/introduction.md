---
id: introduction
title: Introduction
---

This chapter describes how to install your Centreon monitoring platform.

The monitoring platform may be installed in several ways. However, **we strongly
recommend using Centreon ISO to install your platform**. Enjoy our
industrialization work during install and update steps of your the environment. Also
enjoy optimizations installed by default on the system.

Centreon Installation can be performed from source (tar.gz) but the work is more
complex. In addition the installer shall be supported by the community.

Before installation

1.  Be sure to follow [the prerequisites installation and
    sizing](prerequisites.html) (resources CPU, memory, disks,
    partitioning, etc ...).
2.  Take care to choose [the type of architecture](architectures.html) that
    should be set up for your needs.
3.  [Download Centreon](https://download.centreon.com/)
4.  Finally, you can install the platform.

To quickly test Centreon from a CentOS or Red Hat 7.x, you can run the following command as **root**:

```Bash
curl -L https://raw.githubusercontent.com/centreon/centreon/master/unattended.sh | sh
```
