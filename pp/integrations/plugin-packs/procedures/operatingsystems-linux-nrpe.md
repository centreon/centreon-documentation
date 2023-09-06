---
id: operatingsystems-linux-nrpe
title: Linux NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Linux NRPE** brings a host template:

* **OS-Linux-NRPE-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="OS-Linux-NRPE-custom" label="OS-Linux-NRPE-custom">

| Service Alias | Service Template            | Service Description                                                                                                                                |
|:--------------|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu           | OS-Linux-Cpu-NRPE-custom    | Check the rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPU |
| Load          | OS-Linux-Load-NRPE-custom   | Check the server load average                                                                                                                      |
| Memory        | OS-Linux-Memory-NRPE-custom | Check the rate of the utilization of memory                                                                                                        |
| Swap          | OS-Linux-Swap-NRPE-custom   | Check virtual memory usage                                                                                                                         |
| Uptime        | OS-Linux-Uptime-NRPE-custom | Time since the server has been working and available                                                                                               |

> The services listed above are created automatically when the **OS-Linux-NRPE-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias              | Service Template                                | Service Description                                                                                                                                         |
|:---------------------------|:------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cmd-Generic                | OS-Linux-Cmd-Generic-NRPE-custom                | Check exit code of linux commands                                                                                                                           |
| Connections-Generic        | OS-Linux-Connections-Generic-NRPE-custom        | Check tcp                                                                                                                                                   |
| Cpu-Detailed               | OS-Linux-Cpu-Detailed-NRPE-custom               | Check the detailed rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPU |
| Disk-Generic-Name          | OS-Linux-Disk-Generic-Name-NRPE-custom          | Check the rate of free space on the disk. For each checks the mount pont of the disk will appear                                                            |
| Disk-Global                | OS-Linux-Disk-Global-NRPE-custom                | Check the rate of free space on disks. For each checks the mount point of disks will appear                                                                 |
| Disk-IO-Generic-Name       | OS-Linux-Disk-IO-Generic-Name-NRPE-custom       | Check I                                                                                                                                                     |
| Disk-IO-Global             | OS-Linux-Disk-IO-Global-NRPE-custom             | Check I                                                                                                                                                     |
| File-Date-Generic          | OS-Linux-File-Date-Generic-NRPE-custom          | Check file or                                                                                                                                               |
| File-Size-Generic          | OS-Linux-File-Size-Generic-NRPE-custom          | Check file or                                                                                                                                               |
| Inodes-Generic-Name        | OS-Linux-Inodes-Generic-Name-NRPE-custom        | Check the rate of free inodes on the disk                                                                                                                   |
| Inodes-Global              | OS-Linux-Inodes-Global-NRPE-custom              | Check the rate of free inodes on disks                                                                                                                      |
| Is-File-Generic            | OS-Linux-Is-File-Generic-NRPE-custom            | Check if file 'xxx' is present                                                                                                                              |
| Is-Not-File-Generic        | OS-Linux-Is-Not-File-Generic-NRPE-custom        | Check if file 'xxx' is not present                                                                                                                          |
| Packet-Errors-Generic-Name | OS-Linux-Packet-Errors-Generic-Name-NRPE-custom | Check packets on errors                                                                                                                                     |
| Packet-Errors-Global       | OS-Linux-Packet-Errors-Global-NRPE-custom       | Check packets on errors                                                                                                                                     |
| Process-Generic            | OS-Linux-Process-Generic-NRPE-custom            | Check Linux processes                                                                                                                                       |
| Traffic-Generic-Name       | OS-Linux-Traffic-Generic-Name-NRPE-custom       | Check the bandwidth of the interface. For each checks the name of the interface will appear                                                                 |
| Traffic-Global             | OS-Linux-Traffic-Global-NRPE-custom             | Check the bandwidth of interfaces. For each checks the name of the interface will appear                                                                    |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Metric name             | Unit  |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

Coming soon

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

Coming soon

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Metric name  | Unit  |
|:-------------|:------|
| *disks*#used | B     |

