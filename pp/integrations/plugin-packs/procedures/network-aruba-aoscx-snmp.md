---
id: network-aruba-aoscx-snmp
title: ArubaOS-CX SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Plugin Pack Assets

### Monitored Objects

The Plugin Pack ArubaOS-CX SNMP collects metrics for:
* Hardware
* Interfaces
* Vsf
* Vsx

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Rule name                            | Description                                                           |
| :----------------------------------- | :-------------------------------------------------------------------- |
| Net-Aruba-Aoscx-SNMP-Interface-Name  | Discover network interfaces and monitor bandwidth utilization         |

</TabItem>
</Tabs>

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric name                                 | Description                           | Unit |
| :------------------------------------------ | :------------------------------------ | :--- |
| *fan\_name*#hardware.fan.speed.rpm          | Speed of the fan                      | rpm  |
| fan tray status                             | Status of the fan tray                |      |
| psu status                                  | Status of the power supply            |      |
| *psu\_name*#hardware.psu.power.watt         | Power consumption of the power supply | W    |
| temperature status                          | Status of the sensor                  |      |
| *sensor\_name*#hardware.temperature.celsius | Temperature of the sensor             | C    |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

</TabItem>
<TabItem value="Vsf" label="Vsf">

| Metric name                                     | Description              | Unit |
| :---------------------------------------------- | :----------------------- | :--- |
| vsf status                                      | Global status of the vsf |      |
| member status                                   | Status of a member       |      |
| stack.members.total.count                       | Number of members        |      |
| stack.members.total.count                       | Number of members        |      |
| *member\_id*\#member.cpu.utilization.percentage | CPU utilization          | %    |
| *member\_id*\#member.memory.usage.percentage    | Memory usage             | %    |

</TabItem>
<TabItem value="Vsx" label="Vsx">

| Metric name                     | Description                                       | Unit |
| :------------------------------ | :------------------------------------------------ | :--- |
| device status                   | Status of the device                              |      |
| isl status                      | Status of the inter-switch link                   |      |
| vsx.isl.packets.in.count        | Incoming packets going through the link           |      |
| vsx.isl.packets.out.count       | Outgoing packets going through the link           |      |
| keepalive status                | Status of the keepalive                           |      |
| vsx.keepalive.packets.in.count  | Incoming keepalive packets going through the link |      |
| vsx.keepalive.packets.out.count | Outgoing keepalive packets going through the link |      |

</TabItem>
</Tabs>

## Prerequisites

To monitor your Aruba, the SNMP must be configured.
The Poller should be able to perform SNMP requests toward the Infoblox device over SNMP UDP/161 port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Aruba-Aoscx-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *ArubaOS-CX SNMP* Plugin Pack

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Aruba-Aoscx-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin Pack from the RPM:

```bash
yum install centreon-pack-network-aruba-aoscx-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *ArubaOS-CX SNMP* Plugin Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *Net-Aruba-Aoscx-SNMP-custom* Host Template

> When using SNMP v3, set extra SNMP parameters in the SNMPEXTRAOPTIONS macro. <br/>
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

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

Expected command output is shown below:

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

The command above monitors Aruba (```--plugin=network::aruba::aoscx::snmp::plugin --mode=vsf```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='aruba_ro'```).

This command would trigger a WARNING alarm if cpu utilization over 90% 
(```--warning-cpu-utilization='90'```) and a CRITICAL alarm over 95% (```--critical-cpu-utilization='95'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aruba_aoscx_snmp.pl \
    --plugin=network::aruba::aoscx::snmp::plugin \
    --mode=vsf \
    --help
```

## Troubleshooting

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:
* The SNMP agent of the device isn't started or is misconfigured
* An external device is blocking the request (firewall, ...)

#### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - The agent doesn't support the MIB used by the plugin
  - The targeted SNMP OID cannot be fetched because of insufficient privileges on the device. 
    SNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.47196.4
