# BMC Remedy Open ticket connector

## Table of contents
1. [How it works](#how-it-works)
2. [Compatibility](#compatibility)
3. [Requirements](#requirements)
4. [Possibilities](#possibilities)

## How it works <a name="how-it-works"></a>
BMC Remedy open-tickets provider uses the BMC Remedy SOAP API to open incidents about your monitoring alerts.

![architecture](img/ot-bmc-remedy-architecture.png)

## Compatibility <a name="compatibility"></a>
This integration is (at least) compatible with the following BMC Remedy versions:

**To be determined**

## Requirements
Before going any further, make sure that you correctly setup [centreon-open-ticket](https://documentation.centreon.com/docs/centreon-open-tickets/en/latest/installation/index.html)
into your Centreon instance

Our provider requires the following parameters:

| Parameter | Example of value |
| --------- | ---------------- |
| Endpoint | http://192.168.0.33/arsys/services/ARService?server=XXXX&webService=HPD_IncidentInterface_Create_WS |
| Namespace | IncidentInterface_Create_WS |
| Username | centreon |
| Password | MyPassword |
| Timeout | 60 |

## Possibilities <a name="possibilities"></a>
As of now, the provider is able to open a ticket with the following parameters

- Urgency
- Impact
- Last Name
- First Name
- Dataset ID
- Assigned Group