> Applies to the following service templates: Disk-Generic-Name, Disk-Global

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Disk-IO-*" label="Disk-IO-*">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| *device*#device.io.read.usage.bytespersecond  | B/s   |
| *device*#device.io.write.usage.bytespersecond | B/s   |
| *device*#device.io.read.wait.milliseconds     | ms    |
| *device*#device.io.write.wait.milliseconds    | ms    |
| *device*#device.io.servicetime.count          | count |
| *device*#device.io.utils.percentage           | %     |

> Applies to the following service templates: Disk-IO-Generic-Name, Disk-IO-Global

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

Coming soon

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Metric name | Unit  |
|:------------|:------|
| total       | B     |

</TabItem>
<TabItem value="Inodes-*" label="Inodes-*">

| Metric name    | Unit  |
|:---------------|:------|
| *inodes*#usage | %     |

> Applies to the following service templates: Inodes-Generic-Name, Inodes-Global

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Metric name             | Unit  |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Metric name             | Unit  |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Load" label="Load">

| Metric name | Unit  |
|:------------|:------|
| avg_load1   | N/A   |
| avg_load5   | N/A   |
| avg_load15  | N/A   |
| load1       | N/A   |
| load5       | N/A   |
| load15      | N/A   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                 | Unit  |
|:----------------------------|:------|
| memory.usage.bytes          | B     |
| memory.free.bytes           | B     |
| memory.usage.percentage     | %     |
| memory.available.bytes      | B     |
| memory.available.percentage | %     |
| memory.buffer.bytes         | B     |
| memory.cached.bytes         | B     |
| memory.slab.bytes           | B     |
| swap.usage.bytes            | B     |
| swap.free.bytes             | B     |
| swap.usage.percentage       | %     |

</TabItem>
<TabItem value="Packet-Errors-*" label="Packet-Errors-*">

| Metric name             | Unit  |
|:------------------------|:------|
| *interface*#status      | N/A   |
| *interface*#in-discard  | %     |
| *interface*#out-discard | %     |
| *interface*#in-error    | %     |
| *interface*#out-error   | %     |

> Applies to the following service templates: Packet-Errors-Generic-Name, Packet-Errors-Global

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| *processes*#time                              | N/A   |
| *processes*#memory-usage                      | N/A   |
| *processes*#cpu-utilization                   | N/A   |
| *processes*#disks-read                        | N/A   |
| *processes*#disks-write                       | N/A   |
| processes.total.count                         | count |
| processes.memory.usage.bytes                  | B     |
| processes.cpu.utilization.percentage          | %     |
| processes.disks.io.read.usage.bytespersecond  | B/s   |
| processes.disks.io.write.usage.bytespersecond | B/s   |

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric name           | Unit  |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Metric name          | Unit  |
|:---------------------|:------|
| *interface*#status   | N/A   |
| *interface*#traffic_ | b/s   |
| *interface*#traffic_ | b/s   |

> Applies to the following service templates: Traffic-Generic-Name, Traffic-Global

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name | Unit  |
|:------------|:------|
| uptime      | s     |

</TabItem>
</Tabs>

## Prerequisites

### Centreon NSClient++

To monitor an *Active Directory* domain controller through NRPE, install the 
Centreon packaged version of the NSClient++ agent. Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md)
and make sure that the **NRPE Server** configuration is correct.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-operatingsystems-linux-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-linux-nrpe
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-operatingsystems-linux-nrpe
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-linux-nrpe
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Linux NRPE** connector through
the **Configuration > Monitoring Connectors Manager** menu.

