---
id: applications-veeam-nsclient-05-restapi
title: Veeam NSClient++ API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Veeam API** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Veeam API** brings a host template:

* **App-Veeam-NSClient-05-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Veeam-NSClient-05-Restapi-custom" label="App-Veeam-NSClient-05-Restapi-custom">

| Service Alias | Service Template                               | Service Description |
|:--------------|:-----------------------------------------------|:--------------------|
| Job-Status    | App-Veeam-Job-Status-NSClient05-Restapi-custom | Check job status    |

> The services listed above are created automatically when the **App-Veeam-NSClient-05-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                                 | Service Description   |
|:--------------|:-------------------------------------------------|:----------------------|
| Licenses      | App-Veeam-Licenses-NSClient05-Restapi-custom     | Check licenses        |
| Repositories  | App-Veeam-Repositories-NSClient05-Restapi-custom | Check repositories    |
| Tape-Jobs     | App-Veeam-Tape-Jobs-NSClient05-Restapi-custom    | Check job tape status |
| Vsb-Jobs      | App-Veeam-Vsb-Jobs-NSClient05-Restapi-custom     | Check SureBackup jobs |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Job-Status" label="Job-Status">

| Name                | Unit  |
|:--------------------|:------|
| jobs.detected.count | count |
| status              | N/A   |
| long                | N/A   |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Name                                          | Unit  |
|:----------------------------------------------|:------|
| licenses.total.count                          | count |
| status                                        | N/A   |
| *licenses*#license.expires.seconds            | s     |
| *licenses*#license.instances.usage.count      | count |
| *licenses*#license.instances.free.count       | count |
| *licenses*#license.instances.usage.percentage | %     |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Name                                             | Unit  |
|:-------------------------------------------------|:------|
| status                                           | N/A   |
| *repositories*~repository.space.usage.bytes      | B     |
| *repositories*~repository.space.free.bytes       | B     |
| *repositories*~repository.space.usage.percentage | %     |

</TabItem>
<TabItem value="Tape-Jobs" label="Tape-Jobs">

| Name                 | Unit  |
|:---------------------|:------|
| tapejobs.total.count | count |

</TabItem>
<TabItem value="Vsb-Jobs" label="Vsb-Jobs">

| Name                            | Unit  |
|:--------------------------------|:------|
| sure_backup.jobs.detected.count | count |
| sure_backup.jobs.success.count  | count |
| sure_backup.jobs.failed.count   | count |
| sure_backup.jobs.warning.count  | count |
| status                          | N/A   |
| status                          | N/A   |

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
dnf install centreon-pack-applications-veeam-nsclient-05-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-veeam-nsclient-05-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-veeam-nsclient-05-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-veeam-nsclient-05-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Veeam API** connector through
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
3. Apply the **App-Veeam-NSClient-05-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                     | Description                                                                                                                              | Default value     | Mandatory   |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant                                                                                     | PASSWORD          |             |
| NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use                                                                                                       | https             |             |
| NSCPRESTAPIPORT           | NSClient++ RestAPI port                                                                                                                  | 8443              |             |
| NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Job-Status" label="Job-Status">

