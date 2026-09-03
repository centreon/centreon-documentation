---
id: cloud-configuration-of-agents
title: Install the agent in autoscaling environments
description: Configure a unique hostid for agents in autoscaling environments
---

This page applies if your application or site is hosted on Docker or in an autoscaling environment.

With the rise of cloud, managed services, IaaS and PaaS, each infrastructure uses its own orchestration processes for deploying new servers (VMs or containers). Autoscaling environments are dynamic: machines are constantly being created and destroyed. You will need to deploy the system agent and application agents on each machine.

## How the hostid works

The use of the Experience Monitoring agent is fully compatible with containerized infrastructures, but it requires a slight variation in the installation process.

### Explanation

The **hostid** is an internal parameter that allows Experience Monitoring to uniquely identify a server. Each server must have a unique **hostid**, which is automatically configured by the installation script (using the MAC address of the first network interface without `:` characters).

However, in the case of Docker containers, the configuration prevents the installation script from finding this value. In autoscaling systems (like AWS ASG or Azure Scale Set), the image copy also duplicates the **hostid**.

### Workaround

To have a unique **hostid**, you can configure it in the **/etc/quanta/agent.yml** file via a script at container or VM startup (**bootstrap script**). You can specify a unique identifier generated at runtime (e.g., using AWS metadata or Docker environment variables) or use a unique element like the UUID value from **/proc/sys/kernel/random/uuid**.

## Adapting the standard procedure

To [install the system agent, you must follow the basic procedure](./install-system-agents.md), but make sure you manage the following parameters correctly.

When instances (VMs or containers) are deployed automatically or semi-automatically, some configuration fields must be modified or replicated for each newly created instance:

- **[Access token](../tokens.md)**: The identification token must be the same for all Experience Monitoring agents that belong to the same license and site. It is stored in the `/etc/quanta/agent.yml` configuration file. The token tells the agent which site the monitored data belongs to.
- **Hostid**: Also located in `/etc/quanta/agent.yml`. The hostid is a unique identifier used by Experience Monitoring to uniquely identify an instance:
    - For static servers, the hostid must be different for each new instance, so your new instance `front-nginx-3` won't overwrite the data sent by `front-nginx-2`.
    - In auto-scaling scenarios, you may need to preserve a stable identifier when an instance is removed and later recreated. For example, if you add a fourth front each evening at 19:00 to handle peak traffic and remove it at 21:00, you probably want to avoid seeing a new chart created every day in Experience Monitoring (and a rapidly growing list of charts). In that case you should reuse a hostid in a pool of unique identifiers each time you remove and recreate that front so its data always appears in the same chart.
- **Hostname**: Also in `/etc/quanta/agent.yml`, this setting lets you assign a label to your instance. Unlike hostid, hostname is just a human-friendly name to make charts easier to read (for example `VM prod 006 - Varnish - 3`). You can also change it from the Experience Monitoring UI.
