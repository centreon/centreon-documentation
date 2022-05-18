---
id: applications-monitoring-kadiska-restapi
title: Kadiska Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Kadiska Rest API** brings 2 different host templates:

* App-Monitoring-Kadiska-Station-Restapi-custom
* App-Monitoring-Kadiska-Watcher-Restapi-custom

It brings the following service templates:

| Service Alias      | Service Template                                  | Service Description                                               | Default | Discovery |
|:-------------------|:--------------------------------------------------|:------------------------------------------------------------------|:--------|:----------|
| Target-Statistics  | App-Monitoring-Kadiska-Restapi-Target-Statistics  | Checking performance metrics from Kadiska targets using Rest API  | X       | X         |
| Watcher-Statistics | App-Monitoring-Kadiska-Restapi-Watcher-Statistics | Checking performance metrics from Kadiska watchers using Rest API | X       |           |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Rule Name       | Description               |
|:----------------|:--------------------------|
| Stations        | Discover Kadiska stations |
| Watchers        | Discover Kadiska watchers |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

</TabItem>
<TabItem value="Service" label="Service">

| Rule Name                                        | Description                                                                   |
|:-------------------------------------------------|:------------------------------------------------------------------------------|
| App-Monitoring-Kadiska-Restapi-Target-Statistics | Discover kadiska targets associated to a station and monitor its performance. |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Target-Statistics" label="Target-Statistics">

| Metric Name                              | Unit  |
|:-----------------------------------------|:------|
| *targets*#tracer.packets.loss.percentage | %     |
| *targets*#tracer.path.length             |       |
| *targets*#tracer.round.trip.persecond    | ms    |

</TabItem>
<TabItem value="Watcher-Statistics" label="Watcher-Statistics">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| *watchers*#watcher.errors.percentage | %     |
| *watchers*#watcher.pages.count       | count |
| *watchers*#watcher.requests.count    | count |
| *watchers*#watcher.sessions.count    | count |

</TabItem>
</Tabs>

## Prerequisites

A **client ID** and **client secret** are needed to be able to request Kadisa API.

To get these tokens, go to https://app.kadiska.com/ and in **Configuration > API Clients** to create a client with **Data Analyst** role.
Ensure to keep the client secret because you will not be able to retrieve it from Kadiska interface afterwards.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Kadiska Rest API** resources:

```bash
yum install centreon-plugin-Applications-Monitoring-Kadiska-Restapi
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Kadiska Rest API** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Kadiska Rest API** resources:

```bash
yum install centreon-plugin-Applications-Monitoring-Kadiska-Restapi
```

2. Install the **Kadiska Rest API** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-applications-monitoring-kadiska-restapi
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Kadiska Rest API** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

#### Kadiska Station

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Kadiska Rest API** server settings.
* Apply the **App-Monitoring-Kadiska-Station-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                  | Description                                                                            |
|:------------|:-----------------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS           | Any extra option you may want to add to every command\_line (eg. a --verbose flag)     |
| X           | KADISKAAPICLIENTID     | Kadiska Client ID                                                                      |
| X           | KADISKAAPICLIENTSECRET | Kadiska Client Secret                                                                  |
|             | KADISKAAPIPORT         | (Default: '443')                                                                       |
|             | KADISKAAPIPROTO        | (Default: 'https')                                                                     |
| X           | STATIONNAME            | Specify Kadiska station name                                                           |
|             | TIMEOUT                |                                                                                        |

#### Kadiska Watcher

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Kadiska Rest API** server settings.
* Apply the **App-Monitoring-Kadiska-Watcher-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                  | Description                                                                            |
|:------------|:-----------------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS           | Any extra option you may want to add to every command\_line (eg. a --verbose flag)     |
| X           | KADISKAAPICLIENTID     | Kadiska Client ID                                                                      |
| X           | KADISKAAPICLIENTSECRET | Kadiska Client Secret                                                                  |
|             | KADISKAAPIPORT         | (Default: '443')                                                                       |
|             | KADISKAAPIPROTO        | (Default: 'https')                                                                     |
| X           | WATCHERNAME            | Specify Kadiska watcher name                                                           |
|             | TIMEOUT                |                                                                                        |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \
    --plugin=apps::monitoring::kadiska::plugin \
    --mode=tracer-statistics \
    --client-id='client:xxx' \
    --client-secret='my-secret' \
    --filter-station-name='Paris-RT' \
    --filter-tracer='tracer:xxx' \
    --period=15 \
    --port='443' \
    --proto='https' \
    --timeout='' \
    --verbose \
```

The expected command output is shown below:

```bash
OK: Round trip: 2 ms Path length: 9 Packets Loss: 3 % | 'tracer.round.trip.persecond'=2ms;;;0; 'tracer.path.length'=9;;;0; 'tracer.packets.loss.percentage'=3%;;;0;100 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \
    --plugin=apps::monitoring::kadiska::plugin \
    --mode=tracer-statistics \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \
    --plugin=apps::monitoring::kadiska::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).