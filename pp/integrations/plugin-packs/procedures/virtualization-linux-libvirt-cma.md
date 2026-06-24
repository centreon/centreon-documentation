---
id: virtualization-linux-libvirt-cma
slug: /virtualization-linux-libvirt-cma
title: Linux Libvirt CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CMAprerequisites from './_cma-prerequisites.mdx';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Linux Libvirt CMA** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Linux Libvirt CMA** brings 2 host templates:

* **Virt-Linux-Libvirt-Hypervisor-CMA-custom**
* **Virt-Linux-Libvirt-VM-CMA-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Virt-Linux-Libvirt-Hypervisor-CMA-custom" label="Virt-Linux-Libvirt-Hypervisor-CMA-custom">

| Service Alias | Service Template                                     | Service Description                         |
|:--------------|:-----------------------------------------------------|:--------------------------------------------|
| Pool-Status   | Virt-Linux-Libvirt-Hypervisor-Pool-Status-CMA-custom | Check libvirt storage pool status and usage |
| Volume        | Virt-Linux-Libvirt-Hypervisor-Volume-CMA-custom      | Check libvirt storage volume allocation     |

> The services listed above are created automatically when the **Virt-Linux-Libvirt-Hypervisor-CMA-custom** host template is used.

</TabItem>
<TabItem value="Virt-Linux-Libvirt-VM-CMA-custom" label="Virt-Linux-Libvirt-VM-CMA-custom">

| Service Alias | Service Template                         | Service Description                                 |
|:--------------|:-----------------------------------------|:----------------------------------------------------|
| Cpu           | Virt-Linux-Libvirt-Vm-Cpu-CMA-custom     | Check virtual machines CPU usage                    |
| Disk-Io       | Virt-Linux-Libvirt-Vm-Disk-Io-CMA-custom | Check virtual machines disk I/O statistics          |
| Memory        | Virt-Linux-Libvirt-Vm-Memory-CMA-custom  | Check virtual machines memory usage                 |
| Network       | Virt-Linux-Libvirt-Vm-Network-CMA-custom | Check virtual machines network interface statistics |
| Status        | Virt-Linux-Libvirt-Vm-Status-CMA-custom  | Check virtual machines status                       |

> The services listed above are created automatically when the **Virt-Linux-Libvirt-VM-CMA-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Name                                     | Unit |
|:-----------------------------------------|:-----|
| vm.cpu.utilization.percentage            | %    |
| vm.cpu.utilization.vcpu.percentage       | %    |
| *cpu*#vm.cpu.vcpu.utilization.percentage | %    |

</TabItem>
<TabItem value="Disk-Io" label="Disk-Io">

| Name                                              | Unit |
|:--------------------------------------------------|:-----|
| *disk_name*#vm.disk.io.read.usage.bytespersecond  | B/s  |
| *disk_name*#vm.disk.io.write.usage.bytespersecond | B/s  |
| read-iops                                         | N/A  |
| write-iops                                        | N/A  |

</TabItem>
<TabItem value="Memory" label="Memory">

| Name                             | Unit |
|:---------------------------------|:-----|
| *vms*#vm.memory.usage.bytes      | B    |
| *vms*#vm.memory.usage.percentage | %    |
| *vms*#vm.memory.rss.bytes        | B    |

</TabItem>
<TabItem value="Network" label="Network">

| Name                                              | Unit  |
|:--------------------------------------------------|:------|
| *interfaces*#vm.network.traffic.in.bitspersecond  | b/s   |
| *interfaces*#vm.network.traffic.out.bitspersecond | b/s   |
| *interfaces*#vm.network.packets.in.count          | count |
| *interfaces*#vm.network.packets.out.count         | count |
| *interfaces*#vm.network.errors.in.count           | count |
| *interfaces*#vm.network.errors.out.count          | count |

</TabItem>
<TabItem value="Pool-Status" label="Pool-Status">

| Name                                | Unit |
|:------------------------------------|:-----|
| status                              | N/A  |
| *pools*#pool.space.usage.bytes      | B    |
| *pools*#pool.space.usage.percentage | %    |
| *pools*#pool.space.free.bytes       | B    |

</TabItem>
<TabItem value="Status" label="Status">

| Name   | Unit |
|:-------|:-----|
| status | N/A  |

</TabItem>
<TabItem value="Volume" label="Volume">

