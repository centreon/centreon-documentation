---
id: network-switchs-brocade-snmp
title: Brocade Switch
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Brocade Switch** brings a host template:

* Net-Brocade-SNMP-custom

It brings the following service templates:

| Service Alias              | Service Template                            | Service Description                                                                          | Default | Discovery |
|:---------------------------|:--------------------------------------------|:---------------------------------------------------------------------------------------------|:--------|:----------|
| Cpu                        | Net-Brocade-Cpu-SNMP                        | Check the rate of utilization of CPU for the machine                                         | X       |           |
| Hardware                   | Net-Brocade-Hardware-SNMP                   | Check hardware state                                                                         | X       |           |
| Memory                     | Net-Brocade-Memory-SNMP                     | Check memory usage                                                                           | X       |           |
| Packet-Errors-Generic-Name | Net-Brocade-Packet-Errors-Generic-Name-SNMP | Check packets on errors                                                                      |         |           |
| Packet-Errors-Global       | Net-Brocade-Packet-Errors-Global-SNMP       | Check packets on errors                                                                      |         | X         |
| Traffic-Generic-ID         | Net-Brocade-Traffic-Generic-ID-SNMP         | Check the bandwidth of the interface. For each checks the name of the interface will appear  |         |           |
| Traffic-Global             | Net-Brocade-Traffic-Global-SNMP             | Check the bandwidth of interfaces. For each checks the name of the interface will appear     |         | X         |
| Traffic-Generic-Name       | Net-brocade-Traffic-Generic-Name-SNMP       | Check the bandwidth of the interface. For each checks the name of the interface will appear  |         |           |

### Discovery rules

| Rule Name                           | Description                                                           |
|:------------------------------------|:----------------------------------------------------------------------|
| Net-Brocade-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |
| Net-Brocade-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization         |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric Name | Unit  |
|:------------|:------|
| warning     | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

Could not retrive metrics

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name | Unit  |
|:------------|:------|
| warning     | %     |

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
<TabItem value="Traffic-Generic-ID" label="Traffic-Generic-ID">

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

To use this pack, the SNMP service must be properly configured on your **Brocade Switch**
server. Please refer to the official documentation from Broadcom:
* [Broadcom](https://www.broadcom.com/products/fibre-channel-networking/switches)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Brocade Switch** resources:

```bash
yum install centreon-plugin-Network-Switchs-Brocade-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Brocade Switch** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Brocade Switch** resources:

```bash
yum install centreon-plugin-Network-Switchs-Brocade-Snmp
```

2. Install the **Brocade Switch** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-network-switchs-brocade-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Brocade Switch** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Brocade Switch** server settings.
* Apply the **Net-Brocade-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins//centreon_brocade.pl \
    --plugin=network::brocade::snmp::plugin \
    --mode=interfaces \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --interface='' \
    --name \
    --add-status \
    --add-traffic \
    --critical-status='' \
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
/usr/lib/centreon/plugins//centreon_brocade.pl \
    --plugin=network::brocade::snmp::plugin \
    --mode=interfaces \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_brocade.pl \
    --plugin=network::brocade::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.