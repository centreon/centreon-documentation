---
id: introduction
title: Introduction to upgrade
description: "Introduction to upgrading Centreon between major versions"
---

This chapter describes how to upgrade your Centreon monitoring platform, i.e. switching between major versions (for instance, from 23.10 to 26.10).

> Please note that [some OSs are no longer supported](./upgrade-matrix.mdx): you must change to a [supported OS](../installation/compatibility.md#operating-systems) using a [migration procedure](../migrate/introduction.md).

> Business edition users: MAP Legacy is no longer available in Centreon 26.10. If you are still using MAP Legacy, you will need to migrate to MAP. See [MAP Legacy end of life](https://docs.centreon.com/docs/24.10/graph-views/map-legacy-eol/).

Before you upgrade Centreon, make sure you back up your platform.

> If you are using at least one of the BAM, MAP or MBI modules, you must install
> their new repository to avoid dependency problems.
> Refer to [this page](../reporting/upgrade.md#step-1-update-the-repository).

> If you want to change the OS of the host server, follow the [migration procedure](../migrate/introduction.md). (If you want to migrate a platform that uses **Centreon Poller Display 1.6.x**, refer
> to the corresponding [migration procedure](../migrate/poller-display-to-remote-server.md).)
