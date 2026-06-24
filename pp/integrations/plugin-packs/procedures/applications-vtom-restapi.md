---
id: applications-vtom-restapi
slug: /applications-vtom-restapi
title: Absyss VTOM Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Absyss VTOM Rest API** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Absyss VTOM Rest API** brings a host template:

* **App-Vtom-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Vtom-Restapi-custom" label="App-Vtom-Restapi-custom">

| Service Alias | Service Template             | Service Description | Discovery |
|:--------------|:-----------------------------|:--------------------|:---------:|
| Jobs          | App-Vtom-Jobs-Restapi-custom | Check jobs          | X         |

> The services listed above are created automatically when the **App-Vtom-Restapi-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template              | Service Description  |
|:--------------|:------------------------------|:---------------------|
| Cache         | App-Vtom-Cache-Restapi-custom | Generate cache files |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                 | Description   |
|:--------------------------|:--------------|
| App-Vtom-Restapi-Job-Name | Discover jobs |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Name                          | Unit  |
|:------------------------------|:------|
| jobs.running.count            | count |
| jobs.errors.count             | count |
| jobs.waiting.count            | count |
| jobs.finished.count           | count |
| jobs.notscheduled.count       | count |
| jobs.descheduled.count        | count |
| status                        | N/A   |
| long                          | N/A   |
| *jobs*#job.success.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

To control your VTOM, the Rest API must be configured.

The connector supports following authentication:
* username/password
* direct token

At least VTOM 6.6.1a is mandatory for the connector:
* /auth/1.0/authorize
* /monitoring/1.0/jobs/status

For previous VTOM version, please use **legacy** plugin mode.

## Installer le connecteur de supervision

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
dnf install centreon-pack-applications-vtom-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-vtom-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-vtom-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-vtom-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Absyss VTOM Rest API** connector through
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
dnf install centreon-plugin-Applications-Vtom-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Vtom-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-vtom-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Vtom-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Vtom-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#custom-modes-options), i.e. the connection method to the resource.

| Macro               | Description                                                                                                                                        | Default value | Mandatory |
|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| VTOMAPIUSERNAME     | API username                                                                                                                                       |               | X         |
| VTOMAPIPASSWORD     | API password                                                                                                                                       |               | X         |
| VTOMAPITOKEN        | Use token authentication directly                                                                                                                  |               |           |
| VTOMAPIPROTO        | Specify https if needed                                                                                                                            | https         |           |
| VTOMAPIPORT         | Port used                                                                                                                                          | 30002         |           |
| VTOMCUSTOMMODE      | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                         | api           |           |
| VTOMAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

