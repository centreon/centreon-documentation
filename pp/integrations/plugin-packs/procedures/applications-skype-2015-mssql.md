---
id: applications-skype-2015-mssql
title: Skype 2015
description: "Monitor Skype for Business 2015 via its MSSQL database: call quality (QoE) for audio, video, and app sharing, poor calls, and session types."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Skype 2015** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Skype 2015** brings a host template:

* **App-Skype-2015-Mssql-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Skype-2015-Mssql-custom" label="App-Skype-2015-Mssql-custom">

| Service Alias   | Service Template                            | Service Description                    |
|:----------------|:--------------------------------------------|:---------------------------------------|
| App-Sharing-Qoe | App-Skype-2015-App-Sharing-Qoe-Mssql-custom | Check application sharing QoE metrics  |
| Audio-Qoe       | App-Skype-2015-Audio-Qoe-Mssql-custom       | Check audio streams QoE metrics        |
| Poor-Calls      | App-Skype-2015-Poor-Calls-Mssql-custom      | Check number of poor calls             |
| Session-Types   | App-Skype-2015-Session-Types-Mssql-custom   | Check number of sessions of each types |
| Video-Qoe       | App-Skype-2015-Video-Qoe-Mssql-custom       | Check video streams QoE metrics        |

> The services listed above are created automatically when the **App-Skype-2015-Mssql-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="App-Sharing-Qoe" label="App-Sharing-Qoe">

| Name                            | Unit      |
|:--------------------------------|:----------|
| spoiled-tile-prct-total-avg     | %         |
| rdp-tile-processing-latency-avg | ms        |
| relative-one-way-average        | ms        |
| stream-count                    | streams/s |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Audio-Qoe" label="Audio-Qoe">

| Name         | Unit      |
|:-------------|:----------|
| jitter-avg   | ms        |
| jitter-min   | ms        |
| jitter-max   | ms        |
| loss-avg     | %         |
| loss-min     | %         |
| loss-max     | %         |
| stream-count | streams/s |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Poor-Calls" label="Poor-Calls">

| Name   | Unit  |
|:-------|:------|
| global | calls |
| user   | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Session-Types" label="Session-Types">

| Name              | Unit     |
|:------------------|:---------|
| instant-messaging | sessions |
| audio             | sessions |
| video             | sessions |
| file-transfer     | sessions |
| remote-assistance | sessions |
| app-sharing       | sessions |
| app-invite        | sessions |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Video-Qoe" label="Video-Qoe">

| Name             | Unit      |
|:-----------------|:----------|
| packet-loss      | %         |
| post-fecplr      | %         |
| local-frame-loss | %         |
| recv-frame       | frames/s  |
| inbound-frame    | %         |
| outbound-frame   | %         |
| stream-count     | streams/s |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

To use the Skype 2015 connector, configure access to the MSSQL database with valid credentials (username and password) and ensure the server is accessible via the specified port.

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
dnf install centreon-pack-applications-skype-2015-mssql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-skype-2015-mssql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-skype-2015-mssql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-skype-2015-mssql
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Skype 2015** connector through
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
dnf install centreon-plugin-Applications-Skype-2015-Mssql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Skype-2015-Mssql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-skype-2015-mssql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Skype-2015-Mssql
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Skype-2015-Mssql-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro         | Description          | Default value     | Mandatory   |
|:--------------|:---------------------|:------------------|:-----------:|
| MSSQLUSERNAME | MSSQL username                     |                   |             |
| MSSQLPASSWORD | MSSQL password                     |                   |             |
| MSSQLPORT     | Database Server Port |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="App-Sharing-Qoe" label="App-Sharing-Qoe">

