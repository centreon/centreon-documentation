---
id: applications-monitoring-centreon-mbi
title: Centreon MBI
---

## Prerequisites

### Centreon Plugin

Install the plugin on poller that will monitor Centreon MBI reporting server

``` shell
yum install centreon-nrpe-plugin centreon-plugin-Operatingsystems-Linux-Snmp
```

### NRPE

Install NPRE on the Centreon MBI reporting server

``` shell
yum install centreon-nrpe-daemon
```

Edit the file */etc/nrpe/centreon-nrpe.cfg* and:

  - Add the IP of the poller that monitors the Centreon MBI reporting server on
    the *allowed\_host=* part.

  - Add the following lines at the end of the file
    
        command[check_partitions]=/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --partitions
        command[check_db]=/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --db-content
        command[check_jobs]=/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --jobs

Start the deamon:

    # service centreon-nrpe start

Be sure to have with you the following information:

  - Read-Only SNMP community
  - IP Address of the monitoring server

### Install the SNMP service

With the `root` user, install the following package and its dependencies:

    root@yourserver#&gt; yum install net-snmp net-snmp-utils

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

Read [Troubleshooting
SNMP](http://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp);

## Centreon Configuration

### Create a new host Centreon-MBI server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                           |
| :---------------------- | :---------------------------------------------- |
| Host name               | *Hostname of the Centreon MBI reporting server* |
| Alias                   | *The host description*                          |
| IP                      | *Host IP Address*                               |
| Monitored from          | *Monitoring Poller to use*                      |
| Host Multiple Templates | App-Monitoring-Centreon-MBI-custom              |

Click on the *Save* button.

#### Notice

We advice you to also link your reporting server to *App-DB-MySQL* template.
Refer to its monitoring procedure for the configuration.
