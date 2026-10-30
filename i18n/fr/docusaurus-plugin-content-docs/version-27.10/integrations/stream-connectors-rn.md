---
id: stream-connectors-rn
title: Stream connectors release notes
description: "Release notes and changelog for Centreon stream connectors"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 2026

### Octobre

<Tabs groupId="sync">
<TabItem value="New Stream connector" label="New Stream connector">

- [**Graphite Metrics**](data-analytics/sc-graphite-metrics.md) - Initial release of Graphite Metrics.

</TabItem>
<TabItem value="Enhancement" label="Enhancement">

- [**All stream connectors**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/docs/how_to_use_triggers.md) - Added triggers: with the new **trigger_file** parameter, you can run your own Lua code at specific points of a stream connector's lifecycle (initialization, event queuing, payload sending success or failure, storage operations) without editing the stream connector or the library. Your customizations are kept when the stream connector or the library is updated. For more technical information, see [PR 389](https://github.com/centreon/centreon-stream-connector-scripts/pull/389).
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added the **drop_events_on_send_failure** parameter (disabled by default). When enabled, if the stream connector cannot send data to the target tool, the events are dropped and the error is logged instead of being kept in Broker retention. For more technical information, see [PR 388](https://github.com/centreon/centreon-stream-connector-scripts/pull/388).
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - The values of parameters whose name contains **token** or **secret** are now hidden in the log file, in addition to those containing **pass** or **key**. For more technical information, see [PR 380](https://github.com/centreon/centreon-stream-connector-scripts/pull/380).

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Fixed an error that occurred when a downtime event was received for a host or service that was not present in the Broker cache. For more technical information, see [PR 393](https://github.com/centreon/centreon-stream-connector-scripts/pull/393).

</TabItem>
</Tabs>

### Août

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Splunk Metrics**](data-analytics/sc-splunk-metrics.md) - Optimized the stream connector to avoid DOS.
- New OpenTelemetry otelhttp community stream connector for metrics, provided by a community contribution [PR 290](https://github.com/centreon/centreon-stream-connector-scripts/pull/290).
- Reduced unnecessary logging when Broker has no new messages to process.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Splunk Metrics**](data-analytics/sc-splunk-metrics.md) - Fixed cases where the stream connector may not work with self signed certificates, based on a community contribution [PR 311](https://github.com/centreon/centreon-stream-connector-scripts/pull/311).
- [**Canopsis Events**](data-analytics/sc-canopsis-events.md) - Fixed crashes on host acknowledgement events.

</TabItem>
</Tabs>

### Juillet

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Clickhouse Metrics**](data-analytics/sc-clickhouse.md) - Added a way for stream connectors to store data. For more technical information, see [PR 205](https://github.com/centreon/centreon-stream-connector-scripts/pull/205).
- [**Canopsis Events**](data-analytics/sc-canopsis-events.md) - Added bulk events. For more technical information, see [PR 274](https://github.com/centreon/centreon-stream-connector-scripts/pull/274).

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Fixed `scheduled_downtime_depth` value that could be above 1. Fixed an issue where events were never sent when a status change occurred during a downtime.
- [**InfluxDB 2 Metrics**](data-analytics/sc-influxdb2-metrics.md) - Properly escape host names in tags.
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Fixed incorrect usage of broker v2 API.
- [**Canopsis Events**](data-analytics/sc-canopsis-events.md) - Fixed downtime names/IDs that weren't unique. Fixed a library that wasn't properly detecting the status of a host/service in a downtime event.

</TabItem>
</Tabs>
## 2025

### Février

<Tabs groupId="sync">
<TabItem value="Bug fixes" label="Bug fixes">

- [**Canopsis Events**](data-analytics/sc-canopsis-events.md) - Fixed downtimes.
- [**ServiceNow Incident**](event-management/sc-service-now-em-events.md) - Fixed oauth refresh token parameters.
- [**InfluxDB 2 Metrics**](data-analytics/sc-influxdb2-metrics.md) - Fixed subinstances.

</TabItem>
</Tabs>

## 2024

### Septembre

<Tabs groupId="sync">
<TabItem value="Bug fixes" label="Bug fixes">

- [**Centreon library: sc_flush**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_flush.lua) - Fixed return code when payload is empty.

</TabItem>
</Tabs>

### Août

<Tabs groupId="sync">
<TabItem value="Bug fixes" label="Bug fixes">

- [**Splunk Metrics**](data-analytics/sc-splunk-metrics.md) - Fixed an issue with **max_buffer_size** parameter in Splunk stream connector.
- [**Clickhouse**](data-analytics/sc-clickhouse.md) - Added a protection on metric names containing spaces.
- [**InfluxDB 2 Metrics**](data-analytics/sc-influxdb2-metrics.md) - Added a protection on metric names containing spaces.
- [**Centreon library: sc_macro**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_macro.lua) - Fixed an issue with **_scshort flag** leading to the macro name of an event being displayed instead of its value.

</TabItem>
<TabItem value="Enhancement" label="Enhancement">

- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added a new **enable_bam_host** parameter to send BAM "services".
- [**Centreon library: sc_flush**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_flush.lua) - Enhanced error report when using **send_data** method in stream connector log files.

</TabItem>
</Tabs>

### Mai

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Canopsis Events**](data-analytics/sc-canopsis-events.md) - Enhanced a lot of functionalities to catch up with the new version of Canopsis (24.04).
- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Added a new parameter allowing a delta between timestamps, to fix an issue with the notification of a host status change.
- [**Centreon library: sc_logger**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_logger.lua) - Removed the **allow_insecure_connection** parameter to convert it to **verify_certificate** (working the opposite way).
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added a new **verify_certificate** parameter (and deprecated **allow_insecure_connection**).

</TabItem>
</Tabs>

### Avril

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**All stream connectors**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/docs/README.md) - Added additional debug information when an issue occurs while sending data.
- [**InfluxDB 2 Metrics**](data-analytics/sc-influxdb2-metrics.md) - Added the possibility to send **metric_id**.

</TabItem>
</Tabs>

### Février

<Tabs groupId="sync">
<TabItem value="New Stream connector" label="New Stream connector">

- [**Clickhouse Metrics**](data-analytics/sc-clickhouse.md) - Initial release of Clickhouse Metrics.

</TabItem>
</Tabs>

### Janvier

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Elastic Metrics**](data-analytics/sc-elasticsearch-metrics.md) - Made elastic username and password optional.
- [**Elastic Metrics**](data-analytics/sc-elasticsearch-metrics.md) - Added min/max property with thresholds (warning/critical) in the template.
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added method to validate Lua patterns and build a table of patterns to compensate the lack of alternation operator (commonly known as | in POSIX regex).

</TabItem>
</Tabs>

## 2023

### Novembre

<Tabs groupId="sync">
<TabItem value="Breaking-change" label="Breaking-change">

- [**Centreon library: sc_common**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_common.lua) - Adapted some event types (downtime, acknowledgement and ba_status) to the new bbdo3 protocol (introduced with the Centreon 23.10 release).

</TabItem>
<TabItem value="Enhancement" label="Enhancement">

- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Added a "rejected" filter for hostgroups, servicegroups, bvs, pollers and authors.

</TabItem>
</Tabs>

### Octobre

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added a way to handle deprecated parameters like **max_buffer_age**.

</TabItem>
</Tabs>

### Septembre

<Tabs groupId="sync">
<TabItem value="New Stream connector" label="New Stream connector">

- **InfluxDB2 Metrics** - Initial release of InfluxDB2 Metrics.

</TabItem>
</Tabs>

### Juillet

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

### Février

<Tabs groupId="sync">
<TabItem value="Bug fixes" label="Bug fixes">

- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Fixed an issue occuring when checking if an event was monitored by an accepted poller.

</TabItem>
</Tabs>

### Janvier

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Centreon library: sc_logger**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_logger.lua) - Allowed the possibility to log curl commands with a new method called **log_curl_command**.
- [**sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added a new **log_curl_commands** parameter to enable logging curl commands.
- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Handled event flapping with a new method (**is_valid_event_flapping_state**).
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added a new **flapping** parameter to filter flapping events.
- [**Centreon library: sc_flush**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_flush.lua) - Added a new **add_queue_metadata** method to properly add metadata to a queue.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - The long output of the stream connector was incorrectly using the standard output, leading to loss of data.
- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Used the correct cache entry when checking the state of a service in a downtime event.

</TabItem>
</Tabs>

## 2022

### Décembre {#2022-12}

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Centreon library: sc_flush**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_flush.lua) - Added a metadata system to the queues, allowing stream connectors to handle each queue in a specific way.

