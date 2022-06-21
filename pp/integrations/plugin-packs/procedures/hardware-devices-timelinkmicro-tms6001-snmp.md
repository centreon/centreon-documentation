---
id: hardware-devices-timelinkmicro-tms6001-snmp
title: Timelinkmicro Tms6001
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

TimeLink microsystems provides solutions based on a complete line of COTS products and 
design specific equipment or system on user's requirements. 

## Plugin-Pack assets

### Monitored objects

* Tms6001                  

## Collected metrics

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Metric name             | Description        | Unit  |
| :---------------------- | :----------------- | :---- |
| alarms.total.count      | Number of alarms.  | Count |

</TabItem>
<TabItem value="Antenna" label="Antenna">

| Metric name | Description    | Unit   |
|:------------|:---------------|:-------|
| status      | Antenna status | String |

</TabItem>
<TabItem value="Frequency" label="Frequency">

| Metric name                              | Description                       | Unit  | 
| :--------------------------------------- | :-------------------------------- |------ |
| generation.frequency.quality.count       | Quality of frequency generation:  | Count |

</TabItem>
<TabItem value="Gnss" label="Gnss">

| Metric name | Description                               | Unit   |
|:------------|:------------------------------------------|:-------|
| status      | A textual description of physical entity. | String |

</TabItem>
<TabItem value="Satellites" label="Satellites">

| Metric name                   | Description                | Unit  |
| :---------------------------- | :------------------------- | :---- |
| satellites.seen.count         | Number of satellites seen. | Count |

</TabItem>
<TabItem value="Time" label="Time">

| Metric name                   | Description                 | Unit  |
| :---------------------------- | :-------------------------- | :---- |
| generation.time.quality.count | Quality of time generation. | Count |

</TabItem>
</Tabs>

## Prerequisites

### Device Configuration

On the TMS device, enable and configure the SNMP agent in order to allow the Centreon Poller to request it.

### Network flows

The Centreon Poller must be able to reach the UDP/161 SNMP port of the TMS device.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor Timelinkmicro devices:

```bash
yum install centreon-plugin-Hardware-Devices-Timelinkmicro-Tms6001-Snmp
```

2. On the Centreon Web interface, install the *Timelinkmicro Tms6001 Snmp* Plugin-Pack 
through "Configuration > Plugin packs > Manager" page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor Timelinkmicro devices:

```bash
yum install centreon-plugin-Hardware-Devices-Timelinkmicro-Tms6001-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-hardware-devices-timelinkmicro-tms6001-snmp
```

3. On the Centreon Web interface, install the *Timelinkmicro Tms6001 Snmp* Plugin-Pack 
through "Configuration > Plugin packs > Manager" page.

</TabItem>
</Tabs>

## Host configuration 

* Add a new Host and apply the *HW-Timelink-tms6001-SNMP-Custom* Host Template
* Fill SNMP Version and Community fields according to the device's configuration

> When using SNMP v3, set extra SNMP parameters in the SNMPEXTRAOPTIONS macro. <br/>
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins//centreon_timelinkmicro_tms6001_snmp.pl \
	--plugin=hardware::devices::timelinkmicro::tms6001::snmp \
	--mode=alarms \
	--hostname=10.30.2.114 \
	--snmp-version='2c' \
	--snmp-community='timelink_ro' \
  	--verbose 
```

This check monitors open alarms (```--mode=alarms```) on a Timelink device with 10.30.2.114 IP (```--hostname=10.30.2.114```) 
using SNMP v2 and 'timelink_ro' Community string (```--snmp-version='2c' --snmp-community='timelink_ro'```) 

Use the ```--list-mode``` option to display all the modes available in the Plugin:

```bash
/usr/lib/centreon/plugins//centreon_timelinkmicro_tms6001_snmp.pl \
    --plugin=hardware::devices::timelinkmicro::tms6001::snmp \
    --list-mode
```

Use the ```--help``` flag to display a dedicated manual for a given mode:

```bash
/usr/lib/centreon/plugins//centreon_timelinkmicro_tms6001_snmp.pl \
    --plugin=hardware::devices::timelinkmicro::tms6001::snmp \
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues: 
* Your SNMP server isn't started or misconfigured 
* An external device is blocking your request (firewall, ...)
