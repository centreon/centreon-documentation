---
id: cloud-aws-efs
title: Amazon EFS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Amazon EFS** brings a host template:

* Cloud-Aws-Efs-custom

It brings the following service templates:

| Service Alias   | Service Template              | Service Description            | Default |
|:----------------|:------------------------------|:-------------------------------|:--------|
| Efs-Connections | Cloud-Aws-Efs-Connections-Api |                                | X       |
| Efs-DataUsage   | Cloud-Aws-Efs-Datausage-Api   | Check EFS filesystem related I | X       |



> *Default* services templates are automatically linked to the host template(s).

### Discovery rules

The pack provides a discovery rule to automatically discover Amazon EFS resources:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-aws-efs-provider.png)

More information about the Host Discovery module is available in the Centreon documentation: [Host Discovery](/docs/monitoring/discovery/hosts-discovery)

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Efs-Connections" label="Efs-Connections">

| Metric Name                   | Unit  |
|:------------------------------|:------|
| efs.clients.connections.count | count |

</TabItem>
<TabItem value="Efs-DataUsage" label="Efs-DataUsage">

| Metric Name                   | Unit  |
|:------------------------------|:------|
| efs.creditbalance.burst.bytes | B     |
| efs.data.iobytes.read.bytes   | bytes |
| efs.data.iobytes.write.bytes  | B     |
| efs.metadata.iobytes.bytes    | B     |
| efs.total.iobytes.bytes       | B     |

</TabItem>
</Tabs>

## Prerequisites

### AWS Configuration

