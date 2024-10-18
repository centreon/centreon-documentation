---
id: network-freebox-restapi
title: Freebox RestAPI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Freebox** brings a host template:

* **Net-Freebox-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Freebox-Restapi-custom" label="Net-Freebox-Restapi-custom">

| Service Alias | Service Template                     | Service Description |
|:--------------|:-------------------------------------|:--------------------|
| Dsl-Usage     | Net-Freebox-Dsl-Usage-RESTAPI-custom | Check DSL usage     |
| Net-Usage     | Net-Freebox-Net-Usage-RESTAPI-custom | Check network usage |
| System        | Net-Freebox-System-RESTAPI-custom    | Check system usage  |

> The services listed above are created automatically when the **Net-Freebox-Restapi-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Dsl-Usage" label="Dsl-Usage">

| Metric name | Unit  |
|:------------|:------|
| rate-up     | b/s   |
| rate-down   | b/s   |
| snr-up      | dB    |
| snr-down    | dB    |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Net-Usage" label="Net-Usage">

| Metric name   | Unit  |
|:--------------|:------|
| bw-up         | b/s   |
| bw-down       | b/s   |
| rate-up       | b/s   |
| rate-down     | b/s   |
| vpn-rate-up   | b/s   |
| vpn-rate-down | b/s   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="System" label="System">

| Metric name        | Unit  |
|:-------------------|:------|
| temperature-cpum   | C     |
| temperature-cpub   | C     |
| temperature-switch | C     |
| fan-speed          | rpm   |
| disk-status        | N/A   |
| *wifi*#wifi-status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

You have to authorize the client and generate an app_id and a token to monitor your freebox.

- Call the API endpoint to authorize an application, replacing the values with the desired ones:

`curl http://<freebox_ip>/api/v4/login/authorize -d '{"app_id":"centreon","app_name":"centreon","app_version":"3.0","device_name":"Freebox"}'`

- Validate within the Freebox UI and keep the token safe
- Navigate to http://<freebox_ip>/api/v4/login/authorize/<app_id>
- Check on the webpage that the application is authorized

Keep your <app_id> and obtained token with you as you will need it during the host configuration.

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
dnf install centreon-pack-network-freebox-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-freebox-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-freebox-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-freebox-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Freebox** connector through
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
dnf install centreon-plugin-Network-Freebox-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Freebox-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-freebox-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Freebox-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Freebox-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro               | Description                                                                                          | Default value     | Mandatory   |
|:--------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FREEBOXAPPTOKEN     | Freebox App Token                                                                                    |                   | X           |
| FREEBOXAPPID        | Freebox App ID                                                                                       |                   | X           |
| FREEBOXEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Dsl-Usage" label="Dsl-Usage">

| Macro            | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGRATEDOWN  | Thresholds                                                                                         |                   |             |
| CRITICALRATEDOWN | Thresholds                                                                                         |                   |             |
| WARNINGRATEUP    | Thresholds                                                                                         |                   |             |
| CRITICALRATEUP   | Thresholds                                                                                         |                   |             |
| WARNINGSNRDOWN   | Thresholds                                                                                         |                   |             |
| CRITICALSNRDOWN  | Thresholds                                                                                         |                   |             |
| WARNINGSNRUP     | Thresholds                                                                                         |                   |             |
| CRITICALSNRUP    | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Net-Usage" label="Net-Usage">

| Macro            | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBWDOWN    | Thresholds                                                                                         |                   |             |
| CRITICALBWDOWN   | Thresholds                                                                                         |                   |             |
| WARNINGBWUP      | Thresholds                                                                                         |                   |             |
| CRITICALBWUP     | Thresholds                                                                                         |                   |             |
| WARNINGRATEDOWN  | Thresholds                                                                                         |                   |             |
| CRITICALRATEDOWN | Thresholds                                                                                         |                   |             |
| WARNINGRATEUP    | Thresholds                                                                                         |                   |             |
| CRITICALRATEUP   | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="System" label="System">

