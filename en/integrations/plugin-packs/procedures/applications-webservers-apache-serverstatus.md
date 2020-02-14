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

``` shell
yum install centreon-plugin-Applications-Webservers-Apache-Serverstatus
```

## mod\_status and extendedstatus

Warning: The following procedure is an example. Cannot be applied on all context.

The module *mod\_status* allows the generation of a live Apache report, available on a dedicated web page. This report
is used to generate statistics in Centreon. To activate this module, you have to open your httpd configuration file:

    $ vi /etc/httpd/conf/httpd.conf

and check that:

  - The module is loaded by Apache:
    
    ``` 
      LoadModule status_module modules/mod_status.so
    ```

  - If not already configured, add the followings lines:

<!-- end list -->

``` 
        <Location /server-status>
            SetHandler server-status 
            Order Deny,Allow
            Allow from <centreon-poller_@IP>
            Deny from All
        </Location>
```

  - And finally, check that `ExtendedStatus` is activated (Mandatory if you wants precise statistics on query processed
    by the WebServer):
    
    ``` 
      ExtendedStatus On
    ```

Apache must be reloaded to take this modification into account:

    $ /etc/init.d/httpd reload

## Centreon configuration

### Create an Apache server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                                      |
| :---------------------- | :----------------------------------------- |
| Host name               | *Name of the host*                         |
| Alias                   | *Host description*                         |
| IP                      | *Host IP Address*                          |
| Monitored from          | *Monitoring Polle to use*                  |
| Host Multiple Templates | *App-Webserver-Apache-ServerStatus-custom* |

Click the *Save* button.


