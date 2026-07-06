---
id: applications-ibm-tsamp-ssh
title: IBM TSAMP SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **IBM TSAMP SSH** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **IBM TSAMP SSH** brings a host template:

* **App-Ibm-Tsamp-SSH-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Ibm-Tsamp-SSH-custom" label="App-Ibm-Tsamp-SSH-custom">

| Service Alias   | Service Template                         | Service Description   | Discovery  |
|:----------------|:-----------------------------------------|:----------------------|:----------:|
| Resource-Groups | App-Ibm-Tsamp-Resource-Groups-Ssh-custom | Check resource groups | X          |

> The services listed above are created automatically when the **App-Ibm-Tsamp-SSH-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                             | Description |
|:--------------------------------------|:------------|
| App-Ibm-Tsamp-SSH-Resource-Group-Name | Discover resource groups and monitor status             |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Resource-Groups" label="Resource-Groups">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |

</TabItem>
</Tabs>

## Prerequisites

### SSH configuration

A user is required to query the resource by SSH. There is no need for root or sudo
privileges. There are two possible ways to log in through SSH, either by
exchanging the SSH key from **centreon-engine** user to the target resource, or by
setting your unique user and password directly in the host macros.

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
dnf install centreon-pack-applications-ibm-tsamp-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-ibm-tsamp-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-ibm-tsamp-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-ibm-tsamp-ssh
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **IBM TSAMP SSH** connector through
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
dnf install centreon-plugin-Applications-Ibm-Tsamp-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Ibm-Tsamp-Ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-ibm-tsamp-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Ibm-Tsamp-Ssh
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Ibm-Tsamp-SSH-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                                                         | Default value     | Mandatory   |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli (default), plink and libssh                                                                                   | libssh            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                                                                |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Resource-Groups" label="Resource-Groups">

| Macro                       | Description                                                                                                                                                                                                                                       | Default value                                                                          | Mandatory   |
|:----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS               | Define the conditions to match for the status to be UNKNOWN (default: '%\{opState\} =~ /unknown/i'). You can use the following variables: %\{opState\}, %\{nominalState\}, %\{name\}                                                              | %\{opState\} =~ /unknown/i                                                             |             |
| FILTERRGNAME                | Filter resource groups by name (can be a regexp)                                                                                                                                                                                                  |                                                                                        |             |
| EXCLUDEGNAME                | Exclude resource groups by name (can be a regexp)                                                                                                                                                                                                 |                                                                                        |             |
| WARNINGSTATUS               | Define the conditions to match for the status to be WARNING (default: '%\{opState\} =~ /pending/i'). You can use the following variables: %\{opState\}, %\{nominalState\}, %\{name\}                                                              | %\{opState\} =~ /pending/i                                                             |             |
| CRITICALSTATUS              | Define the conditions to match for the status to be CRITICAL (default: '%\{opState\} =~ /failed offline\|stuck online/i \|\| %\{opState\} ne %\{nominalState\}'). You can use the following variables: %\{opState\}, %\{nominalState\}, %\{name\} | %\{opState\} =~ /failed offline\|stuck online/i \|\| %\{opState\} ne %\{nominalState\} |             |
| WARNINGTOTALFAILEDOFFLINE   | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| CRITICALTOTALFAILEDOFFLINE  | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| WARNINGTOTALINELIGIBLE      | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| CRITICALTOTALINELIGIBLE     | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| WARNINGTOTALOFFLINE         | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| CRITICALTOTALOFFLINE        | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| WARNINGTOTALONLINE          | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| CRITICALTOTALONLINE         | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| WARNINGTOTALPENDINGOFFLINE  | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| CRITICALTOTALPENDINGOFFLINE | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| WARNINGTOTALPENDINGONLINE   | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| CRITICALTOTALPENDINGONLINE  | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| WARNINGTOTALSTUCKONLINE     | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| CRITICALTOTALSTUCKONLINE    | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| WARNINGTOTALUNKNOWN         | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| CRITICALTOTALUNKNOWN        | Threshold                                                                                                                                                                                                                                         |                                                                                        |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                | --verbose --sudo                                                                       |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_ibm_tsamp_ssh.pl \
	--plugin=apps::ibm::tsamp::local::plugin \
	--mode=resource-groups \
	--hostname='10.0.0.1' \
	--ssh-backend='libssh' \
	--ssh-username='' \
	--ssh-password='' \
	--ssh-port=''  \
	--filter-rg-name='' \
	--exclude-rg-name='' \
	--unknown-status='%\{opState\} =~ /unknown/i' \
	--warning-status='%\{opState\} =~ /pending/i' \
	--critical-status='%\{opState\} =~ /failed offline|stuck online/i || %\{opState\} ne %\{nominalState\}' \
	--warning-total-unknown='' \
	--critical-total-unknown='' \
	--warning-total-offline='' \
	--critical-total-offline='' \
	--warning-total-online='' \
	--critical-total-online='' \
	--warning-total-failed-offline='' \
	--critical-total-failed-offline='' \
	--warning-total-stuck-online='' \
	--critical-total-stuck-online='' \
	--warning-total-pending-online='' \
	--critical-total-pending-online='' \
	--warning-total-pending-offline='' \
	--critical-total-pending-offline='' \
	--warning-total-ineligible='' \
	--critical-total-ineligible='' \
	--verbose \
	--sudo
