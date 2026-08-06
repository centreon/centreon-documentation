---
id: sc-pagerduty-events
title: PagerDuty Events
description: "Send host and service status events from Centreon to PagerDuty"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The PagerDuty Events stream connector allows you to send data from Centreon to PagerDuty instances.

## Before starting

- In most cases, you will want to send data from the central server. It is also possible to send it from a remote server or a poller 
(e.g. if you want to avoid the central server being a SPOF, or if you are an MSP and you install the stream connector on a poller or 
a remote server within your customer's infrastructure).
- By default, the PagerDuty Events stream connector sends data from [**host_status**](../../developer/developer-broker-mapping.md#host-status) 
and [**service_status**](../../developer/developer-broker-mapping.md#service-status) Broker events. The event format is shown **[here](#event-format)**.
- These events are sent each time a host or a service is checked. Various parameters let you [filter out events](#filtering-or-adapting-the-data-you-want-to-send-to-pagerduty).

## Installation

Perform the installation on the server that will send data to PagerDuty (central server, remote server, poller).

1. Login as `root` using your favorite SSH client.

2. Run the following command:

<Tabs groupId="os" queryString>
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

## Configuring your PagerDuty server

You may need to configure your PagerDuty server so that it can receive data from Centreon. Please refer to PagerDuty's documentation.
Make sure PagerDuty is able to receive data sent by Centreon: flows must not be blocked by PagerDuty's configuration or by a security device.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                     |
| --------------- |-----------------------------------------------------------|
| Name            | PagerDuty events                                          |
| Path            | /usr/share/centreon-broker/lua/pagerduty-events-apiv2.lua |
| Filter category | Neb                                                       |

5. To enable Centreon to connect to your PagerDuty equipment, fill in the following mandatory parameters. The fields for the first entry are already present. Click on the **+Add a new entry** link located below the **Filter category** table to add another one.

| Type   | Name            | Value explanation               | Value exemple |
| ------ |-----------------|---------------------------------|---------------|
| string | pdy_routing_key | The event API key for PagerDuty | xxxxxxxxxxxxx |

6. Fill in any optional parameters you want (using the **+Add a new entry** link):

| Type   | Name             | Value explanation                          | Default value                                 |
| ------ |------------------|--------------------------------------------|-----------------------------------------------|
| string | logfile          | The file in which logs are written         | /var/log/centreon-broker/pagerduty-events.log |
| number | log_level        | Logging level from 1 (errors) to 3 (debug) | 1                                             |
| string | pdy_centreon_url | URL of your Centreon server                | `http://set.pdy_centreon_url.parameter`       |
| string | http_server_url  | URL of the PagerDuty event endpoint        | `https://events.pagerduty.com/v2/enqueue`     |
| string | client           | The PagerDuty client                       | Centreon Stream Connector                     |
| string | pdy_source       | Source of the event                        | `nil`                                         |


7. Use the stream connector's optional parameters to [filter or adapt the data you want Centreon to send to PagerDuty](#filtering-or-adapting-the-data-you-want-to-send-to-pagerduty).

8. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Restart **centengine** on all pollers:

   ```shell
   systemctl restart centengine
   ```

PagerDuty should now receive data from Centreon. To test if it is working, see [Curl commands: testing the stream connector](#curl-commands-testing-the-stream-connector).

### Filtering or adapting the data you want to send to PagerDuty

All stream connectors have a set of [optional parameters](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters), that allow you to filter the data you will send to your PagerDuty equipment, to reformat the data, to define a proxy...

Each optional parameter has a default value, that is indicated in the corresponding documentation.

* To override the default value of a parameter, click on the **+Add a new entry** link located below the **Filter category** table to add a custom parameter. For example, if you want to only send to PagerDuty the events handled by a poller named "poller-1", enter:

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* For the PagerDuty Events stream connector, the following values always override the default values, you do not need to define them in the interface.

Some of them are overridden by this stream connector.

| Type   | Name                | Default value for the stream connector |
| ------ |---------------------|----------------------------------------|
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the PagerDuty REST API.

To use this feature you must add the following parameter in your stream connector configuration.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

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

This stream connector allows you to change the format of the event to suit your needs. 
Only the **event** part of the json is customisable. It also allows you to handle event types that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                             |
| ------ | ----------- |---------------------------------------------------|
| string | format_file | /etc/centreon-broker/pagerduty-events-format.json |

> The event format configuration file must be readable by the **centreon-broker** user.

To learn more about custom event formats and templating files, visit **[this page](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands: testing the stream connector

### Sending events

If you want to test that events are sent to PagerDuty correctly:

1. Log in to the server that you configured to send events to PagerDuty (your central server, a remote server or a poller).
2. Run the following command:

```shell
curl -X POST -H 'content-type: application/json' 'https://events.pagerduty.com/v2/enqueue' -d '{"dedup_key":<my_host>_H","payload":{"component":<my_host>","group":"<hg_1>","summary":"winter is coming","class":"host","severity":"info","timestamp":"2021-09-24T14:37:22.000","custom_details":{"Hostgroups":"<hg_1>","Hostseverity":2},"source":<my_host>"},"event_action":"trigger","client":"Centreon Stream Connector","routing_key":"dzada32193dzbe1fz51xz","links":[{"href":"<centreon_url>","text":"Link to Centreon host summary"}]}'
```

You must replace all the *`<xxxx>`* inside the above command with their appropriate value. \<my_host\>* may become *linuxServerA*.

3. Check that the event has been received by PagerDuty.
