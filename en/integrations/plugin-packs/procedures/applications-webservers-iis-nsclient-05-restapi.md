---
id: applications-webservers-iis-nsclient-05-restapi
title: Microsoft IIS Server NSClient API (Deprecated)
---

## Deprecated

This Plugin-Pack has been deprecated and replaced by `Microsoft IIS Server Restapi`. Check [this procedure](applications-webservers-iis-restapi.html)

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

### Nsclient++

This Plugin Pack works with the Centreon flavor of NSClient++ monitoring agent available [here](https://github.com/centreon/centreon-nsclient-build/releases)

## Centreon Configuration

### Create a new IIS server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                               |
| :----------------------------------- | :---------------------------------- |
| Host name                            | *Name of the host*                  |
| Alias                                | *Host description*                  |
| IP                                   | *Host IP Address*                   |
| Monitored from                       | *Monitoring Poller to use*          |
| Host Multiple Templates              | Apps-IIS-NSClient-05-Restapi-custom |

Click on the *Save* button.

By default, the host template checks IIS services. Go to plugin-pack manager to
see other services available.
