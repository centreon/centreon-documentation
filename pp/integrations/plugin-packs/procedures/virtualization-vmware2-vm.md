---
id: virtualization-vmware2-vm
title: VMware VM
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

VMware is an software compagny based in USA. VMware provides cloud computing and virtualization software and services.

The Centreon Plugin and Monitoring Connectors rely on the Centreon VMWare Connector to request the vCenter SDK.

## Pack assets

### Templates

The Monitoring Connector **VMware VM** brings a host template:

* **Virt-VMWare2-VM-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Virt-VMWare2-VM-custom" label="Virt-VMWare2-VM-custom">

| Service Alias       | Service Template                                | Service Description                                                     |
|:--------------------|:------------------------------------------------|:------------------------------------------------------------------------|
| Vm-Limit            | Virt-VMWare2-Vm-Limit-Generic-custom            | Check limit definition.                                                  |
| Vm-Snapshot         | Virt-VMWare2-Vm-Snapshot-Generic-custom         | Check the age of the snapshot for a virtual machine.                                 |
| Vm-Status           | Virt-VMWare2-Vm-Status-Generic-custom           | Check global status of a virtual machine.                                |
| Vm-Thinprovisioning | Virt-VMWare2-Vm-Thinprovisioning-Generic-custom | Check if a virtual machine has a disk in mode 'thin provisioning' or not. |
| Vm-Tools            | Virt-VMWare2-Vm-Tools-Generic-custom            | Check the state of vmtools for a virtual machine.                                |

> The services listed above are created automatically when the **Virt-VMWare2-VM-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias      | Service Template                               | Service Description                                   |
|:-------------------|:-----------------------------------------------|:------------------------------------------------------|
| Vm-Cpu             | Virt-VMWare2-Vm-Cpu-Generic-custom             | Check CPU usage for a virtual machine.                  |
| Vm-Datastores-Iops | Virt-VMWare2-Vm-Datastores-Iops-Generic-custom | Check datastores IOPS linked to the virtual machine.  |
| Vm-Device          | Virt-VMWare2-Vm-Device-Generic-custom          | Check CPU usage for a virtual machine.                  |
| Vm-Memory          | Virt-VMWare2-Vm-Memory-Generic-custom          | Check memory usage for a virtual machine.               |
| Vm-Swap            | Virt-VMWare2-Vm-Swap-Generic-custom            | Check if a virtual machine is swapping.                |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                     |
|:----------------|:--------------------------------|
| VMWare VM       | Discover VMWare virtual machines |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| *vm*~status                                   | N/A   |
| *vm*~vm.cpu.utilization.percentage            | %     |
| *vm*~vm.cpu.utilization.mhz                   | MHz   |
| *vm*~vm.cpu.ready.percentage                  | %     |
| *vm*~*cpu*#vm.core.cpu.utilization.percentage | MHz   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Datastores-Iops" label="Vm-Datastores-Iops">

| Metric name                                    | Unit  |
|:-----------------------------------------------|:------|
| *vm*~status                                    | N/A   |
| *vm*~vm.datastore.latency.max.milliseconds     | ms    |
| *vm*~*datastore*#vm.datastore.read.usage.iops  | iops  |
| *vm*~*datastore*#vm.datastore.write.usage.iops | iops  |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Device" label="Vm-Device">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| vm.devices.connected.count      | count |
| *vm*#status                     | N/A   |
| *vm*#vm.devices.connected.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Limit" label="Vm-Limit">

| Metric name   | Unit  |
|:--------------|:------|
| cpu-status    | N/A   |
| memory-status | N/A   |
| disk-status   | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| *vm*~status                         | N/A   |
| *vm*~vm.memory.consumed.usage.bytes | B     |
| *vm*~vm.memory.active.usage.bytes   | B     |
| *vm*~vm.memory.overhead.bytes       | B     |
| *vm*~vm.memory.ballooning.bytes     | B     |
| *vm*~vm.memory.shared.bytes         | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Snapshot" label="Vm-Snapshot">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| vm.snapshots.warning.current.count  | count |
| vm.snapshots.critical.current.count | count |

