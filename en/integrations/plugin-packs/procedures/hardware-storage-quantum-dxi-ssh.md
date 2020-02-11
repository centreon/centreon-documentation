---
id: pp/hardware-storage-quantum-dxi-ssh
title: Quantum DXi Series
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Jan 10 2019 |

##  Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Hardware-Storage-Quantum-Dxi-Ssh

### SSH
SSH key exchange mut be done between poller and monitored server.

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
<td align="left"><p>HW-Storage-Quantum-Dxi-SSH-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

