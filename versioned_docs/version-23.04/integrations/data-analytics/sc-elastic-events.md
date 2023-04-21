---
id: sc-elastic-events
title: Elastic Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Before starting

- You can send events from a central server, a remote server or a poller.
- By default, this stream connector sends **host_status** and **service_status** events. The event format is shown **[there](#event-format)**.
- Aformentioned events are fired each time a host or a service is checked. Various parameters let you filter out events.

## Compatibility

Tested with Elastic >= 7.10

## Installation

Login as `root` on the Centreon central server using your favorite SSH client.

Run the command according on your system:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-elasticsearch
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-elasticsearch
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-elasticsearch
```

</TabItem>
</Tabs>

## Elastic prerequisites and configuration 

Here are the steps to prepare your 

- An index to store events sent by Centreon. You can create a *centreon_status* 
index with the following command:

```shell
curl --user elastic:centreon-es-passwd -X PUT "<elastic_proto>://<elastic_ip>:<elastic_port>/centreon_status" -H 'Content-Type: application/json' \
 -d '{"mappings":{"properties":{"host":{"type":"keyword"},"service":{"type":"keyword"}, "output":{"type":"text"},"status":{"type":"keyword"},"state":{"type":"keyword"}, "type":{"type":"keyword"},"timestamp":{"type":"date","format":"epoch_second"}}}}'
```

:warning: If you use a custom **[event format](#event-format)**, you will have to 
modify the index creation accordingly.

- A user / password with required privileges to POST data to the index.

## Centreon Configuration

### Download Elastic events stream connector

```shell
wget -O /usr/share/centreon-broker/lua/elastic-events-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/centreon-certified/elastic/elastic-events-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/elastic-events-apiv2.lua
```

## Configuration

To configure your stream connector, you must **head over** the **Configuration --> Poller --> Broker configuration** menu. **Select** the **central-broker-master** configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and **click** the **Output tab** when the broker form is displayed.

**Add** a new **generic - stream connector** output and **set** the following fields as follow:

| Field           | Value                                                   |
| --------------- | ------------------------------------------------------- |
| Name            | Elastic events                                          |
| Path            | /usr/share/centreon-broker/lua/elastic-events-apiv2.lua |
| Filter category | Neb                                                     |

### Add Elastic mandatory parameters

Each stream connector has a set of mandatory parameters. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name                    | Value explanation                       | Value exemple                                           |
| ------ | ----------------------- | --------------------------------------- | ------------------------------------------------------- |
| string | elastic_url             | the url of the Elastic stack            | `https://elastic-fqdn:9200/`                            |
| string | elastic_index_status    | Elastic target index name               | `centreon_status`                                       |
| string | elastic_username        | Elastic username                        | `a_username`                                            |
| string | elastic_password        | Elastic password                        | `a password`                                            |

### Add Elastic optional parameters

Some stream connectors have a set of optional parameters dedicated to the Software that they are associated with. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name              | Value explanation                                               | default value                                     |
| ------ | ----------------- | --------------------------------------------------------------- | ------------------------------------------------- |
| string | logfile           | the file in which logs are written                              | /var/log/centreon-broker/elastic-events-apiv2.log |
| number | log_level         | logging level from 1 (errors) to 3 (debug)                      | 1                                                 |

### Standard parameters

All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules.

All those parameters are documented **[here](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters)**.

Some of them are overridden by this stream connector.

| Type   | Name                | Default value for the stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Elastic REST API.

To use this feature you must add the following parameter in your stream connector configuration.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Event format

This stream connector will send event with the following format.

### service_status event

```json
{
    "event_type": "host",
    "status": "CRITICAL",
    "state": "2",
    "state_type": 1,
    "host": "my_host",
    "service": "a_service",
    "output": "CRITICAL: Burnin and Lootin"
}
```

### host_status event

```json
{
    "event_type": "host",
    "status": "DOWN",
    "state": "1",
    "state_type": 1,
    "host": "my_host",
    "output": "CRITICAL: No woman no cry",
    "timestamp": 1637229207
}
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customisable. It also allows you to handle events type that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                          |
| ------ | ----------- | ---------------------------------------------- |
| string | format_file | /etc/centreon-broker/elastic-events-format.json |

> The event format configuration file must be readable by the centreon-broker user

To learn more about custom event format and templating file, head over the following **[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands

Here is the list of all the curl commands that are used by the stream connector.

### Send events

```shell
curl -u elastic:centreon-es-passwd --header 'content-type: application/json'  -X POST "<elastic_url>/_bulk" --data-binary '{"index":{"_index":"<elastic_index_status>"}}
{"host":"jamaica","status":"OK","state_type":1,"state":0,"timestamp":<a_recent_timestamp>,"event_type":"service","service":"kingston","output":"OK: Everything is gonna be alright"}
'
```

You must replace all the *`<xxxx>`* inside the above command with their appropriate value.
