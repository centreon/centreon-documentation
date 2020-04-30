---
id: network-adva-fsp150-snmp
title: Adva FSP 150 SNMP
---

## Overview

Adva Optical Networking sells network equipment for data, storage, voice and video services.

## Plugin-pack assets 

### Monitored equipments

All Adva FSP 150 models can be monitored.

## Collected metrics

* alarms: current alarms
* hardware: current components status
* interfaces: interfaces status, traffic and errors.
* systems: CPU and memory

<!--DOCUSAURUS_CODE_TABS-->

<!--Alarms-->

| Metric name                        | Description                                                         |
| :--------------------------------- | :------------------------------------------------------------------ |
| alerts.problems.current.count      | Current total alarms or new alarms. Unit: Count                     |

<!--Hardware-->

| Metric name                             | Description                                                         |
| :-------------------------------------- | :------------------------------------------------------------------ |
| hardware.card.count                     | Number of cards. Unit: Count                                        |
| hardware.shelf.count                    | Number of shelfs. Unit: Count                                       |

<!--Interfaces-->

| Metric name                               | Description                                                             |
| :---------------------------------------- | :---------------------------------------------------------------------- |
| interface.traffic.in.bitspersecond        | Incoming traffic going through the interface. Units: b/s & %            |
| interface.packets.in.error.percentage     | Incoming errored packets going through an interface. Units: Count & %   |
| interface.packets.in.discard.percentage   | Incoming discarded packets going through an interface. Units: Count & % |
| interface.traffic.out.bitspersecond       | Outgoing traffic going through the interface. Units: b/s & %            |
| interface.packets.out.error.percentage    | Outgoing errored packets going through an interface. Units: Count & %   |
| interface.packets.out.discard.percentage  | Outgoing discarded packets going through an interface. Units: Count & % |

A regexp filter is available to target a specific interface identifier/ifName [```--interface='^my-interface-name$' --name```] 

<!--Systems-->

| Metric name                             | Description                                                         |
| :-------------------------------------- | :------------------------------------------------------------------ |
| system.cpu.utilization.15min.percentage | CPU utilization for the last 15 minutes. Unit: %                    |
| system.memory.usage.bytes               | Memory usage on the device. Unit: Bytes                             |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Adva FSP 150 device configuration 

To use this pack, the SNMP service must be properly configured on your device.

### Network flow

Your Centreon poller must be able to reach the SNMP port (UDP/161) of the Adva device.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Adva FSP 150 SNMP Centreon Plugin on every poller expected:

```bash
yum install centreon-plugin-Network-Adva-Fsp150-Snmp
```

2. Install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page


<!--Offline IMP License-->

1. Install the Adva FSP 150 SNMP Centreon Plugin on every poller expected:

```bash
yum install centreon-plugin-Network-Adva-Fsp150-Snmp
```

2. Install the Centreon Plugin-Pack RPM:

```bash
yum install centreon-pack-network-adva-fsp150-snmp
```

3. Install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

When creating an host, fill the 'SNMP Community' and 'SNMP Version' fields to match the device configuration. 

  :warning: When using SNMP v3, set extra parameters with SNMPEXTRAOPTIONS macro 

| Mandatory   | Name              | Description                                    |
| :---------- | :---------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS  | Configure your own SNMPv3 credentials combo    |

## FAQ

### How do I test my configuration through the CLI and what do the main parameters stand for ? 

Once the Centreon Plugin installed, you can test it directly on the Centreon poller by logging into the CLI with the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins/centreon_adva_fsp150_snmp.pl \
	--plugin=network::adva::fsp150::snmp::plugin \
	--mode=systems \
	--hostname=10.30.2.114 \
	--snmp-version='2c' \
	--snmp-community='public' \
  --verbose 
```

The command above checks the CPU and memory (```--mode=systems```) of an Adva FSP 150 device. The device's IP address is *10.30.2.114* (```--hostname=10.30.2.114```), SNMP version 2 is used and the device's SNMP community is *public* (```--snmp-community='public'```).

You can display all modes available for the Plugin using the ```--list-mode``` parameter as in the command below: 

```bash
/usr/lib/centreon/plugins/centreon_adva_fsp150_snmp.pl \
    --plugin=network::adva::fsp150::snmp::plugin \
    --list-mode
```

You can display options of a specific mode by using the ```--help``` flag. Here is an example to display systems mode parameters:

```bash
/usr/lib/centreon/plugins/centreon_adva_fsp150_snmp.pl \
    --plugin=network::adva::fsp150::snmp::plugin \
    --mode=systems \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

This message generally means that you are not using the right SNMP version or community. It could also indicate that a third-party device like a firewall is blocking the SNMP UDP/161 request.

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - the Adva Optical device doesn't support the MIB used by the plugin
  - the targeted SNMP OID cannot be fetched because of insufficient privileges on the device
