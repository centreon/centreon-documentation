---
id: applications-databases-oracle
title: Oracle Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Oracle Database** brings a host template:

* **App-DB-Oracle-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-DB-Oracle-custom" label="App-DB-Oracle-custom">

| Service Alias           | Service Template                             | Service Description                                                         | Discovery  |
|:------------------------|:---------------------------------------------|:----------------------------------------------------------------------------|:----------:|
| Connection-Number       | App-DB-Oracle-Connection-Number-custom       | Check connection number to the Oracle server                                |            |
| Connection-Time         | App-DB-Oracle-Connection-Time-custom         | Check the connection time to the server. This time is given in seconds      |            |
| Corrupted-Blocks        | App-DB-Oracle-Corrupted-Blocks-custom        | Check the number of corrupted blocks on the server                          |            |
| Datacache-Hitratio      | App-DB-Oracle-Datacache-Hitratio-custom      | Check the 'Data Buffer Cache Hit Ratio' of the server. No alerts by default |            |
| Process-Usage           | App-DB-Oracle-Process-Usage-custom           | Check Oracle process used                                                   |            |
| Rman-Backup-Problems    | App-DB-Oracle-Rman-Backup-Problems-custom    | Check RMAN backup errors of the server during the last three days           |            |
| Session-Usage           | App-DB-Oracle-Session-Usage-custom           | Check session used                                                          |            |
| Tablespace-Usage-Global | App-DB-Oracle-Tablespace-Usage-Global-custom | Check the tablespace usage of the server                                    | X          |
| Tnsping                 | App-DB-Oracle-Tnsping-custom                 | Check the connection to a remote listener                                   |            |

> The services listed above are created automatically when the **App-DB-Oracle-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias                    | Service Template                                      | Service Description                                                  | Discovery  |
|:---------------------------------|:------------------------------------------------------|:---------------------------------------------------------------------|:----------:|
| ASM-Diskgroup-Usage-Generic-Name | App-DB-Oracle-ASM-Diskgroup-Usage-Generic-Name-custom | Check ASM groupdisk usage and status to the Oracle server            |            |
| ASM-Diskgroup-Usage-Global       | App-DB-Oracle-ASM-Diskgroup-Usage-Global-custom       | Check ASM groupdisk usage and status to the Oracle server            | X          |
| Data-Files-Status                | App-DB-Oracle-Data-Files-Status-custom                | Check Oracle data files status                                       |            |
| Dictionary-Cache-Usage           | App-DB-Oracle-Dictionary-Cache-Usage-custom           | Check dictionary cache usage                                         |            |
| Event-Waits-Usage                | App-DB-Oracle-Event-Waits-Usage-custom                | Check event wait usage                                               |            |
| Fra-Usage                        | App-DB-Oracle-Fra-Usage-custom                        | Check fast recovery area space usage                                 |            |
| Invalid-Object                   | App-DB-Oracle-Invalid-Object-custom                   | Check invalid objects                                                |            |
| Library-Cache-Usage              | App-DB-Oracle-Library-Cache-Usage-custom              | Check library cache usage                                            |            |
| Long-Queries                     | App-DB-Oracle-Long-Queries-custom                     | Check long queries                                                   |            |
| Redolog-Usage                    | App-DB-Oracle-Redolog-Usage-custom                    | Check redo log usage                                                 |            |
| Rman-Backup-Age                  | App-DB-Oracle-Rman-Backup-Age-custom                  | Check RMAN backup age                                                |            |
| Rman-Backup-Online-Age           | App-DB-Oracle-Rman-Backup-Online-Age-custom           | Check RMAN backup age in online mode                                 |            |
| Rollback-Segment-Usage           | App-DB-Oracle-Rollback-Segment-Usage-custom           | Check rollback segment usage                                         |            |
| Sql                              | App-DB-Oracle-Sql-Statement-Generic-custom            | Check allowing to execute a custom SQL request with a digital answer |            |
| Sql-String                       | App-DB-Oracle-Sql-Statement-String-Generic-custom     | Check allowing to execute a custom SQL request with a string answer  |            |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                              | Description                                               |
|:---------------------------------------|:----------------------------------------------------------|
| App-DB-Oracle-ASM-Diskgroup-Usage-Name | Discover the disk partitions and monitor space occupation |
| App-DB-Oracle-Tablespaces-Usage-Name   |                                                           |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="ASM-Diskgroup-Usage-*" label="ASM-Diskgroup-Usage-*">

| Metric name        | Unit  |
|:-------------------|:------|
| *dg*#status        | N/A   |
| *dg*#offline-disks | N/A   |
| *dg*#usage         | N/A   |
| *dg*#usage-failure | N/A   |

