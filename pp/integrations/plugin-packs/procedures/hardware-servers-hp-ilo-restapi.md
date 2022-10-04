---
id: hardware-servers-hp-ilo-restapi
title: HP Ilo Rest API
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Servers-Hp-Ilo-Restapi
```

## Rest API

A reading account is needed on HP ILO card.

## Centreon Configuration

### Create a new Host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                           |
| :---------------------- | :------------------------------ |
| Host name               | *Name of the host*              |
| Alias                   | *Host description*              |
| IP                      | *Host IP Address*               |
| Monitored from          | *Monitoring Poller to use*      |
| Host Multiple Templates | HW-Server-Hp-Ilo-Restapi-custom |

Click on the *Save* button.
