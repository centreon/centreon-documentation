---
id: applications-monitoring-centreon-sql-metrics
title: Centreon SQL Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Centreon SQL Metrics** brings a host template:

* **App-Monitoring-Centreon-SQL-Metrics-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Centreon-SQL-Metrics-custom" label="App-Monitoring-Centreon-SQL-Metrics-custom">

| Service Alias        | Service Template                                        | Service Description                                                            |
|:---------------------|:--------------------------------------------------------|:-------------------------------------------------------------------------------|
| Notifications-Count  | App-Monitoring-Centreon-SQL-Notifications-Count-custom  | Check the number of new notifications                                          |
| Poller-Delay         | App-Monitoring-Centreon-SQL-Poller-Delay-custom         | Check the last update time that a  poller communicated with the central server |
| Problems-Count       | App-Monitoring-Centreon-SQL-Problems-Count-custom       | Check the number of new problems                                               |
| Resources-Count      | App-Monitoring-Centreon-SQL-Resources-Count-custom      | Check the number of services                                                   |
| Storage-Partitioning | App-Monitoring-Centreon-SQL-Storage-Partitioning-custom | Check partitions for MySQL/MariaDB tables                                      |

> The services listed above are created automatically when the **App-Monitoring-Centreon-SQL-Metrics-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias   | Service Template                                   | Service Description                                           |
|:----------------|:---------------------------------------------------|:--------------------------------------------------------------|
| DSMQueue-Count  | App-Monitoring-Centreon-SQL-DSMQueue-Count-custom  | Check the queue usage of DSM daemon                           |
| Execution-Time  | App-Monitoring-Centreon-SQL-Execution-Time-custom  | Check the number of services exceeding defined execution time |
| Virtual-Service | App-Monitoring-Centreon-SQL-Virtual-Service-custom | Check custom Centreon metrics                                 |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="DSMQueue-Count" label="DSMQueue-Count">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| centreon.dsm.queue.cache.count             | count |
| centreon.dsm.queue.lock.count              | count |
| *host*#centreon.dsm.host.queue.cache.count | count |

</TabItem>
<TabItem value="Execution-Time" label="Execution-Time">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| services.execution.exceed.count | count |
| *services*#list                 | N/A   |

</TabItem>
<TabItem value="Notifications-Count" label="Notifications-Count">

| Metric name              | Unit  |
|:-------------------------|:------|
| notifications.sent.count | count |
| notifications.sent.count | count |

</TabItem>
<TabItem value="Poller-Delay" label="Poller-Delay">

| Metric name                            | Unit  |
|:---------------------------------------|:------|
| *poller*#centreon.poller.delay.seconds | s     |

</TabItem>
<TabItem value="Problems-Count" label="Problems-Count">

| Metric name           | Unit  |
|:----------------------|:------|
| total.outage.count    | count |
| hosts.outage.count    | count |
| services.outage.count | count |

</TabItem>
<TabItem value="Resources-Count" label="Resources-Count">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| *pollers*~centreon.hosts.count             | count |
| *pollers*~centreon.hosts.up.count          | count |
| *pollers*~centreon.hosts.down.count        | count |
| *pollers*~centreon.hosts.unreachable.count | count |
| *pollers*~centreon.hosts.pending.count     | count |
| *pollers*~centreon.services.count          | count |
| *pollers*~centreon.services.ok.count       | count |
| *pollers*~centreon.services.warning.count  | count |
| *pollers*~centreon.services.critical.count | count |
| *pollers*~centreon.services.unknown.count  | count |
| *pollers*~centreon.services.pending.count  | count |

</TabItem>
<TabItem value="Storage-Partitioning" label="Storage-Partitioning">

No metrics.

</TabItem>
<TabItem value="Virtual-Service" label="Virtual-Service">

