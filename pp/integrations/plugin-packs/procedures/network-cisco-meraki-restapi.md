---
id: network-cisco-meraki-restapi
title: Cisco Meraki Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Cisco Meraki Rest API** brings 3 host templates:

* **Net-Cisco-Meraki-Cloudcontroller-Restapi-custom**
* **Net-Cisco-Meraki-Device-Restapi-custom**
* **Net-Cisco-Meraki-Network-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Meraki-Cloudcontroller-Restapi-custom" label="Net-Cisco-Meraki-Cloudcontroller-Restapi-custom">

| Service Alias | Service Template                                             | Service Description    |
|:------------- |:------------------------------------------------------------ |:---------------------- |
| Api-Requests  | Net-Cisco-Meraki-Cloudcontroller-Api-Requests-Restapi-custom | Check Meraki API usage |

> The services listed above are created automatically when the **Net-Cisco-Meraki-Cloudcontroller-Restapi** host template is used.

</TabItem>
<TabItem value="Net-Cisco-Meraki-Device-Restapi-custom" label="Net-Cisco-Meraki-Device-Restapi-custom">

| Service Alias | Service Template                                       | Service Description |
|:------------- |:------------------------------------------------------ |:------------------- |
| Device        | Net-Cisco-Meraki-Cloudcontroller-Device-Restapi-custom | Check devices usage |

> The services listed above are created automatically when the **Net-Cisco-Meraki-Device-Restapi** host template is used.

</TabItem>
<TabItem value="Net-Cisco-Meraki-Network-Restapi-custom" label="Net-Cisco-Meraki-Network-Restapi-custom">

| Service Alias | Service Template                                        | Service Description  |
|:------------- |:------------------------------------------------------- |:-------------------- |
| Network       | Net-Cisco-Meraki-Cloudcontroller-Network-Restapi-custom | Check networks usage |

> The services listed above are created automatically when the **Net-Cisco-Meraki-Network-Restapi** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                                         | Service Description  | Discovery |
|:------------- |:-------------------------------------------------------- |:-------------------- |:--------- |
| Cache         | Net-Cisco-Meraki-Cloudcontroller-Cache-Restapi-custom    | Generate cache files |           |
| Devices       | Net-Cisco-Meraki-Cloudcontroller-Devices-Restapi-custom  | Check devices usage  | X         |
| Networks      | Net-Cisco-Meraki-Cloudcontroller-Networks-Restapi-custom | Check networks usage |           |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then appy the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name             | Description                                  |
|:----------------------|:---------------------------------------------|
| Cisco Meraki Devices  | Discover Cisco Meraki Devices using RestAPI  |
| Cisco Meraki Networks | Discover Cisco Meraki Networks using RestAPI |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                       | Description                         |
|:--------------------------------|:------------------------------------|
| Net-Cisco-Meraki-RestAPI-Device | Discover devices and monitor status |
| Net-Cisco-Meraki-RestAPI-Tag    | Discover tags                       |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Api-Requests" label="Api-Requests">

| Metric name                                    | Unit  |
|:-----------------------------------------------|:------|
| *org_name*#organization.api.requests.200.count |       |
| *org_name*#organization.api.requests.404.count |       |
| *org_name*#organization.api.requests.429.count |       |

</TabItem>
<TabItem value="Cache" label="Cache">

Service with no metrics.

</TabItem>
<TabItem value="Devices" label="Devices">

