---
id: applications-databases-mssql
title: Microsoft SQL Server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Plugin Pack **Microsoft SQL Server** brings a host template:

* App-DB-MSSQL-custom

It brings the following service templates:

| Service Alias        | Service Template                  | Service Description                                                                                                           | Default |
|:---------------------|:----------------------------------|:------------------------------------------------------------------------------------------------------------------------------|:--------|
| Backup-Age           | App-DB-MSSQL-Backup-Age           | Check database backups of the server                                                                                          |         |
| Blocked-Processes    | App-DB-MSSQL-Blocked-Processes    | Check blocked processes on the server. Service cannot work because of a SQL request. It depends of your MS SQL Server version | X       |
| Cache-Hitratio       | App-DB-MSSQL-Cache-Hitratio       | Check the "Data Buffer Cache Hit Ratio" of the server. No alerts by default                                                   |         |
| Connected-Users      | App-DB-MSSQL-Connected-Users      | Check number of connected users on the database                                                                               | X       |
| Connection-Time      | App-DB-MSSQL-Connection-Time      | Check the connection time to the server. This time is given in seconds                                                        | X       |
| Databases-Size       | App-DB-MSSQL-Databases-Size       | Check database data and logs files                                                                                            | X       |
| Deadlocks            | App-DB-MSSQL-Deadlocks            | Check deadlocks per second of the server                                                                                      | X       |
| Failed-Jobs          | App-DB-MSSQL-Failed-Jobs          | Check MSSQL failed jobs                                                                                                       | X       |
| Locks-Waits          | App-DB-MSSQL-Locks-Waits          | Check locks-waits per second of the server                                                                                    |         |
| Page-Life-Expectancy | App-DB-MSSQL-Page-Life-Expectancy | Check the "Page Life Expectancy" of the server. No alerts by default                                                          |         |
| Sql-Statement        | App-DB-MSSQL-Sql-Statement        | Check allowing to execute a custom SQL request with a digital answer                                                          |         |
| Sql-Statement-String | App-DB-MSSQL-Sql-Statement-String | Check allowing to execute a custom SQL query with a string answer                                                           |         |
| Transactions         | App-DB-MSSQL-Transactions         | Check transactions per second of the server. No alerts by default                                                             | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Backup-Age" label="Backup-Age">

| Metric Name    | Unit  |
|:---------------|:------|
| last-duration  |       |
| last-execution |       |

</TabItem>
<TabItem value="Blocked-Processes" label="Blocked-Processes">

| Metric Name           | Unit  |
|:----------------------|:------|
| blocked-processes     |       |
| *processes*#wait-time |       |

</TabItem>
<TabItem value="Cache-Hitratio" label="Cache-Hitratio">

| Metric Name                     | Unit  |
|:--------------------------------|:------|
| mssql.cache.hitratio.percentage | %     |

</TabItem>
<TabItem value="Connected-Users" label="Connected-Users">

| Metric Name                 | Unit  |
|:----------------------------|:------|
| mssql.users.connected.count | count |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Metric Name                  | Unit  |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Databases-Size" label="Databases-Size">

| Metric Name                      | Unit  |
|:---------------------------------|:------|
| datafiles.space.usage.bytes      | bytes |
| datafiles.space.free.bytes       | bytes |
| datafiles.space.usage.percentage | %     |
| logfiles.space.usage.bytes       | bytes |
| logfiles.space.free.bytes        | bytes |
| logfiles.space.usage.percentage  | %     |

</TabItem>
<TabItem value="Deadlocks" label="Deadlocks">

| Metric Name           | Unit  |
|:----------------------|:------|
| mssql.deadlocks.count | count |

</TabItem>
<TabItem value="Failed-Jobs" label="Failed-Jobs">

| Metric Name          | Unit  |
|:---------------------|:------|
| jobs.                |       |
| jobs.total.count     | count |
| critical-            |       |
| job.duration.seconds | s     |
| warning-             |       |

</TabItem>
<TabItem value="Locks-Waits" label="Locks-Waits">

| Metric Name            | Unit  |
|:-----------------------|:------|
| mssql.lockswaits.count | count |

</TabItem>
<TabItem value="Page-Life-Expectancy" label="Page-Life-Expectancy">

| Metric Name                  | Unit  |
|:-----------------------------|:------|
| page.life.expectancy.seconds | s     |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Metric Name                       | Unit  |
|:----------------------------------|:------|
| sqlrequest.execution.time.seconds | s     |
| value                             |       |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Metric Name   | Unit  |
|:--------------|:------|
| *rows*#string |       |

</TabItem>
<TabItem value="Transactions" label="Transactions">

| Metric Name                                | Unit  |
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
dnf install centreon-pack-applications-databases-mssql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-mssql
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-databases-mssql
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Microsoft SQL Server** Pack through
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
dnf install centreon-plugin-Applications-Databases-Mssql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Mssql
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-databases-mssql
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **SQL Server database** server settings.
* Apply the **App-DB-MSSQL-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro         | Description                                                                            |
|:------------|:--------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS  | Any extra option you may want to add to every command line (eg. a --verbose flag)      |
|      X      | MSSQLPASSWORD | Monitoring user password (Default: 'PASSWORD')                                         |
|      X      | MSSQLPORT     | MSSQL instance listening port (Default: '1433')                                        |
|      X      | MSSQLUSERNAME | Monitoring user login string (Default: 'USERNAME')                                     |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_mssql.pl \
    --plugin database::mssql::plugin \
    --hostname 10.0.0.1 \
    --port 1433 \
    --username 'USERNAME' \
    --password 'PASSWORD'  \
    --mode=connected-users \
    --warning-connected-user='' \
    --critical-connected-user='' \
    --verbose \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: 20 connected user(s) | 'mssql.users.connected.count'=20;;;0; 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_mssql.pl \
    --plugin database::mssql::plugin \
    --hostname 10.0.0.1 \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_mssql.pl \
    --plugin database::mssql::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.