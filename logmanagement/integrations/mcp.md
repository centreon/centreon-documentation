---
id: mcp-server
title: Connecting an AI assistant (MCP server)
description: Connect an AI assistant to Centreon Log Management with the MCP server to search, summarize and forecast your logs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> This is a new feature that evolves quickly: new tools are added as they are released.

## What is the MCP server?

Model Context Protocol (MCP) is an open standard that lets an AI assistant use external tools. The Centreon Log Management MCP server connects an AI assistant to the logs of your organization. Claude, Visual Studio Code, or any other client compatible with MCP can then search your logs, summarize them, chart their volume and forecast it, directly from the conversation.

The MCP server does not store any data. However, the logs returned by its tools are sent to the language model your assistant uses. Only use the MCP server with an assistant whose terms of use fit your data policy, for example a local model or a service that does not train on your data.

## Prerequisites

- An **API token** for your organization. Tokens are created by an Administrator on the **Administration > Token management** page: see [Managing authentication tokens](../administration/tokens.md). The token gives access to all the logs of your organization: store it as a secret and do not share it.
- The **name of your organization**. It appears in the address of the Log Management interface, after `/organizations/`: for `https://obs.mycentreon.com/organizations/acme/...`, the organization is `acme`.
- If you connect with your own user account instead of an API token, you need the **Editor** role or higher (see [User rights](../user-rights.md)).

## Endpoint and authentication

The MCP server is reachable at the following address, where `<organization>` is the name of your organization:

```text
https://api.euwest1.obs.mycentreon.com/v1/orgs/<organization>/log-analysis/mcp
```

Every request must carry exactly one credential:

- `X-Api-Key: <token>`, with an API token (recommended).
- `Authorization: Bearer <token>`, with the access token of a user account.

The organization is fixed by the address: a connection gives access to one organization only, and a token only works with the organization it was created in. To work with several organizations, add one connection per organization.

The MCP server does not support the OAuth sign-in flow yet. You can therefore only connect clients that let you set a custom HTTP header, such as the ones below.

## Connecting a client

In the examples below, replace `<organization>` with the name of your organization and `<token>` with your API token.

<Tabs groupId="mcp-client">
<TabItem value="Claude Code" label="Claude Code" default>

Run the following command:

```shell
claude mcp add --transport http centreon-logs https://api.euwest1.obs.mycentreon.com/v1/orgs/<organization>/log-analysis/mcp --header "X-Api-Key: <token>"
```

Or add the server to the `.mcp.json` file of your project:

```json
{
  "mcpServers": {
    "centreon-logs": {
      "type": "http",
      "url": "https://api.euwest1.obs.mycentreon.com/v1/orgs/<organization>/log-analysis/mcp",
      "headers": {
        "X-Api-Key": "<token>"
      }
    }
  }
}
```

In Claude Code, the `/mcp` command shows `centreon-logs` as connected.

</TabItem>
<TabItem value="Visual Studio Code" label="Visual Studio Code">

