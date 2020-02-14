---
id: applications-quadstor-nrpe
title: Quadstor
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Aug  9 2017 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-nrpe-plugin
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                        |
| :---------------------- | :--------------------------- |
| Host name               | *Name of the host*           |
| Alias                   | *Host description*           |
| IP                      | *Host IP Address*            |
| Monitored from          | *Monitoring Poller to use*   |
| Host Multiple Templates | App-Quadstor-Vtl-NRPE-custom |

Click on the *Save* button.

