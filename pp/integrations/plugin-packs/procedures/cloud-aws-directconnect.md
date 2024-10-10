---
id: cloud-aws-directconnect
title: Amazon Direct Connect
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Monitoring Connector **Amazon Direct Connect** brings a host template:

* Cloud-Aws-Directconnect-custom-custom

It brings the following service templates:

| Service Alias      | Service Template                               | Service Description      | Default | Discovery |
|:-------------------|:-----------------------------------------------|:-------------------------|:--------|:----------|
| Virtual-Interfaces | Cloud-Aws-Directconnect-Virtual-Interfaces-Api | Check virtual interfaces | X       | X         |
| Connections        | Cloud-Aws-Directconnect-Connections-Api        | Check connections        | X       |           |

> Default services are automatically created when the host template is applied.
>
> Services templates with the *Discovery* field are linked to a service discovery rule.

### Discovery rules

The pack provides a discovery rule to automatically discover **Amazon Direct Connect** resources.


More information about the Host Discovery module is available in the Centreon documentation: [Host Discovery](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Connections" label="Connections">

| Metric Name                                            | Unit  |
|:-------------------------------------------------------|:------|
| connection state                                       |       |
| *connection_name*#connection.egress.bitspersecond      | bps   |
| *connection_name*#connection.ingress.bitspersecond     | bps   |
| *connection_name*#connection.egress.packets.persecond  | /s    |
| *connection_name*#connection.ingress.packets.persecond | /s    |
| *connection_name*#connection.outbound.light.level.dbm  | dBm   |
| *connection_name*#connection.inbound.light.level.dbm   | dBm   |

</TabItem>
<TabItem value="Virtual-Interfaces" label="Virtual-Interfaces">

| Metric Name                                                                          | Unit  |
|:-------------------------------------------------------------------------------------|:------|
| virtual interface state                                                              |       |
| *connection_name~virtual_interface_name*#virtual_interface.egress.bitspersecond      | bps   |
| *connection_name~virtual_interface_name*#virtual_interface.ingress.bitspersecond     | bps   |
| *connection_name~virtual_interface_name*#virtual_interface.egress.packets.persecond  | /s    |
| *connection_name~virtual_interface_name*#virtual_interface.ingress.packets.persecond | /s    |

</TabItem>
</Tabs>

## Prerequisites

### AWS Configuration

Configure a service account (access/secret key combo) for which the following privileges have to be granted:

| AWS Privilege                             | Description                                          |
| :---------------------------------------- | :--------------------------------------------------- |
| directconnect:describe-connections        | Returns all connections.                             |
| directconnect:describe-virtual-interfaces | Returns all virtual interfaces.                      |
| cloudwatch:getMetricStatistics            | Get metrics from the AWS/DX namespace on Cloudwatch. |

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
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-aws-directconnect
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-aws-directconnect
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-directconnect
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-aws-directconnect
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Amazon Direct Connect** Pack through
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
dnf install centreon-plugin-Cloud-Aws-Directconnect-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Aws-Directconnect-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Directconnect-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-aws-directconnect-api
```

</TabItem>
</Tabs>

## Configuration

### Host

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Aws-Directconnect-custom-custom** template to the host
4. Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory      | Macro         | Description                                                                       | Default |
|:---------------|:--------------|:----------------------------------------------------------------------------------|:--------|
|                | AWSACCESSKEY  | Set AWS access key                                                                |         |
|                | AWSASSUMEROLE | Set arn of the role to be assumed                                                 |         |
|                | AWSCUSTOMMODE | Choose a custom mode                                                              | awscli  |
|                | AWSREGION     | Set the region name                                                               |         |
|                | AWSSECRETKEY  | Set AWS secret key                                                                |         |
|                | CONNECTIONID  | Connection id                                                                     |         |
|                | EXTRAOPTIONS  | Any extra option you may want to add to every command line (eg. a --verbose flag) |         |
|                | PROXYURL      | Proxy URL if any                                                                  |         |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_aws_directconnect_api.pl \
	--plugin=cloud::aws::directconnect::plugin \
	--mode=connections \
	--custommode=awscli \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --proxyurl='http://myproxy.mycompany.org:8080'
    --statistic=average \
    --timeframe='600' \
    --period='60' \
    --verbose
```

The expected command output is shown below:

```bash
OK: connection 'Centreon-EqFA5-Connection-1-10Gbps' state: available [bandwidth: 10Gbps] - statistic 'Average' outbound data: 19.58 Mb/s, inbound data: 53.96 Mb/s, inbound light level: -1.48 dBm, outbound light level: -1.37 dBm, outbound packets data: 7318.25 /s, inbound packet data: 8787.87 /s | 'Centreon-EqFA5-Connection-1-10Gbps~average#connection.egress.bitspersecond'=19579682.84bps;;;; 'Centreon-EqFA5-Connection-1-10Gbps~average#connection.ingress.bitspersecond'=53962349.94bps;;;; 'Centreon-EqFA5-Connection-1-10Gbps~average#connection.inbound.light.level.dbm'=-1.48dBm;;;; 'Centreon-EqFA5-Connection-1-10Gbps~average#connection.outbound.light.level.dbm'=-1.37dBm;;;; 'Centreon-EqFA5-Connection-1-10Gbps~average#connection.egress.packets.persecond'=7318.25/s;;;; 'Centreon-EqFA5-Connection-1-10Gbps~average#connection.ingress.packets.persecond'=8787.87/s;;;;
Checking connection 'Centreon-EqFA5-Connection-1-10Gbps' 
    state: available [bandwidth: 10Gbps]
    statistic 'Average' outbound data: 19.58 Mb/s, inbound data: 53.96 Mb/s, inbound light level: -1.48 dBm, outbound light level: -1.37 dBm, outbound packets data: 7318.25 /s, inbound packet data: 8787.87 /s
```

### Available custom modes

All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_directconnect_api.pl \
	--plugin=cloud::aws::directconnect::plugin \
    --list-custommode
```

The plugin brings the following custom modes:

* paws
* awscli

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_directconnect_api.pl \
	--plugin=cloud::aws::directconnect::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode                    | Template                                       |
|:------------------------|:-----------------------------------------------|
| connections             | Cloud-Aws-Directconnect-Connections-Api        |
| discovery               | Used for host discovery                        |
| list-connections        | Not used in this Plugin Pack                   |
| list-virtual-interfaces | Used for service discovery                     |
| virtual-interfaces      | Cloud-Aws-Directconnect-Virtual-Interfaces-Api |

### Available options

#### Global options

All global options are listed here:

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

All custom modes specific options are listed here:

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

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Connections" label="Connections">

| Option                       | Description                                                                                                                                                                                                            | Type |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --critical-connection-egress | ='10Mb' --verbose     See     'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing\_metrics\_wit     h\_cloudwatch.html' for more informations.      Default statistic: 'average' / All satistics are valid.   | Mode |
| --filter-connection-id       | Filter connection id (can be a regexp).                                                                                                                                                                                | Mode |
| --filter-metric              | Filter metrics (Can be: 'ConnectionBpsEgress', 'ConnectionBpsIngress', 'ConnectionPpsEgress', 'ConnectionPpsIngress', 'ConnectionLightLevelTx', 'ConnectionLightLevelRx') (Can be a regexp).                           | Mode |
| --warning-status             | Set warning threshold for status. Can used special variables like: %{state}, %{bandwidth}, %{connectionName}                                                                                                           | Mode |
| --critical-status            | Set critical threshold for status. Can used special variables like: %{state}, %{bandwidth}, %{connectionName}                                                                                                          | Mode |
| --warning-* --critical-*     | Thresholds. Can be 'connection-egress', 'connection-ingress', 'connection-packets-egress', 'connection-packets-ingress', 'connection-ligh-level-outbound', 'connection-ligh-level-inbound.                             | Mode |

</TabItem>
<TabItem value="Virtual-Interfaces" label="Virtual-Interfaces">

| Option                              | Description                                                                                                                                                                                                            | Type |
|:------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --critical-virtual-interface-egress | ='10Mb' --verbose     See     'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing\_metrics\_wit     h\_cloudwatch.html' for more informations.      Default statistic: 'average' / All satistics are valid.   | Mode |
| --filter-connection-id              | Filter connection id (can be a regexp).                                                                                                                                                                                | Mode |
| --filter-virtual-interface-id       | Filter virtual interface id (can be a regexp).                                                                                                                                                                         | Mode |
| --filter-metric                     | Filter metrics (Can be: 'VirtualInterfaceBpsEgress', 'VirtualInterfaceBpsIngress', 'VirtualInterfacePpsEgress', 'VirtualInterfacePpsIngress') (Can be a regexp).                                                       | Mode |
| --warning-status                    | Set warning threshold for status. Can used special variables like: %{state}, %{vlan}, %{type}, %{virtualInterfaceId}                                                                                                   | Mode |
| --critical-status                   | Set critical threshold for status. Can used special variables like: %{state}, %{vlan}, %{type}, %{virtualInterfaceId}                                                                                                  | Mode |
| --warning-* --critical-*            | Thresholds. Can be 'virtual-interface-egress', 'virtual-interface-ingress', 'virtual-interface-packets-egress', 'virtual-interface-packets-ingress'.                                                                   | Mode |

</TabItem>
</Tabs>


All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_directconnect_api.pl \
	--plugin=cloud::aws::directconnect::plugin \
	--mode=connections \
    --help
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
