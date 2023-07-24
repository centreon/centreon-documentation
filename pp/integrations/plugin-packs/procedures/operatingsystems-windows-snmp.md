---
id: operatingsystems-windows-snmp
title: Windows SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Windows SNMP** brings a host template:

* **OS-Windows-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="OS-Windows-SNMP-custom" label="OS-Windows-SNMP-custom">

| Service Alias | Service Template              | Service Description                                                                                                                                  |
|:--------------|:------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu           | OS-Windows-Cpu-SNMP-custom    | Check the rate of utilization of the CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPUs.  |
| Memory        | OS-Windows-Memory-SNMP-custom | Check the rate of the utilization of memory                                                                                                          |
| Swap          | OS-Windows-Swap-SNMP-custom   | Check the rate of the utilization of virtual memory                                                                                                  |

> The services listed above are created automatically when the **OS-Windows-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias        | Service Template                            | Service Description                                                                                     | Discovery  |
|:---------------------|:--------------------------------------------|:--------------------------------------------------------------------------------------------------------|:----------:|
| Disk-Generic-Id      | OS-Windows-Disk-Generic-Id-SNMP-custom      | Check the rate of free space on the disk. For each check the name of the disk will appear              |            |
| Disk-Generic-Name    | OS-Windows-Disk-Generic-Name-SNMP-custom    | Check the rate of free space on the disk. For each check the name of the disk will appear              |            |
| Disk-Global          | OS-Windows-Disk-Global-SNMP-custom          | Check the rate of free space on the disk. For each checks the name of the disk will appear              | X          |
| Ntp                  | OS-Windows-Ntp-SNMP-custom                  | Check the synchronization with an NTP server                                                            |            |
| Process-Generic      | OS-Windows-Process-Generic-SNMP-custom      | Check if Windows process are started                                                                    | X          |
| Service-Generic      | OS-Windows-Service-Generic-SNMP-custom      | Check if Windows services are started                                                                   | X          |
| Traffic-Generic-Id   | OS-Windows-Traffic-Generic-Id-SNMP-custom   | Check the bandwidth of the interface. For each checks the name of the interface will appear             |            |
| Traffic-Generic-Name | OS-Windows-Traffic-Generic-Name-SNMP-custom | Check the bandwidth of the interface. For each checks the name of the interface will appear             |            |
| Traffic-Global       | OS-Windows-Traffic-Global-SNMP-custom       | Check the bandwidth of the interface. For each checks the name of the interface will appear             | X          |
| Uptime               | OS-Windows-Uptime-SNMP-custom               | Check the uptime of the Windows server since the last reboot. It's just an indication with no threshold |            |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                          |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resource through a SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) to get the discovery rule |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                      | Description                                                   |
|:-------------------------------|:--------------------------------------------------------------|
| OS-Windows-SNMP-Disk-Name      | Discover the disk partitions and monitor space occupation     |
| OS-Windows-SNMP-Processes-Name | Discover processes and monitor their system usage             |
| OS-Windows-SNMP-Services-Name  | Discover services and monitor their system usage              |
| OS-Windows-SNMP-Traffic-Name   | Discover network interfaces and monitor bandwidth utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                               | Unit  |
|:------------------------------------------|:------|
| cpu.utilization.percentage                | %     |
| *cpu_num*#core.cpu.utilization.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| storage.partitions.count              |       |
| *disk_name*#storage.space.usage.bytes | B     |
| *disk_name*#storage.access.count      |       |

> Applies to the following service templates: Disk-Generic-Id, Disk-Generic-Name, Disk-Global

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name        | Unit  |
|:-------------------|:------|
| memory.usage.bytes | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Metric name         | Unit  |
|:--------------------|:------|
| time.offset.seconds | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Metric name | Unit  |
|:------------|:------|
| nbproc      | N/A   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="Service-Generic" label="Service-Generic">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| services.active.count           |       |
| services.continue.pending.count |       |
| services.pause.pending.count    |       |
| services.paused.count           |       |
| service status                  |       |

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric name      | Unit  |
|:-----------------|:------|
| swap.usage.bytes |       |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Metric name                                               | Unit  |
|:----------------------------------------------------------|:------|
| interface status                                          |       |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |

