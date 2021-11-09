---
id: hardware-storage-hp-eva-cli
title: HP EVA
---

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Hp-Eva-Smcli
```

The plugin need the installation of SSSU command.

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | HW-Storage-Hp-Eva-Cli      |

Click on the *Save* button.