| Name                                   | Unit |
|:---------------------------------------|:-----|
| *volumes*#volume.allocation.bytes      | B    |
| *volumes*#volume.allocation.percentage | %    |

</TabItem>
</Tabs>

## Prerequisites

This connector allows you to monitor libvirt through the virsh client.

Please refer to the [libvirt documentation](https://libvirt.org/manpages/virsh.html) for more information on how to use this client.

<CMAprerequisites />

## Installing the monitoring connector

### Pack

The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-virtualization-linux-libvirt-cma
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-linux-libvirt-cma
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-virtualization-linux-libvirt-cma
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-linux-libvirt-cma
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Linux Libvirt CMA** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

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
dnf install 
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install 
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install 
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install 
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="Virt-Linux-Libvirt-Hypervisor-CMA-custom" label="Virt-Linux-Libvirt-Hypervisor-CMA-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Virt-Linux-Libvirt-Hypervisor-CMA-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                     | Description                                                                                                                                        | Default value                                          | Mandatory |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|:---------:|
| CENTREONAGENTPLUGINS      |                                                                                                                                                    | /usr/lib/centreon/plugins/                             |           |
| CONNECT_URI               | Libvirt connection URI. Examples: qemu:///system, qemu+ssh://user@host/system, xen:///                                                             | qemu:///system?socket=/var/run/libvirt/libvirt-sock-ro |           |
| TIMEOUT                   | Timeout in seconds for `virsh` commands                                                                                                            | 30                                                     |           |
| VIRSH_PATH                | Path to the `virsh` binary directory                                                                                                               | /usr/bin                                               |           |
| CENTREONAGENTEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).           |                                                        |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Virt-Linux-Libvirt-VM-CMA-custom" label="Virt-Linux-Libvirt-VM-CMA-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Virt-Linux-Libvirt-VM-CMA-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                     | Description                                                                                                                                        | Default value                                          | Mandatory |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|:---------:|
| CENTREONAGENTPLUGINS      |                                                                                                                                                    | /usr/lib/centreon/plugins/                             |           |
| CONNECT_URI               | Libvirt connection URI. Examples: qemu:///system, qemu+ssh://user@host/system, xen:///                                                             | qemu:///system?socket=/var/run/libvirt/libvirt-sock-ro |           |
| TIMEOUT                   | Timeout in seconds for `virsh` commands                                                                                                            | 30                                                     |           |
| VIRSH_PATH                | Path to the `virsh` binary directory                                                                                                               | /usr/bin                                               |           |
| VM_NAME                   | Check only this specific VM (skips list discovery). Cannot be used together with --include-name or --exclude-name                                  |                                                        |           |
| CENTREONAGENTEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).           |                                                        |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro                         | Description                                                                                                                                      | Default value | Mandatory |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNING_CPU_UTILIZATION       | Warning threshold for CPU usage (% vs 1 physical CPU)                                                                                            |               |           |
| CRITICAL_CPU_UTILIZATION      | Critical threshold for CPU usage (% vs 1 physical CPU)                                                                                           |               |           |
| WARNING_CPU_UTILIZATION_VCPU  | Warning threshold for CPU usage relative to allocated vCPUs (%)                                                                                  |               |           |
| CRITICAL_CPU_UTILIZATION_VCPU | Critical threshold for CPU usage relative to allocated vCPUs (%)                                                                                 |               |           |
| WARNING_VCPU_UTILIZATION      | Warning threshold for per-vCPU usage (% vs 1 physical CPU)                                                                                       |               |           |
| CRITICAL_VCPU_UTILIZATION     | Critical threshold for per-vCPU usage (% vs 1 physical CPU)                                                                                      |               |           |
| EXTRA_OPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Disk-Io" label="Disk-Io">

