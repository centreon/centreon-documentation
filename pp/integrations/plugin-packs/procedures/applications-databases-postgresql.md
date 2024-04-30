---
id: applications-databases-postgresql
title: PostgreSQL DB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **PostgreSQL** brings a host template:

* **App-DB-Postgres-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-DB-Postgres-custom" label="App-DB-Postgres-custom">

| Service Alias     | Service Template                         | Service Description                                      |
|:------------------|:-----------------------------------------|:---------------------------------------------------------|
| Cache-Hitratio    | App-DB-Postgres-Cache-Hitratio-custom    | Check the "buffer cache hitratio" of the Postgres server |
| Connection        | App-DB-Postgres-Connection-custom        | Check connection to the Postgres server                  |
| Connection-Number | App-DB-Postgres-Connection-Number-custom | Check connection number to the Postgres server           |
| Locks             | App-DB-Postgres-Locks-custom             | Check locks of the Postgres server                       |
| Query-Time        | App-DB-Postgres-Query-Time-custom        | Check request time of the Postgres server                |

> The services listed above are created automatically when the **App-DB-Postgres-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias   | Service Template                       | Service Description                                                  | Discovery  |
|:----------------|:---------------------------------------|:---------------------------------------------------------------------|:----------:|
| Bloat           | App-DB-Postgres-Bloat-custom           | Check tables and btrees bloat                                        |            |
| Database-Size   | App-DB-Postgres-Database-Size-custom   | Check the databases size                                             | X          |
| Sql-Statement   | App-DB-Postgres-Sql-Statement-custom   | Check allowing to execute a custom SQL request with a digital answer |            |
| Statistics      | App-DB-Postgres-Statistics-custom      | Check database statistics                                            |            |
| Tablespace-Size | App-DB-Postgres-Tablespace-Size-custom | Check time between poller and the Postgres server                    |            |
| Time-Sync       | App-DB-Postgres-Time-Sync-custom       | Check time between poller and the Postgres server                    |            |
| Vacuum          | App-DB-Postgres-Vacuum-custom          | Check the execution of Vacuum on a DB for a given amount of days     |            |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                      | Description                                |
|:-------------------------------|:-------------------------------------------|
| App-DB-Postgres-Databases-Size | Discover databases to monitor their sizes. |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Bloat" label="Bloat">

| Metric name                                         | Unit  |
|:----------------------------------------------------|:------|
| *db_name~table_name*#table.space.usage.bytes       | B     |
| *db_name~table_name*#table.space.free.bytes        | B     |
| *db_name~table_name*#table.dead_tuple.bytes        | B     |
| *db_name~index_name*#index.space.usage.bytes       | B     |
| *db_name~index_name*#index.leaf_density.percentage | %     |

</TabItem>
<TabItem value="Cache-Hitratio" label="Cache-Hitratio">

| Metric Name                                    | Unit  |
|:-----------------------------------------------|:------|
| *db_name*#database.hitratio.average.percentage |       |
| *db_name*#database.hitratio.delta.percentage   |       |

</TabItem>
<TabItem value="Connection" label="Connection">

| Metric name                  | Unit  |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| database.clients.connected.count | count |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Metric name                            | Unit  |
|:---------------------------------------|:------|
| *databases*#database.space.usage.bytes | B     |

</TabItem>
<TabItem value="Locks" label="Locks">

| Metric name          | Unit  |
|:---------------------|:------|
| database.locks.count | count |

</TabItem>
<TabItem value="Query-Time" label="Query-Time">

| Metric name                | Unit  |
|:---------------------------|:------|
| database.longqueries.count | count |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| value                             | N/A   |
| sqlrequest.execution.time.seconds | s     |

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| queries.commit.count              | count |
| queries.rollback.count            | count |
| queries.insert.count              | count |
| queries.update.count              | count |
| queries.delete.count              | count |
| *database*#queries.commit.count   | count |
| *database*#queries.rollback.count | count |
| *database*#queries.insert.count   | count |
| *database*#queries.update.count   | count |
| *database*#queries.delete.count   | count |

</TabItem>
<TabItem value="Tablespace-Size" label="Tablespace-Size">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| *tablespaces*#tablespace.space.usage.bytes | B     |

</TabItem>
<TabItem value="Time-Sync" label="Time-Sync">

| Metric name         | Unit  |
|:--------------------|:------|
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Vacuum" label="Vacuum">

| Metric name                   | Unit  |
|:------------------------------|:------|
| vacuum.last_execution.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

