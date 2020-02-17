---
id: servicenow
title: ServiceNow
---

## How it works

Servicenow stream connector send hosts and services check results from
centreon-engine to Service Now using its REST API and Service Now Event Manager

![architecture](assets/integrations/stream-connectors/sc-service-now-architecture.png)

## Compatibility

**to be determined**

## Requirements and configuration

Our provider requires Service Now Event Manager and the following configuration:

| Filter category |
| --------------- |
| Neb             |

| Path                                                    |
| ------------------------------------------------------- |
| /usr/share/centreon-broker/lua/connector-servicenow.lua |

| Parameter           | Example of value |
| ------------------- | ---------------- |
| Instance Name       | MyCompany        |
| OAuth Client ID     | xxxxxxxxx        |
| OAuth Client Secret | yyyyyyyy         |
| Username            | centreon         |
| Password            | MyPassword       |

## Additional informations

Here is a correspondance table to help you understand the how the data is going
to be received in Service Now.

**Host event**

| Centreon    | ServiceNow Event Manager field | Description                                   |
| ----------- | ------------------------------ | --------------------------------------------- |
| hostname    | node                           | The hostname                                  |
| output      | description                    | The Centreon Plugin output                    |
| last\_check | time\_of\_event                | The time of the event                         |
| hostname    | resource                       | The hostname                                  |
| status      | severity                       | The severity level depends on the host status |

**Service event**

| Centreon             | ServiceNow Event Manager field | Description                                   |
| -------------------- | ------------------------------ | --------------------------------------------- |
| hostname             | node                           | The hostname                                  |
| output               | description                    | The Centreon Plugin output                    |
| last\_check          | time\_of\_event                | The time of the event                         |
| service\_description | resource                       | The service name                              |
| status               | severity                       | The severity level depends on the host status |
