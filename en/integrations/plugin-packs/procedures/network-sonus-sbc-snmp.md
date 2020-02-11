---
id: pp-network-sonus-sbc-snmp
title: Sonus SBC 
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.2 | `STABLE` | Apr 12 2019 |

##Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Network-Sonus-Sbc-Snmp


Be sure to have with you the following information:
* Read-Only SNMP community
* IP Address of the equipment

## Centreon Configuration
### Create a new Sonus SBC host definition
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
<td align="left"><p>Net-Sonus-Sbc-custom</p></td>
</tr>
</tbody>
</table>

Click "Save" button.

