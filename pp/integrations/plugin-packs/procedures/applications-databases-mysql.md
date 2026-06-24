---
id: applications-databases-mysql
slug: /applications-databases-mysql
title: MySQL/MariaDB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **MySQL/MariaDB** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **MySQL/MariaDB** brings a host template:

* **App-DB-MySQL-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-DB-MySQL-custom" label="App-DB-MySQL-custom">

| Service Alias      | Service Template                       | Service Description                                                                      |
|:-------------------|:---------------------------------------|:-----------------------------------------------------------------------------------------|
| Connection-Time    | App-DB-MySQL-Connection-Time-custom    | Check the connection time to the server. This time is given in seconds                   |
| Connections-Number | App-DB-MySQL-Connections-Number-custom | Check the number of open connections                                                     |
| Database-Size      | App-DB-MySQL-Database-Size-custom      | Check size of databases. No Alerts by default                                            |
| Myisam-Keycache    | App-DB-MySQL-Myisam-Keycache-custom    | Check the hit rate of the MyISAM tables                                                  |
| Open-Files         | App-DB-MySQL-Open-Files-custom         | Check the number of files that currently are open                                        |
| Queries            | App-DB-MySQL-Queries-custom            | Check the average of queries per second                                                  |
| Slowqueries        | App-DB-MySQL-Slowqueries-custom        | Check the number of slow queries since the last check. Gives the average rate per second |

> The services listed above are created automatically when the **App-DB-MySQL-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias        | Service Template                                 | Service Description                                                                                |
|:---------------------|:-------------------------------------------------|:---------------------------------------------------------------------------------------------------|
| Backup               | App-DB-MySQL-Backup-custom                       | Check backups                                                                                      |
| Innodb-Bufferpool    | App-DB-MySQL-Innodb-Bufferpool-custom            | Check the hit rate of the InnoDB buffer                                                            |
| Long-Queries         | App-DB-MySQL-Long-Queries-custom                 | Check current number of long queries                                                               |
| MariaDB-Replication  | App-DB-MySQL-MariaDB-Replication-custom          | Check the state of the replication between two databases                                           |
| Password-Expiration  | App-DB-MySQL-Password-Expiration-custom          | Check user password expiration                                                                     |
| Qcache-Hitrate       | App-DB-MySQL-Qcache-Hitrate-custom               | Check query cache hitrate                                                                          |
| Sql-Statement        | App-DB-MySQL-Sql-Statement-Generic-custom        | Check allowing to execute a custom SQL request with a numerical result                             |
| Sql-Statement-String | App-DB-MySQL-Sql-Statement-String-Generic-custom | Check allowing to execute a custom SQL request with a string result                                |
| Uptime               | App-DB-MySQL-Uptime-custom                       | This check indicates the operation time since the server is running. This time in given in minutes |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Backup" label="Backup">

| Name                                         | Unit  |
|:---------------------------------------------|:------|
| status                                       | N/A   |
| *backups*#backup.time.last.execution.seconds | s     |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Name                         | Unit  |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Connections-Number" label="Connections-Number">

| Name                                         | Unit  |
|:---------------------------------------------|:------|
| threads.connected.count                      | count |
| threads.connected.percentage                 | %     |
| *databases*#database.threads.connected.count | count |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Name                                              | Unit  |
|:--------------------------------------------------|:------|
| databases.space.usage.bytes                       | B     |
| databases.space.free.bytes                        | B     |
| *database*~database.space.usage.bytes             | B     |
| *database*~database.space.free.bytes              | B     |
| *database*~*table*#table.space.usage.bytes        | B     |
| *database*~*table*#table.space.free.bytes         | B     |
| *database*~*table*#table.fragmentation.percentage | %     |

</TabItem>
<TabItem value="Innodb-Bufferpool" label="Innodb-Bufferpool">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| database.bufferpool.hitrate.average.percentage | %     |
| database.bufferpool.hitrate.delta.percentage   | %     |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Name                       | Unit  |
|:---------------------------|:------|
| database.longqueries.count | count |

</TabItem>
<TabItem value="MariaDB-Replication" label="MariaDB-Replication">

