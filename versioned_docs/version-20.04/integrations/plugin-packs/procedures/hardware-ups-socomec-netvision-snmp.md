---
id: hardware-ups-socomec-netvision-snmp
title: UPS Socomec Net Vision SNMP
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack Socomec Net Vision SNMP including Alarms, Battery, Input-lines, Output-lines.

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Alarms-->

| Metric name                 | Description                  | Unit  |
| :-------------------------- | :--------------------------- | :---- |
| alarms.current.count        | Number of alarms             |       |

<!--Battery-->

| Metric name                                    | Description                     | Unit |
| :--------------------------------------------- | :------------------------------ | :--- |
| status                                         | Battery status                  |      |
| battery.charge.remaining.percent               | Battery load                    | %    |
| battery.charge.remaining.minutes               | Battery charge remaining        |      |
| battery.current.ampere                         | Battery current                 | A    |
| battery.voltage.volt                           | Battery voltage                 | V    |
| battery.temperature.celsius                    | Battery temperature             | C    |

<!--Input-lines-->

| Metric name                            | Description                               | Unit  |
| :------------------------------------- | :---------------------------------------- | :---- |
| lines.input.frequence.hertz            | Lines frequency                           | Hz    |
| *linenumber*#line.input.current.ampere | Line current                              | A     |
| *linenumber*#line.input.voltage.volt   | Line voltage                              | V     |

<!--Output-lines-->

| Metric name                              | Description                               | Unit  |
| :--------------------------------------- | :---------------------------------------- | :---- |
| source status                            | Input source status                       |       |
| *linenumber*#line.output.load.percentage | Line load                                 | %     |
| *linenumber*#line.output.current.ampere  | Line current                              | A     |
| *linenumber*#line.output.voltage.volt    | Line voltage                              | V     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Socomec, the SNMP must be configured.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Ups-Socomec-Netvision-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Socomec Net Vision UPS SNMP* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Ups-Socomec-Netvision-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-hardware-ups-socomec-netvision-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Socomec Net Vision UPS SNMP* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *HW-UPS-Socomec-Netvision-SNMP-Custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_ups_socomec_netvision_snmp.pl \
    --plugin=hardware::ups::socomec::netvision::snmp::plugin \
    --mode=output-lines \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='socomec_ro' \
    --warning-voltage='235' \
    --critical-voltage='240' \
    --verbose
```

Expected command output is shown below:

```bash
OK: Output source status is 'onInverter' - All output lines are ok | '1#line.output.load.percentage'=33.00%;;;0;100 '1#line.output.current.ampere'=5.70A;;;0; '1#line.output.voltage.volt'=230.00V;235;240;; '2#line.output.load.percentage'=20.00%;;;0;100 '2#line.output.current.ampere'=1.80A;;;0; '2#line.output.voltage.volt'=229.00V;235;240;; '3#line.output.load.percentage'=29.00%;;;0;100 '3#line.output.current.ampere'=5.20A;;;0; '3#line.output.voltage.volt'=230.00V;235;240;;
Output line '1' load: 33.00 %, current: 5.70 A, voltage: 230.00 V
Output line '2' load: 20.00 %, current: 1.80 A, voltage: 229.00 V
Output line '3' load: 29.00 %, current: 5.20 A, voltage: 230.00 V
```

The command above monitors UPS Socomec (```--plugin=hardware::ups::socomec::netvision::snmp::plugin --mode=output-lines```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='socomec_ro'```).

This command would trigger a WARNING alarm if input line voltage over 235V 
(```--warning-voltage='235'```) and a CRITICAL alarm over 240V (```--critical-voltage='240'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ups_socomec_netvision_snmp.pl \
    --plugin=hardware::ups::socomec::netvision::snmp::plugin \
    --mode=output-lines \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:
* The SNMP agent of the device isn't started or is misconfigured
* An external device is blocking the request (firewall, ...)

#### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - The agent doesn't support the MIB used by the plugin
  - The targeted SNMP OID cannot be fetched because of insufficient privileges on the device. 
    SNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.4555
