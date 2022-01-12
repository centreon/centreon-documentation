---
id: hardware-ups-cyberpower-snmp
title: CyberPower Systems UPS SNMP
---

## Pack Assets

### Monitored Objects

The Pack CyberPower UPS collects metrics for:
* Battery status
* Input lines
* Output lines

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Battery-status-->

| Metric name                      | Description         | Unit |
| :------------------------------- | :------------------ | :--- |
| status                           | Battery status      |      |
| battery.charge.remaining.percent | Battery capacity    | %    |
| battery.voltage.volt             | Battery voltage     | V    |
| battery.temperature.celsius      | Battery temperature | C    |

<!--Input-lines-->

| Metric name                 | Description                                             | Unit  |
| :-------------------------- | :------------------------------------------------------ | :---- |
| status                      | Present status of the utility power supplied to the UPS |       |
| lines.input.frequence.hertz | Current input line frequency                            | Hz    |
| lines.input.voltage.volt    | Current input line voltage                              | V     |

<!--Output-lines-->

| Metric name                  | Description               | Unit  |
| :--------------------------- | :------------------------ | :---- |
| status                       | Output status             |       |
| lines.output.load.percentage | Current output load       | %     |
| lines.output.current.ampere  | Current ampere level      | A     |
| lines.output.voltage.volt    | Current output voltage    | V     |
| lines.output.power.watt      | Total output active power | W     |
| lines.output.frequence.hertz | Current output frequency  | Hz     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To monitor your CyberPower UPS, the SNMP must be configured.
The Poller should be able to perform SNMP requests toward the CyberPower device over SNMP UDP/161 port.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Ups-Cyberpower-Snmp
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *CyberPower Systems UPS SNMP* Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Ups-Cyberpower-Snmp
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-hardware-ups-cyberpower-snmp
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *CyberPower Systems UPS SNMP* Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *HW-UPS-Cyberpower-SNMP-custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_ups_cyberpower_snmp.pl \
    --plugin=hardware::ups::cyberpower::snmp::plugin \
    --mode=battery-status \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='cps_ro' \
    --warning-charge-remaining='50:' \
    --critical-charge-remaining='20:' \
    --verbose
```

Expected command output is shown below:

```bash
OK: battery status is normal - charge remaining: 100% (10 minutes remaining) | 'battery.charge.remaining.percent'=100%;50:;20:;0;100
```

The command above monitors the battery of a CyberPower UPS (```--plugin=hardware::ups::cyberpower::snmp::plugin --mode=battery-status```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='cps_ro'```).

This command would trigger a WARNING alarm if battery charge remaining above 50% 
(```--warning-charge-remaining='50:'```) and a CRITICAL alarm above 20% (```--critical-charge-remaining='20:'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ups_cyberpower_snmp.pl \
    --plugin=hardware::ups::cyberpower::snmp::plugin \
    --mode=battery-status \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins)