</TabItem>
</Tabs>

### Août {#2022-08}

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**All stream connectors**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/docs/custom_code.md) - Added the **custom_code_file** parameter: you can now run your own Lua code in a stream connector without modifying it.
- [**Centreon library: sc_macros**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_macros.lua) - Added group macros to get information about host groups, service groups and business views. All cache data (including pollers and severities) is now available through macros.
- [**Centreon library: sc_macros**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_macros.lua) - Added the **_scnumber** and **_scstring** transformation flags to force the type of the data.
- [**Centreon library: sc_common**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_common.lua) - Added the **lua_regex_escape** and **trim** methods.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Fixed the poller (instance) cache.

</TabItem>
</Tabs>

### Juin {#2022-06}

<Tabs groupId="sync">
<TabItem value="New Stream connector" label="New Stream connector">

- [**Logstash Events**](data-analytics/sc-logstash-events.md) - Initial release of Logstash Events.

</TabItem>
<TabItem value="Enhancement" label="Enhancement">

- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added the **output_size_limit** parameter to limit the length of host and service outputs (no limit by default).

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Fixed an incompatibility with Centreon 22.04 (the **last_update** field is no longer part of the event).

</TabItem>
</Tabs>

### Mai {#2022-05}

<Tabs groupId="sync">
<TabItem value="New Stream connector" label="New Stream connector">