| Name                                     | Unit  |
|:-----------------------------------------|:------|
| instance.slaves.running.count            | count |
| connection-status                        | N/A   |
| thread-sql-status                        | N/A   |
| thread-io-status                         | N/A   |
| *servers*~instance.slave.latency.seconds | s     |
| replication-status                       | N/A   |

</TabItem>
<TabItem value="Myisam-Keycache" label="Myisam-Keycache">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| database.keycache.hitrate.average.percentage | %     |
| database.keycache.hitrate.delta.percentage   | %     |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Name                      | Unit  |
|:--------------------------|:------|
| database.open.files.count | count |

</TabItem>
<TabItem value="Password-Expiration" label="Password-Expiration">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Qcache-Hitrate" label="Qcache-Hitrate">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| database.qcache.hitrate.average.percentage | %     |
| database.qcache.hitrate.delta.percentage   | %     |

</TabItem>
<TabItem value="Queries" label="Queries">

| Name                       | Unit  |
|:---------------------------|:------|
| queries.total.persecond    | /s    |
| queries.update.persecond   | /s    |
| queries.delete.persecond   | /s    |
| queries.insert.persecond   | /s    |
| queries.truncate.persecond | /s    |
| queries.select.persecond   | /s    |
| queries.commit.persecond   | /s    |
| queries.begin.persecond    | /s    |

</TabItem>
<TabItem value="Slowqueries" label="Slowqueries">

| Name                             | Unit  |
|:---------------------------------|:------|
| database.slowqueries.delta.count | count |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Name                              | Unit  |
|:----------------------------------|:------|
| value                             | N/A   |
| sqlrequest.execution.time.seconds | s     |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Name   | Unit  |
|:-------|:------|
| string | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Name                    | Unit  |
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

The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
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
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

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
dnf install centreon-plugin-Applications-Databases-Mysql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Mysql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

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
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-DB-MySQL-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro             | Description                                                                                          | Default value     | Mandatory   |
|:------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MYSQLUSERNAME     | User name used to connect to the database                                                            | USERNAME          |             |
| MYSQLPASSWORD     | Password for the defined user                                                                        | PASSWORD          |             |
| MYSQLPORT         | Database Server Port                                                                                 |                   |             |
| MYSQLEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Backup" label="Backup">

| Macro                     | Description                                                                                                                                                                                                                                                                     | Default value                                                                                   | Mandatory   |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------|:-----------:|
| FILTERTYPE                | Filter backups by type (regexp can be used)                                                                                                                                                                                                                                     |                                                                                                 |             |
| CRITICALSTATUS            | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{has\_backup\}, %\{last\_error\}, %\{exit\_state\}, %\{type\} | %\{has\_backup\} eq "yes" and %\{exit\_state\} ne "SUCCESS" and %\{last\_error\} ne "NO\_ERROR" |             |
| WARNINGSTATUS             | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{has\_backup\}, %\{last\_error\}, %\{exit\_state\}, %\{type\}                                                                                                               |                                                                                                 |             |
| WARNINGTIMELASTEXECUTION  | Threshold                                                                                                                                                                                                                                                                       |                                                                                                 |             |
| CRITICALTIMELASTEXECUTION | Threshold                                                                                                                                                                                                                                                                       |                                                                                                 |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                              | --verbose                                                                                       |             |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in milliseconds                                                                  |                   |             |
| CRITICAL     | Critical threshold in milliseconds                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Connections-Number" label="Connections-Number">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING           | Threshold                                                                                          |                   |             |
| CRITICAL          | Threshold                                                                                          |                   |             |
| WARNINGUSAGEPRCT  | Threshold                                                                                          |                   |             |
| CRITICALUSAGEPRCT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Macro              | Description                                                                                                                                            | Default value                                         | Mandatory   |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| FILTERDATABASE     | Filter the databases to monitor with a regular expression                                                                                              | ^(?!(information\_schema\|performance\_schema\|test)) |             |
| FILTERPERFDATA     | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data | database                                              |             |
| WARNINGDBFREE      | Threshold                                                                                                                                              |                                                       |             |
| CRITICALDBFREE     | Threshold                                                                                                                                              |                                                       |             |
| WARNINGDBUSAGE     | Threshold                                                                                                                                              |                                                       |             |
| CRITICALDBUSAGE    | Threshold                                                                                                                                              |                                                       |             |
| WARNINGTABLEFRAG   | Threshold                                                                                                                                              |                                                       |             |
| CRITICALTABLEFRAG  | Threshold                                                                                                                                              |                                                       |             |
| WARNINGTABLEFREE   | Threshold                                                                                                                                              |                                                       |             |
| CRITICALTABLEFREE  | Threshold                                                                                                                                              |                                                       |             |
| WARNINGTABLEUSAGE  | Threshold                                                                                                                                              |                                                       |             |
| CRITICALTABLEUSAGE | Threshold                                                                                                                                              |                                                       |             |
| WARNINGTOTALFREE   | Threshold                                                                                                                                              |                                                       |             |
| CRITICALTOTALFREE  | Threshold                                                                                                                                              |                                                       |             |
| WARNINGTOTALUSAGE  | Threshold                                                                                                                                              |                                                       |             |
| CRITICALTOTALUSAGE | Threshold                                                                                                                                              |                                                       |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                     | --verbose                                             |             |

