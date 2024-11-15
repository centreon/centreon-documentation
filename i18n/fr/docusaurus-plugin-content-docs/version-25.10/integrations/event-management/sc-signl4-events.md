---
id: sc-signl4-events
title: Signl4 Events
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
dnf install centreon-stream-connector-signl4
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-signl4
```

</TabItem>

<TabItem value="Debian 12" label="Debian 12">

```shell
apt install centreon-stream-connector-signl4
```

</TabItem>
</Tabs>

## Configuration

To configure your stream connector, you must **head over** the **Configuration --> Poller --> Broker configuration** menu. **Select** the **central-broker-master** configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and **click** the **Output tab** when the broker form is displayed.

**Add** a new **generic - stream connector** output and **set** the following fields as follow:

| Field           | Value                                                  |
| --------------- | ------------------------------------------------------ |
| Name            | Signl4 events                                          |
| Path            | /usr/share/centreon-broker/lua/signl4-events-apiv2.lua |
| Filter category | Neb                                                    |

### Add Signl4 mandatory parameters

Each stream connector has a set of mandatory parameters. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name            | Value explanation               | Value exemple |
| ------ | --------------- | ------------------------------- | ------------- |
| string | team_secret     | Team secret                     | x3x[..]2c     |

### Add Signl4 optional parameters

Some stream connectors have a set of optional parameters dedicated to the Software that they are associated with. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name               | Value explanation                          | default value                                    |
| ------ | ------------------ | ------------------------------------------ | ------------------------------------------------ |
| string | server_address     | url of your Centreon serversignl4 instance | `https://connect.signl4.com`                     |
| string | x_s4_source_system | source system to display in Signl4         | Centreon                                         |
| string | logfile            | the file in which logs are written         | /var/log/centreon-broker/signl4-events-apiv2.log |
| number | log_level          | logging level from 1 (errors) to 3 (debug) | 1                                                |

### Proxy configuration

When using a proxy to connect to the Signl4 endpoint, you can use additional parameters to configure it:

| Type     | Name               | Value explanation                                     |
| -------- | ------------------ | ----------------------------------------------------- |
| string   | proxy_address      | Proxy address                                         |
| number   | proxy_port         | Proxy port (mandatory when proxy_address is set)      |
| string   | proxy_username     | Proxy username the file in which logs are written     |
| password | proxy_password     | Proxy password (mandatory when proxy_username is set) |

### Standard parameters

All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules.

All those parameters are documented **[here](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters)**.

Some of them are overridden by this stream connector.

| Type   | Name                | Default value for the stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Event bulking

This stream connector is not compatible with event bulking. Meaning that the option `max_buffer_size` can't be higher than 1

## Event format

This stream connector will send event with the following format.

### service_status event

```json
{
  "EventType": "SERVICE",
  "Date": "Fri Nov 26 11:54:29 CET 2021",
  "Host": "Highway",
  "Service": "to hell!",
  "Message": "acdc song",
  "Status": "CRITICAL",
  "Title": "Highway/to hell! is CRITICAL",
  "X-S4-SourceSystem": "Centreon",
  "X-S4-ExternalID": "HOSTALERT_666",
  "X-S4-Status": "new"
}
```

### host_status event

```json
{
  "EventType": "HOST",
  "Date": "Fri Nov 26 11:54:29 CET 2021",
  "Host": "Highway",
  "Message": "to hell!",
  "Status": "DOWN",
  "Title": "Highway is DOWN",
  "X-S4-SourceSystem": "Centreon",
  "X-S4-ExternalID": "HOSTALERT_666",
  "X-S4-Status": "new"
}
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customisable. It also allows you to handle events type that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                                   |
| ------ | ----------- | ------------------------------------------------------- |
| string | format_file | /etc/centreon-broker/lua-conf/signl4-events-format.json |

> The event format configuration file must be readable by the centreon-broker user

To learn more about custom event format and templating file, head over the following **[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands

Here is the list of all the curl commands that are used by the stream connector.

### Send events

You can trigger a signal with the following command:

```shell
curl -X POST -H 'content-type: application/json' 'https://connect.signl4.com/webhook/<team_secret>' -d '{"EventType": "HOST","Date": "Fri Nov 26 11:54:29 CET 2021","Host": "Highway","Message": "to hell!","Status": "DOWN", "Title": "Highway is DOWN", "X-S4-SourceSystem": "Centreon","X-S4-ExternalID": "HOSTALERT_666","X-S4-Status": "new"}'
```

You can then close this signal with the following command:

```shell
curl -X POST -H 'content-type: application/json' 'https://connect.signl4.com/webhook/<team_secret>' -d '{"EventType": "HOST","Date": "Fri Nov 26 12:00:00 CET 2021","Host": "Highway","Message": "to hell!","Status": "OK", "Title": "Highway is UP", "X-S4-SourceSystem": "Centreon","X-S4-ExternalID": "HOSTALERT_666","X-S4-Status": "resolved"}'
```

You must replace the `<team_secret>` inside the URL with yours. 
