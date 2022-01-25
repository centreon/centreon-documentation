---
id: sc-pagerduty-events
title: Pagerduty Events
---

> Hello community! We're looking for a contributor to help us to translate the content in french. If it's you, let us know and ping us on [slack](https://centreon.slack.com).

## Before starting

- You can send events from a central server, a remote server or a poller.
- By default, this stream connector sends **host_status** and **service_status** events. The event format is shown **[there](#event-format)**.
- Aformentioned events are fired each time a host or a service is checked. Various parameters let you filter out events.

## Installation

### Dependencies

<!--DOCUSAURUS_CODE_TABS-->
<!--CentOS 7/Redhat 7-->

Install **Epel** repository.

```shell
yum -y install epel-release
```

Install dependencies.

```shell
yum install luarocks make gcc lua-curl lua-devel
```

<!-- CentOS 8 -->

Install dnf plugins package.

```shell
dnf -y install dnf-plugins-core
```

Install **Powertools** repository.

```shell
dnf config-manager --set-enabled powertools
```

Install **Epel** repository.

```shell
dnf -y install epel-release
```

Install dependencies.

```shell
dnf install make gcc libcurl-devel lua-devel luarocks
```

<!-- RedHat 8 -->

Install dnf plugins package.

```shell
dnf -y install dnf-plugins-core
```

Install **Epel** repository.

```shell
dnf -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Enable **Codeready** repository.

```shell
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

Install dependencies.

```shell
dnf install make gcc libcurl-devel lua-devel luarocks
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Lua modules

<!--DOCUSAURUS_CODE_TABS-->
<!--CentOS/Redhat 7-->

Install **luatz**.

```shell
luarocks install luatz
```

Install Centreon lua modules.

```shell
luarocks install centreon-stream-connectors-lib
```

<!-- CentOS/Redhat 8-->

Install **lua-curl**.

```shell
luarocks install Lua-cURL
```

Install **luatz**.

```shell
luarocks install luatz
```

Install Centreon lua modules.

```shell
luarocks install centreon-stream-connectors-lib
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Download PagerDuty events stream connector

```shell
wget -O /usr/share/centreon-broker/lua/pagerduty-events-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/centreon-certified/pagerduty/pagerduty-events-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/pagerduty-events-apiv2.lua
```

## Configuration

To configure your stream connector, you must **head over** the **Configuration --> Poller --> Broker configuration** menu. **Select** the **central-broker-master** configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and **click** the **Output tab** when the broker form is displayed.

**Add** a new **generic - stream connector** output and **set** the following fields as follow:

| Field           | Value                                                     |
| --------------- | --------------------------------------------------------- |
| Name            | Pagerduty events                                          |
| Path            | /usr/share/centreon-broker/lua/pagerduty-events-apiv2.lua |
| Filter category | Neb                                                       |

### Add Pagerduty mandatory parameters

Each stream connector has a set of mandatory parameters. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name            | Value explanation               | Value exemple |
| ------ | --------------- | ------------------------------- | ------------- |
| string | pdy_routing_key | the event api key for pagerduty |               |

### Add Pagerduty optional parameters

Some stream connectors have a set of optional parameters dedicated to the Software that they are associated with. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name             | Value explanation                          | default value                                 |
| ------ | ---------------- | ------------------------------------------ | --------------------------------------------- |
| string | pdy_centreon_url | url of your Centreon server                | `http://set.pdy_centreon_url.parameter`       |
| string | http_server_url  | url of the Pagerduty event endpoint        | `https://events.pagerduty.com/v2/enqueue`     |
| string | client           | the Pagerduty client                       | Centreon Stream Connector                     |
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

You must replace all the *`<xxxx>`* inside the above command with their appropriate value. *<my_host>* may become *linuxServerA*.