</TabItem>
<TabItem value="Innodb-Bufferpool" label="Innodb-Bufferpool">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                  |                   |             |
| CRITICAL     | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Macro         | Description                                                                                        | Default value     | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SECONDS       | The minimum execution time in seconds for a long query (default: 60)                               | 60                |             |
| FILTERCOMMAND | Filter by command (can be a regexp. Default: '^(?!(sleep)$)')                                      | ^(?!(sleep)$)     |             |
| FILTERUSER    | Filter by user (can be a regexp)                                                                   |                   |             |
| WARNING       | Warning threshold (number of long queries)                                                         |                   |             |
| CRITICAL      | Critical threshold (number of long queries)                                                        |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="MariaDB-Replication" label="MariaDB-Replication">

| Macro                     | Description                                                                                                                                                                                                | Default value                                       | Mandatory   |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| PEERPORT                  | Database Server Port                                                                                                                                                                                       | 3306                                                |             |
| PEERUSERNAME              |  Peer username                                                                                                                                                                                                            | USERNAME                                            |             |
| PEERPASSWORD              |  Peer password                                                                                                                                                                                                            | PASSWORD                                            |             |
| UNKNOWNREPLICATIONSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{replication\_status\}, %\{display\}    | %\{replication\_status\} =~ /configurationIssue/i   |             |
| PEERHOST                  | Hostname to query                                                                                                                                                                                          |                                                     |             |
| UNKNOWNCONNECTIONSTATUS   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables:  %\{status\}, %\{error\_message\}, %\{display\}                                                          |                                                     |             |
| CRITICALCONNECTIONSTATUS  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{error\_message\}, %\{display\}                         | %\{status\} ne "ok"                                 |             |
| WARNINGCONNECTIONSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables:  %\{status\}, %\{error\_message\}, %\{display\}                                                          |                                                     |             |
| WARNINGREPLICATIONSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{replication\_status\}, %\{display\}            | %\{replication\_status\} =~ /inProgress/i           |             |
| CRITICALREPLICATIONSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{replication\_status\}, %\{display\} | %\{replication\_status\} =~ /connectIssueToMaster/i |             |
| WARNINGSLAVELATENCY       | Threshold                                                                                                                                                                                                  |                                                     |             |
| CRITICALSLAVELATENCY      | Threshold                                                                                                                                                                                                  |                                                     |             |
| CRITICALSLAVESRUNNING     | Threshold                                                                                                                                                                                                  | 1:1                                                 |             |
| WARNINGSLAVESRUNNING      | Threshold                                                                                                                                                                                                  |                                                     |             |
| WARNINGTHREADIOSTATUS     | Threshold                                                                                                                                                                                                            |                                                     |             |
| CRITICALTHREADIOSTATUS    |  Threshold                                                                                                                                                                                                           |                                                     |             |
| WARNINGTHREADSQLSTATUS    | Threshold                                                                                                                                                                                                            |                                                     |             |
| CRITICALTHREADSQLSTATUS   | Threshold                                                                                                                                                                                                            |                                                     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                         | --verbose                                           |             |

