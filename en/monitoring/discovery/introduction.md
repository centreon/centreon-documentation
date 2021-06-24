---
id: introduction
title: Introduction
---

> Centreon Auto Discovery is a Centreon **extension** that requires a valid
> license key. To purchase one and retrieve the necessary repositories, contact
> [Centreon](mailto:sales@centreon.com).


The Auto Discovery module allows you to get a list of new hosts and services and to create them 
automatically in your Centreon platform. The discovery is done by discovery providers, that are included
within [Plugin Packs](../pluginpacks.html).

- This discovery mechanism can also be scheduled and executed automatically.

- You can also detect that resources are no longer available and automatically disable them in the configuration.

- You can link contacts to a services discovery rule, so as to notify them when any change in the configuration occurs.

## How it works

1. Create a discovery job for each type of ressource, using the corresponding [Plugin Pack](../pluginpacks.html). 
For instance, one job to discover ESX nodes and one job to discover virtual machines in a VMWare cluster.

    For services, create discovery rules: for instance, one rule to discover network interfaces and one rule
to discover disk volumes in a Linux server.

2. The discovery job or rule is performed: you get a list of all new hosts or services that match the Plugin Pack.

3. According to how you have configured the job, you either choose in the list which resources you want 
to add to your Centreon platform, or they are added automatically.
