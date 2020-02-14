---
id: virtualization-vmware2-esx-wsman
title: VMware ESX WS-MAN
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.0 | `STABLE` | Feb  6 2019 |

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Virtualization-Vmware2-Esx-Wsman
```

## Description

With the following plugin-pack, you can monitor the hardware of a standalone
ESXi. It used the wsman protocol (not the vmware API).

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                         |
| :----------------------------------- | :---------------------------- |
| Host name                            | *Name of the host*            |
| Alias                                | *Host description*            |
| IP                                   | *Host IP Address*             |
| Monitored from                       | *Monitoring Poller to use*    |
| Host Multiple Templates              | Virt-VMWare2-ESX-WSMAN-custom |

Click on the *Save* button.