</TabItem>
<TabItem value="Myisam-Keycache" label="Myisam-Keycache">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                  |                   |             |
| CRITICAL     | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                       |                   |             |
| CRITICAL     | Critical threshold in percent                                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Password-Expiration" label="Password-Expiration">

| Macro          | Description                                                                                                                                                                                                 | Default value                                     | Mandatory   |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{user\}, %\{expire\}, %\{expire\_time\} | %\{expire\} ne "never" and %\{expire\_time\} == 0 |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{user\}, %\{expire\}, %\{expire\_time\}                                                                 |                                                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                          | --verbose                                         |             |

</TabItem>
<TabItem value="Qcache-Hitrate" label="Qcache-Hitrate">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                  |                   |             |
| CRITICAL     | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Queries" label="Queries">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold                                                                                          |                   |             |
| CRITICAL     | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Slowqueries" label="Slowqueries">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning number for slow queries since last check                                                   |                   |             |
| CRITICAL     | Critical number for slow queries since last check                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SQLSTATEMENT | SQL statement that returns a number                                                                |                   | X           |
| WARNING      | Threshold                                                                                          |                   |             |
| CRITICAL     | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Macro        | Description                                                                                                                                                                                           | Default value     | Mandatory   |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SQLSTATEMENT | SQL statement that returns a string                                                                                                                                                                   |                   | X           |
| VALUE        | Value column (must be one of the selected field). MANDATORY                                                                                                                                           |                   |             |
| WARNING      | Define the conditions to match for the status to be WARNING (can be %\{key\_field\}, %\{value\_field\}). Example: --warning-string '%\{key\_field\} eq 'Central' && %\{value\_field\} =~ /127.0.0.1/' |                   |             |
| CRITICAL     | Define the conditions to match for the status to be CRITICAL (can be %\{key\_field\} or %\{value\_field\})                                                                                            |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                    |                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                  |                   |             |
| CRITICAL     | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_mysql.pl \
	--plugin=database::mysql::plugin \
	--host=10.0.0.1 \
	--username='XXXX' \
	--password='XXXX' \
	--port='3306'  \
	--mode=uptime \
	--warning='' \
	--critical='' 
```

The expected command output is shown below:

```bash
OK: database is up since 53 days (Start time = 2025/04/11 12:37:57) | 'database.uptime.seconds'=4661146s;;;0;
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
/usr/lib/centreon/plugins/centreon_mysql.pl \
	--plugin=database::mysql::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                             | Linked service template                          |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
| backup [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/backup.pm)]                                     | App-DB-MySQL-Backup-custom                       |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]              | Not used in this Monitoring Connector            |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)]     | App-DB-MySQL-Connection-Time-custom              |
| databases-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/databasessize.pm)]                      | App-DB-MySQL-Database-Size-custom                |
| innodb-bufferpool-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/innodbbufferpoolhitrate.pm)] | App-DB-MySQL-Innodb-Bufferpool-custom            |
| long-queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/longqueries.pm)]                          | App-DB-MySQL-Long-Queries-custom                 |
| myisam-keycache-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/myisamkeycachehitrate.pm)]     | App-DB-MySQL-Myisam-Keycache-custom              |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/db_socket.pm)]                                                        | Not used in this Monitoring Connector            |
| open-files [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/openfiles.pm)]                              | App-DB-MySQL-Open-Files-custom                   |
| open-tables [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/opentables.pm)]                            | Not used in this Monitoring Connector            |
| password-expiration [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/passwordexpiration.pm)]            | App-DB-MySQL-Password-Expiration-custom          |
| qcache-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/qcachehitrate.pm)]                      | App-DB-MySQL-Qcache-Hitrate-custom               |
| queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/queries.pm)]                                   | App-DB-MySQL-Queries-custom                      |
| replication [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/replication.pm)]                           | App-DB-MySQL-MariaDB-Replication-custom          |
| slow-queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/slowqueries.pm)]                          | App-DB-MySQL-Slowqueries-custom                  |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]                            | App-DB-MySQL-Sql-Statement-Generic-custom        |
| sql-string [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sqlstring.pm)]               | App-DB-MySQL-Sql-Statement-String-Generic-custom |
| threads-connected [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/threadsconnected.pm)]                | App-DB-MySQL-Connections-Number-custom           |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/uptime.pm)]                                     | App-DB-MySQL-Uptime-custom                       |

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
| --sqlmode                                  | This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --list-sqlmode                             | List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --multiple                                 | Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
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
| --host                                     | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --port                                     | Database Server Port.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Backup" label="Backup">

