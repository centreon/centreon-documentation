---
id: applications-pacemaker-ssh
title: Pacemaker
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Sep 21 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Pacemaker-Ssh
```

### SSH

SSH key exchange mut be done between poller and monitored server.

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-Pacemaker-SSH-custom   |

Click on the *Save* button.

### Create a new service

Pick the service you want to deploy. Choose CRM and/or Constraints service template if you use CRM shell for cluster
administration. Use Clustat if you have a Redhat clustat cluster.

