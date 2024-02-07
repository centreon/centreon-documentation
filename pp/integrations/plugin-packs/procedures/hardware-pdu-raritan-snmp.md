---
id: hardware-pdu-raritan-snmp
title: Raritan PDU SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Raritan PDU** brings a host template:

* HW-Pdu-Raritan-SNMP-custom

It brings the following service templates:

| Service Alias    | Service Template                     | Service Description      | Default |
|:-----------------|:-------------------------------------|:-------------------------|:--------|
| External-Sensors | HW-Pdu-Raritan-External-Sensors-SNMP | Check exxternal sensors  | X       |
| Inlet-Sensors    | HW-Pdu-Raritan-InletSensors-SNMP     | Check PDU inlets sensors | X       |
| Ocprt-Sensors    | HW-Pdu-Raritan-Ocprt-Sensors-SNMP    | Check PDU OCPRT sensors  | X       |
| Outlet-Sensors   | HW-Pdu-Raritan-OutletSensors-SNMP    | Check PDU outlets        | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="External-Sensors" label="External-Sensors">

| Metric Name                                                          | Unit  |
|:---------------------------------------------------------------------|:------|
| *pdu_name~sensor_label*#hardware.sensor.external.humidity.percentage | %     |
| *pdu_name~sensor_label*#hardware.sensor.external.temperature.celsius | C     |

</TabItem>
<TabItem value="Inlet-Sensors" label="Inlet-Sensors">

| Metric Name                                                         | Unit  |
|:--------------------------------------------------------------------|:------|
| *pdu_name~sensor_label*#hardware.sensor.inlet.activeenergy.watthour |       |
| *pdu_name~sensor_label*#hardware.sensor.inlet.activepower.watt      | W     |
| *pdu_name~sensor_label*#hardware.sensor.inlet.apparentpower.voltamp | C     |
| *pdu_name~sensor_label*#hardware.sensor.inlet.frequency.hertz       | Hz    |
| *pdu_name~sensor_label*#hardware.sensor.inlet.powerfactor           |       |
| *pdu_name~sensor_label*#hardware.sensor.inlet.rmscurrent.ampere     | A     |
| *pdu_name~sensor_label*#hardware.sensor.inlet.rmsvoltage.volt       | V     |

</TabItem>
<TabItem value="Ocprt-Sensors" label="Ocprt-Sensors">

| Metric Name                                                      | Unit  |
|:-----------------------------------------------------------------|:------|
| *pdu_name~sensor_label*#hardware.sensor.ocprot.rmscurrent.ampere | A     |

</TabItem>
<TabItem value="Outlet-Sensors" label="Outlet-Sensors">

| Metric Name               | Unit  |
|:--------------------------|:------|
| outlet onOff sensor state |       |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Raritan PDU** equipment.

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
dnf install centreon-pack-hardware-pdu-raritan-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-pdu-raritan-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-pdu-raritan-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Raritan PDU** Pack through
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
dnf install centreon-plugin-Hardware-Pdu-Raritan-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Pdu-Raritan-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-pdu-raritan-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Raritan PDU** server settings.
* Apply the **HW-Pdu-Raritan-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins/centreon_pdu_raritan_snmp.pl \
    --plugin=hardware::pdu::raritan::snmp::plugin \
    --mode=external-sensors \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --component='.*' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All 2 components are ok [1/1 humidity, 1/1 temperature]. | 'IRG1.PDU1.A1~Relative Humidity 1#hardware.sensor.external.humidity.percentage'=40%;15:85;10:90;; 'IRG1.PDU1.A1~Temperature 1#hardware.sensor.external.temperature.celsius'=21.4C;15:30;10:35;; 'hardware.humidity.count'=1;;;; 'hardware.temperature.count'=1;;;;
Checking humidity
'Relative Humidity 1' humidity state is 'normal' [instance: Relative Humidity 1, value: 40, unit: %, label: Relative Humidity 1, pdu: IRG1.PDU1.A1]
Checking temperature
'Temperature 1' temperature state is 'normal' [instance: Temperature 1, value: 21.4, unit: C, label: Temperature 1, pdu: IRG1.PDU1.A1]
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_pdu_raritan_snmp.pl \
    --plugin=hardware::pdu::raritan::snmp::plugin \
    --mode=external-sensors \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_pdu_raritan_snmp.pl \
    --plugin=hardware::pdu::raritan::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