</TabItem>
<TabItem value="Vm-Status" label="Vm-Status">

| Metric name         | Unit  |
|:--------------------|:------|
| *vm*#status         | N/A   |
| *vm*#overall-status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Swap" label="Vm-Swap">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| *vm*#status                           | N/A   |
| *vm*#vm.swap.in.usage.bytespersecond  | B/s   |
| *vm*#vm.swap.out.usage.bytespersecond | B/s   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Thinprovisioning" label="Vm-Thinprovisioning">

| Metric name | Description                                | Unit  |
|:------------|:-------------------------------------------|:------|
| status      | Status of the thin provisoning virtual disks |       |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| vm.tools.notupdated.current.count   | count |
| vm.tools.notrunning.current.count   | count |
| vm.tools.notinstalled.current.count | count |

</TabItem>
</Tabs>

## Prerequisites

### Centreon VMWare Connector

For the VMWare monitoring, Centreon use daemon to connect and request the vCenter.

Install this daemon on each needed poller:

```
yum install centreon-plugin-Virtualization-VMWare-daemon
```

To configure the access to your infrastructure, edit the
"/etc/centreon/centreon\_vmware.pm" configuration file:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        default => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        }
    }
);

1;
```

Make sure to replace variables with needed information:

- _ip\_hostname_: IP address or hostname of the vCenter or ESX (if standalone),
- _username_: username with at least "read only" access to the vCenter or ESX (you can use domain user),
- _password_: password of the username.

You can configure multiple vCenter or ESXi connections using this
structure:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        'my_first_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        },
        'my_other_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<DOMAIN>\<username>',
            password => '<password>'
        },
    },
    port => 5700
);

1;
```

Each entry is called a **container**.

> You can also define the "port" attribute to change listening port.

Then start the daemon and make sure it is configured to start at server boot:

``` bash
systemctl start centreon_vmware
systemctl enable centreon_vmware
```

Make sure that the daemon configuration works fine by looking for errors in
"/var/log/centreon/centreon\_vmware.log".

### Tags and Custom Attributes

To discover Tags and Custom Attributes, you must :

* use version **3.2.5** of **centreon-vmware-daemon**
* add **--tags** in the additional discovery options: go to the **Configuration > Hosts > Discovery** page, and to the 3rd step (**Set discovery parameters**), in the section **Additional parameters**, in the **Additional options** field, type **--tags**.

### Network flows

The Poller with the Centreon VMware Connector installed need to access in TCP/443 HTTPS to the Vcenter.

The Pollers that request the Centreon VMWare Connector host need to access in TCP/5700 to the Centreon VMWare Connector host.

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
dnf install centreon-pack-virtualization-vmware2-vm
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-vmware2-vm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-virtualization-vmware2-vm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-vmware2-vm
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **VMware VM** connector through
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
dnf install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-virtualization-vmware2-connector-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Virt-VMWare2-VM-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                      | Description                                                                                           | Default value     | Mandatory   |
|:---------------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CENTREONVMWAREPORT         | Connector port (default: 5700)                                                                        | 5700              |             |
| CENTREONVMWARECONTAINER    | Container to use (it depends on the connector's configuration)                                          | default           |              |
| CENTREONVMWAREHOST         | Connector hostname (required)                                                                         | localhost         | X            |
| VMNAME                     | Hostname of the VM to check. If not set, we check all VMs                                                    |                   |             |
| VMUUID                     | Specify the VM's UUID                                                                                                      |                   |             |
| CENTREONVMWAREEXTRAOPTIONS | Any extra option you may want to add to every command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Macro            | Description                                                                                                                                                                                                                      | Default value                                                                | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS    | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection\_state} !~ /^connected$/i or %{power\_state}  !~ /^poweredOn$/i |             |
| WARNINGCPU       | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALCPU      | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGREADY     | Warning threshold                                                                                                                                                                                                                | 5                                                                            |             |
| CRITICALREADY    | Critical threshold                                                                                                                                                                                                               | 10                                                                           |             |
| WARNINGSTATUS    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                                                                              |             |
| CRITICALSTATUS   | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                                                                              |             |
| WARNINGUSAGE     | Warning threshold                                                                                                                                                                                                                | 80                                                                           |             |
| CRITICALUSAGE    | Critical threshold                                                                                                                                                                                                               | 90                                                                           |             |
| WARNINGUSAGEMHZ  | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALUSAGEMHZ | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                              |                                                                              |             |