> Applies to the following service templates: Traffic-Generic-Id, Traffic-Generic-Name, Traffic-Global

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your ressource.
Please refer to the official documentation from the constructor.

### Network flow

The target resource must be reachable from the Centreon poller on the UDP/161
SNMP port.

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
dnf install centreon-pack-operatingsystems-windows-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-windows-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-operatingsystems-windows-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-windows-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Windows SNMP** connector through
the **Configuration > Monitoring Connectors Manager** menu.

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
dnf install centreon-plugin-Operatingsystems-Windows-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-operatingsystems-windows-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Windows-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **OS-Windows-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                           | Default value     | Mandatory   |
|:-----------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold average CPU utilization                                                           | 80                |             |
| CRITICAL     | Critical threshold average CPU utilization                                                          | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Disk-Generic-Id" label="Disk-Generic-Id">

| Macro        | Description                                                                                         | Default value                                 | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:----------------------------------------------|:-----------:|
| TRANSFORMSRC | Regexp src to transform display value. (security risk!!!)                                           | ^(..).*                                       |             |
| TRANSFORMDST | Regexp dst to transform display value. (security risk!!!)                                           | $1                                            |             |
| DISKID       | Set the storage (number expected) ex: 1, 2,... (empty means 'check all storage')                    |                                               |             |
| WARNING      | Warning threshold                                                                                   | 80                                            |             |
| CRITICAL     | Critical threshold                                                                                  | 90                                            |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --filter-perfdata='storage.space\|used\|free' |             |

</TabItem>
<TabItem value="Disk-Generic-Name" label="Disk-Generic-Name">

| Macro        | Description                                                                                         | Default value                                 | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:----------------------------------------------|:-----------:|
| TRANSFORMSRC | Regexp src to transform display value. (security risk!!!)                                           | ^(..).*                                       |             |
| TRANSFORMDST | Regexp dst to transform display value. (security risk!!!)                                           | $1                                            |             |
| DISKNAME     | Set the storage (number expected) ex: 1, 2,... (empty means 'check all storage')                    |                                               |             |
| WARNING      | Warning threshold                                                                                   | 80                                            |             |
| CRITICAL     | Critical threshold                                                                                  | 90                                            |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --filter-perfdata='storage.space\|used\|free' |             |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Macro        | Description                                                                                         | Default value                                           | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:--------------------------------------------------------|:-----------:|
| FILTER       | Set the storage (number expected) ex: 1, 2,... (empty means 'check all storage')                    | .*                                                      |             |
| TRANSFORMSRC | Regexp src to transform display value. (security risk!!!)                                           | ^(..).*                                                 |             |
| TRANSFORMDST | Regexp dst to transform display value. (security risk!!!)                                           | $1                                                      |             |
| WARNING      | Warning threshold                                                                                   | 80                                                      |             |
| CRITICAL     | Critical threshold                                                                                  | 90                                                      |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose --filter-perfdata='storage.space\|used\|free' |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                   | 80                |             |
| CRITICAL     | Critical threshold                                                                                  | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro        | Description                                                                                                     | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NTPADDR      | Set the NTP hostname (if not set, localtime is used)                                                            |                   |             |
| NTPPORT      | Set the NTP port (Default: 123)                                                                                 |                   |             |
| TIMEZONE     | Set the timezone of distant server. For Windows, you need to set it. You can use the following format: 'Europe/London' or '+0100' |                   |             |
| WARNING      | Time offset warning threshold (in seconds)                                                                      | -1:1              |             |
| CRITICAL     | Time offset critical Threshold (in seconds)                                                                     | -2:2              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)             |                   |             |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                 |                   |             |
| PROCESSPATH  | Filter process path                                                                                 |                   |             |
| PROCESSARGS  | Filter process arguments                                                                            |                   |             |
| WARNING      | Warning threshold of matching processes count                                                       |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Service-Generic" label="Service-Generic">

