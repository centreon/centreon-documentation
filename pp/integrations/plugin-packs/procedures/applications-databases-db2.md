---
id: applications-databases-db2
slug: /applications-databases-db2
title: DB2 Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **DB2 Database** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **DB2 Database** brings a host template:

* **App-DB-Db2-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-DB-Db2-custom" label="App-DB-Db2-custom">

| Service Alias   | Service Template                  | Service Description                     | Discovery  |
|:----------------|:----------------------------------|:----------------------------------------|:----------:|
| Connected-Users | App-DB-Db2-Connected-Users-custom | Check connected users                   |            |
| Connection-Time | App-DB-Db2-Connection-Time-custom | Check the connection time to the server |            |
| Database-Logs   | App-DB-Db2-Database-Logs-custom   | Check database logs utilization         |            |
| Database-Usage  | App-DB-Db2-Database-Usage-custom  | Check database space usage              |            |
| Tablespaces     | App-DB-Db2-Tablespaces-custom     | Check tablespaces                       | X          |

> The services listed above are created automatically when the **App-DB-Db2-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                  | Description |
|:---------------------------|:------------|
| App-DB-Db2-Tablespace-Name | Discover tablespaces and monitor usage            |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Connected-Users" label="Connected-Users">

| Name                  | Unit  |
|:----------------------|:------|
| users.connected.count | count |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Name                         | Unit  |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Database-Logs" label="Database-Logs">

| Name                                 | Unit  |
|:-------------------------------------|:------|
| *logs*#database.log.usage.bytes      | B     |
| *logs*#database.log.free.bytes       | B     |
| *logs*#database.log.usage.percentage | %     |

</TabItem>
<TabItem value="Database-Usage" label="Database-Usage">

| Name                            | Unit  |
|:--------------------------------|:------|
| database.space.usage.bytes      | B     |
| database.space.free.bytes       | B     |
| database.space.usage.percentage | %     |

</TabItem>
<TabItem value="Tablespaces" label="Tablespaces">

| Name                                     | Unit  |
|:-----------------------------------------|:------|
| status                                   | N/A   |
| status                                   | N/A   |
| *tbs1*#tablespace.space.usage.bytes      | B     |
| *tbs2*#tablespace.space.usage.bytes      | B     |
| *tbs1*#tablespace.space.free.bytes       | B     |
| *tbs2*#tablespace.space.free.bytes       | B     |
| *tbs1*#tablespace.space.usage.percentage | %     |
| *tbs2*#tablespace.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

### Install plugin dependencies

#### RPM

In order to use this connector, the `wget` command-line tool and the GNU Compiler Collection (`gcc`) are necessary.

```bash
yum install -y gcc wget ksh
```

#### DB2 driver package

Go to your IBM support website and download the archive `data_server_driver_package_linuxx64_v11.5.tar.gz`.

Install the archive manually:

```bash
tar zxf ibm_data_server_driver_package_linuxx64_v11.5.tar.gz
mv dsdriver/ /opt/
cd /opt/dsdriver/
./installDSDriver
echo "/opt/dsdriver/lib/" > /etc/ld.so.conf.d/db2-x86_64.conf
/sbin/ldconfig
```

#### Perl library for DB2

As root, run:

```bash
cd /usr/local/src
wget https://cpan.metacpan.org/authors/id/R/RO/ROCKETDB/DBD-DB2-1.89.tar.gz
tar zxvf DBD-DB2-1.89.tar.gz
cd DBD-DB2-1.89/
export DB2LIB=/opt/dsdriver/lib/
export DB2_HOME=/opt/dsdriver/
perl Makefile.PL
```

Compile the library:

```bash
make
```

Install it:

```bash
make install
```

### User account

The safest way to retrieve information from the DB2 server is to create a dedicated user for Centreon.

This user account must have the read permission on following tables:
- syscat.tablespaces
- sysibmadm.applications
- sysibmadm.container_utilization
- sysibmadm.log_utilization
- sysibmadm.tbsp_utilization

This user must have the permission to execute the `SYSPROC.GET_DBSIZE_INFO` procedure.

This user must have the permission to execute the `SYSPROC.GET_DBSIZE_INFO` procedure and the `SYSMON` authority.

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
dnf install centreon-pack-applications-databases-db2
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-db2
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-db2
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-db2
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **DB2 Database** connector through
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
dnf install centreon-plugin-Applications-Databases-Db2
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Db2
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-db2
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Db2
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-DB-Db2-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                            | Default value     | Mandatory   |
|:----------------|:-------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DB2USERNAME     | DB2 username                                                                                                       |                   |             |
| DB2PASSWORD     | DB2 password                                                                                                       |                   |             |
| DB2PORT         | TCP/IP server port number that is assigned to the Db2 database system                                  | 50000             |             |
| DB2DATABASE     | Name for the Db2 database system. If --server is not set, it's a cataloged connection (database alias) |                   |             |
| DB2EXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).   |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Connected-Users" label="Connected-Users">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERAPPLNAME    | Filter users by application name (can be a regex)                                                  |                   |             |
| WARNINGCONNECTED  | Threshold                                                                                          |                   |             |
| CRITICALCONNECTED | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Macro        | Description                                                                                        | Default value      | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| WARNINGTIME  | Warning threshold in milliseconds                                                                  |                    |             |
| CRITICALTIME | Critical threshold in milliseconds                                                                 |                    |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --use-new-perfdata |             |

</TabItem>
<TabItem value="Database-Logs" label="Database-Logs">

