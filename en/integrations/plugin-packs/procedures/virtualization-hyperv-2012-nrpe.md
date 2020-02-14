---
id: virtualization-hyperv-2012-nrpe
title: Hyper-V 2012
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.2 | `STABLE` | Mar 27 2018 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

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
[here](https://download.centreon.com/?action=product&product=agent-nsclient&version=0.51&secKey=59d646114079212e03ec09454456a938)

Note: If you use the NSClient++ installer provided by Centreon, the plugin is already included in centreon\_plugins.exe
configured in NSClient++

If you have some problems with the centreon\_plugins.exe, you can build it using [following
procedure](https://documentation.centreon.com/docs/centreon-nsclient/en/latest/windows_agent.html#build-your-own-executable)

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                                                                           |
| :---------------------- | :------------------------------------------------------------------------------ |
| Host name               | *Name of the host*                                                              |
| Alias                   | *Host description*                                                              |
| IP                      | *Host IP Address*                                                               |
| Monitored from          | *Monitoring Poller to use*                                                      |
| Host Multiple Templates | \*Virt-Hyperv-2012-Node-NRPE-custom\* or \*Virt-Hyperv-2012-Scvmm-NRPE-custom\* |

Click on the *Save* button.

