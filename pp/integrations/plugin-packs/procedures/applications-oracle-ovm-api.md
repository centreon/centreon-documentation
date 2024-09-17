---
id: applications-oracle-ovm-api
title: Oracle VM Manager API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Oracle VM Manager API** brings a host template:

* **App-Oracle-Ovm-Api-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Oracle-Ovm-Api-custom" label="App-Oracle-Ovm-Api-custom">

| Service Alias | Service Template                            | Service Description           |
|:--------------|:--------------------------------------------|:------------------------------|
| File-Servers  | App-Oracle-Ovm-File-Servers-Api-custom      | Check file server filesystems |
| Manager       | App-Oracle-Ovm-Manager-Api-custom           | Check manager                 |
| Server-Pools  | App-Oracle-Ovm-File-Server-Pools-Api-custom | Check server pools            |
| Servers       | App-Oracle-Ovm-Servers-Api-custom           | Check servers                 |
| Vm            | App-Oracle-Ovm-Vm-Api-custom                | Check virtual machines        |

> The services listed above are created automatically when the **App-Oracle-Ovm-Api-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="File-Servers" label="File-Servers">

| Metric name                                                   | Unit  |
|:--------------------------------------------------------------|:------|
| *fileservers*~*filesystems*#serverpool.space.usage.bytes      | B     |
| *fileservers*~*filesystems*#serverpool.space.free.bytes       | B     |
| *fileservers*~*filesystems*#serverpool.space.usage.percentage | %     |

</TabItem>
<TabItem value="Manager" label="Manager">

| Metric name                  | Unit  |
|:-----------------------------|:------|
| status                       | N/A   |
| manager.jobs.succeeded.count | count |
| manager.jobs.failed.count    | count |

</TabItem>
<TabItem value="Server-Pools" label="Server-Pools">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| *pools*~serverpool.servers.running.count   | count |
| *pools*~serverpool.servers.stopped.count   | count |
| *pools*~serverpool.vm.running.count        | count |
| *pools*~serverpool.vm.stopped.count        | count |
| *pools*~serverpool.memory.usage.bytes      | B     |
| *pools*~serverpool.memory.free.bytes       | B     |
| *pools*~serverpool.memory.usage.percentage | %     |

</TabItem>
<TabItem value="Servers" label="Servers">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| servers.running.count                    | count |
| servers.stopped.count                    | count |
| *servers*#status                         | N/A   |
| *servers*#server.memory.usage.bytes      | B     |
| *servers*#server.memory.free.bytes       | B     |
| *servers*#server.memory.usage.percentage | %     |

</TabItem>
<TabItem value="Vm" label="Vm">

| Metric name                   | Unit  |
|:------------------------------|:------|
| virtualmachines.running.count | count |
| virtualmachines.stopped.count | count |
| *vm*#status                   | N/A   |

</TabItem>
</Tabs>

## Prerequisites

To control your Oracle VM Manager, the Rest API must be configured (the SOAP API is deprecated).

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
dnf install centreon-pack-applications-oracle-ovm-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-oracle-ovm-api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-oracle-ovm-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-oracle-ovm-api
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Oracle VM Manager API** connector through
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
dnf install centreon-plugin-Applications-Oracle-Ovm-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Oracle-Ovm-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-oracle-ovm-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Oracle-Ovm-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Oracle-Ovm-Api-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro              | Description                                                                                                                | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OVMAPIUSERNAME     | API username                                                                                                               | username          | X           |
| OVMAPIPASSWORD     | API password                                                                                                               | password          | X           |
| OVMAPIPROTO        | Specify https if needed (default: 'https')                                                                                 | https             |             |
| OVMAPIPORT         | Port used (default: 7002)                                                                                                  | 7002              |             |
| OVMAPICUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | rest              |             |
| OVMAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                       |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="File-Servers" label="File-Servers">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERFILESERVERNAME   | Filter file servers by name (can be a regexp)                                                      |                   |             |
| FILTERFILESYSTEMNAME   | Filter file systems by name (can be a regexp)                                                      |                   |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                         |                   |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                         |                   |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                         |                   |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                         |                   |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                         |                   |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Manager" label="Manager">

