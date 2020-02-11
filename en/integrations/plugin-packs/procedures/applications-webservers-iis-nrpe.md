---
id: applications-webservers-iis-nrpe
title: Microsoft IIS Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.2 | `STABLE` | Mar 27 2018 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-nrpe-plugin

### Nsclient++
This plugin pack requires the use of:
* the IIS plugin provided [here](https://forge.centreon.com/projects/centreon-plugins/repository)
* NSClient++ package provided by Merethis, installed and configured on your target server as described on [documentation]( http://documentation.centreon.com)

Note: Web Management Tools have to be installed on the IIS Server

Note: If you use the NSClient++ installer provided by Centreon, the
plugin is already included in centreon\_plugins.exe configured in
NSClient++

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
<td align="left"><p>Apps-IIS-NRPE</p></td>
</tr>
<tr class="even">
<td align="left"><p><em>Relations &gt; Parent Hostgroups</em> tab</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

By default, the host template checks IIS services. Go to plugin-pack
manager to see other services available.