</TabItem>
<TabItem value="Vm-Datastores-Iops" label="Vm-Datastores-Iops">

| Macro                   | Description                                                                                                                                                                                                                      | Default value                                                                | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|:-----------:|
| FILTERDATASTORENAME     | Datastore to check. If not set, we check all datastores                                                                                                                                                                          | .*                                                                           |             |
| UNKNOWNSTATUS           | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection\_state} !~ /^connected$/i or %{power\_state}  !~ /^poweredOn$/i |             |
| WARNINGMAXTOTALLATENCY  | Thresholds                                                                                                                                                                                                                       |                                                                              |             |
| CRITICALMAXTOTALLATENCY | Thresholds                                                                                                                                                                                                                       |                                                                              |             |
| WARNINGREAD             | Thresholds                                                                                                                                                                                                                       |                                                                              |             |
| CRITICALREAD            | Thresholds                                                                                                                                                                                                                       |                                                                              |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                                                                              |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                                                                              |             |
| WARNINGWRITE            | Thresholds                                                                                                                                                                                                                       |                                                                              |             |
| CRITICALWRITE           | Thresholds                                                                                                                                                                                                                       |                                                                              |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                              | --verbose                                                                    |             |

</TabItem>
<TabItem value="Vm-Device" label="Vm-Device">

| Macro                        | Description                                                                                                                                                                | Default value                          | Mandatory   |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|:-----------:|
| UNKNOWNSTATUS                | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state} | %{connection\_state} !~ /^connected$/i |             |
| FILTERDEVICE                 | Device to check (required). (Example: --device='VirtualCdrom')                                                                                                              |                                        | X           |
| WARNINGSTATUS                | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}                                       |                                        |             |
| CRITICALSTATUS               | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}                                      |                                        |             |
| WARNINGTOTALDEVICECONNECTED  | Warning threshold                                                                                                                                                          |                                        |             |
| CRITICALTOTALDEVICECONNECTED | Critical threshold                                                                                                                                                         |                                        |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                        |                                        |             |

</TabItem>
<TabItem value="Vm-Limit" label="Vm-Limit">

| Macro                | Description                                                                                                                                                                                                                | Default value                                              | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|:-----------:|
| CRITICALCPUSTATUS    | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{connection\_state} !~ /^connected$/i \|\| %{limit} != -1 |             |
| WARNINGCPUSTATUS     | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                                                            |             |
| CRITICALDISKSTATUS   | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{connection\_state} !~ /^connected$/i \|\| %{limit} != -1 |             |
| WARNINGDISKSTATUS    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                                                            |             |
| CRITICALMEMORYSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{connection\_state} !~ /^connected$/i \|\| %{limit} != -1 |             |
| WARNINGMEMORYSTATUS  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                                                            |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                        | --verbose                                                  |             |

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Macro              | Description                                                                                                                                                                                                                      | Default value                                                                | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS      | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection\_state} !~ /^connected$/i or %{power\_state}  !~ /^poweredOn$/i |             |
| WARNING            | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICAL           | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGACTIVE      | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALACTIVE     | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGBALLOONING  | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALBALLOONING | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGOVERHEAD    | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALOVERHEAD   | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGSHARED      | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALSHARED     | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                                                                              |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                                                                              |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                              |                                                                              |             |

