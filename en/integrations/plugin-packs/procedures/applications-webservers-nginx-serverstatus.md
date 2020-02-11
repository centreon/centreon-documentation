---
id: pp-applications-webservers-nginx-serverstatus
title: Nginx Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Webservers-Nginx-Serverstatus

## HttpStubStatusModule
Warning: The following procedure is an example. Cannot be applied on all context.

The module allows the generation of a live Nginx report, available on a
dedicated web page. This report is used to generate statistics in
Centreon. To activate this module, you have to open your nginx
configuration file:

    $ vi /etc/nginx/nginx.conf

and check that if not already configured, add the followings lines in 'server' bracket:

    server { 
        ... 
        location /nginx_status { 
            stub_status on; 
            access_log off;
            allow <centreon-poller_@IP>;
            deny all; 
        }
        ...
    }

Make sure you are allowing pollers to access this URL.

You can check the validity of your configuration using:

    $ nginx -t nginx: the configuration file
    /etc/nginx/nginx.conf syntax is ok nginx: configuration file
    /etc/nginx/nginx.conf test is successful

Nginx must be reloaded to take this modification into account:

    $ /etc/init.d/nginx reload

You can now check the result by accessing the URL

    http://<nginx_address>/nginx_status

## Centreon configuration
### Create an Nginx server
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
<td align="left"><p><em>App-Webserver-Nginx-ServerStatus-custom</em></p></td>
</tr>
</tbody>
</table>

Click the *Save* button.

