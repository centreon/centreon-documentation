---
id: operatingsystems-windows-nsclient-05-restapi
title: Windows NSClient API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


NSClient++ provides its own REST API using the webserver module.
This REST API give the possibility to exploit monitoring data from Windows servers 
through HTTPS connections.

The connector allows you to monitor:
* Windows Server OS from 2003 SP2 version
* Windows Workstation from XP version

## Pack assets

### Templates

The Monitoring Connector **Windows NSClient API** brings a host template:

* **OS-Windows-NSClient-05-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="OS-Windows-NSClient-05-Restapi-custom" label="OS-Windows-NSClient-05-Restapi-custom">

| Service Alias | Service Template                                   | Service Description                                                                                                                                |
|:--------------|:---------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu           | OS-Windows-NSClient05-Cpu-Restapi-custom           | Check the rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPUs |
| Disks         | OS-Windows-NSClient05-Disks-Restapi-custom         | Check Windows disk usage                                                                                                                           |
| Memory        | OS-Windows-NSClient05-Memory-Restapi-custom        | Check the rate of the utilization of memory                                                                                                        |
| Services-Auto | OS-Windows-NSClient05-Services-Auto-Restapi-custom | Check that all auto-start services are running                                                                                                     |
| Swap          | OS-Windows-NSClient05-Swap-Restapi-custom          | Check the rate of the utilization of virtual memory                                                                                                |

> The services listed above are created automatically when the **OS-Windows-NSClient-05-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias         | Service Template                                             | Service Description                          |
|:----------------------|:-------------------------------------------------------------|:---------------------------------------------|
| Active-Sessions       | OS-Windows-NSClient05-Counter-Active-Sessions-Restapi-custom | Check active sessions                        |
| Counter-Generic       | OS-Windows-NSClient05-Counter-Generic-Restapi-custom         | Check the content of a performance counter   |
| Eventlog-Generic      | OS-Windows-NSClient05-Eventlog-Generic-restapi-custom        | Check event log errors                       |
| Files-Generic         | OS-Windows-NSClient05-Files-Generic-Restapi-custom           | Check files                                  |
| Logfiles-Generic      | OS-Windows-NSClient05-Logfiles-Generic-Restapi-custom        | Check log files                              |
| Ntp                   | OS-Windows-NSClient05-Ntp-Restapi-custom                     | Check the synchronization with an NTP server |
| Pending-Reboot        | OS-Windows-NSClient05-Pending-Reboot-Restapi-custom          | Check pending Windows reboot                 |
| Process-generic       | OS-Windows-NSClient05-Process-Generic-Restapi-custom         | Check processes                             |
| Services-Generic-Name | OS-Windows-NSClient05-Services-Generic-Name-Restapi-custom   | Check Windows services states                |
| Sessions              | OS-Windows-NSClient05-Sessions-Restapi-custom                | Check Windows user sessions                  |
| Task-Generic          | OS-Windows-NSClient05-Task-Generic-Restapi-custom            | Check Windows scheduled tasks                 |
| Updates               | OS-Windows-NSClient05-Updates-Restapi-custom                 | Check pending Windows 
 updates                |
| Uptime                | OS-Windows-NSClient05-Uptime-Restapi-custom                  | Check Windows uptime                         |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Active-Sessions" label="Active-Sessions">

| Metric name     | Unit  |
|:--------------- |:----- |
| Sessions\_value | count |

</TabItem>
<TabItem value="Counter-Generic" label="Counter-Generic">

| Metric name    | Unit |
| :------------- | :---- |
| Counter\_value | count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name | Unit |
|:-------- |:----- |
| total 5m | %     |
| total 1m | %     |
| total 5s | %     |

</TabItem>
<TabItem value="Disks" label="Disks">

| Metric name | Unit |
|:----------- |:---- |
| used        | B    |

</TabItem>
<TabItem value="Eventlog-Generic" label="Eventlog-Generic">

| Metric name  | Unit  |
|:------------ |:----- |
| problemCount | count |

</TabItem>
<TabItem value="Files-Generic" label="Files-Generic">

| Metric name | Unit  |
|:----------- |:----- |
| count       | count |

</TabItem>
<TabItem value="Logfiles-Generic" label="Logfiles-Generic">

