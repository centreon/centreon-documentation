---
id: applications-rubrik-restapi
title: Rubrik Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Rubrik Rest API** brings a host template:

* **App-Rubrik-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Rubrik-Restapi-custom" label="App-Rubrik-Restapi-custom">

| Service Alias | Service Template                     | Service Description             |
|:--------------|:-------------------------------------|:--------------------------------|
| Cluster       | App-Rubrik-Cluster-Restapi-custom    | Check cluster                   |
| Compliance    | App-Rubrik-Compliance-Restapi-custom | Check backup objects compliance |
| Disks         | App-Rubrik-Disks-Restapi-custom      | Check cluster disks             |
| Nodes         | App-Rubrik-Nodes-Restapi-custom      | Check cluster nodes             |
| Storage       | App-Rubrik-Storage-Restapi-custom    | Check storage system            |
| Tasks         | App-Rubrik-Tasks-Restapi-custom      | Check tasks                     |

> The services listed above are created automatically when the **App-Rubrik-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template               | Service Description | Discovery  |
|:--------------|:-------------------------------|:--------------------|:----------:|
| Jobs          | App-Rubrik-Jobs-Restapi-custom | Check jobs          | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                   | Description |
|:----------------------------|:------------|
| App-Rubrik-Restapi-Job-Name | Discover jobs and monitor status |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cluster" label="Cluster">

| Metric name                                      | Unit  |
|:-------------------------------------------------|:------|
| *clusters*#status                                | N/A   |
| *clusters*#cluster.io.read.usage.bytespersecond  | B/s   |
| *clusters*#cluster.io.write.usage.bytespersecond | B/s   |
| *clusters*#cluster.io.read.usage.iops            | iops  |
| *clusters*#cluster.io.write.usage.iops           | iops  |

</TabItem>
<TabItem value="Compliance" label="Compliance">

| Metric name                            | Unit  |
|:---------------------------------------|:------|
| backup.objects.incompliance.24h.count  | count |
| backup.objects.noncompliance.24h.count | count |

</TabItem>
<TabItem value="Disks" label="Disks">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| *clusters*~cluster.disks.total.count  | count |
| *clusters*~cluster.disks.active.count | count |
| *clusters*~*disk_name*#disk-status    | N/A   |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| jobs.executions.detected.count          | count |
| *jobs*~job.executions.failed.percentage | %     |
| *jobs*~job.execution.last.seconds       | s     |
| *jobs*~job.running.duration.seconds     | s     |
| *jobs*~*executions*#execution-status    | N/A   |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| *clusters*~cluster.nodes.total.count | count |
| *clusters*~cluster.nodes.ok.count    | count |
| *clusters*~*nodes*#node-status       | N/A   |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| storage.space.usage.bytes         | B     |
| storage.space.free.bytes          | B     |
| storage.space.usage.percentage    | %     |
| storage.full.remaining.days.count | d     |

</TabItem>
<TabItem value="Tasks" label="Tasks">

| Metric name               | Unit  |
|:--------------------------|:------|
| tasks.succeeded.24h.count | count |
| tasks.failed.24h.count    | count |
| tasks.canceled.24h.count  | count |

</TabItem>
</Tabs>

## Prerequisites

Rubrik App provides a RESTful API on top of Cluster and Edge components. 

You can get a closer look to the API directly on the Cluster using this address:
https://{{node_ip}}/docs/{{v1|v2|internal}}/playground

Information about its configuration is available on github: https://github.com/rubrikinc/api-documentation

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
dnf install centreon-pack-applications-rubrik-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-rubrik-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-rubrik-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-rubrik-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Rubrik Rest API** connector through
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
dnf install centreon-plugin-Applications-Rubrik-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Rubrik-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-rubrik-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Rubrik-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Rubrik-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                                                               | Default value     | Mandatory   |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| RUBRIKAPIUSERNAME       | API username (Mandatory with API password for the first authentication way)                                                               |                   | X           |
| RUBRIKAPIPASSWORD       | API password (Mandatory with API username for the first authentication way)                                                               |                   | X           |
| RUBRIKAPISERVICEACCOUNT | Service account ID (Mandatory with API service account secret for the second authentication way)                                          |                   | X           |
| RUBRIKAPISECRET         | Service account secret (Mandatory with API service account ID for the second authentication way)                                          |                   | X           |
| RUBRIKAPITOKEN          | Use token authentication (the third way to authenticate). If option is empty, token is created.                                           |                   | X           |
| RUBRIKAPIPROTO          | Specify https if needed                                                                                                | https             |             |
| RUBRIKAPIPORT           | Port used                                                                                                                  | 443               |             |
| RUBRIKAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).  |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cluster" label="Cluster">

