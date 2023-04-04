---
id: network-aruba-cppm-snmp
title: Aruba CPPM SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Aruba CPPM SNMP** brings a host template:

* Net-Aruba-Cppm-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template                 | Service Description                        | Default | Discovery |
|:--------------|:---------------------------------|:-------------------------------------------|:--------|:----------|
| Cpu           | Net-Aruba-Cppm-Cpu-SNMP          | Check CPU                                  | X       |           |
| Disks         | Net-Aruba-Cppm-Disks-SNMP        | Check disks                                | X       |           |
| Interfaces    | Net-Aruba-Cppm-Interfaces-SNMP   | Check interfaces                           |         | X         |
| Memory        | Net-Aruba-Cppm-Memory-SNMP       | Check memory                            | X       |           |
| Radius        | Net-Aruba-Cppm-Radius-SNMP       | Check radius statistics                    |         |           |
| Repositories  | Net-Aruba-Cppm-Repositories-SNMP | Check authentication repository statistics |         |           |
| Tacacs        | Net-Aruba-Cppm-Tacacs-SNMP       | Check TACACS                               |         |           |

### Discovery rules

| Rule Name                          | Description                                                   |
|:-----------------------------------|:--------------------------------------------------------------|
| Net-Aruba-Cppm-SNMP-Interface-Name | Discover network interfaces and monitor bandwidth utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| cpu.utilization.percentage                | %     |
| *cpu_num*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disks" label="Disks">

| Metric Name                            | Unit  |
|:---------------------------------------|:------|
| *hostname*#disk.space.usage.bytes      | B     |
| *hostname*#disk.space.free.bytes       | B     |
| *hostname*#disk.space.usage.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric Name                                               | Unit  |
|:--------------------------------------------------------- |:----- |
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name                        | Unit  |
|:-----------------------------------|:------|
| *hostname*#memory.usage.bytes      | B     |
| *hostname*#memory.free.bytes       | B     |
| *hostname*#memory.usage.percentage | %     |

</TabItem>
<TabItem value="Radius" label="Radius">

| Metric Name                                      | Unit  |
|:-------------------------------------------------|:------|
| *hostname*#radius.policy.evaluation.milliseconds | ms    |
| *hostname*#radius.requests.count                 |       |
| *hostname*#radius.requests.failed.count          |       |
| *hostname*#radius.requests.succeeded.count       |       |
| *hostname*#radius.requests.milliseconds          | ms    |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Metric Name                                                      | Unit  |
|:-----------------------------------------------------------------|:------|
| *source_name*#authentication_repository.requests.milliseconds    | ms    |
| *source_name*#authentication_repository.requests.count           |       |
| *source_name*#authentication_repository.requests.failed.count    |       |
| *source_name*#authentication_repository.requests.succeeded.count |       |

</TabItem>
<TabItem value="Tacacs" label="Tacacs">

| Metric Name                                                                | Unit  |
|:---------------------------------------------------------------------------|:------|
| *hostname*#tacacs.authentication.service.policy.evaluation.milliseconds    | ms    |
| *hostname*#tacacs.authentication.requests.count                            |       |
| *hostname*#tacacs.authentication.requests.authentication.time.milliseconds | ms    |
| *hostname*#tacacs.authentication.requests.failed.count                     |       |
| *hostname*#tacacs.authentication.requests.succeeded.count                  |       |
| *hostname*#tacacs.authentication.requests.time.milliseconds                | ms    |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Aruba CPPM**
server. Please refer to the official documentation from XXX:
* LINK

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
dnf install centreon-pack-network-aruba-cppm-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-aruba-cppm-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-aruba-cppm-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Aruba CPPM SNMP** Pack through
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
dnf install centreon-plugin-Network-Aruba-Cppm-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Aruba-Cppm-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-aruba-cppm-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Aruba CPPM** server settings.
* Apply the **Net-Aruba-Cppm-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins/centreon_aruba_cppm_snmp.pl \
    --plugin=network::aruba::cppm::snmp::plugin \
    --mode=memory \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

The expected command output is shown below:

```bash
OK: Memory 'cppm.centreon.fr' usage total: 8.00 GB used: 4.05 GB (50.60%) free: 3.95 GB (49.40%) | 'cppm.centreon.fr#memory.usage.bytes'=4346740736B;;;0;8589803520 'cppm.centreon.fr#memory.free.bytes'=4243062784B;;;0;8589803520 'cppm.centreon.fr#memory.usage.percentage'=50.60%;;;0;100
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aruba_cppm_snmp.pl \
    --plugin=network::aruba::cppm::snmp::plugin \
    --mode=memory \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_aruba_cppm_snmp.pl \
    --plugin=network::aruba::cppm::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
