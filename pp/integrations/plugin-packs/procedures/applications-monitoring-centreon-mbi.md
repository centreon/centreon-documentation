---
id: applications-monitoring-centreon-mbi
title: Centreon MBI
description: "Monitor Centreon MBI via NRPE and SNMP: reporting server datawarehouse status, failed jobs, NTP sync, and key process checks."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Centreon-MBI** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)
* [Linux SNMP](./operatingsystems-linux-snmp.md)

## Pack assets

### Templates

The Monitoring Connector **Centreon-MBI** brings a host template:

* **App-Monitoring-Centreon-MBI-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Centreon-MBI-custom" label="App-Monitoring-MBI-custom">

| Alias          | Modèle de service                                 | Description                                                                 |
|:---------------|:--------------------------------------------------|:----------------------------------------------------------------------------|
| DWH-db-content | App-Monitoring-Centreon-MBI-DWH-db-content-custom | Check if the datawarehouse of the reporting server is up to date            |
| DWH-partitions | App-Monitoring-Centreon-MBI-DWH-partitions-custom | Check if partitions of the reporting server datawarehouse are up to date    |
| failed-jobs    | App-Monitoring-Centreon-MBI-failed-jobs-custom    | Check if failed jobs are present                                            |
| Ntp            | App-Monitoring-Centreon-MBI-Ntp-custom            | Check the synchronization with an NTP server via SNMP                       |
| proc-cbis      | App-Monitoring-Centreon-MBI-Process-cbis-custom   | Check the presence and the memory consumption of the cbis process via SNMP  |
| proc-mysql     | App-Monitoring-Centreon-MBI-Process-mysql-custom  | Check the presence and the memory consumption of the mysql process via SNMP |

> The services listed above are created automatically when the **App-Monitoring-Centreon-MBI-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="DWH-db-content" label="DWH-db-content">

No metrics for this service.

</TabItem>
<TabItem value="DWH-partitions" label="DWH-partitions">

No metrics for this service.

</TabItem>
<TabItem value="failed-jobs" label="failed-jobs">

| Name      | Unit  |
|:----------|:------|
| failedJob | count |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Name                | Unit |
|:--------------------|:-----|
| time.offset.seconds | s    |

</TabItem>
<TabItem value="proc-cbis" label="proc-cbis">

| Name      | Unit |
|:----------|:-----|
| nbproc    | N/A  |

</TabItem>
<TabItem value="proc-mysql" label="proc-mysql">

| Name      | Unit |
|:----------|:-----|
| nbproc    | N/A  |

</TabItem>
</Tabs>

## Prerequisites

### Device Configuration

The configuration of SNMP on a Linux server is detailed in [the *Linux SNMP* Monitoring Connector's documentation page](operatingsystems-linux-snmp.md#net-snmp-server-configuration).

### Network flows

The monitoring server must be able to reach the UDP/161 (SNMP) and TCP/5666 (NRPE) ports of the reporting server.

### NRPE agent installation & configuration

1. Install the agent on the Centreon MBI reporting server.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf -y install epel-release
dnf -y install nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf -y install nrpe
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt -y install nagios-nrpe-server
```

</TabItem>
</Tabs>

2. Modify the NRPE agent configuration file `/etc/nagios/nrpe.cfg`

- Replace line `allowed_hosts=127.0.0.1,::1` with `allowed_hosts=POLLER_IP_ADDRESS`
- Uncomment the line containing “nasty_metachars.”
- Add the following lines :

```
command[check_partitions]=/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --partitions 2>/dev/null
command[check_db]=/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --db-content 2>/dev/null
command[check_jobs]=/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --jobs 2>/dev/null
```

3. Add the user centreon-engine to the centreonBI group : 

```bash
usermod -aG centreonBI centreon-engine 
```

4. Restart and enable the daemon : 

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
systemctl restart nrpe
systemctl enable nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
systemctl restart nrpe
systemctl enable nrpe
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
systemctl restart nagios-nrpe-server
systemctl enable nagios-nrpe-server
```

</TabItem>
</Tabs>

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-monitoring-centreon-mbi centreon-pack-operatingsystems-linux-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-centreon-mbi centreon-pack-operatingsystems-linux-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-monitoring-centreon-mbi centreon-pack-operatingsystems-linux-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-centreon-mbi centreon-pack-operatingsystems-linux-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Centreon-MBI** connector through
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
dnf install nagios-plugins-nrpe centreon-plugin-Operatingsystems-Linux-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install nagios-plugins-nrpe centreon-pack-operatingsystems-linux-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install nagios-nrpe-plugin centreon-plugin-operatingsystems-linux-snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Monitoring-Centreon-MBI-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro            | Description                                                                                                                                        | Default value | Mandatory |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| NRPECLIENT       | Name of the plugin to use to talk with the NRPE daemon                                                                                             | check_nrpe    |           |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). | -u -2 -P 8192 |           |
| NRPEPORT         | TCP port the NRPE daemon is listening to                                                                                                           | 5666          |           |
| NRPETIMEOUT      | Command timeout                                                                                                                                    | 30            |           |
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options)  |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="DWH-db-content" label="DWH-db-content">

