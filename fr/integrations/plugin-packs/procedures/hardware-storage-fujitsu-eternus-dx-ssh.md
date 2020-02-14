---
id: hardware-storage-fujitsu-eternus-dx-ssh
title: Fujitsu Eternus DX
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.22 | `STABLE` | Oct  3 2019 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Fujitsu-Eternus-Dx-Ssh
```

SSH key exchange must be done between poller and monitored server. Create a user centreon on your Fujitsu Eternus DX
equipment.

Generate key for centreon-engine user with command:

    # su - centreon-engine
    # ssh-keygen -N "" -f ~/.ssh/identity
    # ssh-keygen -e -f .ssh/identity.pub > identity.pub.ietf
    # telnet <FUJITSU_IP>
    CLI> import ssh-public-key -server <POLLER_IP> -port maintenance -user <ADMIN_USER> -filename identity.pub.ietf -account-name centreon
    Password:
    importing ./identity.pub.ietf from ...
    CLI> exit

You can now try to connect you without password

    # su - centreon-engine
    # ssh -l centreon <FUJITSU_IP>

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                                    |
| :----------------------------------- | :--------------------------------------- |
| Host name                            | *Name of the host*                       |
| Alias                                | *Host description*                       |
| IP                                   | *Host IP Address*                        |
| Monitored from                       | *Monitoring Poller to use*               |
| Host Multiple Templates              | HW-Storage-Fujitsu-Eternus-DX-SSH-custom |

Click on the *Save* button.

