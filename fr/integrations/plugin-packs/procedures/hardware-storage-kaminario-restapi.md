---
id: hardware-storage-kaminario-restapi
title: Kaminario RestAPI
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Mar  8 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Kaminario-Restapi
```

## Centreon Configuration

### Create a new Kaminario host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                               |
| :---------------------- | :---------------------------------- |
| Host name               | *Name of the host*                  |
| Alias                   | *Host description*                  |
| IP                      | *Host IP Address*                   |
| Monitored from          | *Monitoring Poller to use*          |
| Host Multiple Templates | HW-Storage-Kaminario-Restapi-custom |

Click on the *Save* button.


