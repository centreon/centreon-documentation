---
id: applications-monitoring-centreon-experience-monitoring-restapi
title: Centreon Experience Monitoring (formerly Quanta) Rest API
description: Monitor Centreon Experience Monitoring (formerly Quanta) via REST API: RUM sessions, site performance scores, and user journey incidents/statistics.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Centreon Experience Monitoring (formerly Quanta) Rest API** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Centreon Experience Monitoring (formerly Quanta) Rest API** brings a host template:

* **App-Monitoring-Centreon-DEM-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Centreon-DEM-Restapi-custom" label="App-Monitoring-Centreon-DEM-Restapi-custom">

| Service Alias              | Service Template                                        | Service Description                                 |
|:---------------------------|:--------------------------------------------------------|:----------------------------------------------------|
| RUM Overview               | App-Monitoring-Centreon-DEM-RUM-Restapi-custom          | Check RUM metrics for a given site                  |
| Site Performances Overview | App-Monitoring-Centreon-DEM-Siteoverview-Restapi-custom | Check overview performance metrics for a given site |

> The services listed above are created automatically when the **App-Monitoring-Centreon-DEM-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias           | Service Template                                                  | Service Description                      | Discovery |
|:------------------------|:------------------------------------------------------------------|:-----------------------------------------|:---------:|
| User Journey Incidents  | App-Monitoring-Centreon-DEM-Userjourney-Incidents-Restapi-custom  | Check incidents for a given user journey | X         |
| User Journey Statistics | App-Monitoring-Centreon-DEM-Userjourney-Statistics-Restapi-custom | Check statistics for a user journey      | X         |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                                   | Description                                            |
|:------------------------------------------------------------|:-------------------------------------------------------|
| App-Monitoring-Centreon-DEM-Restapi-Userjourneys-Incidents  | Discover user journeys of a site and monitor incidents  |
| App-Monitoring-Centreon-DEM-Restapi-Userjourneys-Statistics | Discover user journeys on a site and monitor statistics |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="RUM Overview" label="RUM Overview">

| Name                                          | Unit  |
|:----------------------------------------------|:------|
| *rum*#sessions.count                          | count |
| *rum*#pageviews.count                         | count |
| *rum*#bounce.rate.percentage                  | %     |
| *rum*#ttfb.milliseconds                       | ms    |
| *rum*#onload.time.milliseconds                | ms    |
| *rum*#nextpaint.interaction.time.milliseconds | ms    |
| *rum*#speedindex.time.milliseconds            | ms    |

</TabItem>
<TabItem value="Site Performances Overview" label="Site Performances Overview">

| Name                                    | Unit |
|:----------------------------------------|:-----|
| performance-score                       | N/A  |
| digital-sobriety-score                  | N/A  |
| eco-design-score                        | N/A  |
| *sites*#perclick.carbon.footprint.gramm | g    |

</TabItem>
<TabItem value="User Journey Incidents" label="User Journey Incidents">

| Name                               | Unit  |
|:-----------------------------------|:------|
| centreon.dem.incidents.total.count | count |
| incident-status                    | N/A   |
| incident-type                      | N/A   |
| incident-duration                  | N/A   |

</TabItem>
<TabItem value="User Journey Statistics" label="User Journey Statistics">

| Name                                           | Unit |
|:-----------------------------------------------|:-----|
| journey-performance-score                      | N/A  |
| *metrics*#journey.herotime.milliseconds        | ms   |
| *metrics*#journey.speedindex.time.milliseconds | ms   |
| *metrics*#journey.ttfb.milliseconds            | ms   |
| interaction-performance-score                  | N/A  |
| *metrics*#herotime.milliseconds                | ms   |
| *metrics*#speedindex.time.milliseconds         | ms   |
| *metrics*#ttfb.milliseconds                    | ms   |

</TabItem>
</Tabs>

## Prerequisites

