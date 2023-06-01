---
id: network-cambium-cnpilot-snmp
title: Cambium CnPilot SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Cambium cnPilot SNMP** brings a host template:

* Net-Cambium-cnPilot-SNMP-custom

It brings the following service templates:

| Service Alias     | Service Template                           | Service Description      | Default | Discovery |
|:------------------|:-------------------------------------------|:-------------------------|:--------|:----------|
| Connection status | Net-Cambium-Cnpilot-Connection-status-SNMP | Check connection status  | X       |           |
| Cpu               | Net-Cambium-Cnpilot-Cpu-SNMP               | Check cpu hardware       | X       |           |
| Interfaces        | Net-Cambium-Cnpilot-Interfaces-SNMP        | Check network interfaces |         |           |
| Memory            | Net-Cambium-Cnpilot-Memory-SNMP            | Check memory hardware    | X       |           |
| Radios            | Net-Cambium-Cnpilot-Radios-SNMP            | Check cpu hardware       |         | X         |



> *Default* services templates are automatically linked to the host template(s).

> Services templates with the *Discovery* field are linked to a service discovery rule.

### Discovery rules

| Rule Name                            | Description |
|:-------------------------------------|:------------|
| Net-Cambium-Cnpilot-SNMP-Radios-Name |             |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Connection status" label="Connection status">

| Metric Name                        | Unit  |
|:-----------------------------------|:------|
| connectionstatus#connection-status | N/A   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric Name              | Unit  |
|:-------------------------|:------|
| cpu#cpu.usage.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

Coming soon

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name                    | Unit  |
|:-------------------------------|:------|
| memory#memory.usage.percentage | %     |

</TabItem>
<TabItem value="Radios" label="Radios">

| Metric Name                                      | Unit  |
|:-------------------------------------------------|:------|
| radios#number.of.clients.connected               |       |
| radios#status                                    | N/A   |
| radios#radio.interface.noise.floor.dbm           | dBm   |
| radios#radio.interface.interference.dbm          | dBm   |
| radios#radio.interface.traffic.in.bitspersecond  | b/s   |
| radios#radio.interface.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your ressource.
Please refer to the official documentation from XXX:
* LINK

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
dnf install centreon-pack-network-cambium-cnpilot-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cambium-cnpilot-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-cambium-cnpilot-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Cambium cnPilot SNMP** Pack through
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
dnf install centreon-plugin-Network-Cambium-cnPilot-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cambium-cnPilot-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-cambium-cnpilot-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
* Apply the **Net-Cambium-cnPilot-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
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
/usr/lib/centreon/plugins/centreon_cambium_cnpilot.pl \
    --plugin=network::cambium::cnpilot::snmp::plugin \
    --mode=cpu \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-cpu-usage-prct='' \
    --critical-cpu-usage-prct='' \
    --verbose \
    
```

The expected command output is shown below:

```bash
OK:  | 'cpu.usage.percentage'=51%;;;0;100 
```

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_cambium_cnpilot.pl \
    --plugin=network::cambium::cnpilot::snmp::plugin \
    --list-mode
```

The plugin brings the following modes:

* connection-status
* cpu
* interfaces
* list-radios
* memory
* radios

### Available options

