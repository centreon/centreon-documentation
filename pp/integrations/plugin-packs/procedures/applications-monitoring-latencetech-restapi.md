---
id: applications-monitoring-latencetech-restapi
title: LatenceTech RestAPI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **LatenceTech RestAPI** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **LatenceTech RestAPI** brings a host template:

* **App-Monitoring-Latencetech-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Latencetech-Restapi-custom" label="App-Monitoring-Latencetech-Restapi-custom">

| Service Alias | Service Template                                       | Service Description                                                |
|:--------------|:-------------------------------------------------------|:-------------------------------------------------------------------|
| Connectivity  | App-Monitoring-Latencetech-Connectivity-Restapi-custom | Check agent connectivity statistics                                |
| Forecast      | App-Monitoring-Latencetech-Forecast-Restapi-custom     | Check agent forecast statistics                                    |
| Latency       | App-Monitoring-Latencetech-Latency-Restapi-custom      | Check agent latency statistics                                     |
| Radio         | App-Monitoring-Latencetech-Radio-Restapi-custom        | Check agent radio statistics                                       |
| Throughput    | App-Monitoring-Latencetech-Throughput-Restapi-custom   | Check agent throughput statistics                                  |
| Twamp         | App-Monitoring-Latencetech-Twamp-Restapi-custom        | Check agent TWAMP (Two-way active measurement protocol) statistics |

> The services listed above are created automatically when the **App-Monitoring-Latencetech-Restapi-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name   | Description                                     |
|:------------|:------------------------------------------------|
| LatenceTech | Discover LatenceTech agents using the Rest API. |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Connectivity" label="Connectivity">

| Name                                       | Unit |
|:-------------------------------------------|:-----|
| *kpis*#tcp.response.time.milliseconds      | ms   |
| *kpis*#udp.response.time.milliseconds      | ms   |
| *kpis*#http.response.time.milliseconds     | ms   |
| *kpis*#https.response.time.milliseconds    | ms   |
| *kpis*#icmp.response.time.milliseconds     | ms   |
| *kpis*#twamp.response.time.milliseconds    | ms   |
| *kpis*#download.bandwidth.bps              | bps  |
| *kpis*#upload.bandwidth.bps                | bps  |
| *kpis*#jitter.time.milliseconds            | ms   |
| *kpis*#application.latency.milliseconds    | ms   |
| *kpis*#network.latency.milliseconds        | ms   |
| *kpis*#expected.latency.milliseconds       | ms   |
| *kpis*#network.stability.percentage        | %    |
| *kpis*#expected.stability.percentage       | %    |
| *kpis*#volatility.percentage               | %    |
| qoe-rate                                   | N/A  |
| *kpis*#packetloss.rate.percentage          | %    |
| *kpis*#expected.packetloss.rate.percentage | %    |
| connectivity-health                        | N/A  |

</TabItem>
<TabItem value="Forecast" label="Forecast">

| Name                                | Unit |
|:------------------------------------|:-----|
| latency.projected.time.milliseconds | ms   |

</TabItem>
<TabItem value="Latency" label="Latency">

| Name                                   | Unit |
|:---------------------------------------|:-----|
| *latency*#latency.average.milliseconds | ms   |
| *latency*#latency.minimum.milliseconds | ms   |
| *latency*#latency.maximum.milliseconds | ms   |

</TabItem>
<TabItem value="Radio" label="Radio">

| Name                                       | Unit |
|:-------------------------------------------|:-----|
| *kpis*#tcp.response.time.milliseconds      | ms   |
| *kpis*#udp.response.time.milliseconds      | ms   |
| *kpis*#http.response.time.milliseconds     | ms   |
| *kpis*#https.response.time.milliseconds    | ms   |
| *kpis*#icmp.response.time.milliseconds     | ms   |
| *kpis*#twamp.response.time.milliseconds    | ms   |
| *kpis*#download.bandwidth.bps              | bps  |
| *kpis*#upload.bandwidth.bps                | bps  |
| *kpis*#jitter.time.milliseconds            | ms   |
| *kpis*#application.latency.milliseconds    | ms   |
| *kpis*#network.latency.milliseconds        | ms   |
| *kpis*#expected.latency.milliseconds       | ms   |
| *kpis*#network.stability.percentage        | %    |
| *kpis*#expected.stability.percentage       | %    |
| *kpis*#volatility.percentage               | %    |
| qoe-rate                                   | N/A  |
| *kpis*#packetloss.rate.percentage          | %    |
| *kpis*#expected.packetloss.rate.percentage | %    |
| connectivity-health                        | N/A  |

