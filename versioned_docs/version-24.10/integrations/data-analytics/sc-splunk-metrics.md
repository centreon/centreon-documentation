---
id: sc-splunk-metrics
title: Splunk Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Splunk Metrics stream connector allows you to send data from Centreon to Splunk instances.

## Before starting

If you want to retrieve only metrics, use the Splunk Metrics stream connector. If you want to retrieve all the data for the events, use the Splunk Events stream connector.

- In most cases, you will want to send data from the central server. It is also possible to send it from a remote server or a poller (e.g. if you want to avoid the central server being a SPOF, or if you are an MSP and you install the stream connector on a poller or a remote server within your customer's infrastructure).
- By default, the Splunk Metrics stream connector sends **metrics** from [**host_status**](../../developer/developer-broker-mapping.md#host-status) and [**service_status**](../../developer/developer-broker-mapping.md#service-status) Broker events. These metrics are contained in the **perf_data** field of the events. The event format is shown **[here](#event-format)**.
- These events are sent each time a host or a service is checked. Various parameters let you [filter out events](#filtering-or-adapting-the-data-you-want-to-send-to-splunk).

## Installation

Perform the installation on the server that will send data to Splunk (central server, remote server, poller).

1. Login as `root` using your favorite SSH client.

2. Run the following command:

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

<TabItem value="Debian 12" label="Debian 12">

```shell
apt install centreon-stream-connector-splunk
```

</TabItem>
</Tabs>

## Configuring your Splunk equipment

You may need to configure your Splunk equipment so that it can receive data from Centreon. Please refer to Splunk's documentation.
Make sure Splunk is able to receive data sent by Centreon: flows must not be blocked by Splunk's configuration or by a security equipment.

The correct sourcetype for the stream connector is "_json". Other useful information may be for example "source": "http:my_index", "index": "my_index", "host": "Central". You can also add this information to your stream connector's configuration if you need to.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                   |
| --------------- | ------------------------------------------------------- |
| Name            | Splunk metrics                                          |
| Path            | /usr/share/centreon-broker/lua/splunk-metrics-apiv2.lua |
| Filter category | Neb                                                     |

5. To enable Centreon to connect to your Splunk equipment, fill in the following mandatory parameters. The fields for the first entry are already present. Click on the **+Add a new entry** link located below the **Filter category** table to add another one.

| Type   | Name            | Value explanation                       | Value exemple                                           |
| ------ | --------------- | --------------------------------------- | ------------------------------------------------------- |
| string | http_server_url | The URL of the Splunk service collector | `https://mysplunk.centreon.com:8088/services/collector` |
| string | splunk_token    | Token to use the event collector API    |                                                         |

6. Fill in any optional parameters you want (using the **+Add a new entry** link):

| Type   | Name              | Value explanation                                               | default value                               |
| ------ | ----------------- | --------------------------------------------------------------- | ------------------------------------------- |
| string | logfile           | The file in which logs are written                              | /var/log/centreon-broker/splunk-metrics.log |
| number | log_level         | Logging level from 1 (errors) to 3 (debug)                      | 1                                           |

7. Use the stream connector's optional parameters to [filter or adapt the data you want Centreon to send to Splunk](#filtering-or-adapting-the-data-you-want-to-send-to-splunk).

8. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Restart **centengine** on all pollers:

   ```shell
   systemctl restart centengine
   ```

   Splunk should now receive data from Centreon. To test if it is working, see [Curl commands: testing the stream connector](#curl-commands-testing-the-stream-connector).

### Filtering or adapting the data you want to send to Splunk

All stream connectors have a set of [optional parameters](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters), that allow you to filter the data you will send to your Splunk equipment, to reformat the data, to define a proxy...

Each optional parameter has a default value, that is indicated in the corresponding documentation.

* To override the default value of a parameter, click on the **+Add a new entry** link located below the **Filter category** table to add a custom parameter. For example, if you want to only send to Splunk the events handled by a poller named "poller-1", enter:

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* For the Splunk Metrics stream connector, the following values always override the default values, you do not need to define them in the interface.

| Type   | Name                | Default value for the stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Splunk REST API.

To use this feature you must add the following parameter in your stream connector configuration.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Event format

This stream connector will send events with the following format.

### service_status event

```json
{
  "sourcetype": "_json",
  "source": "http:my_index",
  "index": "my_index",
  "host": "Central",
  "time": 1675865364,
  "fields": {
    "event_type": "service",
    "state": 2,
    "state_type": 1,
    "hostname": "my_host",
    "service_description": "my_service",
    "ctime": 1675865364,
    "metric: pl": 0,
    "metric: rta": 10,
    "metric: rtmin": 5,
    "metric: rtmax": 15
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
  "time": 1675865364,
  "fields": {
    "event_type": "host",
    "state": 1,
    "state_type": 1,
    "hostname": "my_host",
    "ctime": 1675865364,
    "metric: pl": 0,
    "metric: rta": 10,
    "metric: rtmin": 5,
    "metric: rtmax": 15
  }
}
```

### Custom event format

You can't change the format of the event for metrics oriented stream connectors. This means you cannot send other Broker events that contain performance data.

## Curl commands: testing the stream connector

### Sending events

If you want to test that events are sent to Splunk correctly:

1. Log in to the server that you configured to send events to Splunk (your central server, a remote server or a poller).
2. Run the following command:

   ```shell
   curl -X POST -H "content-type: application/json" -H "authorization: Splunk <splunk_token>" \<http_server_url\>' -d '{"sourcetype": \<splunk_sourcetype\>","source": "<splunk_source>","index": "<splunk_index>","host": "<splunk_host>","time": <epoch_timestamp>,"event": {"event_type": "host","state": 1,"state_type": 1,"hostname":"my_host","ctime": 1675865364,"metric: pl": 0,"metric: rta": 10,"metric: rtmin": 5,"metric: rtmax": 15}}'
   ```

   > Replace all the *`<xxxx>`* inside the above command with the correct value. For instance, \<splunk_sourcetype\>* may become *_json*.

3. Check that the event has been received by Splunk.
