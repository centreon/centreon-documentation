---
id: applications-openweathermap-restapi
title: OpenWeatherMap
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Openweathermap-Restapi
```

### API token

A token is mandatory to access the API. More information can be found on the
official OpenWeatherMap website : <https://openweathermap.org/api>.

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                    |
| :---------------------- | :--------------------------------------- |
| Host name               | *Name of the host*                       |
| Alias                   | *Host description*                       |
| IP address / DNS        | *api.openweathermap.org*                 |
| Monitored from          | *Monitoring Poller to use*               |
| Host Multiple Templates | App-OpenWeatherMap-Restapi-custom        |
| APITOKEN                | *Token from OpenWeatherMap subscription* |

Click on the *Save* button.

### Service Macro Configuration

The following macros must be configured on the service:

Macro

Description

CITYNAME

City name (e.g London or ISO 3166 code like London,uk)

WARNINGTEMPERATURE

Set warning threshold for temperature (in Â°C)

CRITICALTEMPERATURE

Set critical threshold for temperature (in Â°C)

WARNINGHUMIDITY

Set warning threshold for humidity (in %)

CRITICALHUMIDITY

Set critical threshold for humidity (in %)

WARNINGCLOUDS

Set warning threshold for clouds (in %)

CRITICALCLOUDS

Set critical threshold for clouds (in %)

WARNINGWIND

Set warning threshold for wind (in m/s)

CRITICALWIND

Set critical threshold for wind (in m/s)

Click on the *Save* button.
