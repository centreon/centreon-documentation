---
id: virtualization-vmware2-vcenter-6
title: VMware vCenter v6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **VMware vCenter v6** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)
* [VMware vCenter](./virtualization-vmware2-vcenter-generic.md)

## Pack assets

### Templates

The Monitoring Connector **VMware vCenter v6** brings a host template:

* **Virt-VMWare2-VCenter-6-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Virt-VMWare2-VCenter-6-custom" label="Virt-VMWare2-VCenter-6-custom">

| Service Alias      | Service Template                        | Service Description                                         |
|:-------------------|:----------------------------------------|:------------------------------------------------------------|
| Vm-Snapshot-Global | Virt-VMWare2-Vc6-Snapshot-Global-custom | Check snapshot age of multiple virtual machines (Vsphere 6) |

> The services listed above are created automatically when the **Virt-VMWare2-VCenter-6-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias   | Service Template                     | Service Description                                                     |
|:----------------|:-------------------------------------|:------------------------------------------------------------------------|
| Vm-Limit-Global | Virt-VMWare2-Vc6-Limit-Global-custom | Check limit definition (cpu, memory, disk) on multiple virtual machines |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Vm-Limit-Global" label="Vm-Limit-Global">

| Name          | Unit  |
|:--------------|:------|
| cpu-status    | N/A   |
| memory-status | N/A   |
| disk-status   | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Snapshot-Global" label="Vm-Snapshot-Global">

| Name                                | Unit  |
|:------------------------------------|:------|
| vm.snapshots.warning.current.count  | count |
| vm.snapshots.critical.current.count | count |

</TabItem>
</Tabs>

## Prerequisites

### Centreon VMWare Connector

For the VMWare monitoring, Centreon use daemon to connect and request the Vcenter.

Install this daemon on each needed poller:

```shell
yum install centreon-plugin-Virtualization-VMWare-daemon
```

<Tabs groupId="sync">
<TabItem value="Centreon Cloud and OnPrem from version 24.10" label="Centreon Cloud and OnPrem from version 24.10">

Go to [**Configuration > Connectors > Additional configurations**](../getting-started/how-to-guides/acc.md) to configure the connection to your vCenter.

</TabItem>
<TabItem value="Versions of Centreon OnPrem older than 24.10" label="Versions of Centreon OnPrem older than 24.10">

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

</TabItem>
</Tabs>

Then start the daemon and make sure it is configured to start at server boot:

``` bash
systemctl start centreon_vmware
systemctl enable centreon_vmware
```

Make sure that the daemon configuration works fine by looking for errors in
"/var/log/centreon/centreon\_vmware.log".

### Network flows

The Poller with the Centreon VMware Connector installed need to access in TCP/443 HTTPS to the Vcenter.

The Pollers that request the Centreon VMWare Connector host need to access in TCP/5700 to the Centreon VMWare Connector host.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-virtualization-vmware2-vcenter-6
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-vmware2-vcenter-6
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-virtualization-vmware2-vcenter-6
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-vmware2-vcenter-6
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **VMware vCenter v6** connector through
the **Configuration > Monitoring Connector Manager** menu.

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

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Virt-VMWare2-VCenter-6-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                      | Description                                                                                                                              | Default value | Mandatory |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| CENTREONVMWAREPORT         | The port used for the connection (by default: 5700)                                                                                      |               |           |
| CENTREONVMWARECONTAINER    | Name of your container in the `centreon_vmware.pm` file                                                                               |               |           |
| CENTREONVMWAREHOST         | The Centreon server that launches the connection                                                                                         |               |           |
| CENTREONVMWAREEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Vm-Limit-Global" label="Vm-Limit-Global">

| Macro                | Description                                                                                                                                              | Default value                                                  | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|:-----------:|
| FILTER               | VM hostname to check. If not set, we check all VMs                                                                                                       |                                                                |             |
| VMUUID               | Specify the VM's UUID                                                                                                                                    |                                                                |             |
| CRITICALCPUSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\} | %\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1 |             |
| WARNINGCPUSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}  |                                                                |             |
| CRITICALDISKSTATUS   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\} | %\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1 |             |
| WARNINGDISKSTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}  |                                                                |             |
| CRITICALMEMORYSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\} | %\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1 |             |
| WARNINGMEMORYSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}  |                                                                |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                   |  --check-disk-limit --verbose                                  |             |

