---
id: virtualization-hyperv-2012-nrpe
title: Hyper-V 2012 NSClient++ NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Hyper-V 2012** brings 2 host templates:

* **Virt-Hyperv-2012-Node-NRPE-custom**
* **Virt-Hyperv-2012-Scvmm-NRPE-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Virt-Hyperv-2012-Node-NRPE-custom" label="Virt-Hyperv-2012-Node-NRPE-custom">

| Service Alias            | Service Template                                      | Service Description                        |
|:-------------------------|:------------------------------------------------------|:-------------------------------------------|
| Node-Integration-Service | Virt-Hyperv-2012-Node-Integration-Service-NRPE-custom | Check virtual machine integration services |
| Node-Replication         | Virt-Hyperv-2012-Node-Replication-NRPE-custom         | Check virtual machine replication status   |
| Node-Snapshot            | Virt-Hyperv-2012-Node-Snapshot-NRPE-custom            | Check virtual machine snapshots            |
| Node-Vm-Status           | Virt-Hyperv-2012-Node-Vm-Status-NRPE-custom           | Check virtual machine status               |

> The services listed above are created automatically when the **Virt-Hyperv-2012-Node-NRPE-custom** host template is used.

</TabItem>
<TabItem value="Virt-Hyperv-2012-Scvmm-NRPE-custom" label="Virt-Hyperv-2012-Scvmm-NRPE-custom">

| Service Alias             | Service Template                                       | Service Description                        |
|:--------------------------|:-------------------------------------------------------|:-------------------------------------------|
| Scvmm-Integration-Service | Virt-Hyperv-2012-Scvmm-Integration-Service-NRPE-custom | Check virtual machine integration services |
| Scvmm-Snapshot            | Virt-Hyperv-2012-Scvmm-Snapshot-NRPE-custom            | Check virtual machine snapshots            |
| Scvmm-Vm-Status           | Virt-Hyperv-2012-Scvmm-Vm-Status-NRPE-custom           | Check virtual machine status               |

> The services listed above are created automatically when the **Virt-Hyperv-2012-Scvmm-NRPE-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Node-Integration-Service" label="Node-Integration-Service">

| Metric name    | Unit  |
|:---------------|:------|
| global-status  | N/A   |
| service-status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Node-Replication" label="Node-Replication">

| Metric name | Unit  |
|:------------|:------|
| *vm*#status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Node-Snapshot" label="Node-Snapshot">

| Metric name   | Unit  |
|:--------------|:------|
| *vm*#snapshot | N/A   |
| *vm*#backing  | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Node-Vm-Status" label="Node-Vm-Status">

| Metric name | Unit  |
|:------------|:------|
| *vm*#status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Scvmm-Integration-Service" label="Scvmm-Integration-Service">

| Metric name              | Unit  |
|:-------------------------|:------|
| *vm*#status              | N/A   |
| *vm*#osshutdown-status   | N/A   |
| *vm*#timesync-status     | N/A   |
| *vm*#dataexchange-status | N/A   |
| *vm*#heartbeat-status    | N/A   |
| *vm*#backup-status       | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Scvmm-Snapshot" label="Scvmm-Snapshot">

| Metric name   | Unit  |
|:--------------|:------|
| *vm*#snapshot | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Scvmm-Vm-Status" label="Scvmm-Vm-Status">

| Metric name | Unit  |
|:------------|:------|
| *vm*#status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

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
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-virtualization-hyperv-2012-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-hyperv-2012-nrpe
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-virtualization-hyperv-2012-nrpe
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-hyperv-2012-nrpe
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Hyper-V 2012** connector through
the **Configuration > Monitoring Connector Manager** menu.

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

<Tabs groupId="sync">
<TabItem value="Virt-Hyperv-2012-Node-NRPE-custom" label="Virt-Hyperv-2012-Node-NRPE-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Virt-Hyperv-2012-Node-NRPE-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro            | Description                                                                                          | Default value         | Mandatory   |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| NRPEPORT         |                                                                                                      | 5666                  |             |
| NRPECLIENT       |                                                                                                      | check\_centreon\_nrpe |             |
| NRPETIMEOUT      |                                                                                                      | 55                    |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                       |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Virt-Hyperv-2012-Scvmm-NRPE-custom" label="Virt-Hyperv-2012-Scvmm-NRPE-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Virt-Hyperv-2012-Scvmm-NRPE-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro            | Description                                                                                          | Default value         | Mandatory   |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| NRPEPORT         |                                                                                                      | 5666                  |             |
| SCVMMPORT        |                                                                                                      | 8100                  |             |
| NRPECLIENT       |                                                                                                      | check\_centreon\_nrpe |             |
| NRPETIMEOUT      |                                                                                                      | 55                    |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                       |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Node-Integration-Service" label="Node-Integration-Service">