To monitor your PostgreSQL server, create a dedicated read-only user:

```
CREATE USER centreonro WITH PASSWORD 'test';
GRANT CONNECT ON DATABASE postgres TO centreonro;
GRANT USAGE ON SCHEMA public TO centreonro;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO centreonro;
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO centreonro;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO centreonro;
```

To use service **Tablespace-Size**, you need to use a superuser account.

To use service **Bloat**, you need to install the extension **pgstattuple** (https://docs.postgresql.fr/13/pgstattuple.html) and add following privileges:

```
GRANT EXECUTE ON FUNCTION pgstattuple(regclass) TO centreonro;
GRANT EXECUTE ON FUNCTION pgstatindex(regclass) TO centreonro;
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
dnf install centreon-pack-applications-databases-postgresql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-postgresql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-postgresql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-postgresql
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **PostgreSQL** connector through
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
dnf install centreon-plugin-Applications-Databases-Postgresql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Postgresql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-postgresql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Postgresql
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-DB-Postgres-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                                                                           | Default value     | Mandatory   |
|:---------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| POSTGRESUSERNAME     | User name used to connect to the database                                                             |                   |      X      |
| POSTGRESPASSWORD     | Password for the defined user name                                                                    |                   |      X      |
| POSTGRESPORT         | Database Server Port                                                                                  | 5432              |             |
| POSTGRESDATABASE     | Database Name                                                                                         | postgres          |             |
| POSTGRESEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Bloat" label="Bloat">

| Macro                    | Description                                                                                         | Default value     | Mandatory   |
|:-------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERTABLE              | Filter tables by name (can be a regexp).                                                            |                   |             |
| FILTERINDEX              | Filter indexes by name (can be a regexp).                                                           |                   |             |
| FILTERSIZE               | Filter tables and indexes by size (in bytes) keeping only sizes greater than the given value.       |                   |             |
| WARNINGINDEXLEAFDENSITY  | Thresholds.                                                                                         |                   |             |
| CRITICALINDEXLEAFDENSITY | Thresholds.                                                                                         |                   |             |
| WARNINGINDEXUSAGE        | Thresholds.                                                                                         |                   |             |
| CRITICALINDEXUSAGE       | Thresholds.                                                                                         |                   |             |
| WARNINGTABLEDEADTUPLE    | Thresholds.                                                                                         |                   |             |
| CRITICALTABLEDEADTUPLE   | Thresholds.                                                                                         |                   |             |
| WARNINGTABLEFREE         | Thresholds.                                                                                         |                   |             |
| CRITICALTABLEFREE        | Thresholds.                                                                                         |                   |             |
| WARNINGTABLEUSAGE        | Thresholds.                                                                                         |                   |             |
| CRITICALTABLEUSAGE       | Thresholds.                                                                                         |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Cache-Hitratio" label="Cache-Hitratio">

| Macro        | Description                                                                                         | Default value                         | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:--------------------------------------|:-----------:|
| FILTER       | Filter databases by name (can be a regexp).                                                                                    | ^(?!(postgres\|template1\|template0)) |             |
| WARNING      | Warning threshold                                                                                   |                                       |             |
| CRITICAL     | Critical threshold                                                                                  |                                       |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose                             |             |

</TabItem>
<TabItem value="Connection" label="Connection">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in milliseconds                                                                   |                   |             |
| CRITICAL     | Critical threshold in milliseconds                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Macro        | Description                                                                                         | Default value                         | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:--------------------------------------|:-----------:|
| FILTER       | Filter databases by name (can be a regexp).                                                                                    | ^(?!(postgres\|template1\|template0)) |             |
| CRITICAL     | Critical threshold in percent                                                                       | 95                                    |             |
| WARNING      | Warning threshold in percent                                                                        | 90                                    |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose                             |             |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Macro          | Description                                                                                         | Default value     | Mandatory   |
|:---------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERDATABASE | Filter database to checks (Can use regexp)                                                          | .*                |             |
| WARNINGSIZE    | Warning threshold in bytes, maximum size allowed                                                    |                   |             |
| CRITICALSIZE   | Critical threshold in bytes, maximum size allowed                                                   |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Locks" label="Locks">

| Macro        | Description                                                                                                                       | Default value                         | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|:-----------:|
| FILTER       | Filter databases by name (can be a regexp).                                                                                                                  | ^(?!(postgres\|template1\|template0)) |             |
| CRITICAL     | Critical threshold. (example: "total=250,waiting=5,exclusive=20") 'total', 'waiting', or the name of a lock type used by Postgres | total=250,waiting=5,exclusive=20      |             |
| WARNING      | Warning threshold. (example: "total=250,waiting=5,exclusive=20") 'total', 'waiting', or the name of a lock type used by Postgres  | total=200                             |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                               | --verbose                             |             |

</TabItem>
<TabItem value="Query-Time" label="Query-Time">

| Macro        | Description                                                                                         | Default value                         | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:--------------------------------------|:-----------:|
| FILTER       | Filter databases by name (can be a regexp).                                                                                    | ^(?!(postgres\|template1\|template0)) |             |
| FILTERUSER   | Filter users                                                                                        | postgres                              |             |
| CRITICAL     | Critical threshold in seconds                                                                       | 60                                    |             |
| WARNING      | Warning threshold in seconds                                                                        | 30                                    |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                                       |             |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SQLSTATEMENT | SQL statement that returns a number                                                                 |                   | X           |
| WARNING      | Thresholds.                                                                                         |                   |             |
| CRITICAL     |  Thresholds.                                                                                        |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Macro               | Description                                                                                         | Default value                          | Mandatory   |
|:--------------------|:----------------------------------------------------------------------------------------------------|:---------------------------------------|:-----------:|
| FILTER              | Filter databases by name (can be a regexp).                                                                  | ^(?!(postgres\|template1\|template0)$) |             |
| WARNINGTOTALCOMMIT  | Warning threshold                                                                                   |                                        |             |
| CRITICALTOTALCOMMIT | Critical threshold                                                                                  |                                        |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose                              |             |

</TabItem>
<TabItem value="Tablespace-Size" label="Tablespace-Size">

| Macro         | Description                                                            | Default value     | Mandatory   |
|:--------------|:-----------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSQLNAME | Filter tablespace name directly in sql query (LIKE sql syntax used)    |                   |             |
| FILTERNAME    | Filter tablespace name after getting all tablespaces (can be a regexp) |                   |             |
| TABLESPACE    | Filter tablespace name after getting all tablespaces (can be a regexp) |                   |             |
| WARNING       | Thresholds                                                             |                   |             |
| CRITICAL      | Thresholds                                                             |                   |             |

</TabItem>
<TabItem value="Time-Sync" label="Time-Sync">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in seconds. (use a range. it can be -0.3s or +0.3s.)                              | -1.0:1.0          |             |
| CRITICAL     | Critical threshold in seconds. (use a range. it can be -0.3s or +0.3s.)                             | -3.0:3.0          |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Vacuum" label="Vacuum">

| Macro            | Description                                                                                         | Default value     | Mandatory   |
|:-----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| POSTGRESDATABASE | Database Name.                                                                                      | postgres          |             |
| WARNING          | Warning threshold in seconds, maximum time interval since last vacuum                               |                   |             |
| CRITICAL         | Critical threshold in seconds, maximum time interval since last vacuum                              |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_postgresql.pl \
	--plugin=database::postgres::plugin \
	--mode=tablespace \
	--host=10.0.0.1 \
	--username='' \
	--password='' \
	--port='5432'  \
	--filter-sql-name='' \
	--filter-name='' \
	--warning-space-usage=''  \
	--critical-space-usage='' \
	--filter-name=''
```

The expected command output is shown below:

```bash
OK: All tablespaces are ok | '*tablespaces*#tablespace.space.usage.bytes'=B;;;0;
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
/usr/lib/centreon/plugins/centreon_postgresql.pl \
	--plugin=database::postgres::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                | Linked service template                  |
|:------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|
| backends [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/backends.pm)]                 | App-DB-Postgres-Connection-Number-custom |
| bloat [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/bloat.pm)]                       | App-DB-Postgres-Bloat-custom             |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)] | Not used in this Monitoring Connector    |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/connectiontime.pm)]    | App-DB-Postgres-Connection-custom        |
| database-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/databasesize.pm)]        | App-DB-Postgres-Database-Size-custom     |
| hitratio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/hitratio.pm)]                 | App-DB-Postgres-Cache-Hitratio-custom    |
| list-databases [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/listdatabases.pm)]      | Used for service discovery               |
| locks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/locks.pm)]                       | App-DB-Postgres-Locks-custom             |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/db_name.pm)]                                             | Not used in this Monitoring Connector    |
| query-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/querytime.pm)]              | App-DB-Postgres-Query-Time-custom        |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]               | App-DB-Postgres-Sql-Statement-custom     |
| sql-string [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sqlstring.pm)]  | Not used in this Monitoring Connector    |
| statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/statistics.pm)]             | App-DB-Postgres-Statistics-custom        |
| tablespace [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/tablespace.pm)]             | App-DB-Postgres-Tablespace-Size-custom   |
| timesync [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/timesync.pm)]                 | App-DB-Postgres-Time-Sync-custom         |
| vacuum [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/vacuum.pm)]                     | App-DB-Postgres-Vacuum-custom            |

### Available options

#### Generic options

All generic options are listed here:

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
<TabItem value="Bloat" label="Bloat">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Cache-Hitratio" label="Cache-Hitratio">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning              | Warning threshold.                                                                                                                                                                                                                            |
| --critical             | Critical threshold.                                                                                                                                                                                                                           |
| --lookback             | Threshold isn't on the percent calculated from the difference ('xxx\_hitratio\_now').                                                                                                                                                         |
| --exclude              | Filter databases.                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Connection" label="Connection">

| Option     | Description                            |
|:-----------|:---------------------------------------|
| --warning  | Warning threshold in milliseconds.     |
| --critical | Critical threshold in milliseconds.    |

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Option     | Description                          |
|:-----------|:-------------------------------------|
| --warning  | Warning threshold in percent.        |
| --critical | Critical threshold in percent.       |
| --exclude  | Filter databases.                    |
| --noidle   | Idle connections are not counted.    |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Option            | Description                                           |
|:------------------|:------------------------------------------------------|
| --filter-database | Filter database to checks (Can use regexp).           |
| --warning-size    | Warning threshold in bytes, maximum size allowed.     |
| --critical-size   | Critical threshold in bytes, maximum size allowed.    |

</TabItem>
<TabItem value="Locks" label="Locks">

| Option     | Description                                                                                                                          |
|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------|
| --warning  | Warning threshold. (example: "total=250,waiting=5,exclusive=20") 'total', 'waiting', or the name of a lock type used by Postgres.    |
| --critical | Critical threshold. (example: "total=250,waiting=5,exclusive=20") 'total', 'waiting', or the name of a lock type used by Postgres.   |
| --exclude  | Filter databases.                                                                                                                    |

</TabItem>
<TabItem value="Query-Time" label="Query-Time">

| Option         | Description                      |
|:---------------|:---------------------------------|
| --warning      | Warning threshold in seconds.    |
| --critical     | Critical threshold in seconds.   |
| --exclude      | Filter databases.                |
| --exclude-user | Filter users.                    |
| --idle         | Idle queries are counted.        |

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
<TabItem value="Statistics" label="Statistics">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold. Can be: 'commit', 'rollback', 'insert', 'delete', 'update', 'total-commit', 'total-rollback', 'total-insert', 'total-delete', 'total-update'.                                                                              |
| --critical-*           | Critical threshold. Can be: 'commit', 'rollback', 'insert', 'delete', 'update', 'total-commit', 'total-rollback', 'total-insert', 'total-delete', 'total-update'.                                                                             |
| --filter-database      | Filter database (can be a regexp).                                                                                                                                                                                                            |

</TabItem>
<TabItem value="Tablespace-Size" label="Tablespace-Size">

| Option                   | Description                                                               |
|:-------------------------|:--------------------------------------------------------------------------|
| --filter-sql-name        | Filter tablespace name directly in sql query (LIKE sql syntax used).      |
| --filter-name            | Filter tablespace name after getting all tablespaces (can be a regexp).   |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B).                                    |

</TabItem>
<TabItem value="Time-Sync" label="Time-Sync">

| Option     | Description                                                                |
|:-----------|:---------------------------------------------------------------------------|
| --warning  | Warning threshold in seconds. (use a range. it can be -0.3s or +0.3s.)     |
| --critical | Critical threshold in seconds. (use a range. it can be -0.3s or +0.3s.)    |

</TabItem>
<TabItem value="Vacuum" label="Vacuum">

| Option     | Description                                                                |
|:-----------|:---------------------------------------------------------------------------|
| --warning  | Warning threshold in seconds, maximum time interval since last vacuum.     |
| --critical | Critical threshold in seconds, maximum time interval since last vacuum.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_postgresql.pl \
	--plugin=database::postgres::plugin \
	--mode=tablespace \
	--help
```
