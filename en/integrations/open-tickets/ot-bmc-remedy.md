---
id: bmc-remedy
title: BMC Remedy
---

## How it works

BMC Remedy open-tickets provider uses the BMC Remedy SOAP API to open incidents
about your monitoring alerts.

![architecture](../../../assets/integrations/open-tickets/ot-bmc-remedy-architecture.png)

## Compatibility

This integration is (at least) compatible with the following BMC Remedy
versions:

**To be determined**

## Requirements

Before going any further, make sure that you correctly setup
[centreon-open-ticket](https://documentation.centreon.com/docs/centreon-open-tickets/en/latest/installation/index.html)
into your Centreon instance

Our provider requires the following parameters:

| Parameter | Example of value                                                                                      |
| --------- | ----------------------------------------------------------------------------------------------------- |
| Endpoint  | <http://192.168.0.33/arsys/services/ARService?server=XXXX&webService=HPD_IncidentInterface_Create_WS> |
| Namespace | IncidentInterface\_Create\_WS                                                                         |
| Username  | centreon                                                                                              |
| Password  | MyPassword                                                                                            |
| Timeout   | 60                                                                                                    |

## Possibilities

As of now, the provider is able to open a ticket with the following parameters

  - Urgency
  - Impact
  - Last Name
  - First Name
  - Dataset ID
  - Assigned Group
