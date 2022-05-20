---
id: services-create
title: Monitoring a service
---

A service is a check point, or indicator, to be monitored on a host, e.g.: percentage of partition used on a server, ink level in a printer.

To see the list of monitored services, go to **Configuration > Services > Services by host**.

You can:

- [create a service manually](services.md)
- [discover services automatically](../discovery/services-discovery.md).

## Monitoring a service

1. Create a service:

    - Use the [host autodiscovery feature](../discovery/hosts-discovery.md): the corresponding services will be created automatically.

    - [Create a host manually](hosts.md) using a [Plugin Pack](../pluginpacks.md), and select **Create Services linked to the Template too**: the services for the host will be created automatically.

    - Use the [service discovery feature](../discovery/services-discovery.md).

    - Create the [service manually](services.md) and, in the **Template** field, select a [service template](services-templates.md) (coming from a Plugin Pack or not).

    - Create a check [command](commands.md) or use an existing one, and link it to a service you have [created manually](services.md).

    - Create a service using [the API](../../api/introduction.md).

2. [Deploy the configuration](../monitoring-servers/deploying-a-configuration.md).