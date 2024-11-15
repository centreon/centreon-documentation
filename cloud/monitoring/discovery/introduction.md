---
id: introduction
title: Introduction
---

The Auto Discovery module allows you to obtain a list of new hosts and services and to create them
automatically in your Centreon platform. The discovery is done by discovery providers, which are included
in [Monitoring Connectors](../pluginpacks.md).

- This discovery mechanism can also be scheduled and executed automatically. Hosts can be added and monitored without manual action.

- You can also detect that resources are no longer available and automatically disable them in the configuration.

- You can link contacts to a service discovery rule, to notify them when any change in the configuration occurs.

## How it works

1. Create a discovery job for each type of resource, using the corresponding [Monitoring Connector](../pluginpacks.md).
For instance, one job to discover ESX nodes and one job to discover virtual machines in a VMWare cluster.

  For services, create discovery rules: for instance, one rule to discover network interfaces and one rule
to discover disk volumes in a Linux server.

2. The discovery job or rule is performed: you get a list of all new hosts or services that match the Monitoring Connector.

3. According to how you have configured the job, you either choose from the list which resources you want 
to add to your Centreon platform, or they are added automatically.
