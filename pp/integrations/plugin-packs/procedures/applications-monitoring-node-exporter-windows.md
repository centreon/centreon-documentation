---
id: applications-monitoring-node-exporter-windows
title: Node Exporter Windows Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This pack helps you monitor your Windows server based on metrics exported by Prometheus exporter. 

## Pack Assets

### Templates

The Centreon Monitoring Connector **Node Exporter Windows Metrics** brings a host template:

* App-Monitoring-Node-Exporter-Windows-custom

It brings the following service templates:

| Service Alias     | Service Template                                  | Service Description      | Default | Discovery |
|:------------------|:--------------------------------------------------|:-------------------------|:--------|:----------|
| Node-Cpu          | App-Monitoring-Node-Exporter-Windows-Cpu          | Check node CPU usage     | X       |           |
| Node-Memory       | App-Monitoring-Node-Exporter-Windows-Memory       | Check node memory usage  | X       |           |
| Node-Service-Name | App-Monitoring-Node-Exporter-Windows-Service-Name | Check services state     | X       | X         |
| Node-Storage      | App-Monitoring-Node-Exporter-Windows-Storage      | Check node storage usage | X       | X         |
| Node-Traffic      | App-Monitoring-Node-Exporter-Windows-Traffic      | Check network traffic per interface | X       | X         |

### Discovery rules

| Rule Name                                           | Description                                      |
|:----------------------------------------------------|:-------------------------------------------------|
| App-Monitoring-Node-Exporter-Windows-Interface-Name | Discover network interfaces and monitor their usage. |
| App-Monitoring-Node-Exporter-Windows-Storage-Name   | Discover disks and monitor their usage.          |
| App-Monitoring-Node-Exporter-Windows-Service-Name   | Discover services and monitor their state.       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Node-Cpu" label="Node-Cpu">

| Metric Name                                           | Unit  |
|:------------------------------------------------------|:------|
| cpu.utilization.percentage                            | %     |
| *node_cpu*#node.cpu.dpc.utilization.percentage        | %     |
| *node_cpu*#node.cpu.idle.utilization.percentage       | %     |
| *node_cpu*#node.cpu.interrupt.utilization.percentage  | %     |
| *node_cpu*#node.cpu.privileged.utilization.percentage | %     |
| *node_cpu*#node.cpu.user.utilization.percentage       | %     |

</TabItem>
<TabItem value="Node-Memory" label="Node-Memory">

| Metric Name             | Unit  |
|:------------------------|:------|
| node.memory.pages.bytes | bytes |
| usage                   |       |

</TabItem>
<TabItem value="Node-Service-Name" label="Node-Service-Name">

| Metric Name      | Unit  |
|:-----------------|:------|
| *service*#status |       |

</TabItem>
<TabItem value="Node-Storage" label="Node-Storage">

| Metric Name          | Unit  |
|:---------------------|:------|
| *node_storage*#usage |       |

</TabItem>
<TabItem value="Node-Traffic" label="Node-Traffic">

| Metric Name                              | Unit  |
|:-----------------------------------------|:------|
| node.bandwidth.usage                     | %     |
| *traffic*#node.packets.in.error.count    | count |
| *traffic*#node.packets.out.error.count   | count |
| *traffic*#node.packets.in.count          | count |
| *traffic*#node.packets.out.count         | count |
| *traffic*#node.traffic.in.bitspersecond  | b/s   |
| *traffic*#node.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prerequisites

This pack is based on community Prometheus exporter for Windows machines: https://github.com/prometheus-community/windows_exporter#installation. 

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the package on every Centreon poller expected to monitor **Windows** resources:

```bash
yum install centreon-plugin-Applications-Monitoring-Nodeexporter-Windows
```

2. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Node Exporter Windows Metrics** Centreon Monitoring Connector.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the package on every Centreon poller expected to monitor **Windows** resources:

```bash
yum install centreon-plugin-Applications-Monitoring-Nodeexporter-Windows
```

2. Install the **Node Exporter Windows Metrics** Centreon Monitoring Connector RPM on the Centreon central server:

```bash
yum install centreon-pack-applications-monitoring-node-exporter-windows
```

3. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Node Exporter Windows Metrics** Centreon Monitoring Connector.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Windows** server settings.
* Apply the **App-Monitoring-Node-Exporter-Windows-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro             | Description                                                                            |
|:------------|:------------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS      | Any extra option you may want to add to every command line (eg. a --verbose flag)      |
|             | NODEEXPORTERPORT  | (Default: '9182')                                                                      |
|             | NODEEXPORTERPROTO | (Default: 'http')                                                                      |
|             | NODEEXPORTERURL   | (Default: '/metrics')                                                                  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_windows.pl \
    --plugin=apps::monitoring::nodeexporter::windows::plugin \
    --mode=services \
    --hostname=10.0.0.1 \
    --urlpath='/metrics' \
    --port='9182' \
    --proto='http' \
    --service='' \
    --warning-status='' \
    --critical-status='%{start_mode} =~ /auto/ && %{status} !~ /^running$/' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
CRITICAL: Service : 'winserv1' [state: 'stopped'] [start_mode: 'auto'] - Service : 'sysmonitor' [state: 'stopped'] [start_mode: 'auto']
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_windows.pl \
    --plugin=apps::monitoring::nodeexporter::windows::plugin \
    --mode=services \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_windows.pl \
    --plugin=apps::monitoring::nodeexporter::windows::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.