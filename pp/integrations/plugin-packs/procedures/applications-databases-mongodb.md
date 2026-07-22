---
id: applications-databases-mongodb
title: MongoDB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **MongoDB** connector through the
**Configuration > > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **MongoDB** brings a host template:

* **App-DB-Mongodb-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-DB-Mongodb-custom" label="App-DB-Mongodb-custom">

| Service Alias         | Service Template                            | Service Description                         | Discovery |
|:----------------------|:--------------------------------------------|:--------------------------------------------|:---------:|
| Collection-Statistics | App-DB-Mongodb-Collection-Statistics-custom | Check collection statistics, per database |     X     |
| Connection-Time       | App-DB-Mongodb-Connection-Time-custom       | Check connection time to instance           |           |
| Connections           | App-DB-Mongodb-Connections-custom           |  Check the number of connections                    |           |
| Database-Statistics   | App-DB-Mongodb-Database-Statistics-custom   | Check database statistics                  |     X     |
| Queries               | App-DB-Mongodb-Queries-custom               | Check queries per second                   |           |

> The services listed above are created automatically when the **App-DB-Mongodb-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias      | Service Template                         | Service Description                         |
|:-------------------|:-----------------------------------------|:--------------------------------------------|
| Replication-Status | App-DB-Mongodb-Replication-Status-custom | Check replicaset members replication status |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                            | Description                                            |
|:-------------------------------------|:-------------------------------------------------------|
| App-DB-Mongodb-Collection-Statistics | Discover databases and monitor collections utilization |
| App-DB-Mongodb-Database-Statistics   | Discover databases and monitor utilization             |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Collection-Statistics" label="Collection-Statistics">

| Name                                                    | Unit  |
|:--------------------------------------------------------|:------|
| *databases*~*collections*#collection.size.storage.bytes | B     |
| *databases*~*collections*#collection.size.index.bytes   | B     |
| *databases*~*collections*#collection.documents.count    | count |
| *databases*~*collections*#collection.indexes.count      | count |
| *databases*~*shards*#collection.size.storage.bytes      | B     |
| *databases*~*shards*#collection.size.index.bytes        | B     |
| *databases*~*shards*#collection.documents.count         | count |
| *databases*~*shards*#collection.indexes.count           | count |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Name                         | Unit  |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Connections" label="Connections">

| Name                         | Unit  |
|:-----------------------------|:------|
| connections.active.count     | count |
| connections.current.count    | count |
| connections.usage.percentage | %     |
| total-created                | N/A   |

</TabItem>
<TabItem value="Database-Statistics" label="Database-Statistics">

| Name                                    | Unit  |
|:----------------------------------------|:------|
| *databases*#database.size.storage.bytes | B     |
| *databases*#database.size.data.bytes    | B     |
| *databases*#database.size.index.bytes   | B     |
| *databases*#database.collections.count  | count |
| *databases*#database.views.count        | count |
| *databases*#database.documents.count    | count |
| *databases*#database.indexes.count      | count |
| *shards*#database.size.storage.bytes    | B     |
| *shards*#database.size.data.bytes       | B     |
| *shards*#database.size.index.bytes      | B     |
| *shards*#database.collections.count     | count |
| *shards*#database.views.count           | count |
| *shards*#database.documents.count       | count |
| *shards*#database.indexes.count         | count |

</TabItem>
<TabItem value="Queries" label="Queries">

| Name                      | Unit  |
|:--------------------------|:------|
| queries.total.persecond   | /s    |
| queries.insert.persecond  | /s    |
| queries.query.persecond   | /s    |
| queries.update.persecond  | /s    |
| queries.delete.persecond  | /s    |
| queries.getmore.persecond | /s    |
| queries.command.persecond | /s    |

</TabItem>
<TabItem value="Replication-Status" label="Replication-Status">

| Name                              | Unit  |
|:----------------------------------|:------|
| status                            | N/A   |
| members.primary.count             | count |
| members.secondary.count           | count |
| members.arbiter.count             | count |
| member-status                     | N/A   |
| *members*#replication.lag.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

Listing of user privileges needed by service:

