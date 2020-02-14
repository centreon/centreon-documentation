---
id: applications-databases-influxdb
title: InfluxDB
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.3 | `STABLE` | Jun 18 2019 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Databases-Influxdb
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-DB-Influxdb-custom     |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro            | Description                    | Default value | Example  |
| :--------------- | :----------------------------- | :------------ | :------- |
| INFLUXDBPORT     | The InfluxDB instance port     | 9200          | 1234     |
| INFLUXDBPROTO    | The InfluxDB instance protocol | http          | https    |
| INFLUXDBUSERNAME | The InfluxDB instance username |               | centreon |
| INFLUXDBPASSWORD | The InfluxDB instance password |               | centreon |

