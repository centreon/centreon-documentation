---
id: applications-webservers-apache-serverstatus
title: Apache Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.20 | `STABLE` | Feb 23 2017 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Webservers-Apache-Serverstatus

## mod\_status and extendedstatus
Warning: The following procedure is an example. Cannot be applied on all context.

The module *mod\_status* allows the generation of a live Apache report,
available on a dedicated web page. This report is used to generate
statistics in Centreon. To activate this module, you have to open your
httpd configuration file:

    $ vi /etc/httpd/conf/httpd.conf

and check that:

* The module is loaded by Apache:


        LoadModule status_module modules/mod_status.so

* If not already configured, add the followings lines:

```
        <Location /server-status>
            SetHandler server-status 
            Order Deny,Allow
            Allow from <centreon-poller_@IP>
            Deny from All
        </Location>
```

* And finally, check that `ExtendedStatus` is activated (Mandatory if
    you wants precise statistics on query processed by the WebServer):


        ExtendedStatus On

Apache must be reloaded to take this modification into account:

    $ /etc/init.d/httpd reload

## Centreon configuration
### Create an Apache server
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
<td align="left"><p><em>Monitoring Polle to use</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Host Multiple Templates</p></td>
<td align="left"><p><em>App-Webserver-Apache-ServerStatus-custom</em></p></td>
</tr>
</tbody>
</table>

Click the *Save* button.

