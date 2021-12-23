---
id: hardware-devices-camera-hikvision-snmp
title: Hikvision camera SNMP
---

## Plugin Pack Assets

### Monitored Objects

The Plugin Pack Hikvision SNMP collects metrics for:
* Cpu
* Disk
* Memory
* Time

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                              | Description              | Unit |
| :--------------------------------------- | :----------------------- | :--- |
| cpu.utilization.percentage               | CPU utilization          | %    |

<!--Disk-->

| Metric name           | Description                             | Unit  |
| :-------------------- | :-------------------------------------- | :---- |
| disk.usage.bytes      | Disk usage                              | B     |
| disk.free.bytes       | Free disk                               | B     |
| disk.usage.percentage | Disk usage in percentage                | %     |

<!--Memory-->

| Metric name             | Description                               | Unit  |
| :---------------------- | :---------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage                              | B     |
| memory.free.bytes       | Free memory                               | B     |
| memory.usage.percentage | Memory usage in percentage                | %     |

<!--Time-->

| Metric name            | Description                               | Unit  |
| :--------------------- | :---------------------------------------- | :---- |
| time.offset.seconds    | Time offset                               | s     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To monitor your Hikvision, the SNMP must be configured.

The Poller should be able to perform requests against the Hikvision device over SNMP UDP/161 port. 

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Devices-Camera-Hikvision-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin Packs > Manager", install the *Hikvision camera SNMP* Plugin Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Devices-Camera-Hikvision-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin Pack from the RPM:

```bash
yum install centreon-pack-hardware-devices-camera-hikvision-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin Packs > Manager", install the *Hikvision camera SNMP* Plugin Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *HW-Device-Camera-Hikvision-SNMP-custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_camera_hikvision_snmp.pl \
    --plugin=hardware::devices::camera::hikvision::snmp::plugin \
    --mode=cpu \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='hikvision_ro' \
    --warning-usage=90 \
    --critical-usage=95 \
    --verbose
```

Expected command output is shown below:

```bash
OK: CPU Usage: 62.00 % | 'cpu.utilization.percentage'=62.00%;0:90;0:95;0;100
```

The command above monitors Hikvision (```--plugin=hardware::devices::camera::hikvision::snmp::plugin --mode=cpu```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='hikvision_ro'```).

This command would trigger a WARNING alarm if cpu utilization over 90% 
(```--warning-usage='90'```) and a CRITICAL alarm over 95% (```--critical-usage='95'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_camera_hikvision_snmp.pl \
    --plugin=hardware::devices::camera::hikvision::snmp::plugin \
    --mode=cpu \
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
    SNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.39165
