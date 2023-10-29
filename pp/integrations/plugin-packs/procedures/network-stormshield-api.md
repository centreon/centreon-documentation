---
id: network-stormshield-api
title: Stormshield API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Stormshield API** brings a host template:

* Net-Stormshield-Api-custom

It brings the following service templates:

| Service Alias | Service Template               | Service Description                                  | Default | Discovery |
|:--------------|:-------------------------------|:-----------------------------------------------------|:--------|:----------|
| Cpu           | Net-Stormshield-Cpu-Api        | Check the rate of utilization of CPU for the machine | X       |           |
| Ha            | Net-Stormshield-Ha-Api         | Check high availability                              |         |           |
| Hardware      | Net-Stormshield-Hardware-Api   | Check hardware                                       | X       |           |
| Health        | Net-Stormshield-Health-Api     | Check health                                         | X       |           |
| Interfaces    | Net-Stormshield-Interfaces-Api | Check interfaces                                     |         | X         |
| Memory        | Net-Stormshield-Memory-Api     | Check memory                                         | X       |           |
| Uptime        | Net-Stormshield-Uptime-Api     | Check uptime                                         | X       |           |

### Discovery rules

| Rule Name                              | Description                                                   |
|:---------------------------------------|:--------------------------------------------------------------|
| Net-Stormshield-Api-Interface-Username | Discover network interfaces and monitor bandwidth utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| cpu.utilization.percentage                | %     |
| *cpu_num*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Ha" label="Ha">

| Metric Name                             | Unit  |
|:----------------------------------------|:------|
| members.detected.count                  |       |
| members.none.count                      |       |
| members.starting.count                  |       |
| members.waiting_peer.count              |       |
| members.ready.count                     |       |
| members.reboot.count                    |       |
| members.down.count                      |       |
| member state                            |       |
| member link status                      |       |
| member config status                    |       |
| *member_name*#member.quality.percentage | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric Name                              | Unit  |
|:-----------------------------------------|:------|
| disk status                              |       |
| fan status                               |       |
| *fan_num*#hardware.fan.speed.rpm         | rpm   |
| power supply status                      |       |
| *psu_num*#hardware.fan.speed.rpm         | rpm   |
| *component*#hardware.temperature.celsius | C     |

</TabItem>
<TabItem value="Health" label="Health">

| Metric Name           | Unit  |
|:----------------------|:------|
| service health status |       |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric Name                                                                   | Unit  |
|:------------------------------------------------------------------------------|:------|
| interface status                                                              |       |
| *interface_user_name~interface_real_name*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_user_name~interface_real_name*#interface.traffic.out.bitspersecond | b/s   |
| *interface_user_name~interface_real_name*#interface.packets.accepted.count    |       |
| *interface_user_name~interface_real_name*#interface.packets.blocked.count     |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name                      | Unit  |
|:---------------------------------|:------|
| memory.protected_host.percentage | %     |
| memory.fragmented.percentage     | %     |
| memory.connections.percentage    | %     |
| memory.icmp.percentage           | %     |
| memory.data_tracking.percentage  | %     |
| memory.dynamic.percentage        | %     |
| memory.ether_state.percentage    | %     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric Name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

To monitor, a user with read privileges on the API is required.

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
dnf install centreon-pack-network-stormshield-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-stormshield-api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-stormshield-api
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Stormshield API** Pack through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet.

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Network-Stormshield-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Stormshield-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-stormshield-api
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your **Stormshield** server settings.
* Apply the **Net-Stormshield-Api-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                      | Description |
|:------------|:---------------------------|:------------|
|             | STORMSHIELDAPIEXTRAOPTIONS | --insecure  |
| X           | STORMSHIELDAPIPASSWORD     |             |
|             | STORMSHIELDAPIPORT         |             |
|             | STORMSHIELDAPIPROTO        |             |
| X           | STORMSHIELDAPIUSERNAME     |             |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_stormshield_api.pl \
    --plugin=network::stormshield::api::plugin \
    --mode=uptime \
    --hostname='10.0.0.1' \
    --api-username='my-username' \
    --api-password='my-password'
```

The expected command output is shown below:

```bash
OK: uptime is: 6d 7h 33m 46s | 'system.uptime.seconds'=545626s;;;0;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_stormshield_api.pl \
    --plugin=network::stormshield::api::plugin \
    --mode=uptime \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_stormshield_api.pl \
    --plugin=network::stormshield::api::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
