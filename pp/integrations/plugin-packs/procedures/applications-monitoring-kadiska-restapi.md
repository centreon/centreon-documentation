---
id: applications-monitoring-kadiska-restapi
title: Kadiska Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Kadiska Rest API** brings 3 host templates:

* **App-Monitoring-Kadiska-Restapi-Alerts-custom**
* **App-Monitoring-Kadiska-Runner-Restapi-custom**
* **App-Monitoring-Kadiska-Watcher-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Kadiska-Restapi-Alerts-custom" label="App-Monitoring-Kadiska-Restapi-Alerts-custom">

| Service Alias | Service Template                             | Service Description               | Discovery  |
|:--------------|:---------------------------------------------|:----------------------------------|:----------:|
| Alerts        | App-Monitoring-Kadiska-Restapi-Alerts-custom | Check Kadiska rules alerts status | X          |

> The services listed above are created automatically when the **App-Monitoring-Kadiska-Restapi-Alerts-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="App-Monitoring-Kadiska-Runner-Restapi-custom" label="App-Monitoring-Kadiska-Runner-Restapi-custom">

| Service Alias     | Service Template                                        | Service Description                                              | Discovery  |
|:------------------|:--------------------------------------------------------|:-----------------------------------------------------------------|:----------:|
| Alerts            | App-Monitoring-Kadiska-Restapi-Alerts-custom            | Check Kadiska rules alerts status                                | X          |
| Target-Statistics | App-Monitoring-Kadiska-Restapi-Target-Statistics-custom | Checking performance metrics from Kadiska targets using Rest API | X          |

> The services listed above are created automatically when the **App-Monitoring-Kadiska-Runner-Restapi-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="App-Monitoring-Kadiska-Watcher-Restapi-custom" label="App-Monitoring-Kadiska-Watcher-Restapi-custom">

| Service Alias                           | Service Template                                                              | Service Description                                               |
|:----------------------------------------|:------------------------------------------------------------------------------|:------------------------------------------------------------------|
| Watcher-Statistics-Per-Site-And-Gateway | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-Site-And-Gateway-custom | Checking performance metrics from Kadiska watchers using Rest API |

> The services listed above are created automatically when the **App-Monitoring-Kadiska-Watcher-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias                  | Service Template                                                     | Service Description                                               |
|:-------------------------------|:---------------------------------------------------------------------|:------------------------------------------------------------------|
| Watcher-Statistics-Per-Country | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-Country-custom | Checking performance metrics from Kadiska watchers using Rest API |
| Watcher-Statistics-Per-ISP     | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-ISP-custom     | Checking performance metrics from Kadiska watchers using Rest API |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name        | Description               |
|:-----------------|:--------------------------|
| Kadiska Runners  | Discover Kadiska Runners  |
| Kadiska Watchers | Discover Kadiska Watchers |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                                        | Description                                 |
|:-------------------------------------------------|:--------------------------------------------|
| App-Monitoring-Kadiska-Restapi-Alert-Rules       | Discover kadiska alert rules.               |
| App-Monitoring-Kadiska-Restapi-Target-Statistics | Discover tracer targets for a given runner. |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Metric name               | Unit  |
|:--------------------------|:------|
| rules#rule-ok-count       | N/A   |
| rules#rule-warning-count  | N/A   |
| rules#rule-critical-count | N/A   |
| rules#rule-nodata-count   | N/A   |

</TabItem>
<TabItem value="Target-Statistics" label="Target-Statistics">

| Metric name                            | Unit  |
|:---------------------------------------|:------|
| targets#tracer.round.trip.persecond    | ms    |
| targets#tracer.path.length             | N/A   |
| targets#tracer.packets.loss.percentage | %     |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Country" label="Watcher-Statistics-Per-Country">

