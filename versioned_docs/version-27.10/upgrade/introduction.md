---
id: introduction
title: Introduction to upgrade
description: "Upgrade Centreon from one major version to another: check that your OS is supported, back up your platform and update the BAM, MAP or MBI repositories."
---

## What is an upgrade?

Upgrading your Centreon monitoring platform means switching from one major version to another (for example, from 23.10 to 26.10), while keeping the same operating system.

## Upgrading to Centreon 27.10

You can only upgrade your Centreon platform to version 27.10 if your current OS is EL9. [Other OSs are no longer supported](./upgrade-matrix.mdx): you must change to a [supported OS](../installation/compatibility.md#operating-systems) using a [migration procedure](../migrate/introduction.md).

For older unsupported OSs and Centreon versions, see [Repositories for archived versions](./archived-repos.md).

Before you upgrade Centreon, make sure you back up your platform.

> Business edition users: MAP Legacy is no longer available in Centreon 26.10. If you are still using MAP Legacy, you will need to migrate to MAP. See [MAP Legacy end of life](https://docs.centreon.com/docs/24.10/graph-views/map-legacy-eol/).

> If you are using at least one of the BAM, MAP or MBI modules, you must install
> their new repository to avoid dependency problems.
> Refer to [this page](../reporting/upgrade.md#step-1-update-the-repository).