| Macro                | Description                                                                                                                                      | Default value | Mandatory |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNING_READ_IOPS    | Warning threshold for read IOPS                                                                                                                  |               |           |
| CRITICAL_READ_IOPS   | Critical threshold for read IOPS                                                                                                                 |               |           |
| WARNING_READ_USAGE   | Warning threshold for disk read throughput (B/s)                                                                                                 |               |           |
| CRITICAL_READ_USAGE  | Critical threshold for disk read throughput (B/s)                                                                                                |               |           |
| WARNING_WRITE_IOPS   | Warning threshold for write IOPS                                                                                                                 |               |           |
| CRITICAL_WRITE_IOPS  | Critical threshold for write IOPS                                                                                                                |               |           |
| WARNING_WRITE_USAGE  | Warning threshold for disk write throughput (B/s)                                                                                                |               |           |
| CRITICAL_WRITE_USAGE | Critical threshold for disk write throughput (B/s)                                                                                               |               |           |
| EXTRA_OPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                      | Description                                                                                                                                      | Default value | Mandatory |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNING_MEMORY_RSS         | Warning threshold for RSS memory on host (bytes)                                                                                                 |               |           |
| CRITICAL_MEMORY_RSS        | Critical threshold for RSS memory on host (bytes)                                                                                                |               |           |
| WARNING_MEMORY_USAGE       | Warning threshold for memory used (bytes)                                                                                                        |               |           |
| CRITICAL_MEMORY_USAGE      | Critical threshold for memory used (bytes)                                                                                                       |               |           |
| WARNING_MEMORY_USAGE_PRCT  | Warning threshold for memory usage (%)                                                                                                           |               |           |
| CRITICAL_MEMORY_USAGE_PRCT | Critical threshold for memory usage (%)                                                                                                          |               |           |
| EXTRA_OPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Network" label="Network">

| Macro                  | Description                                                                                                                                      | Default value | Mandatory |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| INTERFACE_NAME         | Check only this specific network interface (exact match). Cannot be used together with --include-interface or --exclude-interface                |               |           |
| INCLUDE_INTERFACE_NAME | Filter network interfaces by name (regexp)                                                                                                       |               |           |
| EXCLUDE_INTERFACE_NAME | Exclude network interfaces whose name matches this regexp                                                                                        |               |           |
| WARNING_ERRORS_IN      | Warning threshold for inbound errors per second                                                                                                  |               |           |
| CRITICAL_ERRORS_IN     | Critical threshold for inbound errors per second                                                                                                 |               |           |
| WARNING_ERRORS_OUT     | Warning threshold for outbound errors per second                                                                                                 |               |           |
| CRITICAL_ERRORS_OUT    | Critical threshold for outbound errors per second                                                                                                |               |           |
| WARNING_PACKETS_IN     | Warning threshold for inbound packets per second                                                                                                 |               |           |
| CRITICAL_PACKETS_IN    | Critical threshold for inbound packets per second                                                                                                |               |           |
| WARNING_PACKETS_OUT    | Warning threshold for outbound packets per second                                                                                                |               |           |
| CRITICAL_PACKETS_OUT   | Critical threshold for outbound packets per second                                                                                               |               |           |
| WARNING_TRAFFIC_IN     | Warning threshold for inbound traffic (b/s)                                                                                                      |               |           |
| CRITICAL_TRAFFIC_IN    | Critical threshold for inbound traffic (b/s)                                                                                                     |               |           |
| WARNING_TRAFFIC_OUT    | Warning threshold for outbound traffic (b/s)                                                                                                     |               |           |
| CRITICAL_TRAFFIC_OUT   | Critical threshold for outbound traffic (b/s)                                                                                                    |               |           |
| EXTRA_OPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Pool-Status" label="Pool-Status">

| Macro                     | Description                                                                                                                                      | Default value             | Mandatory |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|:---------:|
| POOL_NAME                 | Check only this specific pool                                                                                                                    |                           |           |
| INCLUDE_NAME              | Filter pools by name (regexp)                                                                                                                    |                           |           |
| EXCLUDE_NAME              | Exclude pools whose name matches this regexp                                                                                                     |                           |           |
| WARNING_SPACE_FREE        | Warning threshold for free space (bytes)                                                                                                         |                           |           |
| CRITICAL_SPACE_FREE       | Critical threshold for free space (bytes)                                                                                                        |                           |           |
| WARNING_SPACE_USAGE       | Warning threshold for space used (bytes)                                                                                                         |                           |           |
| CRITICAL_SPACE_USAGE      | Critical threshold for space used (bytes)                                                                                                        |                           |           |
| WARNING_SPACE_USAGE_PRCT  | Warning threshold for space usage (%)                                                                                                            |                           |           |
| CRITICAL_SPACE_USAGE_PRCT | Critical threshold for space usage (%)                                                                                                           |                           |           |
| CRITICAL_STATUS           | Define the conditions to match for the status to be CRITICAL                                                                                     | %\{state\} !~ /^running$/ |           |
| WARNING_STATUS            | Define the conditions to match for the status to be WARNING                                                                                      |                           |           |
| EXTRA_OPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |                           |           |

