---
id: pp-applications-databases-mysql
title: MySQL/MariaDB
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.6 | `STABLE` | Jul 11 2019 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins
to run.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Databases-Mysql

### Creating a database user
In order to be able to collect the needed information from the database a database user with specific privileges is required:

    grant usage on *.* to 'centreon'@'pollerip' identified by 'password'

### MySQL, perl-dbi, perl-dbd-mysql
All prerequisites needed to run mysql plugins are packaged and installed
with Centreon Entreprise Server: perl-DBI , perl-DBD-mysql , mysql.

## Centreon Configuration
### Create a new MySQL server
Go to "Configuration &gt; Hosts" and click "Add". Then, fill the form as
shown by the following table :

<table>
<colgroup>
<col width="58%" />
<col width="41%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Fields</th>
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
<td align="left"><p>App-DB-MySQL-custom</p></td>
</tr>
</tbody>
</table>

Click "Save" button.

Those services were automatically created for this host:

<table>
<colgroup>
<col width="29%" />
<col width="65%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Service</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Ping</p></td>
<td align="left"><p>Monitor host response time</p></td>
</tr>
<tr class="even">
<td align="left"><p>Connection-Time</p></td>
<td align="left"><p>Monitor to the connection time to the server</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Connections-Number</p></td>
<td align="left"><p>Monitor the number of open connections</p></td>
</tr>
<tr class="even">
<td align="left"><p>Database-Size</p></td>
<td align="left"><p>Monitor all the databases size</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Innodb-Bufferpool</p></td>
<td align="left"><p>Monitor the InnoDB buffer pool hitrate</p></td>
</tr>
<tr class="even">
<td align="left"><p>Myisam-Keycache</p></td>
<td align="left"><p>Monitor the MyISAM key cache hitrate</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Open-Files</p></td>
<td align="left"><p>percentage of openned files</p></td>
</tr>
<tr class="even">
<td align="left"><p>Queries</p></td>
<td align="left"><p>Monitor the average of queries per second</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Slowqueries</p></td>
<td align="left"><p>Monitor the number of slow queries</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="29%" />
<col width="65%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Optionnal Service</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Uptime</p></td>
<td align="left"><p>Monitor the server's uptime</p></td>
</tr>
</tbody>
</table>

### Host Macro Configuration
The following macros must be configured on host:

<table>
<colgroup>
<col width="20%" />
<col width="47%" />
<col width="19%" />
<col width="13%" />
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
<td align="left"><p>MYSQLPORT</p></td>
<td align="left"><p>Port used to connect to the DB server</p></td>
<td align="left"><p>MYSQLPORT</p></td>
<td align="left"><p>3306</p></td>
</tr>
<tr class="even">
<td align="left"><p>MYSQLUSERNAME</p></td>
<td align="left"><p>the mysql db user</p></td>
<td align="left"><p>MYSQLUSERNAME</p></td>
<td align="left"><p>root</p></td>
</tr>
<tr class="odd">
<td align="left"><p>MYSQLPASSWORD</p></td>
<td align="left"><p>the mysql db user's password</p></td>
<td align="left"><p>MYSQLPASSWORD</p></td>
<td align="left"><p>HuGr6834</p></td>
</tr>
</tbody>
</table>

