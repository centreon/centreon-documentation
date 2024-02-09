---
id: cloud-azure-database-sqldatabase
title: Azure SQL Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Azure SQL Database** brings a host template:

* **Cloud-Azure-Database-SqlDatabase-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Database-SqlDatabase-custom" label="Cloud-Azure-Database-SqlDatabase-custom">

| Service Alias | Service Template                               | Service Description                               |
|:--------------|:-----------------------------------------------|:--------------------------------------------------|
| Cpu           | Cloud-Azure-Database-SqlDatabase-Cpu-custom    | Check Azure Database for Sqldatabase CPU usage    |
| Health        | Cloud-Azure-Database-SqlDatabase-Health-custom | Check database state                              |
| Memory        | Cloud-Azure-Database-SqlDatabase-Memory-custom | Check Azure Database for SqlDatabase memory usage |

> The services listed above are created automatically when the **Cloud-Azure-Database-SqlDatabase-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                                      | Service Description               |
|:--------------|:------------------------------------------------------|:----------------------------------|
| App-Resources | Cloud-Azure-Database-SqlDatabase-App-Resources-custom | Check App CPU and memory metrics  |
| Connections   | Cloud-Azure-Database-SqlDatabase-Connections-custom   | Check the number of connections   |
| Deadlocks     | Cloud-Azure-Database-SqlDatabase-Deadlocks-custom     | Check database for deadlocks      |
| Sessions      | Cloud-Azure-Database-SqlDatabase-Sessions-custom      | Check sessions usage              |
| Storage       | Cloud-Azure-Database-SqlDatabase-Storage-custom       | Check database size               |
| Workers       | Cloud-Azure-Database-SqlDatabase-Workers-custom       | Check the number of workers       |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

The Centreon Monitoring Connector **Azure SQL Database** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the list of monitored hosts. This provider is named **Microsoft Azure SQL Database**.

> This discovery feature is only compatible with the [**api** custom mode. **azcli** is not supported](../getting-started/how-to-guides/azure-credential-configuration.md).

Go to the corresponding chapter to learn more about [discovering hosts automatically](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="App-Resources" label="App-Resources">

| Metric name                                  | Unit  |
|:---------------------------------------------|:------|
| sqldatabase.serverless.app.cpu.percentage    | %     |
| sqldatabase.serverless.app.memory.percentage | %     |

</TabItem>
<TabItem value="Connections" label="Connections">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| sqldatabase.connection.blocked.count    | count |
| sqldatabase.connection.failed.count     | count |
| sqldatabase.connection.successful.count | count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| sqldatabase.cpu.usage.percentage | %     |

</TabItem>
<TabItem value="Deadlocks" label="Deadlocks">

| Metric name                 | Unit  |
|:----------------------------|:------|
| sqldatabase.deadlocks.count | count |

</TabItem>
<TabItem value="Health" label="Health">

| Metric name | Unit  |
|:------------|:------|
| status      | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| sqldatabase.memory.usage.percentage | %     |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Metric name                | Unit  |
|:---------------------------|:------|
| sqldatabase.sessions.count | count |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| sqldatabase.storage.space.usage.bytes      | B     |
| sqldatabase.storage.space.usage.percentage | %     |

</TabItem>
<TabItem value="Workers" label="Workers">

| Metric name               | Unit  |
|:--------------------------|:------|
| sqldatabase.workers.count | count |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure
on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

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
dnf install centreon-pack-cloud-azure-database-sqldatabase
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-database-sqldatabase
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-azure-database-sqldatabase
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-database-sqldatabase
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Azure SQL Database** connector through
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
dnf install centreon-plugin-Cloud-Azure-Database-SqlDatabase-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-Database-SqlDatabase-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-azure-database-sqldatabase-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Database-SqlDatabase-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
3. Apply the **Cloud-Azure-Database-SqlDatabase-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory. For example, for this connector, you must define the **AZURECUSTOMMODE** macros (possible values are **api** or **azcli**). Indeed, 2 modes of communication can be used with this resource: either using the command tool azcli, or by querying the API directly.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Macro              | Description                                                                                                   | Default value     | Mandatory   |
|:-------------------|:--------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID                                                                                           |                   | X           |
| AZURECLIENTSECRET  | Set Azure client secret                                                                                       |                   | X           |
| AZURECUSTOMMODE    | When a plugin offers several ways  to get the an information the desired one must be defined with this option | api               |             |
| AZURERESOURCE      | Set resource name or id . It is the database name                                                             |                   |             |
| AZURERESOURCEGROUP | Set resource group                                                                                            |                   |             |
| AZURESQLSERVERNAME | Set server name                                                                                               |                   |             |
| AZURESUBSCRIPTION  | Set Azure subscription                                                                                        |                   | X           |
| AZURETENANT        | Set Azure tenant ID                                                                                           |                   | X           |
| PROXYURL           | Proxy URL if any                                                                                              |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)         |                   |             |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Macro              | Description                                                                                                   | Default value     | Mandatory   |
|:-------------------|:--------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AZURECUSTOMMODE    | When a plugin offers several ways  to get the an information the desired one must be defined with this option | api               |             |
| AZURERESOURCE      | Set resource name or ID . It is the database name                                                             |                   |             |
| AZURERESOURCEGROUP | Set resource group                                                                                            |                   |             |
| AZURESQLSERVERNAME | Set server name                                                                                               |                   |             |
| AZURESUBSCRIPTION  | Set Azure subscription                                                                                        |                   | X           |
| PROXYURL           | Proxy URL if any                                                                                              |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)         |                   |             |

