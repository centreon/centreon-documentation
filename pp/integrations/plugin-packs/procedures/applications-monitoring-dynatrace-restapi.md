---
id: applications-monitoring-dynatrace-restapi
title: Dynatrace Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Dynatrace Rest API** brings a host template:

* App-Monitoring-Dynatrace-Restapi-custom

It brings the following service templates:

| Service Alias | Service Template                              | Service Description                            | Default |
|:--------------|:----------------------------------------------|:-----------------------------------------------|:--------|
| Apdex         | App-Monitoring-Dynatrace-Apdex-Restapi        | Check entities's Application Performance Index | X       |
| Availability  | App-Monitoring-Dynatrace-Availability-Restapi | Check Synthetic Monitors availability          | X       |
| Events        | App-Monitoring-Dynatrace-Events-Restapi       | Check events                                   | X       |
| Problems      | App-Monitoring-Dynatrace-Problems-Restapi     | Check open problems                            | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Apdex" label="Apdex">

| Metric Name   | Unit  |
|:--------------|:------|
| *apdex*#apdex |       |

</TabItem>
<TabItem value="Availability" label="Availability">

| Metric Name                                                         | Unit  |
|:--------------------------------------------------------------------|:------|
| *synthetic*~*geolocation*#synthetic.monitor.availability.percentage | %     |

</TabItem>
<TabItem value="Events" label="Events">

| Metric Name                    | Unit   |
|:-------------------------------|:-------|
| total.events.count             | count  |
| *management_zone*#events.count | count  |
| status                         | string |

</TabItem>
<TabItem value="Problems" label="Problems">

| Metric Name                           | Unit   |
|:--------------------------------------|:-------|
| total.problems.open.count             | count  |
| *management_zone*#problems.open.count | count  |
| status                                | string |

</TabItem>
</Tabs>

## Prerequisites

An access token needs to be created with the following permissions:
* API v1:
    * DataExport
    * ReadConfig
* API v2:
    * metrics.read
    * problems.read
    * events.read
    * syntheticLocations.read

More information on the offcial Dynatrace documentation: https://www.dynatrace.com/support/help/dynatrace-api/environment-api/tokens-v2/api-tokens

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Dynatrace** resources:

```bash
yum install centreon-plugin-Applications-Monitoring-Dynatrace-Restapi
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Dynatrace Rest API** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Dynatrace** resources:

```bash
yum install centreon-plugin-Applications-Monitoring-Dynatrace-Restapi
```

2. Install the **Dynatrace Rest API** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-applications-monitoring-dynatrace-restapi
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Dynatrace Rest API** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Dynatrace** server settings.
* Apply the **App-Monitoring-Dynatrace-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                     | Description                                                                            |
|:------------|:--------------------------|:---------------------------------------------------------------------------------------|
|             | DYNATRACEAPIENVIRONMENTID | Your Dynatrace environment ID                                                          |
|             | DYNATRACEAPIEXTRAOPTIONS  | Any extra option you may want to add to every command\_line (eg. a --verbose flag)     |
|             | DYNATRACEAPIPASSWORD      | Access token                                                                           |
|             | DYNATRACEAPIPORT          | (Default: '443')                                                                       |
|             | DYNATRACEAPIPROTO         | (Default: 'https')                                                                     |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_dynatrace_restapi.pl \
    --plugin=apps::monitoring::dynatrace::restapi::plugin \
    --mode=apdex \
    --hostname='10.0.0.1' \
    --environment-id='' \
    --api-password='' \
    --port='443' \
    --proto='https' \
    --filter-entity='' \
    --relative-time='2h'\
    --aggregation-type='count' \
    --warning-apdex='' \
    --critical-apdex='' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All Apdex are OK | 'entity#apdex'=0.61;;;0;1 'entity#apdex'=0.88;;;0;1 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_dynatrace_restapi.pl \
    --plugin=apps::monitoring::dynatrace::restapi::plugin \
    --mode=apdex \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_dynatrace_restapi.pl \
    --plugin=apps::monitoring::dynatrace::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).