| Macro           | Description                                                                                                                                                     | Default value                                       | Mandatory   |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| FILTERENDTIME   | Filter job with end time greater than current time less value in seconds                                                                                        | 86400                                               |             |
| FILTERNAME      | Filter job name (can be a regexp)                                                                                                                               |                                                     |             |
| FILTERSTARTTIME | Filter job with start time greater than current time less value in seconds                                                                                      |                                                     |             |
| FILTERCOUNTERS  | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\                                              |yyyy$'                                                                                                        |                                                     |             |
| OKSTATUS        | Define the conditions to match for the status to be OK. You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{is_running\}, %\{scheduled\}       |                                                     |             |
| WARNINGLONG     | Set warning threshold for long jobs. You can use the following variables:  %\{display\}, %\{status\}, %\{type\}, %\{elapsed\}                                           |                                                     |             |
| CRITICALLONG    | Set critical threshold for long jobs. You can use the following variables:  %\{display\}, %\{status\}, %\{type\}, %\{elapsed\}                                          |                                                     |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{is_running\}, %\{scheduled\} | %\{is_running\} == 0 and not %\{status\} =~ /Success/i |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{is_running\}, %\{scheduled\}  |                                                     |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                          | --verbose                                           |             |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Macro                             | Description                                                                                                                                                 | Default value                    | Mandatory   |
|:----------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| FILTERTO                          | Filter licenses by person/organization (can be a regexp)                                                                                                    |                                  |             |
| FILTERTYPE                        | Filter licenses by type (can be a regexp)                                                                                                                   |                                  |             |
| FILTERSTATUS                      | Filter licenses by status (can be a regexp)                                                                                                                 |                                  |             |
| UNIT                              | Select the time unit for the expiration thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds |                                  |             |
| WARNINGEXPIRES                    | Threshold                                                                                                                                                   |                                  |             |
| CRITICALEXPIRES                   | Threshold                                                                                                                                                   |                                  |             |
| WARNINGLICENSEINSTANCESFREE       | Threshold                                                                                                                                                   |                                  |             |
| CRITICALLICENSEINSTANCESFREE      | Threshold                                                                                                                                                   |                                  |             |
| WARNINGLICENSEINSTANCESUSAGE      | Threshold                                                                                                                                                   |                                  |             |
| CRITICALLICENSEINSTANCESUSAGE     | Threshold                                                                                                                                                   |                                  |             |
| WARNINGLICENSEINSTANCESUSAGEPRCT  | Threshold                                                                                                                                                   |                                  |             |
| CRITICALLICENSEINSTANCESUSAGEPRCT | Threshold                                                                                                                                                   |                                  |             |
| CRITICALSTATUS                    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{to\}, %\{status\}, %\{type\}                                | %\{status\} =~ /expired\|invalid/i |             |
| WARNINGSTATUS                     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{to\}, %\{status\}, %\{type\}                                 |                                  |             |
| WARNINGTOTAL                      | Threshold                                                                                                                                                   |                                  |             |
| CRITICALTOTAL                     | Threshold                                                                                                                                                   |                                  |             |
| EXTRAOPTIONS                      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                      | --verbose                        |             |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Macro                  | Description                                                                                                                            | Default value                            | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|:-----------:|
| FILTERNAME             | Filter repositories by name (can be a regexp)                                                                                          |                                          |             |
| FILTERTYPE             | Filter repositories by type (can be a regexp)                                                                                          |                                          |             |
| WARNINGSPACEUSAGE      | Threshold                                                                                                                              |                                          |             |
| CRITICALSPACEUSAGE     | Threshold                                                                                                                              |                                          |             |
| WARNINGSPACEUSAGEFREE  | Threshold                                                                                                                              |                                          |             |
| CRITICALSPACEUSAGEFREE | Threshold                                                                                                                              |                                          |             |
| WARNINGSPACEUSAGEPRCT  | Threshold                                                                                                                              |                                          |             |
| CRITICALSPACEUSAGEPRCT | Threshold                                                                                                                              |                                          |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{name\}, %\{type\}         | not %\{status\} =~ /ordinal\|maintenance/i |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}, %\{type\}          |                                          |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                                |             |

</TabItem>
<TabItem value="Tape-Jobs" label="Tape-Jobs">

| Macro          | Description                                                                                                                                                         | Default value                                               | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------|:-----------:|
| FILTERNAME     | Filter job name (can be a regexp)                                                                                                                                   |                                                             |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{display\}, %\{enabled\}, %\{type\}, %\{last_result\}, %\{last_state\} | %\{enabled\} == 1 and not %\{last_result\} =~ /Success\|None/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{enabled\}, %\{type\}, %\{last_result\}, %\{last_state\}  |                                                             |             |
| WARNINGTOTAL   | Set warning threshold for total jobs                                                                                                                                |                                                             |             |
| CRITICALTOTAL  | Set critical threshold for total jobs                                                                                                                               |                                                             |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                              | --verbose                                                   |             |

</TabItem>
<TabItem value="Vsb-Jobs" label="Vsb-Jobs">

| Macro                | Description                                                                                                                                 | Default value               | Mandatory   |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTERNAME           | Filter job name (can be a regexp)                                                                                                           |                             |             |
| FILTERTYPE           | Filter job type (can be a regexp)                                                                                                           |                             |             |
| WARNINGJOBSWARNING   | Threshold                                                                                                                                   |                             |             |
| CRITICALJOBSWARNING  | Threshold                                                                                                                                   |                             |             |
| WARNINGJOBSDETECTED  | Threshold                                                                                                                                   |                             |             |
| CRITICALJOBSDETECTED | Threshold                                                                                                                                   |                             |             |
| WARNINGJOBSFAILED    | Threshold                                                                                                                                   |                             |             |
| CRITICALJOBSFAILED   | Threshold                                                                                                                                   |                             |             |
| WARNINGJOBSSUCCESS   | Threshold                                                                                                                                   |                             |             |
| CRITICALJOBSSUCCESS  | Threshold                                                                                                                                   |                             |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{type\}, %\{status\}, %\{duration\} | not %\{status\} =~ /success/i |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{type\}, %\{status\}, %\{duration\}  |                             |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).      | --verbose                   |             |

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
	--arg='apps::backup::veeam::local::plugin' \
	--arg='vsb-jobs'  \
	--arg=' \
	--filter-name="" \
	--filter-type="" \
	--warning-jobs-detected="" \
	--critical-jobs-detected="" \
	--warning-jobs-success="" \
	--critical-jobs-success="" \
	--warning-jobs-failed="" \
	--critical-jobs-failed="" \
	--warning-jobs-warning="" \
	--critical-jobs-warning="" \
	--warning-status="" \
	--critical-status="not %\{status\} =~ /success/i" \
	--verbose'