</TabItem>
</Tabs>

> Two methods can be used to define the authentication:
>
> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`) in the **AZURERESOURCE** macro.
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="App-Resources" label="App-Resources">

| Macro             | Description                                                                                         | Default value     | Mandatory   |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAPPCPU     | Warning threshold for app-cpu                                                                       |                   |             |
| CRITICALAPPCPU    | Critical threshold for app-cpu                                                                      |                   |             |
| WARNINGAPPMEMORY  | Warning threshold for app-memory                                                                    |                   |             |
| CRITICALAPPMEMORY | Critical threshold for app-memory                                                                   |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Connections" label="Connections">

| Macro                        | Description                                                                                         | Default value     | Mandatory   |
|:-----------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONNECTIONBLOCKED     |                                                                                                     |                   |             |
| CRITICALCONNECTIONBLOCKED    |                                                                                                     |                   |             |
| WARNINGCONNECTIONFAILED      | Warning threshold for connection-failed                                                             |                   |             |
| CRITICALCONNECTIONFAILED     | Critical threshold for connection-failed                                                            |                   |             |
| WARNINGCONNECTIONSUCCESSFUL  | Warning threshold for connection-successful                                                         |                   |             |
| CRITICALCONNECTIONSUCCESSFUL | Critical threshold for connection-successful                                                        |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro                | Description                                                                                         | Default value     | Mandatory   |
|:---------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME            |                                                                                                     | 900               |             |
| INTERVAL             |                                                                                                     | PT5M              |             |
| AGGREGATION          |                                                                                                     | Total             |             |
| FILTERMETRIC         |                                                                                                     |                   |             |
| WARNINGUSAGEPERCENT  | Thresholds for usage-percent                                                                        |                   |             |
| CRITICALUSAGEPERCENT | Thresholds for usage-percent                                                                        |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Deadlocks" label="Deadlocks">

| Macro             | Description                                                                                         | Default value     | Mandatory   |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGDEADLOCKS  | Warning threshold                                                                                   |                   |             |
| CRITICALDEADLOCKS | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Health" label="Health">

| Macro          | Description                                                                                                                              | Default value                | Mandatory   |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| STATUSOK       | Set ok threshold for status (Default: '%{status} =~ /^Available$/').  You can use the following variables: %{status}, %{summary}         | %{status} =~ /^Available$/   |             |
| STATUSUNKNOWN  | Set unknown threshold for status (Default: '%{status} =~ /^Unknown$/').  You can use the following variables: %{status}, %{summary}      |                              |             |
| STATUSCRITICAL | Set critical threshold for status (Default: '%{status} =~ /^Unavailable$/').  You can use the following variables: %{status}, %{summary} | %{status} =~ /^Unavailable$/ |             |
| STATUSWARNING  | Set warning threshold for status (Default: '').  You can use the following variables: %{status}, %{summary}                              |                              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                      |                              |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                | Description                                                                                         | Default value     | Mandatory   |
|:---------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME            |                                                                                                     | 900               |             |
| INTERVAL             |                                                                                                     | PT5M              |             |
| AGGREGATION          |                                                                                                     | Total             |             |
| FILTERMETRIC         |                                                                                                     |                   |             |
| WARNINGUSAGEPERCENT  | Thresholds where '*'                                                                                |                   |             |
| CRITICALUSAGEPERCENT | Thresholds where '*'                                                                                |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro            | Description                                                                                         | Default value     | Mandatory   |
|:-----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSESSIONS  | Warning threshold                                                                                   |                   |             |
| CRITICALSESSIONS | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro                | Description                                                                                         | Default value     | Mandatory   |
|:---------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGEBYTES    | Warning threshold for usage-bytes                                                                   |                   |             |
| CRITICALUSAGEBYTES   | Critical threshold for usage-bytes                                                                  |                   |             |
| WARNINGUSAGEPERCENT  | Warning threshold for usage-percent                                                                 |                   |             |
| CRITICALUSAGEPERCENT | Critical threshold for usage-percent                                                                |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Workers" label="Workers">

| Macro           | Description                                                                                         | Default value     | Mandatory   |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGWORKERS  | Warning threshold                                                                                   |                   |             |
| CRITICALWORKERS | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor an Azure Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_azure_database_sqldatabase_api.pl \
	--plugin=cloud::azure::database::sqldatabase::plugin \
	--mode=app-resources \
	--custommode='api' \
	--resource='SQLDB001A' \
	--resource-group='RSG1234' \
	--subscription='xxxxxxxxx' \
	--tenant='xxxxxxxxx' \
	--client-id='xxxxxxxxx' \
	--client-secret='xxxxxxxxx' \
	--proxyurl=''  \
	--warning-app-memory='' \
	--critical-app-memory='' \
	--warning-app-cpu='' \
	--critical-app-cpu='' \
	
```