| Metric name                                         | Unit  |
|:----------------------------------------------------|:------|
| country#watcher.dtt.spent.time.milliseconds         | ms    |
| country#watcher.errors.percentage                   | %     |
| country#watcher.network.spent.time.milliseconds     | ms    |
| country#watcher.sessions.count                      | count |
| country#watcher.srt.spent.time.milliseconds         | ms    |
| country#watcher.requests.count                      | count |
| country#watcher.redirect.time.milliseconds          | ms    |
| country#watchers.loading.page.duration.milliseconds | ms    |
| country#watchers.pages.count                        | count |
| country#watchers.processing.duration.milliseconds   | ms    |
| country#watchers.users.count                        | count |
| country#watchers.waiting.time.milliseconds          | ms    |
| isp#isp.dtt.spent.time.milliseconds                 | ms    |
| isp#isp.errors.percentage                           | %     |
| isp#isp.network.spent.time.milliseconds             | ms    |
| isp#isp.sessions.count                              | count |
| isp#isp.srt.spent.time.milliseconds                 | ms    |
| isp#isp.requests.count                              | count |
| isp#isp.redirect.time.milliseconds                  | ms    |
| isp#isp.loading.page.duration.milliseconds          | ms    |
| isp#isp.pages.count                                 | count |
| isp#isp.processing.duration.milliseconds            | ms    |
| isp#isp.users.count                                 | count |
| isp#isp.waiting.time.milliseconds                   | ms    |
| watcher~watcher.dtt.spent.time.milliseconds         | ms    |
| watcher~watcher.errors.percentage                   | %     |
| watcher~watcher.network.spent.time.milliseconds     | ms    |
| watcher~watcher.loading.page.duration.milliseconds  | ms    |
| watcher~watcher.pages.count                         | count |
| watcher~watcher.processing.duration.milliseconds    | ms    |
| watcher~watcher.redirect.time.milliseconds          | ms    |
| watcher~watcher.requests.count                      | count |
| watcher~watcher.sessions.count                      | count |
| watcher~watcher.srt.spent.time.milliseconds         | ms    |
| watcher~watcher.users.count                         | count |

</TabItem>
<TabItem value="Watcher-Statistics-Per-ISP" label="Watcher-Statistics-Per-ISP">

| Metric name                                         | Unit  |
|:----------------------------------------------------|:------|
| country#watcher.dtt.spent.time.milliseconds         | ms    |
| country#watcher.errors.percentage                   | %     |
| country#watcher.network.spent.time.milliseconds     | ms    |
| country#watcher.sessions.count                      | count |
| country#watcher.srt.spent.time.milliseconds         | ms    |
| country#watcher.requests.count                      | count |
| country#watcher.redirect.time.milliseconds          | ms    |
| country#watchers.loading.page.duration.milliseconds | ms    |
| country#watchers.pages.count                        | count |
| country#watchers.processing.duration.milliseconds   | ms    |
| country#watchers.users.count                        | count |
| country#watchers.waiting.time.milliseconds          | ms    |
| isp#isp.dtt.spent.time.milliseconds                 | ms    |
| isp#isp.errors.percentage                           | %     |
| isp#isp.network.spent.time.milliseconds             | ms    |
| isp#isp.sessions.count                              | count |
| isp#isp.srt.spent.time.milliseconds                 | ms    |
| isp#isp.requests.count                              | count |
| isp#isp.redirect.time.milliseconds                  | ms    |
| isp#isp.loading.page.duration.milliseconds          | ms    |
| isp#isp.pages.count                                 | count |
| isp#isp.processing.duration.milliseconds            | ms    |
| isp#isp.users.count                                 | count |
| isp#isp.waiting.time.milliseconds                   | ms    |
| watcher~watcher.dtt.spent.time.milliseconds         | ms    |
| watcher~watcher.errors.percentage                   | %     |
| watcher~watcher.network.spent.time.milliseconds     | ms    |
| watcher~watcher.loading.page.duration.milliseconds  | ms    |
| watcher~watcher.pages.count                         | count |
| watcher~watcher.processing.duration.milliseconds    | ms    |
| watcher~watcher.redirect.time.milliseconds          | ms    |
| watcher~watcher.requests.count                      | count |
| watcher~watcher.sessions.count                      | count |
| watcher~watcher.srt.spent.time.milliseconds         | ms    |
| watcher~watcher.users.count                         | count |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Site-And-Gateway" label="Watcher-Statistics-Per-Site-And-Gateway">

| Metric name                                         | Unit  |
|:----------------------------------------------------|:------|
| country#watcher.dtt.spent.time.milliseconds         | ms    |
| country#watcher.errors.percentage                   | %     |
| country#watcher.network.spent.time.milliseconds     | ms    |
| country#watcher.sessions.count                      | count |
| country#watcher.srt.spent.time.milliseconds         | ms    |
| country#watcher.requests.count                      | count |
| country#watcher.redirect.time.milliseconds          | ms    |
| country#watchers.loading.page.duration.milliseconds | ms    |
| country#watchers.pages.count                        | count |
| country#watchers.processing.duration.milliseconds   | ms    |
| country#watchers.users.count                        | count |
| country#watchers.waiting.time.milliseconds          | ms    |
| isp#isp.dtt.spent.time.milliseconds                 | ms    |
| isp#isp.errors.percentage                           | %     |
| isp#isp.network.spent.time.milliseconds             | ms    |
| isp#isp.sessions.count                              | count |
| isp#isp.srt.spent.time.milliseconds                 | ms    |
| isp#isp.requests.count                              | count |
| isp#isp.redirect.time.milliseconds                  | ms    |
| isp#isp.loading.page.duration.milliseconds          | ms    |
| isp#isp.pages.count                                 | count |
| isp#isp.processing.duration.milliseconds            | ms    |
| isp#isp.users.count                                 | count |
| isp#isp.waiting.time.milliseconds                   | ms    |
| watcher~watcher.dtt.spent.time.milliseconds         | ms    |
| watcher~watcher.errors.percentage                   | %     |
| watcher~watcher.network.spent.time.milliseconds     | ms    |
| watcher~watcher.loading.page.duration.milliseconds  | ms    |
| watcher~watcher.pages.count                         | count |
| watcher~watcher.processing.duration.milliseconds    | ms    |
| watcher~watcher.redirect.time.milliseconds          | ms    |
| watcher~watcher.requests.count                      | count |
| watcher~watcher.sessions.count                      | count |
| watcher~watcher.srt.spent.time.milliseconds         | ms    |
| watcher~watcher.users.count                         | count |

