---
id: hardware-storage-emc-symmetrix-nrpe
title: EMC Symmetrix NRPE
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-nrpe-plugin
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                                                     |
| :---------------------- | :------------------------------------------------------------------------ |
| Host name               | *Name of the host*                                                        |
| Alias                   | *Host description*                                                        |
| IP                      | *Host IP Address*                                                         |
| Monitored from          | *Monitoring Poller to use*                                                |
| Host Multiple Templates | HW-Storage-EMC-Symmetrix-Dmx34-NRPE or HW-Storage-EMC-Symmetrix-Vmax-NRPE |

Click on the *Save* button.
