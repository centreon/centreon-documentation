---
id: applications-databases-mysql
title: MySQL/MariaDB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **MySQL/MariaDB** brings a host template:

* **App-DB-MySQL**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-DB-MySQL" label="App-DB-MySQL">

| Service Alias      | Service Template                | Service Description                                                                      |
|:-------------------|:--------------------------------|:-----------------------------------------------------------------------------------------|
| Connection-Time    | App-DB-MySQL-Connection-Time    | Check the connection time to the server. This time is given in seconds                   |
| Connections-Number | App-DB-MySQL-Connections-Number | Check the number of open connections                                                     |
| Database-Size      | App-DB-MySQL-Database-Size      | Check size of databases. No Alerts by default                                            |
| Myisam-Keycache    | App-DB-MySQL-Myisam-Keycache    | Check the hit rate of the MyISAM tables                                                  |
| Open-Files         | App-DB-MySQL-Open-Files         | Check the number of files that currently are open                                        |
| Queries            | App-DB-MySQL-Queries            | Check the average of queries per second                                                  |
| Slowqueries        | App-DB-MySQL-Slowqueries        | Check the number of slow queries since the last check. Gives the average rate per second |

> The services listed above are created automatically when the **App-DB-MySQL** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias        | Service Template                          | Service Description                                                                                |
|:---------------------|:------------------------------------------|:---------------------------------------------------------------------------------------------------|
| Backup               | App-DB-MySQL-Backup                       | Check backups                                                                                      |
| Collection           | App-DB-MySQL-Collection                   | Check backups                                                                                      |
| Innodb-Bufferpool    | App-DB-MySQL-Innodb-Bufferpool            | Check the hit rate of the InnoDB buffer                                                            |
| Long-Queries         | App-DB-MySQL-Long-Queries                 | Check current number of long queries                                                               |
| MariaDB-Replication  | App-DB-MySQL-MariaDB-Replication          | Collect and compute SQL datas                                                                      |
| Password-Expiration  | App-DB-MySQL-Password-Expiration          | Check user password expiration                                                                     |
| Qcache-Hitrate       | App-DB-MySQL-Qcache-Hitrate               | Check query cache hitrate                                                                          |
| Sql-Statement        | App-DB-MySQL-Sql-Statement-Generic        | Check allowing to execute a custom SQL request with a digital answer                               |
| Sql-Statement-String | App-DB-MySQL-Sql-Statement-String-Generic | Check allowing to execute a custom SQL request with a string answer                                |
| Uptime               | App-DB-MySQL-Uptime                       | This check indicates the operation time since the server is running. This time in given in minutes |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then appy the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Backup" label="Backup">

| Metric name                                      | Unit  |
|:-------------------------------------------------|:------|
| backup status                                    |       |
| *backup_name*#backup.time.last.execution.seconds | s     |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Metric name                  | Unit  |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Connections-Number" label="Connections-Number">

| Metric name                                       | Unit  |
|:--------------------------------------------------|:------|
| threads.connected.count                           |       |
| threads.connected.percentage                      | %     |
| *databases_name*#database.threads.connected.count |       |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Metric name                                               | Unit  |
|:----------------------------------------------------------|:------|
| databases.space.usage.bytes                               | B     |
| databases.space.free.bytes                                | B     |
| *database_name*#database.space.usage.bytes                | B     |
| *database_name*#database.space.free.bytes                 | B     |
| *database_name~table_name*#table.space.usage.bytes        | B     |
| *database_name~table_name*#table.space.free.bytes         | B     |
| *database_name~table_name*#table.fragmentation.percentage | %     |

</TabItem>
<TabItem value="Innodb-Bufferpool" label="Innodb-Bufferpool">

| Metric name                                    | Unit  |
|:-----------------------------------------------|:------|
| database.bufferpool.hitrate.average.percentage | %     |
| database.bufferpool.hitrate.delta.percentage   | %     |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Metric name                | Unit  |
|:---------------------------|:------|
| database.longqueries.count |       |

</TabItem>
<TabItem value="MariaDB-Replication" label="MariaDB-Replication">

