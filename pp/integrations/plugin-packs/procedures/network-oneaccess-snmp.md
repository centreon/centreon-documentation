---
id: network-oneaccess-snmp
title: OneAccess SNMP
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **OneAccess** brings 1 host template:
* Net-Oneaccess-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template               | Description                  | Default |
|:--------------|:-------------------------------|:-----------------------------|:--------|
| cells-Radio   | Net-Oneaccess-Cells-Radio-SNMP | Check cellular radio modules |         |
| Cpu           | Net-Oneaccess-Cpu-SNMP         | Check processor usage        | X       |
| Interfaces    | Net-Oneaccess-Interfaces-SNMP  | Check interfaces             |         |
| Memory        | Net-Oneaccess-Memory-SNMP      | Check memory usage           | X       |
| Rtt-Probes    | Net-Oneaccess-Rtt-Probes-SNMP  | Check round-trip time probes |         |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Rule name                         | Description                                         |
|:----------------------------------|:----------------------------------------------------|
| Net-Oneaccess-SNMP-Interface-Name | Discover network interfaces and monitor utilization |
| Net-Oneaccess-SNMP-Rtt-Probe-Tag  | Discover probes and monitor status                  |


More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cells-Radio" label="Cells-Radio">

| Metric name                                    | Unit  |
| :--------------------------------------------- | :---- |
| modules.cellradio.detected.count               |       |
| status                                         |       |
| *module_id~operator*#module.cellradio.rsrp.dbm | dBm   |
| *module_id~operator*#module.cellradio.rssi.dbm | dBm   |
| *module_id~operator*#module.cellradio.snr.db   | dB    |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                | Unit  |
| :------------------------- | :---- |
| cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                               | Unit |
|:--------------------------------------------------------- |:---- |
| status                                                    |      |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | %    |
| *interface_name*#interface.packets.out.error.percentage   | %    |
| *interface_name*#interface.packets.out.discard.percentage | %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Unit  |
| :---------------------- | :---- |
| memory.usage.bytes      | B     |

</TabItem>
<TabItem value="Rtt-Probe" label="Rtt-Probe">

| Metric name                                   | Unit  |
| :-------------------------------------------- | :---- |
| probe status                                  |       |
| *tag_name*#probe.completion.time.milliseconds | ms    |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this Pack, the SNMP service must be properly configured on your device.

### Network flow

The target equipment must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **OneAccess SNMP** resources:

```bash
yum install centreon-plugin-Network-Oneaccess-Snmp
```

2. On the Centreon web interface, install the **OneAccess SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **OneAccess SNMP** resources:

```bash
yum install centreon-plugin-Network-Oneaccess-Snmp
```

2. Install the **OneAccess SNMP** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-oneaccess-snmp
```

3. On the Centreon web interface, install the **OneAccess SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address / DNS** fields according to your **OneAccess SNMP** equipment settings
* Apply the **Net-Oneaccess-SNMP-custom** template to the host

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters 
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory | Name             | Description                                              |
|:----------|:-----------------|:---------------------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo              |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon Poller CLI using the
**centreon-engine** user account and test the Plugin by running the following
command:

```bash
/usr/lib/centreon/plugins/centreon_oneaccess.pl \
    --plugin=network::oneaccess::snmp::plugin \
    --mode=cpu \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning='' \
    --critical='' \
    --verbose
```

The expected command output is shown below:

```bash
OK: CPU Usage: 31 % | 'cpu.utilization.percentage'=31%;;;0;100
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_oneaccess.pl \
    --plugin=network::oneaccess::snmp::plugin \
    --mode=cpu \
    --help
```

All available options for a given mode can be displayed by adding the
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_oneaccess.pl \
    --plugin=network::oneaccess::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
on the [dedicated page](../getting-started/how-to-guides/troubleshooting-plugins.md#troubleshooting-snmp).
