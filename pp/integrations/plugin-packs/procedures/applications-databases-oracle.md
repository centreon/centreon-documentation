---
id: applications-databases-oracle
title: Oracle Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Monitoring Connector **Oracle Database** brings a host template:

* App-DB-Oracle-custom

It brings the following service templates:

| Service Alias                    | Service Template                               | Service Description                                                         | Default | Discovery |
|:---------------------------------|:-----------------------------------------------|:----------------------------------------------------------------------------|:--------|:----------|
| ASM-Diskgroup-Usage-Generic-Name | App-DB-Oracle-ASM-Diskgroup-Usage-Generic-Name | Check ASM groupdisk usage and status to the Oracle server                   |         |           |
| ASM-Diskgroup-Usage-Global       | App-DB-Oracle-ASM-Diskgroup-Usage-Global       | Check ASM groupdisk usage and status to the Oracle server                   |         | X         |
| Connection-Number                | App-DB-Oracle-Connection-Number                | Check connection number to the Oracle server                                | X       |           |
| Connection-Time                  | App-DB-Oracle-Connection-Time                  | Check the connection time to the server. This time is given in seconds      | X       |           |
| Corrupted-Blocks                 | App-DB-Oracle-Corrupted-Blocks                 | Check the number of corrupted blocks on the server                          | X       |           |
| Data-Files-Status                | App-DB-Oracle-Data-Files-Status                | Check Oracle data files status                                              |         |           |
| Datacache-Hitratio               | App-DB-Oracle-Datacache-Hitratio               | Check the 'Data Buffer Cache Hit Ratio' of the server. No alerts by default | X       |           |
| Dictionary-Cache-Usage           | App-DB-Oracle-Dictionary-Cache-Usage           | Check dictionary cache usage                                                |         |           |
| Event-Waits-Usage                | App-DB-Oracle-Event-Waits-Usage                | Check event wait usage                                                      |         |           |
| Fra-Usage                        | App-DB-Oracle-Fra-Usage                        | Check fast recovery area space usage                                        |         |           |
| Invalid-Object                   | App-DB-Oracle-Invalid-Object                   | Check invalid objects                                                       |         |           |
| Library-Cache-Usage              | App-DB-Oracle-Library-Cache-Usage              | Check library cache usage                                                   |         |           |
| Long-Queries                     | App-DB-Oracle-Long-Queries                     | Check long queries                                                          |         |           |
| Process-Usage                    | App-DB-Oracle-Process-Usage                    | Check Oracle process used                                                   | X       |           |
| Redolog-Usage                    | App-DB-Oracle-Redolog-Usage                    | Check redo log usage                                                        |         |           |
| Rman-Backup-Age                  | App-DB-Oracle-Rman-Backup-Age                  | Check RMAN backup age                                                       |         |           |
| Rman-Backup-Online-Age           | App-DB-Oracle-Rman-Backup-Online-Age           | Check RMAN backup age in online mode                                        |         |           |
| Rman-Backup-Problems             | App-DB-Oracle-Rman-Backup-Problems             | Check RMAN backup errors of the server during the last three days           | X       |           |
| Rollback-Segment-Usage           | App-DB-Oracle-Rollback-Segment-Usage           | Check rollback segment usage                                                |         |           |
| Session-Usage                    | App-DB-Oracle-Session-Usage                    | Check session used                                                          | X       |           |
| Sql                              | App-DB-Oracle-Sql-Statement-Generic            | Check allowing to execute a custom SQL request with a digital answer        |         |           |
| Sql-String                       | App-DB-Oracle-Sql-Statement-String-Generic     | Check allowing to execute a custom SQL request with a string answer         |         |           |
| Tablespace-Usage-Global          | App-DB-Oracle-Tablespace-Usage-Global          | Check the tablespace usage of the server                                    | X       | X         |
| Tnsping                          | App-DB-Oracle-Tnsping                          | Check the connection to a remote listener                                   | X       |           |

### Discovery rules

| Rule Name                              | Description                                               |
|:---------------------------------------|:----------------------------------------------------------|
| App-DB-Oracle-ASM-Diskgroup-Usage-Name | Discover the disk partitions and monitor space occupation |
| App-DB-Oracle-Tablespaces-Usage-Name   |                                                           |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Connection-Time" label="Connection-Time">

| Metric name         | Description                            | Unit   |
| :------------------ | :------------------------------------- | :----- |
| connection_time     | Connection time to the database        | ms     |

</TabItem>
<TabItem value="Tnsping" label="Tnsping">

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--- |
| status      | Check Oracle listener status               |      |

