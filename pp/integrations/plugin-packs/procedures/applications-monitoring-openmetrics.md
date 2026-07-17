---
id: applications-monitoring-openmetrics
title: OpenMetrics
description: "Monitor OpenMetrics-compatible applications over HTTP/HTTPS by scraping metrics from files or web endpoints."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **OpenMetrics** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **OpenMetrics** brings 2 host templates:

* **App-Monitoring-Openmetrics-File-custom**
* **App-Monitoring-Openmetrics-Web-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Openmetrics-File-custom" label="App-Monitoring-Openmetrics-File-custom">

| Service Alias  | Service Template                                      | Service Description                                                          |
|:---------------|:------------------------------------------------------|:-----------------------------------------------------------------------------|
| Scrape-Metrics | App-Monitoring-Openmetrics-Scrape-Metrics-File-custom | Scrapes metrics from an OpenMetrics formatted file on a remote host |
| Scrape-Metrics | App-Monitoring-Openmetrics-Scrape-Metrics-Web-custom  | Scrapes metrics from a web page exposing OpenMetrics                |

> The services listed above are created automatically when the **App-Monitoring-Openmetrics-File-custom** host template is used.

</TabItem>
<TabItem value="App-Monitoring-Openmetrics-Web-custom" label="App-Monitoring-Openmetrics-Web-custom">

| Service Alias  | Service Template                                      | Service Description                                                          |
|:---------------|:------------------------------------------------------|:-----------------------------------------------------------------------------|
| Scrape-Metrics | App-Monitoring-Openmetrics-Scrape-Metrics-File-custom | Scrapes metrics from an OpenMetrics formatted file on a remote host |
| Scrape-Metrics | App-Monitoring-Openmetrics-Scrape-Metrics-Web-custom  | Scrapes metrics from a web page exposing OpenMetrics                |

> The services listed above are created automatically when the **App-Monitoring-Openmetrics-Web-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Scrape-Metrics*" label="Scrape-Metrics*">

The values of the metrics collected depend on your Openmetrics device and the filters you choose.

</TabItem>
</Tabs>

## Prerequisites

1. Configuration of the OpenMetrics Source
- OpenMetrics-Compatible Service: You need an application or service that exposes metrics 
in the OpenMetrics format, often via an HTTP/HTTPS API (e.g., Prometheus or applications 
exposing a `/metrics` endpoint).
- Accessible Endpoint: Ensure that the OpenMetrics endpoint is accessible from the 
Centreon server (or the poller). Test access using tools like `curl` or `wget`. 

2. Network Configuration
- Port Opening: The poller must be able to connect to the port used by the OpenMetrics endpoint 
(typically port `80` for `HTTP` or `443` for `HTTPS`).
- Firewall: Configure firewall rules to allow connections between the poller and the endpoint.

3. Authentication
If the OpenMetrics endpoint requires authentication (e.g., a token or HTTP Basic credentials), 
you must configure this information in Centreon. Store the credentials in the host macros.

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
dnf install centreon-pack-applications-monitoring-openmetrics
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-openmetrics
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-monitoring-openmetrics
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-openmetrics
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **OpenMetrics** connector through
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
dnf install centreon-plugin-Applications-Monitoring-Openmetrics
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Openmetrics
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-monitoring-openmetrics
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Openmetrics
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Openmetrics-File-custom" label="App-Monitoring-Openmetrics-File-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Monitoring-Openmetrics-File-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                   | Description                                                                                                                              | Default value     | Mandatory   |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OPENMETRICSUSERNAME     | Endpoint username                                                                                                                        |                   |             |
| OPENMETRICSPASSWORD     | Endpoint password                                                                                                                        |                   |             |
| OPENMETRICSPROTO        | Specify https if needed (default: 'http')                                                                                                |                   |             |
| OPENMETRICSPORT         | Port used (default: 80)                                                                                                                  |                   |             |
| OPENMETRICSFILEPATH     | Command options                                                                                                                          |                   |             |
| OPENMETRICSURLPATH      | URL to scrape metrics from (default: '/metrics')                                                                                         |                   |             |
| OPENMETRICSEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="App-Monitoring-Openmetrics-Web-custom" label="App-Monitoring-Openmetrics-Web-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Monitoring-Openmetrics-Web-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                   | Description                                                                                                                              | Default value     | Mandatory   |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OPENMETRICSUSERNAME     | Endpoint username                                                                                                                        |                   |             |
| OPENMETRICSPASSWORD     | Endpoint password                                                                                                                        |                   |             |
| OPENMETRICSPROTO        | Specify https if needed                                                                                                                  | http              |             |
| OPENMETRICSPORT         | Port used                                                                                                                                | 80                |             |
| OPENMETRICSFILEPATH     | Command options                                                                                                                          |                   |             |
| OPENMETRICSURLPATH      | URL to scrape metrics from                                                                                                               | /metrics          |             |
| OPENMETRICSEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Scrape-Metrics" label="Scrape-Metrics">

