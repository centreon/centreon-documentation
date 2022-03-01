---
id: applications-protocol-modbus
title: Modbus
---

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Protocol-Modbus
```

### Remote server

The remote server must have a Modbus service running and available.

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
| Host Multiple Templates              | App-Protocol-Modbus-custom |

Click on the *Save* button.

After that, you can add service linked with template
*App-Protocol-Modbus-Numeric-Value-Generic*. To fill the macro *CONFIG*, read
[Modbus
config](https://github.com/centreon/centreon-plugins/blob/master/docs/en/user/guide.rst#modbus-protocol)
