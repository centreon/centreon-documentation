---
id: pp/applications-protocol-imap
title: IMAP Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.9 | `STABLE` | Feb  6 2017 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins
to run.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Protocol-Imap


### Remote server
The remote server must have an IMAP service running and available.

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
<td align="left"><p>App-Protocol-IMAP-custom</p></td>
</tr>
<tr class="even">
<td align="left"><p>Onglet <em>Relations</em> &gt; Parent Hostgroups</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

This service was automatically created for this host:

<table>
<colgroup>
<col width="29%" />
<col width="65%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Service</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>IMAP-Login</p></td>
<td align="left"><p>Monitor user connection</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="34%" />
<col width="65%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Optionnal Service</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Search-Message-Generic</p></td>
<td align="left"><p>Monitor messages in a mailbox</p></td>
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
<td align="left"><p>IMAPUSERNAME</p></td>
<td align="left"><p>the imap user</p></td>
<td align="left"><p>IMAPUSERNAME</p></td>
<td align="left"><p>foo</p></td>
</tr>
<tr class="even">
<td align="left"><p>IMAPPASSWORD</p></td>
<td align="left"><p>the imap user's password</p></td>
<td align="left"><p>IMAPPASSWORD</p></td>
<td align="left"><p>bar</p></td>
</tr>
</tbody>
</table>

## Monitor your IMAP Server with SSL or TLS
### What you need to configure
On your Host or Host template, please set the following macro :

<table>
<colgroup>
<col width="58%" />
<col width="41%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Macro</th>
<th align="left">Value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>IMAPEXTRAOPTIONS</p></td>
<td align="left"><p>--ssl</p></td>
</tr>
</tbody>
</table>