### Plugin

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-nrpe3-plugin
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **OS-Linux-NRPE-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro            | Description                                                                                           | Default value         | Mandatory   |
|:-----------------|:------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| NRPEPORT         |                                                                                                       | 5666                  |             |
| NRPECLIENT       |                                                                                                       | check\_centreon\_nrpe |             |
| NRPETIMEOUT      |                                                                                                       | 30                    |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                       |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Macro          | Description                                                                                                                                       | Default value     | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND        |                                                                                                                                                   |                   |             |
| COMMANDOPTIONS |                                                                                                                                                   |                   |             |
| THRESHOLDS     | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem |                   | X           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                               |                   |             |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold for total connections                                                             |                   |             |
| CRITICAL     | Critical threshold for total connections                                                            |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro           | Description                                                                                         | Default value     | Mandatory   |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVERAGE  | Warning threshold average CPU utilization                                                           | 80                |             |
| CRITICALAVERAGE | Critical threshold average CPU utilization                                                          | 90                |             |
| WARNINGCORE     | Warning thresholds for each CPU core                                                                |                   |             |
| CRITICALCORE    | Critical thresholds for each CPU core                                                               |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIDLE  | Warning threshold in percent                                                                        | 20:               |             |
| CRITICALIDLE | Critical threshold in percent                                                                       | 10:               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Disk-Generic-Name" label="Disk-Generic-Name">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DISKNAME     |                                                                                                     |                   |             |
| WARNING      | Warning threshold                                                                                   | 80                |             |
| CRITICAL     | Critical threshold                                                                                  | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       |                                                                                                     | .*                |             |
| WARNING      | Warning threshold                                                                                   | 80                |             |
| CRITICAL     | Critical threshold                                                                                  | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Disk-IO-Generic-Name" label="Disk-IO-Generic-Name">

| Macro              | Description                                                                                         | Default value     | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DISKNAME           |                                                                                                     |                   |             |
| WARNINGREADTIME    |                                                                                                     |                   |             |
| CRITICALREADTIME   |                                                                                                     |                   |             |
| WARNINGREADUSAGE   | Thresholds                                                                                          |                   |             |
| CRITICALREADUSAGE  | Thresholds                                                                                          |                   |             |
| WARNINGUTILS       | Thresholds                                                                                          |                   |             |
| CRITICALUTILS      | Thresholds                                                                                          |                   |             |
| WARNINGWRITETIME   |                                                                                                     |                   |             |
| CRITICALWRITETIME  |                                                                                                     |                   |             |
| WARNINGWRITEUSAGE  | Thresholds                                                                                          |                   |             |
| CRITICALWRITEUSAGE | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Disk-IO-Global" label="Disk-IO-Global">

| Macro              | Description                                                                                         | Default value     | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER             |                                                                                                     | .*                |             |
| WARNINGREADTIME    |                                                                                                     |                   |             |
| CRITICALREADTIME   |                                                                                                     |                   |             |
| WARNINGREADUSAGE   | Thresholds                                                                                          |                   |             |
| CRITICALREADUSAGE  | Thresholds                                                                                          |                   |             |
| WARNINGUTILS       | Thresholds                                                                                          |                   |             |
| CRITICALUTILS      | Thresholds                                                                                          |                   |             |
| WARNINGWRITETIME   |                                                                                                     |                   |             |
| CRITICALWRITETIME  |                                                                                                     |                   |             |
| WARNINGWRITEUSAGE  | Thresholds                                                                                          |                   |             |
| CRITICALWRITEUSAGE | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose --skip  |             |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Macro        | Description                                                                                                                                | Default value     | Mandatory   |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILES        | Files/Directories to check. (Shell expansion is ok)                                                                                        |                   | X           |
| FILTERPLUGIN | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used |                   |             |
| WARNING      | Warning threshold in seconds for each files/directories (diff time)                                                                        |                   |             |
| CRITICAL     | Critical threshold in seconds for each files/directories (diff time)                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                        | --verbose         |             |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Macro         | Description                                                                                                                                | Default value     | Mandatory   |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILES         | Files/Directories to check. (Shell expansion is ok)                                                                                        |                   | X           |
| FILTERPLUGIN  | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used |                   |             |
| WARNINGONE    | Warning threshold in bytes for each files/directories                                                                                      |                   |             |
| CRITICALONE   | Critical threshold in bytes for each files/directories                                                                                     |                   |             |
| WARNINGTOTAL  | Warning threshold in bytes for all files/directories                                                                                       |                   |             |
| CRITICALTOTAL | Critical threshold in bytes for all files/directories                                                                                      |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                        | --verbose         |             |

