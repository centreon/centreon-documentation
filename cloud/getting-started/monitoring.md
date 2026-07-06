---
id: monitoring
title: How do I monitor my first host?
---

Make sure you have read [Centreon basics](concepts.md) before monitoring your first host.

## Monitoring a host

> We recommend installing the [Centreon Monitoring Agent (CMA)](../cma/cma.md), a piece of software that monitors the host it is installed on, collecting metrics and computing statuses to send to Centreon. When you install CMA on a host, you can choose to have this host automatically created in Centreon.

To monitor a host in Centreon Cloud:

1. To create a host, go to **Configuration** > **Hosts** > **Hosts** and then click **Add**.
2. Link the new host to the poller you want it to be monitored by.
3. Link the new host to the correct template provided by a [Monitoring Connector](../monitoring/pluginpacks.md).
4. [Export the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md). The host will appear in the **Monitoring > Resources status** page shortly, where you can track any changes in status.

## See also

[Tutorials](tutorials.md) are provided to help you set up your monitoring.

You may also find the following articles interesting (on our community platform The Watch):

* [Analyze the response time of your websites with precision with Curl and Centreon](https://thewatch.centreon.com/product-how-to-21/analyze-the-response-time-of-your-websites-with-precision-with-curl-and-centreon-113)
* [Monitoring Microsoft Azure with Centreon](https://thewatch.centreon.com/product-how-to-21/monitoring-microsoft-azure-with-centreon-114)
* [Monitoring Microsoft Office 365 with Centreon](https://thewatch.centreon.com/product-how-to-21/monitoring-microsoft-office-365-with-centreon-120)
