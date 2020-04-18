---
id: network-cisco-standard-snmp
title: Cisco Standard
---

## Overview

Cisco develops, manufactures and sells networking hardware, software, telecommunications equipment and other high-technology services and products

## Plugin-pack assets 

### Monitored equipments

All Cisco devices supporting standard MIBs can be monitored:

* Routers
* Access Points
* Switchs
* ...                     

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Hosts-->

| Rule name                                  | Description                                              |
| :----------------------------------------- | :------------------------------------------------------- |
| App-Protocol-SNMP-HostDiscovery            | Discover your Cisco devices through a SNMP subnet scan   |

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
* ipsla: IP SLA configuration and performances
* load: Load of your device cores
* memoryflash: Memory flash pool usage
* qosusage: Check QOS configuration and associated consumptions
* stack: Check the health of your device stack


<!--DOCUSAURUS_CODE_TABS-->

<!--cpu-->

| Metric name                        | Description                                                         |
| :--------------------------------- | :------------------------------------------------------------------ |
| cpu.utilization.5s.percentage      | CPU utilization for the last 5 seconds. Unit: %                     |
| cpu.utilization.1m.percentage      | CPU utilization for the last minute. Unit: %                        |
| cpu.utilization.5m.percentage      | CPU utilization for the last 5 minutes. Unit: %                     |
| core.cpu.utilization.5s.percentage | Per core CPU utilization for the last 5 seconds. Unit: %            |
| core.cpu.utilization.1m.percentage | Per core CPU utilization for the last minute. Unit: %               |
| core.cpu.utilization.5m.percentage | Per core CPU utilization for the last 5 minutes. Unit: %            |

<!--Memory-->

| Metric name             | Description                                                   |
| :---------------------  | :------------------------------------------------------------ |
| memory.usage.bytes      | Memory usage on the device. Unit: Bytes                       |
| memory.usage.percentage | Memory usage on the device. Unit: %                           |

<!--Traffic-->

| Metric name                              | Description                                                                                |
| :--------------------------------------- | :----------------------------------------------------------------------------------------- |
| status                                   | Interface status                                                                           |
| interface.traffic.\*.bitspersecond       | \*in/out. Incoming/outgoing traffic going through the interface. Units: B/s & %            |
| interface.packets.\*.errors.percentage   | \*in/out. Incoming/outgoing errored packets going through an interface. Units: Count & %   |
| interface.packets.\*.discards.percentage | \*in/out. Incoming/outgoing discarded packets going through an interface. Units: Count & % |

A regexp filter is available to target a specific interface identifier/ifName [```--interface='^my-interface-name$' --name```] 

<!--Environment-->

| Metric name                   | Description                                   |
| :---------------------------- | :-------------------------------------------- |
| entPhysicalDescr              | A text description of the physical device     |
| ciscoEnvMonPresent            | Environment sensors of the physical device    |

Monitoring all hardware components of the device. It may include the following : fan, module, physical, psu, sensor, temperature, voltage, etc.

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

To use this pack, the SNMP service must be properly configured on your Cisco device. Cisco provides an official documentation to achieve this: https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/7282-12.html

Here is an example: 

  * Connect to your router and reach the configuration prompt:

```
Router#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)# 
``` 

  * Use this command to enable snmp-server and set a read-only community

```
Router(config)#snmp-server community public RO 
```

In the example above, 'public' is your snmp community. You do now want to use it in production ;)  

### Network flow

Your centreon server must be able to reach the Cisco device over UDP/161 SNMP port.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Cisco SNMP Centreon Plugin on every poller expected to monitor Cisco devices: 

```bash
yum install centreon-plugin-Network-Cisco-Standard-Snmp
```

2. Install The 'Cisco-Standard-Snmp' Centreon Plugin-Pack from the "Configuration > Plugin packs > Manager" page


<!--Offline IMP License-->

1. Install the Cisco SNMP Centreon Plugin on every poller expected to monitor Cisco devices:

```bash
yum install centreon-plugin-Network-Cisco-Standard-Snmp
```

2. Install the Centreon Plugin-Pack RPM:

```bash
yum install centreon-pack-network-cisco-standard-snmp
```

3. Install The 'Cisco-Standard-Snmp' Centreon Plugin-Pack from the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

When creating an host, fill the 'Snmp Community' and 'Snmp Version' fields to match the device configuration. 

  :warning: When using SNMP v3, set extra parameters with SNMPEXTRAOPTIONS macro 

| Mandatory | Name              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How do I test my configuration through the CLI and what do the main parameters stand for ? 

Once the Centreo plugin installed, you can test it logging with the centreon-engine user:

```bash
/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \
	--plugin=network::cisco::standard::snmp::plugin \
	--mode=cpu \
	--hostname=10.30.2.114 \
	--snmp-version='2c' \
	--snmp-community='test/cisco' \
  --verbose 
```

The command above checks the CPU utilization of your Cisco box (```--mode=cpu```). You must always define the IP address of the device (```--hostname=10.30.2.114```) as well as the SNMP versions and community (```--snmp-version='2c' --snmp-community='test/cisco'```) 

You can display all modes that come with the plugin with the command below: 

```bash
/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \
    --plugin=network::cisco::standard::snmp::plugin \
    --list-mode
```

You can display options of a specific mode by using the ```--help``` flag. Here is an example to display cpu mode parameters:

```bash
/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \
    --plugin=network::cisco::standard::snmp::plugin \
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

This message generally means that you are not using the right snmp version or community. It could also indicate that a third-party device like a firewall is blocking the SNMP UDP/161 request.

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - the Cisco device doesn't support the MIB used by the plugin
  - the targeted SNMP OID cannot be fetched because of insufficient privileges on the device
