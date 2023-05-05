---
id: hardware-ups-riello-snmp
title: Riello UPS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Riello UPS SNMP** brings a host template:

* HW-UPS-Riello-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template                | Service Description        | Default |
|:--------------|:--------------------------------|:---------------------------|:--------|
| Alarms        | HW-UPS-Riello-Alarms-SNMP       | Check current alarms       | X       |
| Battery       | HW-UPS-Riello-Battery-SNMP      | Check battery status       | X       |
| Input-Lines   | HW-UPS-Riello-Input-Lines-SNMP  | Check input lines metrics  | X       |
| Output-Lines  | HW-UPS-Riello-Output-Lines-SNMP | Check output lines metrics | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Metric Name          | Unit  |
|:---------------------|:------|
| alarms.current.count | count |

</TabItem>
<TabItem value="Battery" label="Battery">

| Metric Name                      | Unit  |
|:---------------------------------|:------|
| battery status                   |       |
| battery.charge.remaining.percent | %     |
| battery.charge.remaining.minutes |       |
| battery.current.ampere           | A     |
| battery.temperature.celsius      | C     |
| battery.voltage.volt             | V     |

</TabItem>
<TabItem value="Input-Lines" label="Input-Lines">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| *line_id*#line.input.current.ampere  | A     |
| *line_id*#line.input.frequence.hertz | Hz    |
| *line_id*#line.input.voltage.volt    | V     |

</TabItem>
<TabItem value="Output-Lines" label="Output-Lines">

| Metric Name                           | Unit  |
|:--------------------------------------|:------|
| output source status                  |       |
| *line_id*#line.output.current.ampere  | A     |
| *line_id*#line.output.load.percentage | %     |
| *line_id*#line.output.voltage.volt    | V     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Riello UPS** equipment.

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-ups-riello-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-ups-riello-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-ups-riello-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Riello UPS SNMP** Pack through
the **Configuration > Monitoring Connectors Manager** menu.

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
dnf install centreon-plugin-Hardware-Ups-Riello-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Ups-Riello-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-ups-riello-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Riello UPS** server settings.
* Apply the **HW-UPS-Riello-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins/centreon_ups_riello_snmp.pl \
    --plugin=hardware::ups::riello::snmp::plugin \
    --mode=battery \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

The expected command output is shown below:

```bash
OK: battery status is normal - charge remaining: 100% (135 minutes remaining) | 'battery.charge.remaining.percent'=100%;;;0;100 'battery.charge.remaining.minutes'=135;;;0; 'battery.voltage.volt'=122.5V;;;; 'battery.temperature.celsius'=37C;;;;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ups_riello_snmp.pl \
    --plugin=hardware::ups::riello::snmp::plugin \
    --mode=battery \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_ups_riello_snmp.pl \
    --plugin=hardware::ups::riello::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