> Applies to the following service templates: ASM-Diskgroup-Usage-Generic-Name, ASM-Diskgroup-Usage-Global

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Metric name     | Unit  |
|:----------------|:------|
| connected_users | N/A   |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Metric name                  | Unit  |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Corrupted-Blocks" label="Corrupted-Blocks">

| Metric name      | Unit  |
|:-----------------|:------|
| corrupted_blocks | N/A   |

</TabItem>
<TabItem value="Data-Files-Status" label="Data-Files-Status">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| datafiles.traffic.io.usage.iops | iops  |
| *df*#status                     | N/A   |
| *df*#online-status              | N/A   |

</TabItem>
<TabItem value="Datacache-Hitratio" label="Datacache-Hitratio">

| Metric name | Unit  |
|:------------|:------|
| usage       | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Dictionary-Cache-Usage" label="Dictionary-Cache-Usage">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| dictionary.cache.get.hitratio.percentage | %     |

</TabItem>
<TabItem value="Event-Waits-Usage" label="Event-Waits-Usage">

| Metric name              | Unit  |
|:-------------------------|:------|
| event-count              | N/A   |
| *event*#total-waits-sec  | /s    |
| *event*#total-waits-time | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Fra-Usage" label="Fra-Usage">

| Metric name                                      | Unit  |
|:-------------------------------------------------|:------|
| recoveryarea.space.usage.percentage              | %     |
| recoveryarea.space.reclaimable.percentage        | %     |
| *file*#recoveryarea.space.usage.percentage       | %     |
| *file*#recoveryarea.space.reclaimable.percentage | %     |

</TabItem>
<TabItem value="Invalid-Object" label="Invalid-Object">

| Metric name         | Unit  |
|:--------------------|:------|
| objects             | N/A   |
| indexes             | N/A   |
| ind-partitions      | N/A   |
| ind-subpartitions   | N/A   |
| registry-components | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Library-Cache-Usage" label="Library-Cache-Usage">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| library.cache.get.hitratio.percentage | %     |
| library.cache.pin.hitratio.percentage | %     |
| library.cache.reloads.persecond       | /s    |
| library.cache.invalids.persecond      | /s    |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Metric name | Unit  |
|:------------|:------|
| status      | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Process-Usage" label="Process-Usage">

| Metric name  | Unit  |
|:-------------|:------|
| process_used | %     |

</TabItem>
<TabItem value="Redolog-Usage" label="Redolog-Usage">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| redolog.retry.ratio.percentage    | %     |
| redolog.traffic.io.bytespersecond | B/s   |

</TabItem>
<TabItem value="Rman-Backup-Age" label="Rman-Backup-Age">

Coming soon

</TabItem>
<TabItem value="Rman-Backup-Online-Age" label="Rman-Backup-Online-Age">

Coming soon

</TabItem>
<TabItem value="Rman-Backup-Problems" label="Rman-Backup-Problems">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| rman.backups.completed.count               | count |
| rman.backups.failed.count                  | count |
| rman.backups.completed_with_warnings.count | count |
| rman.backups.completed_with_errors.count   | count |

</TabItem>
<TabItem value="Rollback-Segment-Usage" label="Rollback-Segment-Usage">

| Metric name       | Unit  |
|:------------------|:------|
| extends           | /s    |
| wraps             | /s    |
| header-contention | %     |
| block-contention  | %     |
| hit-ratio         | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Session-Usage" label="Session-Usage">

| Metric name  | Unit  |
|:-------------|:------|
| session_used | %     |

</TabItem>
<TabItem value="Sql" label="Sql">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| value                             | N/A   |
| sqlrequest.execution.time.seconds | s     |

</TabItem>
<TabItem value="Sql-String" label="Sql-String">

| Metric name   | Unit  |
|:--------------|:------|
| *rows*#string | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Tablespace-Usage-Global" label="Tablespace-Usage-Global">

| Metric name             | Unit  |
|:------------------------|:------|
| *tablespace*#tbs__usage | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Tnsping" label="Tnsping">

| Metric name | Description                  | Unit  |
|:------------|:-----------------------------|:------|
| status      | Check Oracle listener status |       |

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

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-databases-oracle
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-oracle
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-databases-oracle
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-oracle
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Oracle Database** connector through
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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Oracle
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-databases-oracle
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Oracle
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-DB-Oracle-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro             | Description                               | Default value     | Mandatory   |
|:------------------|:------------------------------------------|:------------------|:-----------:|
| ORACLEUSERNAME    | User name used to connect to the database | USERNAME          |             |
| ORACLEPASSWORD    | Password for the defined user name        | PASSWORD          |             |
| ORACLEPORT        | Database Server Port                      | 1521              |             |
| ORACLESERVICENAME | Database Service Name                     |                   |             |
| ORACLESID         | Database SID                              | SID               |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="ASM-Diskgroup-Usage-Generic-Name" label="ASM-Diskgroup-Usage-Generic-Name">

