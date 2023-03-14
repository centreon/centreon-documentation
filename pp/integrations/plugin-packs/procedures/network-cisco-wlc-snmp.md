---
id: network-cisco-wlc-snmp
title: Cisco WLC
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Plugin Pack **Cisco WLC** brings a host template:

* Net-Cisco-Wlc-SNMP-custom

It brings the following service templates:

| Service Alias                  | Service Template                                  | Service Description                              | Default | Discovery |
|:-------------------------------|:--------------------------------------------------|:-------------------------------------------------|:--------|:----------|
| Ap-Channel-Interference-Global | Net-Cisco-Wlc-Ap-Channel-Interference-Global-SNMP | Check channel interferences on all access points |         |           |
| Ap-Channel-Noise-Global        | Net-Cisco-Wlc-Ap-Channel-Noise-Global-SNMP        | Check channel noises on all access points        |         |           |
| Ap-Status-Global               | Net-Cisco-Wlc-Ap-Status-Global-SNMP               | Check status of all access points                | X       | X         |
| Ap-Users                       | Net-Cisco-Wlc-Ap-Users-SNMP                       | Check total users on all access points           |         |           |
| Cpu                            | Net-Cisco-Wlc-Cpu-SNMP                            | Check CPU usage                                  | X       |           |
| Hardware-Global                | Net-Cisco-Wlc-Hardware-Global-SNMP                | Check all hardware                               | X       |           |
| Memory                         | Net-Cisco-Wlc-Memory-SNMP                         | Check the rate of the utilization of memory      | X       |           |
| Traffic-Generic-Id             | Net-Cisco-Wlc-Traffic-Generic-Id-SNMP             | Check traffic on a network interface            |         |           |
| Traffic-Generic-Name           | Net-Cisco-Wlc-Traffic-Generic-Name-SNMP           | Check traffic on a network interface            |         |           |
| Traffic-Global                 | Net-Cisco-Wlc-Traffic-Global-SNMP                 | Check traffic on multiple network interfaces     |         | X         |

> **Default** services are automatically created when the host template is applied.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

### Discovery rules

| Rule Name                       | Description                                                   |
|:--------------------------------|:--------------------------------------------------------------|
| Net-Cisco-Wlc-SNMP-Traffic-Name | Discover network interfaces and monitor bandwidth utilization |
| Net-Cisco-Wlc-SNMP-AP-Name      |                                                               |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Ap-Channel-Interference-*" label="Ap-Channel-Interference-*">

| Metric Name                                                 | Unit  |
|:------------------------------------------------------------|:------|
| ap~channels#accesspoint.interference.power.count            | count |
| ap~channels#accesspoint.interference.utilization.percentage | %     |

</TabItem>
<TabItem value="Ap-Channel-Noise-*" label="Ap-Channel-Noise-*">

| Metric Name                             | Unit  |
|:----------------------------------------|:------|
| ap~channels#accesspoint.noise.power.dbm | dBm   |

</TabItem>
<TabItem value="Ap-Status-*" label="Ap-Status-*">

| Metric Name                                                               | Unit  |
|:--------------------------------------------------------------------------|:------|
| accesspoints.total.count                                                  | count |
| accesspoints.associated.count                                             | count |
| accesspoints.disassociating.count                                         | count |
| accesspoints.downloading.count                                            | count |
| accesspoints.enabled.count                                                | count |
| accesspoints.disabled.count                                               | count |
| status                                                                    | N/A   |
| ap~interfaces#radio-status                                                | N/A   |
| ap~interfaces#accesspoint.radio.interface.channels.utilization.percentage | %     |

</TabItem>
<TabItem value="Ap-Users" label="Ap-Users">

| Metric Name                      | Unit  |
|:---------------------------------|:------|
| users.total.count                | count |
| users.idle.count                 | count |
| users.aaapending.count           | count |
| users.authenticated.count        | count |
| users.associated.count           | count |
| users.disassociated.count        | count |
| users.powersave.count            | count |
| users.tobedeleted.count          | count |
| users.probing.count              | count |
| users.blacklisted.count          | count |
| ssid#ssid.users.total.count      | count |
| ap#accesspoint.users.total.count | count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric Name                | Unit  |
|:---------------------------|:------|
| cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Hardware-*" label="Hardware-*">

