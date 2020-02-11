---
id: pp/base-generic
title: Base Pack
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.2.2 | `STABLE` | Oct 15 2019 |

## Prerequisites

There is no prerequisites needed for this Plugin Pack.

This Plugin Pack gives you all basic templates.

You can use it to create your own service templates, active as well as passive, with the following templates:

* generic-active-service 
* generic-passive-service

Same for hosts:

* generic-active-host
* generic-passive-host

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as shown by the following table:

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
<td align="left"><p>generic-host-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

The following service will be created and linked to the host:

<table>
<colgroup>
<col width="27%" />
<col width="72%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Service</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Ping</p></td>
<td align="left"><p>Monitor host response time</p></td>
</tr>
</tbody>
</table>

### Service Macro configuration

The following macros must be configured on services:

<table>
<col width="25%" />
<col width="12%" />
<col width="33%" />
<col width="17%" />
<col width="11%" />
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
<td align="left"><p>Ping</p></td>
<td align="left"><p>PACKETNUMBER</p></td>
<td align="left"><p>Number of packet</p></td>
<td align="left"><p>5</p></td>
<td align="left"><p>5</p></td>
</tr>
<tr class="even">
<td align="left"><p>Ping</p></td>
<td align="left"><p>WARNING</p></td>
<td align="left"><p>Warning threshold</p></td>
<td align="left"><p>200,20%</p></td>
<td align="left"><p>200,20%</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Ping</p></td>
<td align="left"><p>CRITICAL</p></td>
<td align="left"><p>Critical Threshold</p></td>
<td align="left"><p>400,50%</p></td>
<td align="left"><p>400,50%</p></td>
</tr>
</tbody>
</table>

