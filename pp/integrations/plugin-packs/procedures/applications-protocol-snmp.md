---
id: applications-protocol-snmp
title: Generic SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Generic SNMP** brings 2 host templates:

* **App-Protocol-SNMP-custom**
* **App-Protocol-SNMP-Only-custom**


<Tabs groupId="sync">
<TabItem value="App-Protocol-SNMP-custom" label="App-Protocol-SNMP-custom">

This host template does not bring any service template.

</TabItem>
<TabItem value="App-Protocol-SNMP-Only-custom" label="App-Protocol-SNMP-Only-custom">

This host template does not bring any service template but its host check command is based on an SNMP uptime check, thus valid even when the ICMP protocol is blocked.

</TabItem>
<TabItem value="No host template" label="No host template">

| Service Alias | Service Template                       | Service Description                                    |
|:--------------|:---------------------------------------|:-------------------------------------------------------|
| Generic-Value | App-Protocol-SNMP-Numeric-Value-custom | Check allowing to retrieve a digital value from an OID |
| Generic-Value | App-Protocol-SNMP-String-Value-custom  | Check allowing to retrieve a string value from an OID  |
| Uptime        | App-Protocol-SNMP-Uptime-custom        | Check equipment uptime using standard OID              |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/onprem/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Rule name                    | Description                                                  |
|:-----------------------------|:-------------------------------------------------------------|
| SNMP Agents                  | Discover hosts by requesting their SNMP agents               |
| SNMP v3 Agents               | Discover hosts by requesting their SNMP agents using SNMP v3 |
| SNMP IP Addresses (RFC 4293) | Discover IP addresses by requesting a SNMP agent (RFC 4293)  |

More information about discovering hosts automatically is available on the [dedicated page](/onprem/monitoring/discovery/hosts-discovery).

</TabItem>
<TabItem value="Service" label="Service">

#### Service discovery

| Rule name                         | Description |
|:----------------------------------|:------------|
| App-Protocol-SNMP-Collection-Name |             |

More information about discovering services automatically is available on the [dedicated page](/onprem/monitoring/discovery/services-discovery)
and in the [following chapter](/onprem/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Numeric-Value" label="Numeric-Value">

For this specific mode, the names of the metrics depend on the configuration made by the user.

</TabItem>
<TabItem value="String-Value" label="String-Value">

No metrics

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your ressource.
Please refer to the official documentation of your equipement.

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
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
dnf install centreon-pack-applications-protocol-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-protocol-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Generic SNMP** connector through
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
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Protocol-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Protocol-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-protocol-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="App-Protocol-SNMP-custom" label="App-Protocol-SNMP-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Protocol-SNMP-custom** template to the host.

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

</TabItem>
<TabItem value="App-Protocol-SNMP-Only-custom" label="App-Protocol-SNMP-Only-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Protocol-SNMP-Only-custom** template to the host.

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/onprem/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Numeric-Value" label="Numeric-Value">

| Macro        | Description                                                                                         | Default value       | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| FORMAT       | Output format (Default: 'current value is %s')                                                      | current value is %s |             |
| OID          | OID value to check (numeric format only)                                                            |                     |             |
| WARNING      | Warning threshold                                                                                   |                     |             |
| CRITICAL     | Critical threshold                                                                                  |                     |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                     |             |

</TabItem>
<TabItem value="String-Value" label="String-Value">

| Macro          | Description                                                                                                                                                                                                                                                                                                                                                                                | Default value                  | Mandatory   |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|:-----------:|
| FORMATOK       | Output format according to the threshold. : '%{filter\_rows} value(s)'), 'warning' (default: 'value(s): %{details\_warning}'), 'critical' (default: 'value(s): %{details\_critical}'), 'unknown' (default: 'value(s): %{details\_unknown}'). You can use the following variables: %{rows}, %{filter\_rows}, %{details\_warning}, %{details\_ok}, %{details\_critical}, %{details\_unknown} | %{filter\_rows} value(s)       |             |
| FORMATUNKNOWN  | Output format according to the threshold. : '%{filter\_rows} value(s)'), 'warning' (default: 'value(s): %{details\_warning}'), 'critical' (default: 'value(s): %{details\_critical}'), 'unknown' (default: 'value(s): %{details\_unknown}'). You can use the following variables: %{rows}, %{filter\_rows}, %{details\_warning}, %{details\_ok}, %{details\_critical}, %{details\_unknown} | value(s): %{details\_unknown}  |             |
| OID            | OID value to check (numeric format only)                                                                                                                                                                                                                                                                                                                                                                                           |                                |             |
| WARNING        | Return Warning if an oid value match the regexp                                                                                                                                                                                                                                                                                                                                            |                                |             |
| CRITICAL       | Return Critical if an oid value match the regexp                                                                                                                                                                                                                                                                                                                                           |                                |             |
| FORMATWARNING  | Output format according to the threshold. : '%{filter\_rows} value(s)'), 'warning' (default: 'value(s): %{details\_warning}'), 'critical' (default: 'value(s): %{details\_critical}'), 'unknown' (default: 'value(s): %{details\_unknown}'). You can use the following variables: %{rows}, %{filter\_rows}, %{details\_warning}, %{details\_ok}, %{details\_critical}, %{details\_unknown} | value(s): %{details\_warning}  |             |
| FORMATCRITICAL | Output format according to the threshold. : '%{filter\_rows} value(s)'), 'warning' (default: 'value(s): %{details\_warning}'), 'critical' (default: 'value(s): %{details\_critical}'), 'unknown' (default: 'value(s): %{details\_unknown}'). You can use the following variables: %{rows}, %{filter\_rows}, %{details\_warning}, %{details\_ok}, %{details\_critical}, %{details\_unknown} | value(s): %{details\_critical} |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                                                                                                                                                                        |                                |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                   |                   |             |
| CRITICAL     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_generic_snmp.pl \
    --plugin=apps::protocols::snmp::plugin \
	--mode=uptime \
	--hostname=10.0.0.1 \
	--snmp-community='my-snmp-community' \
	--snmp-version=2c  \

