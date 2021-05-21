---
id: infrastructure-active-directory-nsclient-05-restapi
title: Active Directory API
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

### Nsclient++

This Plugin Pack works with the Centreon flavor of NSClient++ monitoring agent available [here](https://github.com/centreon/centreon-nsclient-build/releases)

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                                            |
| :----------------------------------- | :----------------------------------------------- |
| Host name                            | *Name of the host*                               |
| Alias                                | *Host description*                               |
| IP                                   | *Host IP Address*                                |
| Monitored from                       | *Monitoring Poller to use*                       |
| Host Multiple Templates              | Infra-ActiveDirectory-NSClient-05-Restapi-custom |

Click on the *Save* button.