| Macro                | Description                                                                                         | Default value     | Mandatory   |
|:---------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER               | Filter by name (regexp can be used)                                                                 |                   |             |
| WARNING              | Warning threshold                                                                                   | 80                |             |
| CRITICAL             | Critical threshold                                                                                  | 90                |             |
| WARNINGUSAGEFAILURE  | Warning threshold                                                                                   |                   |             |
| CRITICALUSAGEFAILURE | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="ASM-Diskgroup-Usage-Global" label="ASM-Diskgroup-Usage-Global">

| Macro                | Description                                                                                         | Default value     | Mandatory   |
|:---------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME           | Filter by name (regexp can be used)                                                                 |                   |             |
| WARNING              | Warning threshold                                                                                   | 80                |             |
| CRITICAL             | Critical threshold                                                                                  | 90                |             |
| WARNINGUSAGEFAILURE  | Warning threshold                                                                                   |                   |             |
| CRITICALUSAGEFAILURE | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MODE         |                                                                                                     | connected-users   |             |
| WARNING      | Warning threshold                                                                                   | 50                |             |
| CRITICAL     | Critical threshold                                                                                  | 100               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MODE         |                                                                                                     | connection-time   |             |
| WARNING      | Warning threshold in milliseconds                                                                   | 1000              |             |
| CRITICAL     | Critical threshold in milliseconds                                                                  | 5000              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Corrupted-Blocks" label="Corrupted-Blocks">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MODE         |                                                                                                     | corrupted-blocks  |             |
| WARNING      | Warning threshold                                                                                   | 1                 |             |
| CRITICAL     | Critical threshold                                                                                  | 10                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Data-Files-Status" label="Data-Files-Status">

| Macro                | Description                                                                                                                                                            | Default value                            | Mandatory   |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|:-----------:|
| WARNINGONLINESTATUS  | Set warning threshold for online status (Default: '%{online\_status} =~ /sysoff/i'). You can use the following variables: %{display}, %{online\_status}                | %{online\_status} =~ /sysoff/i           |             |
| CRITICALONLINESTATUS | Set critical threshold for online status (Default: '%{online\_status} =~ /offline\|recover/i'). You can use the following variables: %{display}, %{online\_status}     | %{online\_status} =~ /offline\|recover/i |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING (Default: none). You can use the following variables: %{display}, %{status}                                |                                          |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /offline\|invalid/i'). You can use the following variables: %{display}, %{status} |                                          |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                    | --verbose                                |             |

</TabItem>
<TabItem value="Datacache-Hitratio" label="Datacache-Hitratio">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                   |                   |             |
| CRITICAL     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Dictionary-Cache-Usage" label="Dictionary-Cache-Usage">

| Macro           | Description                                                                                         | Default value     | Mandatory   |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGGETHITS  | Thresholds                                                                                          |                   |             |
| CRITICALGETHITS | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Event-Waits-Usage" label="Event-Waits-Usage">

| Macro                  | Description                                                                                         | Default value                          | Mandatory   |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:---------------------------------------|:-----------:|
| FILTERNAME             | Filter by event name. Can be a regex                                                                |                                        |             |
| WARNINGEVENTCOUNT      | Warning threshold                                                                                   |                                        |             |
| CRITICALEVENTCOUNT     | Critical threshold                                                                                  |                                        |             |
| WARNINGTOTALWAITSSEC   | Warning threshold                                                                                   |                                        |             |
| CRITICALTOTALWAITSSEC  | Critical threshold                                                                                  |                                        |             |
| WARNINGTOTALWAITSTIME  | Warning threshold                                                                                   |                                        |             |
| CRITICALTOTALWAITSTIME | Critical threshold                                                                                  |                                        |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose --filter-perfdata=noperfdata |             |

</TabItem>
<TabItem value="Fra-Usage" label="Fra-Usage">

| Macro                        | Description                                                                                         | Default value     | Mandatory   |
|:-----------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERTYPE                   | Filter file type (can be a regexp)                                                                  |                   |             |
| WARNINGFILESPACERECLAIMABLE  | Thresholds                                                                                          |                   |             |
| CRITICALFILESPACERECLAIMABLE | Thresholds                                                                                          |                   |             |
| WARNINGFILESPACEUSAGE        | Thresholds                                                                                          |                   |             |
| CRITICALFILESPACEUSAGE       | Thresholds                                                                                          |                   |             |
| WARNINGSPACERECLAIMABLE      | Thresholds                                                                                          |                   |             |
| CRITICALSPACERECLAIMABLE     | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGE            | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGE           | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Invalid-Object" label="Invalid-Object">