</TabItem>
<TabItem value="Throughput" label="Throughput">

Coming soon

</TabItem>
<TabItem value="Twamp" label="Twamp">

| Name                                | Unit |
|:------------------------------------|:-----|
| latency.projected.time.milliseconds | ms   |

</TabItem>
</Tabs>

## Prerequisites

*Specify prerequisites that are relevant. You may want to just provide a link\n\
to the manufacturer official documentation BUT you should try to be as complete\n\
as possible here as it will save time to everybody.*

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
dnf install centreon-pack-applications-monitoring-latencetech-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-latencetech-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-monitoring-latencetech-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-latencetech-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **LatenceTech RestAPI** connector through
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
dnf install centreon-plugin-Applications-Monitoring-Latencetech-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Latencetech-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-monitoring-latencetech-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Latencetech-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Monitoring-Latencetech-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                  | Description                                                                                          | Default value | Mandatory |
|:-----------------------|:-----------------------------------------------------------------------------------------------------|:--------------|:---------:|
| LATENCETECHAPIPROTOCOL | Specify https if needed (default: 'https')                                                           | https         |           |
| LATENCETECHAPIPORT     | Port used (default: 12099)                                                                           | 12099         |           |
| AGENTID                | Set the ID of the agent (mandatory option)                                                           |               |           |
| LATENCETECHAPIKEY      | Set API key (mandatory)                                                                              |               | X         |
| LATENCETECHAPIPATH     | Set API path (default: '/api/v1')                                                                    | /api/v1       |           |
| LATENCETECHCUSTOMERID  | Set cutomer/network ID (mandatory)                                                                   |               | X         |
| EXTRAOPTIONS           | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Connectivity" label="Connectivity">