| Macro                 | Description                                                                                                                                                                                                                                           | Default value                                        | Mandatory   |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|:-----------:|
| FILTERSTATUS          | Filter virtual machine status (can be a regexp) (default: 'running')                                                                                                                                                                                  | Running                                              |             |
| FILTERVM              | Filter virtual machines (can be a regexp)                                                                                                                                                                                                             |                                                      |             |
| FILTERNOTE            | Filter by VM notes (can be a regexp)                                                                                                                                                                                                                  |                                                      |             |
| WARNINGGLOBALSTATUS   | Define the conditions to match for the status to be WARNING (default: '%{integration\_service\_state} =~ /Update required/i'). You can use the following variables: %{vm}, %{integration\_service\_state}, %{integration\_service\_version}, %{state} | %{integration\_service\_state} =~ /Update required/i |             |
| CRITICALGLOBALSTATUS  | Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{vm}, %{integration\_service\_state}, %{integration\_service\_version}, %{state}                                                    |                                                      |             |
| CRITICALSERVICESTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{primary\_status} !~ /Ok/i'). You can use the following variables: %{vm}, %{service}, %{primary\_status}, %{secondary\_status}, %{enabled}                                   | not %{primary\_status} =~ /Ok/i                      |             |
| WARNINGSERVICESTATUS  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{vm}, %{service}, %{primary\_status}, %{secondary\_status}, %{enabled}                                                               |                                                      |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                    | --verbose                                            |             |

</TabItem>
<TabItem value="Node-Replication" label="Node-Replication">

| Macro          | Description                                                                                                                                                         | Default value            | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| FILTERVM       | Filter virtual machines (can be a regexp)                                                                                                                           |                          |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: '%{health} =~ /Warning/i'). You can use the following variables: %{vm}, %{state}, %{health}   | %{health} =~ /Warning/i  |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{health} =~ /Critical/i'). You can use the following variables: %{vm}, %{state}, %{health} | %{health} =~ /Critical/i |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                  | --verbose                |             |

</TabItem>
<TabItem value="Node-Snapshot" label="Node-Snapshot">

| Macro            | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSTATUS     | Filter virtual machine status (can be a regexp) (default: 'running')                               | running           |             |
| FILTERVM         | Filter virtual machines (can be a regexp)                                                          |                   |             |
| FILTERNOTE       | Filter by VM notes (can be a regexp)                                                               |                   |             |
| WARNINGBACKING   | Warning threshold                                                                                  |                   |             |
| CRITICALBACKING  | Critical threshold                                                                                 |                   |             |
| WARNINGSNAPSHOT  | Warning threshold                                                                                  |                   |             |
| CRITICALSNAPSHOT | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Node-Vm-Status" label="Node-Vm-Status">

| Macro          | Description                                                                                                                                                                                     | Default value                          | Mandatory   |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|:-----------:|
| FILTERVM       | Filter virtual machines (can be a regexp)                                                                                                                                                       |                                        |             |
| FILTERNOTE     | Filter by VM notes (can be a regexp)                                                                                                                                                            |                                        |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /Operating normally/i'). You can use the following variables: %{vm}, %{state}, %{status}, %{is\_clustered} | not %{status} =~ /Operating normally/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{vm}, %{state}, %{status}, %{is\_clustered}                                    |                                        |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                              | --verbose                              |             |

</TabItem>
<TabItem value="Scvmm-Integration-Service" label="Scvmm-Integration-Service">

| Macro             | Description                                                                                                                                                                      | Default value                    | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| FILTERSTATUS      | Filter virtual machine status (can be a regexp)                                                                                                                                  | Running                          |             |
| FILTERVM          | Filter virtual machines (can be a regexp)                                                                                                                                        |                                  |             |
| FILTERDESCRIPTION | Filter by description (can be a regexp)                                                                                                                                          |                                  |             |
| FILTERHOSTGROUP   | Filter hostgroup (can be a regexp)                                                                                                                                               |                                  |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL (default: '%{vmaddition} =~ /not detected/i'). You can use the following variables: %{vm}, %{vmaddition}, %{status} | %{vmaddition} =~ /not detected/i |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{vm}, %{vmaddition}, %{status}                                  |                                  |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                               | --verbose                        |             |

