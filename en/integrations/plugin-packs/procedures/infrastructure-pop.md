---
id: infrastructure-pop
title: POP Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins
to run.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install nagios-plugins-tcp


### Remote server
The remote server must have a POP service running and available.

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
<td align="left"><p>Infra-POP-custom</p></td>
</tr>
<tr class="even">
<td align="left"><p>Onglet <em>Relations</em> &gt; Parent Hostgroups</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

Those services were automatically created for this host:

<table>
<colgroup>
<col width="13%" />
<col width="40%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Service</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>ping</p></td>
<td align="left"><p>Monitor host response time</p></td>
</tr>
<tr class="even">
<td align="left"><p>POP</p></td>
<td align="left"><p>Check POP connection time</p></td>
</tr>
</tbody>
</table>

### Host Macro Configuration
No macro is defined for this template.

### Service Macro configuration
The following macros must be configured on services:

<table>
<colgroup>
<col width="10%" />
<col width="11%" />
<col width="50%" />
<col width="17%" />
<col width="10%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Service</th>
<th align="left">Macro</th>
<th align="left">Description</th>
<th align="left">Default Value</th>
<th align="left">Example</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>POP</p></td>
<td align="left"><p>WARNING</p></td>
<td align="left"><p>Connection time Warning threshold in Seconds</p></td>
<td align="left"><p>5</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>POP</p></td>
<td align="left"><p>CRITICAL</p></td>
<td align="left"><p>Connection time Critical threshold in Seconds</p></td>
<td align="left"><p>8</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>POP</p></td>
<td align="left"><p>PORT</p></td>
<td align="left"><p>Communication Port</p></td>
<td align="left"><p>110</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