| Macro                     | Description                                                                                                                               | Default value              | Mandatory   |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| CRITICALDISKSTATUS        | Set critical threshold for disk status (default: '%{status} =~ /error/i'). You can use the following variables: %{status}                 | %{status} =~ /error/i      |             |
| WARNINGDISKSTATUS         | Set warning threshold for disk status. You can use the following variables: %{status}                                                     |                            |             |
| WARNINGFANSPEED           | Thresholds                                                                                                                                |                            |             |
| CRITICALFANSPEED          | Thresholds                                                                                                                                |                            |             |
| WARNINGTEMPERATURECPUB    | Thresholds                                                                                                                                |                            |             |
| CRITICALTEMPERATURECPUB   | Thresholds                                                                                                                                |                            |             |
| WARNINGTEMPERATURECPUM    | Thresholds                                                                                                                                |                            |             |
| CRITICALTEMPERATURECPUM   | Thresholds                                                                                                                                |                            |             |
| WARNINGTEMPERATURESWITCH  | Thresholds                                                                                                                                |                            |             |
| CRITICALTEMPERATURESWITCH | Thresholds                                                                                                                                |                            |             |
| WARNINGWIFISTATUS         | Set warning threshold for wifi status (default: '%{status} =~ /bad\_param/i'). You can use the following variables: %{status}, %{display} | %{status} =~ /bad\_param/i |             |
| CRITICALWIFISTATUS        | Set critical threshold for wifi status (default: '%{status} =~ /failed/i'). You can use the following variables: %{status}, %{display}    | %{status} =~ /failed/i     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                        | --verbose                  |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_freebox_restapi.pl \
	--plugin=network::freebox::restapi::plugin \
	--mode=net-usage \
	--hostname='10.0.0.1' \
	--freebox-app-id='' \
	--freebox-app-token=''  \
	--warning-rate-up='' \
	--critical-rate-up='' \
	--warning-rate-down='' \
	--critical-rate-down='' \
	--warning-bw-up='' \
	--critical-bw-up='' \
	--warning-bw-down='' \
	--critical-bw-down=''
```

The expected command output is shown below:

```bash
OK: Upload available bandwidth : 79 79/s Download available bandwidth : 60 60/s Upload rate : 78 78/s Download rate : 30 30/s Vpn client upload rate : 68 68/s Vpn client download rate : 26 26/s | 'bw-up'=79b/s;;;0;'bw-down'=60b/s;;;0;'rate-up'=78b/s;;;0;'rate-down'=30b/s;;;0;'vpn-rate-up'=68b/s;;;0;'vpn-rate-down'=26b/s;;;0;
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
/usr/lib/centreon/plugins/centreon_freebox_restapi.pl \
	--plugin=network::freebox::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                       | Linked service template              |
|:---------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|
| dsl-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/freebox/restapi/mode/dslusage.pm)] | Net-Freebox-Dsl-Usage-RESTAPI-custom |
| net-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/freebox/restapi/mode/netusage.pm)] | Net-Freebox-Net-Usage-RESTAPI-custom |
| system [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/freebox/restapi/mode/system.pm)]      | Net-Freebox-System-RESTAPI-custom    |

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
| --hostname                                 | Freebox hostname (default: 'mafreebox.free.fr').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --freebox-app-id                           | Freebox App ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --freebox-app-token                        | Freebox App Token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --freebox-api-version                      | Freebox API version (default: 'v4').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --timeout                                  | Set HTTP timeout in seconds (default: '10').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --resolution                               | Selected data performance resolution in seconds (default: '300').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Dsl-Usage" label="Dsl-Usage">

| Option                   | Description                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^rate-up$'   |
| --warning-* --critical-* | Thresholds. Can be: 'rate-up', 'rate-down', 'snr-up', 'snr-down'.                         |

</TabItem>
<TabItem value="Net-Usage" label="Net-Usage">

| Option                   | Description                                                                                        |
|:-------------------------|:---------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^bw-up$'              |
| --warning-* --critical-* | Thresholds. Can be: 'bw-up', 'bw-down', 'rate-up', 'rate-down', 'vpn-rate-up', 'vpn-rate-down'.    |

</TabItem>
<TabItem value="System" label="System">

| Option                   | Description                                                                                                                                 |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^temperature-cpum$'                                            |
| --warning-wifi-status    | Set warning threshold for wifi status (default: '%{status} =~ /bad\_param/i'). You can use the following variables: %{status}, %{display}   |
| --critical-wifi-status   | Set critical threshold for wifi status (default: '%{status} =~ /failed/i'). You can use the following variables: %{status}, %{display}      |
| --warning-disk-status    | Set warning threshold for disk status. You can use the following variables: %{status}                                                       |
| --critical-disk-status   | Set critical threshold for disk status (default: '%{status} =~ /error/i'). You can use the following variables: %{status}                   |
| --warning-* --critical-* | Thresholds. Can be: 'temperature-cpum', 'temperature-cpub', 'temperature-switch', 'fan-speed'.                                              |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_freebox_restapi.pl \
	--plugin=network::freebox::restapi::plugin \
	--mode=net-usage \
	--help
```
