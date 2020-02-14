---
id: applications-protocol-ldap
title: LDAP Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.0 | `STABLE` | Oct 29 2018 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Protocol-Ldap
```

### Remote server

The remote server must have an LDAP service running and available. A user and password dedicated to monitoring is needed
for security reasons.

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-Protocol-LDAP-custom   |

Click on the *Save* button.