</TabItem>
<TabItem value="Inodes-Generic-Name" label="Inodes-Generic-Name">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DISKNAME     |                                                                                                     |                   |             |
| WARNING      | Warning threshold in percent                                                                        | 80                |             |
| CRITICAL     | Critical threshold in percent                                                                       | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Inodes-Global" label="Inodes-Global">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       |                                                                                                     | .*                |             |
| WARNING      | Warning threshold in percent                                                                        | 80                |             |
| CRITICAL     | Critical threshold in percent                                                                       | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND      |                                                                                                     | test              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND      |                                                                                                     | test              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Load" label="Load">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold (1min,5min,15min)                                                                 | 4,3,2             |             |
| CRITICAL     | Critical threshold (1min,5min,15min)                                                                | 6,5,4             |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      |                                                                                                     | 80                |             |
| CRITICAL     |                                                                                                     | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Packet-Errors-Generic-Name" label="Packet-Errors-Generic-Name">

| Macro              | Description                                                                                         | Default value     | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME      |                                                                                                     |                   |             |
| FILTERSTATE        | Filter filesystem type (regexp can be used)                                                         |                   |             |
| WARNINGINDISCARD   |                                                                                                     |                   |             |
| CRITICALINDISCARD  |                                                                                                     |                   |             |
| WARNINGINERROR     |                                                                                                     |                   |             |
| CRITICALINERROR    |                                                                                                     |                   |             |
| WARNINGOUTDISCARD  |                                                                                                     |                   |             |
| CRITICALOUTDISCARD |                                                                                                     |                   |             |
| WARNINGOUTERROR    |                                                                                                     |                   |             |
| CRITICALOUTERROR   |                                                                                                     |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Packet-Errors-Global" label="Packet-Errors-Global">

| Macro              | Description                                                                                         | Default value     | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER             |                                                                                                     | .*                |             |
| FILTERSTATE        | Filter filesystem type (regexp can be used)                                                         |                   |             |
| WARNINGINDISCARD   |                                                                                                     |                   |             |
| CRITICALINDISCARD  |                                                                                                     |                   |             |
| WARNINGINERROR     |                                                                                                     |                   |             |
| CRITICALINERROR    |                                                                                                     |                   |             |
| WARNINGOUTDISCARD  |                                                                                                     |                   |             |
| CRITICALOUTDISCARD |                                                                                                     |                   |             |
| WARNINGOUTERROR    |                                                                                                     |                   |             |
| CRITICALOUTERROR   |                                                                                                     |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Macro         | Description                                                                                                                                           | Default value     | Mandatory   |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOMMAND | Filter process commands (regexp can be used)                                                                                                          |                   |             |
| FILTERARG     | Filter process arguments (regexp can be used)                                                                                                         |                   |             |
| FILTERSTATE   | Filter process states (regexp can be used). You can use: 'zombie', 'dead', 'paging', 'stopped', 'InterrupibleSleep', 'running', 'UninterrupibleSleep' |                   |             |
| WARNING       |                                                                                                                                                       |                   |             |
| CRITICAL      |                                                                                                                                                       |                   |             |
| WARNINGTIME   | Thresholds                                                                                                                                            |                   |             |
| CRITICALTIME  | Thresholds                                                                                                                                            |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                   | --verbose         |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%)                     | 10                |             |
| CRITICAL     | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%)                     | 30                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Macro         | Description                                                                                         | Default value     | Mandatory   |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSTATE   | Filter interfaces type (regexp can be used)                                                         | RU                |             |
| INTERFACENAME |                                                                                                     |                   |             |
| SPEED         | Set interface speed (in Mb)                                                                         |                   | X           |
| WARNINGIN     | Warning threshold in percent for 'in' traffic                                                       |                   |             |
| CRITICALIN    | Critical threshold in percent for 'in' traffic                                                      |                   |             |
| WARNINGOUT    | Warning threshold in percent for 'out' traffic                                                      |                   |             |
| CRITICALOUT   | Critical threshold in percent for 'out' traffic                                                     |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       |                                                                                                     | .*                |             |
| FILTERSTATE  | Filter interfaces type (regexp can be used)                                                         | RU                |             |
| SPEED        | Set interface speed (in Mb)                                                                         |                   | X           |
| WARNINGIN    | Warning threshold in percent for 'in' traffic                                                       |                   |             |
| CRITICALIN   | Critical threshold in percent for 'in' traffic                                                      |                   |             |
| WARNINGOUT   | Warning threshold in percent for 'out' traffic                                                      |                   |             |
| CRITICALOUT  | Critical threshold in percent for 'out' traffic                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in seconds                                                                        |                   |             |
| CRITICAL     | Critical threshold in seconds                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib64/nagios/plugins//check_centreon_nrpe -H 10.0.0.1 -p 5666 -t 30  -c check_centreon_plugins -a '' ''  " \
	--warning= \
	--critical= \
	--warning-time= \
	--critical-time= \
	--filter-command='' \
	--filter-arg='' \
	--filter-state=''  \
	--verbose"
