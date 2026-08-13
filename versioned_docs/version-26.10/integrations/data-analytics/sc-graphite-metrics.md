---
id: sc-graphite-metrics
title: Graphite Metrics
description: "Host and service performance metrics delivery to Graphite"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Graphite Metrics stream connector allows you to send data from Centreon to Graphite.

## Before starting

- In most cases, you will want to send data from the central server. It is also possible to send it from a remote server or a poller (e.g. if you want to avoid the central server being a SPOF, or if you are an MSP and you install the stream connector on a poller or a remote server within your customer's infrastructure).
- By default, the Graphite Metrics stream connector sends **metrics** from [**host_status**](../../developer/developer-broker-mapping.md#host-status) and [**service_status**](../../developer/developer-broker-mapping.md#service-status) Broker events. These metrics are contained in the **perf_data** field of the events. The event format is shown **[here](#event-format)**.
- These events are sent each time a host or a service is checked. Various parameters let you [filter out events](#filtering-or-adapting-the-data-you-want-to-send-to-graphite).

## Installation

Perform the installation on the server that will send data to Graphite (central server, remote server, poller).

1. Login as `root` using your favorite SSH client.

2. Run the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-graphite
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-graphite
```

</TabItem>

<TabItem value="Debian 12" label="Debian 12">

```shell
apt install centreon-stream-connector-graphite
```

</TabItem>
</Tabs>

## Configuring your Graphite equipment

You may need to configure your Graphite equipment so that it can receive data from Centreon. Please refer to Graphite's documentation.
Make sure Graphite is able to receive data sent by Centreon: flows must not be blocked by Graphite's configuration or by a security equipment.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                     |
| --------------- | --------------------------------------------------------- |
| Name            | Graphite metrics                                          |
| Path            | /usr/share/centreon-broker/lua/graphite-metrics-apiv2.lua |
| Filter category | Neb                                                       |

5. To enable Centreon to connect to your Graphite equipment, fill in the following mandatory parameters. The fields for the first entry are already present. Click on the **+Add a new entry** link located below the **Filter category** table to add another one.

| Type   | Name    | Value explanation       | Value example         |
| ------ | ------- | ----------------------- | --------------------- |
| string | address | The address of Graphite | `graphite.test.local` |

6. Fill in any optional parameters you want (using the **+Add a new entry** link):

| Type   | Name      | Value explanation                          | default value                                 |
| ------ | --------- | ------------------------------------------ | --------------------------------------------- |
| string | logfile   | The file in which logs are written         | /var/log/centreon-broker/graphite-metrics.log |
| number | log_level | Logging level from 1 (errors) to 3 (debug) | 1                                             |

7. Use the stream connector's optional parameters to [filter or adapt the data you want Centreon to send to Graphite](#filtering-or-adapting-the-data-you-want-to-send-to-graphite).

8. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Restart **centengine** on all pollers:

   ```shell
   systemctl restart centengine
   ```

   Graphite should now receive data from Centreon. To test if it is working, see [Test commands: testing the stream connector](#test-commands-testing-the-stream-connector).

### Filtering or adapting the data you want to send to Graphite

All stream connectors have a set of [optional parameters](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters), that allow you to filter the data you will send to your Graphite equipment, to reformat the data, to define a proxy...

Each optional parameter has a default value, that is indicated in the corresponding documentation.

* To override the default value of a parameter, click on the **+Add a new entry** link located below the **Filter category** table to add a custom parameter. For example, if you want to only send to Graphite the events handled by a poller named "poller-1", enter:

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* For the Graphite Metrics stream connector, the following values always override the default values, you do not need to define them in the interface.

| Type   | Name                        | Default value for the stream connector |
| ------ | --------------------------- | -------------------------------------- |
| string | accepted_categories         | neb                                    |
| string | accepted_elements           | host_status,service_status             |
| number | max_buffer_size             | 1000                                   |
| number | hard_only                   | 0                                      |
| number | enable_service_status_dedup | 0                                      |
| number | enable_host_status_dedup    | 0                                      |
| string | metric_name_regex           | `(no_forbidden_character)`             |

* The Graphite Metrics stream connector also provides a set of dedicated parameters to tune which data you send and how it is sent

> Beware, options listed in the below table that add data to a metric are all disabled by default. Keep in mind that enabling them will increase the data volume sent to Graphite because it will either: 
> - Add new tags to a metric
> - Generate up to 5 additional metric events per metric plus tags (hostgroups being sent only through tags)
> The Test commands in the [Test commands section](#test-commands-testing-the-stream-connector) are examples with every option set to 1 or "as_metric".

| Type   | Name                | Default value | Description                                                                                                                                                                                                                                                                                                                                                                    |
| ------ | ------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| number | port                | 2003          |                                                                                                                                                                                                                                                                                                                                                                                |
| string | username            | ""            |                                                                                                                                                                                                                                                                                                                                                                                |
| string | password            | ""            |                                                                                                                                                                                                                                                                                                                                                                                |
| string | add_min_max_mode    | ""            | You can either set it to "as_tag" or "as_metric". The first case will set the min and max values as tags in the metric. The second option will generate a dedicated metric called <metric_name>.min with a "type" tag set to "metric_min". Default value is empty, meaning that the min/max values are not sent at all                                                         |
| string | add_thresholds_mode | ""            | You can either set it to "as_tag" or "as_metric". The first case will set the warning and critical threshold values as tags in the metric. The second option will generate a dedicated metric called <metric_name>.warning_threshold with a "type" tag set to "metric_warning_threshold". Default value is empty, meaning that the warning/critical values are not sent at all |
| number | add_hostgroups      | 0             | Setting the value to 1 will add the list of hostgroups as tags in the metric event                                                                                                                                                                                                                                                                                             |
| number | add_state_metric    | 0             | Setting the value to 1 will create a new metric event to send the state of the host/service (ok, warning...). This type of metric event will have a "type" tag set to "metric_state"                                                                                                                                                                                           |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more than one event in each call to Graphite.

To use this feature you must add the following parameter in your stream connector configuration.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Event format

This stream connector will send events with the following format.

### service_status event

```txt
pl.max;host=google;poller=Central;service=loop_service;hostgroups=hg_1_1,hg_1;type=metric_max 100.0 1786629716
pl.warning_threshold;host=google;poller=Central;service=loop_service;hostgroups=hg_1_1,hg_1;type=metric_warning_threshold 40.0 1786629716
pl.critical_threshold;host=google;poller=Central;service=loop_service;hostgroups=hg_1_1,hg_1;type=metric_critical_threshold 80.0 1786629716
pl.state;host=google;poller=Central;service=loop_service;hostgroups=hg_1_1,hg_1;type=metric_state 1 1786629716
pl;host=google;poller=Central;service=loop_service;hostgroups=hg_1_1,hg_1;type=metric_value 0.0 1786629716
```

### host_status event

```json
pl.max;host=central;poller=Central;hostgroups=hg_1_1,hg_1;type=metric_max 100.0 1786629579
pl.warning_threshold;host=central;poller=Central;hostgroups=hg_1_1,hg_1;type=metric_warning_threshold 80.0 1786629579
pl.critical_threshold;host=central;poller=Central;hostgroups=hg_1_1,hg_1;type=metric_critical_threshold 100.0 1786629579
pl.state;host=central;poller=Central;hostgroups=hg_1_1,hg_1;type=metric_state 0 1786629579
pl;host=central;poller=Central;hostgroups=hg_1_1,hg_1;type=metric_value 0.0 1786629579
```

### Custom event format

You can't change the format of the event for metrics oriented stream connectors. This means you cannot send other Broker events that contain performance data.

## Test commands: testing the stream connector

### Sending events

If you want to test that events are sent to Graphite correctly:

1. Log in to the server that you configured to send events to Graphite (your central server, a remote server or a poller).
2. Run the following command:

```shell
   echo -n 'pl.min,host=new-host-in-cache;poller=Central;hostgroups=;type=metric_min 0.0 1786629792
pl.max;host=new-host-in-cache;poller=Central;hostgroups=;type=metric_max 100.0 1786629792
pl.warning_threshold;host=new-host-in-cache;poller=Central;hostgroups=;type=metric_warning_threshold 80.0 1786629792
pl.critical_threshold;host=new-host-in-cache;poller=Central;hostgroups=;type=metric_critical_threshold 100.0 1786629792
pl.state;host=new-host-in-cache;poller=Central;hostgroups=;type=metric_state 0 1786629792
pl;host=new-host-in-cache;poller=Central;hostgroups=;type=metric_value 0.0 1786629792' | nc -z -v <graphite_address> <graphite_port>
```

> Replace all the *`<xxxx>`* inside the above command with the correct value. For instance, *\<graphite_address\>* may become *graphite.test.local*.

3. Check that the event has been received by Graphite.

## Additional information

Graphite is often paired with Grafana, so here is a Grafana query example that you can use.

Here are the Centreon metrics sent to Graphite for this example (one for the metric value, one for the warning threshold).

```txt
animals.count;host=central;poller=Central;metric_instance=ducks;metric_subinstances=mallard;service=passive;hostgroups=hg_1_1,hg_1;type=metric_value 62.0 1786627949
animals.count.warning_threshold;host=central;poller=Central;metric_instance=ducks;metric_subinstances=mallard;service=passive;hostgroups=hg_1_1,hg_1;type=metric_warning_threshold 80.0 1786627949
```

You can use the following Grafana queries:

```txt
aliasByTags(seriesByTag('metric_instance=ducks', 'type=metric_value', 'metric_subinstances=mallard'), 'name', 'metric_instance', 'metric_subinstances', 'type')
aliasByTags(seriesByTag('metric_instance=ducks', 'type=metric_warning_threshold', 'metric_subinstances=mallard'), 'name', 'metric_instance', 'metric_subinstances', 'type')
```

Where:

- seriesByTag() function and parameters are used to filter the metric we want.
- aliasByTags() function and parameters are used to avoid displaying an unnecessarily long metric name (by default it displays all tags).
- The first query is used to display the metric value evolution overtime.
- The second query is used to display the warning threshold curve on the graph.

The table below lists every usable tags:

| Tag name                  | Optional | Description                                                                                                      |
| ------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| poller                    | no       | the name of the poller monitoring the host                                                                       |
| host                      | no       | the name of the host                                                                                             |
| service                   | yes      | only for services events, the name of the service                                                                |
| type                      | yes      | can be `metric_[value                                                                                            | state | min | max | warning_threshold | critical_threshold]` |
| hostgroups                | yes      | only if the parameter "add_hostgroups" is set to "1" and there is at least one hostgroup linked to the host      |
| metric_instance           | yes      | only if the Centreon metric modern format contains one                                                           |
| metric_subinstances       | yes      | only if the Centreon metric modern format contains at least one                                                  |
| metric_min                | yes      | only if the parameter "add_min_max_mode" is set to "as_tag" and there is a min value available                   |
| metric_max                | yes      | only if the parameter "add_min_max_mode" is set to "as_tag" and there is a max value available                   |
| metric_warning_threshold  | yes      | only if the parameter "add_thresholds_mode" is set to "as_tag" and there is a warning threshold value available  |
| metric_critical_threshold | yes      | only if the parameter "add_thresholds_mode" is set to "as_tag" and there is a critical threshold value available |
