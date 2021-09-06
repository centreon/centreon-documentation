---
id: servicenow-events-apiv2
title: ServiceNow Event Manager 
---

## Before starting

- You can send events from a central server, a remote server or a poller.
- By default, this stream connector sends host_status and service_status events. The event format is shown **[there](#event-format)**
- Aformentioned events are fired each time a host or a service is checked. Various parameters let you filter out events.

## Installation

### Dependencies

<!--DOCUSAURUS_CODE_TABS-->
<!--CentOS 7/Redhat 7-->

Install Epel repository

```shell
yum -y install epel-release
```

Install dependencies

```shell
yum install luarocks make gcc lua-curl lua-devel
```

<!-- CentOS 8 -->

Install dnf plugins package

```shell
dnf -y install dnf-plugins-core
```

Install Powertools repository

```shell
dnf config-manager --set-enabled powertools
```

Install Epel repository

```shell
dnf -y install epel-release
```

Install dependencies

```shell
dnf install make gcc libcurl-devel luarocks
```

<!-- RedHat 8 -->

Install dnf plugins package

```shell
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Install Epel repository

```shell
dnf -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Enable Codeready repository

```shell
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

Install dependencies

```shell
dnf install make gcc libcurl-devel luarocks
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Lua modules

<!--DOCUSAURUS_CODE_TABS-->
<!--CentOS/Redhat 7-->

Install Centreon lua modules

```shell
luarocks install centreon-stream-connectors-lib
```

<!-- CentOS/Redhat 8-->

Install lua-curl

```shell
luarocks install Lua-cURL
```

Install Centreon lua modules

```shell
luarocks install centreon-stream-connectors-lib
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Download Splunk events stream connector

```shell
wget -O /usr/share/centreon-broker/lua/servicenow-events-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/centreon-certified/servicenow/servicenow-events-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/servicenow-events-apiv2.lua
```

## Configuration

To configure your stream connector, you must head over the **configuration --> poller --> broker configuration** menu. Select the **central-broker-master** configuration and click the output tab when the broker form is displayed.

Add a new **generic - stream connector** output and set the following fields as follow:

| Field           | Value                                                  |
| --------------- | ------------------------------------------------------ |
| Name            | Servicenow events                                      |
| Path            | /usr/share/centreon-broker/lua/splunk-events-apiv2.lua |
| Filter category | Neb                                                    |

### Add Service Now mandatory parameters

Each stream connector has a set of mandatory parameters. To add them you must click on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name          | Value explanation                    | Value exemple |
| ------ | ------------- | ------------------------------------ | ------------- |
| string | instance      | the name of the service now instance | MyCompany     |
| string | client_id     | The Oauth client_id                  |               |
| string | client_secret | The Oauth client_secret              |               |
| string | username      | The Oauth user                       |               |
| string | password      | The Oauth pasword                    |               |

### Add Service Now optional parameters

Some stream connector has a set of optional parameters dedicated to the Software that are associated with. To add them you mus click on the **+Add a new entry** button located **below** the **filter category** input

| Type   | Name              | Value explanation                                               | default value                              |
| ------ | ----------------- | --------------------------------------------------------------- | ------------------------------------------ |
| string | logfile           | the file in which logs are written                              | /var/log/centreon-broker/servicenow-stream-connector.log |
| number | log_level         | logging level from 1 (errors) to 3 (debug)                      | 1                                          |

### Standard parameters

All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules.

All those parameters are documented **[here](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters)**

Some of them are overridden by this stream connector.

| Type   | Name                | Default value for the stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Service Now REST API.

To use this feature you must add the following parameter in your stream connector configuration

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Event format

This stream connector will send event with the following format

### service_status event

```json
{
  'records': ['{
    'source': 'centreon',
    'event_class': 'centreon',
    'severity': 5,
    'node': 'my_host',
    'resource': 'my_service',
    'time_of_event': '2022-09-06 11:52:12',
    'description': 'CRITICAL: USB cable behaving like a water hose'
  }']
}
```

### host_status event

```json
{
  'records': ['{
    'source': 'centreon',
    'event_class': 'centreon',
    'severity': 5,
    'node': 'my_host',
    'resource': 'my_host',
    'time_of_event': '2022-09-06 11:52:12',
    'description': 'DOWN: someone plugged an UPS on another UPS to create infinite energy'
  }']
}
```

### Custom event format

You can't change the format of the event for this stream connector (the feature was created after this stream connector).

## Curl commands

Here is the list of all the curl commands that are used by the stream connector

You must replace all the *`<xxxx>`* inside the below commands with their appropriate value. *<instance>* may become *MyCompany*

### Get OAuth tokens

> if you have special characters in your password such as: & you must change them with their url encoded counterpart (%26 for &). Head over the following documentation for the **[complete list](https://www.w3schools.com/tags/ref_urlencode.ASP)**

```shell
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" 'https://<instance_name>.service-now.com/oauth_token.do?grant_type=password&client_id=<client_id>&client_secret=<client_secret>&username=<username>&password=<password>'
```

### Refresh OAuth tokens

> if you have special characters in your password such as: & you must change them with their url encoded counterpart (%26 for &). Head over the following documentation for the **[complete list](https://www.w3schools.com/tags/ref_urlencode.ASP)**

```shell
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" 'https://<instance_name>.service-now.com/oauth_token.do?refresh_token=password&client_id=<client_id>&client_secret=<client_secret>&username=<username>&password=<password>&refresh_token=<refresh_token>'
```

The *`<refresh_token>`* is obtained thanks to **[this curl](#get-oauth-tokens)**

### Send events

```shell
curl -X POST -H 'content-type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer <access_token>' 'https://<instance_name>.service-now.com/api/global/em/jsonv2' -d "{'records':['{'source': 'centreon','event_class': 'centreon','severity': 5,'node': 'my_host','resource': 'my_service','time_of_event': '2022-09-06 11:52:12','description': 'CRITICAL: USB cable behaving like a water hose'}']}"
```

The *`<access_token>`* is obtained thanks to **[this curl](#get-oauth-tokens)**
