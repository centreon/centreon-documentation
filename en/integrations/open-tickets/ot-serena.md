---
id: serena
title: Serena
---

## How it works

Serena open-tickets provider uses the Serena SOAP API to open incidents about
your monitoring alerts.

![architecture](assets/integrations/open-tickets/ot-serena-architecture.png)

## Compatibility

This integration is (at least) compatible with the following Serena versions:

**to be determined**

## Requirements

Before going any further, make sure that you correctly setup
[centreon-open-ticket](https://documentation.centreon.com/docs/centreon-open-tickets/en/latest/installation/index.html)
into your Centreon instance

Our provider requires the following parameters:

| Parameter | Example of value                                |
| --------- | ----------------------------------------------- |
| Endpoint  | <http://192.168.0.5/gsoap/gsoap_ssl.dll?XXXXXX> |
| Namespace | xxxxxxx                                         |
| Username  | centreon                                        |
| Password  | MyPassword                                      |
| Timeout   | 60                                              |

## Possibilities

As of now, the provider is able to open a ticket
