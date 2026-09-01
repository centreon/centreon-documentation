---
id: operatingsystems-windows-snmp-rs
title: Windows SNMP (Rust)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Windows SNMP (Rust)** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Generic SNMP (Rust)](./applications-protocol-snmp-rs.md)

## Pack assets

### Templates

The Monitoring Connector **Windows SNMP (Rust)** brings a host template:

* **OS-Windows-SNMP-Rs-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="OS-Windows-SNMP-Rs-custom" label="OS-Windows-SNMP-Rs-custom">

| Service Alias | Service Template                      | Service Description                                  |
|:--------------|:--------------------------------------|:-----------------------------------------------------|
| Cpu           | OS-Windows-Cpu-SNMP-Rs-custom         | Check the rate of utilization of CPU for the machine |
| Disk-Global   | OS-Windows-Disk-Global-SNMP-Rs-custom | Check the rate of free space on disks                |
| Memory        | OS-Windows-Memory-SNMP-Rs-custom      | Monitor the memory (RAM) usage                       |
| Swap          | OS-Windows-Swap-SNMP-Rs-custom        | Check the rate of the utilization of virtual memory  |
| Uptime        | OS-Windows-Uptime-SNMP-Rs-custom      | Time since the host has been running                 |

> The services listed above are created automatically when the **OS-Windows-SNMP-Rs-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias   | Service Template                          | Service Description                                                       |
|:----------------|:------------------------------------------|:--------------------------------------------------------------------------|
| Process-Generic | OS-Windows-Process-Generic-SNMP-Rs-custom | Check if Windows processes are started and monitor their CPU/memory usage |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Name                         | Unit |
|:-----------------------------|:-----|
| avg.cpu.usage.percent        | %    |
| *cpu*#core.cpu.usage.percent | %    |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Name                                        | Unit |
|:--------------------------------------------|:-----|
| *storage.description*#storage.usage.bytes   | B    |
| *storage.description*#storage.usage.percent | %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Name                                       | Unit |
|:-------------------------------------------|:-----|
| *storage.description*#memory.usage.percent | %    |
| *storage.description*#memory.usage.bytes   | B    |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Name                                  | Unit |
|:--------------------------------------|:-----|
| *processes.name*#process.memory.bytes | B    |
| *processes.name*#process.cpu.percent  | %    |

</TabItem>
<TabItem value="Swap" label="Swap">

| Name                                       | Unit |
|:-------------------------------------------|:-----|
| *storage.description*#memory.usage.percent | %    |
| *storage.description*#memory.usage.bytes   | B    |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Name                  | Unit |
|:----------------------|:-----|
| system.uptime.seconds | s    |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your Windows server. Please refer to the [Microsoft Knowledgebase to configure SNMP on your server](https://support.microsoft.com/en-us/kb/324263)

### Network flow

The target resource must be reachable from the Centreon poller on the UDP/161 SNMP port.

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
dnf install centreon-pack-operatingsystems-windows-snmp-rs
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-windows-snmp-rs
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-windows-snmp-rs
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Windows SNMP (Rust)** connector through
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
dnf install centreon-plugin-operatingsystems-windows-snmp-rs
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-operatingsystems-windows-snmp-rs
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-windows-snmp-rs
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **OS-Windows-SNMP-Rs-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                                                                                                              | Default value | Mandatory |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| SNMP\_EXTRA\_OPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro            | Description                                                                                                                            | Default value | Mandatory |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNING_AVERAGE  | Warning threshold for the overall average                                                                                              |               |           |
| CRITICAL_AVERAGE | Critical threshold for the overall average                                                                                             |               |           |
| WARNING_CORE     | Warning threshold for the metric 'core.cpu.usage.percent'                                                                              |               |           |
| CRITICAL_CORE    | Critical threshold for the metric 'core.cpu.usage.percent'                                                                             |               |           |
| EXTRA_OPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Macro            | Description                                                                                                                                      | Default value | Mandatory |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| INCLUDE_NAME     | Include filter (can be used multiple times)                                                                                                      | .*            |           |
| WARNING_BYTES    | Warning threshold for the metric 'storage.usage.bytes'                                                                                           |               |           |
| CRITICAL_BYTES   | Critical threshold for the metric 'storage.usage.bytes'                                                                                          |               |           |
| WARNING_PERCENT  | Warning threshold for the metric 'storage.usage.percent'                                                                                         |               |           |
| CRITICAL_PERCENT | Critical threshold for the metric 'storage.usage.percent'                                                                                        |               |           |
| EXTRA_OPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro            | Description                                                                                                                                      | Default value | Mandatory |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNING_BYTES    | Warning threshold for the metric 'memory.usage.bytes'                                                                                            |               |           |
| CRITICAL_BYTES   | Critical threshold for the metric 'memory.usage.bytes'                                                                                           |               |           |
| WARNING_PERCENT  | Warning threshold for the metric 'memory.usage.percent'                                                                                          |               |           |
| CRITICAL_PERCENT | Critical threshold for the metric 'memory.usage.percent'                                                                                         |               |           |
| EXTRA_OPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Macro           | Description                                                                                                                                      | Default value | Mandatory |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| INCLUDE_NAME    | Include filter (can be used multiple times)                                                                                                      | .*            |           |
| EXCLUDE_NAME    | Exclude filter (can be used multiple times)                                                                                                      | ^$            |           |
| NO_DATA_STATUS  | Status when the filters keep no data: OK, WARNING, CRITICAL or UNKNOWN                                                                           | CRITICAL      |           |
| WARNING_CPU     | Warning threshold for the metric 'process.cpu.percent'                                                                                           |               |           |
| CRITICAL_CPU    | Critical threshold for the metric 'process.cpu.percent'                                                                                          |               |           |
| WARNING_MEMORY  | Warning threshold for the metric 'process.memory.bytes'                                                                                          |               |           |
| CRITICAL_MEMORY | Critical threshold for the metric 'process.memory.bytes'                                                                                         |               |           |
| EXTRA_OPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro            | Description                                                                                                                                      | Default value | Mandatory |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNING_BYTES    | Warning threshold for the metric 'memory.usage.bytes'                                                                                            |               |           |
| CRITICAL_BYTES   | Critical threshold for the metric 'memory.usage.bytes'                                                                                           |               |           |
| WARNING_PERCENT  | Warning threshold for the metric 'memory.usage.percent'                                                                                          |               |           |
| CRITICAL_PERCENT | Critical threshold for the metric 'memory.usage.percent'                                                                                         |               |           |
| EXTRA_OPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
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
	--json '/usr/lib/centreon/plugins/rs-collections/operatingsystems-windows-snmp/uptime.json' \
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
	--json '/usr/lib/centreon/plugins/rs-collections/operatingsystems-windows-snmp/uptime.json' \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                                                                     | Linked service template                                              |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/cpu.json.pm)]                   | OS-Windows-Cpu-SNMP-Rs-custom                                        |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/operatingsystems-windows-snmp/memory.json.pm)]          | OS-Windows-Memory-SNMP-Rs-custom<br />OS-Windows-Swap-SNMP-Rs-custom |
