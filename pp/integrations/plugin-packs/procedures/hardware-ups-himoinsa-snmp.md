---
id: hardware-ups-himoinsa-snmp
title: Himoinsa SNMP
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Monitoring Connector **Himoinsa UPS** brings a host template:

* HW-UPS-Himoinsa-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template                | Service Description               | Default |
| :------------ | :------------------------------ | :-------------------------------- | :------ |
| Frequency     | HW-UPS-Himoinsa-Frequency-SNMP  | Check frequency                   | X       |
| Fuel-Level    | HW-UPS-Himoinsa-Fuel-Level-SNMP | Check fuel level                  | X       |
| Phase         | HW-UPS-Himoinsa-Phase-SNMP      | Check 1 phase, 2 phase et 3 phase | X       |
| Status        | HW-UPS-Himoinsa-Status-SNMP     | Check Himoinsa UPS device status  | X       |
| Voltage       | HW-UPS-Himoinsa-Voltage-SNMP    | Check voltage                     | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Frequency" label="Frequency">

| Metric Name                    | Unit |
| :----------------------------- | :--- |
| *index*#genset.frequency.hertz | Hz   |
| *index*#mains.frequency.hertz  | Hz   |

</TabItem>
<TabItem value="Fuel-Level" label="Fuel-Level">

| Metric Name           | Unit |
| :-------------------- | :--- |
| fuel.level.percentage | %    |

</TabItem>
<TabItem value="Phase" label="Phase">

| Metric Name                   | Unit |
| :---------------------------- | :--- |
| *index*#phase1.current.ampere | A    |
| *index*#phase2.current.ampere | A    |
| *index*#phase3.current.ampere | A    |

</TabItem>
<TabItem value="Status" label="Status">

| Metric Name           | Unit |
| :-------------------- | :--- |
| alarm                 |      |
| closed-commutator     |      |
| motor                 |      |
| mode                  |      |
| transfer-pump         |      |

</TabItem>
<TabItem value="Voltage" label="Voltage">

| Metric Name                     | Unit |
| :------------------------------ | :--- |
| *index*#gen.vl12.voltage.volt   | V    |
| *index*#gen.vl13.voltage.volt   | V    |
| *index*#gen.vl1n.voltage.volt   | V    |
| *index*#gen.vl23.voltage.volt   | V    |
| *index*#gen.vl2n.voltage.volt   | V    |
| *index*#gen.vl3n.voltage.volt   | V    |
| *index*#mains.vl12.voltage.volt | V    |
| *index*#mains.vl13.voltage.volt | V    |
| *index*#mains.vl1n.voltage.volt | V    |
| *index*#mains.vl23.voltage.volt | V    |
| *index*#mains.vl2n.voltage.volt | V    |
| *index*#mains.vl3n.voltage.volt | V    |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Himoinsa**
device. Please refer to the official documentation.

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
dnf install centreon-pack-hardware-ups-himoinsa-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-ups-himoinsa-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-ups-himoinsa-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Himoinsa UPS** Pack through
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
dnf install centreon-plugin-Hardware-Ups-Himoinsa-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Ups-Himoinsa-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-ups-himoinsa-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Himoinsa** device settings.
* Apply the **HW-UPS-Himoinsa-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory | Macro            | Description                                 |
| :-------- | :--------------- | :------------------------------------------ |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_ups_himoinsa_snmp.pl \
    --plugin=hardware::ups::himoinsa::snmp::plugin \
    --mode=fuel-level \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-fuel-level='' \
    --critical-fuel-level=''
```

The expected command output is shown below:

```bash
OK: Fuel level: 9% | 'fuel.level.percentage'=9%;;;0;100 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_ups_himoinsa_snmp.pl \
    --plugin=hardware::ups::himoinsa::snmp::plugin \
    --mode=fuel-level \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_ups_himoinsa_snmp.pl \
    --plugin=hardware::ups::himoinsa::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
