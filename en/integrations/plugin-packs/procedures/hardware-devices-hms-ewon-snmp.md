---
id: hardware-devices-hms-ewon-snmp
title: HMS Ewon SNMP
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack HMS Ewon including monitoring of Tags.

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Tags-->

| Metric name                | Description        | Unit |
| :------------------------- | :----------------- | :--- |
| interface status           | Status of the tag  |      |
| *tagname*#tag.value.count  | Tag value          |      |

It is possible to filter on the name of a tag using a REGEXP of the form [```--filter-tag-name='Fuel'```].

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your HMS Ewon, the SNMP must be configured.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Devices-Hms-Ewon-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *HMS Ewon SNMP* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install entreon-plugin-Hardware-Devices-Hms-Ewon-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-hardware-devices-hms-ewon-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *HMS Ewon SNMP* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *HW-Device-Hms-Ewon-SNMP-custom* Host Template
* Fill the SNMP Version and Community fields according to the device's configuration

> When using SNMP v3, use the SNMPEXTRAOPTIONS Host Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_hms_ewon_snmp.pl \
    --plugin=hardware::devices::hms::ewon::snmp::plugin \
    --mode=tags \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='ewon_ro' \
    --filter-tag-name=Partiel \
    --tag-threshold-warning='40000' \
    --tag-threshold-critical='50000'
    --verbose
```

Expected command output is shown below: 

```bash
CRITICAL: Tag 'Compt_H_Partiel' value: 441985 | 'Compt_H_Partiel#tag.value.count'=441985;0:40000;0:50000;; 'Compt_Ea_Partiel#tag.value.count'=20507;0:40000;0:50000;; 'Compt_Er_Partiel#tag.value.count'=1040;0:40000;0:50000;;
Tag 'Compt_H_Partiel' status: none, value: 441985
Tag 'Compt_Ea_Partiel' status: none, value: 20507
Tag 'Compt_Er_Partiel' status: none, value: 1040
```

The command above monitors HMS Ewon tags (```--plugin=hardware::devices::hms::ewon::snmp::plugin --mode=tags```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='ewon_ro'```).

This command would trigger a WARNING alarm if tags value over 40000 
(```--tag-threshold-warning='40000'```) and a CRITICAL alarm over 50000 (```--tag-threshold-critical='50000'```).

For each Plugin mode, all the options as well as all the available thresholds can be displayed by adding the ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hms_ewon_snmp.pl \
    --plugin=hardware::devices::hms::ewon::snmp::plugin \
    --mode=tags \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of these issues: 
* The SNMP agent of the device isn't started or is misconfigured 
* An external device is blocking the request (firewall, ...)

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - The HMS Ewon device doesn't support the MIB used by the plugin
  - The targeted SNMP OID cannot be fetched because of insufficient privileges on the device. 
    SNMP Agent must be capable of accessing to the enterprise branch HMS Ewon: .1.3.6.1.4.1.8284.2.1