</TabItem>
<TabItem value="Vm-Snapshot" label="Vm-Snapshot">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold for snapshot's age                                                                | 259200            |             |
| CRITICAL     | Critical threshold for snapshot's age                                                               | 432000            |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Vm-Status" label="Vm-Status">

| Macro                 | Description                                                                                                                                                                                 | Default value                          | Mandatory   |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|:-----------:|
| UNKNOWNSTATUS         | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection\_state} !~ /^connected$/i |             |
| UNKNOWNOVERALLSTATUS  | Define the conditions to match for the status to be UNKNOWN (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}                             | %{overall\_status} =~ /gray/i          |             |
| WARNINGOVERALLSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}                           | %{overall\_status} =~ /yellow/i        |             |
| CRITICALOVERALLSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}                             | %{overall\_status} =~ /red/i           |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{connection\_state}                                                                      |                                        |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{connection\_state}, %{power\_state}                                                    |                                        |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                         | --verbose                              |             |

</TabItem>
<TabItem value="Vm-Swap" label="Vm-Swap">

| Macro           | Description                                                                                                                                                                                                                      | Default value                                                                | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS   | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection\_state} !~ /^connected$/i or %{power\_state}  !~ /^poweredOn$/i |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                                                                              |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                                                                              |             |
| WARNINGSWAPIN   | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALSWAPIN  | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGSWAPOUT  | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALSWAPOUT | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                              |                                                                              |             |

</TabItem>
<TabItem value="Vm-Thinprovisioning" label="Vm-Thinprovisioning">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATUS       | Thin provisioning status (default: none). Example: 'active,CRITICAL' or 'notactive,WARNING'           | active,WARNING    | X           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Macro              | Description                                                                                         | Default value     | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NOTINSTALLEDSTATUS | Status if vmtools is not installed (default: critical)                                              | critical          | X           |
| NOTRUNNINGSTATUS   | Status if vmtools is not running (default: critical)                                                | critical          | X           |
| NOTUP2DATESTATUS   | Status if vmtools is not upd2date (default: warning)                                                | warning           |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=swap-vm \
	--custommode=connector \
	--connector-hostname='localhost' \
	--connector-port='5700' \
	--container='default'  \
	--vm-hostname='' \
	--filter-uuid='' \
	--unknown-status='%{connection_state} !~ /^connected$/i or %{power_state}  !~ /^poweredOn$/i' \
	--warning-status='' \
	--critical-status='' \
	--warning-swap-in='' \
	--critical-swap-in=''  \
	--warning-swap-out='' \
	--critical-swap-out=''
