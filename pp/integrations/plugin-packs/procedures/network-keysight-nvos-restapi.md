---
id: network-keysight-nvos-restapi
title: Keysight NVOS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Monitoring Connector **Keysight NVOS Rest API** brings a host template:

* Net-Keysight-Nvos-Restapi

The connector brings the following service templates (sorted by host template):

<Tabs groupId="sync">
<TabItem value="Net-Keysight-Nvos-Restapi" label="Net-Keysight-Nvos-Restapi">

| Service Alias | Service Template                   | Service Description                                     |
|:--------------|:-----------------------------------|:--------------------------------------------------------|
| Hardware      | Net-Keysight-Nvos-Uptime-Restapi   | Check hardware                                          |
| Time          | Net-Keysight-Nvos-Time-Restapi     | Check time offset                                       |
| Uptime        | Net-Keysight-Nvos-Hardware-Restapi | Time since the equipment has been working and available |

</TabItem>
<TabItem value="No host template" label="No host template">

| Service Alias   | Service Template                          | Service Description   | Discovery  |
|:----------------|:------------------------------------------|:----------------------|:-----------|
| Dynamic-Filters | Net-Keysight-Nvos-Dynamic-Filters-Restapi | Check dynamic filters | X          |
| Ports           | Net-Keysight-Nvos-Ports-Restapi           | Check ports           | X          |

> These services are not automatically created when the host template is applied.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

| Rule name                                     | Description |
|:----------------------------------------------|:------------|
| Net-Keysight-Nvos-Restapi-Dynamic-Filter-Name |             |
| Net-Keysight-Nvos-Restapi-Port-Name           |             |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).


### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| df~dynamic_filter.traffic.pass.bytespersecond | B/s   |
| df~dynamic_filter.traffic.insp.bytespersecond | B/s   |
| df~dynamic_filter.packets.denied.count        | count |
| df~dynamic_filter.packets.pass.count          | count |
| df~dynamic_filter.packets.insp.count          | count |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                               | Unit  |
|:------------------------------------------|:------|
| temperatures#temperature-status           | N/A   |
| temperatures#hardware.temperature.celsius |       |
| fans.failed.count                         | count |
| psus#psu-status                           | N/A   |

</TabItem>
<TabItem value="Ports" label="Ports">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| ports~license-status                  | N/A   |
| ports~port.traffic.out.percentage     | %     |
| ports~port.traffic.out.bytespersecond | B/s   |
| ports~port.packets.out.count          | count |
| ports~port.packets.dropped.count      | count |
| ports~port.packets.pass.count         | count |
| ports~port.packets.insp.count         | count |

</TabItem>
<TabItem value="Time" label="Time">

| Metric name         | Unit  |
|:--------------------|:------|
| ntp-status          | N/A   |
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds |       |

