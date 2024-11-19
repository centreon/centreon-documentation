---
id: sc-logstash-events
title: Logstash Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Hello community! We're looking for a contributor to help us translate this page into French. If it's you, let us know and ping us on [our community platform The Watch](https://thewatch.centreon.com/).

## Before starting

- You can send events from a central server, a remote server or a poller.
- By default, this stream connector sends **host_status** and **service_status** events. The event format is shown **[there](#event-format)**.
- Aformentioned events are fired each time a host or a service is checked. Various parameters let you filter out events.

## Installation

Connectez vous en tant que `root` sur le serveur Centreon central en utilisant votre client SSH préféré.

Lancer la commande adaptée à votre système :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-logstash
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-logstash
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-logstash
```

</TabItem>
</Tabs>

## Configuration

To configure your stream connector, you must **head over** the **Configuration --> Poller --> Broker configuration** menu. **Select** the **central-broker-master** configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and **click** the **Output tab** when the broker form is displayed.

**Add** a new **generic - stream connector** output and **set** the following fields as follow:

| Field           | Value                                                    |
| --------------- | -------------------------------------------------------- |
| Name            | Logstash events                                          |
| Path            | /usr/share/centreon-broker/lua/logstash-events-apiv2.lua |
| Filter category | Neb                                                      |

### Add Logstash mandatory parameters

Each stream connector has a set of mandatory parameters. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name            | Value explanation                     | Value exemple            |
| ------ | --------------- | ------------------------------------- | ------------------------ |
| string | http_server_url | the url of the logstash http plugin   | `https:/mylogstash.test` |
| number | port            | the port of your logstash http plugin | `8443`                   |

### Add Logstash optional parameters

Some stream connectors have a set of optional parameters dedicated to the Software that they are associated with. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name      | Value explanation                                                                              | default value                                |
| ------ | --------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| string | username  | the username if your are using https with basic auth for your logstash http plugin             |                                              |
| string | password  | the password of your user if you are using https with basic auth for your logstash http plugin |                                              |
| string | logfile   | the file in which logs are written                                                             | /var/log/centreon-broker/logstash-events.log |
| number | log_level | logging level from 1 (errors) to 3 (debug)                                                     | 1                                            |

### Standard parameters

All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules.

All those parameters are documented **[here](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters)**.

Some of them are overridden by this stream connector.

| Type   | Name                | Default value for the stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Logstash HTTP plugin.

To use this feature you must add the following parameter in your stream connector configuration.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Event format

This stream connector will send event with the following format.

### service_status event

```json
{
  "event_timestamp": 1653434348,
  "hostname": "my-host",
  "output": "[CRITICAL] low power",
  "service": "my-service",
  "state": "CRITICAL",
  "title": "CRITICAL: my-host, my-service"
}
```

### host_status event

```json
{
  "event_timestamp": 1653434348,
  "hostname": "my-host",
  "output": "[DOWN] server is down",
  "state": "DOWN",
  "title": "DOWN: my-host"
}
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customisable. It also allows you to handle events type that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                            |
| ------ | ----------- | ------------------------------------------------ |
| string | format_file | /etc/centreon-broker/logstash-events-format.json |

> The event format configuration file must be readable by the centreon-broker user

To learn more about custom event format and templating file, head over the following **[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands

Here is the list of all the curl commands that are used by the stream connector.

### Send events

```shell
curl -X PUT -H "accept: application/json" curl -X PUT 'http://<logstash_address>:\<logstash_port\>' -d '{"event_timestamp": 1653434348,"hostname": "my-host","output": "[DOWN] server is down","state": "DOWN","title": "DOWN: my-host"}'
```

You must replace all the *`<xxxx>`* inside the above command with their appropriate value. *\<logstash_port\>* may become *8080*.