</TabItem>
<TabItem value="Tablespace-Usage" label="Tablespace-Usage">

| Metric name           | Description                                     | Unit |
| :-------------------- | :-----------------------------------------------| :--- |
|  tbs_#instance_usage  | Tablespace usage per Instance                   |   B  |
|  tbs_#instance_free   | Tablespace free space left per instance         |   B  |

</TabItem>
<TabItem value="Session-Usage" label="Session-Usage">

| Metric name      | Description                                                       | Unit |
| :--------------- | :---------------------------------------------------------------- | :--- |
| session_used     | The percentage of Oracle session used                             |   %  |

</TabItem>
<TabItem value="Rman-Backup-Problems" label="Rman-Backup-Problems">

| Metric name			   | Description                                                         | Unit   |
| :----------------------- | :------------------------------------------------------------------ | :----  |
|  #backup_backup_problems | Number of problems per backup (last 3 days by default)              | Count  |

</TabItem>
<TabItem value="Process-Usage" label="Process-Usage">

| Metric name      | Description                                                       | Unit |
| :--------------- | :---------------------------------------------------------------- | :--- |
| process_used     | The percentage of Oracle process used                             |   %  |

</TabItem>
<TabItem value="Datacache-Hitratio" label="Datacache-Hitratio">

| Metric name               | Description                                          | Unit |
| :------------------------ | :--------------------------------------------------- | :--- |
| sga_data_buffer_hit_ratio | Check the 'Data Buffer Cache Hit Ratio' of the server|  %    |

</TabItem>
<TabItem value="Corrupted-Blocks" label="Corrupted-Blocks">

| Metric name         | Description                                          | Unit   |
| :------------------ | :----------------------------------------------------| :----- |
| corrupted_blocks    | The number of corrupted blocks in the database       | Count  |

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Metric name       | Description                                     | Unit   |
| :---------------- | :-----------------------------------------------| :----- |
| connected_users   | The number of connection to the Oracle server   | Count  |


</TabItem>
</Tabs>

## Prerequisites