</TabItem>
<TabItem value="Status" label="Status">

| Macro           | Description                                                                                                                                      | Default value             | Mandatory |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|:---------:|
| CRITICAL_STATUS | Define the conditions to match for the status to be CRITICAL                                                                                     | %\{state\} !~ /^running$/ |           |
| WARNING_STATUS  | Define the conditions to match for the status to be WARNING                                                                                      |                           |           |
| EXTRA_OPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |                           |           |

</TabItem>
<TabItem value="Volume" label="Volume">

| Macro                    | Description                                                                                                                                      | Default value | Mandatory |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| POOL_NAME                | Check only this specific storage pool (skips pool-list discovery). Cannot be used together with --include-pool or --exclude-pool                 |               |           |
| INCLUDE_POOL_NAME        | Filter storage pools by name (regexp)                                                                                                            |               |           |
| XCLUDE_POOL_NAME         | Exclude storage pools whose name matches this regexp                                                                                             |               |           |
| VOLUME_NAME              | Check only this specific volume (exact match). Cannot be used together with --include-volume or --exclude-volume                                 |               |           |
| INCLUDE_VOLUME_NAME      | Filter volumes by name (regexp)                                                                                                                  |               |           |
| EXCLUDE_VOLUME_NAME      | Exclude volumes whose name matches this regexp                                                                                                   |               |           |
| WARNING_ALLOCATION       | Warning threshold for allocated space (bytes)                                                                                                    |               |           |
| CRITICAL_ALLOCATION      | Critical threshold for allocated space (bytes)                                                                                                   |               |           |
| WARNING_ALLOCATION_PRCT  | Warning threshold for allocated space (%)                                                                                                        |               |           |
| CRITICAL_ALLOCATION_PRCT | Critical threshold for allocated space (%)                                                                                                       |               |           |
| EXTRA_OPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_linux_libvirt_local.pl" \
	--plugin='cloud::linux::libvirt::local::plugin' \
	--connect-uri='qemu:///system?socket=/var/run/libvirt/libvirt-sock-ro' \
	--virsh-path='/usr/bin' \
	--timeout='30'  \
	--mode='volume' \
	--pool-name='' \
	--include-pool='' \
	--exclude-pool='' \
	--volume-name='' \
	--include-volume='' \
	--exclude-volume='' \
	--warning-allocation='' \
	--critical-allocation='' \
	--warning-allocation-prct='' \
	--critical-allocation-prct='' 
```

The expected command output is shown below:

```bash
OK: All volumes are ok | 'volumes1#volume.allocation.bytes'=30051B;;;0;capacity_bytes 'volumes2#volume.allocation.bytes'=32430B;;;0;capacity_bytes 'volumes1#volume.allocation.percentage'=22684%;;;0;100 'volumes2#volume.allocation.percentage'=74632%;;;0;100 
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
/usr/lib/centreon/plugins//centreon_linux_libvirt_local.pl" \
	--plugin='cloud::linux::libvirt::local::plugin' \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                             | Linked service template                              |