| Macro                   | Description                                                                                         | Default value     | Mandatory   |
|:------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SERVICENAME             | DEPRECATED. Use --filter-name instead                                                               |                   |             |
| STATE                   | DEPRECATED. Use --critical/warning-status instead                                                   |                   |             |
| FILTERNAME              | DEPRECATED. Use --filter-name instead                                                               |                   |             |
| CRITICAL                | DEPRECATED. Use --critical-active instead                                                           | 1:                |             |
| WARNING                 | DEPRECATED. Use --warning-active instead                                                            |                   |             |
| WARNINGACTIVE           | Thresholds on services count                                                                        |                   |             |
| CRITICALACTIVE          | Thresholds on services count                                                                        |                   |             |
| WARNINGCONTINUEPENDING  | Thresholds on services count                                                                        |                   |             |
| CRITICALCONTINUEPENDING | Thresholds on services count                                                                        |                   |             |
| WARNINGPAUSED           | Thresholds on services count                                                                        |                   |             |
| CRITICALPAUSED          | Thresholds on services count                                                                        |                   |             |
| WARNINGPAUSEPENDING     | Thresholds on services count                                                                        |                   |             |
| CRITICALPAUSEPENDING    | Thresholds on services count                                                                        |                   |             |
| WARNINGSTATUS           |                                                                                                     |                   |             |
| CRITICALSTATUS          |                                                                                                     |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                        | 80                |             |
| CRITICAL     | Critical threshold in percent                                                                       | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACEID  | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces')                |                   |             |
| WARNINGIN    | Thresholds                                                                                          | 80                |             |
| CRITICALIN   | Thresholds                                                                                          | 90                |             |
| WARNINGOUT   | Thresholds                                                                                          | 80                |             |
| CRITICALOUT  | Thresholds                                                                                          | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Macro         | Description                                                                                         | Default value     | Mandatory   |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces')                |                   |             |
| WARNINGIN     | Thresholds                                                                                          | 80                |             |
| CRITICALIN    | Thresholds                                                                                          | 90                |             |
| WARNINGOUT    | Thresholds                                                                                          | 80                |             |
| CRITICALOUT   | Thresholds                                                                                          | 90                |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro          | Description                                                                                                                                                                                                         | Default value     | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER         | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces')                                                                                                                                | .*                |             |
| WARNINGIN      | Thresholds                                                                                                                                                                                                          | 80                |             |
| CRITICALIN     | Thresholds                                                                                                                                                                                                          | 90                |             |
| WARNINGOUT     | Thresholds                                                                                                                                                                                                          | 80                |             |
| CRITICALOUT    | Thresholds                                                                                                                                                                                                          | 90                |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                 | --verbose         |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                   |                   |             |
| CRITICAL     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_windows_snmp.pl \
	--plugin=os::windows::snmp::plugin \
	--mode=service \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='windows_ro' \
    --filter-name='Server' \
    --critical-active=1
```

The expected command output is shown below:

```bash
OK: Service 'Server' state is 'active' [installed state: 'installed'] | 'services.active.count'=1;;1:;0; 'services.continue.pending.count'=0;;;0; 'services.pause.pending.count'=0;;;0; 'services.paused.count'=0;;;0;
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
/usr/lib/centreon/plugins/centreon_windows_snmp.pl \
	--plugin=os::windows::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                         | Linked service template                                                                                                               |
