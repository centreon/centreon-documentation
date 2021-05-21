---
id: applications-mscs-nrpe
title: Microsoft Cluster Se
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-nrpe-plugin
```

### Nsclient++

This plugin pack requires the use of:

  - the Microsoft Cluster Server plugin provided
    [here](https://github.com/centreon/centreon-nsclient-build/releases)
  - NSClient++ package provided by Centreon, installed and configured on your
    target server as described on <http://documentation.centreon.com>

You can download it
[here](https://github.com/centreon/centreon-nsclient-build/releases)

Note: If you use the NSClient++ installer provided by Centreon, the plugin is
already included in centreon\_plugins.exe configured in NSClient++

If you have some problems with the centreon\_plugins.exe, you can build it using
[following
procedure](https://github.com/centreon/centreon-nsclient-build#centreon-nsclient-build)

Warning: Don't use '\!' character in centreon macro configuration\!\!\!

\#\#Centreon Configuration

### Create a new Exchange server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-Mscs-NRPE-custom       |

Click on the *Save* button.

By default, the host template checks nothing. Go to plugin-pack manager to see
services available.
