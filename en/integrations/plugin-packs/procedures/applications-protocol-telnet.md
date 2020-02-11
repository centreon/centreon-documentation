---
id: pp/applications-protocol-telnet
title: Telnet Scenario
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.3 | `STABLE` | Feb  6 2017 |

##Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Protocol-Telnet

### Remote server
The remote server must have a Telnet service running and available.
You need to create a JSON scenario file. An example:


    [
        {"cmd": "open", "options": { "Host": "10.0.0.1", "Port": "23", "Timeout": "30" } },
        {"cmd": "login", "options": { "Name": "admin", "Password": "pass", "Timeout": "5" } },
        {"cmd": "waitfor", "options": { "Match": "/string/", "Timeout": "5" } },
        {"cmd": "put", "options": { "String": "/mystring/", "Timeout": "5" } },
        {"cmd": "close" }
    ]

## Centreon Configuration
### Create a new Telnet Scenario server
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
<td align="left"><p>App-Protocol-Telnet-custom</p></td>
</tr>
</tbody>
</table>

Click "Save" button.

