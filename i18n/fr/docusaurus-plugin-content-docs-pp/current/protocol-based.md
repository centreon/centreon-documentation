---
id: protocol-based
title: Protocol-based connectors
description: "Learn what information a protocol/command-based connector needs, from host details and connectivity to protocol-specific requirements for HTTP, SSH, and databases."
---

For protocol/command-based connectors, the connector connects directly to a service or runs a check over a standard protocol. The basic information you need depends on the protocol, but generally:

## Common to all

* The host details: name, alias, and IP address/DNS.
* Network connectivity — the Centreon poller must be able to reach the target on the relevant port.
* Credentials to authenticate, if the service requires them.

## By protocol, more specifically

* HTTP/HTTPS — the target URL or endpoint, the port (usually 80/443), and for HTTPS any certificate considerations. Often credentials (e.g. basic auth, an API token) plus what you're checking for (status code, response time, a string in the page).
* SSH — the SSH port (usually 22), and authentication: either username/password or an SSH key. The poller must be authorized to connect, and often the remote command or check needs to run under an account with the right permissions.
* Database connections — the database port (e.g. 3306 for MySQL, 5432 for PostgreSQL, 1521 for Oracle), a database username and password, and often the specific database/instance name. The account usually needs read permissions on whatever you're monitoring.

In all cases you enter these values through the connector's macros after applying its template, and it's good practice to test the check from the poller CLI before deploying.

One thing worth confirming per connector: some database or application checks require an extra driver or client library installed on the poller—the connector's monitoring procedure will tell you if so.

## Troubleshooting protocol-based connectors

* See the [HTTP part of the **HTTP and API checks** section of our troubleshooting page](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
* See the [**SSH and CLI checks** section of our troubleshooting page](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md##ssh-and-cli-checks).
* The [**Common problems**](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#common-problems) section may also help.