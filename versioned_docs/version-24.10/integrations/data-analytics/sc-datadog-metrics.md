---
id: sc-datadog-metrics
title: Datadog Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Datadog Metrics stream connector allows you to send data from Centreon to Datadog.

## Before starting

- In most cases, you will want to send data from the central server. It is also possible to send it from a remote server or a poller 
(e.g. if you want to avoid the central server being a SPOF, or if you are an MSP and you install the stream connector on a poller or 
a remote server within your customer's infrastructure).
- By default, the Datadog Metrics stream connector sends **metrics** from [**host_status**](../../developer/developer-broker-mapping.md#host-status) 
and [**service_status**](../../developer/developer-broker-mapping.md#service-status) Broker events. These metrics are contained in the **perf_data** 
field of the events. The event format is shown **[here](#event-format)**.
- These events are sent each time a host or a service is checked. Various parameters let you [filter out events](#filtering-or-adapting-the-data-you-want-to-send-to-datadog).

## Installation

Perform the installation on the server that will send data to Datadog (central server, remote server, poller).

1. Login as `root` using your favorite SSH client.

2. Run the following command:

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

## Configuring your Datadog equipment

You may need to configure your Datadog equipment so that it can receive data from Centreon. Please refer to Datadog's documentation.
Make sure Datadog is able to receive data sent by Centreon: flows must not be blocked by the configuration of Datadog or by a security equipment.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                    |
| --------------- | -------------------------------------------------------- |
| Name            | Datadog metrics                                          |
| Path            | /usr/share/centreon-broker/lua/datadog-metrics-apiv2.lua |
| Filter category | Neb                                                      |

5. To enable Centreon to connect to your Datadog equipment, fill in the following mandatory parameters. The fields for the first entry are already present. 
Click on the **+Add a new entry** link located below the **Filter category** table to add another one.

| Type   | Name         | Value explanation   | Value exemple                    |
| ------ |--------------|---------------------|----------------------------------|
| string | api_key      | The datadog api key | OGwOM8nse3FHjxyGw5ODLWWXS1oEpcPs |

6. Fill in any optional parameters you want (using the **+Add a new entry** link):

| Type   | Name      | Value explanation                          | default value                                |
| ------ |-----------|--------------------------------------------|----------------------------------------------|
| string | logfile   | The file in which logs are written         | /var/log/centreon-broker/datadog-metrics.log |
| number | log_level | Logging level from 1 (errors) to 3 (debug) | 1                                            |

7. Use the stream connector's optional parameters to [filter or adapt the data you want Centreon to send to Datadog](#filtering-or-adapting-the-data-you-want-to-send-to-datadog).

8. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Restart **centengine** on all pollers:

   ```shell
   systemctl restart centengine
   ```

   Datadog should now receive data from Centreon. To test if it is working, see [Curl commands: testing the stream connector](#curl-commands-testing-the-stream-connector).

### Filtering or adapting the data you want to send to Datadog

All stream connectors have a set of [optional parameters](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters), that allow you to filter the data you will send to your Datadog device, to reformat the data, to define a proxy...

Each optional parameter has a default value, that is indicated in the corresponding documentation.

* To override the default value of a parameter, click on the **+Add a new entry** link located below the **Filter category** table to add a custom parameter. For example, if you want to only send to Datadog the events handled by a poller named "poller-1", enter:

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* For the Datadog Metrics stream connector, the following values always override the default values, you do not need to define them in the interface.

| Type   | Name                         | Default value for the stream connector |
| ------ |------------------------------|----------------------------------------|
| string | datadog_centreon_url         | `http://yourcentreonaddress.local`     |
| string | datadog_metric_endpoint      | /api/v1/series                         |
| string | http_server_url              |  https://api.datadoghq.com             |
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

To use this feature you must add the following parameter in your stream connector configuration.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Event format

This stream connector will send events with the following format.

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

This stream connector is not compatible with custom event format. You can't change the format of the event for metrics oriented stream connectors.

## Curl commands: testing the stream connector

### Sending events

If you want to test that events are sent to Datadog correctly:

1. Log in to the server that you configured to send events to Datadog (your central server, a remote server or a poller).
2. Run the following command:

```shell
curl -X POST -H "content-type: application/json" -H "DD-API-KEY: <api_key>" '<http_server_url><datadog_metric_endpoint>' -d '{"host":"my_host","metric":"database.used.percent","points":[[1630590530,80]],"tags":["service:my_service","instance:my_instance","subinstance:sub_1","subinstance:sub_2"]}'
```

You must replace all the *`<xxxx>`* inside the above command with the correct value. *<http_server_url>* may become *https://api.datadoghq.com*.

3. Check that the event has been received by Datadog.
