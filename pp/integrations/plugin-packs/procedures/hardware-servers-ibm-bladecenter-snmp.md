---
id: hardware-servers-ibm-bladecenter-snmp
title: IBM BladeCenter
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **IBM BladeCenter** brings a host template:

* HW-Server-IBM-Bladecenter-SNMP-custom

It brings the following service templates:

| Service Alias           | Service Template                                | Service Description                                              | Default |
|:------------------------|:------------------------------------------------|:-----------------------------------------------------------------|:--------|
| Hardware-Ambient        | HW-IBM-Bladecenter-Hardware-Ambient-SNMP        | Check 'ambient temperatures' hardware of IBM Bladecenter chassis |         |
| Hardware-Blade          | HW-IBM-Bladecenter-Hardware-Blade-SNMP          | Check 'blades' hardware of IBM Bladecenter chassis               |         |
| Hardware-Blower         | HW-IBM-Bladecenter-Hardware-Blower-SNMP         | Check 'blowers' hardware of IBM Bladecenter chassis              |         |
| Hardware-Chassis-Status | HW-IBM-Bladecenter-Hardware-Chassis-Status-SNMP | Check hardware tests of IBM Bladecenter chassis                  |         |
| Hardware-Global         | HW-IBM-Bladecenter-Hardware-Global-SNMP         | Check all hardware components                                    | X       |
| Hardware-Power-Module   | HW-IBM-Bladecenter-Hardware-Power-Module-SNMP   | Check 'power modules' hardware of IBM Bladecenter chassis        |         |
| Hardware-System-Health  | HW-IBM-Bladecenter-Hardware-System-Health-SNMP  | Check 'system health' hardware of IBM Bladecenter chassis        |         |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Hardware-Global" label="Hardware-Global">

| Metric name                           | Description                   | Unit  |
| :------------------------------------ | :-----------------------------| :---- |
| Blade health state                    | Status                        |       |
| Blade power state                     | Status                        |       |
| Chassis status/state                  | Key/value string status/state |       |
| hardware.ambient.temperature.celsius  | Ambient temperature           |  C    |
| hardware.blower.speed.percentage      | Blower speed percentage       |  %    |
| Overall system health                 | Status string                 |       |
| Power module status/state             | Key/value string status/state |       |

</TabItem>
<TabItem value="Hardware-Ambient" label="Hardware-Ambient">

| Metric name                           | Description               | Unit  |
| :------------------------------------ | :------------------------ | :---- |
| hardware.ambient.temperature.celsius  | Ambient temperature       |  C    |

</TabItem>
<TabItem value="Hardware-Blade" label="Hardware-Blade">

| Metric name         | Description               | Unit  |
| :-------------------| :------------------------ | :---- |
| Blade health state  | Status                    |       |
| Blade power state   | Status                    |       |

</TabItem>
<TabItem value="Hardware-Blower" label="Hardware-Blower">

| Metric name                           | Description               | Unit  |
| :------------------------------------ | :------------------------ | :---- |
| hardware.blower.speed.percentage      | Blower speed percentage   |  %    |

</TabItem>
<TabItem value="Hardware-Chassis-Status" label="Hardware-Chassis-Status">

| Metric name          | Description                   | Unit  |
| :--------------------| :-----------------------------| :---- |
| Chassis status/state | Key/value string status/state |       |

</TabItem>
<TabItem value="Hardware-Power-Module" label="Hardware-Power-Module">

| Metric name               | Description                   | Unit  |
| :-------------------------| :-----------------------------| :---- |
| Power module status/state | Key/value string status/state |       |

</TabItem>
<TabItem value="Hardware-System-Health" label="Hardware-System-Health">

| Metric name             | Description               | Unit  |
| :-----------------------| :------------------------ | :---- |
| Overall system health   | Status string             |       |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **IBM Bladecenter**
server. Please refer to the official documentation from IBM/Lenovo:
* https://bladecenter.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.bladecenter.mgtmod.doc%2Fkp1ag_bc_mmug_configsnmp.html 

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **IBM Bladecenter** resources:

```bash
yum install centreon-plugin-Hardware-Servers-Ibm-Bladecenter-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **IBM BladeCenter** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **IBM Bladecenter** resources:

```bash
yum install centreon-plugin-Hardware-Servers-Ibm-Bladecenter-Snmp
```

2. Install the **IBM BladeCenter** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-hardware-servers-ibm-bladecenter-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **IBM BladeCenter** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **IBM Bladecenter** server settings.
* Apply the **HW-Server-IBM-Bladecenter-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
your own SNMPv3 credentials combo.

| Mandatory   | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_ibm_bladecenter.pl \
    --plugin=hardware::server::ibm::bladecenter::snmp::plugin \
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
OK: All components are OK | 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_ibm_bladecenter.pl \
    --plugin=hardware::server::ibm::bladecenter::snmp::plugin \
    --mode=hardware \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_ibm_bladecenter.pl \
    --plugin=hardware::server::ibm::bladecenter::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.