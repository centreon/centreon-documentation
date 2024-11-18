---
id: cloud-vmware-velocloud-restapi
title: VMware VeloCloud Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **VMware VeloCloud** brings a host template:

* **Cloud-Vmware-Velocloud-Edge-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Vmware-Velocloud-Edge-Restapi-custom" label="Cloud-Vmware-Velocloud-Edge-Restapi-custom">

| Service Alias     | Service Template                                        | Service Description                             |
|:------------------|:--------------------------------------------------------|:------------------------------------------------|
| Application-Usage | Cloud-Vmware-Velocloud-Application-Usage-Restapi-custom | Check bandwidth usage per application.          |
| Category-Usage    | Cloud-Vmware-Velocloud-Category-Usage-Restapi-custom    | Check bandwidth usage per application category. |
| Edge-Qoe          | Cloud-Vmware-Velocloud-Edge-Qoe-Restapi-custom          | Check edge and edge's links QOE score.          |
| Edge-Status       | Cloud-Vmware-Velocloud-Edge-Status-Restapi-custom       | Check edge status.                              |

> The services listed above are created automatically when the **Cloud-Vmware-Velocloud-Edge-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                                  | Service Description        | Discovery  |
|:--------------|:--------------------------------------------------|:---------------------------|:----------:|
| Link-Status   | Cloud-Vmware-Velocloud-Link-Status-Restapi-custom | Check edge's links status. | X          |
| Link-Usage    | Cloud-Vmware-Velocloud-Link-Usage-Restapi-custom  | Check edge's links usage.  | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name        | Description                                                          |
|:-----------------|:---------------------------------------------------------------------|
| VMware VeloCloud | Discover VMware VeloCloud edges using VMware VeloCloud Orchestrator. |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                                  | Description                                 |
|:-------------------------------------------|:--------------------------------------------|
| Cloud-Vmware-Velocloud-Restapi-Link-Status | Discover the links to monitor their status. |
| Cloud-Vmware-Velocloud-Restapi-Link-Usage  | Discover the links to monitor their usage. |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Application-Usage" label="Application-Usage">

| Metric name                                          | Unit      |
|:-----------------------------------------------------|:----------|
| *edges*~edge.applications.total.count                | count     |
| *edges*~*apps*#application.traffic.in.bitspersecond  | b/s       |
| *edges*~*apps*#application.traffic.out.bitspersecond | b/s       |
| *edges*~*apps*#application.packets.in.persecond      | packets/s |
| *edges*~*apps*#application.packets.out.persecond     | packets/s |

</TabItem>
<TabItem value="Category-Usage" label="Category-Usage">

| Metric name                                             | Unit      |
|:--------------------------------------------------------|:----------|
| *edges*~edge.categories.total.count                     | count     |
| *edges*~*categories*#category.traffic.in.bitspersecond  | b/s       |
| *edges*~*categories*#category.traffic.out.bitspersecond | b/s       |
| *edges*~*categories*#category.packets.in.persecond      | packets/s |
| *edges*~*categories*#category.packets.out.persecond     | packets/s |

</TabItem>
<TabItem value="Edge-Qoe" label="Edge-Qoe">

| Metric name                                  | Unit  |
|:---------------------------------------------|:------|
| *edges*~global.qoe.voice.count               | count |
| *edges*~global.qoe.video.count               | count |
| *edges*~global.qoe.transactional.count       | count |
| *edges*~global.links.total.count             | count |
| *edges*~*links*#link.qoe.voice.count         | count |
| *edges*~*links*#link.qoe.video.count         | count |
| *edges*~*links*#link.qoe.transactional.count | count |

</TabItem>
<TabItem value="Edge-Status" label="Edge-Status">

| Metric name    | Unit  |
|:---------------|:------|
| *edges*#status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Link-Status" label="Link-Status">

