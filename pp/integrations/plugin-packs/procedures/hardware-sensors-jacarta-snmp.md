---
id: hardware-sensors-jacarta-snmp
title: Jacarta Sensor
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Jacarta Sensor** brings a host template:

* HW-Sensor-Jacarta-SNMP-custom

It brings the following service template:

| Service Alias  | Service Template                       | Service Description            | Default |
|:---------------|:---------------------------------------|:-------------------------------|:--------|
| Sensors-Global | HW-Sensors-Jacarta-Sensors-Global-SNMP | Check all sensors of equipment | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Sensors-Global" label="Sensors-Global">

Could not retrieve metrics

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Jacarta Sensor**
server. Please refer to the official documentation from Jacarta Sensor:
* [Jacarta Sensor](https://www.jacarta.com/support/resources/)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Jacarta Sensor** resources:

```bash
yum install centreon-plugin-Hardware-Sensors-Jacarta-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Jacarta Sensor** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Jacarta Sensor** resources:

```bash
yum install centreon-plugin-Hardware-Sensors-Jacarta-Snmp
```

2. Install the **Jacarta Sensor** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-hardware-sensors-jacarta-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Jacarta Sensor** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Jacarta Sensor** server settings.
* Apply the **HW-Sensor-Jacarta-SNMP-custom** template to the host.

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters 
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory   | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_jacarta.pl \
    --plugin=hardware::sensors::jacarta::snmp::plugin \
    --mode=sensors \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --component='.*' \
    --verbose \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: | 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_jacarta.pl \
    --plugin=hardware::sensors::jacarta::snmp::plugin \
    --mode=sensors \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_jacarta.pl \
    --plugin=hardware::sensors::jacarta::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.