</TabItem>
<TabItem value="Vm-Snapshot-Global" label="Vm-Snapshot-Global">

| Macro        | Description                                                                                                                            | Default value                                                               | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------|:---------:|
| FILTER       | VM hostname to check. If not set, we check all VMs                                                                                     |                                                                             |           |
| VMUUID       | Specify the VM's UUID                                                                                                                  |                                                                             |           |
| WARNING      | Warning threshold for snapshot's age                                                                                                   |                                                                             |           |
| CRITICAL     | Critical threshold for snapshot's age                                                                                                  |                                                                             |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --disconnect-status='ok' --nopoweredon-skip --check-consolidation --verbose |           |

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
	--mode=snapshot-vm \
	--custommode=connector \
	--connector-hostname='' \
	--connector-port='' \
	--container=''  \
	--vm-hostname='' \
	--filter \
	--filter-uuid='' \
	--warning='' \
	--critical='' \
	--disconnect-status='ok' \
	--nopoweredon-skip \
	--check-consolidation \
	--verbose
```

The expected command output is shown below:

```bash
CRITICAL: Snapshots for VM older than 432000 seconds: [TLS-LIN-001] | 'num_warning'=0;;;0; 'num_critical'=1;;;0;
'TLS-LIN-001' snapshot create time: 2020-07-20T12:19:16.246902Z [only base os image]
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

| Mode                                                                                                                                         | Linked service template                 |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
| alarm-datacenter [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmdatacenter.pm)]       | Not used in this Monitoring Connector   |
| alarm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmhost.pm)]                   | Not used in this Monitoring Connector   |
| countvm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/countvmhost.pm)]               | Not used in this Monitoring Connector   |
| cpu-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpucluster.pm)]                 | Not used in this Monitoring Connector   |
| cpu-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuhost.pm)]                       | Not used in this Monitoring Connector   |
| cpu-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuvm.pm)]                           | Not used in this Monitoring Connector   |
| datastore-countvm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorecountvm.pm)]     | Not used in this Monitoring Connector   |
| datastore-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorehost.pm)]           | Not used in this Monitoring Connector   |
| datastore-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreio.pm)]               | Not used in this Monitoring Connector   |
| datastore-iops [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreiops.pm)]           | Not used in this Monitoring Connector   |
| datastore-snapshot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoresnapshot.pm)]   | Not used in this Monitoring Connector   |
| datastore-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreusage.pm)]         | Not used in this Monitoring Connector   |
| datastore-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorevm.pm)]               | Not used in this Monitoring Connector   |
| device-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/devicevm.pm)]                     | Not used in this Monitoring Connector   |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/discovery.pm)]                    | Not used in this Monitoring Connector   |
| getmap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/getmap.pm)]                          | Not used in this Monitoring Connector   |
| health-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/healthhost.pm)]                 | Not used in this Monitoring Connector   |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/licenses.pm)]                      | Not used in this Monitoring Connector   |
| limit-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/limitvm.pm)]                       | Virt-VMWare2-Vc6-Limit-Global-custom    |
| list-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listclusters.pm)]             | Not used in this Monitoring Connector   |
| list-datacenters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatacenters.pm)]       | Not used in this Monitoring Connector   |
| list-datastores [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatastores.pm)]         | Not used in this Monitoring Connector   |
| list-nichost [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listnichost.pm)]               | Not used in this Monitoring Connector   |
| maintenance-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/maintenancehost.pm)]       | Not used in this Monitoring Connector   |
| memory-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryhost.pm)]                 | Not used in this Monitoring Connector   |
| memory-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryvm.pm)]                     | Not used in this Monitoring Connector   |
| net-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/nethost.pm)]                       | Not used in this Monitoring Connector   |
| net-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/netvm.pm)]                           | Not used in this Monitoring Connector   |
| service-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/servicehost.pm)]               | Not used in this Monitoring Connector   |
| snapshot-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/snapshotvm.pm)]                 | Virt-VMWare2-Vc6-Snapshot-Global-custom |
| stat-connectors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statconnectors.pm)]         | Not used in this Monitoring Connector   |
| status-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statuscluster.pm)]           | Not used in this Monitoring Connector   |
| status-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statushost.pm)]                 | Not used in this Monitoring Connector   |
| status-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statusvm.pm)]                     | Not used in this Monitoring Connector   |
| storage-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/storagehost.pm)]               | Not used in this Monitoring Connector   |
| swap-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swaphost.pm)]                     | Not used in this Monitoring Connector   |
| swap-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swapvm.pm)]                         | Not used in this Monitoring Connector   |
| thinprovisioning-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/thinprovisioningvm.pm)] | Not used in this Monitoring Connector   |
| time-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/timehost.pm)]                     | Not used in this Monitoring Connector   |
| tools-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/toolsvm.pm)]                       | Not used in this Monitoring Connector   |
| uptime-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/uptimehost.pm)]                 | Not used in this Monitoring Connector   |
| vmoperation-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vmoperationcluster.pm)] | Not used in this Monitoring Connector   |
| vsan-cluster-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vsanclusterusage.pm)]    | Not used in this Monitoring Connector   |

