---
id: network-aruba-aoscx-snmp
title: ArubaOS-CX SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Monitored Objects

The Centreon Pack **ArubaOS-CX SNMP** brings a host template:
* Net-Aruba-Aoscx-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template                | Description                       | Default |
|:--------------|:--------------------------------|:----------------------------------|:--------|
| Cpu           | Net-Aruba-Aoscx-Cpu-SNMP        | Check cpu                         | X       |
| Hardware      | Net-Aruba-Aoscx-Hardware-SNMP   | Check hardware                    | X       |
| Interfaces    | Net-Aruba-Aoscx-Interfaces-SNMP | Check interfaces                  |         |
| Memory        | Net-Aruba-Aoscx-Memory-SNMP     | Check memory                      | X       |
| Vsf           | Net-Aruba-Aoscx-Vsf-SNMP        | Check virtual switching fabric    | X       |
| Vsx           | Net-Aruba-Aoscx-Vsx-SNMP        | Check virtual switching extension | X       |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Rule name                           | Description                                         |
|:------------------------------------|:----------------------------------------------------|
| Net-Aruba-Aoscx-SNMP-Interface-Name | Discover network interfaces and monitor utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                              | Unit |
| :--------------------------------------- | :--- |
| *module_name*#cpu.utilization.percentage | %    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                                | Unit |
| :----------------------------------------- | :--- |
| *fan_name*#hardware.fan.speed.rpm          | rpm  |
| fan tray status                            |      |
| psu status                                 |      |
| *psu_name*#hardware.psu.power.watt         | W    |
| temperature status                         |      |
| *sensor_name*#hardware.temperature.celsius | C    |

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

| Metric name                           | Unit |
| :------------------------------------ | :--- |
| *module_name*#memory.usage.percentage | %    |

</TabItem>
<TabItem value="Vsf" label="Vsf">

| Metric name                                   | Unit |
| :-------------------------------------------- | :--- |
| vsf status                                    |      |
| member status                                 |      |
| stack.members.total.count                     |      |
| *member_id*#member.cpu.utilization.percentage | %    |
| *member_id*#member.memory.usage.percentage    | %    |

</TabItem>
<TabItem value="Vsx" label="Vsx">

| Metric name                     | Unit |
| :------------------------------ | :--- |
| device status                   |      |
| isl status                      |      |
| vsx.isl.packets.in.count        |      |
| vsx.isl.packets.out.count       |      |
| keepalive status                |      |
| vsx.keepalive.packets.in.count  |      |
| vsx.keepalive.packets.out.count |      |

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

1. Install the Centreon plugin package on every Centreon poller expected to monitor **ArubaOS-CX** resources:

```bash
yum install centreon-plugin-Network-Aruba-Aoscx-Snmp
```

2. On the Centreon web interface, install the **ArubaOS-CX SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **ArubaOS-CX** resources:

```bash
yum install centreon-plugin-Network-Aruba-Aoscx-Snmp
```

2. Install the **ArubaOS-CX SNMP** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-aruba-aoscx-snmp
```

3. On the Centreon web interface, install the **ArubaOS-CX SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **ArubaOS-CX** equipment settings.
* Apply the **Net-Aruba-Aoscx-SNMP-custom** template to the host.
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
/usr/lib/centreon/plugins/centreon_aruba_aoscx_snmp.pl \
    --plugin=network::aruba::aoscx::snmp::plugin \
    --mode=vsf \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='aruba_ro' \
    --warning-cpu-utilization='90' \
    --critical-cpu-utilization='95' \
    --verbose
```

The expected command output is shown below:

```bash
OK: vsf operational status: no_split - All stack members are ok | '1#member.cpu.utilization.percentage'=16.00%;0:90;0:95;0;100 '1#member.memory.usage.percentage'=24.00%;;;0;100 '2#member.cpu.utilization.percentage'=4.00%;0:90;0:95;0;100 '2#member.memory.usage.percentage'=14.00%;;;0;100 '3#member.cpu.utilization.percentage'=4.00%;0:90;0:95;0;100 '3#member.memory.usage.percentage'=8.00%;;;0;100 '4#member.cpu.utilization.percentage'=4.00%;0:90;0:95;0;100 '4#member.memory.usage.percentage'=8.00%;;;0;100
checking stack member '1'
    role: master [status: ready]
    cpu usage: 16.00%
    memory used: 24.00 %
checking stack member '2'
    role: standby [status: ready]
    cpu usage: 4.00%
    memory used: 14.00 %
checking stack member '3'
    role: member [status: ready]
    cpu usage: 4.00%
    memory used: 8.00 %
checking stack member '4'
    role: member [status: ready]
    cpu usage: 4.00%
    memory used: 8.00 %
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aruba_aoscx_snmp.pl \
    --plugin=network::aruba::aoscx::snmp::plugin \
    --mode=vsf \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_aruba_aoscx_snmp.pl \
    --plugin=network::aruba::aoscx::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
