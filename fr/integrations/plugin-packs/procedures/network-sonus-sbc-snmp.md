---
id: network-sonus-sbc-snmp
title: Sonus SBC 
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.2 | `STABLE` | Apr 12 2019 |

\#\#Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Sonus-Sbc-Snmp
```

Be sure to have with you the following information:

  - Read-Only SNMP community
  - IP Address of the equipment

## Centreon Configuration

### Create a new Sonus SBC host definition

Go to "Configuration \> Hosts" and click "Add". Then, fill the form as shown by
the following table :

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | Net-Sonus-Sbc-custom       |

Click "Save" button.

