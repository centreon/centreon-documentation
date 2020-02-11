---
id: pp-applications-sccm-nsclient
title: Microsoft SCCM
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Apr 25 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

NRPE :
    yum install centreon-nrpe-plugin

NSClient++ RestAPI :
    yum install centreon-plugin-Operatingsystems-Windows-Restapi

### Nsclient++
This plugin pack requires the use of the NSClient++ package provided by Centreon.

You can download it [here](https://download.centreon.com/?action=product&product=agent-nsclient&version=0.51&secKey=59d646114079212e03ec09454456a938)

If you have some problems with the centreon\_plugins.exe, you can build it using [following procedure](https://documentation.centreon.com/docs/centreon-nsclient/en/latest/windows_agent.html#build-your-own-executable)

## Centreon Configuration
### Create a new IIS server
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
<td align="left"><p>Apps-Sccm-NRPE/App-Sccm-NSClient-05-Restapi</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

