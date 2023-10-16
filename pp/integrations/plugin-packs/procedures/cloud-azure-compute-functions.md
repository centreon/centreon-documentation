---
id: cloud-azure-compute-functions
title: Azure Functions
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Azure functions is a serverless plateform that allows to easily write and deploy
code reacting to events occuring in any Azure or 3rd party services.

## Pack assets

The Centreon Monitoring Connector *Azure Functions* can rely on Azure API or Azure CLI 
to collect the metrics related to the Functions service.

### Templates

The Monitoring Connector **Azure Functions** brings a host template:

* **Cloud-Azure-Compute-Functions-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Compute-Functions-custom" label="Cloud-Azure-Compute-Functions-custom">

| Service Alias | Service Template                                       | Service Description                                |
|:--------------|:-------------------------------------------------------|:---------------------------------------------------|
| App-Usage     | Cloud-Azure-Compute-Functions-App-Usage-Api-custom     | Check Azure Functions app usage                    |
| Cpu-Time      | Cloud-Azure-Compute-Functions-Cpu-Time-Api-custom      | Check Azure Functions Cpu time consumed by the app |
| Data          | Cloud-Azure-Compute-Functions-Data-Api-custom          | Check Azure Functions app bandwith usage           |
| Executions    | Cloud-Azure-Compute-Functions-Executions-Api-custom    | Check functions executions                         |
| File-System   | Cloud-Azure-Compute-Functions-FIle-System-Api-custom   | Check Azure Functions file system                  |
| Gc-Usage      | Cloud-Azure-Compute-Functions-Gc-Usage-Api-custom      | Check Azure Functions garbage collector usage      |
| Health        | Cloud-Azure-Compute-Functions-Health-Api-custom        | Check Azure Functions                              |
| Http-Requests | Cloud-Azure-Compute-Functions-Http-Requests-Api-custom | Check Azure Functions HTTP requests                |
| IO-Operations | Cloud-Azure-Compute-Functions-IO-Operations-Api-custom | Check Azure Functions I/O operations.                            |
| Memory        | Cloud-Azure-Compute-Functions-Memory-Api-custom        | Check Azure Functions app memory usage             |
| Response-Time | Cloud-Azure-Compute-Functions-Response-Time-Api-custom | Check Azure Functions app response time            |
| Status        | Cloud-Azure-Compute-Functions-Status-Api-custom        | Check Azure Functions app status                   |

> The services listed above are created automatically when the **Cloud-Azure-Compute-Functions-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

The Centreon Monitoring Connector **Azure Functions** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the list of monitored hosts. This provider is named **Microsoft Azure Functions**.

> This discovery feature is only compatible with the [**api** custom mode. **azcli** is not supported](../getting-started/how-to-guides/azure-credential-configuration.md).

