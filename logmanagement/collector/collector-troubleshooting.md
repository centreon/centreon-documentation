---
id: collector-troubleshooting
title: Troubleshooting your installation
description: Troubleshoot OpenTelemetry collector installation and log collection issues
---

## Initial checks

Before diving into complex troubleshooting, ensure the following basic checks are complete:

* Collector Version: Verify you are using a supported and stable version of **otelcol-contrib**.
* System Requirements: Confirm your environment meets the minimum CPU, memory, and disk space requirements for the expected load.
* Configuration File Location: Ensure the Collector is loading the correct configuration file. The default location varies based on the installation method (e.g., **/etc/otelcol/config.yaml** for Linux service installations).
* Firewall Rules: Check that inbound and outbound ports used by the Collector (e.g., 4317/4318 for OTLP) are open in your firewall settings.

## Reviewing logs

Logs are the most critical resource for diagnosing problems. The location of Collector logs depends on how it was installed:

* Systemd Service (Linux): `journalctl -u otelcol-contrib.service`.
* Windows: In Windows Event Viewer, select **Windows Logs > Application**, then filter on **otelcol-contrib**.
* Execute the collector directly from its installation directory (`otelcol-contrib.exe --config config.yaml`): Look at the standard output (stdout) or as configured in the `--config` file.

### Common log messages

Pay close attention to error or warning messages related to:

* Configuration Parsing: Errors here indicate syntax issues (e.g., incorrect YAML indentation) or references to undefined components.
* Receiver Binding: If the Collector cannot bind to the configured port (e.g., port 4317), it suggests another process is using that port or a permission issue.
* Exporter Failures: Errors connecting to the backend usually result in connection refused or timeout messages.
* Processor Errors: Issues during data manipulation or batching can indicate resource constraints or misconfiguration.

## Configuration validation

A significant portion of Collector issues stem from misconfiguration.

### Checking rights

If you do not receive expected logs in Centreon Log Management, check that the **otelcol-contrib** user has sufficient rights to read the required files, according to the type of receiver. Example:

```shell
ls -l /var/log/messages
id otelcol-contrib
usermod -aG root otelcol-contrib
```

### Validating YAML syntax

Use a YAML linter tool to verify the structural integrity of your configuration file. Missing colons, incorrect nesting, or invalid characters can prevent startup.

### Checking component integrity

Ensure every component listed in the **service::pipelines** section is defined in the respective **receivers**, **processors**, and **exporters** sections.

A simple configuration example for verification:

```yaml
receivers:
  otlp:
    protocols:
      grpc:
      http:
exporters:
  logging:
    loglevel: debug
service:
  pipelines:
    traces:
      receivers: [otlp]
      exporters: [logging]
```

## Reviewing endpoint and credentials

Check that the exporter configuration includes the correct endpoint URL and the necessary authentication token.

| Component | Information to Check |
| --- | --- |
| Receivers | Correct protocol (e.g., otlp GRPC/HTTP) and port number |
| Processors | Correct ordering in the pipeline; ensure required sub-settings are present |
| Exporters | Target endpoint URL and port, authnetication token |

## Network and connectivity

If the Collector starts successfully but no data reaches Centreon Log Management, the issue is likely network-related.

* Check port availability: Use tools like **netstat** or **ss** to verify that the Collector process is listening on the configured receiver ports. Example (Linux): `sudo netstat -tuln | grep 4317`
* Test backend reachability: From the Collector's host, test connectivity to Log Management's endpoint using tools like **ping**, **telnet**, or **curl**. Example (Testing OTLP Exporter Target): `telnet <backend_ip> 4317` (Ensure the connection is established.)
* Source agent/application check: Ensure the applications sending data (e.g., instrumented services) are configured to send data to the Collector's IP and port. This is often the most overlooked step.

## Advanced Debugging

If basic steps fail, enable detailed debugging.

### Set logging to debug

Set the **loglevel** in the Collector's configuration to **debug**. This provides verbose output, including details about data ingestion and processing.

```yaml
service:
  telemetry:
    logs:
      level: debug
```

### Using the Health Check extension

If using the Collector Contrib distribution, add the **health_check** extension to monitor the Collector's operational status.

Add the following to your configuration:

```yaml
extensions:
  health_check:
service:
  extensions: [health_check]
```

Accessing the status at `http://localhost:13133` can provide immediate insight into any failing components. The Collector must be running to access the health check endpoint.

## See also

Refer to the [official OpenTelemetry documentation](https://opentelemetry.io/docs/collector/troubleshooting/).
