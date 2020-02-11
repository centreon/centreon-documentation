---
id: pp/applications-jenkins
title: Jenkins
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.7 | `STABLE` | Feb  6 2017 |

## Prerequisites
### Centreon Plugins
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Jenkins

## Create a host using the appropriate template
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
<td align="left"><p>App-Jenkins-custom</p></td>
</tr>
<tr class="even">
<td align="left"><p>Onglet <em>Relations</em> &gt; Parent Hostgroups</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

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
<td align="left"><p>job-state</p></td>
<td align="left"><p>Monitor job status</p></td>
</tr>
</tbody>
</table>

## Host Macro Configuration
The following macros must be configured on host (* means mandatory
options):

<table>
<colgroup>
<col width="24%" />
<col width="44%" />
<col width="17%" />
<col width="12%" />
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
<td align="left"><p>JENKINSPROTO*</p></td>
<td align="left"><p>Protocol to connect to web interface</p></td>
<td align="left"><p>http</p></td>
<td align="left"><p>http</p></td>
</tr>
<tr class="even">
<td align="left"><p>JENKINSPORT*</p></td>
<td align="left"><p>Port to connect to web interface</p></td>
<td align="left"><p>80</p></td>
<td align="left"><p>80</p></td>
</tr>
<tr class="odd">
<td align="left"><p>JENKINSEXTRAOPTIONS</p></td>
<td align="left"><p>Extra options to connect to web interface</p></td>
<td align="left"></td>
<td align="left"></td>
</tr>
</tbody>
</table>

## Service Macro Configuration
The following macros must be configured on service (* means mandatory
options):

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
<td align="left"><p>URLPATH*</p></td>
<td align="left"><p>Path to connect to web inteface</p></td>
<td align="left"><p>/jenkins</p></td>
<td align="left"><p>/jenkins</p></td>
</tr>
<tr class="even">
<td align="left"><p>JOBNAME*</p></td>
<td align="left"><p>the imap user's password</p></td>
<td align="left"><p>IMAPPASSWORD</p></td>
<td align="left"><p>bar</p></td>
</tr>
<tr class="odd">
<td align="left"><p>WARNING</p></td>
<td align="left"><p>Warning Thresold</p></td>
<td align="left"><p>60:</p></td>
<td align="left"><p>60:</p></td>
</tr>
<tr class="even">
<td align="left"><p>CRITICAL</p></td>
<td align="left"><p>Critical Thresold</p></td>
<td align="left"><p>30:</p></td>
<td align="left"><p>30:</p></td>
</tr>
</tbody>
</table>

