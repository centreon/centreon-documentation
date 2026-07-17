---
id: blockchain-hyperledger-exporter
title: Hyperledger API
description: "Monitor Hyperledger Fabric via its exporter API over HTTP/HTTPS: channel transactions, gossip peers, ledger and blockchain height."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Hyperledger API** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Hyperledger API** brings a host template:

* **Blockchain-Hyperledger-Exporter-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Blockchain-Hyperledger-Exporter-custom" label="Blockchain-Hyperledger-Exporter-custom">

| Service Alias | Service Template                                | Service Description             |
|:--------------|:------------------------------------------------|:--------------------------------|
| Channels      | Blockchain-Hyperledger-Exporter-Channels-custom | Check blockchain system |

> The services listed above are created automatically when the **Blockchain-Hyperledger-Exporter-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Channels" label="Channels">

| Name                                                        | Unit  |
|:------------------------------------------------------------|:------|
| *channel*~channel.ledger.transaction.count                  | count |
| *channel*~channel.gossip.membership.total.peers.known.count | count |
| *channel*~channel.gossip.state.height.count                 | count |
| *channel*~channel.ledger.blockchain.height.count            | count |

</TabItem>
</Tabs>

## Prerequisites

The Hyperledger exporter must be installed, accessible from the Centreon poller via HTTP or HTTPS, and expose an API on a URL and port reachable from the poller.

## Installing the monitoring connector

### Pack

The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-blockchain-hyperledger-exporter
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-blockchain-hyperledger-exporter
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-blockchain-hyperledger-exporter
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-blockchain-hyperledger-exporter
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Hyperledger API** connector through
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
dnf install centreon-plugin-Blockchain-Hyperledger-Exporter
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Blockchain-Hyperledger-Exporter
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-blockchain-hyperledger-exporter
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Blockchain-Hyperledger-Exporter
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Blockchain-Hyperledger-Exporter-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                                                                          | Default value     | Mandatory   |
|:---------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXPORTERPROTO        | Specify https if needed (default: 'http')                                                            | http              |             |
| EXPORTERAPIPORT      | Port used by the Hyperledger Exporter                                                                                                     | 80                |             |
| EXPORTERAPIURLPATH   | URL to access the Hyperledger Exporter                                                                                                     | /                 |             |
| EXPORTERAPIPORT      | Port used (default: 80)                                                                              |                   |             |
| EXPORTERURLPATH      | The URL path used to reach the exporter’s HTTP endpoint                                                                                                     |                   |             |
| EXPORTEREXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |
| TIMEOUT              | Timeout in seconds for the command (default: 45). Default value can be override by the mode          |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Channels" label="Channels">