| Metric name                                    | Unit  |
|:-----------------------------------------------|:------|
| instance.slaves.running.count                  |       |
| connection status                              |       |
| thread sql status                              |       |
| thread io status                               |       |
| *hostname~port*#instance.slave.latency.seconds | s     |
| replication status                             |       |

</TabItem>
<TabItem value="Myisam-Keycache" label="Myisam-Keycache">

| Metric name                                  | Unit  |
|:---------------------------------------------|:------|
| database.keycache.hitrate.average.percentage | %     |
| database.keycache.hitrate.delta.percentage   | %     |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Metric name               | Unit  |
|:--------------------------|:------|
| database.open.files.count |       |

</TabItem>
<TabItem value="Password-Expiration" label="Password-Expiration">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| user password expiration status |       |

</TabItem>
<TabItem value="Qcache-Hitrate" label="Qcache-Hitrate">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| database.qcache.hitrate.average.percentage | %     |
| database.qcache.hitrate.delta.percentage   | %     |

</TabItem>
<TabItem value="Queries" label="Queries">

| Metric name                | Unit  |
|:---------------------------|:------|
| queries.total.persecond    |       |
| queries.update.persecond   |       |
| queries.update.count       |       |
| queries.delete.persecond   |       |
| queries.delete.count       |       |
| queries.insert.persecond   |       |
| queries.insert.count       |       |
| queries.truncate.persecond |       |
| queries.truncate.count     |       |
| queries.select.persecond   |       |
| queries.select.count       |       |
| queries.commit.persecond   |       |
| queries.commit.count       |       |
| queries.begin.persecond    |       |
| queries.begin.count        |       |

</TabItem>
<TabItem value="Slowqueries" label="Slowqueries">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| database.slowqueries.delta.count |       |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| sqlrequest.execution.time.seconds | s     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name             | Unit  |
|:------------------------|:------|
| database.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

Listing of user privileges needed by service:

| Service             | Privileges                  | Database         |
|:--------------------|:----------------------------|:-----------------|
| Backup              | SELECT                      | mysql            |
| Connection-Time     | USAGE                       |                  |
| Connections-Number  | USAGE                       |                  |
| Database-Size       | SELECT                      |                  |
| Innodb-Bufferpool   | USAGE                       |                  |
| Long-Queries        | PROCESS                     |                  |
| MariaDB-Replication | PROCESS, REPLICATION CLIENT |                  |
| Myisam-Keycache     | USAGE                       |                  |
| Password-Expiration | SELECT                      | mysql            |
| Qcache-Hitrate      | USAGE                       |                  |
| Queries             | USAGE                       |                  |
| Slowqueries         | USAGE                       |                  |
| Uptime              | USAGE                       |                  |

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-databases-mysql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-mysql
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-databases-mysql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-mysql
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **MySQL/MariaDB** connector through
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
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Databases-Mysql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Mysql
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-databases-mysql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Mysql
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-DB-MySQL-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro             | Description                                                                                           | Default value     | Mandatory   |
|:------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| MYSQLPASSWORD     | Password for the defined user name                                                                    | PASSWORD          |             |
| MYSQLPORT         |                                                                                                       |                   |             |
| MYSQLUSERNAME     | User name used to connect to the database                                                             | USERNAME          |             |
| MYSQLEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Backup" label="Backup">

| Macro                     | Description                                                                                                                                                                                                                            | Default value                                                                         | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------|:------------|
| FILTERTYPE                | Filter backups by type (regexp can be used)                                                                                                                                                                                            |                                                                                       |             |
| CRITICALSTATUS            | Set critical threshold for status (Default: '%{has\_backup} eq "yes" and %{exit\_state} ne "SUCCESS" and %{last\_error} ne "NO\_ERROR"'). You can use the following variables: %{has\_backup}, %{last\_error}, %{exit\_state}, %{type} | %{has_backup} eq "yes" and %{exit_state} ne "SUCCESS" and %{last_error} ne "NO_ERROR" |             |
| WARNINGSTATUS             | Set warning threshold for status. You can use the following variables: %{has\_backup}, %{last\_error}, %{exit\_state}, %{type}                                                                                                         |                                                                                       |             |
| WARNINGTIMELASTEXECUTION  | Thresholds                                                                                                                                                                                                                             |                                                                                       |             |
| CRITICALTIMELASTEXECUTION | Thresholds                                                                                                                                                                                                                             |                                                                                       |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                    | --verbose                                                                             |             |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning in milliseconds                                                                   |                   |             |
| CRITICAL     | Threshold critical in milliseconds                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Connections-Number" label="Connections-Number">

