---
id: hardware-servers-xfusion-ibmc-snmp
title: xFusion iBMC SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **xFusion iBMC SNMP** brings a host template:

* HW-Server-Xfusion-Ibmc-SNMP-custom

It brings the following service template:

| Service Alias | Service Template                     | Service Description    | Default |
|:--------------|:-------------------------------------|:-----------------------|:--------|
| Hardware      | HW-Server-Xfusion-Ibmc-Hardware-SNMP | Check components state | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric Name                                           | Unit  |
|:------------------------------------------------------|:------|
| component status                                      |       |
| cpu status                                            |       |
| fan status                                            |       |
| *fan_name*#hardware.fan.speed.rpm                     | rpm   |
| hard disk status                                      |       |
| *harddisk_name*#hardware.harddisk.temperature.celsius | C     |
| logical drive status                                  |       |
| memory status                                         |       |
| pcie status                                           |       |
| power supply status                                   |       |
| *powersupply_name*#hardware.powersupply.power.watt    | W     |
| raid controller status                                |       |
| temperature status                                    |       |
| *temperature_object*#hardware.temperature.celsius     | C     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **xFusion iBMC**
server.

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
dnf install centreon-pack-hardware-servers-xfusion-ibmc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-servers-xfusion-ibmc-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-servers-xfusion-ibmc-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **xFusion iBMC SNMP** Pack through
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
dnf install centreon-plugin-Hardware-Servers-Xfusion-Ibmc-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Servers-Xfusion-Ibmc-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-servers-xfusion-ibmc-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **xFusion iBMC** server settings.
* Apply the **HW-Server-Xfusion-Ibmc-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory   | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_xfusion_ibmc_snmp.pl \
    --plugin=hardware::server::xfusion::ibmc::snmp::plugin \
    --mode=hardware \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --component='' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All 44 components are ok [9/9 components, 2/2 cpu, 14/14 fans, 2/2 hard disks, 1/1 logical drives, 8/8 memorys, 2/2 pcie, 2/2 power supplies, 1/1 raidcontrollers, 3/3 temperatures]. | 'Disk0#hardware.harddisk.temperature.celsius'=34C;;;0; 'Disk1#hardware.harddisk.temperature.celsius'=34C;;;0; 'Fan1 Front#hardware.fan.speed.rpm'=9060rpm;;;0; 'Fan1 Rear#hardware.fan.speed.rpm'=8520rpm;;;0; 'Fan2 Front#hardware.fan.speed.rpm'=9180rpm;;;0; 'Fan2 Rear#hardware.fan.speed.rpm'=8400rpm;;;0; 'Fan3 Front#hardware.fan.speed.rpm'=9240rpm;;;0; 'Fan3 Rear#hardware.fan.speed.rpm'=8460rpm;;;0; 'Fan4 Front#hardware.fan.speed.rpm'=9120rpm;;;0; 'Fan4 Rear#hardware.fan.speed.rpm'=8340rpm;;;0; 'Fan5 Front#hardware.fan.speed.rpm'=9120rpm;;;0; 'Fan5 Rear#hardware.fan.speed.rpm'=8460rpm;;;0; 'Fan6 Front#hardware.fan.speed.rpm'=9120rpm;;;0; 'Fan6 Rear#hardware.fan.speed.rpm'=8520rpm;;;0; 'Fan7 Front#hardware.fan.speed.rpm'=9240rpm;;;0; 'Fan7 Rear#hardware.fan.speed.rpm'=8460rpm;;;0; 'PSU1#hardware.powersupply.power.watt'=128W;;;0;900 'PSU2#hardware.powersupply.power.watt'=112W;;;0;900 'Inlet#hardware.temperature.celsius'=25C;;;; 'CPU1#hardware.temperature.celsius'=37C;;;; 'CPU2#hardware.temperature.celsius'=41C;;;; 'hardware.component.count'=9;;;; 'hardware.cpu.count'=2;;;; 'hardware.fan.count'=14;;;; 'hardware.harddisk.count'=2;;;; 'hardware.logicaldrive.count'=1;;;; 'hardware.memory.count'=8;;;; 'hardware.pcie.count'=2;;;; 'hardware.psu.count'=2;;;; 'hardware.raidcontroller.count'=1;;;; 'hardware.temperature.count'=3;;;;
