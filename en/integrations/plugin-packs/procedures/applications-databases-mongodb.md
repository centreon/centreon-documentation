---
id: pp/applications-databases-mongodb
title: MongoDB
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.5 | `STABLE` | Jun  7 2019 |

## Prerequisites

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Databases-Mongodb

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
<td align="left"><p>App-DB-Mongodb-custom</p></td>
</tr>
</tbody>
</table>

Click "Save" button.

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
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>MONGODBPORT</p></td>
<td align="left"><p>Port used to connect to the MongoDB instance</p></td>
<td align="left"><p>27017</p></td>
</tr>
<tr class="even">
<td align="left"><p>MONGODBUSERNAME</p></td>
<td align="left"><p>The MongoDB username</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>MONGODBPASSWORD</p></td>
<td align="left"><p>The MongoDB password</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>