| Metric name                    | Unit  |
|:-------------------------------|:------|
| *edges*~edge.links.total.count | count |
| *edges*~*links*#status         | N/A   |

</TabItem>
<TabItem value="Link-Usage" label="Link-Usage">

| Metric name                                     | Unit  |
|:------------------------------------------------|:------|
| *edges*~links.traffic.in.bitspersecond          | b/s   |
| *edges*~links.traffic.out.bitspersecond         | b/s   |
| *edges*~links.total.count                       | count |
| *edges*~*links*#link.traffic.in.bitspersecond   | b/s   |
| *edges*~*links*#link.traffic.out.bitspersecond  | b/s   |
| *edges*~*links*#link.latency.in.milliseconds    | ms    |
| *edges*~*links*#link.latency.out.milliseconds   | ms    |
| *edges*~*links*#link.jitter.in.milliseconds     | ms    |
| *edges*~*links*#link.jitter.out.milliseconds    | ms    |
| *edges*~*links*#link.packet.loss.in.percentage  | %     |
| *edges*~*links*#link.packet.loss.out.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

To use this connector, you must have the login and a password of an account allowed to use the VeloCloud Orchestrator 
API. 

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
dnf install centreon-pack-cloud-vmware-velocloud-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-vmware-velocloud-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-vmware-velocloud-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-vmware-velocloud-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **VMware VeloCloud** connector through
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
dnf install centreon-plugin-Cloud-Vmware-Velocloud-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Vmware-Velocloud-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-vmware-velocloud-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Vmware-Velocloud-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Vmware-Velocloud-Edge-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro              | Description                                                                                                                              | Default value     | Mandatory   |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VCOAPIHOSTNAME     | VMware VeloCloud Orchestrator hostname                                                                                                   |                   | X           |
| VCOAPIUSERNAME     | VMware VeloCloud Orchestrator username                                                                                                   |                   | X           |
| VCOAPIPASSWORD     | VMware VeloCloud Orchestrator password                                                                                                   |                   | X           |
| VCOAPIPROTO        | Specify https if needed (default: 'https')                                                                                               | https             |             |
| VCOAPIPORT         | Port used (default: 443)                                                                                                                 | 443               |             |
| EDGENAME           | Filter edge by name (can be a regexp)                                                                                                    |                   |             |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                 |                   |             |
| VCOAPITIMEOUT      | Set HTTP timeout in seconds.                                                                                                             | 10                |             |
| VCOAPIURLPATH      | API base url path.                                                                                                                       | /portal/rest      |             |
| VCOAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Application-Usage" label="Application-Usage">

| Macro                         | Description                                                                                                                            | Default value     | Mandatory   |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                     | Define the timeframe (in seconds) on which the data must be aggregated.                                                                | 900               |             |
| FILTERAPPLICATIONNAME         | Filter applications based on their name (can be a regexp)                                                                              |                   |             |
| WARNINGEDGEAPPLICATIONSCOUNT  | Thresholds                                                                                                                             |                   |             |
| CRITICALEDGEAPPLICATIONSCOUNT | Thresholds                                                                                                                             |                   |             |
| WARNINGPACKETSIN              | Thresholds                                                                                                                             |                   |             |
| CRITICALPACKETSIN             | Thresholds                                                                                                                             |                   |             |
| WARNINGPACKETSOUT             | Thresholds                                                                                                                             |                   |             |
| CRITICALPACKETSOUT            | Thresholds                                                                                                                             |                   |             |
| WARNINGTRAFFICIN              | Thresholds                                                                                                                             |                   |             |
| CRITICALTRAFFICIN             | Thresholds                                                                                                                             |                   |             |
| WARNINGTRAFFICOUT             | Thresholds                                                                                                                             |                   |             |
| CRITICALTRAFFICOUT            | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Category-Usage" label="Category-Usage">

