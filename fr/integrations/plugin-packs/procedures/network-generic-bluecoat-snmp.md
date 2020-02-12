---
id: network-generic-bluecoat-snmp
title: Bluecoat generic
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.24 | `STABLE` | Jan 11 2019 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins
to run.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Network-Generic-Bluecoat-Snmp


### SNMP
It's necessary to enable SNMP on your equipment

### Troubleshooting
Read [Troubleshooting SNMP](http://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp)


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
<td align="left"><p>Net-Bluecoat-SNMP-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

Those services were automatically created for this host:

<table>
<colgroup>
<col width="49%" />
<col width="50%" />
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
<td align="left"><p>Cpu</p></td>
<td align="left"><p>Check CPU usage on Bluecoat</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Memory</p></td>
<td align="left"><p>Check memory usage on Bluecoat</p></td>
</tr>
<tr class="even">
<td align="left"><p>Disk</p></td>
<td align="left"><p>Check disk usage on Bluecoat</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Hardware</p></td>
<td align="left"><p>Check the hardware sensors on Bluecoat</p></td>
</tr>
<tr class="even">
<td align="left"><p>Client-Connections</p></td>
<td align="left"><p>Check current client connections on Bluecoat</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Client-Requests</p></td>
<td align="left"><p>Check http client requests (in percent by type : hit, partial, misses, errors)</p></td>
</tr>
<tr class="even">
<td align="left"><p>Client-Traffic</p></td>
<td align="left"><p>Check bytes/s received/delivered to clients</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Server-Connections</p></td>
<td align="left"><p>Check current server connections on Bluecoat</p></td>
</tr>
</tbody>
</table>

