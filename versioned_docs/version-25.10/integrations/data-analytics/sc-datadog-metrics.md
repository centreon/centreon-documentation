---
id: sc-datadog-metrics
title: Datadog Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Before starting

- You can send events from a central server, a remote server or a poller.
- By default, this stream connector sends **metrics** from **host_status** and **service_status** events. The event format is shown **[there](#event-format)**.
- Aformentioned events are fired each time a host or a service is checked. Various parameters let you filter out events.

## Installation

Login as `root` on the Centreon central server using your favorite SSH client.

Run the command according on your system:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-datadog
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-datadog
```

</TabItem>

<TabItem value="Debian 12" label="Debian 12">

```shell
apt install centreon-stream-connector-datadog
```

</TabItem>
</Tabs>

## Configuration

To configure your stream connector, you must **head over** the **Configuration --> Poller --> Broker configuration** menu. **Select** the **central-broker-master** configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and **click** the **Output tab** when the broker form is displayed.

**Add** a new **generic - stream connector** output and **set** the following fields as follow:

| Field           | Value                                                    |
| --------------- | -------------------------------------------------------- |
| Name            | Datadog metrics                                          |
| Path            | /usr/share/centreon-broker/lua/datadog-metrics-apiv2.lua |
| Filter category | Neb                                                      |

### Add Datadog mandatory parameters

Each stream connector has a set of mandatory parameters. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name    | Value explanation   | Value exemple |
| ------ | ------- | ------------------- | ------------- |
| string | api_key | the datadog api key |               |

### Add Datadog optional parameters

Some stream connectors have a set of optional parameters dedicated to the Software that are associated with. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name                    | Value explanation                                  | default value                                |
| ------ | ----------------------- | -------------------------------------------------- | -------------------------------------------- |
| string | datadog_centreon_url    | your centreon server address                       | `http://yourcentreonaddress.local`           |
| string | datadog_metric_endpoint | the API endpoint that must be used to send metrics | /api/v1/series                               |
| string | http_server_url         | The Datadog API hosting server address             | https://api.datadoghq.com                    |
| string | logfile                 | the file in which logs are written                 | /var/log/centreon-broker/datadog-metrics.log |
| number | log_level               | logging level from 1 (errors) to 3 (debug)         | 1                                            |

### Standard parameters

All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules.

All those parameters are documented **[here](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters)**

Some of them are overridden by this stream connector.

| Type   | Name                         | Default value for the stream connector |
| ------ | ---------------------------- | -------------------------------------- |
| string | accepted_categories          | neb                                    |
| string | accepted_elements            | host_status,service_status             |
| number | max_buffer_size              | 30                                     |
| number | hard_only                    | 0                                      |
| number | enable_service_status_dedup  | 0                                      |
| number | enable_host_status_dedup     | 0                                      |
| string | metric_name_regex            | `[^a-zA-Z0-9_%.]`                      |
| string | metric_replacement_character | _                                      |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Datadog REST API.

> The default value for this stream connector is 30. A small value is more likely to slow down the Centreon broker thus generating retention.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Event format

This stream connector will send event with the following format.

### service_status event

```json
{
  "host": "my_host",
  "metric": "database.used.percent",
  "points": [[1630590530, 80]],
  "tags": [
    "service:my_service",
    "instance:my_instance",
    "subinstance:sub_1",
    "subinstance:sub_2"
  ]
}
```

### host_status event

```json
{
  "host": "my_host",
  "metric": "database.used.percent",
  "points": [[1630590530, 80]],
  "tags": [
    "instance:my_instance",
    "subinstance:sub_1",
    "subinstance:sub_2"
  ]
}
```

### Custom event format

You can"t change the format of the event for metrics oriented stream connectors.

## Curl commands

Here is the list of all the curl commands that are used by the stream connector.

### Send events

```shell
curl -X POST -H "content-type: application/json" -H "DD-API-KEY: <api_key>" '<http_server_url><datadog_metric_endpoint>' -d '{"host":"my_host","metric":"database.used.percent","points":[[1630590530,80]],"tags":["service:my_service","instance:my_instance","subinstance:sub_1","subinstance:sub_2"]}'
```

You must replace all the *`<xxxx>`* inside the above command with their appropriate value. *<http_server_url>* may become *https://api.datadoghq.com*.
