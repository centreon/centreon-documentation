---
id: network-cisco-standard-snmp
title: Cisco Standard
---

## Overview

Cisco develops, manufactures and sells networking hardware, software, telecommunications equipment and other high-technology services and products

## Plugin-pack assets 

### Monitored equipments

All Cisco devices supporting standard MIBs:
    * Routers
    * Access Points
    * Switchs
    * ...                     

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Hosts-->

| Rule name                                  | Description                                              |
| :----------------------------------------- | :------------------------------------------------------- |
| App-Protocol-SNMP-HostDiscovery            | Discover your Cisco devices through subnet SNMP scan     |

<!--Services-->

| Rule name                                  | Description                                                              |
| :----------------------------------------- | :----------------------------------------------------------------------- |
| Net-Cisco-Standard-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errors and discards              |
| Net-Cisco-Standard-SNMP-Traffic-Name       | Discover network interfaces and monitor status and bandwidth utilization |

<!--END_DOCUSAURUS_CODE_TABS-->

## Collected metrics

Only standard metrics are described in this section. Be aware that a lot of other checks and metrics are available from Cisco additionnal MIBS. Here is a non-exhaustive list: 

	* hsrp: HSRP protocol state 
	* ipsectunnel: State of ipsec tunnels
	* ipsla: Check your IP SLA configuration and performances
	* load: Load of your device cores
	* memoryflash: Memory flash pool usage
	* qosusage: Check QOS configuration and associated consumptions
	* stack: Check the health of your device stack

<!--DOCUSAURUS_CODE_TABS-->

<!--cpu-->

| Metric name                        | Description                                                          |
| :--------------------------------- | :------------------------------------------------------------------- |
| cpu.utilization.5s.percentage      | CPU utilization during last 5 seconds. Units: %                      |
| cpu.utilization.1m.percentage      | CPU utilization during last 1 minute. Units: %                       |
| cpu.utilization.5m.percentage      | CPU utilization during last 5 minute. Units: %                       |
| core.cpu.utilization.5s.percentage | Each core CPU Utilization during last 5 seconds. Units: %            |
| core.cpu.utilization.1m.percentage | Each core CPU Utilization during last 1 minutes. Units: %            |
| core.cpu.utilization.5m.percentage | Each core CPU Utilization during last 5 minutes. Units: %            |

<!--Memory-->

| Metric name             | Description                                                    |
| :---------------------  | :------------------------------------------------------------- |
| memory.usage.bytes      | Memory usage on the device. Units: Bytes                       |
| memory.usage.percentage | Memory usage on the device. Units: %                           |

<!--Traffic-->

| Metric name                              | Description                                                                                |
| :--------------------------------------- | :----------------------------------------------------------------------------------------- |
| status                                   | Interface status                                                                           |
| interface.traffic.\*.bitspersecond       | \*in/out. Incoming/outgoing traffic going through the interface. Units: B/s & %            |
| interface.packets.\*.errors.percentage   | \*in/out. Incoming/outgoing errored packets going through an interface. Units: Count & %   |
| interface.packets.\*.discards.percentage | \*in/out. Incoming/outgoing discarded packets going through an interface. Units: Count & % |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^my-interface-name$' --name```] 

<!--Environment-->

| Metric name                   | Description                                                    |
| :---------------------------- | :------------------------------------------------------------- |
| entPhysicalDescr              | A textual description of physical entity.                      |
| ciscoEnvMonPresent            | The type of environmental and monitor located in the chassis.  |

Monitoring all hardware components that comes with the device. It may includes the following : fan, module, physical, psu, sensor, temperature, voltage, etc.

You can use --absent-problem if you want to alert when a component is absent/removed. You can also overload the default status using the --threshold-overload option. 

<!--Configuration-->

| Metric name                  | Description                                                                    |
| :--------------------------- | :----------------------------------------------------------------------------- |
| ccmHistoryRunningLastChanged | The value of sysUpTime when the running configuration was last changed         |
| ccmHistoryRunningLastSaved   | The value of sysUpTime when the running configuration was last saved (written) |
| ccmHistoryStartupLastChanged | The value of sysUpTime when the startup configuration was last written         |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Cisco device configuration 

To use this pack, you must have configured SNMP on your Cisco device. Cisco provides an official documentation to achieve this: https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/7282-12.html

Here is an example: 

  * Connect to your router and reach the configuration part

Router#configure terminal 
Enter configuration commands, one per line.  End with CNTL/Z. 
Router(config)#

  * Use this command to enable snmp-server and set a read-only community

Router(config)#snmp-server community public RO 

In the example above, 'public' is your snmp community. You do now want to use it in production ;)  

### Network flow

Your centreon server must be able to reach the Cisco device over TCP/161 SNMP port.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install plugin code on every pollers monitoring Cisco devices: 

```bash
yum install centreon-plugin-Network-Cisco-Standard-Snmp
```

2. Install 'Cisco-Standard-Snmp' pack from "Configuration > Plugin packs > Manager" page


<!--Offline IMP License-->

1. Install plugin code on every pollers monitoring Cisco devices:

```bash
yum install centreon-plugin-Network-Cisco-Standard-Snmp
```

2. Install RPM containing pack assets

```bash
yum install centreon-pack-network-cisco-standard-snmp
```

3. Install 'Cisco-Standard-Snmp' pack from "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

When creating an host, fill the 'Snmp Community' and 'Snmp Version' boxes to match device configuration. 

  :warning: When using SNMP v3, set extra parameters with SNMPEXTRAOPTIONS macro 

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How do I test my configuration through CLI and what does main parameters stand for ? 

Once your plugin is installed, you can test it under centreon-engine system user:

```bash
/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \
	--plugin=network::cisco::standard::snmp::plugin \
	--mode=cpu \
	--hostname=10.30.2.114 \
	--snmp-version='2c' \
	--snmp-community='test/cisco' \
  --verbose 
```

The command above checks the CPU utilization of your Cisco box (```--mode=cpu```). You must always define the IP address of the device (```--hostname=10.30.2.114```) as well as SNMP versions and community (```--snmp-version='2c' --snmp-community='test/cisco'```) 

You can display all modes that come with the plugin with the command below: 

```bash
/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \
    --plugin=network::cisco::standard::snmp::plugin \
    --list-mode
```

You can display options of a specific mode by using the ```--help``` flag. An example below to display cpu mode parameters:

```bash
/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \
    --plugin=network::cisco::standard::snmp::plugin \
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

This message generally means that you are not using the good snmp version or community. It could also indicate that a thirdt-party device like firewall is blocking your request.

### UNKNOWN: SNMP GET Request : Cant get a single value.

When facing this error, several possibilities: 
  - Cisco device doesn't support the MIB used by the plugin
  - You do not have enough privileges to reach a specific OID 