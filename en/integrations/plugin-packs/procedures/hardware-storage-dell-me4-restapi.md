---
id: pp/hardware-storage-dell-me4-restapi
title: Dell Me4 Rest API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jun 21 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Hardware-Storage-Dell-Me4-Restapi

### Rest API
The plugin need an account to connect on Rest API.

## Centreon Configuration
### Create a host using the appropriate template
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="35%" />
<col width="64%" />
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
<td align="left"><p>HW-Storage-Dell-Me4-Restapi-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