| Macro                      | Description                                                                                         | Default value     | Mandatory   |
|:---------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| RETENTIONOBJECTS           | Retention in days for invalid objects (default : 3)                                                 | 3                 |             |
| FILTERMESSAGE              | Filter by message (can be a regexp)                                                                 |                   |             |
| WARNINGINDEXES             | Warning threshold                                                                                   |                   |             |
| CRITICALINDEXES            | Critical threshold                                                                                  |                   |             |
| WARNINGINDPARTITIONS       | Warning threshold                                                                                   |                   |             |
| CRITICALINDPARTITIONS      | Critical threshold                                                                                  |                   |             |
| WARNINGINDSUBPARTITIONS    | Warning threshold                                                                                   |                   |             |
| CRITICALINDSUBPARTITIONS   | Critical threshold                                                                                  |                   |             |
| WARNINGOBJECTS             | Warning threshold                                                                                   |                   |             |
| CRITICALOBJECTS            | Critical threshold                                                                                  |                   |             |
| WARNINGREGISTRYCOMPONENTS  | Warning threshold                                                                                   |                   |             |
| CRITICALREGISTRYCOMPONENTS | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Library-Cache-Usage" label="Library-Cache-Usage">

| Macro            | Description                                                                                         | Default value     | Mandatory   |
|:-----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGGETHITS   | Thresholds                                                                                          |                   |             |
| CRITICALGETHITS  | Thresholds                                                                                          |                   |             |
| WARNINGINVALIDS  |                                                                                                     |                   |             |
| CRITICALINVALIDS |                                                                                                     |                   |             |
| WARNINGPINHITS   | Thresholds                                                                                          |                   |             |
| CRITICALPINHITS  | Thresholds                                                                                          |                   |             |
| WARNINGRELOADS   | Thresholds                                                                                          |                   |             |
| CRITICALRELOADS  | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Macro          | Description                                                                                                                                                     | Default value     | Mandatory   |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: '') You can use the following variables: %{username}, %{sql\_text}, %{since}, %{status}   |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{username}, %{sql\_text}, %{since}, %{status} |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                             |                   |             |

</TabItem>
<TabItem value="Process-Usage" label="Process-Usage">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                   |                   |             |
| CRITICAL     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Redolog-Usage" label="Redolog-Usage">

| Macro              | Description                                                                                         | Default value     | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGRETRYRATIO  | Thresholds                                                                                          |                   |             |
| CRITICALRETRYRATIO | Thresholds                                                                                          |                   |             |
| WARNINGTRAFFICIO   | Thresholds                                                                                          |                   |             |
| CRITICALTRAFFICIO  | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Rman-Backup-Age" label="Rman-Backup-Age">

| Macro               | Description                                                                                         | Default value     | Mandatory   |
|:--------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGARCHIVELOG   | Warning threshold in seconds                                                                        |                   |             |
| CRITICALARCHIVELOG  | Critical threshold in seconds. * Skip error if never executed                                       |                   |             |
| WARNINGCONTROLFILE  | Warning threshold in seconds                                                                        |                   |             |
| CRITICALCONTROLFILE | Critical threshold in seconds. * Skip error if never executed                                       |                   |             |
| WARNINGDBFULL       | Warning threshold in seconds                                                                        |                   |             |
| CRITICALDBFULL      | Critical threshold in seconds. * Skip error if never executed                                       |                   |             |
| WARNINGDBINCR       | Warning threshold in seconds                                                                        |                   |             |
| CRITICALDBINCR      | Critical threshold in seconds. * Skip error if never executed                                       |                   |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Rman-Backup-Online-Age" label="Rman-Backup-Online-Age">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in seconds                                                                        |                   |             |
| CRITICAL     | Critical threshold in seconds                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Rman-Backup-Problems" label="Rman-Backup-Problems">

| Macro                     | Description                                                                                         | Default value     | Mandatory   |
|:--------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| RETENTION                 | Retention in days (default: 3)                                                                      | 3                 |             |
| WARNINGCOMPLETED          | Thresholds                                                                                          |                   |             |
| CRITICALCOMPLETED         | Thresholds                                                                                          |                   |             |
| WARNINGCOMPLETEDERRORS    | Thresholds                                                                                          |                   |             |
| CRITICALCOMPLETEDERRORS   | Thresholds                                                                                          |                   |             |
| WARNINGCOMPLETEDWARNINGS  | Thresholds                                                                                          |                   |             |
| CRITICALCOMPLETEDWARNINGS | Thresholds                                                                                          |                   |             |
| WARNINGFAILED             | Thresholds                                                                                          |                   |             |
| CRITICALFAILED            | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Rollback-Segment-Usage" label="Rollback-Segment-Usage">

