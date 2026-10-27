---
id: installation-checklist
title: Experience Monitoring installation checklist
description: Requirements and IP whitelisting needed before enabling features
---

This list shows the requirements needed for Centreon Experience Monitoring's features to run properly on a given site. (Bear in mind that some features may not be included in your license.)

## [User journeys/Synthetic monitoring (STM)](../configuration/user-journey/user-journey-intro.md)

There is nothing to install because Experience Monitoring connects to your application just like any regular user.

However, depending on the security level on your site, you may need to allow our IP addresses so that your anti-bot system does not block our probes.

<details>
<summary>
**List of IP addresses to whitelist**
</summary>

Our probes can query your site on ports 80 (HTTP) and 443 (HTTPS) or use the ICMP protocol. For most publicly accessible sites no configuration is required; however, in some cases firewalls or bot protections like Imperva or reCaptcha may automatically block our visits. Make sure these IP addresses are whitelisted:

- 18.200.8.204
- 34.241.126.134
- 34.242.201.38
- 34.243.127.23
- 34.248.113.181
- 34.250.75.1
- 34.252.162.102
- 34.255.79.251
- 52.17.157.120
- 52.18.157.52
- 52.19.60.226
- 52.30.194.126
- 52.31.137.223
- 52.48.148.3
- 52.48.151.164
- 52.50.31.122
- 52.51.174.216
- 52.208.14.10
- 52.209.27.6
- 52.210.233.251
- 52.212.161.58
- 52.214.41.253
- 54.78.224.201
- 54.154.70.169
- 54.170.78.117
- 54.170.157.253
- 63.34.122.21
- 63.34.67.195
- 99.81.201.50
- 176.34.232.22
- 185.48.122.159

</details>

## [Real User Monitoring (RUM)](../rum/rum-intro.md)

Real User Monitoring installs like any marketing tag: by inserting a JavaScript tag into your site's HEAD element. For the full procedure and installation instructions, see [Setting up RUM](./real-user-monitoring-installation.md).

## [Digital sobriety](../digital-sobriety/digital-sobriety-concepts.md)

Digital sobriety scores are calculated from STM and RUM data. If STM and RUM are properly installed and configured, no additional installation is required.

## [Business data (Google Analytics/Matomo)](../configuration/configure-google-analytics.md)

To correlate your business data with other Experience Monitoring data, you need to [link your Google Analytics or Matomo account to Experience Monitoring](../configuration/configure-google-analytics.md).

In the **Business data** page:

* The **Journey and revenues** tab contains data only if you have configured a [user journey](#user-journeyssynthetic-monitoring-stm).

* The **Infrastructure cost/click** tab contains data only if you have configured an agent collecting [system data](#system-data-host-server-health).

## [System data (host server health)](../installation/servers/install-system-agents.md)

To monitor the health of your host server, you need to install a system agent on it. Additional modules can be added depending on the level of detail you need or your license allows.

* [Install the system agent](./servers/install-system-agents.md) to retrieve basic information about your server.
* After the agent is installed, you can install additional modules:

   * If your application runs on Apache, MySQL, Varnish (...), [install a dedicated agent](./servers/add-advanced-metrics.md) to collect data from those services.
   * If you are using a PHP application (e.g. Magento or OroCommerce), [install the PHP profiler](./servers/install-php-magento-orocommerce-profiler.md).

## [Network performance](../performance-analysis/network-tab-indicators.md)

You don't need to do anything - data appears automatically on the **Network data** page.

## [Load tests](../how-to-articles/performing-load-tests.md)

To be able to run load tests, you just need to configure a user journey. You don't need to install anything extra.
