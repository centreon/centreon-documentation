---
id: applications-virtualization-vmware8-vm-restapi
title: VMware8 VM REST API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **VMware8 VM REST API** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **VMware8 VM REST API** brings a host template:

* **Virt-VMware8-VM-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Virt-VMware8-VM-Restapi-custom" label="Virt-VMware8-VM-Restapi-custom">

| Service Alias         | Service Template                                     | Service Description                                            |
|:----------------------|:-----------------------------------------------------|:---------------------------------------------------------------|
| Vm-Cpu        | Virt-VMWare8-VM-Vm-Cpu-Restapi-custom    | Monitor the CPU usage of a virtual machine        |
| Vm-Disk-IO            | Virt-VMWare8-VM-Vm-Disk-IO-Restapi-custom            | Monitor a virtual machine's agregated disk I/O stats           |
| Vm-Memory     | Virt-VMWare8-VM-Vm-Memory-Restapi-custom | Monitor the memory usage of a virtual machine     |
| Vm-Network-Throughput | Virt-VMWare8-VM-Vm-Network-Throughput-Restapi-custom | Monitor the aggregated network throughput of a virtual machine |
| Vm-Power              | Virt-VMWare8-VM-Vm-Power-Restapi-custom              | Monitor a virtual machine's electric power consumption         |
| Vm-Tools      | Virt-VMWare8-VM-Vm-Tools-Restapi-custom  | Monitor the state and version of the VMware Tools |

> The services listed above are created automatically when the **Virt-VMware8-VM-Restapi-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name           | Description                                                                             |
|:--------------------|:----------------------------------------------------------------------------------------|
| VMware VM vSphere 8 | Discover VMware virtual machines by requesting vCenter server using vSphere REST API v8 |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Name                          | Unit  |
|:------------------------------|:------|
| cpu.capacity.usage.percentage | %     |
| cpu.capacity.usage.hertz      | Hz    |

</TabItem>
<TabItem value="Vm-Disk-IO" label="Vm-Disk-IO">

| Name                                    | Unit  |
|:----------------------------------------|:------|
| disk.throughput.usage.bytespersecond    | Bps   |
| disk.throughput.contention.milliseconds | ms    |

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Name                    | Unit  |
|:------------------------|:------|
| memory.usage.percentage | %     |
| memory.usage.bytes      | B     |

</TabItem>
<TabItem value="Vm-Network-Throughput" label="Vm-Network-Throughput">

| Name                                   | Unit  |
|:---------------------------------------|:------|
| network.throughput.usage.bitspersecond | nps   |
| network.throughput.contention.count    | count |

</TabItem>
<TabItem value="Vm-Power" label="Vm-Power">

| Name                      | Unit  |
|:--------------------------|:------|
| power.capacity.usage.watt | W     |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Name                         | Unit  |
|:-----------------------------|:------|
| tools.install.attempts.count | count |
| version-status               | N/A   |
| upgrade-policy               | N/A   |
| run-state                    | N/A   |

</TabItem>
</Tabs>

## Prerequisites

