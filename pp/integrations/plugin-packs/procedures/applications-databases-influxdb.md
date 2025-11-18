---
id: applications-databases-influxdb
title: InfluxDB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **InfluxDB** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **InfluxDB** brings a host template:

* **App-DB-Influxdb-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-DB-Influxdb-custom" label="App-DB-Influxdb-custom">

| Service Alias          | Service Template                              | Service Description            | Discovery |
|:-----------------------|:----------------------------------------------|:-------------------------------|:---------:|
| Connection-Time        | App-DB-Influxdb-Connection-Time-custom        | Check instance connection time |           |
| Database-Statistics    | App-DB-Influxdb-Database-Statistics-custom    | Check databases statistics     | X         |
| Http-Server-Statistics | App-DB-Influxdb-Http-Server-Statistics-custom | Check HTTP server statistics   |           |
| Write-Statistics       | App-DB-Influxdb-Write-Statistics-custom       | Check writes statistics        |           |

> The services listed above are created automatically when the **App-DB-Influxdb-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template             | Service Description                                                    |
|:--------------|:-----------------------------|:-----------------------------------------------------------------------|
| Query         | App-DB-Influxdb-Query-custom | Check allowing to execute queries and use results to define thresholds |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                           | Description                                        |
|:------------------------------------|:---------------------------------------------------|
| App-DB-Influxdb-Database-Statistics | Discover the databases to monitor their statistics |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Connection-Time" label="Connection-Time">

| Name                         | Unit |
|:-----------------------------|:-----|
| connection.time.milliseconds | ms   |

</TabItem>
<TabItem value="Database-Statistics" label="Database-Statistics">

| Name                                    | Unit  |
|:----------------------------------------|:------|
| *databases*#database.measurements.count | count |
| *databases*#database.series.count       | count |

</TabItem>
<TabItem value="Http-Server-Statistics" label="Http-Server-Statistics">

| Name                         | Unit  |
|:-----------------------------|:------|
| requests-query-count         | N/A   |
| requests-write-count         | N/A   |
| requests-ping-count          | N/A   |
| requests-status-count        | N/A   |
| requests.active.count        | count |
| requests.write.active.count  | count |
| requests.response.data.bytes | B/s   |
| requests.write.data.bytes    | B/s   |
| errors-server                | N/A   |
| errors-client                | N/A   |

</TabItem>
<TabItem value="Query" label="Query">

| Name   | Unit |
|:-------|:-----|
| status | N/A  |

</TabItem>
<TabItem value="Write-Statistics" label="Write-Statistics">

| Name           | Unit |
|:---------------|:-----|
| points-written | N/A  |
| writes-ok      | N/A  |
| writes-error   | N/A  |
| writes-drop    | N/A  |
| writes-timeout | N/A  |

</TabItem>
</Tabs>

## Prerequisites

To acces the data of an InfluxDB database, one generally needs a login/password or a token.

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
dnf install centreon-pack-applications-databases-influxdb
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-influxdb
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-influxdb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-influxdb
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **InfluxDB** connector through
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
dnf install centreon-plugin-Applications-Databases-Influxdb
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Influxdb
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-influxdb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Influxdb
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-DB-Influxdb-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                                                                                                                        | Default value | Mandatory |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| INFLUXDBUSERNAME     | Specify the username for authentication                                                                                                            |               |           |
| INFLUXDBPASSWORD     | Specify the password for authentication                                                                                                            |               |           |
| INFLUXDBPROTO        | Specify https if needed                                                                                                                            | http          |           |
| INFLUXDBPORT         | Port used                                                                                                                                          | 8086          |           |
| INFLUXDBEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Connection-Time" label="Connection-Time">

| Macro                  | Description                                                                                                                                      | Default value | Mandatory |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGCONNECTIONTIME  | Warning threshold in milliseconds                                                                                                                |               |           |
| CRITICALCONNECTIONTIME | Critical threshold in milliseconds                                                                                                               |               |           |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Database-Statistics" label="Database-Statistics">

| Macro                | Description                                                                                                                                      | Default value | Mandatory |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| FILTERDATABASE       | Filter database name (can use regexp)                                                                                                            |               |           |
| WARNINGMEASUREMENTS  | Threshold                                                                                                                                        |               |           |
| CRITICALMEASUREMENTS | Threshold                                                                                                                                        |               |           |
| WARNINGSERIES        | Threshold                                                                                                                                        |               |           |
| CRITICALSERIES       | Threshold                                                                                                                                        |               |           |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Http-Server-Statistics" label="Http-Server-Statistics">

