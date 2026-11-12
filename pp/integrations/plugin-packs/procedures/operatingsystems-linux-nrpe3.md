---
id: operatingsystems-linux-nrpe3
title: Linux NRPE3 (deprecated)
description: "Deprecated Linux NRPE3 monitoring connector: no longer maintained and should not be used. Use the Linux NRPE4 connector instead to monitor Linux hosts."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> This Monitoring Connector is no longer maintained and should not be used. It has been replaced by the [Linux NRPE4](operatingsystems-linux-nrpe4.md) connector.

## Changelog

- [25.10](../releases/release-notes.md#2025-10) - Enhancement: Now deprecated, please use [**Linux NRPE4**](./operatingsystems-linux-nrpe4.md).
- [24.03](../releases/release-notes.md#2024-03) - Enhancement: Added Open-Files, Pending-Updates and Systemd-Journal service templates. This monitoring connector is now deprecated. For a more standard deployment, monitor your Linux servers using **[Linux NRPE4](./operatingsystems-linux-nrpe4.md)**.
- [23.01](../releases/release-notes.md#2023-01) - Enhancement: Updated diskio command options.
- [22.07](../releases/release-notes.md#2022-07) - Enhancement: Added Ntp command and template to Linux NRPE3 Pack.
- [22.06](../releases/release-notes.md#2022-06) - Enhancement: Added new check: systemd-sc-status.
