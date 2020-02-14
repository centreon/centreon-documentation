---
id: hardware-servers-hp-oneview-restapi
title: HP OneView Rest API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Oct  7 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Servers-Hp-Oneview-Restapi
```

## Centreon Configuration

### Create a new HP OneView server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                               |
| :----------------------------------- | :---------------------------------- |
| Host name                            | *Name of the host*                  |
| Alias                                | *Host description*                  |
| IP                                   | *Host IP Address*                   |
| Monitored from                       | *Monitoring Poller to use*          |
| Host Multiple Templates              | HW-Server-Hp-Oneview-Restapi-custom |

Click on the *Save* button.

