# Service Now stream connector

## Table of contents
1. [How it works](#how-it-works)
2. [Compatibility](#compatibility)
3. [Requirements and configuration](#requirements-and-configuration)
4. [Additional informations](#dditional-informations)

## How it works <a name="how-it-works"></a>
Servicenow stream connector send hosts and services check results from centreon-engine  to Service Now using its REST API and Service Now Event Manager

![architecture](img/sc-service-now-architecture.png)

## Compatibility <a name="compatibility"></a>

**to be determined**

## Requirements and configuration <a name="requirements-and-configuration"></a>
Our provider requires Service Now Event Manager and the following configuration:

| Filter category |
| --------------- |
| Neb |

| Path |
| ---- |
| /usr/share/centreon-broker/lua/connector-servicenow.lua |

| Parameter | Example of value |
| --------- | ---------------- |
| Instance Name | MyCompany |
| OAuth Client ID | xxxxxxxxx |
| OAuth Client Secret | yyyyyyyy |
| Username | centreon |
| Password | MyPassword |

## Additional informations <a name="additional-informations"></a>
Here is a correspondance table to help you understand the how the data is going to be received in Service Now.

**Host event**

| Centreon | ServiceNow Event Manager field | Description |
| --- | --- | --- |
| hostname | node | The hostname |
| output | description | The Centreon Plugin output |
| last_check | time_of_event | The time of the event |
| hostname | resource | The hostname |
| status | severity | The severity level depends on the host status |

**Service event**

| Centreon | ServiceNow Event Manager field | Description |
| --- | --- | --- |
| hostname | node | The hostname |
| output | description | The Centreon Plugin output |
| last_check | time_of_event | The time of the event |
| service_description | resource | The service name |
| status | severity | The severity level depends on the host status |