The expected command output is shown below:

```bash
OK: App CPU percent  App Memory percent | 'sqldatabase.serverless.app.cpu.percentage'=28%;;;0; 'sqldatabase.serverless.app.memory.percentage'=1%;;;0;  
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_database_sqldatabase_api.pl \
	--plugin=cloud::azure::database::sqldatabase::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode          | Linked service template                               |
|:--------------|:------------------------------------------------------|
| app-resources | Cloud-Azure-Database-SqlDatabase-App-Resources-custom |
| connections   | Cloud-Azure-Database-SqlDatabase-Connections-custom   |
| cpu           | Cloud-Azure-Database-SqlDatabase-Cpu-custom           |
| deadlocks     | Cloud-Azure-Database-SqlDatabase-Deadlocks-custom     |
| discovery     | Used for host discovery                               |
| health        | Cloud-Azure-Database-SqlDatabase-Health-custom        |
| memory        | Cloud-Azure-Database-SqlDatabase-Memory-custom        |
| sessions      | Cloud-Azure-Database-SqlDatabase-Sessions-custom      |
| storage       | Cloud-Azure-Database-SqlDatabase-Storage-custom       |
| workers       | Cloud-Azure-Database-SqlDatabase-Workers-custom       |

### Available custom modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_database_sqldatabase_api.pl \
	--plugin=cloud::azure::database::sqldatabase::plugin \
    --list-custommode
```

The plugin brings the following custom modes:

* api
* azcli

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get the an information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Global |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Microsoft Azure CLI 2.0      To install the Azure CLI 2.0 in a CentOS/RedHat environment :      (As root)      # rpm --import https://packages.microsoft.com/keys/microsoft.asc      # sh -c 'echo -e "\[azure-cli\]\nname=Azure     CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=     1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc"     \> /etc/yum.repos.d/azure-cli.repo'      # yum install azure-cli      (As centreon-engine)      # az login      Go to https://aka.ms/devicelogin and enter the code given by the last     command.      For futher informations, visit     https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-     cli-latest.                                                                                                                   | Output |

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="api" label="api">

