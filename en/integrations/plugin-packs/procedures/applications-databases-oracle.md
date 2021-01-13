---
id: applications-databases-oracle
title: Oracle Database
---
## Overview

Oracle Database is a database management system produced and marketed by Oracle that allows users to define, create, maintain and control access to databases.
The Centreon Plugin-Pack *Oracle Database* aims to retrieve informations and status from the Oracle database using Oracle Instant Client.

## Plugin-Pack assets

###  Monitored objects

* Oracle server

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Connection-Time-->

| Metric name | Description                                                                            | Unit   |
| :---------- | :------------------------------------------------------------------------------------- | :----- |
| warning     | Server connection time exceeds 1000 ms (default threshold)                             | Count  |
| critical    | Server connection time exceeds 5000 ms (default threshold)                             | Count  |


<!--Tnsping-->

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--- |
| status      | Check the connection to a remote listener  |      |

<!--Tablespace-Usage-->

| Metric name | Description                                                                   | Unit |
| :---------- | :-----------------------------------------------------------------------------| :--- |
| warning     | The percentage of used space in tablespaces exceeds 90% (default threshold)   |   %  |
| critical    | The percentage of used space in tablespaces exceeds 98% (default threshold))  |   %  |

<!--Session-Usage-->

| Metric name | Description                                                  | Unit |
| :---------- | :----------------------------------------------------------- | :--- |
| warning     | The percentage of Oracle session used exceeds warning value  |   %  |
| critical    | The percentage of Oracle session used exceeds critical value |   %  |

<!--Rman-Backup-Problems-->

| Metric name | Description                                                                                      | Unit   |
| :---------- | :----------------------------------------------------------------------------------------------- | :----  |
| warning     | RMAN backup errors number of the server during the last three days exceeds 0 (default threshold) | Count  |
| critical    | RMAN backup errors number of the server during the last three days exceeds 1 (default threshold) | Count  |

<!--Process-Usage-->

| Metric name | Description                                                  | Unit |
| :---------- | :----------------------------------------------------------- | :--- |
| warning     | The percentage of Oracle process used exceeds warning value  |   %  |
| critical    | The percentage of Oracle process used exceeds critical value |   %  |


<!--Datacache-Hitratio-->

| Metric name | Description                                          | Unit |
| :---------- | :--------------------------------------------------- | :--- |
| usage       | Check the 'Data Buffer Cache Hit Ratio' of the server|  %   |

<!--Corrupted-Blocks-->

| Metric name | Description                                                                | Unit   |
| :---------- | :------------------------------------------------------------------------- | :----- |
| warning     | The number of corrupt blocks in the database exceeds 1 (default threshold) | Count  |
| critical    | The number of corrupt blocks in the database exceeds 10(default threshold) | Count  |

<!--Connection-Number-->

| Metric name | Description                                                                    | Unit   |
| :---------- | :------------------------------------------------------------------------------| :----- |
| warning     | The number of connection to the Oracle server exceeds 50 (default threshold)   | Count  |
| critical    | The number of connection to the Oracle server exceeds 100 (default threshold)  | Count  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### RPM
In order to use this template, the `wget` command-line tool and the GNU Compiler Collection (`gcc`) are necessary.

```bash
yum install -y gcc wget
```

###  Oracle instant client

Go to [Instant Client
Downloads](http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html),
choose the right OS (the one running monitoring engine, probably Linux x86-64)
and download the following packages:

  - oracle-instantclient-basic
  - oracle-instantclient-sqlplus
  - oracle-instantclientdevel

Install them:

```bash
rpm -ivh oracle-*.rpm
```

### Perl library for oracle

> Replace 12.1 by the version of instantclient installed

As root, run:

```bash
cd /usr/local/src 
wget http://www.cpan.org/modules/by-module/DBD/DBD-Oracle-1.64.tar.gz 
tar xzf DBD-Oracle-1.64.tar.gz 
cd DBD-Oracle-1.64 
export ORACLE_HOME=/usr/lib/oracle/12.1/client64
export LD_LIBRARY_PATH=/usr/lib/oracle/12.1/client64/lib 
export PATH=$ORACLE_HOME:$PATH
perl Makefile.PL -m /usr/share/oracle/12.1/client64/demo/demo.mk
```

The following message should appear:

