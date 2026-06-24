---
id: applications-pvx-restapi
slug: /applications-pvx-restapi
title: PVX
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **PVX** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **PVX** brings a host template:

* **App-Pvx-Application-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Pvx-Application-Restapi-custom" label="App-Pvx-Application-Restapi-custom">

| Service Alias                       | Service Template                                           | Service Description                                        |
|:------------------------------------|:-----------------------------------------------------------|:-----------------------------------------------------------|
| Http-Hits-Application               | App-Pvx-Http-Hits-Application-Restapi-custom               | Check the number of HTTP errors                           |
| Network-Connection-Application      | App-Pvx-Network-Connection-Application-Restapi-custom      | Check the connections attemps/success ratio by application |
| Network-Traffic-Application         | App-Pvx-Network-Traffic-Application-Restapi-custom         | Check traffic by application                               |
| Network-User-Experience-Application | App-Pvx-Network-User-Experience-Application-Restapi-custom | Check the user experience by application                   |

> The services listed above are created automatically when the **App-Pvx-Application-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias                     | Service Template                                         | Service Description                                                 |
|:----------------------------------|:---------------------------------------------------------|:--------------------------------------------------------------------|
| Http-Hits                         | App-Pvx-Http-Hits-Restapi-custom                         | Check the number of HTTP errors                                    |
| Http-Hits-Server-Ip               | App-Pvx-Http-Hits-Server-Ip-Restapi-custom               | Check the number of HTTP errors                                    |
| Network-Connection                | App-Pvx-Network-Connection-Restapi-custom                | Check connections attemps/success ratio by instance |
| Network-Connection-Server-Ip      | App-Pvx-Network-Connection-Server-Ip-Restapi-custom      | Check the connections attemps/success ratio by IP          |
| Network-Traffic                   | App-Pvx-Network-Traffic-Restapi-custom                   | Check traffic by instance                           |
| Network-Traffic-Layer             | App-Pvx-Network-Traffic-Layer-Restapi-custom             | Check traffic by layer                                              |
| Network-Traffic-Server-Ip         | App-Pvx-Network-Traffic-Server-Ip-Restapi-custom         | Check traffic by IP                                       |
| Network-User-Experience           | App-Pvx-Network-User-Experience-Restapi-custom           | Check the user experience by instance              |
| Network-User-Experience-Server-Ip | App-Pvx-Network-User-Experience-Server-Ip-Restapi-custom | Check the user experience by IP                            |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Http-Hits" label="Http-Hits">

| Name                                  | Unit   |
|:--------------------------------------|:-------|
| *instances*#http.hits.percentage      | %      |
| *instances*#http.hits.error.persecond | hits/s |
| *instances*#http.hits.persecond       | hits/s |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Http-Hits-Application" label="Http-Hits-Application">

| Name                                  | Unit   |
|:--------------------------------------|:-------|
| *instances*#http.hits.percentage      | %      |
| *instances*#http.hits.error.persecond | hits/s |
| *instances*#http.hits.persecond       | hits/s |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Http-Hits-Server-Ip" label="Http-Hits-Server-Ip">

| Name                                  | Unit   |
|:--------------------------------------|:-------|
| *instances*#http.hits.percentage      | %      |
| *instances*#http.hits.error.persecond | hits/s |
| *instances*#http.hits.persecond       | hits/s |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Network-Connection" label="Network-Connection">

| Name                                         | Unit          |
|:---------------------------------------------|:--------------|
| *instances*#connections.ratio.percentage     | %             |
| *instances*#connections.attempts.persecond   | connections/s |
| *instances*#connections.successful.persecond | connections/s |
| *instances*#connection.time.milliseconds     | ms            |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Network-Connection-Application" label="Network-Connection-Application">

| Name                                         | Unit          |
|:---------------------------------------------|:--------------|
| *instances*#connections.ratio.percentage     | %             |
| *instances*#connections.attempts.persecond   | connections/s |
| *instances*#connections.successful.persecond | connections/s |
| *instances*#connection.time.milliseconds     | ms            |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Network-Connection-Server-Ip" label="Network-Connection-Server-Ip">