| Option                   | Description                                                                                                                                                                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                       |
| --filter-type            | Filter backups by type (regexp can be used).                                                                                                                                                                                                                                    |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{has\_backup\}, %\{last\_error\}, %\{exit\_state\}, %\{type\}                                                                                                               |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{has\_backup\}, %\{last\_error\}, %\{exit\_state\}, %\{type\}                                                                                                               |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%\{has\_backup\} eq "yes" and %\{exit\_state\} ne "SUCCESS" and %\{last\_error\} ne "NO\_ERROR"'). You can use the following variables: %\{has\_backup\}, %\{last\_error\}, %\{exit\_state\}, %\{type\} |
| --warning-* --critical-* | Thresholds. Can be: 'time-last-execution'.                                                                                                                                                                                                                                      |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Option     | Description                         |
|:-----------|:------------------------------------|
| --warning  | Warning threshold in milliseconds.  |
| --critical | Critical threshold in milliseconds. |

</TabItem>
<TabItem value="Connections-Number" label="Connections-Number">

| Option                   | Description                                                                                                               |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --add-databases          | Add threads by databases.                                                                                                 |
| --warning-* --critical-* | Thresholds. Can be: 'usage', 'usage-prct' (%), 'database-threads-connected'.                                              |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Option                   | Description                                                                                                               |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --filter-database        | Filter the databases to monitor with a regular expression.                                                                |
| --filter-table           | Filter tables by name (can be a regexp).                                                                                  |
| --warning-* --critical-* | Thresholds (can be: 'total-usage', 'total-free', 'db-usage', 'db-free', 'table-usage', 'table-free', 'table-frag').       |

</TabItem>
<TabItem value="Innodb-Bufferpool" label="Innodb-Bufferpool">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --warning              | Warning threshold.                                                                                                                                                                                                                          |
| --critical             | Critical threshold.                                                                                                                                                                                                                         |
| --lookback             | Threshold isn't on the percent calculated from the difference ('bufferpool\_hitrate\_now').                                                                                                                                                 |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Option           | Description                                                           |
|:-----------------|:----------------------------------------------------------------------|
| --warning        | Warning threshold (number of long queries).                           |
| --critical       | Critical threshold (number of long queries).                          |
| --seconds        | The minimum execution time in seconds for a long query (default: 60). |
| --filter-user    | Filter by user (can be a regexp).                                     |
| --filter-command | Filter by command (can be a regexp. Default: '^(?!(sleep)$)').        |

</TabItem>
<TabItem value="MariaDB-Replication" label="MariaDB-Replication">

| Option                        | Description                                                                                                                                                                                                |
|:------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters             | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                  |
| --unknown-connection-status   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables:  %\{status\}, %\{error\_message\}, %\{display\}                                                          |
| --warning-connection-status   | Define the conditions to match for the status to be WARNING. You can use the following variables:  %\{status\}, %\{error\_message\}, %\{display\}                                                          |
| --critical-connection-status  | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} ne "ok"'). You can use the following variables: %\{status\}, %\{error\_message\}, %\{display\}                         |
| --unknown-replication-status  | Define the conditions to match for the status to be UNKNOWN (default: '%\{replication\_status\} =~ /configurationIssue/i'). You can use the following variables: %\{replication\_status\}, %\{display\}    |
| --warning-replication-status  | Define the conditions to match for the status to be WARNING (default: '%\{replication\_status\} =~ /inProgress/i'). You can use the following variables: %\{replication\_status\}, %\{display\}            |
| --critical-replication-status | Define the conditions to match for the status to be CRITICAL (default: '%\{replication\_status\} =~ /connectIssueToMaster/i'). You can use the following variables: %\{replication\_status\}, %\{display\} |
| --warning-* --critical-*      | Thresholds. Can be: 'slaves-running', 'slave-latency' (s).                                                                                                                                                 |

