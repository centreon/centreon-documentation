---
id: traces-prerequisites
title: Prerequisites for traces
description: "Instrument your applications with OpenTelemetry SDKs to emit traces, then configure the OpenTelemetry Collector to export them to Log Management."
---

## Emitting traces from your application

To be able to explore traces in Log Management, your applications must first be instrumented to emit them. OpenTelemetry provides [SDKs for all major languages and frameworks](https://opentelemetry.io/docs/languages/).

## Sending traces to Log Management

You also need to configure your OpenTelemetry Collector to receive traces from your applications and export them to Centreon Log Management.

1. [Create a token](../administration/tokens.md#creating-a-token) to authenticate to your Log Management platform, or reuse the one your collector already uses for logs.
2. Edit the **config.yaml** file of your collector (see [where to find this file](../collector/collector.md#step-2-define-the-global-parameters-of-the-collector)).
3. In this file, define an OTLP receiver, the Centreon exporter and a **traces** pipeline:

   * In **endpoint**, enter `https://api.euwest1.obs.mycentreon.com/v1/ingress/otlp`.
   * In **X-Api-Key**, enter your token.

   ```yaml
   receivers:
     otlp:
       protocols:
         grpc:
           endpoint: 0.0.0.0:4317
         http:
           endpoint: 0.0.0.0:4318
   processors:
     batch:
   exporters:
     otlphttp/centreon:
       endpoint: "https://api.euwest1.obs.mycentreon.com/v1/ingress/otlp"
       headers:
         "X-Api-Key": "mytoken"
   service:
     pipelines:
       traces:
         receivers: [otlp]
         processors: [batch]
         exporters: [otlphttp/centreon]
   ```

   If your collector already sends logs to Log Management, the **otlphttp/centreon** exporter is already defined: just add the OTLP receiver and the **traces** pipeline.

   > The indentation of the parameters in your YAML file must be identical to that in the example. The indentations are two spaces for each level.

4. Configure the OpenTelemetry SDK of your applications to send traces to the collector, for example by setting the `OTEL_EXPORTER_OTLP_ENDPOINT` environment variable to `http://<collector_address>:4318`.
5. Restart the OpenTelemetry Collector service (see [the restart commands](../collector/collector.md#step-3-configure-each-log-source-for-your-host)).
