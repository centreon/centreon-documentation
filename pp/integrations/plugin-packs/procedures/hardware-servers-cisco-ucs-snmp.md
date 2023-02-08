---
id: hardware-servers-cisco-ucs-snmp
title: Cisco UCS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Cisco UCS** brings a host template:

* HW-Server-Cisco-Ucs-SNMP-custom

It brings the following service templates:

| Service Alias   | Service Template                         | Service Description             | Default |
|:----------------|:-----------------------------------------|:--------------------------------|:--------|
| Audit-Logs      | HW-Server-Cisco-Ucs-Audit-Logs-SNMP      | Check audit logs                | X       |
| Equipment       | HW-Server-Cisco-Ucs-Equipment-SNMP       | Check hardware state            | X       |
| Faults          | HW-Server-Cisco-Ucs-Faults-SNMP          | Check faults                    | X       |
| Mgmt-Entities   | HW-Server-Cisco-Ucs-Mgmt-Entities-SNMP   | Check management entities       |         |
| Service-Profile | HW-Server-Cisco-Ucs-Service-Profile-SNMP | Check count of service profiles |         |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Audit-Logs" label="Audit-Logs">

| Metric Name       | Unit  |
|:------------------|:------|
| audit.            |       |
| audit.total.count | count |
| status            |       |

</TabItem>
<TabItem value="Equipment" label="Equipment">

Could not retrive metrics

</TabItem>
<TabItem value="Faults" label="Faults">

| Metric Name        | Unit  |
|:-------------------|:------|
| faults.            |       |
| faults.total.count | count |
| status             |       |

</TabItem>
<TabItem value="Mgmt-Entities" label="Mgmt-Entities">

| Metric Name   | Unit  |
|:--------------|:------|
| total         |       |
| *mgmt*#status |       |

</TabItem>
<TabItem value="Service-Profile" label="Service-Profile">

| Metric Name                   | Unit  |
|:------------------------------|:------|
| serviceprofiles.offline.count | count |
| serviceprofiles.online.count  | count |
| serviceprofiles.total.count   | count |
| *sp*#status                   |       |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Cisco UCS**
server. Please refer to the official documentation from CISCO:
* [Cisco UCS](https://www.cisco.com/c/en/us/td/docs/unified_computing/ucs/ucs-manager/GUI-User-Guides/System-Monitoring/3-1/b_UCSM_GUI_System_Monitoring_Guide_3_1/b_UCSM_GUI_System_Monitoring_Guide_3_1_chapter_0101.html)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Plugin Packs > Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Cisco UCS** Pack through
the **Configuration > Plugin Packs > Manager** menu.

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
dnf install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-servers-cisco-ucs-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Cisco UCS** server settings.
* Apply the **HW-Server-Cisco-Ucs-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \
    --plugin=hardware::server::cisco::ucs::snmp::plugin \
    --mode=service-profile \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-total='' \
    --critical-total='' \
    --warning-online='' \
    --critical-online='' \
    --warning-offline='' \
    --critical-offline='' \
    --warning-status='%{severity} =~ /minor|warning/' \
    --critical-status='%{severity} =~ /major|critical/' \
    --verbose \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: total: %s online: %s offline: %s  | 'serviceprofiles.total.count'=9000;;;0; 'serviceprofiles.online.count'=9000;;;0; 'serviceprofiles.offline.count'=9000;;;0; 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \
    --plugin=hardware::server::cisco::ucs::snmp::plugin \
    --mode=service-profile \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \
    --plugin=hardware::server::cisco::ucs::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.