| Macro                       | Description                                                                                                                            | Default value     | Mandatory   |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                   | Define the timeframe (in seconds) on which the data must be aggregated.                                                                | 900               |             |
| FILTERCATEGORYNAME          | Filter categories based on their name (can be a regexp)                                                                                |                   |             |
| WARNINGEDGECATEGORIESCOUNT  | Thresholds                                                                                                                             |                   |             |
| CRITICALEDGECATEGORIESCOUNT | Thresholds                                                                                                                             |                   |             |
| WARNINGPACKETSIN            | Thresholds                                                                                                                             |                   |             |
| CRITICALPACKETSIN           | Thresholds                                                                                                                             |                   |             |
| WARNINGPACKETSOUT           | Thresholds                                                                                                                             |                   |             |
| CRITICALPACKETSOUT          | Thresholds                                                                                                                             |                   |             |
| WARNINGTRAFFICIN            | Thresholds                                                                                                                             |                   |             |
| CRITICALTRAFFICIN           | Thresholds                                                                                                                             |                   |             |
| WARNINGTRAFFICOUT           | Thresholds                                                                                                                             |                   |             |
| CRITICALTRAFFICOUT          | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Edge-Qoe" label="Edge-Qoe">

| Macro                          | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                      | Define the timeframe (in seconds) on which the data must be aggregated.                                                                | 900               |             |
| FILTERLINKNAME                 | Filter links based on their name (can be a regexp)                                                                                     |                   |             |
| WARNINGEDGELINKSCOUNT          | Thresholds                                                                                                                             |                   |             |
| CRITICALEDGELINKSCOUNT         | Thresholds                                                                                                                             |                   |             |
| WARNINGQOETRANSACTIONAL        | Thresholds                                                                                                                             |                   |             |
| CRITICALQOETRANSACTIONAL       | Thresholds                                                                                                                             |                   |             |
| WARNINGQOETRANSACTIONALGLOBAL  | Thresholds                                                                                                                             |                   |             |
| CRITICALQOETRANSACTIONALGLOBAL | Thresholds                                                                                                                             |                   |             |
| WARNINGQOEVIDEO                | Thresholds                                                                                                                             |                   |             |
| CRITICALQOEVIDEO               | Thresholds                                                                                                                             |                   |             |
| WARNINGQOEVIDEOGLOBAL          | Thresholds                                                                                                                             |                   |             |
| CRITICALQOEVIDEOGLOBAL         | Thresholds                                                                                                                             |                   |             |
| WARNINGQOEVOICE                | Thresholds                                                                                                                             |                   |             |
| CRITICALQOEVOICE               | Thresholds                                                                                                                             |                   |             |
| WARNINGQOEVOICEGLOBAL          | Thresholds                                                                                                                             |                   |             |
| CRITICALQOEVOICEGLOBAL         | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Edge-Status" label="Edge-Status">

| Macro          | Description                                                                                                                                                                                                                                                 | Default value                                                         | Mandatory   |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (default: '%{edge\_state} =~ /NEVER\_ACTIVATED/'). You can use the following variables: %{edge\_state}, %{service\_state}, %{ha\_state}, %{activation\_state}                                   | %{edge\_state} =~ /NEVER\_ACTIVATED/                                  |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{edge\_state} !~ /CONNECTED/ && %{edge\_state} !~ /NEVER\_ACTIVATED/'). You can use the following variables: %{edge\_state}, %{service\_state}, %{ha\_state}, %{activation\_state} | %{edge\_state} !~ /CONNECTED/ && %{edge\_state} !~ /NEVER\_ACTIVATED/ |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{edge\_state}, %{service\_state}, %{ha\_state}, %{activation\_state}                                                                       |                                                                       |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                          |                                                                       |             |

</TabItem>
<TabItem value="Link-Status" label="Link-Status">