| Metric name                                                   | Unit  |
|:--------------------------------------------------------------|:------|
| devices.total.online.count                                    |       |
| devices.total.online.percentage                               | %     |
| devices.total.offline.count                                   |       |
| devices.total.offline.percentage                              | %     |
| devices.total.alerting.count                                  |       |
| devices status                                                |       |
| *device_serial*#device.load.count                             |       |
| *device_serial*#device.connections.success.count              |       |
| *device_serial*#device.connections.auth.count                 |       |
| *device_serial*#device.connections.assoc.count                |       |
| *device_serial*#device.connections.dhcp.count                 |       |
| *device_serial*#device.connections.dns.count                  |       |
| *device_serial*#device.traffic.in.bitspersecond               | b/s   |
| *device_serial*#device.traffic.out.bitspersecond              | b/s   |
| *device_serial*#device.links.ineffective.count                |       |
| device link status                                            |       |
| *device_serial~link_name*#device.link.latency.milliseconds    | ms    |
| *device_serial~link_name*#device.link.loss.percentage         | %     |
| device port status                                            |       |
| *device_serial~port_id*#device.port.traffic.in.bitspersecond  | b/s   |
| *device_serial~port_id*#device.port.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Networks" label="Networks">

| Metric name                                      | Unit  |
|:-------------------------------------------------|:------|
| *network_name*#network.connections.success.count |       |
| *network_name*#network.connections.auth.count    |       |
| *network_name*#network.connections.assoc.count   |       |
| *network_name*#network.connections.dhcp.count    |       |
| *network_name*#network.connections.dns.count     |       |
| *network_name*#network.traffic.in.bitspersecond  |       |
| *network_name*#network.traffic.out.bitspersecond |       |

</TabItem>
</Tabs>

## Prerequisites

More information about the Cisco Meraki API can be found in the official documentation: 
https://documentation.meraki.com/zGeneral_Administration/Other_Topics/The_Cisco_Meraki_Dashboard_API

To get access to the API, first enable the API for your organization on the Cisco Meraki dashboard. 
This can be found under *Organization > Settings > Dashboard API access*.

After enabling the API, go to the *my profile* page to generate an API key. The API key is associated with a Dashboard administrator account. 
You can generate, revoke, and regenerate your API key on your profile.

> Keep your API key safe as it provides authentication to all of your organizations with the API enabled. 
> If your API key is shared, you can regenerate your API key at any time. This will revoke the existing API key.

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
dnf install centreon-pack-network-cisco-meraki-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-cisco-meraki-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-cisco-meraki-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-meraki-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Cisco Meraki Rest API** connector through
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
dnf install centreon-plugin-Network-Cisco-Meraki-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Cisco-Meraki-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-cisco-meraki-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Meraki-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Meraki-Cloudcontroller-Restapi" label="Net-Cisco-Meraki-Cloudcontroller-Restapi">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Net-Cisco-Meraki-Cloudcontroller-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                           | Default value     | Mandatory   |
|:----------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| MERAKIAPIHOSTNAME     | Meraki API hostname                                                                                   | api.meraki.com    |             |
| MERAKIAPIPORT         | Port used                                                                                             | 443               |             |
| MERAKIAPIPROTO        | Specify HTTPS if needed                                                                               | https             |             |
| MERAKIAPITOKEN        | Meraki API token                                                                                      |                   |             |
| PROXYURL              | Proxy URL. E.g.: http://my.proxy:3128                                                                 |                   |             |
| MERAKIAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Net-Cisco-Meraki-Device-Restapi" label="Net-Cisco-Meraki-Device-Restapi">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Net-Cisco-Meraki-Device-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                           | Default value     | Mandatory   |
|:----------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| MERAKIAPIHOSTNAME     | Meraki API hostname                                                                                   | api.meraki.com    |             |
| MERAKIAPIPORT         | Port used                                                                                             | 443               |             |
| MERAKIAPIPROTO        | Specify HTTPS if needed                                                                               | https             |             |
| MERAKIAPITOKEN        | Meraki API token                                                                                      |                   |             |
| MERAKIDEVICENAME      | Filter devices by name                                                                                |                   |             |
| PROXYURL              | Proxy URL. E.g.: http://my.proxy:3128                                                                 |                   |             |
| MERAKIAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Net-Cisco-Meraki-Network-Restapi" label="Net-Cisco-Meraki-Network-Restapi">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Net-Cisco-Meraki-Network-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                           | Default value     | Mandatory   |
|:----------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| MERAKIAPIHOSTNAME     | Meraki API hostname                                                                                   | api.meraki.com    |             |
| MERAKIAPIPORT         | Port used                                                                                             | 443               |             |
| MERAKIAPIPROTO        | Specify HTTPS if needed                                                                               | https             |             |
| MERAKIAPITOKEN        | Meraki API token                                                                                      |                   |             |
| MERAKINETWORKNAME     | Filter network name                                                                                   |                   |             |
| PROXYURL              | Proxy URL. E.g.: http://my.proxy:3128                                                                 |                   |             |
| MERAKIAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Api-Requests" label="Api-Requests">

