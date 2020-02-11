---
id: pp/virtualization-proxmox-ve-restapi
title: Proxmox VE
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jan 10 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Virtualization-Proxmox-Ve-Restapi

## RestAPI Configuration
API user need to have this privileges:

    VM.Monitor, VM.Audit, Datastore.Audit, Sys.Audit, Sys.Syslog'

## Troubleshooting
To check if you access to the api, you can run the following command :

     curl -k -d "username=root@pam&password=yourpassword"  https://10.0.0.1:8006/api2/json/access/ticket

## Centreon Configuration
### Create a host using the appropriate template
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="37%" />
<col width="62%" />
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
<td align="left"><p>Virt-Promox-Pe-Restapi-Custom</p></td>
</tr>
<tr class="even">
<td align="left"><p><em>Relations &gt; Parent Hostgroups</em> tab</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

### Host Macro Configuration
The following macros must be configured on host:

<table>
<colgroup>
<col width="20%" />
<col width="47%" />
<col width="19%" />
<col width="13%" />
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
<td align="left"><p>PROXMOXAPIPORT</p></td>
<td align="left"><p>Port used to connect to the Proxmox API</p></td>
<td align="left"><p>8006</p></td>
<td align="left"><p>443</p></td>
</tr>
<tr class="even">
<td align="left"><p>PROXMOXAPIUSERNAME</p></td>
<td align="left"><p>the Proxmox API user</p></td>
<td align="left"><p>PROXMOXAPIUSERNAME</p></td>
<td align="left"><p>monitoring</p></td>
</tr>
<tr class="odd">
<td align="left"><p>PROXMOXAPIPASSWORD</p></td>
<td align="left"><p>the Proxmox API user's password</p></td>
<td align="left"><p>PROXMOXAPIPASSWORD</p></td>
<td align="left"><p>HuGr6834</p></td>
</tr>
<tr class="odd">
<td align="left"><p>PROXMOXAPIREALM</p></td>
<td align="left"><p>the Proxmox API authentication mechanism</p></td>
<td align="left"><p>pam</p></td>
<td align="left"><p>pve</p></td>
</tr>
<td align="left"><p>PROXMOXAPIPROTO</p></td>
<td align="left"><p>the Proxmox API protocol</p></td>
<td align="left"><p>https</p></td>
<td align="left"><p>http</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

