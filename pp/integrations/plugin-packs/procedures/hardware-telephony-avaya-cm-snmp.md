---
id: hardware-telephony-avaya-cm-snmp
title: Avaya CM SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Avaya CM SNMP** (communication manager) brings a host template:

* HW-Telephony-Avaya-Cm-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template                    | Service Description   | Default |
|:--------------|:------------------------------------|:----------------------|:--------|
| Calls         | HW-Telephony-Avaya-Cm-Calls-SNMP    | Check number of calls | X       |
| Licenses      | HW-Telephony-Avaya-Cm-Licenses-SNMP | Check licenses        | X       |
| Trunks        | HW-Telephony-Avaya-Cm-Trunks-SNMP   | Check trunks          | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Calls" label="Calls">

| Metric Name                | Unit  |
|:---------------------------|:------|
| calls.total.lasthour.count | count |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Metric Name                        | Unit  |
|:-----------------------------------|:------|
| stations.capacity.usage.count      | count |
| stations.capacity.free.count       | count |
| stations.capacity.usage.percentage | %     |

</TabItem>
<TabItem value="Trunks" label="Trunks">

| Metric Name         | Unit  |
|:--------------------|:------|
| trunk signal status |       |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Avaya CM**
equipment.

### Network flow

The target equipment must be reachable from the Centreon poller on the UDP/161
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
dnf install centreon-pack-hardware-telephony-avaya-cm-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-telephony-avaya-cm-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-telephony-avaya-cm-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Avaya CM SNMP** Pack through
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
dnf install centreon-plugin-Hardware-Telephony-Avaya-Cm-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Telephony-Avaya-Cm-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-telephony-avaya-cm-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Avaya CM** server settings.
* Apply the **HW-Telephony-Avaya-Cm-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins//centreon_avaya_cm_snmp.pl \
    --plugin=hardware::telephony::avaya::cm::snmp::plugin \
    --mode=licenses \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community'
```

The expected command output is shown below:

```bash
OK: station capacity total: 2766 used: 2432 (87.92%) free: 334 (12.08%) | 'stations.capacity.usage.count'=2432;;;0;2766 'stations.capacity.free.count'=334;;;0;2766 'stations.capacity.usage.percentage'=87.92%;;;0;100
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_avaya_cm_snmp.pl \
    --plugin=hardware::telephony::avaya::cm::snmp::plugin \
    --mode=licenses \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_avaya_cm_snmp.pl \
    --plugin=hardware::telephony::avaya::cm::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