| Macro                        | Description                                                                                                                                      | Default value | Mandatory |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGERRORSCLIENT          | Threshold                                                                                                                                        |               |           |
| WARNINGERRORSSERVER          | Threshold                                                                                                                                        |               |           |
| CRITICALERRORSSERVER         | Threshold                                                                                                                                        |               |           |
| CRITICALERRRORSCLIENT        | Threshold                                                                                                                                        |               |           |
| WARNINGREQUESTSACTIVE        | Threshold                                                                                                                                        |               |           |
| CRITICALREQUESTSACTIVE       | Threshold                                                                                                                                        |               |           |
| WARNINGREQUESTSPINGCOUNT     | Threshold                                                                                                                                        |               |           |
| CRITICALREQUESTSPINGCOUNT    | Threshold                                                                                                                                        |               |           |
| WARNINGREQUESTSQUERYCOUNT    | Threshold                                                                                                                                        |               |           |
| CRITICALREQUESTSQUERYCOUNT   | Threshold                                                                                                                                        |               |           |
| WARNINGREQUESTSRESPONSEDATA  | Threshold                                                                                                                                        |               |           |
| CRITICALREQUESTSRESPONSEDATA | Threshold                                                                                                                                        |               |           |
| WARNINGREQUESTSSTATUSCOUNT   | Threshold                                                                                                                                        |               |           |
| CRITICALREQUESTSSTATUSCOUNT  | Threshold                                                                                                                                        |               |           |
| WARNINGREQUESTSWRITEACTIVE   | Threshold                                                                                                                                        |               |           |
| CRITICALREQUESTSWRITEACTIVE  | Threshold                                                                                                                                        |               |           |
| WARNINGREQUESTSWRITECOUNT    | Threshold                                                                                                                                        |               |           |
| CRITICALREQUESTSWRITECOUNT   | Threshold                                                                                                                                        |               |           |
| WARNINGREQUESTSWRITEDATA     | Threshold                                                                                                                                        |               |           |
| CRITICALREQUESTSWRITEDATA    | Threshold                                                                                                                                        |               |           |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Query" label="Query">

| Macro          | Description                                                                                                                                                                                                                                                                                                  | Default value | Mandatory |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| QUERIES        | Set a InfluxQL query. Query option must be like --query='label,query'.  Query must contain an "AS" keyword to rename the column of the selected data, and must match the label.  (example: --query='mymetric,SELECT the\_data AS "mymetric"  FROM "database"."retention"."measurement" GROUP BY "instance"') |               | X         |
| INSTANCE       | Set the instance label on which the results should be calculate for (example: --instance='name').  The instance label must be the same label as the "GROUP BY" keyword                                                                                                                                       |               | X         |
| OUTPUT         | Set the output for each instances (example: --output='Object %\{instance\} value is \{label\}')                                                                                                                                                                                                              |               | X         |
| MULTIPLEOUTPUT | Set the global output in case everything is fine for multiple instances (example: --multiple-output='All instance values are ok')                                                                                                                                                                            |               |           |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING.  Can use special variables like %\{instance\} and any other labels you set through --query                                                                                                                                                      |               |           |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL.  Can use special variables like %\{instance\} and any other labels you set through --query                                                                                                                                                     |               |           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                       |               |           |

</TabItem>
<TabItem value="Write-Statistics" label="Write-Statistics">

| Macro                 | Description                                                                                                                                      | Default value | Mandatory |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGPOINTSWRITTEN  | Threshold                                                                                                                                        |               |           |
| CRITICALPOINTSWRITTEN | Threshold                                                                                                                                        |               |           |
| WARNINGWRITESDROP     | Threshold                                                                                                                                        |               |           |
| CRITICALWRITESDROP    | Threshold                                                                                                                                        |               |           |
| WARNINGWRITESERROR    | Threshold                                                                                                                                        |               |           |
| CRITICALWRITESERROR   | Threshold                                                                                                                                        |               |           |
| WARNINGWRITESOK       | Threshold                                                                                                                                        |               |           |
| CRITICALWRITESOK      | Threshold                                                                                                                                        |               |           |
| WARNINGWRITESTIMEOUT  | Threshold                                                                                                                                        |               |           |
| CRITICALWRITESTIMEOUT | Threshold                                                                                                                                        |               |           |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_influxdb.pl \
	--plugin=database::influxdb::plugin \
	--mode=write-statistics \
	--hostname=10.0.0.1 \
	--port=8086 \
	--proto=http \
	--username='username' \
	--password='password'  \
	--warning-points-written='' \
	--critical-points-written='' \
	--warning-writes-ok='' \
	--critical-writes-ok='' \
	--warning-writes-error='' \
	--critical-writes-error='' \
	--warning-writes-drop='' \
	--critical-writes-drop='' \
	--warning-writes-timeout='' \
	--critical-writes-timeout='' 
