---
id: applications-monitoring-centreon-database
title: Centreon Database
---
## Overview

Centreon Database Plugin Pack will help you set up monitoring for Centreon monitoring database. 

## Pack Assets

### Templates

The Centreon Plugin Pack Centreon Central brings a host template:
* App-Monitoring-Centreon-Database-custom

It brings the following service templates:

| Service Alias      | Service Template                        | Service Description                        | Default |
|:-------------------|:----------------------------------------|:-------------------------------------------|:--------|
| Partitioning       | App-Centreon-MySQL-Partitioning-custom  | Check Centreon Database partitionning      | X       |
| Connection-Time    | App-DB-MySQL-Connection-Time-custom     | Check Centreon Database connection time    | X       |
| Connections-Number | App-DB-MySQL-Connections-Number-custom  | Check Centreon Database connections number | X       |
| Database-size      | App-DB-MySQL-Database-Size-custom       | Check Centreon Database size               | X       |
| Myisam-Keycache    | App-DB-MySQL-Myisam-Keycache-custom     | Check Centreon Database partitionning      | X       |
| Open-Files         | App-DB-MySQL-Open-Files-custom          | Check Centreon Database open files         | X       |
| Queries            | App-DB-MySQL-Queries-custom             | Check Centreon Database queries number     | X       |
| Slowqueries        | App-DB-MySQL-Slowqueries-custom         | Check Centreon Database slow queries       | X       |
| Swap               | OS-Linux-Swap-SNMP-custom               | Check swap usage                           | X       |
| Memory             | OS-Linux-Memory-SNMP-custom             | Check memory usage                         | X       |
| Load               | OS-Linux-Load-SNMP-custom               | Check load                                 | X       |
| Cpu                | OS-Linux-Cpu-SNMP-custom                | Check Cpu usage                            | X       |


### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Partitionning-->

| Metric Name          | Unit   |
| :------------------- | :----- |
| Partitioning Status  | string |

<!--Connection-time-->

| Metric name      | Unit  |
| :--------------- | :---- |
| Connection time  | s     |

<!--Connections-Number-->

| Metric name        | Unit       |
| :----------------- | :--------- |
| Connections number | count or % |

<!--Database-size-->

| Metric name   | Unit       |
| :------------ | :--------- |
| Database size | Bytes or % |

<!--Myisam-Keycache-->

| Metric name     | Unit  |
| :-------------- | :---- |
| Myisam Keycache | %     |

<!--Open-files-->

| Metric name    | Unit  |
| :------------- | :---- |
| Open Files     | %     |

<!--Slowqueries-->

| Metric name   | Unit  |
| :------------ | :---- |
| Slowqueries   | count |

<!--Queries-->

| Metric name | Unit  |
| :---------- | :---- |
| Queries     | count |

<!--Cpu-->

| Metric name                        | Unit |
| :--------------------------------- | :--- |
| cpu.utilization.percentage         | %    |
| core.cpu.utilization.percentage    | %    |

<!--Memory-->

| Metric name             | Unit  |
| :---------------------  | :---- |
| memory.usage.bytes      | Bytes |
| memory.free.bytes       | Bytes |
| memory.usage.percentage | %     |
| memory.buffer.bytes     | Bytes |
| memory.cached.bytes     | Bytes |
| memory.shared.bytes     | Bytes |

<!--Swap-->

| Metric name                 | Unit  |
| :-------------------------- | :---- |
| swap.usage.bytes            | Bytes |
| swap.free.bytes             | Bytes | 
| swap.usage.percentage       | %     |

<!--Load-->

| Metric name                 | Unit                          |
| :-------------------------- | :---------------------------- |
| load1                       | System load 1 minute-sample   |
| load5                       | System load 5 minutes-sample  |
| load15                      | System load 15 minutes-sample |

<!--END_DOCUSAURUS_CODE_TABS-->


## Prerequisites

### Creating a database user for Service Partitioning Monitoring

In order to be able to collect the needed information from the database, a database user with specific privileges is required:

``` mysql
CREATE USER 'monitor_user'@'IP_POLLER' IDENTIFIED BY 'a_very_secure_passwd';
GRANT SELECT ON *.* to 'monitor_user'@'IP_POLLER';
```

### SNMP

SNMP must be configured on each poller being monitored. You can refer to this [documentation](../operatingsystems-linux-snmp.html#prerequisites) describing how to set up a quick SNMP configuration.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Install the Centreon Plugin packages on the poller that will monitor Centreon monitoring database:

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Database centreon-plugin-Operatingsystems-Linux-Snmp

```

2. On the Centreon Web interface, install the **Centreon Database** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

<!--Offline License-->

1. Install the Centreon Plugin packages on every poller that will monitor Centreon monitoring database:

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Database centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Install the **Centreon Database** Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-monitoring-centreon-database
```

3. On the Centreon Web interface, install the **Centreon Database** Plugin Pack on the **Configuration > Plugin Packs** page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your *Centreon Central* server settings.
* Select the *App-Monitoring-Centreon-Database-custom* template to apply to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory  | Macro            |
| :--------- | :--------------- |
| X          | MYSQLPORT        |
| X          | MYSQLUSERNAME    |
| X          | MYSQLPASSWORD    |
|            | SNMPEXTRAOPTIONS |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account (`su - centreon-engine`) and test the Plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_mysql.pl \
	--plugin=database::mysql::plugin  \
	--host=localhost   \
	--username='monitor_user' \
	--password='centreon' \
	--port='3306' \
	--mode=threads-connected \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' 
```

The expected command output is shown below:

```bash
OK: Client connected threads total: 151 used: 10 (6.62%) free: 141 (93.38%)
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_mysql.pl \
	--plugin=database::mysql::plugin  \
	--host=localhost   \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```
/usr/lib/centreon/plugins//centreon_mysql.pl \
	--plugin=database::mysql::plugin  \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.html)
