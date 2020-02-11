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
#### Grant SELECT Privileges on  in order to use the SQL mode
    GRANT SELECT ON mytable TO monitoring;
    
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Databases-Postgresql

In order to use this template, the following RPM are needed on your
poller:
* postgresql
* postgresql-libs
* perl-DBD-Pg

## Centreon Configuration
### Create a new server postgresql
Go to "Configuration &gt; Hosts" and click "Add". Then, fill the form as
shown by the following table :

<table>
<colgroup>
<col width="58%" />
<col width="41%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field</th>
<th align="left">Value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Host name</p></td>
<td align="left"><p><em>Name of the host</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Alias</p></td>
<td align="left"><p><em>Host description</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>IP</p></td>
<td align="left"><p><em>Host IP Address</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Monitored from</p></td>
<td align="left"><p><em>Monitoring Poller to use</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Host Multiple Templates</p></td>
<td align="left"><p>App-DB-Postgre-custom</p></td>
</tr>
</tbody>
</table>

Click "Save" button.

Those services were automatically created for this host:

<table>
<colgroup>
<col width="18%" />
<col width="81%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Service</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Bloat</p></td>
<td align="left"><p>Check bloat (unused amount of dead space) in table and indexes of the Postgres server</p></td>
</tr>
<tr class="even">
<td align="left"><p>Cache-Hitratio</p></td>
<td align="left"><p>Check the &quot;buffer cache hitratio&quot; of the Postgres server</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Connection</p></td>
<td align="left"><p>Monitor to the connection time to the db</p></td>
</tr>
<tr class="even">
<td align="left"><p>Connection-Number</p></td>
<td align="left"><p>Monitor the number of connections</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Locks</p></td>
<td align="left"><p>Check locks of the Postgres server</p></td>
</tr>
<tr class="even">
<td align="left"><p>Ping</p></td>
<td align="left"><p>Monitor host response time</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Query-time</p></td>
<td align="left"><p>Check how long a specific query takes to run</p></td>
</tr>
<tr class="even">
<td align="left"><p>Time-Sync</p></td>
<td align="left"><p>Check time between poller and the Postgres server</p></td>
</tr>
</tbody>
</table>

### Host Macro Configuration
The following macros must be configured on host:

<table>
<colgroup>
<col width="22%" />
<col width="45%" />
<col width="18%" />
<col width="12%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Macro</th>
<th align="left">Description</th>
<th align="left">Default value</th>
<th align="left">Example</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>POSTGRESPORT</p></td>
<td align="left"><p>Port used to connect to the DB server</p></td>
<td align="left"><p>5432</p></td>
<td align="left"><p>5432</p></td>
</tr>
<tr class="even">
<td align="left"><p>POSTGRESUSERNAME</p></td>
<td align="left"><p>the postgres db user</p></td>
<td align="left"><p>USERNAME</p></td>
<td align="left"><p>root</p></td>
</tr>
<tr class="odd">
<td align="left"><p>POSTGRESPASSWORD</p></td>
<td align="left"><p>the postgres db user's password</p></td>
<td align="left"><p>PASSWORD</p></td>
<td align="left"><p>p@ssw0rd</p></td>
</tr>
</tbody>
</table>

### Service Macro configuration
The following macros must be configured on services:

