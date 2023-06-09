---
id: applications-veeam-vbem-restapi
title: Veeam Backup Enterprise Manager
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Veeam Backup Enterprise Manager Rest API** brings a host template:

* **App-Veeam-Vbem-Restapi**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Veeam-Vbem-Restapi" label="App-Veeam-Vbem-Restapi">

| Service Alias | Service Template                    | Service Description | Discovery  |
|:--------------|:------------------------------------|:--------------------|:-----------|
| Repositories  | App-Veeam-Vbem-Restapi-Repositories | Check repositories  | X          |

> The services listed above are created automatically when the **App-Veeam-Vbem-Restapi** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template            | Service Description | Discovery  |
|:--------------|:----------------------------|:--------------------|:-----------|
| Jobs          | App-Veeam-Vbem-Restapi-Jobs | Check jobs          | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then appy the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                              | Description                                   |
|:---------------------------------------|:----------------------------------------------|
| App-Veeam-Vbem-Restapi-Job-Name        | Discover jobs and monitor status              |
| App-Veeam-Vbem-Restapi-Repository-Name | Discover repositories and monitor utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Metric name                                 | Unit  |
|:--------------------------------------------|:------|
| jobs.executions.detected.count              |       |
| *job_name*#job.executions.failed.percentage | %     |
| *job_name*#job.execution.last.seconds       | s     |
| *job_name*#job.running.duration.seconds     | s     |
| job execution status                        |       |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Metric name                                         | Unit  |
|:----------------------------------------------------|:------|
| *repository_name*#repository.space.usage.bytes      | B     |
| *repository_name*#repository.space.free.bytes       | B     |
| *repository_name*#repository.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

