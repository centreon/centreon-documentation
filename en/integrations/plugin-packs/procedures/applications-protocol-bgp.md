---
id: pp-applications-protocol-bgp
title: BGP Protocol
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.11 | `DEPRECATED` | Jul 10 2017 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins
to run.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Protocol-Bgp


### Network Equipment
Network equipment must have SNMP Enabled and allow query on OID
.1.3.6.1.2.1.5

Note: If you use several logical system/network to segment your network
(e.g with Juniper equipments), you need to specify community in the
following format :

    LOGICALSYSTEM/routingInstance@Community

## Centreon Configuration
### Create a host using the appropriate template
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
<td align="left"><p>App-Protocol-BGP-custom</p></td>
</tr>
<tr class="even">
<td align="left"><p><em>Relations</em> &gt; Parent Hostgroups tab</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

