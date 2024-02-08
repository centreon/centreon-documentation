---
id: sc-clickhouse
title: Clickhouse
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Before starting

- In most cases, you will want to send data from the central server. It is also possible to send it from a remote server or a poller (e.g. if you want to avoid the central server being a SPOF, or if you are an MSP and you install the stream connector on a poller or a remote server within your customer's infrastructure).
- By default, the Clickhouse stream connector sends data from [**host_status**](../../developer/developer-broker-mapping.md#host-status) and [**service_status**](../../developer/developer-broker-mapping.md#service-status) Broker events. These metrics are contained in the **perf_data** field of the events. The event format is shown **[here](#event-format)**.
- These events are sent each time a host or a service is checked. Various parameters let you [filter out events](#filtering-or-adapting-the-data-you-want-to-send-to-clickhouse).

## Prerequisites

- The Clickhouse HTTP interface must be enabled. [(Clickhouse Documentation)](https://clickhouse.com/docs/en/interfaces/http).
- You must have a valid user/password that can **INSERT** data into the desired table.
- You must create a table in Clickhouse to receive Centreon data. Here is the table schema (you can change the database and table name. They are both configurable in the stream connector configuration).

### Standard table schema

This is the default schema that should be used.

```sql
CREATE TABLE centreon_stream.metrics
(
  host String,
  service String,
  metric_id String,
  metric_name String,
  metric_unit String,
  metric_value Decimal,
  metric_min Decimal,
  metric_max Decimal,
  timestamp DateTime,
  hostgroups Array(String)
)
ENGINE = MergeTree()
PRIMARY KEY (timestamp, host, service, metric_name, metric_id)
```

### Alternative table schema

> Disclaimer: you should not use this schema unless you absolutely want the internal metric_id of Centreon. This comes with the loss of many possibilities such as having access to metric units, min, max....
> To use this schema, please refer to the **use_deprecated_metric_system** parameter documentation below.

```sql
CREATE TABLE centreon_stream.metrics
(
  host String,
  service String,
  metric_id BIGINT,
  metric_name String,
  metric_value Decimal,
  timestamp DateTime,
  hostgroups Array(String)
)
ENGINE = MergeTree()
PRIMARY KEY (timestamp, host, service, metric_name, metric_id)
```

## Installation

Perform the installation on the server that will send data to Clickhouse (central server, remote server, poller).

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

1. Login as `root` using your favorite SSH client.

2. Install the **Epel** repository.

```shell
dnf install epel-release
```

3. Install the Centreon lua modules.

```shell
dnf install centreon-stream-connectors-lib
```

4. Download the Clickhouse metrics stream connector:

```shell
wget -O /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/develop/centreon-certified/clickhouse/clickhouse-metrics-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

1. Login as `root` using your favorite SSH client.

2. Install the **Epel** repository.

```shell
dnf install epel-release
```

3. Install the Centreon lua modules.

```shell
dnf install centreon-stream-connectors-lib
```

4. Download the Clickhouse metrics stream connector:

```shell
wget -O /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/develop/centreon-certified/clickhouse/clickhouse-metrics-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

1. Login as `root` using your favorite SSH client.

2. Install the Centreon lua modules.

```shell
dnf install centreon-stream-connectors-lib
```

3. Download the Clickhouse metrics stream connector:

```shell
wget -O /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/develop/centreon-certified/clickhouse/clickhouse-metrics-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua
```

</TabItem>
</Tabs>

## Configuring your Clickhouse equipment

You may need to configure your Clickhouse equipment so that it can receive data from Centreon. Please refer to Clickhouse's documentation.
Make sure Clickhouse is able to receive data sent by Centreon: flows must not be blocked by Clickhouse's configuration or by a security equipment.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Name            | Clickhouse metrics                                          |
| Path            | /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua |
| Filter category | Neb                                                         |

5. To enable Centreon to connect to your Clickhouse equipment, fill in the following mandatory parameters. The fields for the first entry are already present. Click on the **+Add a new entry** link located below the **Filter category** table to add another one.

| Type   | Name            | Value explanation                                           | Value exemple                   |
| ------ | --------------- | ----------------------------------------------------------- | ------------------------------- |
| string | user            | the Clickhouse user that will be used                       | centreon                        |
| string | password        | The password of the user                                    | centreon                        |
| string | http_server_url | The address of Clickhouse (do not forget protocol and port) | https://myclickhouse.local:8123 |

6. Fill in any optional parameters you want (using the **+Add a new entry** link):

| Type   | Name                         | Value explanation                                             | default value   |
| ------ | ---------------------------- | ------------------------------------------------------------- | --------------- |
| string | clickhouse_database          | the name of the database in which the desired table is stored | centreon_stream |
| string | clickhouse_table             | the table in which metrics are written                        | metrics         |
| number | use_deprecated_metric_system | allows you to use the alternative table schema when set to 1  | 0               |

7. Use the stream connector's optional parameters to [filter or adapt the data you want Centreon to send to Clickhouse](#filtering-or-adapting-the-data-you-want-to-send-to-clickhouse).

8. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Restart **centengine** on all pollers:

   ```shell
   systemctl restart centengine
   ```

   Clickhouse should now receive data from Centreon. To test if it is working, see [Curl commands: testing the stream connector](#curl-commands-testing-the-stream-connector).

### Filtering or adapting the data you want to send to Clickhouse

### Standard parameters

All stream connectors have a set of [optional parameters](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters), that allow you to filter the data you will send to your Clickhouse equipment, to reformat the data, to define a proxy...

Each optional parameter has a default value, that is indicated in the corresponding documentation.

* To override the default value of a parameter, click the **+Add a new entry** link located below the **Filter category** table to add a custom parameter. For example, if you want to only send to Clickhouse the events handled by a poller named "poller-1", enter:

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* For the Clickhouse stream connector, the following values always override the default values, you do not need to define them in the interface.

| Type   | Name                        | Default value for the stream connector | Additional notes                                                                                                                                                                                                                   |
| ------ | --------------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| string | accepted_categories         | neb                                    |                                                                                                                                                                                                                                    |
| string | accepted_elements           | host_status,service_status             |                                                                                                                                                                                                                                    |
| string | max_buffer_size             | 1000                                   | You should lower this value to about a hundred if you have less than 10 000 services. If you are performing troubleshooting operations with log_curl_commands and/or send_data_test parameters, you can lower this value to less than 10. |
| number | hard_only                   | 0                                      |                                                                                                                                                                                                                                    |
| number | enable_host_status_dedup    | 0                                      |                                                                                                                                                                                                                                    |
| number | enable_service_status_dedup | 0                                      |                                                                                                                                                                                                                                    |
## Event bulking

This stream connector is compatible with event bulking: it is able to send more that one event in each call to the Clickhouse REST API.

To use this feature you must add the following parameter in your stream connector configuration.

## Event format

This stream connector will send event with the following format.

### service_status event

```txt
INSERT INTO centreon_stream.metrics (host, timestamp, metric_name, metric_value, service, hostgroups, metric_id, metric_unit, metric_min, metric_max) VALUES ('central_1',1702910747,'rtmin',0.005,'Ping',['hg'],'10-8-rtmin','ms',,),('central_1',1702910747,'rta',0.061,'Ping',['hg'],'10-8-rta','ms',0.0,),('central_1',1702910747,'pl',0.0,'Ping',['hg'],'10-8-pl','%',0.0,100.0)
```

### host_status event

```txt
INSERT INTO centreon_stream.metrics (host, timestamp, metric_name, metric_value, service, hostgroups, metric_id, metric_unit, metric_min, metric_max) VALUES ('central_3',1702910932,'rtmin',0.0,'Ping',['hg'],'12-10-rtmin','ms',,),('central_3',1702910932,'rta',0.0,'Ping',['hg'],'12-10-rta','ms',0.0,),('central_3',1702910932,'pl',100.0,'Ping',['hg'],'12-10-pl','%',0.0,100.0)
```

### Result inside Clickhouse

```txt
┌─host────┬─service─┬─metric_name─┬─metric_unit─┬─metric_value─┬─metric_min─┬─metric_max─┬───────────timestamp─┬─hostgroups─────────────┐
│ central │         │ pl          │ %           │            0 │          0 │        100 │ 2023-11-27 14:23:31 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ rta         │ ms          │        0.052 │          0 │          0 │ 2023-11-27 14:23:31 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ rtmax       │ ms          │        0.052 │          0 │          0 │ 2023-11-27 14:23:31 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ rtmin       │ ms          │        0.052 │          0 │          0 │ 2023-11-27 14:23:31 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ pl          │ %           │            0 │          0 │        100 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ pl          │ %           │            0 │          0 │        100 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ rta         │ ms          │        0.013 │          0 │          0 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ rta         │ ms          │        0.013 │          0 │          0 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ rtmax       │ ms          │        0.049 │          0 │          0 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ rtmax       │ ms          │        0.049 │          0 │          0 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ rtmin       │ ms          │        0.004 │          0 │          0 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ rtmin       │ ms          │        0.004 │          0 │          0 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ pl          │ %           │            0 │          0 │        100 │ 2023-11-27 14:28:11 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ rta         │ ms          │        0.027 │          0 │          0 │ 2023-11-27 14:28:11 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ rtmax       │ ms          │        0.027 │          0 │          0 │ 2023-11-27 14:28:11 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ rtmin       │ ms          │        0.027 │          0 │          0 │ 2023-11-27 14:28:11 │ ['hg_1','hg_2','hg_3'] │
└─────────┴─────────┴─────────────┴─────────────┴──────────────┴────────────┴────────────┴─────────────────────┴────────────────────────┘
```

### Custom event format

You can't change the format of the event for metrics oriented stream connectors. This means you cannot send other Broker events that contain performance data.

## Curl commands: testing the stream connector

### Sending events

If you want to test that events are sent to Clickhouse correctly:

1. Log in to the server that you configured to send events to Clickhouse (your central server, a remote server or a poller).
2. Run the following command:

```shell
curl -X POST -H 'X-ClickHouse-User: <user>' -H 'X-ClickHouse-Key: <password>' '<http_server_url>' -d 'INSERT INTO <clickhouse_database>.<clickhouse_table> (host, timestamp, metric_name, metric_value, service, hostgroups, metric_id, metric_unit, metric_min, metric_max) VALUES ('central_2',1702910872,'rtmin',0.0,'Ping',['hg'],'11-9-rtmin','ms',,),('central_2',1702910872,'rta',0.0,'Ping',['hg'],'11-9-rta','ms',0.0,),('central_2',1702910872,'pl',100.0,'Ping',['hg'],'11-9-pl','%',0.0,100.0)'
```

> You must replace all the *`<xxxx>`* inside the below commands with their appropriate value. For example, *`<clickhouse_database>`* may become *centreon_stream*.

3. Check that the event has been received by Clickhouse.
