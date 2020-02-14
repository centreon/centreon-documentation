---
id: operatingsystems-as400
title: IBM AS400
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 2.0.7 | `STABLE` | Feb  6 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Operatingsystems-As400
```

You have to install java-jdk at least in version 1.7.0 on the poller the jmx connector will be install :

    $ yum install java-1.7.0-openjdk

The connector can be install on your poller or on an other server

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | OS-AS400-custom            |

Click on the *Save* button.

Those services were automatically created for this host:

| Service                | Description                                          |
| :--------------------- | :--------------------------------------------------- |
| Ping                   | Monitor host response time                           |
| Asp1-Usage             | Monitor the ASP1 rate                                |
| CPU-Usage              | Monitor the AS400 cpu time used (in percent)         |
| Disk-State             | Monitor the state of all physical disks              |
| Disk-Usage-Repartition | Compare utilization rate of different physical disks |
| Page-Fault             | Monitor the page fault rate                          |

## Host macro configuration

The following macros must be configured on host:

| Macro           | Description                | Default value | Example   |
| :-------------- | :------------------------- | :------------ | :-------- |
| DAEMONAS400HOST | The hostname or ip address | localhost     | localhost |
| DAEMONAS400PORT | The connection port used   | 8091          | 8091      |
| AS400USER       | AS400 login                | DEFAULT       | usr1      |
| AS400PASSWORD   | AS400 password             | DEFAULT       | x5jGyR    |

