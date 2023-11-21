---
id: applications-ansible-tower
title: Ansible Tower CLI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Ansible Tower** brings a host template:

* **App-Ansible-Tower-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Ansible-Tower-custom" label="App-Ansible-Tower-custom">

| Service Alias | Service Template                           | Service Description |
|:--------------|:-------------------------------------------|:--------------------|
| Hosts         | App-Ansible-Tower-Hosts-Api-custom         | Check hosts         |
| Inventories   | App-Ansible-Tower-Inventories-Api-custom   | Check inventories   |
| Job-Templates | App-Ansible-Tower-Job-Templates-Api-custom | Check job templates |
| Jobs          | App-Ansible-Tower-Jobs-Api-custom          | Check jobs          |
| Schedules     | App-Ansible-Tower-Schedules-Api-custom     | Check schedules     |

> The services listed above are created automatically when the **App-Ansible-Tower-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name         | Description                                          |
|:------------------|:-----------------------------------------------------|
| Ansible Tower CLI | Discover hosts by requesting Ansible Tower using CLI |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Metric name        | Unit  |
|:-------------------|:------|
| hosts.total.count  | count |
| hosts.failed.count | count |
| hosts#job-status   | N/A   |

</TabItem>
<TabItem value="Inventories" label="Inventories">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| inventories.total.count                    | count |
| inventories.failed.count                   | count |
| inventories#inventory.hosts.total.count    | count |
| inventories#inventory.hosts.failed.count   | count |
| inventories#inventory.sources.total.count  | count |
| inventories#inventory.sources.failed.count | count |
| inventories#inventory.groups.total.count   | count |
| inventories#inventory.groups.failed.count  | count |

</TabItem>
<TabItem value="Job-Templates" label="Job-Templates">

| Metric name              | Unit  |
|:-------------------------|:------|
| jobtemplates.total.count | count |
| jobtpl#job-status        | N/A   |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Metric name      | Unit  |
|:-----------------|:------|
| jobs.total.count | count |

</TabItem>
<TabItem value="Schedules" label="Schedules">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| schedules.total.count                      | count |
| schedules#job-status                       | N/A   |
| schedules#schedule.start.last.time.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

The `tower-cli`command-line tool is required for the plugin to be able to run in custom mode 'towercli'.
You can refer to [the official documentation of tower-cli](://tower-cli.readthedocs.io/en/latest/install.html) for the installation procedure.

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
dnf install centreon-pack-applications-ansible-tower
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-ansible-tower
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-ansible-tower
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-ansible-tower
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Ansible Tower** connector through
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
dnf install centreon-plugin-Applications-Ansible-Tower
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Ansible-Tower
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-ansible-tower
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Ansible-Tower
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Ansible-Tower-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#available-custom-modes), i.e. the connection method to the resource.

| Macro                    | Description                                                                                            | Default value     | Mandatory   |
|:-------------------------|:-------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ANSIBLETOWERCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | api               |             |
| ANSIBLETOWERPASSWORD     | API password                                                                                           |                   | X           |
| ANSIBLETOWERUSERNAME     | API username                                                                                           |                   | X           |
| ANSIBLETOWEREXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)  |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Macro             | Description                                                                                                                                                                       | Default value                     | Mandatory   |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| UNKNOWNJOBSTATUS  | Define the conditions to match for the status to be UNKNOWN (Default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last\_job\_status} =~ /default/ |             |
| FILTERNAME        | Filter host name (Can use regexp)                                                                                                                                                 |                                   |             |
| WARNINGFAILED     | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALFAILED    | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALJOBSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last\_job\_status} =~ /failed/  |             |
| WARNINGJOBSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_job\_status}, %{display}                                                |                                   |             |
| WARNINGTOTAL      | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALTOTAL     | Thresholds                                                                                                                                                                        |                                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                               | --verbose                         |             |

</TabItem>
<TabItem value="Inventories" label="Inventories">

