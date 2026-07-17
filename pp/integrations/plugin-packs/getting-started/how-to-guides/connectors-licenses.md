---
id: connectors-licenses
title: Offline/online licenses and connectors
description: Learn the differences between offline and online licenses for Centreon monitoring connectors, and how to install or update connectors under each.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The installation procedures for monitoring connectors are slightly different depending on whether your license is offline or online. Here is a summary of their respective characteristics.

In all cases, adding a license (token for online licenses, license files for offline licenses) is done using the **Administration > Extensions > Manager** page.

## Online license

With an online license (all Cloud platforms, some OnPrem platforms):

* Your central server/SaaS platform must be connected to the internet.
* The **Configuration > Connectors > Monitoring Connectors** page always displays the complete catalog of monitoring connectors.
* Available updates are displayed automatically.

## Offline license

With an offline license (ONPrem platforms only):

* It is not mandatory that your platform has an internet connection (it can be located in a DMZ).
* The **Configuration > Connectors > Monitoring Connectors** page displays only the connectors whose `centreon-pack-*` packages are installed on the central platform.
* You do not automatically see or retrieve new connectors and updates for installed connectors. To retrieve new connectors and update existing ones, use the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 & 9" label="Alma / RHEL / Oracle Linux 8 & 9">

```shell
dnf install centreon-pack-*
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
apt install centreon-pack-*
```

</TabItem>
</Tabs>

Or, to only update the installed connectors:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 & 9" label="Alma / RHEL / Oracle Linux 8 & 9">

```shell
dnf update centreon-pack-*
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
apt update && apt install --only-upgrade centreon-pack*
```

</TabItem>
</Tabs>

> If your platform has no internet connection, you will need to install the updates from a mirror repository. Adapt [the following procedure](/docs/installation/offline) to the connectors repository.

## Connector updates and breaking changes

Bear in mind that some connector updates may introduce breaking changes. In this case, if you were using the connector and you update it, you'll need to modify its configuration so that it works again. Be sure to read the [connector release notes](../../releases/release-notes.md) before updating a connector.

Connectors for which an update is available are displayed with an arrow icon on a blue background: click on it to install the update.

## Automatic plugin installation

On the **Configuration > Connectors > Monitoring Connectors** page, if **Automatic plugin installation** is set to **ON**, plugins will be updated automatically when you deploy the configuration of a poller that monitors a host or service that uses this plugin.

## Types of licenses available for OnPrem and Cloud

| Version | Online license | Offline license |
| ------- |:--------------:|:---------------:|
| Cloud   |    &check;     |  X              |
| OnPrem  |    &check;     |  &check;        |

## How do I know what type of license I have?

If you have already installed your license in the past but don't remember what kind you have, go to **Administration > Extensions > Manager**.

* If you have a **See license** button, then your license is an online one.
* If you have an **Add token** button, then your licence is an offline one.
