---
id: applications-protocol-snmp
title: SNMP Protocol
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Monitoring Connector **Generic SNMP** brings 2 host templates:

* App-Protocol-SNMP
* App-Protocol-SNMP-Only

The connector brings the following service templates (sorted by host template):

<Tabs groupId="sync">
<TabItem value="App-Protocol-SNMP" label="App-Protocol-SNMP">

| Service Alias | Service Template  | Service Description |
|:--------------|:------------------|:--------------------|
| N/A           | N/A               | N/A                 |

</TabItem>
<TabItem value="App-Protocol-SNMP-Only" label="App-Protocol-SNMP-Only">

| Service Alias | Service Template  | Service Description |
|:--------------|:------------------|:--------------------|
| N/A           | N/A               | N/A                 |

</TabItem>
<TabItem value="No host template" label="No host template">

| Service Alias | Service Template                | Service Description                                    |
|:--------------|:--------------------------------|:-------------------------------------------------------|
| Generic-Value | App-Protocol-SNMP-Numeric-Value | Check allowing to retrieve a digital value from an OID |
| Generic-Value | App-Protocol-SNMP-String-Value  | Check allowing to retrieve a string value from an OID  |
| Uptime        | App-Protocol-SNMP-Uptime        | Check equipment uptime using standard OID              |

> These services are not automatically created when the host template is applied.

</TabItem>
</Tabs>

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Rule name                    | Description                                                  |
|:-----------------------------|:-------------------------------------------------------------|
| SNMP Agents                  | Discover hosts by requesting their SNMP agents               |
| SNMP v3 Agents               | Discover hosts by requesting their SNMP agents using SNMP v3 |
| SNMP IP Addresses (RFC 4293) | Discover IP addresses by requesting a SNMP agent (RFC 4293)  |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

</TabItem>
<TabItem value="Service" label="Service">

| Rule name                         | Description |
|:----------------------------------|:------------|
| App-Protocol-SNMP-Collection-Name |             |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>


### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Generic-Value" label="Generic-Value">

Coming soon

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

> The **--use-new-perfdata** option is necessary to get the new metric format (in the **EXTRAOPTIONS** service macro).

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your ressource.
Please refer to the official documentation of your equipement.

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

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
dnf install centreon-pack-applications-protocol-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

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

Whatever the license type (*online* or *offline*), install the **Generic SNMP** Pack through
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
dnf install centreon-plugin-Applications-Protocol-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Protocol-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-protocol-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

<Tabs groupId="sync">
<TabItem value="App-Protocol-SNMP" label="App-Protocol-SNMP">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Protocol-SNMP-custom** template to the host.

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

</TabItem>
<TabItem value="App-Protocol-SNMP-Only" label="App-Protocol-SNMP-Only">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Protocol-SNMP-Only-custom** template to the host.

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

</TabItem>
</Tabs>


### Service 

Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

<Tabs groupId="sync">
<TabItem value="Generic-Value" label="Generic-Value">

| Mandatory   | Macro          | Description                                                                     | Default                       |
|:------------|:---------------|:--------------------------------------------------------------------------------|:------------------------------|
|             | FORMATOK       |                                                                                 | %{filter_rows} value(s)       |
|             | FORMATUNKNOWN  |                                                                                 | value(s): %{details_unknown}  |
|             | OID            |                                                                                 |                               |
|             | WARNING        | Return Warning if an oid value match the regexp                                 |                               |
|             | CRITICAL       | Return Critical if an oid value match the regexp                                |                               |
|             | FORMATWARNING  |                                                                                 | value(s): %{details_warning}  |
|             | FORMATCRITICAL |                                                                                 | value(s): %{details_critical} |
|             | EXTRAOPTIONS   | Any extra option you may want to add to the command line (eg. a --verbose flag) |                               |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Mandatory   | Macro        | Description                                                                     | Default |
|:------------|:-------------|:--------------------------------------------------------------------------------|:--------|
|             | WARNING      | Threshold warning                                                               |         |
|             | CRITICAL     | Threshold critical                                                              |         |
|             | EXTRAOPTIONS | Any extra option you may want to add to the command line (eg. a --verbose flag) |         |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

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

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_generic_snmp.pl \
	--plugin=apps::protocols::snmp::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode            | Linked service template         |
|:----------------|:--------------------------------|
| collection      | Not used in this Plugin Pack    |
| discovery       | Used for host discovery         |
| dynamic-command | Not used in this Plugin Pack    |
| numeric-value   | App-Protocol-SNMP-Numeric-Value |
| response-time   | Not used in this Plugin Pack    |
| string-value    | App-Protocol-SNMP-String-Value  |
| uptime          | App-Protocol-SNMP-Uptime        |



