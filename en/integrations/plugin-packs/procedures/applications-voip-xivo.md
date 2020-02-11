---
id: applications-voip-xivo
title: XiVO VoIP Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.10 | `STABLE` | Feb 21 2018 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins
to run.

### Dependencies
This plugin pack is dependent of "NTP Server" "HTTP Server" and "Asterisk VoIP Server SNMP", so you might have to install these packages before being able to add this plugin pack:

    yum install centreon-pack-applications-protocol-ntp centreon-pack-applications-protocol-http centreon-pack-applications-voip-asterisk-snmp

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Operatingsystems-Linux-Snmp centreon-plugin-Applications-Protocol-Ntp centreon-plugin-Applications-Voip-Asterisk-Snmp centreon-plugin-Applications-Protocol-Http


### Remote server
The remote server must have a XiVO Appliance running and available.

## Centreon Configuration
### Create a XiVO server
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
<td align="left"><p>App-VoIP-XiVO-custom</p></td>
</tr>
<tr class="even">
<td align="left"><p>Onglet <em>Relations</em> &gt; Parent Hostgroups</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

This service was automatically created for this host:

<table>
<colgroup>
<col width="39%" />
<col width="60%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Service</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>XiVO-process-nginx</p></td>
<td align="left"><p>Monitor nginx processus</p></td>
</tr>
<tr class="even">
<td align="left"><p>XiVO-process-postgres</p></td>
<td align="left"><p>Monitor postgres processus</p></td>
</tr>
<tr class="odd">
<td align="left"><p>XiVO-process-xivo-agentd</p></td>
<td align="left"><p>Monitor xivo-agentd processus</p></td>
</tr>
<tr class="even">
<td align="left"><p>XiVO-process-xivo-agid</p></td>
<td align="left"><p>Monitor xivo-agid processus</p></td>
</tr>
<tr class="odd">
<td align="left"><p>XiVO-process-xivo-amid</p></td>
<td align="left"><p>Monitor xivo-amid processus</p></td>
</tr>
<tr class="even">
<td align="left"><p>XiVO-process-xivo-confgend</p></td>
<td align="left"><p>Monitor xivo-confgend processus</p></td>
</tr>
<tr class="odd">
<td align="left"><p>XiVO-process-xivo-ctid</p></td>
<td align="left"><p>Monitor xivo-ctid processus</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="38%" />
<col width="61%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Optionnal Service</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>XiVO-process-xivo-call-logd</p></td>
<td align="left"><p>Monitor xivo-call-logd processus</p></td>
</tr>
<tr class="even">
<td align="left"><p>XiVO-process-xivo-confd</p></td>
<td align="left"><p>Monitor xivo-confd processus</p></td>
</tr>
<tr class="odd">
<td align="left"><p>XiVO-process-xivo-dxtora</p></td>
<td align="left"><p>Monitor xivo-dxtora processus</p></td>
</tr>
<tr class="even">
<td align="left"><p>XiVO-process-xivo-provd</p></td>
<td align="left"><p>Monitor xivo-provd processus</p></td>
</tr>
</tbody>
</table>


