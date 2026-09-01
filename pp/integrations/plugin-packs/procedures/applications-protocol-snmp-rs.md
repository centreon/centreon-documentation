---
id: applications-protocol-snmp-rs
title: Generic SNMP (Rust)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Generic SNMP (Rust)** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Generic SNMP (Rust)** brings a host template:

* **App-Protocol-SNMP-Rs-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Protocol-SNMP-Rs-custom" label="App-Protocol-SNMP-Rs-custom">

| Service Alias | Service Template                   | Service Description                  |
|:--------------|:-----------------------------------|:-------------------------------------|
| Uptime        | App-Protocol-SNMP-Uptime-Rs-custom | Time since the host has been running |

> The services listed above are created automatically when the **App-Protocol-SNMP-Rs-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Uptime" label="Uptime">

| Name                  | Unit |
|:----------------------|:-----|
| system.uptime.seconds | s    |

</TabItem>
</Tabs>

## Prerequisites

The SNMP agent must be enabled and configured on the resource. 
Please refer to the official documentation from the manufacturer/publisher. 
Your resource may require a list of addresses authorized to query it to be set up. 
Please ensure that the addresses of the Centreon pollers are included in this list.

## Installing the monitoring connector

### Pack

The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-protocol-snmp-rs
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-snmp-rs
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-protocol-snmp-rs
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-snmp-rs
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Generic SNMP (Rust)** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

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
dnf install centreon-plugin-applications-protocol-snmp-rs
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-applications-protocol-snmp-rs
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-protocol-snmp-rs
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Protocol-SNMP-Rs-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro              | Description                                                                                                                                        | Default value | Mandatory |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| SNMP\_EXTRA\_OPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Uptime" label="Uptime">

| Macro            | Description                                                                                                                                      | Default value | Mandatory |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNING_SECONDS  | Warning threshold for the metric 'system.uptime.seconds'                                                                                         |               |           |
| CRITICAL_SECONDS | Critical threshold for the metric 'system.uptime.seconds'                                                                                        |               |           |
| EXTRA_OPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon-plugin-rust-snmp -H '10.0.0.1' -c 'my-snmp-community' -v '2c'  \
	--json '/usr/lib/centreon/plugins/rs-collections/applications-protocol-snmp/uptime.json' \
	--warning-seconds='' \
	--critical-seconds='' 
```

The expected command output is shown below:

```
OK: Uptime: 64750s | 'system.uptime.seconds'=64750s;;;0;
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon-plugin-rust-snmp -H '10.0.0.1' -c 'my-snmp-community' -v '2c'  \
	--json '/usr/lib/centreon/plugins/rs-collections/applications-protocol-snmp/uptime.json' \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                                                                     | Linked service template               |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/cpu.json.pm)]                   | Not used in this Monitoring Connector |
| processcount [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/processcount.json.pm)] | Not used in this Monitoring Connector |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/storage.json.pm)]           | Not used in this Monitoring Connector |
| sysdesc [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/sysdesc.json.pm)]           | Not used in this Monitoring Connector |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/uptime.json.pm)]             | App-Protocol-SNMP-Uptime-Rs-custom    |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Uptime" label="Uptime">

| Option             | Description                                                                               |
|:-------------------|:------------------------------------------------------------------------------------------|
| --warning-seconds  | Warning threshold for the metric 'system.uptime.seconds'.                                 |
| --critical-seconds | Critical threshold for the metric 'system.uptime.seconds'.                                |
| --hostname         | Hostname or IP address (default: localhost)                                               |
| --port             | SNMP port (default: 161)                                                                  |
| --snmp-version     | SNMP version (default: 2c)                                                                |
| --json             | JSON command definition file                                                              |
| --filter-in        | Include filter (can be used multiple times)                                               |
| --filter-out       | Exclude filter (can be used multiple times)                                               |
| --no-data-status   | Status when the filters keep no data: OK, WARNING, CRITICAL or UNKNOWN (default: UNKNOWN) |
| --check-format     | Check JSON file validity and exit                                                         |
| --check-response   | Display raw SNMP response                                                                 |
| --list-counters    | List all available metrics                                                                |
| --help             | Print this help message                                                                   |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon-plugin-rust-snmp -H '10.0.0.1' -c 'my-snmp-community' -v '2c'  \
	--json '/usr/lib/centreon/plugins/rs-collections/applications-protocol-snmp/uptime.json' \
	--warning-seconds='' \
	--help
```