| Macro                          | Description                                                                                                                         | Default value                               | Mandatory |
|:-------------------------------|:------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|:---------:|
| WARNINGAPPLICATIONLATENCY      | Warning thresholds for application latency in milliseconds                                                                          |                                             |           |
| CRITICALAPPLICATIONLATENCY     | Critical thresholds for application latency in milliseconds                                                                         |                                             |           |
| WARNINGCONNECTIVITYHEALTH      | Define the conditions to match for the connectivity status to be WARNING. (default: '%\{connectivityHealth\} =~ "Warning"')         | %\{connectivityHealth\} =~ "Warning"        |           |
| CRITICALCONNECTIVITYHEALTH     | Define the conditions to match for the connectivity status to be CRITICAL. (default: '%\{connectivityHealth\} =~ "Need Attention"') | %\{connectivityHealth\} =~ "Need Attention" |           |
| WARNINGDOWNLOADBANDWIDTH       | Warning thresholds for download bandwidth in bps                                                                                    |                                             |           |
| CRITICALDOWNLOADBANDWIDTH      | Critical thresholds for download bandwidth in bps                                                                                   |                                             |           |
| WARNINGEXPECTEDLATENCY         | Warning thresholds for expected latency in milliseconds                                                                             |                                             |           |
| CRITICALEXPECTEDLATENCY        | Critical thresholds for expected latency in milliseconds                                                                            |                                             |           |
| WARNINGEXPECTEDPACKETLOSSPRCT  | Warning thresholds for expected packet loss percentage                                                                              |                                             |           |
| CRITICALEXPECTEDPACKETLOSSPRCT | Critical thresholds for expected packet loss percentage                                                                             |                                             |           |
| WARNINGEXPECTEDSTABILITYPRCT   | Warning thresholds for expected stability percentage                                                                                |                                             |           |
| CRITICALEXPECTEDSTABILITYPRCT  | Critical thresholds for expected stability percentage                                                                               |                                             |           |
| WARNINGHTTPRESPONSETIME        | Warning thresholds for HTTP response time in milliseconds                                                                           |                                             |           |
| CRITICALHTTPRESPONSETIME       | Critical thresholds for HTTP response time in milliseconds                                                                          |                                             |           |
| WARNINGHTTPSRESPONSETIME       | Warning thresholds for HTTPS response time in milliseconds                                                                          |                                             |           |
| CRITICALHTTPSRESPONSETIME      | Critical thresholds for HTTPS response time in milliseconds                                                                         |                                             |           |
| WARNINGICMPRESPONSETIME        | Warning thresholds for ICMP response time in milliseconds                                                                           |                                             |           |
| CRITICALICMPRESPONSETIME       | Critical thresholds for ICMP response time in milliseconds                                                                          |                                             |           |
| WARNINGJITTERTIME              | Warning thresholds for jitter time in milliseconds                                                                                  |                                             |           |
| CRITICALJITTERTIME             | Critical thresholds for jitter time in milliseconds                                                                                 |                                             |           |
| WARNINGNETWORKLATENCY          | Warning thresholds for network latency in milliseconds                                                                              |                                             |           |
| CRITICALNETWORKLATENCY         | Critical thresholds for network latency in milliseconds                                                                             |                                             |           |
| WARNINGNETWORKSTABILITYPRCT    | Warning thresholds for network stability percentage                                                                                 |                                             |           |
| CRITICALNETWORKSTABILITYPRCT   | Critical thresholds for network stability percentage                                                                                |                                             |           |
| WARNINGPACKETLOSSPRCT          | Warning thresholds for packet loss percentage                                                                                       |                                             |           |
| CRITICALPACKETLOSSPRCT         | Critical thresholds for packet loss percentage                                                                                      |                                             |           |
| WARNINGQOERATE                 | Warning thresholds for Quality of Experience rate                                                                                   |                                             |           |
| CRITICALQOERATE                | Critical thresholds for Quality of Experience rate                                                                                  |                                             |           |
| WARNINGTCPRESPONSETIME         | Warning thresholds for TCP response time in milliseconds                                                                            |                                             |           |
| CRITICALTCPRESPONSETIME        | Critical thresholds for TCP response time in milliseconds                                                                           |                                             |           |
| WARNINGTWAMPRESPONSETIME       | Warning thresholds for TWAMP response time in milliseconds                                                                          |                                             |           |
| CRITICALTWAMPRESPONSETIME      | Critical thresholds for TWAMP response time in milliseconds                                                                         |                                             |           |
| WARNINGUDPRESPONSETIME         | Warning thresholds for UDP response time in milliseconds                                                                            |                                             |           |
| CRITICALUDPRESPONSETIME        | Critical thresholds for UDP response time in milliseconds                                                                           |                                             |           |
| WARNINGUPLOADBANDWIDTH         | Warning thresholds for upload bandwidth in bps                                                                                      |                                             |           |
| CRITICALUPLOADBANDWIDTH        | Critical thresholds for upload bandwidth in bps                                                                                     |                                             |           |
| WARNINGVOLATILITYPRCT          | Warning thresholds for volatility percentage                                                                                        |                                             |           |
| CRITICALVOLATILITYPRCT         | Critical thresholds for volatility percentage                                                                                       |                                             |           |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                  |                                             |           |

</TabItem>
<TabItem value="Forecast" label="Forecast">

| Macro                    | Description                                                                                        | Default value | Mandatory |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGPROJECTEDLATENCY  | Warning thresholds for projected latency                                                           |               |           |
| CRITICALPROJECTEDLATENCY | Critical thresholds for projected latency                                                          |               |           |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="Latency" label="Latency">

| Macro                  | Description                                                                                                    | Default value | Mandatory |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMERANGE              | Choose a timerange of values on wich datas shoud be aggregated (in seconds). (default: '300')                  | 300           |           |
| FILTERPROTO            | Filter protocol if needed (can be a regexp) Accepted values are `tcp`, `udp`, `http`, `https`, `icmp`, `twamp` |               |           |
| WARNINGLATENCYAVERAGE  | Warning thresholds for average latency                                                                         |               |           |
| CRITICALLATENCYAVERAGE | Critical thresholds for average latency                                                                        |               |           |
| WARNINGLATENCYMAXIMUM  | Warning thresholds for maximum latency                                                                         |               |           |
| CRITICALLATENCYMAXIMUM | Critical thresholds for maximum latency                                                                        |               |           |
| WARNINGLATENCYMINIMUM  | Warning thresholds for minimum latency                                                                         |               |           |
| CRITICALLATENCYMINIMUM | Critical thresholds for minimum latency                                                                        |               |           |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             |               |           |

</TabItem>
<TabItem value="Radio" label="Radio">

