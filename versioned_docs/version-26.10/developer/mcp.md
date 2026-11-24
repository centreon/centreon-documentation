---
id: mcp-server
title: Centreon MCP server
description: "Use the Centreon MCP server to connect AI assistants to Centreon and query resource status, inventory, metrics, acknowledgements, downtimes, and comments."
---

> This is a new, rapidly evolving feature. During its initial phases, the main source of documentation will be the README file on the [GitHub project](https://github.com/centreon/centreon-mcp).

## What is an MCP server ?

Model Context Protocol (MCP) is an open-standard and open-source framework that allows AIs to integrate with external tools such as Centreon Infra Monitoring. An MCP server is a software that allows the usage of MCP.

The Centreon MCP server works as a bridge between an LLM and your Centreon platform. To protect your data, only use the Centreon MCP server with a local LLM or with an online LLM with a licence that stipulates your data will not be used. The MCP server does not store any data itself.

Centreon MCP server currently has integrations with ChatGPT, Mistral Le Chat and Claude.
However, because the server uses a standard HTTP/MCP endpoint, any AI compatible with MCP can connect to the Centreon MCP server.

## Features

The MCP server currently exposes 14 tools organized across four functional areas, and one ready-made prompt. Instead of one tool per object, a few generic tools take a `model_type` parameter that selects the kind of object to work on (for example `host`, `service_group` or `downtime`).

| Area                | Tools                                                                                                                                        | Purpose                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Resource Monitoring | `list_monitoring_resources`, `list_monitoring_entities`, `count_monitoring_resources_by_status`, `get_host_timeline`, `get_service_timeline` | Query, count, and inspect real-time monitoring data and topology.    |
| Configuration       | `list_configurations`, `create_configuration`, `update_configuration`, `delete_configurations`, `manage_monitoring_server_configurations`    | Manage configuration objects and apply them to pollers.              |
| Monitoring Actions  | `list_monitoring_actions`, `set_monitoring_actions`, `cancel_monitoring_actions`                                                             | Acknowledge alerts, schedule downtimes, comment, and trigger checks. |
| Metrics             | `get_service_metrics`                                                                                                                        | Read current metric values and thresholds.                           |

### Resource Monitoring

**list_monitoring_resources** is the central tool for querying your real-time monitoring data. It lists hosts and services, and supports rich filtering across multiple dimensions simultaneously:

- **By resource type**: filter on hosts only, services only, or both.
- **By status**: filter on UP, DOWN, UNREACHABLE, OK, WARNING, CRITICAL, UNKNOWN, or PENDING states.
- **By status type**: distinguish between HARD and SOFT states.
- **By name, alias, or parent name**: substring matching on resource identifiers.
- **By output/information content**: find resources whose check output contains (or does not contain) a given string — ideal for surfacing specific error messages across your infrastructure.
- **By scope**: filter by host group, service group, host category, service category, or monitoring server (poller) names.
- **Pagination and sorting**: results are paginated (50 per page by default) and sortable by host name, alias, address, or state.

This combination of filters makes it possible to ask highly specific questions such as "Show me all CRITICAL services on hosts in the 'production' host group whose output mentions 'disk full'" and get precise, actionable results directly in the conversation. If you do not provide any filter, the assistant asks you for at least one, unless you explicitly want every resource.

**list_monitoring_entities** lists the real-time monitoring entities used to scope other queries. The `model_type` parameter selects the kind of entity:

- `host_group` — host groups, filterable by host name, alias, address, state, poller, or host group.
- `service_group` — service groups, filterable by host, service, host group, or poller attributes.
- `monitoring_server` — pollers, filterable by name, ID, or running status.

These results serve as natural building blocks: an AI assistant can look up the relevant groups and pollers first, then use their names or identifiers to scope its subsequent queries precisely.

**count_monitoring_resources_by_status** returns the number of resources in each state without retrieving individual resources. Use it instead of `list_monitoring_resources` when only totals are needed. The `model_type` parameter selects what to count:

- `host` — number of hosts in each state (UP, DOWN, UNREACHABLE, PENDING), optionally scoped to host groups or host categories.
- `service` — number of services in each state (OK, WARNING, CRITICAL, UNKNOWN, PENDING), optionally scoped by host name, host group, host category, service group, or service category.

The tool accepts several filter sets combined with OR logic, making it straightforward to answer questions like "How many hosts are DOWN across the 'production' and 'staging' groups?" in a single call.

**get_host_timeline** and **get_service_timeline** fetch the event history of a single host or service in real-time monitoring. Events include state changes, notifications, downtimes, acknowledgements, and comments, each with a date and content. Use `list_monitoring_resources` first to get the host and service identifiers. The timeline can be filtered by event type and by date range, and is sorted by date descending by default (most recent first). It is useful to answer "what happened on this resource recently?" without leaving the conversation.

### Configuration

Four generic tools cover the full configuration lifecycle. Each tool accepts a `model_type` parameter to select the entity to operate on, and each entity type carries its own set of parameters.

| Tool                      | Description                                                                                                                                        | Supported `model_type` values                                                                                                                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **list_configurations**   | List configurations, filterable by entity-specific fields (ID, name, alias, address, activation status, etc.). Results are paginated and sortable. | `command`, `host`, `host_category`, `host_group`, `host_severity`, `host_template`, `monitoring_server`, `service`, `service_category`, `service_group`, `service_severity`, `service_template`, `time_period` |
| **create_configuration**  | Create a new configuration by providing the required and optional parameters for the chosen entity type.                                           | `command`, `host`, `host_category`, `host_group`, `host_severity`, `host_template`, `service`, `service_category`, `service_group`, `service_severity`, `service_template`, `time_period`                      |
| **update_configuration**  | Partially update an existing configuration by ID, using only the fields that need to change.                                                       | `host`, `host_category`, `host_group`, `host_severity`, `host_template`, `service`, `service_severity`, `service_template`, `time_period`                                                                      |
| **delete_configurations** | Delete one or more configurations by their IDs. The result reports success or failure for each ID.                                                 | `host`, `host_category`, `host_group`, `host_severity`, `host_template`, `service`, `service_category`, `service_group`, `service_severity`, `service_template`, `time_period`                                 |

For example, creating a host requires specifying the monitoring server, name, and IP address. Optional parameters include:

- SNMP community and version
- Geographic coordinates
- Severity
- Check and event handler commands
- Notification options
- Flap detection thresholds
- Host group, category, and template associations

If you do not provide any filter to **list_configurations**, the assistant asks you for at least one, unless you explicitly want every entity.

**manage_monitoring_server_configurations** applies configuration changes to your pollers. The `action` parameter selects the operation:

- `generate` — generate the configuration files of the selected pollers.
- `reload` — reload the configuration of the selected pollers, pushing the generated files to the monitoring engines.

Provide the poller IDs to target specific pollers. If no IDs are provided, the action applies to all pollers. When several IDs are given, the pollers are processed concurrently and the result reports success or failure for each of them.

Poller configurations themselves can be listed using **list_configurations** with `model_type` set to `monitoring_server`.

### Monitoring Actions

Three tools let you act on alerts without leaving your conversation. The `model_type` parameter selects the kind of action.

- **list_monitoring_actions** — List current acknowledgements (`acknowledgement`) or downtimes (`downtime`), with pagination and sorting.
  - Acknowledgements can be sorted by ID, host, start time, entry time, etc.
  - Downtimes can be filtered by host name, alias, address, state, poller, and downtime properties (fixed, cancelled).
- **set_monitoring_actions** — Apply an action to one or more hosts or services at once. Supported `model_type` values:
  - `acknowledgement` — acknowledge resources with a comment, and configure options such as sticky acknowledgement, notifications, persistent comment, acknowledgement of the host services, and forced active checks.
  - `downtime` — schedule a downtime with start and end times, a duration, a comment, whether the downtime is fixed or flexible, and whether it also applies to the host services.
  - `comment` — attach a comment to a host or service, useful for leaving context notes on an ongoing incident directly from the AI assistant.
  - `check` — trigger a check without waiting for the next polling cycle. This is useful right after a remediation action to confirm recovery in conversation. The `is_forced` flag (default `true`) controls whether the configured check interval is bypassed.
- **cancel_monitoring_actions** — Cancel one or more acknowledgements (`acknowledgement`) or downtimes (`downtime`) by their IDs. The result reports success or failure for each ID.

### Metrics

- **get_service_metrics** — Retrieve all metrics of a service with their name, unit, current value, and warning/critical thresholds. Use `list_monitoring_resources` first to get the host and service identifiers. Useful for answering questions like "what is the current CPU usage?" or "how close is disk usage to the critical threshold?" without leaving the conversation.

### Prompts

In addition to tools, the MCP server provides ready-made prompts that guide the assistant through a multi-step task.

- **host_diagnosis** — Diagnose a host from its configured name (`host_name`, the exact name, not its alias nor a partial name). The assistant follows a read-only investigation plan in three parts: Describe (state of the host, its services, metrics, and recent history), Understand (most likely root cause), and Act (suggested next steps). Nothing is changed unless you explicitly ask for it after reading the diagnosis.

### Common workflows

Several tools are designed to be chained in a single conversation:

- **Diagnose then confirm**: query resources with `list_monitoring_resources`, remediate the underlying issue, then call `set_monitoring_actions` with `model_type` set to `check` to confirm recovery immediately rather than waiting for the next polling cycle.
- **Configure then apply**: create or update host/service configuration, then run `manage_monitoring_server_configurations` with the `generate` action followed by the `reload` action on the affected pollers to push the change live.
- **Scope then query**: look up host groups, service groups, or pollers with `list_monitoring_entities` first, then use their names to scope a more precise `list_monitoring_resources` or `count_monitoring_resources_by_status` call.

For setting up the Centreon Infra Monitoring MCP server either locally or using Docker, read the README file on the [GitHub project](https://github.com/centreon/centreon-mcp).
