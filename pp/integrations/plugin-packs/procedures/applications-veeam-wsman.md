---
id: applications-veeam-wsman
title: Veeam WSMAN
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Veeam WSMAN** brings a host template:

* **App-Veeam-WSMAN-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Veeam-WSMAN-custom" label="App-Veeam-WSMAN-custom">

| Service Alias | Service Template                    | Service Description                     |
|:--------------|:------------------------------------|:----------------------------------------|
| Job-Status    | App-Veeam-Job-Status-WSMAN-custom   | Monitor the statuses of the backup jobs |
| Licenses      | App-Veeam-Licenses-WSMAN-custom     | Monitor licenses                        |
| Repositories  | App-Veeam-Repositories-WSMAN-custom | Monitor backup repositories             |
| Tape-Jobs     | App-Veeam-Tape-Jobs-WSMAN-custom    | Monitor the status of tape jobs             |
| Vsb-Jobs      | App-Veeam-Vsb-Jobs-WSMAN-custom     | Monitor SureBackup jobs                 |

> The services listed above are created automatically when the **App-Veeam-WSMAN-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Job-Status" label="Job-Status">

| Metric name         | Unit  |
|:--------------------|:------|
| jobs.detected.count | count |
| *job*#status        | N/A   |
| *job*#long          | N/A   |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| licenses.total.count                          | count |
| *licenses*#status                             | N/A   |
| *licenses*#license.expires.seconds            | s     |
| *licenses*#license.instances.usage.count      | count |
| *licenses*#license.instances.free.count       | count |
| *licenses*#license.instances.usage.percentage | %     |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Metric name                                      | Unit  |
|:-------------------------------------------------|:------|
| *repositories*~status                            | N/A   |
| *repositories*~repository.space.usage.bytes      | B     |
| *repositories*~repository.space.free.bytes       | B     |
| *repositories*~repository.space.usage.percentage | %     |

</TabItem>
<TabItem value="Tape-Jobs" label="Tape-Jobs">

| Metric name          | Unit  |
|:---------------------|:------|
| tapejobs.total.count | count |

</TabItem>
<TabItem value="Vsb-Jobs" label="Vsb-Jobs">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| sure_backup.jobs.detected.count | count |
| sure_backup.jobs.success.count  | count |
| sure_backup.jobs.failed.count   | count |
| sure_backup.jobs.warning.count  | count |
| *jobs*#status                   | N/A   |

</TabItem>
</Tabs>

## Prerequisites

To monitor Windows Servers through WSMAN, please follow our [official documentation](../getting-started/how-to-guides/windows-winrm-wsman-tutorial.md) and make sure that WinRM and all rights are properly configured.

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
dnf install centreon-pack-applications-veeam-wsman
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-veeam-wsman
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-veeam-wsman
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-veeam-wsman
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Veeam WSMAN** connector through
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
dnf install centreon-plugin-Applications-Backup-Veeam-Wsman
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Backup-Veeam-Wsman
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-backup-veeam-wsman
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Backup-Veeam-Wsman
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Veeam-WSMAN-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro             | Description                                                                                                    | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WSMANUSERNAME     | Define the username for authentication                                                                         | USERNAME          |             |
| WSMANPASSWORD     | Define the password associated with the user name                                                              | PASSWORD          |             |
| WSMANPORT         | Define the port to connect to (default: 5985)                                                                  | 5985              |             |
| WSMANAUTHMETHOD   | Define the authentication method. Available methods: noauth, basic (default), pass, digest, ntlm, gssnegotiate | basic             |             |
| WSMANPATH         | Define the path of the WSMAN URL if it has been customized (default: '/wsman')                                 | /wsman            |             |
| WSMANSCHEME       | Define the transport scheme (default: 'http')                                                                  | http              |             |
| WSMANEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).           |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Job-Status" label="Job-Status">