### Available options

#### Generic options

All generic options are listed here:

| Option | Description |
|:-------|:------------|

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Vm-Limit-Global" label="Vm-Limit-Global">

| Option                   | Description                                                                                                                                                                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                               |
| --vm-hostname            |   VM hostname to check. If not set, we check all VMs.                                                                                                                                                                                     |
| --filter                 |   VM hostname is a regexp.                                                                                                                                                                                                                |
| --filter-description     |   Filter also virtual machines description (can be a regexp).                                                                                                                                                                             |
| --filter-os              |   Filter also virtual machines OS name (can be a regexp).                                                                                                                                                                                 |
| --display-description    |   Display virtual machine description.                                                                                                                                                                                                    |
| --check-disk-limit       |   Check disk limits (since vsphere 5.0).                                                                                                                                                                                                  |
| --warning-disk-status    |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}                                                                   |
| --critical-disk-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1'). You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}    |
| --warning-cpu-status     |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}                                                                   |
| --critical-cpu-status    |   Define the conditions to match for the status to be CRITICAL (default: '%\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1'). You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}    |
| --warning-memory-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}                                                                   |
| --critical-memory-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1'). You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}    |

</TabItem>
<TabItem value="Vm-Snapshot-Global" label="Vm-Snapshot-Global">

| Option                | Description                                                                                                                                       |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         |   VM hostname to check. If not set, we check all VMs.                                                                                             |
| --filter              |   VM hostname is a regexp.                                                                                                                        |
| --filter-description  |   Filter also virtual machines description (can be a regexp).                                                                                     |
| --filter-os           |   Filter also virtual machines OS name (can be a regexp).                                                                                         |
| --scope-datacenter    |   Search in following datacenter(s) (can be a regexp).                                                                                            |
| --scope-cluster       |   Search in following cluster(s) (can be a regexp).                                                                                               |
| --scope-host          |   Search in following host(s) (can be a regexp).                                                                                                  |
| --display-description |   Display virtual machine description.                                                                                                            |
| --check-consolidation |   Check if VM needs consolidation (since vsphere 5.0).                                                                                            |
| --disconnect-status   |   Status if VM disconnected (default: 'unknown').                                                                                                 |
| --nopoweredon-skip    |   Skip check if VM is not poweredOn.                                                                                                              |
| --empty-continue      |   Ask to the connector that an empty response is ok.                                                                                              |
| --unit                |   Select the time unit for thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.   |
| --warning             |   Warning threshold for snapshot's age.                                                                                                           |
| --critical            |   Critical threshold for snapshot's age.                                                                                                          |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=snapshot-vm \
	--help
```
