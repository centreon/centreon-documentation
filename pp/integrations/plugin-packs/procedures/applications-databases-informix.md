---
id: applications-databases-informix
title: Informix DB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Informix DB** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Informix DB** brings a host template:

* **App-DB-Informix-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-DB-Informix-custom" label="App-DB-Informix-custom">

| Service Alias        | Service Template                            | Service Description                                                                |
|:---------------------|:--------------------------------------------|:-----------------------------------------------------------------------------------|
| Archivelevel0-Global | App-DB-Informix-Archivelevel0-Global-custom | Check archive level0 backup last execution                                         |
| Checkpoints          | App-DB-Informix-Checkpoints-custom          | Check Informix Checkpoints                                                         |
| Chunk-Down-Global    | App-DB-Informix-Chunk-Down-Global-custom    | Check chunk state                                                                 |
| Connection           | App-DB-Informix-Connection-custom           | Check connection to the Informix server                                            |
| Global-Cache         | App-DB-Informix-Global-Cache-custom         | Check read/write caches                                                            |
| Lockoverflow         | App-DB-Informix-Lockoverflow-custom         | Check the number of times Informix attempted to exceed the maximum number of locks |
| Longtxs              | App-DB-Informix-Longtxs-custom              | Check number of current long transactions                                          |
| Sessions             | App-DB-Informix-Sessions-custom             | Check current sessions                                                             |

> The services listed above are created automatically when the **App-DB-Informix-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias              | Service Template                                  | Service Description                        |
|:---------------------------|:--------------------------------------------------|:-------------------------------------------|
| Archivelevel0-Generic-Name | App-DB-Informix-Archivelevel0-Generic-Name-custom | Check archive level0 backup last execution |
| Dbspace-Usage-Generic-Name | App-DB-Informix-Dbspace-Usage-Generic-Name-custom | Check dbspace usage                        |
| Dbspace-Usage-Global       | App-DB-Informix-Dbspace-Usage-Global-custom       | Check dbspace usage                        |
| Logfiles-Usage             | App-DB-Informix-Logfiles-Usage-custom             | Check usage for log files                  |
| Sql-Statement              | App-DB-Informix-Sql-Statement-custom              | Check SQL statement                        |
| Table-Locks-Generic-Name   | App-DB-Informix-Table-Locks-Generic-Name-custom   | Check table locks on one database          |
| Table-Locks-Global         | App-DB-Informix-Table-Locks-Global-custom         | Check table locks                          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Archivelevel0-*" label="Archivelevel0-*">

| Name                         | Unit |
|:-----------------------------|:-----|
| seconds.#archive-level0-name | s    |

</TabItem>
<TabItem value="Checkpoints" label="Checkpoints">

| Name                                    | Unit |
|:----------------------------------------|:-----|
| cp\_.#checkpoint-name\_checkpoint-id    | s    |
| block\_.#checkpoint-name\_checkpoint-id | s    |
| flush\_.#checkpoint-name\_checkpoint-id | s    |
| crit\_.#checkpoint-name\_checkpoint-id  | s    |

</TabItem>
<TabItem value="Chunk-Down-Global" label="Chunk-Down-Global">

| Name        | Unit  |
|:------------|:------|
| chunk.state | N/A   |
| chunk.count | count |

</TabItem>
<TabItem value="Connection" label="Connection">

| Name                         | Unit |
|:-----------------------------|:-----|
| connection.time.milliseconds | ms   |

</TabItem>
<TabItem value="Dbspace-Usage-*" label="Dbspace-Usage-*">

| Name               | Unit |
|:-------------------|:-----|
| used.#dbspace-name | %    |

</TabItem>
<TabItem value="Global-Cache" label="Global-Cache">

| Name        | Unit |
|:------------|:-----|
| readcached  | %    |
| writecached | %    |


</TabItem>
<TabItem value="Lockoverflow" label="Lockoverflow">

| Name   | Unit |
|:-------|:-----|
| ovlock | N/A  |

</TabItem>
<TabItem value="Logfiles-Usage" label="Logfiles-Usage">

| Name             | Unit |
|:-----------------|:-----|
| used.#logfile-id | %    |

