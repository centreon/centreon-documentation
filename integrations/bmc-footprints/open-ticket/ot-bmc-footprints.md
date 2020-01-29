# BMC Footprints Open ticket connector

## Table of contents
1. [How it works] (#how-it-works)
2. [Compatibility] (#compatibility)
3. [Requirements] (#requirements)
4. [Possibilities] (#possibilities)

## How it works <a name="how-it-works"></a>
BMC Footprints open-tickets provider uses the BMC Footprints SOAP API to open incidents about your monitoring alerts.

![architecture](img/ot-bmc-footprint-architecture.png)

## Compatibility <a name="compatibility"></a>
This integration is (at least) compatible with the following BMC Footprints versions:

- 11.x

## Requirements
Before going any further, make sure that you correctly setup [centreon-open-ticket](https://documentation.centreon.com/docs/centreon-open-tickets/en/latest/installation/index.html)
into your Centreon instance

Our provider requires the following parameters:

| Parameter | Example of value |
| --------- | ---------------- |
| Address | 10.11.12.13 |
| Webservice Path | /MRcgi/MRWebServices.pl |
| Action | /MRWebServices |
| Username | centreon |
| Password | MyPassword |
| Timeout | 60 |

## Possibilities <a name="possibilities"></a>
As of now, the provider is able to open a ticket