| Macro                    | Description                                                                                         | Default value     | Mandatory   |
|:-------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBLOCKCONTENTION   | Warning threshold                                                                                   |                   |             |
| CRITICALBLOCKCONTENTION  | Critical threshold                                                                                  |                   |             |
| WARNINGEXTENDS           | Warning threshold                                                                                   |                   |             |
| CRITICALEXTENDS          | Critical threshold                                                                                  |                   |             |
| WARNINGHEADERCONTENTION  | Warning threshold                                                                                   |                   |             |
| CRITICALHEADERCONTENTION | Critical threshold                                                                                  |                   |             |
| WARNINGHITRATIO          | Warning threshold                                                                                   |                   |             |
| CRITICALHITRATIO         | Critical threshold                                                                                  |                   |             |
| WARNINGWRAPS             | Warning threshold                                                                                   |                   |             |
| CRITICALWRAPS            | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Session-Usage" label="Session-Usage">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                   |                   |             |
| CRITICAL     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Sql" label="Sql">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SQLCOMMAND   | SQL statement that returns a number                                                                 |                   | X           |
| WARNING      |                                                                                                     |                   |             |
| CRITICAL     |                                                                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Sql-String" label="Sql-String">

| Macro        | Description                                                                                                                                                                               | Default value     | Mandatory   |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SQLSTATEMENT | SQL statement that returns a string                                                                                                                                                       |                   | X           |
| VALUE        | Value column (must be one of the selected field). MANDATORY                                                                                                                               |                   |             |
| WARNING      | Define the conditions to match for the status to be WARNING. (Can be: %{key\_field}, %{value\_field}) e.g --warning-string '%{key\_field} eq 'Central' && %{value\_field} =~ /127.0.0.1/' |                   |             |
| CRITICAL     | Define the conditions to match for the status to be CRITICAL (Can be: %{key\_field} or %{value\_field})                                                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                       |                   |             |

</TabItem>
<TabItem value="Tablespace-Usage-Global" label="Tablespace-Usage-Global">

| Macro         | Description                                                                                         | Default value         | Mandatory   |
|:--------------|:----------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| EXCLUDEREGEXP | Filter tablespace by name. Can be a regex                                                           | ^(?!(SYSTEM\|SYSAUX)) |             |
| WARNING       | Warning threshold                                                                                   | 90                    |             |
| CRITICAL      | Critical threshold                                                                                  | 98                    |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose --notemp    |             |

</TabItem>
<TabItem value="Tnsping" label="Tnsping">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--hostname='10.0.0.1' \
	--port='1521' \
	--sid='SID' \
	--servicename='' \
	--username='USERNAME' \
	--password='PASSWORD' \
	--mode=rollback-segment-usage \
	--warning-extends='' \
	--critical-extends='' \
	--warning-wraps='' \
	--critical-wraps='' \
	--warning-hit-ratio='' \
	--critical-hit-ratio='' \
	--warning-block-contention='' \
	--critical-block-contention=''  \
	--warning-header-contention='' \
	--critical-header-contention='' 
