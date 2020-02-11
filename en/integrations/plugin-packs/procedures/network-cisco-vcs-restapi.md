---
id: pp/network-cisco-vcs-restapi
title: Cisco VCS
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jan 10 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Network-Cisco-Vcs-Restapi

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
<td align="left"><p>Net-Cisco-Vcs-Restapi-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

### Host Macro Configuration
The following macros must be configured on host:

<table>
<colgroup>
<col width="23%" />
<col width="53%" />
<col width="24%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Macro</th>
<th align="left">Description</th>
<th align="left">Default value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>VCSCUSTOMMODE</p></td>
<td align="left"><p>Mode used by plugin</p></td>
<td align="left"><p>xmlapi</p></td>
</tr>
<tr class="even">
<td align="left"><p>VCSAPIURLPATH</p></td>
<td align="left"><p>Path to the CMS API</p></td>
<td align="left"><p>/getxml?location=</p></td>
</tr>
<tr class="odd">
<td align="left"><p>VCSAPIPORT</p></td>
<td align="left"><p>Port of the VCS API instance</p></td>
<td align="left"><p>443</p></td>
</tr>
<tr class="even">
<td align="left"><p>VCSAPIPROTO</p></td>
<td align="left"><p>Protocol used by the VCS API</p></td>
<td align="left"><p>https</p></td>
</tr>
<tr class="odd">
<td align="left"><p>USERNAME</p></td>
<td align="left"><p>Username to access VCS API</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>PASSWORD</p></td>
<td align="left"><p>Password to access VCS API</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

