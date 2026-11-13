---
id: otlp-broker-output
title: OpenTelemetry (OTLP) Broker output
description: "Configure the Centreon Broker OTLP output to send performance data and statuses as OpenTelemetry metrics to any OTLP gRPC collector, such as Grafana or Prometheus."
---

The OTLP output is a Centreon Broker output that exports your monitoring data as OpenTelemetry metrics. It sends the data
to any collector that supports the OpenTelemetry Protocol (OTLP) over gRPC, such as the OpenTelemetry Collector, Grafana Alloy,
Prometheus, or VictoriaMetrics.

For each host and service check result, the output sends:

- the performance data (metrics), with their thresholds and their minimum and maximum values,
- the state of the host or service.

Every host is identified by standard OpenTelemetry resource attributes (`host.name`, `service.name`, `service.namespace`, etc.),
so that you can correlate Centreon data with the other telemetry data of your observability platform. Metric names can follow the
[OpenTelemetry semantic conventions](https://opentelemetry.io/docs/specs/semconv/) thanks to an optional [mapping file](#mapping-metrics-to-opentelemetry-semantic-conventions).

## Before starting

- Configure the output on the **central server**. The output reads the data that Centreon Broker receives from all the pollers.
- You need an OTLP collector that accepts gRPC connections (usually on port **4317**). The central server must be able to reach it: the flow
must not be blocked by a firewall.
- The output does not depend on the database or on RRD files: it does not replace the **unified-sql** or **RRD** outputs.

> The OTLP output cannot be configured from the Centreon interface yet. You must add it manually to the configuration file of Centreon Broker
> (see [Configuring the output](#configuring-the-output)).

## Configuring the output

1. On the central server, edit the configuration file of the central Broker (`/etc/centreon-broker/central-broker.json`).

2. In the `output` array of the `centreonBroker` object, add an element of type `otlp`. Example:

   ```json
   {
     "centreonBroker": {
       "output": [
         {
           "name": "central-otlp",
           "type": "otlp",
           "endpoint": "otel-collector.example.com:4317",
           "compression": "true",
           "mapping_file": "/etc/centreon-broker/otlp-mapping.json",
           "host_ip_exclude_link_local": "true"
         }
       ]
     }
   }
   ```

   > All values must be strings, including numbers and booleans (for example `"true"` or `"5000"`). Values of any other JSON type are ignored.

3. Restart Centreon Broker:

   ```shell
   systemctl restart cbd
   ```

4. Check the Broker logs (`/var/log/centreon-broker/central-broker-master.log`). When the output starts, the following line appears:

   ```text
   otlp: endpoint 'central-otlp' exporting to otel-collector.example.com:4317
   ```

> When you export the configuration of the central server from the Centreon interface with the **Export configuration files** and
> **Move Export Files** options, the Broker configuration file is regenerated and your manual changes are lost. Back up your output
> configuration and add it again after each export.

### Output parameters

| Parameter | Mandatory | Default value | Description |
|---|---|---|---|
| `name` | Yes | | Name of the output. It is used in the logs. |
| `type` | Yes | | Must be `otlp`. |
| `endpoint` | Yes | | Address of the OTLP gRPC collector, in the `host:port` format. |
| `encryption` | No | `false` | Set to `true` to encrypt the connection to the collector with TLS. |
| `certificate` | No | | Content (PEM format) of the client certificate. |
| `private_key` | No | | Content (PEM format) of the private key of the client certificate. |
| `ca_certificate` | No | | Content (PEM format) of the certificate of the authority that signed the certificate of the collector. |
| `compression` | No | `false` | Set to `true` to compress the data sent to the collector. |
| `keepalive_interval` | No | `30` | Interval (in seconds) between two gRPC keepalive messages. |
| `max_datapoints_per_batch` | No | `5000` | Number of data points after which a batch is sent to the collector. Must be greater than 0. |
| `max_send_interval` | No | `10` | Maximum time (in seconds) after which a batch is sent, even if it is not full. |
| `max_inflight_requests` | No | `4` | Maximum number of batches being sent to the collector at the same time. Must be greater than 0. |
| `export_timeout` | No | `30` | Maximum time (in seconds) allowed for the collector to answer a request. |
| `mapping_file` | No | | Path to the [mapping file](#mapping-metrics-to-opentelemetry-semantic-conventions). If it is empty, all metrics are sent with a name starting with `centreon.`. |
| `send_thresholds` | No | `true` | Sends the warning and critical thresholds of the metrics. |
| `send_min_max` | No | `true` | Sends the minimum and maximum values of the metrics. |
| `send_status` | No | `true` | Sends the state of the hosts and services. |
| `host_ip_exclude_link_local` | No | `false` | Set to `true` to remove link-local addresses (`169.254.0.0/16` and `fe80::/10`) from the `host.ip` attribute. |

> Note the following:
>
> - The certificate parameters contain the content of the certificates, not the path to the files.
> - Do not add a `filters` block to this output: the output always processes host statuses, service statuses, and host information sent
>   by the Centreon Monitoring Agent, and ignores any filter.

## Data sent to the collector

### Resource attributes

The data of each host is grouped under one OpenTelemetry resource, with the following attributes:

| Attribute | Description |
|---|---|
| `host.name` | Name of the host in Centreon. |
| `service.name` | Value of the `_OTEL_SERVICE_NAME` host macro, or `centreon-broker` by default (see [Defining the service name and namespace](#defining-the-service-name-and-namespace)). |
| `service.namespace` | Value of the `_OTEL_SERVICE_NAMESPACE` host macro, or `centreon` by default. |
| `service.version` | Version of Centreon Broker. Only sent when `service.name` has its default value. |
| `centreon.host.id` | ID of the host in Centreon. |

When the host is monitored by the [Centreon Monitoring Agent](../cma/cma.md), the following attributes are also sent:

| Attribute | Description |
|---|---|
| `host.id` | Unique identifier of the machine. |
| `host.arch` | Architecture of the machine (for example `amd64`). |
| `os.type` | Type of operating system (for example `linux` or `windows`). |
| `os.name` | Name of the operating system. |
| `os.version` | Version of the operating system. |
| `host.ip` | IP addresses of the machine. |

### Metrics

- **Performance data**: each value is sent as a metric. Without a mapping file, the name of the metric is `centreon.<metric name>`
  (in lowercase, with special characters replaced by `_`), and the unit is converted to the [UCUM](https://ucum.org/) format used by OpenTelemetry
  (for example `B` becomes `By`).
- **Thresholds** (if `send_thresholds` is `true`): metric `<metric name>.threshold`, with the `centreon.threshold.level` (`warning` or `critical`)
  and `centreon.threshold.bound` (`lower` or `upper`) attributes.
- **Minimum and maximum values** (if `send_min_max` is `true`): metric `<metric name>.bound`, with the `centreon.bound.type` (`min` or `max`) attribute.
- **States** (if `send_status` is `true`): metrics `centreon.check.state` (service state) and `centreon.host.state` (host state), with the
  `centreon.state.type` (`hard` or `soft`) attribute.

The data points of services also carry the `centreon.service.description` and `centreon.service.id` attributes, and the original name
of the performance data is kept in the `centreon.metric.name` attribute.

## Defining the service name and namespace

By default, the `service.name` and `service.namespace` resource attributes are `centreon-broker` and `centreon`. You can define other
values for each host using [custom macros](../monitoring/basic-objects/macros.md#custom-macros):

| Host macro | OpenTelemetry attribute | Default value |
|---|---|---|
| `_OTEL_SERVICE_NAME` | `service.name` | `centreon-broker` |
| `_OTEL_SERVICE_NAMESPACE` | `service.namespace` | `centreon` |

1. Go to **Configuration > Hosts > Hosts** and edit the host (or the host template).
2. In the **Host check options** section, add the `OTEL_SERVICE_NAME` and/or `OTEL_SERVICE_NAMESPACE` custom macros, and set their values.
3. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md).

> - These macros are only taken into account on hosts. Macros with the same names defined on services are ignored.
> - If **Enable macro filtering** is set to **Yes** in the Engine configuration of the poller (**Configuration > Pollers > Engine configuration**),
>   add `OTEL_SERVICE_NAME` and `OTEL_SERVICE_NAMESPACE` to the **Macros whitelist**. Otherwise, the macros are not sent to Centreon Broker.

## Mapping metrics to OpenTelemetry semantic conventions

By default, metrics are sent with a name starting with `centreon.`. To use the names defined by the
[OpenTelemetry semantic conventions](https://opentelemetry.io/docs/specs/semconv/system/system-metrics/) (or any other name),
create a mapping file in JSON format, and set its path in the `mapping_file` parameter of the output.

Example of mapping file (`/etc/centreon-broker/otlp-mapping.json`):

```json
{
  "metrics": {
    "disk.space.usage.bytes": {
      "name": "system.filesystem.usage",
      "unit": "By",
      "instrument": "sum_non_monotonic",
      "attributes": { "system.filesystem.state": "used" },
      "instance_attribute": "system.filesystem.mountpoint"
    }
  }
}
```

The keys of the `metrics` object are the names of the Centreon metrics. If the name of the performance data contains an instance
(for example `/var#disk.space.usage.bytes`), the key is the part after the `#` character (`disk.space.usage.bytes`).

| Field | Mandatory | Default value | Description |
|---|---|---|---|
| `name` | Yes | | Name of the metric sent to the collector. |
| `unit` | No | | Unit of the metric. |
| `instrument` | No | `gauge` | Type of metric: `gauge`, `sum_monotonic` (counter that only increases) or `sum_non_monotonic` (sum that can increase and decrease). |
| `scale` | No | `1` | Factor applied to the value, the thresholds, and the minimum and maximum values (for example `0.001` to convert milliseconds into seconds). |
| `attributes` | No | | Constant attributes added to each data point. |
| `instance_attribute` | No | | Name of the attribute that receives the instance of the performance data (for example the mount point of a file system). If this field is set and the performance data has no instance, the mapping is not applied. |

Metrics that are not listed in the mapping file are sent with their default name (`centreon.<metric name>`).

The mapping file is watched by Centreon Broker: when you modify it, the new mapping is applied without restarting Centreon Broker.

> - At startup, if the mapping file is invalid, the output does not start. Check the Broker logs.
> - When you modify the file while Centreon Broker is running, an invalid file is ignored and the previous mapping is kept. The following
>   message appears in the Broker logs: `otlp: <error>; keeping the previous mapping`.

## Troubleshooting

Check the logs of the central Broker (`/var/log/centreon-broker/central-broker-master.log`):

- After each batch is sent: `otlp: <n> datapoints of <h> hosts sent in <ms> ms`.
- If the collector cannot be reached or returns an error: `otlp: export of <n> datapoints failed: <error>`.
- If the collector rejects some data points: `otlp: collector rejected <n> datapoints: <message>`.

> Data points that could not be sent are not sent again: they are lost. Make sure the collector is available.

The statistics of the output are available in the Broker statistics file (`/var/lib/centreon-broker/central-broker-master-stats.json`):
number of batches and data points sent (`batches_sent`, `datapoints_sent`), number of export errors (`export_errors`), number of statuses
dropped because the host name is unknown (`dropped_no_host_name`), etc.
