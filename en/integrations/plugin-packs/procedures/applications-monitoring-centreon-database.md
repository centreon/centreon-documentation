---
id: applications-monitoring-centreon-database
title: Centreon Database
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.3.0 | `STABLE` | Jan 30 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Monitoring-Centreon-Database centreon-plugin-Operatingsystems-Linux-Snmp
```

### Creating a database user for Service Partitioning Monitoring

In order to be able to collect the needed information from the database a
database user with specific privileges is required:

    # grant select on *.* to 'monitor'@'ip.address.monitoring.poller' identified by 'monitor';

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

### Create a new Centreon Database server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                   |
| :---------------------- | :-------------------------------------- |
| Host name               | *Name of the host*                      |
| Alias                   | *Host description*                      |
| IP                      | *Host IP Address*                       |
| Monitored from          | *Monitoring Poller to use*              |
| Host Multiple Templates | App-Monitoring-Centreon-Database-custom |
|                         | OS-Linux-SNMP-custom   				    |


Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro         | Description                           | Default value | Example  |
| :------------ | :------------------------------------ | :------------ | :------- |
| MYSQLPORT     | Port used to connect to the DB server | MYSQLPORT     | 3306     |
| MYSQLUSERNAME | the mysql db user                     | MYSQLUSERNAME | monitor  |
| MYSQLPASSWORD | the mysql db user's password          | MYSQLPASSWORD | monitor  |

