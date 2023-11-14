---
id: network-netgear-sseries-snmp
title: Netgear SSeries SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack Netgear Smart Switches brings a host template:
* Net-Netgear-Sseries-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template                    | Description            | Default |
|:--------------|:------------------------------------|:-----------------------|:--------|
| Cpu           | Net-Netgear-Sseries-Cpu-SNMP        | Check cpu usage        | X       |
| Hardware      | Net-Netgear-Sseries-Hardware-SNMP   | Check hardware         | X       |
| Interfaces    | Net-Netgear-Sseries-Interfaces-SNMP | Check interfaces usage | X       |
| Memory        | Net-Netgear-Sseries-Memory-SNMP     | Check memory usage     |         |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Rule name                               | Description                                         |
|:----------------------------------------|:----------------------------------------------------|
| Net-Netgear-Sseries-SNMP-Interface-Name | Discover network interfaces and monitor utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                   | Unit  |
| :---------------------------- | :---- |
| cpu.utilization.5s.percentage | %     |
| cpu.utilization.1m.percentage | %     |
| cpu.utilization.5m.percentage | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                                    | Unit  |
| :--------------------------------------------- | :---- |
| fan status                                     |       |
| *fan_instance*#hardware.fan.speed.rpm          | rpm   |
| power supply status                            |       |
| temperature status                             |       |
| *sensor_instance*#hardware.temperature.celsius | C     |

</TabItem>
<TabItem value="Interface" label="Interface">

| Metric name                                               | Unit  |
| :-------------------------------------------------------- | :---- |
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       |  b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      |  b/s  |
| *interface_name*#interface.packets.in.error.percentage    |  %    |
| *interface_name*#interface.packets.in.discard.percentage  |  %    |
| *interface_name*#interface.packets.out.error.percentage   |  %    |
| *interface_name*#interface.packets.out.discard.percentage |  %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Unit  |
| :---------------------- | :---- |
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

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

1. Install the Centreon package on every Centreon poller expected to monitor **Netgear Smart Switches** resources:

```bash
yum install centreon-plugin-Network-Netgear-Sseries-Snmp
```

2. On the Centreon web interface, install the **Netgear SSeries SNMP** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor **Netgear Smart Switches** resources:

```bash
yum install centreon-plugin-Network-Netgear-Sseries-Snmp
```

2. Install the **Netgear SSeries SNMP** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-netgear-sseries-snmp
```

3. On the Centreon web interface, install the **Netgear SSeries SNMP** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Netgear Smart Switches** equipment settings.
* Apply the **Net-Netgear-Sseries-SNMP-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters 
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory | Name             | Description                                              |
| :-------- | :--------------- | :------------------------------------------------------- |
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_netgear_sseries_snmp.pl \
    --plugin=network::netgear::sseries::snmp \
    --mode=cpu \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community'
```

The expected command output is shown below:

```bash
OK: cpu average usage: 48.83 % (5s), 40.43 % (1m), 19.85 % (5m) | 'cpu.utilization.5s.percentage'=48.83%;;;0;100 'cpu.utilization.1m.percentage'=40.43%;;;0;100 'cpu.utilization.5m.percentage'=19.85%;;;0;100
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_netgear_sseries_snmp.pl \
    --plugin=network::netgear::sseries::snmp \
    --mode=cpu \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_netgear_sseries_snmp.pl \
    --plugin=network::netgear::sseries::snmp \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
