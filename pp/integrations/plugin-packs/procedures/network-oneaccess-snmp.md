---
id: network-oneaccess-snmp
title: OneAccess SNMP
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack OneAccess SNMP brings 1 host template:
* Net-Oneaccess-SNMP-custom

It brings the following Service Templates:

| Service Alias | Service Template               | Default | Discovery |
|:--------------|:-------------------------------|:--------|:----------|
| Cells-Radio   | Net-Oneaccess-Cells-Radio-SNMP |         |           |
| Cpu           | Net-Oneaccess-Cpu-SNMP         | X       |           |
| Interfaces    | Net-Oneaccess-Interfaces-SNMP  |         | X         |
| Memory        | Net-Oneaccess-Memory-SNMP      | X       |           |

### Discovery rules

| Rule name                         | Description                                         |
|:----------------------------------|:----------------------------------------------------|
| Net-Oneaccess-SNMP-Interface-Name | Discover network interfaces and monitor utilization |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cells-Radio" label="Cells-Radio">

| Metric name                                    | Description                                 | Unit  |
| :--------------------------------------------- | :------------------------------------------ | :---- |
| modules.cellradio.detected.count               | Number of cellular radio modules detected   |       |
| status                                         | Status of the SIM card and quality signal   |       |
| *module_id~operator*#module.cellradio.rsrp.dbm | Current reference signal receive power      | dBm   |
| *module_id~operator*#module.cellradio.rssi.dbm | Current received signal strength indication | dBm   |
| *module_id~operator*#module.cellradio.snr.db   | Current signal-to-noise ratio               | dB    |

</TabItem>

<TabItem value="Cpu" label="Cpu">

| Metric name                | Description     | Unit  |
| :------------------------- | :-------------- | :---- |
| cpu.utilization.percentage | CPU utilization | %     |

</TabItem>

<TabItem value="Interfaces" label="Interfaces">

| Metric name                                               | Description                                             | Unit |
|:--------------------------------------------------------- |:------------------------------------------------------- |:---- |
| status                                                    | Status of the interface                                 |      |
| *interface_name*#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface            | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface            | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | Incoming errored packets going through the interface    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface  | %    |
| *interface_name*#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface    | %    |
| *interface_name*#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface  | %    |

</TabItem>

<TabItem value="Memory" label="Memory">

| Metric name             | Description                | Unit  |
| :---------------------- | :------------------------- | :---- |
| memory.usage.bytes      | Memory usage               | B     |

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

2. On the Centreon Web interface, install the **OneAccess SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

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

3. On the Centreon Web interface, install the **OneAccess SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **OneAccess SNMP** equipment settings
* Select the **Net-Oneaccess-SNMP-custom** template to apply to the Host

If you are using SNMP Version 3, use the SNMPEXTRAOPTIONS Macro to configure
your own SNMPv3 credentials combo.

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
in the [dedicated page](../getting-started/how-to-guides/troubleshooting-plugins.md#snmp-checks)