| Macro                        | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                    | Set the timeframe to query in seconds (default: 900)                                               | 900               |             |
| FILTERCOUNTERS               | Only display some counters (regexp can be used)                                                    |                   |             |
| WARNINGRDPPROCESSINGLATENCY  | Threshold                                                                                          |                   |             |
| CRITICALRDPPROCESSINGLATENCY | Threshold                                                                                          |                   |             |
| WARNINGRELATIVEONEWAY        | Threshold                                                                                          |                   |             |
| CRITICALRELATIVEONEWAY       | Threshold                                                                                          |                   |             |
| WARNINGSPOILEDPRCT           | Threshold                                                                                          |                   |             |
| CRITICALSPOILEDPRCT          | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Audio-Qoe" label="Audio-Qoe">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME         | Set the timeframe to query in seconds (default: 900)                                               | 900               |             |
| FILTERCOUNTERS    | Only display some counters (regexp can be used)                                                    |                   |             |
| WARNINGJITTERAVG  | Threshold                                                                                          |                   |             |
| CRITICALJITTERAVG | Threshold                                                                                          |                   |             |
| WARNINGJITTERMAX  | Threshold                                                                                          |                   |             |
| CRITICALJITTERMAX | Threshold                                                                                          |                   |             |
| WARNINGJITTERMIN  | Threshold                                                                                          |                   |             |
| CRITICALJITTERMIN | Threshold                                                                                          |                   |             |
| WARNINGLOSSAVG    | Threshold                                                                                          |                   |             |
| CRITICALLOSSAVG   | Threshold                                                                                          |                   |             |
| WARNINGLOSSMAX    | Threshold                                                                                          |                   |             |
| CRITICALLOSSMAX   | Threshold                                                                                          |                   |             |
| WARNINGLOSSMIN    | Threshold                                                                                          |                   |             |
| CRITICALLOSSMIN   | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Poor-Calls" label="Poor-Calls">

| Macro          | Description                                                                                        | Default value     | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME      | Set the timeframe to query in seconds (default: 900)                                               | 900               |             |
| FILTERCOUNTERS | Only display some counters (regexp can be used)                                                    |                   |             |
| WARNINGGLOBAL  | Set warning threshold for number of poor calls                                                     |                   |             |
| CRITICALGLOBAL | Set critical threshold for number of poor calls                                                    |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Session-Types" label="Session-Types">

| Macro                    | Description                                                                                        | Default value     | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                | Set the timeframe to query in seconds (default: 900)                                               | 900               |             |
| FILTERCOUNTERS           | Only display some counters (regexp can be used)                                                    |                   |             |
| WARNINGAPPINVITE         | Threshold                                                                                          |                   |             |
| CRITICALAPPINVITE        | Threshold                                                                                          |                   |             |
| WARNINGAPPSHARING        | Threshold                                                                                          |                   |             |
| CRITICALAPPSHARING       | Threshold                                                                                          |                   |             |
| WARNINGAUDIO             | Threshold                                                                                          |                   |             |
| CRITICALAUDIO            | Threshold                                                                                          |                   |             |
| WARNINGFILETRANSFER      | Threshold                                                                                                   |                   |             |
| CRITICALFILETRANSFER     | Threshold                                                                                                   |                   |             |
| WARNINGIM                | Threshold                                                                                          |                   |             |
| CRITICALIM               | Threshold                                                                                          |                   |             |
| WARNINGREMOTEASSISTANCE  | Threshold                                                                                          |                   |             |
| CRITICALREMOTEASSISTANCE | Threshold                                                                                          |                   |             |
| WARNINGVIDEO             | Threshold                                                                                          |                   |             |
| CRITICALVIDEO            | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Video-Qoe" label="Video-Qoe">