| Macro                 | Description                                                                                                                                                | Default value           | Mandatory   |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| WARNINGJOBSFAILED     | Thresholds                                                                                                                                                 |                         |             |
| CRITICALJOBSFAILED    | Thresholds                                                                                                                                                 |                         |             |
| WARNINGJOBSSUCCEEDED  | Thresholds                                                                                                                                                 |                         |             |
| CRITICALJOBSSUCCEEDED | Thresholds                                                                                                                                                 |                         |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /running/i'). You can use the following variables: %{status}, %{name} | %{status} !~ /running/i |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                       |                         |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                         | --verbose               |             |

</TabItem>
<TabItem value="Server-Pools" label="Server-Pools">

| Macro                   | Description                                                                                        | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSERVERPOOLNAME    | Filter server pools by name (can be a regexp)                                                      |                   |             |
| WARNINGMEMORYUSAGE      | Thresholds                                                                                         |                   |             |
| CRITICALMEMORYUSAGE     | Thresholds                                                                                         |                   |             |
| WARNINGMEMORYUSAGEFREE  | Thresholds                                                                                         |                   |             |
| CRITICALMEMORYUSAGEFREE | Thresholds                                                                                         |                   |             |
| WARNINGMEMORYUSAGEPRCT  | Thresholds                                                                                         |                   |             |
| CRITICALMEMORYUSAGEPRCT | Thresholds                                                                                         |                   |             |
| WARNINGSERVERSRUNNING   | Thresholds                                                                                         |                   |             |
| CRITICALSERVERSRUNNING  | Thresholds                                                                                         |                   |             |
| WARNINGSERVERSSTOPPED   | Thresholds                                                                                         |                   |             |
| CRITICALSERVERSSTOPPED  | Thresholds                                                                                         |                   |             |
| WARNINGVMRUNNING        | Thresholds                                                                                         |                   |             |
| CRITICALVMRUNNING       | Thresholds                                                                                         |                   |             |
| WARNINGVMSTOPPED        | Thresholds                                                                                         |                   |             |
| CRITICALVMSTOPPED       | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Servers" label="Servers">

| Macro                   | Description                                                                                                                                                    | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME              | Filter servers by name (can be a regexp)                                                                                                                       |                   |             |
| WARNINGMEMORYUSAGE      | Thresholds                                                                                                                                                     |                   |             |
| CRITICALMEMORYUSAGE     | Thresholds                                                                                                                                                     |                   |             |
| WARNINGMEMORYUSAGEFREE  | Thresholds                                                                                                                                                     |                   |             |
| CRITICALMEMORYUSAGEFREE | Thresholds                                                                                                                                                     |                   |             |
| WARNINGMEMORYUSAGEPRCT  | Thresholds                                                                                                                                                     |                   |             |
| CRITICALMEMORYUSAGEPRCT | Thresholds                                                                                                                                                     |                   |             |
| WARNINGSERVERSRUNNING   | Thresholds                                                                                                                                                     |                   |             |
| CRITICALSERVERSRUNNING  | Thresholds                                                                                                                                                     |                   |             |
| WARNINGSERVERSSTOPPED   | Thresholds                                                                                                                                                     |                   |             |
| CRITICALSERVERSSTOPPED  | Thresholds                                                                                                                                                     |                   |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %{running\_status}, %{is\_maintenance}, %{up2date}, %{name}  |                   |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{running\_status}, %{is\_maintenance}, %{up2date}, %{name} |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                             | --verbose         |             |

</TabItem>
<TabItem value="Vm" label="Vm">