| Macro             | Description                                                                                                                            | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMETRICS     | Only parse some metrics (regexp can be used). Example: --filter-metrics='^status$'                                                     |                   |             |
| INSTANCE          | Set the label from dimensions to get the instance value from                                                                           |                   |             |
| FILTERINSTANCE    | Only display some instances. Example: --filter-instance='0'                                                                            |                   |             |
| SUBINSTANCE       | Set the label from dimensions to get the subinstance value from                                                                        |                   |             |
| FILTERSUBINSTANCE | Only display some subinstances. Example: --filter-subinstance='idle'                                                                   |                   |             |
| WARNING           | Set warning threshold                                                                                                                  |                   |             |
| CRITICAL          | Set critical threshold                                                                                                                 |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_monitoring_openmetrics.pl \
	--plugin=apps::monitoring::openmetrics::plugin \
	--mode=scrape-metrics \
	--custommode='web' \
	--hostname='10.0.0.1' \
	--port='' \
	--proto='' \
	--urlpath='' \
	--username='' \
	--password=''  \
	--filter-metrics='' \
	--warning='' \
	--critical='' \
	--instance='' \
	--filter-instance='' \
	--subinstance='' \
	--filter-subinstance='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All metrics are ok | 'metric2'=512;;;; 'metric2'=256;;;; 'metric1'=120;;;; 'metric1'=45;;;;
Metric 'metric2' value is '512' [Help: "This metric tracks memory usage."] [Type: 'gauge'] [Dimensions: "serviceA|heap"]
Metric 'metric2' value is '256' [Help: "This metric tracks memory usage."] [Type: 'gauge'] [Dimensions: "serviceB|stack"]
Metric 'metric1' value is '120' [Help: "This metric tracks the number of requests."] [Type: 'counter'] [Dimensions: "endpoint1|GET"]
Metric 'metric1' value is '45' [Help: "This metric tracks the number of requests."] [Type: 'counter'] [Dimensions: "endpoint2|POST"]
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_openmetrics.pl \
	--plugin=apps::monitoring::openmetrics::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                     | Linked service template                                                                                         |
|:-----------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------|
| scrape-metrics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/openmetrics/mode/scrapemetrics.pm)] | App-Monitoring-Openmetrics-Scrape-Metrics-File-custom<br />App-Monitoring-Openmetrics-Scrape-Metrics-Web-custom |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Scrape-Metrics*" label="Scrape-Metrics*">

| Option               | Description                                                                            |
|:---------------------|:---------------------------------------------------------------------------------------|
| --filter-metrics     |   Only parse some metrics (regexp can be used). Example: --filter-metrics='^status$'   |
| --warning            |   Set warning threshold.                                                               |
| --critical           |   Set critical threshold.                                                              |
| --instance           |   Set the label from dimensions to get the instance value from.                        |
| --filter-instance    |   Only display some instances. Example: --filter-instance='0'                          |
| --subinstance        |   Set the label from dimensions to get the subinstance value from.                     |
| --filter-subinstance |   Only display some subinstances. Example: --filter-subinstance='idle'                 |
| --new-perfdata       |   Replace the underscore symbol by a point in perfdata.                                |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_openmetrics.pl \
	--plugin=apps::monitoring::openmetrics::plugin \
	--mode=scrape-metrics \
	--help
```