| Macro                | Description                                                                                        | Default value     | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGLOGUSAGE      | Threshold                                                                                                   |                   |             |
| CRITICALLOGUSAGE     | Threshold                                                                                                   |                   |             |
| WARNINGLOGUSAGEFREE  | Threshold                                                                                                   |                   |             |
| CRITICALLOGUSAGEFREE | Threshold                                                                                                   |                   |             |
| WARNINGLOGUSAGEPRCT  | Threshold                                                                                                   |                   |             |
| CRITICALLOGUSAGEPRCT | Threshold                                                                                                   |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Database-Usage" label="Database-Usage">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSPACEUSAGE      | Threshold                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Threshold                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Threshold                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Threshold                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Threshold                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Tablespaces" label="Tablespaces">

| Macro                  | Description                                                                                                                                                                 | Default value           | Mandatory   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERNAME             | Filter tablespaces by name (can be a regexp)                                                                                                                                |                         |             |
| FILTERTYPE             | Filter tablespaces by type (can be a regexp)                                                                                                                                |                         |             |
| WARNINGSPACEUSAGE      | Threshold                                                                                                                                                                   |                         |             |
| CRITICALSPACEUSAGE     | Threshold                                                                                                                                                                   |                         |             |
| WARNINGSPACEUSAGEFREE  | Threshold                                                                                                                                                                   |                         |             |
| CRITICALSPACEUSAGEFREE | Threshold                                                                                                                                                                   |                         |             |
| WARNINGSPACEUSAGEPRCT  | Threshold                                                                                                                                                                   |                         |             |
| CRITICALSPACEUSAGEPRCT | Threshold                                                                                                                                                                   |                         |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /normal/i'). You can use the following variables: %\{tbsname\}, %\{type\}, %\{state\} | %\{state\} !~ /normal/i |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{tbsname\}, %\{type\}, %\{state\}                                       |                         |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                          | --verbose               |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_database_db2.pl \
	--plugin=database::db2::plugin \
	--server='10.0.0.1' \
	--port='50000' \
	--database='xxxxxx' \
	--username='' \
	--password=''   \
	--mode='tablespaces' \
	--filter-name='' \
	--filter-type='' \
	--warning-status='' \
	--critical-status='%\{state\} !~ /normal/i' \
	--warning-space-usage='' \
	--critical-space-usage='' \
	--warning-space-usage-free='' \
	--critical-space-usage-free='' \
	--warning-space-usage-prct='' \
	--critical-space-usage-prct='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All tablespaces are ok | 'tbs1#tablespace.space.usage.bytes'=11813B;;;; 'tbs2#tablespace.space.usage.bytes'=27293B;;;; 'tbs1#tablespace.space.free.bytes'=4886B;;;; 'tbs2#tablespace.space.free.bytes'=24B;;;; 'tbs1#tablespace.space.usage.percentage'=64%;;;;100 'tbs2#tablespace.space.usage.percentage'=44%;;;;100
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
/usr/lib/centreon/plugins/centreon_database_db2.pl \
	--plugin=database::db2::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                         | Linked service template               |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]          | Not used in this Monitoring Connector |
| connected-users [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/db2/mode/connectedusers.pm)]                  | App-DB-Db2-Connected-Users-custom     |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)] | App-DB-Db2-Connection-Time-custom     |
| database-logs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/db2/mode/databaselogs.pm)]                      | App-DB-Db2-Database-Logs-custom       |
| database-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/db2/mode/databaseusage.pm)]                    | App-DB-Db2-Database-Usage-custom      |
| hadr [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/db2/mode/hadr.pm)]                                       | Not used in this Monitoring Connector |
| list-tablespaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/db2/mode/listtablespaces.pm)]                | Used for service discovery            |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database.pm)]                                                     | Not used in this Monitoring Connector |
| tablespaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/db2/mode/tablespaces.pm)]                         | App-DB-Db2-Tablespaces-custom         |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sqlmode                                  |   This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-sqlmode                             |   List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --multiple                                 |   Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --server                                   |   Domain name or IP address of the Db2 database system (Uncataloged database connections)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --port                                     |   TCP/IP server port number that is assigned to the Db2 database system                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --database                                 |   Name for the Db2 database system. If --server is not set, it's a cataloged connection (database alias).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Connected-Users" label="Connected-Users">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --filter-appl-name       |   Filter users by application name (can be a regex).                                                                          |
| --exclude-appl-name      |   Exclude users by application name (can be a regex).                                                                         |
| --warning-* --critical-* |   Thresholds. Can be: 'connected'.                                                                                            |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Option     | Description                              |
|:-----------|:-----------------------------------------|
| --warning  |   Warning threshold in milliseconds.     |
| --critical |   Critical threshold in milliseconds.    |

</TabItem>
<TabItem value="Database-Logs" label="Database-Logs">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-* --critical-* |   Thresholds. Can be: 'usage', 'usage-free', 'usage-prct'.                                                                    |

</TabItem>
<TabItem value="Database-Usage" label="Database-Usage">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-* --critical-* |   Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.                                                  |

</TabItem>
<TabItem value="Tablespaces" label="Tablespaces">

| Option                   | Description                                                                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                                          |
| --filter-type            |   Filter tablespaces by type (can be a regexp).                                                                                                                                 |
| --filter-name            |   Filter tablespaces by name (can be a regexp).                                                                                                                                 |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{tbsname\}, %\{type\}, %\{state\}                                         |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{tbsname\}, %\{type\}, %\{state\}                                         |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /normal/i'). You can use the following variables: %\{tbsname\}, %\{type\}, %\{state\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.                                                                                                    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_database_db2.pl \
	--plugin=database::db2::plugin \
	--server='10.0.0.1' \
	--help
```