</TabItem>
<TabItem value="Longtxs" label="Longtxs">

| Name  | Unit  |
|:------|:------|
| count | count |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Name     | Unit |
|:---------|:-----|
| sessions | N/A  |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Name                              | Unit |
|:----------------------------------|:-----|
| value                             | N/A  |
| sqlrequest.execution.time.seconds | s    |

</TabItem>
<TabItem value="Table-Locks-*" label="Table-Locks-*">

| Name                         | Unit  |
|:-----------------------------|:------|
| db\_deadlks\dbname           | count |
| db\_lockwts\dbname           | count |
| db\_lockreqs\dbname          | count |
| db\_lktouts\dbname           | count |
| tbl\_deadlks\dbname.tabname  | count |
| tbl\_lockwts\dbname.tabname  | count |
| tbl\_lockreqs\dbname.tabname | count |
| tbl\_lktouts\dbname.tabname  | count |

</TabItem>
</Tabs>

## Prerequisites

You need to download the "Informix Client Software Development Kit" on the [IBM website](https://www.ibm.com/support/pages/informix-client-software-development-kit-client-sdk-and-informix-connect-system-requirements).

Install the SDK with the following procedure:
1. Copy the archive on the poller.
2. Create an **informix** user:

```
useradd informix chmod 775 /home/informix
``` 

3. Install Sun JRE (as explained in the IBM procedure).
4. Install the SDK (select**Typical Installation**): 

```
./installclientsdk -javahome /usr/java/jreXXXX/ ....
```

5. Specify a directory or press **Enter** to accept the default directory. 
Directory Name: `[/root/informix/sdkclient/] /home/informix/sdkclient` 

### Perl DBD Informix

1. To compile Informix DBD, you need access to an Informix Database. Run:

```
cd /usr/local/src
wget http://search.cpan.org/CPAN/authors/id/J/JO/JOHNL/DBD-Informix-2013.0521.tar.gz
tar xzf DBD-Informix-2013.0521.tar.gz
cd DBD-Informix-2013.0521
export INFORMIXDIR=/home/informix/sdkclient
export LD_LIBRARY_PATH=$ORACLE_HOME/lib
export PATH=${PATH}:/home/informix/sdkclient/bin
export LD_LIBRARY_PATH=/home/informix/sdkclient/lib/esql/:/home/informix/sdkclient/lib/
export DBD_INFORMIX_USERNAME=root
export DBD_INFORMIX_PASSWORD=xxxx # export DBD_INFORMIX_DATABASE=xxxx
```

Set a value for **Informix Instance** in the `/home/informix/sdkclient/etc/sqlhosts` file:

```
INSTANCE onsoctcp IP PORT
```

1. Compile the library:

```
$ perl Makefile.PL 
$ make
$ make install
```

2. Create the file `/etc/ld.so.conf.d/informix.conf` 
3. Link to the Informix Library:

```
$ touch /etc/ld.so.conf.d/informix.conf 
vi /etc/ld.so.conf.d/informix.conf
```

You just have to enter in the file:

`/home/informix/sdkclient/lib/esql/ /home/informix/sdkclient/lib/`

Then:

`/sbin/ldconfig`

### About the user account

The safest way to retrieve information from the Oracle server is to create a dedicated user for Centreon.
This user account must have the read permission on `sysmaster` database.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-databases-informix
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-informix
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-informix
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-informix
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Informix DB** connector through
the **Configuration > Monitoring Connector Manager** menu.

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
dnf install centreon-plugin-Applications-Databases-Informix
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Informix
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-informix
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Informix
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-DB-Informix-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description            | Default value     | Mandatory   |
|:---------------------|:-----------------------|:------------------|:-----------:|
| INFORMIXUSERNAME     | Database Username      |                   |             |
| INFORMIXPASSWORD     | Database password      |                   |             |
| INFORMIXPORT         | Database Server Port   | 33333             |             |
| INFORMIXINSTANCENAME | Database Instance Name |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Archivelevel0-Generic-Name" label="Archivelevel0-Generic-Name">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DBSPACENAME  | Set the dbspace (empty means 'check all dbspaces')                                                                                     |                   |             |
| WARNING      | Warning threshold in seconds since last execution                                                                                      |                   |             |
| CRITICAL     | Critical threshold in seconds since last execution                                                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Archivelevel0-Global" label="Archivelevel0-Global">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Set the dbspace (empty means 'check all dbspaces')                                                                                     | .*                |             |
| WARNING      | Warning threshold in seconds since last execution                                                                                      |                   |             |
| CRITICAL     | Critical threshold in seconds since last execution                                                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Checkpoints" label="Checkpoints">

| Macro         | Description                                                                                                                            | Default value                 | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| FILTERTRIGGER | Filter events that can trigger a checkpoint with a regexp                                                                              |                               |             |
| WARNINGBLOCK  | Warning threshold 'block\_time' in seconds                                                                                             |                               |             |
| CRITICALBLOCK | Critical threshold 'block\_time' in seconds                                                                                            |                               |             |
| WARNINGCP     | Warning threshold 'cp\_time' in seconds                                                                                                |                               |             |
| CRITICALCP    | Critical threshold 'cp\_time' in seconds                                                                                               |                               |             |
| WARNINGCRIT   | Warning threshold 'crit\_time' in seconds                                                                                              |                               |             |
| CRITICALCRIT  | Critical threshold 'crit\_time' in seconds                                                                                             |                               |             |
| WARNINGFLUSH  | Warning threshold 'flush\_time' in seconds                                                                                             |                               |             |
| CRITICALFLUSH | Critical threshold 'flush\_time' in seconds                                                                                            |                               |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --filter-perfdata='^(?!(.*))' |             |

</TabItem>
<TabItem value="Chunk-Down-Global" label="Chunk-Down-Global">

| Macro        | Description                                                                                                                            | Default value      | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| STATE        | State to check (can be: is\_offline, is\_recovering, is\_blobchunk, is\_inconsistent)                                                  | is\_offline        |             |
| FILTER       | Set the dbspace (empty means 'check all dbspaces')                                                                                     | .*                 |             |
| GLOBALOKMSG  | Display global message when you have no errors                                                                                         | All chunks are ok. |             |
| OKMSG        | Display message when chunk is ok                                                                                                       | Chunk %s is ok     |             |
| ERRORMSG     | Display message when you have an error                                                                                                 | Chunk %s is down   |             |
| WARNING      | Warning threshold (can check 1 or 0)                                                                                                   | @1:1               |             |
| CRITICAL     | Critical threshold (can check 1 or 0)                                                                                                  |                    |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose          |             |

</TabItem>
<TabItem value="Connection" label="Connection">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in milliseconds                                                                                                      |                   |             |
| CRITICAL     | Critical threshold in milliseconds                                                                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Dbspace-Usage-Generic-Name" label="Dbspace-Usage-Generic-Name">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DBSPACENAME  | Set the dbspace (empty means 'check all dbspaces')                                                                                     |                   |             |
| WARNING      | Warning threshold in percent                                                                                                           | 80                |             |
| CRITICAL     | Critical threshold in percent                                                                                                          | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Dbspace-Usage-Global" label="Dbspace-Usage-Global">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Set the dbspace (empty means 'check all dbspaces')                                                                                     | .*                |             |
| WARNING      | Warning threshold in percent                                                                                                           | 80                |             |
| CRITICAL     | Critical threshold in percent                                                                                                          | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Global-Cache" label="Global-Cache">

| Macro         | Description                                                                                                                            | Default value     | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGREAD   | Threshold read cached warning in percent                                                                                               |                   |             |
| CRITICALREAD  | Threshold read cached critical in percent                                                                                              |                   |             |
| WARNINGWRITE  | Threshold write cached warning in percent                                                                                              |                   |             |
| CRITICALWRITE | Threshold write cached critical in percent                                                                                             |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Lockoverflow" label="Lockoverflow">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in absolute                                                                                                          |                   |             |
| CRITICAL     | Critical threshold in absolute                                                                                                         |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Logfiles-Usage" label="Logfiles-Usage">

| Macro        | Description                                                                                                                            | Default value                           | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|:-----------:|
| CRITICAL     | Critical threshold in percent                                                                                                          |                                         |             |
| WARNING      | Warning threshold in percent                                                                                                           |                                         |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose --filter-perfdata='^(?!(.*))' |             |

</TabItem>
<TabItem value="Longtxs" label="Longtxs">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in absolute                                                                                                          |                   |             |
| CRITICAL     | Critical threshold in absolute                                                                                                         |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                                                      |                   |             |
| CRITICAL     | Critical threshold                                                                                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Macro        | Description                                                                                                                            | Default value     | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:---------:|
| SQLSTATEMENT | SQL statement that returns a number                                                                                                    |                   |     X     |
| WARNING      | Warning threshold                                                                                                                      |                   |           |
| CRITICAL     | Critical threshold                                                                                                                     |                   |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |           |

</TabItem>
<TabItem value="Table-Locks-Generic-Name" label="Table-Locks-Generic-Name">

| Macro            | Description                                                                                                                            | Default value              | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| DBNAME           | Set the database (empty means 'check all databases')                                                                                   |                            |             |
| WARNINGDEADLKS   | Warning threshold 'deadlks' in absolute                                                                                                |                            |             |
| CRITICALDEADLKS  | Critical threshold 'deadlks' in absolute                                                                                               |                            |             |
| WARNINGLKTOUTS   | Warning threshold 'lktouts' in absolute                                                                                                |                            |             |
| CRITICALLKTOUTS  | Critical threshold 'lktouts' in absolute                                                                                               |                            |             |
| WARNINGLOCKREQS  | Warning threshold 'lockreqs' in absolute                                                                                               |                            |             |
| CRITICALLOCKREQS | Critical threshold 'lockreqs' in absolute                                                                                              |                            |             |
| WARNINGLOCKWTS   | Warning threshold 'lockwts' in absolute                                                                                                |                            |             |
| CRITICALLOCKWTS  | Critical threshold 'lockwts' in absolute                                                                                               |                            |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --only-databases --verbose |             |

</TabItem>
<TabItem value="Table-Locks-Global" label="Table-Locks-Global">

| Macro            | Description                                                                                                                            | Default value              | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| DBFILTER         | Set the database (empty means 'check all databases')                                                                                   | .*                         |             |
| WARNINGDEADLKS   | Warning threshold 'deadlks' in absolute                                                                                                |                            |             |
| CRITICALDEADLKS  | Critical threshold 'deadlks' in absolute                                                                                               |                            |             |
| WARNINGLKTOUTS   | Warning threshold 'lktouts' in absolute                                                                                                |                            |             |
| CRITICALLKTOUTS  | Critical threshold 'lktouts' in absolute                                                                                               |                            |             |
| WARNINGLOCKREQS  | Warning threshold 'lockreqs' in absolute                                                                                               |                            |             |
| CRITICALLOCKREQS | Critical threshold 'lockreqs' in absolute                                                                                              |                            |             |
| WARNINGLOCKWTS   | Warning threshold 'lockwts' in absolute                                                                                                |                            |             |
| CRITICALLOCKWTS  | Critical threshold 'lockwts' in absolute                                                                                               |                            |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --only-databases --verbose |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_informix.pl \
	--plugin=database::informix::sql::plugin \
	--host=10.0.0.1 \
	--username='' \
	--password='' \
	--port='33333' \
	--mode='sql' \
	--sql-statement="" \
	--warning='' \
	--critical='' 
```

The expected command output is shown below:

```bash
OK:  execution time: 67851 second(s) | 'value'=11007;;;; 'sqlrequest.execution.time.seconds'=67851s;;;0; 
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
/usr/lib/centreon/plugins/centreon_informix.pl \
	--plugin=database::informix::sql::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                         | Linked service template                                                                            |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------|
| archivelevel0 [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/archivelevel0.pm)]            | App-DB-Informix-Archivelevel0-Generic-Name-custom<br />App-DB-Informix-Archivelevel0-Global-custom |
| checkpoints [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/checkpoints.pm)]                | App-DB-Informix-Checkpoints-custom                                                                 |
| chunkstates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/chunkstates.pm)]                | App-DB-Informix-Chunk-Down-Global-custom                                                           |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]          | Not used in this Monitoring Connector                                                              |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)] | App-DB-Informix-Connection-custom                                                                  |
| dbspace-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/dbspacesusage.pm)]            | App-DB-Informix-Dbspace-Usage-Generic-Name-custom<br />App-DB-Informix-Dbspace-Usage-Global-custom |
| global-cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/globalcache.pm)]               | App-DB-Informix-Global-Cache-custom                                                                |
| list-databases [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/listdatabases.pm)]           | Not used in this Monitoring Connector                                                              |
| list-dbspaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/listdbspaces.pm)]             | Not used in this Monitoring Connector                                                              |
| lockoverflow [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/lockoverflow.pm)]              | App-DB-Informix-Lockoverflow-custom                                                                |
| logfile-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/logfilesusage.pm)]            | App-DB-Informix-Logfiles-Usage-custom                                                              |
| longtxs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/longtxs.pm)]                        | App-DB-Informix-Longtxs-custom                                                                     |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/db_instance.pm)]                                                  | Not used in this Monitoring Connector                                                              |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/sessions.pm)]                      | App-DB-Informix-Sessions-custom                                                                    |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]                        | App-DB-Informix-Sql-Statement-custom                                                               |
| table-locks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/tablelocks.pm)]                 | App-DB-Informix-Table-Locks-Generic-Name-custom<br />App-DB-Informix-Table-Locks-Global-custom     |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --sqlmode                                  |   This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-sqlmode                             |   List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --multiple                                 |   Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --host                                     |   Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --port                                     |   Database Server Port.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --instance                                 |   Database Instance Name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Archivelevel0-*" label="Archivelevel0-*">

