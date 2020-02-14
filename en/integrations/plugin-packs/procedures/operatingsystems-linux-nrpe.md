---
id: operatingsystems-linux-nrpe
title: Linux NRPE
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.2 | `STABLE` | Jan 18 2019 |

## Prerequisites

This chapter describes the installation prerequisites required by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-nrpe-plugin
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | OS-Linux-NRPE-custom       |

Click on the *Save* button.