| Macro        | Description                                                                                                                                      | Default value | Mandatory |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Macro                | Description                                                                                                                                                                                  | Default value           | Mandatory |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:---------:|
| FILTERNAME           | Filter name (can be a regexp)                                                                                                                                                                |                         |           |
| FILTERENVIRONMENT    | Filter environment name (cannot be a regexp)                                                                                                                                                 |                         |           |
| FILTERAPPLICATION    | Filter application name (cannot be a regexp)                                                                                                                                                 |                         |           |
| WARNINGDESCHEDULED   | Threshold                                                                                                                                                                                    |                         |           |
| CRITICALDESCHEDULED  | Threshold                                                                                                                                                                                    |                         |           |
| WARNINGERRORS        | Threshold                                                                                                                                                                                    |                         |           |
| CRITICALERRORS       | Threshold                                                                                                                                                                                    |                         |           |
| WARNINGFINISHED      | Threshold                                                                                                                                                                                    |                         |           |
| CRITICALFINISHED     | Threshold                                                                                                                                                                                    |                         |           |
| WARNINGLONG          | Set warning threshold for long jobs. You can use the following variables: %\{name\}, %\{status\}, %\{elapsed\}, %\{application\}                                                             | none                    |           |
| CRITICALLONG         | Set critical threshold for long jobs. You can use the following variables: %\{name\}, %\{status\}, %\{elapsed\}, %\{application\}                                                            | none                    |           |
| WARNINGNOTSCHEDULED  | Threshold                                                                                                                                                                                    |                         |           |
| CRITICALNOTSCHEDULED | Threshold                                                                                                                                                                                    |                         |           |
| WARNINGRUNNING       | Threshold                                                                                                                                                                                    |                         |           |
| CRITICALRUNNING      | Threshold                                                                                                                                                                                    |                         |           |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{status\}, %\{exit\_code\}, %\{message\}, %\{environment\}, %\{application\} | %\{status\} =~ /Error/i |           |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING You can use the following variables: %\{name\}, %\{status\}, %\{exit\_code\}, %\{message\}, %\{environment\}, %\{application\}   | -                       |           |
| WARNINGSUCCESSPRCT   | Threshold                                                                                                                                                                                    |                         |           |
| CRITICALSUCCESSPRCT  | Threshold                                                                                                                                                                                    |                         |           |
| WARNINGWAITING       | Threshold                                                                                                                                                                                    |                         |           |
| CRITICALWAITING      | Threshold                                                                                                                                                                                    |                         |           |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                       | --verbose               |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_vtom_restapi.pl \
    --plugin=apps::vtom::restapi::plugin \
    --mode=jobs \
    --hostname='10.0.0.1' \
    --api-username='my-username' \
    --api-password='my-password' \
    --filter-application='' \
    --filter-environment='' \
    --filter-name='' \
    --verbose
```

The expected command output is shown below:

```bash
CRITICAL: job 'env_1/app_6/job_1' status: error [message: Traitement en erreur (1)] - job 'env_1/app_7/job_2' status: error [message: Traitement en erreur (1)] - job 'env_2/app_6/job_1' status: error [message: Traitement en erreur (1)] - job 'env_2/app_7/job_2' status: error [message: Traitement en erreur (1)] | 'jobs.running.count'=4;;;0;18 'jobs.errors.count'=4;;;0;18 'jobs.waiting.count'=4;;;0;18 'jobs.finished.count'=2;;;0;18 'jobs.notscheduled.count'=2;;;0;18 'jobs.descheduled.count'=2;;;0;18 'env_1~app_5~job_1#job.success.percentage'=100%;;;0;100 'env_2~app_5~job_1#job.success.percentage'=100%;;;0;100
job 'env_1/app_1/job_1' status: notscheduled
job 'env_1/app_2/job_1' status: waiting
job 'env_1/app_3/job_1' status: descheduled
job 'env_1/app_4/job_1' status: running [message: Job en cours d'execution, pid 29592 (ipid 210)], started since: 19h 37m 15s
job 'env_1/app_5/job_1' status: finished [message: Traitement termine (0)], success: 100.00 %
job 'env_1/app_6/job_1' status: error [message: Traitement en erreur (1)]
job 'env_1/app_7/job_1' status: running [message: L'agent nohost (nohost:37714) est ignore car une erreur recente a ete detectee (attente 63s)], started since: 19h 22m 52s
job 'env_1/app_7/job_2' status: error [message: Traitement en erreur (1)]
job 'env_1/app_7/job_3' status: waiting [message: Heure de demarrage non atteinte]
job 'env_2/app_1/job_1' status: notscheduled
job 'env_2/app_2/job_1' status: waiting
job 'env_2/app_3/job_1' status: descheduled
job 'env_2/app_4/job_1' status: running [message: Job en cours d'execution, pid 29651 (ipid 211)], started since: 19h 35m 58s
job 'env_2/app_5/job_1' status: finished [message: Traitement termine (0)], success: 100.00 %
job 'env_2/app_6/job_1' status: error [message: Traitement en erreur (1)]
job 'env_2/app_7/job_1' status: running [message: Impossible de se connecter a l'agent 'nohost' (nohost:37714) tentative 2/2], started since: 19h 26m 52s
job 'env_2/app_7/job_2' status: error [message: Traitement en erreur (1)]
job 'env_2/app_7/job_3' status: waiting [message: Heure de demarrage non atteinte]
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
/usr/lib/centreon/plugins/centreon_vtom_restapi.pl \
	--plugin=apps::vtom::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                 | Linked service template       |
|:---------------------------------------------------------------------------------------------------------------------|:------------------------------|
| cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vtom/restapi/mode/cache.pm)]        | App-Vtom-Cache-Restapi-custom |
| jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vtom/restapi/mode/jobs.pm)]          | App-Vtom-Jobs-Restapi-custom  |
| list-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vtom/restapi/mode/listjobs.pm)] | Used for service discovery    |

