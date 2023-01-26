---
id: applications-monitoring-kadiska-restapi
title: Kadiska Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 

## Pack Assets

### Templates

The Centreon Pack **Kadiska Rest API** brings 2 different host templates:

* App-Monitoring-Kadiska-Runner-Restapi-custom
* App-Monitoring-Kadiska-Watcher-Restapi-custom

It brings the following service templates:

| Service Alias                           | Service Template                                                       | Service Description                                               | Default | Discovery |
|:----------------------------------------|:-----------------------------------------------------------------------|:------------------------------------------------------------------|:--------|:----------|
| Target-Statistics                       | App-Monitoring-Kadiska-Restapi-Target-Statistics                       | Checking performance metrics from Kadiska targets using Rest API  | X       | X         |
| Watcher-Statistics-Per-Country          | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-Country          | Checking performance metrics from Kadiska watchers per country    |         |           |
| Watcher-Statistics-Per-ISP              | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-ISP              | Checking performance metrics from Kadiska watchers per ISP        |         |           |
| Watcher-Statistics-Per-Site-And-Gateway | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-Site-And-Gateway | Checking performance metrics from Kadiska watchers per site and gateway | X       |           |


### Discovery rules

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Rule Name       | Description               |
|:----------------|:--------------------------|
| Runners         | Discover Kadiska runners  |
| Watchers        | Discover Kadiska watchers |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

</TabItem>
<TabItem value="Service" label="Service">

| Rule Name                                        | Description                                                                   |
|:-------------------------------------------------|:------------------------------------------------------------------------------|
| App-Monitoring-Kadiska-Restapi-Target-Statistics | Discover kadiska targets associated to a runner and monitor its performance.  |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

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
<TabItem value="Watcher-Statistics-Per-Country" label="Watcher-Statistics-Per-Country">

| Metric Name                                          | Unit  |
|:-----------------------------------------------------|:------|
| *country*#country.dtt.spent.time.milliseconds        | ms    |
| *country*#country.errors.percentage                  | %     |
| *country*#country.network.spent.time.milliseconds    | ms    |
| *country*#country.loading.page.duration.milliseconds | ms    |
| *country*#country.pages.count                        | count |
| *country*#country.processing.duration.milliseconds   | ms    |
| *country*#country.redirect.time.milliseconds         | ms    |
| *country*#country.requests.count                     | count |
| *country*#country.sessions.count                     | count |
| *country*#country.srt.spent.time.milliseconds        | ms    |
| *country*#country.users.count                        | count |
| *country*#country.waiting.time.milliseconds          | ms    |

</TabItem>
<TabItem value="Watcher-Statistics-Per-ISP" label="Watcher-Statistics-Per-ISP">

| Metric Name                                           | Unit  |
|:------------------------------------------------------|:------|
| *isp*#isp.dtt.spent.time.milliseconds                 | ms    |
| *isp*#isp.errors.percentage                           | %     |
| *isp*#isp.network.spent.time.milliseconds             | ms    |
| *isp*#isp.loading.page.duration.milliseconds          | ms    |
| *isp*#isp.pages.count                                 | count |
| *isp*#isp.processing.duration.milliseconds            | ms    |
| *isp*#isp.redirect.time.milliseconds                  | ms    |
| *isp*#isp.requests.count                              | count |
| *isp*#isp.sessions.count                              | count |
| *isp*#isp.srt.spent.time.milliseconds                 | ms    |
| *isp*#isp.users.count                                 | count |
| *isp*#isp.waiting.time.milliseconds                   | ms    |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Site-And-Gateway" label="Watcher-Statistics-Per-Site-And-Gateway">

| Metric Name                                                                                | Unit  |
|:-------------------------------------------------------------------------------------------|:------|
| *watcher_name~site_name~gateway_name*watcher.dtt.spent.time.milliseconds                   | ms    |
| *watcher_name~site_name~gateway_name*watcher.errors.percentage                             | %     |
| *watcher_name~site_name~gateway_name*watcher.network.spent.time.milliseconds               | ms    |
| *watcher_name~site_name~gateway_name*watcher.loading.page.duration.milliseconds            | ms    |
| *watcher_name~site_name~gateway_name*watcher.pages.count                                   | count |
| *watcher_name~site_name~gateway_name*watcher.processing.duration.milliseconds              | ms    |
| *watcher_name~site_name~gateway_name*watcher.redirect.time.milliseconds                    | ms    |
| *watcher_name~site_name~gateway_name*watcher.requests.count                                | count |
| *watcher_name~site_name~gateway_name*watcher.sessions.count                                | count |
| *watcher_name~site_name~gateway_name*watcher.srt.spent.time.milliseconds                   | ms    |
| *watcher_name~site_name~gateway_name*watcher.users.count                                   | count |
| *watcher_name~site_name~gateway_name*watcher.waiting.time.milliseconds                     | ms    |

</TabItem>
</Tabs>

## Prerequisites

A **client ID** and **client secret** are needed to be able to request Kadisa API.

