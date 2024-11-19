---
id: applications-databases-elasticsearch
title: Elasticsearch
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Elasticsearch is a distributed, open source search and analytics engine for all types of data, including textual, numerical, geospatial, structured, and unstructured.

## Pack assets

### Templates

The Monitoring Connector **Elasticsearch** brings a host template:

* **App-DB-Elasticsearch-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-DB-Elasticsearch-custom" label="App-DB-Elasticsearch-custom">

| Service Alias      | Service Template                               | Service Description                                        | Discovery  |
|:-------------------|:-----------------------------------------------|:-----------------------------------------------------------|:----------:|
| Cluster-Statistics | App-DB-Elasticsearch-Cluster-Statistics-custom | Check the state of an Elasticsearch cluster                 |            |
| Indice-Statistics  | App-DB-Elasticsearch-Indice-Statistics-custom  | Check the statistics of indices of a Elasticsearch cluster | X          |
| License            | App-DB-Elasticsearch-License-custom            | Check license status                                       |            |
| Node-Statistics    | App-DB-Elasticsearch-Node-Statistics-custom    | Check nodes statistics in an Elasticsearch cluster          | X          |

> The services listed above are created automatically when the **App-DB-Elasticsearch-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                              | Description |
|:---------------------------------------|:------------|
| App-DB-Elasticsearch-Indice-Statistics | Check the statistics of indices of an Elasticsearch cluster.            |
| App-DB-Elasticsearch-Node-Statistics   | Check nodes statistics in an Elasticsearch cluster.            |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cluster-Statistics" label="Cluster-Statistics">

| Metric name               | Unit  |
|:--------------------------|:------|
| status                    | N/A   |
| nodes.total.count         | count |
| nodes.data.count          | count |
| nodes.coordinating.count  | count |
| nodes.master.count        | count |
| nodes.ingest.count        | count |
| indices.total.count       | count |
| shards.total.count        | count |
| shards.active.count       | count |
| shards.active.percentage  | %     |
| shards.unassigned.count   | count |
| shards.relocating.count   | count |
| shards.initializing.count | count |
| tasks.pending.count       | count |
| documents.total.count     | count |
| data.size.bytes           | B     |

</TabItem>
<TabItem value="Indice-Statistics" label="Indice-Statistics">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| *indices*#status                           | N/A   |
| *indices*#indice.documents.total.count     | count |
| *indices*#indice.data.primaries.size.bytes | B     |
| *indices*#indice.data.total.size.bytes     | B     |
| *indices*#shards.active.count              | count |
| *indices*#shards.unassigned.count          | count |

</TabItem>
<TabItem value="License" label="License">

| Metric name | Unit  |
|:------------|:------|
| status      | N/A   |

</TabItem>
<TabItem value="Node-Statistics" label="Node-Statistics">

| Metric name                            | Unit  |
|:---------------------------------------|:------|
| *nodes*#node.jvm.heap.usage.percentage | %     |
| *nodes*#node.jvm.heap.usage.bytes      | B     |
| *nodes*#node.disk.free.bytes           | B     |
| *nodes*#node.documents.total.count     | count |
| *nodes*#node.data.size.bytes           | B     |

</TabItem>
</Tabs>

## Prerequisites

