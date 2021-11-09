---
id: about
title: Basic principles of monitoring
---

Here are a few basic Centreon concepts:

* A [**host**](basic-objects/hosts-create) is any device that has an IP address and that one wishes to monitor. For example, a physical server, a
  virtual machine, a temperature probe, an IP camera, a printer or a storage space.
* A [**service**](basic-objects/services-create) is a check point, or indicator, to be monitored on a host. This can be the CPU usage rate, temperature,
  motion detection, bandwidth usage rate, disk I/O, and so on.
* In order to collect each indicator value, monitoring **plugins** are used which are periodically executed by a
  collection engine called **Centreon Engine**.
* To be executed, a plugin needs a set of arguments that define, for example, which host to connect to or through which protocol.
  The plugin and its associated arguments form a [**command**](basic-objects/commands).

For example, to monitor a host with Centreon is to configure all the commands needed to measure the desired indicators,
and then [deploy that configuration](monitoring-servers/deploying-a-configuration) to the collection engine so that these commands are run periodically.

Once hosts and services are monitored, they have a [status](../alerts-notifications/concepts) in Centreon (e.g. **OK**, **Warning**, **Critical**...). You can keep track of any changes using the [Resources Status](../alerts-notifications/resources-status) page.

If a problem occurs (not-OK/not-UP status), [contacts](basic-objects/contacts) will be able to receive [notifications](../alerts-notifications/notif-configuration), within set [time periods](basic-objects/timeperiods).

In Centreon, monitoring is made easy by the following elements:

- [Host templates](basic-objects/hosts-templates) and [service templates](basic-objects/services-templates), that allow you to define default values so as to speed up the creation of these objects.

- [Plugin Packs](pluginpacks), that provide ready-to-use host and service templates. These greatly simplify the configuration of hosts and services: for instance, all you have to do is to apply Plugin Pack templates to a host for it to be monitored.

- The [autodiscovery feature for hosts and services](discovery/introduction), that allows you to get a list of new hosts and services and to add them automatically to the list of monitored resources.