| Macro           | Description                                                                                                                                                                                       | Default value                                       | Mandatory   |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| FILTERENDTIME   | Filter job with end time greater than current time less value in seconds (Default: 86400)                                                                                                         | 86400                                               |             |
| FILTERNAME      | Filter job name (can be a regexp)                                                                                                                                                                 |                                                     |             |
| FILTERSTARTTIME | Filter job with start time greater than current time less value in seconds                                                                                                                        |                                                     |             |
| FILTERCOUNTERS  |                                                                                                                                                                                                   |                                                     |             |
| OKSTATUS        | Set ok threshold for status. Can use special variables like: %{display}, %{status}, %{type}, %{is\_running}, %{scheduled}                                                                        |                                                     |             |
| WARNINGLONG     | Set warning threshold for long jobs. Can use special variables like: %{display}, %{status}, %{type}, %{elapsed}                                                                                  |                                                     |             |
| CRITICALLONG    | Set critical threshold for long jobs. Can use special variables like: %{display}, %{status}, %{type}, %{elapsed}                                                                                 |                                                     |             |
| CRITICALSTATUS  | Set critical threshold for status (Default: '%{is\_running} == 0 and not %{status} =~ /Success/i'). Can use special variables like: %{display}, %{status}, %{type}, %{is\_running}, %{scheduled} | %{is\_running} == 0 and not %{status} =~ /Success/i |             |
| WARNINGSTATUS   | Set warning threshold for status. Can use special variables like: %{display}, %{status}, %{type}, %{is\_running}, %{scheduled}                                                                   |                                                     |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                | --verbose                                           |             |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Macro                             | Description                                                                                                                                   | Default value                    | Mandatory   |
|:----------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| FILTERTO                          | Filter licenses by person/organization (can be a regexp)                                                                                      |                                  |             |
| FILTERTYPE                        | Filter licenses by type (can be a regexp)                                                                                                     |                                  |             |
| FILTERSTATUS                      | Filter licenses by status (can be a regexp)                                                                                                   |                                  |             |
| UNIT                              | Select the unit for expiration thresholds. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds |                                  |             |
| WARNINGEXPIRES                    | Thresholds                                                                                                                                    |                                  |             |
| CRITICALEXPIRES                   | Thresholds                                                                                                                                    |                                  |             |
| WARNINGLICENSEINSTANCESFREE       | Thresholds                                                                                                                                    |                                  |             |
| CRITICALLICENSEINSTANCESFREE      | Thresholds                                                                                                                                    |                                  |             |
| WARNINGLICENSEINSTANCESUSAGE      | Thresholds                                                                                                                                    |                                  |             |
| CRITICALLICENSEINSTANCESUSAGE     | Thresholds                                                                                                                                    |                                  |             |
| WARNINGLICENSEINSTANCESUSAGEPRCT  | Thresholds                                                                                                                                    |                                  |             |
| CRITICALLICENSEINSTANCESUSAGEPRCT | Thresholds                                                                                                                                    |                                  |             |
| CRITICALSTATUS                    | Set critical threshold for status (Default: '%{status} =~ /expired\|invalid/i'). Can use special variables like: %{to}, %{status}, %{type}   | %{status} =~ /expired\|invalid/i |             |
| WARNINGSTATUS                     | Set warning threshold for status. Can use special variables like: %{to}, %{status}, %{type}                                                  |                                  |             |
| WARNINGTOTAL                      | Thresholds                                                                                                                                    |                                  |             |
| CRITICALTOTAL                     | Thresholds                                                                                                                                    |                                  |             |
| EXTRAOPTIONS                      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                            | --verbose                        |             |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Macro                  | Description                                                                                                                                           | Default value                            | Mandatory   |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|:-----------:|
| FILTERNAME             | Filter repositories by name (can be a regexp)                                                                                                         |                                          |             |
| FILTERTYPE             | Filter repositories by type (can be a regexp)                                                                                                         |                                          |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                                                                            |                                          |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                                                                            |                                          |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                                                                            |                                          |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                                                                            |                                          |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                                                                            |                                          |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                                                                            |                                          |             |
| CRITICALSTATUS         | Set critical threshold for status (Default: 'not %{status} =~ /ordinal\|maintenance/i'). Can use special variables like: %{status}, %{name}, %{type} | not %{status} =~ /ordinal\|maintenance/i |             |
| WARNINGSTATUS          | Set warning threshold for status. Can use special variables like: %{status}, %{name}, %{type}                                                        |                                          |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                    | --verbose                                |             |

