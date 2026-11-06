---
id: api-based
title: API-based connectors
description: "Learn what information an API-based connector needs, from connection details and authentication to the resources you want to query."
---

For API-based connectors, the connector queries the target's API (usually REST) to collect data—common for cloud services and modern applications. The basic information you need:

## Connection details

* The API endpoint — the base URL or hostname of the API, and the port if it's non-standard.
* Protocol — usually HTTPS, so certificate considerations may apply.
* Network connectivity — the Centreon poller must be able to reach the API endpoint (and any proxy in between, if one is required).

## Authentication — this is the key part, and it varies by service

* An API key or token.
* Client credentials — often a client ID and client secret (common with OAuth 2.0, e.g. Azure, AWS).
* Sometimes a username and password, or a combination used to request a temporary access token.
* For cloud providers, you may also need identifiers like a subscription ID, tenant ID, region, or account ID.

## What you're querying

* The specific resource or object to monitor (e.g. a particular database, VM, or bucket).
* Sometimes an API version if the service supports several.

## Other things worth checking per connector

* Rate limits — some APIs cap how often you can query, which affects your check interval.
* Whether the connector needs a proxy configured to reach the internet (common when the poller is behind a firewall).

As with the others, you enter these values through the connector's macros after applying its template, and it's good practice to test the check from the poller CLI before deploying. The connector's monitoring procedure will list exactly which credentials and parameters that specific API requires.

## Troubleshooting API-based connectors

* See the [**HTTP and API checks** section of our troubleshooting page](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
* See also [**Troubleshooting AWS**](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#troubleshooting-aws).
* The [**Common problems**](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#common-problems) section may also help.