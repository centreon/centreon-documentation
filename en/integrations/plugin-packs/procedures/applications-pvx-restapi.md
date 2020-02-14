---
id: applications-pvx-restapi
title: PVX
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | May 13 2019 |

## Prerequisites

### PVX version

Plugin requires PVX version 5.1.1 minimum.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Pvx-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                              |
| :---------------------- | :--------------------------------- |
| Host name               | *Name of the host*                 |
| Alias                   | *Host description*                 |
| IP                      | *Host IP Address*                  |
| Monitored from          | *Monitoring Poller to use*         |
| Host Multiple Templates | App-Pvx-Application-Restapi-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro          | Description                      | Default value |
| :------------- | :------------------------------- | :------------ |
| PVXCUSTOMMODE  | Mode used by plugin              | api           |
| PVXAPIHOSTNAME | Hostname of the PVX API instance |               |
| PVXAPIURLPATH  | Path to the PVX API              | /api          |
| PVXAPIPORT     | Port of the PVX API instance     | 443           |
| PVXAPIPROTO    | Protocol used by the PVX API     | http          |
| PVXAPIKEY      | Key to access PVX API            |               |

Click on the *Save* button.

### Other host templates

The "App-Pvx-Application-Restapi-custom" host template will add services that
will retrieve metrics about traffic, connection, user experience and http hits
by application.

It's possible to have the same metrics by other 'instances' like layer, server
IP, client OS. For this, new host templates can be created and linked to
existing service templates, or newly created ones, where the instance macro is
set to instance name.

Examples of existing service templates :

| Name                              | Alias                                             | Instance macro value |
| :-------------------------------- | :------------------------------------------------ | :------------------- |
| Network-Traffic-Layer             | App-Pvx-Network-Traffic-Layer-Restapi             | layer                |
| Network-User-Experience-Server-Ip | App-Pvx-Network-User-Experience-Server-Ip-Restapi | server.ip            |
| Http-Hits-Server-Ip               | App-Pvx-Http-Hits-Server-Ip-Restapi               | server.ip            |

### Create an API key

An API key has to be created to access the API. The key will never expire.

(From the official documentation at
<http://docs.performancevision.com/api_use.html>)

#### Create a session ID :

First, a session ID needs to be requested.

    (From the central or poller)
    
    # curl -k "https://<pvxapihost>/api/login?user=<user>&password=<password>"

Replace pvxapihost, user and password by your values.

The command line should return:

    {
        "type": "result",
        "result": "session:91554086-842b-4b73-9028-c51d20d91b94"
    }

The session ID is "session:91554086-842b-4b73-9028-c51d20d91b94".

#### Create an API key :

With the session ID, request an API key.

    (From the central or poller)
    
    # curl -k "https://<pvxapihost>/api/create-api-key?name=<keyname>&_session=session:91554086-842b-4b73-9028-c51d20d91b94"

Replace pvxapihost by your value, and use the session ID for the "\_session"
argument.

The command line should return:

    {
        "type": "result",
        "result": "secret:e40b1cc6-f629-43a4-8be6-14a9c9f036e0"
    }

The API key is "secret:e40b1cc6-f629-43a4-8be6-14a9c9f036e0".

