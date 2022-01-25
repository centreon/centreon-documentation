---
id: network-lenovo-rackswitch-snmp
title: Lenovo RackSwitch SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Pack Lenovo RackSwitch SNMP brings 1 host template:
* Net-Lenovo-Rackswitch-SNMP-custom

It brings the following Service Templates:

| Service Alias | Service Template                      | Default | Discovery |
|:--------------|:--------------------------------------|:--------|:----------|
| Cpu           | Net-Lenovo-Rackswitch-Cpu-SNMP        | X       |           |
| Hardware      | Net-Lenovo-Rackswitch-Hardware-SNMP   | X       |           |
| Interfaces    | Net-Lenovo-Rackswitch-Interfaces-SNMP |         | X         |
| Memory        | Net-Lenovo-Rackswitch-Memory-SNMP     | X       |           |
| Uptime        | Net-Lenovo-Rackswitch-Uptime-SNMP     | X       |           |

### Discovery rules

| Rule name                                 | Description                                         |
|:------------------------------------------|:----------------------------------------------------|
| Net-Lenovo-Rackswitch-SNMP-Interface-Name | Discover network interfaces and monitor utilization |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                   | Description                            | Unit  |
| :---------------------------- | :------------------------------------- | :---- |
| cpu.utilization.5s.percentage | CPU utilization for the last 5 seconds | %     |
| cpu.utilization.1m.percentage | CPU utilization for the last minute    | %     |
| cpu.utilization.5m.percentage | CPU utilization for the last 5 minutes | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                                      | Description                        | Unit  |
| :----------------------------------------------- | :--------------------------------- | :---- |
| status                                           | Global health status of the device |       |
| *sensor_num*#hardware.sensor.temperature.celsius | Temperature of the sensor          | C     |
| *fan_num*#hardware.fan.speed.rpm                 | Speed of the fan                   | rpm   |

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

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your device.

### Network flow

The target equipment must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Lenovo RackSwitch SNMP** resources:

```bash
yum install centreon-plugin-Network-Lenovo-Rackswitch-Snmp
```

2. On the Centreon Web interface, install the **Lenovo RackSwitch SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Lenovo RackSwitch SNMP** resources:

```bash
yum install centreon-plugin-Network-Lenovo-Rackswitch-Snmp
```

2. Install the **Lenovo RackSwitch SNMP** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-lenovo-rackswitch-snmp
```

3. On the Centreon Web interface, install the **Lenovo RackSwitch SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Lenovo RackSwitch SNMP** server settings
* Select the **Net-Lenovo-Rackswitch-SNMP-custom** template to apply to the Host

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
/usr/lib/centreon/plugins/centreon_lenovo_rackswitch_snmp.pl \
    --plugin=network::lenovo::rackswitch::snmp::plugin \
    --mode=memory \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-usage-prct='' \
    --critical-usage-prct='' \
    --verbose
```

The expected command output is shown below:

```bash
OK: Memory total: 502.43 MB used: 164.67 MB (32.77%) free: 337.76 MB (67.23%) | 'memory.usage.bytes'=172666880B;;;0;526831616 'memory.free.bytes'=354164736B;;;0;526831616 'memory.usage.percentage'=32.77%;;;0;100
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_lenovo_rackswitch_snmp.pl \
    --plugin=network::lenovo::rackswitch::snmp::plugin \
    --mode=memory \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_lenovo_rackswitch_snmp.pl \
    --plugin=network::lenovo::rackswitch::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins#snmp-checks)
