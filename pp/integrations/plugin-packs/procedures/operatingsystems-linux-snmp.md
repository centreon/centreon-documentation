---
id: operatingsystems-linux-snmp
title: Linux SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Linux SNMP** brings a host template:

* OS-Linux-SNMP-custom

It brings the following service templates:

| Service Alias              | Service Template                         | Service Description                                                                                                                                         | Default | Discovery |
|:---------------------------|:-----------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|:----------|
| Cpu-Detailed               | OS-Linux-Cpu-Detailed-SNMP               | Check the detailed rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPU |         |           |
| Cpu                        | OS-Linux-Cpu-SNMP                        | Check the rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPU          | X       |           |
| Disk-Generic-Id            | OS-Linux-Disk-Generic-Id-SNMP            | Check the rate of free space on the disk. For each checks the name of the disk will appear                                                                  |         |           |
| Disk-Generic-Name          | OS-Linux-Disk-Generic-Name-SNMP          | Check the rate of free space on the disk. For each checks the mount pont of the disk will appear                                                            |         |           |
| Disk-Global                | OS-Linux-Disk-Global-SNMP                | Check the rate of free space on disks. For each checks the mount point of disks will appear                                                                 |         | X         |
| Disk-IO                    | OS-Linux-Disk-IO-SNMP                    | Check access disk of the disk. For each check the name of the disk will appear                                                                              |         |           |
| Inodes-Global              | OS-Linux-Inodes-Global-SNMP              | Check Inodes space usage on partitions                                                                                                                      |         | X         |
| Load                       | OS-Linux-Load-SNMP                       | Check the server load average                                                                                                                               | X       |           |
| Memory                     | OS-Linux-Memory-SNMP                     | Check the rate of the utilization of memory                                                                                                                 | X       |           |
| Ntp                        | OS-Linux-NTP-SNMP                        | Check the synchronization with an NTP server                                                                                                                |         |           |
| Process-Generic            | OS-Linux-Process-Generic-SNMP            | Check Linux process                                                                                                                                         |         | X         |
| Swap                       | OS-Linux-Swap-SNMP                       | Check virtual memory usage                                                                                                                                  | X       |           |
| Tcpcon-Generic             | OS-Linux-Tcpcon-Generic-SNMP             | Check current tcp connections                                                                                                                               |         |           |
| Traffic-Generic-Id         | OS-Linux-Traffic-Generic-Id-SNMP         | Check the bandwidth of the interface. For each checks the name of the interface will appear                                                                 |         |           |
| Traffic-Generic-Name       | OS-Linux-Traffic-Generic-Name-SNMP       | Check the bandwidth of the interface. For each checks the name of the interface will appear                                                                 |         |           |
| Traffic-Global             | OS-Linux-Traffic-Global-SNMP             | Check the bandwidth of interfaces. For each checks the name of the interface will appear                                                                    |         | X         |
| Uptime                     | OS-Linux-Uptime-SNMP                     | Time since the server has been working and available                                                                                                        |         |           |
| Packet-Errors-Generic-Id   | Os-Linux-Packet-Errors-Generic-Id-SNMP   | Check packets on errors                                                                                                                                     |         |           |
| Packet-Errors-Generic-Name | Os-Linux-Packet-Errors-Generic-Name-SNMP | Check packets on errors                                                                                                                                     |         |           |
| Packet-Errors-Global       | Os-Linux-Packet-Errors-Global-SNMP       | Check packets on errors                                                                                                                                     |         | X         |

### Discovery rules

