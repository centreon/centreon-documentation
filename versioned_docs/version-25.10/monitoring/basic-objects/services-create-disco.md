---
id: services-create-disco
title: Creating services automatically
---

Services can be created automatically in several ways:

- When you [create a host manually](hosts.md) using a [Monitoring Connector](../pluginpacks.md), and select **Create Services linked to the Template too**, the services for the host will be created automatically.

- Using the [services discovery feature](../discovery/services-discovery.md) to detect services and create them automatically in Centreon.

    - Autodiscovery is done using [Monitoring Connectors](../pluginpacks.md).

    - The autodiscovery feature requires a valid [license](../../administration/licenses.md).