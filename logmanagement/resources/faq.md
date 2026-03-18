---
id: faq
title: FAQ & Troubleshooting
---

## Collector issues

### My logs don't appear in CLM

Work through this checklist:

1. **Is the collector running?**
   - Linux: `systemctl status otelcol-contrib.service`
   - Windows: `sc query otelcol-contrib`

2. **Are there errors in the collector logs?**
   - Linux: `journalctl -u otelcol-contrib.service -n 50`
   - Check for authentication errors (401), network timeouts, or YAML parsing failures.

3. **Is your token valid?** Go to **Administration > Token management** in CLM and verify that the token exists and hasn't been deleted.

4. **Can the host reach CLM?** Test connectivity:
   ```shell
   curl -v https://api.euwest1.obs.mycentreon.com/v1/ingress/otlp/v1/logs
   ```

5. **Does the collector user have read access to the log files?**
   ```shell
   ls -l /var/log/syslog
   id otelcol-contrib
   ```
   If not: `sudo usermod -aG adm otelcol-contrib`, then restart the collector.

### The collector won't start

This is almost always a YAML issue:

- **Indentation**: YAML requires exactly 2 spaces per level, no tabs.
- **Missing quotes**: The endpoint URL and token must be in double quotes.
- **Duplicate keys**: If you have multiple config files, make sure the `service.pipelines` section is defined only once.

Validate your YAML before restarting:
```shell
otelcol-contrib validate --config /etc/otelcol-contrib/config.yaml
```

### I get a "413 Request Entity Too Large" error

CLM accepts log batches up to **5 MiB**. If your logs are very verbose, configure batch size limits in your exporter. See the [OpenTelemetry exporter documentation](https://github.com/open-telemetry/opentelemetry-collector/tree/main/exporter/otlphttpexporter).

## Log Explorer issues

### My query returns no results

- **Check the time period** (top right corner of the Log Explorer). Your logs might be outside the selected range.
- **Check attribute names** — they are case-sensitive. Use `service_name`, not `Service_Name`.
- **Use wildcards** when you're unsure of the exact value: `body.message:*error*`
- **Start broad, then narrow down**: remove filters one by one to find which one excludes your logs.

### I can see logs but can't filter by a specific attribute

The attribute might not be present in your logs. Expand a log entry to see all available attributes. If the attribute you need is missing, you may need to [adjust your collector configuration](../collector/collector.md) to capture it.

## Alert issues

### My alert rule never triggers

- **Check the query**: copy-paste the alert rule's query into the Log Explorer and verify it returns results.
- **Check the threshold**: if your condition is "if > 100" but you only get 5 matching logs per period, the alert won't trigger. Lower the threshold or widen the query.
- **Check the frequency**: the frequency defines both how often the check runs *and* the time window it covers. "Every 5 minutes" looks at the last 5 minutes of data.

### I'm getting too many alert events

- **Raise the threshold** to reduce noise.
- **Narrow the query** to target only the logs that truly matter.
- **Use a ratio-based alert** instead of count-based if you want to detect anomalies relative to normal traffic.

## Storage & limits

### I've reached the 150 GB storage limit

During the BETA, each organization has a 150 GB cap. Once reached, **new logs are rejected**. Options:

- Monitor your usage in **Administration > Storage Usage**.
- Reduce the volume of logs sent by filtering at the collector level (using processors).
- [Contact us](https://www.centreon.com/contact/) if you need a higher limit during the BETA.

### How long are my logs retained?

Log retention during the BETA follows the terms communicated at signup. Check with your Centreon contact for your organization's specific retention policy.

## API issues

### I get a 401 error on API calls

Your API token is missing, invalid, or expired. Generate a new one in **Administration > Token management** and include it in your request header:

```shell
curl -H "Authorization: Bearer <YOUR_TOKEN>" \
  https://api.euwest1.obs.mycentreon.com/v1/logs/search
```

### I'm hitting rate limits (429 errors)

The API enforces rate limits per plan (60 req/min for Standard, 300 req/min for Enterprise). If you hit the limit, wait and retry. Use the `Retry-After` header to know when you can make requests again.