In order to monitor Centreon Experience Monitoring, you must have [a valid API token](https://docs.centreon.com/experience-monitoring/installation/monitor-production-events/#authentication-and-token-generation), and [have user journeys configured in Centreon Experience Monitoring](/experience-monitoring/configuration/user-journey/create-a-scenario).
Data from Real User Monitoring will only be accessible if you have completed [the integration of Centreon Experience Monitoring's RUM tag](/experience-monitoring/installation/real-user-monitoring-installation).

## Installing the monitoring connector

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
dnf install centreon-pack-applications-monitoring-centreon-dem-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-centreon-dem-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-monitoring-centreon-dem-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-centreon-dem-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Centreon Experience Monitoring (formerly Quanta) Rest API** connector through
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
dnf install centreon-plugin-Applications-Monitoring-Centreon-DEM-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Centreon-DEM-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-monitoring-centreon-dem-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-DEM-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Monitoring-Centreon-DEM-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                      | Description                                                                                                                                        | Default value | Mandatory |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| CENTREONDEMAPITOKEN        | API token                                                                                                                                          |               |     X     |
| CENTREONDEMSITEID          | Set ID of the site (mandatory option)                                                                                                              |               |     X     |
| CENTREONDEMTIMEOUT         | Set HTTP timeout                                                                                                                                   | 10            |           |
| CENTREONDEMAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="RUM Overview" label="RUM Overview">

| Macro                        | Description                                                                                                                                      | Default value | Mandatory |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                    | Set timeframe in seconds                                                                                                                         | 1800          |           |
| PERSPECTIVE                  | Set the perspective in which the data will be applied. Can be: 'all', 'url', 'browser', 'country', 'city', 'os'                                  | all           |           |
| LIMITRESULTS                 | To be used with --perspective. Limit the number of results to be fetched (number of different URLs, browsers, etc...).                           | 10            |           |
| WARNINGBOUNCERATE            | Warning threshold for bounce rate                                                                                                                |               |           |
| CRITICALBOUNCERATE           | Critical threshold for bounce rate                                                                                                               |               |           |
| WARNINGINTERACTIONNEXTPAINT  | Warning threshold for time to interaction next paint (in ms)                                                                                     |               |           |
| CRITICALINTERACTIONNEXTPAINT | Critical threshold for time to interaction next paint (in ms)                                                                                    |               |           |
| WARNINGONLOAD                | Warning threshold for `onload` time (in ms)                                                                                                      |               |           |
| CRITICALONLOAD               | Critical threshold for `onload` time (in ms)                                                                                                     |               |           |
| WARNINGPAGEVIEWS             | Warning threshold for page views                                                                                                                 |               |           |
| CRITICALPAGEVIEWS            | Critical threshold for page views                                                                                                                |               |           |
| WARNINGSESSIONS              | Warning threshold for sessions                                                                                                                   |               |           |
| CRITICALSESSIONS             | Critical threshold for sessions                                                                                                                  |               |           |
| WARNINGSPEEDINDEX            | Warning threshold for speed index                                                                                                                |               |           |
| CRITICALSPEEDINDEX           | Critical threshold for speed index                                                                                                               |               |           |
| WARNINGTTFB                  | Warning threshold for time to first byte (in ms)                                                                                                 |               |           |
| CRITICALTTFB                 | Critical threshold for time to first byte (in ms)                                                                                                |               |           |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Site Performances Overview" label="Site Performances Overview">

| Macro                        | Description                                                                                                                                      | Default value | Mandatory |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                    | Set timeframe in seconds                                                                                                                         | 3600          |           |
| WARNINGCARBONFOOTPRINT       | Warning threshold for carbon footprint                                                                                                           |               |           |
| CRITICALCARBONFOOTPRINT      | Critical threshold for carbon footprint                                                                                                          |               |           |
| WARNINGDIGITALSOBRIETYSCORE  | Warning threshold for digital sobriety score                                                                                                     |               |           |
| CRITICALDIGITALSOBRIETYSCORE | Critical threshold for digital sobriety score                                                                                                    |               |           |
| WARNINGECODESIGNSCORE        | Warning threshold for `eco design` score                                                                                                         |               |           |
| CRITICALECODESIGNSCORE       | Critical threshold for `eco design` score                                                                                                        |               |           |
| WARNINGPERFORMANCESCORE      | Warning threshold for performance score                                                                                                          |               |           |
| CRITICALPERFORMANCESCORE     | Critical threshold for performance score                                                                                                         |               |           |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="User Journey Incidents" label="User Journey Incidents">

| Macro                    | Description                                                                                                                                                                               | Default value | Mandatory |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                | Set timeframe in seconds                                                                                                                                                                  | 300           |           |
| JOURNEYID                | Set ID of the user journey                                                                                                                                                                |               |     X     |
| WARNINGINCIDENTDURATION  | Warning threshold for incident duration (in seconds)                                                                                                                                      |               |           |
| CRITICALINCIDENTDURATION | Critical threshold for incident duration (in seconds)                                                                                                                                     |               |           |
| WARNINGINCIDENTSTATUS    | Define the conditions to match for the status to be B\<WARNING\>.  You can use the following variables: `%\{status\}`.  Example: `--warning-incident-status='%\{status\} =~ /open/i'`     |               |           |
| CRITICALINCIDENTSTATUS   | Define the conditions to match for the status to be B\<CRITICAL\>.  You can use the following variables: `%\{status\}`.  Default: `--critical-incident-status='%\{status\} =~ /open/i'`   |               |           |
| WARNINGINCIDENTSTOTAL    | Warning threshold for incidents total                                                                                                                                                     |               |           |
| CRITICALINCIDENTSTOTAL   | Critical threshold for incidents total                                                                                                                                                    |               |           |
| WARNINGINCIDENTTYPE      | Define the conditions to match for the incident type to be B\<WARNING\>.  You can use the following variables: `%\{type\}`.  Example: `--warning-incident-type='%\{type\} =~ /error/i'`   |               |           |
| CRITICALINCIDENTTYPE     | Define the conditions to match for the incident type to be B\<CRITICAL\>.  You can use the following variables: `%\{type\}`.  Example: `--critical-incident-type='%\{type\} =~ /error/i'` |               |           |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                    |               |           |

</TabItem>
<TabItem value="User Journey Statistics" label="User Journey Statistics">

| Macro                               | Description                                                                                                                                                            | Default value | Mandatory |
|:------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                           | Set timeframe in seconds                                                                                                                                               | 300           |           |
| JOURNEYID                           | Set ID of the user journey                                                                                                                                             |               |     X     |
| WARNINGINTERACTIONHEROTIME          | Warning threshold for interaction hero time (in ms)                                                                                                                    |               |           |
| CRITICALINTERACTIONHEROTIME         | Critical threshold for interaction hero time (in ms)                                                                                                                   |               |           |
| WARNINGINTERACTIONPERFORMANCESCORE  | Warning threshold for interaction performance score                                                                                                                    |               |           |
| CRITICALINTERACTIONPERFORMANCESCORE | Critical threshold for interaction performance score                                                                                                                   |               |           |
| WARNINGINTERACTIONSPEEDINDEX        | Warning threshold for interaction speed index (in ms)                                                                                                                  |               |           |
| CRITICALINTERACTIONSPEEDINDEX       | Critical threshold for interaction speed index (in ms)                                                                                                                 |               |           |
| WARNINGINTERACTIONTTFB              | Warning threshold for interaction time to first byte (in ms)                                                                                                           |               |           |
| CRITICALINTERACTIONTTFB             | Critical threshold for time to first byte (in ms)                                                                                                                      |               |           |
| WARNINGJOURNEYHEROTIME              | Warning threshold for journey hero time (in ms)                                                                                                                        |               |           |
| CRITICALJOURNEYHEROTIME             | Critical threshold for journey hero time (in ms)                                                                                                                       |               |           |
| WARNINGJOURNEYPERFORMANCESCORE      | Warning threshold for journey performance score                                                                                                                        |               |           |
| CRITICALJOURNEYPERFORMANCESCORE     | Critical threshold for journey performance score                                                                                                                       |               |           |
| WARNINGJOURNEYSPEEDINDEX            | Warning threshold for journey speed index (in ms)                                                                                                                      |               |           |
| CRITICALJOURNEYSPEEDINDEX           | Critical threshold for journey speed index (in ms)                                                                                                                     |               |           |
| WARNINGJOURNEYTTFB                  | Warning threshold for journey time to first byte (in ms)                                                                                                               |               |           |
| CRITICALJOURNEYTTFB                 | Critical threshold for journey time to first byte (in ms).  =back  nteraction related metrics  The following parameters take effect only if --show-interactions is set |               |           |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                 |               |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_monitoring_centreon_dem_restapi.pl \
	--plugin=apps::centreon::dem::restapi::plugin \
	--mode=user-journey-statistics  \
	--api-token='XXX' \
	--timeout='10' \
	--site-id='XXX'  \
	--timeframe='300' \
	--journey-id='XXX' \
	--warning-journey-performance-score='' \
	--critical-journey-performance-score='' \
	--warning-journey-hero-time='' \
	--critical-journey-hero-time='' \
	--warning-journey-speed-index='' \
	--critical-journey-speed-index='' \
	--warning-journey-ttfb='' \
	--critical-journey-ttfb='' \
	--warning-interaction-performance-score='' \
	--critical-interaction-performance-score='' \
	--warning-interaction-hero-time='' \
	--critical-interaction-hero-time='' \
	--warning-interaction-speed-index='' \
	--critical-interaction-speed-index='' \
	--warning-interaction-ttfb='' \
	--critical-interaction-ttfb='' 
```

The expected command output is shown below:

```bash
OK: User journey is OK | 'metrics1#journey.performance.score'=16818;;;0;100 'metrics2#journey.performance.score'=9864;;;0;100 'metrics1#journey.herotime.milliseconds'=70036ms;;;0; 'metrics2#journey.herotime.milliseconds'=76763ms;;;0; 'metrics1#journey.speedindex.time.milliseconds'=42976ms;;;0; 'metrics2#journey.speedindex.time.milliseconds'=54275ms;;;0; 'metrics1#journey.ttfb.milliseconds'=27667ms;;;0; 'metrics2#journey.ttfb.milliseconds'=43720ms;;;0; 'metrics1#interaction.performance.score'=8904;;;0;100 'metrics2#interaction.performance.score'=7892;;;0;100 'metrics1#herotime.milliseconds'=65803ms;;;0; 'metrics2#herotime.milliseconds'=63904ms;;;0; 'metrics1#speedindex.time.milliseconds'=15168ms;;;0; 'metrics2#speedindex.time.milliseconds'=52058ms;;;0; 'metrics1#ttfb.milliseconds'=89426ms;;;0; 'metrics2#ttfb.milliseconds'=18905ms;;;0; 
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
/usr/lib/centreon/plugins/centreon_monitoring_centreon_dem_restapi.pl \
	--plugin=apps::centreon::dem::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                    | Linked service template                                           |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|
| list-user-journeys [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/dem/restapi/mode/listuserjourneys.pm)]           | Used for service discovery                                        |
| rum [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/dem/restapi/mode/rum.pm)]                                       | App-Monitoring-Centreon-DEM-RUM-Restapi-custom                    |
| site-overview [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/dem/restapi/mode/siteoverview.pm)]                    | App-Monitoring-Centreon-DEM-Siteoverview-Restapi-custom           |
| user-journey-incidents [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/dem/restapi/mode/userjourneyincidents.pm)]   | App-Monitoring-Centreon-DEM-Userjourney-Incidents-Restapi-custom  |
| user-journey-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/dem/restapi/mode/userjourneystatistics.pm)] | App-Monitoring-Centreon-DEM-Userjourney-Statistics-Restapi-custom |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --failback-file                            | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Centreon Experience Monitoring (formerly Quanta) API hostname (default: 'api.quanta.io')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     | API port (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proto                                    | Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --api-path                                 | API URL path (default: '/api/v1')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-token                                | API token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --timeout                                  | Set HTTP timeout.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="RUM Overview" label="RUM Overview">

| Option                            | Description                                                                                                                           |
|:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|
| --site-id                         | Set ID of the site (mandatory option).                                                                                                |
| --timeframe                       | Set timeframe in seconds (default: 1800).                                                                                             |
| --perspective                     | Set the perspective in which the data will be applied. Can be: 'all', 'url', 'browser', 'country', 'city', 'os' (default: 'all').     |
| --limit-results                   | To be used with --perspective. Limit the number of results to be fetched (number of different URLs, browsers, etc...). (default: 10). |
| --warning-sessions                | Warning threshold for sessions.                                                                                                       |
| --critical-sessions               | Critical threshold for sessions.                                                                                                      |
| --warning-page-views              | Warning threshold for page views.                                                                                                     |
| --critical-page-views             | Critical threshold for page views.                                                                                                    |
| --warning-bounce-rate             | Warning threshold for bounce rate.                                                                                                    |
| --critical-bounce-rate            | Critical threshold for bounce rate.                                                                                                   |
| --warning-ttfb                    | Warning threshold for time to first byte (in ms).                                                                                     |
| --critical-ttfb                   | Critical threshold for time to first byte (in ms).                                                                                    |
| --warning-onload                  | Warning threshold for `onload` time (in ms).                                                                                          |
| --critical-onload                 | Critical threshold for `onload` time (in ms).                                                                                         |
| --warning-interaction-next-paint  | Warning threshold for time to interaction next paint (in ms).                                                                         |
| --critical-interaction-next-paint | Critical threshold for time to interaction next paint (in ms).                                                                        |
| --warning-speed-index             | Warning threshold for speed index.                                                                                                    |
| --critical-speed-index            | Critical threshold for speed index.                                                                                                   |

</TabItem>
<TabItem value="Site Performances Overview" label="Site Performances Overview">

| Option                            | Description                                    |
|:----------------------------------|:-----------------------------------------------|
| --site-id                         | Set ID of the site (mandatory option).         |
| --timeframe                       | Set timeframe in seconds (default: 3600).      |
| --warning-performance-score       | Warning threshold for performance score.       |
| --critical-performance-score      | Critical threshold for performance score.      |
| --warning-digital-sobriety-score  | Warning threshold for digital sobriety score.  |
| --critical-digital-sobriety-score | Critical threshold for digital sobriety score. |
| --warning-eco-design-score        | Warning threshold for `eco design` score.      |
| --critical-eco-design-score       | Critical threshold for `eco design` score.     |
| --warning-carbon-footprint        | Warning threshold for carbon footprint.        |
| --critical-carbon-footprint       | Critical threshold for carbon footprint.       |

</TabItem>
<TabItem value="User Journey Incidents" label="User Journey Incidents">

| Option                       | Description                                                                                                                                                                               |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --site-id                    | Set ID of the site (mandatory option).                                                                                                                                                    |
| --journey-id                 | Set ID of the user journey (mandatory option).                                                                                                                                            |
| --timeframe                  | Set timeframe in seconds (default: 300).                                                                                                                                                  |
| --ignore-closed              | Ignore closed incidents.                                                                                                                                                                  |
| --warning-incidents-total    | Warning threshold for incidents total.                                                                                                                                                    |
| --critical-incidents-total   | Critical threshold for incidents total.                                                                                                                                                   |
| --warning-incident-status    | Define the conditions to match for the status to be B\<WARNING\>.  You can use the following variables: `%\{status\}`.  Example: `--warning-incident-status='%\{status\} =~ /open/i'`     |
| --critical-incident-status   | Define the conditions to match for the status to be B\<CRITICAL\>.  You can use the following variables: `%\{status\}`.  Default: `--critical-incident-status='%\{status\} =~ /open/i'`   |
| --warning-incident-type      | Define the conditions to match for the incident type to be B\<WARNING\>.  You can use the following variables: `%\{type\}`.  Example: `--warning-incident-type='%\{type\} =~ /error/i'`   |
| --critical-incident-type     | Define the conditions to match for the incident type to be B\<CRITICAL\>.  You can use the following variables: `%\{type\}`.  Example: `--critical-incident-type='%\{type\} =~ /error/i'` |
| --warning-incident-duration  | Warning threshold for incident duration (in seconds).                                                                                                                                     |
| --critical-incident-duration | Critical threshold for incident duration (in seconds).                                                                                                                                    |

</TabItem>
<TabItem value="User Journey Statistics" label="User Journey Statistics">

| Option                                   | Description                                                                                                                                                              |
|:-----------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --site-id                                | Set ID of the site (mandatory option).                                                                                                                                   |
| --journey-id                             | Set ID of the user journey (mandatory option).                                                                                                                           |
| --show-interactions                      | Also monitor interactions (scenario's steps) of a user journey.                                                                                                          |
| --timeframe                              | Set timeframe in seconds (default: 300).                                                                                                                                 |
| --warning-journey-performance-score      | Warning threshold for journey performance score.                                                                                                                         |
| --critical-journey-performance-score     | Critical threshold for journey performance score.                                                                                                                        |
| --warning-journey-hero-time              | Warning threshold for journey hero time (in ms).                                                                                                                         |
| --critical-journey-hero-time             | Critical threshold for journey hero time (in ms).                                                                                                                        |
| --warning-journey-speed-index            | Warning threshold for journey speed index (in ms).                                                                                                                       |
| --critical-journey-speed-index           | Critical threshold for journey speed index (in ms).                                                                                                                      |
| --warning-journey-ttfb                   | Warning threshold for journey time to first byte (in ms).                                                                                                                |
| --critical-journey-ttfb                  | Critical threshold for journey time to first byte (in ms).  =back  nteraction related metrics  The following parameters take effect only if --show-interactions is set   |
| --warning-interaction-performance-score  | Warning threshold for interaction performance score.                                                                                                                     |
| --critical-interaction-performance-score | Critical threshold for interaction performance score.                                                                                                                    |
| --warning-interaction-hero-time          | Warning threshold for interaction hero time (in ms).                                                                                                                     |
| --critical-interaction-hero-time         | Critical threshold for interaction hero time (in ms).                                                                                                                    |
| --warning-interaction-speed-index        | Warning threshold for interaction speed index (in ms).                                                                                                                   |
| --critical-interaction-speed-index       | Critical threshold for interaction speed index (in ms).                                                                                                                  |
| --warning-interaction-ttfb               | Warning threshold for interaction time to first byte (in ms).                                                                                                            |
| --critical-interaction-ttfb              | Critical threshold for time to first byte (in ms).                                                                                                                       |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_centreon_dem_restapi.pl \
	--plugin=apps::centreon::dem::restapi::plugin \
	--mode=user-journey-statistics  \
	--help
```