- [**Datadog Events**](data-analytics/sc-datadog-events.md) - Initial release of Datadog Events.
- [**Datadog Metrics**](data-analytics/sc-datadog-metrics.md) - Initial release of Datadog Metrics.
- [**ServiceNow Incident Events**](event-management/sc-service-now-incident-events.md) - Initial release of ServiceNow Incident Events.

</TabItem>
<TabItem value="Breaking-change" label="Breaking-change">

- [**Splunk Metrics**](data-analytics/sc-splunk-metrics.md) - Reworked the metric system to handle the new metric format of the Centreon plugins. You must update this stream connector when you update the library. The stream connector now sends one event per metric instead of one event per service, so more data is sent.

</TabItem>
<TabItem value="Enhancement" label="Enhancement">

- [**ServiceNow Event Manager Events**](event-management/sc-service-now-em-events.md) - The ServiceNow stream connector has been split into two stream connectors: ServiceNow Event Manager Events and ServiceNow Incident Events.
- [**All stream connectors**](https://github.com/centreon/centreon-stream-connector-scripts/releases/tag/3.1.0-1) - Added support for both BBDO v2 and BBDO v3 protocols, seamlessly for all Centreon versions.
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added the **metric_name_regex** and **metric_replacement_character** parameters to handle metric names, and the **use_long_output** parameter to choose between the short and the long output of events.
- [**Centreon library: sc_metrics**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_metrics.lua) - Added the **build_metric** method.
- [**Centreon library: sc_common**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_common.lua) - Added the **dumper** method.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Centreon library: sc_metrics**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_metrics.lua) - Fixed host performance data that was always dropped.
- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Fixed an issue that occurred when a service was not found in the cache.

</TabItem>
</Tabs>

### Mars {#2022-03}

<Tabs groupId="sync">
<TabItem value="Breaking-change" label="Breaking-change">

- [**All stream connectors**](https://github.com/centreon/centreon-stream-connector-scripts/releases/tag/2.0.0-1) - Overhauled the internal queue system to make it fully compatible with the Centreon Broker queue system. You must update your stream connectors when you update the library.

</TabItem>
<TabItem value="Enhancement" label="Enhancement">

- [**HP OMI**](event-management/sc-hp-omi.md) - New version of the stream connector based on the Centreon stream connectors library.
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added parameters to handle the new queue system, such as **max_all_queues_age**.
- [**Centreon library: sc_common**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_common.lua) - Added the **xml_escape** method.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Fixed host status event deduplication.

</TabItem>
</Tabs>

## 2021

### Décembre {#2021-12}

<Tabs groupId="sync">
<TabItem value="New Stream connector" label="New Stream connector">

- [**Signl4 Events**](event-management/sc-signl4-events.md) - Initial release of Signl4 Events.

</TabItem>
<TabItem value="Enhancement" label="Enhancement">

- [**Elastic Events**](data-analytics/sc-elastic-events.md) - New version of the stream connector based on the Centreon stream connectors library.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Centreon library: sc_macros**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_macros.lua) - Fixed an issue that broke macro conversion, and the **_scdate** transformation flag that did not work.

</TabItem>
</Tabs>

