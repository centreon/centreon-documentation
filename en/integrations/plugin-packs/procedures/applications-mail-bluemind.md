---
id: applications-mail-bluemind
title: BlueMind
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.15 | `STABLE` | Jul 11 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Mail-Bluemind
```

## centreon user for check by ssh

You must create the centreon user on your bluemind server and setup its password with these following commands:

    $ useradd -m -s /bin/bash centreon
    $ passwd centreon

### SSH key exchange

You must make a ssh key exchange between the user centreon-engine of your monitoring poller and centreon user of your
Bluemind server with these following commands:

    $ su - centreon-engine 
    $ ssh-keygen
    $ ssh-copy-id centreon@bluemind_server_@IP
    $ ssh centreon@centreon@bluemind_server_@IP
    $ exit

### Install InfluxDB

Install InfluDB metric database on Bluemind web interface.

### Configure bm-iptables

You must allow the monitoring poller to access the Bluemind server. Log on Bluemind web interface with Global Admin and
go to *Security-\>Firewall settings*. Add the ip address of your monitoring poller and click the *Save* button.

## Centreon configuration

### Create a Bluemind server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | *App-Mail-Bluemind-custom* |

Click the *Save* button.

