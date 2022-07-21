---
id: network-switchs-alcatel-omniswitch-snmp
title: Alcatel Omniswitch
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Alcatel Omniswitch** brings a host template:

* Net-Alcatel-OmniSwitch-SNMP-custom

It brings the following service templates:

| Service Alias              | Service Template                                       | Service Description                          | Default | Discovery |
|:---------------------------|:-------------------------------------------------------|:---------------------------------------------|:--------|:----------|
| Traffic-Global             | Net-Alcatel-Omniswitc-Traffic-Global-SNMP              | Check traffic of multiple network interfaces |         |           |
| Cpu                        | Net-Alcatel-Omniswitch-Cpu-SNMP                        | Check CPU usage                              | X       |           |
| Flash-Memory               | Net-Alcatel-Omniswitch-Flash-Memory-SNMP               | Check Flash memory usage                     | X       |           |
| Hardware                   | Net-Alcatel-Omniswitch-Hardware-SNMP                   | Check hardware state                         | X       |           |
| Memory                     | Net-Alcatel-Omniswitch-Memory-SNMP                     | Check memory usage                           | X       |           |
| Packet-Errors-Generic-Id   | Net-Alcatel-Omniswitch-Packet-Errors-Generic-Id-SNMP   | Check packets on errors                      |         |           |
| Packet-Errors-Generic-Name | Net-Alcatel-Omniswitch-Packet-Errors-Generic-Name-SNMP | Check packets on errors                      |         |           |
| Packet-Errors-Global       | Net-Alcatel-Omniswitch-Packet-Errors-Global-SNMP       | Check packets on errors                      |         | X         |
| Spanning-Tree              | Net-Alcatel-Omniswitch-SpanningTree-SNMP               | Check Spanning Tree state on interfaces      |         |           |
| Traffic-Generic-Id         | Net-Alcatel-Omniswitch-Traffic-Generic-Id-SNMP         | Check traffic of an network interface        |         |           |
| Traffic-Generic-Name       | Net-Alcatel-Omniswitch-Traffic-Generic-Name-SNMP       | Check traffic of an network interface        |         |           |
| Traffic-Global             | Net-Alcatel-Omniswitch-Traffic-Global-SNMP             | Check traffic of an network interface        |         | X         |

### Discovery rules

| Rule Name                                      | Description                                                           |
|:-----------------------------------------------|:----------------------------------------------------------------------|
| Net-Alcatel-Omniswitch-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |
| Net-Alcatel-Omniswitch-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization         |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

Could not retrive metrics

</TabItem>
<TabItem value="Flash-Memory" label="Flash-Memory">

| Metric Name                | Unit  |
|:---------------------------|:------|
| *memory*#flash.usage.bytes | B     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

Could not retrive metrics

</TabItem>
<TabItem value="Memory" label="Memory">

Could not retrive metrics

</TabItem>
<TabItem value="Packet-Errors-Generic-Id" label="Packet-Errors-Generic-Id">

| Metric Name                                    | Unit  |
|:-----------------------------------------------|:------|
| *int*#interface.packets.in.discard.percentage  | %     |
| *int*#interface.packets.in.error.percentage    | %     |
| *int*#interface.packets.out.discard.percentage | %     |
| *int*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Packet-Errors-Generic-Name" label="Packet-Errors-Generic-Name">

| Metric Name                                    | Unit  |
|:-----------------------------------------------|:------|
| *int*#interface.packets.in.discard.percentage  | %     |
| *int*#interface.packets.in.error.percentage    | %     |
| *int*#interface.packets.out.discard.percentage | %     |
| *int*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Packet-Errors-Global" label="Packet-Errors-Global">

| Metric Name                                    | Unit  |
|:-----------------------------------------------|:------|
| *int*#interface.packets.in.discard.percentage  | %     |
| *int*#interface.packets.in.error.percentage    | %     |
| *int*#interface.packets.out.discard.percentage | %     |
| *int*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Metric Name            | Unit  |
|:-----------------------|:------|
| *spanningtrees*#status |       |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Alcatel Omniswitch**
server. Please refer to the official documentation from Alcatel:
* [OmniSwitch](https://www.al-enterprise.com/en/search#q=omniswitch&t=all&sort=relevancy)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Alcatel Omniswitch** resources:

```bash
yum install centreon-plugin-Network-Switchs-Alcatel-Omniswitch-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Alcatel Omniswitch** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Alcatel Omniswitch** resources:

```bash
yum install centreon-plugin-Network-Switchs-Alcatel-Omniswitch-Snmp
```

2. Install the **Alcatel Omniswitch** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-network-switchs-alcatel-omniswitch-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Alcatel Omniswitch** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Alcatel Omniswitch** server settings.
* Apply the **Net-Alcatel-OmniSwitch-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
your own SNMPv3 credentials combo.

| Mandatory   | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_alcatel_omniswitch_snmp.pl \
    --plugin=network::alcatel::omniswitch::snmp::plugin \
    --mode=interfaces \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --interface='' \
    --name \
    --warning-in-traffic='' \
    --critical-in-traffic='' \
    --warning-out-traffic='' \
    --critical-out-traffic='' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Traffic In : 321.02b/s (-) Traffic Out : 382.02b/s (-) | 'interface.traffic.in.bitspersecond'=9000b/s;;;0; 'interface.traffic.out.bitspersecond'=9000b/s;;;0; 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_alcatel_omniswitch_snmp.pl \
    --plugin=network::alcatel::omniswitch::snmp::plugin \
    --mode=interfaces \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_alcatel_omniswitch_snmp.pl \
    --plugin=network::alcatel::omniswitch::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.