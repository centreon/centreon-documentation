---
id: hardware-storage-bdt-multistak-snmp
title: BDT MultiStak SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Plugin Pack Assets

### Monitored Objects

The Plugin Pack BDT MutliStak SNMP collects metrics for:
* Hardware

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric name                                        | Description                       | Unit |
| :------------------------------------------------- | :-------------------------------- | :--- |
| device status                                      | Status of the device              |      |
| module status                                      | Status of the module              |      |
| module board status                                | Status of the module board        |      |
| module psu status                                  | Status of the module power supply |      |

</TabItem>
</Tabs>

## Prerequisites

To monitor your BDT MultiStak device, the SNMP must be configured.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Bdt-Multistak-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin ¨Packs > Manager", install the *BDT MultiStak SNMP* Plugin-Pack

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Bdt-Multistak-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin Pack from the RPM:

```bash
yum install centreon-pack-hardware-storage-bdt-multistak-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *BDT MultiStak SNMP* Plugin-Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *HW-Storage-Bdt-Multistak-SNMP-Custom* Host Template

> When using SNMP v3, set extra SNMP parameters in the SNMPEXTRAOPTIONS macro. 
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#troubleshooting-snmp) section.

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_bdt_multistak_snmp.pl  \
    --plugin=storage::bdt::multistak::snmp::plugin \
    --mode=hardware \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='bdtms_ro' \
    --verbose
```

Expected command output is shown below:

```bash
OK: All 2 components are ok [1/1 device, 1/1 modules]. | 'hardware.device.count'=1;;;; 'hardware.module.count'=1;;;;
vendor: BDT, product: MULTISTAK, serial: DE56400414, revision: 1.2.0-A000
checking device
device health status is 'ok' [instance: 0]
checking modules
module '4' status is 'OK' [board status: N/A] [power supply: OK][instance: 4].
```

The command above monitors BDT MultiStak equipment (```--plugin=storage::bdt::multistak::snmp::plugin --mode=hardware```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='bdtms_ro'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_bdt_multistak_snmp.pl  \
    --plugin=storage::bdt::multistak::snmp::plugin \
    --mode=hardware \
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
    SNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.20884
