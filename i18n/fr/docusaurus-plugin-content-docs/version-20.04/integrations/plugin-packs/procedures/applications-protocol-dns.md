---
id: applications-protocol-dns
title: DNS Service
---

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

```shell
yum install centreon-plugin-Applications-Protocol-Dns
```

### Remote server

The remote server must have a DNS service running and available.

## Centreon Configuration

### Create a host using the appropriate template

Go to _Configuration \> Hosts_ and click _Add_. Then, fill the form as shown by
the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | _Name of the host_         |
| Alias                   | _Host description_         |
| IP                      | _Host IP Address_          |
| Monitored from          | _Monitoring Poller to use_ |
| Host Multiple Templates | App-Protocol-DNS-custom    |

Click on the _Save_ button.
