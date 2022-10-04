---
id: applications-monitoring-node-exporter-linux
title: Node Exporter Linux Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This pack helps you monitor your Linux server based on metrics exported by Node exporter. 

## Pack Assets

### Templates

The Centreon Plugin Pack **Node Exporter Linux Metrics** brings a host template:

* App-Monitoring-Node-Exporter-Linux-custom

It brings the following service templates:

| Service Alias | Service Template                           | Service Description      | Default | Discovery |
|:--------------|:-------------------------------------------|:-------------------------|:--------|:----------|
| Node-Cpu      | App-Monitoring-Node-Exporter-Linux-Cpu     | Check node CPU usage     | X       |           |
| Node-Load     | App-Monitoring-Node-Exporter-Linux-Load    | Check node load          | X       |           |
| Node-Memory   | App-Monitoring-Node-Exporter-Linux-Memory  | Check node memory usage  | X       |           |
| Node-Storage  | App-Monitoring-Node-Exporter-Linux-Storage | Check node storage usage | X       | X         |
| Node-Traffic  | App-Monitoring-Node-Exporter-Linux-Traffic | Check node CPU usage     | X       | X         |

### Discovery rules

| Rule Name                                         | Description                                                      |
|:--------------------------------------------------|:-----------------------------------------------------------------|
| App-Monitoring-Node-Exporter-Linux-Interface-Name | Discover Linux server's interfaces to automatically monitor them |
| App-Monitoring-Node-Exporter-Linux-Storage-Name   | Discover Linux server's partitions to automatically monitor them |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Node-Cpu" label="Node-Cpu">

| Metric Name                                        | Unit  |
|:---------------------------------------------------|:------|
| cpu.utilization.percentage                         | %     |
| *node_cpu*#node.cpu.idle.utilization.percentage    | %     |
| *node_cpu*#node.cpu.iowait.utilization.percentage  | %     |
| *node_cpu*#node.cpu.irq.utilization.percentage     | %     |
| *node_cpu*#node.cpu.nice.utilization.percentage    | %     |
| *node_cpu*#node.cpu.softirq.utilization.percentage | %     |
| *node_cpu*#node.cpu.steal.utilization.percentage   | %     |
| *node_cpu*#node.cpu.system.utilization.percentage  | %     |
| *node_cpu*#node.cpu.user.utilization.percentage    | %     |

</TabItem>
<TabItem value="Node-Load" label="Node-Load">

| Metric Name          | Unit  |
|:---------------------|:------|
| load.1minute.count   | count |
| load.15minutes.count | count |
| load.5minutes.count  | count |

</TabItem>
<TabItem value="Node-Memory" label="Node-Memory">

| Metric Name              | Unit  |
|:-------------------------|:------|
| node.memory.buffer.bytes | B     |
| node.memory.cached.bytes | B     |
| usage                    | %     |

</TabItem>
<TabItem value="Node-Storage" label="Node-Storage">

| Metric Name          | Unit  |
|:---------------------|:------|
| *node_storage*#usage | %     |

</TabItem>
<TabItem value="Node-Traffic" label="Node-Traffic">

| Metric Name                    | Unit  |
|:-------------------------------|:------|
| status                         |       |
| node.packets.in.count          | count |
| node.packets.out.count         | count |
| node.traffic.in.bitspersecond  | b/s   |
| node.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prerequisites

To install Node exporter on your Linux server please refer to this documentation: https://prometheus.io/docs/guides/node-exporter/#installing-and-running-the-node-exporter. 

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Node Exporter Linux Metrics** resources:

```bash
yum install centreon-plugin-Applications-Monitoring-Nodeexporter-Linux
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Node Exporter Linux Metrics** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Node Exporter Linux Metrics** resources:

```bash
yum install centreon-plugin-Applications-Monitoring-Nodeexporter-Linux
```

2. Install the **Node Exporter Linux Metrics** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-applications-monitoring-node-exporter-linux
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Node Exporter Linux Metrics** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Node Exporter Linux Metrics** server settings.
* Apply the **App-Monitoring-Node-Exporter-Linux-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro             | Description                                                                            |
|:------------|:------------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS      | Any extra option you may want to add to every command line (eg. a --verbose flag)      |
|             | NODEEXPORTERPORT  | (Default: '9100')                                                                      |
|             | NODEEXPORTERPROTO | (Default: 'http')                                                                      |
|             | NODEEXPORTERURL   | (Default: '/metrics')                                                                  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_linux.pl \
    --plugin=apps::monitoring::nodeexporter::linux::plugin \
    --mode=load \
    --hostname=10.0.0.1 \
    --urlpath='/metrics' \
    --port='9100' \
    --proto='http' \
    --warning-load1='' \
    --critical-load1='' \
    --warning-load5='' \
    --critical-load5='' \
    --warning-load15='' \
    --critical-load15='' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Load 1 minute: 0.49, Load 5 minutes: 0.71, Load 15 minutes: 0.66 | 'load.1minute.count'=0.49;;;0; 'load.5minutes.count'=0.71;;;0; 'load.15minutes.count'=0.66;;;0;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_linux.pl \
    --plugin=apps::monitoring::nodeexporter::linux::plugin \
    --mode=load \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_linux.pl \
    --plugin=apps::monitoring::nodeexporter::linux::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.