In order to monitor an Elasticsearch cluster, it must be prepared acccording to [Elasticsearch's official documentation](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/monitor-elasticsearch-cluster.html).

In order to be able to communicate with the Elasticsearch node's API, the Centreon poller should access port 9200 with the HTTP protocol on the Elasticsearch node.

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
dnf install centreon-pack-applications-databases-elasticsearch
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-elasticsearch
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-databases-elasticsearch
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-elasticsearch
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Elasticsearch** connector through
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
dnf install centreon-plugin-Applications-Databases-Elasticsearch
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Elasticsearch
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-databases-elasticsearch
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Elasticsearch
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-DB-Elasticsearch-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                     | Description                                                                                          | Default value     | Mandatory   |
|:--------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ELASTICSEARCHUSERNAME     | Elasticsearch username                                                                               |                   |             |
| ELASTICSEARCHPASSWORD     | Elasticsearch password                                                                               |                   |             |
| ELASTICSEARCHPROTO        | Specify https if needed (default: 'http')                                                            | http              |             |
| ELASTICSEARCHPORT         | Port used (default: 9200)                                                                            | 9200              |             |
| ELASTICSEARCHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cluster-Statistics" label="Cluster-Statistics">

| Macro                      | Description                                                                                                                                    | Default value          | Mandatory   |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| WARNINGDATASIZE            | Warning threshold                                                                                                                              |                        |             |
| CRITICALDATASIZE           | Critical threshold                                                                                                                             |                        |             |
| WARNINGDOCUMENTSTOTAL      | Warning threshold                                                                                                                              |                        |             |
| CRITICALDOCUMENTSTOTAL     | Critical threshold                                                                                                                             |                        |             |
| WARNINGINDICESTOTAL        | Warning threshold                                                                                                                              |                        |             |
| CRITICALINDICESTOTAL       | Critical threshold                                                                                                                             |                        |             |
| WARNINGNODESCOORDINATING   | Warning threshold                                                                                                                              |                        |             |
| CRITICALNODESCOORDINATING  | Critical threshold                                                                                                                             |                        |             |
| WARNINGNODESDATA           | Warning threshold                                                                                                                              |                        |             |
| CRITICALNODESDATA          | Critical threshold                                                                                                                             |                        |             |
| WARNINGNODESINGEST         | Warning threshold                                                                                                                              |                        |             |
| CRITICALNODESINGEST        | Critical threshold                                                                                                                             |                        |             |
| WARNINGNODESMASTER         | Warning threshold                                                                                                                              |                        |             |
| CRITICALNODESMASTER        | Critical threshold                                                                                                                             |                        |             |
| WARNINGNODESTOTAL          | Warning threshold                                                                                                                              |                        |             |
| CRITICALNODESTOTAL         | Critical threshold                                                                                                                             |                        |             |
| WARNINGSHARDSACTIVE        | Warning threshold                                                                                                                              |                        |             |
| CRITICALSHARDSACTIVE       | Critical threshold                                                                                                                             |                        |             |
| WARNINGSHARDSINITIALIZING  | Warning threshold                                                                                                                              |                        |             |
| CRITICALSHARDSINITIALIZING | Critical threshold                                                                                                                             |                        |             |
| WARNINGSHARDSRELOCATING    | Warning threshold                                                                                                                              |                        |             |
| CRITICALSHARDSRELOCATING   | Critical threshold                                                                                                                             |                        |             |
| WARNINGSHARDSTOTAL         | Warning threshold                                                                                                                              |                        |             |
| CRITICALSHARDSTOTAL        | Critical threshold                                                                                                                             |                        |             |
| WARNINGSHARDSUNASSIGNED    | Warning threshold                                                                                                                              |                        |             |
| CRITICALSHARDSUNASSIGNED   | Critical threshold                                                                                                                             |                        |             |
| WARNINGSTATUS              | Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /yellow/i') You can use the following variables: %\{status\} | %\{status\} =~ /yellow/i |             |
| CRITICALSTATUS             | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /red/i'). You can use the following variables: %\{status\}  | %\{status\} =~ /red/i    |             |
| WARNINGTASKSPENDING        | Warning threshold                                                                                                                              |                        |             |
| CRITICALTASKSPENDING       | Critical threshold                                                                                                                             |                        |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                             |                        |             |

</TabItem>
<TabItem value="Indice-Statistics" label="Indice-Statistics">

| Macro                     | Description                                                                                        | Default value     | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                | Filter name (can be a regexp)                                                                      |                   |             |
| WARNINGDATAPRIMARIESFREE  | Warning threshold                                                                                  |                   |             |
| CRITICALDATAPRIMARIESFREE | Critical threshold                                                                                 |                   |             |
| WARNINGDATASIZETOTAL      | Warning threshold                                                                                  |                   |             |
| CRITICALDATASIZETOTAL     | Critical threshold                                                                                 |                   |             |
| WARNINGDOCUMENTSTOTAL     | Warning threshold                                                                                  |                   |             |
| CRITICALDOCUMENTSTOTAL    | Critical threshold                                                                                 |                   |             |
| WARNINGSHARDSACTIVE       | Warning threshold                                                                                  |                   |             |
| CRITICALSHARDSACTIVE      | Critical threshold                                                                                 |                   |             |
| WARNINGSHARDSUNASSIGNED   | Warning threshold                                                                                  |                   |             |
| CRITICALSHARDSUNASSIGNED  | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="License" label="License">

| Macro          | Description                                                                                                                                                                                            | Default value          | Mandatory   |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /active/i'). You can use the following variables: %\{status\}, %\{type\}, %\{issued_to\}, %\{expiry_date_in_seconds\} | %\{status\} !~ /active/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{type\}, %\{issued_to\}, %\{expiry_date_in_seconds\}                                      |                        |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                     |                        |             |

</TabItem>
<TabItem value="Node-Statistics" label="Node-Statistics">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME             | Filter name (can be a regexp)                                                                      |                   |             |
| WARNINGDATASIZE        | Warning threshold                                                                                  |                   |             |
| CRITICALDATASIZE       | Critical threshold                                                                                 |                   |             |
| WARNINGDISKFREE        | Warning threshold                                                                                  |                   |             |
| CRITICALDISKFREE       | Critical threshold                                                                                 |                   |             |
| WARNINGDOCUMENTSTOTAL  | Warning threshold                                                                                  |                   |             |
| CRITICALDOCUMENTSTOTAL | Critical threshold                                                                                 |                   |             |
| WARNINGJVMHEAPUSAGE    | Warning threshold                                                                                  |                   |             |
| CRITICALJVMHEAPUSAGE   | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_elasticsearch.pl \
	--plugin=database::elasticsearch::restapi::plugin \
	--mode=node-statistics \
	--hostname=10.0.0.1 \
	--port='9200' \
	--proto='http' \
	--username='' \
	--password=''  \
	--filter-name='' \
	--warning-jvm-heap-usage='' \
	--critical-jvm-heap-usage='' \
	--warning-disk-free='' \
	--critical-disk-free='' \
	--warning-documents-total='' \
	--critical-documents-total='' \
	--warning-data-size='' \
	--critical-data-size=''
```

The expected command output is shown below:

```bash
OK: All nodes are ok | '*nodes*#node.jvm.heap.usage.percentage'=20%;;;0;100'*nodes*#node.jvm.heap.usage.bytes'=36380302240B;;;0;137151119360;heap_max_in_bytes'*nodes*#node.disk.free.bytes'=1710072680448B;;;0;total_in_bytes'*nodes*#node.documents.total.count'=4362761044;;;0;'*nodes*#node.data.size.bytes'=1386278479651B;;;0;
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
/usr/lib/centreon/plugins/centreon_elasticsearch.pl \
	--plugin=database::elasticsearch::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                | Linked service template                        |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------|
| cluster-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/elasticsearch/restapi/mode/clusterstatistics.pm)] | App-DB-Elasticsearch-Cluster-Statistics-custom |
| indice-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/elasticsearch/restapi/mode/indicestatistics.pm)]   | App-DB-Elasticsearch-Indice-Statistics-custom  |
| license [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/elasticsearch/restapi/mode/license.pm)]                      | App-DB-Elasticsearch-License-custom            |
| list-indices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/elasticsearch/restapi/mode/listindices.pm)]             | Used for service discovery                     |
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/elasticsearch/restapi/mode/listnodes.pm)]                 | Used for service discovery                     |
| node-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/elasticsearch/restapi/mode/nodestatistics.pm)]       | App-DB-Elasticsearch-Node-Statistics-custom    |

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
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
| --hostname                                 | Elasticsearch hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --port                                     | Port used (default: 9200)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    | Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --username                                 | Elasticsearch username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --password                                 | Elasticsearch password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --timeout                                  | Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
<TabItem value="Cluster-Statistics" label="Cluster-Statistics">

