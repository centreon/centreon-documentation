---
id: quickstart
title: "Quickstart: Send your first logs"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You just got access to CLM — let's get your first logs flowing in under 10 minutes.

By the end of this guide, you'll have a working collector sending real logs to CLM, and you'll know how to find them in the Log Explorer.

## Prerequisites

- You have received your CLM access URL from Centreon.
- You have created your account on the [Centreon user portal](../administration/user-portal.md) and can access your CLM instance.

## Step 1: Generate an authentication token

The collector needs a token to authenticate with CLM.

1. In CLM, go to **Administration > Token management**.
2. Click **Add**.
3. Enter a name (e.g., `my-first-collector`) and click **Generate token**.
4. **Copy the token now** — it won't be displayed again.

:::tip
Store the token in a password manager or a secure note. You'll need it in the next step.
:::

## Step 2: Install the OpenTelemetry Collector

Install the **otelcol-contrib** package on the host you want to collect logs from.

<Tabs groupId="os" queryString>
<TabItem value="Linux" label="Linux">

<Tabs groupId="distrib" queryString>
<TabItem value="EL" label="EL (RHEL, AlmaLinux, Rocky)">

```shell
wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.145.0/otelcol-contrib_0.145.0_linux_amd64.rpm
sudo rpm -ivh otelcol-contrib_0.145.0_linux_amd64.rpm
```

</TabItem>
<TabItem value="Debian" label="Debian / Ubuntu">

```shell
wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.145.0/otelcol-contrib_0.145.0_linux_amd64.deb
sudo dpkg -i otelcol-contrib_0.145.0_linux_amd64.deb
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Windows" label="Windows">

Download and run the MSI installer:

```
https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.145.0/otelcol-contrib_0.145.0_windows_x64.msi
```

</TabItem>
</Tabs>

## Step 3: Configure the collector

<Tabs groupId="os" queryString>
<TabItem value="Linux" label="Linux">

Edit `/etc/otelcol-contrib/config.yaml` (as **root**):

```yaml
exporters:
  otlphttp/centreon:
    endpoint: "https://api.euwest1.obs.mycentreon.com/v1/ingress/otlp/v1/logs"
    headers:
      "X-Api-Key": "<YOUR_TOKEN>"

processors:
  batch:
  resourcedetection:
    detectors: ["system"]
    system:
      resource_attributes:
        host.name:
          enabled: true
        os.name:
          enabled: true
        os.type:
          enabled: true
        os.version:
          enabled: true

receivers:
  filelog/syslog:
    include:
      - /var/log/syslog
      - /var/log/messages
    resource:
      service.name: syslog

service:
  pipelines:
    logs:
      receivers: [filelog/syslog]
      processors: [resourcedetection, batch]
      exporters: [otlphttp/centreon]
```

Replace `<YOUR_TOKEN>` with the token you generated in Step 1.

</TabItem>
<TabItem value="Windows" label="Windows">

Edit `C:\Program Files\OpenTelemetry Collector\config.yaml` (as **Administrator**):

```yaml
exporters:
  otlphttp/centreon:
    endpoint: "https://api.euwest1.obs.mycentreon.com/v1/ingress/otlp/v1/logs"
    headers:
      "X-Api-Key": "<YOUR_TOKEN>"

processors:
  batch:
  resourcedetection:
    detectors: ["system"]
    system:
      resource_attributes:
        host.name:
          enabled: true
        os.name:
          enabled: true
        os.type:
          enabled: true
        os.version:
          enabled: true

receivers:
  windowseventlog/application:
    channel: Application

service:
  pipelines:
    logs:
      receivers: [windowseventlog/application]
      processors: [resourcedetection, batch]
      exporters: [otlphttp/centreon]
```

Replace `<YOUR_TOKEN>` with the token you generated in Step 1.

</TabItem>
</Tabs>

:::warning
YAML indentation matters — use exactly **2 spaces** per level, no tabs.
:::

## Step 4: Start the collector

<Tabs groupId="os" queryString>
<TabItem value="Linux" label="Linux">

```shell
sudo systemctl restart otelcol-contrib.service
sudo systemctl status otelcol-contrib.service
```

</TabItem>
<TabItem value="Windows" label="Windows">

```shell
net stop otelcol-contrib
net start otelcol-contrib
```

</TabItem>
</Tabs>

## Step 5: See your logs in CLM

1. Open CLM and go to the **Log explorer** page.
2. Your logs should appear within a few seconds.
3. Try a simple query to filter them:

```text
service_name:syslog
```

:::tip
If no logs appear after 30 seconds, check the [Troubleshooting](#something-not-working) section below.
:::

## Step 6: Create your first alert

Now that logs are flowing, set up a basic alert to get notified when errors occur.

1. Go to **Alerts & notifications > Alert rules**.
2. Click **Add**.
3. Configure it:
   - **Name**: `High severity logs`
   - **Alert type**: Count
   - **Query**: `severity_number:[17 TO *]` (this catches ERROR and FATAL logs)
   - **Frequency**: Every 5 minutes
   - **Condition**: If > 10, then CRITICAL
4. Click **Save**.

CLM will now generate alert events whenever more than 10 error-level logs appear in a 5-minute window.

## Something not working?

| Symptom | What to check |
|---------|---------------|
| **No logs in CLM** | Is the collector running? Check with `systemctl status otelcol-contrib.service` (Linux) or `sc query otelcol-contrib` (Windows). |
| **Collector won't start** | Check the logs: `journalctl -u otelcol-contrib.service -n 50` (Linux). Usually a YAML indentation or syntax issue. |
| **"401 Unauthorized" in collector logs** | Your token is invalid or expired. Generate a new one in **Administration > Token management**. |
| **"413 Request Entity Too Large"** | Log batches exceed 5 MiB. Add a `sending_queue` config to reduce batch size. |
| **Logs appear but can't be queried** | Check that you're looking at the right time period (top right corner of Log Explorer). |
| **Permission denied on log files** | The `otelcol-contrib` user needs read access: `sudo usermod -aG adm otelcol-contrib` then restart. |

## What's next?

- [**Query syntax**](../query-syntax.md) — learn how to filter logs with precision
- [**Dashboards**](../dashboards.md) — build visual overviews of your log data
- [**Alert rules**](../alerts.md) — set up more advanced alerting (ratio-based, multi-condition)
- [**Collector configuration**](../collector/collector.md) — add more log sources (Apache, nginx, custom apps)
