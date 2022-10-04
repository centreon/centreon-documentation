---
id: hardware-storage-emc-clariion-navisphere
title: EMC Clariion
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Emc-Clariion-Navisphere
```

### Navisphere client

The plugin need the installation of Navisphere client (ask to your EMC Support).

The plugin uses by default the path '/opt/Navisphere/bin'.

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