| Macro             | Description                                                                                                                                           | Default value      | Mandatory   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| CLUSTERID         | Which cluster to check (default: 'me')                                                                                                                | me                 |             |
| UNKNOWNSTATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                                  |                    |             |
| WARNINGREAD       | Thresholds                                                                                                                                            |                    |             |
| CRITICALREAD      | Thresholds                                                                                                                                            |                    |             |
| WARNINGREADIOPS   | Thresholds                                                                                                                                            |                    |             |
| CRITICALREADIOPS  | Thresholds                                                                                                                                            |                    |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{name} | %{status} !~ /ok/i |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                  |                    |             |
| WARNINGWRITE      | Thresholds                                                                                                                                            |                    |             |
| CRITICALWRITE     | Thresholds                                                                                                                                            |                    |             |
| WARNINGWRITEIOPS  | Thresholds                                                                                                                                            |                    |             |
| CRITICALWRITEIOPS | Thresholds                                                                                                                                            |                    |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                    | --verbose          |             |

</TabItem>
<TabItem value="Compliance" label="Compliance">

| Macro                 | Description                                                                                        | Default value     | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGINCOMPLIANCE   | Thresholds                                                                                         |                   |             |
| CRITICALINCOMPLIANCE  | Thresholds                                                                                         |                   |             |
| WARNINGNONCOMPLIANCE  | Thresholds                                                                                         |                   |             |
| CRITICALNONCOMPLIANCE | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro                      | Description                                                                                                                                             | Default value          | Mandatory   |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| CLUSTERID                  | Which cluster to check (default: 'me')                                                                                                                  | me                     |             |
| FILTERDISKID               | Filter disks by disk ID (can be a regexp)                                                                                                               |                        |             |
| UNKNOWNDISKSTATUS          |                                                                                                                                                         |                        |             |
| WARNINGCLUSTERDISKSACTIVE  | Thresholds                                                                                                                                              |                        |             |
| CRITICALCLUSTERDISKSACTIVE | Thresholds                                                                                                                                              |                        |             |
| WARNINGCLUSTERDISKSTOTAL   | Thresholds                                                                                                                                              |                        |             |
| CRITICALCLUSTERDISKSTOTAL  | Thresholds                                                                                                                                              |                        |             |
| CRITICALDISKSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /active/i'). You can use the following variables: %{status}, %{id} | %{status} !~ /active/i |             |
| WARNINGDISKSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{id}                                      |                        |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                      | --verbose              |             |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Macro                           | Description                                                                                                                                         | Default value           | Mandatory   |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERJOBID                     | Filter jobs by job ID                                                                                                                               |                         |             |
| FILTERJOBNAME                   | Filter jobs by job name                                                                                                                             |                         |             |
| FILTERJOBTYPE                   | Filter jobs by job type                                                                                                                             |                         |             |
| FILTEROBJECTTYPE                | Filter jobs by object type                                                                                                                          |                         |             |
| FILTERLOCATIONNAME              | Filter jobs by location name                                                                                                                        |                         |             |
| CRITICALEXECUTIONSTATUS         | Set critical threshold for last job execution status (default: %{status} =~ /Failure/i). You can use the following variables: %{status}, %{jobName} | %{status} =~ /failure/i |             |
| WARNINGEXECUTIONSTATUS          | Set warning threshold for last job execution status. You can use the following variables: %{status}, %{jobName}                                     |                         |             |
| WARNINGJOBEXECUTIONLAST         | Thresholds                                                                                                                                          |                         |             |
| CRITICALJOBEXECUTIONLAST        | Thresholds                                                                                                                                          |                         |             |
| WARNINGJOBEXECUTIONSFAILEDPRCT  | Thresholds                                                                                                                                          |                         |             |
| CRITICALJOBEXECUTIONSFAILEDPRCT | Thresholds                                                                                                                                          |                         |             |
| WARNINGJOBRUNNINGDURATION       | Thresholds                                                                                                                                          |                         |             |
| CRITICALJOBRUNNINGDURATION      | Thresholds                                                                                                                                          |                         |             |
| WARNINGJOBSEXECUTIONSDETECTED   | Thresholds                                                                                                                                          |                         |             |
| CRITICALJOBSEXECUTIONSDETECTED  | Thresholds                                                                                                                                          |                         |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                  | --verbose               |             |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Macro                     | Description                                                                                                                                                         | Default value      | Mandatory   |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| CLUSTERID                 | Which cluster to check (default: 'me')                                                                                                                              | me                 |             |
| FILTERNODEID              | Filter nodes by node ID (can be a regexp)                                                                                                                           |                    |             |
| UNKNOWNNODESTATUS         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{ip\_address}, %{id}                                  |                    |             |
| WARNINGCLUSTERNODESOK     | Thresholds                                                                                                                                                          |                    |             |
| CRITICALCLUSTERNODESOK    | Thresholds                                                                                                                                                          |                    |             |
| WARNINGCLUSTERNODESTOTAL  | Thresholds                                                                                                                                                          |                    |             |
| CRITICALCLUSTERNODESTOTAL | Thresholds                                                                                                                                                          |                    |             |
| CRITICALNODESTATUS        | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{ip\_address}, %{id} | %{status} !~ /ok/i |             |
| WARNINGNODESTATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{ip\_address}, %{id}                                  |                    |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                  | --verbose          |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro                     | Description                                                                                        | Default value     | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGFULLREMAININGDAYS  | Thresholds                                                                                         |                   |             |
| CRITICALFULLREMAININGDAYS | Thresholds                                                                                         |                   |             |
| WARNINGUSAGE              | Thresholds                                                                                         |                   |             |
| CRITICALUSAGE             | Thresholds                                                                                         |                   |             |
| WARNINGUSAGEFREE          | Thresholds                                                                                         |                   |             |
| CRITICALUSAGEFREE         | Thresholds                                                                                         |                   |             |
| WARNINGUSAGEPRCT          | Thresholds                                                                                         |                   |             |
| CRITICALUSAGEPRCT         | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Tasks" label="Tasks">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCANCELED   | Thresholds                                                                                         |                   |             |
| CRITICALCANCELED  | Thresholds                                                                                         |                   |             |
| WARNINGFAILED     | Thresholds                                                                                         |                   |             |
| CRITICALFAILED    | Thresholds                                                                                         |                   |             |
| WARNINGSUCCEEDED  | Thresholds                                                                                         |                   |             |
| CRITICALSUCCEEDED | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
//usr/lib/centreon/plugins/centreon_rubrik_restapi.pl \
    --plugin=apps::backup::rubrik::restapi::plugin \
    --mode=nodes \
    --hostname='10.0.0.1' \
    --proto='https' \
    --port='443' \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --api-password='****' \
    --api-username='centreon' \
    --verbose