Metrics depend on the service configuration. Check our [The Watch blog post](https://thewatch.centreon.com/product-how-to-21/get-to-know-app-centreon-sql-metric-pack-and-start-building-some-virtual-curves-296).

</TabItem>
</Tabs>

## Prerequisites

The poller executing the check must be able to connect to the centreon_storage database over the 3306/TCP port with values supplied through **--username** and **--password** options.

The SQL user must hold required privileges to "SELECT" data within **index_data**, **metrics**, and **instances** tables tables in the **centreon_storage** database.

When using the **Virtual-Service** service, the configuration file must be readable by the **centreon-engine** user.

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
dnf install centreon-pack-applications-monitoring-centreon-sql-metrics
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-centreon-sql-metrics
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-monitoring-centreon-sql-metrics
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-centreon-sql-metrics
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Centreon SQL Metrics** connector through
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
dnf install centreon-plugin-Applications-Monitoring-Centreon-SQL-Metrics
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Centreon-SQL-Metrics
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-monitoring-centreon-sql-metrics
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-SQL-Metrics
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Monitoring-Centreon-SQL-Metrics-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                    | Description                                                                                          | Default value     | Mandatory   |
|:-------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CENTREONDATABASEUSER     | User name used to connect to the database                                                            | centreon          |             |
| CENTREONDATABASEPASSWORD | Password for the defined user name                                                                   | PASSWORD          |             |
| CENTREONDATABASE         |                                                                                                      | centreon          |             |
| CENTREONSTORAGEDATABASE  | Centreon storage database name (default: 'centreon\_storage')                                        | centreon\_storage |             |
| EXTRAOPTIONS             | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="DSMQueue-Count" label="DSMQueue-Count">

| Macro                   | Description                                                                                        | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS          | Only display some counters (regexp can be used). Example: --filter-counters='^total-queue-cache$'  |                   |             |
| FILTERHOSTQUEUE         | Filter by host and pool prefix name (regexp can be used). Example: host1.queue1                    |                   |             |
| WARNINGHOSTQUEUECACHE   | Warning threshold. : 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'                   |                   |             |
| CRITICALHOSTQUEUECACHE  | Critical threshold. : 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'                  |                   |             |
| WARNINGTOTALQUEUECACHE  | Warning threshold. : 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'                   |                   |             |
| CRITICALTOTALQUEUECACHE | Critical threshold. : 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'                  |                   |             |
| WARNINGTOTALQUEUELOCK   | Warning threshold. : 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'                   |                   |             |
| CRITICALTOTALQUEUELOCK  | Critical threshold. : 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'                  |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Execution-Time" label="Execution-Time">

| Macro         | Description                                                                                        | Default value     | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXECUTIONTIME | Set the number of seconds which defines the limit of execution time (default: '20')                | 20                |             |
| FILTERPOLLER  | Filter by poller name (regexp can be used)                                                         |                   |             |
| WARNINGCOUNT  | Thresholds on the number of services exceeding defined execution time                              |                   |             |
| CRITICALCOUNT | Thresholds on the number of services exceeding defined execution time                              |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Notifications-Count" label="Notifications-Count">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                  |                   |             |
| CRITICAL     | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Poller-Delay" label="Poller-Delay">

| Macro         | Description                                                                                        | Default value     | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERPOLLER  | Filter by poller name (can be a regexp)                                                            | .*                |             |
| WARNINGDELAY  | Warning threshold in seconds                                                                       | 180               |             |
| CRITICALDELAY | Critical threshold in seconds                                                                      | 300               |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Problems-Count" label="Problems-Count">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                  |                   |             |
| CRITICAL     | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Resources-Count" label="Resources-Count">

| Macro                        | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS               | Only display some counters (regexp can be used). Example: --filter-counters='service'              |                   |             |
| FILTERPOLLER                 | Filter by poller name (regexp can be used)                                                         |                   |             |
| WARNINGHOSTDOWNCOUNT         | Thresholds                                                                                         |                   |             |
| CRITICALHOSTDOWNCOUNT        | Thresholds                                                                                         |                   |             |
| WARNINGHOSTUNREACHABLECOUNT  | Thresholds                                                                                         |                   |             |
| CRITICALHOSTUNREACHABLECOUNT | Thresholds                                                                                         |                   |             |
| WARNINGSVCWARNINGCOUNT       | Thresholds                                                                                         |                   |             |
| WARNINGSVCCRITICALCOUNT      | Thresholds                                                                                         |                   |             |
| CRITICALSVCWARNINGCOUNT      | Thresholds                                                                                         |                   |             |
| CRITICALSVCCRITICALCOUNT     | Thresholds                                                                                         |                   |             |
| WARNINGSVCUNKNOWNCOUNT       | Thresholds                                                                                         |                   |             |
| CRITICALSVCUNKNOWNCOUNT      | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Storage-Partitioning" label="Storage-Partitioning">

| Macro        | Description                                                                                        | Default value                           | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:----------------------------------------|:-----------:|
| TABLENAME1   | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin                   | centreon\_storage.data\_bin             | X           |
| TABLENAME2   | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin                   | centreon\_storage.logs                  | X           |
| TABLENAME3   | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin                   | centreon\_storage.log\_archive\_host    | X           |
| TABLENAME4   | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin                   | centreon\_storage.log\_archive\_service | X           |
| WARNING      | Warning threshold (number of retention forward days)                                               | 10:                                     |             |
| CRITICAL     | Critical threshold (number of retention forward days)                                              | 5:                                      |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                                         |             |

</TabItem>
<TabItem value="Virtual-Service" label="Virtual-Service">

| Macro          | Description                                                                                        | Default value     | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CONFIG         |                                                                                                    |                   |             |
| WARNINGGLOBAL  | Warning threshold (can be 'unique' or 'global') (Override config\_file if set)                     |                   |             |
| CRITICALGLOBAL | Critical threshold (can be 'unique' or 'global') (Override config\_file if set)                    |                   |             |
| WARNINGMETRIC  |                                                                                                    |                   |             |
| CRITICALMETRIC |                                                                                                    |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_centreon_sql_metrics.pl \
	--plugin=database::mysql::plugin \
	--dyn-mode=apps::centreon::sql::mode::countservices \
	--host='10.0.0.1' \
	--username='centreon' \
	--password='PASSWORD' \
	--filter-counters='' \
	--centreon-storage-database='centreon_storage' \
	--filter-poller='' \
	--warning-services-warning='' \
	--warning-services-critical='' \
	--warning-services-unknown='' \
	--warning-hosts-down='' \
	--warning-hosts-unreachable='' \
	--critical-services-warning='' \
	--critical-services-critical='' \
	--critical-services-unknown='' \
	--critical-hosts-down='' \
	--critical-hosts-unreachable=''
```

The expected command output is shown below:

```bash
OK: total: 50 up: 6 down: 51 unreachable: 7 pending: 10 total: 9 ok: 22 warning: 52 critical: 94 unknown: 98 pending: 68 | '*pollers*~centreon.hosts.count'=50;;;0;'*pollers*~centreon.hosts.up.count'=6;;;0;'*pollers*~centreon.hosts.down.count'=51;;;0;'*pollers*~centreon.hosts.unreachable.count'=7;;;0;'*pollers*~centreon.hosts.pending.count'=10;;;0;'*pollers*~centreon.services.count'=9;;;0;'*pollers*~centreon.services.ok.count'=22;;;0;'*pollers*~centreon.services.warning.count'=52;;;0;'*pollers*~centreon.services.critical.count'=94;;;0;'*pollers*~centreon.services.unknown.count'=98;;;0;'*pollers*~centreon.services.pending.count'=68;;;0;
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
/usr/lib/centreon/plugins/centreon_centreon_sql_metrics.pl \
	--plugin=database::mysql::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                             | Linked service template                                 |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|
| backup [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/backup.pm)]                                     | Not used in this Monitoring Connector                   |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]              | Not used in this Monitoring Connector                   |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)]     | Not used in this Monitoring Connector                   |
| countnotifications [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/countnotifications.pm)]          | App-Monitoring-Centreon-SQL-Notifications-Count-custom  |
| countproblems [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/countproblems.pm)]                    | App-Monitoring-Centreon-SQL-Problems-Count-custom       |
| countservices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/countservices.pm)]                    | App-Monitoring-Centreon-SQL-Resources-Count-custom      |
| databases-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/databasessize.pm)]                      | Not used in this Monitoring Connector                   |
| dsmqueue [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/dsmqueue.pm)]                              | App-Monitoring-Centreon-SQL-DSMQueue-Count-custom       |
| executiontime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/executiontime.pm)]                    | App-Monitoring-Centreon-SQL-Execution-Time-custom       |
| innodb-bufferpool-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/innodbbufferpoolhitrate.pm)] | Not used in this Monitoring Connector                   |
| long-queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/longqueries.pm)]                          | Not used in this Monitoring Connector                   |
| myisam-keycache-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/myisamkeycachehitrate.pm)]     | Not used in this Monitoring Connector                   |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/db_socket.pm)]                                                        | Not used in this Monitoring Connector                   |
| open-files [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/openfiles.pm)]                              | Not used in this Monitoring Connector                   |
| open-tables [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/opentables.pm)]                            | Not used in this Monitoring Connector                   |
| partitioning [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/partitioning.pm)]                      | App-Monitoring-Centreon-SQL-Storage-Partitioning-custom |
| password-expiration [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/passwordexpiration.pm)]            | Not used in this Monitoring Connector                   |
| pollerdelay [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/pollerdelay.pm)]                        | App-Monitoring-Centreon-SQL-Poller-Delay-custom         |
| qcache-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/qcachehitrate.pm)]                      | Not used in this Monitoring Connector                   |
| queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/queries.pm)]                                   | Not used in this Monitoring Connector                   |
| replication [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/replication.pm)]                           | Not used in this Monitoring Connector                   |
| slow-queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/slowqueries.pm)]                          | Not used in this Monitoring Connector                   |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]                            | Not used in this Monitoring Connector                   |
| sql-string [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sqlstring.pm)]               | Not used in this Monitoring Connector                   |
| threads-connected [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/threadsconnected.pm)]                | Not used in this Monitoring Connector                   |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/uptime.pm)]                                     | Not used in this Monitoring Connector                   |
| virtualservice [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/virtualservice.pm)]                  | App-Monitoring-Centreon-SQL-Virtual-Service-custom      |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
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
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on an "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale"Mbps",mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
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
<TabItem value="DSMQueue-Count" label="DSMQueue-Count">

