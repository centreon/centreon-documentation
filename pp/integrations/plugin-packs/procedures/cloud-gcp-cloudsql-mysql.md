---
id: cloud-gcp-cloudsql-mysql
slug: /cloud-gcp-cloudsql-mysql
title: Google CloudSQL MySQL
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Google CloudSQL MySQL** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Google CloudSQL MySQL** brings a host template:

* **Cloud-Gcp-CloudSQL-MySQL-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Gcp-CloudSQL-MySQL-custom" label="Cloud-Gcp-CloudSQL-MySQL-custom">

| Service Alias | Service Template                            | Service Description   |
|:--------------|:--------------------------------------------|:----------------------|
| Cpu           | Cloud-Gcp-CloudSQL-MySQL-Cpu-Api-custom     | Check CPU usage       |
| Innodb        | Cloud-Gcp-CloudSQL-MySQL-Innodb-Api-custom  | Check InnoDB metrics  |
| Network       | Cloud-Gcp-CloudSQL-MySQL-Network-Api-custom | Check network metrics |
| Queries       | Cloud-Gcp-CloudSQL-MySQL-Queries-Api-custom | Check queries         |
| Storage       | Cloud-Gcp-CloudSQL-MySQL-Storage-Api-custom | Check storage metrics |

> The services listed above are created automatically when the **Cloud-Gcp-CloudSQL-MySQL-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name             | Description                     |
|:----------------------|:--------------------------------|
| Google CloudSQL MySQL | Discover Google MySQL instances |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Name                                | Unit  |
|:------------------------------------|:------|
| database.cpu.utilization.percentage | %     |
| database.cpu.reserved_cores.count   | count |

</TabItem>
<TabItem value="Innodb" label="Innodb">

| Name                                      | Unit  |
|:------------------------------------------|:------|
| database.mysql.innodb.data_fsyncs.count   | count |
| database.mysql.innodb.os_log_fsyncs.count | count |
| database.mysql.innodb.pages_read.count    | count |
| database.mysql.innodb.pages_written.count | count |

</TabItem>
<TabItem value="Network" label="Network">

| Name                                   | Unit  |
|:---------------------------------------|:------|
| database.network.connections.count     | count |
| database.network.received.volume.bytes | B     |
| database.network.sent.volume.bytes     | B     |

</TabItem>
<TabItem value="Queries" label="Queries">

| Name                           | Unit  |
|:-------------------------------|:------|
| database.mysql.questions.count | count |
| database.mysql.queries.count   | count |

</TabItem>
<TabItem value="Storage" label="Storage">

| Name                                    | Unit  |
|:----------------------------------------|:------|
| database.space.usage.bytes              | B     |
| database.disk.read.io.operations.count  | count |
| database.disk.write.io.operations.count | count |

</TabItem>
</Tabs>

## Prerequisites

### Google Cloud Configuration

Configure a service account key (download its private key as a JSON file) for which the following privileges have to be granted:

| Google Scope                                     | Description                                                     |
| :----------------------------------------------- | :-------------------------------------------------------------- |
| https://www.googleapis.com/auth/cloud-platform   | View and manage your data across Google Cloud Platform services |

