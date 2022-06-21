---
id: hardware-servers-supermicro-superdoctor-snmp
title: Supermicro SuperDoctor SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack Supermicro SuperDoctor collects metrics for:
* Hardware

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric name                                         | Description               | Unit  |
| :-------------------------------------------------- | :------------------------ | :---- |
| cpu status                                          | Status of the cpu         |       |
| disk status                                         | Status of the disk        |       |
| memory status                                       | Status of the memory      |       |
| sensor status                                       | Status of the sensor      |       |
| *sensor\_name*\#hardware.sensor.fan.rpm             | Speed of the fan          | rpm   |
| *sensor\_name*\#hardware.sensor.temperature.celsius | temperature of the sensor | C     |
| *sensor\_name*\#hardware.sensor.voltage.volt        | Voltage of the sensor     | V     |
| *sensor\_name*\#hardware.sensor.discrete.xxx        | Discrete sensor           |       |

</TabItem>
</Tabs>

## Prerequisites

To monitor your Supermicro, the SuperDoctor agent must be configured (eg: https://www.supermicro.com/en/solutions/management-software/superdoctor)
The Poller should be able to perform SNMP requests toward the Supermicro device over SNMP UDP/161 port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Servers-Supermicro-Superdoctor-Snmp
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Supermicro SuperDoctor SNMP* Pack

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Servers-Supermicro-Superdoctor-Snmp
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-hardware-servers-supermicro-superdoctor-snmp
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Supermicro SuperDoctor SNMP* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *HW-Server-Supermicro-Superdoctor-SNMP-custom* Host Template

> When using SNMP v3, set extra SNMP parameters in the SNMPEXTRAOPTIONS macro. <br/>
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_supermicro_superdoctor_snmp.pl
    --plugin=hardware::server::supermicro::superdoctor::snmp::plugin
    --mode=hardware
    --hostname=10.30.2.114
    --snmp-version='2c'
    --snmp-community='supermicro_ro'
    --verbose
```

The command above monitors Supermicro hardware (```--plugin=hardware::server::supermicro::superdoctor::snmp::plugin --mode=hardware```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='supermicro_ro'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_supermicro_superdoctor_snmp.pl
    --plugin=hardware::server::supermicro::superdoctor::snmp::plugin
    --mode=hardware
    --help
```

## Troubleshooting

[Troubleshooting plugins](../getting-started/how-to-guides/troubleshooting-plugins.md)