### Dependencies

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install gcc wget
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install gcc wget
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install wget gcc make unzip libaio1 libdbi-perl
```

</TabItem>
</Tabs>

###  Oracle instant client

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 / CentOS 7">


Go to [Instant Client Downloads](https://www.oracle.com/database/technologies/instant-client/downloads.html),
choose the right OS your Poller is running on (Linux x86-64) and download the following packages (RPM):

  - oracle-instantclient-basic
  - oracle-instantclient-sqlplus
  - oracle-instantclientdevel

Install the RPM package manually:

```bash
rpm -ivh oracle-*.rpm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Go to [Instant Client Downloads](https://www.oracle.com/database/technologies/instant-client/downloads.html),
choose the right OS your Poller is running on (Linux x86-64) and download the following packages (ZIP):

  - oracle-instantclient-basic
  - oracle-instantclient-sqlplus
  - oracle-instantclientdevel

Unzip the packages manually:

```bash
mkdir /opt/oracle
cd /opt/oracle
unzip 'instantclient-*.zip'
```

</TabItem>
</Tabs>


### Perl library for Oracle

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 / CentOS 7">

As **root**, run:

```bash
cd /usr/local/src 
wget https://www.cpan.org/modules/by-module/DBD/DBD-Oracle-1.83.tar.gz 
tar xzf DBD-Oracle-1.83.tar.gz 
cd DBD-Oracle-1.83 
export ORACLE_HOME=/usr/lib/oracle/21/client64
export LD_LIBRARY_PATH=/usr/lib/oracle/21/client64/lib 
export PATH=$ORACLE_HOME:$PATH
perl Makefile.PL -m /usr/share/oracle/21/client64/demo/demo.mk
```

The following message should appear:

```text
LD_RUN_PATH=/usr/lib/oracle/21/client64/lib
Using DBD::Oracle 1.83.
Using DBD::Oracle 1.83.
Using DBI 1.641 (for perl 5.026003 on x86_64-linux-thread-multi) installed in /usr/lib64/perl5/vendor_perl/auto/DBI/
Generating a Unix-style Makefile
Writing Makefile for DBD::Oracle
```

If you get an error during the **Makefile.PL** step, explicitely force the Oracle version to a 
named version (it will not impact the plugin operations): `perl Makefile.PL -V 12.1.0 -m /usr/share/oracle/21/client64/demo/demo.mk`

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

As **root**, run:

```bash
cd /usr/local/src
wget https://www.cpan.org/modules/by-module/DBD/DBD-Oracle-1.83.tar.gz
tar xzf DBD-Oracle-1.83.tar.gz
cd DBD-Oracle-1.83
export ORACLE_HOME=/opt/oracle/instantclient_21_8/
export LD_LIBRARY_PATH=/opt/oracle/instantclient_21_8/
export PATH=$ORACLE_HOME:$PATH
perl Makefile.PL -m /opt/oracle/instantclient_21_8/sdk/demo/demo.mk
```

The following message should appear:

```text
LD_RUN_PATH=/opt/oracle/instantclient_21_8
Using DBD::Oracle 1.83.
Using DBD::Oracle 1.83.
Using DBI 1.643 (for perl 5.032001 on x86_64-linux-gnu-thread-multi) installed in /usr/lib/x86_64-linux-gnu/perl5/5.32/auto/DBI/
Generating a Unix-style Makefile
Writing Makefile for DBD::Oracle
```

If you get an error during the **Makefile.PL** step, explicitely force the Oracle version to a 
named version (it will not impact the plugin operations): `perl Makefile.PL -V 12.1.0 -m /opt/oracle/instantclient_21_8/sdk/demo/demo.mk`

</TabItem>
</Tabs>

Compile the library:

```bash
make
```

Install it:

```bash
make install
```

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 / CentOS 7">

Create the file **/etc/ld.so.conf.d/oracle.conf** and add one line representing the 
path to the library: 

```bash
cat > /etc/ld.so.conf.d/oracle.conf <<EOF
/usr/lib/oracle/21/client64/lib/
EOF
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Create the file **/etc/ld.so.conf.d/oracle-instantclient.conf** and add one line representing the 
path to the library: 

```bash
cat > /etc/ld.so.conf.d/oracle-instantclient.conf <<EOF
/opt/oracle/instantclient_21_8/
EOF
```

</TabItem>
</Tabs>

Update library cache with the following command: 

```bash
/sbin/ldconfig
```

### User account

The safest way to retrieve information from the Oracle server is to create a
dedicated user for Centreon.

This user account must have the READ (Oracle 12+) or SELECT (Oracle < 12) permission on following tables:

  - dba\_free\_space
  - dba\_data\_files
  - dba\_temp\_files
  - dba\_segments
  - dba\_jobs
  - dba\_objects
  - DBA\_MVIEW\_refresh\_times
  - dba\_indexes
  - dba\_ind\_partitions
  - dba\_ind\_subpartitions
  - dba\_registry
  - dba\_tablespaces
  - DBA\_MVIEW\_refresh\_times
  - DBA\_TABLESPACE\_USAGE\_METRICS
  - v_$sysstat
  - v_$sgastat
  - v_$parameter
  - v_$process
  - v_$session
  - v_$filestat
  - v_$log
  - v_$instance
  - V_$ASM\_DISKGROUP
  - v_$database\_block\_corruption
  - v_$tempstat
  - v_$rowcache
  - v_$system\_event
  - v_$recovery\_area\_usage
  - v_$librarycache
  - v_$sql\_monitor
  - v_$resource\_limit
  - v_$rman\_status
  - v_$backup
  - v_$rman\_status
  - v_$rollstat
  - v_$resource\_limit
  - v_$tablespace
  - v_$event\_name
  - v_$waitstat

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-databases-oracle
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-oracle
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-databases-oracle
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Oracle Database** Pack through
the **Configuration > Monitoring Connectors Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Databases-Oracle
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Oracle
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-databases-oracle
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Oracle Database** server settings.
* Apply the **App-DB-Oracle-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Name                       | Description                                            |
| :---------- | :------------------------- | :----------------------------------------------------- |
| X           | ORACLEPASSWORD             | The oracle user's password 			                      |
| X           | ORACLEPORT                 | Oracle port (Default: 1521)                            |
| X           | ORACLESID                  | The name of the oracle instance                        |
| X           | ORACLEUSERNAME             | The oracle user name                                   |
|             | ORACLESERVICENAME          | The oracle service name                                |

## FAQ
### How can I test the Plugin in the CLI and what do the main parameters stand for ?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

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

### Troubleshooting 

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

#### ```UNKNOWN: Cannot connect: (no error string) |```

This error message means that the Centreon Plugin couldn't successfully connect to the Oracle database.
Check that an Oracle database is installed on this host.
Check also that no third party device (such as a firewall) is blocking the connection.

#### ```DBD::Oracle is not root directory |```

This error message means that the module DBD::Oracle is installed under the /root directory.
Remove shell environment variable with PERL and compile DBD::Oracle Perl Module.