| Option                      | Description                                                                                         |
|:----------------------------|:----------------------------------------------------------------------------------------------------|
| --centreon-storage-database | Centreon storage database name (default: 'centreon\_storage').                                      |
| --centreon-database         | Centreon storage database name (default: 'centreon').                                               |
| --filter-counters           | Only display some counters (regexp can be used). Example: --filter-counters='^total-queue-cache$'   |
| --warning-*                 | Warning threshold. Can be: Can be: 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'.     |
| --critical-*                | Critical threshold. Can be: Can be: 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'.    |
| --filter-host-queue         | Filter by host and pool prefix name (regexp can be used). Example: host1.queue1                     |

</TabItem>
<TabItem value="Execution-Time" label="Execution-Time">

| Option                           | Description                                                                            |
|:---------------------------------|:---------------------------------------------------------------------------------------|
| --execution-time                 | Set the number of seconds which defines the limit of execution time (default: '20').   |
| --centreon-storage-database      | Centreon storage database name (default: 'centreon\_storage').                         |
| --filter-poller                  | Filter by poller name (regexp can be used).                                            |
| --warning-count --critical-count | Thresholds on the number of services exceeding defined execution time.                 |

</TabItem>
<TabItem value="Notifications-Count" label="Notifications-Count">

| Option                      | Description                                                                                                                                                                                                                                   |
|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                 | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server              | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute           | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                  | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file             | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration             | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir             | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix          | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd      | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format          | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key             | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher          | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --centreon-storage-database | Centreon storage database name (default: 'centreon\_storage').                                                                                                                                                                                |
| --warning                   | Warning threshold.                                                                                                                                                                                                                            |
| --critical                  | Critical threshold.                                                                                                                                                                                                                           |

