---
id: cloud-aws-cloudtrail
title: AWS CloudTrail
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Amazon CloudTrail** brings a host template:

* **Cloud-Aws-CloudTrail**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-CloudTrail" label="Cloud-Aws-CloudTrail">

| Service Alias                 | Service Template                            | Service Description     |
|:------------------------------|:--------------------------------------------|:------------------------|
| Cloudtrail-Check-Trail-Status | Cloud-Aws-Cloudtrail-Check-Trail-Status-Api | Check trail status      |
| Cloudtrail-Count-Events       | Cloud-Aws-Cloudtrail-Count-Events-Api       | Check cloudtrail events |

> The services listed above are created automatically when the **Cloud-Aws-CloudTrail** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cloudtrail-Check-Trail-Status" label="Cloudtrail-Check-Trail-Status">

| Metric name      | Unit  |
|:-----------------|:------|
| trail_is_logging |       |

</TabItem>
<TabItem value="Cloudtrail-Count-Events" label="Cloudtrail-Count-Events">

| Metric name  | Unit  |
|:-------------|:------|
| events_count |       |

</TabItem>
</Tabs>

## Prerequisites

### AWS Configuration

Configure a service account (access/secret key combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                                                               |
| :----------------------------- |:------------------------------------------------------------------------------------------|
| cloudtrail:GetTrailStatus | Returns a JSON-formatted list of information about the specified trail.                   |
| cloudtrail:LookupEvents   | Looks up management events or CloudTrail Insights events that are captured by CloudTrail. |

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
dnf install centreon-pack-cloud-aws-cloudtrail
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-aws-cloudtrail
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-aws-cloudtrail
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-cloudtrail
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Amazon CloudTrail** connector through
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
dnf install centreon-plugin-Cloud-Aws-Cloudtrail-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Aws-Cloudtrail-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-aws-cloudtrail-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Cloudtrail-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Aws-CloudTrail-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro         | Description                                                                                                                      | Default value     | Mandatory |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------|:------------------|:----------|
| AWSACCESSKEY  | Set AWS access key                                                                                                               |                   | X         |
| AWSASSUMEROLE | Set ARN of the role to be assumed                                                                                                |                   |           |
| AWSCUSTOMMODE | Choose a custom mode                                                                                                             |                   | X         |
| AWSREGION     | Set the region name                                                                                                              |                   | X         |
| AWSSECRETKEY  | Set AWS secret key                                                                                                               |                   | X         |
| PROXYURL      | Proxy URL if any                                                                                                                 |                   |           |
| EXTRAOPTIONS  | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cloudtrail-Check-Trail-Status" label="Cloudtrail-Check-Trail-Status">

| Macro        | Description                                                                                         | Default value     | Mandatory |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:----------|
| TRAILNAME    | Filter by trail name                                                                                |                   | X         |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |           |

</TabItem>
<TabItem value="Cloudtrail-Count-Events" label="Cloudtrail-Count-Events">

| Macro         | Description                                                                                         | Default value     | Mandatory   |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EVENTTYPE     | Filter by event type                                                                                |                   |             |
| ERRORMESSAGE  | Filter on an error message pattern                                                                  |                   |             |
| DELTA         | Time depth for search (minutes)                                                                     |                   |             |
| WARNINGCOUNT  | Set warning threshold for the number of events                                                      |                   |             |
| CRITICALCOUNT | Set critical threshold for the number of events                                                     |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor an AWS Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_aws_cloudtrail_api.pl \
	--plugin=cloud::aws::cloudtrail::plugin \
	--custommode='awscli' \
	--aws-secret-key='***' \
	--aws-access-key='***' \
	--region='eu-west-1' \
	--proxyurl='http://myproxy.mycompany.org:8080' \
	--mode=checktrailstatus \
	--trail-name='my-trail'
```

The expected command output is shown below:

```bash
OK: Trail is logging: 1 | 'trail_is_logging'=1;;;0;
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_cloudtrail_api.pl \
	--plugin=cloud::aws::cloudtrail::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode             | Linked service template                     |
|:-----------------|:--------------------------------------------|
| checktrailstatus | Cloud-Aws-Cloudtrail-Check-Trail-Status-Api |
| countevents      | Cloud-Aws-Cloudtrail-Count-Events-Api       |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_cloudtrail_api.pl \
	--plugin=cloud::aws::cloudtrail::plugin \
    --list-custommode
```

The plugin brings the following custom modes:

* awscli
* paws

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global |
| --dyn-mode                                 | Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global |
| --list-mode                                | List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global |
| --version                                  | Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --custommode                               | Choose a custom mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global |
| --list-custommode                          | List available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Global |
| --multiple                                 | Multiple custom mode objects (required by some specific modes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global |
| --pass-manager                             | Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --verbose                                  | Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --filter-perfdata-adv                      | Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --explode-perfdata-max                     | Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output |
| --change-short-output --change-long-output | Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --change-exit                              | Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output |
| --filter-uom                               | Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --opt-exit                                 | Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --output-ignore-perfdata                   | Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --output-ignore-label                      | Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --float-precision                          | Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --source-encoding                          | Set encoding of monitoring sources (In some case. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="awscli" label="awscli">

| Option              | Description                                                                                                                                                                                                                           | Type   |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --aws-secret-key    | Set AWS secret key.                                                                                                                                                                                                                   | Awscli |
| --aws-access-key    | Set AWS access key.                                                                                                                                                                                                                   | Awscli |
| --aws-session-token | Set AWS session token.                                                                                                                                                                                                                | Awscli |
| --aws-role-arn      | Set arn of the role to be assumed.                                                                                                                                                                                                    | Awscli |
| --aws-profile       | Set AWS profile.                                                                                                                                                                                                                      | Awscli |
| --endpoint-url      | Override AWS service endpoint URL if necessary.                                                                                                                                                                                       | Awscli |
| --region            | Set the region name (Required).                                                                                                                                                                                                       | Awscli |
| --period            | Set period in seconds.                                                                                                                                                                                                                | Awscli |
| --timeframe         | Set timeframe in seconds.                                                                                                                                                                                                             | Awscli |
| --statistic         | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                                                                                                                                                           | Awscli |
| --zeroed            | Set metrics value to 0 if none. Usefull when CloudWatch does not return value when not defined.                                                                                                                                       | Awscli |
| --timeout           | Set timeout in seconds (Default: 50).                                                                                                                                                                                                 | Awscli |
| --sudo              | Use 'sudo' to execute the command.                                                                                                                                                                                                    | Awscli |
| --command           | Command to get information (Default: 'aws'). Can be changed if you have output in a file.                                                                                                                                             | Awscli |
| --command-path      | Command path (Default: none).                                                                                                                                                                                                         | Awscli |
| --command-options   | Command options (Default: none). Only use for testing purpose, when you want to set ALL parameters of a command by yourself.                                                                                                          | Awscli |
| --proxyurl          | Proxy URL if any                                                                                                                                                                                                                      | Awscli |
| --skip-ssl-check    | Avoid certificate issuer verification. Useful when AWS resources are hosted by a third-party.  Note that it strips all stderr from the command result. Will be enhanced someday. Debug will only display CLI instead of evreything.   | Awscli |

</TabItem>
<TabItem value="paws" label="paws">

| Option              | Description                                                                                       | Type |
|:--------------------|:--------------------------------------------------------------------------------------------------|:-----|
| --aws-secret-key    | Set AWS secret key.                                                                               | Paws |
| --aws-access-key    | Set AWS access key.                                                                               | Paws |
| --aws-session-token | Set AWS session token.                                                                            | Paws |
| --aws-role-arn      | Set arn of the role to be assumed.                                                                | Paws |
| --region            | Set the region name (Required).                                                                   | Paws |
| --period            | Set period in seconds.                                                                            | Paws |
| --timeframe         | Set timeframe in seconds.                                                                         | Paws |
| --statistic         | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                       | Paws |
| --zeroed            | Set metrics value to 0 if none. Usefull when CloudWatch does not return value when not defined.   | Paws |
| --proxyurl          | Proxy URL if any                                                                                  | Paws |

</TabItem>
</Tabs>

#### Modes options

All modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Cloudtrail-Check-Trail-Status" label="Cloudtrail-Check-Trail-Status">

| Option       | Description              | Type |
|:-------------|:-------------------------|:-----|
| --trail-name | Filter by trail name.    | Mode |

</TabItem>
<TabItem value="Cloudtrail-Count-Events" label="Cloudtrail-Count-Events">

| Option           | Description                                         | Type |
|:-----------------|:----------------------------------------------------|:-----|
| --event-type     | Filter by event type.                               | Mode |
| --error-message  | Filter on an error message pattern                  | Mode |
| --delta          | Time depth for search (minutes).                    | Mode |
| --warning-count  | Set warning threshold for the number of events.     | Mode |
| --critical-count | Set critical threshold for the number of events.    | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_cloudtrail_api.pl \
	--plugin=cloud::aws::cloudtrail::plugin \
	--custommode='' \
    --help
```
