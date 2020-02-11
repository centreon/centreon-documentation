---
id: hardware-storage-fujitsu-eternus-dx-ssh
title: Fujitsu Eternus DX
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.22 | `STABLE` | Oct  3 2019 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins
to run.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Hardware-Storage-Fujitsu-Eternus-Dx-Ssh


SSH key exchange must be done between poller and monitored server.
Create a user centreon on your Fujitsu Eternus DX equipment.

Generate key for centreon-engine user with command:

    su - centreon-engine
    ssh-keygen -N "" -f ~/.ssh/identity
    ssh-keygen -e -f .ssh/identity.pub > identity.pub.ietf
    telnet <FUJITSU_IP>
    CLI> import ssh-public-key -server <POLLER_IP> -port maintenance -user <ADMIN_USER> -filename identity.pub.ietf -account-name centreon
    Password:
    importing ./identity.pub.ietf from ...
    CLI> exit

You can now try to connect you without password

    su - centreon-engine
    ssh -l centreon <FUJITSU_IP>

## Centreon Configuration
### Create a host using the appropriate template
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="35%" />
<col width="64%" />
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
<td align="left"><p>HW-Storage-Fujitsu-Eternus-DX-SSH-custom</p></td>
</tr>
<tr class="even">
<td align="left"><p><em>Relations &gt; Parent Hostgroups</em> tab</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

