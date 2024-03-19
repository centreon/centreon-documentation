---
id: applications-pineapp-securemail-snmp
title: PineApp Mail Secure
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **PineApp Mail Secure** brings a host template:

* App-Pineapp-Securemail-SNMP-custom

It brings the following service template:

| Service Alias | Service Template                   | Service Description | Default |
|:--------------|:-----------------------------------|:--------------------|:--------|
| System        | App-Pineapp-Securemail-System-SNMP | Check system health | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="System" label="System">

| Metric Name                           | Unit  |
|:--------------------------------------|:------|
| system.load.1m.count                  |       |
| system.load.5m.count                  |       |
| system.load.15m.count                 |       |
| system.messages.priority.high.count   |       |
| system.messages.priority.low.count    |       |
| system.messages.priority.normal.count |       |
| system.messages.queue.inbound.count   |       |
| system.messages.queue.outbound.count  |       |
| system.messages.queue.total.count     |       |
| storage-status                        |       |
| *service*#service-status              |       |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **PineApp Mail Secure SNMP**
server. Please refer to the official documentation:
* http://www2.pineapp.com/images/pineapp/pdf/Mail_Secure_5.1_User.Manual_edited.pdf

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
dnf install centreon-pack-applications-pineapp-securemail-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-pineapp-securemail-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-pineapp-securemail-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **PineApp Mail Secure** Pack through
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
dnf install centreon-plugin-Applications-Pineapp-Securemail-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Pineapp-Securemail-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-pineapp-securemail-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **PineApp Mail Secure SNMP** server settings.
* Apply the **App-Pineapp-Securemail-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins//centreon_pineapp_securemail_snmp.pl \
    --plugin=apps::pineapp::securemail::snmp::plugin \
    --mode=system \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

The expected command output is shown below:

```bash
OK: 0.08 (1m) 0.05 (5m) 0.05 (15m) messages inbound queue: 200 messages outbound queue: 100 messages high priority: 100 messages normal priority: 100 messages low priority: 100 messages queue total: 300  | 'system.load.1m.count'=0.08;;;0; 'system.load.5m.count'=0.05;;;0; 'system.load.15m.count'=0.05;;;0; 'system.messages.queue.inbound.count'=200;;;0; 'system.messages.queue.outbound.count'=100;;;0; 'system.messages.priority.high.count'=100;;;0; 'system.messages.priority.normal.count'=100;;;0; 'system.messages.priority.low.count'=100;;;0; 'system.messages.queue.total.count'=300;;;0; 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_pineapp_securemail_snmp.pl \
    --plugin=apps::pineapp::securemail::snmp::plugin \
    --mode=system \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_pineapp_securemail_snmp.pl \
    --plugin=apps::pineapp::securemail::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.