| Name                                         | Unit          |
|:---------------------------------------------|:--------------|
| *instances*#connections.ratio.percentage     | %             |
| *instances*#connections.attempts.persecond   | connections/s |
| *instances*#connections.successful.persecond | connections/s |
| *instances*#connection.time.milliseconds     | ms            |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Network-Traffic" label="Network-Traffic">

| Name                                                  | Unit  |
|:------------------------------------------------------|:------|
| traffic.aggregated.bitspersecond                      | b/s   |
| traffic.server.bitspersecond                          | b/s   |
| traffic.client.bitspersecond                          | b/s   |
| *instances*#instance.traffic.aggregated.bitspersecond | b/s   |
| *instances*#instance.traffic.server.bitspersecond     | b/s   |
| *instances*#instance.traffic.client.bitspersecond     | b/s   |

</TabItem>
<TabItem value="Network-Traffic-Application" label="Network-Traffic-Application">

| Name                                                  | Unit  |
|:------------------------------------------------------|:------|
| traffic.aggregated.bitspersecond                      | b/s   |
| traffic.server.bitspersecond                          | b/s   |
| traffic.client.bitspersecond                          | b/s   |
| *instances*#instance.traffic.aggregated.bitspersecond | b/s   |
| *instances*#instance.traffic.server.bitspersecond     | b/s   |
| *instances*#instance.traffic.client.bitspersecond     | b/s   |

</TabItem>
<TabItem value="Network-Traffic-Layer" label="Network-Traffic-Layer">

| Name                                                  | Unit  |
|:------------------------------------------------------|:------|
| traffic.aggregated.bitspersecond                      | b/s   |
| traffic.server.bitspersecond                          | b/s   |
| traffic.client.bitspersecond                          | b/s   |
| *instances*#instance.traffic.aggregated.bitspersecond | b/s   |
| *instances*#instance.traffic.server.bitspersecond     | b/s   |
| *instances*#instance.traffic.client.bitspersecond     | b/s   |

</TabItem>
<TabItem value="Network-Traffic-Server-Ip" label="Network-Traffic-Server-Ip">

| Name                                                  | Unit  |
|:------------------------------------------------------|:------|
| traffic.aggregated.bitspersecond                      | b/s   |
| traffic.server.bitspersecond                          | b/s   |
| traffic.client.bitspersecond                          | b/s   |
| *instances*#instance.traffic.aggregated.bitspersecond | b/s   |
| *instances*#instance.traffic.server.bitspersecond     | b/s   |
| *instances*#instance.traffic.client.bitspersecond     | b/s   |

</TabItem>
<TabItem value="Network-User-Experience" label="Network-User-Experience">

| Name                                   | Unit  |
|:---------------------------------------|:------|
| *instances*#enduser.experience.seconds | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Network-User-Experience-Application" label="Network-User-Experience-Application">

| Name                                   | Unit  |
|:---------------------------------------|:------|
| *instances*#enduser.experience.seconds | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Network-User-Experience-Server-Ip" label="Network-User-Experience-Server-Ip">

| Name                                   | Unit  |
|:---------------------------------------|:------|
| *instances*#enduser.experience.seconds | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

### Compatibility

The connector has been tested with the following versions: \* PVX version 5.1.1

### PVX API

