---
id: hardware-printers-standard-rfc3805-snmp
title: Printer standard
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.25 | `STABLE` | Feb 15 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Hardware-Printers-Generic-Snmp

Be sure to have with you the following information:
* Read-Only SNMP community
* IP Address of the equipment

### Configure SNMP on your server
Follow constructor procedure for your equipment.

### SNMP Permissions
Read-Only access.

### Troubleshooting
Read [Troubleshooting SNMP](http://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp)

## Centreon Configuration
### Create a new host
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
<td align="left"><p>HW-Printer-Standard-rfc3805-snmp-custom</p></td>
</tr>
</tbody>
</table>

Choose "Yes" for the "Create Services linked to template" option.

Click on the *Save* button.

Following services are automatically created : 
* Printer-Hardware,
* Printer-Errors, 
* Cover-Status, 
* Marker-Impressions and Marker-Supply. 

If you want, you can add the paper tray check with the service template
provided.