| Macro                 | Description                                                                                        | Default value     | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME             | Set the timeframe to query in seconds (default: 900)                                               | 900               |             |
| FILTERCOUNTERS        | Only display some counters (regexp can be used)                                                    |                   |             |
| WARNINGFRAMELOSS      | Threshold                                                                                          |                   |             |
| CRITICALFRAMELOSS     | Threshold                                                                                          |                   |             |
| WARNINGINBOUNDFRAME   | Threshold                                                                                                   |                   |             |
| CRITICALINBOUNDFRAME  | Threshold                                                                                                   |                   |             |
| WARNINGOUTBOUNDFRAME  | Threshold                                                                                          |                   |             |
| CRITICALOUTBOUNDFRAME | Threshold                                                                                          |                   |             |
| CRITICALPACKETLOSS    | Threshold                                                                                          |                   |             |
| WARNINGPCKTLOSS       | Threshold                                                                                          |                   |             |
| WARNINGPOSTFECPLR     | Threshold                                                                                          |                   |             |
| CRITICALPOSTFECPLR    | Threshold                                                                                          |                   |             |
| WARNINGRECEIVEFRAME   | Threshold                                                                                          |                   |             |
| CRITICALRECEIVEFRAME  | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_skype_2015_sql.pl \
	--plugin=database::mssql::plugin \
	--dyn-mode=centreon::common::microsoft::skype::mssql::mode::videoqoe \
	--hostname=10.0.0.1 \
	--username='' \
	--password='' \
	--port= \
	--timeframe='900' \
	--warning-recv-frame='' \
	--critical-recv-frame='' \
	--warning-local-frame-loss='' \
	--critical-local-frame-loss='' \
	--warning-post-fecplr='' \
	--critical-post-fecplr='' \
	--warning-packet-loss='' \
	--critical-packet-loss='' \
	--warning-inbound-frame='' \
	--critical-inbound-frame='' \
	--warning-outbound-frame='' \
	--critical-outbound-frame='' \
	--filter-counters=''
```

The expected command output is shown below:

```bash
OK: Packet Loss Rate: 58884% Packet Loss Rate After Correction: 76695% Video Frame Loss: 19129% Receiver Frame Rate: 35138/s Inbound Video Frame Rate: 54113% Outbound Video Frame Rate: 68463% Streams Count: 79965/s | 'packet-loss'=58884%;;;0;100 'post-fecplr'=76695%;;;0;100 'local-frame-loss'=19129%;;;0;100 'recv-frame'=35138frames/s;;;0; 'inbound-frame'=54113%;;;0;100 'outbound-frame'=68463%;;;0;100 'stream-count'=79965streams/s;;;0;
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
/usr/lib/centreon/plugins/centreon_skype_2015_sql.pl \
	--plugin=database::mssql::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                              | Linked service template                     |
|:--------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| appsharingqoe [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/microsoft/skype/mssql/mode/appsharingqoe.pm)] | App-Skype-2015-App-Sharing-Qoe-Mssql-custom |
| audioqoe [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/microsoft/skype/mssql/mode/audioqoe.pm)]           | App-Skype-2015-Audio-Qoe-Mssql-custom       |
| backup-age [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/backupage.pm)]                               | Not used in this Monitoring Connector       |
| blocked-processes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/blockedprocesses.pm)]                 | Not used in this Monitoring Connector       |
| cache-hitratio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/cachehitratio.pm)]                       | Not used in this Monitoring Connector       |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]               | Not used in this Monitoring Connector       |
| connected-users [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/connectedusers.pm)]                     | Not used in this Monitoring Connector       |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)]      | Not used in this Monitoring Connector       |
| databases-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/databasessize.pm)]                       | Not used in this Monitoring Connector       |
| dead-locks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/deadlocks.pm)]                               | Not used in this Monitoring Connector       |
| failed-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/failedjobs.pm)]                             | Not used in this Monitoring Connector       |
| list-databases [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/listdatabases.pm)]                       | Not used in this Monitoring Connector       |
| locks-waits [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/lockswaits.pm)]                             | Not used in this Monitoring Connector       |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database.pm)]                                                          | Not used in this Monitoring Connector       |
| page-life-expectancy [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/pagelifeexpectancy.pm)]            | Not used in this Monitoring Connector       |
| poorcalls [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/microsoft/skype/mssql/mode/poorcalls.pm)]         | App-Skype-2015-Poor-Calls-Mssql-custom      |
| sessionstypes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/microsoft/skype/mssql/mode/sessionstypes.pm)] | App-Skype-2015-Session-Types-Mssql-custom   |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]                             | Not used in this Monitoring Connector       |
| sql-string [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sqlstring.pm)]                | Not used in this Monitoring Connector       |
| tables [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/tables.pm)]                                      | Not used in this Monitoring Connector       |
| transactions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/transactions.pm)]                          | Not used in this Monitoring Connector       |
| videoqoe [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/microsoft/skype/mssql/mode/videoqoe.pm)]           | App-Skype-2015-Video-Qoe-Mssql-custom       |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sqlmode                                  |   This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-sqlmode                             |   List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --multiple                                 |   Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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
| --hostname                                 |   Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     |   Database Server Port.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --server                                   |   An alternative to hostname+port. \<server\> will be looked up in the file freetds.conf.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --database                                 |   Select database .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="App-Sharing-Qoe" label="App-Sharing-Qoe">