| Macro                                   | Description                                                                                        | Default value     | Mandatory   |
|:----------------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                              | Filter channel channel (can be a regexp)                                                           | .*                |             |
| WARNINGGOSSIPMEMBERSHIPTOTALPEERSKNOWN  | Threshold                                                                                                   |                   |             |
| CRITICALGOSSIPMEMBERSHIPTOTALPEERSKNOWN | Threshold                                                                                                   |                   |             |
| WARNINGGOSSIPSTATEHEIGHT                | Threshold                                                                                                   |                   |             |
| CRITICALGOSSIPSTATEHEIGHT               | Threshold                                                                                                   |                   |             |
| WARNINGGPVDTIMELE1                      | Threshold                                                                                                   |                   |             |
| CRITICALGPVDTIMELE1                     | Threshold                                                                                                   |                   |             |
| WARNINGGPVDTIMELE10                     | Threshold                                                                                                   |                   |             |
| CRITICALGPVDTIMELE10                    | Threshold                                                                                                   |                   |             |
| WARNINGGPVDTIMELE5                      | Threshold                                                                                                   |                   |             |
| CRITICALGPVDTIMELE5                     | Threshold                                                                                                   |                   |             |
| WARNINGGPVDTIMELEINFINITE               | Threshold                                                                                                   |                   |             |
| CRITICALGPVDTIMELEINFINITE              | Threshold                                                                                                   |                   |             |
| WARNINGGPVDTOTAL                        | Threshold                                                                                                   |                   |             |
| CRITICALGPVDTOTAL                       | Threshold                                                                                                   |                   |             |
| WARNINGGSCDTIMELE1                      | Threshold                                                                                                   |                   |             |
| CRITICALGSCDTIMELE1                     | Threshold                                                                                                   |                   |             |
| WARNINGGSCDTIMELE10                     | Threshold                                                                                                   |                   |             |
| CRITICALGSCDTIMELE10                    | Threshold                                                                                                   |                   |             |
| WARNINGGSCDTIMELE5                      | Threshold                                                                                                   |                   |             |
| CRITICALGSCDTIMELE5                     | Threshold                                                                                                   |                   |             |
| WARNINGGSCDTIMELEINFINITE               | Threshold                                                                                                   |                   |             |
| CRITICALGSCDTIMELEINFINITE              | Threshold                                                                                                   |                   |             |
| WARNINGGSCDTOTAL                        | Threshold                                                                                                   |                   |             |
| CRITICALGSCDTOTAL                       | Threshold                                                                                                   |                   |             |
| WARNINGLEDGERBLOCKCHAINHEIGHT           | Threshold                                                                                                   |                   |             |
| CRITICALLEDGERBLOCKCHAINHEIGHT          | Threshold                                                                                                   |                   |             |
| WARNINGLEDGERTRANSACTION                | Threshold                                                                                                   |                   |             |
| CRITICALLEDGERTRANSACTION               | Threshold                                                                                                   |                   |             |
| EXTRAOPTIONS                            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_blockchain_hyperledger_exporter_api.pl \
	--plugin=blockchain::hyperledger::exporter::plugin \
	--custommode=web \
	--mode=channels \
	--hostname=10.0.0.1 \
	--filter-name='.*' \
	--port='' \
	--proto='http' \
	--url-path='' \
	--timeout=''  \
	--warning-gscd-total='' \
	--critical-gscd-total='' \
	--warning-gscd-time-le-0.005='' \
	--critical-gscd-time-le-0.005='' \
	--warning-gscd-time-le-0.01='' \
	--critical-gscd-time-le-0.01='' \
	--warning-gscd-time-le-0.025='' \
	--critical-gscd-time-le-0.025='' \
	--warning-gscd-time-le-0.05='' \
	--critical-gscd-time-le-0.05='' \
	--warning-gscd-time-le-0.1='' \
	--critical-gscd-time-le-0.1='' \
	--warning-gscd-time-le-0.25='' \
	--critical-gscd-time-le-0.25='' \
	--warning-gscd-time-le-0.5='' \
	--critical-gscd-time-le-0.5='' \
	--warning-gscd-time-le-1='' \
	--critical-gscd-time-le-1='' \
	--warning-gscd-time-le-2.5='' \
	--critical-gscd-time-le-2.5='' \
	--warning-gscd-time-le-5='' \
	--critical-gscd-time-le-5='' \
	--warning-gscd-time-le-10='' \
	--critical-gscd-time-le-10='' \
	--warning-gscd-time-le-infinite='' \
	--critical-gscd-time-le-infinite='' \
	--warning-ledger-transaction='' \
	--critical-ledger-transaction='' \
	--warning-gossip-membership-total-peers-known='' \
	--critical-gossip-membership-total-peers-known='' \
	--warning-gossip-state-height='' \
	--critical-gossip-state-height='' \
	--warning-ledger-blockchain-height='' \
	--critical-ledger-blockchain-height='' \
	--warning-gpvd-total='' \
	--critical-gpvd-total='' \
	--warning-gpvd-time-le-0.005='' \
	--critical-gpvd-time-le-0.005='' \
	--warning-gpvd-time-le-0.01='' \
	--critical-gpvd-time-le-0.01='' \
	--warning-gpvd-time-le-0.025='' \
	--critical-gpvd-time-le-0.025='' \
	--warning-gpvd-time-le-0.05='' \
	--critical-gpvd-time-le-0.05='' \
	--warning-gpvd-time-le-0.1='' \
	--critical-gpvd-time-le-0.1='' \
	--warning-gpvd-time-le-0.25='' \
	--critical-gpvd-time-le-0.25='' \
	--warning-gpvd-time-le-0.5='' \
	--critical-gpvd-time-le-0.5='' \
	--warning-gpvd-time-le-1='' \
	--critical-gpvd-time-le-1='' \
	--warning-gpvd-time-le-2.5='' \
	--critical-gpvd-time-le-2.5='' \
	--warning-gpvd-time-le-5='' \
	--critical-gpvd-time-le-5='' \
	--warning-gpvd-time-le-10='' \
	--critical-gpvd-time-le-10='' \
	--warning-gpvd-time-le-infinite='' \
	--critical-gpvd-time-le-infinite=''
```

The expected command output is shown below:

```bash
OK: number of transactions processed: 84034 total known peers: 72246 current ledger height: 30323 height of the chain in blocks: 59805 | 'channel~channel.ledger.transaction.count'=84034;;;0; 'channel~channel.gossip.membership.total.peers.known.count'=72246;;;0; 'channel~channel.gossip.state.height.count'=30323;;;0; 'channel~channel.ledger.blockchain.height.count'=59805;;;0;
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
/usr/lib/centreon/plugins/centreon_blockchain_hyperledger_exporter_api.pl \
	--plugin=blockchain::hyperledger::exporter::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                              | Linked service template                         |
|:----------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| channels [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/blockchain/hyperledger/exporter/mode/channels.pm)] | Blockchain-Hyperledger-Exporter-Channels-custom |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Channels" label="Channels">

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-name                              |   Filter channel channel (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --warning-* --critical-*                   |   Thresholds. Use --list-counters to get available thresholds options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   Hostname to query (with ssh).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     |   Port used (default: 80)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    |   Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --urlpath                                  |   URL to scrape metrics from (default: '/metrics').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --username                                 |   Endpoint username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --password                                 |   Endpoint password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  |   Timeout in seconds for the command (default: 45). Default value can be override by the mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command                                  |   Command to get information (default: 'cat').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command-path                             |   Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          |   Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sudo                                     |   sudo command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --ssh-backend                              |   Define the backend you want to use. It can be: C\<sshcli\> (default), C\<plink\> and C\<libssh\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --ssh-username                             |   Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             |   Define the password associated with the user name. Cannot be used with the C\<sshcli\> backend. Warning: using a password is not recommended. Use C\<--ssh-priv-key\> instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-port                                 |   Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             |   Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_blockchain_hyperledger_exporter_api.pl \
	--plugin=blockchain::hyperledger::exporter::plugin \
	--custommode=web \
	--help
```
