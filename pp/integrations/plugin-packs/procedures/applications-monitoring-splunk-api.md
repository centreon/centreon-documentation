---
id: applications-monitoring-splunk-api
title: Splunk
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **Splunk** brings a host template:

* App-Monitoring-Splunk-Api-custom

It brings the following service templates:

| Service Alias        | Service Template                         | Service Description                                                                                             | Default |
|:---------------------|:-----------------------------------------|:----------------------------------------------------------------------------------------------------------------|:--------|
| Index-Update         | App-Monitoring-Splunk-Index-Update-Api   | Check indexes last update time                                                                                  | X       |
| Query-Matches-Number | App-Monitoring-Splunk-Query-Api          | Check number of results for a query. Query has to start with "search ".Example                                  |         |
| Splunkd-Health       | App-Monitoring-Splunk-Splunkd-Health-Api | Check the overall health of splunkd. The health of splunkd is based on the health of all features reporting it. | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Index-Update" label="Index-Update">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| *index*#splunk.index.last.updated.seconds | s     |

</TabItem>
<TabItem value="Query-Matches-Number" label="Query-Matches-Number">

| Metric Name                | Unit  |
|:---------------------------|:------|
| splunk.query.matches.count | count |

</TabItem>
<TabItem value="Splunkd-Health" label="Splunkd-Health">

| Status Name         |
|:--------------------|
| file-monitor-input  |
| index-processor     |
| resource-usage      |
| search-scheduler    |
| workload-management |

</TabItem>
</Tabs>

## Prerequisites

To use this plugin, you have to configure a user with privileges allowing him to call these endpoints: 

- /services/data/indexes
- /services/server/health/splunkd/details
- /services/search/jobs/*

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-monitoring-splunk-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-splunk-api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-monitoring-splunk-api
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Splunk** Pack through
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
dnf install centreon-plugin-Applications-Monitoring-Splunk-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Splunk-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-monitoring-splunk-api
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Splunk** server settings.
* Apply the **App-Monitoring-Splunk-Api-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                 | Description                                                                            |
|:------------|:----------------------|:---------------------------------------------------------------------------------------|
|             | SPLUNKAPIEXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag)      |
|             | SPLUNKAPIHOST         | IP Address or FQDN of your Splunk instance                                             |
|             | SPLUNKAPIPASSWORD     | API Password                                                                           |
|             | SPLUNKAPIPORT         | API Listening port (Default: '8089')                                                   |
|             | SPLUNKAPIPROTOCOL     | API Protocol (Default: 'https')                                                        |
|             | SPLUNKAPIUSERNAME     | API Username                                                                           |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_splunk_api.pl \
    --plugin=apps::monitoring::splunk::plugin \
    --mode=index-update \
    --hostname='' \
    --port='8089' \
    --proto='https' \
    --api-username='' \
    --api-password='' \
    --index-name='' \
    --warning-index-last-update-seconds='600' \
    --critical-index-last-update-seconds='900' \
    --verbose \
```

The expected command output is shown below:

```bash
OK: last update: 5 minutes  | 'splunk.index.last.updated.seconds'=300s;;;0; 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_splunk_api.pl \
    --plugin=apps::monitoring::splunk::plugin \
    --mode=index-update \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_splunk_api.pl \
    --plugin=apps::monitoring::splunk::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).