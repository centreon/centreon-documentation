---
id: pp/operatingsystems-as400
title: IBM AS400
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 2.0.7 | `STABLE` | Feb  6 2017 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Operatingsystems-As400

You have to install java-jdk at least in version 1.7.0 on the poller the
jmx connector will be install :

    $ yum install java-1.7.0-openjdk

The connector can be install on your poller or on an other server

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
<td align="left"><p>OS-AS400-custom</p></td>
</tr>
<tr class="even">
<td align="left"><p><em>Relations &gt; Parent Hostgroups</em> tab</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

Those services were automatically created for this host:

<table>
<colgroup>
<col width="23%" />
<col width="76%" />
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
<tr class="even">
<td align="left"><p>Asp1-Usage</p></td>
<td align="left"><p>Monitor the ASP1 rate</p></td>
</tr>
<tr class="odd">
<td align="left"><p>CPU-Usage</p></td>
<td align="left"><p>Monitor the AS400 cpu time used (in percent)</p></td>
</tr>
<tr class="even">
<td align="left"><p>Disk-State</p></td>
<td align="left"><p>Monitor the state of all physical disks</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Disk-Usage-Repartition</p></td>
<td align="left"><p>Compare utilization rate of different physical disks</p></td>
</tr>
<tr class="even">
<td align="left"><p>Page-Fault</p></td>
<td align="left"><p>Monitor the page fault rate</p></td>
</tr>
</tbody>
</table>

Host macro configuration
------------------------

The following macros must be configured on host:

<table>
<colgroup>
<col width="24%" />
<col width="38%" />
<col width="21%" />
<col width="16%" />
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
<td align="left"><p>DAEMONAS400HOST</p></td>
<td align="left"><p>The hostname or ip address</p></td>
<td align="left"><p>localhost</p></td>
<td align="left"><p>localhost</p></td>
</tr>
<tr class="even">
<td align="left"><p>DAEMONAS400PORT</p></td>
<td align="left"><p>The connection port used</p></td>
<td align="left"><p>8091</p></td>
<td align="left"><p>8091</p></td>
</tr>
<tr class="odd">
<td align="left"><p>AS400USER</p></td>
<td align="left"><p>AS400 login</p></td>
<td align="left"><p>DEFAULT</p></td>
<td align="left"><p>usr1</p></td>
</tr>
<tr class="even">
<td align="left"><p>AS400PASSWORD</p></td>
<td align="left"><p>AS400 password</p></td>
<td align="left"><p>DEFAULT</p></td>
<td align="left"><p>x5jGyR</p></td>
</tr>
</tbody>
</table>

