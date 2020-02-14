---
id: applications-databases-sybase
title: Sybase
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.2 | `STABLE` | Feb  6 2017 |

\#\#Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Databases-Sybase
```

## Username

The username string should not be longer than 32 chararacters. Username must be in the following form:
\[Servername|Domainname\]\\Username

### RPM

In order to use this template, the following RPM are needed:

  - freetds-0.82
  - perl-DBD-Sybase-1.10-1
  - unixODBC-2.2.11-10
  - unixODBC-devel-2.2.11-10

## Centreon Configuration

### Create a new Sybase database server

Go to "Configuration \> Hosts" and click "Add". Then, fill the form as shown by the following table :

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-DB-Sybase-custom       |

Click "Save" button.

Those services were automatically created for this host:

| Service           | Description                                  |
| :---------------- | :------------------------------------------- |
| Blocked-Processes | Check blocked processes on the server.       |
| Connection-Time   | Check the connection time to the server.     |
| Database-Size     | Check Size space of databases on the server. |
| Connected-User    | Check connected user.                        |

### Host Macro Configuration

The following macros must be configured on host:

| Macro          | Description                 | Default value | Example  |
| :------------- | :-------------------------- | :------------ | :------- |
| SYBASEUSERNAME | the Sybase user             | USERNAME      | root     |
| SYBASEPASSWORD | the Sybase password         | PASSWORD      | p@ssw0rd |
| SYBASEPORT     | Port Of the Sybase Database | 2638          | 2638     |