```

The expected command output is shown below:

```bash
OK: Extends : 72/s Wraps : 88/s Header Contention :  16 % Block Contention :  14 % gets/waits Ratio :  16 % | 
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                         | Linked service template                                                                                    |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------|
| asm-diskgroup-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/asmdiskgroupusage.pm)]        | App-DB-Oracle-ASM-Diskgroup-Usage-Generic-Name-custom<br />App-DB-Oracle-ASM-Diskgroup-Usage-Global-custom |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]          | Not used in this Monitoring Connector                                                                      |
| connected-users [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/connectedusers.pm)]               | App-DB-Oracle-Connection-Number-custom                                                                     |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)] | App-DB-Oracle-Connection-Time-custom                                                                       |
| corrupted-blocks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/corruptedblocks.pm)]             | App-DB-Oracle-Corrupted-Blocks-custom                                                                      |
| data-files-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/datafilesstatus.pm)]            | App-DB-Oracle-Data-Files-Status-custom                                                                     |
| datacache-hitratio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/datacachehitratio.pm)]         | App-DB-Oracle-Datacache-Hitratio-custom                                                                    |
| dataguard [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/dataguard.pm)]                          | Not used in this Monitoring Connector                                                                      |
| dictionary-cache-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/dictionarycacheusage.pm)]  | App-DB-Oracle-Dictionary-Cache-Usage-custom                                                                |
| event-waits-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/eventwaitsusage.pm)]            | App-DB-Oracle-Event-Waits-Usage-custom                                                                     |
| fra-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/frausage.pm)]                           | App-DB-Oracle-Fra-Usage-custom                                                                             |
| invalid-object [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/invalidobject.pm)]                 | App-DB-Oracle-Invalid-Object-custom                                                                        |
| library-cache-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/librarycacheusage.pm)]        | App-DB-Oracle-Library-Cache-Usage-custom                                                                   |
| list-asm-diskgroups [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/listasmdiskgroups.pm)]        | Used for service discovery                                                                                 |
| list-tablespaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/listtablespaces.pm)]             | Used for service discovery                                                                                 |
| long-queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/longqueries.pm)]                     | App-DB-Oracle-Long-Queries-custom                                                                          |
| password-expiration [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/passwordexpiration.pm)]       | Not used in this Monitoring Connector                                                                      |
| process-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/processusage.pm)]                   | App-DB-Oracle-Process-Usage-custom                                                                         |
| redolog-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/redologusage.pm)]                   | App-DB-Oracle-Redolog-Usage-custom                                                                         |
| rman-backup-age [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/rmanbackupage.pm)]                | App-DB-Oracle-Rman-Backup-Age-custom                                                                       |
| rman-backup-problems [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/rmanbackupproblems.pm)]      | App-DB-Oracle-Rman-Backup-Problems-custom                                                                  |
| rman-online-backup-age [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/rmanonlinebackupage.pm)]   | App-DB-Oracle-Rman-Backup-Online-Age-custom                                                                |
| rollback-segment-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/rollbacksegmentusage.pm)]  | App-DB-Oracle-Rollback-Segment-Usage-custom                                                                |
| session-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/sessionusage.pm)]                   | App-DB-Oracle-Session-Usage-custom                                                                         |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]                        | App-DB-Oracle-Sql-Statement-Generic-custom                                                                 |
| sql-string [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sqlstring.pm)]           | App-DB-Oracle-Sql-Statement-String-Generic-custom                                                          |
| tablespace-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/tablespaceusage.pm)]             | App-DB-Oracle-Tablespace-Usage-Global-custom                                                               |
| tnsping [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/tnsping.pm)]                              | App-DB-Oracle-Tnsping-custom                                                                               |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     | Database Server Port.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --sid                                      | Database SID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --servicename                              | Database Service Name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --container                                | Change container (does an alter session set container command).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sqlmode                                  | This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-sqlmode                             | List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --multiple                                 | Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --datasource                               | Database server information, mandatory if the server's address and port are not defined in the corresponding options. The syntax depends on the database type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --username                                 | User name used to connect to the database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --password                                 | Password for the defined user name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --connect-options                          | Add connection options for the DBI connect method. Format: name=value,name2=value2,...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --connect-query                            | Execute a query just after the connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --sql-errors-exit                          | Expected status in case of DB error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --timeout                                  | Timeout in seconds for connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --exec-timeout                             | Timeout in seconds for query execution                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="ASM-Diskgroup-Usage-*" label="ASM-Diskgroup-Usage-*">

| Option                   | Description                                                                                                                                                                                                                            |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-usage          | Warning threshold.                                                                                                                                                                                                                     |
| --critical-usage         | Critical threshold.                                                                                                                                                                                                                    |
| --warning-usage-failure  | Warning threshold.                                                                                                                                                                                                                     |
| --critical-usage-failure | Critical threshold.                                                                                                                                                                                                                    |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{display}                                                                                                                |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{display}                                                                                                                |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{display}                                                                                                               |
| --warning-offline-disks  | Set warning threshold for offline disks (Default: '(%{offline\_disks} \> 0 && %{type} eq "extern") \|\| (%{offline\_disks} \> 1 && %{type} eq "high")'). You can use the following variables: %{offline\_disks}, %{type}, %{display}   |
| --critical-offline-disks | Set critical threshold for offline disks (Default: '%{offline\_disks} \> 0 && %{type} =~ /^normal\|high$/'). You can use the following variables: %{offline\_disks}, %{type}, %{display}                                               |
| --units                  | Units of thresholds (Default: '%') ('%', 'B').                                                                                                                                                                                         |
| --free                   | Thresholds are on free space left.                                                                                                                                                                                                     |
| --filter-name            | Filter by name (regexp can be used).                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Option     | Description            |
|:-----------|:-----------------------|
| --warning  | Warning threshold.     |
| --critical | Critical threshold.    |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Option     | Description                            |
|:-----------|:---------------------------------------|
| --warning  | Warning threshold in milliseconds.     |
| --critical | Critical threshold in milliseconds.    |

