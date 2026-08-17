---
id: mcp-server
title: Centreon MCP server
description: "Overview of the Centreon MCP server, its 23 tools across seven functional areas, and how AI assistants can use them"
---

> This is a new, rapidly evolving feature. During its initial phases, the main source of documentation will be the README file on the [GitHub project](https://github.com/centreon/centreon-mcp).

## What is an MCP server ?

Model Context Protocol (MCP) is an open-standard and open-source framework that allows AIs to integrate with external tools such as Centreon Infra Monitoring. An MCP server is a software that allows the usage of MCP.

The Centreon MCP server works as a bridge between an LLM and your Centreon platform. To protect your data, only use the Centreon MCP server with a local LLM or with an online LLM with a licence that stipulates your data will not be used. The MCP server does not store any data itself.

Centreon MCP server currently has integrations with ChatGPT, Mistral Le Chat and Claude.
However, because the server uses a standard HTTP/MCP endpoint, any AI compatible with MCP can connect to the Centreon MCP server.

## Features

The MCP server currently exposes 23 tools organized across seven functional areas.

| Area | Tools | Purpose |
|---|---|---|
| Resource Monitoring | `list_resources`, `count_hosts_by_status`, `count_services_by_status`, `get_host_timeline`, `get_service_timeline`, `request_check` | Query, count, inspect, and refresh real-time monitoring data |
| Infrastructure Inventory | `list_hostgroups`, `list_servicegroups`, `list_monitoring_servers` | Explore your monitoring topology |
| Configuration | `list_configurations`, `create_configuration`, `update_configuration`, `delete_configurations`, `generate_monitoring_servers_configurations`, `reload_monitoring_servers_configurations` | Manage and apply configuration objects |
| Acknowledgements | `list_acknowledgements`, `add_acknowledgements`, `cancel_acknowledgements` | Acknowledge and clear alerts |
| Downtimes | `list_downtimes`, `set_downtimes`, `cancel_downtimes` | Schedule and manage downtimes |
| Comments | `add_comments` | Leave context notes on a resource |
| Metrics | `get_service_metrics` | Read current metric values and thresholds |

### Resource Monitoring

**list_resources** is the central tool for querying your real-time monitoring data. It supports rich filtering across multiple dimensions simultaneously:

- **By resource type**: filter on hosts only, services only, or both
- **By status**: filter on OK, WARNING, CRITICAL, UNKNOWN, or PENDING states
- **By status type**: distinguish between HARD and SOFT states
- **By name, alias, or parent name**: substring matching on resource identifiers
- **By output/information content**: find resources whose check output contains (or does not contain) a given string — ideal for surfacing specific error messages across your infrastructure
- **By scope**: filter by host group, service group, host category, service category, or monitoring server (poller)
- **Pagination and sorting**: results are paginated and sortable by host name, alias, address, or state

This combination of filters makes it possible to ask highly specific questions such as "Show me all CRITICAL services on hosts in the 'production' host group whose output mentions 'disk full'" and get precise, actionable results directly in the conversation.

Two dedicated counting tools provide a fast status summary without retrieving individual resources:

- **count_hosts_by_status** — returns the total number of hosts in each state (UP, DOWN, UNREACHABLE, PENDING), optionally scoped to one or more host groups or host categories
- **count_services_by_status** — returns the total number of services in each state (OK, WARNING, CRITICAL, UNKNOWN, PENDING), optionally scoped by host name, host group, host category, service group, or service category

Both tools accept multiple filter sets combined with OR logic, making it straightforward to answer questions like "How many hosts are DOWN across the 'production' and 'staging' groups?" in a single call.

Two dedicated tools let the assistant inspect and refresh a single resource:

- **get_host_timeline** / **get_service_timeline** — fetch the event history of one host or service in real-time monitoring (state changes, notifications, downtimes, acknowledgements, comments). Filterable by event type, content substring, and date range. Sorted by date descending by default. Useful to answer "what happened on this resource recently?" without leaving the conversation.
- **request_check** — trigger a check on one or more resources (hosts and services) without waiting for the next polling cycle. Useful right after a remediation action to confirm recovery in conversation. The `is_forced` flag (default `true`) controls whether the configured check interval is bypassed.

### Infrastructure Inventory

Three read-only tools allow AI assistants to explore your monitoring topology:

- **list_hostgroups** — List host groups, filterable by host name, alias, address, state, poller, or group ID
- **list_servicegroups** — List service groups, filterable by host, service, host group, or poller attributes
- **list_monitoring_servers** — List pollers, with the ability to filter by name, ID, or running status

These tools serve as natural building blocks: an AI assistant can look up the relevant groups and pollers first, then use those identifiers to scope its subsequent queries precisely.

### Configuration

Four generic tools cover the full configuration lifecycle for hosts, host groups, host categories, host severities, host templates, and commands. Each tool accepts a `model_type` parameter to select the entity to operate on.

- **list_configurations** — List configurations, filterable by entity-specific fields (ID, name, alias, address, activation status, etc.). Results are paginated and sortable. Supported entity types: `command`, `host`, `host_category`, `host_group`, `host_severity`, `host_template`, `monitoring_server`.
- **create_configuration** — Create a new configuration by providing the required and optional parameters for the chosen entity type. Supported entity types: `command`, `host`, `host_category`, `host_group`, `host_severity`, `host_template`.
- **update_configuration** — Partially update an existing configuration by ID, using only the fields that need to change. Supported entity types: `host`, `host_category`, `host_group`, `host_severity`, `host_template`.
- **delete_configurations** — Delete one or more configurations by their IDs. Supported entity types: `host`, `host_category`, `host_group`, `host_severity`, `host_template`.

Each entity type carries its own set of parameters passed alongside `model_type`. For example, creating a host requires specifying the monitoring server, name, and IP address. Optional parameters include:

- SNMP community and version
- Geographic coordinates
- Severity
- Check and event handler commands
- Notification options
- Flap detection thresholds
- Host group, category, and template associations

Two additional tools apply configuration changes to your pollers:

- **generate_monitoring_servers_configurations** — Generate the configuration files for one or more pollers by their IDs. If no IDs are provided, generates configurations for all pollers. Runs concurrently when multiple IDs are given.
- **reload_monitoring_servers_configurations** — Reload the configuration of one or more pollers by their IDs, pushing the generated files to the monitoring engines. If no IDs are provided, reloads all pollers. Runs concurrently when multiple IDs are given.

Poller configurations themselves can be listed using **list_configurations** with `model_type` set to `monitoring_server`.

### Acknowledgements

Acknowledge alerts without ever leaving your conversation:

- **list_acknowledgements** — List current acknowledgements, with pagination and sorting (by ID, host, start time, entry time, etc.)
- **add_acknowledgements** — Acknowledge one or more resources at once, applying a message and configuring options such as sticky acknowledgement and notifications
- **cancel_acknowledgements** — Remove acknowledgements from one or more resources, with the option to also cancel service acknowledgements when a host is unacknowledged

### Downtimes

Full downtime lifecycle management through conversation:

- **list_downtimes** — Query scheduled or active downtimes, filterable by host name, alias, address, state, poller, and downtime properties (fixed, cancelled)
- **set_downtimes** — Schedule a downtime on one or more hosts or services, specifying start and end times, a comment, and whether the downtime is fixed or flexible
- **cancel_downtimes** — Cancel one or more downtimes by their IDs

### Comments

- **add_comments** — Attach a comment to any host or service in real-time monitoring, useful for leaving context notes on an ongoing incident directly from the AI assistant

### Metrics

- **get_service_metrics** — Retrieve all metrics of a service with their current values, units, and warning/critical thresholds. Useful for answering questions like "what is the current CPU usage?" or "how close is disk usage to the critical threshold?" without leaving the conversation.

### Common workflows

Several tools are designed to be chained in a single conversation:

- **Diagnose then confirm**: query resources with `list_resources`, remediate the underlying issue, then call `request_check` to confirm recovery immediately rather than waiting for the next polling cycle.
- **Configure then apply**: create or update host/service configuration, then run `generate_monitoring_servers_configurations` followed by `reload_monitoring_servers_configurations` on the affected pollers to push the change live.
- **Scope then query**: look up host groups, service groups, or pollers with the Infrastructure Inventory tools first, then use those IDs to scope a more precise `list_resources`, `count_hosts_by_status`, or `count_services_by_status` call.

For setting up the Centreon Infra Monitoring MCP server either locally or using Docker, read the README file on the [GitHub project](https://github.com/centreon/centreon-mcp).