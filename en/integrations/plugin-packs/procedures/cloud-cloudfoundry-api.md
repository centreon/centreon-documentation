---
id: pp-cloud-cloudfoundry-api
title: Cloud Foundry
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Nov  9 2018 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Cloud-Cloudfoundry-Api

## Centreon Configuration
### Create a new host
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
<td align="left"><p>Cloud-Cloudfoundry-Api-custom</p></td>
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
<td align="left"><p>CLOUDFOUNDRYAPIHOSTNAME</p></td>
<td align="left"><p>Hostname of the Cloud Foundry API</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>CLOUDFOUNDRYAPIPATH</p></td>
<td align="left"><p>URL of the API</p></td>
<td align="left"><p>/v2</p></td>
</tr>
<tr class="odd">
<td align="left"><p>CLOUDFOUNDRYAPIPORT</p></td>
<td align="left"><p>Port of the API</p></td>
<td align="left"><p>443</p></td>
</tr>
<tr class="even">
<td align="left"><p>CLOUDFOUNDRYAPIPROTO</p></td>
<td align="left"><p>Protocol used by API</p></td>
<td align="left"><p>https</p></td>
</tr>
<tr class="odd">
<td align="left"><p>CLOUDFOUNDRYAPIUSERNAME</p></td>
<td align="left"><p>API username</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>CLOUDFOUNDRYAPIPASSWORD</p></td>
<td align="left"><p>API password</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

