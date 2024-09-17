---
id: infrastructure-active-directory-nsclient-05-restapi
title: Microsoft Active Directory NSClient++ API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Active Directory API** brings a host template:

* **Infra-ActiveDirectory-NSClient-05-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Infra-ActiveDirectory-NSClient-05-Restapi-custom" label="Infra-ActiveDirectory-NSClient-05-Restapi-custom">

| Service Alias        | Service Template                                                  | Service Description                                                                   |
|:---------------------|:------------------------------------------------------------------|:--------------------------------------------------------------------------------------|
| Ad-Domain-Controller | Infra-ActiveDirectory-Domain-Controller-NSClient05-Restapi-custom | This check runs diagnostics on the domain controller. It executes the "dcdiag" command  |

> The services listed above are created automatically when the **Infra-ActiveDirectory-NSClient-05-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                                             | Service Description |
|:--------------|:-------------------------------------------------------------|:--------------------|
| Dfsr-Backlog  | Infra-ActiveDirectory-Dfsr-Backlog-NSClient05-Restapi-custom | Check the Distributed File Systems Replication backlog  |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Ad-Domain-Controller" label="Ad-Domain-Controller">

| Metric name        | Unit  |
|:-------------------|:------|
| domain controller status | N/A |

</TabItem>
<TabItem value="Dfsr-Backlog" label="Dfsr-Backlog">

| Metric name        | Unit  |
|:-------------------|:------|
| backlog.file.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

### Centreon NSClient++

To monitor a resource through NSClient++ API, install the Centreon
packaged version of the NSClient++ agent. Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md)
and make sure that the **Webserver / RESTApi** configuration is correct.

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
dnf install centreon-pack-infrastructure-active-directory-nsclient-05-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-infrastructure-active-directory-nsclient-05-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-infrastructure-active-directory-nsclient-05-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-infrastructure-active-directory-nsclient-05-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Active Directory API** connector through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-windows-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Infra-ActiveDirectory-NSClient-05-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                     | Description                                                                                                                               | Default value     | Mandatory   |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NSCPRESTAPILEGACYPASSWORD | Password used (configured in the prerequisites section)                                                                                   | PASSWORD          |             |
| NSCPRESTAPIPROTO          | Protocol used                                                                                                                             | https             |             |
| NSCPRESTAPIPORT           | Port used by the REST API NSClient++                                                                                                       | 8443              |             |
| NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).  |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Ad-Domain-Controller" label="Ad-Domain-Controller">

| Macro        | Description                                                                                                                                           | Default value     | Mandatory   |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| LANGUAGE     | Set the language used in config file                                                                                                                  | en                |             |
| CONFIGFILE   | The command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file. |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).      |                   |             |

</TabItem>
<TabItem value="Dfsr-Backlog" label="Dfsr-Backlog">

| Macro            | Description                                                                                                                            | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SENDINGMEMBER    | Name of the member that is sending the replication data.                                                                               |                   | X           |
| REPLICATIONGROUP | Name for the replication group.                                                                                                        |                   | X           |
| REPLICATEDFOLDER | Name for the replicated folder.                                                                                                   |                   | X           |
| WARNINGBACKLOG   | Warning threshold                                                                                                                      |                   |             |
| CRITICALBACKLOG  | Critical threshold                                                                                                                     |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
	--plugin=apps::nsclient::restapi::plugin \
	--mode=query \
	--hostname='10.0.0.1' \
	--port='8443' \
	--proto='https' \
	--legacy-password='PASSWORD'  \
	--command=check_centreon_plugins \
	--arg='apps::microsoft::activedirectory::local::plugin' \
	--arg='dfsr-backlog' \
	--arg=' \
	--sending-member="" \
	--replication-group="" \
	--replicated-folder="" \
	--warning-backlog="" \
	--critical-backlog="" '
```

The expected command output is shown below:

```bash
OK: Backlog File Count : 87 | 'backlog.file.count'=87;;;0;
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
	--plugin=apps::nsclient::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                          | Linked service template                                           |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|
| dcdiag [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/activedirectory/local/mode/dcdiag.pm)]            | Infra-ActiveDirectory-Domain-Controller-NSClient05-Restapi-custom |
| dfsr-backlog [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/activedirectory/local/mode/dfsrbacklog.pm)] | Infra-ActiveDirectory-Dfsr-Backlog-NSClient05-Restapi-custom      |
| netdom [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/activedirectory/local/mode/netdom.pm)]            | Not used in this Monitoring Connector                             |

### Available options

#### Generic options

All generic options are listed here:

| Option          | Description                                                                                                                   |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------|
| --mode          | Define the mode in which you want the plugin to be executed (see--list-mode).                                                 |
| --dyn-mode      | Specify a mode with the module's path (advanced).                                                                             |
| --list-mode     | List all available modes.                                                                                                     |
| --mode-version  | Check minimal version of mode. If not, unknown error.                                                                         |
| --version       | Return the version of the plugin.                                                                                             |
| --pass-manager  | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass. |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Ad-Domain-Controller" label="Ad-Domain-Controller">

| Option             | Description                                                                                                                                           |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| --config           | The command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file. |
| --language         | Set the language used in config file (default: 'en').                                                                                                 |
| --dfsr             | Specifies that SysVol replication uses DFS instead of FRS (Windows 2008 or later)                                                                     |
| --noeventlog       | Don't run the dc tests kccevent, frsevent and dfsrevent.                                                                                              |
| --nomachineaccount | Don't run the dc tests machineaccount.                                                                                                                |
| --timeout          | Set timeout time for command execution (default: 30 sec).                                                                                             |

</TabItem>
<TabItem value="Dfsr-Backlog" label="Dfsr-Backlog">

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
| --sending-member                           | Name of the member that is sending the replication data. (mandatory)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --receiving-member                         | Name of the member that is receiving the replication data. (NOT Mandatory)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --replication-group                        | Name for the replication group. (mandatory)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --replicated-folder                        | Name name for the replicated folder. (mandatory)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --timeout                                  | Timeout in seconds for the command (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --warning-backlog                          | Warning threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --critical-backlog                         | Critical threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
	--plugin=apps::nsclient::restapi::plugin \
	--mode=query \
	--help
```
