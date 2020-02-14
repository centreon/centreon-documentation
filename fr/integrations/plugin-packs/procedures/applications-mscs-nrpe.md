---
id: applications-mscs-nrpe
title: Microsoft Cluster Se
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Mar  1 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-nrpe-plugin
```

### Nsclient++

This plugin pack requires the use of:

  - the Microsoft Cluster Server plugin provided [here](https://forge.centreon.com/projects/centreon-plugins/repository)
  - NSClient++ package provided by Centreon, installed and configured on your target server as described on
    <http://documentation.centreon.com>

You can download it
[here](https://download.centreon.com/?action=product&product=agent-nsclient&version=0.51&secKey=59d646114079212e03ec09454456a938)

Note: If you use the NSClient++ installer provided by Centreon, the plugin is already included in centreon\_plugins.exe
configured in NSClient++

If you have some problems with the centreon\_plugins.exe, you can build it using [following
procedure](https://documentation.centreon.com/docs/centreon-nsclient/en/latest/windows_agent.html#build-your-own-executable)

Warning: Don't use '\!' character in centreon macro configuration\!\!\!

\#\#Centreon Configuration

### Create a new Exchange server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-Mscs-NRPE-custom       |

Click on the *Save* button.

By default, the host template checks nothing. Go to plugin-pack manager to see services available.

