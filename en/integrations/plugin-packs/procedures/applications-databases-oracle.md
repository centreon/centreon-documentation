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

| Metric name         | Description                            | Unit   |
| :------------------ | :------------------------------------- | :----- |
| connection_time     | Connection time to the database        | ms     |

<!--Tnsping-->

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--- |
| status      | Check Oracle listener status               |      |

<!--Tablespace-Usage-->

| Metric name           | Description                                     | Unit |
| :-------------------- | :-----------------------------------------------| :--- |
|  tbs_#instance_usage  | Tablespace usage per Instance                   |   B  |
|  tbs_#instance_free   | Tablespace free space left per instance         |   B  |

<!--Session-Usage-->

| Metric name      | Description                                                       | Unit |
| :--------------- | :---------------------------------------------------------------- | :--- |
| session_used     | The percentage of Oracle session used                             |   %  |

<!--Rman-Backup-Problems-->

| Metric name			   | Description                                                         | Unit   |
| :----------------------- | :------------------------------------------------------------------ | :----  |
|  #backup_backup_problems | Number of problems per backup (last 3 days by default)              | Count  |

<!--Process-Usage-->

| Metric name      | Description                                                       | Unit |
| :--------------- | :---------------------------------------------------------------- | :--- |
| process_used     | The percentage of Oracle process used                             |   %  |

<!--Datacache-Hitratio-->

| Metric name               | Description                                          | Unit |
| :------------------------ | :--------------------------------------------------- | :--- |
| sga_data_buffer_hit_ratio | Check the 'Data Buffer Cache Hit Ratio' of the server|  %    |

<!--Corrupted-Blocks-->

| Metric name         | Description                                          | Unit   |
| :------------------ | :----------------------------------------------------| :----- |
| corrupted_blocks    | The number of corrupted blocks in the database       | Count  |

<!--Connection-Number-->

| Metric name       | Description                                     | Unit   |
| :---------------- | :-----------------------------------------------| :----- |
| connected_users   | The number of connection to the Oracle server   | Count  |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### RPM

In order to use this template, the `wget` command-line tool and the GNU Compiler Collection (`gcc`) are necessary.

```bash
yum install -y gcc wget
```

###  Oracle instant client

Go to [Instant Client Downloads](http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html),
choose the right OS your Poller is running on (Linux x86-64) and download the following packages:

  - oracle-instantclient-basic
  - oracle-instantclient-sqlplus
  - oracle-instantclientdevel

Install the RPM Package manually:

```bash
rpm -ivh oracle-*.rpm
```

### Perl library for Oracle

As root, run:

```bash
cd /usr/local/src 
wget http://www.cpan.org/modules/by-module/DBD/DBD-Oracle-1.80.tar.gz 
tar xzf DBD-Oracle-1.80.tar.gz 
cd DBD-Oracle-1.80 
export ORACLE_HOME=/usr/lib/oracle/21/client64
export LD_LIBRARY_PATH=/usr/lib/oracle/21/client64/lib 
export PATH=$ORACLE_HOME:$PATH
perl Makefile.PL -m /usr/share/oracle/21/client64/demo/demo.mk
```

The following message should appear:

```text
LD_RUN_PATH=/usr/lib/oracle/21/client64/lib*
Using DBD::Oracle 1.80. 
Using DBI 1.52 (for perl 5.008008 on x86_64-linux-thread-multi) installed in /usr/lib64/perl5/vendor_perl/5.8.8/x86\_64-linux-thread-multi/auto/DBI/
Writing Makefile for DBD::Oracle
```

Compile the library:

```bash
make
```

Install it:

```bash
make install
```

Create the file /etc/ld.so.conf.d/oracle.conf and add one line representing the 
path to the library: 

```bash
cat > /etc/ld.so.conf.d/oracle.conf <<EOF
/usr/lib/oracle/21/client64/lib/
EOF
```

Update library cache with the following command: 

```bash
/sbin/ldconfig
```

### User account

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
  
## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor a Oracle Database:

```bash
yum install centreon-plugin-Applications-Databases-Oracle
```

2. On the Centreon Web interface, install the *Oracle Database* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

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
| X           | ORACLEPASSWORD             | The oracle user's password 			    |
| X           | ORACLEPORT                 | By default: 1521					    |
| X           | ORACLESID                  | The name of the oracle instance                        |
| X           | ORACLEUSERNAME             | The oracle user name                                   |
|             | ORACLESERVICENAME          | The oracle service name                                |

## FAQ
### How can I test the Plugin in the CLI and what do the main parameters stand for ?

Once the plugin installed, log into your Centreon Poller CLI using the centreon-engine user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins//centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--hostname='10.30.2.38' \
	--port='1521' \
	--sid='XE' \
	--username='SYSTEM' \
	--password='Centreon75' \
	--mode='tablespace-usage' \
	--warning-tablespace='90' \
	--critical-tablespace='98' \
	--verbose 
```

Expected command output is shown below:

```bash
OK: All tablespaces are OK | 'tbs_sysaux_usage_sysaux'=552075272B;0:27596154624;0:29069940992;0;30595726360 'tbs_system_usage_system'=945684080B;0:27636154624;0:29065940982;0;30595527360 'tbs_temp_usage_temp'=0B;0:27536080897;0:29065863169;0;30595645450 'tbs_users_usage_users'=2818049B;0:27536154625;0:29065940993;0;30595727460
Tablespace 'sysaux' Total: 29.48 GB Used: 527.60 MB (1.90%) Free: 27.88 GB (98.20%)
Tablespace 'system' Total: 29.48 GB Used: 902.76 MB (3.09%) Free: 27.71 GB (96.91%)
Tablespace 'temp' Total: 29.48 GB Used: 0.00 B (0.00%) Free: 28.59 GB (100.00%)
Tablespace 'users' Total: 29.48 GB Used: 2.78 MB (0.01%) Free: 28.48 GB (99.99%)
```

The above command checks the used space in tablespaces (``` --mode='tablespace-usage' ```) 
on a oracle database installed in the host 10.30.2.38 (``` --hostname='10.30.2.38' ```) 
It uses Oracle informations (``` --username='SYSTEM' --password='Centreon75' --port='1521' --sid='XE' ```) to connect to the database.

The check provides a warning if the percentage of used space exceeds 90% (``` --warning-tablespace='90' ```) and a critical if this percentage exceeds 98% (``` --critical-tablespace='98' ```).

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

#### ```UNKNOWN: Cannot connect: (no error string) |```

This error message means that the Centreon Plugin couldn't successfully connect to the Oracle database.
Check that an Oracle database is installed on this host.
Check also that no third party device (such as a firewall) is blocking the connection.

#### ```DBD::Oracle is not root directory |```

This error message means that the module DBD::Oracle is installed under the /root directory.
Remove shell environment variable with PERL and compile DBD::Oracle Perl Module.
