---
id: hardware-servers-supermicro-superdoctor-snmp
title: Supermicro SuperDoctor SNMP
---

## Pack Assets

### Monitored Objects

The Pack Supermicro SuperDoctor collects metrics for:
* Hardware

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Hardware-->

| Metric name                   | Description                               | Unit |
|:----------------------------- |:----------------------------------------- |:---- |
| disk.status                   | Status of the disk                        |      |
| raid.status                   | Status of the raid                        |      |
| fan.status                    | Status of the fan                         |      |
| temperature.status            | Status of the temperature                 |      |
| voltage.status                | Status of the voltage                     |      |
| hardware.fan.speed.rpm        | Speed of fan                              | rpm  |
| hardware.temperature.celsius  | temperature of the different sensors      | C    |
| hardware.voltage.millivolt    | Voltage of the different sensors          | mV   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To monitor your Lenovo Iomega, the SNMP must be configured.
The Poller should be able to perform SNMP requests toward the Lenovo device over SNMP UDP/161 port.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Lenovo-Iomega-Snmp
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Lenovo IomegaP* Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Lenovo-Iomega-Snmp
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-hardware-storage-lenovo-iomega-snmp
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Lenovo Iomega* Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *HW-Storage-Lenovo-Iomega-SNMP-custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_lenovo_iomega_snmp.pl
    --plugin=storage::lenovo::iomega::snmp::plugin
    --mode=cpu
    --hostname=10.30.2.114
    --snmp-version='2c'
    --snmp-community='iomega_ro'
    --warning-average='90'
    --critical-average='95'
    --verbose
```

Expected command output is shown below:

```bash
OK: CPU(s) average usage is 15.29 % - CPU '0' usage : 15.29 % | 'total_cpu_avg'=15.29%;0:90;0:95;0;100 'cpu'=15.29%;;;0;100
```

The command above monitors Lenovo Iomega processor (```--plugin=storage::lenovo::iomega::snmp::plugin --mode=cpu```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='iomega_ro'```).

This command would trigger a WARNING alarm if cpu utilization over 90% 
(```--warning-average='90'```) and a CRITICAL alarm over 95% (```--critical-average='95'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_lenovo_iomega_snmp.pl
    --plugin=storage::lenovo::iomega::snmp::plugin
    --mode=cpu \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins.html)

