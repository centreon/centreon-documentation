---
id: hardware-servers-lenovo-xcc-snmp
title: Lenovo XCC SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

Lenovo develops, manufactures and sells computer hardware and software.

## Pack Assets

### Templates

The Centreon Monitoring Connector **Lenovo XCC SNMP** brings a host template:

* HW-Server-Lenovo-Xcc-SNMP-custom

It brings the following service template:

| Service Alias | Service Template                   | Service Description | Default |
|:--------------|:-----------------------------------|:--------------------|:--------|
| Hardware      | HW-Lenovo-Xcc-Hardware-Global-SNMP | Check all sensors   | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric name                   | Description                          | Unit |
|:------------------------------|:-------------------------------------|:-----|
| temperature.status            | Status of temperature                |      |
| voltage.status                | Status of voltage                    |      |
| fan.status                    | Status of fan                        |      |
| psu.status                    | Status of psu                        |      |
| disk.status                   | Status of disk                       |      |
| raidvolume.status             | Status of raidvolume                 |      |
| hardware.temperature.celsius  | Temperature of the different sensors | C    |
| hardware.voltage.volt         | Voltage of the different sensors     |      |
| hardware.fan.speed.percentage | Speed of fan                         | %    |

</TabItem>
</Tabs>



## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Lenovo XCC SNMP**
server. Please refer to the official documentation from Lenovo:
* [Lenovo XCC SNMP](https://sysmgt.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.systems.management.xcc.doc%2FNN1ia_c_configuringSNMP.html)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-servers-lenovo-xcc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-servers-lenovo-xcc-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-servers-lenovo-xcc-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Lenovo XCC SNMP** Pack through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Hardware-Servers-Lenovo-Xcc-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Servers-Lenovo-Xcc-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-servers-lenovo-xcc-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Lenovo XCC SNMP** server settings.
* Apply the **HW-Server-Lenovo-Xcc-SNMP-custom** template to the host.

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory | Macro            | Description                                 |
|:----------|:-----------------|:--------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_lenovo_xcc_snmp.pl \
    --plugin=hardware::server::lenovo::xcc::snmp::plugin \
    --mode=hardware \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --component='.*' \
    --verbose \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: All 34 components are ok [2/2 disk, 14/14 fans, 2/2 psu, 1/1 raidvolume, 11/11 temperatures, 4/4 voltages]. | 'temp_CPU1 Temp'=30C;;;; 'temp_CPU1 DTS'=-51.0C;;0:-0.2;; 'temp_CPU2 Temp'=31C;;;; 'temp_CPU2 DTS'=-51.0C;;0:-0.2;; 'temp_DIMM 5 Temp'=27C;;;; 'temp_DIMM 8 Temp'=27C;;;; 'temp_DIMM 17 Temp'=27C;;;; 'temp_DIMM 20 Temp'=27C;;;; 'temp_PCH Temp'=43C;;;; 'temp_Ambient Temp'=27C;0:43;0:47;; 'temp_Exhaust Temp'=27C;;;; 'volt_CMOS Battery'=3.1850;2.3920:;2.2490:;; 'volt_SysBrd 3.3V'=3.3015;;2.9760:3.6270;; 'volt_SysBrd 5V'=5.0310;;4.4928:5.4990;; 'volt_SysBrd 12V'=12.096;;10.808:13.216;; 'fan_Fan 1A Tach'=41%;;;0;100 'fan_Fan 1B Tach'=33%;;;0;100 'fan_Fan 2A Tach'=33%;;;0;100 'fan_Fan 2B Tach'=33%;;;0;100 'fan_Fan 3A Tach'=33%;;;0;100 'fan_Fan 3B Tach'=33%;;;0;100 'fan_Fan 4A Tach'=33%;;;0;100 'fan_Fan 4B Tach'=33%;;;0;100 'fan_Fan 5A Tach'=33%;;;0;100 'fan_Fan 5B Tach'=33%;;;0;100 'fan_Fan 6A Tach'=33%;;;0;100 'fan_Fan 6B Tach'=33%;;;0;100 'fan_Fan 7A Tach'=33%;;;0;100 'fan_Fan 7B Tach'=33%;;;0;100 'count_disk'=2;;;; 'count_fan'=14;;;; 'count_psu'=2;;;; 'count_raidvolume'=1;;;; 'count_temperature'=11;;;; 'count_voltage'=4;;;;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_lenovo_xcc_snmp.pl \
    --plugin=hardware::server::lenovo::xcc::snmp::plugin \
    --mode=hardware \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_lenovo_xcc_snmp.pl \
    --plugin=hardware::server::lenovo::xcc::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.