| Macro                  | Description                                                                                         | Default value     | Mandatory   |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERORGANIZATIONNAME | Filter organization name (can be a regexp)                                                          |                   |             |
| WARNINGAPIREQUESTS200  | Thresholds                                                                                          |                   |             |
| CRITICALAPIREQUESTS200 | Thresholds                                                                                          |                   |             |
| WARNINGAPIREQUESTS404  | Thresholds                                                                                          |                   |             |
| CRITICALAPIREQUESTS404 | Thresholds                                                                                          |                   |             |
| WARNINGAPIREQUESTS429  | Thresholds                                                                                          |                   |             |
| CRITICALAPIREQUESTS429 | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Cache" label="Cache">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Device" label="Device">

| Macro                      | Description                                                                                                                                                                                   | Default value     | Mandatory   |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGCONNECTIONSASSOC    | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALCONNECTIONSASSOC   | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGCONNECTIONSAUTH     | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALCONNECTIONSAUTH    | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGCONNECTIONSDHCP     | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALCONNECTIONSDHCP    | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGCONNECTIONSDNS      | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALCONNECTIONSDNS     | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGCONNECTIONSSUCCESS  | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALCONNECTIONSSUCCESS | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGLINKLATENCY         | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALLINKLATENCY        | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGLINKLOSS            | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALLINKLOSS           | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGLINKSTATUS          | Set warning threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                            |                   |             |
| CRITICALLINKSTATUS         | Set critical threshold for status (Default: '%{link\_status} =~ /failed/i'). You can use the following variables: %{link\_status}, %{display}                                                 |                   |             |
| WARNINGLOAD                | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALLOAD               | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGPORTSTATUS          | Set warning threshold for status. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                          |                   |             |
| CRITICALPORTSTATUS         | Set critical threshold for status (Default: '%{port\_enabled} == 1 and %{port\_status} !~ /^connected/i'). You can use the following variables: %{port\_status}, %{port\_enabled}, %{display} |                   |             |
| WARNINGPORTTRAFFICIN       | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALPORTTRAFFICIN      | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGPORTTRAFFICOUT      | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALPORTTRAFFICOUT     | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGSTATUS              | Set warning threshold for status. You can use the following variables: %{status}, %{display}                                                                                                  |                   |             |
| CRITICALSTATUS             | Set critical threshold for status (Default: '%{status} =~ /alerting/i'). You can use the following variables: %{status}, %{display}                                                           |                   |             |
| WARNINGTOTALALERTING       | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTOTALALERTING      | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGTOTALOFFLINE        | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTOTALOFFLINE       | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGTOTALOFFLINEPRCT    | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTOTALOFFLINEPRCT   | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGTOTALONLINE         | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTOTALONLINE        | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGTOTALONLINEPRCT     | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTOTALONLINEPRCT    | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGTRAFFICIN           | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTRAFFICIN          | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGTRAFFICOUT          | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTRAFFICOUT         | Thresholds                                                                                                                                                                                    |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                           |                   |             |

</TabItem>
<TabItem value="Devices" label="Devices">

