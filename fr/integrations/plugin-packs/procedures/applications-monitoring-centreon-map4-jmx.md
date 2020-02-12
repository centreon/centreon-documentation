---
id: applications-monitoring-centreon-map4-jmx
title: Centreon Map4
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.3.2 | `DEPRECATED` | Feb 25 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Monitoring-Centreon-Map4-Jmx

Please install jolokia agent on your java application server
[Jolikia download page](https://jolokia.org/download.html). Ask to
your admin to deploy it and give you the URL.

## Centreon Configuration
### Create a new Centreon-Central server
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="55%" />
<col width="44%" />
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
<td align="left"><p>App-Monitoring-Centreon-Map4-JMX-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

