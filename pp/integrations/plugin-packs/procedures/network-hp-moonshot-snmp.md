---
id: network-hp-moonshot-snmp
title: HP Moonshot SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Monitored Objects

The Centreon Pack **HP Moonshot SNMP** brings a host template:
* Net-Hp-Moonshot-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template                | Description                       | Default |
|:--------------|:--------------------------------|:----------------------------------|:--------|
| Cpu           | Net-Hp-Moonshot-Cpu-SNMP        | Check CPU                         | X       |
| Interfaces    | Net-Hp-Moonshot-Interfaces-SNMP | Check interfaces                  |         |
| Memory        | Net-Hp-Moonshot-Memory-SNMP     | Check memory                      | X       |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Rule name                           | Description                                         |
|:------------------------------------|:----------------------------------------------------|
| Net-Hp-Moonshot-SNMP-Interface-Name | Discover network interfaces and monitor usage|

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                    | Unit |
| :----------------------------- | :--- |
| cpu.utilization.5s.percentage  | %    |
| cpu.utilization.1m.percentage  | %    |
| cpu.utilization.15m.percentage | %    |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

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

| Metric name             | Unit |
| :---------------------- | :--- |
| memory.usage.bytes      | B    |
| memory.free.bytes       | B    |
| memory.usage.percentage | %    |

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

1. Install the Centreon package on every Centreon poller expected to monitor **HP Moonshot** resources:

```bash
yum install centreon-plugin-Network-Hp-Moonshot-Snmp
```

2. On the Centreon web interface, install the **HP Moonshot SNMP** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor **HP Moonshot** resources:

```bash
yum install centreon-plugin-Network-Hp-Moonshot-Snmp
```

2. Install the **HP Moonshot SNMP** Centreon Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-network-hp-moonshot-snmp
```

3. On the Centreon web interface, install the **HP Moonshot SNMP** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address / DNS** fields according to your **HP Moonshot** equipment settings.
* Apply the **Net-Hp-Moonshot-SNMP-custom** template to the host.
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
/usr/lib/centreon/plugins/centreon_hp_moonshot_snmp.pl \
    --plugin=network::hp::moonshot::snmp::plugin \
    --mode=cpu \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='hp_ro' \
    --warning-cpu-utilization-15m='90' \
    --critical-cpu-utilization-15m='95' \
    --verbose
```

The expected command output is shown below:

```bash
OK: cpu average usage: 27.13 % (5s), 22.34 % (1m), 17.98 % (15m) | 'cpu.utilization.5s.percentage'=27.13%;;;0;100 'cpu.utilization.1m.percentage'=22.34%;;;0;100 'cpu.utilization.15m.percentage'=17.98%;0:90;0:95;0;100
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hp_moonshot_snmp.pl \
    --plugin=network::hp::moonshot::snmp::plugin \
    --mode=cpu \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_hp_moonshot_snmp.pl \
    --plugin=network::hp::moonshot::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