| Metric name         | Unit |
|:---------------- |:----- |
| *tag*\_lines     | count |
| *tag*\_warnings  | count |
| *tag*\_criticals | count |
| *tag*\_unknowns  | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name | Unit |
|:----------- |:---- |
| used        | B    |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Metric name | Unit |
|:----------- |:---- |
| offset      | s    |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Metric name   | Unit  |
|:------------- |:----- |
| pendingreboot | count |

</TabItem>
<TabItem value="Process-generic" label="Process-generic">

| Metric name | Unit  |
|:----------- |:----- |
| exec_name   | count |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

No metrics for this service.

</TabItem>
<TabItem value="Services-Generic-Name" label="Services-Generic-Name">

No metrics for this service.

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| sessions.created.total.count        | count |
| sessions.disconnected.total.count   | count |
| sessions.reconnected.total.count    | count |
| sessions.active.current.count       | count |
| sessions.disconnected.current.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric name | Unit |
|:----------- |:---- |
| swap        | B    |

</TabItem>
<TabItem value="Task-Generic" label="Task-Generic">

| Metric name | Unit  |
|:----------- |:----- |
| task_name   | count |

</TabItem>
<TabItem value="Updates" label="Updates">

| Metric name                   | Unit  |
|:------------------------------|:------|
| windows.pending.updates.count | count |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name | Unit |
|:----------- |:---- |
| uptime      | s    |

</TabItem>
</Tabs>

## Prerequisites

### Centreon NSClient++

To monitor a resource through NSClient++ API, install the Centreon
packaged version of the NSClient++ agent on the resource you want to monitor. Follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md)
and make sure that the **Webserver / RESTApi** configuration is correct.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-operatingsystems-windows-nsclient-05-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-windows-nsclient-05-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-windows-nsclient-05-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-windows-nsclient-05-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Windows NSClient API** connector through
the **Configuration > Monitoring Connectors Manager** menu.

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
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **OS-Windows-NSClient-05-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                     | Description                                                                                           | Default value     | Mandatory   |
|:--------------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NSCPRESTAPILEGACYPASSWORD | Specify password for old authentification system                                                      |                   |             |
| NSCPRESTAPIPROTO          | Specify https if needed (Default: 'https')                                                            | https             |             |
| NSCPRESTAPIPORT           | Port used (Default: 8443)                                                                             | 8443              |             |
| NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Active-Sessions" label="Active-Sessions">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --arg=show-all    |             |

</TabItem>
<TabItem value="Counter-Generic" label="Counter-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --arg=show-all    |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Eventlog-Generic" label="Eventlog-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --arg="unique=1"  |             |

</TabItem>
<TabItem value="Files-Generic" label="Files-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --arg=show-all    |             |

</TabItem>
<TabItem value="Logfiles-Generic" label="Logfiles-Generic">

| Macro    | Description                            | Default value | Mandatory |
|:-------- |:-------------------------------------- |:------------- |:---------:|
| LOGFILE  | Logfile path                           |               |     X     |
| TAG      | Tag to use in output and perfdata      |               |           |
| CRITICAL | Pattern that must raise critical alert |               |           |
| WARNING  | Pattern that must raise warning alert  |               |           |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                         | Default value            | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --arg="perf-syntax=used" |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NTPADDR      | Set the ntp hostname (if not set, we try to find it with w32tm command)                             |                   |             |
| WARNING      | Warning threshold                                                                                   | -1:1              |             |
| CRITICAL     | Critical threshold                                                                                  | -2:2              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Macro          | Description                                                                                                                                                                                                                                              | Default value               | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%\{RebootPending\} =~ /true/i'). You can use the following variables: %\{RebootPending\}, %\{WindowsUpdate\}, %\{CBServicing\}, %\{CCMClientSDK\}, %\{PendFileRename\}, %\{PendComputerRename\} | %\{RebootPending\} =~ /true/i |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %\{RebootPending\}, %\{WindowsUpdate\}, %\{CBServicing\}, %\{CCMClientSDK\}, %\{PendFileRename\}, %\{PendComputerRename\}                           |                             |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                                      |                             |             |

</TabItem>
<TabItem value="Process-generic" label="Process-generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --arg="show-all"  |             |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

| Macro        | Description                                                                                         | Default value            | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --arg="perf-config=none" |             |

</TabItem>
<TabItem value="Services-Generic-Name" label="Services-Generic-Name">

