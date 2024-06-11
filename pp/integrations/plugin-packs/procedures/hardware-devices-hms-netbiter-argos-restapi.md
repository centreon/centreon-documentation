---
id: hardware-devices-hms-netbiter-argos-restapi
title: HMS Netbiter Argos RestAPI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **HMS Netbiter Argos RestAPI** brings a host template:

* HW-Device-Hms-Netbiter-Argos-Restapi-custom

It brings the following service templates:

| Service Alias  | Service Template                                    | Service Description   | Default | Discovery  |
|:---------------|:----------------------------------------------------|:----------------------|:--------|:-----------|
| Alarms         | HW-Device-Hms-Netbiter-Argos-Alarms-Restapi         | Check system's alarms | X       |            |
| Sensors-Global | HW-Device-Hms-Netbiter-Argos-Sensors-Global-Restapi | Check sensors         |         | X          |

> **Default** services are automatically created when the host template is applied.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Rule Name                      | Description                                            |
|:-------------------------------|:-------------------------------------------------------|
| Netbiter Argos RestAPI Systems | Discover HMS/Ewon Netbiter Systems using Argos RestAPI |

> More information about discovering hosts automatically is available on the [dedicated page](/onprem/monitoring/discovery/hosts-discovery).

</TabItem>
<TabItem value="Service" label="Service">

| Rule Name                                        | Description                        |
|:-------------------------------------------------|:-----------------------------------|
| HW-Device-Hms-Netbiter-Argos-Restapi-Sensor-Name | Discover HMS/Ewon Netbiter Sensors |

