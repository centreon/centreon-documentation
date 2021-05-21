---
id: applications-exchange-2010-nrpe
title: MS Exchange 2K10
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-nrpe-plugin
```

### Nsclient++

This plugin pack requires the use of:

  - the Exchange 2010 plugin provided
    [here](https://github.com/centreon/centreon-nsclient-build/releases)
  - The Centreon flavor of NSClient++ monitoring agent available [here](https://github.com/centreon/centreon-nsclient-build/releases)

You can download it
[here](https://github.com/centreon/centreon-nsclient-build/releases)

Note: Powershell and `Microsoft.Exchange.Management.PowerShell.E2010` snap-in
have to be installed on Exchange Server

Note: If you use the NSClient++ installer provided by Centreon, the plugin is
already included in centreon\_plugins.exe configured in NSClient++

If you have some problems with the centreon\_plugins.exe, you can build it using
[following
procedure](https://github.com/centreon/centreon-nsclient-build#centreon-nsclient-build)

Note: You can use options `--remote-host`, `--remote-user` and
`--remote-password` to execute services from another Windows Server (the Windows
still need powershell and the snap-in)

Warning: Set service macro `MAILBOX` with the following syntax:

    DOMAIN\username

Warning: Don't use '\!' character in centreon macro configuration\!\!\!

Warning: Service `Queues` works on exchange server with the good role.

\#\#Centreon Configuration

### Create a new Exchange server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                         |
| :----------------------------------- | :---------------------------- |
| Host name                            | *Name of the host*            |
| Alias                                | *Host description*            |
| IP                                   | *Host IP Address*             |
| Monitored from                       | *Monitoring Poller to use*    |
| Host Multiple Templates              | App-Exchange-2010-NRPE-custom |

Click on the *Save* button.

By default, the host template checks nothing. Go to plugin-pack manager to see
services available.