| Option     | Description                                                        |
|:-----------|:-------------------------------------------------------------------|
| --warning  |   Warning threshold in seconds since last execution.               |
| --critical |   Critical threshold in seconds since last execution.              |
| --name     |   Set the dbspace (empty means 'check all dbspaces').              |
| --regexp   |   Allows to use regexp to filter dbspaces (with option --name).    |

</TabItem>
<TabItem value="Checkpoints" label="Checkpoints">

| Option           | Description                                                     |
|:-----------------|:----------------------------------------------------------------|
| --warning-cp     |   Warning threshold 'cp\_time' in seconds.                      |
| --critical-cp    |   Critical threshold 'cp\_time' in seconds.                     |
| --warning-flush  |   Warning threshold 'flush\_time' in seconds.                   |
| --critical-flush |   Critical threshold 'flush\_time' in seconds.                  |
| --warning-crit   |   Warning threshold 'crit\_time' in seconds.                    |
| --critical-crit  |   Critical threshold 'crit\_time' in seconds.                   |
| --warning-block  |   Warning threshold 'block\_time' in seconds.                   |
| --critical-block |   Critical threshold 'block\_time' in seconds.                  |
| --filter-trigger |   Filter events that can trigger a checkpoint with a regexp.    |

</TabItem>
<TabItem value="Chunk-Down-Global" label="Chunk-Down-Global">

