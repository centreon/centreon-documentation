---
id: cloud-gcp-cloudsql-mysql
title: Google CloudSQL MySQL
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack Google CloudSQL MySQL collects metrics for:
* Cpu
* Innodb
* Network
* Queries
* Storage

### Discovery rules

The Centreon Plugin-Pack *Google CloudSQL MySQL* includes a Host Discovery *provider* to automatically discover databases
for a given Google Cloud Project. 

This provider is named **Google CloudSQL MySQL**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-gcp-cloudsql-mysql-provider.png)

> Note that the key file must be deployed on the Poller(s) expected to discover GCP assets.

More information about the Host Discovery module is available in the Centreon documentation:
[Host Discovery](../../../monitoring/discovery/hosts-discovery.html)

### Collected Metrics

For all collected metrics, we can choose the *aggregation*: _average_, _minimum_, _maximum_ and _total_.

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                                                     | Description                                          | Unit  |
| :-------------------------------------------------------------- | :--------------------------------------------------- | :---- |
| *database_id*~*aggregation*#database.cpu.utilization.percentage | Utilization of the reserved CPU                      | %     |
| *database_id*~*aggregation*#database.cpu.reserved_cores.count   | Number of cores reserved for the database instance   |       |

<!--Innodb-->

| Metric name                                                               | Description                                              | Unit  |
| :------------------------------------------------------------------------ | :------------------------------------------------------- | :---- |
| *database_id*~*aggregation*#database.mysql.innodb.data_fsyncs.count       | Count of InnoDB fsync() calls                            |       |
| *database_id*~*aggregation*#database.mysql.innodb.data_fsyncs.persecond   | Count of InnoDB fsync() calls per second                 |       |
| *database_id*~*aggregation*#database.mysql.innodb.os_log_fsyncs.count     | Count of InnoDB fsync() calls to the log file            |       |
| *database_id*~*aggregation*#database.mysql.innodb.os_log_fsyncs.persecond | Count of InnoDB fsync() calls per second to the log file |       |
| *database_id*~*aggregation*#database.mysql.innodb.pages_read.count        | Count of InnoDB pages read                               |       |
| *database_id*~*aggregation*#database.mysql.innodb.pages_read.persecond    | Count of InnoDB pages read per second                    |       |
| *database_id*~*aggregation*#database.mysql.innodb.pages_written.count     | Count of InnoDB pages written                            |       |
| *database_id*~*aggregation*#database.mysql.innodb.pages_written.persecond | Count of InnoDB pages written per second                 |       |

<!--Network-->

| Metric name                                                                 | Description                                            | Unit  |
| :-------------------------------------------------------------------------- | :----------------------------------------------------- | :---- |
| *database_id*~*aggregation*#database.network.connections.count              | Number of connections to databases                     |       |
| *database_id*~*aggregation*#database.network.received.volume.bytes          | Count of bytes received through the network            | B     |
| *database_id*~*aggregation*#database.network.received.volume.bytespersecond | Count of bytes received per second through the network | B/s   |
| *database_id*~*aggregation*#database.network.sent.volume.bytes              | Count of bytes sent through the network                | B     |
| *database_id*~*aggregation*#database.network.sent.volume.bytespersecond     | Count of bytes sent per second through the network     | B/s   |

<!--Queries-->

| Metric name                                                    | Description                                                              | Unit  |
| :------------------------------------------------------------- | :----------------------------------------------------------------------- | :---- |
| *database_id*~*aggregation*#database.mysql.questions.count     | Count of statements executed by the server sent by the client            |       |
| *database_id*~*aggregation*#database.mysql.questions.persecond | Count of statements per second executed by the server sent by the client |       |
| *database_id*~*aggregation*#database.mysql.queries.count       | Count of statements executed by the server                               |       |
| *database_id*~*aggregation*#database.mysql.queries.persecond   | Count of statements per second executed by the server                    |       |

<!--Storage-->

| Metric name                                                             | Description                                       | Unit  |
| :---------------------------------------------------------------------- | :------------------------------------------------ | :---- |
| *database_id*~*aggregation*#database.space.usage.bytes                  | Data utilization                                  | B     |
| *database_id*~*aggregation*#database.disk.read.io.operations.count      | Count of data disk read IO operations             |       |
| *database_id*~*aggregation*#database.disk.read.io.operations.persecond  | Count of data disk read IO operations per second  |       |
| *database_id*~*aggregation*#database.disk.write.io.operations.count     | Count of data disk write IO operations            |       |
| *database_id*~*aggregation*#database.disk.write.io.operations.persecond | Count of data disk write IO operations per second |       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Google Cloud Configuration

