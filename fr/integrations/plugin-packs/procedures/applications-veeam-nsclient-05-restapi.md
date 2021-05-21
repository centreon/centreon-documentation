---
id: applications-veeam-nsclient-05-restapi
title: Veeam API
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

### Veeam

This plugin pack requires the use of:

  - the Veeam plugin provided
    [here](https://github.com/centreon/centreon-plugins)
  - Powershell and snap-in Veeam

Note: If you use the NSClient++ installer provided by Centreon, the plugin is
already included in centreon\_plugins.exe configured in NSClient++

You can download it
[here](https://github.com/centreon/centreon-nsclient-build/releases)

If you have some problems with the centreon\_plugins.exe, you can build it using
[following
procedure](https://github.com/centreon/centreon-nsclient-build#centreon-nsclient-build)

Warning: Don't use '\!' character in centreon macro configuration\!\!\!

## Centreon Configuration

### Create a new Netbackup server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                                |
| :----------------------------------- | :----------------------------------- |
| Host name                            | *Name of the host*                   |
| Alias                                | *Host description*                   |
| IP                                   | *Host IP Address*                    |
| Monitored from                       | *Monitoring Poller to use*           |
| Host Multiple Templates              | App-Veeam-NSClient-05-Restapi-custom |

Click on the *Save* button.
