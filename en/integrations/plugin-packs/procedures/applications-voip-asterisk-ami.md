---
id: applications-voip-asterisk-ami
title: Asterisk VoIP Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Dec  7 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Voip-Asterisk-Ami
```

### Asterisk server configuration

After connecting with root account to your Asterisk server, you must do the following configurations.

### AMI

For any remote acces, you must create an Asterisk user:

    vi /etc/aserisk/manager.conf

example of user:

    [xivo_centreon_user]
    secret = centreon
    deny=0.0.0.0/0.0.0.0
    permit=127.0.0.1/255.255.255.0
    read = system,call,log,verbose,command,agent,user,dtmf
    write = system,call,log,verbose,command,agent,user,dtmf

In te newly created user, add a *permit* line to allow the centreon server to conect to the AMI:

    vi /etc/aserisk/manager.conf

example:

    permit=10.30.2.32/255.255.255.0

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                        |
| :----------------------------------- | :--------------------------- |
| Host name                            | *Name of the host*           |
| Alias                                | *Host description*           |
| IP                                   | *Host IP Address*            |
| Monitored from                       | *Monitoring Poller to use*   |
| Host Multiple Templates              | App-VoIP-Asterisk-AMI-custom |
| *Relations \> Parent Hostgroups* tab |                              |

Click on the *Save* button.