</TabItem>
<TabItem value="Corrupted-Blocks" label="Corrupted-Blocks">

| Option     | Description            |
|:-----------|:-----------------------|
| --warning  | Warning threshold.     |
| --critical | Critical threshold.    |

</TabItem>
<TabItem value="Data-Files-Status" label="Data-Files-Status">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used).                                                                                                                                                                                              |
| --filter-tablespace      | Filter tablespace name (can be a regexp).                                                                                                                                                                                                     |
| --filter-data-file       | Filter data file name (can be a regexp).                                                                                                                                                                                                      |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: none). You can use the following variables: %{display}, %{status}                                                                                                       |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /offline\|invalid/i'). You can use the following variables: %{display}, %{status}                                                                        |
| --warning-online-status  | Set warning threshold for online status (Default: '%{online\_status} =~ /sysoff/i'). You can use the following variables: %{display}, %{online\_status}                                                                                       |
| --critical-online-status | Set critical threshold for online status (Default: '%{online\_status} =~ /offline\|recover/i'). You can use the following variables: %{display}, %{online\_status}                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'total-traffic'.                                                                                                                                                                                                          |

</TabItem>
<TabItem value="Datacache-Hitratio" label="Datacache-Hitratio">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-usage        | Warning threshold.                                                                                                                                                                                                                            |
| --critical-usage       | Critical threshold.                                                                                                                                                                                                                           |

</TabItem>
<TabItem value="Dictionary-Cache-Usage" label="Dictionary-Cache-Usage">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'get-hits'.                                                                                                                                                                                                               |

</TabItem>
<TabItem value="Event-Waits-Usage" label="Event-Waits-Usage">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold. Can be: 'total-waits-sec', 'total-waits-time', 'event-count'.                                                                                                                                                              |
| --critical-*           | Critical threshold. Can be: 'total-waits-sec', 'total-waits-time', 'event-count'.                                                                                                                                                             |
| --filter-name          | Filter by event name. Can be a regex.                                                                                                                                                                                                         |
| --wait-time-min        | Time in ms above which we count an event as waiting                                                                                                                                                                                           |
| --show-details         | Print details of waiting events (user, query, ...) in long output                                                                                                                                                                             |

</TabItem>
<TabItem value="Fra-Usage" label="Fra-Usage">

| Option                   | Description                                                                                              |
|:-------------------------|:---------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used).                                                         |
| --filter-type            | Filter file type (can be a regexp).                                                                      |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-reclaimable', 'file-space-usage', 'file-space-reclaimable'.    |

</TabItem>
<TabItem value="Invalid-Object" label="Invalid-Object">

| Option              | Description                                                                                                        |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------|
| --filter-counters   | Only display some counters (regexp can be used). Example: --filter-counters='^indexes$'                            |
| --retention-objects | Retention in days for invalid objects (default : 3).                                                               |
| --filter-message    | Filter by message (can be a regexp).                                                                               |
| --warning-*         | Warning threshold. Can be: 'objects', 'indexes', 'ind-partitions', 'ind-subpartitions', 'registry-components'.     |
| --critical-*        | Critical threshold. Can be: 'objects', 'indexes', 'ind-partitions', 'ind-subpartitions', 'registry-components'.    |

</TabItem>
<TabItem value="Library-Cache-Usage" label="Library-Cache-Usage">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'get-hits', 'pin-hits', 'reloads', 'invalid'.                                                                                                                                                                             |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-status       | Define the conditions to match for the status to be WARNING (Default: '') You can use the following variables: %{username}, %{sql\_text}, %{since}, %{status}                                                                                 |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{username}, %{sql\_text}, %{since}, %{status}                                                                               |
| --timezone             | Timezone of oracle server (If not set, we use current server execution timezone).                                                                                                                                                             |
| --memory               | Only check new queries.                                                                                                                                                                                                                       |

</TabItem>
<TabItem value="Process-Usage" label="Process-Usage">

| Option     | Description            |
|:-----------|:-----------------------|
| --warning  | Warning threshold.     |
| --critical | Critical threshold.    |

</TabItem>
<TabItem value="Redolog-Usage" label="Redolog-Usage">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'retry-ratio', 'traffic-io'.                                                                                                                                                                                              |

</TabItem>
<TabItem value="Rman-Backup-Age" label="Rman-Backup-Age">