| Macro           | Description                                                                                        | Default value | Mandatory |
|:----------------|:---------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGRSRPDBM  |                                                                                                    |               |           |
| CRITICALRSRPDBM |                                                                                                    |               |           |
| WARNINGRSRQDB   |                                                                                                    |               |           |
| CRITICALRSRQDB  |                                                                                                    |               |           |
| WARNINGRSSIDBM  |                                                                                                    |               |           |
| CRITICALRSSIDBM |                                                                                                    |               |           |
| WARNINGSNRDBM   |                                                                                                    |               |           |
| CRITICALSNRDBM  |                                                                                                    |               |           |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Macro                  | Description                                                                                         | Default value | Mandatory |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGJITTERDOWNLOAD  | Warning thresholds for jitter download time (in milliseconds)                                       |               |           |
| CRITICALJITTERDOWNLOAD | Critical thresholds for jitter download time (in milliseconds)                                      |               |           |
| WARNINGJITTERUPLOAD    | Warning thresholds for jitter upload time (in milliseconds)                                         |               |           |
| CRITICALJITTERUPLOAD   | Critical thresholds for jitter upload time (in milliseconds)                                        |               |           |
| WARNINGLIFBEDOWNLOAD   | Warning thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) download bandwidth (in bps)  |               |           |
| CRITICALLIFBEDOWNLOAD  | Critical thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) download bandwidth (in bps) |               |           |
| WARNINGLIFBEUPLOAD     | Warning thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) upload bandwidth (in bps)    |               |           |
| CRITICALLIFBEUPLOAD    | Critical thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) upload bandwidth (in bps)   |               |           |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).  |               |           |

</TabItem>
<TabItem value="Twamp" label="Twamp">

| Macro                   | Description                                                                                        | Default value | Mandatory |
|:------------------------|:---------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGTWAMPFORWARD     |                                                                                                    |               |           |
| CRITICALTWAMPFORWARD    |                                                                                                    |               |           |
| WARNINGTWAMPPROCESSING  |                                                                                                    |               |           |
| CRITICALTWAMPPROCESSING |                                                                                                    |               |           |
| WARNINGTWAMPREVERSE     |                                                                                                    |               |           |
| CRITICALTWAMPREVERSE    |                                                                                                    |               |           |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_latencetech_restapi.pl \
	--plugin=apps::monitoring::latencetech::restapi::plugin \
	--mode=connectivity \
	--hostname='10.0.0.1' \
	--port='12099' \
	--proto='https' \
	--api-path='/api/v1' \
	--api-key='' \
	--customer-id='' \
	--agent-id=''  \
	--warning-snr-dbm='' \
	--critical-snr-dbm='' \
	--warning-rssi-dbm='' \
	--critical-rssi-dbm='' \
	--warning-rsrp-dbm='' \
	--critical-rsrp-dbm='' \
	--warning-rsrq-db='' \
	--critical-rsrq-db='' 
```

The expected command output is shown below:

```bash
OK: All KPIs are OK | 'kpis1#tcp.response.time.milliseconds'=47241ms;;;0; 'kpis2#tcp.response.time.milliseconds'=20008ms;;;0; 'kpis1#udp.response.time.milliseconds'=16262ms;;;0; 'kpis2#udp.response.time.milliseconds'=72220ms;;;0; 'kpis1#http.response.time.milliseconds'=88210ms;;;0; 'kpis2#http.response.time.milliseconds'=6470ms;;;0; 'kpis1#https.response.time.milliseconds'=78047ms;;;0; 'kpis2#https.response.time.milliseconds'=5800ms;;;0; 'kpis1#icmp.response.time.milliseconds'=80229ms;;;0; 'kpis2#icmp.response.time.milliseconds'=43857ms;;;0; 'kpis1#twamp.response.time.milliseconds'=54777ms;;;0; 'kpis2#twamp.response.time.milliseconds'=51265ms;;;0; 'kpis1#download.bandwidth.bps'=73916bps;;;0; 'kpis2#download.bandwidth.bps'=80063bps;;;0; 'kpis1#upload.bandwidth.bps'=60152bps;;;0; 'kpis2#upload.bandwidth.bps'=160bps;;;0; 'kpis1#jitter.time.milliseconds'=4617ms;;;0; 'kpis2#jitter.time.milliseconds'=28168ms;;;0; 'kpis1#application.latency.milliseconds'=87772ms;;;0; 'kpis2#application.latency.milliseconds'=42434ms;;;0; 'kpis1#network.latency.milliseconds'=13704ms;;;0; 'kpis2#network.latency.milliseconds'=32074ms;;;0; 'kpis1#expected.latency.milliseconds'=4786ms;;;0; 'kpis2#expected.latency.milliseconds'=84028ms;;;0; 'kpis1#network.stability.percentage'=3152%;;;0;100 'kpis2#network.stability.percentage'=3995%;;;0;100 'kpis1#expected.stability.percentage'=57455%;;;0;100 'kpis2#expected.stability.percentage'=76822%;;;0;100 'kpis1#volatility.percentage'=58275%;;;0;100 'kpis2#volatility.percentage'=97335%;;;0;100 'kpis1#packetloss.rate.percentage'=48912%;;;0;100 'kpis2#packetloss.rate.percentage'=15957%;;;0;100 'kpis1#expected.packetloss.rate.percentage'=42927%;;;0;100 'kpis2#expected.packetloss.rate.percentage'=24358%;;;0;100 
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
/usr/lib/centreon/plugins/centreon_latencetech_restapi.pl \
	--plugin=apps::monitoring::latencetech::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                          | Linked service template                                                                                     |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------|