| Service               | Privileges                                         | Database         |
|:----------------------|:---------------------------------------------------|:-----------------|
| Collection-Statistics | ping, listDatabases, listCollections, collStats    | admin            |
| Connection-Time       | ping                                               | admin            |
| Connections           | ping, serverStatus                                 | admin            |
| Database-Statistics   | ping, listDatabases, dbStats                       | admin            |
| Queries               | ping, serverStatus                                 | admin            |
| Replication-Status    | ping, ismaster, replSetGetConfig, replSetGetStatus | admin            |

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-databases-mongodb
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-mongodb
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-mongodb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-mongodb
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **MongoDB** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

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
dnf install centreon-plugin-Applications-Databases-Mongodb
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Mongodb
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-mongodb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Mongodb
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-DB-Mongodb-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                              | Default value     | Mandatory   |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MONGODBUSERNAME | MongoDB username                                                                                                                         |                   |             |
| MONGODBPASSWORD | MongoDB password                                                                                                                         |                   |             |
| MONGODBPROTOCOL | Protocol used DNS Seedlist Connection Format can be specified, i.e. 'mongodb+srv'                                                        | mongodb           |             |
| MONGODBPORT     | Port used by MongoDB                                                                                                                     | 27017             |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Collection-Statistics" label="Collection-Statistics">

| Macro                         | Description                                                                                                                            | Default value | Mandatory   |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:-----------:|
| FILTERDATABASE                | Filter databases by name (can use regexp)                                                                                              |               |             |
| FILTERCOUNTERS                | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'              |               |             |
|  WARNINGCOLLECTIONDOCUMENTS   | Threshold                                                                                                                              |               |             |
| CRITICALCOLLECTIONDOCUMENTS   | Threshold                                                                                                                              |               |             |
| WARNINGCOLLECTIONINDEXES      | Threshold                                                                                                                              |               |             |
| CRITICALCOLLECTIONINDEXES     | Threshold                                                                                                                              |               |             |
| WARNINGCOLLECTIONSIZEINDEX    | Threshold                                                                                                                              |               |             |
| CRITICALCOLLECTIONSIZEINDEX   | Threshold                                                                                                                              |               |             |
| WARNINGCOLLECTIONSIZESTORAGE  | Threshold                                                                                                                              |               |             |
| CRITICALCOLLECTIONSIZESTORAGE | Threshold                                                                                                                              |               |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |             |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Macro                  | Description                                                                                                                            | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONNECTIONTIME  | Threshold                                                                                                                              |                   |             |
| CRITICALCONNECTIONTIME | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Connections" label="Connections">

| Macro                        | Description                                                                                                                            | Default value     | Mandatory   |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS               | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'              |                   |             |
| WARNINGACTIVE                | Threshold                                                                                                                              |                   |             |
| CRITICALACTIVE               | Threshold                                                                                                                              |                   |             |
| WARNINGCONNECTIONSPERSECOND  | Threshold                                                                                                                              |                   |             |
| CRITICALCONNECTIONSPERSECOND | Threshold                                                                                                                              |                   |             |
| WARNINGCURRENT               | Threshold                                                                                                                              |                   |             |
| CRITICALCURRENT              | Threshold                                                                                                                              |                   |             |
| WARNINGUSAGE                 | Threshold                                                                                                                              |                   |             |
| CRITICALUSAGE                | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Database-Statistics" label="Database-Statistics">

| Macro                       | Description                                                                                                                            | Default value     | Mandatory   |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERDATABASE              | Filter databases by name (can use regexp)                                                                                              |                   |             |
| FILTERCOUNTERS              | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'              |                   |             |
| WARNINGDATABASECOLLECTIONS  | Threshold                                                                                                                              |                   |             |
| CRITICALDATABASECOLLECTIONS | Threshold                                                                                                                              |                   |             |
| WARNINGDATABASEDOCUMENTS    | Threshold                                                                                                                              |                   |             |
| CRITICALDATABASEDOCUMENTS   | Threshold                                                                                                                              |                   |             |
| WARNINGDATABASEINDEXES      | Threshold                                                                                                                              |                   |             |
| CRITICALDATABASEINDEXES     | Threshold                                                                                                                              |                   |             |
| WARNINGDATABASESIZEDATA     | Threshold                                                                                                                              |                   |             |
| CRITICALDATABASESIZEDATA    | Threshold                                                                                                                              |                   |             |
| WARNINGDATABASESIZEINDEX    | Threshold                                                                                                                              |                   |             |
| CRITICALDATABASESIZEINDEX   | Threshold                                                                                                                              |                   |             |
| WARNINGDATABASESIZESTORAGE  | Threshold                                                                                                                              |                   |             |
| CRITICALDATABASESIZESTORAGE | Threshold                                                                                                                              |                   |             |
| WARNINGDATABASEVIEWS        | Threshold                                                                                                                              |                   |             |
| CRITICALDATABASEVIEWS       | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Queries" label="Queries">

