---
id: applications-netbackup-nrpe
title: Symantec Netbackup
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-nrpe-plugin
```

### NetBackup cli

This plugin pack requires the use of:

  - the Netbackup plugin provided
    [here](https://github.com/centreon/centreon-plugins)
  - the Netbackup cli (Linux or Windows)

Note: If you use the NSClient++ installer provided by Centreon, the plugin is
already included in centreon\_plugins.exe configured in NSClient++

You can download it
[here](https://github.com/centreon/centreon-nsclient-build/releases)

If you have some problems with the centreon\_plugins.exe, you can build it using
[following
procedure](https://github.com/centreon/centreon-nsclient-build#centreon-nsclient-build)

Warning: If you use Netbackup on Windows, add options `--statefile-concat-cwd
--statefile-dir="scripts/centreon/tmp"` in macro `EXTRAOPTIONS` of service
`App-Netbackup-Job-Status-NRPE-Custom` Powershell and
`Microsoft.Exchange.Management.PowerShell.E2010` snap-in have to be installed on
Exchange Server

Warning: Set service macro `MAILBOX` with the following syntax: DOMAIN\\username

Warning: Don't use '\!' character in centreon macro configuration\!\!\!

## Centreon Configuration

### Create a new Netbackup server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | App-Netbackup-NRPE-custom  |

Click on the *Save* button.
