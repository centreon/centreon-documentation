---
id: operatingsystems-f5os-snmp
title: F5OS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **F5OS SNMP** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **F5OS SNMP** brings a host template:

* **OS-F5OS-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="OS-F5OS-SNMP-custom" label="OS-F5OS-SNMP-custom">

| Service Alias | Service Template              | Service Description |
|:--------------|:------------------------------|:--------------------|
| Cpu-Usage     | OS-F5OS-Cpu-Usage-SNMP-custom | Check CPU usage     |
| Hardware      | OS-F5OS-Hardware-SNMP-custom  | Check hardware      |
| Memory        | OS-F5OS-Memory-SNMP-custom    | Check memory usage  |

> The services listed above are created automatically when the **OS-F5OS-SNMP-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name   | Description                                                                                                                                                                                                                                  |
|:------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **OS-F5OS-SNMP-custom** host template. |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Name                                      | Unit |
|:------------------------------------------|:-----|
| cpu.usage.percent                         | %    |
| *cpu_core*#cpu.core.current.usage.percent | %    |
| *cpu_core*#cpu.core.usage.avg.5s.percent  | %    |
| *cpu_core*#cpu.core.usage.avg.1m.percent  | %    |
| *cpu_core*#cpu.core.usage.avg.5m.percent  | %    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Name                           | Unit |
|:-------------------------------|:-----|
| temperature.current.celsius    | C    |
| temperature.average.1h.celsius | C    |
| temperature.min.1h.celsius     | C    |
| temperature.max.1h.celsius     | C    |
| *fans*#fantray.fanspeed.rpm    | rpm  |

</TabItem>
<TabItem value="Memory" label="Memory">

| Name                 | Unit |
|:---------------------|:-----|
| memory.usage.bytes   | B    |
| memory.free.bytes    | B    |
| memory.usage.percent | %    |
| memory.free.percent  | %    |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

The SNMP agent must be enabled and configured on the resource. 
Please refer to the official documentation from the manufacturer/publisher. 
Your resource may require a list of addresses authorized to query it to be set up. 
Please ensure that the addresses of the Centreon pollers are included in this list.

### Network flow

The target resource must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Installing the monitoring connector

### Pack

The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-operatingsystems-f5os-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-f5os-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-f5os-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-f5os-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **F5OS SNMP** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

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
dnf install centreon-plugin-Operatingsystems-F5os-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-F5os-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-f5os-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-F5os-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **OS-F5OS-SNMP-custom** template to the host.

