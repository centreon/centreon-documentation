---
id: applications-backup-emc-recoverypoint-ssh
title: EMC RecoveryPoint
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.10 | `STABLE` | Feb  6 2017 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Backup-Emc-Recoverypoint-Ssh
```

Be sure to have with you the following information:

  - IP Address of the monitored server

SSH daemon must be enable on RecoveryPoint Appliance.

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                                   |
| :----------------------------------- | :-------------------------------------- |
| Host name                            | *Name of the host*                      |
| Alias                                | *Host description*                      |
| IP                                   | *Host IP Address*                       |
| Monitored from                       | *Monitoring Poller to use*              |
| Host Multiple Templates              | App-Backup-EMC-RecoveryPoint-SSH-custom |

Click on the *Save* button.

