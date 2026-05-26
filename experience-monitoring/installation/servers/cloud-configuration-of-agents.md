---
id: cloud-configuration-of-agents
title: Configuring our agents for the cloud
---

With the rise of cloud, managed services, IaaS and PaaS, our packages are no longer sufficient by themselves and each infrastructure uses its own orchestration processes for deploying new servers (VMs or containers).

If this applies to you, this article explains how to configure our agents using your orchestrators.

## Standard installation procedure

To understand the following steps, you can find the standard installation guide for our agent here:

[Install system agents](./install-system-agents.md)

And the installation guide for our PHP module (if you use that technology) here:

[Install the PHP / Magento / OroCommerce profiler](./install-php-magento-orocommerce-profiler.md)

## Cloud-specific considerations

When instances (VMs or containers) are deployed automatically or semi-automatically, some configuration fields must be modified or replicated for each newly created instance:

- **Token**: The identification token must be the same for all Experience Monitoring agents that belong to the same license and site. It is stored in the `/etc/quanta/agent.yml` configuration file. The token tells the agent which site the monitored data belongs to.
- **Hostid**: Also located in `/etc/quanta/agent.yml`. The hostid is a unique identifier used by Experience Monitoring to uniquely identify an instance:
    - In most cases the hostid must be different for each new instance, so your new instance `front-nginx-3` won't overwrite the data sent by `front-nginx-2`.
    - In auto-scaling scenarios you may need to preserve a stable identifier when an instance is removed and later recreated. For example, if you add a fourth front each evening at 19:00 to handle peak traffic and remove it at 21:00, you probably want to avoid seeing a new chart created every day in Experience Monitoring (and a rapidly growing list of charts). In that case you should use a unique identifier each time you remove and recreate that front so its data always appears in the same chart.
- **Hostname**: Also in `/etc/quanta/agent.yml`, this setting lets you assign a label to your instance. Unlike hostid, hostname is just a human-friendly name to make charts easier to read (for example `VM prod 006 - Varnish - 3`). You can also change it from the Experience Monitoring UI.

## Adaptation for managed/cloud services

Some cloud providers offer managed services - for example AWS provides RDS and ElastiCache for managed databases and caching. These managed services are typically provided as a black box and do not allow you to install packages on their instances.

To work around this, install an agent on another instance you control (for example a front) and have it monitor the remote managed service by pointing it at the service's IP and port.

For example, for RDS you can deploy the `quanta-agent-mysql` agent (see the standard guide) and edit the `/etc/quanta/modules.d/mysqlstat.yml` agent configuration file to specify the host and port of the managed service (IP and port).

If you use multiple ElastiCache instances or equivalents (multiple cache types and session stores), you can configure the Redis (or Varnish or Memcached) agent to target the different backends. The guide for this is here:

[Add advanced metrics](./add-advanced-metrics.md)
