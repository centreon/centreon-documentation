---
id: operatingsystems-aix-snmp
title: AIX SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **AIX SNMP** brings a host template:

* OS-AIX-SNMP-custom

It brings the following service templates:

| Service Alias        | Service Template                 | Service Description                                                                                                                                | Default | Discovery |
|:---------------------|:---------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------|:----------|
| Cpu                  | OS-AIX-Cpu-SNMP                  | Check the rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPU | X       |           |
| Disk-Generic-Id      | OS-AIX-Disk-Generic-Id-SNMP      | Check the rate of free space on the disk. For each checks the name of the disk will appear                                                         |         |           |
| Disk-Generic-Name    | OS-AIX-Disk-Generic-Name-SNMP    | Check the rate of free space on the disk. For each checks the mount pont of the disk will appear                                                   |         |           |
| Disk-Global          | OS-AIX-Disk-Global-SNMP          | Check the rate of free space on disks. For each checks the mount point of disks will appear                                                        |         | X         |
| Process-Generic      | OS-AIX-Process-Generic-SNMP      | Check Linux process                                                                                                                                |         | X         |
| Swap                 | OS-AIX-Swap-SNMP                 | Check virtual memory usage                                                                                                                         | X       |           |
| Time                 | OS-AIX-Time-SNMP                 | Check NTP synchronization                                                                                                                          | X       |           |
| Traffic-Generic-Id   | OS-AIX-Traffic-Generic-Id-SNMP   | Check the bandwidth of the interface. For each checks the name of the interface will appear                                                        |         |           |
| Traffic-Generic-Name | OS-AIX-Traffic-Generic-Name-SNMP | Check the bandwidth of the interface. For each checks the name of the interface will appear                                                        |         |           |
| Traffic-Global       | OS-AIX-Traffic-Global-SNMP       | Check the bandwidth of interfaces. For each checks the name of the interface will appear                                                           |         | X         |

### Discovery rules

| Rule Name                  | Description                                                   |
|:---------------------------|:--------------------------------------------------------------|
| OS-AIX-SNMP-Traffic-Name   | Discover network interfaces and monitor bandwidth utilization |
| OS-AIX-SNMP-Disk-Name      | Discover the disk partitions and monitor space occupation     |
| OS-AIX-SNMP-Processes-Name | Discover processes and monitor their system usage             |

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
<TabItem value="Process-Generic" label="Process-Generic">

| Metric Name | Unit  |
|:------------|:------|
| cpu_total   | %     |
| mem_avg     | B     |
| mem_total   | B     |
| nbproc      |       |

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric Name                   | Unit  |
|:------------------------------|:------|
| page.space.active.count       | count |
| page.space.usage.bytes        | B     |
| *swap*#page.space.usage.bytes | B     |

</TabItem>
<TabItem value="Time" label="Time">

| Metric Name         | Unit  |
|:--------------------|:------|
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **AIX SNMP**
server. Please refer to the official documentation from IBM:
* [IBM-AIX](https://www.ibm.com/support/pages/ibm-aix-how-configure-community-based-snmp-and-snmp-traps)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **AIX SNMP** resources:

```bash
yum install centreon-plugin-Operatingsystems-Aix-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **AIX SNMP** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **AIX SNMP** resources:

```bash
yum install centreon-plugin-Operatingsystems-Aix-Snmp
```

2. Install the **AIX SNMP** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-operatingsystems-aix-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **AIX SNMP** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **AIX SNMP** server settings.
* Apply the **OS-AIX-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
your own SNMPv3 credentials combo.

| Mandatory   | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_aix_snmp.pl \
    --plugin=os::aix::snmp::plugin \
    --mode=cpu \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-average='-5:5' \
    --critical-average='-10:10' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: %.2f %% usage : %.2f %% | 'cpu.utilization.percentage'=9000%;;;0;100 'core.cpu.utilization.percentage'=9000%;;;0;100 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_aix_snmp.pl \
    --plugin=os::aix::snmp::plugin \
    --mode=cpu \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_aix_snmp.pl \
    --plugin=os::aix::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.