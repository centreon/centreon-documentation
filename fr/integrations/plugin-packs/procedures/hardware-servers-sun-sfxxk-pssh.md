---
id: hardware-servers-sun-sfxxk-pssh
title: Sun SFxxK
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.7 | `STABLE` | Feb  6 2017 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Servers-Sun-Sfxxk-Pssh
```

The plugin for the following template has 2 modes:

  - SSH with 'plink' command:
      - no ssh key exchange needed
      - Host macro example: 'SSHEXTRAOPTIONS' = --ssh-command='plink'
        --ssh-option='-l=\[user\]' --ssh-option='-pw=\[pass\]'
        --ssh-option='-batch'
  - SSH with 'ssh' command:
      - ssh key exchange needed
      - Host macros: 'SSHEXTRAOPTIONS' = --ssh-command='plink'
        --ssh-option='-l=\[user\]' --ssh-option='-pw=\[pass\]'
        --ssh-option='-batch'

### User permissions

The user on the system controller needs permissions to execute following
commands:

  - showfailover
  - showenvironment
  - showboards

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                           |
| :----------------------------------- | :------------------------------ |
| Host name                            | *Name of the host*              |
| Alias                                | *Host description*              |
| IP                                   | *Host IP Address*               |
| Monitored from                       | *Monitoring Poller to use*      |
| Host Multiple Templates              | HW-Server-Sun-Sfxxk-PSSH-custom |

Click on the *Save* button.

