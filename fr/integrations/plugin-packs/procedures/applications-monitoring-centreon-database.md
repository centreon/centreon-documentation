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

In order to be able to collect the needed information from the database a database user with specific privileges is
required:

    # grant select on *.* to 'monitor'@'%' identified by 'HuGr6834';

### SNMP

Enable SNMP Agent

## Centreon Configuration

### Create a new Centreon Database server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                                   |
| :---------------------- | :-------------------------------------- |
| Host name               | *Name of the host*                      |
| Alias                   | *Host description*                      |
| IP                      | *Host IP Address*                       |
| Monitored from          | *Monitoring Poller to use*              |
| Host Multiple Templates | App-Monitoring-Centreon-Database-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro         | Description                           | Default value | Example  |
| :------------ | :------------------------------------ | :------------ | :------- |
| MYSQLPORT     | Port used to connect to the DB server | MYSQLPORT     | 3306     |
| MYSQLUSERNAME | the mysql db user                     | MYSQLUSERNAME | monitor  |
| MYSQLPASSWORD | the mysql db user's password          | MYSQLPASSWORD | HuGr6834 |


