---
id: applications-monitoring-centreon-database
title: Centreon Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Centreon Database Monitoring Connector will help you set up monitoring for Centreon monitoring database. 

## Pack assets

### Templates

The Monitoring Connector **Centreon Database** brings a host template:

* **App-Monitoring-Centreon-Database-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Centreon-Database-custom" label="App-Monitoring-Centreon-Database-custom">

| Service Alias | Service Template                       | Service Description                           |
|:--------------|:---------------------------------------|:----------------------------------------------|
| Partitioning  | App-Centreon-MySQL-Partitioning-custom | Check if your MySQL partitions are up to date |

> The services listed above are created automatically when the **App-Monitoring-Centreon-Database-custom** host template is used.

> Some services from **[MariaDB/MySQL](../procedures/applications-databases-mysql.md)** connector will also be created automatically since **App-Monitoring-Centreon-Database-custom** template inherits from **App-DB-MySQL-custom**.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Partitioning" label="Partitioning">

No metrics for this service.

</TabItem>
</Tabs>

## Prerequisites

### Creating a database user for Service Partitioning Monitoring

In order to be able to collect the needed information from the database, a database user with specific privileges is required:

``` mysql
CREATE USER 'monitor_user'@'IP_POLLER' IDENTIFIED BY 'a_very_secure_passwd';
GRANT SELECT ON *.* to 'monitor_user'@'IP_POLLER';
```

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
dnf install centreon-pack-applications-monitoring-centreon-database
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-centreon-database
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-monitoring-centreon-database
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-centreon-database
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Centreon Database** connector through
the **Configuration > Monitoring Connectors Manager** menu.

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
dnf install centreon-plugin-Applications-Monitoring-Centreon-Database
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Centreon-Database
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-monitoring-centreon-database
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Database
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Monitoring-Centreon-Database-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro         | Description                               | Default value     | Mandatory   |
|:--------------|:------------------------------------------|:------------------|:-----------:|
| MYSQLUSERNAME | User name used to connect to the database | centreon          |             |
| MYSQLPASSWORD | Password for the defined user name        |                   | X           |
| MYSQLPORT     | Database Server Port.                     | 3306              |             |