</TabItem>
<TabItem value="Poller-Delay" label="Poller-Delay">

| Option           | Description                                |
|:-----------------|:-------------------------------------------|
| --filter-name    | Filter by poller name (can be a regexp).   |
| --warning-delay  | Warning threshold in seconds.              |
| --critical-delay | Critical threshold in seconds.             |

</TabItem>
<TabItem value="Problems-Count" label="Problems-Count">

| Option                      | Description                                                                                                                                                                                                                                   |
|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                 | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server              | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute           | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                  | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file             | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration             | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir             | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix          | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd      | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format          | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key             | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher          | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --centreon-storage-database | Centreon storage database name (default: 'centreon\_storage').                                                                                                                                                                                |
| --warning                   | Warning threshold.                                                                                                                                                                                                                            |
| --critical                  | Critical threshold.                                                                                                                                                                                                                           |

</TabItem>
<TabItem value="Resources-Count" label="Resources-Count">

| Option                      | Description                                                                                                                                                                                               |
|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters           | Only display some counters (regexp can be used). Example: --filter-counters='service'                                                                                                                     |
| --centreon-storage-database | Centreon storage database name (default: 'centreon\_storage').                                                                                                                                            |
| --filter-poller             | Filter by poller name (regexp can be used).                                                                                                                                                               |
| --warning-* --critical-*    | Thresholds. Can be: 'service', 'services-ok', 'services-warning', 'services-critical', 'services-unknown', 'services-pending', 'host', 'hosts-up', 'hosts-down', 'hosts-unreachable', 'hosts-pending'.    |

</TabItem>
<TabItem value="Storage-Partitioning" label="Storage-Partitioning">

| Option      | Description                                                                             |
|:------------|:----------------------------------------------------------------------------------------|
| --tablename | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin        |
| --warning   | Warning threshold (number of retention forward days)                                    |
| --critical  | Critical threshold (number of retention forward days)                                   |
| --timezone  | Timezone use for partitioning (if not set, we use current server execution timezone)    |

</TabItem>
<TabItem value="Virtual-Service" label="Virtual-Service">

| Option            | Description                                                                                                            |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------|
| --database        | Specify the database (default: 'centreon\_storage')                                                                    |
| --config-file     | Specify the full path to a json config file                                                                            |
| --json-data       | Specify the full path to a json config file                                                                            |
| --filter-counters | Filter some counter (can be 'unique' or 'global') Useless, if you use selection/filter but not global/virtual curves   |
| --warning-*       | Warning threshold (can be 'unique' or 'global') (Override config\_file if set)                                         |
| --critical-*      | Critical threshold (can be 'unique' or 'global') (Override config\_file if set)                                        |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_centreon_sql_metrics.pl \
	--plugin=database::mysql::plugin \
	--dyn-mode=apps::centreon::sql::mode::countservices \
	--help
```
