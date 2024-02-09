---
id: architecture
title: Architecture of Centreon Cloud
---

Your Centreon Cloud platform consists mainly of a central server provided by Centreon and pollers that you install in your infrastructure. In addition, the Centreon [CIAM](../ciam/ciam.md) module allows you to manage organizations and users, and to log in to Centreon Cloud.

![image](../assets/getting-started/infra3.png)

## Central server

* The central server is provided to you by Centreon, ready to use.
* The central server does not monitor resources in your infrastructure (the pollers do).
* The central server has a [user interface](interface.md), in which you can see the resources monitored by all pollers.
* You can reach the user interface from anywhere, using a web browser, at `<organization>.<region>.centreon.cloud`.
* The central server is hosted in the cloud.
* Centreon installs and upgrades central servers.

## One or more pollers

* Pollers monitor resources in your infrastructure. They should be in the same network as the resources they will monitor.
* Pollers do not have a user interface (you see the pollers' activity on the central server's interface).
* Pollers are part of your infrastructure, which means better security, latency and bandwidth.
* You [install your pollers](../installation/deploy-poller.md) using a simple script.
* The communication between the central and the pollers uses HTTPS.

## Centreon CIAM

* The [CIAM](../ciam/ciam.md) has a user interface that is separate from the central server's.
* Before you can use Centreon Cloud, you need to configure your organization in the CIAM, and invite your users to your platform.