| Option            | Description                                                                                                                                                                                                                                                                                                            |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='^status$'                                                                                                                                                                                                                                 |
| --warning-*       | Warning threshold. Can be: 'nodes-total', 'nodes-data', 'nodes-coordinating', 'nodes-master', 'nodes-ingest', 'indices-total', 'shards-total', 'shards-active-count', 'shards-active-percentage', 'shards-unassigned', 'shards-relocating', 'shards-initializing', 'tasks-pending', 'documents-total', 'data-size'.    |
| --critical-*      | Critical threshold. Can be: 'nodes-total', 'nodes-data', 'nodes-coordinating', 'nodes-master', 'nodes-ingest', 'indices-total', 'shards-total', 'shards-active-count', 'shards-active-percentage', 'shards-unassigned', 'shards-relocating', 'shards-initializing', 'tasks-pending', 'documents-total', 'data-size'.   |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /yellow/i') You can use the following variables: %\{status\}.                                                                                                                                                                        |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /red/i'). You can use the following variables: %\{status\}.                                                                                                                                                                         |

</TabItem>
<TabItem value="Indice-Statistics" label="Indice-Statistics">

| Option            | Description                                                                                                                                                   |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name     | Filter name (can be a regexp).                                                                                                                                |
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='^status$'                                                                        |
| --warning-*       | Warning threshold. Can be: 'documents-total', 'data-size-primaries', 'data-size-total', 'shards-active', 'shards-unassigned'.                                 |
| --critical-*      | Critical threshold. Can be: 'documents-total', 'data-size-primaries', 'data-size-total', 'shards-active', 'shards-unassigned'.                                |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /yellow/i') You can use the following variables: %\{display\}, %\{status\}.   |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /red/i'). You can use the following variables: %\{display\}, %\{status\}.    |

</TabItem>
<TabItem value="License" label="License">

| Option            | Description                                                                                                                                                                                                |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{type\}, %\{issued_to\}, %\{expiry_date_in_seconds\}.                                         |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /active/i'). You can use the following variables: %\{status\}, %\{type\}, %\{issued_to\}, %\{expiry_date_in_seconds\}.    |

</TabItem>
<TabItem value="Node-Statistics" label="Node-Statistics">

| Option            | Description                                                                                                                  |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| --filter-name     | Filter name (can be a regexp).                                                                                               |
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='heap'                                           |
| --warning-*       | Warning threshold. Can be: 'data-size', 'disk-free', 'documents-total', 'jvm-heap-usage' (in %), 'jvm-heap-usage-bytes'.     |
| --critical-*      | Critical threshold. Can be: 'data-size', 'disk-free', 'documents-total', 'jvm-heap-usage' (in %), 'jvm-heap-usage-bytes'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_elasticsearch.pl \
	--plugin=database::elasticsearch::restapi::plugin \
	--mode=node-statistics \
	--help
```
