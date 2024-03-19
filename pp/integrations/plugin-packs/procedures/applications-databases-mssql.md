---
id: applications-databases-mssql
title: Microsoft SQL Server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Microsoft SQL Server** brings a host template:

* **App-DB-MSSQL-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-DB-MSSQL-custom" label="App-DB-MSSQL-custom">

| Service Alias     | Service Template                      | Service Description                                                                                                           |
|:------------------|:--------------------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| Blocked-Processes | App-DB-MSSQL-Blocked-Processes-custom | Check blocked processes on the server. Service cannot work because of a SQL request. It depends of your MS SQL Server version |
| Connected-Users   | App-DB-MSSQL-Connected-Users-custom   | Check number of connected users on the database                                                                               |
| Connection-Time   | App-DB-MSSQL-Connection-Time-custom   | Check the connection time to the server. This time is given in seconds                                                        |
| Databases-Size    | App-DB-MSSQL-Databases-Size-custom    | Check database data and logs files                                                                                            |
| Deadlocks         | App-DB-MSSQL-Deadlocks-custom         | Check deadlocks per second of the server                                                                                      |
| Failed-Jobs       | App-DB-MSSQL-Failed-Jobs-custom       | Check MSSQL failed jobs                                                                                                       |
| Transactions      | App-DB-MSSQL-Transactions-custom      | Check transactions per second of the server. No alerts by default                                                             |

> The services listed above are created automatically when the **App-DB-MSSQL-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias        | Service Template                         | Service Description                                                         |
|:---------------------|:-----------------------------------------|:----------------------------------------------------------------------------|
| Backup-Age           | App-DB-MSSQL-Backup-Age-custom           | Check database backups of the server                                        |
| Cache-Hitratio       | App-DB-MSSQL-Cache-Hitratio-custom       | Check the "Data Buffer Cache Hit Ratio" of the server. No alerts by default |
| Locks-Waits          | App-DB-MSSQL-Locks-Waits-custom          | Check locks-waits per second of the server                                  |
| Page-Life-Expectancy | App-DB-MSSQL-Page-Life-Expectancy-custom | Check the "Page Life Expectancy" of the server. No alerts by default        |
| Sql-Statement        | App-DB-MSSQL-Sql-Statement-custom        | Check allowing to execute a custom SQL request with a digital answer        |
| Sql-Statement-String | App-DB-MSSQL-Sql-Statement-String-custom | Check allowing to execute a custom SQL request with a string answer         |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Backup-Age" label="Backup-Age">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| *databases*~backup.time.last.execution.days   | d     |
| *databases*~backup.time.last.duration.seconds | s     |

</TabItem>
<TabItem value="Blocked-Processes" label="Blocked-Processes">

| Metric name           | Unit  |
|:----------------------|:------|
| blocked-processes     | N/A   |
| *processes*#wait-time | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Cache-Hitratio" label="Cache-Hitratio">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| mssql.cache.hitratio.percentage | %     |

</TabItem>
<TabItem value="Connected-Users" label="Connected-Users">

| Metric name                 | Unit  |
|:----------------------------|:------|
| mssql.users.connected.count | count |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Metric name                  | Unit  |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Databases-Size" label="Databases-Size">

| Metric name                                  | Unit  |
|:---------------------------------------------|:------|
| *databases*~datafiles.space.usage.bytes      | B     |
| *databases*~datafiles.space.free.bytes       | B     |
| *databases*~datafiles.space.usage.percentage | %     |
| *databases*~logfiles.space.usage.bytes       | B     |
| *databases*~logfiles.space.free.bytes        | B     |
| *databases*~logfiles.space.usage.percentage  | %     |

</TabItem>
<TabItem value="Deadlocks" label="Deadlocks">

| Metric name           | Unit  |
|:----------------------|:------|
| mssql.deadlocks.count | count |

</TabItem>
<TabItem value="Failed-Jobs" label="Failed-Jobs">

| Metric name         | Unit  |
|:--------------------|:------|
| jobs.total.count    | count |
| jobs.failed.count   | count |
| jobs.success.count  | count |
| jobs.canceled.count | count |
| jobs.running.count  | count |
| jobs.retry.count    | count |
| status              | N/A   |

</TabItem>
<TabItem value="Locks-Waits" label="Locks-Waits">

