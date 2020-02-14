---
id: operatingsystems-linux-snmp
title: Linux SNMP
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.2.3 | `STABLE` | Nov 21 2019 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

Prerequistes concerns a RHEL like distribution, you may need to adapt it if you run an other Linux distro.

Be sure to have with you the following information:

  - Read-Only SNMP community
  - IP Address of the monitoring server

### Install the SNMP service

With the `root` user, install the following package and its dependencies:

    root@yourserver#&gt; yum install net-snmp

### Configure SNMP on your server

1.  Open the file */etc/snmp/snmpd.conf* with your favorite text editor

2.  Modify the following lines (Replace the `<SNMPCOMMUNITY>`):
    
    com2sec notConfigUser default <SNMPCOMMUNITY>

3.  Comment all the lines which begin by `view`:
    
    view systemview included .1.3.6.1.2 view systemview included .1.3.6.1.2.1.25

4.  Just after the previous lines, add the following line:
    
    view systemview included .1

5.  save the file

6.  start the snmp service:
    
    service snmpd start

7.  Add SNMP to booting services:
    
    chkconfig --add snmpd; chkconfig --level 2345 snmpd on

#### Check your SNMP installation

Try to execute this command:

    $ snmpwalk -v 1 -c <SNMPCOMMUNITY> <IPSERVER> .1.3.6.1.2.1.1.1

You should get a response looking like the following:

    SNMPv2-MIB::sysDescr.0 = STRING: Linux <SERVER> 2.6.18-128.1.10.el5 #1 SMP Thu May 7 10:39:21 EDT 2009 i686

### SNMP Permissions

You need a SNMP read access on following OIDs:

  - HOST-RESOURCES-MIB: .1.3.6.1.2.1.25 (cpu, uptime, storage, process)
  - UCD-SNMP-MIB: .1.3.6.1.4.1.2021 (swap, memory, inodes, diskio)
  - IF-MIB: .1.3.6.1.2.1.2 (traffic)

### Troubleshooting

Read [Troubleshooting SNMP](http://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp);

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | OS-Linux-SNMP-custom       |

Click on the *Save* button.