#### Global optionsAll global options are listed here:

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
| --explode-perfdata-max                     |     Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output      |
| --change-perfdata --extend-perfdata        |     Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output      |
| --extend-perfdata-group                    |     Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output      |
| --change-short-output --change-long-output |     Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --change-exit                              |     Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --range-perfdata                           |     Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output      |
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
| --source-encoding                          |     Set encoding of monitoring sources (In some case. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --hostname                                 |     Hostname to query (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Snmp        |
| --snmp-community                           |     Read community (defaults to public).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp        |
| --snmp-version                             |     Version: 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Snmp        |
| --snmp-port                                |     Port (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp        |
| --snmp-timeout                             |     Timeout in secondes (default: 1) before retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Snmp        |
| --snmp-retries                             |     Set the number of retries (default: 5) before failure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Snmp        |
| --maxrepetitions                           |     Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Snmp        |
| --subsetleef                               |     How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                   | Snmp        |
| --snmp-autoreduce                          |     Auto reduce SNMP request size in case of SNMP errors (By default, the divisor is 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp        |
| --snmp-force-getnext                       |     Use snmp getnext function (even in snmp v2c and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp        |
| --snmp-username                            |     Security name (only for SNMP v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Snmp        |
| --authpassphrase                           |     Authentication protocol pass phrase.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp        |
| --authprotocol                             |     Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Snmp        |
| --privpassphrase                           |     Privacy protocol pass phrase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Snmp        |
| --privprotocol                             |     Privacy protocol: DES\|AES. Since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Snmp        |
| --contextname                              |     Context name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Snmp        |
| --contextengineid                          |     Context engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Snmp        |
| --securityengineid                         |     Security engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Snmp        |
| --snmp-errors-exit                         |     Exit code for SNMP Errors (default: unknown)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Snmp        |
| --snmp-tls-transport                       |     TLS Transport communication used (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Snmp        |
| --snmp-tls-our-identity                    |     Our X.509 identity to use, which should either be a fingerprint or the filename that holds the certificate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Snmp        |
| --snmp-tls-their-identity                  |     The remote server's identity to connect to, specified as either a fingerprint or a file name. Either this must be specified, or the hostname below along with a trust anchor.                                                                                                                                                                                                                                                                                                                                                                                              | Snmp        |
| --snmp-tls-their-hostname                  |     The remote server's hostname that is expected. If their certificate was signed by a CA then their hostname presented in the certificate must match this value or the connection fails to be established (to avoid man-in-the-middle attacks).                                                                                                                                                                                                                                                                                                                              | Snmp        |
| --snmp-tls-trust-cert                      |     A trusted certificate to use as trust anchor (like a CA certificate) for verifying a remote server's certificate. If a CA certificate is used to validate a certificate then the TheirHostname parameter must also be specified to ensure their presented hostname in the certificate matches.                                                                                                                                                                                                                                                                             | Snmp        |


#### Modes options

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Connection status" label="Connection status">

| Option      | Description                         | Option type |
|:------------|:------------------------------------|:------------|
| --filter-ap |     Filter on one or several AP.    | Mode        |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option     | Description                                                                    | Option type |
|:-----------|:-------------------------------------------------------------------------------|:------------|
| --warning  |     Warning threshold for CPU.                                                 | Mode        |
| --critical |     Critical threshold for CPU.  --filter-ap         Filter on one AP name.    | Mode        |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                   | Description                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached              |     Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention   |
| --redis-server           |     Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                            | Retention   |
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
| --warning-status         |     Set warning threshold for status. Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode        |
| --units-traffic          |     Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode        |
| --units-errors           |     Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode        |
| --units-cast             |     Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode        |
| --nagvis-perfdata        |     Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode        |
| --interface              |     Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       | Mode        |
| --name                   |     Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                       | Mode        |
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
<TabItem value="Memory" label="Memory">

| Option     | Description                                                                             | Option type |
|:-----------|:----------------------------------------------------------------------------------------|:------------|
| --warning  |     Warning threshold for Memory.                                                       | Mode        |
| --critical |     Critical threshold for Memory.  --filter-ap         Filter on one or several AP.    | Mode        |

</TabItem>
<TabItem value="Radios" label="Radios">

| Option            | Description                                                                                | Option type |
|:------------------|:-------------------------------------------------------------------------------------------|:------------|
| --filter-counters |     Only display some counters (regexp can be used). Example: --filter-counters='status'   | Mode        |
| --filter-name     |     Filter interface by MACAdress                                                          | Mode        |

</TabItem>
</Tabs>


All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cambium_cnpilot.pl \
    --plugin=network::cambium::cnpilot::snmp::plugin \
    --mode=cpu \
    --help
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.