| Macro        | Description                                                                                                                                     | Default value | Mandatory |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options) |               |           |

</TabItem>
<TabItem value="DWH-partitions" label="DWH-partitions">

| Macro        | Description                                                                                                                                     | Default value | Mandatory |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options) |               |           |

</TabItem>
<TabItem value="failed-jobs" label="failed-jobs">

| Macro        | Description                                                                                                                                     | Default value | Mandatory |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options) |               |           |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro        | Description                                                                                                                                     | Default value | Mandatory |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| NTPADDR      | Set the ntp hostname (if not set, localtime is used)                                                                                            |               |           |
| NTPPORT      | Set the ntp port (default: 123)                                                                                                                 |               |           |
| TIMEZONE     | Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100'                                 |               |           |
| WARNING      | Time offset warning threshold (in seconds)                                                                                                      | -1:1          |           |
| CRITICAL     | Time offset critical Threshold (in seconds)                                                                                                     | -2:2          |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options) |               |           |

</TabItem>
<TabItem value="proc-cbis" label="proc-cbis">

| Macro        | Description                                                                                                                                     | Default value | Mandatory |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROCESSARGS  | Filter process arguments                                                                                                                        |               |           |
| PROCESSNAME  | Filter process name                                                                                                                             | ^java$        |           |
| PROCESSPATH  | Filter process path                                                                                                                             |               |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                                  | 1:            |           |
| WARNING      | Warning threshold of matching processes count                                                                                                   |               |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options) | --memory      |           |


</TabItem>
<TabItem value="proc-mysql" label="proc-mysql">

| Macro        | Description                                                                                                                                     | Default value | Mandatory |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROCESSARGS  | Filter process arguments                                                                                                                        |               |           |
| PROCESSNAME  | Filter process name                                                                                                                             | ^mysqld       | mariadb$  |             |
| PROCESSPATH  | Filter process path                                                                                                                             |               |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                                  | 1:            |           |
| WARNING      | Warning threshold of matching processes count                                                                                                   |               |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options) | --memory      |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl \
	--plugin=os::linux::snmp::plugin \
	--mode=time \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \ 
	--snmp-community='public' \ 
	--ntp-hostname='' \
	--ntp-port='' \
	--warning-offset='-1:1' \
	--critical-offset='-2:2' \
	--timezone=''
```

The expected command output is shown below:

```bash
OK: Time offset 0 second(s): Local Time : 2025-09-23T15:48:50 (+0200)
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
/usr/lib/centreon/plugins/centreon_linux_snmp.pl \
	--plugin=os::linux::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                         | Linked service template                                                                                     |
