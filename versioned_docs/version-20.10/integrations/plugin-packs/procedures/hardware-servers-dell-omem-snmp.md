---
id: hardware-servers-dell-omem-snmp
title: Dell OME-Modular SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack Dell OME-Modular SNMP brings 1 host template:
* HW-Server-Dell-OMEM-SNMP-custom

It brings the following Service Templates:

| Service Alias | Service Template           | Default | Discovery |
|:--------------|:---------------------------|:--------|:----------|
| Hardware      | HW-Dell-OMEM-Hardware-SNMP | X       |           |
| Uptime        | HW-Dell-OMEM-Uptime-SNMP   | X       |           |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric name                               | Description                                                    | Unit  |
| :---------------------------------------- | :------------------------------------------------------------- | :---- |
| *chassis_num*#hardware.chassis.power.watt | Temperature of the sensor                                      | W     |
| iom status                                | Current IOM subsystem status                                   |       |
| redundancy status                         | Current redundancy status                                      |       |
| power status                              | Current power subsystem health status                          |       |
| fan status                                | Current fan subsystem health status                            |       |
| blade status                              | Current blade subsystem health status                          |       |
| temperature status                        | Current temp sensor subsystem health status                    |       |
| mm status                                 | Current management module status                               |       |
| psu status                                | Current status of the power supply                             |       |
| chassis#hardware.temperature.celsius      | Ambient temperature reading for the chassis front panel module | C     |

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

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Dell OME–Modular SNMP** resources:

```bash
yum install centreon-plugin-Hardware-Servers-Dell-Omem-Snmp
```

2. On the Centreon Web interface, install the **Dell OME–Modular SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Dell OME–Modular SNMP** resources:

```bash
yum install centreon-plugin-Hardware-Servers-Dell-Omem-Snmp
```

2. Install the **Dell OME–Modular SNMP** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-hardware-servers-dell-omem-snmp
```

3. On the Centreon Web interface, install the **Dell OME–Modular SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Dell OME–Modular SNMP** server settings
* Select the **HW-Server-Dell-OMEM-SNMP-custom** template to apply to the Host

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
/usr/lib/centreon/plugins/centreon_dell_omem_snmp.pl \
    --plugin=hardware::server::dell::omem::snmp::plugin \
    --mode=hardware \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All 15 components are ok [1/1 chassis, 7/7 health, 6/6 psus, 1/1 temperatures]. | '1#hardware.chassis.power.watt'=2227W;;;; 'chassis#hardware.temperature.celsius'=21C;;;; 'hardware.chassis.count'=1;;;; 'hardware.health.count'=7;;;; 'hardware.psu.count'=6;;;; 'hardware.temperature.count'=1;;;;
Product Name: PowerEdge MX7000, Service Tag: XXXXXXX, Firmware Version of MM1: 1.30.10, Firmware Version of MM2: 1.30.10
Checking chassis
chassis '1' power 2227 W [instance: 1]
Checking health
IOM status is ok [instance: 1]
management module status is ok [instance: 7]
blade status is ok [instance: 5]
fan status is ok [instance: 4]
power status is ok [instance: 3]
redundancy status is ok [instance: 2]
temperature status is ok [instance: 6]
Checking power supplies
power supply 'PSU.Slot.1' status is ok [instance: 1.1]
power supply 'PSU.Slot.2' status is ok [instance: 1.2]
power supply 'PSU.Slot.3' status is ok [instance: 1.3]
power supply 'PSU.Slot.4' status is ok [instance: 1.4]
power supply 'PSU.Slot.5' status is ok [instance: 1.5]
power supply 'PSU.Slot.6' status is ok [instance: 1.6]
Checking temperatures
chassis ambient temperature is 21C [instance: chassis]
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_omem_snmp.pl \
    --plugin=hardware::server::dell::omem::snmp::plugin \
    --mode=hardware \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_omem_snmp.pl \
    --plugin=hardware::server::dell::omem::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins#snmp-checks)

