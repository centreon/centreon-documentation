---
id: collector-generator
title: Generating an OTel collector configuration file
---

Configuring an OpenTelemetry Collector can be complex. Log Management provides an interface where you can select configuration snippets for your data sources and edit them to match your setup. You then download the ready-to-use result.

More data sources will be added over time. If your data source is not listed, use the [manual configuration procedure](collector.md) instead.

The generated file contains receivers, processors and exporters as explained in [How an OpenTelemetry collector works](opentelemetry-collector.md).

## Step 1: Configure receivers

1. Go to **OTel collector configurator** and then click **Create**.
2. In the window that opens, select the correct pack for the data source you want:
   * Use the search bar at the top of the window, or
   * Click **Add pack** in the **Configure packs** section.

   At the moment, a pack contains just one snippet.

   Once you have selected a pack, a summary appears in the **Configure packs** section and the **Preview configuration YAML** panel is updated. Your data source is then added to the **receivers** section of the configuration file.
3. Check that the log file displayed in the **Configure packs** section for your data source is correct.

## Step 2: Configure processors

1. Enable and configure any parameters you want in the **Configure processors** section. These will be added to the **processors** section of the configuration file and will apply to every data source.
2. Check that everything is correct in the **Preview configuration YAML** panel.
   * An exporter for Centreon Log Management is already pre-configured (you will have to complete it in [step 3](#step-3-enter-the-authentication-token-for-centreon-log-management)).
   * The correct pipeline for your receivers, processor and exporter is generated automatically.

## Step 3: Enter the authentication token for Centreon Log Management

1. Copy or download your configuration file using the buttons at the bottom of the window.
2. Before you deploy your configuration file, make sure you replace the placeholder value in the **X-Api-Key** field with your Log Management [authentication token](../administration/tokens.md).

## Step 4: Deploy your configuration file

Deploy your configuration file on the server you want to collect logs from.
