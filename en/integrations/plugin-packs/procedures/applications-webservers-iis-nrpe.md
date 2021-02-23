---
id: applications-webservers-iis-nrpe
title: Microsoft IIS Server NRPE (Deprecated)
---

## Deprecated

This Plugin-Pack has been deprecated and replaced by `Microsoft IIS Server Restapi`. Check [this procedure](applications-webservers-iis-restapi.html)

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-nrpe-plugin
```

### Nsclient++

This plugin pack requires the use of:

  - the IIS plugin provided
    [here](https://forge.centreon.com/projects/centreon-plugins/repository)
  - NSClient++ package provided by Merethis, installed and configured on your
    target server as described on
    [documentation](http://documentation.centreon.com)

Note: Web Management Tools have to be installed on the IIS Server

Note: If you use the NSClient++ installer provided by Centreon, the plugin is
already included in centreon\_plugins.exe configured in NSClient++

You can download it
[here](https://download.centreon.com/?action=product&product=agent-nsclient&version=0.51&secKey=59d646114079212e03ec09454456a938)

If you have some problems with the centreon\_plugins.exe, you can build it using
[following
procedure](https://documentation.centreon.com/docs/centreon-nsclient/en/latest/windows_agent.html#build-your-own-executable)

## Centreon Configuration

### Create a new IIS server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | Apps-IIS-NRPE              |

Click on the *Save* button.

By default, the host template checks IIS services. Go to plugin-pack manager to
see other services available.