| Macro                      | Description                                                                                                                                                                                   | Default value               | Mandatory   |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| FILTERDEVICENAME           | Filter devices by name (can be a regexp)                                                                                                                                                      |                             |             |
| FILTERNETWORKID            | Filter devices by network ID (can be a regexp)                                                                                                                                                |                             |             |
| FILTERTAGS                 | Filter devices by tags (can be a regexp)                                                                                                                                                      |                             |             |
| FILTERORGANIZATIONNAME     | Filter devices by organization name (can be a regexp)                                                                                                                                         |                             |             |
| FILTERORGANIZATIONID       | Filter devices by organization ID (can be a regexp)                                                                                                                                           |                             |             |
| WARNINGCONNECTIONSASSOC    | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALCONNECTIONSASSOC   | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGCONNECTIONSAUTH     | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALCONNECTIONSAUTH    | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGCONNECTIONSDHCP     | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALCONNECTIONSDHCP    | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGCONNECTIONSDNS      | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALCONNECTIONSDNS     | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGCONNECTIONSSUCCESS  | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALCONNECTIONSSUCCESS | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGLINKLATENCY         | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALLINKLATENCY        | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGLINKLOSS            | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALLINKLOSS           | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGLINKSINEFFECTIVE    | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALLINKSINEFFECTIVE   | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALLINKSTATUS         | Set critical threshold for status (Default: '%{link\_status} =~ /failed/i'). You can use the following variables: %{link\_status}, %{display}                                                 | %{link_status} =~ /failed/i |             |
| WARNINGLINKSTATUS          | Set warning threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                            |                             |             |
| WARNINGLOAD                | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALLOAD               | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGPORTSTATUS          | Set warning threshold for status. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                          |                             |             |
| CRITICALPORTSTATUS         | Set critical threshold for status (Default: '%{port\_enabled} == 1 and %{port\_status} !~ /^connected/i'). You can use the following variables: %{port\_status}, %{port\_enabled}, %{display} |                             |             |
| WARNINGPORTTRAFFICIN       | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALPORTTRAFFICIN      | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGPORTTRAFFICOUT      | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALPORTTRAFFICOUT     | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALSTATUS             | Set critical threshold for status (Default: '%{status} =~ /alerting/i'). You can use the following variables: %{status}, %{display}                                                           | %{status} =~ /alerting/i    |             |
| WARNINGSTATUS              | Set warning threshold for status. You can use the following variables: %{status}, %{display}                                                                                                  |                             |             |
| WARNINGTOTALALERTING       | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTOTALALERTING      | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGTOTALOFFLINE        | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTOTALOFFLINE       | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGTOTALOFFLINEPRCT    | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTOTALOFFLINEPRCT   | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGTOTALONLINE         | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTOTALONLINE        | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGTOTALONLINEPRCT     | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTOTALONLINEPRCT    | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGTRAFFICIN           | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTRAFFICIN          | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGTRAFFICOUT          | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTRAFFICOUT         | Thresholds                                                                                                                                                                                    |                             |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                           | --verbose                   |             |

</TabItem>
<TabItem value="Networks" label="Networks">

| Macro                      | Description                                                                                         | Default value     | Mandatory   |
|:---------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNETWORKNAME          | Filter network name (can be a regexp)                                                               |                   |             |
| FILTERTAGS                 |                                                                                                     |                   |             |
| FILTERORGANIZATIONNAME     | Filter networks by organization name (can be a regexp)                                              |                   |             |
| FILTERORGANIZATIONID       | Filter networks by organization ID (can be a regexp)                                                |                   |             |
| WARNINGCONNECTIONSASSOC    | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONSASSOC   | Thresholds                                                                                          |                   |             |
| WARNINGCONNECTIONSAUTH     | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONSAUTH    | Thresholds                                                                                          |                   |             |
| WARNINGCONNECTIONSDHCP     | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONSDHCP    | Thresholds                                                                                          |                   |             |
| WARNINGCONNECTIONSDNS      | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONSDNS     | Thresholds                                                                                          |                   |             |
| WARNINGCONNECTIONSSUCCESS  | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONSSUCCESS | Thresholds                                                                                          |                   |             |
| WARNINGTRAFFICIN           | Thresholds                                                                                          |                   |             |
| CRITICALTRAFFICIN          | Thresholds                                                                                          |                   |             |
| WARNINGTRAFFICOUT          | Thresholds                                                                                          |                   |             |
| CRITICALTRAFFICOUT         | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a server using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_cisco_meraki_restapi.pl \
  --plugin='network::cisco::meraki::cloudcontroller::restapi::plugin' \
  --mode='devices' \
  --hostname='api.meraki.com' \
  --api-token='12345abcd6789efgh0123abcd4567efgh8901abcd' \
  --proxyurl='http://proxy.mycompany:8080' \
  --filter-device-name='centreon-par-training-ap' \
  --critical-status='%{status} =~ /alerting/i' \
  --critical-link-status='%{link_status} =~ /failed/i' \
  --verbose