```

The expected command output is shown below:

```bash
OK: cluster 'RubrikOne' nodes are ok | 'RubrikOne#cluster.nodes.total.count'=7;;;0; 'RubrikOne#cluster.nodes.ok.count'=7;;;0;7
checking cluster 'RubrikOne'
node 'RVM15CS00XXXX' [ip address: 172.10.69.92] status: ok
node 'RVM15CS00XXXX' [ip address: 172.10.69.93] status: ok
node 'RVM15CS00XXXX' [ip address: 172.10.69.94] status: ok
node 'RVM18BS00XXXX' [ip address: 172.10.69.91] status: ok
node 'RVMHM194S00XXXX' [ip address: 172.10.69.95] status: ok
node 'RVMHM194S00XXXX' [ip address: 172.10.69.96] status: ok
node 'RVMHM194S00XXXX' [ip address: 172.10.69.97] status: ok
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
/usr/lib/centreon/plugins/centreon_rubrik_restapi.pl \
	--plugin=apps::backup::rubrik::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                             | Linked service template               |
|:---------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/cache.pm)]           | Not used in this Monitoring Connector |
| cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/cluster.pm)]       | App-Rubrik-Cluster-Restapi-custom     |
| compliance [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/compliance.pm)] | App-Rubrik-Compliance-Restapi-custom  |
| disks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/disks.pm)]           | App-Rubrik-Disks-Restapi-custom       |
| jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/jobs.pm)]             | App-Rubrik-Jobs-Restapi-custom        |
| list-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/listjobs.pm)]    | Used for service discovery            |
| nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/nodes.pm)]           | App-Rubrik-Nodes-Restapi-custom       |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/storage.pm)]       | App-Rubrik-Storage-Restapi-custom     |
| tasks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/tasks.pm)]           | App-Rubrik-Tasks-Restapi-custom       |

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
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Rubrik Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     | Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --service-account                          | Service account ID (with --secret and --organization-id options).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --secret                                   | Service account secret (with --service-account and --organization-id options).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --organization-id                          | Organization ID (with --service-account and --secret options).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --api-username                             | API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-password                             | API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --token                                    | Use token authentication. If option is empty, token is created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --timeout                                  | Set timeout in seconds (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --cache-use                                | Use the cache file (created with cache mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cluster" label="Cluster">

| Option                   | Description                                                                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                    |
| --cluster-id             | Which cluster to check (default: 'me').                                                                                                                 |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                                    |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                    |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{name}   |
| --warning-* --critical-* | Thresholds. Can be: 'read' (B/s), 'write' (B/s), 'read-iops', 'write-iops'.                                                                             |

</TabItem>
<TabItem value="Compliance" label="Compliance">

| Option                   | Description                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='noncompliance'   |
| --warning-* --critical-* | Thresholds. Can be: 'incompliance', 'noncompliance'.                                          |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option                   | Description                                                                                                                                               |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='disk-status'                                                                 |
| --cluster-id             | Which cluster to check (default: 'me').                                                                                                                   |
| --filter-disk-id         | Filter disks by disk ID (can be a regexp).                                                                                                                |
| --unknown-disks-status   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{id}                                        |
| --warning-disk-status    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{id}                                        |
| --critical-disk-status   | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /active/i'). You can use the following variables: %{status}, %{id}   |
| --warning-* --critical-* | Thresholds. Can be: 'cluster-disks-total', 'cluster-disks-active'.                                                                                        |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Option                      | Description                                                                                                                                                        |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-job-id             | Filter jobs by job ID.                                                                                                                                             |
| --filter-job-name           | Filter jobs by job name.                                                                                                                                           |
| --filter-job-type           | Filter jobs by job type.                                                                                                                                           |
| --filter-object-type        | Filter jobs by object type.                                                                                                                                        |
| --filter-location-name      | Filter jobs by location name.                                                                                                                                      |
| --unit                      | Select the time unit for last execution time thresholds. May be's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.   |
| --limit                     | Define the number of entries to retrieve for the pagination (default: 500).                                                                                         |
| --unknown-execution-status  | Set unknown threshold for last job execution status. You can use the following variables: %{status}, %{jobName}                                                    |
| --warning-execution-status  | Set warning threshold for last job execution status. You can use the following variables: %{status}, %{jobName}                                                    |
| --critical-execution-status | Set critical threshold for last job execution status (default: %{status} =~ /Failure/i). You can use the following variables: %{status}, %{jobName}                |
| --warning-* --critical-*    | Thresholds. Can be: 'jobs-executions-detected', 'job-executions-failed-prct', 'job-execution-last', 'job-running-duration'.                                        |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Option                   | Description                                                                                                                                                           |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='node-status'                                                                             |
| --cluster-id             | Which cluster to check (default: 'me').                                                                                                                               |
| --filter-node-id         | Filter nodes by node ID (can be a regexp).                                                                                                                            |
| --unknown-node-status    | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{ip\_address}, %{id}                                    |
| --warning-node-status    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{ip\_address}, %{id}                                    |
| --critical-node-status   | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{ip\_address}, %{id}   |
| --warning-* --critical-* | Thresholds. Can be: 'cluster-nodes-total', 'cluster-nodes-ok'.                                                                                                        |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option                   | Description                                                                                    |
|:-------------------------|:-----------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='remaining'        |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'full-remaining-days'.    |

</TabItem>
<TabItem value="Tasks" label="Tasks">

| Option                   | Description                                                                            |
|:-------------------------|:---------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='failed'   |
| --warning-* --critical-* | Thresholds. Can be: 'succeeded', 'failed', 'canceled'.                                 |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_rubrik_restapi.pl \
	--plugin=apps::backup::rubrik::restapi::plugin \
	--mode=tasks \
	--help
```
