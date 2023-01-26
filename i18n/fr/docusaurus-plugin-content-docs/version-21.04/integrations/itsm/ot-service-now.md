---
id: ot-servicenow
title: ServiceNow
---

## How it works

ServiceNow open-tickets provider uses the ServiceNow REST API to get
configuration data and open incidents about your monitoring alerts. Since it
gathers a lot of configurations objects from ServiceNow, it puts them in cache. Loging
out or waiting 10 hours will flush the cache.

![architecture](../../assets/integrations/open-tickets/ot-service-now-architecture.png)

## Compatibility

This integration is (at least) compatible with the following ServiceNow
versions:

  - Madrid
  - London
  - New York

## Requirements

Before going any further, make sure that you correctly setup
[centreon-open-ticket](../../alerts-notifications/ticketing.md)
into your Centreon instance

Our provider requires the following parameters:

| Parameter           | Example of value |
| ------------------- | ---------------- |
| Instance Name       | MyCompany        |
| OAuth Client ID     | xxxxxxxxx        |
| OAuth Client Secret | yyyyyyyy         |
| Username            | centreon         |
| Password            | MyPassword       |
| Protocol            | https            |
| Timeout             | 60               |

## Possibilities

As of now, the provider is able to retrieve the following objects from ServiceNow:

  - Categories
  - Subcategories
  - Impact
  - Urgency
  - Severity
  - Assignment Group
  - Assignment
