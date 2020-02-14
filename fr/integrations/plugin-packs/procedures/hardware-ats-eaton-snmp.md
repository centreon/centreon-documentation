---
id: hardware-ats-eaton-snmp
title: Eaton ATS SNMP
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | May 29 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Ats-Eaton-Snmp
```

## SNMP

Connect to your ATS Eaton and configure SNMP.

## Centreon Configuration

### Create a new ATS Eaton host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | HW-ATS-Eaton-SNMP-custom   |

Click on the *Save* button.

