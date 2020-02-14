---
id: applications-webservers-tomcat-jmx
title: Tomcat JMX
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.2.14 | `STABLE` | Jan 30 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Webservers-Tomcat-Jmx
```

Please install jolokia agent on your java application server [Jolokia download page](https://jolokia.org/download.html).
Ask to your admin to deploy it and give you the URL.

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                           |
| :---------------------- | :------------------------------ |
| Host name               | *Name of the host*              |
| Alias                   | *Host description*              |
| IP                      | *Host IP Address*               |
| Monitored from          | *Monitoring Poller to use*      |
| Host Multiple Templates | App-Webserver-Tomcat-JMX-custom |

Click on the *Save* button.

