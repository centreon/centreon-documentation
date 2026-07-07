---
id: ot-easyvista
title: EasyVista API SOAP
---

> **SOAP** Service Manager web services are no longer maintained, so we recommend that you use the [**Rest API** version](./ot-easyvista-rest-api.md) to benefit from the latest enhancements and features.

## How it works

EasyVista open-tickets provider uses the EasyVista SOAP API to open incidents
about your monitoring alerts.

![architecture](../../assets/integrations/open-tickets/ot-easyvista-architecture.png)

## Compatibility

This integration is (at least) compatible with the following EasyVista
versions:

**To be determined**

## Requirements

You need to [configure Open Tickets](../../alerts-notifications/ticketing.md) in order for resources (hosts and services) to receive a ticket number.

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