```

The expected command output is shown below:

```bash
OK: All virtual machines are ok | '*vm*#vm.swap.in.usage.bytespersecond'=B/s;;;0;'*vm*#vm.swap.out.usage.bytespersecond'=B/s;;;0;
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
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                         | Linked service template                         |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| alarm-datacenter [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmdatacenter.pm)]       | Not used in this Monitoring Connector           |
| alarm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmhost.pm)]                   | Not used in this Monitoring Connector           |
| countvm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/countvmhost.pm)]               | Not used in this Monitoring Connector           |
| cpu-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpucluster.pm)]                 | Not used in this Monitoring Connector           |
| cpu-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuhost.pm)]                       | Not used in this Monitoring Connector           |
| cpu-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuvm.pm)]                           | Virt-VMWare2-Vm-Cpu-Generic-custom              |
| datastore-countvm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorecountvm.pm)]     | Not used in this Monitoring Connector           |
| datastore-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorehost.pm)]           | Not used in this Monitoring Connector           |
| datastore-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreio.pm)]               | Not used in this Monitoring Connector           |
| datastore-iops [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreiops.pm)]           | Not used in this Monitoring Connector           |
| datastore-snapshot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoresnapshot.pm)]   | Not used in this Monitoring Connector           |
| datastore-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreusage.pm)]         | Not used in this Monitoring Connector           |
| datastore-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorevm.pm)]               | Virt-VMWare2-Vm-Datastores-Iops-Generic-custom  |
| device-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/devicevm.pm)]                     | Virt-VMWare2-Vm-Device-Generic-custom           |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/discovery.pm)]                    | Used for host discovery                         |
| getmap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/getmap.pm)]                          | Not used in this Monitoring Connector           |
| health-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/healthhost.pm)]                 | Not used in this Monitoring Connector           |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/licenses.pm)]                      | Not used in this Monitoring Connector           |
| limit-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/limitvm.pm)]                       | Virt-VMWare2-Vm-Limit-Generic-custom            |
| list-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listclusters.pm)]             | Not used in this Monitoring Connector           |
| list-datacenters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatacenters.pm)]       | Not used in this Monitoring Connector           |
| list-datastores [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatastores.pm)]         | Not used in this Monitoring Connector           |
| list-nichost [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listnichost.pm)]               | Not used in this Monitoring Connector           |
| maintenance-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/maintenancehost.pm)]       | Not used in this Monitoring Connector           |
| memory-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryhost.pm)]                 | Not used in this Monitoring Connector           |
| memory-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryvm.pm)]                     | Virt-VMWare2-Vm-Memory-Generic-custom           |
| net-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/nethost.pm)]                       | Not used in this Monitoring Connector           |
| net-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/netvm.pm)]                           | Not used in this Monitoring Connector           |
| service-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/servicehost.pm)]               | Not used in this Monitoring Connector           |
| snapshot-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/snapshotvm.pm)]                 | Virt-VMWare2-Vm-Snapshot-Generic-custom         |
| stat-connectors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statconnectors.pm)]         | Not used in this Monitoring Connector           |
| status-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statuscluster.pm)]           | Not used in this Monitoring Connector           |
| status-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statushost.pm)]                 | Not used in this Monitoring Connector           |
| status-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statusvm.pm)]                     | Virt-VMWare2-Vm-Status-Generic-custom           |
| storage-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/storagehost.pm)]               | Not used in this Monitoring Connector           |
| swap-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swaphost.pm)]                     | Not used in this Monitoring Connector           |
| swap-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swapvm.pm)]                         | Virt-VMWare2-Vm-Swap-Generic-custom             |
| thinprovisioning-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/thinprovisioningvm.pm)] | Virt-VMWare2-Vm-Thinprovisioning-Generic-custom |
| time-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/timehost.pm)]                     | Not used in this Monitoring Connector           |
| tools-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/toolsvm.pm)]                       | Virt-VMWare2-Vm-Tools-Generic-custom            |
| uptime-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/uptimehost.pm)]                 | Not used in this Monitoring Connector           |
| vmoperation-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vmoperationcluster.pm)] | Not used in this Monitoring Connector           |
| vsan-cluster-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vsanclusterusage.pm)]    | Not used in this Monitoring Connector           |

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
| --filter-perfdata                          | Keep only perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource. Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --connector-hostname                       | Connector hostname (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --connector-port                           | Connector port (default: 5700).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --container                                | Container to use (it depends on the connector's configuration).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --vsphere-address                          | Address of the vpshere/ESX instance to connect to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --vsphere-username                         | Username to use to connect to the vpshere/ESX instance (with --vsphere-address).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --vsphere-password                         | Password used to connect to the vpshere/ESX instance (with --vsphere-address).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  | Set global execution timeout (Default: 50)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --sampling-period                          | Choose the sampling period (can change the default sampling for counters). Should be not different from 300 or 20.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --time-shift                               | Can shift the time. With the following option you can average X counters values (default: 0).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --case-insensitive                         | Searches are case insensitive.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --unknown-connector-status                 | Set unknown threshold for connector status (Default: '%{code} \< 0 \|\| (%{code} \> 0 && %{code} \< 200)'). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --warning-connector-status                 | Set warning threshold for connector status (Default: ''). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --critical-connector-status                | Set critical threshold for connector status (Default: ''). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Option               | Description                                                                                                                                                                                                                        |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname        | Hostname of the VM to check. If not set, we check all VMs.                                                                                                                                                                                |
| --filter             | VM hostname is a regexp. Exemple : --vm-hostname='^((VM-PROD-*))' --filter                                                                                                                                                         |
| --filter-description | Filter also virtual machines description (can be a regexp).                                                                                                                                                                        |
| --filter-os          | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                                            |
| --scope-datacenter   | Search in the following datacenter(s) (can be a regexp).                                                                                                                                                                               |
| --scope-cluster      | Search in the following cluster(s) (can be a regexp).                                                                                                                                                                                  |
| --scope-host         | Search in the following host(s) (can be a regexp).                                                                                                                                                                                     |
| --unknown-status     | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status     | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              |
| --critical-status    | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             |
| --warning-*          | Warning threshold. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu-ready', 'cpu'.                                                                                                                                                       |
| --critical-*         | Critical threshold. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu-ready', 'cpu'.                                                                                                                                                      |

</TabItem>
<TabItem value="Vm-Datastores-Iops" label="Vm-Datastores-Iops">

| Option                   | Description                                                                                                                                                                                                                        |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname            | Hostname of the VM to check. If not set, we check all VMs.                                                                                                                                                                                |
| --filter                 | VM hostname is a regexp.                                                                                                                                                                                                           |
| --filter-description     | Filter also virtual machines description (can be a regexp).                                                                                                                                                                        |
| --filter-os              | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                                            |
| --scope-datacenter       | Search in the following datacenter(s) (can be a regexp).                                                                                                                                                                               |
| --scope-cluster          | Search in the following cluster(s) (can be a regexp).                                                                                                                                                                                  |
| --scope-host             | Search in the following host(s) (can be a regexp).                                                                                                                                                                                     |
| --datastore-name         | Datastore to check. If not set, we check all datastores.                                                                                                                                                                           |
| --filter-datastore       | Datastore name is a regexp.                                                                                                                                                                                                        |
| --display-description    | Display the description of the virtual machine.                                                                                                                                                                                               |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             |
| --warning-* --critical-* | Thresholds. Can be: 'max-total-latency', 'read', 'write'.                                                                                                                                                                          |

</TabItem>
<TabItem value="Vm-Device" label="Vm-Device">

| Option                | Description                                                                                                                                                                  |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         | Hostname of the VM to check. If not set, we check all VMs.                                                                                                                          |
| --filter              | VM hostname is a regexp.                                                                                                                                                     |
| --filter-description  | Filter also virtual machines description (can be a regexp).                                                                                                                  |
| --filter-os           | Filter also virtual machines OS name (can be a regexp).                                                                                                                      |
| --scope-datacenter    | Search in the following datacenter(s) (can be a regexp).                                                                                                                         |
| --scope-cluster       | Search in the following cluster(s) (can be a regexp).                                                                                                                            |
| --scope-host          | Search in the following host(s) (can be a regexp).                                                                                                                               |
| --display-description | Display the description of the virtual machine.                                                                                                                                         |
| --device              | Device to check (required). (Example: --device='VirtualCdrom').                                                                                                               |
| --unknown-status      | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state}   |
| --warning-status      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}                                         |
| --critical-status     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}                                        |
| --warning-*           | Warning threshold. Can be: 'total-device-connected', 'device-connected'.                                                                                                     |
| --critical-*          | Critical threshold. Can be: 'total-device-connected', 'device-connected'.                                                                                                    |

