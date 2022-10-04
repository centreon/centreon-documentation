---
id: applications-ibm-tsm-dsmadmc
title: IBM Tivoli Storage M
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-IBM-Tsm
```

### IBM TSM client

The plugin need the installation of IBM TSM client.

The plugin uses by default the path '/opt/tivoli/tsm/client/ba/bin'.

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                                |
| :----------------------------------- | :----------------------------------- |
| Host name                            | *Name of the host*                   |
| Alias                                | *Host description*                   |
| IP                                   | *Host IP Address*                    |
| Monitored from                       | *Monitoring Poller to use*           |
| Host Multiple Templates              | Template provided by the plugin-pack |

Click on the *Save* button.
