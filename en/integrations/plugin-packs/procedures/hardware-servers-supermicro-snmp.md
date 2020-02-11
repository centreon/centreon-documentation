---
id: pp/hardware-servers-supermicro-snmp
title: Supermicro
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Aug  7 2017 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Hardware-Servers-Supermicro-Snmp


### SNMP
It's necessary to install SuperDoctor Agent and enable SNMP on Supermicro server

## Centreon Configuration
### Create a host using the appropriate template
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="56%" />
<col width="43%" />
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
<td align="left"><p>HW-Server-Supermicro-SNMP-custom</p></td>
</tr>
<tr class="even">
<td align="left"><p><em>Relations &gt; Parent Hostgroups</em> tab</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

Those services were automatically created for this host:

<table>
<colgroup>
<col width="23%" />
<col width="76%" />
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
<td align="left"><p>Hardware-Global</p></td>
<td align="left"><p>Monitor Global hardware status</p></td>
</tr>
</tbody>
</table>