| Option              | Description                                                                                                                                                                                       |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-*         | Warning threshold in seconds. Can be: 'db-incr', 'db-full', 'archivelog', 'controlfile'.                                                                                                          |
| --critical-*        | Critical threshold in seconds. Can be: 'db-incr', 'db-full', 'archivelog', 'controlfile'.       --no-* Skip error if never executed. Can be: 'db-incr', 'db-full', 'archivelog', 'controlfile'.   |
| --filter-type       | Filter backup type. (type can be : 'DB INCR', 'DB FULL', 'ARCHIVELOG')                                                                                                                            |
| --skip-no-backup    | Return ok if no backup found.                                                                                                                                                                     |
| --timezone          | Timezone of oracle server (If not set, we use current server execution timezone).                                                                                                                 |
| --incremental-level | Please use the following option if your using incremental level 0 for full backup.                                                                                                                |

</TabItem>
<TabItem value="Rman-Backup-Online-Age" label="Rman-Backup-Online-Age">

| Option     | Description                                                                         |
|:-----------|:------------------------------------------------------------------------------------|
| --warning  | Warning threshold in seconds.                                                       |
| --critical | Critical threshold in seconds.                                                      |
| --timezone | Timezone of oracle server (If not set, we use current server execution timezone)    |

</TabItem>
<TabItem value="Rman-Backup-Problems" label="Rman-Backup-Problems">

| Option                   | Description                                                                             |
|:-------------------------|:----------------------------------------------------------------------------------------|
| --retention              | Retention in days (default: 3).                                                         |
| --warning-* --critical-* | Thresholds. Can be: 'completed', 'failed', 'completed-warnings', 'completed-errors'.    |

</TabItem>
<TabItem value="Rollback-Segment-Usage" label="Rollback-Segment-Usage">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold. Can be: 'header-contention', 'block-contention', 'hit-ratio', 'extends', 'wraps'.                                                                                                                                          |
| --critical-*           | Critical threshold. Can be: 'header-contention', 'block-contention', 'hit-ratio', 'extends', 'wraps'.                                                                                                                                         |

</TabItem>
<TabItem value="Session-Usage" label="Session-Usage">

| Option     | Description            |
|:-----------|:-----------------------|
| --warning  | Warning threshold.     |
| --critical | Critical threshold.    |

</TabItem>
<TabItem value="Sql" label="Sql">

| Option                   | Description                                              |
|:-------------------------|:---------------------------------------------------------|
| --sql-statement          | SQL statement that returns a number.                     |
| --format                 | Output format (Default: 'SQL statement result : %i.').   |
| --perfdata-unit          | Perfdata unit in perfdata output (Default: '')           |
| --perfdata-name          | Perfdata name in perfdata output (Default: 'value')      |
| --perfdata-min           | Minimum value to add in perfdata output (Default: '')    |
| --perfdata-max           | Maximum value to add in perfdata output (Default: '')    |
| --warning-* --critical-* | Thresholds. Can be: 'value', 'execution-time'.           |

</TabItem>
<TabItem value="Sql-String" label="Sql-String">

| Option             | Description                                                                                                                                                                                 |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --sql-statement    | SQL statement that returns a string.                                                                                                                                                        |
| --key-column       | Key column (must be one of the selected field). NOT mandatory if you select only one field                                                                                                  |
| --value-column     | Value column (must be one of the selected field). MANDATORY                                                                                                                                 |
| --printf-format    | Specify a custom output message relying on printf formatting                                                                                                                                |
| --printf-value     | Specify scalar used to replace in printf (Can be: $self-\>{result\_values}-\>{key\_field}, $self-\>{result\_values}-\>{value\_field})                                                       |
| --warning-string   | Define the conditions to match for the status to be WARNING. (Can be: %{key\_field}, %{value\_field}) e.g --warning-string '%{key\_field} eq 'Central' && %{value\_field} =~ /127.0.0.1/'   |
| --critical-string  | Define the conditions to match for the status to be CRITICAL (Can be: %{key\_field} or %{value\_field})                                                                                     |
| --dual-table       | Set this option to ensure compatibility with dual table and Oracle.                                                                                                                         |
| --empty-sql-string | Set this option to change the output message when the sql statement result is empty. (Default: 'No row returned or --key-column/--value-column do not correctly match selected field')      |

</TabItem>
<TabItem value="Tablespace-Usage-Global" label="Tablespace-Usage-Global">

| Option                | Description                                 |
|:----------------------|:--------------------------------------------|
| --warning-tablespace  | Warning threshold.                          |
| --critical-tablespace | Critical threshold.                         |
| --filter-tablespace   | Filter tablespace by name. Can be a regex   |
| --units               | Default is '%', can be 'B'                  |
| --free                | Perfdata show free space                    |
| --notemp              | skip temporary or undo tablespaces.         |
| --add-container       | Add tablespaces of container databases.     |
| --skip                | Skip offline tablespaces.                   |

</TabItem>
<TabItem value="Tnsping" label="Tnsping">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--hostname='10.0.0.1' \
	--help
```