```text
LD_RUN_PATH=/usr/lib/oracle/12.1/client64/lib*
Using DBD::Oracle 1.64. 
Using DBD::Oracle 1.64. 
Using DBI 1.52 (for perl 5.008008 on x86_64-linux-thread-multi) installed in /usr/lib64/perl5/vendor_perl/5.8.8/x86\_64-linux-thread-multi/auto/DBI/
Writing Makefile for DBD::Oracle
```

Compile the library:

```bash
make
```

Then install it:

```bash
make install
```

Then create the file : /etc/ld.so.conf.d/oracle.conf and link to the Oracle Perl
Library:

```bash
cat > /etc/ld.so.conf.d/oracle.conf <<EOF
/usr/lib/oracle/12.1/client64/lib/
EOF
```

You just have to enter in the file : /usr/lib/oracle/12.1/client64/lib/

Then :

```bash
/sbin/ldconfig
```

### user account

The safest way to retrieve information from the Oracle server is to create a
dedicated user for Centreon.

This user account must have the read permission on following tables:

  - dba\_free\_space
  - dba\_data\_files
  - dba\_temp\_files
  - dba\_segments
  - dba\_jobs
  - v$sysstat
  - v$sgastat
  - v$parameter
  - v$process
  - v$session
  - v$filestat
  - v$log
  - v$instance
  
## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor a Oracle Database:

```bash
yum install centreon-plugin-Applications-Databases-Oracle
```

2. On the Centreon Web interface, install the *Oracle Database* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

## Configuration

1. Install the Centreon Plugin package on every Centreon poller expected to monitor a Oracle Database:

```bash
yum install centreon-plugin-Applications-Databases-Oracle
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-databases-oracle
```

3. On the Centreon Web interface, install the Centreon Plugin-Pack *Oracle Database* from the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->


## Configuration


* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the relevant Host Template "App-DB-Oracle-custom", and configure the mandatory Macros:


| Mandatory   | Name                       | Description                                            |
| :---------- | :------------------------- | :----------------------------------------------------- |
| X           | ORACLEPASSWORD             | The oracle user's password 							|
| X           | ORACLEPORT                 | By default: 1521						                |
| X           | ORACLESID                  | The name of the oracle instance                        |
| X           | ORACLEUSERNAME             | The oracle user name                                   |
|             | ORACLESERVICENAME          | The oracle service name                                |


## FAQ
### How can I test the Plugin in the CLI and what do the main parameters stand for ?

Once the Centreon Plugin installed, you can test it directly in the CLI of the
Centreon poller by logging with the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins//centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--hostname='10.30.2.38' --port='1521' \
	--sid='XE' \
	--username='SYSTEM' \
	--password='Centreon75' \
	--mode='tablespace-usage' \
	--warning-tablespace='90' \
	--critical-tablespace='98' \
	--filter-tablespace='^(?!(SYSTEM|SYSAUX))' \
	--verbose 
```

Expected output:

```bash
OK: All tablespaces are OK | 'tbs_sysaux_usage_sysaux'=552075272B;0:27596154624;0:29069940992;0;30595726360 'tbs_system_usage_system'=945684080B;0:27636154624;0:29065940982;0;30595527360 'tbs_temp_usage_temp'=0B;0:27536080897;0:29065863169;0;30595645450 'tbs_users_usage_users'=2818049B;0:27536154625;0:29065940993;0;30595727460
Tablespace 'sysaux' Total: 29.48 GB Used: 527.60 MB (1.90%) Free: 27.88 GB (98.20%)
Tablespace 'system' Total: 29.48 GB Used: 902.76 MB (3.09%) Free: 27.71 GB (96.91%)
Tablespace 'temp' Total: 29.48 GB Used: 0.00 B (0.00%) Free: 28.59 GB (100.00%)
Tablespace 'users' Total: 29.48 GB Used: 2.78 MB (0.01%) Free: 28.48 GB (99.99%)
```

The available thresholds as well as all of the options that can be used with
this Plugin can be displayed by adding the ```--help``` parameter to the 
command:

```bash
/usr/lib/centreon/plugins//centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--mode='tablespace-usage' \
	--help
```

You can display all of the modes that come with the Plugin with the command
below:

```bash
/usr/lib/centreon/plugins//centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--list-mode
```

### Why do I get the following message:  

### ```CRITICAL: Cannot connect: (no error string) |```

This error message means that the Centreon Plugin couldn't successfully connect to the oracle database.
Check that an Oracle database is installed on this host.

### ```DBD::Oracle is not root directory |```

This error message means that the module DBD::Oracle is installed under the /root directory.
Remove shell environment variable with PERL and compile DBD::Oracle Perl Module.