To monitor, a user with read privileges on the Veeam Backup Enterprise Manager [API](https://helpcenter.veeam.com/docs/backup/em_rest/em_web_api_reference.html?ver=120) is required.

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
dnf install centreon-pack-applications-veeam-vbem-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-veeam-vbem-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-veeam-vbem-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-veeam-vbem-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Veeam Backup Enterprise Manager Rest API** connector through
the **Configuration > Monitoring Connectors Manager** menu.

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
dnf install centreon-plugin-Applications-Veeam-Vbem-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Veeam-Vbem-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-veeam-vbem-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Veeam-Vbem-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Veeam-Vbem-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro               | Description                                                                                           | Default value     | Mandatory   |
|:--------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| VBEMAPIPASSWORD     | Set password                                                                                          |                   |             |
| VBEMAPIPORT         | Port used                                                                                             | 9398              |             |
| VBEMAPIPROTOCOL     | Specify https if needed                                                                               | https             |             |
| VBEMAPIUSERNAME     | Set username                                                                                          |                   |             |
| VBEMAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Macro                           | Description                                                                                                                                               | Default value           | Mandatory   |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:------------|
| TIMEFRAME                       | Timeframe to get BackupJobSession (in seconds. Default: 86400)                                                                                            | 86400                   |             |
| UNIT                            | Select the unit for last execution time threshold. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds | s                       |             |
| FILTERUID                       | Filter jobs by UID                                                                                                                                        |                         |             |
| FILTERNAME                      | Filter jobs by name                                                                                                                                       |                         |             |
| FILTERTYPE                      | Filter jobs by type                                                                                                                                       |                         |             |
| WARNINGEXECUTIONSTATUS          | Set warning threshold for last job execution status (Default: %{status} =~ /warning/i). Can used special variables like: %{status}, %{jobName}            | %{status} =~ /warning/i |             |
| CRITICALEXECUTIONSTATUS         | Set critical threshold for last job execution status (Default: %{status} =~ /failed/i). Can used special variables like: %{status}, %{jobName}            | %{status} =~ /failed/i  |             |
| WARNINGJOBEXECUTIONLAST         | Thresholds                                                                                                                                                |                         |             |
| CRITICALJOBEXECUTIONLAST        | Thresholds                                                                                                                                                |                         |             |
| WARNINGJOBEXECUTIONSFAILEDPRCT  | Thresholds                                                                                                                                                |                         |             |
| CRITICALJOBEXECUTIONSFAILEDPRCT | Thresholds                                                                                                                                                |                         |             |
| WARNINGJOBRUNNINGDURATION       | Thresholds                                                                                                                                                |                         |             |
| CRITICALJOBRUNNINGDURATION      | Thresholds                                                                                                                                                |                         |             |
| WARNINGJOBSEXECUTIONSDETECTED   | Thresholds                                                                                                                                                |                         |             |
| CRITICALJOBSEXECUTIONSDETECTED  | Thresholds                                                                                                                                                |                         |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                       | --verbose               |             |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Macro                  | Description                                                                                         | Default value     | Mandatory   |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME             | Filter repositories by name (can be a regexp)                                                       |                   |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a server using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_veeam_vbem_restapi.pl \
	--plugin=apps::backup::veeam::vbem::restapi::plugin \
	--mode=repositories \
	--hostname='10.0.0.1' \
	--port='9398' \
	--proto='https' \
	--api-username='myuser' \
	--api-password='mypass'  \
	--verbose
```

The expected command output is shown below:

```bash
OK: All repositories are ok | 'Default Backup Repository#repository.space.usage.bytes'=136771342336B;;;0;268368347136 'Default Backup Repository#repository.space.free.bytes'=131597004800B;;;0;268368347136 'Default Backup Repository#repository.space.usage.percentage'=50.96%;;;0;100 'Repository-SCALITY-veeam#repository.space.usage.bytes'=0B;;;0;1048576000000000 'Repository-SCALITY-veeam#repository.space.free.bytes'=1048576000000000B;;;0;1048576000000000 'Repository-SCALITY-veeam#repository.space.usage.percentage'=0.00%;;;0;100 'Scale-out Backup Repository I3M#repository.space.usage.bytes'=1123733454848B;;;0;23890250670080 'Scale-out Backup Repository I3M#repository.space.free.bytes'=22766517215232B;;;0;23890250670080 'Scale-out Backup Repository I3M#repository.space.usage.percentage'=4.70%;;;0;100 'Scale-out Backup Repository INFRASTRUCTURE#repository.space.usage.bytes'=158555994574848B;;;0;280007584776192 'Scale-out Backup Repository INFRASTRUCTURE#repository.space.free.bytes'=121451590201344B;;;0;280007584776192 'Scale-out Backup Repository INFRASTRUCTURE#repository.space.usage.percentage'=56.63%;;;0;100 'Scale-out Backup Repository MEDICAL & FONCTIONNEL#repository.space.usage.bytes'=163895073898496B;;;0;280007584776192 'Scale-out Backup Repository MEDICAL & FONCTIONNEL#repository.space.free.bytes'=116112510877696B;;;0;280007584776192 'Scale-out Backup Repository MEDICAL & FONCTIONNEL#repository.space.usage.percentage'=58.53%;;;0;100 'Scale-out Backup Repository ORACLE & SQL#repository.space.usage.bytes'=163858194489344B;;;0;280007584776192 'Scale-out Backup Repository ORACLE & SQL#repository.space.free.bytes'=116149390286848B;;;0;280007584776192 'Scale-out Backup Repository ORACLE & SQL#repository.space.usage.percentage'=58.52%;;;0;100
repository 'Default Backup Repository' space usage total: 249.94 GB used: 127.38 GB (50.96%) free: 122.56 GB (49.04%)
repository 'Repository-SCALITY-veeam' space usage total: 953.67 TB used: 0.00 B (0.00%) free: 953.67 TB (100.00%)
repository 'Scale-out Backup Repository I3M' space usage total: 21.73 TB used: 1.02 TB (4.70%) free: 20.71 TB (95.30%)
repository 'Scale-out Backup Repository INFRASTRUCTURE' space usage total: 254.67 TB used: 144.21 TB (56.63%) free: 110.46 TB (43.37%)
repository 'Scale-out Backup Repository MEDICAL & FONCTIONNEL' space usage total: 254.67 TB used: 149.06 TB (58.53%) free: 105.60 TB (41.47%)
repository 'Scale-out Backup Repository ORACLE & SQL' space usage total: 254.67 TB used: 149.03 TB (58.52%) free: 105.64 TB (41.48%)
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_veeam_vbem_restapi.pl \
	--plugin=apps::backup::veeam::vbem::restapi::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode              | Linked service template               |
|:------------------|:--------------------------------------|
| cache             | Not used in this Monitoring Connector |
| jobs              | App-Veeam-Vbem-Restapi-Jobs           |
| list-jobs         | Used for service discovery            |
| list-repositories | Used for service discovery            |
| repositories      | App-Veeam-Vbem-Restapi-Repositories   |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type         |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --mode                                     | Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global       |
| --dyn-mode                                 | Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global       |
| --list-mode                                | List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --version                                  | Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --custommode                               | Choose a custom mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --list-custommode                          | List available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Global       |
| --multiple                                 | Multiple custom mode objects (required by some specific modes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global       |
| --pass-manager                             | Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --verbose                                  | Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --debug                                    | Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --filter-perfdata                          | Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output       |
| --filter-perfdata-adv                      | Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --explode-perfdata-max                     | Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output       |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output       |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output       |
| --change-short-output --change-long-output | Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --change-exit                              | Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output       |
| --filter-uom                               | Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output       |
| --opt-exit                                 | Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --output-ignore-perfdata                   | Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --output-ignore-label                      | Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output       |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output       |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --float-precision                          | Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --source-encoding                          | Set encoding of monitoring sources (In some case. Default: 'UTF-8').      Veeam Backup Enterprise Manager Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --port                                     | Port used (Default: 9398)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Api          |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Api          |
| --api-username                             | Set username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --api-password                             | Set password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --timeout                                  | Set timeout in seconds (Default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --cache-use                                | Use the cache file (created with cache mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --http-peer-addr                           | Set the address you want to connect (Useful if hostname is only a vhost. no ip resolve)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Http global  |
| --proxyurl                                 | Proxy URL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --proxypac                                 | Proxy pac file (can be an url or local file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Http global  |
| --insecure                                 | Insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --http-backend                             | Set the backend used (Default: 'lwp') For curl: --http-backend=curl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Http global  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Backend lwp  |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Backend curl |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Retention    |
| --redis-server                             | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Retention    |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Retention    |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention    |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention    |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Retention    |
| --statefile-dir                            | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Retention    |
| --statefile-suffix                         | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Retention    |
| --statefile-concat-cwd                     | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Retention    |
| --statefile-format                         | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Retention    |
| --statefile-key                            | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Retention    |
| --statefile-cipher                         | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention    |

#### Modes options

All modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Option                      | Description                                                                                                                                                  | Type |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-uid                | Filter jobs by UID.                                                                                                                                          | Mode |
| --filter-name               | Filter jobs by name.                                                                                                                                         | Mode |
| --filter-type               | Filter jobs by type.                                                                                                                                         | Mode |
| --timeframe                 | Timeframe to get BackupJobSession (in seconds. Default: 86400).                                                                                              | Mode |
| --unit                      | Select the unit for last execution time threshold. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.   | Mode |
| --unknown-execution-status  | Set unknown threshold for last job execution status. Can used special variables like: %{status}, %{jobName}                                                  | Mode |
| --warning-execution-status  | Set warning threshold for last job execution status (Default: %{status} =~ /warning/i). Can used special variables like: %{status}, %{jobName}               | Mode |
| --critical-execution-status | Set critical threshold for last job execution status (Default: %{status} =~ /failed/i). Can used special variables like: %{status}, %{jobName}               | Mode |
| --warning-* --critical-*    | Thresholds. Can be: 'jobs-executions-detected', 'job-executions-failed-prct', 'job-execution-last', 'job-running-duration'.                                  | Mode |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Option                   | Description                                                                   | Type |
|:-------------------------|:------------------------------------------------------------------------------|:-----|
| --filter-name            | Filter repositories by name (can be a regexp).                                | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.    | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_veeam_vbem_restapi.pl \
	--plugin=apps::backup::veeam::vbem::restapi::plugin \
	--mode=repositories \
    --help
```
