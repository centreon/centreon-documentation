---
id: network-switchs-hirschmann
title: Hirschmann switch
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.1 | `STABLE` | May  2 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Network-Switchs-Hirschmann

Be sure to have with you the following information:
* Read-Only SNMP community
* IP Address of the equipment

### Configure SNMP on your server
Follow constructor procedure for your equipment.

### SNMP Permissions
Read-Only access.

### Troubleshooting
Read [Troubleshooting SNMP](https://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp).

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
<td align="left"><p>Net-Cisco-Sb-Standard-SNMP-custom</p></td>
</tr>
<tr class="even">
<td align="left"><p><em>Relations &gt; Parent Hostgroups</em> tab</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

<table>
<colgroup>
<col width="33%" />
<col width="66%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Optionnal Service</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>leds</p></td>
<td align="left"><p>Monitor led status</p></td>
</tr>
<tr class="even">
<td align="left"><p>Traffic-Generic-Name</p></td>
<td align="left"><p>Monitor traffic of an network interface</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Traffic-Generic-id</p></td>
<td align="left"><p>Monitor traffic of an network interface</p></td>
</tr>
<tr class="even">
<td align="left"><p>Traffic-Global</p></td>
<td align="left"><p>Monitor traffic of multiple network interfaces</p></td>
</tr>
</tbody>
</table>

Host Macro Configuration
------------------------

The following macros must be configured on host (* means mandatory
options):

<table>
<colgroup>
<col width="24%" />
<col width="44%" />
<col width="17%" />
<col width="12%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Macro</th>
<th align="left">Description</th>
<th align="left">Default value</th>
<th align="left">Example</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>SNMPEXTRAOPTIONS</p></td>
<td align="left"><p>Extra options for SNMP connection</p></td>
<td align="left"></td>
<td align="left"></td>
</tr>
</tbody>
</table>

