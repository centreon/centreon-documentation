---
id: hardware-storage-emc-vplex-restapi
title: EMC Vplex
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.11 | `STABLE` | Feb  6 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Emc-Vplex-Restapi
```

### Rest API

The plugin need an account to connect on Rest API.

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                               |
| :----------------------------------- | :---------------------------------- |
| Host name                            | *Name of the host*                  |
| Alias                                | *Host description*                  |
| IP                                   | *Host IP Address*                   |
| Monitored from                       | *Monitoring Poller to use*          |
| Host Multiple Templates              | HW-Storage-EMC-Vplex-Restapi-custom |

Click on the *Save* button.