> More information about discovering services automatically is available on the [dedicated page](/onprem/monitoring/discovery/services-discovery)
and in the [following chapter](/onprem/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Metric Name            | Unit  |
|:-----------------------|:------|
| alarm.duration.seconds | s     |
| alarms.total.count     | count |
| alarm-active           | N/A   |
| alarm-acked            | N/A   |
| alarm-severity         | N/A   |

</TabItem>
<TabItem value="Sensors-Global" label="Sensors-Global">

| Metric Name          | Unit  |
|:---------------------|:------|
| sensor.reading.count | count |

</TabItem>
</Tabs>

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-devices-hms-netbiter-argos-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-devices-hms-netbiter-argos-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-devices-hms-netbiter-argos-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-devices-hms-netbiter-argos-restapi
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **HMS Netbiter Argos RestAPI** Pack through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/onprem/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Devices-Hms-Netbiter-Argos-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Hardware-Devices-Hms-Netbiter-Argos-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Devices-Hms-Netbiter-Argos-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-devices-hms-netbiter-argos-restapi
```

</TabItem>
</Tabs>

## Configuration

### Host

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name** & **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Set the Netbiter API FQDN (generally *api.netbiter.net*) as **IP Address/DNS**.
4. Apply the **HW-Device-Hms-Netbiter-Argos-Restapi-custom-custom** template to the host
5. Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Macro        | Description                                                                              | Default |
|:----------|:-------------|:-----------------------------------------------------------------------------------------|:--------|
|           | APIACCESSKEY | For Access Key "direct" authentication method. Example: --access-key='ABCDEFG1234567890' |         |
|           | APIPASSWORD  | For Username/Password authentication method. Must be used with --api-password option     |         |
| X         | APIPORT      | Port used                                                                                | 443     |
| X         | APIPROTO     | Specify https if needed                                                                  | https   |
|           | APIUSERNAME  | For Username/Password authentication method. Must be used with --api-password option     |         |
|           | PROXYURL     | Proxy URL                                                                                |         |
| X         | SYSTEMID     | Set the Netbiter Argos System ID                                                         |         |
|           | EXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag)        |         |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_hms_netbiter_argos_restapi.pl \
    --plugin=hardware::devices::hms::netbiter::argos::restapi::plugin \
    --mode=alarms \
    --hostname='api.netbiter.net' \
    --port='443' \
    --proto='https' \
    --proxyurl='' \
    --access-key='ABCDEFG1234567890' \
    --system-id='XYZ123'  \
    --warning-alarms-total='1' \
    --critical-alarms-total='2'
```

The expected command output is shown below:

```bash
OK: Alarms: total current: 0 | 'alarms.total.count'=0;;;0 ;;;;;
```

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_hms_netbiter_argos_restapi.pl \
    --plugin=hardware::devices::hms::netbiter::argos::restapi::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode         | Linked service template                             |
|:-------------|:----------------------------------------------------|
| alarms       | HW-Device-Hms-Netbiter-Argos-Alarms-Restapi         |
| discovery    | Not used in this Plugin Pack                        |
| list-sensors | Used for service discovery                          |
| sensors      | HW-Device-Hms-Netbiter-Argos-Sensors-Global-Restapi |



### Available options

#### Global options

All global options are listed here:

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
| --source-encoding                          | Set encoding of monitoring sources (In some case. Default: 'UTF-8').      Netbiter Argos RestAPI                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --hostname                                 | Argos API hostname (Default: api.netbiter.net).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Api          |
| --port                                     | Port used (Default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Api          |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Api          |
| --api-endpoint                             | Argos API requests endpoint (Default: '/operation/v1/rest/json')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Api          |
| --access-key                               | For Access Key "direct" authentication method. Example: --access-key='ABCDEFG1234567890'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Api          |
| --api-username                             | For Username/Password authentication method. Must be used with --api-password option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --api-password                             | For Username/Password authentication method. Must be used with --api-username option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --timeout                                  | Set timeout in seconds (Default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --http-peer-addr                           | Set the address you want to connect (Useful if hostname is only a vhost. no ip resolve)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Http global  |
| --proxyurl                                 | Proxy URL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --proxypac                                 | Proxy pac file (can be an url or local file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Http global  |
| --insecure                                 | Insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --http-backend                             | Set the backend used (Default: 'lwp') For curl: --http-backend=curl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Http global  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Backend lwp  |
| --ssl                                      | Set SSL version (=TLSv1).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Backend lwp  |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Backend curl |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Retention    |
| --redis-server                             | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Retention    |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Retention    |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention    |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention    |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Retention    |
| --statefile-dir                            | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Retention    |
| --statefile-suffix                         | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Retention    |
| --statefile-concat-cwd                     | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Retention    |
| --statefile-format                         | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Retention    |
| --statefile-key                            | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Retention    |
| --statefile-cipher                         | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention    |



#### Modes options

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Option                    | Description                                                                                                                                                                                                                                    | Type |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-active | Only show active alarms.                                                                                                                                                | Mode |
| --system-id               | Set the Netbiter Argos System ID (Mandatory).                                                                                                                                                                                                  | Mode |
| --filter-acked            | Hide acknowledged alarms.                                                                                                                                                                                                                      | Mode |
| --filter-active           | Only show active alarms.                                                                                                                                                                                                                       | Mode |
| --filter-severity         | Only show alarms with a given severity level. Can be: 'critical', 'major', 'minor', 'warning', 'cleared'. Only one value can be set (no multiple values).                                                                                      | Mode |
| --warning-active-status   | Set warning threshold for active status (Default: ''). Typical syntax: --warning-active-status='%{active} =~ "true"'                                                                                                                           | Mode |
| --critical-active-status  | Set critical threshold for active status (Default: '%{active} =~ "true"'). Typical syntax: --critical-active-status='%{active} =~ "true"'                                                                                                      | Mode |
| --warning-acked-status    | Set warning threshold for acked status (Default: '%{acked} =~ "false"'). Typical syntax: --warning-acked-status='%{acked} =~ "false"'                                                                                                          | Mode |
| --critical-acked-status   | Set critical threshold for acked status (Default: ''). Typical syntax: --critical-acked-status='%{acked} =~ "false"'                                                                                                                           | Mode |
| --warning-* --critical-*  | Thresholds. Can be: 'warning-alarms-total' (count) 'critical-alarms-total' (count), 'warning-alarm-duration' (s), 'critical-alarm-duration' (s), 'warning-alarm-severity' (level from 0 to 5), critical-alarm-severity (level from 0 to 5).    | Mode |

</TabItem>
<TabItem value="Sensors-Global" label="Sensors-Global">

| Option                  | Description                                                                                     | Type |
|:------------------------|:------------------------------------------------------------------------------------------------|:-----|
| --filter-name           | Filter by sensor name (Regexp can be used). Example: --filter-name='^temperature\_(in\|out)$'   | Mode |
| --system-id             | Set the Netbiter Argos System ID (Mandatory).                                                   | Mode |
| --filter-id             | Filter by sensor ID (Regexp can be used). Example: --filter-id='^1234.5678$'                    | Mode |
| --filter-device         | Filter by device name (Regexp can be used). Example: --filter-device='^ZONE(1\|2)$'             | Mode |
| --warning-sensor-value  | Warning threshold.                                                                              | Mode |
| --critical-sensor-value | Critical threshold.                                                                             | Mode |

</TabItem>
</Tabs>


All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_hms_netbiter_argos_restapi.pl \
    --plugin=hardware::devices::hms::netbiter::argos::restapi::plugin \
    --mode=alarms \
    --help
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).