Add the server to the `.vscode/mcp.json` file of your workspace. With this configuration, Visual Studio Code asks for the token the first time it starts the server and stores it securely, so the token does not appear in the file:

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "clm-api-key",
      "description": "Centreon Log Management API token",
      "password": true
    }
  ],
  "servers": {
    "centreon-logs": {
      "type": "http",
      "url": "https://api.euwest1.obs.mycentreon.com/v1/orgs/<organization>/log-analysis/mcp",
      "headers": {
        "X-Api-Key": "${input:clm-api-key}"
      }
    }
  }
}
```

</TabItem>
<TabItem value="Claude Desktop" label="Claude Desktop">

Claude Desktop only starts local servers from its configuration file, so the connection goes through [mcp-remote](https://www.npmjs.com/package/mcp-remote), a small bridge that runs with Node.js. Its version is pinned on purpose: the bridge receives your token, so only upgrade it deliberately.

1. Install [Node.js](https://nodejs.org/).
2. In Claude Desktop, go to **Settings > Developer** and click **Edit Config**.
3. Add the server to the `claude_desktop_config.json` file:

   ```json
   {
     "mcpServers": {
       "centreon-logs": {
         "command": "npx",
         "args": [
           "-y",
           "mcp-remote@0.14.3",
           "https://api.euwest1.obs.mycentreon.com/v1/orgs/<organization>/log-analysis/mcp",
           "--transport",
           "http-only",
           "--header",
           "X-Api-Key:${CLM_API_KEY}"
         ],
         "env": {
           "CLM_API_KEY": "<token>"
         }
       }
     }
   }
   ```

4. Restart Claude Desktop.

</TabItem>
</Tabs>

Once connected, your client lists 6 tools and 3 prompts for the server. To check that everything works, ask for example:

> Are there errors in the last 24 hours? Summarize what happened and forecast whether the log volume will keep rising over the next few hours.

## Tools

| Tool                | What it does                                                       |
| ------------------- | ------------------------------------------------------------------ |
| `search_logs`       | Searches logs from a question in natural language or from a query  |
| `summarize_logs`    | Writes a summary of the logs that match a query over a time window |
| `aggregate_logs`    | Counts the logs over time, in total, per severity or per service   |
| `forecast_logs`     | Forecasts the log volume of a query from its recent history        |
| `list_log_fields`   | Lists the fields you can query in your logs                        |
| `list_field_values` | Lists the most frequent values of a field                          |

You do not call the tools yourself: you ask a question, and the assistant chooses the tools and chains them. Knowing what each tool does helps you phrase your questions.

- **search_logs** accepts either a question in natural language ("errors from the billing service in the last hour") or a query written with the [query syntax](../query-syntax.md). A question is translated into a query, and the tool returns that query, so the assistant can refine it or reuse it with the other tools. The tool returns the number of matching logs and up to 1,000 of them (20 by default).
- **summarize_logs** returns a written summary of the logs that match a query, by default over the last hour.
- **aggregate_logs** returns the number of logs over time, as one curve in total, one curve per severity, or one curve per service (the 20 largest). This is how the assistant spots a peak or a trend without reading every log.
- **forecast_logs** counts the logs that match a query over a time window (by default the last 24 hours) and forecasts the next points at the same interval.
- **list_log_fields** lists the fields of your logs, with their types and whether they can be searched or aggregated. The assistant uses it before writing a query on a field it does not know.
- **list_field_values** lists the most frequent values of a field, with their count. For example, the severity of a log can be written `ERROR` or `Error` depending on the application that sent it: this tool shows every variant.

## Prompts

The MCP server also provides prompts: ready-made instructions that guide the assistant through a complete investigation. Depending on your client, they appear as commands (for example `/centreon-logs:incident_postmortem` in Claude Code) or in a prompt picker. Each prompt takes optional arguments in free text.

| Prompt                | What it does                                                                                                                                        | Optional arguments                                                                                                      |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `incident_postmortem` | Investigates an incident in the logs and writes a post-mortem: precursors, timeline to the minute, with the query behind every statement            | `incident`: what is already known (time window, affected services, symptoms)                                            |
| `period_digest`       | Answers "what happened while I was away?" by comparing a period with a baseline: trends, anomalies or an explicit all-clear, highlights per service | `period`: the period to cover (the last 24 hours by default); `focus`: what normal looks like, or the services to watch |
| `understand_logs`     | Gives a tour of your logs for a newcomer: the services present, their volume and severity profile, typical logs, and starter queries                | `focus`: an area to start with (a service, a technology, a question)                                                    |

## Limitations

- The MCP server only reads your logs: it does not create or modify anything in your organization.
- One connection gives access to one organization.
- Authentication relies on a token sent in an HTTP header. Clients that only support the OAuth sign-in flow cannot connect yet.

## Troubleshooting

- **401 Unauthorized**: the credential is missing or invalid, both `X-Api-Key` and `Authorization` were sent, or the token belongs to a different organization from the one in the address.
- **403 Forbidden**: the credential is valid, but the user account has a role lower than **Editor** in the organization.
- **404 Not Found**: check the address, in particular the name of the organization and the `/log-analysis/mcp` path.
