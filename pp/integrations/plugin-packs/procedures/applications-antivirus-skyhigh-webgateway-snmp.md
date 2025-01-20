---
id: applications-antivirus-skyhigh-webgateway-snmp
title: Skyhigh Security Web Gateway SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Skyhigh Web Gateway SNMP** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Skyhigh Web Gateway SNMP** brings a host template:

* **App-Antivirus-Skyhigh-Webgateway-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Antivirus-Skyhigh-Webgateway-SNMP-custom" label="App-Antivirus-Skyhigh-Webgateway-SNMP-custom">

| Service Alias    | Service Template                                              | Service Description                                                                                      |
|:-----------------|:--------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------|
| Clients          | App-Antivirus-Skyhigh-Webgateway-Clients-SNMP-custom          | Check the number of connected clients and the number of open network sockets                                                |
| Connections      | App-Antivirus-Skyhigh-Webgateway-Connections-SNMP-custom      | Check legitimate and blocked connections                                                                 |
| Detections       | App-Antivirus-Skyhigh-Webgateway-Detections-SNMP-custom       | Check the number of detected malware, by categories                                                             |
| Http-Statistics  | App-Antivirus-Skyhigh-Webgateway-Http-Statistics-SNMP-custom  | Check client/proxy, server/proxy, proxy/client and proxy/server HTTP network traffic and the number of requests  |
| Https-Statistics | App-Antivirus-Skyhigh-Webgateway-Https-Statistics-SNMP-custom | Check client/proxy, server/proxy, proxy/client and proxy/server HTTPS network traffic and the number of requests |
| Versions         | App-Antivirus-Skyhigh-Webgateway-Versions-SNMP-custom         | Check the version of virus definition databases                                                                 |

> The services listed above are created automatically when the **App-Antivirus-Skyhigh-Webgateway-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias  | Service Template                                            | Service Description                                                                 |
|:---------------|:------------------------------------------------------------|:------------------------------------------------------------------------------------|
| Ftp-Statistics | App-Antivirus-Skyhigh-Webgateway-Ftp-Statistics-SNMP-custom | Check client/proxy, server/proxy, proxy/client and proxy/server FTP network traffic |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                                           |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **App-Antivirus-Skyhigh-Webgateway-SNMP-custom** host template. |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Name                    | Unit    |
|:------------------------|:--------|
| clients.connected.count | clients |
| sockets.connected.count | sockets |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Connections" label="Connections">

| Name                                      | Unit          |
|:------------------------------------------|:--------------|
| connections.legitimate.persecond          | connections/s |
| connections.blocked.persecond             | connections/s |
| connections.antimalware.blocked.persecond | connections/s |
| connections.mediafilter.blocked.persecond | connections/s |
| connections.urlfilter.blocked.persecond   | connections/s |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Detections" label="Detections">

| Name                                              | Unit         |
|:--------------------------------------------------|:-------------|
| malwares.detected.persecond                       | detections/s |
| *categories*#category.malwares.detected.persecond | detections/s |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Ftp-Statistics" label="Ftp-Statistics">

| Name                                   | Unit  |
|:---------------------------------------|:------|
| ftp.traffic.client2proxy.bitspersecond | b/s   |
| ftp.traffic.server2proxy.bitspersecond | b/s   |
| ftp.traffic.proxy2client.bitspersecond | b/s   |
| ftp.traffic.proxy2server.bitspersecond | b/s   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Http-Statistics" label="Http-Statistics">

| Name                                    | Unit       |
|:----------------------------------------|:-----------|
| http.requests.persecond                 | requests/s |
| http.traffic.client2proxy.bitspersecond | b/s        |
| http.traffic.server2proxy.bitspersecond | b/s        |
| http.traffic.proxy2client.bitspersecond | b/s        |
| http.traffic.proxy2server.bitspersecond | b/s        |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Https-Statistics" label="Https-Statistics">

| Name                                     | Unit       |
|:-----------------------------------------|:-----------|
| https.requests.persecond                 | requests/s |
| https.traffic.client2proxy.bitspersecond | b/s        |
| https.traffic.server2proxy.bitspersecond | b/s        |
| https.traffic.proxy2client.bitspersecond | b/s        |
| https.traffic.proxy2server.bitspersecond | b/s        |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Versions" label="Versions">

| Name              | Unit  |
|:------------------|:------|
| dat-version       | N/A   |
| tsdb-version      | N/A   |
| proactive-version | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