### Octobre {#2021-10}

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**PagerDuty Events**](event-management/sc-pagerduty-events.md) - New version of the stream connector based on the Centreon stream connectors library.
- [**ServiceNow Event Manager Events**](event-management/sc-service-now-em-events.md) - The stream connector can now use the latest features of the library, such as templating.
- [**Centreon library: sc_common**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_common.lua) - Added the **escape_json** method.
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - The **load_event_format_file** method can now return a JSON string, so that you can use multi-level JSON files to format your events.
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Removed unnecessary log messages.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**PagerDuty Events**](event-management/sc-pagerduty-events.md) - Fixed a wrong mapping and removed event bulking (not supported by the PagerDuty API).
- [**All stream connectors**](https://github.com/centreon/centreon-stream-connector-scripts/releases/tag/1.5.1-1) - Fixed the proxy address that was always empty when it was set.
- [**All stream connectors**](https://github.com/centreon/centreon-stream-connector-scripts/releases/tag/1.5.2-1) - Fixed event bulking, which no longer worked.
- [**Centreon library: sc_macros**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_macros.lua) - Fixed custom event formats when the output contains a **%** character, and the conversion of the state of acknowledgement events with the **_scstate** flag.
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Fixed a misleading log message stating that the **log_severity** and **logfile** parameters were not handled by the stream connector.

</TabItem>
</Tabs>

### Septembre {#2021-09}

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Splunk Events**](data-analytics/sc-splunk-events.md) - Added support for the new proxy and connection parameters.
- [**Splunk Metrics**](data-analytics/sc-splunk-metrics.md) - Added support for the new proxy and connection parameters.
- [**ServiceNow Event Manager Events**](event-management/sc-service-now-em-events.md) - Added support for the new proxy and connection parameters.
- [**Kafka Events**](data-analytics/sc-kafka-events.md) - Changed the default log level from debug to error.
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added the **proxy_address**, **proxy_port**, **proxy_username**, **proxy_password**, **connection_timeout** and **allow_insecure_connection** parameters.
- [**Centreon library: sc_common**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_common.lua) - Added the **number_to_boolean** method.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Splunk Metrics**](data-analytics/sc-splunk-metrics.md) - Fixed a typo in a parameter name (accetped instead of accepted).
- [**Kafka Events**](data-analytics/sc-kafka-events.md) - Fixed the dependencies of the Kafka modules.
- [**All stream connectors**](https://github.com/centreon/centreon-stream-connector-scripts/releases/tag/1.4.2-1) - Fixed a wrong creation of the macro object and removed hardcoded category and element IDs.
- [**Centreon library: sc_macros**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_macros.lua) - Fixed a log message that displayed a nil value, and macro conversion when a transformation flag was used in the event format file.
- [**Centreon library: sc_common**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_common.lua) - Fixed logging and error management when loading JSON files.
- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Fixed the cache when the **skip_anon_events** parameter is set to 0.

</TabItem>
</Tabs>

### Juillet {#2021-07}

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**Splunk Events**](data-analytics/sc-splunk-events.md) - New version of the stream connector based on the Centreon stream connectors library.
- [**Splunk Metrics**](data-analytics/sc-splunk-metrics.md) - New version of the stream connector based on the Centreon stream connectors library.
- [**Centreon library: sc_flush**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_flush.lua) - New module to handle queues of events.
- [**Centreon library: sc_metrics**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_metrics.lua) - New module to handle metric events.
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added the **format_file** parameter to format events with a JSON template, and the **send_data_test** parameter to write events in the log file instead of sending them.
- [**Centreon library: sc_common**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_common.lua) - Added the **load_json_file** method.

</TabItem>
</Tabs>

### Juin {#2021-06}

<Tabs groupId="sync">
<TabItem value="New Stream connector" label="New Stream connector">

- [**Kafka Events**](data-analytics/sc-kafka-events.md) - Initial release of Kafka Events.

</TabItem>
<TabItem value="Enhancement" label="Enhancement">

- [**ServiceNow Event Manager Events**](event-management/sc-service-now-em-events.md) - New version of the stream connector based on the Centreon stream connectors library.
- [**Centreon library: sc_macros**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_macros.lua) - New module to handle macros in stream connectors.
- [**Centreon library: google**](https://github.com/centreon/centreon-stream-connector-scripts/tree/develop/modules/centreon-stream-connectors-lib/google) - New modules to handle OAuth authentication with Google APIs and BigQuery table schemas.
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added the **local_time_diff_from_utc** and **timestamp_conversion_format** parameters to handle timestamps.
- [**Centreon library: sc_logger**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_logger.lua) - Added the **info** method.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Kafka Events**](data-analytics/sc-kafka-events.md) - Fixed the installation on EL8.
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Fixed the check of mandatory parameters.

</TabItem>
</Tabs>

### Mai {#2021-05}

<Tabs groupId="sync">
<TabItem value="Enhancement" label="Enhancement">

- [**All stream connectors**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/docs/README.md) - First production-ready release of the Centreon stream connectors library.
- [**Centreon library: sc_event**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_event.lua) - Added filters on the severity of hosts and services and on the poller of hosts. Added the handling of downtime and acknowledgement events, and a deduplication of host and service status events (beta).
- [**Centreon library: sc_params**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_params.lua) - Added the **ack_host_status**, **ack_service_status**, **dt_host_status**, **dt_service_status**, **enable_host_status_dedup**, **enable_service_status_dedup** and **accepted_authors** parameters.
- [**Centreon library: rdkafka**](https://github.com/centreon/centreon-stream-connector-scripts/tree/develop/modules/centreon-stream-connectors-lib/rdkafka) - Integrated a fork of the luardkafka library for an easier installation, from a community contribution by Mistsv.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Centreon library: sc_broker**](https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/centreon-stream-connectors-lib/sc_broker.lua) - Fixed the retrieval of poller names, of business view information when a BA is linked to several business views, and of service groups.

</TabItem>
</Tabs>