| Macro                  | Description                                                                                                                                                                                                                                    | Default value                                       | Mandatory   |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| FILTERLINKNAME         | Filter links based on their name (can be a regexp)                                                                                                                                                                                                         |                                                     |             |
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %{state}, %{vpn\_state}, %{backup\_state}                                                                                      |                                                     |             |
| WARNINGEDGELINKSCOUNT  | Warning & Critical thresholds Can be 'status', 'edge-links-count'.  For 'status', special variables can be used: %{state}, %{vpn\_state}, %{backup\_state} (Critical threshold default: '%{state} !~ /STABLE/ \|\| %{vpn\_state} !~ /STABLE/') |                                                     |             |
| CRITICALEDGELINKSCOUNT | Warning & Critical thresholds Can be 'status', 'edge-links-count'.  For 'status', special variables can be used: %{state}, %{vpn\_state}, %{backup\_state} (Critical threshold default: '%{state} !~ /STABLE/ \|\| %{vpn\_state} !~ /STABLE/') |                                                     |             |
| CRITICALSTATUS         | Warning & Critical thresholds Can be 'status', 'edge-links-count'.  For 'status', special variables can be used: %{state}, %{vpn\_state}, %{backup\_state} (Critical threshold default: '%{state} !~ /STABLE/ \|\| %{vpn\_state} !~ /STABLE/') | %{state} !~ /STABLE/ \|\| %{vpn\_state} !~ /STABLE/ |             |
| WARNINGSTATUS          | Warning & Critical thresholds Can be 'status', 'edge-links-count'.  For 'status', special variables can be used: %{state}, %{vpn\_state}, %{backup\_state} (Critical threshold default: '%{state} !~ /STABLE/ \|\| %{vpn\_state} !~ /STABLE/') |                                                     |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                         | --verbose                                           |             |

</TabItem>
<TabItem value="Link-Usage" label="Link-Usage">

| Macro                   | Description                                                                                                                            | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME               | Define the timeframe (in seconds) on which the data must be aggregated.                                                                | 900               |             |
| FILTERLINKNAME          | Filter link by name (can be a regexp)                                                                                                  |                   |             |
| WARNINGEDGELINKSCOUNT   | Thresholds                                                                                                                             |                   |             |
| CRITICALEDGELINKSCOUNT  | Thresholds                                                                                                                             |                   |             |
| WARNINGJITTERIN         | Thresholds                                                                                                                             |                   |             |
| CRITICALJITTERIN        | Thresholds                                                                                                                             |                   |             |
| WARNINGJITTEROUT        | Thresholds                                                                                                                             |                   |             |
| CRITICALJITTEROUT       | Thresholds                                                                                                                             |                   |             |
| WARNINGLATENCYIN        | Thresholds                                                                                                                             |                   |             |
| CRITICALLATENCYIN       | Thresholds                                                                                                                             |                   |             |
| WARNINGLATENCYOUT       | Thresholds                                                                                                                             |                   |             |
| CRITICALLATENCYOUT      | Thresholds                                                                                                                             |                   |             |
| WARNINGLINKSTRAFFICIN   | Thresholds                                                                                                                             |                   |             |
| CRITICALLINKSTRAFFICIN  | Thresholds                                                                                                                             |                   |             |
| WARNINGLINKSTRAFFICOUT  | Thresholds                                                                                                                             |                   |             |
| CRITICALLINKSTRAFFICOUT | Thresholds                                                                                                                             |                   |             |
| WARNINGPACKETLOSSIN     | Thresholds                                                                                                                             |                   |             |
| CRITICALPACKETLOSSIN    | Thresholds                                                                                                                             |                   |             |
| WARNINGPACKETLOSSOUT    | Thresholds                                                                                                                             |                   |             |
| CRITICALPACKETLOSSOUT   | Thresholds                                                                                                                             |                   |             |
| WARNINGTRAFFICIN        | Thresholds                                                                                                                             |                   |             |
| CRITICALTRAFFICIN       | Thresholds                                                                                                                             |                   |             |
| WARNINGTRAFFICOUT       | Thresholds                                                                                                                             |                   |             |
| CRITICALTRAFFICOUT      | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_velocloud_restapi.pl \
	--plugin=cloud::vmware::velocloud::restapi::plugin \
	--mode=link-usage \
	--hostname='' \
	--api-path='/portal/rest' \
	--username='' \
	--password='' \
	--port='443' \
	--proto='https' \
	--timeout='10'  \
	--proxyurl= \
	--filter-edge-name=''  \
	--filter-link-name='' \
	--warning-links-traffic-in='' \
	--critical-links-traffic-in='' \
	--warning-links-traffic-out='' \
	--critical-links-traffic-out='' \
	--warning-edge-links-count='' \
	--critical-edge-links-count='' \
	--warning-traffic-in='' \
	--critical-traffic-in='' \
	--warning-traffic-out='' \
	--critical-traffic-out='' \
	--warning-latency-in='' \
	--critical-latency-in='' \
	--warning-latency-out='' \
	--critical-latency-out='' \
	--warning-jitter-in='' \
	--critical-jitter-in='' \
	--warning-jitter-out='' \
	--critical-jitter-out='' \
	--warning-packet-loss-in='' \
	--critical-packet-loss-in='' \
	--warning-packet-loss-out='' \
	--critical-packet-loss-out='' \
	--timeframe='900' \
	--verbose
