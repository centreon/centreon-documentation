---
id: hardware-telephony-alcatel-oxe-snmp
title: Alcatel OXE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **Alcatel OXE** brings a host template:

* HW-Telephony-Alcatel-OXE-SNMP-custom

It brings the following service templates:

| Service Alias     | Service Template                                | Service Description                                                                                                                                | Default |
|-:-----------------|-:-----------------------------------------------|-:--------------------------------------------------------------------------------------------------------------------------------------------------|-:-------|
| Cpu               | HW-Telephony-Alcatel-OXE-Cpu-SNMP               | Check the rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPU | X       |
| Disk-Generic-Id   | HW-Telephony-Alcatel-OXE-Disk-Generic-Id-SNMP   | Check the rate of free space on the disk. For each checks the name of the disk will appear                                                         |         |
| Disk-Generic-Name | HW-Telephony-Alcatel-OXE-Disk-Generic-Name-SNMP | Check the rate of free space on the disk. For each checks the mount pont of the disk will appear                                                   |         |
| Disk-Global       | HW-Telephony-Alcatel-OXE-Disk-Global-SNMP       | Check the rate of free space on disks. For each checks the mount point of disks will appear                                                        |         |
| Domain-Usage      | HW-Telephony-Alcatel-OXE-Domain-Usage-SNMP      | Check the number of external calls by domain using SNMP                                                                                            | X       |
| Memory            | HW-Telephony-Alcatel-OXE-Memory-SNMP            | Check the rate of the utilization of memory                                                                                                        | X       |
| PBX-Role          | HW-Telephony-Alcatel-OXE-PBX-Role-SNMP          | Check the PBX Role                                                                                                                                 | X       |
| State             | HW-Telephony-Alcatel-OXE-State-SNMP             | Check the server state                                                                                                                             | X       |
| Swap              | HW-Telephony-Alcatel-OXE-Swap-SNMP              | Check virtual memory usage                                                                                                                         | X       |
| Trunks            | HW-Telephony-Alcatel-OXE-Trunk-SNMP             | Check performance metrics related to trunks                                                                                                        | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric Name                                | Unit  |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk-Generic-Id" label="Disk-Generic-Id">

| Metric Name                         | Unit  |
|:------------------------------------|:------|
| storage.partitions.count            | count |
| *storage*#storage.access.count      | count |
| *storage*#storage.space.usage.bytes | bytes |

</TabItem>
<TabItem value="Disk-Generic-Name" label="Disk-Generic-Name">

| Metric Name                         | Unit  |
|:------------------------------------|:------|
| storage.partitions.count            | count |
| *storage*#storage.access.count      | count |
| *storage*#storage.space.usage.bytes | bytes |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Metric Name                         | Unit  |
|:------------------------------------|:------|
| storage.partitions.count            | count |
| *storage*#storage.access.count      | count |
| *storage*#storage.space.usage.bytes | bytes |

</TabItem>
<TabItem value="Domain-Usage" label="Domain-Usage">

| Metric Name                                           | Unit  |
|:------------------------------------------------------|:------|
| *domain*#domain.communications.external.overrun.count | count |
| *domain*#domain.communications.external.current.count | count |
| *domain*#domain.conference.circuits.outoforder.count  | count |
| *domain*#domain.conference.circuits.current.count     | count |
| *domain*#domain.compressors.outofservice.count        | count |
| *domain*#domain.compressors.overrun.count             | count |
| *domain*#domain.compressors.current.count             | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name             | Unit  |
|:------------------------|:------|
| memory.buffer.bytes     | B     |
| memory.cached.bytes     | B     |
| memory.shared.bytes     | B     |
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| swap.usage.bytes        | B     |
| swap.free.bytes         | B     |
| swap.usage.percentage   | %     |

</TabItem>
<TabItem value="PBX-Role" label="PBX-Role">

Only stringified status is reported. 

</TabItem>
<TabItem value="State" label="State">

Only stringified status is reported. 

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric Name           | Unit  |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

</TabItem>
<TabItem value="Trunks" label="Trunks">

| Metric Name                               | Unit   |
|:------------------------------------------|:-------|
| *trunk*#trunk.channels.outofservice.count | count  |
| *trunk*#trunk.channels.current.count      | count  |
| *trunk*#trunk-status                      | string |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Alcatel OXE**
server. Please refer to the official documentation from the manufacturer.

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the package on every Centreon poller expected to monitor **Alcatel OXE** resources:

```bash
yum install centreon-plugin-Hardware-Telephony-Alcatel-OXE-Snmp
```

2. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Alcatel OXE** Centreon Monitoring Connector.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the package on every Centreon poller expected to monitor **Alcatel OXE** resources:

```bash
yum install centreon-plugin-Hardware-Telephony-Alcatel-OXE-Snmp
```

2. Install the **Alcatel OXE** Centreon Monitoring Connector RPM on the Centreon central server:

```bash
yum install centreon-pack-hardware-telephony-alcatel-oxe-snmp
```

3. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Alcatel OXE** Centreon Monitoring Connector.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Alcatel OXE** server settings.
* Apply the **HW-Telephony-Alcatel-OXE-SNMP-custom** template to the host.

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters 
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory   | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_alcatel_oxe.pl \
    --plugin=network::alcatel::oxe::snmp::plugin \
    --mode=pbx-role \
    --hostname=10.0.0.1 \
    --snmp-community='my-snmp-community' \
    --snmp-version='2c' \
    --verbose \
```

The expected command output is shown below:

```bash
OK: PBX Role is 'main' | 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_alcatel_oxe.pl \
    --plugin=network::alcatel::oxe::snmp::plugin \
    --mode=pbx-role \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_alcatel_oxe.pl \
    --plugin=network::alcatel::oxe::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.