```

The expected command output is shown below:

```bash
OK: Number of current processes: 76 memory used: 46 46 cpu usage: 0 % disks read: 91 91/s disks write: 77 77/s | 'processes.total.count'=76;;;0; 'processes.memory.usage.bytes'=46B;;;0; 'processes.cpu.utilization.percentage'=0%;;;0; 'processes.disks.io.read.usage.bytespersecond'=91B/s;;;0; 'processes.disks.io.write.usage.bytespersecond'=77B/s;;;0; 
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
/usr/lib64/nagios/plugins//check_centreon_nrpe -H 10.0.0.1 -p 5666 -t 30  -c check_centreon_plugins -a '' ''  " \
	--warning= \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                    | Linked service template                                                                                                  |
|:----------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| check-plugin [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/checkplugin.pm)]                 | Not used in this Monitoring Connector                                                                                    |
| cmd-return [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cmdreturn.pm)]                     | OS-Linux-Cmd-Generic-NRPE-custom<br />OS-Linux-Is-File-Generic-NRPE-custom<br />OS-Linux-Is-Not-File-Generic-NRPE-custom |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/connections.pm)]                  | OS-Linux-Connections-Generic-NRPE-custom                                                                                 |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cpu.pm)]                                  | OS-Linux-Cpu-NRPE-custom                                                                                                 |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cpudetailed.pm)]                 | OS-Linux-Cpu-Detailed-NRPE-custom                                                                                        |
| directlvm-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/directlvmusage.pm)]           | Not used in this Monitoring Connector                                                                                    |
| discovery-snmp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/discoverysnmp.pm)]             | Not used in this Monitoring Connector                                                                                    |
| discovery-snmpv3 [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/discoverysnmpv3.pm)]         | Not used in this Monitoring Connector                                                                                    |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/diskio.pm)]                            | OS-Linux-Disk-IO-Generic-Name-NRPE-custom<br />OS-Linux-Disk-IO-Global-NRPE-custom                                       |
| files-date [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/filesdate.pm)]                     | OS-Linux-File-Date-Generic-NRPE-custom                                                                                   |
| files-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/filessize.pm)]                     | OS-Linux-File-Size-Generic-NRPE-custom                                                                                   |
| inodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/inodes.pm)]                            | OS-Linux-Inodes-Generic-Name-NRPE-custom<br />OS-Linux-Inodes-Global-NRPE-custom                                         |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listinterfaces.pm)]           | Not used in this Monitoring Connector                                                                                    |
| list-partitions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listpartitions.pm)]           | Not used in this Monitoring Connector                                                                                    |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/liststorages.pm)]               | Not used in this Monitoring Connector                                                                                    |
| list-systemdservices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listsystemdservices.pm)] | Not used in this Monitoring Connector                                                                                    |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/loadaverage.pm)]                         | OS-Linux-Load-NRPE-custom                                                                                                |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/memory.pm)]                            | OS-Linux-Memory-NRPE-custom                                                                                              |
| mountpoint [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/mountpoint.pm)]                    | Not used in this Monitoring Connector                                                                                    |
| ntp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/ntp.pm)]                                  | Not used in this Monitoring Connector                                                                                    |
| open-files [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/openfiles.pm)]                     | Not used in this Monitoring Connector                                                                                    |
| packet-errors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/packeterrors.pm)]               | OS-Linux-Packet-Errors-Generic-Name-NRPE-custom<br />OS-Linux-Packet-Errors-Global-NRPE-custom                           |
| paging [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/paging.pm)]                            | Not used in this Monitoring Connector                                                                                    |
| pending-updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/pendingupdates.pm)]           | Not used in this Monitoring Connector                                                                                    |
| process [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/process.pm)]                          | OS-Linux-Process-Generic-NRPE-custom                                                                                     |
| quota [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/quota.pm)]                              | Not used in this Monitoring Connector                                                                                    |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/storage.pm)]                          | OS-Linux-Disk-Generic-Name-NRPE-custom<br />OS-Linux-Disk-Global-NRPE-custom                                             |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/swap.pm)]                                | OS-Linux-Swap-NRPE-custom                                                                                                |
| systemd-sc-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/systemdscstatus.pm)]        | Not used in this Monitoring Connector                                                                                    |
| traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/traffic.pm)]                          | OS-Linux-Traffic-Generic-Name-NRPE-custom<br />OS-Linux-Traffic-Global-NRPE-custom                                       |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/uptime.pm)]                            | OS-Linux-Uptime-NRPE-custom                                                                                              |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Timeout in seconds for the command (Default: 45). Default value can be override by the mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command                                  | Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sudo  sudo command                       | .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --ssh-backend                              | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --sshcli-command                           | ssh command (default: 'ssh').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --sshcli-path                              | ssh command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sshcli-option                            | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-command                            | plink command (default: 'plink').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-path                               | plink command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --plink-option                             | Specify plink options (example: --plink-option='-T').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --libssh-strict-connect                    | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Option                 | Description                                                                                                                                         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         | Command to test (Default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    | Command path (Default: none).                                                                                                                       |
| --exec-command-options | Command options (Default: none).                                                                                                                    |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Option        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning     | Warning threshold for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --critical    | Critical threshold for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --service     | Check tcp connections following rules: tag,\[type\],\[state\],\[port-src\],\[port-dst\],\[filter-ip-src\],\[filter -ip-dst\],\[threshold-warning\],\[threshold-critical\]  Example to test SSH connections on the server: --service="ssh,,,22,,,,10,20"  \<tag\>           Name to identify service (must be unique and     couldn't be 'total').  \<type\>          regexp - can use 'ipv4', 'ipv6', 'udp', 'udp6'.     Empty means all.  \<state\>         regexp - can use 'finWait1', 'established',...     Empty means all (minus listen). For udp     connections, there are 'established' and     'listen'.  \<filter-ip-*\>   regexp - can use to exclude or include some IPs.  \<threshold-*\>   nagios-perfdata - number of connections.   |
| --application | Check tcp connections of mutiple services: tag,\[services\],\[threshold-warning\],\[threshold-critical\]  Example: --application="web,http\|https,100,200"  \<tag\>           Name to identify application (must be unique).  \<services\>      List of services (used the tag name. Separated     by '\|').  \<threshold-*\>   nagios-perfdata - number of connections.                                                                                                                                                                                                                                                                                                                                                                             |
| --con-mode    | Default mode for parsing and command: 'netstat' (default) or 'ss'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-average      | Warning threshold average CPU utilization.                                                                                                                                                                                                    |
| --critical-average     | Critical threshold average CPU utilization.                                                                                                                                                                                                   |
| --warning-core         | Warning thresholds for each CPU core                                                                                                                                                                                                          |
| --critical-core        | Critical thresholds for each CPU core                                                                                                                                                                                                         |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                                        |
| --critical-*           | Critical threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                                       |

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Option               | Description                                            |
|:---------------------|:-------------------------------------------------------|
| --warning-usage      | Warning threshold.                                     |
| --critical-usage     | Critical threshold.                                    |
| --units              | Units of thresholds (Default: '%') ('%', 'B').         |
| --free               | Thresholds are on free space left.                     |
| --filter-mountpoint  | Filter filesystem mount point (regexp can be used).    |
| --exclude-mountpoint | Exclude filesystem mount point (regexp can be used).   |
| --filter-type        | Filter filesystem type (regexp can be used).           |
| --filter-fs          | Filter filesystem (regexp can be used).                |
| --exclude-fs         | Exclude filesystem (regexp can be used).               |

</TabItem>
<TabItem value="Disk-IO-*" label="Disk-IO-*">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'read-usage', 'write-usage', 'read-wait', 'write-wait', 'svctime', 'utils'.                                                                                                                                               |
| --filter-partition-name  | Filter partition name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-partition-name | Exclude partition name (regexp can be used).                                                                                                                                                                                                  |
| --bytes-per-sector       | Bytes per sector (Default: 512)                                                                                                                                                                                                               |
| --interrupt-frequency    | Linux Kernel Timer Interrupt Frequency (Default: 1000)                                                                                                                                                                                        |
| --skip                   | Skip partitions with 0 sectors read/write.                                                                                                                                                                                                    |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Option          | Description                                                                                                                                            |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --files         | Files/Directories to check. (Shell expansion is ok)                                                                                                    |
| --warning       | Warning threshold in seconds for each files/directories (diff time).                                                                                   |
| --critical      | Critical threshold in seconds for each files/directories (diff time).                                                                                  |
| --separate-dirs | Do not include size of subdirectories.                                                                                                                 |
| --max-depth     | Don't check fewer levels. (can be use --separate-dirs)                                                                                                 |
| --time          | Check another time than modified time.                                                                                                                 |
| --exclude-du    | Exclude files/directories with 'du' command. Values from exclude files/directories are not counted in parent directories. Shell pattern can be used.   |
| --filter-plugin | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used.            |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Option           | Description                                                                                                                                            |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --files          | Files/Directories to check. (Shell expansion is ok)                                                                                                    |
| --warning-one    | Warning threshold in bytes for each files/directories.                                                                                                 |
| --critical-one   | Critical threshold in bytes for each files/directories.                                                                                                |
| --warning-total  | Warning threshold in bytes for all files/directories.                                                                                                  |
| --critical-total | Critical threshold in bytes for all files/directories.                                                                                                 |
| --separate-dirs  | Do not include size of subdirectories.                                                                                                                 |
| --max-depth      | Don't check fewer levels. (can be use --separate-dirs)                                                                                                 |
| --all-files      | Add files when you check directories.                                                                                                                  |
| --exclude-du     | Exclude files/directories with 'du' command. Values from exclude files/directories are not counted in parent directories. Shell pattern can be used.   |
| --filter-plugin  | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used.            |

</TabItem>
<TabItem value="Inodes-*" label="Inodes-*">

| Option               | Description                                            |
|:---------------------|:-------------------------------------------------------|
| --warning-usage      | Warning threshold in percent.                          |
| --critical-usage     | Critical threshold in percent.                         |
| --filter-mountpoint  | Filter filesystem mount point (regexp can be used).    |
| --exclude-mountpoint | Exclude filesystem mount point (regexp can be used).   |
| --filter-type        | Filter filesystem type (regexp can be used).           |
| --filter-fs          | Filter filesystem (regexp can be used).                |
| --exclude-fs         | Exclude filesystem (regexp can be used).               |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Option                 | Description                                                                                                                                         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         | Command to test (Default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    | Command path (Default: none).                                                                                                                       |
| --exec-command-options | Command options (Default: none).                                                                                                                    |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Option                 | Description                                                                                                                                         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         | Command to test (Default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    | Command path (Default: none).                                                                                                                       |
| --exec-command-options | Command options (Default: none).                                                                                                                    |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                             |
|:-----------|:----------------------------------------|
| --warning  | Warning threshold (1min,5min,15min).    |
| --critical | Critical threshold (1min,5min,15min).   |
| --average  | Load average for the number of CPUs.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                                                                                                             |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --swap                   | Check swap also.                                                                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'memory-usage' (B), 'memory-usage-free' (B), 'memory-usage-prct' (%), 'memory-available' (B), 'memory-available-prct' (%), 'swap' (B), 'swap-free' (B), 'swap-prct' (%), 'buffer' (B), 'cached' (B), 'slab' (B).    |

</TabItem>
<TabItem value="Packet-Errors-*" label="Packet-Errors-*">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold in percent of total packets. Can be: in-error, out-error, in-discard, out-discard                                                                                                                                           |
| --critical-*           | Critical threshold in percent of total packets. Can be: in-error, out-error, in-discard, out-discard                                                                                                                                          |
| --filter-interface     | Filter interface name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-interface    | Exclude interface name (regexp can be used).                                                                                                                                                                                                  |
| --filter-state         | Filter filesystem type (regexp can be used).                                                                                                                                                                                                  |
| --no-loopback          | Don't display loopback interfaces.                                                                                                                                                                                                            |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --add-cpu                | Monitor cpu usage.                                                                                                                                                                                                                            |
| --add-memory             | Monitor memory usage. It's inaccurate but it provides a trend.                                                                                                                                                                                |
| --add-disk-io            | Monitor disk I/O.                                                                                                                                                                                                                             |
| --filter-command         | Filter process commands (regexp can be used).                                                                                                                                                                                                 |
| --exclude-command        | Exclude process commands (regexp can be used).                                                                                                                                                                                                |
| --filter-arg             | Filter process arguments (regexp can be used).                                                                                                                                                                                                |
| --exclude-arg            | Exclude process arguments (regexp can be used).                                                                                                                                                                                               |
| --filter-ppid            | Filter process ppid (regexp can be used).                                                                                                                                                                                                     |
| --filter-state           | Filter process states (regexp can be used). You can use: 'zombie', 'dead', 'paging', 'stopped', 'InterrupibleSleep', 'running', 'UninterrupibleSleep'.                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'total-memory-usage', 'total-cpu-utilization', 'total-disks-read', 'total-disks-write', 'time', 'memory-usage', 'cpu-utilization', 'disks-read', 'disks-write'.                                                  |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                                         |
|:-------------------------|:------------------------------------------------------------------------------------|
| --no-swap                | Threshold if no active swap (default: 'critical').                                  |
| --warning-* --critical-* | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%).    |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-in           | Warning threshold in percent for 'in' traffic.                                                                                                                                                                                                |
| --critical-in          | Critical threshold in percent for 'in' traffic.                                                                                                                                                                                               |
| --warning-out          | Warning threshold in percent for 'out' traffic.                                                                                                                                                                                               |
| --critical-out         | Critical threshold in percent for 'out' traffic.                                                                                                                                                                                              |
| --unknown-status       | Define the conditions to match for the status to be UNKNOWN (Default: ''). You can use the following variables: %{status}, %{display}                                                                                                         |
| --warning-status       | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}, %{display}                                                                                                         |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (Default: '%{status} ne "RU"'). You can use the following variables: %{status}, %{display}                                                                                       |
| --units                | Units of thresholds (Default: 'b/s') ('%', 'b/s'). Percent canbe used only if --speed is set.                                                                                                                                                 |
| --filter-interface     | Filter interface name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-interface    | Exclude interface name (regexp can be used).                                                                                                                                                                                                  |
| --filter-state         | Filter interfaces type (regexp can be used).                                                                                                                                                                                                  |
| --speed                | Set interface speed (in Mb).                                                                                                                                                                                                                  |
| --guess-speed          | Try to guess speed with commands ethtool and iwconfig.                                                                                                                                                                                        |
| --no-loopback          | Don't display loopback interfaces.                                                                                                                                                                                                            |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option     | Description                      |
|:-----------|:---------------------------------|
| --warning  | Warning threshold in seconds.    |
| --critical | Critical threshold in seconds.   |
| --seconds  | Display uptime in seconds.       |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib64/nagios/plugins//check_centreon_nrpe -H 10.0.0.1 -p 5666 -t 30  -c check_centreon_plugins -a '' ''  " \
	--warning= \
	--critical= \
	--help
```