| Macro                 | Description                                                                                         | Default value     | Mandatory   |
|:----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERINVENTORY       | Filter inventory name (Can use regexp)                                                              |                   |             |
| WARNINGFAILED         | Thresholds                                                                                          |                   |             |
| CRITICALFAILED        | Thresholds                                                                                          |                   |             |
| WARNINGGROUPSFAILED   | Thresholds                                                                                          |                   |             |
| CRITICALGROUPSFAILED  | Thresholds                                                                                          |                   |             |
| WARNINGGROUPSTOTAL    | Thresholds                                                                                          |                   |             |
| CRITICALGROUPSTOTAL   | Thresholds                                                                                          |                   |             |
| WARNINGHOSTSFAILED    | Thresholds                                                                                          |                   |             |
| CRITICALHOSTSFAILED   | Thresholds                                                                                          |                   |             |
| WARNINGHOSTSTOTAL     | Thresholds                                                                                          |                   |             |
| CRITICALHOSTSTOTAL    | Thresholds                                                                                          |                   |             |
| WARNINGSOURCESFAILED  | Thresholds                                                                                          |                   |             |
| CRITICALSOURCESFAILED | Thresholds                                                                                          |                   |             |
| WARNINGSOURCESTOTAL   | Thresholds                                                                                          |                   |             |
| CRITICALSOURCESTOTAL  | Thresholds                                                                                          |                   |             |
| WARNINGTOTAL          | Thresholds                                                                                          |                   |             |
| CRITICALTOTAL         | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Job-Templates" label="Job-Templates">

| Macro              | Description                                                                                                                                                                       | Default value                     | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| UNKNOWNJOBSTATUS   | Define the conditions to match for the status to be UNKNOWN (Default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last\_job\_status} =~ /default/ |             |
| FILTERNAME         | Filter job template name (Can use regexp)                                                                                                                                         |                                   |             |
| WARNINGCANCELED    | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALCANCELED   | Thresholds                                                                                                                                                                        |                                   |             |
| WARNINGDEFAULT     | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALDEFAULT    | Thresholds                                                                                                                                                                        |                                   |             |
| WARNINGFAILED      | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALFAILED     | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALJOBSTATUS  | Define the conditions to match for the status to be CRITICAL (Default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last\_job\_status} =~ /failed/  |             |
| WARNINGJOBSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_job\_status}, %{display}                                                |                                   |             |
| WARNINGNEVER       | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALNEVER      | Thresholds                                                                                                                                                                        |                                   |             |
| WARNINGPENDING     | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALPENDING    | Thresholds                                                                                                                                                                        |                                   |             |
| WARNINGRUNNING     | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALRUNNING    | Thresholds                                                                                                                                                                        |                                   |             |
| WARNINGSUCCESSFUL  | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALSUCCESSFUL | Thresholds                                                                                                                                                                        |                                   |             |
| WARNINGTOTAL       | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALTOTAL      | Thresholds                                                                                                                                                                        |                                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                               | --verbose                         |             |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Macro              | Description                                                                                         | Default value     | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME         | Filter job name (Can use regexp)                                                                    |                   |             |
| WARNINGCANCELED    | Thresholds                                                                                          |                   |             |
| CRITICALCANCELED   | Thresholds                                                                                          |                   |             |
| WARNINGDEFAULT     | Thresholds                                                                                          |                   |             |
| CRITICALDEFAULT    | Thresholds                                                                                          |                   |             |
| WARNINGFAILED      | Thresholds                                                                                          |                   |             |
| CRITICALFAILED     | Thresholds                                                                                          |                   |             |
| WARNINGPENDING     | Thresholds                                                                                          |                   |             |
| CRITICALPENDING    | Thresholds                                                                                          |                   |             |
| WARNINGRUNNING     | Thresholds                                                                                          |                   |             |
| CRITICALRUNNING    | Thresholds                                                                                          |                   |             |
| WARNINGSUCCESSFUL  | Thresholds                                                                                          |                   |             |
| CRITICALSUCCESSFUL | Thresholds                                                                                          |                   |             |
| WARNINGTOTAL       | Thresholds                                                                                          |                   |             |
| CRITICALTOTAL      | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Schedules" label="Schedules">