Checking component
component 'SC332' of type 'unknown' status is 'ok' [instance: 5.83.67.51.51.50]
component 'SC382' of type 'unknown' status is 'ok' [instance: 5.83.67.51.56.50]
component 'SP331' of type 'unknown' status is 'ok' [instance: 5.83.80.51.51.49]
component 'SP382' of type 'unknown' status is 'ok' [instance: 5.83.80.51.56.50]
component 'BC11HBBD' of type 'hddBackPlane' status is 'ok' [instance: 8.66.67.49.49.72.66.66.68]
component 'BC82PRUU' of type 'unknown' status is 'ok' [instance: 8.66.67.56.50.80.82.85.85]
component 'BC82PRUV' of type 'unknown' status is 'ok' [instance: 8.66.67.56.50.80.82.85.86]
component 'Mainboard' of type 'baseBoard' status is 'ok' [instance: 9.77.97.105.110.98.111.97.114.100]
component 'Public Module' of type 'raidCard' status is 'ok' [instance: 13.80.117.98.108.105.99.32.77.111.100.117.108.101]
Checking CPU
cpu 'CPU1' status is 'ok' [instance: 1]
cpu 'CPU2' status is 'ok' [instance: 2]
Checking hard disks
hard disk 'Disk0' status is 'ok' [instance: 1]
hard disk 'Disk1' status is 'ok' [instance: 2]
Checking fans
fan 'Fan1 Front' status is 'ok' [instance: 1]
fan 'Fan1 Rear' status is 'ok' [instance: 2]
fan 'Fan2 Front' status is 'ok' [instance: 3]
fan 'Fan2 Rear' status is 'ok' [instance: 4]
fan 'Fan3 Front' status is 'ok' [instance: 5]
fan 'Fan3 Rear' status is 'ok' [instance: 6]
fan 'Fan4 Front' status is 'ok' [instance: 7]
fan 'Fan4 Rear' status is 'ok' [instance: 8]
fan 'Fan5 Front' status is 'ok' [instance: 9]
fan 'Fan5 Rear' status is 'ok' [instance: 10]
fan 'Fan6 Front' status is 'ok' [instance: 11]
fan 'Fan6 Rear' status is 'ok' [instance: 12]
fan 'Fan7 Front' status is 'ok' [instance: 13]
fan 'Fan7 Rear' status is 'ok' [instance: 14]
Checking logical drives
logical drive '1.1' status is 'optimal' [instance: 1.1]
Checking memory
memory 'DIMM000' status is 'ok' [instance: 1]
memory 'DIMM020' status is 'ok' [instance: 5]
memory 'DIMM040' status is 'ok' [instance: 9]
memory 'DIMM060' status is 'ok' [instance: 13]
memory 'DIMM100' status is 'ok' [instance: 17]
memory 'DIMM120' status is 'ok' [instance: 21]
memory 'DIMM140' status is 'ok' [instance: 25]
memory 'DIMM160' status is 'ok' [instance: 29]
Checking PCIe
PCIe 'PCIe Card 1 (SP331)' status is 'ok' [instance: 1]
PCIe 'PCIe Card 2 (SP382)' status is 'ok' [instance: 2]
Checking power supplies
power supply 'PSU1' status is 'ok' [instance: 1]
power supply 'PSU2' status is 'ok' [instance: 2]
Checking raid controllers
raid controller 'RAID Card1' status is 'ok' [instance: 1]
Checking temperatures
temperature of 'Inlet' is '25' celsius degrees [instance: 1]
temperature of 'CPU1' is '37' celsius degrees [instance: 2]
temperature of 'CPU2' is '41' celsius degrees [instance: 3]
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_xfusion_ibmc_snmp.pl \
    --plugin=hardware::server::xfusion::ibmc::snmp::plugin \
    --mode=hardware \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_xfusion_ibmc_snmp.pl \
    --plugin=hardware::server::xfusion::ibmc::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