</TabItem>
</Tabs>

## Prerequisites

A **client ID** and **client secret** are needed to be able to request Kadisa API.

To get these tokens, go to https://app.kadiska.com/ and in **Configuration > API Clients** to create a client with **Data Analyst** role.
Ensure to keep the client secret because you will not be able to retrieve it from Kadiska interface afterwards.

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
dnf install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Kadiska Rest API** connector through
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
dnf install centreon-plugin-Applications-Monitoring-Kadiska-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Kadiska-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-monitoring-kadiska-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Kadiska-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Kadiska-Restapi-Alerts-custom" label="App-Monitoring-Kadiska-Restapi-Alerts-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Monitoring-Kadiska-Restapi-Alerts-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                  | Description                                                                                           | Default value     | Mandatory   |
|:-----------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| KADISKAAPIPROTO        | Specify https if needed (Default: 'https')                                                            | https             |             |
| KADISKAAPIPORT         | Port used (Default: 443)                                                                              | 443               |             |
| KADISKAAPICLIENTID     | Set client id                                                                                         |                   | X           |
| KADISKAAPICLIENTSECRET | Set client secret                                                                                     |                   | X           |
| TIMEOUT                | Set timeout in seconds (Default: 10)                                                                  |                   |             |
| KADISKAEXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="App-Monitoring-Kadiska-Runner-Restapi-custom" label="App-Monitoring-Kadiska-Runner-Restapi-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Monitoring-Kadiska-Runner-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                  | Description                                                                                           | Default value     | Mandatory   |
|:-----------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| KADISKAAPIPROTO        | Specify https if needed (Default: 'https')                                                            | https             |             |
| KADISKAAPIPORT         | Port used (Default: 443)                                                                              | 443               |             |
| KADISKAAPICLIENTID     | Set client id                                                                                         |                   | X           |
| KADISKAAPICLIENTSECRET | Set client secret                                                                                     |                   | X           |
| RUNNERNAME             | Filter on runner name to display net tracer targets' statistics linked to a particular runner         |                   |             |
| TIMEOUT                | Set timeout in seconds (Default: 10)                                                                  |                   |             |
| KADISKAEXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="App-Monitoring-Kadiska-Watcher-Restapi-custom" label="App-Monitoring-Kadiska-Watcher-Restapi-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Monitoring-Kadiska-Watcher-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                  | Description                                                                                                                                                        | Default value     | Mandatory   |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| KADISKAAPIPROTO        | Specify https if needed (Default: 'https')                                                                                                                         | https             |             |
| KADISKAAPIPORT         | Port used (Default: 443)                                                                                                                                           | 443               |             |
| GATEWAYNAME            | Display statistics for watchers attached to a particular gateway                                                                                                   |                   |             |
| KADISKAAPICLIENTID     | Set client id                                                                                                                                                      |                   | X           |
| KADISKAAPICLIENTSECRET | Set client secret                                                                                                                                                  |                   | X           |
| SITENAME               | Display statistics for watchers on a particular site.  Leave empty to get work-from-home watchers statistics: --select-site-name="" --select-watcher-name="GitHub" |                   |             |
| TIMEOUT                | Set timeout in seconds (Default: 10)                                                                                                                               |                   |             |
| WATCHERNAME            | Display statistics for a particular watcher                                                                                                                        |                   |             |
| KADISKAEXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                              |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PERIOD       |                                                                                                     | 15                |             |
| RULENAME     | Only get rules by name (can be a regexp)                                                            |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Target-Statistics" label="Target-Statistics">

