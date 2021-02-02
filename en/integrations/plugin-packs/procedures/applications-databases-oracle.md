---
id: applications-databases-oracle
title: Oracle Database
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

```bash
yum install centreon-plugin-Applications-Databases-Oracle
```

## RPM

In order to use this template, the `wget` command-line tool and the GNU Compiler Collection (`gcc`) are necessary.

```bash
yum install -y gcc wget
```

### Oracle instant client

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
export ORACLE_HOME=/usr/lib/oracle/12.1/client64/ 
export LD_LIBRARY_PATH=$ORACLE_HOME/lib 
perl Makefile.PL -m /usr/share/oracle/12.1/client64/demo/demo.mk
```

The following message should appear:

```text
LD_RUN_PATH=/usr/lib/oracle/12.1/client64/lib*
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

## Centreon Configuration

### Create a new Oracle server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-DB-Oracle-custom       |

Click on the *Save* button.

Those services were automatically created for this host:

| Service              | Description                                                       |
| :------------------- | :---------------------------------------------------------------- |
| ping                 | Monitor host response time                                        |
| Connection-Number    | Check connection number to the Oracle server                      |
| Connection-Time      | Check the time to connect to the server                           |
| Corrupted-Blocks     | Check the number of corrupted blocks in database                  |
| Datacache-Hitratio   | Check the 'Data Buffer Cache Hit Ratio' of the server.            |
| Tablespace-Usage     | Check the used space in tablespaces                               |
| Rman-Backup-Problems | Check RMAN backup errors of the server during the last three days |
| Tnsping              | Check the connection to a remote listener                         |

### Host macro configuration

The following macros must be configured on host:

| Macro          | Description                           | Default value | Example  |
| :------------- | :------------------------------------ | :------------ | :------- |
| ORACLEPORT     | Port used to connect to the DB server | 1521          | 1521     |
| ORACLESID      | The name of the oracle instance       | SID           | ORCLB55  |
| ORACLEUSERNAME | the oracle user                       | USERNAME      | root     |
| ORACLEPASSWORD | the oracle user's password            | PASSWORD      | p@ssw0rd |