Configure a service account (access/secret key combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| XXXXX:XXXXXXXXXXXXXXXX         | Get XXXXX.                                                      |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/EC2 namespace on Cloudwatch.           |

### Plugin dependencies

To interact with Amazon APIs, you can use either use the *awscli* binary provided by Amazon or *paws*, a Perl AWS SDK (recommended). You must install it on every poller expected to monitor AWS resources.

> For now, it is not possible to use *paws* if you are using a proxy to reach AWS Cloudwatch APIs.

<Tabs groupId="sync">
<TabItem value="perl-Paws-installation" label="perl-Paws-installation">

```bashn
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

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Plugin Packs > Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-aws-efs
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-efs
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-aws-efs
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Amazon EFS** Pack through
the **Configuration > Plugin Packs > Manager** menu.

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
dnf install centreon-plugin-Cloud-Aws-Efs-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Efs-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-aws-efs-api
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
* Apply the **Cloud-Aws-Efs-custom** template to the host.

* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

    | Mandatory      | Macro           | Description                                                                            |
|:---------------|:----------------|:---------------------------------------------------------------------------------------|
|                | AWSACCESSKEY    |                                                                                        |
|                | AWSASSUMEROLE   |                                                                                        |
|                | AWSCUSTOMMODE   | (Default: 'awscli')                                                                    |
|                | AWSFILESYSTEMID |                                                                                        |
|                | AWSREGION       |                                                                                        |
|                | AWSSECRETKEY    |                                                                                        |
|                | EXTRAOPTIONS    | Any extra option you may want to add to every command line (eg. a --verbose flag)      |
|                | PROXYURL        |                                                                                        |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
usr/lib/centreon/plugins//centreon_aws_efs_api.pl \
    --plugin=cloud::aws::efs::plugin \
    --mode=datausage \
    --custommode='awscli' \
    --aws-secret-key='' \
    --aws-access-key='' \
    --aws-role-arn='' \
    --region='' \
    --name='' \
    --proxyurl='' \
    --filter-metric='' \
    --statistic='average' \
    --timeframe='600' \
    --period='60' \
    --warning-metadata-iobytes='' \
    --critical-metadata-iobytes='' \
    --warning-data-iobytes-write='' \
    --critical-data-iobytes-write='' \
    --warning-data-iobytes-read='' \
    --critical-data-iobytes-read='' \
    --warning-total-iobytes='' \
    --critical-total-iobytes='' \
    --warning-burst-bytes='' \
    --critical-burst-bytes='' \
    --verbose \
    
```

The expected command output is shown below:

```bash
OK: Data Read IO Bytes Data Write IO Bytes MetaData IO Bytes Total IO Bytes Burst Credit Balance Bytes | 'efs.data.iobytes.read.bytes'=36;;;; 'efs.data.iobytes.write.bytes'=74B;;;; 'efs.metadata.iobytes.bytes'=9B;;;; 'efs.total.iobytes.bytes'=35B;;;; 'efs.creditbalance.burst.bytes'=11B;;;; 
```

### Available custom modes

All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
usr/lib/centreon/plugins//centreon_aws_efs_api.pl \
    --plugin=cloud::aws::efs::plugin \
    --list-custommode
```

The plugin brings the following custom modes:

* paws
* awscli

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
usr/lib/centreon/plugins//centreon_aws_efs_api.pl \
    --plugin=cloud::aws::efs::plugin \
    --list-mode
```

The plugin brings the following modes:

* connections
* datausage
* discovery

### Available options

#### Global optionsAll global options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --mode                                     |     Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --dyn-mode                                 |     Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global      |
| --list-mode                                |     List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --mode-version                             |     Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --version                                  |     Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --custommode                               |     Choose a custom mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --list-custommode                          |     List available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Global      |
| --multiple                                 |     Multiple custom mode objects (required by some specific modes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --pass-manager                             |     Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --verbose                                  |     Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --debug                                    |     Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --filter-perfdata                          |     Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --filter-perfdata-adv                      |     Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output      |
| --explode-perfdata-max                     |     Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output      |
| --change-perfdata --extend-perfdata        |     Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output      |
| --extend-perfdata-group                    |     Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output      |
| --change-short-output --change-long-output |     Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --change-exit                              |     Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --range-perfdata                           |     Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output      |
| --filter-uom                               |     Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output      |
| --opt-exit                                 |     Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-ignore-perfdata                   |     Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --output-ignore-label                      |     Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-xml                               |     Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output      |
| --output-json                              |     Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output      |
| --output-openmetrics                       |     Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --output-file                              |     Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --disco-format                             |     Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output      |
| --disco-show                               |     Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output      |
| --float-precision                          |     Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --source-encoding                          |     Set encoding of monitoring sources (In some case. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |


#### Custom modes options

All custom modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="awscli" label="awscli">

| Option              | Description                                                                                                                                                                                                                               | Option type |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --aws-secret-key    |     Set AWS secret key.                                                                                                                                                                                                                   | Awscli      |
| --aws-access-key    |     Set AWS access key.                                                                                                                                                                                                                   | Awscli      |
| --aws-session-token |     Set AWS session token.                                                                                                                                                                                                                | Awscli      |
| --aws-role-arn      |     Set arn of the role to be assumed.                                                                                                                                                                                                    | Awscli      |
| --aws-profile       |     Set AWS profile.                                                                                                                                                                                                                      | Awscli      |
| --endpoint-url      |     Override AWS service endpoint URL if necessary.                                                                                                                                                                                       | Awscli      |
| --region            |     Set the region name (Required).                                                                                                                                                                                                       | Awscli      |
| --period            |     Set period in seconds.                                                                                                                                                                                                                | Awscli      |
| --timeframe         |     Set timeframe in seconds.                                                                                                                                                                                                             | Awscli      |
| --statistic         |     Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                                                                                                                                                           | Awscli      |
| --zeroed            |     Set metrics value to 0 if none. Usefull when CloudWatch does not return value when not defined.                                                                                                                                       | Awscli      |
| --timeout           |     Set timeout in seconds (Default: 50).                                                                                                                                                                                                 | Awscli      |
| --sudo              |     Use 'sudo' to execute the command.                                                                                                                                                                                                    | Awscli      |
| --command           |     Command to get information (Default: 'aws'). Can be changed if you have output in a file.                                                                                                                                             | Awscli      |
| --command-path      |     Command path (Default: none).                                                                                                                                                                                                         | Awscli      |
| --command-options   |     Command options (Default: none). Only use for testing purpose, when you want to set ALL parameters of a command by yourself.                                                                                                          | Awscli      |
| --proxyurl          |     Proxy URL if any                                                                                                                                                                                                                      | Awscli      |
| --skip-ssl-check    |     Avoid certificate issuer verification. Useful when AWS resources are hosted by a third-party.  Note that it strips all stderr from the command result. Will be enhanced someday. Debug will only display CLI instead of evreything.   | Awscli      |

</TabItem>
<TabItem value="paws" label="paws">

| Option              | Description                                                                                           | Option type |
|:--------------------|:------------------------------------------------------------------------------------------------------|:------------|
| --aws-secret-key    |     Set AWS secret key.                                                                               | Paws        |
| --aws-access-key    |     Set AWS access key.                                                                               | Paws        |
| --aws-session-token |     Set AWS session token.                                                                            | Paws        |
| --aws-role-arn      |     Set arn of the role to be assumed.                                                                | Paws        |
| --region            |     Set the region name (Required).                                                                   | Paws        |
| --period            |     Set period in seconds.                                                                            | Paws        |
| --timeframe         |     Set timeframe in seconds.                                                                         | Paws        |
| --statistic         |     Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                       | Paws        |
| --zeroed            |     Set metrics value to 0 if none. Usefull when CloudWatch does not return value when not defined.   | Paws        |
| --proxyurl          |     Proxy URL if any                                                                                  | Paws        |

</TabItem>
</Tabs>

#### Modes options

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Efs-Connections" label="Efs-Connections">

| Option                        | Description                                              | Option type |
|:------------------------------|:---------------------------------------------------------|:------------|
| --critical-client-connections |     Critical threshold.                                  | Mode        |
| --name                        |     Set the instance name (Required) (Can be multiple).  | Mode        |
| --warning-client-connections  |     Warning threshold.                                   | Mode        |

</TabItem>
<TabItem value="Efs-DataUsage" label="Efs-DataUsage">

| Option          | Description                                                                                                                                          | Option type |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --name          |     Set the instance name (Required) (Can be multiple).                                                                                              | Mode        |
| --filter-metric |     Filter on a specific metric Can be: DataReadIOBytes, DataWriteIOBytes, MetaDataIOBytes, TotalIOBytes, BurstCreditBalance                         | Mode        |
| --warning-      |     $metric$Thresholds warning ($metric$ can be: 'data-iobytes-read', 'data-iobytes-write', 'metadata-iobytes', 'total-iobytes', 'burst-bytes').     | Mode        |
| --critical-     |     $metric$Thresholds critical ($metric$ can be: 'data-iobytes-read', 'data-iobytes-write', 'metadata-iobytes', 'total-iobytes', 'burst-bytes').    | Mode        |

</TabItem>
</Tabs>


All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
usr/lib/centreon/plugins//centreon_aws_efs_api.pl \
    --plugin=cloud::aws::efs::plugin \
    --mode=datausage \
    --help
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.