---
id: applications-wsus-nsclient
title: Microsoft WSUS
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.3 | `STABLE` | Jun  3 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

NRPE : \# yum install centreon-nrpe-plugin

NSClient++ RestAPI : \# yum install centreon-plugin-Operatingsystems-Windows-Restapi

### Nsclient++

This plugin pack requires the use of the NSClient++ package provided by Centreon.

You can download it
[here](https://download.centreon.com/?action=product&product=agent-nsclient&version=0.51&secKey=59d646114079212e03ec09454456a938)

If you have some problems with the centreon\_plugins.exe, you can build it using [following
procedure](https://documentation.centreon.com/docs/centreon-nsclient/en/latest/windows_agent.html#build-your-own-executable)

## Centreon Configuration

### Create a new IIS server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                                       |
| :---------------------- | :------------------------------------------ |
| Host name               | *Name of the host*                          |
| Alias                   | *Host description*                          |
| IP                      | *Host IP Address*                           |
| Monitored from          | *Monitoring Poller to use*                  |
| Host Multiple Templates | Apps-Wsus-NRPE/App-Wsus-NSClient-05-Restapi |

Click on the *Save* button.