```

The expected command output is shown below:

```bash
OK: All resource groups are ok | 'resource_groups.unknown.count'=0;;;0; 'resource_groups.offline.count'=0;;;0; 'resource_groups.online.count'=5;;;0; 'resource_groups.failed_offline.count'=0;;;0; 'resource_groups.stuck_online.count'=0;;;0; 'resource_groups.pending_online.count'=0;;;0; 'resource_groups.pending_offline.count'=0;;;0; 'resource_groups.ineligible.count'=0;;;0;
Resource group 'db2_db2inst1_db2inst1_AUDIT-rg' operational state: online [nominal: online]
Resource group 'db2_db2inst1_db2inst1_AUDIT2-rg' operational state: online [nominal: online]
Resource group 'db2_db2inst1_db2inst1_TCDB-rg' operational state: online [nominal: online]
Resource group 'db2_db2inst1_netdb101-v_0-rg' operational state: online [nominal: online]
Resource group 'db2_db2inst1_netdb102-v_0-rg' operational state: online [nominal: online]

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
/usr/lib/centreon/plugins/centreon_ibm_tsamp_ssh.pl \
	--plugin=apps::ibm::tsamp::local::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                         | Linked service template                  |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|
| list-resource-groups [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ibm/tsamp/local/mode/listresourcegroups.pm)] | Used for service discovery               |
| resource-groups [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ibm/tsamp/local/mode/resourcegroups.pm)]          | App-Ibm-Tsamp-Resource-Groups-Ssh-custom |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Resource-Groups" label="Resource-Groups">

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                          |   Only display some counters (regexp can be used). Example: --filter-counters='total'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --filter-rg-name                           |   Filter resource groups by name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --exclude-rg-name                          |   Exclude resource groups by name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --unknown-status                           |   Define the conditions to match for the status to be UNKNOWN (default: '%\{opState\} =~ /unknown/i'). You can use the following variables: %\{opState\}, %\{nominalState\}, %\{name\}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --warning-status                           |   Define the conditions to match for the status to be WARNING (default: '%\{opState\} =~ /pending/i'). You can use the following variables: %\{opState\}, %\{nominalState\}, %\{name\}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --critical-status                          |   Define the conditions to match for the status to be CRITICAL (default: '%\{opState\} =~ /failed offline\|stuck online/i \|\| %\{opState\} ne %\{nominalState\}'). You can use the following variables: %\{opState\}, %\{nominalState\}, %\{name\}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --warning-* --critical-*                   |   Thresholds. Can be: 'total-unknown', 'total-offline', 'total-online', 'total-failed-offline', 'total-stuck-online', 'total-pending-online', 'total-pending-offline', 'total-ineligible'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
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
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --ssh-backend                              |   Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --ssh-username                             |   Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --ssh-password                             |   Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-port                                 |   Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --ssh-priv-key                             |   Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --hostname                                 |   Hostname to query in ssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --timeout                                  |   Timeout in seconds for the command (default: 45). Default value can be override by the mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --command                                  |   Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command-path                             |   Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --command-options                          |   Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --sudo                                     |   sudo command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ibm_tsamp_ssh.pl \
	--plugin=apps::ibm::tsamp::local::plugin \
	--mode=resource-groups \
	--help
```
