---
id: hardware-devices-cisco-cts-snmp
title: Cisco Telepresence System SNMP
---

## Overview

Cisco Telepresence System is part of the Cisco Unified Communication suite to offer high quality collaboration tools
with video and audio capabilities. 

## Plugin-Pack assets

### Monitored objects

* *Peripherals* status and metrics
* *Calls* history and streams

## Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->

<!--Calls-->

| Metric name                                    | Description                                     | Unit |
|:---------------------------------------------- |:----------------------------------------------- |:---- |
| calls.total.unknown.count                      | Calls count having unknown status               |      |
| calls.total.other.count                        | Calls count having other status                 |      |
| calls.total.internal.error.count               | Calls count encountering internal error         |      |
| calls.total.local.disconnected.count           | Calls count being locally disconnected          |      |
| calls.total.remote.disconnected.count          | Calls count being remotely disconnected         |      |
| calls.total.network.congestion.count           | Calls count facing network congestion           |      |
| calls.total.media.negotiation.failure.count    | Calls count having media negotiation failure    |      |
| calls.total.security.config.mismatched.count   | Calls count encountering security issues        |      |
| calls.total.incompatible.remote.endpoint.count | Calls count facing incompatible remote device   |      |
| calls.total.service.unavailable.count          | Calls count having unknown status               |      |
| calls.total.remote.terminated.error.count      | Calls count ending because of remote error      |      |

In addition to global metrics above, the following metrics are monitoring for audio, video and content *mediatype*: 

| Metric name                                                | Description                                     | Unit |
|:---------------------------------------------------------- |:----------------------------------------------- |:---- |
| *mediatype*#calls.streams.active.maxjitter.milliseconds    | Active calls maximum jitter measurment          |  ms  |
| *mediatype*#calls.streams.active.traffic.in                | Download Bandwidth utilization by ongoing calls |  B/s |
| *mediatype*#calls.streams.active.traffic.out               | Upload Bandwidth utilization by ongoing calls   |  B/s |
| *mediatype*#calls.streams.active.packetloss.in.count       | Packet Loss In on ongoing calls                 |      |
| *mediatype*#calls.streams.active.packetloss.out.count      | Packet Loss Out on ongoing calls                |      |
| *mediatype*#calls.streams.active.packetloss.in.percentage  | Packet Loss In rate on ongoing call             |  %   |
| *mediatype*#calls.streams.active.packetloss.out.percentage | Packet Loss Out rate on ongoing call            |  %   |

<!--Peripherals-->

| Metric name                | Description                                             | Unit |
|:---------------------------|:--------------------------------------------------------|:-----|
| peripherals.total.count    | Number of pysical entity on the CTS                     |      |
| Peripheral Status          | Operating status of each peripheral (MIC, CAM, DISPLAY) |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

The SNMP service must be installed and configured on the Cisco CTS Device.
The Centreon Pollers must as well be able to reach the CTS over the UDP/161 port. 

More information about how to configure your CTS can be found in the official documentation:
https://www.cisco.com/c/en/us/td/docs/video/cuct/1_1/english/configuration/guide/maint.html\.

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Cisco CTS* ressources:


```bash
yum install centreon-plugin-Hardware-Devices-Cisco-Cts-Snmp
```

2. On the Centreon Web interface, install the *Cisco CTS* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Cisco CTS* applications:

```bash
yum install centreon-plugin-Hardware-Devices-Cisco-Cts-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-plugin-hardware-devices-cisco-cts-Snmp
```

3. On the Centreon Web interface, install the *Cisco CTS* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts". 
* Fill the "Name", "Alias", "IP Address / DNS", "Snmp Community" and "Snmp version" fields according to your device's configuration
* Select the *HW-Device-Cisco-Cts-SNMP*.

  :warning: When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific auth parameters

| Mandatory   | Name             | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account and test the Plugin 
by running the following command (some of the parameters such as ```--snmp-community``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_cisco_cts_snmp.pl \
--plugin=hardware/devices/cisco/cts/snmp/plugin.pm \
--mode=peripherals \
--hostname='10.2.15.12' \
--snmp-version=2c \
--snmp-community='snmp-community' \
--critical-total='13:' \
--verbose
```

Expected command output is shown below: 

```bash
OK: Total peripherals: 13 - All peripherals are ok | 'peripherals.total.count'=13;;;0;
Peripheral 'UP_LINK' status: noErrorPeripheral 'MIC -- front_center' status: noError
Peripheral 'MIC -- front_left' status: noError
Peripheral 'MIC -- front_right' status: noError
Peripheral 'MIC BOARD -- mic_array_board' status: noError
Peripheral 'MAIN_CAM -- Serial=XXXXX39,PID=CTS-5K-CAM-CLSTR,Hardware_ver=03.00,Firmware=0,BuildTime=year:2016,week:19' status: noError
Peripheral 'DISPLAY_LEFT -- Serial=XXXXX39,Hardware_ver=,Model=CTS-5K-70-G1 ,Manufacturer=CIS(0x0d33),AppCode_Ver=(unsupported)' status: noError
Peripheral 'DISPLAY_RIGHT -- Serial=XXXXX39,Hardware_ver=,Model=CTS-5K-70-G1 ,Manufacturer=CIS(0x0d33),AppCode_Ver=(unsupported)' status: noError
Peripheral 'AUX_DISPLAY_LEFT -- Serial=XXXXX39,Hardware_ver=,Model=CTS-5K-70-G1 ,Manufacturer=CIS(0x0d33),AppCode_Ver=(unsupported)' status: noError
Peripheral 'AUX_DISPLAY_CENTER -- Serial=XXXXX39,Hardware_ver=,Model=CTS-5K-70-G1 ,Manufacturer=CIS(0x0d33),AppCode_Ver=(unsupported)' status: noError
Peripheral 'AUX_DISPLAY_RIGHT -- Serial=XXXXX39,Hardware_ver=,Model=CTS-5K-70-G1 ,Manufacturer=CIS(0x0d33),AppCode_Ver=(unsupported)' status: noError
Peripheral 'UI_DEVICE --  MAC address : 00:11:EE:9Y:48:15 Version : 11-0-1KKPL-437' status: noError
Peripheral 'MAIN_DISPLAY -- Serial=XXXXX39,Hardware_ver=,Model=CTS-5K-70-G1 ,Manufacturer=CIS(0x0d33),AppCode_Ver=(unsupported)' status: noError
```

In this example, the Plugin gets the number of physical peripherals and their operating status
 (```--plugin=hardware/devices/cisco/cts/snmp/plugin.pm --mode=peripherals```)
by requesting the Cisco Telepresence MIB on the Cisco CTS Device.

This command would trigger a CRITICAL alarm if the number of detected peripherals is less than 13 ```--warning-total='13:'```).

All the available thresholds parameters can be displayed by adding the  ```--help``` 
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_cts_snmp.pl \
--plugin=hardware/devices/cisco/cts/snmp/plugin.pm \
--mode=peripherals \
--help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues: 
* Your SNMP isn't started or misconfigured on the Cisco CTS device 
* An external device is blocking your request (firewall, ...)

### UNKNOWN: SNMP GET Request : Cant get a single value.

This message generally means that SNMP privileges are not wide enough for the mode/plugin to work properly 
or that the polled device doesn't support CISCO-TELEPRESENCE-MIB.