| Macro                   | Description                                                                                                                                                                                               | Default value     | Mandatory   |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PERIOD                  |                                                                                                                                                                                                           | 15                |             |
| TARGETNAME              | Filter to display statistics for particular net tracer targets. Can be a regex or a single tracer target. A target name must be given.  Regex example: --filter-target-name="(mylab.com\|shop.mylab.com)" |                   |             |
| WARNINGPACKETSLOSSPRCT  |                                                                                                                                                                                                           |                   |             |
| CRITICALPACKETSLOSSPRCT | Critical threshold for packets' loss in percentage                                                                                                                                                        |                   |             |
| WARNINGPATHLENGTH       | Warning threshold for path length to reach targets                                                                                                                                                        |                   |             |
| CRITICALPATHLENGTH      | Critical threshold for path length to reach targets.  item --warning-packets-loss-prct  Warning threshold for packets' loss in percentage                                                                 |                   |             |
| WARNINGROUNDTRIP        | Warning threshold for round trip in milliseconds                                                                                                                                                          |                   |             |
| CRITICALROUNDTRIP       | Critical threshold for round trip in milliseconds                                                                                                                                                         |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                       | --verbose         |             |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Country" label="Watcher-Statistics-Per-Country">

| Macro                               | Description                                                                                                      | Default value     | Mandatory   |
|:------------------------------------|:-----------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COUNTRY                             | Display statistics per country.  Leave empty to get statistics from all countries, or specify particular country | .*                |             |
| PERIOD                              |                                                                                                                  | 15                |             |
| WARNINGCOUNTRYDTTSPENT              |                                                                                                                  |                   |             |
| CRITICALCOUNTRYDTTSPENT             |                                                                                                                  |                   |             |
| WARNINGCOUNTRYERRORSPRCT            |                                                                                                                  |                   |             |
| CRITICALCOUNTRYERRORSPRCT           |                                                                                                                  |                   |             |
| WARNINGCOUNTRYFULLTIMENETWORKSPENT  |                                                                                                                  |                   |             |
| CRITICALCOUNTRYFULLTIMENETWORKSPENT |                                                                                                                  |                   |             |
| WARNINGCOUNTRYLOADINGPAGE           |                                                                                                                  |                   |             |
| CRITICALCOUNTRYLOADINGPAGE          |                                                                                                                  |                   |             |
| WARNINGCOUNTRYPAGES                 |                                                                                                                  |                   |             |
| CRITICALCOUNTRYPAGES                |                                                                                                                  |                   |             |
| WARNINGCOUNTRYPROCESSING            |                                                                                                                  |                   |             |
| CRITICALCOUNTRYPROCESSING           |                                                                                                                  |                   |             |
| WARNINGCOUNTRYREDIRECTTIMEAVG       |                                                                                                                  |                   |             |
| CRITICALCOUNTRYREDIRECTTIMEAVG      |                                                                                                                  |                   |             |
| WARNINGCOUNTRYREQUESTS              |                                                                                                                  |                   |             |
| CRITICALCOUNTRYREQUESTS             |                                                                                                                  |                   |             |
| WARNINGCOUNTRYSESSIONS              |                                                                                                                  |                   |             |
| CRITICALCOUNTRYSESSIONS             |                                                                                                                  |                   |             |
| WARNINGCOUNTRYSRTSPENT              |                                                                                                                  |                   |             |
| CRITICALCOUNTRYSRTSPENT             |                                                                                                                  |                   |             |
| WARNINGCOUNTRYUSERS                 |                                                                                                                  |                   |             |
| CRITICALCOUNTRYUSERS                |                                                                                                                  |                   |             |
| WARNINGCOUNTRYWAITINGTIMEAVG        |                                                                                                                  |                   |             |
| CRITICALCOUNTRYWAITINGTIMEAVG       |                                                                                                                  |                   |             |

</TabItem>
<TabItem value="Watcher-Statistics-Per-ISP" label="Watcher-Statistics-Per-ISP">

| Macro                           | Description                                                                                       | Default value     | Mandatory   |
|:--------------------------------|:--------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ISP                             | Display statistics per ISP. Leave empty to get statistics from all ISP, or specify particular ISP | .*                |             |
| PERIOD                          |                                                                                                   | 15                |             |
| WARNINGISPDTTSPENT              |                                                                                                   |                   |             |
| CRITICALISPDTTSPENT             |                                                                                                   |                   |             |
| WARNINGISPERRORSPRCT            |                                                                                                   |                   |             |
| CRITICALISPERRORSPRCT           |                                                                                                   |                   |             |
| WARNINGISPFULLTIMENETWORKSPENT  |                                                                                                   |                   |             |
| CRITICALISPFULLTIMENETWORKSPENT |                                                                                                   |                   |             |
| WARNINGISPLOADINGPAGE           |                                                                                                   |                   |             |
| CRITICALISPLOADINGPAGE          |                                                                                                   |                   |             |
| WARNINGISPPAGES                 |                                                                                                   |                   |             |
| CRITICALISPPAGES                |                                                                                                   |                   |             |
| WARNINGISPPROCESSING            |                                                                                                   |                   |             |
| CRITICALISPPROCESSING           |                                                                                                   |                   |             |
| WARNINGISPREDIRECTTIMEAVG       |                                                                                                   |                   |             |
| CRITICALISPREDIRECTTIMEAVG      |                                                                                                   |                   |             |
| WARNINGISPREQUESTS              |                                                                                                   |                   |             |
| CRITICALISPREQUESTS             |                                                                                                   |                   |             |
| WARNINGISPSESSIONS              |                                                                                                   |                   |             |
| CRITICALISPSESSIONS             |                                                                                                   |                   |             |
| WARNINGISPSRTSPENT              |                                                                                                   |                   |             |
| CRITICALISPSRTSPENT             |                                                                                                   |                   |             |
| WARNINGISPUSERS                 |                                                                                                   |                   |             |
| CRITICALISPUSERS                |                                                                                                   |                   |             |
| WARNINGISPWAITINGTIMEAVG        |                                                                                                   |                   |             |
| CRITICALISPWAITINGTIMEAVG       |                                                                                                   |                   |             |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Site-And-Gateway" label="Watcher-Statistics-Per-Site-And-Gateway">

