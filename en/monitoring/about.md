---
id: about
title: Basic principles of monitoring
---

Here are a few basic Centreon concepts:

* A [**host**](basic-objects/hosts-create.html) is any device that has an IP address and that one wishes to monitor. For example, a physical server, a
  virtual machine, a temperature probe, an IP camera, a printer or a storage space.
* A [**service**](basic-objects/services-create.html) is a check point, or indicator, to be monitored on a host. This can be the CPU usage rate, temperature,
  motion detection, bandwidth usage rate, disk I/O, and so on.
* In order to collect each indicator value, monitoring **plugins** are used which are periodically executed by a
  collection engine called **Centreon Engine**.
* To be executed, a plugin needs a set of arguments that define, for example, which host to connect to or through which protocol.
  The plugin and its associated arguments form a [**command**](basic-objects/commands.html).

For example, to monitor a host with Centreon is to configure all the commands needed to measure the desired indicators,
and then [deploy that configuration](monitoring-servers/deploying-a-configuration.html) to the collection engine so that these commands are run periodically.

Nevertheless, to drastically simplify the configuration, we will rely on monitoring templates:

* A [**host template**](basic-objects/hosts-templates.html) defines the configuration of the indicators for a given type of equipment.
* It relies on [**service templates**](basic-objects/services-templates.html) that define the configuration of the commands needed to collect these indicators.
* Centreon provides downloadable [**Plugins Packs**](pluginpacks.html) to install on its monitoring platform: each Plugin Pack includes host
  and services templates to configure the monitoring of a particular device in a few clicks.