The SNMP agent must be enabled and configured on the resource. Please refer to the official documentation from the manufacturer/publisher. 
Your resource may require a list of addresses authorized to query it to be set up. 
Please ensure that the addresses of the Centreon pollers are included in this list.

### Network flow

The target resource must be reachable from the Centreon poller on the UDP/161
SNMP port.

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
dnf install centreon-pack-applications-antivirus-skyhigh-webgateway-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-antivirus-skyhigh-webgateway-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-antivirus-skyhigh-webgateway-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-antivirus-skyhigh-webgateway-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Skyhigh Web Gateway SNMP** connector through
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
dnf install centreon-plugin-Applications-Antivirus-Skyhigh-Webgateway-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Antivirus-Skyhigh-Webgateway-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-antivirus-skyhigh-webgateway-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Antivirus-Skyhigh-Webgateway-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Antivirus-Skyhigh-Webgateway-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                                                              | Default value     | Mandatory   |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Macro           | Description                                                                                                                            | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS  | Only display some counters (regexp can be used). (example: --filter-counters='clients')                                                |                   |             |
| WARNINGCLIENTS  | Threshold                                                                                                                              |                   |             |
| CRITICALCLIENTS | Threshold                                                                                                                              |                   |             |
| WARNINGSOCKETS  | Threshold                                                                                                                              |                   |             |
| CRITICALSOCKETS | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Connections" label="Connections">

| Macro               | Description                                                                                                                            | Default value     | Mandatory   |
|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS      | Only display some counters (regexp can be used). (example: --filter-counters='blocked')                                                |                   |             |
| WARNINGBLOCKED      | Threshold                                                                                                                              |                   |             |
| CRITICALBLOCKED     | Threshold                                                                                                                              |                   |             |
| WARNINGBLOCKEDBYAM  | Threshold                                                                                                                              |                   |             |
| CRITICALBLOCKEDBYAM | Threshold                                                                                                                              |                   |             |
| WARNINGBLOCKEDBYMF  | Threshold                                                                                                                              |                   |             |
| CRITICALBLOCKEDBYMF | Threshold                                                                                                                              |                   |             |
| WARNINGBLOCKEDBYUF  | Threshold                                                                                                                              |                   |             |
| CRITICALBLOCKEDBYUF | Threshold                                                                                                                              |                   |             |
| WARNINGLEGITIMATE   | Threshold                                                                                                                              |                   |             |
| CRITICALLEGITIMATE  | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Detections" label="Detections">

| Macro                   | Description                                                                                                                            | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS          | Only display some counters (regexp can be used). (example: --filter-counters='^(?!(category)$)')                                       |                   |             |
| WARNINGCATEGORY         | Threshold                                                                                                                              |                   |             |
| CRITICALCATEGORY        | Threshold                                                                                                                              |                   |             |
| WARNINGMALWAREDETECTED  | Threshold                                                                                                                              |                   |             |
| CRITICALMALWAREDETECTED | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Ftp-Statistics" label="Ftp-Statistics">

| Macro                 | Description                                                                                                                            | Default value     | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS        | Only display some counters (regexp can be used). (example: --filter-counters='^proxy')                                                 |                   |             |
| WARNINGCLIENTTOPROXY  | Threshold                                                                                                                              |                   |             |
| CRITICALCLIENTTOPROXY | Threshold                                                                                                                              |                   |             |
| WARNINGPROXYTOCLIENT  | Threshold                                                                                                                              |                   |             |
| CRITICALPROXYTOCLIENT | Threshold                                                                                                                              |                   |             |
| WARNINGPROXYTOSERVER  | Threshold                                                                                                                              |                   |             |
| CRITICALPROXYTOSERVER | Threshold                                                                                                                              |                   |             |
| WARNINGSERVERTOPROXY  | Threshold                                                                                                                              |                   |             |
| CRITICALSERVERTOPROXY | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Http-Statistics" label="Http-Statistics">

| Macro                 | Description                                                                                                                            | Default value     | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS        | Only display some counters (regexp can be used). (example: --filter-counters='^proxy')                                                 |                   |             |
| WARNINGCLIENTTOPROXY  | Threshold                                                                                                                              |                   |             |
| CRITICALCLIENTTOPROXY | Threshold                                                                                                                              |                   |             |
| WARNINGPROXYTOCLIENT  | Threshold                                                                                                                              |                   |             |
| CRITICALPROXYTOCLIENT | Threshold                                                                                                                              |                   |             |
| WARNINGPROXYTOSERVER  | Threshold                                                                                                                              |                   |             |
| CRITICALPROXYTOSERVER | Threshold                                                                                                                              |                   |             |
| WARNINGREQUESTS       | Threshold                                                                                                                              |                   |             |
| CRITICALREQUESTS      | Threshold                                                                                                                              |                   |             |
| WARNINGSERVERTOPROXY  | Threshold                                                                                                                              |                   |             |
| CRITICALSERVERTOPROXY | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Https-Statistics" label="Https-Statistics">