To query PVX API, you need to generate an access key. This key will never expire
and the procedure below is an extract from the
[official documentation](http://docs.performancevision.com/api_use.html). In
each step replace the value of the macros enclosed by '< \>' with yours.

```bash
curl -k 'https://**<pvxapihost>**/api/login?user=**<user>**&password=**<password>**'`
```

Result:

``` json
{
    "type": "result",
    "result": "**session:xxxxxxxx**"
}
```

Thanks to the obtained session ID, execute the command below get a secret key

```bash
curl -k 'https://**<pvxapihost>**/api/create-api-key?name=**<keyname>**&_session=session:xxxxxxxx'`
```

Result:

``` json
{
    "type": "result",
    "result": "**secret:xxxxxxxx**"
}
```

In this example the API key is "secret:xxxxxxxx".

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
dnf install centreon-pack-applications-pvx-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-pvx-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-pvx-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-pvx-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **PVX** connector through
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
dnf install centreon-plugin-Applications-Pvx-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Pvx-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-pvx-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Pvx-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Pvx-Application-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro              | Description                                                                                                                | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PVXAPIHOSTNAME     | PVX hostname                                                                                                               |                   | X            |
| PVXAPIPROTO        | Specify https if needed                                                                                                    | https             |             |
| PVXAPIPORT         | API port                                                                                                                   | 443               |             |
| PVXAPIKEY          | PVX API key                                                                                                                |                   | X            |
| PVXAPITIMEOUT      | Set HTTP timeout                                                                                                           |                   |             |
| PVXAPIURLPATH      | PVX url path                                                                                                               | /api              |             |
| PVXCUSTOMMODE      | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | api               |             |
| PVX_AUTH_SERVICE_URL | Authentication service URL                                                                                                                                                                                                                                                                      | /api/v1/auth/login |           |
| PVX_USE_AUTH_SERVICE | Three authentication methods are supported: legacy username/password, API key, and username/password via the authentication server. Starting with Accedian Skylight version 17 and later authentication must be performed via the authentication server, enabled by setting this macro to `1`   | 0                  |           |
| PVXAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                       |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Http-Hits" label="Http-Hits">

| Macro             | Description                                                                                                                          | Default value     | Mandatory   |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME         | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                              | 900               |             |
| INSTANCE          | Filter on a specific instance (must be a PVQL object, Default: 'host')  (Object 'application' will be mapped with applications name) |                   | X           |
| FILTER            | Add a PVQL filter (example: --filter='host = "www.lo.ki"')                                                                           |                   |             |
| FROM              | Add a PVQL from clause to filter on a specific layer (default: 'http')                                                               |                   | X           |
| TOP               | Only search for the top X results (top is made on 'hits\_error')                                                                     |                   |             |
| FILTERCOUNTERS    | Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                  |                   |             |
| WARNINGHITS       | Threshold                                                                                                                            |                   |             |
| CRITICALHITS      | Threshold                                                                                                                            |                   |             |
| WARNINGHITSERROR  | Threshold                                                                                                                            |                   |             |
| CRITICALHITSERROR | Threshold                                                                                                                            |                   |             |
| WARNINGRATIO      | Threshold                                                                                                                            |                   |             |
| CRITICALRATIO     | Threshold                                                                                                                            |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                   | --verbose         |             |

</TabItem>
<TabItem value="Http-Hits-Application" label="Http-Hits-Application">

| Macro             | Description                                                                                                                          | Default value     | Mandatory   |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE          | Filter on a specific instance (must be a PVQL object, Default: 'host')  (Object 'application' will be mapped with applications name) | application       | X           |
| TIMEFRAME         | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                              |                   |             |
| FILTER            | Add a PVQL filter (example: --filter='host = "www.lo.ki"')                                                                           |                   |             |
| FROM              | Add a PVQL from clause to filter on a specific layer (default: 'http')                                                               |                   | X           |
| TOP               | Only search for the top X results (top is made on 'hits\_error')                                                                     |                   |             |
| FILTERCOUNTERS    | Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                  |                   |             |
| WARNINGHITS       | Threshold                                                                                                                            |                   |             |
| CRITICALHITS      | Threshold                                                                                                                            |                   |             |
| WARNINGHITSERROR  | Threshold                                                                                                                            |                   |             |
| CRITICALHITSERROR | Threshold                                                                                                                            |                   |             |
| WARNINGRATIO      | Threshold                                                                                                                            |                   |             |
| CRITICALRATIO     | Threshold                                                                                                                            |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                   |                   |             |

</TabItem>
<TabItem value="Http-Hits-Server-Ip" label="Http-Hits-Server-Ip">

| Macro             | Description                                                                                                                          | Default value     | Mandatory   |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE          | Filter on a specific instance (must be a PVQL object, Default: 'host')  (Object 'application' will be mapped with applications name) | server.ip         | X           |
| TIMEFRAME         | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                              |                   |             |
| FILTER            | Add a PVQL filter (example: --filter='host = "www.lo.ki"')                                                                           |                   |             |
| FROM              | Add a PVQL from clause to filter on a specific layer (default: 'http')                                                               |                   | X           |
| TOP               | Only search for the top X results (top is made on 'hits\_error')                                                                     |                   |             |
| FILTERCOUNTERS    | Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                  |                   |             |
| WARNINGHITS       | Threshold                                                                                                                            |                   |             |
| CRITICALHITS      | Threshold                                                                                                                            |                   |             |
| WARNINGHITSERROR  | Threshold                                                                                                                            |                   |             |
| CRITICALHITSERROR | Threshold                                                                                                                            |                   |             |
| WARNINGRATIO      | Threshold                                                                                                                            |                   |             |
| CRITICALRATIO     | Threshold                                                                                                                            |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                   |                   |             |

</TabItem>
<TabItem value="Network-Connection" label="Network-Connection">

| Macro                  | Description                                                                                                                           | Default value     | Mandatory   |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               | 900               |             |
| INSTANCE               | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) |                   | X           |
| FILTER                 | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM                   | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP                    | Only search for the top X results (top is made on 'ratio')                                                                            |                   |             |
| FILTERCOUNTERS         | Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                   |                   |             |
| WARNINGATTEMPT         | Threshold                                                                                                                             |                   |             |
| CRITICALATTEMPT        | Threshold                                                                                                                             |                   |             |
| WARNINGCONNECTIONTIME  | Threshold                                                                                                                             |                   |             |
| CRITICALCONNECTIONTIME | Threshold                                                                                                                             |                   |             |
| WARNINGRATIO           | Threshold                                                                                                                             |                   |             |
| CRITICALRATIO          | Threshold                                                                                                                             |                   |             |
| WARNINGSUCCESSFUL      | Threshold                                                                                                                             |                   |             |
| CRITICALSUCCESSFUL     | Threshold                                                                                                                             |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                    | --verbose         |             |

