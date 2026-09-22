---
id: rust-collections
title: Rust Collections
description: "Configure a JSON rather than coding a plugin"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Using the Rust SNMP plugin

The Rust SNMP plugin (`centreon-plugin-rust-snmp`) is a program shipped as an executable binary which takes as input a JSON file and parameters such as the host address, the SNMP community and so on. It holds no logic specific to any given device. It reads the JSON file — called a *collection* — which describes what information to retrieve, how to compute the metrics and the statuses, and how to display the state matching the check. Adding a new check therefore comes down to writing a configuration file, not to writing code.

```text
     ┌─────────────────┐
     │ centreon-engine │
     └────┬─────▲──────┘
      runs│     │returns
          │     │
        ┌─▼─────┴───────────────────┐ queries  ┌─────────────┐
        │ centreon-plugin-rust-snmp ├─────────►│ SNMP device │
        └───┬───────────────────────┘          └─────────────┘
       reads│
            │
        ┌───▼─────────────┐
        │ collection.json │
        └─────────────────┘
```

A collection describes three stages, run in this order:

1. `collect` — the SNMP queries sent to the device;
2. `compute` — the metrics derived from the collected values, and their thresholds, which can be passed as parameters
3. `output` — the formatting of the status and the metrics into a Monitoring Plugins compliant message.

### Before you start

#### What the poller needs

The `centreon-plugin-rust-snmp` package installs the executable binary into `/usr/lib/centreon/plugins/`. The poller simply needs to reach the device over UDP on the SNMP port, 161 by default.

Collections are shipped separately, by dedicated packages — `centreon-plugin-applications-protocol-snmp-rs`, `centreon-plugin-operatingsystems-linux-snmp-rs`… — which drop them into `/usr/lib/centreon/plugins/rs-collections/<pack>/`. The binary and the collections therefore evolve independently.

#### Working out what to query

In the beta at the time of its release, the plugin supports version **2C** of the **SNMP** protocol. Version 3 support will be added in the following months. For now you therefore need the address of the device and a read-only SNMP community.

What is left is to identify the OIDs and the shape of the response, which the structure of the collection depends on:

- a **single value** is retrieved with a `Get`, on a **leaf** OID, index included — most often ending in `.0`;
- a **table** is retrieved with a `Walk`, on the OID of the **subtree**, without an index.

The useful reflex is to explore the whole table with `snmpwalk` before writing anything, to note the columns you care about and to check that the device really fills them in:

```bash
snmpwalk -v2c -c public 192.168.0.10 1.3.6.1.2.1.25.2.3.1
```

