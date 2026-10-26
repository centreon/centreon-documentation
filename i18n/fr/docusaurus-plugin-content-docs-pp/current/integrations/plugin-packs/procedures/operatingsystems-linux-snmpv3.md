---
id: operatingsystems-linux-snmpv3
title: Linux SNMP v3
description: "Ce connecteur de supervision Linux via SNMP v3 est obsolète et a été remplacé par le connecteur Linux SNMP."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Ce connecteur de supervision n'est plus maintenu et ne doit pas être utilisé. Il a été remplacé par le connecteur [Linux SNMP](operatingsystems-linux-snmp.md).

## Historique des modifications

- [26.06](../releases/release-notes.md#2026-06) - Enhancement: Deprecated with the enhancement of [**Linux SNMP**](./operatingsystems-linux-snmp.md).
- [26.04](../releases/release-notes.md#2026-04) - Enhancement: Added `--force-rfc` option to allow choosing a specific RFC in **tcpcon** mode (issue [#5693](https://github.com/centreon/centreon-plugins/issues/5693)).
- [24.10](../releases/release-notes.md#2024-10) - Enhancement: Added an option `force-64bits-counters` to switch to 64-bit counters for **memory** mode.
- [23.12](../releases/release-notes.md#2023-12) - New connector: [EXPERIMENTAL] - Initial release of Linux SNMP v3. This experimental plugin contains a host template with native v3 custom macros. Once we'll have gathered some feedback, we'll integrate this template into the [**Linux SNMP**](./operatingsystems-linux-snmp.md) connector.