<table>
<colgroup>
<col width="17%" />
<col width="9%" />
<col width="22%" />
<col width="29%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Service</th>
<th align="left">Macro</th>
<th align="left">Description</th>
<th align="left">Default Value</th>
<th align="left">Example</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Bloat</p></td>
<td align="left"><p>WARNING</p></td>
<td align="left"><p>Warning Threshold</p></td>
<td align="left"><p>1GB</p></td>
<td align="left"><p>1GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Bloat</p></td>
<td align="left"><p>CRITICAL</p></td>
<td align="left"><p>Critical Threshold</p></td>
<td align="left"><p>2GB</p></td>
<td align="left"><p>2GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Bloat</p></td>
<td align="left"><p>ACTION</p></td>
<td align="left"><p>The test determined by the plugin</p></td>
<td align="left"><p>bloat</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Bloat</p></td>
<td align="left"><p>EXTRAEXCLUDE</p></td>
<td align="left"><p>Database to exclude</p></td>
<td align="left"><p>--exclude=postgres,template0,template1</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Cache-Hitratio</p></td>
<td align="left"><p>WARNING</p></td>
<td align="left"><p>Warning Threshold</p></td>
<td align="left"><p>90%</p></td>
<td align="left"><p>90%</p></td>
</tr>
<tr class="even">
<td align="left"><p>Cache-Hitratio</p></td>
<td align="left"><p>CRITICAL</p></td>
<td align="left"><p>Critical Threshold</p></td>
<td align="left"><p>80%</p></td>
<td align="left"><p>80%</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Cache-Hitratio</p></td>
<td align="left"><p>ACTION</p></td>
<td align="left"><p>The test determined by the plugin</p></td>
<td align="left"><p>hitratio</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Cache-Hitratio</p></td>
<td align="left"><p>EXTRAEXCLUDE</p></td>
<td align="left"><p>Database to exclude</p></td>
<td align="left"><p>--exclude=postgres,template0,template1</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Connection</p></td>
<td align="left"><p>ACTION</p></td>
<td align="left"><p>The test determined by the plugin</p></td>
<td align="left"><p>connection</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Connection</p></td>
<td align="left"><p>WARNING</p></td>
<td align="left"><p>Warning Threshold</p></td>
<td align="left"><p>0</p></td>
<td align="left"><p>0</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Connection</p></td>
<td align="left"><p>CRITICAL</p></td>
<td align="left"><p>Critical Threshold</p></td>
<td align="left"><p>0</p></td>
<td align="left"><p>0</p></td>
</tr>
<tr class="even">
<td align="left"><p>Connetions-Number</p></td>
<td align="left"><p>ACTION</p></td>
<td align="left"><p>The test determined by the plugin</p></td>
<td align="left"><p>backends</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>connections-Number</p></td>
<td align="left"><p>WARNING</p></td>
<td align="left"><p>Warning Threshold</p></td>
<td align="left"><p>90%</p></td>
<td align="left"><p>90%</p></td>
</tr>
<tr class="even">
<td align="left"><p>Connection-Number</p></td>
<td align="left"><p>CRITICAL</p></td>
<td align="left"><p>Critical Threshold</p></td>
<td align="left"><p>95%</p></td>
<td align="left"><p>95%</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Connection-Number</p></td>
<td align="left"><p>EXTRAEXCLUDE</p></td>
<td align="left"><p>Database to exclude</p></td>
<td align="left"><p>--exclude=postgres,template0,template1</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Locks</p></td>
<td align="left"><p>WARNING</p></td>
<td align="left"><p>Warning Threshold</p></td>
<td align="left"><p>200</p></td>
<td align="left"><p>200</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Locks</p></td>
<td align="left"><p>CRITICAL</p></td>
<td align="left"><p>Critical Threshold</p></td>
<td align="left"><p>total=250:waiting=5:exclusive=20</p></td>
<td align="left"><p>total=250:waiting=5:exclusive=2</p></td>
</tr>
<tr class="even">
<td align="left"><p>Locks</p></td>
<td align="left"><p>ACTION</p></td>
<td align="left"><p>The test determined by the plugin</p></td>
<td align="left"><p>locks</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Query-Time</p></td>
<td align="left"><p>WARNING</p></td>
<td align="left"><p>Warning Threshold</p></td>
<td align="left"><p>30 secondes</p></td>
<td align="left"><p>30 secondes</p></td>
</tr>
<tr class="even">
<td align="left"><p>Query-Time</p></td>
<td align="left"><p>CRITICAL</p></td>
<td align="left"><p>Critical Threshold</p></td>
<td align="left"><p>1 minutes</p></td>
<td align="left"><p>1 minutes</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Query-Time</p></td>
<td align="left"><p>ACTION</p></td>
<td align="left"><p>The test determined by the plugin</p></td>
<td align="left"><p>query_time</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Query-Time</p></td>
<td align="left"><p>EXTRAEXCLUDE</p></td>
<td align="left"><p>Database to exclude</p></td>
<td align="left"><p>--exclude=postgres,template0,template1</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Query-Time</p></td>
<td align="left"><p>EXTRAEXCLUDEUSER</p></td>
<td align="left"><p>User to exclude</p></td>
<td align="left"><p>--excludeuser=postgres</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Time-Sync</p></td>
<td align="left"><p>WARNING</p></td>
<td align="left"><p>Warning Threshold</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>2</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Time-Sync</p></td>
<td align="left"><p>CRTICAL</p></td>
<td align="left"><p>Critical Threshold</p></td>
<td align="left"><p>5</p></td>
<td align="left"><p>5</p></td>
</tr>
<tr class="even">
<td align="left"><p>Time-Sync</p></td>
<td align="left"><p>ACTION</p></td>
<td align="left"><p>The test determined by the plugin</p></td>
<td align="left"><p>timesync</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Time-Sync</p></td>
<td align="left"><p>EXTRAEXCLUDE</p></td>
<td align="left"><p>Database to exclude</p></td>
<td align="left"><p>--exclude=postgres,template0,template1</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