| Rule Name                        | Description                                                           |
|:---------------------------------|:----------------------------------------------------------------------|
| OS-Linux-SNMP-Inodes-Name        | Discover the disk partitions and monitor inodes usage                 |
| OS-Linux-SNMP-Disk-Name          | Discover the disk partitions and monitor space occupation             |
| OS-Linux-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |
| OS-Linux-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization         |
| OS-Linux-SNMP-Disk-Path          | Discover the disk partitions and monitor space occupation             |
| OS-Linux-SNMP-Processes-Name     | Discover processes and monitor their system usage                     |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric Name                                | Unit  |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| cpu.guest.utilization.percentage     | %     |
| cpu.guestnice.utilization.percentage | %     |
| cpu.idle.utilization.percentage      | %     |
| cpu.interrupt.utilization.percentage | %     |
| cpu.kernel.utilization.percentage    | %     |
| cpu.nice.utilization.percentage      | %     |
| cpu.softirq.utilization.percentage   | %     |
| cpu.steal.utilization.percentage     | %     |
| cpu.system.utilization.percentage    | %     |
| cpu.user.utilization.percentage      | %     |
| cpu.wait.utilization.percentage      | %     |

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Metric Name                         | Unit  |
|:------------------------------------|:------|
| storage.partitions.count            | count |
| *storage*#storage.access.count      | count |
| *storage*#storage.space.usage.bytes | bytes |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Metric Name         | Unit  |
|:--------------------|:------|
| total-read          | B/s   |
| total-read-iops     | iops  |
| total-write         | B/s   |
| total-write-iops    | iops  |
| sum-read-write      | B/s   |
| sum-read-write-iops | iops  |
| *disk*#read         | B/s   |
| *disk*#read-iops    | iops  |
| *disk*#write        | B/s   |
| *disk*#write-iops   | iops  |

</TabItem>
<TabItem value="Inodes-*" label="Inodes-*">

| Metric Name                            | Unit  |
|:---------------------------------------|:------|
| *disk*#storage.inodes.usage.percentage | %     |

</TabItem>
<TabItem value="Load" label="Load">

| Metric Name            | Unit  |
|:-----------------------|:------|
| load.1m.average.count  | count |
| load.15m.average.count | count |
| load.5m.average.count  | count |
| load.1m.count          | count |
| load.15m.count         | count |
| load.5m.count          | count |

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
<TabItem value="Ntp" label="Ntp">

| Metric Name         | Unit  |
|:--------------------|:------|
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Packet-Errors-*" label="Packet-Errors-*">

| Metric Name                                    | Unit  |
|:-----------------------------------------------|:------|
| *int*#interface.packets.in.discard.percentage  | %     |
| *int*#interface.packets.in.error.percentage    | %     |
| *int*#interface.packets.out.discard.percentage | %     |
| *int*#interface.packets.out.error.percentage   | %     |

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

| Metric Name           | Unit  |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

</TabItem>
<TabItem value="Tcpcon-Generic" label="Tcpcon-Generic">

| Metric Name      | Unit  |
|:-----------------|:------|
| connections.tcp. |       |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric Name | Unit  |
|:------------|:------|
| uptime      |       |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **BDD Oracle**
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
dnf install centreon-pack-operatingsystems-linux-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-linux-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-operatingsystems-linux-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Linux SNMP** Pack through
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
dnf install centreon-plugin-Operatingsystems-Linux-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-operatingsystems-linux-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **BDD Oracle** server settings.
* Apply the **OS-Linux-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --mode=swap \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-usage-prct='10' \
    --critical-usage-prct='30' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK:   Used : %.2f %% | 'swap.usage.bytes'=9000B;;;0; 'swap.free.bytes'=9000B;;;0; 'swap.usage.percentage'=9000%;;;0;100 
```

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --list-mode
```

* arp
* cpu
* cpu-detailed
* disk-usage
* diskio
* inodes
* interfaces
* list-diskspath
* list-interfaces
* list-processes
* list-storages
* load
* memory
* processcount
* storage
* swap
* tcpcon
* time
* udpcon
* uptime

### Available options

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --mode=swap \
    --help