| Macro             | Description                                                                                         | Default value     | Mandatory   |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING           | Thresholds                                                                                          |                   |             |
| CRITICAL          | Thresholds                                                                                          |                   |             |
| WARNINGUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Macro              | Description                                                                                         | Default value                                     | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------|:--------------------------------------------------|:------------|
| FILTERDATABASE     | Filter database to checks (Can be a regexp)                                                         | ^(?!(information_schema|performance_schema|test)) |             |
| FILTERPERFDATA     |                                                                                                     | database                                          |             |
| WARNINGDBFREE      | Thresholds (                                                                                        |                                                   |             |
| CRITICALDBFREE     | Thresholds (                                                                                        |                                                   |             |
| WARNINGDBUSAGE     | Thresholds (                                                                                        |                                                   |             |
| CRITICALDBUSAGE    | Thresholds (                                                                                        |                                                   |             |
| WARNINGTABLEFRAG   | Thresholds (                                                                                        |                                                   |             |
| CRITICALTABLEFRAG  | Thresholds (                                                                                        |                                                   |             |
| WARNINGTABLEFREE   | Thresholds (                                                                                        |                                                   |             |
| CRITICALTABLEFREE  | Thresholds (                                                                                        |                                                   |             |
| WARNINGTABLEUSAGE  | Thresholds (                                                                                        |                                                   |             |
| CRITICALTABLEUSAGE | Thresholds (                                                                                        |                                                   |             |
| WARNINGTOTALFREE   | Thresholds (                                                                                        |                                                   |             |
| CRITICALTOTALFREE  | Thresholds (                                                                                        |                                                   |             |
| WARNINGTOTALUSAGE  | Thresholds (                                                                                        |                                                   |             |
| CRITICALTOTALUSAGE | Thresholds (                                                                                        |                                                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose                                         |             |

</TabItem>
<TabItem value="Innodb-Bufferpool" label="Innodb-Bufferpool">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning                                                                                   |                   |             |
| CRITICAL     | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Macro         | Description                                                                                         | Default value     | Mandatory   |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| SECONDS       | The minimum execution time in seconds for a long query (Default: 60)                                | 60                |             |
| FILTERCOMMAND | Filter by command (can be a regexp. Default: '^(?!(sleep)$)')                                       | ^(?!(sleep)$)     |             |
| FILTERUSER    | Filter by user (can be a regexp)                                                                    |                   |             |
| WARNING       | Threshold warning (number of long queries)                                                          |                   |             |
| CRITICAL      | Threshold critical (number of long queries)                                                         |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="MariaDB-Replication" label="MariaDB-Replication">

| Macro                     | Description                                                                                                                                                               | Default value                                    | Mandatory   |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|:------------|
| PEERPORT                  |                                                                                                                                                                           | 3306                                             |             |
| PEERUSERNAME              |                                                                                                                                                                           | USERNAME                                         |             |
| PEERPASSWORD              |                                                                                                                                                                           | PASSWORD                                         |             |
| UNKNOWNREPLICATIONSTATUS  | Set unknown threshold for status (Default: '%{replication\_status} =~ /configurationIssue/i'). You can use the following variables: %{replication\_status}, %{display}    | %{replication_status} =~ /configurationIssue/i   |             |
| PEERHOST                  |                                                                                                                                                                           |                                                  |             |
| UNKNOWNCONNECTIONSTATUS   | Set unknown threshold for status. You can use the following variables: %{status}, %{error\_message}, %{display}                                                           |                                                  |             |
| CRITICALCONNECTIONSTATUS  | Set critical threshold for status (Default: '%{status} ne "ok"'). You can use the following variables: %{status}, %{error\_message}, %{display}                           | %{status} ne "ok"                                |             |
| WARNINGCONNECTIONSTATUS   | Set warning threshold for status. You can use the following variables: %{status}, %{error\_message}, %{display}                                                           |                                                  |             |
| WARNINGREPLICATIONSTATUS  | Set warning threshold for status (Default: '%{replication\_status} =~ /inProgress/i'). You can use the following variables: %{replication\_status}, %{display}            | %{replication_status} =~ /inProgress/i           |             |
| CRITICALREPLICATIONSTATUS | Set critical threshold for status (Default: '%{replication\_status} =~ /connectIssueToMaster/i'). You can use the following variables: %{replication\_status}, %{display} | %{replication_status} =~ /connectIssueToMaster/i |             |
| WARNINGSLAVELATENCY       | Thresholds                                                                                                                                                                |                                                  |             |
| CRITICALSLAVELATENCY      | Thresholds                                                                                                                                                                |                                                  |             |
| CRITICALSLAVESRUNNING     | Thresholds                                                                                                                                                                | 1:1                                              |             |
| WARNINGSLAVESRUNNING      | Thresholds                                                                                                                                                                |                                                  |             |
| WARNINGTHREADIOSTATUS     |                                                                                                                                                                           |                                                  |             |
| CRITICALTHREADIOSTATUS    |                                                                                                                                                                           |                                                  |             |
| WARNINGTHREADSQLSTATUS    |                                                                                                                                                                           |                                                  |             |
| CRITICALTHREADSQLSTATUS   |                                                                                                                                                                           |                                                  |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                       | --verbose                                        |             |

</TabItem>
<TabItem value="Myisam-Keycache" label="Myisam-Keycache">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning                                                                                   |                   |             |
| CRITICAL     | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning in percent                                                                        |                   |             |
| CRITICAL     | Threshold critical in percent                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Password-Expiration" label="Password-Expiration">

| Macro          | Description                                                                                                                                                            | Default value                                | Mandatory   |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|:------------|
| CRITICALSTATUS | Set critical threshold for status (Default: '%{expire} ne "never" and %{expire\_time} == 0'). You can use the following variables: %{user}, %{expire}, %{expire\_time} | %{expire} ne "never" and %{expire_time} == 0 |             |
| WARNINGSTATUS  | Set warning threshold for status. You can use the following variables: %{user}, %{expire}, %{expire\_time}                                                             |                                              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                    | --verbose                                    |             |

</TabItem>
<TabItem value="Qcache-Hitrate" label="Qcache-Hitrate">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning                                                                                   |                   |             |
| CRITICAL     | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Queries" label="Queries">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning                                                                                   |                   |             |
| CRITICAL     | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Slowqueries" label="Slowqueries">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Warning number for slow queries since last check                                                    |                   |             |
| CRITICAL     | Critical number for slow queries since last check                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      |                                                                                                     |                   |             |
| CRITICAL     |                                                                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Macro        | Description                                                                                                                                                                                     | Default value     | Mandatory   |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| VALUE        | Value column (must be one of the selected field). MANDATORY                                                                                                                                     |                   |             |
| WARNING      | Set warning condition (if statement syntax) for status evaluation. (Can be: %{key\_field}, %{value\_field}) e.g --warning-string '%{key\_field} eq 'Central' && %{value\_field} =~ /127.0.0.1/' |                   |             |
| CRITICAL     | Set critical condition (if statement syntax) for status evaluation. (Can be: %{key\_field} or %{value\_field})                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                             |                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning                                                                                   |                   |             |
| CRITICAL     | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a server using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_mysql.pl \
	--plugin=database::mysql::plugin  \
	--host=10.0.0.1 \
	--username='myuser' \
	--password='mypass' \
	--port='3306'  \
	--mode=connection-time \
	--verbose
```

The expected command output is shown below:

```bash
OK: Connection established in 0.038s. | 'connection.time.milliseconds'=38ms;;;0;
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_mysql.pl \
	--plugin=database::mysql::plugin  \
    --list-mode
```

The plugin brings the following modes:

| Mode                      | Linked service template                   |
|:--------------------------|:------------------------------------------|
| backup                    | App-DB-MySQL-Backup                       |
| collection                | Not used in this Monitoring Connector     |
| connection-time           | App-DB-MySQL-Connection-Time              |
| databases-size            | App-DB-MySQL-Database-Size                |
| innodb-bufferpool-hitrate | App-DB-MySQL-Innodb-Bufferpool            |
| long-queries              | App-DB-MySQL-Long-Queries                 |
| myisam-keycache-hitrate   | App-DB-MySQL-Myisam-Keycache              |
| open-files                | App-DB-MySQL-Open-Files                   |
| password-expiration       | App-DB-MySQL-Password-Expiration          |
| qcache-hitrate            | App-DB-MySQL-Qcache-Hitrate               |
| queries                   | App-DB-MySQL-Queries                      |
| replication               | App-DB-MySQL-MariaDB-Replication          |
| slow-queries              | App-DB-MySQL-Slowqueries                  |
| sql                       | App-DB-MySQL-Sql-Statement-Generic        |
| sql-string                | App-DB-MySQL-Sql-Statement-String-Generic |
| threads-connected         | App-DB-MySQL-Connections-Number           |
| uptime                    | App-DB-MySQL-Uptime                       |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --sqlmode                                  | This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global |
| --list-sqlmode                             | List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --multiple                                 | Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Global |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --datasource                               | Database server information, mandatory if the server's address and port are not defined in the corresponding options. The syntax depends on the database type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Dbi    |
| --username                                 | User name used to connect to the database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Dbi    |
| --password                                 | Password for the defined user name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Dbi    |
| --connect-options                          | Add connection options for the DBI connect method. Format: name=value,name2=value2,...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Dbi    |
| --connect-query                            | Execute a query just after the connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Dbi    |
| --sql-errors-exit                          | Expected status in case of DB error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Dbi    |
| --timeout                                  | Timeout in seconds for connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Dbi    |
| --exec-timeout                             | Timeout in seconds for query execution                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Dbi    |

#### Modes options

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Backup" label="Backup">

| Option                   | Description                                                                                                                                                                                                                              | Type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-type            | Filter backups by type (regexp can be used).                                                                                                                                                                                             | Mode |
| --unknown-status         | Set unknown threshold for status. You can use the following variables: %{has\_backup}, %{last\_error}, %{exit\_state}, %{type}                                                                                                           | Mode |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{has\_backup}, %{last\_error}, %{exit\_state}, %{type}                                                                                                           | Mode |
| --critical-status        | Set critical threshold for status (Default: '%{has\_backup} eq "yes" and %{exit\_state} ne "SUCCESS" and %{last\_error} ne "NO\_ERROR"'). You can use the following variables: %{has\_backup}, %{last\_error}, %{exit\_state}, %{type}   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'time-last-execution'.                                                                                                                                                                                               | Mode |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Option     | Description                            | Type |
|:-----------|:---------------------------------------|:-----|
| --warning  | Threshold warning in milliseconds.     | Mode |
| --critical | Threshold critical in milliseconds.    | Mode |

</TabItem>
<TabItem value="Connections-Number" label="Connections-Number">

| Option                   | Description                                                                     | Type |
|:-------------------------|:--------------------------------------------------------------------------------|:-----|
| --add-databases          | Add threads by databases.                                                       | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'usage', 'usage-prct' (%), 'database-threads-connected'.    | Mode |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Option                   | Description                                                                                                            | Type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-database        | Filter database to checks (Can be a regexp).                                                                           | Mode |
| --filter-table           | Filter table name (can be a regexp).                                                                                   | Mode |
| --warning-* --critical-* | Thresholds (Can be: 'total-usage', 'total-free', 'db-usage', 'db-free', 'table-usage', 'table-free', 'table-frag').    | Mode |

</TabItem>
<TabItem value="Innodb-Bufferpool" label="Innodb-Bufferpool">

| Option                 | Description                                                                                                  | Type      |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                   | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                              | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                      | Retention |
| --redis-db             | Set Redis database index.                                                                                    | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                         | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                               | Retention |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                          | Retention |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                           | Retention |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.   | Retention |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                           | Retention |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                | Retention |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                    | Retention |
| --warning              | Threshold warning.                                                                                           | Mode      |
| --critical             | Threshold critical.                                                                                          | Mode      |
| --lookback             | Threshold isn't on the percent calculated from the difference ('bufferpool\_hitrate\_now').                  | Mode      |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Option           | Description                                                             | Type |
|:-----------------|:------------------------------------------------------------------------|:-----|
| --warning        | Threshold warning (number of long queries).                             | Mode |
| --critical       | Threshold critical (number of long queries).                            | Mode |
| --seconds        | The minimum execution time in seconds for a long query (Default: 60).   | Mode |
| --filter-user    | Filter by user (can be a regexp).                                       | Mode |
| --filter-command | Filter by command (can be a regexp. Default: '^(?!(sleep)$)').          | Mode |

</TabItem>
<TabItem value="MariaDB-Replication" label="MariaDB-Replication">

| Option                        | Description                                                                                                                                                                 | Type |
|:------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-connection-status   | Set unknown threshold for status. You can use the following variables: %{status}, %{error\_message}, %{display}                                                             | Mode |
| --warning-connection-status   | Set warning threshold for status. You can use the following variables: %{status}, %{error\_message}, %{display}                                                             | Mode |
| --critical-connection-status  | Set critical threshold for status (Default: '%{status} ne "ok"'). You can use the following variables: %{status}, %{error\_message}, %{display}                             | Mode |
| --unknown-replication-status  | Set unknown threshold for status (Default: '%{replication\_status} =~ /configurationIssue/i'). You can use the following variables: %{replication\_status}, %{display}      | Mode |
| --warning-replication-status  | Set warning threshold for status (Default: '%{replication\_status} =~ /inProgress/i'). You can use the following variables: %{replication\_status}, %{display}              | Mode |
| --critical-replication-status | Set critical threshold for status (Default: '%{replication\_status} =~ /connectIssueToMaster/i'). You can use the following variables: %{replication\_status}, %{display}   | Mode |
| --warning-* --critical-*      | Thresholds. Can be: 'slaves-running', 'slave-latency' (s).                                                                                                                  | Mode |

</TabItem>
<TabItem value="Myisam-Keycache" label="Myisam-Keycache">

| Option                 | Description                                                                                                  | Type      |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                   | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                              | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                      | Retention |
| --redis-db             | Set Redis database index.                                                                                    | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                         | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                               | Retention |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                          | Retention |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                           | Retention |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.   | Retention |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                           | Retention |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                | Retention |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                    | Retention |
| --warning              | Threshold warning.                                                                                           | Mode      |
| --critical             | Threshold critical.                                                                                          | Mode      |
| --lookback             | Threshold isn't on the percent calculated from the difference ('keycache\_hitrate\_now').                    | Mode      |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Option     | Description                       | Type |
|:-----------|:----------------------------------|:-----|
| --warning  | Threshold warning in percent.     | Mode |
| --critical | Threshold critical in percent.    | Mode |

</TabItem>
<TabItem value="Password-Expiration" label="Password-Expiration">

| Option            | Description                                                                                                                                                               | Type |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-status  | Set warning threshold for status. You can use the following variables: %{user}, %{expire}, %{expire\_time}                                                                | Mode |
| --critical-status | Set critical threshold for status (Default: '%{expire} ne "never" and %{expire\_time} == 0'). You can use the following variables: %{user}, %{expire}, %{expire\_time}    | Mode |

</TabItem>
<TabItem value="Qcache-Hitrate" label="Qcache-Hitrate">

| Option                 | Description                                                                                                  | Type      |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                   | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                              | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                      | Retention |
| --redis-db             | Set Redis database index.                                                                                    | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                         | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                               | Retention |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                          | Retention |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                           | Retention |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.   | Retention |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                           | Retention |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                | Retention |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                    | Retention |
| --warning              | Threshold warning.                                                                                           | Mode      |
| --critical             | Threshold critical.                                                                                          | Mode      |
| --lookback             | Threshold isn't on the percent calculated from the difference ('qcache\_hitrate\_now').                      | Mode      |

</TabItem>
<TabItem value="Queries" label="Queries">

| Option                 | Description                                                                                                    | Type      |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                     | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                        | Retention |
| --redis-db             | Set Redis database index.                                                                                      | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                           | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                 | Retention |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                            | Retention |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                             | Retention |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.     | Retention |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                             | Retention |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                  | Retention |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                      | Retention |
| --warning-*            | Threshold warning. Can be: 'total', 'update', 'insert', 'delete', 'truncate', 'select', 'begin', 'commit'.     | Mode      |
| --critical-*           | Threshold critical. Can be: 'total', 'update', 'insert', 'delete', 'truncate', 'select', 'begin', 'commit'.    | Mode      |

</TabItem>
<TabItem value="Slowqueries" label="Slowqueries">

| Option                 | Description                                                                                                  | Type      |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                   | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                              | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                      | Retention |
| --redis-db             | Set Redis database index.                                                                                    | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                         | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                               | Retention |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                          | Retention |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                           | Retention |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.   | Retention |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                           | Retention |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                | Retention |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                    | Retention |
| --warning              | Warning number for slow queries since last check.                                                            | Mode      |
| --critical             | Critical number for slow queries since last check.                                                           | Mode      |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Option                   | Description                                              | Type |
|:-------------------------|:---------------------------------------------------------|:-----|
| --sql-statement          | SQL statement that returns a number.                     | Mode |
| --format                 | Output format (Default: 'SQL statement result : %i.').   | Mode |
| --perfdata-unit          | Perfdata unit in perfdata output (Default: '')           | Mode |
| --perfdata-name          | Perfdata name in perfdata output (Default: 'value')      | Mode |
| --perfdata-min           | Minimum value to add in perfdata output (Default: '')    | Mode |
| --perfdata-max           | Maximum value to add in perfdata output (Default: '')    | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'value', 'execution-time'.           | Mode |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Option             | Description                                                                                                                                                                                       | Type |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --sql-statement    | SQL statement that returns a string.                                                                                                                                                              | Mode |
| --key-column       | Key column (must be one of the selected field). NOT mandatory if you select only one field                                                                                                        | Mode |
| --value-column     | Value column (must be one of the selected field). MANDATORY                                                                                                                                       | Mode |
| --printf-format    | Specify a custom output message relying on printf formatting                                                                                                                                      | Mode |
| --printf-value     | Specify scalar used to replace in printf (Can be: $self-\>{result\_values}-\>{key\_field}, $self-\>{result\_values}-\>{value\_field})                                                             | Mode |
| --warning-string   | Set warning condition (if statement syntax) for status evaluation. (Can be: %{key\_field}, %{value\_field}) e.g --warning-string '%{key\_field} eq 'Central' && %{value\_field} =~ /127.0.0.1/'   | Mode |
| --critical-string  | Set critical condition (if statement syntax) for status evaluation. (Can be: %{key\_field} or %{value\_field})                                                                                    | Mode |
| --dual-table       | Set this option to ensure compatibility with dual table and Oracle.                                                                                                                               | Mode |
| --empty-sql-string | Set this option to change the output message when the sql statement result is empty. (Default: 'No row returned or --key-column/--value-column do not correctly match selected field')            | Mode |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option     | Description                   | Type |
|:-----------|:------------------------------|:-----|
| --warning  | Threshold warning.            | Mode |
| --critical | Threshold critical.           | Mode |
| --seconds  | Display uptime in seconds.    | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_mysql.pl \
	--plugin=database::mysql::plugin  \
	--host=10.0.0.1 \
    --help
```
