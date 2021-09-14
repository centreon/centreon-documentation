---
id: ot-glpi
title: GLPI
---

## How it works

The Glpi provider uses the webservice plugin of Glpi to retrieve data in order
to open a ticket.

![architecture](../../assets/integrations/open-tickets/ot-glpi-rest-api-architecture.png)

## Compatibility

This connector is (at least) compatible with the following Glpi versions:

  - between 8.5 and 9.0

## Requirements

Before going any further, make sure that you correctly setup
[centreon-open-ticket](https://documentation.centreon.com/docs/centreon-open-tickets/en/latest/installation/index.html)
into your Centreon instance

Our provider requires the following parameters:

| Parameter | Example of value                     |
| --------- | ------------------------------------ |
| Address   | 192.168.0.6                          |
| Username  | centreon                             |
| Password  | MyPassword                           |
| Path      | /glpi/plugins/webservices/xmlrpc.php |
| Timeout   | 60                                   |

## Possibilities

As of now, the provider is able to retrieve the following objects from Glpi:

  - Entities
  - Itil categories
  - Groups

It will also fill the following parameters from a predefined list in Centreon.
You can extend those lists inside the provider configuration since they are
custom lists
<https://documentation.centreon.com/docs/centreon-open-tickets/en/latest/configuration_guide/index.html#advanced-configuration>

  - Urgency
  - Impact
