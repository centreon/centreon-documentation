---
id: installation-checklist
title: Experience Monitoring Installation checklist
---

This list covers the requirements to ensure proper operation of Experience Monitoring's different modules for a given site.

## User journeys

There is **nothing to install** because Experience Monitoring connects to your application just like any regular user.

However, depending on the security level on your site, you may need to allow our IP addresses so that your anti-bot system does not block our probes. If that's the case, you'll find the procedure here:

[Experience Monitoring IP addresses](./experience-monitoring-ip-addresses.md)

## Real User Monitoring

Real User Monitoring installs like any marketing tag: by inserting a JavaScript tag. For the full procedure and installation instructions, see:

[Install Real User Monitoring](./real-user-monitoring-installation.md)

## System agent

Experience Monitoring's system functionality requires at minimum the installation of system agents, then adding modules depending on the level of detail required or allowed by your license.

### Minimal installation

To install the system agents, follow the detailed procedure here:

[Install system agents](./servers/install-system-agents.md)

### Installation for advanced metrics

After the agent is installed, you can install additional modules:

- Application agents for Apache, MySQL, Varnish, … to obtain information specific to those services:
    
    [Add advanced metrics](./servers/add-advanced-metrics.md)
    
- The profiler, compatible with any PHP application such as Magento or OroCommerce:
    
    [Install the PHP / Magento / OroCommerce profiler](./servers/install-php-magento-orocommerce-profiler.md)
    

## Automatic events

You can add events manually in the UI, or automatically via the API. **This is especially useful when you deploy a new version of your site.** We recommend setting this up so changes are recorded in Experience Monitoring.

[Automatically track production deployment events](./monitor-production-events.md)