How to create a service account key: https://developers.google.com/identity/protocols/oauth2/service-account

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
dnf install centreon-pack-cloud-gcp-cloudsql-mysql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-gcp-cloudsql-mysql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-gcp-cloudsql-mysql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-gcp-cloudsql-mysql
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Google CloudSQL MySQL** connector through
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
dnf install centreon-plugin-Cloud-Gcp-CloudSQL-MySQL-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Gcp-CloudSQL-MySQL-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-gcp-cloudsql-mysql-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Gcp-CloudSQL-MySQL-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Gcp-CloudSQL-MySQL-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                                                                          | Default value                                  | Mandatory   |
|:---------------------|:-----------------------------------------------------------------------------------------------------|:-----------------------------------------------|:-----------:|
| GCPDIMENSIONNAME     | Set dimension name (default: 'resource.labels.database\_id'). Can be: 'resources.labels.region'      | resource.labels.database\_id                   |             |
| GCPDIMENSIONOPERATOR | Set dimension operator (default: 'equals'. Can also be: 'regexp', 'starts')                          | equals                                         |             |
| GCPDIMENSIONVALUE    | Set dimension value (required)                                                                       |                                                |             |
| GCPKEYFILEPATH       | Set GCP key file path                                                                                |                                                | X           |
| GCPSCOPEENDPOINT     | Set GCP scope endpoint URL (default: 'https://www.googleapis.com/auth/cloud-platform')               | https://www.googleapis.com/auth/cloud-platform |             |
| PROXYURL             | Proxy URL. Example: http://my.proxy:3128                                                             |                                                |             |
| GCPEXTRAOPTIONS      | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                                                |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro                 | Description                                                                                                                                        | Default value     | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME             | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| AGGREGATION           | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| FILTERMETRIC          | Filter metrics (can be: 'database/cpu/utilization', 'database/cpu/reserved\_cores') (can be a regexp)                                              |                   |             |
| WARNINGCORESRESERVED  | Threshold                                                                                                                                          |                   |             |
| CRITICALCORESRESERVED | Threshold                                                                                                                                          |                   |             |
| WARNINGUTILIZATION    | Threshold                                                                                                                                          |                   |             |
| CRITICALUTILIZATION   | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                 | --verbose         |             |

</TabItem>
<TabItem value="Innodb" label="Innodb">

| Macro                     | Description                                                                                                                                                                                             | Default value     | Mandatory   |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                                                                                 | 900               |             |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times                                                      | average           |             |
| FILTERMETRIC              | Filter metrics (can be: 'database/mysql/innodb\_data\_fsyncs', 'database/mysql/innodb\_os\_log\_fsyncs', 'database/mysql/innodb\_pages\_read', 'database/mysql/innodb\_pages\_write') (can be a regexp) |                   |             |
| WARNINGFSYNCCALLSLOGFILE  | Threshold                                                                                                                                                                                               |                   |             |
| CRITICALFSYNCCALLSLOGFILE | Threshold                                                                                                                                                                                               |                   |             |
| WARNINGFSYNCSCALLS        | Threshold                                                                                                                                                                                               |                   |             |
| CRITICALFSYNCSCALLS       | Threshold                                                                                                                                                                                               |                   |             |
| WARNINGPAGESREAD          | Threshold                                                                                                                                                                                               |                   |             |
| CRITICALPAGESREAD         | Threshold                                                                                                                                                                                               |                   |             |
| WARNINGPAGESWRITTEN       | Threshold                                                                                                                                                                                               |                   |             |
| CRITICALPAGESWRITTEN      | Threshold                                                                                                                                                                                               |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Network" label="Network">

| Macro                  | Description                                                                                                                                                 | Default value     | Mandatory   |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                                     | 900               |             |
| AGGREGATION            | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times          | average           |             |
| FILTERMETRIC           | Filter metrics (can be: 'database/network/received\_bytes\_count', 'database/network/sent\_bytes\_count', 'database/network/connections') (can be a regexp) |                   |             |
| WARNINGCONNECTIONS     | Threshold                                                                                                                                                   |                   |             |
| CRITICALCONNECTIONS    | Threshold                                                                                                                                                   |                   |             |
| WARNINGRECEIVEDVOLUME  | Threshold                                                                                                                                                   |                   |             |
| CRITICALRECEIVEDVOLUME | Threshold                                                                                                                                                   |                   |             |
| WARNINGSENTVOLUME      | Threshold                                                                                                                                                   |                   |             |
| CRITICALSENTVOLUME     | Threshold                                                                                                                                                   |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                          | --verbose         |             |

</TabItem>
<TabItem value="Queries" label="Queries">

