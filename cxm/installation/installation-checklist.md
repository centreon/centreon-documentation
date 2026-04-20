---
id: installation-checklist
title: Experience Monitoring installation checklist
---

This list shows the requirements needed for Centreon Experience Monitoring's features to run properly on a given site. (Bear in mind that some features may not be included in your license.)

## User journeys/Synthetic monitoring (STM)

There is nothing to install because CXM connects to your application just like any regular user.

However, depending on the security level on your site, you may need to allow our IP addresses so that your anti-bot system does not block our probes. If that's the case, you'll [find the procedure here](./cxm-ip-addresses.md).

## Real User Monitoring (RUM)

Real User Monitoring installs like any marketing tag: by inserting a JavaScript tag into your site's HEAD element. For the full procedure and installation instructions, see: [Install Real User Monitoring](./real-user-monitoring-installation.md).

## Digital sobriety

Digital sobriety scores are calculated from STM and RUM data. If STM and RUM are properly installed and configured, no additional installation is required.

## Analyze a site's business data (Google Analytics/Matomo)

To correlate your business data with other Experience Monitoring data, you need to [link your Google Analytics or Matomo account to Experience Monitoring](../configuration/configure-google-analytics.md).

In the **Business data** page:

* The **Journey and revenues** tab contains data only if you have configured a [user journey](#user-journeyssynthetic-monitoring-stm).

* The **Infratructure cost/click** contains data only if you have configured an agent collecting [system data](#system-data-monitor-the-health-of-your-host-server).

## System data: monitor the health of your host server

To monitor the health of your host server, you need to install a system agent on it. Additional modules can be added depending on the level of detail you need or your license allows.

* [Install the system agent](./servers/install-system-agents.md) to retrieve basic information about your server.
* After the agent is installed, you can install additional modules:

   * If your application runs on Apache, MySQL, Varnish (...), [install a dedicated agent](./servers/add-advanced-metrics.md) to collect data from those services.
   * If you are using a PHP application (e.g. Magento or OroCommerce), [install the PHP profiler](./servers/install-php-magento-orocommerce-profiler.md).

## Check a site's network performance

You don't need to do anything - data appears automatically on the **Network data** page.

## Run a load test

You don't need to install anything to be able to run load tests. You just need to configure a user journey.

<!--
## Adding events markers to your graphs

To help you analyze Experience Monitoring data and explain changes in behavior, you can [add event markers to graphs manually (or automatically via the API)](./monitor-production-events.md). The typical use case is deploying a new version of your site.
-->