```

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option             | Description                                   |
|:-------------------|:----------------------------------------------|
| --use-ucd          | Use UCD mib for cpu average.                  |
| --warning-average  | Warning threshold average CPU utilization.    |
| --critical-average | Critical threshold average CPU utilization.   |
| --warning-core     | Warning thresholds for each CPU core          |
| --critical-core    | Critical thresholds for each CPU core         |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option                 | Description                                                                                                                                          |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                           |
| --redis-server         | Redis server to use (only one server). SYntax: address\[:port\]                                                                                        |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                               |
| --redis-db             | Set Redis database index.                                                                                                                            |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                 |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                       |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                  |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                                                                   |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                           |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                   |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                                                        |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                                                            |
| --warning-*            | Threshold warning in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.     |
| --critical-*           | Threshold critical in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.    |

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Option                  | Description                                                                                                                              |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --memcached             | Memcached server to use (only one server).                                                                                               |
| --redis-server          | Redis server to use (only one server). SYntax: address\[:port\]                                                                            |
| --redis-attribute       | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                   |
| --redis-db              | Set Redis database index.                                                                                                                |
| --failback-file         | Failback on a local file if redis connection failed.                                                                                     |
| --memexpiration         | Time to keep data in seconds (Default: 86400).                                                                                           |
| --statefile-dir         | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                      |
| --statefile-suffix      | Add a suffix for the statefile name (Default: '').                                                                                       |
| --statefile-concat-cwd  | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                               |
| --statefile-format      | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                       |
| --statefile-key         | Key to encrypt/decrypt cache.                                                                                                            |
| --statefile-cipher      | Cipher to encrypt cache (Default: 'AES').                                                                                                |
| --warning-usage         | Threshold warning.                                                                                                                       |
| --critical-usage        | Threshold critical.                                                                                                                      |
| --warning-access        | Threshold warning.                                                                                                                       |
| --critical-access       | Threshold critical. Check if storage is readOnly: --critical-access=readOnly                                                             |
| --add-access            | Check storage access (readOnly, readWrite).                                                                                              |
| --units                 |                                                                                                                                          |
| --free                  |                                                                                                                                          |
| --storage               | Set the storage (number expected) ex: 1, 2,... (empty means 'check all storage').                                                        |
| --name                  | storage oid index.                                                                                                                       |
| --regexp                | Allows to use regexp to filter storage (with option --name).                                                                             |
| --regexp-isensitive     | Allows to use regexp non case-sensitive (with --regexp).                                                                                 |
| --path-best-match       | Allows to select best path mount point (with --name).                                                                                    |
| --reload-cache-time     | Time in minutes before reloading cache file (default: 180).                                                                              |
| --oid-filter            | Choose OID used to filter storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                    |
| --oid-display           | Choose OID used to display storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                   |
| --display-transform-src | Regexp src to transform display value. (security risk!!!)                                                                                |
| --display-transform-dst | Regexp dst to transform display value. (security risk!!!)                                                                                |
| --show-cache            | Display cache storage datas.                                                                                                             |
| --space-reservation     | Some filesystem has space reserved (like ext4 for root). The value is in percent of total (Default: none) (results like 'df' command).   |
| --filter-duplicate      | Filter duplicate storages (in used size and total size).                                                                                 |
| --filter-storage-type   | Filter storage types with a regexp (Default: '^(hrStorageFixedDisk|hrStorageNetworkDisk|hrFSBerkeleyFFS)$').                             |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Option                 | Description                                                                                                                                                                            |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                             |
| --redis-server         | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                          |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                                                                 |
| --redis-db             | Set Redis database index.                                                                                                                                                              |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                   |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                         |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                    |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                                                                                                     |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                             |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                     |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                                                                                          |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                                                                                              |
| --warning-*            | Threshold warning. Can be: 'read', 'write', 'read-iops', 'write-iops', 'total-read', 'total-write', 'total-read-iops', 'total-write-iops', 'sum-read-write', 'sum-read-write-iops'.    |
| --critical-*           | Threshold critical. Can be: 'read', 'write', 'read-iops', 'write-iops', 'total-read', 'total-write', 'total-read-iops', 'total-write-iops', 'sum-read-write', 'sum-read-write-iops'.   |
| --device               | Set the device (number expected) ex: 1, 2,... (empty means 'check all devices').                                                                                                       |
| --name                 | oid index.                                                                                                                                                                             |
| --regexp               | Allows to use regexp to filter devices (with option --name).                                                                                                                           |
| --regexp-isensitive    | Allows to use regexp non case-sensitive (with --regexp).                                                                                                                               |

</TabItem>
<TabItem value="Inodes-*" label="Inodes-*">

| Option                  | Description                                                                              |
|:------------------------|:-----------------------------------------------------------------------------------------|
| --warning-usage         | Threshold warning in percent.                                                            |
| --critical-usage        | Threshold critical in percent.                                                           |
| --diskpath              | Set the disk path (number expected) ex: 1, 2,... (empty means 'check all disks path').   |
| --name                  | disk path oid index.                                                                     |
| --regexp                | Allows to use regexp to filter diskpath (with option --name).                            |
| --regexp-isensitive     | Allows to use regexp non case-sensitive (with --regexp).                                 |
| --display-transform-src | Regexp src to transform display value. (security risk!!!)                                |
| --display-transform-dst | Regexp dst to transform display value. (security risk!!!)                                |
| --filter-device         | Filter devices by name (regexp).                                                         |
| --filter-path           | Filter devices by path (regexp).                                                         |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                             |
|:-----------|:----------------------------------------|
| --warning  | Threshold warning (1min,5min,15min).    |
| --critical | Threshold critical (1min,5min,15min).   |
| --average  | Load average for the number of CPUs.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --units                  | (Deprecated. Please use new counters directly)                                                                                                                          |
| --free                   | counters directly)                                                                                                                                                      |
| --swap                   |                                                                                                                                                                         |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'swap' (B), 'swap-free' (B), 'swap-prct' (%), 'buffer' (B), 'cached' (B), 'shared' (B).            |
| --patch-redhat           | If using RedHat distribution with net-snmp \>= 5.7.2-43 and net-snmp \< 5.7.2-47. But you should update net-snmp!!!!  memAvailReal  - memCached // free = total - used    |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option            | Description                                                                                                         |
|:------------------|:--------------------------------------------------------------------------------------------------------------------|
| --oid             |                                                                                                                     |
| --warning-offset  | Time offset warning threshold (in seconds).                                                                         |
| --critical-offset | Time offset critical Threshold (in seconds).                                                                        |
| --ntp-hostname    | Set the ntp hostname (if not set, localtime is used).                                                               |
| --ntp-port        | Set the ntp port (Default: 123).                                                                                    |
| --timezone        | Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100'.    |

</TabItem>
<TabItem value="Packet-Errors-*" label="Packet-Errors-*">

| Option                   | Description                                                                                                                                                                                                                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server           | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                              |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                                                                                                                                                                     |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status         | Set warning threshold for status. Can used special variables                                                                                                                                                                                                                               |
| --critical-status        | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent_delta') ('percent_delta', 'bps', 'counter').                                                                                                                                                                                        |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent_delta') ('percent_delta', 'percent', 'delta', 'counter').                                                                                                                                                                       |
| --units-cast             | Units of thresholds for communication types (Default: 'percent_delta') ('percent_delta', 'percent', 'delta', 'counter').                                                                                                                                                                   |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       |
| --name                   | interface oid index (Can be a regexp)                                                                                                                                                                                                                                                      |
| --speed                  |                                                                                                                                                                                                                                                                                            |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl          | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.   E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                                                                                          |
| --force-counters64       | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter             | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           |
| --oid-display            | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                     |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                     |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Option                 | Description                                                                                                                                                                              |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                               |
| --redis-server         | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                            |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                                                                   |
| --redis-db             | Set Redis database index.                                                                                                                                                                |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                     |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                           |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                      |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                                                                                                       |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                               |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                       |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                                                                                            |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                |
| --process-status       | Filter process status. Can be a regexp. (Default: 'running|runnable').                                                                                                                   |
| --process-name         | Filter process name.                                                                                                                                                                     |
| --regexp-name          | Allows to use regexp to filter process name (with option --process-name).                                                                                                                |
| --process-path         | Filter process path.                                                                                                                                                                     |
| --regexp-path          | Allows to use regexp to filter process path (with option --process-path).                                                                                                                |
| --process-args         | Filter process arguments.                                                                                                                                                                |
| --regexp-args          | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                           |
| --warning              | Threshold warning of matching processes count.                                                                                                                                           |
| --critical             | Threshold critical of matching processes count.                                                                                                                                          |
| --memory               | Check memory usage.                                                                                                                                                                      |
| --warning-mem-each     | Threshold warning of memory used by each matching processes (in Bytes).                                                                                                                  |
| --critical-mem-each    | Threshold critical of memory used by each matching processes (in Bytes).                                                                                                                 |
| --warning-mem-total    | Threshold warning of total memory used by matching processes (in Bytes).                                                                                                                 |
| --critical-mem-total   | Threshold critical of total memory used by matching processes (in Bytes).                                                                                                                |
| --warning-mem-avg      | Threshold warning of average memory used by matching processes (in Bytes).                                                                                                               |
| --critical-mem-avg     | Threshold critical of average memory used by matching processes (in Bytes).                                                                                                              |
| --cpu                  | pid changes too much, the plugin can't compute values.                                                                                                                                   |
| --warning-cpu-total    | Threshold warning of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.    |
| --critical-cpu-total   | Threshold critical of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.   |
| --top                  |                                                                                                                                                                                          |
| --top-num              | Number of processes in top memory display (Default: 5).                                                                                                                                  |
| --top-size             | Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                           |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                             |
|:-------------------------|:------------------------------------------------------------------------|
| --no-swap                | Threshold if no active swap (default: 'critical').                      |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).    |

</TabItem>
<TabItem value="Tcpcon-Generic" label="Tcpcon-Generic">

| Option        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning     | Threshold warning for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --critical    | Threshold critical for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --service     | tag,\[type\],\[state\],\[port-src\],\[port-dst\],\[filter-ip-src\],\[filter -ip-dst\],\[threshold-warning\],\[threshold-critical\]  --service="ssh,,,22,,,,10,20"  \<tag\>           Name to identify service (must be unique and     couldn't be 'total').  \<type\>          regexp - can use 'ipv4', 'ipv6'. Empty means     all.  \<state\>         regexp - can use 'finWait1', 'established',...     Empty means all (minus listen).  \<filter-ip-*\>   regexp - can use to exclude or include some IPs.  \<threshold-*\>   nagios-perfdata - number of connections.   |
| --application | tag,\[services\],\[threshold-warning\],\[threshold-critical\]   \<tag\>           Name to identify application (must be unique).  \<services\>      List of services (used the tag name. Separated     by '|').  \<threshold-*\>   nagios-perfdata - number of connections.                                                                                                                                                                                                                                                                                    |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Option                   | Description                                                                                                                                                                                                                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server           | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                              |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                                                                                                                                                                     |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status         | Set warning threshold for status. Can used special variables                                                                                                                                                                                                                               |
| --critical-status        | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent_delta') ('percent_delta', 'bps', 'counter').                                                                                                                                                                                        |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent_delta') ('percent_delta', 'percent', 'delta', 'counter').                                                                                                                                                                       |
| --units-cast             | Units of thresholds for communication types (Default: 'percent_delta') ('percent_delta', 'percent', 'delta', 'counter').                                                                                                                                                                   |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       |
| --name                   | interface oid index (Can be a regexp)                                                                                                                                                                                                                                                      |
| --speed                  |                                                                                                                                                                                                                                                                                            |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl          | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.   E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                                                                                          |
| --force-counters64       | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter             | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           |
| --oid-display            | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                     |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                     |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                 | Description                                                                                                                                               |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                |
| --redis-server         | Redis server to use (only one server). SYntax: address\[:port\]                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                                    |
| --redis-db             | Set Redis database index.                                                                                                                                 |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                      |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                            |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                       |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                                                                        |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                        |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                                                             |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                                                                 |
| --warning-uptime       | Threshold warning.                                                                                                                                        |
| --critical-uptime      | Threshold critical.                                                                                                                                       |
| --add-sysdesc          | Display system description.                                                                                                                               |
| --force-oid            | Can choose your oid (numeric format only).                                                                                                                |
| --check-overload       | Uptime counter limit is 4294967296 and overflow. With that option, we manage the counter going back. But there is a few chance we can miss a reboot.      |
| --reboot-window        | To be used with check-overload option. Time in milliseconds (Default: 5000) You increase the chance of not missing a reboot if you decrease that value.   |
| --unit                 | for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds                                                              |

</TabItem>
</Tabs>

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.