| Macro             | Description                                                                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME         | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| AGGREGATION       | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| FILTERMETRIC      | Filter metrics (can be: 'database/mysql/questions', 'database/mysql/queries') (Can be a regexp)                                                    |                   |             |
| WARNINGQUERIES    | Threshold                                                                                                                                          |                   |             |
| CRITICALQUERIES   | Threshold                                                                                                                                          |                   |             |
| WARNINGQUESTIONS  | Threshold                                                                                                                                          |                   |             |
| CRITICALQUESTIONS | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                 | --verbose         |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro                   | Description                                                                                                                                        | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME               | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| AGGREGATION             | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| FILTERMETRIC            | Filter metrics (can be: 'database/disk/bytes\_used', 'database/disk/read\_ops\_count', 'databse/disk/write\_ops\_count') (can be a regexp)         |                   |             |
| WARNINGREADOPERATIONS   | Threshold                                                                                                                                          |                   |             |
| CRITICALREADOPERATIONS  | Threshold                                                                                                                                          |                   |             |
| WARNINGSPACEUSAGE       | Threshold                                                                                                                                          |                   |             |
| CRITICALSPACEUSAGE      | Threshold                                                                                                                                          |                   |             |
| WARNINGWRITEOPERATIONS  | Threshold                                                                                                                                          |                   |             |
| CRITICALWRITEOPERATIONS | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                 | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a GCP Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_gcp_cloudsql_mysql_api.pl \
	--plugin=cloud::google::gcp::cloudsql::mysql::plugin \
	--mode=storage \
	--proxyurl='' \
	--key-file='/var/lib/centreon-engine/centreon-dev-6e5531fc9e82.json' \
	--scope-endpoint='https://www.googleapis.com/auth/cloud-platform' \
	--dimension-name='resource.labels.database\_id' \
	--dimension-operator='equals' \
	--dimension-value=''  \
	--filter-metric='' \
	--timeframe='900' \
	--aggregation='average' \
	--warning-space-usage='' \
	--critical-space-usage='' \
	--warning-read-operations='' \
	--critical-read-operations='' \
	--warning-write-operations='' \
	--critical-write-operations='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: disk space usage: 4290 disk read IO operations: 73070 disk write IO operations: 18229 | 'database.space.usage.bytes'=4290B;;;; 'database.disk.read.io.operations.count'=73070;;;; 'database.disk.write.io.operations.count'=18229;;;; 
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
/usr/lib/centreon/plugins/centreon_gcp_cloudsql_mysql_api.pl \
	--plugin=cloud::google::gcp::cloudsql::mysql::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                | Linked service template                     |
|:------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/cloudsql/common/mode/cpu.pm)]            | Cloud-Gcp-CloudSQL-MySQL-Cpu-Api-custom     |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/cloudsql/mysql/mode/discovery.pm)] | Used for host discovery                     |
| innodb [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/cloudsql/mysql/mode/innodb.pm)]       | Cloud-Gcp-CloudSQL-MySQL-Innodb-Api-custom  |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/cloudsql/common/mode/network.pm)]    | Cloud-Gcp-CloudSQL-MySQL-Network-Api-custom |
| queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/cloudsql/mysql/mode/queries.pm)]     | Cloud-Gcp-CloudSQL-MySQL-Queries-Api-custom |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/cloudsql/common/mode/storage.pm)]    | Cloud-Gcp-CloudSQL-MySQL-Storage-Api-custom |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --memcached                                |   Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --redis-server                             |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --redis-attribute                          |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --redis-db                                 |   Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --failback-file                            |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --memexpiration                            |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-dir                            |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-suffix                         |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-concat-cwd                     |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --statefile-format                         |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --statefile-key                            |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-cipher                         |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --key-file                                 |   Set GCP key file path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --authorization-endpoint                   |   Set GCP authorization endpoint URL (default: 'https://www.googleapis.com/oauth2/v4/token')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --monitoring-endpoint                      |   Set GCP monitoring endpoint URL (default: 'https://monitoring.googleapis.com/v3')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --scope-endpoint                           |   Set GCP scope endpoint URL (default: 'https://www.googleapis.com/auth/cloud-platform')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --zeroed                                   |   Set metrics value to 0 if none. Useful when Stackdriver does not return value when not defined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                                                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                             |
| --dimension-name         |   Set dimension name (default: 'resource.labels.database\_id'). Can be: 'resources.labels.region'.                                                      |
| --dimension-operator     |   Set dimension operator (default: 'equals'. Can also be: 'regexp', 'starts').                                                                          |
| --dimension-value        |   Set dimension value (required).                                                                                                                       |
| --filter-metric          |   Filter metrics (can be: 'database/cpu/utilization', 'database/cpu/reserved\_cores') (can be a regexp).                                                |
| --timeframe              |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                              |
| --aggregation            |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.   |
| --warning-* --critical-* |   Thresholds (can be: 'utilization', 'cores-reserved').                                                                                                 |

