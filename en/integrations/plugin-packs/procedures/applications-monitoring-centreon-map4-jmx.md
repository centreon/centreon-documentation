---
id: applications-monitoring-centreon-map4-jmx
title: Centreon Map4
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.3.2 | `DEPRECATED` | Feb 25 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Monitoring-Centreon-Map4-Jmx
```

Please install jolokia agent on your java application server [Jolikia download page](https://jolokia.org/download.html).
Ask to your admin to deploy it and give you the URL.

## Centreon Configuration

### Create a new Centreon-Central server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                                   |
| :---------------------- | :-------------------------------------- |
| Host name               | *Name of the host*                      |
| Alias                   | *Host description*                      |
| IP                      | *Host IP Address*                       |
| Monitored from          | *Monitoring Poller to use*              |
| Host Multiple Templates | App-Monitoring-Centreon-Map4-JMX-custom |

Click on the *Save* button.


