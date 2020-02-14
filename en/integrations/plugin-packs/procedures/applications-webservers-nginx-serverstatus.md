---
id: applications-webservers-nginx-serverstatus
title: Nginx Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Webservers-Nginx-Serverstatus
```

## HttpStubStatusModule

Warning: The following procedure is an example. Cannot be applied on all
context.

The module allows the generation of a live Nginx report, available on a
dedicated web page. This report is used to generate statistics in Centreon. To
activate this module, you have to open your nginx configuration file:

    $ vi /etc/nginx/nginx.conf

and check that if not already configured, add the followings lines in 'server'
bracket:

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

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                     |
| :---------------------- | :---------------------------------------- |
| Host name               | *Name of the host*                        |
| Alias                   | *Host description*                        |
| IP                      | *Host IP Address*                         |
| Monitored from          | *Monitoring Poller to use*                |
| Host Multiple Templates | *App-Webserver-Nginx-ServerStatus-custom* |

Click the *Save* button.