| Macro                               | Description | Default value     | Mandatory   |
|:------------------------------------|:------------|:------------------|:-----------:|
| PERIOD                              |             | 15                |             |
| WARNINGCOUNTRYDTTSPENT              |             |                   |             |
| CRITICALCOUNTRYDTTSPENT             |             |                   |             |
| WARNINGCOUNTRYERRORSPRCT            |             |                   |             |
| CRITICALCOUNTRYERRORSPRCT           |             |                   |             |
| WARNINGCOUNTRYFULLTIMENETWORKSPENT  |             |                   |             |
| CRITICALCOUNTRYFULLTIMENETWORKSPENT |             |                   |             |
| WARNINGCOUNTRYLOADINGPAGE           |             |                   |             |
| CRITICALCOUNTRYLOADINGPAGE          |             |                   |             |
| WARNINGCOUNTRYPAGES                 |             |                   |             |
| CRITICALCOUNTRYPAGES                |             |                   |             |
| WARNINGCOUNTRYPROCESSING            |             |                   |             |
| CRITICALCOUNTRYPROCESSING           |             |                   |             |
| WARNINGCOUNTRYREDIRECTTIMEAVG       |             |                   |             |
| CRITICALCOUNTRYREDIRECTTIMEAVG      |             |                   |             |
| WARNINGCOUNTRYREQUESTS              |             |                   |             |
| CRITICALCOUNTRYREQUESTS             |             |                   |             |
| WARNINGCOUNTRYSESSIONS              |             |                   |             |
| CRITICALCOUNTRYSESSIONS             |             |                   |             |
| WARNINGCOUNTRYSRTSPENT              |             |                   |             |
| CRITICALCOUNTRYSRTSPENT             |             |                   |             |
| WARNINGCOUNTRYUSERS                 |             |                   |             |
| CRITICALCOUNTRYUSERS                |             |                   |             |
| WARNINGCOUNTRYWAITINGTIMEAVG        |             |                   |             |
| CRITICALCOUNTRYWAITINGTIMEAVG       |             |                   |             |
| WARNINGISPDTTSPENT                  |             |                   |             |
| CRITICALISPDTTSPENT                 |             |                   |             |
| WARNINGISPERRORSPRCT                |             |                   |             |
| CRITICALISPERRORSPRCT               |             |                   |             |
| WARNINGISPFULLTIMENETWORKSPENT      |             |                   |             |
| CRITICALISPFULLTIMENETWORKSPENT     |             |                   |             |
| WARNINGISPLOADINGPAGE               |             |                   |             |
| CRITICALISPLOADINGPAGE              |             |                   |             |
| WARNINGISPPAGES                     |             |                   |             |
| CRITICALISPPAGES                    |             |                   |             |
| WARNINGISPPROCESSING                |             |                   |             |
| CRITICALISPPROCESSING               |             |                   |             |
| WARNINGISPREDIRECTTIMEAVG           |             |                   |             |
| CRITICALISPREDIRECTTIMEAVG          |             |                   |             |
| WARNINGISPREQUESTS                  |             |                   |             |
| CRITICALISPREQUESTS                 |             |                   |             |
| WARNINGISPSESSIONS                  |             |                   |             |
| CRITICALISPSESSIONS                 |             |                   |             |
| WARNINGISPSRTSPENT                  |             |                   |             |
| CRITICALISPSRTSPENT                 |             |                   |             |
| WARNINGISPUSERS                     |             |                   |             |
| CRITICALISPUSERS                    |             |                   |             |
| WARNINGISPWAITINGTIMEAVG            |             |                   |             |
| CRITICALISPWAITINGTIMEAVG           |             |                   |             |
| WARNINGWATCHERDTTSPENT              |             |                   |             |
| CRITICALWATCHERDTTSPENT             |             |                   |             |
| WARNINGWATCHERERRORSPRCT            |             |                   |             |
| CRITICALWATCHERERRORSPRCT           |             |                   |             |
| WARNINGWATCHERFULLNETWORKTIMESPENT  |             |                   |             |
| CRITICALWATCHERFULLNETWORKTIMESPENT |             |                   |             |
| WARNINGWATCHERLOADINGPAGE           |             |                   |             |
| CRITICALWATCHERLOADINGPAGE          |             |                   |             |
| WARNINGWATCHERPAGES                 |             |                   |             |
| CRITICALWATCHERPAGES                |             |                   |             |
| WARNINGWATCHERPROCESSING            |             |                   |             |
| CRITICALWATCHERPROCESSING           |             |                   |             |
| WARNINGWATCHERREDIRECTTIMEAVG       |             |                   |             |
| CRITICALWATCHERREDIRECTTIMEAVG      |             |                   |             |
| WARNINGWATCHERREQUESTS              |             |                   |             |
| CRITICALWATCHERREQUESTS             |             |                   |             |
| WARNINGWATCHERSESSIONS              |             |                   |             |
| CRITICALWATCHERSESSIONS             |             |                   |             |
| WARNINGWATCHERSRTSPENT              |             |                   |             |
| CRITICALWATCHERSRTSPENT             |             |                   |             |
| WARNINGWATCHERUSERS                 |             |                   |             |
| CRITICALWATCHERUSERS                |             |                   |             |
| WARNINGWATCHERWAITINGTIME           |             |                   |             |
| CRITICALWATCHERWAITINGTIME          |             |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \
	--plugin=apps::monitoring::kadiska::plugin \
	--mode=watcher-statistics \
	--client-id='' \
	--client-secret='' \
	--select-watcher-name='' \
	--select-site-name='' \
	--select-gateway-name='' \
	--period='15' \
	--port='' \
	--proto='' \
	--timeout=''  \
	--warning-watcher-redirect-time-avg='' \
	--critical-watcher-redirect-time-avg='' \
	--warning-watcher-full-network-time-spent='' \
	--critical-watcher-full-network-time-spent='' \
	--warning-country-dtt-spent='' \
	--critical-country-dtt-spent='' \
	--warning-country-errors-prct='' \
	--critical-country-errors-prct='' \
	--warning-country-full-time-network-spent='' \
	--critical-country-full-time-network-spent='' \
	--warning-country-sessions='' \
	--critical-country-sessions='' \
	--warning-country-srt-spent='' \
	--critical-country-srt-spent='' \
	--warning-country-requests='' \
	--critical-country-requests='' \
	--warning-country-redirect-time-avg='' \
	--critical-country-redirect-time-avg='' \
	--warning-country-loading-page='' \
	--critical-country-loading-page='' \
	--warning-country-pages='' \
	--critical-country-pages='' \
	--warning-country-processing='' \
	--critical-country-processing='' \
	--warning-country-users='' \
	--critical-country-users='' \
	--warning-country-waiting-time-avg='' \
	--critical-country-waiting-time-avg='' \
	--warning-watcher-loading-page='' \
	--critical-watcher-loading-page='' \
	--warning-watcher-errors-prct='' \
	--critical-watcher-errors-prct='' \
	--warning-watcher-dtt-spent='' \
	--critical-watcher-dtt-spent='' \
	--warning-watcher-waiting-time='' \
	--critical-watcher-waiting-time='' \
	--warning-watcher-requests='' \
	--critical-watcher-requests='' \
	--warning-isp-dtt-spent='' \
	--critical-isp-dtt-spent='' \
	--warning-isp-errors-prct='' \
	--critical-isp-errors-prct='' \
	--warning-isp-full-time-network-spent='' \
	--critical-isp-full-time-network-spent='' \
	--warning-isp-sessions='' \
	--critical-isp-sessions='' \
	--warning-isp-srt-spent='' \
	--critical-isp-srt-spent='' \
	--warning-isp-requests='' \
	--critical-isp-requests='' \
	--warning-isp-redirect-time-avg='' \
	--critical-isp-redirect-time-avg='' \
	--warning-isp-loading-page='' \
	--critical-isp-loading-page='' \
	--warning-isp-pages='' \
	--critical-isp-pages='' \
	--warning-isp-processing='' \
	--critical-isp-processing='' \
	--warning-isp-users='' \
	--critical-isp-users='' \
	--warning-isp-waiting-time-avg='' \
	--critical-isp-waiting-time-avg='' \
	--warning-watcher-processing='' \
	--critical-watcher-processing='' \
	--warning-watcher-users='' \
	--critical-watcher-users='' \
	--warning-watcher-sessions='' \
	--critical-watcher-sessions='' \
	--warning-watcher-pages='' \
	--critical-watcher-pages='' \
	--warning-watcher-srt-spent='' \
	--critical-watcher-srt-spent='' \
	
