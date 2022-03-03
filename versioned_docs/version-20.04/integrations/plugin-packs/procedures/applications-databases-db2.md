---
id: applications-databases-db2
title: DB2 Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack DB2 collects metrics for:
* Connection-time
* Connected-users
* Database-logs
* Database-usage
* Hadr
* Tablespaces

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Rule name                  | Description                            |
| :------------------------- | :------------------------------------- |
| App-DB-Db2-Tablespace-Name | Discover tablespaces and monitor usage |

</TabItem>
</Tabs>

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Connection-time" label="Connection-time">

| Metric name           | Description                        | Unit  |
| :--------------------------- | :-------------------------- | :---- |
| connection.time.milliseconds | Connection established time | ms    |

</TabItem>
<TabItem value="Connected-users" label="Connected-users">

| Metric name           | Description               | Unit  |
| :-------------------- | :------------------------ | :---- |
| users.connected.count | Number of connected users |       |

</TabItem>
<TabItem value="Database-logs" label="Database-logs">

| Metric name                                                    | Description              | Unit  |
| :------------------------------------------------------------- | :----------------------- | :---- |
| *db\_name~partition\_num*\#database.log.space.usage.bytes      | Used space               | B     |
| *db\_name~partition\_num*\#database.log.space.free.bytes       | Free space               | B     |
| *db\_name~partition\_num*\#database.log.space.usage.percentage | Used space in percentage | %     |

</TabItem>
<TabItem value="Database-usage" label="Database-usage">

| Metric name                                 | Description              | Unit  |
| :------------------------------------------ | :----------------------- | :---- |
| *db\_name*\#database.space.usage.bytes      | Used space               | B     |
| *db\_name*\#database.space.free.bytes       | Free space               | B     |
| *db\_name*\#database.space.usage.percentage | Used space in percentage | %     |

</TabItem>
<TabItem value="Hadr" label="Hadr">

| Metric name                                | Description                                                                           | Unit  |
| :----------------------------------------- | :------------------------------------------------------------------------------------ | :---- |
| hadr.instances.standby.count               | Number of standby instances                                                           |       |
| hadr connection status                     | The current high availability disaster recovery connection status of the database     |       |
| hadr state                                 | The current high availability disaster recovery state of the database                 |       |
| *standby\_id*\#hadr.instance.log.gap.bytes | Recent average of the gap between the PRIMARY_LOG_POS value and STANDBY_LOG_POS value | B     |

</TabItem>
<TabItem value="Tablespaces" label="Tablespaces">

| Metric name                                                    | Description              | Unit  |
| :------------------------------------------------------------- | :----------------------- | :---- |
| tablespace status                                              | Tablespace state         |       |
| *db\_name~tablespace\_name*\#tablespace.space.usage.bytes      | Used space               | B     |
| *db\_name~tablespace\_name*\#tablespace.space.free.bytes       | Free space               | B     |
| *db\_name~tablespace\_name*\#tablespace.space.usage.percentage | Used space in percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

### Install Plugin dependencies

#### RPM

In order to use this Pack, the `wget` command-line tool and the GNU Compiler Collection (`gcc`) are necessary.

```bash
yum install -y gcc wget ksh
```

#### DB2 driver package

Go to your IBM support website and download the archive `data_server_driver_package_linuxx64_v11.5.tar.gz`.

Install the archive manually:

```bash
tar zxf ibm_data_server_driver_package_linuxx64_v11.5.tar.gz
mv dsdriver/ /opt/
cd /opt/dsdriver/
./installDSDriver
echo "/opt/dsdriver/lib/" > /etc/ld.so.conf.d/db2-x86_64.conf
/sbin/ldconfig
```

#### Perl library for DB2

As root, run:

```bash
cd /usr/local/src 
wget https://cpan.metacpan.org/authors/id/R/RO/ROCKETDB/DBD-DB2-1.89.tar.gz
tar zxvf DBD-DB2-1.89.tar.gz
cd DBD-DB2-1.89/
export DB2LIB=/opt/dsdriver/lib/
export DB2_HOME=/opt/dsdriver/
perl Makefile.PL
```

Compile the library:

```bash
make
```

Install it:

```bash
make install
```

### User account

The safest way to retrieve information from the DB2 server is to create a dedicated user for Centreon.

This user account must have the read permission on following tables:
- syscat.tablespaces
- sysibmadm.applications
- sysibmadm.container_utilization
- sysibmadm.log_utilization
- sysibmadm.tbsp_utilization

This user must have the permission to execute the `SYSPROC.GET_DBSIZE_INFO` procedure.

Eventually, this user must have the authority `SYSMON`.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Databases-Db2
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *DB2 Database* Pack

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Databases-Db2
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-applications-databases-db2
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *DB2 Database* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and apply the *App-DB-Db2-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | DB2PORT         | Port used (Default: 50000)                                                 |
| X         | DB2DATABASE     | Name for the Db2 database system                                           |
| X         | DB2USERNAME     | DB2 username account                                                       |
| X         | DB2PASSWORD     | DB2 password account                                                       |
|           | DB2EXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command (Parameters such as ```username``` or ```password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_database_db2.pl \
    --plugin=database::db2::plugin \
    --mode=database-usage \
    --server='10.30.2.79' \
    --database='TEST' \
    --port='50000' \
    --username='myusername' \
    --password='mypassword' \
    --verbose
```

Expected command output is shown below:

```bash
OK: database 'TEST' space usage total: 99.84 GB used: 698.34 MB (0.68%) free: 99.16 GB (99.32%) | 'TEST#database.space.usage.bytes'=732266496B;;;0;107204739072 'TEST#database.space.free.bytes'=106472472576B;;;0;107204739072 'TEST#database.space.usage.percentage'=0.68%;;;0;100
```

The command above monitors database space usage (```--mode=database-usage```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_database_db2.pl \
    --plugin=database::db2::plugin \
    --mode=database-usage \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins.md)