</TabItem>
<TabItem value="Network-Connection-Application" label="Network-Connection-Application">

| Macro                  | Description                                                                                                                           | Default value     | Mandatory   |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE               | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | application       | X           |
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                   |             |
| FILTER                 | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM                   | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP                    | Only search for the top X results (top is made on 'ratio')                                                                            |                   |             |
| FILTERCOUNTERS         | Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                   |                   |             |
| WARNINGATTEMPT         | Threshold                                                                                                                             |                   |             |
| CRITICALATTEMPT        | Threshold                                                                                                                             |                   |             |
| WARNINGCONNECTIONTIME  | Threshold                                                                                                                             |                   |             |
| CRITICALCONNECTIONTIME | Threshold                                                                                                                             |                   |             |
| WARNINGRATIO           | Threshold                                                                                                                             |                   |             |
| CRITICALRATIO          | Threshold                                                                                                                             |                   |             |
| WARNINGSUCCESSFUL      | Threshold                                                                                                                             |                   |             |
| CRITICALSUCCESSFUL     | Threshold                                                                                                                             |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                    |                   |             |

</TabItem>
<TabItem value="Network-Connection-Server-Ip" label="Network-Connection-Server-Ip">

| Macro                  | Description                                                                                                                           | Default value     | Mandatory   |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE               | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | server.ip         | X           |
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                   |             |
| FILTER                 | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM                   | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP                    | Only search for the top X results (top is made on 'ratio')                                                                            |                   |             |
| FILTERCOUNTERS         | Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                   |                   |             |
| WARNINGATTEMPT         | Threshold                                                                                                                             |                   |             |
| CRITICALATTEMPT        | Threshold                                                                                                                             |                   |             |
| WARNINGCONNECTIONTIME  | Threshold                                                                                                                             |                   |             |
| CRITICALCONNECTIONTIME | Threshold                                                                                                                             |                   |             |
| WARNINGRATIO           | Threshold                                                                                                                             |                   |             |
| CRITICALRATIO          | Threshold                                                                                                                             |                   |             |
| WARNINGSUCCESSFUL      | Threshold                                                                                                                             |                   |             |
| CRITICALSUCCESSFUL     | Threshold                                                                                                                             |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                    |                   |             |

</TabItem>
<TabItem value="Network-Traffic" label="Network-Traffic">