```

The expected command output is shown below:

```bash
OK: DTT spent: 39 ms Errors: 83% Full time network spent: 96 ms Sessions: 58 SRT spent: 61 ms Requests: 73 Redirect time avg: 97 ms Loading page duration: 71 ms Loaded pages: 76 API Processing duration: 17 ms Connected users: 76 Waiting time avg: 31 ms DTT spent: 12 ms Errors: 2% Full time network spent: 72 ms Sessions: 0 SRT spent: 87 ms Requests: 31 Redirect time avg: 20 ms Loading page duration: 88 ms Loaded pages: 26 API Processing duration: 9 ms Connected users: 7 Waiting time avg: 76 ms DTT spent: 68 ms Errors: 41% Full network time spent: 62 ms Loading page duration: 30 ms Loaded pages: 11 API Processing duration: 93 ms Redirect time avg: 23 ms Requests: 56 Sessions: 90 SRT spent: 20 ms Connected users: 63 | 'watcher.dtt.spent.time.milliseconds'=39ms;;;0; 'watcher.errors.percentage'=83%;;;0;100 'watcher.network.spent.time.milliseconds'=96ms;;;0; 'watcher.sessions.count'=58;;;0; 'watcher.srt.spent.time.milliseconds'=61ms;;;0; 'watcher.requests.count'=73;;;0; 'watcher.redirect.time.milliseconds'=97ms;;;0; 'watchers.loading.page.duration.milliseconds'=71ms;;;0; 'watchers.pages.count'=76;;;0; 'watchers.processing.duration.milliseconds'=17ms;;;0; 'watchers.users.count'=76;;;0; 'watchers.waiting.time.milliseconds'=31ms;;;0; 'isp.dtt.spent.time.milliseconds'=12ms;;;0; 'isp.errors.percentage'=2%;;;0;100 'isp.network.spent.time.milliseconds'=72ms;;;0; 'isp.sessions.count'=0;;;0; 'isp.srt.spent.time.milliseconds'=87ms;;;0; 'isp.requests.count'=31;;;0; 'isp.redirect.time.milliseconds'=20ms;;;0; 'isp.loading.page.duration.milliseconds'=88ms;;;0; 'isp.pages.count'=26;;;0; 'isp.processing.duration.milliseconds'=9ms;;;0; 'isp.users.count'=7;;;0; 'isp.waiting.time.milliseconds'=76ms;;;0; 'watcher.dtt.spent.time.milliseconds'=68ms;;;; 'watcher.errors.percentage'=41%;;;; 'watcher.network.spent.time.milliseconds'=62ms;;;; 'watcher.loading.page.duration.milliseconds'=30ms;;;; 'watcher.pages.count'=11;;;; 'watcher.processing.duration.milliseconds'=93ms;;;; 'watcher.redirect.time.milliseconds'=23ms;;;; 'watcher.requests.count'=56;;;; 'watcher.sessions.count'=90;;;; 'watcher.srt.spent.time.milliseconds'=20ms;;;; 'watcher.users.count'=63;;;; 
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
/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \
	--plugin=apps::monitoring::kadiska::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                             | Linked service template                                                                                                                                                                                                       |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| alerts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/alerts.pm)]                            | App-Monitoring-Kadiska-Restapi-Alerts-custom                                                                                                                                                                                  |