| Metric name            | Unit  |
|:-----------------------|:------|
| mssql.lockswaits.count | count |

</TabItem>
<TabItem value="Page-Life-Expectancy" label="Page-Life-Expectancy">

| Metric name                  | Unit  |
|:-----------------------------|:------|
| page.life.expectancy.seconds | s     |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| value                             | N/A   |
| sqlrequest.execution.time.seconds | s     |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Metric name   | Unit  |
|:--------------|:------|
| *rows*#string | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Transactions" label="Transactions">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| databases.transactions.persecond           | /s    |
| *database*#database.transactions.persecond | /s    |

</TabItem>
</Tabs>

## Prerequisites

### Monitoring user

To use this probe, the configuration of a monitoring user with specific privileges is required. The `serveradmin` role 
can be used for testing purposes but should never be used in production because of the security risk involved. 

Birk Bohne, who is a valuable contributor of the _check\_mssql\_health_ probe, wrote a script to assign a less-privileged user. 
His script can be found under the **Preparation of the database** section of the following [documentation](https://github.com/lausser/check_mssql_health/blob/master/doc/check_mssql_health.en.txt). 

We recommend you use a domain user to better manage its properties and privileges. 

### Dependencies

These packages are required: `freetds perl-DBD-Sybase unixODBC`

### Freetds configuration

The default version used by freetds is 4.2. To guarantee optimal operations and security, edit the `freetds.conf` file,
uncomment this line `version = 4.2`and replace `4.2` with `8.0`. The 8.0 version is the minimal supported version.

The configuration file is located under different paths depending on your operating system: 
- RedHat-like: /etc/freetds.conf
- Debian 11: /etc/freetds/freetds.conf

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
dnf install centreon-pack-applications-databases-mssql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-mssql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-mssql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-mssql
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Microsoft SQL Server** connector through
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
dnf install centreon-plugin-Applications-Databases-Mssql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Mssql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-mssql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Mssql
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-DB-MSSQL-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro         | Description                                                                                           | Default value     | Mandatory   |
|:--------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MSSQLUSERNAME | User name used to connect to the database                                                             | USERNAME          |             |
| MSSQLPASSWORD | Password for the defined user name                                                                    | PASSWORD          |             |
| MSSQLPORT     | Database Server Port                                                                                  | 1433              |             |
| EXTRAOPTIONS  | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Backup-Age" label="Backup-Age">

| Macro                            | Description                                                                                                                                | Default value     | Mandatory   |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                       | Filter databases by name                                                                                                                   | ^(?!(tempdb))     |             |
| UNIT                             | Select the unit for expires threshold. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is days | d                 |             |
| FILTERDATABASESTATE              | Filter databases by state                                                                                                                  |                   |             |
| WARNINGFULLLASTDURATION          | Thresholds                                                                                                                                 |                   |             |
| CRITICALFULLLASTDURATION         | Thresholds                                                                                                                                 |                   |             |
| WARNINGFULLLASTEXECUTION         | Thresholds                                                                                                                                 |                   |             |
| CRITICALFULLLASTEXECUTION        | Thresholds                                                                                                                                 |                   |             |
| WARNINGINCREMENTALLASTDURATION   | Thresholds                                                                                                                                 |                   |             |
| CRITICALINCREMENTALLASTDURATION  | Thresholds                                                                                                                                 |                   |             |
| WARNINGINCREMENTALLASTEXECUTION  | Thresholds                                                                                                                                 |                   |             |
| CRITICALINCREMENTALLASTEXECUTION | Thresholds                                                                                                                                 |                   |             |
| WARNINGLASTDURATION              | Thresholds                                                                                                                                 |                   |             |
| CRITICALLASTDURATION             | Thresholds                                                                                                                                 |                   |             |
| WARNINGLASTEXECUTION             | Thresholds                                                                                                                                 |                   |             |
| CRITICALLASTEXECUTION            | Thresholds                                                                                                                                 |                   |             |
| WARNINGLOGLASTDURATION           | Thresholds                                                                                                                                 |                   |             |
| CRITICALLOGLASTDURATION          | Thresholds                                                                                                                                 |                   |             |
| WARNINGLOGLASTEXECUTION          | Thresholds                                                                                                                                 |                   |             |
| CRITICALLOGLASTEXECUTION         | Thresholds                                                                                                                                 |                   |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                        | --verbose         |             |

</TabItem>
<TabItem value="Blocked-Processes" label="Blocked-Processes">

| Macro                    | Description                                                                                         | Default value     | Mandatory   |
|:-------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSTATUS             | Filter results based on the status (can be a regexp)                                                |                   |             |
| FILTERPROGRAM            | Filter results based on the program (client) name (can be a regexp)                                 |                   |             |
| FILTERCOMMAND            | Filter results based on the command name (can be a regexp)                                          |                   |             |
| WARNINGBLOCKEDPROCESSES  | Warning threshold for total number of blocked processes                                             | 1                 |             |
| CRITICALBLOCKEDPROCESSES | Critical threshold for total number of blocked processes                                            | 5                 |             |
| WARNINGWAITTIME          | Warning threshold for blocked wait time                                                             |                   |             |
| CRITICALWAITTIME         | Critical threshold for blocked wait time                                                            |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Cache-Hitratio" label="Cache-Hitratio">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                   |                   |             |
| CRITICAL     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Connected-Users" label="Connected-Users">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                   |                   |             |
| CRITICAL     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in milliseconds                                                                   |                   |             |
| CRITICAL     | Critical threshold in milliseconds                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Databases-Size" label="Databases-Size">

| Macro                           | Description                                                                                         | Default value     | Mandatory   |
|:--------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERDATABASE                  | Filter database by name (Can be a regex)                                                            | ^(?!(tempdb))     |             |
| FILTERDATABASESTATE             | Filter databases by state                                                                           |                   |             |
| DATAFILESMAXSIZE                | Overload all data files max size (in MB)                                                            |                   |             |
| LOGSFILESMAXSIZE                | Overload all log files max size (in MB)                                                             |                   |             |
| DATAFILESMAXSIZEUNLIMITED       | Overload only unlimited autogrowth data files max size (in MB)                                      |                   |             |
| LOGSFILESMAXSIZEUNLIMITED       | Overload only unlimited autogrowth log files max size (in MB)                                       |                   |             |
| WARNINGDATAFILESSPACEUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALDATAFILESSPACEUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGDATAFILESSPACEUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALDATAFILESSPACEUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGDATAFILESSPACEUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALDATAFILESSPACEUSAGEPRCT | Thresholds                                                                                          |                   |             |
| WARNINGLOGFILESSPACEUSAGE       | Thresholds                                                                                          |                   |             |
| CRITICALLOGFILESSPACEUSAGE      | Thresholds                                                                                          |                   |             |
| WARNINGLOGFILESSPACEUSAGEFREE   | Thresholds                                                                                          |                   |             |
| CRITICALLOGFILESSPACEUSAGEFREE  | Thresholds                                                                                          |                   |             |
| WARNINGLOGFILESSPACEUSAGEPRCT   | Thresholds                                                                                          |                   |             |
| CRITICALLOGFILESSPACEUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Deadlocks" label="Deadlocks">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Filter database to check                                                                            |                   |             |
| WARNING      | Warning threshold number of dead locks per second                                                   |                   |             |
| CRITICAL     | Critical threshold number of dead locks per second                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Failed-Jobs" label="Failed-Jobs">

| Macro                | Description                                                                                                                        | Default value     | Mandatory   |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGJOBSCANCELED  | Thresholds                                                                                                                         |                   |             |
| CRITICALJOBSCANCELED | Thresholds                                                                                                                         |                   |             |
| WARNINGJOBSFAILED    | Thresholds                                                                                                                         |                   |             |
| CRITICALJOBSFAILED   | Thresholds                                                                                                                         |                   |             |
| WARNINGJOBSRETRY     | Thresholds                                                                                                                         |                   |             |
| CRITICALJOBSRETRY    | Thresholds                                                                                                                         |                   |             |
| WARNINGJOBSRUNNING   | Thresholds                                                                                                                         |                   |             |
| CRITICALJOBSRUNNING  | Thresholds                                                                                                                         |                   |             |
| WARNINGJOBSSUCCESS   | Thresholds                                                                                                                         |                   |             |
| CRITICALJOBSSUCCESS  | Thresholds                                                                                                                         |                   |             |
| WARNINGJOBSTOTAL     | Thresholds                                                                                                                         |                   |             |
| CRITICALJOBSTOTAL    | Thresholds                                                                                                                         |                   |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{name}, %{status}, %{duration}  |                   |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{name}, %{status}, %{duration} |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                | --verbose         |             |

</TabItem>
<TabItem value="Locks-Waits" label="Locks-Waits">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Filter database to check                                                                            |                   |             |
| WARNING      | Warning threshold number of lock-waits per second                                                   |                   |             |
| CRITICAL     | Critical threshold number of lock-waits per second                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Page-Life-Expectancy" label="Page-Life-Expectancy">

| Macro                      | Description                                                                                         | Default value     | Mandatory   |
|:---------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPAGELIFEEXPECTANCY  | Warning threshold                                                                                   |                   |             |
| CRITICALPAGELIFEEXPECTANCY | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Macro                 | Description                                                                                         | Default value     | Mandatory   |
|:----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SQLSTATEMENT          | SQL statement that returns a number                                                                 |                   | X           |
| WARNINGEXECUTIONTIME  | Thresholds                                                                                          |                   |             |
| CRITICALEXECUTIONTIME | Thresholds                                                                                          |                   |             |
| WARNINGVALUE          | Thresholds                                                                                          |                   |             |
| CRITICALVALUE         | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Macro        | Description                                                                                                                                                                               | Default value     | Mandatory   |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SQLSTATEMENT | SQL statement that returns a string                                                                                                                                                       |                   | X           |
| VALUE        | Value column (must be one of the selected field). MANDATORY                                                                                                                               |                   |             |
| WARNING      | Define the conditions to match for the status to be WARNING. (Can be: %{key\_field}, %{value\_field}) e.g --warning-string '%{key\_field} eq 'Central' && %{value\_field} =~ /127.0.0.1/' |                   |             |
| CRITICAL     | Define the conditions to match for the status to be CRITICAL (Can be: %{key\_field} or %{value\_field})                                                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                       |                   |             |

</TabItem>
<TabItem value="Transactions" label="Transactions">

| Macro                         | Description                                                                                         | Default value     | Mandatory   |
|:------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERDATABASE                | Filter database name (can be a regexp)                                                              |                   |             |
| WARNINGDATABASESTRANSACTIONS  | Thresholds                                                                                          |                   |             |
| CRITICALDATABASESTRANSACTIONS | Thresholds                                                                                          |                   |             |
| WARNINGDATABASETRANSACTIONS   | Thresholds                                                                                          |                   |             |
| CRITICALDATABASETRANSACTIONS  | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_mssql.pl \
	--plugin database::mssql::plugin \
	--hostname 10.0.0.1 \
	--port 1433 \
	--username 'USERNAME' \
	--password 'PASSWORD'  \
	--mode='transactions' \
	--filter-database='' \
	--warning-databases-transactions='' \
	--critical-databases-transactions='' \
	--warning-database-transactions='' \
	--critical-database-transactions='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: total transactions: 43/s All databases are ok | 'databases.transactions.persecond'=43/s;;;0;'*database*#database.transactions.persecond'=/s;;;0;
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
/usr/lib/centreon/plugins/centreon_mssql.pl \
	--plugin database::mssql::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                         | Linked service template                  |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|
| backup-age [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/backupage.pm)]                          | App-DB-MSSQL-Backup-Age-custom           |
| blocked-processes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/blockedprocesses.pm)]            | App-DB-MSSQL-Blocked-Processes-custom    |
| cache-hitratio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/cachehitratio.pm)]                  | App-DB-MSSQL-Cache-Hitratio-custom       |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]          | Not used in this Monitoring Connector    |
| connected-users [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/connectedusers.pm)]                | App-DB-MSSQL-Connected-Users-custom      |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)] | App-DB-MSSQL-Connection-Time-custom      |
| databases-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/databasessize.pm)]                  | App-DB-MSSQL-Databases-Size-custom       |
| dead-locks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/deadlocks.pm)]                          | App-DB-MSSQL-Deadlocks-custom            |
| failed-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/failedjobs.pm)]                        | App-DB-MSSQL-Failed-Jobs-custom          |
| list-databases [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/listdatabases.pm)]                  | Not used in this Monitoring Connector    |
| locks-waits [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/lockswaits.pm)]                        | App-DB-MSSQL-Locks-Waits-custom          |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database.pm)]                                                     | Not used in this Monitoring Connector    |
| page-life-expectancy [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/pagelifeexpectancy.pm)]       | App-DB-MSSQL-Page-Life-Expectancy-custom |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]                        | App-DB-MSSQL-Sql-Statement-custom        |
| sql-string [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sqlstring.pm)]           | App-DB-MSSQL-Sql-Statement-String-custom |
| tables [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/tables.pm)]                                 | Not used in this Monitoring Connector    |
| transactions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mssql/mode/transactions.pm)]                     | App-DB-MSSQL-Transactions-custom         |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     | Database Server Port.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --server                                   | An alternative to hostname+port. \<server\> will be looked up in the file freetds.conf.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --database                                 | Select database .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
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
| --datasource                               | Database server information, mandatory if the server's address and port are not defined in the corresponding options. The syntax depends on the database type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --username                                 | User name used to connect to the database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --password                                 | Password for the defined user name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --connect-options                          | Add connection options for the DBI connect method. Format: name=value,name2=value2,...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --connect-query                            | Execute a query just after the connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --sql-errors-exit                          | Expected status in case of DB error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --timeout                                  | Timeout in seconds for connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --exec-timeout                             | Timeout in seconds for query execution                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Backup-Age" label="Backup-Age">

