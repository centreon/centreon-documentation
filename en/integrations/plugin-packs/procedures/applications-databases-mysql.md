---
id: applications-databases-mysql
title: MySQL/MariaDB
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.6 | `STABLE` | Jul 11 2019 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Databases-Mysql
```

### Creating a database user

In order to be able to collect the needed information from the database a database user with specific privileges is
required:

    # grant usage on *.* to 'centreon'@'pollerip' identified by 'password'

### MySQL, perl-dbi, perl-dbd-mysql

All prerequisites needed to run mysql plugins are packaged and installed with Centreon Entreprise Server: perl-DBI ,
perl-DBD-mysql , mysql.

## Centreon Configuration

### Create a new MySQL server

Go to "Configuration \> Hosts" and click "Add". Then, fill the form as shown by the following table :

| Fields                  | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-DB-MySQL-custom        |

Click "Save" button.

Those services were automatically created for this host:

| Service            | Description                                  |
| :----------------- | :------------------------------------------- |
| Ping               | Monitor host response time                   |
| Connection-Time    | Monitor to the connection time to the server |
| Connections-Number | Monitor the number of open connections       |
| Database-Size      | Monitor all the databases size               |
| Innodb-Bufferpool  | Monitor the InnoDB buffer pool hitrate       |
| Myisam-Keycache    | Monitor the MyISAM key cache hitrate         |
| Open-Files         | percentage of openned files                  |
| Queries            | Monitor the average of queries per second    |
| Slowqueries        | Monitor the number of slow queries           |

| Optionnal Service | Description                 |
| :---------------- | :-------------------------- |
| Uptime            | Monitor the server's uptime |

### Host Macro Configuration

The following macros must be configured on host:

| Macro         | Description                           | Default value | Example  |
| :------------ | :------------------------------------ | :------------ | :------- |
| MYSQLPORT     | Port used to connect to the DB server | MYSQLPORT     | 3306     |
| MYSQLUSERNAME | the mysql db user                     | MYSQLUSERNAME | root     |
| MYSQLPASSWORD | the mysql db user's password          | MYSQLPASSWORD | HuGr6834 |

