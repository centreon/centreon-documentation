---
id: hardware-servers-hp-snmp
title: HP Proliant
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Servers-Hp-Snmp
```

## HP Insight Management Agent

Warning: The following procedure is an example. Cannot be applied on all
context. The procedure is for centos 6 and hp agent 9.5.

The agent allows to get hardware information in SNMP. First, you need to
download ['hp-health'](https://support.hpe.com/hpsc/swd/public/detail?swItemId=MTX_c34b79933bcf4a6e89dc89df27) and ['hp-snmp-agents'](https://support.hpe.com/hpsc/swd/public/detail?swItemId=MTX_fe93eb05acc0417e95e177c0e7) packages (can be found in [HP Support
Website](https://support.hpe.com/hpsc/swd/public/))

    # rpm -i hp-health-9.50-1628.32.rhel6.x86_64.rpm hp-snmp-agents-9.50-2564.40.rhel6.x86_64.rpm

Add in */etc/snmp/snmpd.conf*:

    # Following entries were added by HP Insight Management Agents
    #      Mon May 26 12:42:41 CEST 2014
    dlmod cmaX /usr/lib64/libcmaX64.so

Note: If you're using 32bits hardware so you have to add dlmod cmaX
/usr/lib/libcmaX.so instead of dlmod cmaX /usr/lib64/libcmaX64.so

Following daemons must be reloaded:

    # /etc/init.d/hp-snmp-agents restart
    # /etc/init.d/snmpd restart

## Centreon configuration

### Create an HP server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | *HW-Server-Hp-SNMP-custom* |

Click the *Save* button.