Coming soon

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name             | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Metric Name                             | Unit  |
|:----------------------------------------|:------|
| int#interface.traffic.in.bitspersecond  | b/s   |
| int#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Metric Name                             | Unit  |
|:----------------------------------------|:------|
| int#interface.traffic.in.bitspersecond  | b/s   |
| int#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Metric Name                             | Unit  |
|:----------------------------------------|:------|
| int#interface.traffic.in.bitspersecond  | b/s   |
| int#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your ressource.
Please refer to the official documentation from XXX:
* * [CISCO WLC](https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/snmp.html)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Plugin Packs > Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-cisco-wlc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-wlc-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-cisco-wlc-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Cisco WLC** Pack through
the **Configuration > Plugin Packs > Manager** menu.

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
dnf install centreon-plugin-Network-Cisco-Wlc-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Wlc-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-cisco-wlc-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Net-Cisco-Wlc-SNMP-custom** template to the host.

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory      | Macro            | Description                                  |
|:---------------|:-----------------|:---------------------------------------------|
|                | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_wlc.pl \
    --plugin=network::cisco::wlc::snmp::plugin \
    --mode=ap-status \
    --hostname=10.0.0.1 \
    --snmp-community='my-snmp-community' \
    --snmp-version=2c \
    --filter-name='' \
    --filter-group='' \
    --warning-radio-status='' \
    --critical-radio-status='' \
    --warning-radio-interface-channels-utilization='' \
    --critical-radio-interface-channels-utilization='' \
    --warning-total='' \
    --critical-total='' \
    --warning-total-associated='' \
    --critical-total-associated='' \
    --warning-total-disassociating='' \
    --critical-total-disassociating='' \
    --warning-total-enabled='' \
    --critical-total-enabled='' \
    --warning-total-disabled='' \
    --critical-total-disabled='' \
    --warning-status='' \
    --critical-status='' \
    
```

The expected command output is shown below:

```bash
OK: total: %s associated: %s disassociating: %s downloading: %s enabled: %s disabled: %s   channels utilization: %s %% | 'accesspoints.total.count'=14;;;0 ;  'accesspoints.associated.count'=62;;;0 ;  'accesspoints.disassociating.count'=92;;;0 ;  'accesspoints.downloading.count'=57;;;0 ;  'accesspoints.enabled.count'=9;;;0 ;  'accesspoints.disabled.count'=54;;;0 ;  'accesspoint.radio.interface.channels.utilization.percentage'=80%;;;0;100 
```

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_wlc.pl \
    --plugin=network::cisco::wlc::snmp::plugin \
    --list-mode
```

The plugin brings the following modes:

* ap-channel-interference
* ap-channel-noise
* ap-status
* ap-users
* cpu
* discovery
* hardware
* interfaces
* list-aps
* list-groups
* list-interfaces
* list-radius-acc-servers
* list-radius-auth-servers
* memory
* radius-acc-servers
* radius-auth-servers

### Available options

#### Global options