| Macro           | Description                                                                                                                            | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCOMMAND  | Threshold                                                                                                                              |                   |             |
| CRITICALCOMMAND | Threshold                                                                                                                              |                   |             |
| WARNINGDELETE   | Threshold                                                                                                                              |                   |             |
| CRITICALDELETE  | Threshold                                                                                                                              |                   |             |
| WARNINGGETMORE  | Threshold                                                                                                                              |                   |             |
| CRITICALGETMORE | Threshold                                                                                                                              |                   |             |
| WARNINGINSERT   | Threshold                                                                                                                              |                   |             |
| CRITICALINSERT  | Threshold                                                                                                                              |                   |             |
| WARNINGQUERY    | Threshold                                                                                                                              |                   |             |
| CRITICALQUERY   | Threshold                                                                                                                              |                   |             |
| WARNINGTOTAL    | Threshold                                                                                                                              |                   |             |
| CRITICALTOTAL   | Threshold                                                                                                                              |                   |             |
| WARNINGUPDATE   | Threshold                                                                                                                              |                   |             |
| CRITICALUPDATE  | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Replication-Status" label="Replication-Status">

| Macro                  | Description                                                                                                                                                             | Default value                      | Mandatory   |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|:-----------:|
| WARNINGMEMBERSTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{state\}, %\{health\}, %\{slave\_delay\}, %\{priority\}  | %\{state\} !~ /PRIMARY\|SECONDARY/ |             |
| CRITICALMEMBERSTATUS   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{state\}, %\{health\}, %\{slave\_delay\}, %\{priority\} | %\{health\} !~ /up/                |             |
| WARNINGREPLICATIONLAG  | Threshold                                                                                                                                                               |                                    |             |
| CRITICALREPLICATIONLAG | Threshold                                                                                                                                                               |                                    |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{sync\_host\}                                           |                                    |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{sync\_host\}                                          |                                    |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                  |                                    |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_mongodb.pl \
	--plugin=database::mongodb::plugin \
	--mode=replication-status \
	--hostname=10.0.0.1 \
	--username='' \
	--password='' \
	--port='27017' \
	--protocol='mongodb'  \
	--warning-status='' \
	--critical-status='' \
	--warning-member-status='%\{state\} !~ /PRIMARY|SECONDARY/' \
	--critical-member-status='%\{health\} !~ /up/'  \
	--warning-instance-replication-lag-seconds='' \
	--critical-instance-replication-lag-seconds=''  
```

The expected command output is shown below:

```bash
OK: current member state is 'PRIMARY' - All members statistics are ok | 'members.primary.count'=1;;;0; 'members.secondary.count'=2;;;0; 'members.arbiter.count'=0;;;0; 'perconamongo5db01-v.dbprep.centreon.com:27017#replication.lag.seconds'=10s;;;0; 'perconamongo5db03-v.dbprep.centreon.com:27017#replication.lag.seconds'=0s;;;0;
Member 'perconamongo5db01-v.dbprep.centreon.com:27017' state is 'SECONDARY' and health is 'up' [slave delay: 0] [priority: 1], replication lag: 10 s
Member 'perconamongo5db02-v.dbprep.centreon.com:27017' state is 'PRIMARY' and health is 'up' [slave delay: 0] [priority: 2]
Member 'perconamongo5db03-v.dbprep.centreon.com:27017' state is 'SECONDARY' and health is 'up' [slave delay: 0] [priority: 1], replication lag: 0 s
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
/usr/lib/centreon/plugins/centreon_mongodb.pl \
	--plugin=database::mongodb::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                        | Linked service template                     |
