---
id: sc-influxdb2-metrics
title: InfluxDB 2 Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The InfluxDB 2 Metrics stream connector allows you to send data from Centreon to InfluxDB 2 instances.

## Before starting

- In most cases, you will want to send data from the central server. It is also possible to send it from a remote server or a poller 
(e.g. if you want to avoid the central server being a SPOF, or if you are an MSP and you install the stream connector on a poller or 
a remote server within your customer's infrastructure).
- By default, the InfluxDB 2 Metrics stream connector sends **metrics** from [**host_status**](../../developer/developer-broker-mapping.md#host-status) 
and [**service_status**](../../developer/developer-broker-mapping.md#service-status) Broker events. These metrics are contained in the **perf_data** 
field of the events. The event format is shown **[here](#event-format)**.
- These events are sent each time a host or a service is checked. Various parameters let you [filter out events](#filtering-or-adapting-the-data-you-want-to-send-to-influxdb2).

## Installation

Perform the installation on the server that will send data to InfluxDB 2 (central server, remote server, poller).

1. Login as `root` using your favorite SSH client.

2. Run the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-influxdb
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-influxdb
```

</TabItem>

<TabItem value="Debian 11 & 12" label="Debian_11_&_12">

```shell
apt install centreon-stream-connector-influxdb
```

</TabItem>
</Tabs>

## Configuring your InfluxDB 2 equipment

You may need to configure your InfluxDB 2 equipment so that it can receive data from Centreon. Please refer to the documentation of InfluxDB 2.
Make sure InfluxDB 2 is able to receive data sent by Centreon: flows must not be blocked by the configuration of InfluxDB 2 or by a security equipment.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                      |
| --------------- |------------------------------------------------------------|
| Name            | InfluxDB 2 metrics                                          |
| Path            | /usr/share/centreon-broker/lua/influxdb2-metrics-apiv2.lua |
| Filter category | Neb                                                        |

5. To enable Centreon to connect to your InfluxDB 2 equipment, fill in the following mandatory parameters. The fields for the first entry are already present. 
Click on the **+Add a new entry** link located below the **Filter category** table to add another one.

| Type   | Name            | Value explanation                             | Value exemple                                                                           |
| ------ |-----------------|-----------------------------------------------|-----------------------------------------------------------------------------------------|
| string | bucket_id       | The ID of the bucket where metrics will be sent      | `65f5f748e28c92f0`                                                                      |
| string | bucket_api_key  | The API key used to send data to the bucket   | `OGwOM8nse3FHjxyGw5ODLWWXS1oEpcPsjLcRl09zmCEbBE0TKgAiJiKOyKOBUZxoo76qe6-PTPq-70ECCwA==` |
| string | org_name        | The name of the InfluxDB organization         | `centreon`                                                                              |
| string | http_server_url | The InfluxDB address with the port at the end | `https://myinfluxdb2.local:8086`                                                        |

6. Fill in any optional parameters you want (using the **+Add a new entry** link):

| Type   | Name       | Value explanation                          | default value                                  |
| ------ |------------|--------------------------------------------|------------------------------------------------|
| string | logfile    | The file in which logs are written         | /var/log/centreon-broker/influxdb2-metrics.log |
| number | log_level  | Logging level from 1 (errors) to 3 (debug) | 1                                              |

7. Use the stream connector's optional parameters to [filter or adapt the data you want Centreon to send to InfluxDB 2](#filtering-or-adapting-the-data-you-want-to-send-to-influxdb2).

8. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Restart **centengine** on all pollers:

   ```shell
   systemctl restart centengine
   ```

   InfluxDB 2 should now receive data from Centreon. To test if it is working, see [Curl commands: testing the stream connector](#curl-commands-testing-the-stream-connector).

### Filtering or adapting the data you want to send to InfluxDB 2

All stream connectors have a set of [optional parameters](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters), that allow you to filter the data you will send to your InfluxDB 2 equipment, to reformat the data, to define a proxy...

Each optional parameter has a default value, that is indicated in the corresponding documentation.

* To override the default value of a parameter, click on the **+Add a new entry** link located below the **Filter category** table to add a custom parameter. For example, if you want to only send to InfluxDB 2 the events handled by a poller named "poller-1", enter:

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* For the InfluxDB 2 Metrics stream connector, the following values always override the default values, you do not need to define them in the interface.

| Type   | Name                         | Default value for the stream connector |
|--------|------------------------------|----------------------------------------|
| string | influxdb2_api_endpoint       | `/api/v2/write`                        |
| string | influxdb2_precision          | `s`                                    |
| string | accepted_categories          | `neb`                                  |
| string | accepted_elements            | `host_status,service_status`           |
| number | hard_only                    | `0`                                    |
| number | enable_host_status_dedup     | `0`                                    |
| number | enable_service_status_dedup  | `0`                                    |
| string | metric_name_regex            | `([, =])`                              |
| string | metric_replacement_character | `\\%1`                                 |
| number | use_deprecated_metric_system | `0`                                    |

> For metrics name and replacements see [here](https://docs.influxdata.com/influxdb/cloud/reference/syntax/line-protocol/#special-characters).

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the InfluxDB 2 REST API.

To use this feature you must add the following parameter in your stream connector configuration.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

> According to [best practice](https://docs.influxdata.com/influxdb/cloud/write-data/best-practices/optimize-writes/#batch-writes), `max_buffer_size` is set at 5000 lines by default. But you should lower this value to a few hundred if you have less than 10 000 services.

## Event format

This stream connector will send events with the following format.

### service_status event

```
rta,type=service,service.name=my_service,host.name=central,poller=Central,metric.unit=ms value=0.008 1694370951
pl,type=service,service.name=my_service,host.name=central,poller=Central,metric.unit=% value=0.0 1694370951
```

### host_status event

```
rta,type=host,host.name=central,poller=Central,metric.unit=ms value=0.008 1694370951
pl,type=host,host.name=central,poller=Central,metric.unit=% value=0.0 1694370951
```

### Custom event format

This stream connector is not compatible with custom event format.

## Curl commands: testing the stream connector

### Sending events

If you want to test that events are sent to InfluxDB 2 correctly:

1. Log in to the server that you configured to send events to InfluxDB 2 (your central server, a remote server or a poller).
2. Run the following command:

   ```shell
    curl -X POST -H 'content-type: text/plain; charset=utf-8' -H 'accept: application/json' -H 'Authorization: Token <bucket_api_key>' 'http://<http_server_url>/api/v2/write?bucket=<bucket_id>&org=<org_name>&precision=s' -d
   ```

   > Replace all the *`<xxxx>`* inside the above command with the correct value. For instance, *<bucket_id>* may become something like *65f5f748e28c92f0*.

3. Check that the event has been received by InfluxDB 2.
