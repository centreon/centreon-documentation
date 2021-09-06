---
id: splunk-events-apiv2
title: Splunk Events
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
wget -O /usr/share/centreon-broker/lua/splunk-events-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/centreon-certified/splunk/splunk-events-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/splunk-events-apiv2.lua
```

## Configuration

To configure your stream connector, you must head over the **configuration --> poller --> broker configuration** menu. Select the **central-broker-master** configuration and click the output tab when the broker form is displayed.

Add a new **generic - stream connector** output and set the following fields as follow:

| Field           | Value                                                  |
| --------------- | ------------------------------------------------------ |
| Name            | Splunk events                                          |
| Path            | /usr/share/centreon-broker/lua/splunk-events-apiv2.lua |
| Filter category | Neb                                                    |

### Add Splunk mandatory parameters

Each stream connector has a set of mandatory parameters. To add them you must click on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name            | Value explanation                                                  | Value exemple                                           |
| ------ | --------------- | ------------------------------------------------------------------ | ------------------------------------------------------- |
| string | http_server_url | the url of the Splunk service collector                            | `https://mysplunk.centreon.com:8088/services/collector` |
| string | splunk_token    | Token to use the event collector api                               |                                                         |

### Add Splunk optional parameters

Some stream connector has a set of optional parameters dedicated to the Software that are associated with. To add them you mus click on the **+Add a new entry** button located **below** the **filter category** input

| Type   | Name              | Value explanation                                      | default value                              |
| ------ | ----------------- | ------------------------------------------------------ | ------------------------------------------ |
| string | splunk_sourcetype | Identifies the data structure of the event             | _json                                      |
| string | splunk_host       | Name or address of the server that generated the event | Central                                    |
| string | splunk_index    | Index where the events are stored                                  |                                                         |
| string | splunk_source   | source of the http event collector. like `http:<name_of_index>` |                                                         |
| string | logfile           | the file in which logs are written                     | /var/log/centreon-broker/splunk-events.log |
| number | log_level         | logging level from 1 (errors) to 3 (debug)             | 1                                          |

### Standard parameters

All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules.

All those parameters are documented **[here](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters)**

Some of them are overridden by this stream connector.

| Type   | Name                | Default value for the stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Splunk REST API.

To use this feature you must add the following parameter in your stream connector configuration

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Event format

This stream connector will send event with the following format

### service_status event

```json
{
  'sourcetype': '_json',
  'source': 'http:my_index',
  'index': 'my_index',
  'host': 'Central',
  'time': 1630590530,
  'event': {
    'event_type': 'service',
    'state': 2,
    'state_type': 1,
    'hostname': 'my_host',
    'service_description': 'my_service',
    'output': 'Critical: it is on fire'
  }
}
```

### host_status event

```json
{
  'sourcetype': '_json',
  'source': 'http:my_index',
  'index': 'my_index',
  'host': 'Central',
  'time': 1630590530,
  'event': {
    'event_type': 'host',
    'state': 1,
    'state_type': 1,
    'hostname': 'my_host',
    'output': 'Critical: it is on fire'
  }
}
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customisable. It also allows you to handle events type that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter

| Type   | Name        | Value                                          |
| ------ | ----------- | ---------------------------------------------- |
| string | format_file | /etc/centreon-broker/splunk-events-format.json |

> The event format configuration file must be readable by the centreon-broker user

To learn more about custom event format and templating file, head over the following **[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**

## Curl commands

Here is the list of all the curl commands that are used by the stream connector

### Send events

```shell
curl -X POST -H 'content-type: application/json' -H 'authorization: Splunk <splunk_token>' '<http_server_url>' -d "{'sourcetype': '<splunk_sourcetype>','source': '<splunk_source>','index': '<splunk_index>','host': '<splunk_host>','time': <epoch_timestamp>,'event': {'event_type': 'host','state': 1,'state_type': 1,'hostname':'my_host','output': 'Critical: it is on fire'}}"
```

 You must replace all the *`<xxxx>`* inside the above command with their appropriate value. *<splunk_sourcetype>* may become *_json*
