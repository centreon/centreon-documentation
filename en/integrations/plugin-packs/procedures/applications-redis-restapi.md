---
id: pp-applications-redis-restapi
title: Redis Restapi
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.4 | `STABLE` | Jan 17 2018 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:
    yum install centreon-plugin-Applications-Redis-Restapi

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
<td align="left"><p>App-Redis-Restapi</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

### Host Macro Configuration
The following macros must be configured on host:

<table>
<colgroup>
<col width="23%" />
<col width="53%" />
<col width="24%" />
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
<td align="left"><p>REDISPORT</p></td>
<td align="left"><p>Redis server port</p></td>
<td align="left"><p>6379</p></td>
</tr>
<tr class="even">
<td align="left"><p>REDISUSERNAME</p></td>
<td align="left"><p>Redis server username</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>REDISPASSWORD</p></td>
<td align="left"><p>Redis server password</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>