</TabItem>
<TabItem value="Tape-Jobs" label="Tape-Jobs">

| Macro          | Description                                                                                                                                                                                                   | Default value                                               | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------|:-----------:|
| FILTERNAME     | Filter job name (can be a regexp)                                                                                                                                                                             |                                                             |             |
| CRITICALSTATUS | Set critical threshold for status (Default: '%{enabled} == 1 and not %{last\_result} =~ /Success\|None/i'). Can use special variables like: %{display}, %{enabled}, %{type}, %{last\_result}, %{last\_state} | %{enabled} == 1 and not %{last\_result} =~ /Success\|None/i |             |
| WARNINGSTATUS  | Set warning threshold for status (Default: '') Can use special variables like: %{display}, %{enabled}, %{type}, %{last\_result}, %{last\_state}                                                              |                                                             |             |
| WARNINGTOTAL   | Set warning threshold for total jobs                                                                                                                                                                          |                                                             |             |
| CRITICALTOTAL  | Set critical threshold for total jobs                                                                                                                                                                         |                                                             |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                            | --verbose                                                   |             |

</TabItem>
<TabItem value="Vsb-Jobs" label="Vsb-Jobs">

| Macro                | Description                                                                                                                                           | Default value               | Mandatory   |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTERNAME           | Filter job name (can be a regexp)                                                                                                                     |                             |             |
| FILTERTYPE           | Filter job type (can be a regexp)                                                                                                                     |                             |             |
| WARNINGJOBSWARNING   | Thresholds                                                                                                                                            |                             |             |
| CRITICALJOBSWARNING  | Thresholds                                                                                                                                            |                             |             |
| WARNINGJOBSDETECTED  | Thresholds                                                                                                                                            |                             |             |
| CRITICALJOBSDETECTED | Thresholds                                                                                                                                            |                             |             |
| WARNINGJOBSFAILED    | Thresholds                                                                                                                                            |                             |             |
| CRITICALJOBSFAILED   | Thresholds                                                                                                                                            |                             |             |
| WARNINGJOBSSUCCESS   | Thresholds                                                                                                                                            |                             |             |
| CRITICALJOBSSUCCESS  | Thresholds                                                                                                                                            |                             |             |
| CRITICALSTATUS       | Set critical threshold for status (Default: 'not %{status} =~ /success/i'). Can use special variables like: %{name}, %{type}, %{status}, %{duration} | not %{status} =~ /success/i |             |
| WARNINGSTATUS        | Set warning threshold for status. Can use special variables like: %{name}, %{type}, %{status}, %{duration}                                           |                             |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                    | --verbose                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_veeam_backup_wsman.pl \
	--plugin=apps::backup::veeam::wsman::plugin \
	--mode=tape-jobs \
	--hostname='10.0.0.1' \
	--wsman-port='5985' \
	--wsman-path='/wsman' \
	--wsman-scheme='http' \
	--wsman-username='USERNAME' \
	--wsman-password='PASSWORD' \
	--wsman-auth-method='basic'  \
	--filter-name="" \
	--warning-status="" \
	--critical-status="%{enabled} == 1 and not %{last_result} =~ /Success|None/i" \
	--warning-total="" \
	--critical-total="" \
	--verbose
```

The expected command output is shown below:

```bash
OK: total jobs: 11 All jobs are ok | 'tapejobs.total.count'=11;;;0;
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
/usr/lib/centreon/plugins/centreon_veeam_backup_wsman.pl \
	--plugin=apps::backup::veeam::wsman::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                       | Linked service template               |
