---
id: poller-versions
title: Poller versions
description: "How to check your poller's version, which version to use, and how often Centreon publishes poller updates"
---

## How do I know my poller's version?

To know your poller's version, go to **Configuration > Pollers > Pollers**. The version of Engine for your poller is displayed in the **Version** column.

## Which version should my poller have?

* Fresh poller installations use version 26.10.
* Existing pollers must have [the latest minor 25.10 version](../installation/poller-update-upgrade.md).
* All older versions are no longer supported.
<!-- * Your poller should be in the latest available version or its n-1: currently, 26.10.x (or 25.10.x, which is mandatory if you are using Alma/RHEL/Oracle Linux 8). -->
 <!-- and should be [upgraded](../installation/poller-update-upgrade.md). -->

## What happens if I do not update?

If you do not update your poller, you may miss important security fixes or improvements. Consider subscribing to [our security bulletins on our commmnity platform The Watch](https://thewatch.centreon.com/latest-security-bulletins-64).

## How often do you publish updates?

We publish updates for pollers regularly, ususally once a month, but we recommend that you check the [Centreon OnPrem Collect release notes](/docs/releases/centreon-os) every week.

Note that any breaking changes would be announced directly in the Centreon Cloud interface.
