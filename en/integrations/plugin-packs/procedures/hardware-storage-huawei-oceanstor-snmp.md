---
id: hardware-storage-huawei-oceanstor-snmp
title: Huawei OceanStor SNMP
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack Huawei OceanStor SNMP collects metrics for:
* Controllers
* Hardware
* Storage pools

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                                          | Description                                           |
| :------------------------------------------------- | :---------------------------------------------------- |
| HW-Storage-Huawei-Oceanstor-SNMP-Controller-Id     | Discover controllers and monitor cpu and memory usage |
| HW-Storage-Huawei-Oceanstor-SNMP-Storage-Pool-Name | Discover storage pools and monitor space usage        |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Controllers-->

| Metric name                                             | Description                              | Unit |
| :------------------------------------------------------ | :--------------------------------------- | :--- |
| status                                                  | Status of the controller                 |      |
| *controller\_id*\#controller.cpu.utilization.percentage | CPU utilization                          | %    |
| *controller\_id*\#controller.memory.usage.percentage    | Memory usage                             | %    |

<!--Hardware-->

| Metric name                                            | Description                       | Unit |
| :----------------------------------------------------- | :-------------------------------- | :--- |
| bbu status                                             | Status of the battery backup unit |      |
| disk status                                            | Status of the disk                |      |
| *disk\_instance*#hardware.disk.temperature.celsius     | Temperature of the disk           | C    |
| enclosure status                                       | Status of the enclosure           |      |
| *enclosure\_id*#hardware.enclosure.temperature.celsius | Temperature of the enclosure      | C    |
| expboard status                                        | Status of the expansion board     |      |
| fan status                                             | Status of the fan                 |      |
| psu status                                             | Status of the power supply        |      |

<!--Storage-pools-->

| Metric name                                              | Description                              | Unit |
| :------------------------------------------------------- | :--------------------------------------- | :--- |
| status                                                   | Status of the stprage pool               |      |
| *storagepool\_name*\#storage_pool.space.usage.bytes      | Usage of the storage pool                | B    |
| *storagepool\_name*\#storage_pool.space.free.bytes       | Free space left on the storage pool      | B    |
| *storagepool\_name*\#storage_pool.space.usage.percentage | Usage of the storage pool in percentage  | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Huawei OceanStor, the SNMP must be configured.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Huawei-Oceanstor-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Huawei OceanStor SNMP* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Huawei-Oceanstor-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-hardware-storage-huawei-oceanstor-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Huawei OceanStor SNMP* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *HW-Storage-Huawei-Oceanstor-SNMP-Custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_huawei_oceanstor_snmp.pl \
    --plugin=storage::huawei::oceanstor::snmp::plugin \
    --mode=controllers \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='huawei_ro' \
    --warning-cpu-utilization=90 \
    --warning-cpu-utilization=95 \
    --verbose
```

Expected command output is shown below:

```bash
OK: All controllers are ok | '0A#controller.cpu.utilization.percentage'=6.00%;0:95;;0;100 '0A#controller.memory.usage.percentage'=76.00%;;;0;100 '0B#controller.cpu.utilization.percentage'=8.00%;0:95;;0;100 '0B#controller.memory.usage.percentage'=75.00%;;;0;100
checking controller '0A'
    health status: Normal [running status: Online]
    cpu usage: 6.00 %
    memory used: 76.00 %
checking controller '0B'
    health status: Normal [running status: Online]
    cpu usage: 8.00 %
    memory used: 75.00 %
```

The command above monitors Huawei OceanStor (```--plugin=storage::huawei::oceanstor::snmp::plugin --mode=controllers```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='huawei_ro'```).

This command would trigger a WARNING alarm if cpu utilization over 90% 
(```--warning-cpu-utilization='90'```) and a CRITICAL alarm over 95% (```--critical-cpu-utilization='95'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_huawei_oceanstor_snmp.pl \
    --plugin=storage::huawei::oceanstor::snmp::plugin \
    --mode=controllers \
    --help
```

## Troubleshooting

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:
* The SNMP agent of the device isn't started or is misconfigured
* An external device is blocking the request (firewall, ...)

#### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - The agent doesn't support the MIB used by the plugin
  - The targeted SNMP OID cannot be fetched because of insufficient privileges on the device. 
    SNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.34774.4