| Macro        | Description                                                                                         | Default value            | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --arg="perf-config=none" |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro                        | Description                                                                                                                                      | Default value     | Mandatory   |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| LANGUAGE                     | Set the language used in the config file (default: 'en')                                                                                             | en                |             |
| FILTERSESSIONNAME            | Filter session name (can be a regexp)                                                                                                            |                   |             |
| CONFIG                       | The command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file |                   |             |
| WARNINGSESSIONSACTIVE        | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSACTIVE       | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSCREATED       | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSCREATED      | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSDISCONNECTED  | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSDISCONNECTED | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSRECONNECTED   | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSRECONNECTED  | Thresholds                                                                                                                                       |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                              |                   |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                         | Default value            | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --arg="perf-syntax=swap" |             |

</TabItem>
<TabItem value="Task-Generic" label="Task-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Updates" label="Updates">

| Macro                  | Description                                                                                         | Default value               | Mandatory   |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTERTITLE            | Filter windows updates by title (can be a regexp)                                                   |                             |             |
| EXCLUDETITLE           | Exclude windows updates by title (regexp can be used)                                               |                             |             |
| FILTERMANDATORY        |  Filter only mandatory Windows updates. | false                       |             |
| WARNINGPENDINGUPDATES  | Thresholds                                                                                          |                             |             |
| CRITICALPENDINGUPDATES | Thresholds                                                                                          |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose --display-updates |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

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
	--legacy-password=''  \
	--command=check_centreon_plugins \
	--arg='os::windows::local::plugin' \
	--arg='updates' \
	--arg='\
	--filter-title="" \
	--exclude-title="" \
	--filter-mandatory="" \
	--warning-pending-updates="" \
	--critical-pending-updates="" \
	--verbose \
	--display-updates '
```

The expected command output is shown below:

```bash
OK: windows pending updates: 32 | 'windows.pending.updates.count'=32;;;0;
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks) if you cannot find the solution to your issue below.

#### UNKNOWN: Cannot decode json response: malformed UTF-8 character in JSON string

If you receive this message, enable debug messages by adding ```--debug```:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
  --plugin=apps::nsclient::restapi::plugin \
  --mode=query \
  --hostname='192.168.1.24' \
  --port='8443' \
  --proto='https' \
  --legacy-password='centreon' \
  --http-backend=curl  \
  --curl-opt="CURLOPT_SSL_VERIFYPEER => 0" \
  --timeout=30 \
  --command=check_centreon_plugins \
  --arg='os::windows::local::plugin' \
  --arg='sessions' \
  --arg='--filter-sessionname="" \
  --config="scripts/centreon/conf/qwinsta.xml" \
  --language="fr" \
  --debug

