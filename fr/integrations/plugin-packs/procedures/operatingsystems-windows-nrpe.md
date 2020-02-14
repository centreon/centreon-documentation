---
id: operatingsystems-windows-nrpe
title: Windows NRPE
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.5 | `STABLE` | Jul 10 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-nrpe-plugin
```

### Nsclient++

This plugin pack requires the use of:

  - NSClient++ package provided by Centreon, installed and configured on your target server as described on
    [documentation](http://documentation.centreon.com)

You can download it
[here](https://download.centreon.com/?action=product&product=agent-nsclient&version=0.43&secKey=9b52cc5a0b36add5c63d87d145be1fbc)

Note: If you use the NSClient++ installer provided by Centreon, the plugin is already included in centreon\_plugins.exe
configured in NSClient++

If you have some problems with the centreon\_plugins.exe, you can build it using [following
procedure](https://documentation.centreon.com/docs/centreon-nsclient/en/latest/windows_agent.html#build-your-own-executable)

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | OS-Windows-NRPE-custom     |
| *Relations \> Parent Hostgroups* tab |                            |

Click on the *Save* button.