</TabItem>
<TabItem value="Myisam-Keycache" label="Myisam-Keycache">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --warning              | Warning threshold.                                                                                                                                                                                                                          |
| --critical             | Critical threshold.                                                                                                                                                                                                                         |
| --lookback             | Threshold isn't on the percent calculated from the difference ('keycache\_hitrate\_now').                                                                                                                                                   |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Option     | Description                    |
|:-----------|:-------------------------------|
| --warning  | Warning threshold in percent.  |
| --critical | Critical threshold in percent. |

</TabItem>
<TabItem value="Password-Expiration" label="Password-Expiration">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                   |
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --warning-status       | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{user\}, %\{expire\}, %\{expire\_time\}                                                                                                 |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%\{expire\} ne "never" and %\{expire\_time\} == 0'). You can use the following variables: %\{user\}, %\{expire\}, %\{expire\_time\}                                 |

</TabItem>
<TabItem value="Qcache-Hitrate" label="Qcache-Hitrate">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --warning              | Warning threshold.                                                                                                                                                                                                                          |
| --critical             | Critical threshold.                                                                                                                                                                                                                         |
| --lookback             | Threshold isn't on the percent calculated from the difference ('qcache\_hitrate\_now').                                                                                                                                                     |

</TabItem>
<TabItem value="Queries" label="Queries">

| Option            | Description                                                                                                               |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --warning-*       | Warning threshold. Can be: 'total', 'update', 'insert', 'delete', 'truncate', 'select', 'begin', 'commit'.                |
| --critical-*      | Critical threshold. Can be: 'total', 'update', 'insert', 'delete', 'truncate', 'select', 'begin', 'commit'.               |

</TabItem>
<TabItem value="Slowqueries" label="Slowqueries">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --warning              | Warning number for slow queries since last check.                                                                                                                                                                                           |
| --critical             | Critical number for slow queries since last check.                                                                                                                                                                                          |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Option                   | Description                                                                                                               |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --sql-statement          | SQL statement that returns a number.                                                                                      |
| --format                 | Output format (default: 'SQL statement result : %i.').                                                                    |
| --perfdata-unit          | Perfdata unit in perfdata output (default: '')                                                                            |
| --perfdata-name          | Perfdata name in perfdata output (default: 'value')                                                                       |
| --perfdata-min           | Minimum value to add in perfdata output (default: '')                                                                     |
| --perfdata-max           | Maximum value to add in perfdata output (default: '')                                                                     |
| --warning-* --critical-* | Thresholds. Can be: 'value', 'execution-time'.                                                                            |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Option             | Description                                                                                                                                                                                           |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters  | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                             |
| --sql-statement    | SQL statement that returns a string.                                                                                                                                                                  |
| --key-column       | Key column (must be one of the selected field). NOT mandatory if you select only one field                                                                                                            |
| --value-column     | Value column (must be one of the selected field). MANDATORY                                                                                                                                           |
| --printf-format    | Specify a custom output message relying on printf formatting. If this option is set --printf-value is mandatory.                                                                                      |
| --printf-value     | Specify variable used to replace in printf. If this option is set --printf-format is mandatory. Can be: %\{key\_field\} (default value) or %\{value\_field\}                                          |
| --warning-string   | Define the conditions to match for the status to be WARNING (can be %\{key\_field\}, %\{value\_field\}). Example: --warning-string '%\{key\_field\} eq 'Central' && %\{value\_field\} =~ /127.0.0.1/' |
| --critical-string  | Define the conditions to match for the status to be CRITICAL (can be %\{key\_field\} or %\{value\_field\})                                                                                            |
| --dual-table       | Set this option to ensure compatibility with dual table and Oracle.                                                                                                                                   |
| --empty-sql-string | Set this option to change the output message when the sql statement result is empty. (default: 'No row returned or --key-column/--value-column do not correctly match selected field')                |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option     | Description                |
|:-----------|:---------------------------|
| --warning  | Warning threshold.         |
| --critical | Critical threshold.        |
| --seconds  | Display uptime in seconds. |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_mysql.pl \
	--plugin=database::mysql::plugin \
	--mode=uptime \
	--help
```
