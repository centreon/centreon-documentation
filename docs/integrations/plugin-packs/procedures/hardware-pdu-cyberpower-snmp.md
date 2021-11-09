---
id: hardware-pdu-cyberpower-snmp
title: CyberPower Systems PDU SNMP
---

## Overview

CyberPower Basic Power Distribution Units (PDUs) provide reliable unfiltered power distribution
 from a UPS system, generator, or utility source to multiple devices

## Plugin-Pack assets

### Monitored objects

* PDUs Physical entities (outlets, bank, phases)

## Collected metrics 

<!--DOCUSAURUS_CODE_TABS-->

<!--Load-->

| Metric name              | Description                                       | Unit |
|:------------------------ |:------------------------------------------------- |:---- |
| bank status              | Bank status, possible to set string-based alerts  |      |
| bank.current.ampere      | Current Bank Ampere level                         |  A   |
| phase status             | Phase status, possible to set string-based alerts |      |
| phase.current.ampere     | Current Ampere level on a given Phase             |  A   |
| phase.power.watt         | Current Watt Power on a given Phase               |  W   |

<!--Outlets-->

| Metric name                | Description                                             | Unit |
|:---------------------------|:--------------------------------------------------------|:-----|
| outlet status              | Outlet status, possible to set string-based alerts      |      |
| outlet.current.ampere      | Current Ampere on a given outlet                        |   A  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites 

Le Service SNMP doit être activé et configuré sur l'équipement CyberPower. 

Le Collecteur Centreon doit être en mesure d'atteindre le PDU CyberPower via le port
UDP/161. 

Afin d'obtenir plus d'information sur la configuration SNMP, il est recommandé de se référer à la
documentation officielle: 
https://dl4jz3rbrsfum.cloudfront.net/documents/CyberPower_UM_IntelligentPDUUserGuide.pdf\.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources *CyberPower Systems PDU SNMP*:

```bash
yum install centreon-plugin-Hardware-Pdu-Cyberpower-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *CyberPower Systems PDU SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *CyberPower Systems PDU SNMP* applications:

```bash
yum install centreon-plugin-Hardware-Pdu-Cyberpower-Snmp
```

2. Installer le RPM Centreon Plugin-Pack sur votre serveur Centreon Central:

```bash
yum install centreon-pack-hardware-pdu-cyberpower-snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *CyberPower Systems PDU SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts". 
* Fill the "Name", "Alias", "IP Address / DNS", "Snmp Community" and "Snmp version" fields according to your device's configuration
* Select the *HW-Pdu-Cyberpower-SNMP*.

  :warning: When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific auth parameters

| Mandatory   | Name             | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command (some of the parameters 
such as ```--snmp-community``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_pdu_cyberpower_snmp.pl \
--plugin=hardware::pdu::cyberpower::snmp::plugin \
--mode=outlets \
--snmp-community=cps_pdu \
--hostname=10.31.2.1 \
--snmp-version=2c \
--verbose 
```

Expected command output is shown below: 

```bash
OK: Device 'PDU81005' outlets are ok | 'PDU81005~Outlet3 bank 1#outlet.current.ampere'=0.4A;;;0; 'PDU81005~Outlet7 bank 1#outlet.current.ampere'=0.4A;;;0; 'PDU81005~Outlet8 bank 1#outlet.current.ampere'=0.9A;;;0;checking device 'PDU81005'outlet 'Outlet1 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet2 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet3 bank 1' state: 'on' [phase: seqPhase1ToNeutral], current : 0.4 Aoutlet 'Outlet4 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet5 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet6 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet7 bank 1' state: 'on' [phase: seqPhase1ToNeutral], current : 0.4 Aoutlet 'Outlet8 bank 1' state: 'on' [phase: seqPhase1ToNeutral], current : 0.9 A
```

In this example, the Plugin gets the status and utilization metrics of the Outlets: 
(```--plugin=hardware::pdu::cyberpower::snmp::plugin --mode=outlets```)

All the available thresholds parameters can be displayed by adding the  ```--help``` 
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_pdu_cyberpower_snmp.pl \
--plugin=hardware::pdu::cyberpower::snmp::plugin \
--mode=outlets \
--help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues: 
* Your SNMP isn't started or misconfigured on the CyberPower PDU System
* An external device is blocking your request (firewall, ...)

### UNKNOWN: SNMP GET Request : Cant get a single value.

This message generally means that SNMP privileges are not wide enough for the mode/plugin to work properly 
or that the polled device doesn't support required MIBs. 