|:-----------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpu.pm)]                        | OS-Windows-Cpu-SNMP-custom                                                                                                            |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]          | OS-Windows-Traffic-Generic-Id-SNMP-custom<br />OS-Windows-Traffic-Generic-Name-SNMP-custom<br />OS-Windows-Traffic-Global-SNMP-custom |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)] | Used for service discovery                                                                                                            |
| list-processes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listprocesses.pm)]   | Used for service discovery                                                                                                            |
| list-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/snmp/mode/listservices.pm)]   | Used for service discovery                                                                                                            |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/liststorages.pm)]     | Used for service discovery                                                                                                            |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/snmp/mode/memory.pm)]                | OS-Windows-Memory-SNMP-custom                                                                                                         |
| processcount [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/processcount.pm)]      | OS-Windows-Process-Generic-SNMP-custom                                                                                                |
| service [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/snmp/mode/service.pm)]              | OS-Windows-Service-Generic-SNMP-custom                                                                                                |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/storage.pm)]                | OS-Windows-Disk-Generic-Id-SNMP-custom<br />OS-Windows-Disk-Generic-Name-SNMP-custom<br />OS-Windows-Disk-Global-SNMP-custom          |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/snmp/mode/swap.pm)]                    | OS-Windows-Swap-SNMP-custom                                                                                                           |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/ntp.pm)]                       | OS-Windows-Ntp-SNMP-custom                                                                                                            |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                  | OS-Windows-Uptime-SNMP-custom                                                                                                         |

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
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-force-getnext                       | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option             | Description                                   |
|:-------------------|:----------------------------------------------|
| --use-ucd          | Use UCD MIB for CPU average.                  |
| --warning-average  | Warning threshold average CPU utilization.    |
| --critical-average | Critical threshold average CPU utilization.   |
| --warning-core     | Warning thresholds for each CPU core          |
| --critical-core    | Critical thresholds for each CPU core         |

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Option                  | Description                                                                                                                                                                                                                                   |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached             | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server          | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute       | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db              | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file         | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration         | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir         | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix      | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd  | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format      | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key         | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher      | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-usage         | Warning threshold.                                                                                                                                                                                                                            |
| --critical-usage        | Critical threshold.                                                                                                                                                                                                                           |
| --warning-access        | Warning threshold.                                                                                                                                                                                                                            |
| --critical-access       | Critical threshold. Check if storage is readOnly: --critical-access=readOnly                                                                                                                                                                  |
| --add-access            | Check storage access (readOnly, readWrite).                                                                                                                                                                                                   |
| --units                 | Units of thresholds (Default: '%') ('%', 'B').                                                                                                                                                                                                |
| --free                  | Thresholds are on free space left.                                                                                                                                                                                                            |
| --storage               | Set the storage (number expected) ex: 1, 2,... (empty means 'check all storage').                                                                                                                                                             |
| --name                  | Allows to use storage name with option --storage instead ofstorage oid index.                                                                                                                                                                 |
| --regexp                | Allows to use regexp to filter storage (with option --name).                                                                                                                                                                                  |
| --regexp-isensitive     | Allows to use regexp non case-sensitive (with --regexp).                                                                                                                                                                                      |
| --path-best-match       | Allows to select best path mount point (with --name).                                                                                                                                                                                         |
| --reload-cache-time     | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                   |
| --oid-filter            | Choose OID used to filter storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                                                                                                                         |
| --oid-display           | Choose OID used to display storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                                                                                                                        |
| --display-transform-src | Regexp src to transform display value. (security risk!!!)                                                                                                                                                                                     |
| --display-transform-dst | Regexp dst to transform display value. (security risk!!!)                                                                                                                                                                                     |
| --show-cache            | Display cache storage datas.                                                                                                                                                                                                                  |
| --space-reservation     | Some filesystem has space reserved (like ext4 for root). The value is in percent of total (Default: none) (results like 'df' command).                                                                                                        |
| --filter-duplicate      | Filter duplicate storages (in used size and total size).                                                                                                                                                                                      |
| --filter-storage-type   | Filter storage types with a regexp (Default: '^(hrStorageFixedDisk\|hrStorageNetworkDisk\|hrFSBerkeleyFFS)$').                                                                                                                                |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option       | Description                                            |
|:-------------|:-------------------------------------------------------|
| --units      | Units of thresholds (Default: '%') ('%', 'absolute').  |
| --free       | Thresholds are on free space left.                     |
| --warning-*  | Warning threshold. Can be: 'memory'.                   |
| --critical-* | Critical threshold. Can be: 'memory'.                  |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option            | Description                                                                                                         |
|:------------------|:--------------------------------------------------------------------------------------------------------------------|
| --oid             | Override default OID.                                                                                               |
| --warning-offset  | Time offset warning threshold (in seconds).                                                                         |
| --critical-offset | Time offset critical Threshold (in seconds).                                                                        |
| --ntp-hostname    | Set the ntp hostname (if not set, localtime is used).                                                               |
| --ntp-port        | Set the ntp port (Default: 123).                                                                                    |
| --timezone        | Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100'.    |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

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
| --process-status       | Filter process status. Can be a regexp. (Default: 'running\|runnable').                                                                                                                                                                       |
| --process-name         | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name          | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path         | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path          | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args         | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args          | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning              | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical             | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory               | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each     | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each    | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total    | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total   | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg      | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg     | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                  | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total    | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total   | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                  | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num              | Number of processes in top memory display (Default: 5).                                                                                                                                                                                       |
| --top-size             | Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="Service-Generic" label="Service-Generic">

