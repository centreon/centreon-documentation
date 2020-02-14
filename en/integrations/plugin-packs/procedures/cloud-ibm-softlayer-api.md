---
id: cloud-ibm-softlayer-api
title: IBM Softlayer
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Nov 26 2018 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Ibm-Softlayer-Api
```

To use it, you'll need to have an access to the API (username and key)

### Dependencies

Install perl dependency : \# yum install perl-XML-Simple

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | Cloud-Ibm-Softlayer-Api    |

Click on the *Save* button.

