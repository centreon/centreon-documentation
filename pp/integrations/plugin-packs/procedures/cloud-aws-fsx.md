---
id: cloud-aws-fsx
title: Amazon FSx
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Amazon FSx** brings a host template:

* **Cloud-Aws-Fsx-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-Fsx-custom" label="Cloud-Aws-Fsx-custom">

| Service Alias | Service Template                   | Service Description                            |
|:--------------|:-----------------------------------|:-----------------------------------------------|
| Fsx-DataUsage | Cloud-Aws-Fsx-Datausage-Api-custom | Check FSx filesystem related I/O metrics.   |
| Fsx-Freespace | Cloud-Aws-Fsx-Freespace-Api-custom | Check free space available on a FSx filesystem |

> The services listed above are created automatically when the **Cloud-Aws-Fsx-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description             |
|:----------------|:------------------------|
| Amazon AWS FSX  | Discover Amazon AWS FSX |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Fsx-DataUsage" label="Fsx-DataUsage">

| Metric name             | Unit  |
|:------------------------|:------|
| fsx.data.read.bytes     | B     |
| fsx.data.write.bytes    | B     |
| fsx.data.io.read.count  | count |
| fsx.data.io.write.count | count |
| fsx.metadata.ops.bytes  | B     |

</TabItem>
<TabItem value="Fsx-Freespace" label="Fsx-Freespace">

| Metric Name          | Unit  |
|:---------------------|:------|
| fsx.storage.free.byt | B     |

</TabItem>
</Tabs>

## Prerequisites

### AWS Configuration

Configure a service account (access/secret key combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                          |
| :----------------------------- | :--------------------------------------------------- |
| fsx:DescribeFileSystems        | Display FSx instances & details                      |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/FSx namespace on Cloudwatch |

### Plugin dependencies

To interact with the Amazon APIs, you can use either use the *awscli* binary provided by Amazon or *paws*, a Perl AWS SDK (recommended). You must install it on every poller expected to monitor AWS resources.

> For now, it is not possible to use *paws* if you are using a proxy to reach the AWS Cloudwatch APIs.

<Tabs groupId="sync">
<TabItem value="perl-Paws-installation" label="perl-Paws-installation">

```bash
yum install perl-Paws
```

</TabItem>
<TabItem value="aws-cli-installation" label="aws-cli-installation">

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

</TabItem>
</Tabs>

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
dnf install centreon-pack-cloud-aws-fsx
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-aws-fsx
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-aws-fsx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-fsx
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Amazon FSx** connector through
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
dnf install centreon-plugin-Cloud-Aws-Fsx-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Aws-Fsx-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-aws-fsx-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Fsx-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Aws-Fsx-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#available-custom-modes), i.e. the connection method to the resource.

| Macro           | Description                                                                                                                | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSFILESYSTEMID | Set the instance name (Required) (can be defined multipletimes)                                                            |                   | X           |
| AWSREGION       | Set the region name (Required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| FILESYSTEMID    |                                                                                                                            |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                      |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Fsx-DataUsage" label="Fsx-DataUsage">

| Macro                    | Description                                                                                                                    | Default value     | Mandatory   |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                | Set the metric calculation method (Only Sum is relevant)                                                                       | sum               |             |
| TIMEFRAME                | Set timeframe in seconds                                                                                                       | 900               |             |
| PERIOD                   | Set period in seconds                                                                                                          | 60                |             |
| FILTERMETRIC             | Filter on a specific metric. Can be: DataReadBytes, DataWriteBytes, DataReadOperations, DataWriteOperations, MetaDataOperations |                   |             |
| WARNINGDATAREADBYTES     | Thresholds                                                                                                                     |                   |             |         
| CRITICALDATAREADBYTES    | Thresholds                                                                                                                     |                   |             |
| WARNINGDATAREADOPS       | Thresholds                                                                                                                     |                   |             |
| CRITICALDATAREADOPS      | Thresholds                                                                                                                     |                   |             |
| WARNINGDATAWRITEOPS      | Thresholds                                                                                                                     |                   |             |
| CRITICALDATAWRITEOPS     | Thresholds                                                                                                                     |                   |             |
| WARNINGMETADATAOPSBYTES  | Thresholds                                                                                                                     |                   |             |
| CRITICALMETADATAOPSBYTES | Thresholds                                                                                                                     |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                            | --verbose         |             |

</TabItem>
<TabItem value="Fsx-Freespace" label="Fsx-Freespace">

| Macro                    | Description                                                                                         | Default value     | Mandatory   |
|:-------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                | Set the metric calculation method (Default: Average). Can be 'minimum', 'average'                    | average           |             |
| TIMEFRAME                | Set timeframe in seconds (e.g. '3600' to check last 60 minutes) | 900               |             |
| PERIOD                   | Set period in seconds.                                                             | 60                |             |
| FILTERMETRIC             | Name of the metrics to filter on.                                       |                   |             |
| WARNINGSTORAGEFREEBYTES  | Warning threshold for remaining available bytes                                                     |                   |             |
| CRITICALSTORAGEFREEBYTES | Warning threshold for remaining available bytes                                                     |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor an AWS Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_aws_fsx_api.pl \
	--plugin=cloud::aws::fsx::plugin \
	--mode=datausage \
	--custommode='awscli' \
	--aws-secret-key='' \
	--aws-access-key='' \
	--aws-role-arn='' \
	--region='' \
	--name='' \
	--proxyurl=''   \
	--filter-metric='' \
	--statistic='sum' \
	--timeframe='900' \
	--period='60' \
	--warning-data-write-ops='' \
	--critical-data-write-ops='' \
	--warning-data-read-ops='' \
	--critical-data-read-ops='' \
	--warning-data-write-ops='' \
	--critical-data-write-ops='' \
	--warning-data-read-bytes='' \
	--critical-data-read-bytes='' \
	--warning-metadata-ops-bytes='' \
	--critical-metadata-ops-bytes='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: Data Read Bytes: 35 B Data Write Bytes: 29 B Data Read Ops: 31 Data Write Ops: 53 MetaData Operations Bytes: 76 B | 'fsx.data.read.bytes'=35B;;;;'fsx.data.write.bytes'=29B;;;;'fsx.data.io.read.count'=31;;;;'fsx.data.io.write.count'=53;;;;'fsx.metadata.ops.bytes'=76B;;;;
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
/usr/lib/centreon/plugins/centreon_aws_fsx_api.pl \
	--plugin=cloud::aws::fsx::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                              | Linked service template            |
|:------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
| datausage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/fsx/mode/datausage.pm)] | Cloud-Aws-Fsx-Datausage-Api-custom |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/fsx/mode/discovery.pm)] | Used for host discovery            |
| freespace [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/fsx/mode/freespace.pm)] | Cloud-Aws-Fsx-Freespace-Api-custom |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_fsx_api.pl \
	--plugin=cloud::aws::fsx::plugin \
	--list-custommode
