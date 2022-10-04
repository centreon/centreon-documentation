---
id: applications-databases-postgresql
title: PostgreSQL DB
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack PostgreSQL brings a host template:

* App-DB-Postgres-custom

It brings the following service templates:

| Service Alias     | Service Template                  | Service Description                                                  | Default | Discovery |
|:------------------|:----------------------------------|:---------------------------------------------------------------------|:--------|:----------|
| Bloat             | App-DB-Postgres-Bloat             | Check tables and btrees bloat                                        |         |           |
| Cache-Hitratio    | App-DB-Postgres-Cache-Hitratio    | Check the buffer cache hitratio                                      | X       |           |
| Collection        | App-DB-Postgres-Collection        | Collect and compute SQL datas                                        |         |           |
| Connection        | App-DB-Postgres-Connection        | Check database connection                                            | X       |           |
| Connection-Number | App-DB-Postgres-Connection-Number | Check the current number of connections on databases                 | X       |           |
| Database-Size     | App-DB-Postgres-Database-Size     | Check databases size                                                 |         | X         |
| Locks             | App-DB-Postgres-Locks             | Check databases locks                                                | X       |           |
| Query-Time        | App-DB-Postgres-Query-Time        | Check the time of running queries on databases                       | X       |           |
| Sql-Statement     | App-DB-Postgres-Sql-Statement     | Check allowing to execute a custom SQL request with a digital answer |         |           |
| Statistics        | App-DB-Postgres-Statistics        | Check databases queries statistics                                   |         |           |
| Tablespace-Size   | App-DB-Postgres-Tablespace-Size   | Check tablespaces usage                                              |         |           |
| Time-Sync         | App-DB-Postgres-Time-Sync         | Check time offset between the poller and the server                  |         |           |
| Vacuum            | App-DB-Postgres-Vacuum            | Check the last execution vacuum time                                 |         |           |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Rule name                      | Description                                |
|:-------------------------------|:-------------------------------------------|
| App-DB-Postgres-Databases-Size | Discover databases and monitor space usage |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="metrics">
<TabItem value="Bloat" label="Bloat">

| Metric Name                                        | Unit  |
|:---------------------------------------------------|:------|
| *db_name~table_name*#table.space.usage.bytes       | B     |
| *db_name~table_name*#table.space.free.bytes        | B     |
| *db_name~table_name*#table.dead_tuple.bytes        | B     |
| *db_name~index_name*#index.space.usage.bytes       | B     |
| *db_name~index_name*#index.leaf_density.percentage | %     |

</TabItem>
<TabItem value="Cache-Hitratio" label="Cache-Hitratio">

| Metric Name                                    | Unit  |
|:-----------------------------------------------|:------|
| *db_name*#database.hitratio.average.percentage | %     |
| *db_name*#database.hitratio.delta.percentage   | %     |

</TabItem>
<TabItem value="Connection" label="Connection">

| Metric Name                  | Unit  |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Metric Name                                | Unit  |
|:-------------------------------------------|:------|
| *db_name*#database.clients.connected.count |       |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| *db_name*#database.space.usage.bytes | B     |

</TabItem>
<TabItem value="Locks" label="Locks">

| Metric Name                              | Unit  |
|:-----------------------------------------|:------|
| *db_name~lock_type*#database.locks.count |       |

</TabItem>
<TabItem value="Query-Time" label="Query-Time">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| *db_name*#database.longqueries.count |       |

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Metric Name                      | Unit  |
|:---------------------------------|:------|
| queries.commit.count             |       |
| queries.rollback.count           |       |
| queries.insert.count             |       |
| queries.update.count             |       |
| queries.delete.count             |       |
| *db_name*#queries.commit.count   |       |
| *db_name*#queries.rollback.count |       |
| *db_name*#queries.insert.count   |       |
| *db_name*#queries.update.count   |       |
| *db_name*#queries.delete.count   |       |

</TabItem>
<TabItem value="Tablespace-Size" label="Tablespace-Size">

| Metric Name                                    | Unit  |
|:-----------------------------------------------|:------|
| *tablespace_name*#tablespace.space.usage.bytes | B     |

</TabItem>
<TabItem value="Time-Sync" label="Time-Sync">

| Metric Name         | Unit  |
|:--------------------|:------|
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Vacuum" label="Vacuum">

| Metric Name                   | Unit  |
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

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **PostgreSQL** resources:

```bash
yum install centreon-plugin-Applications-Databases-Postgresql
```

2. On the Centreon web interface, install the **PostgreSQL** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **PostgreSQL** resources:

```bash
yum install centreon-plugin-Applications-Databases-Postgresql
```

2. Install the **PostgreSQL** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-databases-postgresql
```

3. On the Centreon web interface, install the **PostgreSQL** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address/DNS** fields according to your **PostgreSQL** server's settings.
* Apply the **App-DB-Postgres-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                | Description                                                                       |
|:------------|:---------------------|:----------------------------------------------------------------------------------|
| X           | POSTGRESUSERNAME     |                                                                                   |
| X           | POSTGRESPASSWORD     |                                                                                   |
|             | POSTGRESPORT         | Port used (Default: 5432)                                                         |
|             | POSTGRESDATABASE     | Database connection (Default: postgres)                                           |
|             | POSTGRESEXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon Poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_postgresql.pl \
    --plugin=database::postgres::plugin \
    --mode=connection-time \
    --hostname=10.0.0.1 \
    --database=postgres \
    --port=5432 \
    --username='centreonro' \
    --password='test'
```

The expected command output is shown below:

```bash
OK: Connection established in 0.533s. | 'connection.time.milliseconds'=533ms;;;0;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_postgresql.pl \
    --plugin=database::postgres::plugin \
    --mode=connection-time \
    --help
```

All available options for a given mode can be displayed by adding the
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_postgresql.pl \
    --plugin=database::postgres::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
