---
id: sc-datadog-events
title: Datadog Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Before starting

- You can send events from a central server, a remote server or a poller.
- By default, this stream connector sends **events** from **host_status** and **service_status** events. The event format is shown **[there](#event-format)**.
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

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-datadog
```

</TabItem>
</Tabs>

## Configuration

To configure your stream connector, you must **head over** the **Configuration --> Poller --> Broker configuration** menu. **Select** the **central-broker-master** configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and **click** the **Output tab** when the broker form is displayed.

**Add** a new **generic - stream connector** output and **set** the following fields as follow:

| Field           | Value                                                   |
| --------------- | ------------------------------------------------------- |
| Name            | Datadog events                                          |
| Path            | /usr/share/centreon-broker/lua/datadog-events-apiv2.lua |
| Filter category | Neb                                                     |

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
| string | datadog_event_endpoint | the API endpoint that must be used to send events | /api/v1/events                               |
| string | http_server_url         | The Datadog API hosting server address             | https://api.datadoghq.com                    |
| string | logfile                 | the file in which logs are written                 | /var/log/centreon-broker/datadog-events.log |
| number | log_level               | logging level from 1 (errors) to 3 (debug)         | 1                                            |

### Standard parameters

All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules.

All those parameters are documented **[here](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters)**

Some of them are overridden by this stream connector.

| Type   | Name                         | Default value for the stream connector |
| ------ | ---------------------------- | -------------------------------------- |
| string | accepted_categories          | neb                                    |
| string | accepted_elements            | host_status,service_status             |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Datadog REST API.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Event format

This stream connector will send event with the following format.

### service_status event

```json
{
  "title": "CRITICAL my_host my_service",
  "text": "my service is not working",
  "aggregation_key": "service_27_12",
  "alert_type": "error",
  "host": "my_host",
  "date_happened": 1630590530
}
```

### host_status event

```json
{
  "title": "CRITICAL my_host",
  "text": "my host is not working",
  "aggregation_key": "host_27",
  "alert_type": "error",
  "host": "my_host",
  "date_happened": 1630590530
}
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. It also allows you to handle events type that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                          |
| ------ | ----------- | ---------------------------------------------- |
| string | format_file | /etc/centreon-broker/elastic-events-format.json |

> The event format configuration file must be readable by the centreon-broker user

To learn more about custom event format and templating file, head over the following **[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands

Here is the list of all the curl commands that are used by the stream connector.

### Send events

```shell
curl -X POST -H "content-type: application/json" -H "DD-API-KEY: <api_key>" '<http_server_url><datadog_event_endpoint>' -d '{"title":"CRITICAL my_host my_service","text":"my service is not working","aggregation_key":"service_27_12","alert_type":"error","host":"my_host","date_happened":1630590530}'
```

You must replace all the *`<xxxx>`* inside the above command with their appropriate value. *<http_server_url>* may become *https://api.datadoghq.com*.