---
id: applications-webservers-tomcat-webmanager
title: Tomcat Webmanager
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.0 | `STABLE` | Jul  5 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Webservers-Tomcat-Webmanager

## Install Tomcat
Warning: The following procedure is an example. Cannot be applied on all context.

This chapter describes the prerequisites installation needed by plugins
to run. Prerequistes concerns a RHEL6 like distribution.

Install tomcat:

    yum install tomcat6 tomcat6-webapps tomcat6-admin-webapps

Tomcat must be restarted:

    service tomcat6 restart

### Permissions
You need to configure an account with the manage role.

Add in */usr/share/tomcat6/conf/tomcat-users.xml* file:

    <user name="tomcat" password="tomcatpass" roles="manager" />
    </tomcat-users>

Tomcat must be restarted:

    service tomcat6 restart

## Centreon configuration
### Create an Tomcat server
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="44%" />
<col width="55%" />
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
<td align="left"><p><em>App-Webserver-Tomcat6|7-Webmanager</em></p></td>
</tr>
</tbody>
</table>

Click the *Save* button.