| Macro                      | Description                                                                                                                           | Default value     | Mandatory   |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                  | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               | 900               |             |
| INSTANCE                   | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) |                   | X           |
| FILTER                     | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM                       | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP                        | Only search for the top X results (top is made on 'traffic')                                                                          |                   |             |
| FILTERCOUNTERS             | Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                           |                   |             |
| WARNINGCLIENTTRAFFIC       | Threshold                                                                                                                             |                   |             |
| CRITICALCLIENTTRAFFIC      | Threshold                                                                                                                             |                   |             |
| WARNINGSERVERTRAFFIC       | Threshold                                                                                                                             |                   |             |
| CRITICALSERVERTRAFFIC      | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALCLIENTTRAFFIC  | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALCLIENTTRAFFIC | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALSERVERTRAFFIC  | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALSERVERTRAFFIC | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALTRAFFIC        | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALTRAFFIC       | Threshold                                                                                                                             |                   |             |
| WARNINGTRAFFIC             | Threshold                                                                                                                             |                   |             |
| CRITICALTRAFFIC            | Threshold                                                                                                                             |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                    | --verbose         |             |

</TabItem>
<TabItem value="Network-Traffic-Application" label="Network-Traffic-Application">

| Macro                      | Description                                                                                                                           | Default value     | Mandatory   |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE                   | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | application       | X           |
| TIMEFRAME                  | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                   |             |
| FILTER                     | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM                       | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP                        | Only search for the top X results (top is made on 'traffic')                                                                          |                   |             |
| FILTERCOUNTERS             | Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                           |                   |             |
| WARNINGCLIENTTRAFFIC       | Threshold                                                                                                                             |                   |             |
| CRITICALCLIENTTRAFFIC      | Threshold                                                                                                                             |                   |             |
| WARNINGSERVERTRAFFIC       | Threshold                                                                                                                             |                   |             |
| CRITICALSERVERTRAFFIC      | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALCLIENTTRAFFIC  | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALCLIENTTRAFFIC | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALSERVERTRAFFIC  | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALSERVERTRAFFIC | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALTRAFFIC        | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALTRAFFIC       | Threshold                                                                                                                             |                   |             |
| WARNINGTRAFFIC             | Threshold                                                                                                                             |                   |             |
| CRITICALTRAFFIC            | Threshold                                                                                                                             |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                    |                   |             |

</TabItem>
<TabItem value="Network-Traffic-Layer" label="Network-Traffic-Layer">

| Macro                      | Description                                                                                                                           | Default value                            | Mandatory   |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|:-----------:|
| INSTANCE                   | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | layer                                    | X           |
| TIMEFRAME                  | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                                          |             |
| FILTER                     | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                                          |             |
| FROM                       | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                                          | X           |
| TOP                        | Only search for the top X results (top is made on 'traffic')                                                                          |                                          |             |
| FILTERCOUNTERS             | Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                           |                                          |             |
| WARNINGCLIENTTRAFFIC       | Threshold                                                                                                                             |                                          |             |
| CRITICALCLIENTTRAFFIC      | Threshold                                                                                                                             |                                          |             |
| WARNINGSERVERTRAFFIC       | Threshold                                                                                                                             |                                          |             |
| CRITICALSERVERTRAFFIC      | Threshold                                                                                                                             |                                          |             |
| WARNINGTOTALCLIENTTRAFFIC  | Threshold                                                                                                                             |                                          |             |
| CRITICALTOTALCLIENTTRAFFIC | Threshold                                                                                                                             |                                          |             |
| WARNINGTOTALSERVERTRAFFIC  | Threshold                                                                                                                             |                                          |             |
| CRITICALTOTALSERVERTRAFFIC | Threshold                                                                                                                             |                                          |             |
| WARNINGTOTALTRAFFIC        | Threshold                                                                                                                             |                                          |             |
| CRITICALTOTALTRAFFIC       | Threshold                                                                                                                             |                                          |             |
| WARNINGTRAFFIC             | Threshold                                                                                                                             |                                          |             |
| CRITICALTRAFFIC            | Threshold                                                                                                                             |                                          |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                    | --verbose --filter-perfdata="noperfdata" |             |

</TabItem>
<TabItem value="Network-Traffic-Server-Ip" label="Network-Traffic-Server-Ip">

