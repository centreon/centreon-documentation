---
id: applications-bind9-web
title: Bind9 Web
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jul  5 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Bind9-Web
```

You need a read access to the Bind9 statistics-channels

## Centreon Configuration

### Create a new host

Go to "Configuration \> Hosts" and click "Add". Then, fill the form as shown by the following table :

| Field                                   | Value                      |
| :-------------------------------------- | :------------------------- |
| Host name                               | *Name of the host*         |
| Alias                                   | *Host description*         |
| IP                                      | *Host IP Address*          |
| Monitored from                          | *Monitoring Poller to use* |
| Host Multiple Templates                 | App-Bind9-Web-custom       |

Click "Save" button.

