---
id: hosts-create
title: Monitoring a host
---

A host is any entity that has an IP address corresponding to a resource of the information system. E.g.: A server, network printer, a NAS server, a temperature sensor, an IP camera, etc.

The list of hosts is shown on page **Configuration > Hosts > Hosts**.

You can:
- [create hosts manually](hosts.md), using [host templates](hosts-templates.md)
- use the [hosts discovery feature](../discovery/introduction.md)

## Monitoring a host

The easiest way to monitor a host is to assign it a [template](hosts-templates.md) from a [Monitoring Connector](../pluginpacks.md) : 

1. To know the name of the template for a specific Monitoring Connector, go to **Configuration > Monitoring Connector Manager**. Search for the Monitoring Connector you want, then click on the "i" icon at the bottom left of the pack.

    ![image](../../assets/configuration/pluginpacks/doc.png)

    The documentation for the Monitoring Connector opens: it will give you the exact name of the template for this Monitoring Connector.

2. Create the host:
    - [manually](hosts.md): in the **Templates** field, select the template for the Monitoring Connector you want.
    - using the [autodiscovery](../discovery/hosts-discovery.md) module: the Monitoring Connector will be filled in automatically.

3. [Deploy](../monitoring-servers/deploying-a-configuration.md) the configuration. The host and its services are now monitored: they are 
displayed on the [Resources status](../../alerts-notifications/resources-status.md) page.