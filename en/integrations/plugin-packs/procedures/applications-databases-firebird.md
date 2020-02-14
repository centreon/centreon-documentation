---
id: applications-databases-firebird
title: Firebird
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Aug  7 2017 |

\#\#Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Databases-Firebird
```

### Dependencies

Please install perl module DBD::Firebird: <https://metacpan.org/release/DBD-Firebird> Follow the readme, because you
need to install the Firebird C library also.

## Centreon Configuration

### Create a new Firebird database server

Go to "Configuration \> Hosts" and click "Add". Then, fill the form as shown by the following table :

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-DB-Firebird-custom     |

Click "Save" button.


