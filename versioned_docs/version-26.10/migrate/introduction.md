---
id: introduction
title: Introduction to the migration process
description: "Learn when to migrate Centreon to a new server or a supported OS instead of upgrading, and choose the migration procedure that matches your OS."
---

## What is a migration?

Migration procedures apply when you wish to install your Centreon on a different server (typically, to change from an unsupported OS to a [supported OS](../installation/compatibility.md#operating-systems)). You need to install a new OS and a new Centreon platform, then migrate your old data to the new platform. You may need to upgrade your version of Centreon at the same time, if yours is no longer supported.

## Migrating to Centreon 26.10

To move from an older version of Centreon to Centreon 26.10, your platform must run on a supported operating system. The procedure depends on the OS of your current platform:

* If your current platform runs on EL8, EL8 is no longer supported, so you'll need to migrate to a new server. Follow either the [EL to EL migration procedure](migrate-from-el-to-el.md) or the [EL to Debian migration procedure](migrate-from-el-to-debian.md), depending on the OS you choose for the new server.
* If your current platform runs on Debian, follow the [Debian migration procedure](migrate-from-debian-to-debian.md).
* If your current platform runs on EL9, follow the correct [upgrade procedure](../upgrade/introduction.md).

## Special cases

* If you have HA on your platform, contact your Centreon sales representative to discuss any migration scenario.
* If you want to migrate from a very old Centreon version (e.g., Centreon 3.4), [please contact our support team](https://support.centreon.com/).
