---
id: applications-protocol-telnet
title: Telnet Scenario
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.3 | `STABLE` | Feb  6 2017 |

\#\#Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Protocol-Telnet
```

### Remote server

The remote server must have a Telnet service running and available. You need to create a JSON scenario file. An example:

    [
        {"cmd": "open", "options": { "Host": "10.0.0.1", "Port": "23", "Timeout": "30" } },
        {"cmd": "login", "options": { "Name": "admin", "Password": "pass", "Timeout": "5" } },
        {"cmd": "waitfor", "options": { "Match": "/string/", "Timeout": "5" } },
        {"cmd": "put", "options": { "String": "/mystring/", "Timeout": "5" } },
        {"cmd": "close" }
    ]

## Centreon Configuration

### Create a new Telnet Scenario server

Go to "Configuration \> Hosts" and click "Add". Then, fill the form as shown by the following table :

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-Protocol-Telnet-custom |

Click "Save" button.

