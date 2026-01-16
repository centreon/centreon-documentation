---
id: collector
title: Configuring an OpenTelemetry collector
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

As explained in [What is OpenTelemetry and how is it used by Centreon Log Management?](../getting-started/concepts.md#what-is-opentelemetry-and-how-is-it-used-by-centreon-log-management), you need to install an OpenTelemetry collector on your host to be able to send logs to CLM.

## How is an OpenTelemetry Collector configured?

An OpenTelemetry Collector has three main components that are executed one after the other:

* **Receivers** ingest data. They accept logs in various formats and from various sources (e.g., OTLP, syslog, etc).
* **Processors** let you filter, transform, or enrich data before it leaves the collector.
* **Exporters** send the logs in OpenTelemetry format to Centreon Log Management. Exporters are configured using the general **config.yaml** file of the collector.

<!-- attributs custom
resource attributes -->

## How can I send logs to Centreon Log Management?

### Prerequisites

* Generate [a token to authenticate the host to your Log Management instance](../administration/tokens.md).
* Obtain from Centreon the URL of the endpoint required to connect an OpenTelemetry Collector to your Log Management instance.

### Step 1: Install OpenTelemetry Collector on your host

Use the **otelcol-contrib** packages to install OpenTelemetry Collector on each device from which you want to collect logs.

<!--[en mode agent ou gateway - différence mode agent/mode gateway].-->

<Tabs groupId="os" queryString>
<TabItem value="Linux" label="Linux">

https://opentelemetry.io/docs/collector/installation/#linux

</TabItem>
<TabItem value="Windows" label="Windows">

https://opentelemetry.io/docs/collector/installation/#windows

</TabItem>
</Tabs>

### Step 2: Define the global parameters of the collector

1. Logged in as **root**, edit the **config.yaml** file that was created when you installed the collector:

   <Tabs groupId="os" queryString>
   <TabItem value="Linux" label="Linux">

   ```text
   /etc/otelcol-contrib/config.yaml
   ```

   </TabItem>
   <TabItem value="Windows" label="Windows">

   ```text
   C:\Program Files\OpenTelemetry Collector\config.yaml
   ```

   Make sure you save the file as an administrator.

   </TabItem>
   </Tabs>

2. In this file, enter the global log collection settings specific to this device. These will apply to all log sources for this device.

   * In **endpoint**, enter the address of your CLM instance as provided by Centreon. The address will look like this: `https://your.organization.com/v1/ingress/otlp`.
   * in **X-Api-Key**, enter the [token required to authenticate to your CLM instance](../administration/tokens.md).

   Example:

   ```yaml
   # Copyright 2025 Centreon.
   # SPDX-License-Identifier: Apache-2.0
   exporters:
     otlphttp/centreon:
       endpoint: "https://your.organization.com/v1/ingress/otlp"
       headers:
         "X-Api-Key": "<%TOKEN%>"
     debug:
       verbosity: detailed
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
   ```

   > The indentation of the parameters in your YAML file must be identical to that in the example.

### Step 3: Configure log sources

Configure a log source for each desired service (syslog, apache, etc.) in the form of a YAML file.

1. Create the following directory:

   <Tabs groupId="os" queryString>
   <TabItem value="Linux" label="Linux">

   ```shell
   mkdir /etc/otelcol-contrib/conf.d/
   ```

   </TabItem>
   <TabItem value="Windows" label="Windows">

   ```shell
   C:\Program Files\OpenTelemetry Collector\conf.d
   ```

   </TabItem>
   </Tabs>

2. In this directory, create one file per log source. For example: the **httpd-combined.yaml** and **httpd-error.yaml** files will contain the configuration for the Apache access log and Apache error log, respectively.

3. Retrieve from GitHub the sample file for the log source you want: https://github.com/CentreonLabs/centreon-otel-col-log-template/tree/main.

4. On the source device, copy and paste the code snippet into the corresponding file. Save the file.
   
   > The indentation of the parameters in your YAML file must be identical to that in the example.

5. In **/etc/otelcol-contrib/otelcol-contrib.conf**, declare each of the files you created: in the **OTELCOL_OPTIONS** parameter, add a **--config** option for each file, as in the following example (be sure to keep the declaration of the global configuration file **config.yaml**):

   ```shell
   OTELCOL_OPTIONS="--config=/etc/otelcol-contrib/config.yaml --config=/etc/otelcol-contrib/conf.d/httpd-combined.yaml --config=/etc/otelcol-contrib/conf.d/httpd-error.yaml"
   ```

<!-- ```
Get-WmiObject win32_service -filter "Name='otelcol-contrib'" | Invoke-WmiMethod -Name Change -ArgumentList @($null,$null,$null,$null,$null, '"C:\Program Files\OpenTelemetry Collector\otelcol-contrib.exe" --config "C:\Program Files\OpenTelemetry Collector\config.yaml" --config "C:\Program Files\OpenTelemetry Collector\conf.d\windows-event-log.yaml"')
``` -->

5. Restart the OpenTelemetry Collector service.

   <Tabs groupId="os" queryString>
   <TabItem value="Linux" label="Linux">

   ```shell
   systemctl restart otelcol-contrib.service
   ```

   </TabItem>
   <TabItem value="Windows" label="Windows">

   ```shell
   net stop otelcol-contrib
   net start otelcol-contrib
   ```

   </TabItem>
   </Tabs>

## Troubleshooting

Check the status of your collector on the host you want to receive logs from:

 ```shell
journalctl -u otelcol-contrib.service
```

If you do not receive expected logs in CLM, check that the **otelcol-contrib** user has sufficient rights to read the required files, according to the type of receiver. Example:

```shell
ls -l /var/log/messages
id otelcol-contrib
usermod -aG root otelcol-contrib
```