```

The expected command output is shown below:

```bash
OK: 
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
/usr/lib/centreon/plugins/centreon_influxdb.pl \
	--plugin=database::influxdb::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                          | Linked service template                       |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/influxdb/mode/connectiontime.pm)]              | App-DB-Influxdb-Connection-Time-custom        |
| database-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/influxdb/mode/databasestatistics.pm)]      | App-DB-Influxdb-Database-Statistics-custom    |
| http-server-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/influxdb/mode/httpserverstatistics.pm)] | App-DB-Influxdb-Http-Server-Statistics-custom |
| list-databases [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/influxdb/mode/listdatabases.pm)]                | Used for service discovery                    |
| query [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/influxdb/mode/query.pm)]                                 | App-DB-Influxdb-Query-custom                  |
| write-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/influxdb/mode/writestatistics.pm)]            | App-DB-Influxdb-Write-Statistics-custom       |

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
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
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
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --hostname                                 | Remote hostname or IP address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --port                                     | Port used (default: 8086)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --proto                                    | Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --username                                 | Specify the username for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --password                                 | Specify the password for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --timeout                                  | Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --unknown-http-status                      | Threshold unknown for http response code. (default: '%\{http\_code\} \< 200 or %\{http\_code\} \>= 300')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --warning-http-status                      | Warning threshold for http response code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --critical-http-status                     | Critical threshold for http response code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Connection-Time" label="Connection-Time">

| Option                     | Description                         |
|:---------------------------|:------------------------------------|
| --warning-connection-time  | Warning threshold in milliseconds.  |
| --critical-connection-time | Critical threshold in milliseconds. |

</TabItem>
<TabItem value="Database-Statistics" label="Database-Statistics">

| Option            | Description                                          |
|:------------------|:-----------------------------------------------------|
| --filter-database | Filter database name (can use regexp).               |
| --warning-*       | Warning threshold. Can be: 'measurements', 'series'. |
| --critical-*      | Warning threshold. Can be: 'measurements', 'series'. |

</TabItem>
<TabItem value="Http-Server-Statistics" label="Http-Server-Statistics">

| Option       | Description                                                                                                                                                                                                                                                 |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-*  | Warning threshold. Can be: 'requests-query-count', 'requests-write-count', 'requests-ping-count', 'requests-status-count', 'requests-active', 'requests-write-active', 'requests-response-data', 'requests-write-data',  'errors-server', 'errors-client'.  |
| --critical-* | Critical threshold. Can be: 'requests-query-count', 'requests-write-count', 'requests-ping-count', 'requests-status-count', 'requests-active', 'requests-write-active', 'requests-response-data', 'requests-write-data',  'errors-server', 'errors-client'. |

</TabItem>
<TabItem value="Query" label="Query">

| Option            | Description                                                                                                                                                                                                                                                                                                  |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --query           | Set a InfluxQL query. Query option must be like --query='label,query'.  Query must contain an "AS" keyword to rename the column of the selected data, and must match the label.  (example: --query='mymetric,SELECT the\_data AS "mymetric"  FROM "database"."retention"."measurement" GROUP BY "instance"') |
| --instance        | Set the instance label on which the results should be calculate for (example: --instance='name').  The instance label must be the same label as the "GROUP BY" keyword.                                                                                                                                      |
| --output          | Set the output for each instances (example: --output='Object %\{instance\} value is \{label\}').                                                                                                                                                                                                             |
| --multiple-output | Set the global output in case everything is fine for multiple instances (example: --multiple-output='All instance values are ok').                                                                                                                                                                           |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '').  Can use special variables like %\{instance\} and any other labels you set through --query.                                                                                                                                       |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '').  Can use special variables like %\{instance\} and any other labels you set through --query.                                                                                                                                      |
| --aggregation     | Set the aggregation on metric values (can be: 'average', 'min', 'max', 'sum') (default: 'average').                                                                                                                                                                                                          |

</TabItem>
<TabItem value="Write-Statistics" label="Write-Statistics">

| Option       | Description                                                                                                 |
|:-------------|:------------------------------------------------------------------------------------------------------------|
| --warning-*  | Warning threshold. Can be: 'points-written', 'writes-ok', 'writes-error', 'writes-drop', 'writes-timeout'.  |
| --critical-* | Critical threshold. Can be: 'points-written', 'writes-ok', 'writes-error', 'writes-drop', 'writes-timeout'. |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_influxdb.pl \
	--plugin=database::influxdb::plugin \
	--mode=write-statistics \
	--help
```