Configure a service account key (download its private key as a JSON file) for which the following privileges have to be granted:

| Google Scope                                     | Description                                                     |
| :----------------------------------------------- | :-------------------------------------------------------------- |
| https://www.googleapis.com/auth/cloud-platform   | View and manage your data across Google Cloud Platform services |

How to create a service account key: https://developers.google.com/identity/protocols/oauth2/service-account

### Centreon

Deploy the key file on every Poller expected to monitor Google Cloud resources. The key file 
should be readable by centreon-engine poller.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Cloud-Gcp-CloudSQL-MySQL-Api
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Google CloudSQL MySQL* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Cloud-Gcp-CloudSQL-MySQL-Api
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-cloud-gcp-cloudsql-mysql
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Google CloudSQL MySQL* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and apply the *Cloud-Gcp-CloudSQL-MySQL-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory   | Name                 | Description                                                                                 |
| :---------- | :------------------- | :------------------------------------------------------------------------------------------ |
| X           | GCPKEYFILEPATH       | Service account key json file                                                               |
| X           | GCPSCOPEENDPOINT     | Google Scope. Default: https://www.googleapis.com/auth/cloud-platform                       |
| X           | GCPDIMENSIONNAME     | The name of the dimension to filter on. Default: resource.labels.database_id                |
| X           | GCPDIMENSIONOPERATOR | Define the type of filter match to use. Default: equals                                     |
| X           | GCPDIMENSIONVALUE    | ID of the database you want to monitor.                                                     |
|             | PROXYURL             | Configure proxy URL                                                                         |
|             | GCPEXTRAOPTIONS      | Any extra option you may want to add to every command_line (eg. a --verbose flag)           |
|             | DUMMYSTATUS          | Host state. Default is OK, do not modify it until you know what you are doing               |
|             | DUMMYOUTPUT          | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

> **WARNING**: Service account key file must be stored on Centreon Poller. *centreon-engine* user account must have read privileges on that file. 

## FAQ

### How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_gcp_cloudsql_mysql_api.pl \
    --plugin=cloud::google::gcp::cloudsql::mysql::plugin \
    --mode=cpu \
    --key-file=/var/lib/centreon-engine/centreon-dev-6e5531fc9e82.json \
    --dimension-name='resource.labels.database_id' \
    --dimension-operator='equals' \
    --dimension-value='centreon-dev:centreon-mysql' \
    --aggregation='average' \
    --warning-utilization='90' \
    --critical-utilization='95' \
    --verbose
```

Expected command output is shown below:

```bash
OK: Instance 'centreon-dev:centreon-mysql' aggregation 'average' metrics cpu utilization: 2.40 %, cpu reserved cores: 1.00 | 'centreon-dev:centreon-mysql~average#database.cpu.utilization.percentage'=2.40%;0:95;;0;100 'centreon-dev:centreon-mysql~average#database.cpu.reserved_cores.count'=1.00;;;;
Checking 'centreon-dev:centreon-mysql' 
    aggregation 'average' metrics cpu utilization: 2.40 %, cpu reserved cores: 1.00
```

The command above monitors cpu usage of a Google MySQL instance (```--plugin=cloud::google::gcp::cloudsql::mysql::plugin --mode=cpu```) identified
by the name *centreon-dev:centreon-mysql* (```--dimension-name='resource.labels.database_id' --dimension-operator='equals' --dimension-value='centreon-dev:centreon-mysql'```).

This command would trigger a WARNING alarm if cpu utilization is more than 90% 
(```--warning-utilization='90'```) and a CRITICAL alarm for more than 95% (```--critical-utilization='95'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_gcp_cloudsql_mysql_api.pl \
    --plugin=cloud::google::gcp::cloudsql::mysql::plugin \
    --mode=cpu \
    --help
```

### Why do I get the following result ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values``` ?

This command result means that Google Cloud does not have any value for the requested period.

This result can be overriden by adding the ```--zeroed``` option in the command. This will force a value of 0 when no metric 
has been collected and will prevent the UNKNOWN error message.