All global options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --mode                                     |     Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --dyn-mode                                 |     Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global      |
| --list-mode                                |     List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --mode-version                             |     Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --version                                  |     Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --pass-manager                             |     Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --verbose                                  |     Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --debug                                    |     Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --filter-perfdata                          |     Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --filter-perfdata-adv                      |     Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output      |
| --explode-perfdata-max                     |     Put max perfdata (if it exists) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output      |
| --change-perfdata --extend-perfdata        |     Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output      |
| --extend-perfdata-group                    |     Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output      |
| --change-short-output --change-long-output |     Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --change-exit                              |     Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --range-perfdata                           |     Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not displayed.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output      |
| --filter-uom                               |     Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output      |
| --opt-exit                                 |     Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-ignore-perfdata                   |     Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --output-ignore-label                      |     Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-xml                               |     Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output      |
| --output-json                              |     Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output      |
| --output-openmetrics                       |     Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --output-file                              |     Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --disco-format                             |     Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output      |
| --disco-show                               |     Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output      |
| --float-precision                          |     Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --source-encoding                          |     Set encoding of monitoring sources (In some cases. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --hostname                                 |     Hostname to query (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | SNMP        |
| --snmp-community                           |     Read community (defaults to public).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP        |
| --snmp-version                             |     Version: 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP        |
| --snmp-port                                |     Port (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP        |
| --snmp-timeout                             |     Timeout in seconds (default: 1) before retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP        |
| --snmp-retries                             |     Set the number of retries (default: 5) before failure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP        |
| --maxrepetitions                           |     Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | SNMP        |
| --subsetleef                               |     How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. It is recommended to leave the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP        |
| --snmp-autoreduce                          |     Auto reduce SNMP request size in case of SNMP errors (By default, the divisor is 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP        |
| --snmp-force-getnext                       |     Use SNMP getnext function (even in SNMP v2c and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP        |
| --snmp-username                            |     Security name (only for SNMP v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | SNMP        |
| --authpassphrase                           |     Authentication protocol pass phrase.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP        |
| --authprotocol                             |     Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP        |
| --privpassphrase                           |     Privacy protocol pass phrase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP        |
| --privprotocol                             |     Privacy protocol: DES\|AES. Since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | SNMP        |
| --contextname                              |     Context name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP        |
| --contextengineid                          |     Context engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | SNMP        |
| --securityengineid                         |     Security engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | SNMP        |
| --snmp-errors-exit                         |     Exit code for SNMP Errors (default: unknown)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP        |
| --snmp-tls-transport                       |     TLS Transport communication used (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP        |
| --snmp-tls-our-identity                    |     Our X.509 identity to use, which should either be a fingerprint or the filename that holds the certificate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | SNMP        |
| --snmp-tls-their-identity                  |     The remote server's identity to connect to, specified as either a fingerprint or a file name. Either this must be specified, or the hostname below along with a trust anchor.                                                                                                                                                                                                                                                                                                                                                                                              | SNMP        |
| --snmp-tls-their-hostname                  |     The remote server's hostname that is expected. If their certificate was signed by a CA then their hostname presented in the certificate must match this value or the connection fails to be established (to avoid man-in-the-middle attacks).                                                                                                                                                                                                                                                                                                                              | SNMP        |
| --snmp-tls-trust-cert                      |     A trusted certificate to use as trust anchor (like a CA certificate) for verifying a remote server's certificate. If a CA certificate is used to validate a certificate then the TheirHostname parameter must also be specified to ensure their presented hostname in the certificate matches.                                                                                                                                                                                                                                                                             | SNMP        |


#### Modes options

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Ap-Channel-Interference-*" label="Ap-Channel-Interference-*">

| Option                   | Description                                                                                           | Option type |
|:-------------------------|:------------------------------------------------------------------------------------------------------|:------------|
| --filter-counters        |     Only display some counters (regexp can be used). Example: --filter-counters='interference-util'   | Mode        |
| --filter-name            |     Filter access point name (can be a regexp).                                                       | Mode        |
| --filter-group           |     Filter access point group (can be a regexp).                                                      | Mode        |
| --filter-channel         |     Filter channel (can be a regexp). Example: --filter-channel='slot0:channel3'                      | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'interference-power', 'interference-util' (%).                                | Mode        |

</TabItem>
<TabItem value="Ap-Channel-Noise-*" label="Ap-Channel-Noise-*">

| Option                   | Description                                                                        | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------|:------------|
| --filter-name            |     Filter access point name (can be a regexp).                                    | Mode        |
| --filter-group           |     Filter access point group (can be a regexp).                                   | Mode        |
| --filter-channel         |     Filter channel (can be a regexp). Example: --filter-channel='slot0:channel3'   | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'noise-power' (dBm).                                       | Mode        |

</TabItem>
<TabItem value="Ap-Status-*" label="Ap-Status-*">

| Option                   | Description                                                                                                                                                                                        | Option type |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-counters        |     Only display some counters (regexp can be used). Example: --filter-counters='^total-disassociating\|total-associated$'                                                                         | Mode        |
| --filter-name            |     Filter access point name (can be a regexp).                                                                                                                                                    | Mode        |
| --filter-group           |     Filter access point group (can be a regexp).                                                                                                                                                   | Mode        |
| --add-radio-interfaces   |     Monitor radio interfaces channels utilization.                                                                                                                                                 | Mode        |
| --warning-status         |     Set warning threshold for status. Can use special variables like: %{admstatus}, %{opstatus}, %{display}                                                                                       | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "enable" and %{opstatus} !~ /associated\|downloading/'). Can use special variables like: %{admstatus}, %{opstatus}, %{display}   | Mode        |
| --warning-radio-status   |     Set warning threshold for status. Can use special variables like: %{admstatus}, %{opstatus}, %{display}                                                                                       | Mode        |
| --critical-radio-status  |     Set critical threshold for status (Default: '%{admstatus} eq "enable" and %{opstatus} eq "down"'). Can use special variables like: %{admstatus}, %{opstatus}, %{display}                      | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total', 'total-associated', 'total-disassociating', 'total-downloading', 'total-enabled', 'total-disabled', 'radio-interface-channels-utilization' (%).                   | Mode        |

</TabItem>
<TabItem value="Ap-Users" label="Ap-Users">

| Option                   | Description                                                                                                                                                                                                                         | Option type |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-counters        |     Only display some counters (regexp can be used). Example: --filter-counters='^total\|total-idle$'                                                                                                                               | Mode        |
| --filter-ssid            |     Filter by SSID (can be a regexp).                                                                                                                                                                                               | Mode        |
| --filter-ap              |     Filter by access point name (can be a regexp).                                                                                                                                                                                  | Mode        |
| --filter-group           |     Filter by access point group (can be a regexp).                                                                                                                                                                                 | Mode        |
| --ignore-ap-users        |     Unmonitor users by access points.                                                                                                                                                                                               | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total', 'total-idle', 'total-aaapending', 'total-authenticated', 'total-associated', 'total-powersave', 'total-disassociated', 'total-tobedeleted', 'total-probing', 'total-blacklisted', 'ssid', 'ap'.    | Mode        |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                     | Description                           | Option type |
|:---------------------------|:--------------------------------------|:------------|
| --warning-cpu-utilization  |     Warning threshold in percent.     | Mode        |
| --critical-cpu-utilization |     Critical threshold in percent.    | Mode        |

</TabItem>
<TabItem value="Hardware-*" label="Hardware-*">

| Option               | Description                                                                                                                                                                                               | Option type |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --component          |     Which component to check (Default: '.*'). Can be: 'psu'.                                                                                                                                              | Mode        |
| --filter             |     Exclude some parts (comma seperated list) (Example: --filter=psu) Can also exclude specific instance: --filter=psu,1                                                                                  | Mode        |
| --absent-problem     |     Return an error if an entity is not 'present' (default is skipping) (comma seperated list) Can be specific or global: --absent-problem=psu,1                                                          | Mode        |
| --no-component       |     Return an error if no compenents are checked. If total (with skipped) is 0. (Default: 'critical' returns).                                                                                            | Mode        |
| --threshold-overload |     Set to overload default threshold values (Syntax: section,\[instance,\]status,regexp) It used before default thresholds (order stays). Example: --threshold-overload='psu,WARNING,not operational'    | Mode        |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                 | Option type |
|:-------------------------|:----------------------------------------------------------------------------|:------------|
| --warning-* --critical-* |     Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).    | Mode        |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Option                   | Description                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached              |     Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention   |
| --redis-server           |     Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            | Retention   |
| --redis-attribute        |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention   |
| --redis-db               |     Set Redis database index.                                                                                                                                                                                                                                                                  | Retention   |
| --failback-file          |     Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention   |
| --memexpiration          |     Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention   |
| --statefile-dir          |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention   |
| --statefile-suffix       |     Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention   |
| --statefile-concat-cwd   |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention   |
| --statefile-format       |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention   |
| --statefile-key          |     Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention   |
| --statefile-cipher       |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention   |
| --add-global             |     Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode        |
| --add-status             |     Check interface status.                                                                                                                                                                                                                                                                    | Mode        |
| --add-duplex-status      |     Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode        |
| --add-traffic            |     Check interface traffic.                                                                                                                                                                                                                                                                   | Mode        |
| --add-errors             |     Check interface errors.                                                                                                                                                                                                                                                                    | Mode        |
| --add-cast               |     Check interface cast.                                                                                                                                                                                                                                                                      | Mode        |
| --add-speed              |     Check interface speed.                                                                                                                                                                                                                                                                     | Mode        |
| --add-volume             |     Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode        |
| --check-metrics          |     If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode        |
| --warning-status         |     Set warning threshold for status. Can use special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can use special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode        |
| --units-traffic          |     Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode        |
| --units-errors           |     Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode        |
| --units-cast             |     Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode        |
| --nagvis-perfdata        |     Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode        |
| --interface              |     Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                       | Mode        |
| --name                   |     Allows to use interface name with option --interface instead of interface oid index (Can be a regexp)                                                                                                                                                                                       | Mode        |
| --speed                  |     Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode        |
| --speed-in               |     Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --speed-out              |     Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --map-speed-dsl          |     Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode        |
| --force-counters64       |     Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode        |
| --force-counters32       |     Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode        |
| --reload-cache-time      |     Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode        |
| --oid-filter             |     Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode        |
| --oid-display            |     Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode        |
| --oid-extra-display      |     Add an OID to display.                                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-src  |     Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-dst  |     Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --show-cache             |     Display cache interface datas.                                                                                                                                                                                                                                                             | Mode        |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Option                   | Description                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached              |     Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention   |
| --redis-server           |     Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            | Retention   |
| --redis-attribute        |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention   |
| --redis-db               |     Set Redis database index.                                                                                                                                                                                                                                                                  | Retention   |
| --failback-file          |     Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention   |
| --memexpiration          |     Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention   |
| --statefile-dir          |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention   |
| --statefile-suffix       |     Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention   |
| --statefile-concat-cwd   |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention   |
| --statefile-format       |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention   |
| --statefile-key          |     Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention   |
| --statefile-cipher       |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention   |
| --add-global             |     Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode        |
| --add-status             |     Check interface status.                                                                                                                                                                                                                                                                    | Mode        |
| --add-duplex-status      |     Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode        |
| --add-traffic            |     Check interface traffic.                                                                                                                                                                                                                                                                   | Mode        |
| --add-errors             |     Check interface errors.                                                                                                                                                                                                                                                                    | Mode        |
| --add-cast               |     Check interface cast.                                                                                                                                                                                                                                                                      | Mode        |
| --add-speed              |     Check interface speed.                                                                                                                                                                                                                                                                     | Mode        |
| --add-volume             |     Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode        |
| --check-metrics          |     If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode        |
| --warning-status         |     Set warning threshold for status. Can use special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can use special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode        |
| --units-traffic          |     Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode        |
| --units-errors           |     Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode        |
| --units-cast             |     Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode        |
| --nagvis-perfdata        |     Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode        |
| --interface              |     Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                       | Mode        |
| --name                   |     Allows to use interface name with option --interface instead of interface oid index (Can be a regexp)                                                                                                                                                                                       | Mode        |
| --speed                  |     Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode        |
| --speed-in               |     Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --speed-out              |     Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --map-speed-dsl          |     Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode        |
| --force-counters64       |     Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode        |
| --force-counters32       |     Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode        |
| --reload-cache-time      |     Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode        |
| --oid-filter             |     Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode        |
| --oid-display            |     Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode        |
| --oid-extra-display      |     Add an OID to display.                                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-src  |     Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-dst  |     Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --show-cache             |     Display cache interface datas.                                                                                                                                                                                                                                                             | Mode        |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Option                   | Description                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached              |     Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention   |
| --redis-server           |     Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            | Retention   |
| --redis-attribute        |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention   |
| --redis-db               |     Set Redis database index.                                                                                                                                                                                                                                                                  | Retention   |
| --failback-file          |     Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention   |
| --memexpiration          |     Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention   |
| --statefile-dir          |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention   |
| --statefile-suffix       |     Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention   |
| --statefile-concat-cwd   |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention   |
| --statefile-format       |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention   |
| --statefile-key          |     Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention   |
| --statefile-cipher       |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention   |
| --add-global             |     Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode        |
| --add-status             |     Check interface status.                                                                                                                                                                                                                                                                    | Mode        |
| --add-duplex-status      |     Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode        |
| --add-traffic            |     Check interface traffic.                                                                                                                                                                                                                                                                   | Mode        |
| --add-errors             |     Check interface errors.                                                                                                                                                                                                                                                                    | Mode        |
| --add-cast               |     Check interface cast.                                                                                                                                                                                                                                                                      | Mode        |
| --add-speed              |     Check interface speed.                                                                                                                                                                                                                                                                     | Mode        |
| --add-volume             |     Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode        |
| --check-metrics          |     If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode        |
| --warning-status         |     Set warning threshold for status. Can use special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can use special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode        |
| --units-traffic          |     Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode        |
| --units-errors           |     Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode        |
| --units-cast             |     Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode        |
| --nagvis-perfdata        |     Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode        |
| --interface              |     Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                       | Mode        |
| --name                   |     Allows to use interface name with option --interface instead of interface oid index (Can be a regexp)                                                                                                                                                                                       | Mode        |
| --speed                  |     Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode        |
| --speed-in               |     Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --speed-out              |     Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --map-speed-dsl          |     Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode        |
| --force-counters64       |     Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode        |
| --force-counters32       |     Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode        |
| --reload-cache-time      |     Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode        |
| --oid-filter             |     Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode        |
| --oid-display            |     Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode        |
| --oid-extra-display      |     Add an OID to display.                                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-src  |     Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-dst  |     Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --show-cache             |     Display cache interface datas.                                                                                                                                                                                                                                                             | Mode        |

</TabItem>
</Tabs>


All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_wlc.pl \
    --plugin=network::cisco::wlc::snmp::plugin \
    --mode=ap-status \
    --help
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.