| Option                             | Description                                                                                                                    |
|:-----------------------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| --filter-name                      | Filter by service name (can be a regexp).                                                                                      |
| --warning-status --critical-status | Set WARNING or CRITICAL threshold for status. You can use the following variables: %{operating\_state}, %{installed\_state}.   |
| --warning-* --critical-*           | Thresholds on services count. Can be: 'active', 'continue-pending', 'pause-pending', 'paused'.                                 |
| --warning                          | DEPRECATED. Use --warning-active instead.                                                                                      |
| --critical                         | DEPRECATED. Use --critical-active instead.                                                                                     |
| --service                          | DEPRECATED. Use --filter-name instead.                                                                                         |
| --regexp                           | DEPRECATED. Use --filter-name instead.                                                                                         |
| --state                            | DEPRECATED. Use --critical/warning-status instead.                                                                             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option      | Description                                                                                                                                   |
|:------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| --warning   | Warning threshold in percent.                                                                                                                 |
| --critical  | Critical threshold in percent.                                                                                                                |
| --real-swap | Use this option to remove physical memory from Windows SNMP swap values. Using that option can give wrong values (incoherent or negative).    |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Option                   | Description                                                                                                                                                                                                                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                     |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                             |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                      |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                               |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                         |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                   |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          |
| --units-cast             | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                      |
| --name                   | Allows you to define the interface (in option --interface) byname instead of OID index. The name matching mode supports regular expressions.                                                                                                                                               |
| --speed                  | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl          | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            |
| --force-counters64       | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter             | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                |
| --oid-display            | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                       |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                     |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                     |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

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
| --warning-uptime       | Warning threshold.                                                                                                                                                                                                                            |
| --critical-uptime      | Critical threshold.                                                                                                                                                                                                                           |
| --add-sysdesc          | Display system description.                                                                                                                                                                                                                   |
| --force-oid            | Can choose your oid (numeric format only).                                                                                                                                                                                                    |
| --check-overload       | Uptime counter limit is 4294967296 and overflow. With that option, we manage the counter going back. But there is a few chance we can miss a reboot.                                                                                          |
| --reboot-window        | To be used with check-overload option. Time in milliseconds (Default: 5000) You increase the chance of not missing a reboot if you decrease that value.                                                                                       |
| --unit                 | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds                                                                                   |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_windows_snmp.pl \
	--plugin=os::windows::snmp::plugin \
	--mode=service \
	--help
```
