---
id: applications-protocol-x509
title: X509 Certificat
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins
to run.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Protocol-X509


### Remote server
The remote server must have an X509's certificate.

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
<td align="left"><p>App-Protocol-X509-custom</p></td>
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
<td align="left"><p>X509-Expiration</p></td>
<td align="left"><p>Monitor expiration date of a X509's certificate</p></td>
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
<td align="left"><p>X509-Subject</p></td>
<td align="left"><p>Monitor an element of the subject name of a X509's certificate</p></td>
</tr>
<tr class="even">
<td align="left"><p>X509-Issuer</p></td>
<td align="left"><p>Monitor an element of the issuer name of a X509's certificate</p></td>
</tr>
</tbody>
</table>

### Service Macro Configuration
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
<td align="left"><p>PORT*</p></td>
<td align="left"><p>Port to connect to server</p></td>
<td align="left"><p>443</p></td>
<td align="left"><p>443</p></td>
</tr>
<tr class="even">
<td align="left"><p>WARNING*</p></td>
<td align="left"><p>Warning Thresold (number of days)</p></td>
<td align="left"><p>60:</p></td>
<td align="left"><p>60:</p></td>
</tr>
<tr class="odd">
<td align="left"><p>CRITICAL*</p></td>
<td align="left"><p>Critical Thresold (number of days)</p></td>
<td align="left"><p>30:</p></td>
<td align="left"><p>30:</p></td>
</tr>
<tr class="even">
<td align="left"><p>ISSUERNAME</p></td>
<td align="left"><p>Content of the issuer name</p></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>OBJECTNAME</p></td>
<td align="left"><p>Content of the object name</p></td>
<td align="left"></td>
<td align="left"></td>
</tr>
</tbody>
</table>