```

The expected command output is shown below:

```bash
OK: System uptime is: 3m 25s | 'uptime'=205s;;;0;
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
/usr/lib/centreon/plugins//centreon_generic_snmp.pl \
	--plugin=apps::protocols::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                | Linked service template             |
|:--------------------|:---------------------------------------|
| cache               | Not used in this Monitoring Connector  |
| collection          | Not used in this Monitoring Connector  |
| discovery           | Used for host discovery                |
| dynamic-command     | Not used in this Monitoring Connector  |
| numeric-value       | App-Protocol-SNMP-Numeric-Value-custom |
| response-time       | Not used in this Monitoring Connector  |
| string-value        | App-Protocol-SNMP-String-Value-custom  |
| uptime              | App-Protocol-SNMP-Uptime-custom        |

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
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-force-getnext                       | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Numeric-Value" label="Numeric-Value">

| Option                 | Description                                                                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                                                                   |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                 |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                          |
| --oid                  | OID value to check (numeric format only).                                                                                                                                                                                                                                                   |
| --warning              | Warning threshold.                                                                                                                                                                                                                                                                          |
| --critical             | Critical threshold.                                                                                                                                                                                                                                                                         |
| --oid-type             | Type of the OID (Default: 'gauge'). Can be 'counter' also. 'counter' will use a retention file.                                                                                                                                                                                             |
| --counter-per-seconds  | Convert counter value on a value per seconds (only with type 'counter').                                                                                                                                                                                                                    |
| --extracted-pattern    | Set pattern to extracted a number.                                                                                                                                                                                                                                                          |
| --format               | Output format (Default: 'current value is %s')                                                                                                                                                                                                                                              |
| --format-custom        | Apply a custom change on the value (Example to multiply the value: --format-custom='* 8').                                                                                                                                                                                                  |
| --format-scale         | Scale bytes value. We'll display value in output.                                                                                                                                                                                                                                           |
| --format-scale-type    | Could be 'network' (value divide by 1000) or 'other' (divide by 1024) (Default: 'other')  Output format (Default: 'current value is %s')                                                                                                                                                    |
| --perfdata-unit        | Perfdata unit in perfdata output (Default: '')                                                                                                                                                                                                                                              |
| --perfdata-name        | Perfdata name in perfdata output (Default: 'value')                                                                                                                                                                                                                                         |
| --perfdata-min         | Minimum value to add in perfdata output (Default: '')                                                                                                                                                                                                                                       |
| --perfdata-max         | Maximum value to add in perfdata output (Default: '')                                                                                                                                                                                                                                       |
| --config-json          | JSON format to configure the mode. Can check multiple OID. Example: --config-json='\[ { "oid": ".1.3.6.1.2.1.1.3.0", "perfdata\_name": "oid1", "format": "current oid1 value is %s"}, { "oid": ".1.3.6.1.2.1.1.3.2", "perfdata\_name": "oid2", "format": "current oid2 value is %s"} \]'    |

