---
id: hardware-ups-phoenixtec-snmp
title: Phoenixtec UPS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack Phoenixtec collects metrics for:
* Battery status
* Input lines
* Output lines

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Battery-status" label="Battery-status">

| Metric name                      | Description                    | Unit |
| :------------------------------- | :----------------------------- | :--- |
| status                           | Battery status                 |      |
| battery.charge.remaining.percent | Battery capacity in percentage | %    |
| battery.charge.remaining.minutes | Battery capacity in minutes    | min  |
| battery.voltage.volt             | Battery voltage                | V    |
| battery.temperature.celsius      | Battery temperature            | C    |

</TabItem>
<TabItem value="Input-lines" label="Input-lines">

| Metric name                 | Description                  | Unit  |
| :-------------------------- | :--------------------------- | :---- |
| lines.input.frequence.hertz | Current input line frequency | Hz    |
| lines.input.voltage.volt    | Current input line voltage   | V     |

</TabItem>
<TabItem value="Output-lines" label="Output-lines">

| Metric name                  | Description               | Unit  |
| :--------------------------- | :------------------------ | :---- |
| status                       | Output status             |       |
| lines.output.load.percentage | Current output load       | %     |
| lines.output.voltage.volt    | Current output voltage    | V     |
| lines.output.frequence.hertz | Current output frequency  | Hz    |

</TabItem>
</Tabs>

## Prerequisites

To monitor your Phoenixtec UPS, the SNMP must be configured.
The Poller should be able to perform SNMP requests toward the Phoenixtec device over SNMP UDP/161 port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Ups-Phoenixtec-Snmp
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Phoenixtec UPS SNMP* Pack

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Ups-Phoenixtec-Snmp
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-hardware-ups-phoenixtec-snmp
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Phoenixtec UPS SNMP* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *HW-Ups-Phoenixtec-SNMP-custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_ups_phoenixtec_snmp.pl \
    --plugin=hardware::ups::phoenixtec::snmp::plugin \
    --mode=battery-status \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='phoenixtec_ro' \
    --warning-charge-remaining='50:' \
    --critical-charge-remaining='20:' \
    --verbose
```

Expected command output is shown below:

```bash
OK: battery status is 'normal', remaining capacity: 100 % | 'battery.charge.remaining.percent'=100%;50:;20:;0;100 'battery.voltage.volt'=2.2V;;;; 'battery.temperature.celsius'=31.5C;;;;
```

The command above monitors the battery of a Phoenixtec UPS (```--plugin=hardware::ups::phoenixtec::snmp::plugin --mode=battery-status```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='phoenixtec_ro'```).

This command would trigger a WARNING alarm if battery charge remaining above 50% 
(```--warning-charge-remaining='50:'```) and a CRITICAL alarm above 20% (```--critical-charge-remaining='20:'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ups_phoenixtec_snmp.pl \
    --plugin=hardware::ups::phoenixtec::snmp::plugin \
    --mode=battery-status \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins)