| Macro                      | Description                                                                                                                           | Default value     | Mandatory   |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE                   | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | server.ip         | X           |
| TIMEFRAME                  | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                   |             |
| FILTER                     | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM                       | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP                        | Only search for the top X results (top is made on 'traffic')                                                                          |                   |             |
| FILTERCOUNTERS             | Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                           |                   |             |
| WARNINGCLIENTTRAFFIC       | Threshold                                                                                                                             |                   |             |
| CRITICALCLIENTTRAFFIC      | Threshold                                                                                                                             |                   |             |
| WARNINGSERVERTRAFFIC       | Threshold                                                                                                                             |                   |             |
| CRITICALSERVERTRAFFIC      | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALCLIENTTRAFFIC  | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALCLIENTTRAFFIC | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALSERVERTRAFFIC  | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALSERVERTRAFFIC | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALTRAFFIC        | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALTRAFFIC       | Threshold                                                                                                                             |                   |             |
| WARNINGTRAFFIC             | Threshold                                                                                                                             |                   |             |
| CRITICALTRAFFIC            | Threshold                                                                                                                             |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                    |                   |             |

</TabItem>
<TabItem value="Network-User-Experience" label="Network-User-Experience">

| Macro          | Description                                                                                                                           | Default value     | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME      | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               | 900               |             |
| INSTANCE       | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) |                   | X           |
| FILTER         | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM           | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP            | Only search for the top X results                                                                                                     |                   |             |
| FILTERCOUNTERS | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'             |                   |             |
| WARNINGTIME    | Warning threshold (s)                                                                                                                 |                   |             |
| CRITICALTIME   | Critical threshold (s)                                                                                                                |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                    | --verbose         |             |

</TabItem>
<TabItem value="Network-User-Experience-Application" label="Network-User-Experience-Application">

| Macro          | Description                                                                                                                           | Default value     | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE       | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | application       | X           |
| TIMEFRAME      | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                   |             |
| FILTER         | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM           | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP            | Only search for the top X results                                                                                                     |                   |             |
| FILTERCOUNTERS | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'             |                   |             |
| WARNINGTIME    | Warning threshold (s)                                                                                                                 |                   |             |
| CRITICALTIME   | Critical threshold (s)                                                                                                                |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                    |                   |             |

</TabItem>
<TabItem value="Network-User-Experience-Server-Ip" label="Network-User-Experience-Server-Ip">

| Macro          | Description                                                                                                                           | Default value     | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE       | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | server.ip         | X           |
| TIMEFRAME      | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                   |             |
| FILTER         | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM           | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP            | Only search for the top X results                                                                                                     |                   |             |
| FILTERCOUNTERS | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'             |                   |             |
| WARNINGTIME    | Warning threshold (s)                                                                                                                 |                   |             |
| CRITICALTIME   | Critical threshold (s)                                                                                                                |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                    |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_pvx_restapi.pl \
	--plugin=apps::pvx::restapi::plugin \
	--mode=http-hits \
	--custommode='api' \
	--hostname='10.0.0.1' \
	--url-path='/api' \
	--api-key='xxxxxx' \
	--port='443' \
	--proto='https' \
	--timeout=''  \
	--auth-service-url='/api/v1/auth/login' \
	--use-auth-service='0'  \
	--timeframe='900' \
	--instance='' \
	--filter='' \
	--from='' \
	--top='' \
	--filter-counters='' \
	--warning-ratio='' \
	--critical-ratio='' \
	--warning-hits-error='' \
	--critical-hits-error='' \
	--warning-hits='' \
	--critical-hits='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: ratio: 18 hits error: 2 hits/s hits: 39 hits/s | 'http.hits.percentage'=18;;;0; 'http.hits.error.persecond'=2hits/s;;;0; 'http.hits.persecond'=39hits/s;0:40;0:60;0;

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
/usr/lib/centreon/plugins/centreon_pvx_restapi.pl \
	--plugin=apps::pvx::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                           | Linked service template                                                                                                                                                                                |
