---
id: sc-pagerduty-events
title: PagerDuty Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> Hello community! We're looking for a contributor to help us translate this page into French. If it's you, let us know and ping us on [our community platform The Watch](https://thewatch.centreon.com/).

## PagerDuty + Centreon Integration Benefits

* Notify on-call system or application administrators when an alert is detected by Centreon.
* Incidents will automatically resolve in PagerDuty when Centreon detects that the check point is back to normal.
* Create high and low urgency incidents based on the state of the alert.
* Send metrics when available to give more insight about the alert.

## How it Works

* Every time a service or a host's state is checked, the event passes through Centreon Broker, which loads the Stream Connector to send state changes.
* State changes can occur in case of an anomaly detection or metrics falling out of range.
* Once the check point is back to normal, a resolve event will be sent to the PagerDuty service to resolve the alert.
* You can choose from where the stream connector is sending data. Pick the implementation which best meets your needs:

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
dnf install centreon-stream-connector-pagerduty
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-pagerduty
```

</TabItem>

<TabItem value="Debian 12" label="Debian 12">

```shell
apt install centreon-stream-connector-pagerduty
```

</TabItem>
</Tabs>

## Configuration

To configure your stream connector, you must **head over** the **Configuration --> Poller --> Broker configuration** menu. **Select** the **central-broker-master** configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and **click** the **Output tab** when the broker form is displayed.

**Add** a new **generic - stream connector** output and **set** the following fields as follow:

| Field           | Value                                                     |
| --------------- | --------------------------------------------------------- |
| Name            | PagerDuty events                                          |
| Path            | /usr/share/centreon-broker/lua/pagerduty-events-apiv2.lua |
| Filter category | Neb                                                       |

### Add PagerDuty mandatory parameters

Each stream connector has a set of mandatory parameters. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name            | Value explanation               | Value exemple |
| ------ | --------------- | ------------------------------- | ------------- |
| string | pdy_routing_key | the event api key for pagerduty |               |

### Add PagerDuty optional parameters

Some stream connectors have a set of optional parameters dedicated to the Software that they are associated with. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name             | Value explanation                          | default value                                 |
| ------ | ---------------- | ------------------------------------------ | --------------------------------------------- |
| string | pdy_centreon_url | url of your Centreon server                | `http://set.pdy_centreon_url.parameter`       |
| string | http_server_url  | url of the PagerDuty event endpoint        | `https://events.pagerduty.com/v2/enqueue`     |
| string | client           | the PagerDuty client                       | Centreon Stream Connector                     |
| string | pdy_source       | source of the event                        | `nil`                                         |
| string | logfile          | the file in which logs are written         | /var/log/centreon-broker/pagerduty-events.log |
| number | log_level        | logging level from 1 (errors) to 3 (debug) | 1                                             |

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
   "payload": {
      "summary": "my_host/my_service: it is on fire",
      "timestamp": "2021-09-24T14:37:22.000",
      "severity": "critical",
      "source": "my_host",
      "component": "my_service",
      "group": "hg_1, hg_2",
      "class": "service",
      "custom_details": {
         "Hostseverity": 5,
         "Serviceseverity": 3,
         "Hosgroups": "hg_1, hg_2",
         "Servicegroups": "sg_1, sg_2"
      },
      "routing_key": "dzajzd321dzad412",
      "event_action": "trigger",
      "dedup_key": "my_host_my_service",
      "client": "Centreon Stream Connector",
      "client_url": "https://my_super_centreon.bzh",
      "links": [
         {
            "href": "https://my_super_centreon.bzh/centreon/main.php?p=20202&o=h&host_name=my_host",
            "text": "Link to Centreon host summary"
         }
      ]
   }
}
```

### host_status event

```json
{
   "payload": {
      "summary": "my_host: it is on fire",
      "timestamp": "2021-09-24T14:37:22.000",
      "severity": "critical",
      "source": "my_host",
      "component": "my_host",
      "group": "hg_1, hg_2",
      "class": "host",
      "custom_details": {
         "Hostseverity": 5,
         "Hosgroups": "hg_1, hg_2",
      },
      "routing_key": "dzajzd321dzad412",
      "event_action": "trigger",
      "dedup_key": "my_host_H",
      "client": "Centreon Stream Connector",
      "client_url": "https://my_super_centreon.bzh",
      "links": [
         {
            "href": "https://my_super_centreon.bzh/centreon/main.php?p=20202&o=h&host_name=my_host",
            "text": "Link to Centreon host summary"
         }
      ]
   }
}
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customisable. It also allows you to handle events type that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                             |
| ------ | ----------- | ------------------------------------------------- |
| string | format_file | /etc/centreon-broker/pagerduty-events-format.json |

> The event format configuration file must be readable by the centreon-broker user

To learn more about custom event format and templating file, head over the following **[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands

Here is the list of all the curl commands that are used by the stream connector.

### Send events

```shell
curl -X POST -H 'content-type: application/json' 'https://events.pagerduty.com/v2/enqueue' -d '{"dedup_key":"<my_host>_H","payload":{"component":"<my_host>","group":"<hg_1>","summary":"winter is coming","class":"host","severity":"info","timestamp":"2021-09-24T14:37:22.000","custom_details":{"Hostgroups":"<hg_1>","Hostseverity":2},"source":"<my_host>"},"event_action":"trigger","client":"Centreon Stream Connector","routing_key":"dzada32193dzbe1fz51xz","links":[{"href":"<centreon_url>","text":"Link to Centreon host summary"}]}'
```

You must replace all the *`<xxxx>`* inside the above command with their appropriate value. *\<my_host\>* may become *linuxServerA*.
