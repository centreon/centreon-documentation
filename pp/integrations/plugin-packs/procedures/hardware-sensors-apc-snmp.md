---
id: hardware-sensors-apc-snmp
title: APC Sensor SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **APC Sensor SNMP** brings a host template:

* HW-Sensor-Apc-SNMP-custom

It brings the following service template:

| Service Alias | Service Template            | Service Description            | Default |
|:--------------|:----------------------------|:-------------------------------|:--------|
| Sensors       | HW-Sensors-Apc-Sensors-SNMP | Check all sensors of equipment | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Sensors" label="Sensors">

| Metric Name                                                  | Unit  |
|:-------------------------------------------------------------|:------|
| module sensor fluid status                                   |       |
| module sensor humidity status                                |       |
| *module_name~sensor_num*#hardware.sensor.humidity.percentage | %     |
| wireless sensor humidity status                              |       |
| *sensor_num*#hardware.sensor.humidity.percentage             | %     |
| module sensor temperature status                             |       |
| *module_name~sensor_num*#hardware.sensor.temperature.celsius | %     |
| wireless sensor temperature status                           |       |
| *sensor_num*#hardware.sensor.temperature.celsius             | %     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **APC Sensor**
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
dnf install centreon-pack-hardware-sensors-apc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-sensors-apc-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-sensors-apc-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **APC Sensor SNMP** Pack through
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
dnf install centreon-plugin-Hardware-Sensors-Apc-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Sensors-Apc-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-sensors-apc-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **APC Sensor** server settings.
* Apply the **HW-Sensor-Apc-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins//centreon_sensors_apc_snmp.pl \
    --plugin=hardware::sensors::apc::snmp::plugin \
    --mode=sensors \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All 6 components are ok [2/2 humidity, 4/4 temperatures]. | 'Baguley_Netbotz:Sensor NB:1#hardware.sensor.temperature.celsius'=19C;;;; 'BG_RH_SIDE#hardware.sensor.temperature.celsius'=20C;18:28;16:28;; 'BG_LH_Side#hardware.sensor.temperature.celsius'=19.6C;18:28;16:28;; 'Baguley_Netbotz:Sensor NB:1#hardware.sensor.humidity.percentage'=48%;;;0;100 'hardware.humidity.count'=2;;;; 'hardware.temperature.count'=4;;;;
Checking temperatures
temperature 'Baguley_Netbotz:Sensor NB:1' alarm status is normal [instance: module.0.1] [value: 19] [comm: ok]
temperature 'BG_RH_SIDE' is 20 C [instance: wireless.1] [comm: active]
temperature 'BG_LH_Side' is 19.6 C [instance: wireless.2] [comm: active]
Checking humidities
humidity 'Baguley_Netbotz:Sensor NB:1' alarm status is normal [instance: module.0.1] [value: 48] [comm: ok]
humidity 'BG_RH_SIDE' is -1 % [instance: wireless.1] [comm: active]
humidity 'BG_LH_Side' is -1 % [instance: wireless.2] [comm: active]
Checking fluids
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_sensors_apc_snmp.pl \
    --plugin=hardware::sensors::apc::snmp::plugin \
    --mode=sensors \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_sensors_apc_snmp.pl \
    --plugin=hardware::sensors::apc::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
