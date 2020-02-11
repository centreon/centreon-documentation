---
id: pp-applications-exchange-2010-nsclient-05-restapi
title: Exchange 2010 API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.16 | `STABLE` | Feb 21 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Operatingsystems-Windows-Restapi

### Nsclient++
This plugin pack requires the use of: 
* the Exchange 2010 plugin provided [here](https://forge.centreon.com/projects/centreon-plugins/repository)
* NSClient++ package provided by Centreon, installed and configured on
your target server as described on http://documentation.centreon.com

You can download it [here](https://download.centreon.com/?action=product&product=agent-nsclient&version=0.51&secKey=59d646114079212e03ec09454456a938)

Note: Powershell and `Microsoft.Exchange.Management.PowerShell.E2010` snap-in have to be installed on Exchange Server

Note: If you use the NSClient++ installer provided by Centreon, the
plugin is already included in centreon\_plugins.exe configured in
NSClient++

If you have some problems with the centreon\_plugins.exe, you can build it using [following procedure](https://documentation.centreon.com/docs/centreon-nsclient/en/latest/windows_agent.html#build-your-own-executable)

Note: You can use options `--remote-host`, `--remote-user` and
`--remote-password` to execute services from another Windows Server (the
Windows still need powershell and the snap-in)

Warning: Set service macro `MAILBOX` with the following syntax:

    DOMAIN\username

Warning: Don't use '!' character in centreon macro configuration!!!

Warning: Service `Queues` works on exchange server with the good
role.

##Centreon Configuration
### Create a new Exchange server
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
<td align="left"><p>App-Exchange-2010-NSClient-05-Restapi-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

By default, the host template checks nothing. Go to plugin-pack manager
to see services available.