| Macro                   | Description                                                                                                                                                            | Default value | Mandatory |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| SNMP_V3_USERNAME        | SNMP v3 only: User name (`securityName`)                                                                                                                               |               |           |
| SNMP_V3_AUTH_PROTOCOL   | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512                                                                  |               |           |
| SNMP_V3_PRIV_PROTOCOL   | SNMP v3 only: Privacy protocol (`privProtocol`) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C |               |           |
| SNMP_V3_AUTH_PASSPHRASE | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option                                                               |               |           |
| SNMP_V3_PRIV_PASSPHRASE | SNMP v3 only: Privacy pass phrase (`privPassword`) to encrypt messages using the protocol defined in the --privprotocol option                                         |               |           |
| SNMPEXTRAOPTIONS        | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                               |               |           |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Macro               | Description                                                                                                                                      | Default value | Mandatory |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGCOREAVG1M    | Threshold in percentage                                                                                                                          |               |           |
| CRITICALCOREAVG1M   | Threshold in percentage                                                                                                                          |               |           |
| WARNINGCOREAVG5M    | Threshold in percentage                                                                                                                          |               |           |
| CRITICALCOREAVG5M   | Threshold in percentage                                                                                                                          |               |           |
| WARNINGCOREAVG5S    | Threshold in percentage                                                                                                                          |               |           |
| CRITICALCOREAVG5S   | Threshold in percentage                                                                                                                          |               |           |
| WARNINGCORECURRENT  | Threshold in percentage                                                                                                                          |               |           |
| CRITICALCORECURRENT | Threshold in percentage                                                                                                                          |               |           |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro                      | Description                                                                                                                                      | Default value | Mandatory |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGAVERAGETEMPERATURE  | Threshold in C                                                                                                                                   |               |           |
| CRITICALAVERAGETEMPERATURE | Threshold in C                                                                                                                                   |               |           |
| WARNINGCURRENTTEMPERATURE  | Threshold in C                                                                                                                                   |               |           |
| CRITICALCURRENTTEMPERATURE | Threshold in C                                                                                                                                   |               |           |
| WARNINGFANTRAYFANSPEED     | Threshold in rpm                                                                                                                                 |               |           |
| CRITICALFANTRAYFANSPEED    | Threshold in rpm                                                                                                                                 |               |           |
| WARNINGMAXTEMPERATURE      | Threshold in C                                                                                                                                   |               |           |
| CRITICALMAXTEMPERATURE     | Threshold in C                                                                                                                                   |               |           |
| WARNINGMINTEMPERATURE      | Threshold in C                                                                                                                                   |               |           |
| CRITICALMINTEMPERATURE     | Threshold in C                                                                                                                                   |               |           |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro             | Description                                                                                                                                      | Default value | Mandatory |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGFREE       | Threshold in bytes                                                                                                                               |               |           |
| CRITICALFREE      | Threshold in bytes                                                                                                                               |               |           |
| WARNINGFREEPRCT   | Threshold in percentage                                                                                                                          |               |           |
| CRITICALFREEPRCT  | Threshold in percentage                                                                                                                          |               |           |
| WARNINGUSAGE      | Threshold in bytes                                                                                                                               |               |           |
| CRITICALUSAGE     | Threshold in bytes                                                                                                                               |               |           |
| WARNINGUSAGEPRCT  | Threshold in percentage                                                                                                                          |               |           |
| CRITICALUSAGEPRCT | Threshold in percentage                                                                                                                          |               |           |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_f5os_snmp.pl \
	--plugin=os::f5os::snmp::plugin \
	--mode=memory \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community' \
	--snmp-username='username' \
	--authpassphrase='' \
	--authprotocol='' \
	--privpassphrase='' \
	--privprotocol=''  \
	--warning-usage='' \
	--critical-usage='' \
	--warning-free='' \
	--critical-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' \
	--warning-free-prct='' \
	--critical-free-prct='' 
```

The expected command output is shown below:

```bash
OK: All memory usages are ok | 'memory.usage.bytes'=54646B;;;0;total 'memory.usage.bytes'=57372B;;;0;total 'memory.free.bytes'=96617B;;;0;total 'memory.free.bytes'=74634B;;;0;total 'memory.usage.percent'=38404%;;;0;100 'memory.usage.percent'=60861%;;;0;100 'memory.free.percent'=39013%;;;0;100 'memory.free.percent'=28069%;;;0;100 
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
/usr/lib/centreon/plugins/centreon_f5os_snmp.pl \
	--plugin=os::f5os::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                            | Linked service template       |
