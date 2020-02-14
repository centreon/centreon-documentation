---
id: applications-protocol-jmx
title: JMX value
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Protocol-Jmx
```

Please install jolokia agent on your java application server [Jolikia download
page](https://jolokia.org/download.html). Ask to your admin to deploy it and
give you the URL.

## Centreon Configuration

### Create a service using the appropriate template

Go to *Configuration \> Services* and click *Add*. Then, fill the form as shown
by the following table:

| Field            | Value                                                |
| :--------------- | :--------------------------------------------------- |
| Service name     | *Choose a name*                                      |
| Service Template | App-Protocol-Jmx-Numeric-Value-Generic-Custom-custom |
| Macros           | JOLOKIAURL, MBEANPATTERN, ATTRIBUTE, PATH            |

Click on the *Save* button.

