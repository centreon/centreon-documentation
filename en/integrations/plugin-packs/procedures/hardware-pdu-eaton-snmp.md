---
id: pp/hardware-pdu-eaton-snmp
title: Eaton PDU SNMP
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.2 | `STABLE` | Oct 16 2019 |


## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

    yum install centreon-plugin-Hardware-Pdu-Eaton-Snmp

## SNMP

Connect to your PDU Eaton and configure SNMP.

## Centreon Configuration

### Create a new PDU Eaton host

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
<td align="left"><p>HW-Pdu-Eaton-SNMP-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

