---
id: network-dell-nseries-snmp
title: Dell N-series SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack Dell N-series brings a host template:
* Net-Dell-Nseries-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template                    | Default | Discovery |
|:--------------|:------------------------------------|:--------|:----------|
| Cpu           | Net-Dell-Nseries-Cpu-SNMP           | X       |           |
| Environment   | Net-Dell-Nseries-Environment-SNMP   | X       |           |
| Global-Status | Net-Dell-Nseries-Global-Status-SNMP |         |           |
| Interfaces    | Net-Dell-Nseries-Interfaces-SNMP    |         | X         |
| Memory        | Net-Dell-Nseries-Memory-SNMP        | X       |           |
| Uptime        | Net-Dell-Nseries-Uptime-SNMP        |         |           |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Rule name                            | Description                                         |
|:-------------------------------------|:----------------------------------------------------|
| Net-Dell-Nseries-SNMP-Interface-Name | Discover network interfaces and monitor utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                   | Description                            | Unit  |
| :---------------------------- | :------------------------------------- | :---- |
| cpu.utilization.5s.percentage | CPU utilization for the last 5 seconds | %     |
| cpu.utilization.1m.percentage | CPU utilization for the last minute    | %     |
| cpu.utilization.5m.percentage | CPU utilization for the last 5 minutes | %     |

</TabItem>
<TabItem value="Environment" label="Environment">

| Metric name                                    | Description                     | Unit  |
| :--------------------------------------------- | :------------------------------ | :---- |
| fan status                                     | Status of the fan               |       |
| *fan_instance*#hardware.fan.speed.rpm          | Speed of the fan                | rpm   |
| psu status                                     | Status of the power supply      |       |
| temperature status                             | Status/ of the probe sensor     |       |
| *sensor_instance*#hardware.temperature.celsius | Temperature of the probe sensor | C     |

</TabItem>
<TabItem value="Global-Status" label="Global-Status">

| Metric name   | Description                      | Unit  |
| :------------ | :------------------------------- | :---- |
| global status | Current overall equipment status |       |

</TabItem>
<TabItem value="Interface" label="Interface">

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

| Metric name             | Description                              | Unit  |
| :---------------------  | :--------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage on the device               | B     |

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

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Dell N-series SNMP** resources:

```bash
yum install centreon-plugin-Network-Dell-Nseries-Snmp
```

2. On the Centreon web interface, install the **Dell N-series SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Dell N-series SNMP** resources:

```bash
yum install centreon-plugin-Network-Dell-Nseries-Snmp
```

2. Install the **Dell N-series SNMP** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-dell-nseries-snmp
```

3. On the Centreon web interface, install the **Dell N-series SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Dell N-series SNMP** equipment settings.
* Apply the **Net-Dell-Nseries-SNMP-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name             | Description                                              |
| :-------- | :--------------- | :------------------------------------------------------- |
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_dell_nseries_snmp.pl \
    --plugin=network::dell::nseries::snmp::plugin \
    --mode=cpu \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning='' \
    --critical=''
```

The expected command output is shown below:

```bash
OK: CPU Usage: 44.13%% (5sec), 34.23%% (1min), 24.10% (5min) | 'cpu.utilization.5s.percentage'=44.13%;;;0;100 'cpu.utilization.1m.percentage'=34.23%;;;0;100 'cpu.utilization.5m.percentage'=24.10%;;;0;100 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_nseries_snmp.pl \
    --plugin=network::dell::nseries::snmp::plugin \
    --mode=cpu \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_nseries_snmp.pl \
    --plugin=network::dell::nseries::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