|:----------------------------------------------------------------------------------------------------------------|:------------------------------|
| cpu-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/f5os/snmp/mode/cpuusage.pm)] | OS-F5OS-Cpu-Usage-SNMP-custom |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/f5os/snmp/mode/hardware.pm)]  | OS-F5OS-Hardware-SNMP-custom  |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/f5os/snmp/mode/memory.pm)]      | OS-F5OS-Memory-SNMP-custom    |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-force-getnext                       | Use SNMP get-next function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-username                            | SNMP v3 only: User name (`securityName`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (`privPassword`) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --privprotocol                             | SNMP v3 only: Privacy protocol (`privProtocol`) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --contextname                              | SNMP v3 only: Context name (`contextName`), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --contextengineid                          | SNMP v3 only: Context engine ID (`contextEngineID`), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are ok, warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: `dtlsudp`, `tlstcp`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the  certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-their-hostname                  | Common Name (`CN`) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate.  If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --show-password                            | By default, sensitive information in command lines is hidden in debug output and replaced with `***` (however, debug logs may still display sensitive information). Using the C option will display the passwords in plain text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --warning-xxx                              | Warning threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --critical-xxx                             | Critical threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Option                  | Description                                                                                                                                                |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters       | Only display some counters (regexp can be used). Can be : core-current, core-avg-5s, core-avg-1m, core-avg-5m Example : --filter-counters='^core-current$' |
| --include-id            | Filter by CPU id (regexp can be used). Example : --include-id='2'                                                                                          |
| --include-name          | Filter by CPU name (regexp can be used). Example : --include-name='cpu02'                                                                                  |
| --exclude-id            | Exclude CPU id from check (regexp can be used). Example : --exclude-id='21'                                                                                |
| --exclude-name          | Exclude CPU name from check (regexp can be used). Example : --exclude-name='cpu02'                                                                         |
| --warning-core-current  | Threshold in percentage.                                                                                                                                   |
| --critical-core-current | Threshold in percentage.                                                                                                                                   |
| --warning-core-avg-5s   | Threshold in percentage.                                                                                                                                   |
| --critical-core-avg-5s  | Threshold in percentage.                                                                                                                                   |
| --warning-core-avg-1m   | Threshold in percentage.                                                                                                                                   |
| --critical-core-avg-1m  | Threshold in percentage.                                                                                                                                   |
| --warning-core-avg-5m   | Threshold in percentage.                                                                                                                                   |
| --critical-core-avg-5m  | Threshold in percentage.                                                                                                                                   |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option                         | Description                                                                                                                                                                                                         |
|:-------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component                    | Which component to check (default: '.*'). Can be: `temperature`, `fantray`.                                                                                                                                         |
| --no-component                 | Define the expected status if no components are found (default: critical).                                                                                                                                          |
| --filter-counters              | Only display some counters (regexp can be used). Can be : `fantray-fan-speed` `current-temperature` `average-temperature` `min-temperature` `max-temperature` Example : `--filter-counters='^current-temperature$'` |
| --include-id                   | Filter by fan id (regexp can be used). Example : --include-id='2'                                                                                                                                                   |
| --exclude-id                   | Exclude fan id from check (can be a regexp). Example : --exclude-id='10'                                                                                                                                            |
| --warning-current-temperature  | Threshold in C.                                                                                                                                                                                                     |
| --critical-current-temperature | Threshold in C.                                                                                                                                                                                                     |
| --warning-average-temperature  | Threshold in C.                                                                                                                                                                                                     |
| --critical-average-temperature | Threshold in C.                                                                                                                                                                                                     |
| --warning-min-temperature      | Threshold in C.                                                                                                                                                                                                     |
| --critical-min-temperature     | Threshold in C.                                                                                                                                                                                                     |
| --warning-max-temperature      | Threshold in C.                                                                                                                                                                                                     |
| --critical-max-temperature     | Threshold in C.                                                                                                                                                                                                     |
| --warning-fantray-fan-speed    | Threshold in rpm.                                                                                                                                                                                                   |
| --critical-fantray-fan-speed   | Threshold in rpm.                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                | Description                                                                                                                     |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters     | Only display some counters (regexp can be used). Can be : usage free usage-prct free-prct Example : --filter-counters='^usage$' |
| --warning-free        | Threshold in bytes.                                                                                                             |
| --critical-free       | Threshold in bytes.                                                                                                             |
| --warning-free-prct   | Threshold in percentage.                                                                                                        |
| --critical-free-prct  | Threshold in percentage.                                                                                                        |
| --warning-usage       | Threshold in bytes.                                                                                                             |
| --critical-usage      | Threshold in bytes.                                                                                                             |
| --warning-usage-prct  | Threshold in percentage.                                                                                                        |
| --critical-usage-prct | Threshold in percentage.                                                                                                        |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_f5os_snmp.pl \
	--plugin=os::f5os::snmp::plugin \
	--mode=memory \
	--help
```
