---
id: operatingsystems-linux-nrpe3
title: Linux NRPE3 (déprécié)
description: "Ce connecteur de supervision Linux NRPE3 est déprécié et n'est plus maintenu ; utilisez le connecteur Linux NRPE4 à la place."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Ce connecteur de supervision n'est plus maintenu et ne doit pas être utilisé. Il a été remplacé par le connecteur [Linux NRPE4](operatingsystems-linux-nrpe4.md).

## Historique des modifications

- [25.10](../releases/release-notes.md#2025-10) - Enhancement: Now deprecated, please use [**Linux NRPE4**](./operatingsystems-linux-nrpe4.md).
- [24.03](../releases/release-notes.md#2024-03) - Enhancement: Added Open-Files, Pending-Updates and Systemd-Journal service templates. This monitoring connector is now deprecated. For a more standard deployment, monitor your Linux servers using **[Linux NRPE4](./operatingsystems-linux-nrpe4.md)**.
- [23.01](../releases/release-notes.md#2023-01) - Enhancement: update diskio command options.
- [22.07](../releases/release-notes.md#2022-07) - Enhancement: Added Ntp command and template to Linux NRPE3 Pack.
- [22.06](../releases/release-notes.md#2022-06) - Enhancement: Add new check: systemd-sc-status.