```

The expected command output is shown below:

```bash
OK: Device 'centreon-par-training-ap' status: online - connection success: 0 - traffic in: 51.66 b/s, out: 515.86 b/s - link 'WAN 1' status: active | 
'devices.total.online.count'=0;;;0;1 'devices.total.offline.count'=0;;;0;1 'devices.total.alerting.count'=0;;;0;1 
'centreon-par-training-ap#device.connections.success.count'=0;;;0; 'centreon-par-training-ap#device.connections.auth.count'=0;;;0; 
'centreon-par-training-ap#device.connections.assoc.count'=0;;;0; 'centreon-par-training-ap#device.connections.dhcp.count'=0;;;0; 
'centreon-par-training-ap#device.connections.dns.count'=0;;;0; 'centreon-par-training-ap#device.traffic.in.bitspersecond'=51.6626907073509b/s;;;0; 
'centreon-par-training-ap#device.traffic.out.bitspersecond'=515.864632454924b/s;;;0;
checking device 'centreon-par-training-ap'
    status: online
    connection success: 0
    traffic in: 51.66 b/s, out: 515.86 b/s
    link 'WAN 1' status: active
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_meraki_restapi.pl \
	--plugin=network::cisco::meraki::cloudcontroller::restapi::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode         | Linked service template                                                                                 |
