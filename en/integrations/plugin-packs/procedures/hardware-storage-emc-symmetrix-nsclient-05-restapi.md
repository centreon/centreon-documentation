---
id: hardware-storage-emc-symmetrix-nsclient-05-restapi
title: EMC Symmetrix API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jul  3 2018 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

### Remote host

This plugin pack requires the use of:

  - the EMC Symmetrix plugin provided [here](https://github.com/centreon/centreon-plugins)

Note: If you use the NSClient++ installer provided by Centreon, the plugin is already included in centreon\_plugins.exe
configured in NSClient++

You can download it
[here](https://download.centreon.com/?action=product&product=agent-nsclient&version=0.51&secKey=59d646114079212e03ec09454456a938)

If you have some problems with the centreon\_plugins.exe, you can build it using [following
procedure](https://documentation.centreon.com/docs/centreon-nsclient/en/latest/windows_agent.html#build-your-own-executable)

Warning: Don't use '\!' character in centreon macro configuration\!\!\!

## Centreon Configuration

### Create a new Netbackup server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                                                                                                   |
| :---------------------- | :------------------------------------------------------------------------------------------------------ |
| Host name               | *Name of the host*                                                                                      |
| Alias                   | *Host description*                                                                                      |
| IP                      | *Host IP Address*                                                                                       |
| Monitored from          | *Monitoring Poller to use*                                                                              |
| Host Multiple Templates | HW-Storage-EMC-Symmetrix-Dmx34-NSClient-05-Restapi or HW-Storage-EMC-Symmetrix-Vmax-NSClient-05-Restapi |

Click on the *Save* button.