### Available options

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="api" label="api">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --http-peer-addr       | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                         |
| --proxyurl             | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                    |
| --proxypac             | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                              |
| --insecure             | Accept insecure SSL connections.                                                                                                                                                                                                            |
| --http-backend         | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                     |
| --hostname             | Set hostname.                                                                                                                                                                                                                               |
| --port                 | Port used (default: 30002)                                                                                                                                                                                                                  |
| --proto                | Specify https if needed (default: 'https')                                                                                                                                                                                                  |
| --api-username         | API username.                                                                                                                                                                                                                               |
| --api-password         | API password.                                                                                                                                                                                                                               |
| --token                | Use token authentication directly.                                                                                                                                                                                                          |
| --timeout              | Set timeout in seconds (default: 30).                                                                                                                                                                                                       |
</TabItem>
<TabItem value="legacy" label="legacy">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --http-peer-addr       | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                         |
| --proxyurl             | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                    |
| --proxypac             | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                              |
| --insecure             | Accept insecure SSL connections.                                                                                                                                                                                                            |
| --http-backend         | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                     |
| --hostname             | Set hostname.                                                                                                                                                                                                                               |
| --port                 | Port used (default: 30002)                                                                                                                                                                                                                  |
| --proto                | Specify https if needed (default: 'http')                                                                                                                                                                                                   |
| --api-username         | API username.                                                                                                                                                                                                                               |
| --api-password         | API password.                                                                                                                                                                                                                               |
| --timeout              | Set timeout in seconds (default: 30).                                                                                                                                                                                                       |
</TabItem>
</Tabs>

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Option                   | Description                                                                                                                                                                                                                           |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='total-error'                                                                                                                                             |
| --filter-environment     | Filter environment name (cannot be a regexp).                                                                                                                                                                                         |
| --filter-application     | Filter application name (cannot be a regexp).                                                                                                                                                                                         |
| --filter-name            | Filter name (can be a regexp).                                                                                                                                                                                                        |
| --timezone               | Set date timezone. Can use format: 'Europe/London' or '+0100'.                                                                                                                                                                        |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: -) You can use the following variables: %\{name\}, %\{status\}, %\{exit\_code\}, %\{message\}, %\{environment\}, %\{application\}                               |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%\{exit\_code\} =~ /Error/i'). You can use the following variables: %\{name\}, %\{status\}, %\{exit\_code\}, %\{message\}, %\{environment\}, %\{application\} |
| --warning-long           | Set warning threshold for long jobs (default: none) You can use the following variables: %\{name\}, %\{status\}, %\{elapsed\}, %\{application\}                                                                                       |
| --critical-long          | Set critical threshold for long jobs (default: none). You can use the following variables: %\{name\}, %\{status\}, %\{elapsed\}, %\{application\}                                                                                     |
| --warning-* --critical-* | Thresholds. Can be: 'running', 'errors', 'waiting', 'finished', 'notscheduled', 'descheduled', 'success-prct'.                                                                                                                        |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_vtom_restapi.pl \
	--plugin=apps::vtom::restapi::plugin \
	--mode=jobs \
	--help
```