| Option                   | Description                                                                                                                                                                                                  |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter databases by name.                                                                                                                                                                                    |
| --filter-database-state  | Filter databases by state.                                                                                                                                                                                   |
| --full-as-incremental    | Last incremental backup time uses last full backup time only if full is newer than incremental.                                                                                                              |
| --unit                   | Select the unit for expires threshold. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is days.                                                                  |
| --warning-* --critical-* | Thresholds. Can be: 'last-execution', 'last-duration', 'incremental-last-execution', 'incremental-last-duration', 'full-last-execution', 'full-last-duration', 'log-last-execution', 'log-last-duration'.    |

</TabItem>
<TabItem value="Blocked-Processes" label="Blocked-Processes">

| Option                       | Description                                                            |
|:-----------------------------|:-----------------------------------------------------------------------|
| --filter-status              | Filter results based on the status (can be a regexp).                  |
| --filter-program             | Filter results based on the program (client) name (can be a regexp).   |
| --filter-command             | Filter results based on the command name (can be a regexp).            |
| --warning-blocked-processes  | Warning threshold for total number of blocked processes.               |
| --critical-blocked-processes | Critical threshold for total number of blocked processes.              |
| --warning-wait-time          | Warning threshold for blocked wait time.                               |
| --critical-wait-time         | Critical threshold for blocked wait time.                              |