</TabItem>
<TabItem value="Scvmm-Snapshot" label="Scvmm-Snapshot">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSTATUS      | Filter virtual machine status (can be a regexp) (default: 'running')                               | running           |             |
| FILTERVM          | Filter virtual machines (can be a regexp)                                                          |                   |             |
| FILTERDESCRIPTION | Filter by description (can be a regexp)                                                            |                   |             |
| FILTERHOSTGROUP   | Filter hostgroup (can be a regexp)                                                                 |                   |             |
| WARNINGSNAPSHOT   | Warning threshold                                                                                  |                   |             |
| CRITICALSNAPSHOT  | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Scvmm-Vm-Status" label="Scvmm-Vm-Status">

| Macro             | Description                                                                                                                                                                     | Default value                        | Mandatory   |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|:-----------:|
| FILTERVM          | Filter virtual machines (can be a regexp)                                                                                                                                       |                                      |             |
| FILTERDESCRIPTION | Filter by description (can be a regexp)                                                                                                                                         |                                      |             |
| FILTERHOSTGROUP   | Filter hostgroup (can be a regexp)                                                                                                                                              |                                      |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /Running\|Stopped/i'). You can use the following variables: %{vm}, %{status}, %{hostgroup} | not %{status} =~ /Running\|Stopped/i |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{vm}, %{status}, %{hostgroup}                                  |                                      |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                              | --verbose                            |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib64/nagios/plugins// -H 10.0.0.1 -p  -t   -c check_centreon_plugins -a 'apps::microsoft::hyperv::2012::local::plugin' 'scvmm-vm-status'  '  \
	--scvmm-hostname="" \
	--scvmm-username="" \
	--scvmm-password="" \
	--scvmm-port="" \
	--filter-vm=""  \
	--filter-description="" \
	--filter-hostgroup="" \
	--warning-status="" \
	--critical-status="not %{status} =~ /Running|Stopped/i" \
	--verbose'
```

The expected command output is shown below:

```bash
OK: All virtual machines are ok | 
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
/usr/lib64/nagios/plugins// -H 10.0.0.1 -p  -t   -c check_centreon_plugins -a 'apps::microsoft::hyperv::2012::local::plugin' 'scvmm-vm-status'  '  \
	--scvmm-hostname="" \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                               | Linked service template                                |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|
| list-node-vms [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/listnodevms.pm)]                         | Not used in this Monitoring Connector                  |
| node-integration-service [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/nodeintegrationservice.pm)]   | Virt-Hyperv-2012-Node-Integration-Service-NRPE-custom  |
| node-replication [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/nodereplication.pm)]                  | Virt-Hyperv-2012-Node-Replication-NRPE-custom          |
| node-snapshot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/nodesnapshot.pm)]                        | Virt-Hyperv-2012-Node-Snapshot-NRPE-custom             |
| node-vm-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/nodevmstatus.pm)]                       | Virt-Hyperv-2012-Node-Vm-Status-NRPE-custom            |
| scvmm-discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/scvmmdiscovery.pm)]                    | Not used in this Monitoring Connector                  |
| scvmm-integration-service [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/scvmmintegrationservice.pm)] | Virt-Hyperv-2012-Scvmm-Integration-Service-NRPE-custom |
| scvmm-snapshot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/scvmmsnapshot.pm)]                      | Virt-Hyperv-2012-Scvmm-Snapshot-NRPE-custom            |
| scvmm-vm-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/scvmmvmstatus.pm)]                     | Virt-Hyperv-2012-Scvmm-Vm-Status-NRPE-custom           |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Node-Integration-Service" label="Node-Integration-Service">