| Option          | Description                                                                                |
|:----------------|:-------------------------------------------------------------------------------------------|
| --warning       |   Warning threshold (can check 1 or 0).                                                    |
| --critical      |   Critical threshold (can check 1 or 0).                                                   |
| --chunk-state   |   State to check (can be: is\_offline, is\_recovering, is\_blobchunk, is\_inconsistent).   |
| --error-msg     |   Display message when you have an error. (default: 'Chunk %s has a problem')              |
| --ok-msg        |   Display message when chunk is ok. (default: 'Chunk %s is ok')                            |
| --global-ok-msg |   Display global message when you have no errors. (default: 'All chunks are ok')           |
| --name          |   Set the dbspace (empty means 'check all dbspaces').                                      |
| --regexp        |   Allows to use regexp to filter dbspaces (with option --name).                            |

</TabItem>
<TabItem value="Connection" label="Connection">

| Option     | Description                              |
|:-----------|:-----------------------------------------|
| --warning  |   Warning threshold in milliseconds.     |
| --critical |   Critical threshold in milliseconds.    |

</TabItem>
<TabItem value="Dbspace-Usage-*" label="Dbspace-Usage-*">

| Option     | Description                                                        |
|:-----------|:-------------------------------------------------------------------|
| --warning  |   Warning threshold in percent.                                    |
| --critical |   Critical threshold in percent.                                   |
| --name     |   Set the dbspace (empty means 'check all dbspaces').              |
| --regexp   |   Allows to use regexp to filter dbspaces (with option --name).    |

