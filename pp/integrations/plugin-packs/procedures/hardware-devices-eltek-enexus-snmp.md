---
id: hardware-devices-eltek-enexus-snmp
title: Eltek eNexus SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Eltek is a global electric power conversion specialist that develops and markets systems for telecommunications and industrial applications.

## Plugin-Pack assets 

### Monitored equipments

Following models can be monitored:

* SmartPack2 V2.x
* SmartPack S V2.x
* Compack V2.x

## Collected metrics

* alarms: current alarms
* battery: battery status and usage
* load: input status and usage
* outputs: output status for control units

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Metric name                        | Description                         |
| :--------------------------------- | :---------------------------------- |
| alarms.active.count                | Current total alarms. Unit: Count   |

</TabItem>
<TabItem value="Battery" label="Battery">

| Metric name                             | Description                                                         |
| :-------------------------------------- | :------------------------------------------------------------------ |
| battery.temperature.celsius             | Current battery temperature. Units: celsius & fahrenheit            |
| battery.charge.remaining.percentage     | Current battery charge remaining. Units: percentage & amperehour    |
| battery.charge.remaining.time.seconds   | Current battery charge remaining. Unit: seconds                     |
| battery.charge.remaining.time.seconds   | Current battery charge remaining time. Unit: seconds                |
| battery.voltage.volt                    | Current battery voltage. Unit: volt                                 |
| battery.current.ampere                  | Current battery load. Unit: ampere                                  |

</TabItem>
<TabItem value="Load" label="Load">

| Metric name                               | Description                                                             |
| :---------------------------------------- | :---------------------------------------------------------------------- |
| load.current.ampere                       | Current load. Unit: ampere                                              |
| load.energy.delivered.watt                | Accumulated energy delivered. Unit: watt                                |
| phase.voltage.volt                        | By phase instance. Current voltage. Unit: volt                          |

</TabItem>
<TabItem value="Outputs" label="Outputs">

| Metric name                             | Description                                                         |
| :-------------------------------------- | :------------------------------------------------------------------ |
| outputs.disconnected.count              | Current disconnected outputs. Unit: Count                           |
| outputs.notenergized.count              | Current not energized outputs. Unit: Count                          |

</TabItem>
</Tabs>

## Prerequisites

### Eltek eNexus device configuration 

To use this pack, the SNMP service must be properly configured on your device.

### Network flow

The Centreon Poller must be able to reach the SNMP port (UDP/161) of the Eltek eNexus device.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Eltek eNexus SNMP Centreon Plugin on every poller expected to monitor Eltek eNexus devices: 

```bash
yum install centreon-plugin-Hardware-Devices-Eltek-Enexus-Snmp
```

2. Install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Eltek eNexus SNMP Centreon Plugin on every poller expected to monitor Eltek eNexus devices:

```bash
yum install centreon-plugin-Hardware-Devices-Eltek-Enexus-Snmp
```

2. Install the Centreon Plugin-Pack RPM:

```bash
yum install hardware-devices-eltek-enexus-snmp
```

3. Install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page

</TabItem>
</Tabs>

## Configuration

When creating an host, fill the 'SNMP Community' and 'SNMP Version' fields to match the device configuration. 

> When using SNMP v3, set extra SNMP parameters in the SNMPEXTRAOPTIONS macro. <br/>
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory   | Name              | Description                                    |
| :---------- | :---------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS  | Configure your own SNMPv3 credentials combo    |

## FAQ

### How can I test the Plugin and what do the main parameters stand for ? 

Once the Centreon plugin installed, you can test it directly on the Centreon Poller by logging into the CLI with the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins/centreon_eltek_enexus_snmp.pl \
	--plugin=hardware::devices::eltek::enexus::snmp::plugin \
	--mode=battery \
	--hostname=10.30.2.114 \
	--snmp-version='2c' \
	--snmp-community='public' \
  --verbose 
```

The command above checks the battery status (```--mode=battery```) of an Eltek eNexus device. The device's IP address is *10.30.2.114* (```--hostname=10.30.2.114```), SNMP version 2 is used and the device's SNMP community is *public* (```--snmp-community='public'```). 

You can display all modes available for the Plugin using the ```--list-mode``` parameter as in the command below:

```bash
/usr/lib/centreon/plugins/centreon_eltek_enexus_snmp.pl \
    --plugin=hardware::devices::eltek::enexus::snmp::plugin \
    --list-mode
```

You can display options of a specific mode by using the ```--help``` flag. Here is an example to display systems mode parameters:

```bash
/usr/lib/centreon/plugins/centreon_eltek_enexus_snmp.pl \
    --plugin=hardware::devices::eltek::enexus::snmp::plugin \
    --mode=battery \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

This message generally means that you are not using the right SNMP version or community. It could also indicate that a third-party device like a firewall is blocking the SNMP UDP/161 request.

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message can refer to the following issues: 
  - the Eltek eNexus device doesn't support the MIB used by the Plugin
  - the targeted SNMP OID cannot be fetched because of insufficient privileges on the device