| processcount [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/processcount.json.pm)] | OS-Windows-Process-Generic-SNMP-Rs-custom                            |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/storage.json.pm)]           | OS-Windows-Disk-Global-SNMP-Rs-custom                                |
| sysdesc [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/sysdesc.json.pm)]           | Not used in this Monitoring Connector                                |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/uptime.json.pm)]             | OS-Windows-Uptime-SNMP-Rs-custom                                     |

### Available options

#### Generic options

All generic options are listed here:

| Option           | Description                                                                               |
|:-----------------|:------------------------------------------------------------------------------------------|
| --hostname       | Hostname or IP address (default: localhost)                                               |
| --port           | SNMP port (default: 161)                                                                  |
| --snmp-version   | SNMP version (default: 2c)                                                                |
| --json           | JSON command definition file                                                              |
| --filter-in      | Include filter (can be used multiple times)                                               |
| --filter-out     | Exclude filter (can be used multiple times)                                               |
| --no-data-status | Status when the filters keep no data: OK, WARNING, CRITICAL or UNKNOWN (default: UNKNOWN) |
| --check-format   | Check JSON file validity and exit                                                         |
| --check-response | Display raw SNMP response                                                                 |
| --list-counters  | List all available metrics                                                                |
| --help           | Print this help message                                                                   |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option          | Description                                                 |
|:----------------|:------------------------------------------------------------|
| --warning-core  | Warning threshold for the metric 'core.cpu.usage.percent'.  |
| --critical-core | Critical threshold for the metric 'core.cpu.usage.percent'. |
| --warning-avg   | Warning threshold for the metric 'avg.cpu.usage.percent'.   |
| --critical-avg  | Critical threshold for the metric 'avg.cpu.usage.percent'.  |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Option           | Description                                                |
|:-----------------|:-----------------------------------------------------------|
| --warning-bytes  | Warning threshold for the metric 'storage.usage.bytes'.    |
| --critical-bytes | Critical threshold for the metric 'storage.usage.bytes'.   |
| --warning-prct   | Warning threshold for the metric 'storage.usage.percent'.  |
| --critical-prct  | Critical threshold for the metric 'storage.usage.percent'. |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option           | Description                                               |
|:-----------------|:----------------------------------------------------------|
| --warning-prct   | Warning threshold for the metric 'memory.usage.percent'.  |
| --critical-prct  | Critical threshold for the metric 'memory.usage.percent'. |
| --warning-bytes  | Warning threshold for the metric 'memory.usage.bytes'.    |
| --critical-bytes | Critical threshold for the metric 'memory.usage.bytes'.   |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Option                    | Description                                               |
|:--------------------------|:----------------------------------------------------------|
| --warning-process-memory  | Warning threshold for the metric 'process.memory.bytes'.  |
| --critical-process-memory | Critical threshold for the metric 'process.memory.bytes'. |
| --warning-process-cpu     | Warning threshold for the metric 'process.cpu.percent'.   |
| --critical-process-cpu    | Critical threshold for the metric 'process.cpu.percent'.  |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option           | Description                                               |
|:-----------------|:----------------------------------------------------------|
| --warning-prct   | Warning threshold for the metric 'memory.usage.percent'.  |
| --critical-prct  | Critical threshold for the metric 'memory.usage.percent'. |
| --warning-bytes  | Warning threshold for the metric 'memory.usage.bytes'.    |
| --critical-bytes | Critical threshold for the metric 'memory.usage.bytes'.   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option             | Description                                                |
|:-------------------|:-----------------------------------------------------------|
| --warning-seconds  | Warning threshold for the metric 'system.uptime.seconds'.  |
| --critical-seconds | Critical threshold for the metric 'system.uptime.seconds'. |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon-plugin-rust-snmp -H '10.0.0.1' -c 'my-snmp-community' -v '2c'  \
	--json '/usr/lib/centreon/plugins/rs-collections/operatingsystems-windows-snmp/uptime.json' \
	--warning-seconds='' \
	--help
```