</TabItem>
<TabItem value="Global-Cache" label="Global-Cache">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-read         |   Threshold read cached warning in percent.                                                                                                                                                                                                     |
| --critical-read        |   Threshold read cached critical in percent.                                                                                                                                                                                                    |
| --warning-write        |   Threshold write cached warning in percent.                                                                                                                                                                                                    |
| --critical-write       |   Threshold write cached critical in percent.                                                                                                                                                                                                   |
| --lookback             |   Threshold isn't on the percent calculated from the difference ('xxxcached\_now').                                                                                                                                                             |

</TabItem>
<TabItem value="Lockoverflow" label="Lockoverflow">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning              |   Warning threshold in absolute.                                                                                                                                                                                                                |
| --critical             |   Critical threshold in absolute.                                                                                                                                                                                                               |

</TabItem>
<TabItem value="Logfiles-Usage" label="Logfiles-Usage">

| Option     | Description                         |
|:-----------|:------------------------------------|
| --warning  |   Warning threshold in percent.     |
| --critical |   Critical threshold in percent.    |

</TabItem>
<TabItem value="Longtxs" label="Longtxs">

| Option     | Description                          |
|:-----------|:-------------------------------------|
| --warning  |   Warning threshold in absolute.     |
| --critical |   Critical threshold in absolute.    |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option     | Description              |
|:-----------|:-------------------------|
| --warning  |   Warning threshold.     |
| --critical |   Critical threshold.    |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --sql-statement          |   SQL statement that returns a number.                                                                                        |
| --format                 |   Output format (default: 'SQL statement result : %i.').                                                                      |
| --perfdata-unit          |   Perfdata unit in perfdata output (default: '')                                                                              |
| --perfdata-name          |   Perfdata name in perfdata output (default: 'value')                                                                         |
| --perfdata-min           |   Minimum value to add in perfdata output (default: '')                                                                       |
| --perfdata-max           |   Maximum value to add in perfdata output (default: '')                                                                       |
| --warning-* --critical-* |   Thresholds. Can be: 'value', 'execution-time'.                                                                              |