```

The expected command output is shown below:

```bash
OK: Total Traffic In: 23 23/s Total Traffic Out: 94 94/s 76 link(s) All links status are ok | '*edges*~links.traffic.in.bitspersecond'=23b/s;;;0; '*edges*~links.traffic.out.bitspersecond'=94b/s;;;0; '*edges*~links.total.count'=76;;;0; '*edges*~*links*#link.traffic.in.bitspersecond'=b/s;;;0; '*edges*~*links*#link.traffic.out.bitspersecond'=b/s;;;0; '*edges*~*links*#link.latency.in.milliseconds'=ms;;;0; '*edges*~*links*#link.latency.out.milliseconds'=ms;;;0; '*edges*~*links*#link.jitter.in.milliseconds'=ms;;;0; '*edges*~*links*#link.jitter.out.milliseconds'=ms;;;0; '*edges*~*links*#link.packet.loss.in.percentage'=%;;;0;100 '*edges*~*links*#link.packet.loss.out.percentage'=%;;;0;100
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
/usr/lib/centreon/plugins/centreon_velocloud_restapi.pl \
	--plugin=cloud::vmware::velocloud::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                              | Linked service template                                 |
|:--------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|
| application-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/applicationusage.pm)] | Cloud-Vmware-Velocloud-Application-Usage-Restapi-custom |
| category-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/categoryusage.pm)]       | Cloud-Vmware-Velocloud-Category-Usage-Restapi-custom    |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/discovery.pm)]                | Used for host discovery                                 |
| edge-qoe [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/edgeqoe.pm)]                   | Cloud-Vmware-Velocloud-Edge-Qoe-Restapi-custom          |
| edge-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/edgestatus.pm)]             | Cloud-Vmware-Velocloud-Edge-Status-Restapi-custom       |
| link-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/linkstatus.pm)]             | Cloud-Vmware-Velocloud-Link-Status-Restapi-custom       |
| link-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/linkusage.pm)]               | Cloud-Vmware-Velocloud-Link-Usage-Restapi-custom        |
| list-edges [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/listedges.pm)]               | Not used in this Monitoring Connector                   |
| list-links [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/listlinks.pm)]               | Used for service discovery                              |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | VMware VeloCloud Orchestrator hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --port                                     | Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --cache-expires-in                         | Cache (application) expires each X seconds (default: 7200)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --username                                 | VMware VeloCloud Orchestrator username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --password                                 | VMware VeloCloud Orchestrator password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --operator-user                            | Set if the user is an operator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --api-path                                 | API base url path (default: '/portal/rest').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --timeframe                                | Set timeframe in seconds (default: 900).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeout                                  | Set HTTP timeout in seconds (default: '10').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Application-Usage" label="Application-Usage">

