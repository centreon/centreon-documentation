---
id: mcp-server
title: Centreon MCP server
description: "Overview of the Centreon MCP server tools for AI assistant integration"
---

> This is a new, rapidly evolving feature. During its initial phases, the main source of documentation will be the README file on the [GitHub project](https://github.com/centreon/centreon-mcp).

## What is an MCP server ?

Model Context Protocol (MCP) is an open-standard and open-source framework that allows AIs to integrate with external tools such as Centreon Infra Monitoring. An MCP server is a software that allows the usage of MCP.

The Centreon MCP server works as a bridge between an LLM and your Centreon platform. To protect your data, only use the Centreon MCP server with a local LLM or with an online LLM with a licence that stipulates your data will not be used. The MCP server does not store any data itself.

Centreon MCP server currently has integrations with ChatGPT, Mistral Le Chat and Claude.
However, because the server uses a standard HTTP/MCP endpoint, any AI compatible with MCP can connect to the Centreon MCP server.

## Features

The Centreon MCP server allows you to connect AI assistants such as ChatGPT or Claude to your Centreon Infra Monitoring platform.
This allows you to request information or actions relating to your infrastructure monitored by Centreon via prompts to the AI assistant.
For example you can ask it to set a downtime for a resource or show you all hosts with a "Warning" status.

The Centreon MCP server features allow interaction with 5 areas of Centreon:

- Resource monitoring: list resources by applying filters.
- Infrastructure inventory: list groups or pollers by applying filters.
- Acknowledgements: list and manage acknowledgements of alerts.
- Downtimes: list and manage downtimes.
- Comments: add comments on a host or a service.

For setting up the Centreon Infra Monitoring MCP server either locally or using Docker, read the README file on the [GitHub project](https://github.com/centreon/centreon-mcp).