To get these tokens, go to https://app.kadiska.com/ and in **Configuration > API Clients** to create a client with **Data Analyst** role.
Ensure to keep the client secret because you will not be able to retrieve it from Kadiska interface afterwards.

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Plugin Packs > Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Kadiska Rest API** Pack through
the **Configuration > Plugin Packs > Manager** menu.

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
dnf install centreon-plugin-Applications-Monitoring-Kadiska-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Kadiska-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-monitoring-kadiska-restapi
```

</TabItem>
</Tabs>

## Configuration

### Host

#### Kadiska Runner

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** fields according to your Kadiska runner name.
* Specify Kadiska API address name in **IP Address/DNS**.
* Apply the **App-Monitoring-Kadiska-Runner-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                  | Description                                                                            |
|:------------|:-----------------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS           | Any extra option you may want to add to every command\_line (eg. a --verbose flag)     |
| X           | KADISKAAPICLIENTID     | Kadiska Client ID                                                                      |
| X           | KADISKAAPICLIENTSECRET | Kadiska Client Secret                                                                  |
|             | KADISKAAPIPORT         | (Default: '443')                                                                       |
|             | KADISKAAPIPROTO        | (Default: 'https')                                                                     |
| X           | RUNNERNAME             | Specify Kadiska runner name                                                            |
|             | TIMEOUT                |                                                                                        |

#### Kadiska Watcher

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** fields according to your Kadiska watcher name.
* Specify Kadiska API address name in **IP Address/DNS**.
* Apply the **App-Monitoring-Kadiska-Watcher-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                  | Description                                                                            |
|:------------|:-----------------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS           | Any extra option you may want to add to every command\_line (eg. a --verbose flag)     |
| X           | KADISKAAPICLIENTID     | Kadiska Client ID                                                                      |
| X           | KADISKAAPICLIENTSECRET | Kadiska Client Secret                                                                  |
|             | KADISKAAPIPORT         | (Default: '443')                                                                       |
|             | KADISKAAPIPROTO        | (Default: 'https')                                                                     |
|             | GATEWAYNAME            | Specify Kadiska gateway name                                                           |
|             | SITENAME               | Specify Kadiska site name                                                              |
| X           | WATCHERNAME            | Specify Kadiska watcher name                                                           |
|             | TIMEOUT                |                                                                                        |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \
    --plugin=apps::monitoring::kadiska::plugin \
    --mode=watcher-statistics \
    --client-id= \
    --client-secret= \
    --select-watcher-name= \
    --select-site-name= \
    --select-gateway-name= \
    --period=15 \
    --port='443' \
    --proto='https' \
    --timeout='' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: DTT spent: 9000 ms Errors: 9000 Full time network spent: 9000 ms Sessions: 9000 SRT spent: 9000 ms Requests: 9000 Redirect time avg: 9000 ms Loading page duration: 9000 ms Loaded pages: %d API Processing duration: 9000 ms Connected users: 9000 Waiting time avg: 9000 ms DTT spent: 9000 ms Errors: 9000%% Full time network spent: 9000 ms Sessions: 9000 SRT spent: 9000 ms Requests: 9000 Redirect time avg: 9000 ms Loading page duration: 9000 ms Loaded pages: %d API Processing duration: 9000 ms Connected users: 9000 Waiting time avg: 9000 ms DTT spent: 9000 ms Errors: 9000% Full network time spent: 9000 ms Loading page duration: 9000 ms Loaded pages: %d API Processing duration: 9000 ms Redirect time avg: 9000 ms Requests: 9000 Sessions: 9000 SRT spent: 9000 ms Connected users: 9000 Waiting time: 9000 ms | 'isp.dtt.spent.time.milliseconds'=9000ms;;;0; 'isp.errors.percentage'=9000%;;;0;100 'isp.network.spent.time.milliseconds'=9000ms;;;0; 'isp.sessions.count'=9000;;;0; 'isp.srt.spent.time.milliseconds'=9000ms;;;0; 'isp.requests.count'=9000;;;0; 'isp.redirect.time.milliseconds'=9000ms;;;0; 'isp.loading.page.duration.milliseconds'=9000ms;;;0; 'isp.pages.count'=9000;;;0; 'isp.processing.duration.milliseconds'=9000ms;;;0; 'users.count'=9000;;;0; 'isp.waiting.time.milliseconds'=9000ms;;;0; 'watcher.dtt.spent.time.milliseconds'=9000ms;;;0; 'watcher.errors.percentage'=9000%;;;0;100 'watcher.network.spent.time.milliseconds'=9000ms;;;0; 'watcher.sessions.count'=9000;;;0; 'watcher.srt.spent.time.milliseconds'=9000ms;;;0; 'watcher.requests.count'=9000;;;0; 'watcher.redirect.time.milliseconds'=9000ms;;;0; 'watchers.loading.page.duration.milliseconds'=9000ms;;;0; 'watchers.pages.count'=9000;;;0; 'watchers.processing.duration.milliseconds'=9000ms;;;0; 'users.count'=9000;;;0; 'watchers.waiting.time.milliseconds'=9000ms;;;0; 'watcher.dtt.spent.time.milliseconds'=9000;;;; 'watcher.errors.percentage'=9000;;;; 'watcher.network.spent.time.milliseconds'=9000;;;; 'watcher.loading.page.duration.milliseconds'=9000;;;; 'watcher.pages.count'=9000;;;; 'watcher.processing.duration.milliseconds'=9000;;;; 'watcher.redirect.time.milliseconds'=9000;;;; 'watcher.requests.count'=9000;;;; 'watcher.sessions.count'=9000;;;; 'watcher.srt.spent.time.milliseconds'=9000;;;; 'users.count'=9000;;;; 'watcher.waiting.time.milliseconds'=9000;;;; 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \
    --plugin=apps::monitoring::kadiska::plugin \
    --mode=watcher-statistics \
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
