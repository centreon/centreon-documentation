---
id: sc-splunk-metrics
title: Splunk Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Hello community! We're looking for a contributor to help us to translate the content in french. If it's you, let us know and ping us on [slack](https://centreon.slack.com).

## Before starting

- You can send events from a central server, a remote server or a poller.
- By default, this stream connector sends **metrics** from **host_status** and **service_status** events. The event format is shown **[there](#event-format)**.
- Aformentioned events are fired each time a host or a service is checked. Various parameters let you filter out events.

## Installation

Connectez vous en tant que `root` sur le serveur Centreon central en utilisant votre client SSH préféré.

Lancer la commande adaptée à votre système :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-splunk
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-splunk
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-splunk
```

</TabItem>
</Tabs>

## Configuration

To configure your stream connector, you must **head over** the **Configuration --> Poller --> Broker configuration** menu. **Select** the **central-broker-master** configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and **click** the **Output tab** when the broker form is displayed.

**Add** a new **generic - stream connector** output and **set** the following fields as follow:

| Field           | Value                                                   |
| --------------- | ------------------------------------------------------- |
| Name            | Splunk metrics                                          |
| Path            | /usr/share/centreon-broker/lua/splunk-metrics-apiv2.lua |
| Filter category | Neb                                                     |

### Add Splunk mandatory parameters

Each stream connector has a set of mandatory parameters. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name            | Value explanation                       | Value exemple                                           |
| ------ | --------------- | --------------------------------------- | ------------------------------------------------------- |
| string | http_server_url | the url of the Splunk service collector | `https://mysplunk.centreon.com:8088/services/collector` |
| string | splunk_token    | Token to use the event collector api    |                                                         |

### Add Splunk optional parameters

Some stream connectors have a set of optional parameters dedicated to the Software that are associated with. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name              | Value explanation                                               | default value                               |
| ------ | ----------------- | --------------------------------------------------------------- | ------------------------------------------- |
| string | splunk_sourcetype | Identifies the data structure of the event                      | _json                                       |
| string | splunk_host       | Name or address of the server that generated the event          | Central                                     |
| string | splunk_index      | Index where the events are stored                               |                                             |
| string | splunk_source     | source of the http event collector. like `http:<name_of_index>` |                                             |
| string | logfile           | the file in which logs are written                              | /var/log/centreon-broker/splunk-metrics.log |
| number | log_level         | logging level from 1 (errors) to 3 (debug)                      | 1                                           |

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
| string | metric_name_regex            | `[^a-zA-Z0-9_]`                        |
| string | metric_replacement_character | _                                      |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Splunk REST API.

> The default value for this stream connector is 30. A small value is more likely to slow down the Centreon broker thus generating retention.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Event format

This stream connector will send event with the following format.

### service_status event

```json
{
  "sourcetype": "_json",
  "source": "http:my_index",
  "index": "my_index",
  "host": "Central",
  "time": 1630590530,
  "fields": {
    "event_type": "service",
    "state": 2,
    "state_type": 1,
    "hostname": "my_host",
    "service_description": "my_service",
    "ctime": 1630590520,
    "metric_name: database.used.percent": 80,
    "instance": "my_db",
    "subinstance": ["sub_1", "sub_2"]
  }
}
```

### host_status event

```json
{
  "sourcetype": "_json",
  "source": "http:my_index",
  "index": "my_index",
  "host": "Central",
  "time": 1630590530,
  "fields": {
    "event_type": "host",
    "state": 1,
    "state_type": 1,
    "hostname": "my_host",
    "ctime": 1630590520,
    "metric_name: database.used.percent": 80,
    "instance": "my_db",
    "subinstance": ["sub_1", "sub_2"]
  }
}
```

### Custom event format

You can"t change the format of the event for metrics oriented stream connectors.

## Curl commands

Here is the list of all the curl commands that are used by the stream connector.

### Send events

```shell
curl -X POST -H "content-type: application/json" -H "authorization: Splunk <splunk_token>" '<http_server_url>' -d '{"sourcetype": "<splunk_sourcetype>","source": "<splunk_source>","index": "<splunk_index>","host": "<splunk_host>","time": <epoch_timestamp>,"event": {"event_type": "host","state": 1,"state_type": 1,"hostname":"my_host","ctime": 1630590520,"metric_name: database.used.percent": 80,"instance": "my_db","subinstance": ["sub_1", "sub_2"]}}'
```

You must replace all the *`<xxxx>`* inside the above command with their appropriate value. *<splunk_sourcetype>* may become *_json*.
