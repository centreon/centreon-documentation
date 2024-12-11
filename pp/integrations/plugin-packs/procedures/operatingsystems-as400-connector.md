---
id: operatingsystems-as400-connector
title: IBM AS400 Connector
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **IBM AS400 Connector** brings a host template:

* **OS-AS400-Connector-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="OS-AS400-Connector-custom" label="OS-AS400-Connector-custom">

| Service Alias | Service Template                      | Service Description |
|:--------------|:--------------------------------------|:--------------------|
| Jobs          | OS-AS400-Jobs-Connector-custom        | Check jobs          |
| Page-Faults   | OS-AS400-Page-Faults-Connector-custom | Check page faults   |
| System        | OS-AS400-System-Connector-custom      | Check system usage  |

> The services listed above are created automatically when the **OS-AS400-Connector-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                        | Service Description              | Discovery  |
|:--------------|:----------------------------------------|:---------------------------------|:----------:|
| Command       | OS-AS400-Command-Connector-custom       | Execute command and check result |            |
| Disks         | OS-AS400-Disks-Connector-custom         | Check disk usage                | X          |
| Job-Queues    | OS-AS400-Job-Queues-Connector-custom    | Check job queues                 |            |
| Message-Queue | OS-AS400-Message-Queue-Connector-custom | Check message queue              |            |
| SubSystem     | OS-AS400-SubSystem-Connector-custom     | Check subsystems                 | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                         | Description                                               |
|:----------------------------------|:----------------------------------------------------------|
| OS-AS400-Connector-Disk-Name      | Discover the disk partitions and monitor space occupation |
| OS-AS400-Connector-SubSystem-Name | Discover subsystems and monitor them                      |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Command" label="Command">

| Metric name | Unit  |
|:------------|:------|
| status      | N/A   |

</TabItem>
<TabItem value="Disks" label="Disks">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| disks.total.count                       | count |
| disks.active.count                      | count |
| disks.errors.count                      | count |
| disks.gap.repartition.percentage        | %     |
| *disk_name*#status                      | N/A   |
| *disk_name*#disk.space.usage.bytes      | B     |
| *disk_name*#disk.space.free.bytes       | B     |
| *disk_name*#disk.space.usage.percentage | %     |
| *disk_name*#disk.space.reserved.bytes   | B     |

</TabItem>
<TabItem value="Job-Queues" label="Job-Queues">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| jobqueues.total.count                | count |
| *jobq*#status                        | N/A   |
| *jobq*#jobqueue.jobs.active.count    | count |
| *jobq*#jobqueue.jobs.scheduled.count | count |
| *jobq*#jobqueue.jobs.held.count      | count |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Metric name      | Unit  |
|:-----------------|:------|
| jobs.total.count | count |

</TabItem>
<TabItem value="Message-Queue" label="Message-Queue">

| Metric name       | Unit  |
|:------------------|:------|
| mq.messages.count | count |

</TabItem>
<TabItem value="Page-Faults" label="Page-Faults">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| pagefaults.database.ratio.percentage    | %     |
| pagefaults.nondatabase.ratio.percentage | %     |

</TabItem>
<TabItem value="SubSystem" label="SubSystem">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| subsystems.total.count               | count |
| subsystems.active.count              | count |
| subsystems.ending.count              | count |
| subsystems.inactive.count            | count |
| subsystems.restricted.count          | count |
| subsystems.starting.count            | count |
| *subsys*#status                      | N/A   |
| *subsys*#subsystem.jobs.active.count | count |

</TabItem>
<TabItem value="System" label="System">

| Metric name                                         | Unit  |
|:----------------------------------------------------|:------|
| *system*~system.processing.units.usage.percentage   | %     |
| *system*~system.storage.pool.space.usage.percentage | %     |
| *system*~system.jobs.total.count                    | count |
| *system*~system.jobs.active.count                   | count |
| *system*~system.batch_jobs.running.count            | count |
| *system*~system.batch_jobs.waiting_message.count    | count |

</TabItem>
</Tabs>

## Prerequisites

This plugin works in a slightly different way than the common ones. 
It requires a connector to communicate with the AS400/iSeries system. 

