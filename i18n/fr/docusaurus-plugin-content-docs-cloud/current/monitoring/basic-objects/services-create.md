---
id: services-create
title: Monitoring a service
---

A service is a check point, or indicator, to be monitored on a host, e.g.: percentage of partition used on a server, ink level in a printer.

To see the list of monitored services, go to **Configuration > Services > Services by host**.

You can:

- [create a service manually](services)
- [discover services automatically](../discovery/services-discovery).

## Monitoring a service

1. Create a service:

    - Use the [host autodiscovery feature](../discovery/hosts-discovery): the corresponding services will be created automatically.

    - [Create a host manually](hosts) using a [Plugin Pack](../pluginpacks), and select **Create Services linked to the Template too**: the services for the host will be created automatically.

    - Use the [service discovery feature](../discovery/services-discovery).

    - Create the [service manually](services) and, in the **Template** field, select a [service template](services-templates) (coming from a Plugin Pack or not).

    - Create a check [command](commands) or use an existing one, and link it to a service you have [created manually](services).

    - Create a service using <!--[the API]().-->

2. [Deploy the configuration](../monitoring-servers/deploying-a-configuration).