> **Warning:** the response will not necessarily be intelligible if you do not have the SNMP [MIBs](https://en.wikipedia.org/wiki/Management_information_base).

### Writing a collection

The complete structure of the format is specified [here](https://centreon.github.io/centreon-plugins/rs-collections/snmp/v0/rs-collection.schema.json) as a JSON schema and **[detailed in a readable form here](https://centreon.github.io/centreon-plugins/rs-collections/snmp/v0/)**.

#### Validation fields

There are two mandatory fields to write as such in your collections. One makes editing the collection easier, the other lets the plugin make sure it supports this format.

##### Schema

Adding the `$schema` attribute at the root of your file gives you completion and validation straight in your editor.

```json
{
  "$schema": "https://centreon.github.io/centreon-plugins/rs-collections/snmp/v0/rs-collection.schema.json"
}
```

##### Format version

Adding the `format_version` attribute at the root of your file lets the plugin make sure the collection is compatible. An older version of the plugin will, for instance, reject a collection too recent for it, one requiring features it does not have.

```json
{
  "format_version": 0
}
```

#### `collect`: the SNMP queries

`collect.snmp` is the list of the queries. Each one carries a `name`, an `oid` and a `query` valued `Get` or `Walk` — these two values are case sensitive. Every `Get` is gathered into a single network request; each `Walk` is a separate subtree traversal.

The `name` is not decorative: it is the name of the macro under which the value becomes usable in `compute`. A `Get` named `memTotalReal` is referenced there as `{memTotalReal}` and is a scalar; a `Walk` named `cpu` gives `{cpu}`, a vector of one entry per row.

```json
{
  "collect": {
    "snmp": [
      { "name": "memTotalReal", "oid": ".1.3.6.1.4.1.2021.4.5.0", "query": "Get" },
      { "name": "cpu", "oid": "1.3.6.1.2.1.25.3.3.1.2", "query": "Walk" }
    ]
  }
}
```

A table is usually walked column by column, which would be tedious. `labels` makes it possible to do it in a single query. In the example below, every element of the walk will be named after the labels defined:

```json
{
  "collect": {
    "snmp": [
      {
        "name": "storage",
        "oid": "1.3.6.1.2.1.25.2.3.1",
        "query": "Walk",
        "labels": {
          ".3": "description",
          ".4": "allocation_units",
          ".5": "size",
          ".6": "used"
        }
      }
    ]
  }
}
```

```text
.1.3.6.1.2.1.25.2.3.1.1.37 = INTEGER: 37
.1.3.6.1.2.1.25.2.3.1.1.53 = INTEGER: 53
.1.3.6.1.2.1.25.2.3.1.2.37 = OID: .1.3.6.1.2.1.25.2.1.4
.1.3.6.1.2.1.25.2.3.1.2.53 = OID: .1.3.6.1.2.1.25.2.1.4
.1.3.6.1.2.1.25.2.3.1.3.37 = STRING: /                      # .3 => description = "/"
.1.3.6.1.2.1.25.2.3.1.3.53 = STRING: /boot                  # .3 => description = "/boot"
.1.3.6.1.2.1.25.2.3.1.4.37 = INTEGER: 4096 Bytes            # .4 => allocation_units = 4096
.1.3.6.1.2.1.25.2.3.1.4.53 = INTEGER: 4096 Bytes            # .4 => allocation_units = 4096
.1.3.6.1.2.1.25.2.3.1.5.37 = INTEGER: 60441977              # .5 => size = 60441977
.1.3.6.1.2.1.25.2.3.1.5.53 = INTEGER: 421148                # .5 => size = 421148
.1.3.6.1.2.1.25.2.3.1.6.37 = INTEGER: 45270551              # .6 => used = 45270551
.1.3.6.1.2.1.25.2.3.1.6.53 = INTEGER: 232719                # .6 => used = 232719
```

You then get `{storage.description}`, `{storage.size}`, `{storage.used}`…, `storage` coming from the `name` attribute and the rest coming from the labels.

The suffix is recognised with or without a leading dot: `".5"` and `"5"` name the same column.

#### `compute`: declaring the metrics from the raw data

`compute` turns the collected values into metrics, in two passes:
- `metrics` runs first and only sees the macros from `collect`.
- `aggregations` runs next and can create new metrics whose values are aggregated from the results of the first pass.

Both passes share the same expression grammar: numbers, the `+ - * /` operators, parentheses, macros in braces, and three functions — `Average()`, `Min()`, `Max()` — which reduce a vector to a scalar.

##### `metrics`: one value per instance

###### Naming

A metric carries at the very least a `name` attribute, which will appear in the perfdata, and a `value` attribute, the expression computing it. The rest is optional: `uom` for the unit, `min` and `max` for the bounds shown in the perfdata — or `min_expr` and `max_expr` when those bounds are computed.

The point to grasp is that the dimension of the collected data (depending on whether it comes from a `Get` or from a `Walk`) determines the number of metrics produced.
An expression based on the result of a `Get` gives a single perfdata, an expression based on a `Walk` gives one per instance, automatically.

This is where the `prefix` attribute comes in: it names every instance with the field you want. Without this attribute, instances are numbered, which remains usable but less readable:

```
'0#core.cpu.usage.percent'=2%   →   without prefix
'/#storage.usage.bytes'=183434899456B   →   with "prefix": "{storage.description}"
```

###### Alert thresholds

The `threshold-suffix` attribute exposes the metric on the command line as `--warning-<suffix>` and `--critical-<suffix>`. The `warning` and `critical` fields of the collection provide the default values, which those options override. The format is the Monitoring Plugins one:

- `80` — alert if the value goes above 80;
- `10:20` — alert outside the range;
- `@0:10` — inverted: alert *inside* the range;
- `5:` — alert below 5;
- `~:90` — alert above 90, with no lower bound.

The `metrics` section may be empty if the check only reports aggregates.

##### `aggregations`: one value for the whole

An aggregation is declared exactly like a metric, but is evaluated after them and can read their results through `{metrics.<name>}`. This is what makes it possible to go from the detail to the summary: an average over every core, a total over every filesystem...

```json
{
  "name": "avg.cpu.usage.percent",
  "value": "Average({cpu})",
  "uom": "%",
  "min": 0,
  "max": 100,
  "threshold-suffix": "avg"
}
```

An aggregation being tied to no instance, its perfdata carries its name with no prefix, where a per-instance metric is prefixed: `avg.cpu.usage.percent=2.38%` as opposed to `'0#core.cpu.usage.percent'=2%`.

#### `output`: formatting the message

The `output` section is optional as a whole, every field having a default value. The messages are templates in which `{metrics.<name>}` and `{aggregations.<name>}` are replaced by the computed values.

| Field                | Default                        | Role                                                                 |
|----------------------|--------------------------------|----------------------------------------------------------------------|
| `ok`                 | `OK: Everything is ok `        | Message when no threshold is exceeded                                |
| `warning`            | `WARNING: `                    | Prefix when the worst status is WARNING                              |
| `critical`           | `CRITICAL: `                   | Prefix when the worst status is CRITICAL                             |
| `unknown`            | `UNKNOWN: `                    | Prefix when the worst status is UNKNOWN                              |
| `detail_ok`          | `false`                        | Adds the per-instance detail (*i.e.* every metric) to the OK message |
| `detail_warning`     | `true`                         | Adds the detail of the metrics that crossed the warning thresholds   |
| `detail_critical`    | `true`                         | Adds the detail of the metrics that crossed the critical thresholds  |
| `detail_unknown`     | `true`                         | Adds the detail of the metrics whose value is unknown                |
| `no_data`            | `No data matching the filters` | Message when no metric is left after the filters                     |
| `instance_separator` | ` - `                          | Separator between the details of two instances                       |
| `metric_separator`   | `, `                           | Separator between two metrics of the same instance                   |

The common choice is to leave `detail_ok` at `false` — an OK message stays short — and the alert `detail_*` at `true`, so that the operator immediately sees the list of the metrics which are not OK.

### Running the command

The minimal command carries a target, a community and a collection:

```bash
/usr/lib/centreon/plugins/centreon-plugin-rust-snmp \
  -H 192.168.0.10 -c public \
  -j /usr/lib/centreon/plugins/rs-collections/applications-protocol-snmp/storage.json
```

It returns a message and perfdata compliant with the Monitoring Plugins, and the expected return code (0=OK, 1=WARNING, 2=CRITICAL, 3=UNKNOWN):

```
All storages are OK | '/#storage.usage.bytes'=183434899456B;;;0;247570337792 '/#storage.usage.percent'=74.09%;;;0;100
```

| Option                                      | Description                                                                                                                                                                                                                                                                               | Required | Default value             |
|---------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------------------------|
| `-H`, `--hostname`                          | Name or IP address of the device to query. **Does not support a hostname served by sssd or LDAP.**                                                                                                                                                                                        |          | `localhost`               |
| `-p`, `--port`                              | UDP port of the SNMP agent.                                                                                                                                                                                                                                                               |          | `161`                     |
| `-v`, `--snmp-version`                      | SNMP version advertised. The option is accepted for the sake of command homogeneity but has no effect: the request is always built in v2c.                                                                                                                                                |          | `2c`                      |
| `-c`, `--snmp-community`                    | Read community. An empty value is ignored and falls back to `public`, for compatibility with configuration macros left empty.                                                                                                                                                             |          | `public`                  |
| `-j`, `--json`                              | Path to the collection to run. Without it, the plugin exits UNKNOWN without querying anything.                                                                                                                                                                                            | X        | —                         |
| `-i`, `--filter-in`                         | Regular expression restricting the check to the instances whose name matches. The option is repeatable, and an instance kept by any one of the patterns is enough. Useful to monitor only certain filesystems with a generic collection: `--filter-in '^/$' --filter-in '^/boot$'`        |          | —                         |
| `-o`, `--filter-out`                        | The opposite: excludes the instances whose name matches, also repeatable. Handy to discard the noise — temporary mounts, management interfaces — without touching the collection.                                                                                                         |          | —                         |
| `--no-data-status`                          | Status returned when the filters leave no data: `OK`, `WARNING`, `CRITICAL` or `UNKNOWN`. The default value signals a filter that is too restrictive or an empty table. Switching it to `OK` makes sense when having no instance is a normal state.                                       |          | `UNKNOWN`                 |
| `--warning-<suffix>`, `--critical-<suffix>` | Thresholds applied to a metric, where `<suffix>` is the `threshold-suffix` declared in the collection. These options override the default values of the file, which makes it possible to serve several Centreon services with a single collection: `--warning-prct 80 --critical-prct 90` |          | the collection thresholds |
| `--list-counters`                           | Displays the metrics of the collection and, for each one, the exact name of the matching threshold options. It is the quickest way to know what to pass on the command line, with no network and no reachable device.                                                                     |          | —                         |
| `--check-format`                            | Loads the collection, checks its syntax and its structure, then exits without querying the device. To be used after every change to a file: the errors name the offending metric and field.                                                                                               |          | —                         |
| `--check-response`                          | Runs the collection and displays the raw SNMP values, before any computation. It is the diagnosis tool when a metric comes out wrong or empty: it shows whether the problem comes from the device or from the expression.                                                                 |          | —                         |
| `-V`, `--version`                           | Displays the plugin version, the collection format version it can handle and the URL of the matching schema.                                                                                                                                                                              |          | —                         |
| `-h`, `--help`                              | Displays the list of options and their default values.                                                                                                                                                                                                                                    |          | —                         |

### Troubleshooting

#### How do I display the information collected over SNMP?

Add the `--check-response` option to the command to look at the data returned by the device.

#### How do I display every detail of the plugin execution?

The `PLUGIN_LOG` environment variable both turns the logs on in the standard output and selects the log level wanted.

The log level may be `error`, `warn`, `info`, `debug`, `trace`. Setting it to `trace` gives the highest level of detail, which makes it possible to dig further than `--check-response` if, for instance, the collection fails.

```bash
PLUGIN_LOG=trace /usr/lib/centreon/plugins/centreon-plugin-rust-snmp -H 192.168.0.10 -c public -j cpu.json
```

Producing these logs is strongly recommended, so as to attach them when opening a [GitHub issue](https://github.com/centreon/centreon-plugins/issues), a [TheWatch topic](https://thewatch.centreon.com/) or a [support ticket](https://support.centreon.com/hc/en-us).
