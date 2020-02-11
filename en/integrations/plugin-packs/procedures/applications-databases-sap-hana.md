---
id: pp-applications-databases-sap-hana
title: SAP HANA
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.2 | `STABLE` | Aug 25 2017 |

## Prerequisites 
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Databases-Sap-Hana

### Sap Hana Client
To monitor Sap Hana DB, you need to install SAP Hana Linux Client.
The client is on SAP support website (an account is needed).

    yum install unixODBC perl-DBD-ODBC

### Configuration of freetds.conf file
The /etc/odbcinst.ini file have to be modified. Add following lines:

    [HDBODBC]
    Description = "SmartCloudPT HANA"
    Driver=/usr/sap/hdbclient/libodbcHDB.so

### User account 

An user with rights on SYS schema is needed.

### Test the connection

An example of command to test database connection:

   # /usr/sap/hdbclient/hdbsql -n saphanadb_servername:31041 -d databasename -u username -p password

## Centreon Configuration
### Create a new host
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

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
<td align="left"><p>App-DB-Sap-Hana-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