| Macro             | Description                                                                                                                    | Default value     | Mandatory   |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME        | Filter virtual machines by name (can be a regexp)                                                                              |                   |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{running\_status}, %{name}  |                   |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{running\_status}, %{name} |                   |             |
| WARNINGVMRUNNING  | Thresholds                                                                                                                     |                   |             |
| CRITICALVMRUNNING | Thresholds                                                                                                                     |                   |             |
| WARNINGVMSTOPPED  | Thresholds                                                                                                                     |                   |             |
| CRITICALVMSTOPPED | Thresholds                                                                                                                     |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                             | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl \
	--plugin=apps::oracle::ovm::api::plugin \
	--mode=servers \
	--hostname='10.0.0.1' \
	--api-username='username' \
	--api-password='password' \
	--custommode='rest' \
	--port='7002' \
	--proto='https'  \
	--filter-name='' \
	--warning-servers-running='' \
	--critical-servers-running='' \
	--warning-servers-stopped='' \
	--critical-servers-stopped='' \
	--warning-status='' \
	--critical-status='' \
	--warning-memory-usage='' \
	--critical-memory-usage='' \
	--warning-memory-usage-free='' \
	--critical-memory-usage-free='' \
	--warning-memory-usage-prct='' \
	--critical-memory-usage-prct='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: running: 66 stopped: 23 All servers are ok | 'servers.running.count'=66;;;0;total'servers.stopped.count'=23;;;0;total'*servers*#status'=;;;;'*servers*#server.memory.usage.bytes'=B;;;0;total_memory'*servers*#server.memory.free.bytes'=B;;;0;total_memory'*servers*#server.memory.usage.percentage'=%;;;0;100
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
/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl \
	--plugin=apps::oracle::ovm::api::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                         | Linked service template                     |
|:-----------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/oracle/ovm/api/mode/discovery.pm)]      | Not used in this Monitoring Connector       |
| file-servers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/oracle/ovm/api/mode/fileservers.pm)] | App-Oracle-Ovm-File-Servers-Api-custom      |
| manager [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/oracle/ovm/api/mode/manager.pm)]          | App-Oracle-Ovm-Manager-Api-custom           |
| server-pools [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/oracle/ovm/api/mode/serverpools.pm)] | App-Oracle-Ovm-File-Server-Pools-Api-custom |
| servers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/oracle/ovm/api/mode/servers.pm)]          | App-Oracle-Ovm-Servers-Api-custom           |
| vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/oracle/ovm/api/mode/vm.pm)]                    | App-Oracle-Ovm-Vm-Api-custom                |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Oracle OVM Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     | Port used (default: 7002)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    | Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-username                             | API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-password                             | API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  | Set timeout in seconds (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="File-Servers" label="File-Servers">

| Option                   | Description                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^space-usage$'   |
| --filter-fileserver-name | Filter file servers by name (can be a regexp).                                                |
| --filter-filesystem-name | Filter file systems by name (can be a regexp).                                                |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B), 'space-usage-free' (B), 'space-usage-prct' (%).        |

</TabItem>
<TabItem value="Manager" label="Manager">

| Option                   | Description                                                                                                                                                  |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                         |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                                         |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                         |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /running/i'). You can use the following variables: %{status}, %{name}   |
| --warning-* --critical-* | Thresholds. Can be: 'jobs-succeeded', 'jobs-failed'.                                                                                                         |

</TabItem>
<TabItem value="Server-Pools" label="Server-Pools">

| Option                    | Description                                                                                                                                                    |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters         | Only display some counters (regexp can be used). Example: --filter-counters='^memory-usage$'                                                                   |
| --filter-server-pool-name | Filter server pools by name (can be a regexp).                                                                                                                 |
| --warning-* --critical-*  | Thresholds. Can be: 'servers-running', 'servers-stopped', 'vm-running', 'vm-stopped', 'memory-usage' (B), 'memory-usage-free' (B), 'memory-usage-prct' (%).    |

</TabItem>
<TabItem value="Servers" label="Servers">

| Option                   | Description                                                                                                                                                      |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^memory-usage$'                                                                     |
| --filter-name            | Filter servers by name (can be a regexp).                                                                                                                        |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{running\_status}, %{is\_maintenance}, %{up2date}, %{name}    |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{running\_status}, %{is\_maintenance}, %{up2date}, %{name}    |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{running\_status}, %{is\_maintenance}, %{up2date}, %{name}   |
| --warning-* --critical-* | Thresholds. Can be: 'servers-running', 'servers-stopped', 'memory-usage' (B), 'memory-usage-free' (B), 'memory-usage-prct' (%).                                  |

</TabItem>
<TabItem value="Vm" label="Vm">

| Option                   | Description                                                                                                                      |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='status'                                             |
| --filter-name            | Filter virtual machines by name (can be a regexp).                                                                               |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{running\_status}, %{name}    |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{running\_status}, %{name}    |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{running\_status}, %{name}   |
| --warning-* --critical-* | Thresholds. Can be: 'vm-running', 'vm-stopped'.                                                                                  |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl \
	--plugin=apps::oracle::ovm::api::plugin \
	--mode=servers \
	--help
```
