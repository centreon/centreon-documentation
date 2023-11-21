---
id: ot-easyvista
title: EasyVista SOAP API
---

> **SOAP** Service Manager web services are no longer maintained, so we recommend that you use the **Rest API** version to benefit from the latest enhancements and features.

## How it works

EasyVista open-tickets provider uses the EasyVista SOAP API to open incidents
about your monitoring alerts.

![architecture](../../assets/integrations/open-tickets/ot-easyvista-architecture.png)

## Compatibility

This integration is (at least) compatible with the following EasyVista
versions:

**To be determined**

## Requirements

Before going any further, make sure that you correctly setup
[centreon-open-ticket](../../alerts-notifications/ticketing.md#advanced-configuration)
into your Centreon instance

Our provider requires the following parameters:

| Parameter       | Example of value          |
| --------------- | ------------------------- |
| Address         | 192.168.0.27              |
| Webservice Path | /WebService/SmoBridge.php |
| Username        | centreon                  |
| Password        | MyPassword                |
| Timeout         | 60                        |

## Possibilities

As of now, the provider is able to open a ticket with the following parameters

  - Requestor
  - Urgency
  - Severity
  - Asset
  - External reference
  - Phone
  - Recipient
  - Origin
  - CI