</TabItem>
<TabItem value="Table-Locks-*" label="Table-Locks-*">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-deadlks      |   Warning threshold 'deadlks' in absolute.                                                                                                                                                                                                      |
| --critical-deadlks     |   Critical threshold 'deadlks' in absolute.                                                                                                                                                                                                     |
| --warning-lockwts      |   Warning threshold 'lockwts' in absolute.                                                                                                                                                                                                      |
| --critical-lockwts     |   Critical threshold 'lockwts' in absolute.                                                                                                                                                                                                     |
| --warning-lockreqs     |   Warning threshold 'lockreqs' in absolute.                                                                                                                                                                                                     |
| --critical-lockreqs    |   Critical threshold 'lockreqs' in absolute.                                                                                                                                                                                                    |
| --warning-lktouts      |   Warning threshold 'lktouts' in absolute.                                                                                                                                                                                                      |
| --critical-lktouts     |   Critical threshold 'lktouts' in absolute.                                                                                                                                                                                                     |
| --name                 |   Set the database (empty means 'check all databases').                                                                                                                                                                                         |
| --regexp               |   Allows to use regexp to filter database (with option --name).                                                                                                                                                                                 |
| --filter-tables        |   Filter tables (format of a table name: 'sysmater.dual').                                                                                                                                                                                      |
| --only-databases       |   only check locks globally on database (no output for tables).                                                                                                                                                                                 |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_informix.pl \
	--plugin=database::informix::sql::plugin \
	--host=10.0.0.1 \
	--help
```