| Macro                 | Description                                                                                                                                                                       | Default value                     | Mandatory   |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| UNKNOWNJOBSTATUS      | Define the conditions to match for the status to be UNKNOWN (Default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last\_job\_status} =~ /default/ |             |
| FILTERNAME            | Filter schedule name (Can use regexp)                                                                                                                                             |                                   |             |
| WARNINGCANCELED       | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALCANCELED      | Thresholds                                                                                                                                                                        |                                   |             |
| WARNINGDEFAULT        | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALDEFAULT       | Thresholds                                                                                                                                                                        |                                   |             |
| WARNINGFAILED         | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALFAILED        | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALJOBSTATUS     | Define the conditions to match for the status to be CRITICAL (Default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last\_job\_status} =~ /failed/  |             |
| WARNINGJOBSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_job\_status}, %{display}                                                |                                   |             |
| WARNINGNEVER          | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALNEVER         | Thresholds                                                                                                                                                                        |                                   |             |
| WARNINGPENDING        | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALPENDING       | Thresholds                                                                                                                                                                        |                                   |             |
| WARNINGRUNNING        | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALRUNNING       | Thresholds                                                                                                                                                                        |                                   |             |
| WARNINGSTARTLASTTIME  | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALSTARTLASTTIME | Thresholds                                                                                                                                                                        |                                   |             |
| WARNINGSUCCESSFUL     | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALSUCCESSFUL    | Thresholds                                                                                                                                                                        |                                   |             |
| WARNINGTOTAL          | Thresholds                                                                                                                                                                        |                                   |             |
| CRITICALTOTAL         | Thresholds                                                                                                                                                                        |                                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                               | --verbose                         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a server using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_ansible_tower.pl \
	--plugin=apps::automation::ansible::tower::plugin \
	--mode=hosts \
	--hostname='10.0.0.1' \
	--username='' \
	--password='' \
	--custommode='api'  \
	--filter-name='' \
	--unknown-job-status='%{last\_job\_status} =~ /default/' \
	--warning-job-status='' \
	--critical-job-status='%{last\_job\_status} =~ /failed/' \
	--warning-total='' \
	--critical-total='' \
	--warning-failed='' \
	--critical-failed='' \
	--verbose\
	
```

The expected command output is shown below:

```bash
OK:    | 'hosts.total.count'=93;;;0; 'hosts.failed.count'=65;;;0;total 
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
/usr/lib/centreon/plugins//centreon_ansible_tower.pl \
	--plugin=apps::automation::ansible::tower::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode          | Linked service template                    |
|:--------------|:-------------------------------------------|
| discovery     | Used for host discovery                    |
| hosts         | App-Ansible-Tower-Hosts-Api-custom         |
| inventories   | App-Ansible-Tower-Inventories-Api-custom   |
| job-templates | App-Ansible-Tower-Job-Templates-Api-custom |
| jobs          | App-Ansible-Tower-Jobs-Api-custom          |
| schedules     | App-Ansible-Tower-Schedules-Api-custom     |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_ansible_tower.pl \
	--plugin=apps::automation::ansible::tower::plugin \
	--list-custommode
