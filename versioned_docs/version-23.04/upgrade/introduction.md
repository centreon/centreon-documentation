---
id: introduction
title: Introduction to upgrade
---

This chapter describes how to upgrade your Centreon monitoring platform, i.e. switching between major versions (for instance, from 21.10 to 23.04).

> As of version 23.04, Centreon no longer supports CentOS 7. If your Centreon platform was installed on CentOS 7, you cannot simply upgrade it: change to a [supported OS](../installation/compatibility.md#operating-systems) using a [migration procedure](../migrate/introduction.md).

This procedure is linked to your initial version of Centreon. You will have to
**use packages** if you already installed using Centreon ISO or an RPM, and
source files if you installed from sources. Before upgrading Centreon, remember
to make a backup your system.

> If you are using at least one of the BAM, MAP or MBI modules, you have to install
> their new repository to avoid dependency problems.
> Refer to [this page](../reporting/upgrade.md#update-the-repository).

> If you want to change the OS of the host server, follow the [migration procedure](../migrate/introduction.md). (If you want to migrate a platform that uses **Centreon Poller Display 1.6.x**, refer
> to the corresponding [migration procedure](../migrate/poller-display-to-remote-server.md).)

> The upgrade process can start only from versions **2.8.0** and later. If you
> have an earlier version, please update to the latest *2.8.x* version first.