| Option            | Description                                                                                                                         |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used).                                                                                  |
| --timeframe       |   Set the timeframe to query in seconds (default: 900)                                                                              |
| --warning-*       |   Set warning thresholds. Can be : 'spoiled-tile-prct-total-avg', 'rdp-tile-processing-latency-avg', 'relative-one-way-average'     |
| --critical-*      |   Set critical thresholds. Can be : 'spoiled-tile-prct-total-avg', 'rdp-tile-processing-latency-avg', 'relative-one-way-average'    |

</TabItem>
<TabItem value="Audio-Qoe" label="Audio-Qoe">

| Option            | Description                                                                                                         |
|:------------------|:--------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used).                                                                  |
| --timeframe       |   Set the timeframe to query in seconds (default: 900)                                                              |
| --warning-*       |   Set warning thresholds. Can be : 'jitter-min', 'jitter-max', 'jitter-avg', 'loss-min', 'loss-max', 'loss-avg'     |
| --critical-*      |   Set critical thresholds. Can be : 'jitter-min', 'jitter-max', 'jitter-avg', 'loss-min', 'loss-max', 'loss-avg'    |

</TabItem>
<TabItem value="Poor-Calls" label="Poor-Calls">

| Option            | Description                                              |
|:------------------|:---------------------------------------------------------|
| --filter-user     |   Filter user name (can be a regexp)                     |
| --filter-counters |   Only display some counters (regexp can be used).       |
| --timeframe       |   Set the timeframe to query in seconds (default: 900)   |
| --warning-global  |   Set warning threshold for number of poor calls.        |
| --critical-global |   Set critical threshold for number of poor calls.       |

</TabItem>
<TabItem value="Session-Types" label="Session-Types">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used).                                                                            |
| --timeframe       |   Set the timeframe to query in seconds (default: 900)                                                                        |
| --warning-*       |   Set warning threshold. Can be : 'instant-messaging', 'app-sharing', 'audio', 'video', 'app-invite', 'remote-assistance'     |
| --critical-*      |   Set critical threshold. Can be : 'instant-messaging', 'app-sharing', 'audio', 'video', 'app-invite', 'remote-assistance'    |

</TabItem>
<TabItem value="Video-Qoe" label="Video-Qoe">

| Option            | Description                                                                                                                            |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used).                                                                                     |
| --timeframe       |   Set the timeframe to query in seconds (default: 900)                                                                                 |
| --warning-*       |   Set warning thresholds. Can be : 'recv-frame', 'local-frame-loss', 'post-fecplr', 'packet-loss', 'inboud-frame', 'outbound-frame'    |
| --critical-*      |   Set critical thresholds. Can be : 'recv-frame', 'local-frame-loss', 'post-fecplr', packet-loss', 'inboud-frame', 'outbound-frame'    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_skype_2015_sql.pl \
	--plugin=database::mssql::plugin \
	--dyn-mode=centreon::common::microsoft::skype::mssql::mode::videoqoe \
	--help
```
