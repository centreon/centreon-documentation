---
id: connectors-test
title: Testing a monitoring connector
description: "Steps to test that a connector actually works."
---

Before you rely on a connector in production, it is good practice to test it directly from the poller's command line. Running the plugin manually confirms that the poller can reach the monitored resource, that the credentials and parameters are correct, and that the check returns data - before you apply the template to a host and deploy. This is faster to troubleshoot than waiting for a scheduled check, because the plugin prints the exact error it encounters.

## Before you start

The plugin must already be installed on the poller you are testing from. If it is not, install it first (see [Installing a Monitoring Connector](./installing-connectors.md)). You will also need the connection details the connector requires—typically the host address, credentials, and any connector-specific parameters listed in its monitoring procedure.

## Running a check from the poller CLI

1. Connect to the poller by SSH.
2. Go to the plugins directory:

```bash
   cd /usr/lib/centreon/plugins/
```

3. Run the plugin with the parameters for the resource you want to monitor. The exact command is given in each connector's monitoring procedure; it follows this general form:

```bash
   ./centreon_plugin.pl \
     --plugin=<plugin::path> \
     --mode=<mode> \
     --hostname='<target>' \
     [connection and credential options] \
     [--warning=<value> --critical=<value>]
```

4. Read the output.

## Understanding the result

The plugin returns one line beginning with a status keyword, optionally followed by performance data after a `|`:

* **OK** — the check succeeded and the values are within thresholds.
* **WARNING** / **CRITICAL** — the check succeeded but a value crossed the threshold you set.
* **UNKNOWN** — the check could not complete. This usually points to a configuration problem: an unreachable host, a wrong port, bad credentials, or a missing option.

A successful run looks something like this:

```bash
OK: CPU(s) average usage is 0.84 % | 'cpu.utilization.percentage'=0.84%;;;0;100
```

The text before the `|` is the human-readable status; everything after it is the performance data Centreon turns into graphs and thresholds.

## If the check fails

An UNKNOWN result, or an error instead of a status line, almost always comes from the connection rather than the plugin itself. Work through the usual causes:

* The poller cannot reach the target on the required port (check network paths and firewalls).
* The credentials are wrong, or the account lacks the permissions the connector needs.
* A required parameter is missing or mistyped.
* A prerequisite is not met—some connectors need an extra component or agent on the target, as noted in their monitoring procedure.

Add `--verbose` to the command for more detail, and use `--help` to list every option available for the plugin and mode you are testing. Once the command returns the expected result from the CLI, you can apply the connector's template to a host and deploy with confidence that the check will work.

See also: [Troubleshooting plugin errors](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md).