|:---------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/discovery.pm)]    | Not used in this Monitoring Connector                |
| pool-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/poolstatus.pm)] | Virt-Linux-Libvirt-Hypervisor-Pool-Status-CMA-custom |
| vm-cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/vmcpu.pm)]           | Virt-Linux-Libvirt-Vm-Cpu-CMA-custom                 |
| vm-disk-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/vmdiskio.pm)]    | Virt-Linux-Libvirt-Vm-Disk-Io-CMA-custom             |
| vm-memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/vmmemory.pm)]     | Virt-Linux-Libvirt-Vm-Memory-CMA-custom              |
| vm-network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/vmnetwork.pm)]   | Virt-Linux-Libvirt-Vm-Network-CMA-custom             |
| vm-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/vmstatus.pm)]     | Virt-Linux-Libvirt-Vm-Status-CMA-custom              |
| volume [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/volume.pm)]          | Virt-Linux-Libvirt-Hypervisor-Volume-CMA-custom      |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'        |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --warning-xxx                              | Warning threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --critical-xxx                             | Critical threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --ssh-backend                              | Define the backend you want to use. It can be: `sshcli` (default), `plink` and `libssh`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the `sshcli` backend. Warning: using a password is not recommended. Use `--ssh-priv-key` instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 | Hostname to connect when using the SSH backend.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --connect-uri                              | Libvirt connection URI (default: 'qemu:///system?socket=/var/run/libvirt/libvirt-sock-ro'). Examples: qemu:///system, qemu+ssh://user@host/system, xen:///.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --virsh-path                               | Path to the `virsh` binary directory (default: '/usr/bin').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --timeout                                  | Timeout in seconds for `virsh` commands (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --sudo                                     | Run `virsh` commands with sudo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option                          | Description                                                                                 |
|:--------------------------------|:--------------------------------------------------------------------------------------------|
| --vm-name                       | Check only this specific VM. Cannot be used together with --include-name or --exclude-name. |
| --include-name                  | Filter VMs by name (regexp).                                                                |
| --exclude-name                  | Exclude VMs whose name matches this regexp.                                                 |
| --warning-cpu-utilization       | Warning threshold for CPU usage (% vs 1 physical CPU).                                      |
| --critical-cpu-utilization      | Critical threshold for CPU usage (% vs 1 physical CPU).                                     |
| --warning-cpu-utilization-vcpu  | Warning threshold for CPU usage relative to allocated vCPUs (%).                            |
| --critical-cpu-utilization-vcpu | Critical threshold for CPU usage relative to allocated vCPUs (%).                           |
| --warning-vcpu-utilization      | Warning threshold for per-vCPU usage (% vs 1 physical CPU).                                 |
| --critical-vcpu-utilization     | Critical threshold for per-vCPU usage (% vs 1 physical CPU).                                |

</TabItem>
<TabItem value="Disk-Io" label="Disk-Io">

| Option                 | Description                                                                                                        |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------|
| --vm-name              | Check only this specific VM. Cannot be used together with --include-name or --exclude-name.                        |
| --include-name         | Filter VMs by name (regexp).                                                                                       |
| --exclude-name         | Exclude VMs whose name matches this regexp.                                                                        |
| --disk-name            | Check only this specific disk device (exact match). Cannot be used together with --include-disk or --exclude-disk. |
| --include-disk         | Filter disk devices by name (regexp).                                                                              |
| --exclude-disk         | Exclude disk devices whose name matches this regexp.                                                               |
| --warning-read-usage   | Warning threshold for disk read throughput (B/s).                                                                  |
| --critical-read-usage  | Critical threshold for disk read throughput (B/s).                                                                 |
| --warning-write-usage  | Warning threshold for disk write throughput (B/s).                                                                 |
| --critical-write-usage | Critical threshold for disk write throughput (B/s).                                                                |
| --warning-read-iops    | Warning threshold for read IOPS.                                                                                   |
| --critical-read-iops   | Critical threshold for read IOPS.                                                                                  |
| --warning-write-iops   | Warning threshold for write IOPS.                                                                                  |
| --critical-write-iops  | Critical threshold for write IOPS.                                                                                 |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                       | Description                                                                                 |
|:-----------------------------|:--------------------------------------------------------------------------------------------|
| --vm-name                    | Check only this specific VM. Cannot be used together with --include-name or --exclude-name. |
| --include-name               | Filter VMs by name (regexp).                                                                |
| --exclude-name               | Exclude VMs whose name matches this regexp.                                                 |
| --warning-memory-usage       | Warning threshold for memory used (bytes).                                                  |
| --critical-memory-usage      | Critical threshold for memory used (bytes).                                                 |
| --warning-memory-usage-prct  | Warning threshold for memory usage (%).                                                     |
| --critical-memory-usage-prct | Critical threshold for memory usage (%).                                                    |
| --warning-memory-rss         | Warning threshold for RSS memory on host (bytes).                                           |
| --critical-memory-rss        | Critical threshold for RSS memory on host (bytes).                                          |

</TabItem>
<TabItem value="Network" label="Network">

