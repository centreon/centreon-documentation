---
id: hardware-servers-huawei-hmm-snmp
title: Huawei HMM
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jan 11 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Servers-Huawei-Hmm-Snmp
```

# Centreon Configuration

## Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                            |
| :---------------------- | :------------------------------- |
| Host name               | *Name of the host*               |
| Alias                   | *Host description*               |
| IP                      | *Host IP Address*                |
| Monitored from          | *Monitoring Poller to use*       |
| Host Multiple Templates | HW-Server-Huawei-Hmm-SNMP-custom |

Only the Chassis service will be deployed. You need to manually add the Blade service for each blade setting the blade
id.

Click on the *Save* button.