| Macro                 | Description                                                                                                                            | Default value     | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS        | Only display some counters (regexp can be used). (example: --filter-counters='^proxy')                                                 |                   |             |
| WARNINGCLIENTTOPROXY  | Threshold                                                                                                                              |                   |             |
| CRITICALCLIENTTOPROXY | Threshold                                                                                                                              |                   |             |
| WARNINGPROXYTOCLIENT  | Threshold                                                                                                                              |                   |             |
| CRITICALPROXYTOCLIENT | Threshold                                                                                                                              |                   |             |
| WARNINGPROXYTOSERVER  | Threshold                                                                                                                              |                   |             |
| CRITICALPROXYTOSERVER | Threshold                                                                                                                              |                   |             |
| WARNINGREQUESTS       | Threshold                                                                                                                              |                   |             |
| CRITICALREQUESTS      | Threshold                                                                                                                              |                   |             |
| WARNINGSERVERTOPROXY  | Threshold                                                                                                                              |                   |             |
| CRITICALSERVERTOPROXY | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Versions" label="Versions">

| Macro                    | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS           | Only display some counters (regexp can be used). (example: --filter-counters='dat')                                                    |                   |             |
| WARNINGDATVERSION        | Threshold                                                                                                                              |                   |             |
| CRITICALDATVERSION       | Threshold                                                                                                                              |                   |             |
| WARNINGPROACTIVEVERSION  | Threshold                                                                                                                              |                   |             |
| CRITICALPROACTIVEVERSION | Threshold                                                                                                                              |                   |             |
| WARNINGTSDBVERSION       | Threshold                                                                                                                              |                   |             |
| CRITICALTSDBVERSION      | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_skyhigh_webgateway_snmp.pl \
	--plugin=apps::antivirus::skyhigh::webgateway::snmp::plugin \
	--mode=https-statistics \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-counters='' \
	--warning-requests='' \
	--critical-requests='' \
	--warning-client-to-proxy='' \
	--critical-client-to-proxy='' \
	--warning-server-to-proxy='' \
	--critical-server-to-proxy='' \
	--warning-proxy-to-client='' \
	--critical-proxy-to-client='' \
	--warning-proxy-to-server='' \
	--critical-proxy-to-server='' 
```

The expected command output is shown below:

```bash
OK: HTTPS Requests (per sec): 93911 from client to proxy: 32679 32679/s from server to proxy: 88873 88873/s from proxy to client: 73178 73178/s from proxy to server: 38824 38824/s | 'https.requests.persecond'=93911requests/s;;;0; 'https.traffic.client2proxy.bitspersecond'=32679b/s;;;0; 'https.traffic.server2proxy.bitspersecond'=88873b/s;;;0; 'https.traffic.proxy2client.bitspersecond'=73178b/s;;;0; 'https.traffic.proxy2server.bitspersecond'=38824b/s;;;0; 
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
/usr/lib/centreon/plugins/centreon_skyhigh_webgateway_snmp.pl \
	--plugin=apps::antivirus::skyhigh::webgateway::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                    | Linked service template                                       |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------|
