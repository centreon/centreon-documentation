---
id: applications-protocol-ftp
title: FTP Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.11 | `STABLE` | Mar 15 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Protocol-Ftp
```

Grant access to the FTP server you would like to monitor

## Centreon Configuration

### Create a new FTP server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | App-Protocols-FTP-custom   |

Click on the *Save* button.

### Monitor your FTP Server with SSL or TLS

#### What you need to configure

On your Host or Host template, please set the following macro :

| Macro           | Value  |
| :-------------- | :----- |
| FTPEXTRAOPTIONS | \--ssl |