```

The expected command output is shown below:

```bash
OK: detected jobs: 92143 success: 3490 failed: 34282 warning: 93796 All SureBackup jobs are ok | 'sure_backup.jobs.detected.count'=92143;;;0; 'sure_backup.jobs.success.count'=3490;;;0; 'sure_backup.jobs.failed.count'=34282;;;0; 'sure_backup.jobs.warning.count'=93796;;;0; 
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

| Mode                                                                                                                                       | Linked service template                          |
|:-------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
| job-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/jobstatus.pm)]               | App-Veeam-Job-Status-NSClient05-Restapi-custom   |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/licenses.pm)]                  | App-Veeam-Licenses-NSClient05-Restapi-custom     |
| list-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/listjobs.pm)]                 | Not used in this Monitoring Connector            |
| list-repositories [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/listrepositories.pm)] | Not used in this Monitoring Connector            |
| repositories [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/repositories.pm)]          | App-Veeam-Repositories-NSClient05-Restapi-custom |
| tape-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/tapejobs.pm)]                 | App-Veeam-Tape-Jobs-NSClient05-Restapi-custom    |
| vsb-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/vsbjobs.pm)]                   | App-Veeam-Vsb-Jobs-NSClient05-Restapi-custom     |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Job-Status" label="Job-Status">

| Option              | Description                                                                                                                                                                                                                           |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout           |   Set timeout time for command execution (default: 50 sec)                                                                                                                                                                            |
| --no-ps             |   Don't encode powershell. To be used with --command and 'type' command.                                                                                                                                                              |
| --command           |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                              |
| --command-path      |   Command path (default: none).                                                                                                                                                                                                       |
| --command-options   |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                             |
| --ps-display        |   Display powershell script.                                                                                                                                                                                                          |
| --ps-exec-only      |   Print powershell output.                                                                                                                                                                                                            |
| --filter-name       |   Filter job name (can be a regexp).                                                                                                                                                                                                  |
| --exclude-name      |   Exclude job name (regexp can be used).                                                                                                                                                                                              |
| --filter-type       |   Filter job type (can be a regexp).                                                                                                                                                                                                  |
| --filter-start-time |   Filter job with start time greater than current time less value in seconds.                                                                                                                                                         |
| --filter-end-time   |   Filter job with end time greater than current time less value in seconds (default: 86400).                                                                                                                                          |
| --ok-status         |   Define the conditions to match for the status to be OK. You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{is_running\}, %\{scheduled\}.                                                                          |
| --warning-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{is_running\}, %\{scheduled\}.                                                                     |
| --critical-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{is_running\} == 0 and not %\{status\} =~ /Success/i'). You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{is_running\}, %\{scheduled\}.   |
| --warning-long      |   Set warning threshold for long jobs. You can use the following variables:  %\{display\}, %\{status\}, %\{type\}, %\{elapsed\}.                                                                                                              |
| --critical-long     |   Set critical threshold for long jobs. You can use the following variables:  %\{display\}, %\{status\}, %\{type\}, %\{elapsed\}.                                                                                                             |
| --warning-total     |   Set warning threshold for total jobs.                                                                                                                                                                                               |
| --critical-total    |   Set critical threshold for total jobs.                                                                                                                                                                                              |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Option                   | Description                                                                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                |   Set timeout time for command execution (default: 50 sec)                                                                                                                      |
| --no-ps                  |   Don't encode powershell. To be used with --command and 'type' command.                                                                                                        |
| --command                |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                        |
| --command-path           |   Command path (default: none).                                                                                                                                                 |
| --command-options        |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                       |
| --ps-display             |   Display powershell script.                                                                                                                                                    |
| --ps-exec-only           |   Print powershell output.                                                                                                                                                      |
| --filter-to              |   Filter licenses by person/organization (can be a regexp).                                                                                                                     |
| --filter-type            |   Filter licenses by type (can be a regexp).                                                                                                                                    |
| --filter-status          |   Filter licenses by status (can be a regexp).                                                                                                                                  |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{to\}, %\{status\}, %\{type\}.                                                  |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /expired\|invalid/i'). You can use the following variables: %\{to\}, %\{status\}, %\{type\}.   |
| --unit                   |   Select the time unit for the expiration thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.                  |
| --warning-* --critical-* |   Thresholds. Can be: 'total', 'expires', 'license-instances-usage', 'license-instances-free', 'license-instances-usage-prct'.                                                  |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Option                   | Description                                                                                                                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                |   Set timeout time for command execution (default: 50 sec)                                                                                                                                |
| --no-ps                  |   Don't encode powershell. To be used with --command and 'type' command.                                                                                                                  |
| --command                |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                  |
| --command-path           |   Command path (default: none).                                                                                                                                                           |
| --command-options        |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                 |
| --ps-display             |   Display powershell script.                                                                                                                                                              |
| --ps-exec-only           |   Print powershell output.                                                                                                                                                                |
| --filter-name            |   Filter repositories by name (can be a regexp).                                                                                                                                          |
| --exclude-name           |   Exclude repositories by name (regexp can be used).                                                                                                                                      |
| --filter-type            |   Filter repositories by type (can be a regexp).                                                                                                                                          |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}, %\{type\}.                                                          |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: 'not %\{status\} =~ /ordinal\|maintenance/i'). You can use the following variables: %\{status\}, %\{name\}, %\{type\}.   |
| --warning-* --critical-* |   Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.                                                                                                              |

