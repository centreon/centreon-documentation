---
id: hardware-devices-polycom-hdx-snmp
title: Polycom HDX SNMP
---

## Overview

The Polycom HDX Room system is an endpoint device that provides voice and video connectivity
across collaboration networks. 

This Plugin-Pack checks basic system health indicators and video/audio related protocols 
performances during a call. 

## Plugin-Pack assets

### Monitored objects

* HDX Room systems                 

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-Detailed-->

| Metric name                           | Description                 | Unit  |
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

<!--Interfaces-->

| Metric name                         | Description                                   | Unit |
| :---------------------------------- | :-------------------------------------------- | :--- |
| status                              | Status of the interface                       |      |
| interface.traffic.in.bitspersecond  | Incoming traffic going through the interface. | b/s  |
| interface.traffic.in.percentage     | Incoming traffic going through the interface. | b/s  |
| interface.traffic.out.bitspersecond | Outgoing traffic going through the interface. | b/s  |


A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--Load-->

| Metric name                 | Description                                        |
| :-------------------------- | :------------------------------------------------- |
| load1                       | System load 1 minute-sample                        |
| load5                       | System load 5 minutes-sample                       |
| load15                      | System load 15 minutes-sample                      |

<!--Memory-->

| Metric name             | Description                               | Unit  |
| :---------------------  | :---------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage on the device.               |   B   |
| memory.free.bytes       | Free memory on the device.                |   B   |
| memory.usage.percentage | Percentage of Memory usage on the device. |   %   |
| memory.buffer.bytes     | Buffered Memory allocation.               |   B   |
| memory.cached.bytes     | Cached Memory allocation.                 |   B   |
| memory.shared.bytes     | Shared Memory allocation.                 |   B   |

<!--Uptime-->

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      |   s   |

<!--ViewStation-Statistics-->

| Metric name                             | Description                                                                                  | Unit |
| :-------------------------------------- | :------------------------------------------------------------------------------------------- | :--- |
| viewstation.h323.packet.loss.percentage | The current combined (audio/video) average percentage packet loss when in an H.323 call      |  %   |
| viewstation.h323.jitter.milliseconds    | The current combined (audio/video) cumulative average jitter (in ms) when in an H.323 call.  |  ms  |
| viewstation.h323.latency.count          | The current average latency based on round trip delay when in an H.323 call.                 |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Device Configuration

On the Polycom device, enable and configure the SNMP agent: 
    - Connect to the HDX Admin Web UI
    - Go to 'System > Manage > Credentials' 
    - Create new SNMP credentials specifying community and version

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

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_polycom_hdx_snmp.pl \
    --plugin=hardware::devices::polycom::hdx::snmp::plugin  \
	--mode=viewstation-stats \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='mysnmpcommunity' \
	--warning-h323-packet-loss='5' \
	--critical-h323-packet-loss=10' \
```

Expected command output is shown below: 

```bash
OK: View Station Phone Number: '0123456789' Stats: H323 Packet Loss 1.00 %, H323 (audio/video) Jitter 30.00 ms, H323 (audio/video) Latency 4.00 |
'h323-packet-loss'=1.00%;;;0;100 'h323-jitter'=30.00ms;;;0;100 'vs_latency'=4.00;;;0;100
```


The command above monitors the sessions statistics of a Polycom HDX ViewStation device (```--plugin=hardware::devices::polycom::hdx::snmp::plugin --mode=viewstation-stats```) identified
by the IP address *10.0.0.1* (```--hostname=10.0.0.1```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='test/polycomdma'```).

This command would trigger a WARNING alarm if the packet loss rate of the active calls raises over 5% (```--warning-h323-packet-loss='5'```)
and a CRITICAL alarm over 10% (```--critical-h323-packet-loss=10'```).


All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_polycom_hdx_snmp.pl --plugin=hardware::devices::polycom::hdx::snmp::plugin --mode=viewstation-stats --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues: 
* The SNMP agent of the device isn't started or is misconfigured 
* An external device is blocking the request (firewall, ...)

### What does '(skipped: no values)' message mean?

When using ViewStation-Statistics service, you will get this message when there is 
no audio and/or video call in progress on the HDX Room system. This is the expected 
behavior. As soon as a call starts, metrics will get populated.