Go to the corresponding chapter to learn more about [discovering hosts automatically](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="App-Usage" label="App-Usage">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| appservice.connections.count         | count |
| appservice.assemblies.current.count  | count |
| appservice.handle.count              | count |
| appservice.thread.count              | count |
| appservice.appdomains.count          | count |
| appservice.appdomains.unloaded.count | count |

</TabItem>
<TabItem value="Cpu-Time" label="Cpu-Time">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| appservice.cpu.consumed.seconds | s     |

</TabItem>
<TabItem value="Data" label="Data">

| Metric name               | Unit  |
|:--------------------------|:------|
| appservice.data.in.bytes  | B     |
| appservice.data.out.bytes | B     |

</TabItem>
<TabItem value="Executions" label="Executions">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| functions.executions.count       | count |
| functions.executions.units.count | count |

</TabItem>
<TabItem value="File-System" label="File-System">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| appservice.filesystem.usage.bytes | B     |

</TabItem>
<TabItem value="Gc-Usage" label="Gc-Usage">

| Metric name              | Unit  |
|:-------------------------|:------|
| appservice.gc.gen0.count | count |
| appservice.gc.gen1.count | count |
| appservice.gc.gen2.count | count |

</TabItem>
<TabItem value="Health" label="Health">

| Metric name | Unit  |
|:------------|:------|
| status      | N/A   |

</TabItem>
<TabItem value="Http-Requests" label="Http-Requests">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| appservice.http.request.count       | count |
| appservice.http.request.queue.count | count |
| appservice.htpp.request.101.count   | count |
| appservice.htpp.request.2xx.count   | count |
| appservice.htpp.request.3xx.count   | count |
| appservice.htpp.request.4xx.count   | count |
| appservice.htpp.request.401.count   | count |
| appservice.htpp.request.403.count   | count |
| appservice.htpp.request.404.count   | count |
| appservice.htpp.request.406.count   | count |
| appservice.htpp.request.5xx.count   | count |

</TabItem>
<TabItem value="IO-Operations" label="IO-Operations">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| appservice.bytes.other.bytespersecond      | B/s   |
| appservice.operations.other.bytespersecond | B/s   |
| appservice.bytes.read.bytespersecond       | B/s   |
| appservice.operations.read.bytespersecond  | B/s   |
| appservice.bytes.write.bytespersecond      | B/s   |
| appservice.operations.write.bytespersecond | B/s   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| appservice.memory.average.usage.bytes | B     |
| appservice.memory.usage.bytes         | B     |

</TabItem>
<TabItem value="Response-Time" label="Response-Time">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| appservice.http.response.time.seconds | s     |

</TabItem>
<TabItem value="Status" label="Status">

| Metric name             | Unit  |
|:------------------------|:------|
| appservice.status.count | count |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure
on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

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
dnf install centreon-pack-cloud-azure-compute-functions
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-compute-functions
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-azure-compute-functions
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-compute-functions
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Azure Functions** connector through
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
dnf install centreon-plugin-Cloud-Azure-Compute-Functions-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-Compute-Functions-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-azure-compute-functions-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Compute-Functions-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
3. Apply the **Cloud-Azure-Compute-Functions-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory. For example, for this connector, you must define the **AZURECUSTOMMODE** macros (possible values are **api** or **azcli**). Indeed, 2 modes of communication can be used with this resource: either using the command tool azcli, or by querying the API directly.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Macro              | Description                                                                                                                | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID                                                                                                        |                   | X           |
| AZURECLIENTSECRET  | Set Azure client secret                                                                                                    |                   | X           |
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | api               | X           |
| AZURERESOURCE      | Set resource name or id (Required)                                                                                         |                   | X           |
| AZURERESOURCEGROUP | Set resource group (Required if resource's name is used)                                                                   |                   | X           |
| AZURESUBSCRIPTION  | Set Azure subscription (Required if logged to several subscriptions)                                                       |                   | X           |
| AZURETENANT        | Set Azure tenant ID                                                                                                        |                   | X           |
| PROXYURL           | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                      |                   |             |

> Set the following options in the EXTRAOPTIONS macro if you are monitoring resource from Microsoft Azure operated by 21Vianet (Azure China):
--management-endpoint='https://management.chinacloudapi.cn' --login-endpoint='https://login.partner.microsoftonline.cn'.

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Macro              | Description                                                                                                                | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | api               |             |
| AZURERESOURCE      | Set resource name or id (Required)                                                                                         |                   |             |
| AZURERESOURCEGROUP | Set resource group (Required if resource's name is used)                                                                   |                   | X           |
| AZURESUBSCRIPTION  | Set Azure subscription (Required if logged to several subscriptions)                                                       |                   | X           |
| PROXYURL           | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                      |                   |             |

</TabItem>
</Tabs>

> Two methods can be used to define the authentication:
>
> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`) in the **AZURERESOURCE** macro.
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="App-Usage" label="App-Usage">

| Macro                     | Description                                                                                                                          | Default value     | Mandatory   |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                              | 900               |             |
| INTERVAL                  | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                       | PT5M              |             |
| AGGREGATION               | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times               | Average           |             |
| FILTERMETRIC              | Filter metrics (Can be: 'appconnections', 'currentassemblies', 'handles', 'threads', 'totalappdomains', 'totalappdomainsunloaded') (Can be a regexp).                                                                      |                   |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'" |                   |             |
| WARNINGAPPDOMAINS         | Thresholds                                                                                                          |                   |             |
| CRITICALAPPDOMAINS        | Thresholds                                                                                                                           |                   |             |
| WARNINGAPPDOMAINUNLOADED  | Thresholds                                                                                                                           |                   |             |
| CRITICALAPPDOMAINUNLOADED | Thresholds                                                                                                                           |                   |             |
| WARNINGASSEMBLIES         | Thresholds                                                                                                                           |                   |             |
| CRITICALASSEMBLIES        | Thresholds                                                                                                                           |                   |             |
| WARNINGCONNECTIONS        | Thresholds                                                                                                                           |                   |             |
| CRITICALCONNECTIONS       | Thresholds                                                                                                                           |                   |             |
| WARNINGHANDLE             | Thresholds                                                                                                                           |                   |             |
| CRITICALHANDLE            | Thresholds                                                                                                                           |                   |             |
| WARNINGTHREAD             | Thresholds                                                                                                                           |                   |             |
| CRITICALTHREAD            | Thresholds                                                                                                                           |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                  |                   |             |

</TabItem>
<TabItem value="Cpu-Time" label="Cpu-Time">

| Macro           | Description                                                                                         | Default value     | Mandatory   |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME       | Set timeframe in seconds (i.e. 3600 to check last hour).                                            | 900               |             |
| INTERVAL        | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).     | PT5M              |             |
| AGGREGATION     | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total'. Can be called multiple times. | Total             |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'" |                   |             |
| WARNINGCPUTIME  | Consumed CPU time warning threshold                                                                 |                   |             |
| CRITICALCPUTIME | Consumed CPU time critical threshold                                                                |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Data" label="Data">

| Macro           | Description                                                                                         | Default value     | Mandatory   |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME       | Set timeframe in seconds (i.e. 3600 to check last hour). | 900               |             |
| INTERVAL        | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).     | PT5M              |             |
| AGGREGATION     | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total'. Can be called multiple times. | Total             |             |
| FILTERMETRIC    | Filter metrics (Can be: 'bytesreceived', 'bytessent') (Can be a regexp).                                     |                   |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'" |                   |             |
| WARNINGDATAIN   | Thresholds                                                                                          |                   |             |
| CRITICALDATAIN  | Thresholds                                                                                          |                   |             |
| WARNINGDATAOUT  | Thresholds                                                                                          |                   |             |
| CRITICALDATAOUT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Executions" label="Executions">

| Macro                  | Description                                                                                         | Default value     | Mandatory   |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                              | 900               |             |
| INTERVAL                  | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                       | PT5M              |             |
| AGGREGATION            | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total'. Can be called multiple times. | Total             |             |
| FILTERMETRIC           | Filter metrics (Can be: 'functionexecutioncount', 'functionexecutionunits') (Can be a regexp).                            |                   |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'" |                   |             |
| WARNINGEXECUTIONCOUNT  | Thresholds                                                                                          |                   |             |
| CRITICALEXECUTIONCOUNT | Thresholds                                                                                          |                   |             |
| WARNINGEXECUTIONUNIT   | Thresholds                                                                                          |                   |             |
| CRITICALEXECUTIONUNIT  | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="File-System" label="File-System">

| Macro           | Description                                                                                         | Default value     | Mandatory   |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME       | Set timeframe in seconds (i.e. 3600 to check last hour). | 900               |             |
| INTERVAL        | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).     | PT6H              |             |
| AGGREGATION     | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total'. Can be called multiple times. | Average           |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'" |                   |             |
| WARNINGUSAGE    | File system usage warning threshold                                                                 |                   |             |
| CRITICALUSAGE   | File system usage critical threshold                                                                |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Gc-Usage" label="Gc-Usage">

| Macro           | Description                                                                                         | Default value     | Mandatory   |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME       | Set timeframe in seconds (i.e. 3600 to check last hour). | 900               |             |
| INTERVAL        | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H). | PT5M              |             |
| AGGREGATION     | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total'. Can be called multiple times. | Total             |             |
| FILTERMETRIC    | Filter metrics (Can be: 'gen0collections', 'gen1collections', 'Gen2collections') (Can be a regexp).                            |                   |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'" |                   |             |
| WARNINGGCGEN0   | Thresholds                                                                                          |                   |             |
| CRITICALGCGEN0  | Thresholds                                                                                          |                   |             |
| WARNINGGCGEN2   | Thresholds                                                                                          |                   |             |
| CRITICALGCGEN2  | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Health" label="Health">

| Macro          | Description                                                                                                                                                       | Default value                | Mandatory   |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| OKSTATUS       | Define the conditions to match for the status to be OK (Default: '%{status} =~ /^Available$/'). Special variables that can be used: %{status}, %{summary}         | %{status} =~ /^Available$/   |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} =~ /^Unknown$/'). Special variables that can be used: %{status}, %{summary}      | %{status} =~ /^Unknown$/     |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /^Unavailable$/'). Special variables that can be used: %{status}, %{summary} | %{status} =~ /^Unavailable$/ |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: ''). Special variables that can be used: %{status}, %{summary}                              |                              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                               |                              |             |

</TabItem>
<TabItem value="Http-Requests" label="Http-Requests">

| Macro                 | Description                                                                                                                                                                   | Default value     | Mandatory   |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME             | Set timeframe in seconds (i.e. 3600 to check last hour).              | 900               |             |
| INTERVAL              | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                                               | PT5M              |             |
| AGGREGATION           | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total'. Can be called multiple times.                                                                           | Total             |             |
| FILTERMETRIC          | Filter metrics (Can be: 'requests', 'requestsinapplicationqueue', 'http101', 'http2xx', 'http3xx', 'http4xx', 'http401', 'http403', 'http404', 'http406', 'http5xx') (Can be a regexp).                                                                           |                   |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'" |                   |             |
| WARNINGHTTP101        | Thresholds                                                                                                                                                            |                   |             |
| CRITICALHTTP101       | Thresholds                                                                                                                                                            |                   |             |
| WARNINGHTTP2XX        | Thresholds                                                                                                                                                            |                   |             |
| CRITICALHTTP2XX       | Thresholds                                                                                                                                                            |                   |             |
| WARNINGHTTP3XX        | Thresholds                                                                                                                                                            |                   |             |
| CRITICALHTTP3XX       | Thresholds                                                                                                                                                            |                   |             |
| WARNINGHTTP401        | Thresholds                                                                                                                                                            |                   |             |
| CRITICALHTTP401       | Thresholds                                                                                                                                                            |                   |             |
| WARNINGHTTP403        | Thresholds                                                                                                                                                            |                   |             |
| CRITICALHTTP403       | Thresholds                                                                                                                                                            |                   |             |
| WARNINGHTTP404        | Thresholds                                                                                                                                                            |                   |             |
| CRITICALHTTP404       | Thresholds                                                                                                                                                            |                   |             |
| WARNINGHTTP406        | Thresholds                                                                                                                                                            |                   |             |
| CRITICALHTTP406       | Thresholds                                                                                                                                                            |                   |             |
| WARNINGHTTP4XX        | Thresholds                                                                                                                                                            |                   |             |
| CRITICALHTTP4XX       | Thresholds                                                                                                                                                            |                   |             |
| WARNINGHTTP5XX        | Thresholds                                                                                                                                                            |                   |             |
| CRITICALHTTP5XX       | Thresholds                                                                                                                                                            |                   |             |
| WARNINGREQUESTS       | Thresholds                                                                                                                                                            |                   |             |
| CRITICALREQUESTS      | Thresholds                                                                                                                                                            |                   |             |
| WARNINGREQUESTSQUEUE  | Thresholds                                                                                                                                                            |                   |             |
| CRITICALREQUESTSQUEUE | Thresholds                                                                                                                                                            |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                           |                   |             |

</TabItem>
<TabItem value="IO-Operations" label="IO-Operations">

| Macro                   | Description                                                                                                                                 | Default value     | Mandatory   |
|:------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME               | Set timeframe in seconds (i.e. 3600 to check last hour).       | 900               |             |
| INTERVAL                | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                             | PT5M              |             |
| AGGREGATION             | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total'. Can be called multiple times.                                         | Total             |             |
| FILTERMETRIC            | Filter metrics (Can be: 'iootherbytespersecond', 'iootheroperationspersecond', 'ioreadbytespersecond', 'ioreadoperationspersecond', 'iowritebytespersecond', 'iowriteoperationspersecond') (Can be a regexp).                                                                    |                   |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'" |                   |             |
| WARNINGOTHERBYTES       | Thresholds                                                                                                                          |                   |             |
| CRITICALOTHERBYTES      | Thresholds                                                                                                                                                            |                   |             |
| WARNINGOTHEROPERATIONS  | Thresholds                                                                                                                          |                   |             |
| CRITICALOTHEROPERATIONS | Thresholds                                                                                                                                                            |                   |             |
| WARNINGREADBYTES        | Thresholds                                                                                                                          |                   |             |
| CRITICALREADBYTES       | Thresholds                                                                                                                                                            |                   |             |
| WARNINGREADOPERATIONS   | Thresholds                                                                                                                          |                   |             |
| CRITICALREADOPERATIONS  | Thresholds                                                                                                                                                            |                   |             |
| WARNINGWRITEBYTES       | Thresholds                                                                                                                          |                   |             |
| CRITICALWRITEBYTES      | Thresholds                                                                                                                                                            |                   |             |
| WARNINGWRITEOPERATIONS  | Thresholds                                                                                                                          |                   |             |
| CRITICALWRITEOPERATIONS | Thresholds                                                                                                                                                            |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                         |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                    | Description                                                                                         | Default value     | Mandatory   |
|:-------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                | Set timeframe in seconds (i.e. 3600 to check last hour).  | 900               |             |
| INTERVAL                 | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).     | PT5M              |             |
| AGGREGATION              | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total'. Can be called multiple times. | Average           |             |
| FILTERMETRIC             | Filter metrics (Can be: 'averagememoryworkingset', 'memoryworkingset') (Can be a regexp).                            |                   |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'" |                   |             |
| WARNINGAPPAVERAGEMEMORY  | Thresholds                                                                                           |                   |             |
| CRITICALAPPAVERAGEMEMORY | Thresholds                                              |                   |             |
| WARNINGAPPMEMORY         | Thresholds                                                                                           |                   |             |
| CRITICALAPPMEMORY        | Thresholds                                              |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Response-Time" label="Response-Time">

| Macro                | Description                                                                                         | Default value     | Mandatory   |
|:---------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME            | Set timeframe in seconds (i.e. 3600 to check last hour).       | 900               |             |
| INTERVAL             | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).     | PT5M              |             |
| AGGREGATION          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total'. Can be called multiple times. | Average           |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'" |                   |             |
| WARNINGRESPONSETIME  | Response time warning threshold                                                                     |                   |             |
| CRITICALRESPONSETIME | Response time critical threshold                                                                    |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Status" label="Status">

| Macro           | Description                                                                                         | Default value     | Mandatory   |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME       | Set timeframe in seconds (i.e. 3600 to check last hour).    | 900               |             |
| INTERVAL        | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).     | PT5M              |             |
| AGGREGATION     | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total'. Can be called multiple times. | Average           |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'" |                   |             |
| WARNINGSTATUS   | App status warning threshold                                                                        |                   |             |
| CRITICALSTATUS  | App status critical threshold                                                                       |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor an Azure Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_functions_api.pl \
	--plugin=cloud::azure::compute::functions::plugin \
	--mode=status \
	--custommode='api' \
	--resource='' \
	--resource-group='' \
	--subscription='' \
	--tenant='' \
	--client-id='' \
	--client-secret='' \
	--proxyurl=''  \
	--filter-metric='' \
	--filter-dimension='' \
	--timeframe='900' \
	--interval='PT5M' \
	--aggregation='Average' \
	--warning-status='' \
	--critical-status='' 
```

The expected command output is shown below:

```bash
OK: Health check status: 96 | 'appservice.status.count'=96;;;0;
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
/usr/lib/centreon/plugins/centreon_azure_compute_functions_api.pl \
	--plugin=cloud::azure::compute::functions::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                      | Linked service template                                |
|:------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|
| app-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/appservice/mode/appusage.pm)]          | Cloud-Azure-Compute-Functions-App-Usage-Api-custom     |
| cpu-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/appservice/mode/cputime.pm)]            | Cloud-Azure-Compute-Functions-Cpu-Time-Api-custom      |
| data [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/appservice/mode/data.pm)]                   | Cloud-Azure-Compute-Functions-Data-Api-custom          |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/appservice/mode/discovery.pm)]         | Used for host discovery                                |
| executions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/functions/mode/executions.pm)]       | Cloud-Azure-Compute-Functions-Executions-Api-custom    |
| filesystem-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/appservice/mode/filesystem.pm)] | Cloud-Azure-Compute-Functions-FIle-System-Api-custom   |
| gc-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/appservice/mode/gcusage.pm)]            | Cloud-Azure-Compute-Functions-Gc-Usage-Api-custom      |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/appservice/mode/health.pm)]               | Cloud-Azure-Compute-Functions-Health-Api-custom        |
| http-requests [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/appservice/mode/httprequests.pm)]  | Cloud-Azure-Compute-Functions-Http-Requests-Api-custom |
| io-operations [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/appservice/mode/iooperations.pm)]  | Cloud-Azure-Compute-Functions-IO-Operations-Api-custom |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/appservice/mode/memory.pm)]               | Cloud-Azure-Compute-Functions-Memory-Api-custom        |
| response-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/appservice/mode/responsetime.pm)]  | Cloud-Azure-Compute-Functions-Response-Time-Api-custom |
| status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/appservice/mode/status.pm)]               | Cloud-Azure-Compute-Functions-Status-Api-custom        |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_functions_api.pl \
	--plugin=cloud::azure::compute::functions::plugin \
	--list-custommode
```

The plugin brings the following custom modes:

* api
* azcli

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="api" label="api">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --subscription         | Set Azure subscription ID.                                                                                                                                                                                                                    |
| --tenant               | Set Azure tenant ID.                                                                                                                                                                                                                          |
| --client-id            | Set Azure client ID.                                                                                                                                                                                                                          |
| --client-secret        | Set Azure client secret.                                                                                                                                                                                                                      |
| --login-endpoint       | Set Azure login endpoint URL (Default: 'https://login.microsoftonline.com')                                                                                                                                                                   |
| --management-endpoint  | Set Azure management endpoint URL (Default: 'https://management.azure.com')                                                                                                                                                                   |
| --timeframe            | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                      |
| --interval             | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                                                                                                               |
| --aggregation          | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                                                       |
| --zeroed               | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                                                                                                           |
| --timeout              | Set timeout in seconds (Default: 10).                                                                                                                                                                                                         |
| --http-peer-addr       | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                           |
| --proxyurl             | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                           |
| --proxypac             | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                |
| --insecure             | Accept insecure SSL connections.                                                                                                                                                                                                              |
| --http-backend         | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                       |
| --ssl-opt              | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                     |
| --curl-opt             | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                              |
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --filter-dimension     | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                                                                                                          |
| --per-sec              | Display the statistics based on a per-second period.                                                                                                                                                                                          |

</TabItem>
<TabItem value="azcli" label="azcli">

| Option             | Description                                                                                                                            |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| --subscription     | Set Azure subscription (Required if logged to several subscriptions).                                                                  |
| --timeframe        | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                               |
| --interval         | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                        |
| --aggregation      | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                |
| --zeroed           | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                    |
| --timeout          | Set timeout in seconds (Default: 50).                                                                                                  |
| --sudo             | Use 'sudo' to execute the command.                                                                                                     |
| --command          | Command to get information (Default: 'az'). Can be changed if you have output in a file.                                               |
| --command-path     | Command path (Default: none).                                                                                                          |
| --command-options  | Command options (Default: none).                                                                                                       |
| --proxyurl         | Proxy URL if any                                                                                                                       |
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   |
| --per-sec          | Display the statistics based on a per-second period.                                                                                   |

</TabItem>
</Tabs>

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="App-Usage" label="App-Usage">

| Option           | Description                                                                                                                     |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --resource       | Set resource name or id (Required).                                                                                             |
| --resource-group | Set resource group (Required if resource's name is used).                                                                       |
| --warning-*      | Warning threshold where '*' can be: 'connections', 'assemblies', 'handle', 'thread', 'app-domains', 'app-domain-unloaded'.      |
| --critical-*     | Critical threshold where '*' can be:. 'connections', 'assemblies', 'handle', 'thread', 'app-domains', 'app-domain-unloaded'.    |

</TabItem>
<TabItem value="Cpu-Time" label="Cpu-Time">

| Option              | Description                                                 |
|:--------------------|:------------------------------------------------------------|
| --resource          | Set resource name or id (Required).                         |
| --resource-group    | Set resource group (Required if resource's name is used).   |
| --warning-cpu-time  | Consumed CPU time warning threshold.                        |
| --critical-cpu-time | Consumed CPU time critical threshold.                       |

</TabItem>
<TabItem value="Data" label="Data">

| Option           | Description                                                     |
|:-----------------|:----------------------------------------------------------------|
| --resource       | Set resource name or id (Required).                             |
| --resource-group | Set resource group (Required if resource's name is used).       |
| --warning-*      | Warning threshold where '*' can be: 'data-in', 'data-out'.      |
| --critical-*     | Critical threshold where '*' can be:. 'data-in', 'data-out'.    |

</TabItem>
<TabItem value="Executions" label="Executions">

| Option           | Description                                                                   |
|:-----------------|:------------------------------------------------------------------------------|
| --resource       | Set resource name or id (Required).                                           |
| --resource-group | Set resource group (Required if resource's name is used).                     |
| --warning-*      | Warning threshold where '*' can be: 'execution-count', 'execution-unit'.      |
| --critical-*     | Critical threshold where '*' can be:. 'execution-count', 'execution-unit'.    |

</TabItem>
<TabItem value="File-System" label="File-System">

| Option           | Description                                                 |
|:-----------------|:------------------------------------------------------------|
| --resource       | Set resource name or id (Required).                         |
| --resource-group | Set resource group (Required if resource's name is used).   |
| --warning-usage  | File system usage warning threshold.                        |
| --critical-usage | File system usage critical threshold.                       |

</TabItem>
<TabItem value="Gc-Usage" label="Gc-Usage">

| Option           | Description                                                               |
|:-----------------|:--------------------------------------------------------------------------|
| --resource       | Set resource name or id (Required).                                       |
| --resource-group | Set resource group (Required if resource's name is used).                 |
| --warning-*      | Warning threshold where '*' can be: 'gc-gen0', 'gc-gen1', 'gc-gen2'.      |
| --critical-*     | Critical threshold where '*' can be:. 'gc-gen0', 'gc-gen1', 'gc-gen2'.    |

</TabItem>
<TabItem value="Health" label="Health">

| Option            | Description                                                                                                                                                          |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource        | Set resource name or id (Required).                                                                                                                                  |
| --resource-group  | Set resource group (Required if resource's name is used).                                                                                                            |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: ''). Special variables that can be used: %{status}, %{summary}.                                |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /^Unavailable$/'). Special variables that can be used: %{status}, %{summary}.   |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} =~ /^Unknown$/'). Special variables that can be used: %{status}, %{summary}.        |
| --ok-status       | Define the conditions to match for the status to be OK (Default: '%{status} =~ /^Available$/'). Special variables that can be used: %{status}, %{summary}.           |

</TabItem>
<TabItem value="Http-Requests" label="Http-Requests">

| Option           | Description                                                                                                                                                                       |
|:-----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource       | Set resource name or id (Required).                                                                                                                                               |
| --resource-group | Set resource group (Required if resource's name is used).                                                                                                                         |
| --warning-*      | Warning threshold where '*' can be: 'requests', 'requests-queue', 'http-101', 'http-2xx', 'http-3xx', 'http-4xx', 'http-401','http-403', 'http-404', 'http-406', 'http-5xx'.      |
| --critical-*     | Critical threshold where '*' can be:. 'requests', 'requests-queue', 'http-101', 'http-2xx', 'http-3xx', 'http-4xx', 'http-401','http-403', 'http-404', 'http-406', 'http-5xx'.    |

</TabItem>
<TabItem value="IO-Operations" label="IO-Operations">

| Option           | Description                                                                                                                                     |
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource       | Set resource name or id (Required).                                                                                                             |
| --resource-group | Set resource group (Required if resource's name is used).                                                                                       |
| --warning-*      | Warning threshold where '*' can be: 'other-bytes', 'other-operations', 'read-bytes', 'read-operations', 'write-bytes', 'write-operations'.      |
| --critical-*     | Critical threshold where '*' can be:. 'other-bytes', 'other-operations', 'read-bytes', 'read-operations', 'write-bytes', 'write-operations'.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option           | Description                                                                  |
|:-----------------|:-----------------------------------------------------------------------------|
| --resource       | Set resource name or id (Required).                                          |
| --resource-group | Set resource group (Required if resource's name is used).                    |
| --warning-*      | Warning threshold where '*' can be: 'app-average-memory', 'app-memory'.      |
| --critical-*     | Critical threshold where '*' can be:. 'app-average-memory', 'app-memory'.    |

</TabItem>
<TabItem value="Response-Time" label="Response-Time">

| Option                   | Description                                                 |
|:-------------------------|:------------------------------------------------------------|
| --resource               | Set resource name or id (Required).                         |
| --resource-group         | Set resource group (Required if resource's name is used).   |
| --warning-response-time  | Response time warning threshold.                            |
| --critical-response-time | Response time critical threshold.                           |

</TabItem>
<TabItem value="Status" label="Status">

| Option            | Description                                                 |
|:------------------|:------------------------------------------------------------|
| --resource        | Set resource name or id (Required).                         |
| --resource-group  | Set resource group (Required if resource's name is used).   |
| --warning-status  | App status warning threshold.                               |
| --critical-status | App status critical threshold.                              |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_functions_api.pl \
	--plugin=cloud::azure::compute::functions::plugin \
	--mode=status \
	--custommode='azcli' \
	--help
```
