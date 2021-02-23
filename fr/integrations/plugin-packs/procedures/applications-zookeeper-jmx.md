---
id: applications-zookeeper-jmx
title: Zookeeper
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Zookeeper-Jmx
```

Please install jolokia agent on your java application server [Jolikia download
page](https://jolokia.org/download.html). Ask to your admin to deploy it and
give you the URL.

# Centreon Configuration

## Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | App-Zookeeper-JMX-custom   |

Click on the *Save* button.