</TabItem>
<TabItem value="Vm-Limit" label="Vm-Limit">

| Option                   | Description                                                                                                                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname            | Hostname of the VM to check. If not set, we check all VMs.                                                                                                                                                                           |
| --filter                 | VM hostname is a regexp.                                                                                                                                                                                                      |
| --filter-description     | Filter also virtual machines description (can be a regexp).                                                                                                                                                                   |
| --filter-os              | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                                       |
| --display-description    | Display the description of the virtual machine.                                                                                                                                                                                          |
| --check-disk-limit       | Check disk limits (since vsphere 5.0).                                                                                                                                                                                        |
| --warning-disk-status    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                               |
| --critical-disk-status   | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}    |
| --warning-cpu-status     | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                               |
| --critical-cpu-status    | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}    |
| --warning-memory-status  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                               |
| --critical-memory-status | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}    |

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Option                | Description                                                                                                                                                                                                                        |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         | Hostname of the VM to check. If not set, we check all VMs.                                                                                                                                                                                |
| --filter              | VM hostname is a regexp.                                                                                                                                                                                                           |
| --filter-description  | Filter also virtual machines description (can be a regexp).                                                                                                                                                                        |
| --filter-os           | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                                            |
| --scope-datacenter    | Search in the following datacenter(s) (can be a regexp).                                                                                                                                                                               |
| --scope-cluster       | Search in the following cluster(s) (can be a regexp).                                                                                                                                                                                  |
| --scope-host          | Search in the following host(s) (can be a regexp).                                                                                                                                                                                     |
| --display-description | Display the description of the virtual machine.                                                                                                                                                                                               |
| --unknown-status      | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              |
| --critical-status     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             |
| --units               | Units of thresholds (Default: '%') ('%', 'B').                                                                                                                                                                                     |
| --free                | Thresholds are applied on free space left.                                                                                                                                                                                                 |
| --warning-*           | Warning threshold. Can be: 'consumed', 'active', 'overhead', 'ballooning', 'shared'.                                                                                                                                               |
| --critical-*          | Critical threshold. Can be: 'consumed', 'active', 'overhead', 'ballooning', 'shared'.                                                                                                                                              |