| list-alertrules [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/listalertrules.pm)]           | Used for service discovery                                                                                                                                                                                                    |
| list-runners [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/listrunners.pm)]                 | Used for service discovery                                                                                                                                                                                                    |
| list-targets [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/listtargets.pm)]                 | Used for service discovery                                                                                                                                                                                                    |
| list-watchers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/listwatchers.pm)]               | Used for service discovery                                                                                                                                                                                                    |
| nettracer-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/nettracerstatistics.pm)] | App-Monitoring-Kadiska-Restapi-Target-Statistics-custom                                                                                                                                                                       |
| watcher-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/watcherstatistics.pm)]     | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-Country-custom<br />App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-ISP-custom<br />App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-Site-And-Gateway-custom |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Kadiska Rest API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --hostname                                 | Set hostname (Default: 'app.kadiska.com').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --port                                     | Port used (Default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --period                                   | Set period in minutes from which you want to get information. (Default: '15') Example: --period=60 would return you the data from last hour.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --client-id                                | Set client id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --client-secret                            | Set client secret.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Set timeout in seconds (Default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Option        | Description                                  |
|:--------------|:---------------------------------------------|
| --filter-name | Only get rules by name (can be a regexp).    |

</TabItem>
<TabItem value="Target-Statistics" label="Target-Statistics">

| Option                       | Description                                                                                                                                                                                                 |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-runner-name         | Filter on runner name to display net tracer targets' statistics linked to a particular runner.                                                                                                              |
| --filter-target-name         | Filter to display statistics for particular net tracer targets. Can be a regex or a single tracer target. A target name must be given.  Regex example: --filter-target-name="(mylab.com\|shop.mylab.com)"   |
| --warning-round-trip         | Warning threshold for round trip in milliseconds.                                                                                                                                                           |
| --critical-round-trip        | Critical threshold for round trip in milliseconds.                                                                                                                                                          |
| --warning-path-length        | Warning threshold for path length to reach targets.                                                                                                                                                         |
| --critical-path-length       | Critical threshold for path length to reach targets.  item --warning-packets-loss-prct  Warning threshold for packets' loss in percentage.                                                                  |
| --critical-packets-loss-prct | Critical threshold for packets' loss in percentage.                                                                                                                                                         |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Country" label="Watcher-Statistics-Per-Country">

| Option                | Description                                                                                                                                                                                                                                                                   |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --select-site-name    | Display statistics for watchers on a particular site.  Leave empty to get work-from-home watchers statistics: --select-site-name="" --select-watcher-name="GitHub"                                                                                                            |
| --select-gateway-name | Display statistics for watchers attached to a particular gateway.                                                                                                                                                                                                             |
| --select-watcher-name | Display statistics for a particular watcher.                                                                                                                                                                                                                                  |
| --country             | Display statistics per country.  Leave empty to get statistics from all countries, or specify particular country.                                                                                                                                                             |
| --isp                 | Display statistics per ISP. Leave empty to get statistics from all ISP, or specify particular ISP.                                                                                                                                                                            |
| --wfa                 | Display statistics for watchers used by work-from-anywhereusers.                                                                                                                                                                                                              |
| --warning-            | \[country\|isp\|watcher\]-* --critical-\[country\|isp\|watcher\]-*Thresholds. Can be: 'dtt-spent', 'errors-prct', 'full-time-network-spent', 'sessions', 'srt-spent', 'requests', 'redirect-time-avg', 'loading-page', 'pages', 'processing', 'users', 'waiting-time-avg'.    |

</TabItem>
<TabItem value="Watcher-Statistics-Per-ISP" label="Watcher-Statistics-Per-ISP">

| Option                | Description                                                                                                                                                                                                                                                                   |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --select-site-name    | Display statistics for watchers on a particular site.  Leave empty to get work-from-home watchers statistics: --select-site-name="" --select-watcher-name="GitHub"                                                                                                            |
| --select-gateway-name | Display statistics for watchers attached to a particular gateway.                                                                                                                                                                                                             |
| --select-watcher-name | Display statistics for a particular watcher.                                                                                                                                                                                                                                  |
| --country             | Display statistics per country.  Leave empty to get statistics from all countries, or specify particular country.                                                                                                                                                             |
| --isp                 | Display statistics per ISP. Leave empty to get statistics from all ISP, or specify particular ISP.                                                                                                                                                                            |
| --wfa                 | Display statistics for watchers used by work-from-anywhereusers.                                                                                                                                                                                                              |
| --warning-            | \[country\|isp\|watcher\]-* --critical-\[country\|isp\|watcher\]-*Thresholds. Can be: 'dtt-spent', 'errors-prct', 'full-time-network-spent', 'sessions', 'srt-spent', 'requests', 'redirect-time-avg', 'loading-page', 'pages', 'processing', 'users', 'waiting-time-avg'.    |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Site-And-Gateway" label="Watcher-Statistics-Per-Site-And-Gateway">

| Option                | Description                                                                                                                                                                                                                                                                   |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --select-site-name    | Display statistics for watchers on a particular site.  Leave empty to get work-from-home watchers statistics: --select-site-name="" --select-watcher-name="GitHub"                                                                                                            |
| --select-gateway-name | Display statistics for watchers attached to a particular gateway.                                                                                                                                                                                                             |
| --select-watcher-name | Display statistics for a particular watcher.                                                                                                                                                                                                                                  |
| --country             | Display statistics per country.  Leave empty to get statistics from all countries, or specify particular country.                                                                                                                                                             |
| --isp                 | Display statistics per ISP. Leave empty to get statistics from all ISP, or specify particular ISP.                                                                                                                                                                            |
| --wfa                 | Display statistics for watchers used by work-from-anywhereusers.                                                                                                                                                                                                              |
| --warning-            | \[country\|isp\|watcher\]-* --critical-\[country\|isp\|watcher\]-*Thresholds. Can be: 'dtt-spent', 'errors-prct', 'full-time-network-spent', 'sessions', 'srt-spent', 'requests', 'redirect-time-avg', 'loading-page', 'pages', 'processing', 'users', 'waiting-time-avg'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \
	--plugin=apps::monitoring::kadiska::plugin \
	--mode=watcher-statistics \
	--help
```