|:--------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| collection-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/collectionstatistics.pm)] | App-DB-Mongodb-Collection-Statistics-custom |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/connectiontime.pm)]             | App-DB-Mongodb-Connection-Time-custom       |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/connections.pm)]                    | App-DB-Mongodb-Connections-custom           |
| database-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/databasestatistics.pm)]     | App-DB-Mongodb-Database-Statistics-custom   |
| list-databases [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/listdatabases.pm)]               | Used for service discovery                  |
| queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/queries.pm)]                            | App-DB-Mongodb-Queries-custom               |
| replication-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/replicationstatus.pm)]       | App-DB-Mongodb-Replication-Status-custom    |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         || --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --hostname                                 |   MongoDB server hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --port                                     |   Port used by MongoDB.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --protocol                                 |   Protocol used (default: mongodb) DNS Seedlist Connection Format can be specified, i.e. 'mongodb+srv'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --username                                 |   MongoDB username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --password                                 |   MongoDB password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --ssl-opt                                  |   Set SSL Options (--ssl-opt="SSL\_version =\> 'TLSv1'" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --no-ssl                                   |   Don't use ssl connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Collection-Statistics" label="Collection-Statistics">

| Option                   | Description                                                                                                                                                  |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-database        |   Filter databases by name (can use regexp).                                                                                                                 |
| --filter-shard           |   Filter shards by name (can use regexp).                                                                                                                    |
| --add-shards             |   Add collection statistics by shards.                                                                                                                       |
| --warning-* --critical-* |   Thresholds. Can be: 'storage-size', 'index-size', 'documents', 'indexes', 'shard-storage-size', 'shard-index-size', 'shard-documents', 'shard-indexes'.    |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Option                     | Description                              |
|:---------------------------|:-----------------------------------------|
| --warning-connection-time  |   Warning threshold in milliseconds.     |
| --critical-connection-time |   Critical threshold in milliseconds.    |

</TabItem>
<TabItem value="Connections" label="Connections">

| Option                   | Description                                                             |
|:-------------------------|:------------------------------------------------------------------------|
| --warning-* --critical-* |   Thresholds. Can be: 'active', 'current', 'usage', 'total-created'.    |

</TabItem>
<TabItem value="Database-Statistics" label="Database-Statistics">

| Option                   | Description                                                                                                                                                                                                                                              |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-database        |   Filter databases by name (can use regexp).                                                                                                                                                                                                             |
| --filter-shard           |   Filter shards by name (can use regexp).                                                                                                                                                                                                                |
| --add-shards             |   Add database statistics by shards.                                                                                                                                                                                                                     |
| --warning-* --critical-* |   Thresholds. Can be: 'storage-size', 'data-size', 'index-size', 'collections', 'views', 'documents', 'indexes', 'shard-storage-size', 'shard-data-size', 'shard-index-size', 'shard-collections', 'shard-views', 'shard-documents', 'shard-indexes'.    |

</TabItem>
<TabItem value="Queries" label="Queries">

| Option                   | Description                                                                                                                                                                                     |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-* --critical-* |   Thresholds. Can be: 'total', 'insert', 'query', 'update', 'delete', 'getmore', 'command', 'insert-count', 'query-count', 'update-count', 'delete-count', 'getmore-count', 'command-count'.    |

</TabItem>
<TabItem value="Replication-Status" label="Replication-Status">

| Option                   | Description                                                                                                                                                                                                                 |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{sync\_host\}.                                                                                            |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{sync\_host\}.                                                                                           |
| --warning-member-status  |   Define the conditions to match for the status to be WARNING (default: '%\{state\} !~ /PRIMARY\|SECONDARY/'). You can use the following variables: %\{name\}, %\{state\}, %\{health\}, %\{slave\_delay\}, %\{priority\}.   |
| --critical-member-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{health\} !~ /up/'). You can use the following variables: %\{name\}, %\{state\}, %\{health\}, %\{slave\_delay\}, %\{priority\}.                 |
| --warning-* --critical-* |   Thresholds. Can be: 'members-primary', 'members-secondary', 'members-arbiter', 'replication-lag'.                                                                                                                         |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_mongodb.pl \
	--plugin=database::mongodb::plugin \
	--mode=replication-status \
	--help
```