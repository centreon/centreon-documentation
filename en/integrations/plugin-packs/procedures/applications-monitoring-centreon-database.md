---
id: pp-applications-monitoring-centreon-database
title: Centreon Database
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.3.0 | `STABLE` | Jan 30 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Monitoring-Centreon-Database centreon-plugin-Operatingsystems-Linux-Snmp

### Creating a database user for Service Partitioning Monitoring
In order to be able to collect the needed information from the database a database user with specific privileges is required:

    grant select on *.* to 'monitor'@'%' identified by 'HuGr6834';

### SNMP
Enable SNMP Agent

## Centreon Configuration
### Create a new Centreon Database server
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="55%" />
<col width="44%" />
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
<td align="left"><p>App-Monitoring-Centreon-Database-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

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
<td align="left"><p>monitor</p></td>
</tr>
<tr class="odd">
<td align="left"><p>MYSQLPASSWORD</p></td>
<td align="left"><p>the mysql db user's password</p></td>
<td align="left"><p>MYSQLPASSWORD</p></td>
<td align="left"><p>HuGr6834</p></td>
</tr>
</tbody>
</table>