5. [Deploy the configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/onprem/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Partitioning" label="Partitioning">

| Macro      | Description                                                                      | Default value                           | Mandatory   |
|:-----------|:---------------------------------------------------------------------------------|:----------------------------------------|:-----------:|
| TABLENAME1 | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin | centreon\_storage.data\_bin             | X           |
| TABLENAME2 | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin | centreon\_storage.logs                  | X           |
| TABLENAME3 | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin | centreon\_storage.log\_archive\_service | X           |
| TABLENAME4 | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin | centreon\_storage.log\_archive\_host    | X           |
| WARNING    | Warning threshold (number of retention forward days)                             | 7:                                      |             |
| CRITICAL   | Critical threshold (number of retention forward days)                            | 3:                                      |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_centreon_database.pl \
	--plugin=database::mysql::plugin \
	--dyn-mode=apps::centreon::sql::mode::partitioning \
	--host='10.0.0.1' \
	--username='centreon' \
	--password='***' \
	--port='3306' \
	--tablename='centreon_storage.data_bin' \
	--tablename='centreon_storage.logs' \
	--tablename='centreon_storage.log_archive_service' \
	--tablename='centreon_storage.log_archive_host' \
	--warning='7:' \
	--critical='3:' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All table partitions are up to date 
Table 'centreon_storage.data_bin' last partition date is Thu Dec 21 00:00:00 2023 (current retention forward in days: 10)
Table 'centreon_storage.logs' last partition date is Thu Dec 21 00:00:00 2023 (current retention forward in days: 10)
Table 'centreon_storage.log_archive_service' last partition date is Thu Dec 21 00:00:00 2023 (current retention forward in days: 10)
Table 'centreon_storage.log_archive_host' last partition date is Thu Dec 21 00:00:00 2023 (current retention forward in days: 10)
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
/usr/lib/centreon/plugins/centreon_centreon_database.pl \
	--plugin=database::mysql::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                             | Linked service template                |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|
| arp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/arp.pm)]                                            | Not used in this Monitoring Connector  |
| backup [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/backup.pm)]                                     | Not used in this Monitoring Connector  |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]              | Not used in this Monitoring Connector  |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)]     | Not used in this Monitoring Connector  |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpu.pm)]                                            | Not used in this Monitoring Connector  |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpudetailed.pm)]                           | Not used in this Monitoring Connector  |
| databases-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/databasessize.pm)]                      | Not used in this Monitoring Connector  |
| disk-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/diskusage.pm)]                               | Not used in this Monitoring Connector  |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/diskio.pm)]                                      | Not used in this Monitoring Connector  |
| innodb-bufferpool-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/innodbbufferpoolhitrate.pm)] | Not used in this Monitoring Connector  |
| inodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/inodes.pm)]                                      | Not used in this Monitoring Connector  |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]                              | Not used in this Monitoring Connector  |
| list-diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listdiskio.pm)]                             | Not used in this Monitoring Connector  |
| list-diskspath [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listdiskspath.pm)]                       | Not used in this Monitoring Connector  |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]                     | Not used in this Monitoring Connector  |
| list-processes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listprocesses.pm)]                       | Not used in this Monitoring Connector  |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/liststorages.pm)]                         | Not used in this Monitoring Connector  |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/loadaverage.pm)]                                   | Not used in this Monitoring Connector  |
| long-queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/longqueries.pm)]                          | Not used in this Monitoring Connector  |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/memory.pm)]                                      | Not used in this Monitoring Connector  |
| myisam-keycache-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/myisamkeycachehitrate.pm)]     | Not used in this Monitoring Connector  |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/db_socket.pm)]                                                        | Not used in this Monitoring Connector  |
| open-files [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/openfiles.pm)]                              | Not used in this Monitoring Connector  |
| open-tables [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/opentables.pm)]                            | Not used in this Monitoring Connector  |
| partitioning [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/partitioning.pm)]                      | App-Centreon-MySQL-Partitioning-custom |
| password-expiration [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/passwordexpiration.pm)]            | Not used in this Monitoring Connector  |
| processcount [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/processcount.pm)]                          | Not used in this Monitoring Connector  |
| qcache-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/qcachehitrate.pm)]                      | Not used in this Monitoring Connector  |
| queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/queries.pm)]                                   | Not used in this Monitoring Connector  |
| replication [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/replication.pm)]                           | Not used in this Monitoring Connector  |
| slow-queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/slowqueries.pm)]                          | Not used in this Monitoring Connector  |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]                            | Not used in this Monitoring Connector  |
| sql-string [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sqlstring.pm)]               | Not used in this Monitoring Connector  |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/storage.pm)]                                    | Not used in this Monitoring Connector  |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/swap.pm)]                                          | Not used in this Monitoring Connector  |
| tcpcon [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/tcpcon.pm)]                                      | Not used in this Monitoring Connector  |
| threads-connected [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/threadsconnected.pm)]                | Not used in this Monitoring Connector  |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/ntp.pm)]                                           | Not used in this Monitoring Connector  |
| udpcon [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/udpcon.pm)]                                      | Not used in this Monitoring Connector  |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                                      | Not used in this Monitoring Connector  |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Partitioning" label="Partitioning">

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sqlmode                                  | This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-sqlmode                             | List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --multiple                                 | Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
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
| --datasource                               | Database server information, mandatory if the server's address and port are not defined in the corresponding options. The syntax depends on the database type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --username                                 | User name used to connect to the database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --password                                 | Password for the defined user name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --connect-options                          | Add connection options for the DBI connect method. Format: name=value,name2=value2,...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --connect-query                            | Execute a query just after the connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --sql-errors-exit                          | Expected status in case of DB error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --timeout                                  | Timeout in seconds for connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --exec-timeout                             | Timeout in seconds for query execution                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --tablename                                | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --warning                                  | Warning threshold (number of retention forward days)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --critical                                 | Critical threshold (number of retention forward days)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --timezone                                 | Timezone use for partitioning (if not set, we use current server execution timezone)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_centreon_database.pl \
	--plugin=database::mysql::plugin \
	--dyn-mode=apps::centreon::sql::mode::partitioning \
	--help
```