</TabItem>
</Tabs>

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Keysight NVOS Rest API** Pack through
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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Keysight-Nvos-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Network-Keysight-Nvos-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Keysight-Nvos-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-keysight-nvos-restapi
```

</TabItem>
</Tabs>

## Configuration

### Host

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Net-Keysight-Nvos-Restapi-custom** template to the host.
4. Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                       | Description                                                                       | Default |
|:------------|:----------------------------|:----------------------------------------------------------------------------------|:--------|
| x           | KEYSIGHTNVOSAPIPASSWORD     | API password                                                                      |         |
|             | KEYSIGHTNVOSAPIPORT         | Port used                                                                         | 8000    |
|             | KEYSIGHTNVOSAPIPROTO        | Specify https if needed                                                           | https   |
| x           | KEYSIGHTNVOSAPIUSERNAME     | API username                                                                      |         |
|             | KEYSIGHTNVOSAPIEXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag) |         |


### Service 

Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Mandatory   | Macro                 | Description                                      | Default   |
|:------------|:----------------------|:-------------------------------------------------|:----------|
|             | FILTERNAME            | Filter dynamic filters by name (can be a regexp) |           |
|             | WARNINGPACKETSDENIED  |                                                  |           |
|             | CRITICALPACKETSDENIED |                                                  |           |
|             | WARNINGPACKETSINSP    |                                                  |           |
|             | CRITICALPACKETSINSP   |                                                  |           |
|             | WARNINGPACKETSPASS    |                                                  |           |
|             | CRITICALPACKETSPASS   |                                                  |           |
|             | WARNINGTRAFFICINSP    |                                                  |           |
|             | CRITICALTRAFFICINSP   |                                                  |           |
|             | WARNINGTRAFFICPASS    |                                                  |           |
|             | CRITICALTRAFFICPASS   |                                                  |           |
|             | EXTRAOPTIONS          |                                                  | --verbose |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Mandatory   | Macro                     | Description                                                                                                                 | Default                |
|:------------|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------|:-----------------------|
|             | UNKNOWNTEMPERATURESTATUS  | Set unknown threshold for status (Default : '%{status} eq "unknown"'). Can used special variables like: %{status}, %{class} | %{status} eq "unknown" |
|             | WARNINGFANSFAILED         |                                                                                                                             |                        |
|             | CRITICALFANSFAILED        |                                                                                                                             |                        |
|             | CRITICALPSUSTATUS         |                                                                                                                             | %{status} eq "bad"     |
|             | WARNINGPSUSTATUS          | Set warning threshold for status. Can used special variables like: %{status}, %{name}                                       |                        |
|             | WARNINGTEMPERATURE        |                                                                                                                             |                        |
|             | CRITICALTEMPERATURE       |                                                                                                                             |                        |
|             | WARNINGTEMPERATURESTATUS  | Set warning threshold for status (Default : '%{status} eq "warn"'). Can used special variables like: %{status}, %{class}    | %{status} eq "warn"    |
|             | CRITICALTEMPERATURESTATUS | Set critical threshold for status (Default: '%{status} eq "hot"'); Can used special variables like: %{status}, %{class}     | %{status} eq "hot"     |
|             | EXTRAOPTIONS              |                                                                                                                             | --verbose              |

</TabItem>
<TabItem value="Ports" label="Ports">

| Mandatory   | Macro                  | Description                                                                                                                                                                                 | Default                                                      |
|:------------|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|
|             | FILTERNAME             | Filter ports by name (can be a regexp)                                                                                                                                                      |                                                              |
|             | WARNINGLICENSESTATUS   | Set warning threshold for status (Default: '%{status} =~ /invalid\_software\_version/'). Can used special variables like: %{status}, %{name}                                                | %{status} =~ /invalid_software_version/                      |
|             | CRITICALLICENSESTATUS  | Set critical threshold for status. Can used special variables like: %{status}, %{name}                                                                                                      |                                                              |
|             | CRITICALLINKSTATUS     | Set critical threshold for status (Default: '%{adminStatus} eq "enabled" and %{operationalStatus} ne "up"'). Can used special variables like: %{adminStatus}, %{operationalStatus}, %{name} | %{adminStatus} eq "enabled" and %{operationalStatus} ne "up" |
|             | WARNINGLINKSTATUS      | Set warning threshold for status. Can used special variables like: %{adminStatus}, %{operationalStatus}, %{name}                                                                            |                                                              |
|             | WARNINGPACKETSDROPPED  |                                                                                                                                                                                             |                                                              |
|             | CRITICALPACKETSDROPPED |                                                                                                                                                                                             |                                                              |
|             | WARNINGPACKETSINSP     |                                                                                                                                                                                             |                                                              |
|             | CRITICALPACKETSINSP    |                                                                                                                                                                                             |                                                              |
|             | WARNINGPACKETSOUT      |                                                                                                                                                                                             |                                                              |
|             | CRITICALPACKETSOUT     |                                                                                                                                                                                             |                                                              |
|             | WARNINGPACKETSPASS     |                                                                                                                                                                                             |                                                              |
|             | CRITICALPACKETSPASS    |                                                                                                                                                                                             |                                                              |
|             | WARNINGTRAFFICOUT      |                                                                                                                                                                                             |                                                              |
|             | CRITICALTRAFFICOUT     |                                                                                                                                                                                             |                                                              |
|             | WARNINGTRAFFICOUTPRCT  |                                                                                                                                                                                             |                                                              |
|             | CRITICALTRAFFICOUTPRCT |                                                                                                                                                                                             |                                                              |
|             | EXTRAOPTIONS           |                                                                                                                                                                                             | --verbose                                                    |

</TabItem>
<TabItem value="Time" label="Time">

| Mandatory   | Macro             | Description                                                                                                                     | Default                         |
|:------------|:------------------|:--------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|
|             | TIMEZONE          | Override the timezone of distant equipment. Can use format: 'Europe/London' or '+0100'                                          |                                 |
|             | NTPHOSTNAME       | Set the ntp hostname (if not set, localtime is used)                                                                            |                                 |
|             | NTPPORT           | Set the ntp port (Default: 123)                                                                                                 |                                 |
|             | CRITICALNTPSTATUS | Set thresholds for status (Default critical: '%{status} !~ /in\_reach\|in\_sync/i')  Can used special variables like: %{status} | %{status} !~ /in_reach|in_sync/ |
|             | WARNINGNTPSTATUS  |                                                                                                                                 |                                 |
|             | WARNINGOFFSET     | Time offset warning threshold (in seconds)                                                                                      |                                 |
|             | CRITICALOFFSET    | Time offset critical Threshold (in seconds)                                                                                     |                                 |
|             | EXTRAOPTIONS      |                                                                                                                                 | --verbose                       |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Mandatory   | Macro          | Description                                                                                                                                                 | Default |
|:------------|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
|             | UNIT           | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds |         |
|             | WARNINGUPTIME  | Threshold warning                                                                                                                                           |         |
|             | CRITICALUPTIME | Threshold critical                                                                                                                                          |         |
|             | EXTRAOPTIONS   | Any extra option you may want to add to the command line (eg. a --verbose flag)                                                                             |         |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--mode=dynamic-filters \
	--hostname='10.0.0.1' \
	--proto='' \
	--port='' \
	--api-username='' \
	--api-password=''  \
	--filter-name='' \
	--warning-packets-denied='' \
	--critical-packets-denied='' \
	--warning-packets-pass='' \
	--critical-packets-pass='' \
	--warning-packets-insp='' \
	--critical-packets-insp='' \
	--warning-traffic-pass='' \
	--critical-traffic-pass='' \
	--warning-traffic-insp='' \
	--critical-traffic-insp='' \
	
```