</TabItem>
<TabItem value="Cache-Hitratio" label="Cache-Hitratio">

| Option               | Description            |
|:---------------------|:-----------------------|
| --warning-hit-ratio  | Warning threshold.     |
| --critical-hit-ratio | Critical threshold.    |

</TabItem>
<TabItem value="Connected-Users" label="Connected-Users">

| Option                    | Description            |
|:--------------------------|:-----------------------|
| --warning-connected-user  | Warning threshold.     |
| --critical-connected-user | Critical threshold.    |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Option     | Description                            |
|:-----------|:---------------------------------------|
| --warning  | Warning threshold in milliseconds.     |
| --critical | Critical threshold in milliseconds.    |

</TabItem>
<TabItem value="Databases-Size" label="Databases-Size">

| Option                        | Description                                                                                                                                                                                  |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-database             | Filter database by name (Can be a regex).                                                                                                                                                    |
| --filter-database-state       | Filter databases by state.                                                                                                                                                                   |
| --datafiles-maxsize           | Overload all data files max size (in MB).                                                                                                                                                    |
| --logfiles-maxsize            | Overload all log files max size (in MB).                                                                                                                                                     |
| --datafiles-maxsize-unlimited | Overload only unlimited autogrowth data files max size (in MB).                                                                                                                              |
| --logfiles-maxsize-unlimited  | Overload only unlimited autogrowth log files max size (in MB).                                                                                                                               |
| --check-underlying-disk       | Check and consider underlying disk space for data and log files.                                                                                                                             |
| --ignore-unlimited            | Thresholds not applied on unlimited autogrowth data and log files.                                                                                                                           |
| --warning-* --critical-*      | Thresholds. Can be: 'datafiles-space-usage', 'datafiles-space-usage-free', 'datafiles-space-usage-prct' 'logfiles-space-usage', 'logfiles-space-usage-free', 'logfiles-space-usage-prct'.    |