</TabItem>
<TabItem value="String-Value" label="String-Value">

| Option                  | Description                                                                                                                                                                                                                                                                                                                                                                                                       |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --oid or <--oid-leef>   | OID value to check (numeric format only).                                                                                                                                                                                                                                                                                                                                                                         |
| --oid-table             | OID table value to check (numeric format only).                                                                                                                                                                                                                                                                                                                                                                   |
| --oid-instance          | OID table value for the instance (numeric format only). Can be used to have human readable instance name.                                                                                                                                                                                                                                                                                                         |
| --filter-table-value    | Filter value from --oid-table option (can be a regexp).                                                                                                                                                                                                                                                                                                                                                           |
| --filter-table-instance | Filter instance from --oid-table option (can be a regexp).                                                                                                                                                                                                                                                                                                                                                        |
| --warning-regexp        | Return Warning if an oid value match the regexp.                                                                                                                                                                                                                                                                                                                                                                  |
| --critical-regexp       | Return Critical if an oid value match the regexp.                                                                                                                                                                                                                                                                                                                                                                 |
| --regexp-isensitive     | Allows to use regexp non case-sensitive.                                                                                                                                                                                                                                                                                                                                                                          |
| --format-*              | Output format according to the threshold. Can be: 'ok' (default: '%{filter\_rows} value(s)'), 'warning' (default: 'value(s): %{details\_warning}'), 'critical' (default: 'value(s): %{details\_critical}'), 'unknown' (default: 'value(s): %{details\_unknown}'). You can use the following variables: %{rows}, %{filter\_rows}, %{details\_warning}, %{details\_ok}, %{details\_critical}, %{details\_unknown}   |
| --map-values            | Use to transform an integer value in most common case. Example: --map-values='1=\>ok,10=\>fan failed,11=\>psu recovery'                                                                                                                                                                                                                                                                                           |
| --map-value-other       | Use to transform an integer value not defined in --map-values option.                                                                                                                                                                                                                                                                                                                                             |
| --map-values-separator  | Separator uses between values (default: coma).                                                                                                                                                                                                                                                                                                                                                                    |
| --convert-custom-values | Custom code to convert values. Example to convert octetstring to macaddress: --convert-custom-values='join(":", unpack("(H2)*", $value))'                                                                                                                                                                                                                                                                         |
| --use-perl-mod          | Load additional Perl module (can be defined multiple times) Example : --use-perl-mod='Date::Parse'                                                                                                                                                                                                                                                                                                                |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
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
| --warning-uptime       | Warning threshold.                                                                                                                                                                                                                            |
| --critical-uptime      | Critical threshold.                                                                                                                                                                                                                           |
| --add-sysdesc          | Display system description.                                                                                                                                                                                                                   |
| --force-oid            | Can choose your oid (numeric format only).                                                                                                                                                                                                    |
| --check-overload       | Uptime counter limit is 4294967296 and overflow. With that option, we manage the counter going back. But there is a few chance we can miss a reboot.                                                                                          |
| --reboot-window        | To be used with check-overload option. Time in milliseconds (Default: 5000) You increase the chance of not missing a reboot if you decrease that value.                                                                                       |
| --unit                 | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds                                                                                   |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_generic_snmp.pl \
	--plugin=apps::protocols::snmp::plugin \
	--mode=numeric-value \
	--help
```
