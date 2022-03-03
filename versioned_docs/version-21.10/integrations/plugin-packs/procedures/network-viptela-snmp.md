---
id: network-viptela-snmp
title: Viptela SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack Viptela SNMP brings 1 host template:
* Net-Viptela-SNMP-custom

It brings the following Service Templates:

| Service Alias       | Service Template                     | Default | Discovery |
|:--------------------|:-------------------------------------|:--------|:----------|
| Control-Connections | Net-Viptela-Control-Connections-SNMP |         |           |
| Cpu                 | Net-Viptela-Cpu-SNMP                 | X       |           |
| Disk                | Net-Viptela-Disk-SNMP                | X       |           |
| Gre-Tunnels         | Net-Viptela-Gre-Tunnels-SNMP         |         | X         |
| Hardware            | Net-Viptela-Hardware-SNMP            | X       |           |
| Interfaces          | Net-Viptela-Interfaces-SNMP          |         | X         |
| Memory              | Net-Viptela-Memory-SNMP              | X       |           |
| Uptime              | Net-Viptela-Uptime-SNMP              | X       |           |

### Discovery rules

| Rule name                        | Description                                         |
|:---------------------------------|:----------------------------------------------------|
| Net-Viptela-SNMP-Interface-Name  | Discover network interfaces and monitor utilization |
| Net-Viptela-SNMP-Gre-Tunnel-Name | Discover GRE tunnels and monitor utilization        |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Control-Connections" label="Control-Connections">

| Metric name                             | Description                                             | Unit  |
| :-------------------------------------- | :------------------------------------------------------ | :---- |
| control.connections.detected.count      | Number of control connections detected                  |       |
| control.connections.down.count          | Number of control connections with status down          |       |
| control.connections.connect.count       | Number of control connections with status connect       |       |
| control.connections.handshake.count     | Number of control connections with status handshake     |       |
| control.connections.trying.count        | Number of control connections with status trying        |       |
| control.connections.challenge.count     | Number of control connections with status challenge     |       |
| control.connections.challengeResp.count | Number of control connections with status challengeResp |       |
| control.connections.challengeAck.count  | Number of control connections with status challengeAck  |       |
| control.connections.up.count            | Number of control connections with status up            |       |
| control.connections.tearDown.count      | Number of control connections with status tearDown      |       |
| status                                  | Status for the control connection                       |       |

</TabItem>

<TabItem value="Cpu" label="Cpu">

| Metric name                | Description     | Unit  |
| :------------------------- | :-------------- | :---- |
| cpu.utilization.percentage | CPU utilization | %     |

</TabItem>

<TabItem value="Disk" label="Disk">

| Metric name           | Description              | Unit  |
| :-------------------- | :----------------------- | :---- |
| disk.usage.bytes      | Disk usage               | B     |
| disk.free.bytes       | Free disk                | B     |
| disk.usage.percentage | Disk usage in percentage | %     |

</TabItem>

<TabItem value="Gre-Tunnels" label="Gre-Tunnels">

| Metric name                                      | Description                                       | Unit  |
| :----------------------------------------------- | :------------------------------------------------ | :---- |
| gre_tunnels.detected.count                       | Number of GRE tunnels detected                    |       |
| gre_tunnels.operational.up.count                 | Number of GRE tunnels with status up              |       |
| gre_tunnels.operational.down.count               | Number of GRE tunnels with status down            |       |
| gre_tunnels.operational.invalid.count            | Number of GRE tunnels with status invalid         |       |
| status                                           | Status for the GRE tunnel                         |       |
| *source_ip~dest_ip*#gre_tunnel.packets.in.count  | Number of incoming packets for the GRE tunnel     |       |
| *source_ip~dest_ip*#gre_tunnel.packets.out.count | Number of outgoing packets for for the GRE tunnel |       |

</TabItem>

<TabItem value="Hardware" label="Hardware">

| Metric name                               | Description                                   | Unit |
|:----------------------------------------- |:--------------------------------------------- | :--- |
| fan status                                | Status of the fan                             |      |
| led status                                | Status of the LED                             |      |
| nim status                                | Status of the NIM                             |      |
| pem status                                | Status of the PEM                             |      |
| pim status                                | Status of the PIM                             |      |
| usb status                                | Status of the USB                             |      |
| temperature status                        | Status of temperature probes                  |      |
| *probe_name*#hardware.temperature.celsius | Current temperature                           | C    |

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
| memory.free.bytes       | Free memory                | B     |
| memory.usage.percentage | Memory usage in percentage | %     |
| memory.buffer.bytes     | Buffers memory             | B     |
| memory.cached.bytes     | Cached memory              | B     |

</TabItem>

<TabItem value="Uptime" label="Uptime">

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

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

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Viptela SNMP** resources:

```bash
yum install centreon-plugin-Network-Viptela-Snmp
```

2. On the Centreon Web interface, install the **Viptela SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Viptela SNMP** resources:

```bash
yum install centreon-plugin-Network-Viptela-Snmp
```

2. Install the **Viptela SNMP** Centreon Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-network-viptela-snmp
```

3. On the Centreon Web interface, install the **Viptela SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Viptela SNMP** server settings
* Select the **Net-Viptela-SNMP-custom** template to apply to the Host

If you are using SNMP Version 3, use the SNMPEXTRAOPTIONS Macro to configure
your own SNMPv3 credentials combo.

| Mandatory | Name             | Description                                              |
|:----------|:-----------------|:---------------------------------------------------------|
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins/centreon_viptela_snmp.pl \
    --plugin=network::viptela::snmp::plugin \
    --mode=cpu \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-cpu-utilization='' \
    --critical-cpu-utilization='' \
    --verbose
```

The expected command output is shown below:

```bash
OK: Cpu utilization: 95.00% | 'cpu.utilization.percentage'=95%;;;0;100
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_viptela_snmp.pl \
    --plugin=network::viptela::snmp::plugin \
    --mode=cpu \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_viptela_snmp.pl \
    --plugin=network::viptela::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.md#snmp-checks)