|:-----------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| http-hits [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pvx/restapi/mode/httphits.pm)]                            | App-Pvx-Http-Hits-Restapi-custom<br />App-Pvx-Http-Hits-Application-Restapi-custom<br />App-Pvx-Http-Hits-Server-Ip-Restapi-custom                                                                     |
| network-connection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pvx/restapi/mode/networkconnection.pm)]          | App-Pvx-Network-Connection-Restapi-custom<br />App-Pvx-Network-Connection-Application-Restapi-custom<br />App-Pvx-Network-Connection-Server-Ip-Restapi-custom                                          |
| network-traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pvx/restapi/mode/networktraffic.pm)]                | App-Pvx-Network-Traffic-Restapi-custom<br />App-Pvx-Network-Traffic-Application-Restapi-custom<br />App-Pvx-Network-Traffic-Layer-Restapi-custom<br />App-Pvx-Network-Traffic-Server-Ip-Restapi-custom |
| network-user-experience [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pvx/restapi/mode/networkuserexperience.pm)] | App-Pvx-Network-User-Experience-Restapi-custom<br />App-Pvx-Network-User-Experience-Application-Restapi-custom<br />App-Pvx-Network-User-Experience-Server-Ip-Restapi-custom                           |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --default-value                            |   Set a default value when nothing returned by PVX API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
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
| --timeframe                                |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timezone                                 |   Set your timezone.  Can use format: 'Europe/London' or '+0100'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --api-key                                  |   PVX API key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --hostname                                 |   PVX hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --url-path                                 |   PVX url path (default: '/api')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --port                                     |   API port (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --username                                 |   Specify the username for authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --password                                 |   Specify the password for authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --basic                                    |   Specify this option if you access the API over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access the API over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Http-Hits" label="Http-Hits">

| Option            | Description                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'host')  (Object 'application' will be mapped with applications name)   |
| --filter          |   Add a PVQL filter (example: --filter='host = "www.lo.ki"')                                                                             |
| --from            |   Add a PVQL from clause to filter on a specific layer (default: 'http')                                                                 |
| --top             |   Only search for the top X results (top is made on 'hits\_error').                                                                      |
| --warning-*       |   Warning threshold. Can be: 'ratio', 'hits-error' (hits/s), 'hits' (hits/s).                                                            |
| --critical-*      |   Critical threshold. Can be: 'ratio', 'hits-error' (hits/s), 'hits' (hits/s).                                                           |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                    |

</TabItem>
<TabItem value="Http-Hits-Application" label="Http-Hits-Application">

| Option            | Description                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'host')  (Object 'application' will be mapped with applications name)   |
| --filter          |   Add a PVQL filter (example: --filter='host = "www.lo.ki"')                                                                             |
| --from            |   Add a PVQL from clause to filter on a specific layer (default: 'http')                                                                 |
| --top             |   Only search for the top X results (top is made on 'hits\_error').                                                                      |
| --warning-*       |   Warning threshold. Can be: 'ratio', 'hits-error' (hits/s), 'hits' (hits/s).                                                            |
| --critical-*      |   Critical threshold. Can be: 'ratio', 'hits-error' (hits/s), 'hits' (hits/s).                                                           |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                    |

</TabItem>
<TabItem value="Http-Hits-Server-Ip" label="Http-Hits-Server-Ip">

| Option            | Description                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'host')  (Object 'application' will be mapped with applications name)   |
| --filter          |   Add a PVQL filter (example: --filter='host = "www.lo.ki"')                                                                             |
| --from            |   Add a PVQL from clause to filter on a specific layer (default: 'http')                                                                 |
| --top             |   Only search for the top X results (top is made on 'hits\_error').                                                                      |
| --warning-*       |   Warning threshold. Can be: 'ratio', 'hits-error' (hits/s), 'hits' (hits/s).                                                            |
| --critical-*      |   Critical threshold. Can be: 'ratio', 'hits-error' (hits/s), 'hits' (hits/s).                                                           |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                    |

</TabItem>
<TabItem value="Network-Connection" label="Network-Connection">

| Option            | Description                                                                                                                               |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)   |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                           |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                            |
| --top             |   Only search for the top X results (top is made on 'ratio').                                                                             |
| --warning-*       |   Warning threshold. Can be: 'ratio', 'attempt' (conn/s), 'successful' (conn/s), 'connection-time' (ms).                                  |
| --critical-*      |   Critical threshold. Can be: 'ratio', 'attempt' (conn/s), 'successful' (conn/s), 'connection-time' (ms).                                 |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                     |

