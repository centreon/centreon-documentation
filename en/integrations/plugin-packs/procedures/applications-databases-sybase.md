---
id: pp-applications-databases-sybase
title: Sybase
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.2 | `STABLE` | Feb  6 2017 |

##Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Databases-Sybase

## Username
The username string should not be longer than 32 chararacters. Username
must be in the following form: [Servername|Domainname]\Username

### RPM
In order to use this template, the following RPM are needed:

* freetds-0.82
* perl-DBD-Sybase-1.10-1
* unixODBC-2.2.11-10
* unixODBC-devel-2.2.11-10

## Centreon Configuration
### Create a new Sybase database server
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
<td align="left"><p>App-DB-Sybase-custom</p></td>
</tr>
</tbody>
</table>

Click "Save" button.

Those services were automatically created for this host:

<table>
<colgroup>
<col width="24%" />
<col width="75%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Service</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="even">
<td align="left"><p>Blocked-Processes</p></td>
<td align="left"><p>Check blocked processes on the server.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Connection-Time</p></td>
<td align="left"><p>Check the connection time to the server.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Database-Size</p></td>
<td align="left"><p>Check Size space of databases on the server.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Connected-User</p></td>
<td align="left"><p>Check connected user.</p></td>
</tr>
</tbody>
</table>

### Host Macro Configuration
The following macros must be configured on host:

<table>
<colgroup>
<col width="19%" />
<col width="48%" />
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
<td align="left"><p>SYBASEUSERNAME</p></td>
<td align="left"><p>the Sybase user</p></td>
<td align="left"><p>USERNAME</p></td>
<td align="left"><p>root</p></td>
</tr>
<tr class="even">
<td align="left"><p>SYBASEPASSWORD</p></td>
<td align="left"><p>the Sybase password</p></td>
<td align="left"><p>PASSWORD</p></td>
<td align="left"><p>p@ssw0rd</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SYBASEPORT</p></td>
<td align="left"><p>Port Of the Sybase Database</p></td>
<td align="left"><p>2638</p></td>
<td align="left"><p>2638</p></td>
</tr>
</tbody>
</table>