### Available options

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global |
| --dyn-mode                                 | Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global |
| --list-mode                                | List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global |
| --version                                  | Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --pass-manager                             | Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --verbose                                  | Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --filter-perfdata-adv                      | Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --explode-perfdata-max                     | Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output |
| --change-short-output --change-long-output | Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --change-exit                              | Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output |
| --filter-uom                               | Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --opt-exit                                 | Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --output-ignore-perfdata                   | Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --output-ignore-label                      | Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --float-precision                          | Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --source-encoding                          | Set encoding of monitoring sources (In some case. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --hostname                                 | Hostname to query (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | SNMP   |
| --snmp-community                           | Read community (defaults to public).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-version                             | Version: 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-port                                | Port (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-timeout                             | Timeout in secondes (default: 1) before retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-retries                             | Set the number of retries (default: 5) before failure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | SNMP   |
| --subsetleef                               | How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP   |
| --snmp-autoreduce                          | Auto reduce SNMP request size in case of SNMP errors (By default, the divisor is 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-force-getnext                       | Use snmp getnext function (even in snmp v2c and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-username                            | Security name (only for SNMP v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | SNMP   |
| --authpassphrase                           | Authentication protocol pass phrase.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --authprotocol                             | Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP   |
| --privpassphrase                           | Privacy protocol pass phrase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP   |
| --privprotocol                             | Privacy protocol: DES\|AES. Since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | SNMP   |
| --contextname                              | Context name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP   |
| --contextengineid                          | Context engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | SNMP   |
| --securityengineid                         | Security engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | SNMP   |
| --snmp-errors-exit                         | Exit code for SNMP Errors (default: unknown)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP   |
| --snmp-tls-transport                       | TLS Transport communication used (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --snmp-tls-our-identity                    | Our X.509 identity to use, which should either be a fingerprint or the filename that holds the certificate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | SNMP   |
| --snmp-tls-their-identity                  | The remote server's identity to connect to, specified as either a fingerprint or a file name. Either this must be specified, or the hostname below along with a trust anchor.                                                                                                                                                                                                                                                                                                                                                                                              | SNMP   |
| --snmp-tls-their-hostname                  | The remote server's hostname that is expected. If their certificate was signed by a CA then their hostname presented in the certificate must match this value or the connection fails to be established (to avoid man-in-the-middle attacks).                                                                                                                                                                                                                                                                                                                              | SNMP   |
| --snmp-tls-trust-cert                      | A trusted certificate to use as trust anchor (like a CA certificate) for verifying a remote server's certificate. If a CA certificate is used to validate a certificate then the TheirHostname parameter must also be specified to ensure their presented hostname in the certificate matches.                                                                                                                                                                                                                                                                             | SNMP   |



#### Modes options

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Generic-Value" label="Generic-Value">

| Option                  | Description                                                                                                                                                                                                                                                                                                                                                                         | Type |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --oid or <--oid-leef>   | OID value to check (numeric format only).                                                                                                                                                                                                                                                                                                                                           | Mode |
| --oid-table             | OID table value to check (numeric format only).                                                                                                                                                                                                                                                                                                                                     | Mode |
| --oid-instance          | OID table value for the instance (numeric format only). Can be used to have human readable instance name.                                                                                                                                                                                                                                                                           | Mode |
| --filter-table-value    | Filter value from --oid-table option (can be a regexp).                                                                                                                                                                                                                                                                                                                             | Mode |
| --filter-table-instance | Filter instance from --oid-table option (can be a regexp).                                                                                                                                                                                                                                                                                                                          | Mode |
| --warning-regexp        | Return Warning if an oid value match the regexp.                                                                                                                                                                                                                                                                                                                                    | Mode |
| --critical-regexp       | Return Critical if an oid value match the regexp.                                                                                                                                                                                                                                                                                                                                   | Mode |
| --regexp-isensitive     | Allows to use regexp non case-sensitive.                                                                                                                                                                                                                                                                                                                                            | Mode |
| --format-*              | Output format according the threshold. Can be: 'ok' (default: '%{filter\_rows} value(s)'), 'warning' (default: 'value(s): %{details\_warning}'), 'critical' (default: 'value(s): %{details\_critical}'), 'unknown' (default: 'value(s): %{details\_unknown}'). Can used: %{rows}, %{filter\_rows}, %{details\_warning}, %{details\_ok}, %{details\_critical}, %{details\_unknown}   | Mode |
| --map-values            | Use to transform an integer value in most common case. Example: --map-values='1=\>ok,10=\>fan failed,11=\>psu recovery'                                                                                                                                                                                                                                                             | Mode |
| --map-value-other       | Use to transform an integer value not defined in --map-values option.                                                                                                                                                                                                                                                                                                               | Mode |
| --map-values-separator  | Separator uses between values (default: coma).                                                                                                                                                                                                                                                                                                                                      | Mode |
| --convert-custom-values | Custom code to convert values. Example to convert octetstring to macaddress: --convert-custom-values='join(":", unpack("(H2)*", $value))'                                                                                                                                                                                                                                           | Mode |
| --use-perl-mod          | Load additional Perl module (Can be multiple) Example : --use-perl-mod='Date::Parse'                                                                                                                                                                                                                                                                                                | Mode |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                 | Description                                                                                                                                                    | Type      |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                                                                     | Retention |
| --redis-server         | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                        | Retention |
| --redis-db             | Set Redis database index.                                                                                                                                      | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                           | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                 | Retention |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                            | Retention |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                                                                             | Retention |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                     | Retention |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                             | Retention |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                                                                  | Retention |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                                                                      | Retention |
| --warning-uptime       | Threshold warning.                                                                                                                                             | Mode      |
| --critical-uptime      | Threshold critical.                                                                                                                                            | Mode      |
| --add-sysdesc          | Display system description.                                                                                                                                    | Mode      |
| --force-oid            | Can choose your oid (numeric format only).                                                                                                                     | Mode      |
| --check-overload       | Uptime counter limit is 4294967296 and overflow. With that option, we manage the counter going back. But there is a few chance we can miss a reboot.           | Mode      |
| --reboot-window        | To be used with check-overload option. Time in milliseconds (Default: 5000) You increase the chance of not missing a reboot if you decrease that value.        | Mode      |
| --unit                 | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds    | Mode      |

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

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.