</TabItem>
<TabItem value="Network-Connection-Application" label="Network-Connection-Application">

| Option            | Description                                                                                                                               |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)   |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                           |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                            |
| --top             |   Only search for the top X results (top is made on 'ratio').                                                                             |
| --warning-*       |   Warning threshold. Can be: 'ratio', 'attempt' (conn/s), 'successful' (conn/s), 'connection-time' (ms).                                  |
| --critical-*      |   Critical threshold. Can be: 'ratio', 'attempt' (conn/s), 'successful' (conn/s), 'connection-time' (ms).                                 |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                     |

</TabItem>
<TabItem value="Network-Connection-Server-Ip" label="Network-Connection-Server-Ip">

| Option            | Description                                                                                                                               |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)   |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                           |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                            |
| --top             |   Only search for the top X results (top is made on 'ratio').                                                                             |
| --warning-*       |   Warning threshold. Can be: 'ratio', 'attempt' (conn/s), 'successful' (conn/s), 'connection-time' (ms).                                  |
| --critical-*      |   Critical threshold. Can be: 'ratio', 'attempt' (conn/s), 'successful' (conn/s), 'connection-time' (ms).                                 |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                     |

</TabItem>
<TabItem value="Network-Traffic" label="Network-Traffic">

| Option            | Description                                                                                                                                     |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)         |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                                 |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                                  |
| --top             |   Only search for the top X results (top is made on 'traffic').                                                                                 |
| --warning-*       |   Warning threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.    |
| --critical-*      |   Critical threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                                   |

</TabItem>
<TabItem value="Network-Traffic-Application" label="Network-Traffic-Application">

| Option            | Description                                                                                                                                     |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)         |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                                 |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                                  |
| --top             |   Only search for the top X results (top is made on 'traffic').                                                                                 |
| --warning-*       |   Warning threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.    |
| --critical-*      |   Critical threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                                   |

</TabItem>
<TabItem value="Network-Traffic-Layer" label="Network-Traffic-Layer">

| Option            | Description                                                                                                                                     |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)         |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                                 |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                                  |
| --top             |   Only search for the top X results (top is made on 'traffic').                                                                                 |
| --warning-*       |   Warning threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.    |
| --critical-*      |   Critical threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                                   |

</TabItem>
<TabItem value="Network-Traffic-Server-Ip" label="Network-Traffic-Server-Ip">

| Option            | Description                                                                                                                                     |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)         |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                                 |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                                  |
| --top             |   Only search for the top X results (top is made on 'traffic').                                                                                 |
| --warning-*       |   Warning threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.    |
| --critical-*      |   Critical threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                                   |

</TabItem>
<TabItem value="Network-User-Experience" label="Network-User-Experience">

| Option          | Description                                                                                                                               |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| --instance      |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)   |
| --filter        |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                           |
| --from          |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                            |
| --top           |   Only search for the top X results.                                                                                                      |
| --warning-time  |   Warning threshold (s).                                                                                                                  |
| --critical-time |   Critical threshold (s).                                                                                                                 |

</TabItem>
<TabItem value="Network-User-Experience-Application" label="Network-User-Experience-Application">

| Option          | Description                                                                                                                               |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| --instance      |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)   |
| --filter        |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                           |
| --from          |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                            |
| --top           |   Only search for the top X results.                                                                                                      |
| --warning-time  |   Warning threshold (s).                                                                                                                  |
| --critical-time |   Critical threshold (s).                                                                                                                 |

</TabItem>
<TabItem value="Network-User-Experience-Server-Ip" label="Network-User-Experience-Server-Ip">

| Option          | Description                                                                                                                               |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| --instance      |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)   |
| --filter        |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                           |
| --from          |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                            |
| --top           |   Only search for the top X results.                                                                                                      |
| --warning-time  |   Warning threshold (s).                                                                                                                  |
| --critical-time |   Critical threshold (s).                                                                                                                 |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_pvx_restapi.pl \
	--plugin=apps::pvx::restapi::plugin \
	--mode=http-hits \
	--help
```
