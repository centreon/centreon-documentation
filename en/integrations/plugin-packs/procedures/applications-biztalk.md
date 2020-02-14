---
id: applications-biztalk
title: MS Biztalk
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Biztalk
```

You need a read access to the MSSQL database :

  - BizTalkMgmtDb.

Please read the monitoring procedure of plugin-pack MSSQL.

## Centreon Configuration

### Create a new Biztalk server

Go to "Configuration \> Hosts" and click "Add". Then, fill the form as shown by
the following table :

| Field                                   | Value                      |
| :-------------------------------------- | :------------------------- |
| Host name                               | *Name of the host*         |
| Alias                                   | *Host description*         |
| IP                                      | *Host IP Address*          |
| Monitored from                          | *Monitoring Poller to use* |
| Host Multiple Templates                 | App-Biztalk-custom         |

Click "Save" button.