</TabItem>
<TabItem value="Innodb" label="Innodb">

| Option                   | Description                                                                                                                                                                                                  |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --dimension-name         |   Set dimension name (default: 'resource.labels.database\_id'). Can be: 'resources.labels.region'.                                                                                                           |
| --dimension-operator     |   Set dimension operator (default: 'equals'. Can also be: 'regexp', 'starts').                                                                                                                               |
| --dimension-value        |   Set dimension value (required).                                                                                                                                                                            |
| --filter-metric          |   Filter metrics (can be: 'database/mysql/innodb\_data\_fsyncs', 'database/mysql/innodb\_os\_log\_fsyncs', 'database/mysql/innodb\_pages\_read', 'database/mysql/innodb\_pages\_write') (can be a regexp).   |
| --timeframe              |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                   |
| --aggregation            |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                        |
| --warning-* --critical-* |   Thresholds (can be: 'fsyncs-calls', 'fsync-calls-logfile', 'pages-read', 'pages-written').                                                                                                                 |
| --per-second             |   Change the data to be unit/sec.                                                                                                                                                                            |

</TabItem>
<TabItem value="Network" label="Network">

| Option                   | Description                                                                                                                                                      |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --dimension-name         |   Set dimension name (default: 'resource.labels.database\_id'). Can be: 'resources.labels.region'.                                                               |
| --dimension-operator     |   Set dimension operator (default: 'equals'. Can also be: 'regexp', 'starts').                                                                                   |
| --dimension-value        |   Set dimension value (required).                                                                                                                                |
| --filter-metric          |   Filter metrics (can be: 'database/network/received\_bytes\_count', 'database/network/sent\_bytes\_count', 'database/network/connections') (can be a regexp).   |
| --timeframe              |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                       |
| --aggregation            |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.            |
| --warning-* --critical-* |   Thresholds (can be: 'received-volume', 'sent-volume', 'connections').                                                                                          |
| --per-second             |   Change the data to be unit/sec.                                                                                                                                |

</TabItem>
<TabItem value="Queries" label="Queries">

| Option                   | Description                                                                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| --dimension-name         |   Set dimension name (default: 'resource.labels.database\_id'). Can be: 'resources.labels.region'.                                                      |
| --dimension-operator     |   Set dimension operator (default: 'equals'. Can also be: 'regexp', 'starts').                                                                          |
| --dimension-value        |   Set dimension value (required).                                                                                                                       |
| --filter-metric          |   Filter metrics (can be: 'database/mysql/questions', 'database/mysql/queries') (Can be a regexp).                                                      |
| --timeframe              |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                              |
| --aggregation            |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.   |
| --warning-* --critical-* |   Thresholds (can be: 'queries', 'questions').                                                                                                          |
| --per-second             |   Change the data to be unit/sec.                                                                                                                       |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option                   | Description                                                                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| --dimension-name         |   Set dimension name (default: 'resource.labels.database\_id'). Can be: 'resources.labels.region'.                                                      |
| --dimension-operator     |   Set dimension operator (default: 'equals'. Can also be: 'regexp', 'starts').                                                                          |
| --dimension-value        |   Set dimension value (required).                                                                                                                       |
| --filter-metric          |   Filter metrics (can be: 'database/disk/bytes\_used', 'database/disk/read\_ops\_count', 'databse/disk/write\_ops\_count') (can be a regexp).           |
| --timeframe              |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                              |
| --aggregation            |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.   |
| --warning-* --critical-* |   Thresholds (can be: 'space-usage', 'read-operations', 'write-operations').                                                                            |
| --per-second             |   Change the data to be unit/sec.                                                                                                                       |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_gcp_cloudsql_mysql_api.pl \
	--plugin=cloud::google::gcp::cloudsql::mysql::plugin \
	--mode=storage \
	--help
```