```

The plugin brings the following custom modes:

* api
* towercli

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Ansible Tower Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="api" label="api">

| Option           | Description                                                                                                                        |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| --hostname       | Ansible Tower hostname.                                                                                                               |
| --port           | Port used (Default: 80)                                                                                                            |
| --proto          | Specify https if needed (Default: 'http')                                                                                          |
| --username       | API username.                                                                                                                      |
| --password       | API password.                                                                                                                      |
| --api-path       | Specify api path (Default: '/api/v2')                                                                                              |
| --timeout        | Set timeout in seconds (Default: 10).                                                                                              |
| --http-peer-addr | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                |
| --proxyurl       | Proxy URL. Eg: http://my.proxy:3128                                                                                                |
| --proxypac       | Proxy pac file (can be a URL or a local file).                                                                                     |
| --insecure       | Accept insecure SSL connections.                                                                                                   |
| --http-backend   | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                            |
| --ssl-opt        | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                          |
| --curl-opt       | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).   |

</TabItem>
<TabItem value="towercli" label="towercli">

| Option            | Description                                                                                       |
|:------------------|:--------------------------------------------------------------------------------------------------|
| --hostname        | Ansible Tower hostname (Default uses setting in 'tower config').                                  |
| --username        | Ansible Tower username (Default uses setting in 'tower config').                                  |
| --password        | Ansible Tower password (Default uses setting in 'tower config').                                  |
| --nossl           | Use http connection.                                                                              |
| --timeout         | Set timeout in seconds (Default: 50).                                                             |
| --sudo            | Use 'sudo' to execute the command.                                                                |
| --command         | Command to get information (Default: 'tower-cli'). Can be changed if you have output in a file.   |
| --command-path    | Command path (Default: none).                                                                     |
| --command-options | Command options (Default: none).                                                                  |
| --proxyurl        | Proxy URL if any                                                                                  |

</TabItem>
</Tabs>

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Option                   | Description                                                                                                                                                                         |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter host name (Can use regexp).                                                                                                                                                  |
| --display-failed-hosts   | Display failed hosts list in verbose output.                                                                                                                                        |
| --unknown-job-status     | Define the conditions to match for the status to be UNKNOWN (Default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display}   |
| --warning-job-status     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_job\_status}, %{display}                                                  |
| --critical-job-status    | Define the conditions to match for the status to be CRITICAL (Default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display}   |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'failed'.                                                                                                                                              |

</TabItem>
<TabItem value="Inventories" label="Inventories">

| Option                   | Description                                                                                                                                  |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-inventory       | Filter inventory name (Can use regexp).                                                                                                      |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'failed', 'hosts-total', 'hosts-failed', 'sources-total', 'sources-failed', 'groups-total', 'groups-failed'.    |

</TabItem>
<TabItem value="Job-Templates" label="Job-Templates">

| Option                   | Description                                                                                                                                                                         |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter job template name (Can use regexp).                                                                                                                                          |
| --launch-job-template-id | The job\_template id to launch.                                                                                                                                                     |
| --launch-inventory       | Specify inventory for job template to run.                                                                                                                                          |
| --launch-credential      | Specify machine credential for job template to run.                                                                                                                                 |
| --launch-tags            | Specify tagged actions in the playbook to run.                                                                                                                                      |
| --launch-limit           | Specify host limit for job template to run.                                                                                                                                         |
| --launch-extra-vars      | yaml format text that contains extra variables to pass on.                                                                                                                          |
| --launch-max-retries     | Number of retries to get job result once launched (Default: 5).                                                                                                                     |
| --launch-retry-interval  | Number of seconds between retries (Default : 10).                                                                                                                                   |
| --unknown-job-status     | Define the conditions to match for the status to be UNKNOWN (Default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display}   |
| --warning-job-status     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_job\_status}, %{display}                                                  |
| --critical-job-status    | Define the conditions to match for the status to be CRITICAL (Default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display}   |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'successful', 'failed', 'running', 'canceled', 'pending', 'default', 'never'.                                                                          |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --filter-name            | Filter job name (Can use regexp).                                                                                                                                                                                                             |
| --display-failed-jobs    | Display failed jobs list in verbose output.                                                                                                                                                                                                   |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'successful', 'failed', 'running', 'canceled', 'pending', 'default'.                                                                                                                                             |

</TabItem>
<TabItem value="Schedules" label="Schedules">

| Option                   | Description                                                                                                                                                                         |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter schedule name (Can use regexp).                                                                                                                                              |
| --unknown-job-status     | Define the conditions to match for the status to be UNKNOWN (Default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display}   |
| --warning-job-status     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_job\_status}, %{display}                                                  |
| --critical-job-status    | Define the conditions to match for the status to be CRITICAL (Default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display}   |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'successful', 'failed', 'running', 'canceled', 'pending', 'default', 'never', 'start-last-time' (s).                                                   |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_ansible_tower.pl \
	--plugin=apps::automation::ansible::tower::plugin \
	--mode=hosts \
	--custommode='api \
	--help
```