| Option                    | Description                                                                                                                                                                                                                                             |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                 | Set timeout time for command execution (default: 50 sec)                                                                                                                                                                                                |
| --no-ps                   | Don't encode powershell. To be used with --command and 'type'command.                                                                                                                                                                                   |
| --command                 | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                                                  |
| --command-path            | Command path (default: none).                                                                                                                                                                                                                           |
| --command-options         | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                                                 |
| --ps-display              | Display powershell script.                                                                                                                                                                                                                              |
| --ps-exec-only            | Print powershell output.                                                                                                                                                                                                                                |
| --filter-vm               | Filter virtual machines (can be a regexp).                                                                                                                                                                                                              |
| --filter-note             | Filter by VM notes (can be a regexp).                                                                                                                                                                                                                   |
| --filter-status           | Filter virtual machine status (can be a regexp) (default: 'running').                                                                                                                                                                                   |
| --warning-global-status   | Define the conditions to match for the status to be WARNING (default: '%{integration\_service\_state} =~ /Update required/i'). You can use the following variables: %{vm}, %{integration\_service\_state}, %{integration\_service\_version}, %{state}   |
| --critical-global-status  | Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{vm}, %{integration\_service\_state}, %{integration\_service\_version}, %{state}                                                      |
| --warning-service-status  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{vm}, %{service}, %{primary\_status}, %{secondary\_status}, %{enabled}                                                                 |
| --critical-service-status | Define the conditions to match for the status to be CRITICAL (default: '%{primary\_status} !~ /Ok/i'). You can use the following variables: %{vm}, %{service}, %{primary\_status}, %{secondary\_status}, %{enabled}                                     |

</TabItem>
<TabItem value="Node-Replication" label="Node-Replication">

| Option            | Description                                                                                                                                                            |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (default: 50 sec)                                                                                                               |
| --no-ps           | Don't encode powershell. To be used with --command and 'type'command.                                                                                                  |
| --command         | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                 |
| --command-path    | Command path (default: none).                                                                                                                                          |
| --command-options | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                |
| --ps-display      | Display powershell script.                                                                                                                                             |
| --ps-exec-only    | Print powershell output.                                                                                                                                               |
| --filter-vm       | Filter virtual machines (can be a regexp).                                                                                                                             |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '%{health} =~ /Warning/i'). You can use the following variables: %{vm}, %{state}, %{health}      |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{health} =~ /Critical/i'). You can use the following variables: %{vm}, %{state}, %{health}    |

</TabItem>
<TabItem value="Node-Snapshot" label="Node-Snapshot">

| Option            | Description                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (default: 50 sec)                                                                                 |
| --no-ps           | Don't encode powershell. To be used with --command and 'type'command.                                                                    |
| --command         | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path    | Command path (default: none).                                                                                                            |
| --command-options | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display      | Display powershell script.                                                                                                               |
| --ps-exec-only    | Print powershell output.                                                                                                                 |
| --filter-status   | Filter virtual machine status (can be a regexp) (default: 'running').                                                                    |
| --filter-vm       | Filter virtual machines (can be a regexp).                                                                                               |
| --filter-note     | Filter by VM notes (can be a regexp).                                                                                                    |
| --warning-*       | Warning threshold. Can be: 'snapshot' (in seconds), 'backing' (in seconds).                                                              |
| --critical-*      | Critical threshold. Can be: 'snapshot' (in seconds), 'backing' (in seconds).                                                             |

</TabItem>
<TabItem value="Node-Vm-Status" label="Node-Vm-Status">

| Option            | Description                                                                                                                                                                                        |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (default: 50 sec)                                                                                                                                           |
| --no-ps           | Don't encode powershell. To be used with --command and 'type'command.                                                                                                                              |
| --command         | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                             |
| --command-path    | Command path (default: none).                                                                                                                                                                      |
| --command-options | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                            |
| --ps-display      | Display powershell script.                                                                                                                                                                         |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                           |
| --filter-vm       | Filter virtual machines (can be a regexp).                                                                                                                                                         |
| --filter-note     | Filter by VM notes (can be a regexp).                                                                                                                                                              |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{vm}, %{state}, %{status}, %{is\_clustered}                                       |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /Operating normally/i'). You can use the following variables: %{vm}, %{state}, %{status}, %{is\_clustered}    |

</TabItem>
<TabItem value="Scvmm-Integration-Service" label="Scvmm-Integration-Service">