| clients [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/clients.pm)]                  | App-Antivirus-Skyhigh-Webgateway-Clients-SNMP-custom          |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/connections.pm)]          | App-Antivirus-Skyhigh-Webgateway-Connections-SNMP-custom      |
| detections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/detections.pm)]            | App-Antivirus-Skyhigh-Webgateway-Detections-SNMP-custom       |
| ftp-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/ftpstatistics.pm)]     | App-Antivirus-Skyhigh-Webgateway-Ftp-Statistics-SNMP-custom   |
| http-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/httpstatistics.pm)]   | App-Antivirus-Skyhigh-Webgateway-Http-Statistics-SNMP-custom  |
| https-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/httpsstatistics.pm)] | App-Antivirus-Skyhigh-Webgateway-Https-Statistics-SNMP-custom |
| system [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/system.pm)]                    | Not used in this Monitoring Connector                         |
| versions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/versions.pm)]                | App-Antivirus-Skyhigh-Webgateway-Versions-SNMP-custom         |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --hostname                                 |   Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-community                           |   SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-version                             |   Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-port                                |   UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-timeout                             |   Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-retries                             |   Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --maxrepetitions                           |   Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --subsetleef                               |   How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-autoreduce                          |    Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-force-getnext                       |   Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-cache-file                          |   Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-username                            |   SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --authpassphrase                           |   SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authprotocol                             |   SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --privpassphrase                           |   SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --privprotocol                             |   SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --contextname                              |   SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --contextengineid                          |   SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given  as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --securityengineid                         |   SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-errors-exit                         |   Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-tls-transport                       |   Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-our-identity                    |   X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --snmp-tls-their-identity                  |   X.509 certificate to identify the remote host. Can be the path to the  certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-their-hostname                  |   Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-trust-cert                      |   A trusted CA certificate used to verify a remote host's certificate.  If you use this option, you must also  define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Option            | Description                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='clients')   |
| --warning-*       |   Warning threshold. Can be: 'clients', 'sockets'.                                          |
| --critical-*      |   Critical threshold. Can be: 'clients', 'sockets'.                                         |

</TabItem>
<TabItem value="Connections" label="Connections">

| Option            | Description                                                                                                                                                                                     |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='blocked')                                                                                                       |
| --warning-*       |   Warning threshold. Can be: 'legitimate', 'blocked', 'blocked-by-am' for blocked by anti malware , 'blocked-by-mf' for blocked by media Filter, 'blocked-by-uf' for blocked by URL filter.     |
| --critical-*      |   Critical threshold. Can be: 'legitimate', 'blocked', 'blocked-by-am' for blocked by anti malware , 'blocked-by-mf' for blocked by media Filter, 'blocked-by-uf' for blocked by URL filter.    |

</TabItem>
<TabItem value="Detections" label="Detections">

| Option            | Description                                                                                          |
|:------------------|:-----------------------------------------------------------------------------------------------------|
| --filter-name     |   Filter category name (can be a regexp).                                                            |
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='^(?!(category)$)')   |
| --warning-*       |   Warning threshold. Can be: 'malware-detected', 'category'                                          |
| --critical-*      |   Critical threshold. Can be: 'malware-detected', 'category'                                         |

</TabItem>
<TabItem value="Ftp-Statistics" label="Ftp-Statistics">

| Option            | Description                                                                                                  |
|:------------------|:-------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='^proxy')                     |
| --warning-*       |   Warning threshold. Can be: 'client-to-proxy', 'server-to-proxy', 'proxy-to-client', 'proxy-to-server'.     |
| --critical-*      |   Critical threshold. Can be: 'client-to-proxy', 'server-to-proxy', 'proxy-to-client', 'proxy-to-server'.    |

</TabItem>
<TabItem value="Http-Statistics" label="Http-Statistics">

| Option            | Description                                                                                                             |
|:------------------|:------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='^proxy')                                |
| --warning-*       |   Warning threshold. Can be: 'request', 'client-to-proxy', 'server-to-proxy', 'proxy-to-client', 'proxy-to-server'.     |
| --critical-*      |   Critical threshold. Can be: 'request', 'client-to-proxy', 'server-to-proxy', 'proxy-to-client', 'proxy-to-server'.    |

</TabItem>
<TabItem value="Https-Statistics" label="Https-Statistics">

| Option            | Description                                                                                                             |
|:------------------|:------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='^proxy')                                |
| --warning-*       |   Warning threshold. Can be: 'request', 'client-to-proxy', 'server-to-proxy', 'proxy-to-client', 'proxy-to-server'.     |
| --critical-*      |   Critical threshold. Can be: 'request', 'client-to-proxy', 'server-to-proxy', 'proxy-to-client', 'proxy-to-server'.    |

</TabItem>
<TabItem value="Versions" label="Versions">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters      |   Only display some counters (regexp can be used). (example: --filter-counters='dat')                                                                                                                                                           |
| --warning-*            |   Warning threshold on last update. Can be: 'dat-version', 'tsdb-version' for TrustedSource Database Version, 'proactive-version' for ProActive Database Version.                                                                               |
| --critical-*           |   Critical threshold on last update. Can be: 'dat-version', 'tsdb-version' for TrustedSource Database Version, 'proactive-version' for ProActive Database Version.                                                                              |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_skyhigh_webgateway_snmp.pl \
	--plugin=apps::antivirus::skyhigh::webgateway::snmp::plugin \
	--mode=https-statistics \
	--help
```
