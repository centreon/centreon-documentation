---
id: applications-voip-3cx-restapi
title: 3CX
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jul  8 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Voip-3cx-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                       |
| :----------------------------------- | :-------------------------- |
| Host name                            | *Name of the host*          |
| Alias                                | *Host description*          |
| IP                                   | *Host IP Address*           |
| Monitored from                       | *Monitoring Poller to use*  |
| Host Multiple Templates              | App-VoIP-3cx-Restapi-custom |
| *Relations \> Parent Hostgroups* tab |                             |

Click on the *Save* button.


