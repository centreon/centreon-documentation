---
id: introduction
title: Introduction to upgrade
---

This chapter describes how to upgrade your Centreon monitoring platform.

This procedure is linked to your initial version of Centreon. You will have to
**use packages** if you already installed using Centreon ISO or an RPM, and
source files if you installed from sources. Before upgrading Centreon, remember
to make a backup your system.

> If you are using at least one of the BAM, MAP or MBI modules, you have to install
> their new repository to avoid dependency problems.
> Refer to [this page](../reporting/upgrade.html#update-the-repository)

> If you try to migrate a platform using **Centreon Poller Display 1.6.x**, refer
> to [migration procedure](../migrate/poller-display-to-remote-server.html).

> The upgrade process can start only from versions **2.8.0** and later. If you
> have an earlier version, please update to the latest *2.8.x* version first.