|:-------------|:--------------------------------------------------------------------------------------------------------|
| api-requests | Net-Cisco-Meraki-Cloudcontroller-Api-Requests-Restapi                                                   |
| cache        | Net-Cisco-Meraki-Cloudcontroller-Cache-Restapi                                                          |
| devices      | Net-Cisco-Meraki-Cloudcontroller-Device-Restapi<br />Net-Cisco-Meraki-Cloudcontroller-Devices-Restapi   |
| discovery    | Used for host discovery                                                                                 |
| list-devices | Used for service discovery                                                                              |
| list-tags    | Used for service discovery                                                                              |
| networks     | Net-Cisco-Meraki-Cloudcontroller-Network-Restapi<br />Net-Cisco-Meraki-Cloudcontroller-Networks-Restapi |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type         |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global       |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global       |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global       |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global       |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Global       |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global       |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global       |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --filter-perfdata                          | Filter perfdata that match the regexp. E.g.: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). E.g.: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). E.g.: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output       |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output       |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). E.g.: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output       |
| --change-exit                              | Replace an exit code with one of your choice. E.g.: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Output       |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. E.g.: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output       |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --hostname                                 | Meraki API hostname (default: 'api.meraki.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Api          |
| --port                                     | Port used (Default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Api          |
| --proto                                    | Specify HTTPS if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Api          |
| --api-token                                | Meraki API token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Api          |
| --timeout                                  | Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Api          |
| --ignore-permission-errors                 | Ignore permission errors (403 status code).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --ignore-orgs-api-disabled                 | Ignore organizations with API disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Api          |
| --api-filter-orgs                          | Filter organizations (regexp).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Api          |
| --cache-use                                | Use the cache file (created with cache mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Api          |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Http global  |
| --proxyurl                                 | Proxy URL. E.g.: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Http global  |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Http global  |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Http global  |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Backend lwp  |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Backend curl |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Retention    |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Retention    |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention    |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Retention    |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Retention    |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Retention    |
| --statefile-dir                            | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Retention    |
| --statefile-suffix                         | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention    |
| --statefile-concat-cwd                     | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Retention    |
| --statefile-format                         | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention    |
| --statefile-key                            | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Retention    |
| --statefile-cipher                         | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Retention    |

#### Modes options

All modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Api-Requests" label="Api-Requests">

| Option                     | Description                                                                        | Type |
|:---------------------------|:-----------------------------------------------------------------------------------|:-----|
| --filter-organization-name | Filter organization name (can be a regexp).                                        | Mode |
| --warning-* --critical-*   | Thresholds. Can be: 'api-requests-200', 'api-requests-404', 'api-requests-429'.    | Mode |

</TabItem>
<TabItem value="Cache" label="Cache">

| Option | Description | Type |
|:-------|:------------|:-----|

</TabItem>
<TabItem value="Device" label="Device">

| Option                         | Description                                                                                                                                                                                                                                                                                                                                                         | Type |
|:-------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-device-name           | Filter devices by name (can be a regexp).                                                                                                                                                                                                                                                                                                                           | Mode |
| --filter-network-id            | Filter devices by network ID (can be a regexp).                                                                                                                                                                                                                                                                                                                     | Mode |
| --filter-organization-id       | Filter devices by organization ID (can be a regexp).                                                                                                                                                                                                                                                                                                                | Mode |
| --filter-organization-name     | Filter devices by organization name (can be a regexp).                                                                                                                                                                                                                                                                                                              | Mode |
| --filter-tags                  | Filter devices by tags (can be a regexp).                                                                                                                                                                                                                                                                                                                           | Mode |
| --add-switch-ports             | Add switch port statuses and traffic.                                                                                                                                                                                                                                                                                                                               | Mode |
| --filter-switch-port           | Filter switch port (can be a regexp).                                                                                                                                                                                                                                                                                                                               | Mode |
| --skip-clients                 | Don't monitor clients traffic on device.                                                                                                                                                                                                                                                                                                                            | Mode |
| --skip-performance             | Don't monitor appliance perfscore.                                                                                                                                                                                                                                                                                                                                  | Mode |
| --skip-connections             | Don't monitor connection stats.                                                                                                                                                                                                                                                                                                                                     | Mode |
| --skip-traffic-disconnect-port | Skip port traffic counters if port status is disconnected.                                                                                                                                                                                                                                                                                                          | Mode |
| --unknown-status               | Set unknown threshold for status. You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                                                        | Mode |
| --warning-status               | Set warning threshold for status. You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                                                        | Mode |
| --critical-status              | Set critical threshold for status (Default: '%{status} =~ /alerting/i'). You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                 | Mode |
| --unknown-link-status          | Set unknown threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                                                                  | Mode |
| --warning-link-status          | Set warning threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                                                                  | Mode |
| --critical-link-status         | Set critical threshold for status (Default: '%{link\_status} =~ /failed/i'). You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                       | Mode |
| --unknown-port-status          | Set unknown threshold for status. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                                                                                                | Mode |
| --warning-port-status          | Set warning threshold for status. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                                                                                                | Mode |
| --critical-port-status         | Set critical threshold for status (Default: '%{port\_enabled} == 1 and %{port\_status} !~ /^connected/i'). You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                       | Mode |
| --warning-* --critical-*       | Thresholds. Can be: 'total-online', 'total-online-prct', 'total-offline', 'total-offline-prct', 'total-alerting', 'traffic-in', 'traffic-out', 'connections-success', 'connections-auth', 'connections-assoc', 'connections-dhcp', 'connections-dns', 'load', 'links-ineffective', 'link-latency' (ms), ''link-loss' (%), 'port-traffic-in', 'port-traffic-out'.    | Mode |

</TabItem>
<TabItem value="Devices" label="Devices">

| Option                         | Description                                                                                                                                                                                                                                                                                                                                                         | Type |
|:-------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-device-name           | Filter devices by name (can be a regexp).                                                                                                                                                                                                                                                                                                                           | Mode |
| --filter-network-id            | Filter devices by network ID (can be a regexp).                                                                                                                                                                                                                                                                                                                     | Mode |
| --filter-organization-id       | Filter devices by organization ID (can be a regexp).                                                                                                                                                                                                                                                                                                                | Mode |
| --filter-organization-name     | Filter devices by organization name (can be a regexp).                                                                                                                                                                                                                                                                                                              | Mode |
| --filter-tags                  | Filter devices by tags (can be a regexp).                                                                                                                                                                                                                                                                                                                           | Mode |
| --add-switch-ports             | Add switch port statuses and traffic.                                                                                                                                                                                                                                                                                                                               | Mode |
| --filter-switch-port           | Filter switch port (can be a regexp).                                                                                                                                                                                                                                                                                                                               | Mode |
| --skip-clients                 | Don't monitor clients traffic on device.                                                                                                                                                                                                                                                                                                                            | Mode |
| --skip-performance             | Don't monitor appliance perfscore.                                                                                                                                                                                                                                                                                                                                  | Mode |
| --skip-connections             | Don't monitor connection stats.                                                                                                                                                                                                                                                                                                                                     | Mode |
| --skip-traffic-disconnect-port | Skip port traffic counters if port status is disconnected.                                                                                                                                                                                                                                                                                                          | Mode |
| --unknown-status               | Set unknown threshold for status. You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                                                        | Mode |
| --warning-status               | Set warning threshold for status. You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                                                        | Mode |
| --critical-status              | Set critical threshold for status (Default: '%{status} =~ /alerting/i'). You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                 | Mode |
| --unknown-link-status          | Set unknown threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                                                                  | Mode |
| --warning-link-status          | Set warning threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                                                                  | Mode |
| --critical-link-status         | Set critical threshold for status (Default: '%{link\_status} =~ /failed/i'). You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                       | Mode |
| --unknown-port-status          | Set unknown threshold for status. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                                                                                                | Mode |
| --warning-port-status          | Set warning threshold for status. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                                                                                                | Mode |
| --critical-port-status         | Set critical threshold for status (Default: '%{port\_enabled} == 1 and %{port\_status} !~ /^connected/i'). You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                       | Mode |
| --warning-* --critical-*       | Thresholds. Can be: 'total-online', 'total-online-prct', 'total-offline', 'total-offline-prct', 'total-alerting', 'traffic-in', 'traffic-out', 'connections-success', 'connections-auth', 'connections-assoc', 'connections-dhcp', 'connections-dns', 'load', 'links-ineffective', 'link-latency' (ms), ''link-loss' (%), 'port-traffic-in', 'port-traffic-out'.    | Mode |

</TabItem>
<TabItem value="Network" label="Network">

| Option                     | Description                                                                                                                                                | Type |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-network-name      | Filter network name (can be a regexp).                                                                                                                     | Mode |
| --filter-organization-id   | Filter networks by organization ID (can be a regexp).                                                                                                      | Mode |
| --filter-organization-name | Filter networks by organization name (can be a regexp).                                                                                                    | Mode |
| --warning-* --critical-*   | Thresholds. Can be: 'connections-success', 'connections-auth', 'connections-assoc', 'connections-dhcp', 'connections-dns', 'traffic-in', 'traffic-out'.    | Mode |

</TabItem>
<TabItem value="Networks" label="Networks">

| Option                     | Description                                                                                                                                                | Type |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-network-name      | Filter network name (can be a regexp).                                                                                                                     | Mode |
| --filter-organization-id   | Filter networks by organization ID (can be a regexp).                                                                                                      | Mode |
| --filter-organization-name | Filter networks by organization name (can be a regexp).                                                                                                    | Mode |
| --warning-* --critical-*   | Thresholds. Can be: 'connections-success', 'connections-auth', 'connections-assoc', 'connections-dhcp', 'connections-dns', 'traffic-in', 'traffic-out'.    | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_meraki_restapi.pl \
	--plugin=network::cisco::meraki::cloudcontroller::restapi::plugin \
	--mode=devices \
    --help
```
