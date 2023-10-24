---
id: network-vectra-restapi
title: Vectra Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Vectra Rest API** brings a host template:

* Net-Vectra-Restapi-custom

It brings the following service templates:

| Service Alias | Service Template              | Service Description                                  | Default | Discovery |
|:--------------|:------------------------------|:-----------------------------------------------------|:--------|:----------|
| Cpu           | Net-Vectra-Cpu-Restapi        | Check the rate of utilization of CPU for the machine | X       |           |
| Disk          | Net-Vectra-Disk-Restapi       | Check disk usage                                     | X       |           |
| Interfaces    | Net-Vectra-Interfaces-Restapi | Check interfaces                                     |         | X         |
| Memory        | Net-Vectra-Memory-Restapi     | Check memory usage                                   | X       |           |
| Sensors       | Net-Vectra-Sensors-Restapi    | Check sensors                                        |         | X         |
| Uptime        | Net-Vectra-Uptime-Restapi     | Time since the server has been working and available | X       |           |

### Discovery rules

| Rule Name                         | Description                                                   |
|:----------------------------------|:--------------------------------------------------------------|
| Net-Vectra-Restapi-Interface-Name | Discover network interfaces and monitor bandwidth utilization |
| Net-Vectra-Restapi-Sensor-Name    | Discover network sensors and monitor utilization              |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric Name                | Unit  |
|:---------------------------|:------|
| cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk" label="Disk">

| Metric Name           | Unit  |
|:----------------------|:------|
| disk.usage.bytes      | B     |
| disk.free.bytes       | B     |
| disk.usage.percentage | %     |
| raid status           |       |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric Name                                           | Unit  |
|:------------------------------------------------------|:------|
| interface status                                      |       |
| *interface_name*#interface.traffic.peak.bitspersecond | b/s   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name             | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| dimm status             |       |

</TabItem>
<TabItem value="Sensors" label="Sensors">

| Metric Name                                                       | Unit  |
|:------------------------------------------------------------------|:------|
| sensor status                                                     |       |
| sensor connectivity statu                                         |       |
| sensor trafficdrop status                                         |       |
| sensor interface status                                           |       |
| *sensor_name~interface_name*#interface.traffic.peak.bitspersecond | b/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric Name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds |       |

</TabItem>
</Tabs>

## Prerequisites

The Pack uses the following API endpoints:
* /health/connectivity
* /health/cpu
* /health/disk
* /health/memory
* /health/sensors
* /health/system
* /health/trafficdrop

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
dnf install centreon-pack-network-vectra-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-vectra-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-vectra-restapi
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Vectra Rest API** Pack through
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
dnf install centreon-plugin-Network-Vectra-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Vectra-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-vectra-restapi
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Vectra** server settings.
* Apply the **Net-Vectra-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro           | Description        |
|:------------|:----------------|:-------------------|
|             | APIEXTRAOPTIONS | --insecure         |
|             | APIPORT         | (Default: '443')   |
|             | APIPROTO        | (Default: 'https') |
| X           | APITOKEN        |                    |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_vectra_restapi.pl \
    --plugin=network::vectra::restapi::plugin \
    --mode=memory \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --token='mytoken'
```

The expected command output is shown below:

```bash
OK: Ram total: 187.39 GB used (-buffers/cache): 85.47 GB (45.61%) free: 59.08 GB (31.53%) - All dimm are ok | 'memory.usage.bytes'=91772731392B;;;0;201210691584 'memory.free.bytes'=63436963840B;;;0;201210691584 'memory.usage.percentage'=45.61%;;;0;100
Dimm 'mc0' status: ok
Dimm 'mc1' status: ok
Dimm 'mc2' status: ok
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_vectra_restapi.pl \
    --plugin=network::vectra::restapi::plugin \
    --mode=memory \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_vectra_restapi.pl \
    --plugin=network::vectra::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