| Option               | Description                                                                                                                                                                         |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --scvmm-hostname     | SCVMM hostname.                                                                                                                                                                     |
| --scvmm-username     | SCVMM username (required).                                                                                                                                                          |
| --scvmm-password     | SCVMM password (required).                                                                                                                                                          |
| --scvmm-port         | SCVMM port (default: 8100).                                                                                                                                                         |
| --timeout            | Set timeout time for command execution (default: 50 sec)                                                                                                                            |
| --no-ps              | Don't encode powershell. To be used with --command and 'type'command.                                                                                                               |
| --command            | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                              |
| --command-path       | Command path (default: none).                                                                                                                                                       |
| --command-options    | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                             |
| --ps-display         | Display powershell script.                                                                                                                                                          |
| --ps-exec-only       | Print powershell output.                                                                                                                                                            |
| --filter-status      | Filter virtual machine status (can be a regexp).                                                                                                                                    |
| --filter-description | Filter by description (can be a regexp).                                                                                                                                            |
| --filter-vm          | Filter virtual machines (can be a regexp).                                                                                                                                          |
| --filter-hostgroup   | Filter hostgroup (can be a regexp).                                                                                                                                                 |
| --warning-status     | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{vm}, %{vmaddition}, %{status}                                     |
| --critical-status    | Define the conditions to match for the status to be CRITICAL (default: '%{vmaddition} =~ /not detected/i'). You can use the following variables: %{vm}, %{vmaddition}, %{status}    |

</TabItem>
<TabItem value="Scvmm-Snapshot" label="Scvmm-Snapshot">

| Option               | Description                                                                                                                              |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --scvmm-hostname     | SCVMM hostname.                                                                                                                          |
| --scvmm-username     | SCVMM username (required).                                                                                                               |
| --scvmm-password     | SCVMM password (required).                                                                                                               |
| --scvmm-port         | SCVMM port (default: 8100).                                                                                                              |
| --timeout            | Set timeout time for command execution (default: 50 sec)                                                                                 |
| --no-ps              | Don't encode powershell. To be used with --command and 'type'command.                                                                    |
| --command            | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path       | Command path (default: none).                                                                                                            |
| --command-options    | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display         | Display powershell script.                                                                                                               |
| --ps-exec-only       | Print powershell output.                                                                                                                 |
| --filter-status      | Filter virtual machine status (can be a regexp) (default: 'running').                                                                    |
| --filter-vm          | Filter virtual machines (can be a regexp).                                                                                               |
| --filter-description | Filter by description (can be a regexp).                                                                                                 |
| --filter-hostgroup   | Filter hostgroup (can be a regexp).                                                                                                      |
| --warning-*          | Warning threshold. Can be: 'snapshot' (in seconds).                                                                                      |
| --critical-*         | Critical threshold. Can be: 'snapshot' (in seconds).                                                                                     |

</TabItem>
<TabItem value="Scvmm-Vm-Status" label="Scvmm-Vm-Status">

| Option               | Description                                                                                                                                                                        |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --scvmm-hostname     | SCVMM hostname.                                                                                                                                                                    |
| --scvmm-username     | SCVMM username (required).                                                                                                                                                         |
| --scvmm-password     | SCVMM password (required).                                                                                                                                                         |
| --scvmm-port         | SCVMM port (default: 8100).                                                                                                                                                        |
| --timeout            | Set timeout time for command execution (default: 50 sec)                                                                                                                           |
| --no-ps              | Don't encode powershell. To be used with --command and 'type'command.                                                                                                              |
| --command            | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                             |
| --command-path       | Command path (default: none).                                                                                                                                                      |
| --command-options    | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                            |
| --ps-display         | Display powershell script.                                                                                                                                                         |
| --ps-exec-only       | Print powershell output.                                                                                                                                                           |
| --filter-vm          | Filter virtual machines (can be a regexp).                                                                                                                                         |
| --filter-hostgroup   | Filter hostgroup (can be a regexp).                                                                                                                                                |
| --filter-description | Filter by description (can be a regexp).                                                                                                                                           |
| --warning-status     | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{vm}, %{status}, %{hostgroup}                                     |
| --critical-status    | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /Running\|Stopped/i'). You can use the following variables: %{vm}, %{status}, %{hostgroup}    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib64/nagios/plugins// -H 10.0.0.1 -p  -t   -c check_centreon_plugins -a 'apps::microsoft::hyperv::2012::local::plugin' 'scvmm-vm-status'  '  \
	--scvmm-hostname="" \
	--scvmm-username="" \
	--help
```
