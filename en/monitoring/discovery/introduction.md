---
id: introduction
title: Introduction
---

> Centreon Auto Discovery is a Centreon **extension** that requires a valid
> license key. To purchase one and retrieve the necessary repositories, contact
> [Centreon](mailto:sales@centreon.com).

Centreon Auto Discovery is an add-on to the Enterprise Plugin Pack
functionality.

The Auto Discovery module uses the plugins to get a list of new resources to
monitor: new hosts or new services. These resources can then be configured in
Centreon using host templates or service templates.

Host Discovery Providers and Service Discovery Rules instruct Centreon how to
connect to an equipment and get the list of resources that could be monitored.
These discovery rules are included in the Plugin Packs.

For example, ESX nodes and virtual machines can be automatically discovered in a
VMware cluster. Or network interfaces and disk volumes in a Linux server.

For all hosts or services for which discovery rules are available, the Centreon
configuration user interface propose to connect to the equipment and fetch a
list of available resources with their associated template, ready to be
configured in Centreon.

This discovery mechanism can also be scheduled and automatically executed. New
automatically discovered resources may optionally automatically be configured in
Centreon.

The same discovery mechanism may apply to resources that would no longer be
available. They can be listed and optionally disabled from the configuration.

Contacts may be associated to a discovery rule to be notified when any
configuration change occurs.