UNKNOWN: Cannot decode json response: malformed UTF-8 character in JSON string, at character offset 724 (before "\x{fffd}u0090RIPH\x{fffd}...") at /usr/lib/centreon/plugins//centreon_nsclient_restapi.pl line 133.
== Info: About to connect() to 192.168.1.24 port 8443 (#0)
== Info:   Trying 192.168.1.24...
== Info: Connected to 192.168.1.24 (192.168.1.24) port 8443 (#0)
.......
Cannot write statefile '/var/lib/centreon/centplugins/windows_sessions_a181a603769c1f98ad927e7367c7aa51_a181a603769c1f98ad927e7367c7aa51'. 
Need write/exec permissions on directory.
```

* The folder */var/lib/centreon/centplugins* doesn't exist on your Windows Server, change the cache directory by using the options ```--statefile-dir```

#### "UNKNOWN: 500 Can't connect to x.x.x.x:8443"

To fix this issue, add the option ```--http-backend=curl``` to the host macro *NSCPRESTAPIEXTRAOPTIONS*.

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

| Mode                                                                                                                                | Linked service template                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/certificates.pm)]          | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| cmd-return [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/cmdreturn.pm)]               | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| list-certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/listcertificates.pm)] | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/liststorages.pm)]         | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| pending-reboot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/pendingreboot.pm)]       | OS-Windows-NSClient05-Pending-Reboot-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| query [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/nsclient/restapi/mode/query.pm)]                   | OS-Windows-NSClient05-Counter-Active-Sessions-Restapi-custom<br />OS-Windows-NSClient05-Counter-Generic-Restapi-custom<br />OS-Windows-NSClient05-Cpu-Restapi-custom<br />OS-Windows-NSClient05-Disks-Restapi-custom<br />OS-Windows-NSClient05-Eventlog-Generic-restapi-custom<br />OS-Windows-NSClient05-Files-Generic-Restapi-custom<br />OS-Windows-NSClient05-Logfiles-Generic-Restapi-custom<br />OS-Windows-NSClient05-Memory-Restapi-custom<br />OS-Windows-NSClient05-Process-Generic-Restapi-custom<br />OS-Windows-NSClient05-Services-Auto-Restapi-custom<br />OS-Windows-NSClient05-Services-Generic-Name-Restapi-custom<br />OS-Windows-NSClient05-Swap-Restapi-custom<br />OS-Windows-NSClient05-Task-Generic-Restapi-custom<br />OS-Windows-NSClient05-Uptime-Restapi-custom |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/sessions.pm)]                  | OS-Windows-NSClient05-Sessions-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/ntp.pm)]                           | OS-Windows-NSClient05-Ntp-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/updates.pm)]                    | OS-Windows-NSClient05-Updates-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Active-Sessions" label="Active-Sessions">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentification system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Counter-Generic" label="Counter-Generic">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentification system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Eventlog-Generic" label="Eventlog-Generic">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Files-Generic" label="Files-Generic">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Logfiles-Generic" label="Logfiles-Generic">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option         | Description                                                                |
|:---------------|:---------------------------------------------------------------------------|
| --warning      | Warning threshold.                                                         |
| --critical     | Critical threshold.                                                        |
| --ntp-hostname | Set the ntp hostname (if not set, we try to find it with w32tm command).   |
| --ntp-port     | Set the ntp port (Default: 123).                                           |
| --timeout      | Set timeout time for 'w32tm' command execution (Default: 30 sec)           |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Option            | Description                                                                                                                                                                                                                                                 |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (Default: 50 sec)                                                                                                                                                                                                    |
| --no-ps           | Don't encode powershell. To be used with --command and 'type'command.                                                                                                                                                                                       |
| --command         | Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                                                      |
| --command-path    | Command path (Default: none).                                                                                                                                                                                                                               |
| --command-options | Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                                                     |
| --ps-display      | Display powershell script.                                                                                                                                                                                                                                  |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                                                                                    |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: '%\{RebootPending\} =~ /true/i'). You can use the following variables: %\{RebootPending\}, %\{WindowsUpdate\}, %\{CBServicing\}, %\{CCMClientSDK\}, %\{PendFileRename\}, %\{PendComputerRename\}.   |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %\{RebootPending\}, %\{WindowsUpdate\}, %\{CBServicing\}, %\{CCMClientSDK\}, %\{PendFileRename\}, %\{PendComputerRename\}.                             |

</TabItem>
<TabItem value="Process-generic" label="Process-generic">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Services-Generic-Name" label="Services-Generic-Name">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Sessions" label="Sessions">

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
| --config                 | The command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file                                                                                              |
| --language               | Set the language used in config file (default: 'en').                                                                                                                                                                                         |
| --command                | Command to get information (Default: 'qwinsta'). Can be changed if you have output in a file.                                                                                                                                                 |
| --command-path           | Command path (Default: none).                                                                                                                                                                                                                 |
| --command-options        | Command options (Default: '/COUNTER').                                                                                                                                                                                                        |
| --timeout                | Timeout in seconds for the command (Default: 30).                                                                                                                                                                                             |
| --filter-sessionname     | Filter session name (can be a regexp).                                                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'sessions-created', 'sessions-disconnected', 'sessions-reconnected', 'sessions-active', 'sessions-disconnected-current'.                                                                                                  |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Task-Generic" label="Task-Generic">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Updates" label="Updates">

| Option                   | Description                                                                                                                              |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                | Set timeout time for command execution (Default: 50 sec)                                                                                 |
| --no-ps                  | Don't encode powershell. To be used with --command and 'type'command.                                                                    |
| --command                | Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path           | Command path (Default: none).                                                                                                            |
| --command-options        | Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display             | Display powershell script.                                                                                                               |
| --ps-exec-only           | Print powershell output.                                                                                                                 |
| --filter-title           | Filter windows updates by title (can be a regexp).                                                                                       |
| --exclude-title          | Exclude windows updates by title (regexp can be used).                                                                                   |
| --display-updates        | Display updates in verbose output.                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'pending-updates'.                                                                                                   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

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
