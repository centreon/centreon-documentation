---
id: hardware-devices-camera-mobotix-snmp
title: Mobotix camera SNMP
---

## Plugin Pack Assets

### Monitored Objects

The Plugin Pack Mobotix SNMP collects metrics for:
* Interfaces
* System

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                                    | Description                                                           |
| :------------------------------------------- | :-------------------------------------------------------------------- |
| HW-Device-Camera-Mobotix-SNMP-Interface-Name | Discover network interfaces and monitor bandwidth utilization         |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--System-->

| Metric name                         | Description                      | Unit |
| :---------------------------------- | :------------------------------- | :--- |
| system.sdcard.usage.percent         | SD card usage                    | %    |
| system.temperature.internal.celsius | Internal temperature             | C    |
| system.temperature.external.celsius | External temperature             | C    |
| system.temperature.gps.celsius      | GPS temperature                  | C    |
| system.illumination.right.lux       | Illumination of the right sensor | lx   |
| system.illumination.left.lux        | Illumination of the left sensor  | lx   |
| system.video.framerate.persecond    | Current video framerate          |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Mobotix, the SNMP must be configured.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Devices-Camera-Mobotix-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Mobotix Camera* Plugin Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Devices-Camera-Mobotix-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin Pack from the RPM:

```bash
yum install centreon-pack-hardware-devices-camera-mobotix-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin Packs > Manager", install the *Mobotix Camera* Plugin Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *HW-Device-Camera-Mobotix-SNMP-custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_camera_mobotix_snmp.pl \
    --plugin=hardware::devices::camera::mobotix::snmp::plugin \
    --mode=system \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='mobotix_ro' \
    --warning-temperature-internal=45 \
    --critical-temperature-internal=50 \
    --verbose
```

Expected command output is shown below:

```bash
OK: internal temperature: 23 C - illumination right: 17 lx - video framerate: 2 fps | 'system.temperature.internal.celsius'=23C;0:45;0:50;; 'system.illumination.right.lux'=17lx;;;; 'system.video.framerate.persecond'=2fps;;;;
```

The command above monitors Mobotix (```--plugin=hardware::devices::camera::mobotix::snmp::plugin --mode=system```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='mobotix_ro'```).

This command would trigger a WARNING alarm if internal temperature over 45C 
(```--warning-temperature-internal=45```) and a CRITICAL alarm over 50C (```--critical-temperature-internal=50```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_camera_mobotix_snmp.pl \
    --plugin=hardware::devices::camera::mobotix::snmp::plugin \
    --mode=system \
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
    SNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.21701
