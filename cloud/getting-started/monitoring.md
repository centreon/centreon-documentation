---
id: monitoring
title: How do I monitor a resource?
---

To monitor a resource in Centreon Cloud:

1. Create the resource (see creating a host, creating a service, a metaservice)
2. Link the resource to the poller you want it monitored by.
3. Link the resource to the correct template provided by a [Plugin Pack](pp).
4. [Export the configuration](deploying-a-configuration). The resource appears in the [Resources status](../alerts-notifications/resources-status) page, where you can track any changes in status.

Here are a few tutorials to help you getting started with your monitoring:

* [Monitor your first Linux host](tutorials/monitor-linux-server-with-snmp)
* [Monitor your first Windows host](tutorials/monitor-windows-server-with-snmp)
* [Monitor your first Cisco router](tutorials/monitor-cisco-router-with-snmp)
* [Monitor a MySQL or MariaDB database](tutorials/mysql_tuto)
* [Monitor AWS EC2 instances using autodiscovery](tutorials/autodisco-aws)

You may also find the following articles interesting (on our community platform The Watch):

* [Analyze the response time of your websites with precision with Curl and Centreon](https://thewatch.centreon.com/product-how-to-21/analyze-the-response-time-of-your-websites-with-precision-with-curl-and-centreon-113)
* [Monitoring Microsoft Azure with Centreon](https://thewatch.centreon.com/product-how-to-21/monitoring-microsoft-azure-with-centreon-114)
* [Monitoring Microsoft Office 365 with Centreon](https://thewatch.centreon.com/product-how-to-21/monitoring-microsoft-office-365-with-centreon-120)
