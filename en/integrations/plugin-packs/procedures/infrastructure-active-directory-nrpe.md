---
id: infrastructure-active-directory-nrpe
title: MS Active Directory
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-nrpe-plugin
```

### Nsclient++

This plugin pack requires the use of:

  - NSClient++ package provided by Centreon, installed and configured on your
    target server as described on
    [documentation](http://documentation.centreon.com)

You can download it
[here](https://github.com/centreon/centreon-nsclient-build/releases)

Note: If you use the NSClient++ installer provided by Centreon, the plugin is
already included in centreon\_plugins.exe configured in NSClient++

If you have some problems with the centreon\_plugins.exe, you can build it using
[following
procedure](https://github.com/centreon/centreon-nsclient-build#centreon-nsclient-build)

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                             |
| :----------------------------------- | :-------------------------------- |
| Host name                            | *Name of the host*                |
| Alias                                | *Host description*                |
| IP                                   | *Host IP Address*                 |
| Monitored from                       | *Monitoring Poller to use*        |
| Host Multiple Templates              | Infra-ActiveDirectory-NRPE-custom |

Click on the *Save* button.
