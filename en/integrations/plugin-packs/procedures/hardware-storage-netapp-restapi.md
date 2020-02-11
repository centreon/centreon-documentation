---
id: pp/hardware-storage-netapp-restapi
title: NetApp Restapi
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.1 | `STABLE` | Apr 25 2018 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Hardware-Storage-Netapp-Restapi

## Centreon Configuration
### Create a new NetApp server
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
<td align="left"><p>HW-Storage-NetApp-Restapi-custom</p></td>
</tr>
<tr class="even">
<td align="left"><p><em>Relations &gt; Parent Hostgroups</em> tab</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

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
<td align="left"><p>APIURLPATH</p></td>
<td align="left"><p>OnCommand API path</p></td>
<td align="left"><p>/api/4.0/ontap</p></td>
</tr>
<tr class="even">
<td align="left"><p>APIUSERNAME</p></td>
<td align="left"><p>OnCommand API username</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>APIPASSWORD</p></td>
<td align="left"><p>OnCommand API password</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>APIPORT</p></td>
<td align="left"><p>OnCommand API port</p></td>
<td align="left"><p>8443</p></td>
</tr>
<tr class="odd">
<td align="left"><p>APIPROTO</p></td>
<td align="left"><p>OnCommand API protcole</p></td>
<td align="left"><p>https</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