| Option                    | Description                                                                                                 |
|:--------------------------|:------------------------------------------------------------------------------------------------------------|
| --filter-edge-name        | Filter edge by name (can be a regexp).                                                                      |
| --filter-application-name | Filter application by name (can be a regexp).                                                               |
| --warning-* --critical-*  | Thresholds. Can be: 'edge-applications-count', 'traffic-in', 'traffic-out', 'packets-in', 'packets-out'.    |

</TabItem>
<TabItem value="Category-Usage" label="Category-Usage">

| Option                   | Description                                                                                               |
|:-------------------------|:----------------------------------------------------------------------------------------------------------|
| --filter-edge-name       | Filter edge by name (can be a regexp).                                                                    |
| --filter-category-name   | Filter category by name (can be a regexp).                                                                |
| --warning-* --critical-* | Thresholds. Can be: 'edge-categories-count', 'traffic-in', 'traffic-out', 'packets-in', 'packets-out'.    |

</TabItem>
<TabItem value="Edge-Qoe" label="Edge-Qoe">

| Option                   | Description                                                                                                                                                                                           |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-edge-name       | Filter edge by name (can be a regexp).                                                                                                                                                                |
| --filter-link-name       | Filter link by name (can be a regexp).                                                                                                                                                                |
| --warning-* --critical-* | Thresholds. Can be: 'edge-links-count', 'qoe-voice-global', 'qoe-video-global', 'qoe-transactional-global' (global values) and/or 'qoe-voice', 'qoe-video', 'qoe-transactional' (per link values).    |

</TabItem>
<TabItem value="Edge-Status" label="Edge-Status">

| Option            | Description                                                                                                                                                                                                                                                     |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name     | Filter edge by name (can be a regexp).                                                                                                                                                                                                                          |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN (default: '%{edge\_state} =~ /NEVER\_ACTIVATED/'). You can use the following variables: %{edge\_state}, %{service\_state}, %{ha\_state}, %{activation\_state}.                                      |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{edge\_state}, %{service\_state}, %{ha\_state}, %{activation\_state}.                                                                          |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{edge\_state} !~ /CONNECTED/ && %{edge\_state} !~ /NEVER\_ACTIVATED/'). You can use the following variables: %{edge\_state}, %{service\_state}, %{ha\_state}, %{activation\_state}.    |

</TabItem>
<TabItem value="Link-Status" label="Link-Status">

| Option                   | Description                                                                                                                                                                                                                                        |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-edge-name       | Filter edge by name (can be a regexp).                                                                                                                                                                                                             |
| --filter-link-name       | Filter link by name (can be a regexp).                                                                                                                                                                                                             |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %{state}, %{vpn\_state}, %{backup\_state}.                                                                                         |
| --warning-* --critical-* | Warning & Critical thresholds Can be 'status', 'edge-links-count'.  For 'status', special variables can be used: %{state}, %{vpn\_state}, %{backup\_state} (Critical threshold default: '%{state} !~ /STABLE/ \|\| %{vpn\_state} !~ /STABLE/').    |

</TabItem>
<TabItem value="Link-Usage" label="Link-Usage">

| Option                   | Description                                                                                                                                                                                                   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-edge-name       | Filter edge by name (can be a regexp).                                                                                                                                                                        |
| --filter-link-name       | Filter link by name (can be a regexp).                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'edge-links-count', 'links-traffic-in', 'links-traffic-out', 'traffic-in', 'traffic-out', 'latency-in', 'latency-out', 'jitter-in', 'jitter-out', 'packet-loss-in', 'packet-loss-out'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_velocloud_restapi.pl \
	--plugin=cloud::vmware::velocloud::restapi::plugin \
	--mode=link-usage \
	--help
```
