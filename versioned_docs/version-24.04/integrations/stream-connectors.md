---
id: stream-connectors
title: Stream connectors
---

Stream connectors transfer in real time the flow of monitoring data coming from the Centreon platform to a third-party tool. This flow can contain events or metrics.

## Release notes

## 2024

### August

<Tabs groupId="sync">
<TabItem value="Fix" label="Fix">

- [**Splunk Metrics**](data-analytics/sc-splunk-metrics.md) - Fixed an issue with **max_buffer_size** parameter in Splunk stream connector.
- [**Clickhouse**](data-analytics/sc-clickhouse.md) - Added a protection on metric names containing spaces.
- [**Influxdb2 Metrics**](data-analytics/sc-influxdb2-metrics.md) - Added a protection on metric names containing spaces.
- [**Centreon library: sc_macro**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_macro.lua) - Fixed an issue with **_scshort flag** leading to the macro name of an event being displayed instead of its value.

</TabItem>
<TabItem value="Enhancement" label="Enhancement">

- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added a new **enable_bam_host** parameter to send BAM "services".
- [**Centreon library: sc_flush**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_flush.lua) - Enhance error report when using **send_data** method in stream connector log files.

</TabItem>
</Tabs>

### May

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Canopsis Events**](data-analytics/sc-canopsis-events.md) - Enhanced a lot of functionalities to catch up with the new version of Canopsis (24.04).
- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Added a new parameter allowing a delta between timestamps, to fix an issue with the notification of a host status change.
- [**Centreon library: sc_logger**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_logger.lua) - Removed the **allow_insecure_connection** parameter to convert it to **verify_certificate** (working the opposite way).
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added a new **verify_certificate** parameter (and deprecated **allow_insecure_connection**).

</TabItem>
</Tabs>

### April

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**All stream connectors**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/docs/README.md) - Added additional debug information when an issue occurs while sending data.
- **Influxdb2 Metrics** - Added the possibility to send **metric_id**.

</TabItem>
</Tabs>

### February

<Tabs groupId="sync">
<TabItem value="New Stream connector" label="New Stream connector">

- [**Clickhouse Metrics**](data-analytics/sc-clickhouse.md) - Initial release of Clickhouse Metrics.

</TabItem>
</Tabs>

### January

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Elastic Metrics**](data-analytics/sc-elasticsearch-metrics.md) - Made elastic username and password optional.
- [**Elastic Metrics**](data-analytics/sc-elasticsearch-metrics.md) - Added min/max property with thresholds (warning/critical) in the template.
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added method to validate Lua patterns and build a table of patterns to compensate the lack of alternation operator (commonly known as | in POSIX regex).

</TabItem>
</Tabs>

## 2023

### November

<Tabs groupId="sync">
<TabItem value="Breaking-change" label="Breaking-change">

- [**Centreon library: sc_common**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_common.lua) - Adapted some event types (downtime, acknowledgement and ba_status) to the new bbdo3 protocol (introduced with the Centreon 23.10 release).

</TabItem>
<TabItem value="Enhancement" label="Enhancement">

- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Added a "rejected" filter for hostgroups, servicegroups, bvs, pollers and authors.

</TabItem>
</Tabs>

### October

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added a way to handle deprecated parameters like **max_buffer_age**.

</TabItem>
</Tabs>

### September

<Tabs groupId="sync">
<TabItem value="New Stream connector" label="New Stream connector">

- **InfluxDB2 Metrics** - Initial release of InfluxDB2 Metrics.

</TabItem>
</Tabs>

### July

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added a new **accepted_metrics** parameter to filter metrics that will be sent to metric-oriented stream connectors.
- [**Centreon library: sc_logger**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_logger.lua) - Added a new **basic_auth** parameter to handle HTTP basic authentication.
- [**Centreon library: sc_metrics**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_metrics.lua) - Added a way to filter out metrics based on their name and the **accepted_metrics** parameter.

</TabItem>
<TabItem value="New Stream connector" label="New Stream connector">

- [**Elastic Metrics**](data-analytics/sc-elasticsearch-metrics.md) - Initial release of Elastic Metrics.

</TabItem>
</Tabs>

### February

<Tabs groupId="sync">
<TabItem value="Fix" label="Fix">

- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Fixed an issue occuring when checking if an event was monitored by an accepted poller.

</TabItem>
</Tabs>

### January

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Centreon library: sc_logger**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_logger.lua) - Allowed the possibility to log curl commands with a new method called **log_curl_command**.
- [**sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added a new **log_curl_commands** parameter to enable logging curl commands.
- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Handled event flapping with a new method (**is_valid_event_flapping_state**).
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added a new **flapping** parameter to filter flapping events.
- [**Centreon library: sc_flush**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_flush.lua) - Added a new **add_queue_metadata** method to properly add metadata to a queue.

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - The long output of the stream connector was incorrectly using the standard output, leading to loss of data.
- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Used the correct cache entry when checking the state of a service in a downtime event.

</TabItem>
</Tabs>