To use this connector, you must have a user account having access to the [vCenter API](https://developer.broadcom.com/xapis/vsphere-automation-api/latest/)
in version 8 or above and having the following privileges:
- Collect Stats Data
- Query Stats Data

These privileges are granted by the predefined role named `vStatsUser`.

NB: This connector has only been tested with a 'Basic' authentication (like `user@vsphere.local`).

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-virtualization-vmware8-vm-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-virtualization-vmware8-vm-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-virtualization-vmware8-vm-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-virtualization-vmware8-vm-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **VMware8 VM REST API** connector through
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
dnf install centreon-plugin-Virtualization-Vmware8-Vm-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Vmware8-Vm-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-virtualization-vmware8-vm-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Vmware8-Vm-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Virt-VMware8-VM-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro               | Description                                                                                                                                               | Default value     | Mandatory   |
|:--------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VMWARE8USERNAME     | Define the username for authentication                                                                                                                    | USERNAME          | X           |
| VMWARE8PASSWORD     | Define the password for authentication                                                                                                                    | PASSWORD          | X           |
| VMWARE8PROTO        | Define the protocol to use (default: https)                                                                                                               | https             |             |
| VMWARE8PORT         | Define the port of the vSphere server (default: 443)                                                                                                      | 443               |             |
| TIMEOUT             | Define the timeout for API requests (default: 10 seconds)                                                                                                 |                   |             |
| VMWARE8VCENTER      | Define the hostname of the vSphere server                                                                                                                 |                   | | VMWARE8VMID       | Define which VM to monitor based on its resource ID (example: `vm-1234`). **Using this option is mandatory if you have several VMs with the same name.** |                   |             |
X           |
| VMWARE8VMNAME       | Define which VM to monitor based on its name (example: `WEBSERVER01`). When possible, it is recommended to use `--vm-id` instead. **Do not use this option if you have several VMs with the same name.** |                   |             |
| VMWARE8EXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                                                      |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGEFREQUENCY  | Threshold in Hertz                                                                                 |                   |             |
| CRITICALUSAGEFREQUENCY | Threshold in Hertz                                                                                 |                   |             |
| WARNINGUSAGEPRCT       | Threshold in percentage                                                                            |                   |             |
| CRITICALUSAGEPRCT      | Threshold in percentage                                                                            |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Vm-Disk-IO" label="Vm-Disk-IO">

| Macro                | Description                                                                                        | Default value     | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONTENTIONMS  | Threshold in milliseconds                                                                          |                   |             |
| CRITICALCONTENTIONMS | Threshold in milliseconds                                                                          |                   |             |
| WARNINGUSAGEBPS      | Threshold in bytes per second                                                                      |                   |             |
| CRITICALUSAGEBPS     | Threshold in bytes per second                                                                      |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Macro              | Description                                                                                        | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGEBYTES  | Threshold in bytes                                                                                 |                   |             |
| CRITICALUSAGEBYTES | Threshold in bytes                                                                                 |                   |             |
| WARNINGUSAGEPRCT   | Threshold in percentage                                                                            |                   |             |
| CRITICALUSAGEPRCT  | Threshold in percentage                                                                            |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Vm-Network-Throughput" label="Vm-Network-Throughput">

| Macro                   | Description                                                                                        | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONTENTIONCOUNT  | Threshold in number of dropped packets                                                             |                   |             |
| CRITICALCONTENTIONCOUNT | Threshold in number of dropped packets                                                             |                   |             |
| WARNINGUSAGEBPS         | Threshold in bytes per second                                                                      |                   |             |
| CRITICALUSAGEBPS        | Threshold in bytes per second                                                                      |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Vm-Power" label="Vm-Power">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGEWATT  | Threshold in Watts                                                                                 |                   |             |
| CRITICALUSAGEWATT | Threshold in Watts                                                                                 |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Macro                   | Description                                                                                                                                                                                                                                                                                                | Default value                                                                     | Mandatory |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------|:---------:|
| WARNINGINSTALLATTEMPTS  | Threshold based on the number of attempts that have been made to install or upgrade the version of Tools installed on this virtual machine. In case of failed attempts, adding the `--verbose` option will display the error messages in the long output                                                   |                                                                                   |           |
| CRITICALINSTALLATTEMPTS | Threshold based on the number of attempts that have been made to install or upgrade the version of Tools installed on this virtual machine. In case of failed attempts, adding the `--verbose` option will display the error messages in the long output                                                   |                                                                                   |           |
| WARNINGRUNSTATE         | Define the conditions to match for the status to be WARNING based on the Current run state of VMware Tools in the guest operating system. You can use the following variables: %\{run\_state\} (can be "NOT\_RUNNING", "RUNNING" or "EXECUTING\_SCRIPTS").                                                 | %\{run\_state\} =~ /^NOT\_RUNNING$/i                                              |           |
| CRITICALRUNSTATE        | Define the conditions to match for the status to be CRITICAL based on the Current run state of VMware Tools in the guest operating system. You can use the following variables: %\{run\_state\} (can be "NOT\_RUNNING", "RUNNING" or "EXECUTING\_SCRIPTS")                                                 |                                                                                   |           |
| WARNINGUPGRADEPOLICY    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{auto\_update\_supported\} (can be "true" or "false"), %\{upgrade\_policy\} (can be "MANUAL" or "UPGRADE\_AT\_POWER\_CYCLE")                                                                           |                                                                                   |           |
| CRITICALUPGRADEPOLICY   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{auto\_update\_supported\} (can be "true" or "false"), %\{upgrade\_policy\} (can be "MANUAL" or "UPGRADE\_AT\_POWER\_CYCLE")                                                                          |                                                                                   |           |
| WARNINGVERSIONSTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{version\_status\} (can be "NOT\_INSTALLED", "CURRENT", "UNMANAGED", "TOO\_OLD\_UNSUPPORTED", "SUPPORTED\_OLD", "SUPPORTED\_NEW", "TOO\_NEW" or "BLACKLISTED") and %\{version\} (example: "v12.3.0").  | %\{version\_status\} =~ /^(SUPPORTED\_OLD\|TOO\_NEW)$/i                           |           |
| CRITICALVERSIONSTATUS   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{version\_status\} (can be "NOT\_INSTALLED", "CURRENT", "UNMANAGED", "TOO\_OLD\_UNSUPPORTED", "SUPPORTED\_OLD", "SUPPORTED\_NEW", "TOO\_NEW" or "BLACKLISTED") and %\{version\} (example: "v12.3.0"). | %\{version\_status\} =~ /^(NOT\_INSTALLED\|TOO\_OLD\_UNSUPPORTED\|BLACKLISTED)$/i |           |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                     | --verbose                                                                         |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_vmware8_vm_restapi.pl \
	--plugin=apps::vmware::vsphere8::vm::plugin \
	--custommode=api \
	--mode=vm-tools \
	--hostname='myvcenter.network.local' \
	--port='443' \
	--proto='https' \
	--username='USERNAME' \
	--password='PASSWORD' \
	--timeout='' \
	--vm-name='' \
	--vm-id='vm-4562'  \
	--warning-install-attempts='' \
	--critical-install-attempts='' \
	--warning-run-state='%\{run\_state\} =~ /^NOT\_RUNNING$/i' \
	--critical-run-state='' \
	--warning-upgrade-policy='' \
	--critical-upgrade-policy='' \
	--warning-version-status='%\{version\_status\} =~ /^(SUPPORTED\_OLD|TOO\_NEW)$/i' \
	--critical-version-status='%\{version\_status\} =~ /^(NOT\_INSTALLED|TOO\_OLD\_UNSUPPORTED|BLACKLISTED)$/i' \
	--verbose
```

The expected command output is shown below:

```bash
WARNING: vm-4562 had 3 install attempts (error messages available in long output with --verbose option) | 'tools.install.attempts.count'=3;0:2;;0;
Version status: UNMANAGED - Explanation: VMware Tools is installed, but it is not managed by VMware. This includes open-vm-tools or OSPs which should be managed by the guest operating system.
Error: [com.vmware.api.vcenter.error] An error has occurred while invoking the operation.
Error: [vmsg.VmToolsUpgradeFault.summary] Error upgrading VMware Tools.
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_vmware8_vm_restapi.pl \
	--plugin=apps::vmware::vsphere8::vm::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                        | Linked service template                              |
|:----------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/cpu.pm)]             | Virt-VMWare8-VM-Vm-Cpu-Restapi-custom                |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/discovery.pm)] | Used for host discovery                              |
| disk-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/diskio.pm)]      | Virt-VMWare8-VM-Vm-Disk-IO-Restapi-custom            |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/memory.pm)]       | Virt-VMWare8-VM-Vm-Memory-Restapi-custom             |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/network.pm)]     | Virt-VMWare8-VM-Vm-Network-Throughput-Restapi-custom |
| power [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/power.pm)]         | Virt-VMWare8-VM-Vm-Power-Restapi-custom              |
| vm-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/vmstatus.pm)]  | Not used in this Monitoring Connector                |
| vm-tools [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/vmtools.pm)]    | Virt-VMWare8-VM-Vm-Tools-Restapi-custom              |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --vm-id                                    | Define which VM to monitor based on its resource ID (example: `vm-16`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --vm-name                                  | Define which VM to monitor based on its name (example: `WEBSERVER01`). When possible, it is recommended to use `--vm-id` instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --failback-file                            | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --hostname                                 | Define the hostname of the vSphere server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --port                                     | Define the port of the vSphere server (default: 443).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    | Define the protocol to use (default: https).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --username                                 | Define the username for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --password                                 | Define the password for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --vstats-interval                          | Define the interval (in seconds) at which the `vstats` must be recorded (default: 300). Used to create entries at the `/api/stats/acq-specs` endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --vstats-duration                          | Define the time (in seconds) after which the `vstats` will stop being recorded (default: 2764800, meaning 32 days). Used to create entries at the `/api/stats/acq-specs` endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --timeout                                  | Define the timeout for API requests (default: 10 seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Option                     | Description                                                                                                               |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --warning-usage-frequency  | Threshold in Hertz.                                                                                                       |
| --critical-usage-frequency | Threshold in Hertz.                                                                                                       |
| --warning-usage-prct       | Threshold in percentage.                                                                                                  |
| --critical-usage-prct      | Threshold in percentage.                                                                                                  |

</TabItem>
<TabItem value="Vm-Disk-IO" label="Vm-Disk-IO">

| Option                   | Description                         |
|:-------------------------|:------------------------------------|
| --warning-contention-ms  | Threshold in milliseconds.        |
| --critical-contention-ms | Threshold in milliseconds.        |
| --warning-usage-bps      | Threshold in bytes per second.    |
| --critical-usage-bps     | Threshold in bytes per second.    |

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Option                 | Description                   |
|:-----------------------|:------------------------------|
| --warning-usage-bytes  | Threshold in bytes.         |
| --critical-usage-bytes | Threshold in bytes.         |
| --warning-usage-prct   | Threshold in percentage.    |
| --critical-usage-prct  | Threshold in percentage.    |

</TabItem>
<TabItem value="Vm-Network-Throughput" label="Vm-Network-Throughput">

| Option                      | Description                         |
|:----------------------------|:------------------------------------|
| --warning-contention-count  | Threshold.                        |
| --critical-contention-count | Threshold.                        |
| --warning-usage-bps         | Threshold in bytes per second.    |
| --critical-usage-bps        | Threshold in bytes per second.    |

</TabItem>
<TabItem value="Vm-Power" label="Vm-Power">

| Option                | Description              |
|:----------------------|:-------------------------|
| --warning-usage-watt  | Threshold in Watts.    |
| --critical-usage-watt | Threshold in Watts.    |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Option                      | Description                                                                                                                                                                                                                                                                                                                                                                                            |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-install-attempts  | Threshold based on the number of attempts that have been made to install or upgrade the version of Tools installed on this virtual machine. In case of failed attempts, adding the `--verbose` option will display the error messages in the long output.                                                                                                                                              |
| --critical-install-attempts | Threshold based on the number of attempts that have been made to install or upgrade the version of Tools installed on this virtual machine. In case of failed attempts, adding the `--verbose` option will display the error messages in the long output.                                                                                                                                              |
| --warning-run-state         | Define the conditions to match for the status to be WARNING based on the Current run state of VMware Tools in the guest operating system. You can use the following variables: %\{run\_state\} (can be "NOT\_RUNNING", "RUNNING" or "EXECUTING\_SCRIPTS").  Default: %\{run\_state\} =~ /^NOT\_RUNNING$/i                                                                                              |
| --critical-run-state        | Define the conditions to match for the status to be CRITICAL based on the Current run state of VMware Tools in the guest operating system. You can use the following variables: %\{run\_state\} (can be "NOT\_RUNNING", "RUNNING" or "EXECUTING\_SCRIPTS").                                                                                                                                            |
| --warning-upgrade-policy    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{auto\_update\_supported\} (can be "true" or "false"), %\{upgrade\_policy\} (can be "MANUAL" or "UPGRADE\_AT\_POWER\_CYCLE").                                                                                                                                                                      |
| --critical-upgrade-policy   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{auto\_update\_supported\} (can be "true" or "false"), %\{upgrade\_policy\} (can be "MANUAL" or "UPGRADE\_AT\_POWER\_CYCLE").                                                                                                                                                                     |
| --warning-version-status    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{version\_status\} (can be "NOT\_INSTALLED", "CURRENT", "UNMANAGED", "TOO\_OLD\_UNSUPPORTED", "SUPPORTED\_OLD", "SUPPORTED\_NEW", "TOO\_NEW" or "BLACKLISTED") and %\{version\} (example: "v12.3.0").  Default: %\{version\_status\} =~ /^(SUPPORTED\_OLD\|TOO\_NEW)$/i                           |
| --critical-version-status   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{version\_status\} (can be "NOT\_INSTALLED", "CURRENT", "UNMANAGED", "TOO\_OLD\_UNSUPPORTED", "SUPPORTED\_OLD", "SUPPORTED\_NEW", "TOO\_NEW" or "BLACKLISTED") and %\{version\} (example: "v12.3.0").  Default: %\{version\_status\} =~ /^(NOT\_INSTALLED\|TOO\_OLD\_UNSUPPORTED\|BLACKLISTED)$/i |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_vmware8_vm_restapi.pl \
	--plugin=apps::vmware::vsphere8::vm::plugin \
	--custommode=api \
	--help
```