| connectivity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/connectivity.pm)] | App-Monitoring-Latencetech-Connectivity-Restapi-custom<br />App-Monitoring-Latencetech-Radio-Restapi-custom |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/discovery.pm)]       | Used for host discovery                                                                                     |
| forecast [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/forecast.pm)]         | App-Monitoring-Latencetech-Forecast-Restapi-custom<br />App-Monitoring-Latencetech-Twamp-Restapi-custom     |
| latency [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/latency.pm)]           | App-Monitoring-Latencetech-Latency-Restapi-custom                                                           |
| radio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/radio.pm)]               | Not used in this Monitoring Connector                                                                       |
| throughput [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/throughput.pm)]     | App-Monitoring-Latencetech-Throughput-Restapi-custom                                                        |
| twamp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/twamp.pm)]               | Not used in this Monitoring Connector                                                                       |

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
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
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
| --hostname                                 | Set Latencetech hostname or IP address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --port                                     | Port used (default: 12099).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    | Specify https if needed (default: 'https').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --api-path                                 | Set API path (default: '/api/v1').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --api-key                                  | Set API key (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --customer-id                              | Set cutomer/network ID (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --agent-id                                 | Set Agent ID (for modes that require it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --timeout                                  | Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Connectivity" label="Connectivity">

| Option                               | Description                                                                                                                          |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
| --agent-id                           | Set the ID of the agent (mandatory option).                                                                                          |
| --warning-tcp-response-time          | Warning thresholds for TCP response time in milliseconds.                                                                            |
| --critical-tcp-response-time         | Critical thresholds for TCP response time in milliseconds.                                                                           |
| --warning-udp-response-time          | Warning thresholds for UDP response time in milliseconds.                                                                            |
| --critical-udp-response-time         | Critical thresholds for UDP response time in milliseconds.                                                                           |
| --warning-http-response-time         | Warning thresholds for HTTP response time in milliseconds.                                                                           |
| --critical-http-response-time        | Critical thresholds for HTTP response time in milliseconds.                                                                          |
| --warning-https-response-time        | Warning thresholds for HTTPS response time in milliseconds.                                                                          |
| --critical-https-response-time       | Critical thresholds for HTTPS response time in milliseconds.                                                                         |
| --warning-icmp-response-time         | Warning thresholds for ICMP response time in milliseconds.                                                                           |
| --critical-icmp-response-time        | Critical thresholds for ICMP response time in milliseconds.                                                                          |
| --warning-twamp-response-time        | Warning thresholds for TWAMP response time in milliseconds.                                                                          |
| --critical-twamp-response-time       | Critical thresholds for TWAMP response time in milliseconds.                                                                         |
| --warning-download-bandwidth         | Warning thresholds for download bandwidth in bps.                                                                                    |
| --critical-download-bandwidth        | Critical thresholds for download bandwidth in bps.                                                                                   |
| --warning-upload-bandwidth           | Warning thresholds for upload bandwidth in bps.                                                                                      |
| --critical-upload-bandwidth          | Critical thresholds for upload bandwidth in bps.                                                                                     |
| --warning-jitter-time                | Warning thresholds for jitter time in milliseconds.                                                                                  |
| --critical-jitter-time               | Critical thresholds for jitter time in milliseconds.                                                                                 |
| --warning-application-latency        | Warning thresholds for application latency in milliseconds.                                                                          |
| --critical-application-latency       | Critical thresholds for application latency in milliseconds.                                                                         |
| --warning-network-latency            | Warning thresholds for network latency in milliseconds.                                                                              |
| --critical-network-latency           | Critical thresholds for network latency in milliseconds.                                                                             |
| --warning-expected-latency           | Warning thresholds for expected latency in milliseconds.                                                                             |
| --critical-expected-latency          | Critical thresholds for expected latency in milliseconds.                                                                            |
| --warning-network-stability-prct     | Warning thresholds for network stability percentage.                                                                                 |
| --critical-network-stability-prct    | Critical thresholds for network stability percentage.                                                                                |
| --warning-expected-stability-prct    | Warning thresholds for expected stability percentage.                                                                                |
| --critical-expected-stability-prct   | Critical thresholds for expected stability percentage.                                                                               |
| --warning-volatility-prct            | Warning thresholds for volatility percentage.                                                                                        |
| --critical-volatility-prct           | Critical thresholds for volatility percentage.                                                                                       |
| --warning-qoe-rate                   | Warning thresholds for Quality of Experience rate.                                                                                   |
| --critical-qoe-rate                  | Critical thresholds for Quality of Experience rate.                                                                                  |
| --warning-packet-loss-prct           | Warning thresholds for packet loss percentage.                                                                                       |
| --critical-packet-loss-prct          | Critical thresholds for packet loss percentage.                                                                                      |
| --warning-expected-packet-loss-prct  | Warning thresholds for expected packet loss percentage.                                                                              |
| --critical-expected-packet-loss-prct | Critical thresholds for expected packet loss percentage.                                                                             |
| --warning-connectivity-health        | Define the conditions to match for the connectivity status to be WARNING. (default: '%\{connectivityHealth\} =~ "Warning"').         |
| --critical-connectivity-health       | Define the conditions to match for the connectivity status to be CRITICAL. (default: '%\{connectivityHealth\} =~ "Need Attention"'). |

</TabItem>
<TabItem value="Forecast" label="Forecast">

| Option                       | Description                                 |
|:-----------------------------|:--------------------------------------------|
| --agent-id                   | Set the ID of the agent (mandatory option). |
| --warning-projected-latency  | Warning thresholds for projected latency.   |
| --critical-projected-latency | Critical thresholds for projected latency.  |

</TabItem>
<TabItem value="Latency" label="Latency">

| Option                     | Description                                                                                                     |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------|
| --agent-id                 | Set the ID of the agent (mandatory option).                                                                     |
| --filter-protocol          | Filter protocol if needed (can be a regexp) Accepted values are `tcp`, `udp`, `http`, `https`, `icmp`, `twamp`. |
| --timerange                | Choose a timerange of values on wich datas shoud be aggregated (in seconds). (default: '300')                   |
| --warning-latency-average  | Warning thresholds for average latency.                                                                         |
| --critical-latency-average | Critical thresholds for average latency.                                                                        |
| --warning-latency-minimum  | Warning thresholds for minimum latency.                                                                         |
| --critical-latency-minimum | Critical thresholds for minimum latency.                                                                        |
| --warning-latency-maximum  | Warning thresholds for maximum latency.                                                                         |
| --critical-latency-maximum | Critical thresholds for maximum latency.                                                                        |

</TabItem>
<TabItem value="Radio" label="Radio">

| Option                               | Description                                                                                                                          |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
| --agent-id                           | Set the ID of the agent (mandatory option).                                                                                          |
| --warning-tcp-response-time          | Warning thresholds for TCP response time in milliseconds.                                                                            |
| --critical-tcp-response-time         | Critical thresholds for TCP response time in milliseconds.                                                                           |
| --warning-udp-response-time          | Warning thresholds for UDP response time in milliseconds.                                                                            |
| --critical-udp-response-time         | Critical thresholds for UDP response time in milliseconds.                                                                           |
| --warning-http-response-time         | Warning thresholds for HTTP response time in milliseconds.                                                                           |
| --critical-http-response-time        | Critical thresholds for HTTP response time in milliseconds.                                                                          |
| --warning-https-response-time        | Warning thresholds for HTTPS response time in milliseconds.                                                                          |
| --critical-https-response-time       | Critical thresholds for HTTPS response time in milliseconds.                                                                         |
| --warning-icmp-response-time         | Warning thresholds for ICMP response time in milliseconds.                                                                           |
| --critical-icmp-response-time        | Critical thresholds for ICMP response time in milliseconds.                                                                          |
| --warning-twamp-response-time        | Warning thresholds for TWAMP response time in milliseconds.                                                                          |
| --critical-twamp-response-time       | Critical thresholds for TWAMP response time in milliseconds.                                                                         |
| --warning-download-bandwidth         | Warning thresholds for download bandwidth in bps.                                                                                    |
| --critical-download-bandwidth        | Critical thresholds for download bandwidth in bps.                                                                                   |
| --warning-upload-bandwidth           | Warning thresholds for upload bandwidth in bps.                                                                                      |
| --critical-upload-bandwidth          | Critical thresholds for upload bandwidth in bps.                                                                                     |
| --warning-jitter-time                | Warning thresholds for jitter time in milliseconds.                                                                                  |
| --critical-jitter-time               | Critical thresholds for jitter time in milliseconds.                                                                                 |
| --warning-application-latency        | Warning thresholds for application latency in milliseconds.                                                                          |
| --critical-application-latency       | Critical thresholds for application latency in milliseconds.                                                                         |
| --warning-network-latency            | Warning thresholds for network latency in milliseconds.                                                                              |
| --critical-network-latency           | Critical thresholds for network latency in milliseconds.                                                                             |
| --warning-expected-latency           | Warning thresholds for expected latency in milliseconds.                                                                             |
| --critical-expected-latency          | Critical thresholds for expected latency in milliseconds.                                                                            |
| --warning-network-stability-prct     | Warning thresholds for network stability percentage.                                                                                 |
| --critical-network-stability-prct    | Critical thresholds for network stability percentage.                                                                                |
| --warning-expected-stability-prct    | Warning thresholds for expected stability percentage.                                                                                |
| --critical-expected-stability-prct   | Critical thresholds for expected stability percentage.                                                                               |
| --warning-volatility-prct            | Warning thresholds for volatility percentage.                                                                                        |
| --critical-volatility-prct           | Critical thresholds for volatility percentage.                                                                                       |
| --warning-qoe-rate                   | Warning thresholds for Quality of Experience rate.                                                                                   |
| --critical-qoe-rate                  | Critical thresholds for Quality of Experience rate.                                                                                  |
| --warning-packet-loss-prct           | Warning thresholds for packet loss percentage.                                                                                       |
| --critical-packet-loss-prct          | Critical thresholds for packet loss percentage.                                                                                      |
| --warning-expected-packet-loss-prct  | Warning thresholds for expected packet loss percentage.                                                                              |
| --critical-expected-packet-loss-prct | Critical thresholds for expected packet loss percentage.                                                                             |
| --warning-connectivity-health        | Define the conditions to match for the connectivity status to be WARNING. (default: '%\{connectivityHealth\} =~ "Warning"').         |
| --critical-connectivity-health       | Define the conditions to match for the connectivity status to be CRITICAL. (default: '%\{connectivityHealth\} =~ "Need Attention"'). |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Option                     | Description                                                                                          |
|:---------------------------|:-----------------------------------------------------------------------------------------------------|
| --agent-id                 | Set the ID of the agent (mandatory option).                                                          |
| --warning-lifbe-download   | Warning thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) download bandwidth (in bps).  |
| --critical-lifbe-download  | Critical thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) download bandwidth (in bps). |
| --warning-lifbe-upload     | Warning thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) upload bandwidth (in bps).    |
| --critical-lifbe-upload    | Critical thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) upload bandwidth (in bps).   |
| --warning-jitter-download  | Warning thresholds for jitter download time (in milliseconds).                                       |
| --critical-jitter-download | Critical thresholds for jitter download time (in milliseconds).                                      |
| --warning-jitter-upload    | Warning thresholds for jitter upload time (in milliseconds).                                         |
| --critical-jitter-upload   | Critical thresholds for jitter upload time (in milliseconds).                                        |

</TabItem>
<TabItem value="Twamp" label="Twamp">

| Option                       | Description                                 |
|:-----------------------------|:--------------------------------------------|
| --agent-id                   | Set the ID of the agent (mandatory option). |
| --warning-projected-latency  | Warning thresholds for projected latency.   |
| --critical-projected-latency | Critical thresholds for projected latency.  |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_latencetech_restapi.pl \
	--plugin=apps::monitoring::latencetech::restapi::plugin \
	--mode=connectivity \
	--help
```
