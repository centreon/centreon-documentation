---
id: applications-databases-oracle
title: Oracle Database
---
## Overview

Oracle Database is a database management system that allows users to define, create, maintain and control access to databases produced and marketed by Oracle.
The Centreon Plugin-Pack *Oracle Database* aims to retrieve information and status from the Oracle database using Oracle Instant Client.

## Plugin-Pack assets

###  Monitored objects

* Oracle server

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Oracle-Server-->

| Metric name              | Description                                                          |
| :----------------------- | :------------------------------------------------------------------- |
| status                   | Status of the Oracle server                                          |
| Connection-Number        | Number of connection running                                         |
| Connection-Time          | Check the time to connect to the server                              |
| Corrupted-Blocks         | Check the number of corrupted blocks in database                     |
| Datacache-Hitratio       | Check the 'Data Buffer Cache Hit Ratio' of the server                |
| Tablespace-Usage         | Check the used space in tablespaces                                  |
| Rman-Backup-Problems     | Check RMAN backup errors of the server during the last three days    |
| Tnsping                  | Check the connection to a remote listener                            |

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
* Fill the "IP Address / DNS" field with a localhost IP address (e.g 127.0.0.1)
* Select the *App-DB-Oracle-custom* template.  

Once the template applied, some Macros have to be configured:

| Macro          | Description                           | Default value | Example  |
| :------------- | :------------------------------------ | :------------ | :------- |
| ORACLEPORT     | Port used to connect to the DB server | 1521          | 1521     |
| ORACLESID      | The name of the oracle instance       | SID           | ORCLB55  |
| ORACLEUSERNAME | the oracle user                       | USERNAME      | root     |
| ORACLEPASSWORD | the oracle user's password            | PASSWORD      | p@ssw0rd |

## FAQ
### How can I test the Plugin in the CLI and what do the main parameters stand for ?

Once the Centreon Plugin installed, you can test it directly in the CLI of the
Centreon poller by logging with the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins//centreon_oracle.pl \
--plugin=database::oracle::plugin \
--mode='tnsping' \
--hostname='10.30.2.47' \
--sid='ORCLB55' \
--port='1521' 
```

Expected output:

```bash
OK: Connection established to listener 'ORCLB55'
```

The available thresholds as well as all of the options that can be used with
this Plugin can be displayed by adding the ```--help``` parameter to the 
command:

```bash
/usr/lib/centreon/plugins//centreon_oracle.pl \
--plugin=database::oracle::plugin \
--mode='tnsping' \
--help
```

You can display all of the modes that come with the Plugin with the command
below:

```bash
/usr/lib/centreon/plugins//centreon_oracle.pl \
--plugin=database::oracle::plugin \
--list-mode
```

### Why do I get the following message:  ```CRITICAL: Cannot connect: (no error string) |```

This error message means that the Centreon Plugin couldn't successfully connect to the oracle database.
Check that an Oracle database is installed on this host.

```DBD::Oracle is not root directory |```

This error message means that the module DBD::Oracle is installed under the /root directory.
Remove shell environment variable with PERL and compile DBD::Oracle Perl Module.

