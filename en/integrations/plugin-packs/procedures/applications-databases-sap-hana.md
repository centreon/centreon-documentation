---
id: applications-databases-sap-hana
title: SAP HANA
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.2 | `STABLE` | Aug 25 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Databases-Sap-Hana
```

### Sap Hana Client

To monitor Sap Hana DB, you need to install SAP Hana Linux Client. The client is on SAP support website (an account is
needed).

``` shell
yum install unixODBC perl-DBD-ODBC
```

### Configuration of freetds.conf file

The /etc/odbcinst.ini file have to be modified. Add following lines:

    [HDBODBC]
    Description = "SmartCloudPT HANA"
    Driver=/usr/sap/hdbclient/libodbcHDB.so

### User account

An user with rights on SYS schema is needed.

### Test the connection

An example of command to test database connection:

# /usr/sap/hdbclient/hdbsql -n saphanadb\_servername:31041 -d databasename -u username -p password

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-DB-Sap-Hana-custom     |

Click on the *Save* button.