|:-------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| job-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/wsman/mode/jobstatus.pm)]               | App-Veeam-Job-Status-WSMAN-custom     |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/wsman/mode/licenses.pm)]                  | App-Veeam-Licenses-WSMAN-custom       |
| list-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/wsman/mode/listjobs.pm)]                 | Not used in this Monitoring Connector |
| list-repositories [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/wsman/mode/listrepositories.pm)] | Not used in this Monitoring Connector |
| repositories [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/wsman/mode/repositories.pm)]          | App-Veeam-Repositories-WSMAN-custom   |
| tape-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/wsman/mode/tapejobs.pm)]                 | App-Veeam-Tape-Jobs-WSMAN-custom      |
| vsb-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/wsman/mode/vsbjobs.pm)]                   | App-Veeam-Vsb-Jobs-WSMAN-custom       |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Need at least openwsman-perl version \>= 2.4.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --hostname                                 | Define the hostname to query (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --wsman-port                               | Define the port to connect to (default: 5985).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --wsman-path                               | Define the path of the WSMAN URL if it has been customized (default: '/wsman').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --wsman-scheme                             | Define the transport scheme (default: 'http').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --wsman-username                           | Define the username for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --wsman-password                           | Define the password associated with the user name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --wsman-timeout                            | Define the HTTP transport timeout in seconds (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --wsman-auth-method                        | Define the authentication method. Available methods: noauth, basic (default), pass, digest, ntlm, gssnegotiate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --wsman-proxy-url                          | Define the URL of the HTTP proxy to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --wsman-proxy-username                     | Define the user name to authenticate to the proxy server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --wsman-proxy-password                     | Define the password to authenticate to the proxy server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --wsman-debug                              | Define the openwsman log level. Available levels: error, critical, warning, message, info (default), debug.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --wsman-errors-exit                        | Define the expected exit code when wsman errors occur (default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Job-Status" label="Job-Status">

| Option              | Description                                                                                                                                                                                          |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --ps-display        | Display powershell script.                                                                                                                                                                           |
| --ps-exec-only      | Print powershell output.                                                                                                                                                                             |
| --filter-name       | Filter job name (can be a regexp).                                                                                                                                                                   |
| --exclude-name      | Exclude job name (regexp can be used).                                                                                                                                                               |
| --filter-type       | Filter job type (can be a regexp).                                                                                                                                                                   |
| --filter-start-time | Filter job with start time greater than current time less value in seconds.                                                                                                                          |
| --filter-end-time   | Filter job with end time greater than current time less value in seconds (Default: 86400).                                                                                                           |
| --ok-status         | Set ok threshold for status. Can use special variables like: %{display}, %{status}, %{type}, %{is\_running}, %{scheduled}.                                                                          |
| --warning-status    | Set warning threshold for status. Can use special variables like: %{display}, %{status}, %{type}, %{is\_running}, %{scheduled}.                                                                     |
| --critical-status   | Set critical threshold for status (Default: '%{is\_running} == 0 and not %{status} =~ /Success/i'). Can use special variables like: %{display}, %{status}, %{type}, %{is\_running}, %{scheduled}.   |
| --warning-long      | Set warning threshold for long jobs. Can use special variables like: %{display}, %{status}, %{type}, %{elapsed}.                                                                                    |
| --critical-long     | Set critical threshold for long jobs. Can use special variables like: %{display}, %{status}, %{type}, %{elapsed}.                                                                                   |
| --warning-total     | Set warning threshold for total jobs.                                                                                                                                                                |
| --critical-total    | Set critical threshold for total jobs.                                                                                                                                                               |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Option                   | Description                                                                                                                                      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
| --ps-display             | Display powershell script.                                                                                                                       |
| --ps-exec-only           | Print powershell output.                                                                                                                         |
| --filter-to              | Filter licenses by person/organization (can be a regexp).                                                                                        |
| --filter-type            | Filter licenses by type (can be a regexp).                                                                                                       |
| --filter-status          | Filter licenses by status (can be a regexp).                                                                                                     |
| --warning-status         | Set warning threshold for status. Can use special variables like: %{to}, %{status}, %{type}.                                                    |
| --critical-status        | Set critical threshold for status (Default: '%{status} =~ /expired\|invalid/i'). Can use special variables like: %{to}, %{status}, %{type}.     |
| --unit                   | Select the unit for expires threshold. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.   |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'expires', 'license-instances-usage', 'license-instances-free', 'license-instances-usage-prct'.                     |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Option                   | Description                                                                                                                                              |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --ps-display             | Display powershell script.                                                                                                                               |
| --ps-exec-only           | Print powershell output.                                                                                                                                 |
| --filter-name            | Filter repositories by name (can be a regexp).                                                                                                           |
| --exclude-name           | Exclude repositories by name (regexp can be used).                                                                                                       |
| --filter-type            | Filter repositories by type (can be a regexp).                                                                                                           |
| --warning-status         | Set warning threshold for status. Can use special variables like: %{status}, %{name}, %{type}.                                                          |
| --critical-status        | Set critical threshold for status (Default: 'not %{status} =~ /ordinal\|maintenance/i'). Can use special variables like: %{status}, %{name}, %{type}.   |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.                                                                               |

</TabItem>
<TabItem value="Tape-Jobs" label="Tape-Jobs">

| Option            | Description                                                                                                                                                                                                      |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --ps-display      | Display powershell script.                                                                                                                                                                                       |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                                         |
| --filter-name     | Filter job name (can be a regexp).                                                                                                                                                                               |
| --exclude-name    | Exclude job name (regexp can be used).                                                                                                                                                                           |
| --filter-type     | Filter job type (can be a regexp).                                                                                                                                                                               |
| --unknown-status  | Set unknown threshold for status (Default: '') Can use special variables like: %{display}, %{enabled}, %{type}, %{last\_result}, %{last\_state}.                                                                |
| --warning-status  | Set warning threshold for status (Default: '') Can use special variables like: %{display}, %{enabled}, %{type}, %{last\_result}, %{last\_state}.                                                                |
| --critical-status | Set critical threshold for status (Default: '%{enabled} == 1 and not %{last\_result} =~ /Success\|None/i'). Can use special variables like: %{display}, %{enabled}, %{type}, %{last\_result}, %{last\_state}.   |
| --warning-total   | Set warning threshold for total jobs.                                                                                                                                                                            |
| --critical-total  | Set critical threshold for total jobs.                                                                                                                                                                           |

</TabItem>
<TabItem value="Vsb-Jobs" label="Vsb-Jobs">

| Option                   | Description                                                                                                                                              |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --ps-display             | Display powershell script.                                                                                                                               |
| --ps-exec-only           | Print powershell output.                                                                                                                                 |
| --filter-name            | Filter job name (can be a regexp).                                                                                                                       |
| --exclude-name           | Exclude job name (regexp can be used).                                                                                                                   |
| --filter-type            | Filter job type (can be a regexp).                                                                                                                       |
| --unknown-status         | Set unknown threshold for status. Can use special variables like: %{name}, %{type}, %{status}, %{duration}.                                             |
| --warning-status         | Set warning threshold for status. Can use special variables like: %{name}, %{type}, %{status}, %{duration}.                                             |
| --critical-status        | Set critical threshold for status (Default: 'not %{status} =~ /success/i'). Can use special variables like: %{name}, %{type}, %{status}, %{duration}.   |
| --warning-* --critical-* | Thresholds. Can be: 'jobs-detected', 'jobs-success', 'jobs-warning', 'jobs-failed'.                                                                      |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_veeam_backup_wsman.pl \
	--plugin=apps::backup::veeam::wsman::plugin \
	--mode=tape-jobs \
	--help
```
