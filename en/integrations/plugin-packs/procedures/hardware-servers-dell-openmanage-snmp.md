---
id: hardware-servers-dell-openmanage-snmp
title: Dell OpenManage
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.10 | `STABLE` | Jul 10 2017 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Servers-Dell-Openmanage-Snmp
```

### SNMP

It's necessary to enable SNMP on Dell server

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                                 |
| :----------------------------------- | :------------------------------------ |
| Host name                            | *Name of the host*                    |
| Alias                                | *Host description*                    |
| IP                                   | *Host IP Address*                     |
| Monitored from                       | *Monitoring Poller to use*            |
| Host Multiple Templates              | HW-Server-Dell-Openmanage-SNMP-custom |

Click on the *Save* button.

Those services were automatically created for this host:

| Service | Description                    |
| :------ | :----------------------------- |
| Ping    | Monitor host response time     |
| Global  | Monitor Global hardware status |

