---
id: hardware-devices-polycom-hdx-snmp
title: Polycom HDX SNMP
---

## Overview

The Polycom HDX Room system is an endpoint device that provides voice and video connectivity
across collaboration networks. 

This Plugin-Pack check basic system health indicators and video/audio related protocols 
performances during a call. 

## Plugin-Pack assets

### Monitored objects

* HDX Room systems                 

## Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-Detailed-->

| Metric name                           | Description                 | Units |
| :------------------------------------ | :-------------------------- | :---- |
| cpu.user.utilization.percentage       | CPU User utilization        |   %   |
| cpu.nice.utilization.percentage       | CPU Nice utilization        |   %   |
| cpu.system.utilization.percentage     | CPU System utilization      |   %   |
| cpu.idle.utilization.percentage       | CPU Idle utilization        |   %   |
| cpu.wait.utilization.percentage       | CPU Wait utilization        |   %   |
| cpu.kernel.utilization.percentage     | CPU Kernel utilization      |   %   |
| cpu.interrupt.utilization.percentage  | CPU Interrupt utilization   |   %   |
| cpu.softirq.utilization.percentage    | CPU SoftIrq utilization     |   %   |
| cpu.steal.utilization.percentage      | CPU Steal utilization       |   %   |
| cpu.guest.utilization.percentage      | CPU Guest utilization       |   %   |
| cpu.guestnice.utilization.percentage  | CPU Guest Nice utilization  |   %   |

<!--Memory-->

| Metric name             | Description                               | Units |
| :---------------------  | :---------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage on the device.               |   B   |
| memory.free.bytes       | Free memory on the device.                |   B   |
| memory.usage.percentage | Percentage of Memory usage on the device. |   %   |
| memory.buffer.bytes     | Buffered Memory allocation.               |   B   |
| memory.cached.bytes     | Cached Memory allocation.                 |   B   |
| memory.shared.bytes     | Shared Memory allocation.                 |   B   |

<!--Traffic-->

| Metric name                         | Description                                   | Units   |
| :---------------------------------- | :-------------------------------------------- |---------|
| status                              | Status of the interface                       |         |
| interface.traffic.in.bitspersecond  | Incoming traffic going through the interface. | B/s & % |
| interface.traffic.out.bitspersecond | Outgoing traffic going through the interface. | B/s & % |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--Load-->

| Metric name                 | Description                                        |
| :-------------------------- | :------------------------------------------------- |
| load1                       | System load 1 minute-sample                        |
| load5                       | System load 5 minutes-sample                       |
| load15                      | System load 15 minutes-sample                      |

<!--Uptime-->

| Metric name           | Description        | Units   |
| :-------------------- | :----------------- |---------|
| system.uptime.seconds | System uptime      |    s    |

<!--ViewStation-Statistics-->

| Metric name                             | Description                                                                                  | Units |
| :-------------------------------------- | :------------------------------------------------------------------------------------------- | :---- |
| viewstation.h323.packet.loss.percentage | The current combined (audio/video) average percentage packet loss when in an H.323 call      |   %   |
| viewstation.h323.jitter.milliseconds    | The current combined (audio/video) cumulative average jitter (in ms) when in an H.323 call.  |   ms  |
| viewstation.h323.latency.count          | The current average latency based on round trip delay when in an H.323 call.                 |       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Device Configuration

On the Polycom device, enable and configure the SNMP agent: 
    - Connect to the HDX Admin Web UI
    - Go to 'System > Manage > Credentials' 
    - Create a new SNMP credentials specifying community and version

### Network flows

The Centreon Poller must be able to reach the UDP/161 SNMP port of the Polycom HDX device.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor Polycom HDX devices:


```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Hdx-Snmp
```

2. On the Centreon Web interface, install the *Polycom HDX SNMP* Plugin-Pack 
through "Configuration > Plugin packs > Manager" page.


<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor Polycom HDX devices:


```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Hdx-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:


```bash
yum install centreon-pack-hardware-devices-polycom-hdx-snmp
```

3. On the Centreon Web interface, install the *Polycom HDX SNMP* Plugin-Pack 
through "Configuration > Plugin packs > Manager" page.


<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *HW-Device-Polycom-Hdx-SNMP-Custom* Host Template
* Fill SNMP Version and Community fields according to the device's configuration


  :warning: When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific auth parameters

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command:


```bash
TODO
```


```bash
TODO
```

Use the ```--help``` flag to display a dedicated manual for a given mode:

```bash
TODO
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues: 
* Your SNMP server isn't started or misconfigured 
* An external device is blocking your request (firewall, ...)
