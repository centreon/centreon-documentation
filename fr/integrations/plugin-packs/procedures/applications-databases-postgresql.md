---
id: applications-databases-postgresql
title: PostgreSQL DB
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.0 | `STABLE` | Nov  2 2018 |

## Prerequisites

#### Create a user dedicated on the server.

    CREATE USER monitoring WITH PASSWORD 'centreon';

#### Grant SELECT Privileges on in order to use the SQL mode

    GRANT SELECT ON mytable TO monitoring;

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Databases-Postgresql
```

In order to use this template, the following RPM are needed on your poller:

  - postgresql
  - postgresql-libs
  - perl-DBD-Pg

## Centreon Configuration

### Create a new server postgresql

Go to "Configuration \> Hosts" and click "Add". Then, fill the form as shown by the following table :

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-DB-Postgre-custom      |

Click "Save" button.

Those services were automatically created for this host:

| Service           | Description                                                                           |
| :---------------- | :------------------------------------------------------------------------------------ |
| Bloat             | Check bloat (unused amount of dead space) in table and indexes of the Postgres server |
| Cache-Hitratio    | Check the "buffer cache hitratio" of the Postgres server                              |
| Connection        | Monitor to the connection time to the db                                              |
| Connection-Number | Monitor the number of connections                                                     |
| Locks             | Check locks of the Postgres server                                                    |
| Ping              | Monitor host response time                                                            |
| Query-time        | Check how long a specific query takes to run                                          |
| Time-Sync         | Check time between poller and the Postgres server                                     |

### Host Macro Configuration

The following macros must be configured on host:

| Macro            | Description                           | Default value | Example  |
| :--------------- | :------------------------------------ | :------------ | :------- |
| POSTGRESPORT     | Port used to connect to the DB server | 5432          | 5432     |
| POSTGRESUSERNAME | the postgres db user                  | USERNAME      | root     |
| POSTGRESPASSWORD | the postgres db user's password       | PASSWORD      | p@ssw0rd |

### Service Macro configuration

The following macros must be configured on services:

| Service            | Macro            | Description                       | Default Value                           | Example                         |
| :----------------- | :--------------- | :-------------------------------- | :-------------------------------------- | :------------------------------ |
| Bloat              | WARNING          | Warning Threshold                 | 1GB                                     | 1GB                             |
| Bloat              | CRITICAL         | Critical Threshold                | 2GB                                     | 2GB                             |
| Bloat              | ACTION           | The test determined by the plugin | bloat                                   |                                 |
| Bloat              | EXTRAEXCLUDE     | Database to exclude               | \--exclude=postgres,template0,template1 |                                 |
| Cache-Hitratio     | WARNING          | Warning Threshold                 | 90%                                     | 90%                             |
| Cache-Hitratio     | CRITICAL         | Critical Threshold                | 80%                                     | 80%                             |
| Cache-Hitratio     | ACTION           | The test determined by the plugin | hitratio                                |                                 |
| Cache-Hitratio     | EXTRAEXCLUDE     | Database to exclude               | \--exclude=postgres,template0,template1 |                                 |
| Connection         | ACTION           | The test determined by the plugin | connection                              |                                 |
| Connection         | WARNING          | Warning Threshold                 | 0                                       | 0                               |
| Connection         | CRITICAL         | Critical Threshold                | 0                                       | 0                               |
| Connetions-Number  | ACTION           | The test determined by the plugin | backends                                |                                 |
| connections-Number | WARNING          | Warning Threshold                 | 90%                                     | 90%                             |
| Connection-Number  | CRITICAL         | Critical Threshold                | 95%                                     | 95%                             |
| Connection-Number  | EXTRAEXCLUDE     | Database to exclude               | \--exclude=postgres,template0,template1 |                                 |
| Locks              | WARNING          | Warning Threshold                 | 200                                     | 200                             |
| Locks              | CRITICAL         | Critical Threshold                | total=250:waiting=5:exclusive=20        | total=250:waiting=5:exclusive=2 |
| Locks              | ACTION           | The test determined by the plugin | locks                                   |                                 |
| Query-Time         | WARNING          | Warning Threshold                 | 30 secondes                             | 30 secondes                     |
| Query-Time         | CRITICAL         | Critical Threshold                | 1 minutes                               | 1 minutes                       |
| Query-Time         | ACTION           | The test determined by the plugin | query\_time                             |                                 |
| Query-Time         | EXTRAEXCLUDE     | Database to exclude               | \--exclude=postgres,template0,template1 |                                 |
| Query-Time         | EXTRAEXCLUDEUSER | User to exclude                   | \--excludeuser=postgres                 |                                 |
| Time-Sync          | WARNING          | Warning Threshold                 | 2                                       | 2                               |
| Time-Sync          | CRTICAL          | Critical Threshold                | 5                                       | 5                               |
| Time-Sync          | ACTION           | The test determined by the plugin | timesync                                |                                 |
| Time-Sync          | EXTRAEXCLUDE     | Database to exclude               | \--exclude=postgres,template0,template1 |                                 |