</TabItem>
<TabItem value="Vm-Snapshot" label="Vm-Snapshot">

| Option                | Description                                                                                                                                                   |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         | Hostname of the VM to check. If not set, we check all VMs.                                                                                                           |
| --filter              | VM hostname is a regexp.                                                                                                                                      |
| --filter-description  | Filter also virtual machines description (can be a regexp).                                                                                                   |
| --filter-os           | Filter also virtual machines OS name (can be a regexp).                                                                                                       |
| --scope-datacenter    | Search in the following datacenter(s) (can be a regexp).                                                                                                          |
| --scope-cluster       | Search in the following cluster(s) (can be a regexp).                                                                                                             |
| --scope-host          | Search in the following host(s) (can be a regexp).                                                                                                                |
| --display-description | Display the description of the virtual machine.                                                                                                                          |
| --check-consolidation | Check if VM needs consolidation (since vsphere 5.0).                                                                                                          |
| --disconnect-status   | Status if VM disconnected (default: 'unknown').                                                                                                               |
| --nopoweredon-skip    | Skip check if VM is not poweredOn.                                                                                                                            |
| --empty-continue      | Ask to the connector that an empty response is ok.                                                                                                            |
| --unit                | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds   |
| --warning             | Warning threshold for snapshot's age.                                                                                                                         |
| --critical            | Critical threshold for snapshot's age.                                                                                                                        |

</TabItem>
<TabItem value="Vm-Status" label="Vm-Status">

| Option                    | Description                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname             | Hostname of the VM to check. If not set, we check all VMs.                                                                                                                                           |
| --filter                  | VM hostname is a regexp.                                                                                                                                                                      |
| --filter-description      | Filter also virtual machines description (can be a regexp).                                                                                                                                   |
| --filter-os               | Filter also virtual machines OS name (can be a regexp).                                                                                                                                       |
| --scope-datacenter        | Search in the following datacenter(s) (can be a regexp).                                                                                                                                          |
| --scope-cluster           | Search in the following cluster(s) (can be a regexp).                                                                                                                                             |
| --scope-host              | Search in the following host(s) (can be a regexp).                                                                                                                                                |
| --unknown-status          | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{connection\_state}                                                                        |
| --critical-status         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{connection\_state}, %{power\_state}                                                      |
| --unknown-overall-status  | Define the conditions to match for the status to be UNKNOWN (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}                               |
| --warning-overall-status  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}                             |
| --critical-overall-status | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}                               |