```

The plugin brings the following custom modes:

* awscli
* paws

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="awscli" label="awscli">

| Option              | Description                                                                                                                                                                                                                           |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --aws-secret-key    | Set AWS secret key.                                                                                                                                                                                                                   |
| --aws-access-key    | Set AWS access key.                                                                                                                                                                                                                   |
| --aws-session-token | Set AWS session token.                                                                                                                                                                                                                |
| --aws-role-arn      | Set arn of the role to be assumed.                                                                                                                                                                                                    |
| --aws-profile       | Set AWS profile.                                                                                                                                                                                                                      |
| --endpoint-url      | Override AWS service endpoint URL if necessary.                                                                                                                                                                                       |
| --region            | Set the region name (Required).                                                                                                                                                                                                       |
| --period            | Set period in seconds.                                                                                                                                                                                                                |
| --timeframe         | Set timeframe in seconds.                                                                                                                                                                                                             |
| --statistic         | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                                                                                                                                                           |
| --zeroed            | Set metrics value to 0 if none. Useful when CloudWatch does not return value when not defined.                                                                                                                                        |
| --timeout           | Set timeout in seconds (Default: 50).                                                                                                                                                                                                 |
| --sudo              | Use 'sudo' to execute the command.                                                                                                                                                                                                    |
| --command           | Command to get information (Default: 'aws'). Can be changed if you have output in a file.                                                                                                                                             |
| --command-path      | Command path (Default: none).                                                                                                                                                                                                         |
| --command-options   | Command options (Default: none). Only use for testing purpose, when you want to set ALL parameters of a command by yourself.                                                                                                          |
| --proxyurl          | Proxy URL if any                                                                                                                                                                                                                      |
| --skip-ssl-check    | Avoid certificate issuer verification. Useful when AWS resources are hosted by a third party.  Note that it strips all stderr from the command result. Will be enhanced someday. Debug will only display CLI instead of evreything.   |

</TabItem>
<TabItem value="paws" label="paws">

| Option              | Description                                                                                      |
|:--------------------|:-------------------------------------------------------------------------------------------------|
| --aws-secret-key    | Set AWS secret key.                                                                              |
| --aws-access-key    | Set AWS access key.                                                                              |
| --aws-session-token | Set AWS session token.                                                                           |
| --aws-role-arn      | Set arn of the role to be assumed.                                                               |
| --region            | Set the region name (required).                                                                  |
| --period            | Set period in seconds.                                                                           |
| --timeframe         | Set timeframe in seconds.                                                                        |
| --statistic         | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                      |
| --zeroed            | Set metrics value to 0 if none. Useful when CloudWatch does not return value when not defined.   |
| --proxyurl          | Proxy URL if any                                                                                 |

</TabItem>
</Tabs>

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Fsx-DataUsage" label="Fsx-DataUsage">

| Option              | Description                                                                                                                             |
|:--------------------|:----------------------------------------------------------------------------------------------------------------------------------------|
| --name              | Set the instance name (required) (can be defined multiple times).                                                                        |
| --filter-metric     | Filter on a specific metric. Can be: DataReadBytes, DataWriteBytes, DataReadOperations, DataWriteOperations, MetaDataOperations          |
| --warning-$metric$  | Warning threshold ($metric$ can be: 'data-write-ops', 'data-write-ops', 'data-read-ops', 'data-read-bytes', 'metadata-ops-bytes').     |
| --critical-$metric$ | Critical threshold ($metric$ can be: 'data-write-ops', 'data-write-ops', 'data-read-ops', 'data-read-bytes', 'metadata-ops-bytes').    |

</TabItem>
<TabItem value="Fsx-Freespace" label="Fsx-Freespace">

| Option                        | Description                                                        |
|:------------------------------|:-------------------------------------------------------------------|
| --name                        | Set the instance name (required) (can be defined multiple times).   |
| --warning-storage-free-bytes  | Warning threshold for remaining available bytes.                   |
| --critical-storage-free-bytes | Warning threshold for remaining available bytes.                   |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_fsx_api.pl \
	--plugin=cloud::aws::fsx::plugin \
	--mode=datausage \
	--custommode='paws' \
	--help
```