You can install the connector using this command: 

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Operatingsystems-AS400-daemon
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-AS400-daemon
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-Operatingsystems-AS400-daemon
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-AS400-daemon
```

</TabItem>
</Tabs>

A connector can act as a relay between several Hosts and several AS400 systems. 

> Please note that a recent update of the java version (8 -> 17) in the daemon (versions 2.0.3 and higher) 
> means that if java 8 was already installed on your system, you must force the switch to java 17 for the 
> daemon to work. Run the following command: 

```shell
update-alternatives --config java
```

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
dnf install centreon-pack-operatingsystems-as400-connector
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-as400-connector
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-as400-connector
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-as400-connector
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **IBM AS400 Connector** connector through
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
dnf install centreon-plugin-Operatingsystems-AS400-Connector
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-AS400-Connector
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-as400-connector
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-AS400-Connector
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **OS-AS400-Connector-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                  | Description                                                                                                                              | Default value     | Mandatory   |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AS400USERNAME          | AS/400 username (required)                                                                                                               |                   | X           |
| AS400PASSWORD          | AS/400 password (required)                                                                                                               |                   | X           |
| CENTREONCONNECTORPROTO | Specify https if needed (default: 'http')                                                                                                | http              |             |
| CENTREONCONNECTORPORT  | Port used (default: 8091)                                                                                                                | 8091              |             |
| CENTREONCONNECTORHOST  | Centreon connector hostname (default: 127.0.0.1)                                                                                         | localhost         | X           |
| EXTRAOPTIONS           | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Command" label="Command">

| Macro          | Description                                                                                                                            | Default value          | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| COMMANDNAME    | Specify the command to execute (required)                                                                                              |                        | X           |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                   |                        |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}                  | %{status} =~ /failed/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                   |                        |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                        |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro             | Description                                                                                                                            | Default value                                                                           | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                   | %{status} =~ /unknown/i                                                                 |             |
| DISKNAME          | Filter disks by name (can be a regexp)                                                                                                 |                                                                                         |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                   | %{status} =~ /noReady\|busy\|hwFailureOk\|hwFailurePerf\|Protected\|rebuilding/i        |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}                  | %{status} =~ /^(noAccess\|otherDiskSubFailed\|failed\|notOperational\|noUnitControl)$/i |             |
| WARNINGUSAGEPRCT  | Thresholds                                                                                                                             |                                                                                         |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                                                             |                                                                                         |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                                                                               |             |

</TabItem>
<TabItem value="Job-Queues" label="Job-Queues">

| Macro                 | Description                                                                                                                            | Default value        | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| JOBQUEUES             |                                                                                                                                        |                      | X           |
| UNKNOWNSTATUS         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}, %{library}       |                      |             |
| WARNINGJOBSACTIVE     | Thresholds                                                                                                                             |                      |             |
| CRITICALJOBSACTIVE    | Thresholds                                                                                                                             |                      |             |
| WARNINGJOBSHELD       | Thresholds                                                                                                                             |                      |             |
| CRITICALJOBSHELD      | Thresholds                                                                                                                             |                      |             |
| WARNINGJOBSSCHEDULED  | Thresholds                                                                                                                             |                      |             |
| CRITICALJOBSSCHEDULED | Thresholds                                                                                                                             |                      |             |
| WARNINGJOBSTOTAL      | Thresholds                                                                                                                             |                      |             |
| CRITICALJOBSTOTAL     | Thresholds                                                                                                                             |                      |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}, %{library}      | %{status} =~ /HELD/i |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}, %{library}       |                      |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose            |             |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Macro              | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERACTIVESTATUS | Filter jobs by ACTIVE\_JOB\_STATUS (can be a regexp). Example: --filter-active-status='MSGW' to count jobs with MSGW                   |                   |             |
| FILTERNAME         | Filter jobs by name (can be a regexp)                                                                                                  |                   |             |
| FILTERSUBSYSTEM    | Filter jobs by subsystem (can be a regexp)                                                                                             |                   |             |
| WARNINGTOTAL       | Thresholds                                                                                                                             |                   |             |
| CRITICALTOTAL      | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Message-Queue" label="Message-Queue">

| Macro            | Description                                                                                                                            | Default value                         | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|:-----------:|
| MESSAGEQUEUEPATH | Specify the message queue (required. Example: --message-queue-path='/QSYS.LIB/QSYSOPR.MSGQ')                                           |                                       | X           |
| FILTERMESSAGEID  | Filter messages by ID (can be a regexp)                                                                                                |                                       |             |
| MINSEVERITY      | Filter messages with severity greater than or equal to X                                                                               |                                       |             |
| MAXSEVERITY      | Filter messages with severity less than to X                                                                                           |                                       |             |
| WARNINGMESSAGES  | Thresholds                                                                                                                             |                                       |             |
| CRITICALMESSAGES | Thresholds                                                                                                                             |                                       |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --display-messages --memory --verbose |             |

</TabItem>
<TabItem value="Page-Faults" label="Page-Faults">

| Macro                         | Description                                                                                                                            | Default value     | Mandatory   |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPAGEFAULTSDATABASE     | Thresholds                                                                                                                             |                   |             |
| CRITICALPAGEFAULTSDATABASE    | Thresholds                                                                                                                             |                   |             |
| WARNINGPAGEFAULTSNONDATABASE  | Thresholds                                                                                                                             |                   |             |
| CRITICALPAGEFAULTSNONDATABASE | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="SubSystem" label="SubSystem">

| Macro              | Description                                                                                                                            | Default value                                 | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|:-----------:|
| FILTERNAME         | Filter subsystems by name (can be a regexp)                                                                                            |                                               |             |
| FILTERLIBRARY      | Filter subsystems by library (can be a regexp)                                                                                         |                                               |             |
| UNKNOWNSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}, %{library}       |                                               |             |
| WARNINGACTIVE      | Thresholds                                                                                                                             |                                               |             |
| CRITICALACTIVE     | Thresholds                                                                                                                             |                                               |             |
| WARNINGENDING      | Thresholds                                                                                                                             |                                               |             |
| CRITICALENDING     | Thresholds                                                                                                                             |                                               |             |
| WARNINGINACTIVE    | Thresholds                                                                                                                             |                                               |             |
| CRITICALINACTIVE   | Thresholds                                                                                                                             |                                               |             |
| WARNINGJOBSACTIVE  | Thresholds                                                                                                                             |                                               |             |
| CRITICALJOBSACTIVE | Thresholds                                                                                                                             |                                               |             |
| WARNINGRESTRICTED  | Thresholds                                                                                                                             |                                               |             |
| CRITICALRESTRICTED | Thresholds                                                                                                                             |                                               |             |
| WARNINGSTARTING    | Thresholds                                                                                                                             |                                               |             |
| CRITICALSTARTING   | Thresholds                                                                                                                             |                                               |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}, %{library}       | %{status} =~  /ending\|restricted\|starting/i |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}, %{library}      |                                               |             |
| WARNINGTOTAL       | Thresholds                                                                                                                             |                                               |             |
| CRITICALTOTAL      | Thresholds                                                                                                                             |                                               |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                                     |             |

</TabItem>
<TabItem value="System" label="System">

| Macro                    | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS           | Only display some counters (regexp can be used). Example: --filter-counters='processing-units'                                         |                   |             |
| WARNINGPROCESSUNITUSAGE  | Thresholds                                                                                                                             |                   |             |
| CRITICALPROCESSUNITUSAGE | Thresholds                                                                                                                             |                   |             |
| WARNINGSTORAGEPOOLSPACE  | Thresholds                                                                                                                             |                   |             |
| CRITICALSTORAGEPOOLSPACE | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_as400_connector_client.pl \
	--plugin=os::as400::connector::plugin \
	--mode=system \
	--connector-hostname='localhost' \
	--connector-port='8091' \
	--connector-proto='http' \
	--as400-hostname=10.0.0.1 \
	--as400-username='' \
	--as400-password=''  \
	--filter-counters='' \
	--warning-processing-units-usage='' \
	--warning-storage-pool-space-usage='' \
	--critical-processing-units-usage='' \
	--critical-storage-pool-space-usage='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: processing units used: 47 % storage pool space used: 5 % total: 83 active: 32 running: 77 waiting for message: 7 | '*system*~system.processing.units.usage.percentage'=47%;;;0;'*system*~system.storage.pool.space.usage.percentage'=5%;;;0;100'*system*~system.jobs.total.count'=83;;;0;'*system*~system.jobs.active.count'=32;;;0;'*system*~system.batch_jobs.running.count'=77;;;0;'*system*~system.batch_jobs.waiting_message.count'=7;;;0;
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
/usr/lib/centreon/plugins/centreon_as400_connector_client.pl \
	--plugin=os::as400::connector::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                              | Linked service template                 |
|:----------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
| command [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/command.pm)]                | OS-AS400-Command-Connector-custom       |
| disks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/disks.pm)]                    | OS-AS400-Disks-Connector-custom         |
| job-queues [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/jobqueues.pm)]           | OS-AS400-Job-Queues-Connector-custom    |
| jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/jobs.pm)]                      | OS-AS400-Jobs-Connector-custom          |
| list-disks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/listdisks.pm)]           | Used for service discovery              |
| list-subsystems [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/listsubsystems.pm)] | Used for service discovery              |
| message-queue [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/messagequeue.pm)]     | OS-AS400-Message-Queue-Connector-custom |
| page-faults [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/pagefaults.pm)]         | OS-AS400-Page-Faults-Connector-custom   |
| subsystems [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/subsystems.pm)]          | OS-AS400-SubSystem-Connector-custom     |
| system [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/system.pm)]                  | OS-AS400-System-Connector-custom        |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Centreon AS400 connector Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --connector-hostname                       | Centreon connector hostname (default: 127.0.0.1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --connector-port                           | Port used (default: 8091)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --connector-proto                          | Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --connector-username                       | API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --connector-password                       | API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --connector-timeout                        | Set timeout in seconds (default: 50)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --as400-hostname                           | AS/400 hostname (required)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --as400-username                           | AS/400 username (required)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --as400-password                           | AS/400 password (required)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Command" label="Command">

| Option            | Description                                                                                                                                                  |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --command-name    | Specify the command to execute (required).                                                                                                                   |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                                         |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                         |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /failed/i'). You can use the following variables: %{status}, %{name}    |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option                   | Description                                                                                                                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --disk-name              | Check exact disk.                                                                                                                                                                                                             |
| --filter-disk-name       | Filter disks by name (can be a regexp).                                                                                                                                                                                       |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (default: '%{status} =~ /unknown/i'). You can use the following variables: %{status}, %{name}                                                                     |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /noReady\|busy\|hwFailureOk\|hwFailurePerf\|Protected\|rebuilding/i') . You can use the following variables: %{status}, %{name}           |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /^(noAccess\|otherDiskSubFailed\|failed\|notOperational\|noUnitContr ol)$/i'). You can use the following variables: %{status}, %{name}   |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct', 'reserved', 'disks-total', 'disks-active', 'disks-errors', 'disks-gap-repartition'.                                                                |

</TabItem>
<TabItem value="Job-Queues" label="Job-Queues">

| Option                   | Description                                                                                                                                                           |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}, %{library}                                      |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}, %{library}                                      |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /HELD/i'). You can use the following variables: %{status}, %{name}, %{library}   |
| --warning-* --critical-* | Thresholds. Can be: 'jobqueues-total', 'jobqueue-jobs-active', 'jobqueue-jobs-scheduled', 'jobqueue-jobs-held'.                                                       |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Option                   | Description                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------|
| --filter-active-status   | Filter jobs by ACTIVE\_JOB\_STATUS (can be a regexp). Example: --filter-active-status='MSGW' to count jobs with MSGW.   |
| --filter-name            | Filter jobs by name (can be a regexp).                                                                                  |
| --filter-subsystem       | Filter jobs by subsystem (can be a regexp).                                                                             |
| --display-jobs           | Display jobs in verbose output.                                                                                         |
| --warning-* --critical-* | Thresholds. Can be: 'jobs-total'.                                                                                       |

</TabItem>
<TabItem value="Message-Queue" label="Message-Queue">

| Option                                 | Description                                                                                     |
|:---------------------------------------|:------------------------------------------------------------------------------------------------|
| --message-queue-path                   | Specify the message queue (required. Example: --message-queue-path='/QSYS.LIB/QSYSOPR.MSGQ').   |
| --memory                               | Check only new messages.                                                                        |
| --filter-message-id                    | Filter messages by ID (can be a regexp).                                                        |
| --min-severity                         | Filter messages with severity greater than or equal to X.                                       |
| --max-severity                         | Filter messages with severity less than to X.                                                   |
| --display-messages                     | Display messages in verbose output.                                                             |
| --warning-messages --critical-messages | Thresholds.                                                                                     |

</TabItem>
<TabItem value="Page-Faults" label="Page-Faults">

| Option                   | Description                                                             |
|:-------------------------|:------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'pagefaults-database', 'pagefaults-nondatabase'.    |

</TabItem>
<TabItem value="SubSystem" label="SubSystem">

| Option                     | Description                                                                                                                                                                                  |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-subsystem-name    | Filter subsystems by name (can be a regexp).                                                                                                                                                 |
| --filter-subsystem-library | Filter subsystems by library (can be a regexp).                                                                                                                                              |
| --unknown-status           | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}, %{library}                                                             |
| --warning-status           | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /ending\|restricted\|starting/i'). You can use the following variables: %{status}, %{name}, %{library}   |
| --critical-status          | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}, %{library}                                                            |
| --warning-* --critical-*   | Thresholds. Can be: 'subsystems-total', 'subsystems-active', 'subsystems-ending', 'subsystems-inactive', 'subsystems-restricted', 'subsystems-starting', 'jobs-active'.                      |

</TabItem>
<TabItem value="System" label="System">

| Option                   | Description                                                                                      |
|:-------------------------|:-------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='processing-units'   |
| --warning-* --critical-* | Thresholds. Can be: 'processing-units-usage' (%), 'storage-pool-space-usage' (%),                |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_as400_connector_client.pl \
	--plugin=os::as400::connector::plugin \
	--mode=system \
	--help
```