</TabItem>
<TabItem value="Vm-Swap" label="Vm-Swap">

| Option                | Description                                                                                                                                                                                                                        |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         | Hostname of the VM to check. If not set, we check all VMs.                                                                                                                                                                                |
| --filter              | VM hostname is a regexp.                                                                                                                                                                                                           |
| --filter-description  | Filter also virtual machines description (can be a regexp).                                                                                                                                                                        |
| --filter-os           | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                                            |
| --scope-datacenter    | Search in the following datacenter(s) (can be a regexp).                                                                                                                                                                               |
| --scope-cluster       | Search in the following cluster(s) (can be a regexp).                                                                                                                                                                                  |
| --scope-host          | Search in the following host(s) (can be a regexp).                                                                                                                                                                                     |
| --display-description | Display the description of the virtual machine.                                                                                                                                                                                               |
| --unknown-status      | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              |
| --critical-status     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             |
| --warning-*           | Warning threshold. Can be: 'swap-in', 'swap-out'.                                                                                                                                                                                  |
| --critical-*          | Critical threshold. Can be: 'swap-in', 'swap-out'.                                                                                                                                                                                 |

</TabItem>
<TabItem value="Vm-Thinprovisioning" label="Vm-Thinprovisioning">

| Option                    | Description                                                                                  |
|:--------------------------|:---------------------------------------------------------------------------------------------|
| --vm-hostname             | Hostname of the VM to check. If not set, we check all VMs.                                          |
| --filter                  | VM hostname is a regexp.                                                                     |
| --filter-description      | Filter also virtual machines description (can be a regexp).                                  |
| --filter-os               | Filter also virtual machines OS name (can be a regexp).                                      |
| --scope-datacenter        | Search in the following datacenter(s) (can be a regexp).                                         |
| --scope-cluster           | Search in the following cluster(s) (can be a regexp).                                            |
| --scope-host              | Search in the following host(s) (can be a regexp).                                               |
| --disconnect-status       | Status if VM disconnected (default: 'unknown').                                              |
| --nopoweredon-skip        | Skip check if VM is not poweredOn.                                                           |
| --display-description     | Display the description of the virtual machine.                                                         |
| --thinprovisioning-status | Thin provisioning status (default: none). Example: 'active,CRITICAL' or 'notactive,WARNING'    |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Option                      | Description                                                   |
|:----------------------------|:--------------------------------------------------------------|
| --vm-hostname               | Hostname of the VM to check. If not set, we check all VMs.           |
| --filter                    | VM hostname is a regexp.                                      |
| --filter-description        | Filter also virtual machines description (can be a regexp).   |
| --filter-os                 | Filter also virtual machines OS name (can be a regexp).       |
| --scope-datacenter          | Search in the following datacenter(s) (can be a regexp).          |
| --scope-cluster             | Search in the following cluster(s) (can be a regexp).             |
| --scope-host                | Search in the following host(s) (can be a regexp).                |
| --disconnect-status         | Status if VM disconnected (default: 'unknown').               |
| --nopoweredon-skip          | Skip check if VM is not poweredOn.                            |
| --empty-continue            | Ask to the connector that an empty response is ok.            |
| --display-description       | Display the description of the virtual machine.                          |
| --tools-notinstalled-status | Status if vmtools is not installed (default: critical).       |
| --tools-notrunning-status   | Status if vmtools is not running (default: critical).         |
| --tools-notup2date-status   | Status if vmtools is not upd2date (default: warning).         |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=swap-vm \
	--help
```