| Option                 | Description                                                                                                                        |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| --vm-name              | Check only this specific VM (skips list discovery). Cannot be used together with --include-name or --exclude-name.                 |
| --include-name         | Filter VMs by name (regexp).                                                                                                       |
| --exclude-name         | Exclude VMs whose name matches this regexp.                                                                                        |
| --interface-name       | Check only this specific network interface (exact match). Cannot be used together with --include-interface or --exclude-interface. |
| --include-interface    | Filter network interfaces by name (regexp).                                                                                        |
| --exclude-interface    | Exclude network interfaces whose name matches this regexp.                                                                         |
| --warning-traffic-in   | Warning threshold for inbound traffic (b/s).                                                                                       |
| --critical-traffic-in  | Critical threshold for inbound traffic (b/s).                                                                                      |
| --warning-traffic-out  | Warning threshold for outbound traffic (b/s).                                                                                      |
| --critical-traffic-out | Critical threshold for outbound traffic (b/s).                                                                                     |
| --warning-packets-in   | Warning threshold for inbound packets per second.                                                                                  |
| --critical-packets-in  | Critical threshold for inbound packets per second.                                                                                 |
| --warning-packets-out  | Warning threshold for outbound packets per second.                                                                                 |
| --critical-packets-out | Critical threshold for outbound packets per second.                                                                                |
| --warning-errors-in    | Warning threshold for inbound errors per second.                                                                                   |
| --critical-errors-in   | Critical threshold for inbound errors per second.                                                                                  |
| --warning-errors-out   | Warning threshold for outbound errors per second.                                                                                  |
| --critical-errors-out  | Critical threshold for outbound errors per second.                                                                                 |

</TabItem>
<TabItem value="Pool-Status" label="Pool-Status">

| Option                      | Description                                                                                                                |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------|
| --pool-name                 | Check only this specific pool.                                                                                             |
| --include-name              | Filter pools by name (regexp).                                                                                             |
| --exclude-name              | Exclude pools whose name matches this regexp.                                                                              |
| --unknown-status            | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use: %\{state\}, %\{autostart\}, %\{name\}. |
| --warning-status            | Define the conditions to match for the status to be WARNING (default: '').                                                 |
| --critical-status           | Define the conditions to match for the status to be CRITICAL (default: "%\{state\} !~ /^running$/").                       |
| --warning-space-usage       | Warning threshold for space used (bytes).                                                                                  |
| --critical-space-usage      | Critical threshold for space used (bytes).                                                                                 |
| --warning-space-usage-prct  | Warning threshold for space usage (%).                                                                                     |
| --critical-space-usage-prct | Critical threshold for space usage (%).                                                                                    |
| --warning-space-free        | Warning threshold for free space (bytes).                                                                                  |
| --critical-space-free       | Critical threshold for free space (bytes).                                                                                 |

</TabItem>
<TabItem value="Status" label="Status">

| Option            | Description                                                                                                        |
|:------------------|:-------------------------------------------------------------------------------------------------------------------|
| --vm-name         | Check only this specific VM (skips list discovery). Cannot be used together with --include-name or --exclude-name. |
| --include-name    | Filter VMs by name (regexp).                                                                                       |
| --exclude-name    | Exclude VMs whose name matches this regexp.                                                                        |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN. Can use: %\{state\}, %\{display\}.                    |
| --warning-status  | Define the conditions to match for the status to be WARNING.                                                       |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: "%\{state\} !~ /^running$/").               |

</TabItem>
<TabItem value="Volume" label="Volume">

| Option                     | Description                                                                                                                       |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------|
| --pool-name                | Check only this specific storage pool (skips pool-list discovery). Cannot be used together with --include-pool or --exclude-pool. |
| --include-pool             | Filter storage pools by name (regexp).                                                                                            |
| --exclude-pool             | Exclude storage pools whose name matches this regexp.                                                                             |
| --volume-name              | Check only this specific volume (exact match). Cannot be used together with --include-volume or --exclude-volume.                 |
| --include-volume           | Filter volumes by name (regexp).                                                                                                  |
| --exclude-volume           | Exclude volumes whose name matches this regexp.                                                                                   |
| --include-path             | Filter volumes by path (regexp).                                                                                                  |
| --exclude-path             | Exclude volumes whose path matches this regexp.                                                                                   |
| --warning-allocation       | Warning threshold for allocated space (bytes).                                                                                    |
| --critical-allocation      | Critical threshold for allocated space (bytes).                                                                                   |
| --warning-allocation-prct  | Warning threshold for allocated space (%).                                                                                        |
| --critical-allocation-prct | Critical threshold for allocated space (%).                                                                                       |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_linux_libvirt_local.pl" \
	--plugin='cloud::linux::libvirt::local::plugin' \
	--connect-uri='qemu:///system?socket=/var/run/libvirt/libvirt-sock-ro' \
	--help
```
