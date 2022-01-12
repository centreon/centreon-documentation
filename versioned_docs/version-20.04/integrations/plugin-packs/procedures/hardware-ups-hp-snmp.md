---
id: hardware-ups-hp-snmp
title: HP UPS SNMP
---

## Pack Assets

### Monitored Objects

The Pack HP UPS collects metrics for:
* Battery status
* Environment
* Input lines
* Output lines

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Battery-status-->

| Metric name                      | Description                    | Unit |
| :------------------------------- | :----------------------------- | :--- |
| status                           | Battery status                 |      |
| battery.charge.remaining.percent | Battery capacity in percentage | %    |
| battery.charge.remaining.minutes | Battery capacity in minutes    | min  |
| battery.current.ampere           | Battery ampere level           | A    |
| battery.voltage.volt             | Battery voltage                | V    |

<!--Environment-->

| Metric name                              | Description               | Unit  |
| :--------------------------------------- | :------------------------ | :---- |
| environment.internal.temperature.celsius | Ambient temperature       | C     |
| environment.internal.humidity.percentage | Ambient humidity          | %     |
| environment.remote.temperature.celsius   | Remote temperature sensor | C     |
| environment.remote.humidity.percentage   | Remote humidity sensor    | %     |

<!--Input-lines-->

| Metric name                              | Description           | Unit  |
| :--------------------------------------- | :-------------------- | :---- |
| lines.input.frequence.hertz              | Input line frequency  | Hz    |
| *line\_phase*\#line.input.current.ampere | Input line current    | A     |
| *line\_phase*\#line.input.voltage.volt   | Input line voltage    | V     |
| *line\_phase*\#line.input.power.watt     | Input line real power | W     |

<!--Output-lines-->

| Metric name                               | Description           | Unit  |
| :---------------------------------------- | :-------------------- | :---- |
| source status                             | Output source status  |       |
| lines.output.load.percentage              | Output load           | %     |
| lines.output.frequence.hertz              | Output line frequency | Hz    |
| *line\_phase*\#line.output.current.ampere | Output line current   | A     |
| *line\_phase*\#line.output.voltage.volt   | Output line voltage   | V     |
| *line\_phase*\#line.output.power.watt     | Ouput line real power | W     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To monitor your HP UPS, the SNMP must be configured.
The Poller should be able to perform SNMP requests toward the HP device over SNMP UDP/161 port.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Ups-Hp-Snmp
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *HP UPS SNMP* Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Ups-Hp-Snmp
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-hardware-ups-hp-snmp
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *HP UPS SNMP* Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *HW-UPS-HP-SNMP-custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_ups_hp_snmp.pl \
    --plugin=hardware::ups::hp::snmp::plugin \
    --mode=battery-status \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='hp_ro' \
    --warning-charge-remaining='50:' \
    --critical-charge-remaining='20:' \
    --verbose
```

Expected command output is shown below:

```bash
OK: battery status is 'normal', remaining capacity: 100 % | 'battery.charge.remaining.percent'=100%;50:;20:;0;100 'battery.voltage.volt'=2.2V;;;;
```

The command above monitors the battery of a HP UPS (```--plugin=hardware::ups::hp::snmp::plugin --mode=battery-status```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='hp_ro'```).

This command would trigger a WARNING alarm if battery charge remaining above 50% 
(```--warning-charge-remaining='50:'```) and a CRITICAL alarm above 20% (```--critical-charge-remaining='20:'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ups_hp_snmp.pl \
    --plugin=hardware::ups::hp::snmp::plugin \
    --mode=battery-status \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins)
