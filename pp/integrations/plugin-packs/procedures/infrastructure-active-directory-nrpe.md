---
id: infrastructure-active-directory-nrpe
title: Microsoft Active Directory NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This Monitoring Connector monitors Active Directory Domain Controllers using local commands and the Centreon NSClient++ and version 2 of the NRPE protocol agent to trigger their executions remotely.

## Pack assets

### Templates

The Monitoring Connector **Active Directory** brings a host template:

* **Infra-ActiveDirectory-NRPE-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Infra-ActiveDirectory-NRPE-custom" label="Infra-ActiveDirectory-NRPE-custom">

| Service Alias        | Service Template                                    | Service Description                                                                   |
|:---------------------|:----------------------------------------------------|:--------------------------------------------------------------------------------------|
| Ad-Domain-Controller | Infra-ActiveDirectory-Domain-Controller-NRPE-custom | This check diagnoses the domain controller. It executes the "dcdiag" command |

> The services listed above are created automatically when the **Infra-ActiveDirectory-NRPE-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                               | Service Description |
|:--------------|:-----------------------------------------------|:--------------------|
| Dfsr-Backlog  | Infra-ActiveDirectory-Dfsr-Backlog-NRPE-custom | Check the Distributed File Systems Replication backlog  |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/onprem/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Ad-Domain-Controller" label="Ad-Domain-Controller">

| Metric Name              | Unit  |
|:-------------------------|:------|
| domain controller status | N/A   |

</TabItem>
<TabItem value="Dfsr-Backlog" label="Dfsr-Backlog">

| Metric name        | Unit  |
|:-------------------|:------|
| backlog.file.count | count |

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
dnf install centreon-pack-infrastructure-active-directory-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-infrastructure-active-directory-nrpe
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-infrastructure-active-directory-nrpe
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-infrastructure-active-directory-nrpe
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Active Directory** connector through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install nagios-plugins-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install nagios-plugins-nrpe
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install nagios-nrpe-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install nagios-plugins-nrpe
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Infra-ActiveDirectory-NRPE-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro            | Description                                                                                          | Default value     | Mandatory   |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NRPECLIENT       | NRPE client used to perform the check.  | check\_nrpe       |             |
| NRPEPORT         | NRPE port of the monitored server | 5666              |             |
| NRPETIMEOUT      | Timeout value   | 30                |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). | `-u -2 -P 8192` |             |

5. [Deploy the configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/onprem/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Ad-Domain-Controller" label="Ad-Domain-Controller">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| LANGUAGE     | Define the language to use in the configuration file (default: 'en').  | en                |             |
| CONFIGFILE   | The command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file.  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Dfsr-Backlog" label="Dfsr-Backlog">

| Macro            | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SENDINGMEMBER    | Name of the member that is sending the replication data. (mandatory)                               |                   | X           |
| REPLICATIONGROUP | Name of the replication group. (mandatory)                                                        |                   | X           |
| REPLICATEDFOLDER | Name of the replicated folder. (mandatory)                                                   |                   | X           |
| WARNINGBACKLOG   | Warning threshold                                                                                  |                   |             |
| CRITICALBACKLOG  | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib64/nagios/plugins/check_nrpe -H 10.0.0.1 -p 5666 -t 30 -u -2 -P 8192 -c check_centreon_plugins -a 'apps::microsoft::activedirectory::local::plugin' 'dfsr-backlog'  ' \
	--sending-member="" \
	--replication-group="" \
	--replicated-folder="" \
	--warning-backlog="" \
	--critical-backlog="" '
```

The expected command output is shown below:

```bash
OK: Backlog File Count : 76 | 'backlog.file.count'=76;;;0;
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
/usr/lib64/nagios/plugins/check_nrpe -H 10.0.0.1 -p 5666 -u -2 -P 8192 -t 30  -c check_centreon_plugins -a 'apps::microsoft::activedirectory::local::plugin' 'dfsr-backlog'  ' \
	--sending-member="" \
	--list-mode \
	'
```

The plugin brings the following modes:

| Mode                                                                                                                                          | Linked service template                             |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| dcdiag [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/activedirectory/local/mode/dcdiag.pm)]            | Infra-ActiveDirectory-Domain-Controller-NRPE-custom |
| dfsr-backlog [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/activedirectory/local/mode/dfsrbacklog.pm)] | Infra-ActiveDirectory-Dfsr-Backlog-NRPE-custom      |
| netdom [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/activedirectory/local/mode/netdom.pm)]            | Not used in this Monitoring Connector               |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Ad-Domain-Controller" label="Ad-Domain-Controller">

| Option             | Description  |
|:-------------------|:------------ |
| --dfsr             | Specifies that SysVol replication uses DFS instead of FRS (Windows 2008 or later). |
| --noeventlog       | Don't run the dc tests kccevent, frsevent and dfsrevent. |
| --nomachineaccount | Don't run the dc tests machineaccount. |
| --timeout          | Set timeout time for command execution (default: 30 sec). |

</TabItem>
<TabItem value="Dfsr-Backlog" label="Dfsr-Backlog">

| Option             | Description                                                |
|:-------------------|:-----------------------------------------------------------|
| --receiving-member | Name of the member that is receiving the replication data. |
| --timeout          | Set timeout time for command execution (default: 30 sec).  |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib64/nagios/plugins//check_nrpe -H 10.0.0.1 -p 5666 -t 30 -u -2 -P 8192 -c check_centreon_plugins -a 'apps::microsoft::activedirectory::local::plugin' 'dfsr-backlog'  ' \
	--sending-member="" \
	--replication-group="" \
	--help
```