</TabItem>
<TabItem value="Deadlocks" label="Deadlocks">

| Option               | Description                                           |
|:---------------------|:------------------------------------------------------|
| --warning-deadlocks  | Warning threshold number of dead locks per second.    |
| --critical-deadlocks | Critical threshold number of dead locks per second.   |
| --filter-database    | Filter database to check.                             |

</TabItem>
<TabItem value="Failed-Jobs" label="Failed-Jobs">

| Option                   | Description                                                                                                                          |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
| --filter                 | Filter job.                                                                                                                          |
| --lookback               | Check job history in minutes.                                                                                                        |
| --add-duration-perfdata  | Display job duration time.                                                                                                           |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{name}, %{status}, %{duration}    |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{name}, %{status}, %{duration}   |
| --warning-* --critical-* | Thresholds. Can be: 'jobs-total', 'jobs-failed', 'jobs-success', 'jobs-canceled', 'jobs-running', 'jobs-retry'.                      |

</TabItem>
<TabItem value="Locks-Waits" label="Locks-Waits">

| Option                | Description                                           |
|:----------------------|:------------------------------------------------------|
| --warning-lockswaits  | Warning threshold number of lock-waits per second.    |
| --critical-lockswaits | Critical threshold number of lock-waits per second.   |
| --filter-database     | Filter database to check.                             |