</TabItem>
<TabItem value="Tape-Jobs" label="Tape-Jobs">

| Option            | Description                                                                                                                                                                                                                                       |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         |   Set timeout time for command execution (default: 50 sec)                                                                                                                                                                                        |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                                                                                                                          |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                                          |
| --command-path    |   Command path (default: none).                                                                                                                                                                                                                   |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                                         |
| --ps-display      |   Display powershell script.                                                                                                                                                                                                                      |
| --ps-exec-only    |   Print powershell output.                                                                                                                                                                                                                        |
| --filter-name     |   Filter job name (can be a regexp).                                                                                                                                                                                                              |
| --exclude-name    |   Exclude job name (regexp can be used).                                                                                                                                                                                                          |
| --filter-type     |   Filter job type (can be a regexp).                                                                                                                                                                                                              |
| --unknown-status  |   Define the conditions to match for the status to be UNKNOWN (default: '') You can use the following variables: %\{display\}, %\{enabled\}, %\{type\}, %\{last_result\}, %\{last_state\}.                                                                |
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: '') You can use the following variables: %\{display\}, %\{enabled\}, %\{type\}, %\{last_result\}, %\{last_state\}.                                                                |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{enabled\} == 1 and not %\{last_result\} =~ /Success\|None/i'). You can use the following variables: %\{display\}, %\{enabled\}, %\{type\}, %\{last_result\}, %\{last_state\}.   |
| --warning-total   |   Set warning threshold for total jobs.                                                                                                                                                                                                           |
| --critical-total  |   Set critical threshold for total jobs.                                                                                                                                                                                                          |

</TabItem>
<TabItem value="Vsb-Jobs" label="Vsb-Jobs">

| Option                   | Description                                                                                                                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                |   Set timeout time for command execution (default: 50 sec)                                                                                                                                |
| --no-ps                  |   Don't encode powershell. To be used with --command and 'type' command.                                                                                                                  |
| --command                |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                  |
| --command-path           |   Command path (default: none).                                                                                                                                                           |
| --command-options        |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                 |
| --ps-display             |   Display powershell script.                                                                                                                                                              |
| --ps-exec-only           |   Print powershell output.                                                                                                                                                                |
| --filter-name            |   Filter job name (can be a regexp).                                                                                                                                                      |
| --exclude-name           |   Exclude job name (regexp can be used).                                                                                                                                                  |
| --filter-type            |   Filter job type (can be a regexp).                                                                                                                                                      |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{name\}, %\{type\}, %\{status\}, %\{duration\}.                                             |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{type\}, %\{status\}, %\{duration\}.                                             |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: 'not %\{status\} =~ /success/i'). You can use the following variables: %\{name\}, %\{type\}, %\{status\}, %\{duration\}.   |
| --warning-* --critical-* |   Thresholds. Can be: 'jobs-detected', 'jobs-success', 'jobs-warning', 'jobs-failed'.                                                                                                     |

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