|:-----------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------|
| arp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/arp.pm)]                        | Not used in this Monitoring Connector                                                                       |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpu.pm)]                        | Not used in this Monitoring Connector                                                                       |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpudetailed.pm)]       | Not used in this Monitoring Connector                                                                       |
| disk-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/diskusage.pm)]           | Not used in this Monitoring Connector                                                                       |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/diskio.pm)]                  | Not used in this Monitoring Connector                                                                       |
| inodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/inodes.pm)]                  | Not used in this Monitoring Connector                                                                       |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]          | Not used in this Monitoring Connector                                                                       |
| list-diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listdiskio.pm)]         | Not used in this Monitoring Connector                                                                       |
| list-diskspath [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listdiskspath.pm)]   | Not used in this Monitoring Connector                                                                       |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)] | Not used in this Monitoring Connector                                                                       |
| list-processes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listprocesses.pm)]   | Not used in this Monitoring Connector                                                                       |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/liststorages.pm)]     | Not used in this Monitoring Connector                                                                       |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/loadaverage.pm)]               | Not used in this Monitoring Connector                                                                       |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/memory.pm)]                  | Not used in this Monitoring Connector                                                                       |
| processcount [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/processcount.pm)]      | App-Monitoring-Centreon-MBI-Process-cbis-custom<br />App-Monitoring-Centreon-MBI-Process-mysql-custom<br /> |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/storage.pm)]                | Not used in this Monitoring Connector                                                                       |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/swap.pm)]                      | Not used in this Monitoring Connector                                                                       |
| tcpcon [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/tcpcon.pm)]                  | Not used in this Monitoring Connector                                                                       |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/ntp.pm)]                       | App-Monitoring-Centreon-MBI-Ntp-custom                                                                      |
| udpcon [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/udpcon.pm)]                  | Not used in this Monitoring Connector                                                                       |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                  | Not used in this Monitoring Connector                                                                       |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                              |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)' |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --snmp-force-getnext                       | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="DWH-db-content" label="DWH-db-content">

No options for this mode.

</TabItem>
<TabItem value="DWH-partitions" label="DWH-partitions">

No options for this mode.

</TabItem>
<TabItem value="failed-jobs" label="failed-jobs">

No options for this mode.

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option            | Description                                                                                                         |
|:------------------|:--------------------------------------------------------------------------------------------------------------------|
| --oid             | Override default OID.                                                                                               |
| --warning-offset  | Time offset warning threshold (in seconds).                                                                         |
| --critical-offset | Time offset critical Threshold (in seconds).                                                                        |
| --ntp-hostname    | Set the ntp hostname (if not set, localtime is used).                                                               |
| --ntp-port        | Set the ntp port (default: 123).                                                                                    |
| --timezone        | Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100'.    |

</TabItem>
<TabItem value="proc-cbis" label="proc-cbis">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --process-status       | Filter process status. Can be a regexp. (default: 'running\|runnable').                                                                                                                                                                       |
| --process-name         | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name          | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path         | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path          | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args         | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args          | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning              | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical             | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory               | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each     | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each    | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total    | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total   | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg      | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg     | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                  | Check CPU usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total    | Warning threshold of CPU usage for all processes (in percent). CPU usage is in % of one CPU, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total   | Critical threshold of CPU usage for all processes (in percent). CPU usage is in % of one CPU, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                  | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num              | Number of processes in top memory display (default: 5).                                                                                                                                                                                       |
| --top-size             | Minimum memory usage to be in top memory display (default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-mysql" label="proc-mysql">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --process-status       | Filter process status. Can be a regexp. (default: 'running\|runnable').                                                                                                                                                                       |
| --process-name         | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name          | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path         | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path          | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args         | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args          | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning              | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical             | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory               | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each     | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each    | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total    | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total   | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg      | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg     | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                  | Check CPU usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total    | Warning threshold of CPU usage for all processes (in percent). CPU usage is in % of one CPU, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total   | Critical threshold of CPU usage for all processes (in percent). CPU usage is in % of one CPU, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                  | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num              | Number of processes in top memory display (default: 5).                                                                                                                                                                                       |
| --top-size             | Minimum memory usage to be in top memory display (default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl \
	--plugin=os::linux::snmp::plugin \
	--mode=time \
	--help
```