</TabItem>
<TabItem value="Page-Life-Expectancy" label="Page-Life-Expectancy">

| Option                          | Description            |
|:--------------------------------|:-----------------------|
| --warning-page-life-expectancy  | Warning threshold.     |
| --critical-page-life-expectancy | Critical threshold.    |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Option                   | Description                                              |
|:-------------------------|:---------------------------------------------------------|
| --sql-statement          | SQL statement that returns a number.                     |
| --format                 | Output format (Default: 'SQL statement result : %i.').   |
| --perfdata-unit          | Perfdata unit in perfdata output (Default: '')           |
| --perfdata-name          | Perfdata name in perfdata output (Default: 'value')      |
| --perfdata-min           | Minimum value to add in perfdata output (Default: '')    |
| --perfdata-max           | Maximum value to add in perfdata output (Default: '')    |
| --warning-* --critical-* | Thresholds. Can be: 'value', 'execution-time'.           |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Option             | Description                                                                                                                                                                                 |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --sql-statement    | SQL statement that returns a string.                                                                                                                                                        |
| --key-column       | Key column (must be one of the selected field). NOT mandatory if you select only one field                                                                                                  |
| --value-column     | Value column (must be one of the selected field). MANDATORY                                                                                                                                 |
| --printf-format    | Specify a custom output message relying on printf formatting. If this option is set --printf-value is mandatory.                                                                            |
| --printf-value     | Specify scalar used to replace in printf. If this option is set --printf-format is mandatory. (Can be: %{key\_field}, %{value\_field})                                                      |
| --warning-string   | Define the conditions to match for the status to be WARNING. (Can be: %{key\_field}, %{value\_field}) e.g --warning-string '%{key\_field} eq 'Central' && %{value\_field} =~ /127.0.0.1/'   |
| --critical-string  | Define the conditions to match for the status to be CRITICAL (Can be: %{key\_field} or %{value\_field})                                                                                     |
| --dual-table       | Set this option to ensure compatibility with dual table and Oracle.                                                                                                                         |
| --empty-sql-string | Set this option to change the output message when the sql statement result is empty. (Default: 'No row returned or --key-column/--value-column do not correctly match selected field')      |

</TabItem>
<TabItem value="Transactions" label="Transactions">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --filter-database        | Filter database name (can be a regexp).                                                                                                                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'databases-transactions', 'database-transactions'.                                                                                                                                                                        |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_mssql.pl \
	--plugin database::mssql::plugin \
	--hostname 10.0.0.1 \
	--help
```
