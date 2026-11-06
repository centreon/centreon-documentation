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

## Authentication

Authentication requirements vary from one service to another. You may need:


* An API key or token.
* Client credentials — often a client ID and client secret (common with OAuth 2.0, e.g. Azure, AWS).
* Sometimes a username and password, or a combination used to request a temporary access token.
* For cloud providers, you may also need identifiers like a subscription ID, tenant ID, region, or account ID.

## What you're querying

* The specific resource or object to monitor (e.g. a particular database, VM, or bucket).
* Sometimes an API version if the service supports several.

## Other points to check for each connector

* Rate limits — some APIs cap how often you can query, which affects your check interval.
* Whether the connector needs a proxy configured to reach the internet (common when the poller is behind a firewall).

You enter these values through the connector's macros after applying its template. We recommend that you [test the check from the poller's command line](./connectors-test.md) before deploying the configuration. The connector's monitoring procedure lists the credentials and parameters that its API requires.

## Troubleshooting API-based connectors

* See the [**HTTP and API checks** section of our troubleshooting page](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
* See also [**Troubleshooting AWS**](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#troubleshooting-aws).
* The [**Common problems**](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#common-problems) section may also help.