The expected command output is shown below:

```bash
OK:      | 'dynamic_filter.traffic.pass.bytespersecond'=24B/s;;;0;;;;;  'dynamic_filter.traffic.insp.bytespersecond'=42B/s;;;0;;;;;  'dynamic_filter.packets.denied.count'=41;;;0;;;;;  'dynamic_filter.packets.pass.count'=78;;;0;;;;;  'dynamic_filter.packets.insp.count'=35;;;0;;;;;  
```

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode                 | Linked service template                   |
|:---------------------|:------------------------------------------|
| dynamic-filters      | Net-Keysight-Nvos-Dynamic-Filters-Restapi |
| hardware             | Net-Keysight-Nvos-Hardware-Restapi        |
| list-dynamic-filters | Used for service discovery                |
| list-ports           | Used for service discovery                |
| ports                | Net-Keysight-Nvos-Ports-Restapi           |
| time                 | Net-Keysight-Nvos-Time-Restapi            |
| uptime               | Net-Keysight-Nvos-Uptime-Restapi          |



### Available options

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type         |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --mode                                     | Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global       |
| --dyn-mode                                 | Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global       |
| --list-mode                                | List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --version                                  | Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --custommode                               | Choose a custom mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --list-custommode                          | List available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Global       |
| --multiple                                 | Multiple custom mode objects (required by some specific modes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global       |
| --pass-manager                             | Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --verbose                                  | Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --debug                                    | Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --filter-perfdata                          | Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output       |
| --filter-perfdata-adv                      | Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --explode-perfdata-max                     | Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output       |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output       |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output       |
| --change-short-output --change-long-output | Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --change-exit                              | Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output       |
| --filter-uom                               | Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output       |
| --opt-exit                                 | Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --output-ignore-perfdata                   | Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --output-ignore-label                      | Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output       |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output       |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --float-precision                          | Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --source-encoding                          | Set encoding of monitoring sources (In some case. Default: 'UTF-8').      Keysight NVOS API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --port                                     | Port used (Default: 8000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Api          |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Api          |
| --api-username                             | API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --api-password                             | API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --timeout                                  | Set timeout in seconds (Default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --http-peer-addr                           | Set the address you want to connect (Useful if hostname is only a vhost. no ip resolve)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Http global  |
| --proxyurl                                 | Proxy URL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --proxypac                                 | Proxy pac file (can be an url or local file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Http global  |
| --insecure                                 | Insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --http-backend                             | Set the backend used (Default: 'lwp') For curl: --http-backend=curl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Http global  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Backend lwp  |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Backend curl |



#### Modes options

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Option                   | Description                                                                                                                 | Type      |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                  | Retention |
| --redis-server           | Redis server to use (only one server). SYntax: address\[:port\]                                                             | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                     | Retention |
| --redis-db               | Set Redis database index.                                                                                                   | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                        | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                              | Retention |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                         | Retention |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                                          | Retention |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                  | Retention |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                          | Retention |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                               | Retention |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                                   | Retention |
| --filter-name            | Filter dynamic filters by name (can be a regexp).                                                                           | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'traffic-out-prct', 'traffic-out', 'packets-out', 'packets-dropped', 'packets-pass', 'packets-insp'.    | Mode      |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option                        | Description                                                                                                                   | Type |
|:------------------------------|:------------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-temperature-status  | Set unknown threshold for status (Default : '%{status} eq "unknown"'). Can used special variables like: %{status}, %{class}   | Mode |
| --warning-temperature-status  | Set warning threshold for status (Default : '%{status} eq "warn"'). Can used special variables like: %{status}, %{class}      | Mode |
| --critical-temperature-status | Set critical threshold for status (Default: '%{status} eq "hot"'); Can used special variables like: %{status}, %{class}       | Mode |
| --unknown-psu-status          | Set unknown threshold for status. Can used special variables like: %{status}, %{name}                                         | Mode |
| --warning-psu-status          | Set warning threshold for status. Can used special variables like: %{status}, %{name}                                         | Mode |
| --critical-status             | Set critical threshold for status (Default: '%{status} eq "bad"'); Can used special variables like: %{status}, %{name}        | Mode |
| --warning-* --critical-*      | Thresholds. Can be: 'temperature', 'fans-failed'.                                                                             | Mode |

</TabItem>
<TabItem value="Ports" label="Ports">

| Option                    | Description                                                                                                                                                                                   | Type      |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached               | Memcached server to use (only one server).                                                                                                                                                    | Retention |
| --redis-server            | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                               | Retention |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                       | Retention |
| --redis-db                | Set Redis database index.                                                                                                                                                                     | Retention |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                          | Retention |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                | Retention |
| --statefile-dir           | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                           | Retention |
| --statefile-suffix        | Add a suffix for the statefile name (Default: '').                                                                                                                                            | Retention |
| --statefile-concat-cwd    | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                    | Retention |
| --statefile-format        | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                            | Retention |
| --statefile-key           | Key to encrypt/decrypt cache.                                                                                                                                                                 | Retention |
| --statefile-cipher        | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                     | Retention |
| --filter-name             | Filter ports by name (can be a regexp).                                                                                                                                                       | Mode      |
| --unknown-license-status  | Set unknown threshold for status. Can used special variables like: %{status}, %{name}                                                                                                         | Mode      |
| --warning-license-status  | Set warning threshold for status (Default: '%{status} =~ /invalid\_software\_version/'). Can used special variables like: %{status}, %{name}                                                  | Mode      |
| --critical-license-status | Set critical threshold for status. Can used special variables like: %{status}, %{name}                                                                                                        | Mode      |
| --unknown-link-status     | Set unknown threshold for status. Can used special variables like: %{adminStatus}, %{operationalStatus}, %{name}                                                                              | Mode      |
| --warning-link-status     | Set warning threshold for status. Can used special variables like: %{adminStatus}, %{operationalStatus}, %{name}                                                                              | Mode      |
| --critical-link-status    | Set critical threshold for status (Default: '%{adminStatus} eq "enabled" and %{operationalStatus} ne "up"'). Can used special variables like: %{adminStatus}, %{operationalStatus}, %{name}   | Mode      |
| --warning-* --critical-*  | Thresholds. Can be: 'traffic-out-prct', 'traffic-out', 'packets-out', 'packets-dropped', 'packets-pass', 'packets-insp'.                                                                      | Mode      |

</TabItem>
<TabItem value="Time" label="Time">

| Option                | Description                                                                                                                       | Type |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-ntp-status  |                                                                                                                                   | Mode |
| --warning-ntp-status  |                                                                                                                                   | Mode |
| --critical-ntp-status | Set thresholds for status (Default critical: '%{status} !~ /in\_reach\|in\_sync/i')  Can used special variables like: %{status}   | Mode |
| --warning-offset      | Time offset warning threshold (in seconds).                                                                                       | Mode |
| --critical-offset     | Time offset critical Threshold (in seconds).                                                                                      | Mode |
| --ntp-hostname        | Set the ntp hostname (if not set, localtime is used).                                                                             | Mode |
| --ntp-port            | Set the ntp port (Default: 123).                                                                                                  | Mode |
| --timezone            | Override the timezone of distant equipment. Can use format: 'Europe/London' or '+0100'.                                           | Mode |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                                    | Type |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-uptime  | Threshold warning.                                                                                                                                             | Mode |
| --critical-uptime | Threshold critical.                                                                                                                                            | Mode |
| --unit            | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds    | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--mode=dynamic-filters \
    --help
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).