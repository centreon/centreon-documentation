---
id: hardware-storage-purestorage-snmp
title: Pure Storage SNMP
---

## Overview

Pure Storage develops flash-based storage for data centers using consumer-grade solid state drives. It provides 
proprietary de-duplication and compression software to improve the amount of data that can be stored on each drive.
	
## Plugin-Pack assets

### Monitored objects

* Storage array

## Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->
<!--Stats-->

| Metric Name              | Description                                                     |
| :----------------------- | :-------------------------------------------------------------- |
| pureArrayReadBandwidth   | Read Bandwidth Volume on the storage array. Unit: Bits/second   |
| pureArrayWriteBandwidth  | Write Bandwidth Volume on the storage array. Unit: Bits/second  |
| pureArrayReadIOPS        | Read Operations on the storage array. Unit: iops                |
| pureArrayWriteIOPS       | Write Operations on the storage array. Unit: iops               |
| pureArrayReadLatency     | Storage array Read Latency (us/op). Unit: us/operations         |
| pureArrayWriteLatency    | Storage array Write Latency (us/op). Unit: us/operations        |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Configuration Pure Storage Equipment  

The SNMP agent must be configured on the Pure Storage devices.

### Network flow

Your Centreon poller must be able to reach the PureStorage storage array on the UDP/161 SNMP port.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Plugin on every poller expected to monitor Pure Storage SNMP resources:

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Snmp
```

2. Install the "Pure Storage SNMP" Centreon Plugin-Pack from the "Configuration > Plugin packs > Manager" page


<!--Offline IMP License-->

1. Install the Plugin on every poller expected to monitor Pure Storage resources:

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Snmp
```

2. Install the Centreon Plugin-Pack RPM on your central server:

```bash
yum install centreon-pack-hardware-storage-purestorage-snmp
```

3. Install the "Pure Storage SNMP" Centreon Plugin-Pack from the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host Configuration

Apply the "HW-Storage-Purestorage-SNMP-custom" template to your newly created host.
In the host creation form on the Centreon Web interface, it is necessary to set the proper values in the "SNMP Community" and "SNMP Version" fields.

:warning: If you are using SNMP version 3, select the relevant SNMP version and configure the SNMP v3 parameters in the SNMPEXTRAOPTIONS Macro field.

| Mandatory | Name             | Description                        |
| :-------- | :--------------- | :--------------------------------- |
|           | SNMPEXTRAOPTIONS | Extra options SNMP                 |

## FAQ

#### How do I test in the command line and what do the main options mean?

Once the Plugin installed, you can test it directly from your Centreon poller CLI using the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins//centreon_purestorage_snmp.pl \
	--plugin=storage::purestorage::snmp::plugin \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='public' \
	--mode=stats \
	--filter-counters='.*' \
	--warning-read-bandwidth='400000000' \
	--critical-read-bandwidth='500000000' \
	--verbose
```

If everything's fine, it should output something similar to:

```bash
OK: Read Bandwith : 376.84 Mb/s - Write Bandwith : 0.00 b/s - Read IOPs : 3871 - Write IOPs : 0 - Read Latency : 197 us/op - Write Latency : 0 us/op | 'read_bandwidth'=376843408.00b/s;;;0; 'write_bandwidth'=0.00b/s;;;0; 'read_iops'=3871iops;;;0; 'write_iops'=0iops;;;0; 'read_latency'=197us/op;;;0; 'write_latency'=0us/op;;;0;
```

The above command requests a PureStorage array using the SNMP protocol (```--plugin=storage::purestorage::snmp::plugin```) using the *public* SNMP community (```--snmp-community='public```).
This command checks the current statistics of the storage array (```--mode=stats```).

This command will trigger a WARNING alarm if the *read* bandwidth increases to more than 400000000b/s (```--warning-read-bandwidth='400000000'```) and a CRITICAL alarm if more than 500000000b/s (```--critical-read-bandwidth='500000000'```). 

Thresholds can be set on all of the device metrics using the syntax ```--warning-*metric* --critical-*metric*```

The syntax of the different options of the thresholds as well as the list of options and their usage are detailed in the help of the mode by adding the parameter ```--help``` to the command:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_snmp.pl \
	--plugin=storage::purestorage::snmp::plugin \
	--mode=stats \
	--help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, it means that you are unable to reach the Pure Storage device on the UDP/161 SNMP port, or that the configured SNMP community is not correct. It is also possible that a firewall is blocking the flow.

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following problems: 
* Pure Storage equipment does not support the MIB used by the plugin.
* The targeted SNMP OID cannot be recovered due to insufficient equipment privileges.
