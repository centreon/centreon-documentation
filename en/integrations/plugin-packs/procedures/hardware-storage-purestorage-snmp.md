---
id: hardware-storage-purestorage-snmp
title: Pure Storage SNMP
---

## Overview

Pure Storage develops flash-based storage for data centers using consumer-grade solid state drives. 
It provides proprietary de-duplication and compression software to improve the amount of data that can be stored on each drive. 
It also develops its own flash storage hardware.

## Plugin-pack assets

### Monitored objects

* Storage array

## Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->
<!--Stats-->

| Metric Name        | Description                                                                                             |
| :----------------- | :------------------------------------------------------------------------------------------------------ |
| Counter            | Counter names. Can be: bandwidth, iops or latency.                                                      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

#### Equipment configuration 
In order to supervise your Pure Storage Arrays, the SNMP v2 must be configured.
Communication must be possible on UDP port 161 from the supervision collector to your equipments.
 
## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Plugin on every poller expected to monitor Pure Storage SNMP resources:

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Snmp
```

2. Install the "Pure-Storage-SNMP" Centreon Plugin Pack from the "Configuration > Plugin packs > Manager" page


<!--Offline IMP License-->

1. Install the Plugin on every poller expected to monitor Pure Storage resources:

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Snmp
```

2. Install the Centreon Plugin Pack RPM on your central server:

```bash
yum install centreon-pack-hardware-storage-purestorage-snmp
```

3. Install the "Pure-Storage-SNMP" Centreon Plugin Pack from the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host Configuration

Apply the "HW-Storage-Purestorage-SNMP-custom" template to your newly created host.
In the host creation form on the Centreon web interface, it is necessary to fill in the values for the "Snmp Community" and "Snmp Version" fields.
Then fill the macros value fileds marked as mandatory below:

| Mandatory   | Name                    | Description                                                                                 |
| :---------- | :---------------------- | :------------------------------------------------------------------------------------------ |
|             | SNMPEXTRAOPTIONS        | Extra options SNMP of Pure Storage                                                          |

:warning: If you are using SNMP version 3, select the appropriate SNMP version and configure the SNMP v3 parameters via the SNMPEXTRAOPTIONS macro.

## FAQ

#### How do I test in the command line and what do the main options mean?

When the plugin is installed, you can test it directly in command line from your Centreon collector with the Centreon-engine user:

```bash
/usr/lib/centreon/plugins//centreon_purestorage_snmp.pl
	--plugin=storage::purestorage::snmp::plugin
	--hostname=localhost
	--snmp-version='2c'
	--snmp-community='public' 
	--mode=stats
	--filter-counters='.*'
	--warning-read-bandwidth='400000000'
	--critical-read-bandwidth='500000000'
	--warning-write-bandwidth='400000000'
	--critical-write-bandwidth='500000000'
	--verbose

OK: Read Bandwith : 376.84 Mb/s - Write Bandwith : 0.00 b/s - Read IOPs : 3871 - Write IOPs : 0 - Read Latency : 197 us/op - Write Latency : 0 us/op | 
'read_bandwidth'=376843408.00b/s;;;0;
'write_bandwidth'=0.00b/s;;;0;
'read_iops'=3871iops;;;0;
'write_iops'=0iops;;;0;
'read_latency'=197us/op;;;0;
'write_latency'=0us/op;;;0;
```
The above command requests via SNMP (```--plugin=storage::purestorage::snmp::plugin```) based on SNMP community (```--snmp-community='public```) and version (```--snmp-version=2c```).
This command checks the current statistics of the storage array (```--mode=stats``).
The command would also return all the counters in the device because the name filter will match any result (```--filter-counters='.*'```).

This command will trigger a WARNING alarm if the volume occupancy rate increases to 400000000b/s (```--warning-read-bandwidth='400000000'```) and a CRITICAL alarm if it increases to 500000000b/s (```--critical-usage='500000000```). 

It is also possible to define WARNING and CRITICAL thresholds on a specific metric: 
In this example a WARNING alarm will be triggered if the bandwidth write increases to '400000000b/s' (```--warning-write-bandwidth='400000000'```) and a CRITICAL alarm will be triggered if it increases to 500000000b/s (```--critical-write-bandwidth='500000000'```).

All modes can be displayed with the following command:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_snmp.pl \
    --plugin=storage::purestorage::snmp::plugin \
    --list-mode
```

The options of the different modes can be checked by adding the parameter ```--help``` to the command:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_snmp.pl \
    --plugin=storage::purestorage::snmp::plugin \
    --mode=stats \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, it means that you are unable to contact the Pure Storage device on UDP port 161, or that the configured SNMP community is not correct. It is also possible that a firewall is blocking the flow.

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following problems: 
  - Pure Storage equipment does not support the MIB used by the plugin.
  - The targeted SNMP OID cannot be recovered due to insufficient equipment privileges.