| Option                 | Description                                                                                                                                                                                                                                   | Type         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --subscription         | Set Azure subscription ID.                                                                                                                                                                                                                    | Api          |
| --tenant               | Set Azure tenant ID.                                                                                                                                                                                                                          | Api          |
| --client-id            | Set Azure client ID.                                                                                                                                                                                                                          | Api          |
| --client-secret        | Set Azure client secret.                                                                                                                                                                                                                      | Api          |
| --login-endpoint       | Set Azure login endpoint URL (Default: 'https://login.microsoftonline.com')                                                                                                                                                                   | Api          |
| --management-endpoint  | Set Azure management endpoint URL (Default: 'https://management.azure.com')                                                                                                                                                                   | Api          |
| --timeframe            | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                      | Api          |
| --interval             | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                                                                                                               | Api          |
| --aggregation          | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                                                       | Api          |
| --zeroed               | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                                                                                                           | Api          |
| --timeout              | Set timeout in seconds (Default: 10).                                                                                                                                                                                                         | Api          |
| --http-peer-addr       | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                           | Http global  |
| --proxyurl             | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                           | Http global  |
| --proxypac             | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                | Http global  |
| --insecure             | Accept insecure SSL connections.                                                                                                                                                                                                              | Http global  |
| --http-backend         | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                       | Http global  |
| --ssl-opt              | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                     | Backend lwp  |
| --curl-opt             | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                              | Backend curl |
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention    |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention    |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     | Retention    |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention    |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention    |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention    |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention    |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention    |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention    |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention    |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention    |
| --filter-dimension     | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                                                                                                          | Custom mode  |
| --per-sec              | Display the statistics based on a per-second period.                                                                                                                                                                                          | Custom mode  |

</TabItem>
<TabItem value="azcli" label="azcli">

| Option             | Description                                                                                                                            | Type        |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --subscription     | Set Azure subscription (Required if logged to several subscriptions).                                                                  | Azcli       |
| --timeframe        | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                               | Azcli       |
| --interval         | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                        | Azcli       |
| --aggregation      | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                | Azcli       |
| --zeroed           | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                    | Azcli       |
| --timeout          | Set timeout in seconds (Default: 50).                                                                                                  | Azcli       |
| --sudo             | Use 'sudo' to execute the command.                                                                                                     | Azcli       |
| --command          | Command to get information (Default: 'az'). Can be changed if you have output in a file.                                               | Azcli       |
| --command-path     | Command path (Default: none).                                                                                                          | Azcli       |
| --command-options  | Command options (Default: none).                                                                                                       | Azcli       |
| --proxyurl         | Proxy URL if any                                                                                                                       | Azcli       |
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   | Custom mode |
| --per-sec          | Display the statistics based on a per-second period.                                                                                   | Custom mode |

</TabItem>
</Tabs>

#### Modes options

All modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="App-Resources" label="App-Resources">

| Option           | Description                                                      | Type |
|:-----------------|:-----------------------------------------------------------------|:-----|
| --resource       | Set resource name or id (Required). It is the database name.     | Mode |
| --resource-group | Set resource group (Required if resource's name is used).        | Mode |
| --server         | Set server name (Required if resource's name is used).           | Mode |
| --warning-*      | Warning threshold where '*' can be: 'app-cpu', 'app-memory'.     | Mode |
| --critical-*     | Critical threshold where '*' can be: 'app-cpu', 'app-memory'.    | Mode |

</TabItem>
<TabItem value="Connections" label="Connections">

| Option           | Description                                                                           | Type |
|:-----------------|:--------------------------------------------------------------------------------------|:-----|
| --resource       | Set resource name or id (Required). It is the database name.                          | Mode |
| --resource-group | Set resource group (Required if resource's name is used).                             | Mode |
| --server         | Set server name (Required if resource's name is used).                                | Mode |
| --warning-*      | Warning threshold where '*' can be: 'connection-failed', 'connection-successful'.     | Mode |
| --critical-*     | Critical threshold where '*' can be: 'connection-failed', 'connection-successful'.    | Mode |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                                    | Type |
|:-------------------------|:---------------------------------------------------------------|:-----|
| --resource               | Set resource name or id (Required). It is the database name.   | Mode |
| --resource-group         | Set resource group (Required if resource's name is used).      | Mode |
| --server                 | Set server name (Required if resource's name is used).         | Mode |
| --warning-* --critical-* | Thresholds where '*' can be: 'usage-percent'.                  | Mode |

</TabItem>
<TabItem value="Deadlocks" label="Deadlocks">

| Option               | Description                                                    | Type |
|:---------------------|:---------------------------------------------------------------|:-----|
| --resource           | Set resource name or id (Required). It is the database name.   | Mode |
| --resource-group     | Set resource group (Required if resource's name is used).      | Mode |
| --server             | Set server name (Required if resource's name is used).         | Mode |
| --warning-deadlocks  | Warning threshold.                                             | Mode |
| --critical-deadlocks | Critical threshold.                                            | Mode |

</TabItem>
<TabItem value="Health" label="Health">

| Option            | Description                                                                                                                                | Type |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --resource        | Set resource name or id (Required).                                                                                                        | Mode |
| --resource-group  | Set resource group (Required if resource's name is used).                                                                                  | Mode |
| --warning-status  | Set warning threshold for status (Default: '').  You can use the following variables: %{status}, %{summary}                                | Mode |
| --critical-status | Set critical threshold for status (Default: '%{status} =~ /^Unavailable$/').  You can use the following variables: %{status}, %{summary}   | Mode |
| --unknown-status  | Set unknown threshold for status (Default: '%{status} =~ /^Unknown$/').  You can use the following variables: %{status}, %{summary}        | Mode |
| --ok-status       | Set ok threshold for status (Default: '%{status} =~ /^Available$/').  You can use the following variables: %{status}, %{summary}           | Mode |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                    | Type |
|:-------------------------|:---------------------------------------------------------------|:-----|
| --resource               | Set resource name or id (Required). It is the database name.   | Mode |
| --resource-group         | Set resource group (Required if resource's name is used).      | Mode |
| --server                 | Set server name (Required if resource's name is used).         | Mode |
| --warning-* --critical-* | Thresholds where '*' can be: 'usage-percent'.                  | Mode |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option              | Description                                                    | Type |
|:--------------------|:---------------------------------------------------------------|:-----|
| --resource          | Set resource name or id (Required). It is the database name.   | Mode |
| --resource-group    | Set resource group (Required if resource's name is used).      | Mode |
| --server            | Set server name (Required if resource's name is used).         | Mode |
| --warning-sessions  | Warning threshold.                                             | Mode |
| --critical-sessions | Critical threshold.                                            | Mode |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option           | Description                                                            | Type |
|:-----------------|:-----------------------------------------------------------------------|:-----|
| --resource       | Set resource name or id (Required). It is the database name.           | Mode |
| --resource-group | Set resource group (Required if resource's name is used).              | Mode |
| --server         | Set server name (Required if resource's name is used).                 | Mode |
| --warning-*      | Warning threshold where '*' can be: 'usage-bytes','usage-percent'.     | Mode |
| --critical-*     | Critical threshold where '*' can be: 'usage-bytes','usage-percent'.    | Mode |

</TabItem>
<TabItem value="Workers" label="Workers">

| Option             | Description                                                    | Type |
|:-------------------|:---------------------------------------------------------------|:-----|
| --resource         | Set resource name or id (Required). It is the database name.   | Mode |
| --resource-group   | Set resource group (Required if resource's name is used).      | Mode |
| --server           | Set server name (Required if resource's name is used).         | Mode |
| --warning-workers  | Warning threshold.                                             | Mode |
| --critical-workers | Critical threshold.                                            | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_database_sqldatabase_api.pl \
	--plugin=cloud::azure::database::sqldatabase::plugin \
	--mode=app-resources \
	--custommode='azcli \
    --help
```
